/*:
 * @target MZ
 * @plugindesc Combine 2 tiem
 * @author jomarcenter-mjm / MJM Creative works and ideas
 *
 * @help 
 * MJMJS Plugin Series - MJM  Creative works and ideas
 * 
 * This plugin allowed users to mix 2 items into 1 as well reverse the result. Best for basic crafting
 * or puzzle based crafting.
 * 
 * instruction of use:
 * Menu
 * 
 * MJM Creative works and idea provided the plugins for free and out of our
 * good will as most of the code produced are also used in production of our titles.
 * if you want to support us. please purchase our products, and we also provide various
 * way to donate for future plugin developement.
 * 
 * MJMCWAI MAY TAKES SERIOUS LEGAL ACTION FOR ANY UNAUTORIZED RESALE OF OUR PLUGINS.
 * 
 * -----------------------------------
 * START OF CHANGE LOGS
 * -----------------------------------
 * CHANGE LOGS -----------------------
 * 
 * Version 1.0
 * General Plugin release
 * 
 * -----------------------------------
 * END OF CHANGE LOGS
 * -----------------------------------
 * @url https://jomarcentermjm.carrd.co/
 *
 * @param recipeList
 * @desc Description
 * @type struct<itemrecipe>[]
 * @default []
 * 
 * @param combineCommandName
 * @desc Name of the new command
 * @type text
 * @default Combine
 * 
 * @param instruction
 * @desc instruction on using the feature
 * @type text
 * @default "Select two items"
 * 
 * @param retainable
 * @desc Allowed the combined object to retained.
 * @type boolean
 * @default false
 * @on yes
 * @off no
 * 
 * @param reversable
 * @desc Allows the object to reverse form
 * @type boolean
 * @default false
 * @on yes
 * @off no
 * 
 * @param addToMenu
 * @desc Add the option to combine in the game's menu.
 * @type boolean
 * @default true
 * @on yes
 * @off no
 * 
* @param enabledByDefault
 * @desc Add the option to combine in the game's menu.
 * @type boolean
 * @default true
 * @on yes
 * @off no
 * 
 * @command Open Combine UI
 * @desc Open the combine UI
 * 
 * @command Toggle Combine Menu
 * @desc Enable/Disable Combine Menu feature
 * 
 * @arg EnableDisableCombineMenu
 * @desc Enable or Disable Combine Menu feature
 * @type boolean
 * @default true
 * 
 * @arg visibleCombineMenu
 * @desc Enable or Disable Combine Menu option visibility
 * @type boolean
 * @default true
 */

/*~struct~itemrecipe:
 * @param requiredRecipe
 * @desc item for mixing
 * @min 2
 * @max 2
 * @type item[]
 * @default [1,5]
 * 
 * @param resultItem
 * @desc The resulting items.
 * @type item
 * @default 1
 * 
 * @param individualReversable
 * @desc if the selected item can be reversed (requres reversable enable)
 * @type boolean
 * @default false
 * @on yes
 * @off no
 */

var MJMJS = MJMJS || {};
MJMJS.ItemCombiner = MJMJS.ItemCombiner || {};
MJMJS.ItemCombiner.parameters = PluginManager.parameters("MJMJS_ItemCombiner");
MJMJS.ItemCombiner.parameters.CombinerList = JSON.parse(MJMJS.ItemCombiner.parameters["recipeList"]);

MJMJS.ItemCombiner.parameters.combineCommandName = MJMJS.ItemCombiner.parameters["combineCommandName"];
MJMJS.ItemCombiner.parameters.retainable = eval(MJMJS.ItemCombiner.parameters["retainable"]);
MJMJS.ItemCombiner.parameters.reversable = eval(MJMJS.ItemCombiner.parameters["reversable"]);
MJMJS.ItemCombiner.parameters.activateMenu = eval(MJMJS.ItemCombiner.parameters["addToMenu"]);
MJMJS.ItemCombiner.parameters.enableByDefault = eval(MJMJS.ItemCombiner.parameters["enabledByDefault"]);

MJMJS.ItemCombiner.parameters.cashRequired = false;
MJMJS.ItemCombiner.parameters.manual = String(MJMJS.ItemCombiner.parameters["instruction"]);



//=============================================================================
// Game_Interpreter
//=============================================================================

//=============================================================================
// PluginManager
//=============================================================================
PluginManager.registerCommand('MJMJS_ItemCombiner','Open Combine UI', args =>
{
    SceneManager.push(MJMJS_Scene_ItemCombiner);
}
)

PluginManager.registerCommand('MJMJS_ItemCombiner','Toggle Combine Menu', args =>
{
    
    MJMJS.ItemCombiner.enableDisableCombiner(eval(args.EnableDisableCombineMenu));
}
)

PluginManager.registerCommand('MJMJS_ItemCombiner','Toggle Combine Menu Visibility', args =>
{
    
    MJMJS.ItemCombiner.visibleCombiner(eval(args.visibleCombineMenu));
}
)

MJMJS.ItemCombiner.enableDisableCombiner = function(set)
{
    
    $MJMJS_BasicFeatureSettings._EnableItemCombinerMenu = set;
}

MJMJS.ItemCombiner.visibleCombiner = function(set)
{
    $MJMJS_BasicFeatureSettings._combineMenuVisible = set;
}


//=============================================================================
// DataManager
//=============================================================================

//Store DataManager Information
MJMJS.ItemCombiner.DataManager = MJMJS.ItemCombiner.DataManager || {};

MJMJS.ItemCombiner.DataManager.createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function()
{
    MJMJS.ItemCombiner.DataManager.createGameObjects.call(this);
    $MJMJS_BasicFeatureSettings = new MJMJS_Game_BasicFeatureSettings();

}

MJMJS.ItemCombiner.DataManager.makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function () {
    var contents = MJMJS.ItemCombiner.DataManager.makeSaveContents.call(this);
    contents.MJMJS_BasicFeatureSettings = $MJMJS_BasicFeatureSettings;
    return contents;
}

MJMJS.ItemCombiner.DataManager.extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
    MJMJS.ItemCombiner.DataManager.extractSaveContents.call(this, contents);
    if (contents.MJMJS_BasicFeatureSettings === undefined) return;
    $MJMJS_BasicFeatureSettings = contents.MJMJS_BasicFeatureSettings;

}

var $MJMJS_BasicFeatureSettings = null;

function MJMJS_Game_BasicFeatureSettings() {
    this.initialize(...arguments);
};

MJMJS.ItemCombiner.MJMJS_Game_BasicFeatureSettings = MJMJS_Game_BasicFeatureSettings;
MJMJS_Game_BasicFeatureSettings.prototype.initialize = function()
{
    MJMJS.ItemCombiner.MJMJS_Game_BasicFeatureSettings;
    
    this._EnableItemCombinerMenu = MJMJS.ItemCombiner.parameters.activateMenu;
    this._combineMenuVisible = MJMJS.ItemCombiner.parameters.enableByDefault;
    
};

MJMJS_Game_BasicFeatureSettings.prototype.isItemCombinerMenuEnable = function()
{
    return _EnableItemCombinerMenu;
}

//=============================================================================
// Window_MenuCommand
//=============================================================================
MJMJS.ItemCombiner.Window_MenuCommand = MJMJS.ItemCombiner.Window_MenuCommand || {};
MJMJS.ItemCombiner.Window_MenuCommand.addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function () {
    MJMJS.ItemCombiner.Window_MenuCommand.addOriginalCommands.call(this);
    this.addMJMJSItemCombinerCommands();
};

Window_MenuCommand.prototype.addMJMJSItemCombinerCommands = function()
{

    
        var enabledCommand = $MJMJS_BasicFeatureSettings._EnableItemCombinerMenu;
        if ($MJMJS_BasicFeatureSettings._combineMenuVisible) {
            this.addCommand(MJMJS.ItemCombiner.parameters.combineCommandName, 'combineMenu', enabledCommand);
        }
        
}

//=============================================================================
// Scene_Menu
//=============================================================================
MJMJS.ItemCombiner.SceneMenu = MJMJS.ItemCombiner.SceneMenu || {};
MJMJS.ItemCombiner.SceneMenu.createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function () {
    MJMJS.ItemCombiner.SceneMenu.createCommandWindow.call(this);
    this._commandWindow.setHandler('combineMenu', this.combineMenu.bind(this));
};

Scene_Menu.prototype.combineMenu = function () {
    SceneManager.push(MJMJS_Scene_ItemCombiner);
};
//=============================================================================
// Game_Interpreter
//=============================================================================


//=============================================================================
// Plugin UI
//=============================================================================

//This UI show three item for Mixing
function MJMJS_Window_ItemCombiner_CombinerSelection() {
    this.initialize(...arguments);
}

MJMJS_Window_ItemCombiner_CombinerSelection.prototype = Object.create(Window_Command.prototype);
MJMJS_Window_ItemCombiner_CombinerSelection.prototype.constructor = MJMJS_Window_ItemCombiner_CombinerSelection;

MJMJS_Window_ItemCombiner_CombinerSelection.prototype.initialize = function (rect) {
    Window_Command.prototype.initialize.call(this, rect);
}

MJMJS_Window_ItemCombiner_CombinerSelection.prototype.makeCommandList = function () {
    let newItemA = "(NO ITEM)";
    let newItemB = "(NO ITEM)";

    if (MJMJS.ItemCombiner.selectedItem[0]) { newItemA = MJMJS.ItemCombiner.selectedItem[0].name; }
    if (MJMJS.ItemCombiner.selectedItem[1]) { newItemB = MJMJS.ItemCombiner.selectedItem[1].name; }
    this.addCommand(newItemA, "itemA", true);
    this.addCommand(newItemB, "itemB", true);
    let canCombine = MJMJS.ItemCombiner.selectedItem[0] && MJMJS.ItemCombiner.selectedItem[1];
    this.addCommand("Combine", "combine", canCombine);

    if (MJMJS.ItemCombiner.parameters.reversable) {
        this.addCommand("Disassemble", "itemDisassemble", true);
    }
};

//--------------------------------------------

function MJMJS_Window_ItemCombiner_CombineItem() {
    this.initialize(...arguments);
}

MJMJS_Window_ItemCombiner_CombineItem.prototype = Object.create(Window_ItemList.prototype);
MJMJS_Window_ItemCombiner_CombineItem.prototype.constructor = MJMJS_Window_ItemCombiner_CombineItem;

MJMJS_Window_ItemCombiner_CombineItem.prototype.initialize = function (rect, disassembleMode = false) {
    Window_ItemList.prototype.initialize.call(this, rect);
    this._slotId = 0;
    this._disassembleMode = disassembleMode || false;
    this.refresh();
    this.scrollTo(0, 0);
};

MJMJS_Window_ItemCombiner_CombineItem.prototype.maxCols = function () {
    return 1;
};

MJMJS_Window_ItemCombiner_CombineItem.prototype.colSpacing = function () {
    return 8;
};

MJMJS_Window_ItemCombiner_CombineItem.prototype.includes = function (item) {
    if (item === null) {
        return true;
    }
    for (let i = 0; i < MJMJS.ItemCombiner.selectedItem.length; i++) {
        if (MJMJS.ItemCombiner.selectedItem[i] === item && this._disassembleMode === false) {
            return false;
        }
    }
    return DataManager.isItem(item);
}

MJMJS_Window_ItemCombiner_CombineItem.prototype.isEnabled = function (/*item*/) {
    return true;
};

MJMJS_Window_ItemCombiner_CombineItem.prototype.playOkSound = function () {
};


//This item Show the result screen
function MJMJS_Window_ItemCombiner_FinalResult() {
    this.initialize(...arguments);
}

MJMJS_Window_ItemCombiner_FinalResult.prototype = Object.create(Window_Selectable.prototype);
MJMJS_Window_ItemCombiner_FinalResult.prototype.constructor = MJMJS_Window_ItemCombiner_FinalResult;

MJMJS_Window_ItemCombiner_FinalResult.prototype.initialize = function (rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
    this._text = "";
    this.setText("Text");
    this.refresh();
};

MJMJS_Window_ItemCombiner_FinalResult.prototype.setText = function (text) {
    if (this._text !== text) {
        this._text = text;
        this.refresh();
    }
};



//SCENES

function MJMJS_Scene_ItemCombiner() {
    this.initialize(...arguments);
}
MJMJS_Scene_ItemCombiner.prototype = Object.create(Scene_MenuBase.prototype);
MJMJS_Scene_ItemCombiner.prototype.constructor = MJMJS_Scene_ItemCombiner;

MJMJS_Scene_ItemCombiner.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
}

MJMJS_Scene_ItemCombiner.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    MJMJS.ItemCombiner.resetMixer();
    this.createHelpWindow();
    this.createSelectionWindow();
    this.createItemWindow();
    this.createItemDisassembleWindow();
    //this.createPopupWindow();
    this.createDummyWindow();
    this.updateTextToInstruction();

    //if gold useable
    if (MJMJS.ItemCombiner.parameters.cashRequired) {
        this.createGoldWindow();
    }
    this.changePopupText();
}


MJMJS_Scene_ItemCombiner.prototype.createSelectionWindow = function () {
    const rect = this.conbinerwindowRect();
    this._combineWindow = new MJMJS_Window_ItemCombiner_CombinerSelection(rect);
    this._combineWindow.setHandler("itemA", this.onSlotSelect.bind(this));
    this._combineWindow.setHandler("itemB", this.onSlotSelect.bind(this));
    this._combineWindow.setHandler("itemDisassemble", this.onDisassembleSelect.bind(this));
    this._combineWindow.setHandler("combine", this.onCombineOk.bind(this));
    this._combineWindow.setHandler("cancel", this.popScene.bind(this));
    this.addWindow(this._combineWindow);
}

MJMJS_Scene_ItemCombiner.prototype.createDummyWindow = function () {
    const rect = this.dummyWindowRect();
    this._dummyWindow = new Window_Base(rect);
    this.addWindow(this._dummyWindow);
};

MJMJS_Scene_ItemCombiner.prototype.dummyWindowRect = function () {
    const wx = this._combineWindow.width;
    const wy = this._combineWindow.y;
    const ww = Graphics.boxWidth - this._combineWindow.width;
    const wh = this.mainAreaHeight();
    return new Rectangle(wx, wy, ww, wh);
};
MJMJS_Scene_ItemCombiner.prototype.goldWindowRect = function () {
    const ww = this._combineWindow.width;
    const wh = this.calcWindowHeight(1, true);
    const wx = this._combineWindow.x;
    const wy = this._combineWindow.height + wh;
    return new Rectangle(wx, wy, ww, wh);
};

MJMJS_Scene_ItemCombiner.prototype.createGoldWindow = function () {
    const rect = this.goldWindowRect();
    this._goldWindow = new Window_Gold(rect);
    this.addWindow(this._goldWindow);
};

MJMJS_Scene_ItemCombiner.prototype.createItemWindow = function () {
    const rect = this.itemWindowRect();
    this._itemWindow = new MJMJS_Window_ItemCombiner_CombineItem(rect);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler("ok", this.onItemOk.bind(this));
    this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this));
    this._itemWindow.hide();
    this.addWindow(this._itemWindow);
}

MJMJS_Scene_ItemCombiner.prototype.createItemDisassembleWindow = function () {
    const rect = this.itemWindowRect();
    this._itemWindowDisassemble = new MJMJS_Window_ItemCombiner_CombineItem(rect, true);
    this._itemWindowDisassemble.setHelpWindow(this._helpWindow);
    this._itemWindowDisassemble.setHandler("ok", this.onDisassembleOk.bind(this));
    this._itemWindowDisassemble.setHandler("cancel", this.onDisassembleCancel.bind(this));
    this._itemWindowDisassemble.hide();
    this.addWindow(this._itemWindowDisassemble);
}

MJMJS_Scene_ItemCombiner.prototype.createPopupWindow = function () {
    const rect = this.popupWindowRect();
    this._popupWIndow = new MJMJS_Window_ItemCombiner_FinalResult(rect);
    this._itemWindow.setHandler("ok", this.onPopupClose.bind(this));
    this._itemWindow.setHandler("cancel", this.onPopupClose.bind(this));
    //this._popupWIndow.hide();
    this.addWindow(this._popupWIndow);
}

MJMJS_Scene_ItemCombiner.prototype.popupWindowRect = function () {
    const ww = Graphics.boxWidth / 1.5;
    const wh = this.calcWindowHeight(2, true);
    const wx = (Graphics.width - ww) * 0.5;
    const wy = (Graphics.boxHeight - wh) * 0.5;
    return new Rectangle(wx, wy, ww, wh);
};

MJMJS_Scene_ItemCombiner.prototype.conbinerwindowRect = function () {

    const x = 0;
    const y = this.mainAreaTop();
    const width = 250;
    const height = this.calcWindowHeight(this.generateWindowHeightValue(), true);
    return new Rectangle(x, y, width, height);
};

MJMJS_Scene_ItemCombiner.prototype.generateWindowHeightValue = function () {
    var CWHV = 3;
    if (MJMJS.ItemCombiner.parameters.reversable) {
        CWHV++;
    }
    return CWHV;
}

MJMJS_Scene_ItemCombiner.prototype.itemWindowRect = function () {
    const wx = this._combineWindow.width;
    const wy = this._combineWindow.y;
    const ww = Graphics.boxWidth - this._combineWindow.width;
    const wh = this.mainAreaHeight();
    return new Rectangle(wx, wy, ww, wh);
};

MJMJS_Scene_ItemCombiner.prototype.onItemOk = function () {
    SoundManager.playEquip();
    this.executeItemChange();
    this.hideItemWindow();
    this.updateTextToInstruction();
    this._combineWindow.refresh();
    this._itemWindow.refresh();
}
MJMJS_Scene_ItemCombiner.prototype.onCombineOk = function () {
    var combineResult = MJMJS.ItemCombiner.attemptCombine();
    this._helpWindow.setText(combineResult);
    this._combineWindow.refresh();
    this._itemWindow.refresh();
    this._combineWindow.activate();
}

MJMJS_Scene_ItemCombiner.prototype.onDisassembleOk = function () {
    this.executeItemdisassemble();
    this.hideItemDisassembleWindow();
    this._combineWindow.refresh();
    this._itemWindow.refresh();
    this._itemWindowDisassemble.refresh();
}

MJMJS_Scene_ItemCombiner.prototype.onDisassembleCancel = function () {
    this.hideItemDisassembleWindow();
    this._combineWindow.refresh();
    this._itemWindow.refresh();
    this._itemWindowDisassemble.refresh();
}

MJMJS_Scene_ItemCombiner.prototype.onItemCancel = function () {
    this._itemWindow.deselect();
    this.hideItemWindow();
    this.updateTextToInstruction();
    this._combineWindow.activate();
}

MJMJS_Scene_ItemCombiner.prototype.onSlotSelect = function () {
    this._dummyWindow.hide();
    this._itemWindow.show();
    this._itemWindow.refresh();
    this._itemWindow.activate();
    this._itemWindow.select(0);
}

MJMJS_Scene_ItemCombiner.prototype.onDisassembleSelect = function () {
    this._dummyWindow.hide();
    this._itemWindowDisassemble.show();
    this._itemWindowDisassemble.refresh();
    this._itemWindowDisassemble.activate();
    this._itemWindowDisassemble.select(0);
}


MJMJS_Scene_ItemCombiner.prototype.onPopupClose = function () {
    this._popupWindow.hide();
    this._combineWindow.activate();
    this._popupWindow.deselect();
}

MJMJS_Scene_ItemCombiner.prototype.openPopupWindow = function () {
    this._popupWindow.show();
    this._popupWindow.activate();
    this._combineWindow.deselect();
}

MJMJS_Scene_ItemCombiner.prototype.changePopupText = function () {
}

MJMJS_Scene_ItemCombiner.prototype.updateTextToInstruction = function()
{
    var instructionText = MJMJS.ItemCombiner.parameters.manual;
    this._helpWindow.setText(instructionText);
}

MJMJS_Scene_ItemCombiner.prototype.executeItemChange = function () {
    const slotId = this._combineWindow.index();

    const item = this._itemWindow.item();
    MJMJS.ItemCombiner.selectedItem[slotId] = item;
}

MJMJS_Scene_ItemCombiner.prototype.executeItemdisassemble = function () {
    const item = this._itemWindowDisassemble.item();
    MJMJS.ItemCombiner.selectedDisassembleItem[0] = item;
    
    if (MJMJS.ItemCombiner.selectedDisassembleItem[0] != null) {
        var disassembleResult = MJMJS.ItemCombiner.itemDisassembler(item);
        this._helpWindow.setText(disassembleResult);
    }
    else {
        this._helpWindow.setText("Disassemble Cancelled");
        SoundManager.playBuzzer();
    }

    this.hideItemWindow();
    this.hideItemDisassembleWindow();
    MJMJS.ItemCombiner.resetMixer();
    this._combineWindow.refresh();
    this._itemWindow.refresh();
}

MJMJS_Scene_ItemCombiner.prototype.hideItemWindow = function () {
    this._combineWindow.show();
    this._combineWindow.activate();
    this._dummyWindow.show();
    this._itemWindow.hide();
    this._itemWindow.deselect();
};

MJMJS_Scene_ItemCombiner.prototype.hideItemDisassembleWindow = function () {
    this._combineWindow.show();
    this._combineWindow.activate();
    this._dummyWindow.show();
    this._itemWindowDisassemble.hide();
    this._itemWindowDisassemble.deselect();
};

//---------------------------------------
// Item Combine Logic
//---------------------------------------
MJMJS.ItemCombiner.selectedItem = [null, null];

MJMJS.ItemCombiner.resetMixer = function () {
    for (let i = 0; i < MJMJS.ItemCombiner.selectedItem.length; i++) {
        MJMJS.ItemCombiner.selectedItem[i] = null;
    }
}


MJMJS.ItemCombiner.attemptCombine = function () {
    var result = MJMJS.ItemCombiner.itemMatched(MJMJS.ItemCombiner.selectedItem[0].id, MJMJS.ItemCombiner.selectedItem[1].id);
    if (result > -1) {
        var combineResultText = MJMJS.ItemCombiner.selectedItem[0].name + " and " + MJMJS.ItemCombiner.selectedItem[1].name + "\nhas successfully combined into " + $dataItems[result].name;
        MJMJS.ItemCombiner.correctMatch(result);
        return combineResultText;
    }
    else {
        var combineResultText = "Cannot be combined!"
        SoundManager.playBuzzer();
        return combineResultText;
    }
}
MJMJS.ItemCombiner.correctMatch = function (itemID) {
    //Subtract both item from user inventory
    if (MJMJS.ItemCombiner.parameters.retainable) {
        $gameParty.loseItem(MJMJS.ItemCombiner.selectedItem[0], 1, false)
        $gameParty.loseItem(MJMJS.ItemCombiner.selectedItem[1], 1, false)
    }
    //Gain New item based on resulting item ID
    $gameParty.gainItem($dataItems[itemID], 1, false);
    //Play OK Sound
    MJMJS.ItemCombiner.resetMixer();
    SoundManager.playUseItem();
}


MJMJS.ItemCombiner.itemMatched = function (item1, item2) {
    //convert items into array
    let forMixing = [item1, item2];
    let recipeList = MJMJS.ItemCombiner.parameters.CombinerList;
    let recipeValidity = MJMJS.ItemCombiner.listArray(recipeList, forMixing);
    return recipeValidity;
}

MJMJS.ItemCombiner.listArray = function (MainList, toCheck) {
    for (let i = 0; i < MainList.length; i++) {
        //parse list
        let recipeValidation = JSON.parse(MainList[i]);
        if (MJMJS.ItemCombiner.compareArray(recipeValidation.requiredRecipe, toCheck)) {
            return parseInt(recipeValidation.resultItem);
        }
    }
    return -1;
}

MJMJS.ItemCombiner.compareArray = function (recipeID, toCheck) {
    let parsedRID = JSON.parse(recipeID)
    parsedRID.sort();
    toCheck.sort();
    for (let i = 0; i < parsedRID.length; i++) {
        if (parseInt(parsedRID[i]) !== toCheck[i]) return false;
    }
    return true;
}

//---------------------------------------
// Item Deassembly Logic
//---------------------------------------
MJMJS.ItemCombiner.selectedDisassembleItem = [null];
MJMJS.ItemCombiner.itemDisassembler = function (item) {
    var canDisassembleItem = MJMJS.ItemCombiner.DisassembleCheck(item);
    
    if (canDisassembleItem != false) {
        MJMJS.ItemCombiner.disassemblingItem(canDisassembleItem);
        SoundManager.playUseItem();
        return "Item Disassembled";
    }
    else {
        return "Cannot be disassemble";
    }

}


MJMJS.ItemCombiner.DisassembleCheck = function (item) {
    let recipeList = MJMJS.ItemCombiner.parameters.CombinerList;
    
    for (let i = 0; i < recipeList.length; i++) {
        const toCheck = JSON.parse(recipeList[i]);
        if (toCheck.resultItem == item.id && toCheck.individualReversable) {
            
            var toRevertRaw = JSON.parse(toCheck.requiredRecipe);
            var toRevert = [];
            
            for (let i = 0; i < toRevertRaw.length; i++) {
                toRevert.push(parseInt(toRevertRaw[i]));
            }
            return toRevert;
        }
        else {
            return false;
        }
    }
}

MJMJS.ItemCombiner.disassemblingItem = function (restoreList) {
    
    
    $gameParty.loseItem(MJMJS.ItemCombiner.selectedDisassembleItem[0], 1, false)
    for (let i = 0; i < restoreList.length; i++) {
        $gameParty.gainItem($dataItems[restoreList[i]], 1, false);
    }
}
//END OF CODE 