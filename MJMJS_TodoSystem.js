/*:
 * @target MZ
 * @plugindesc This plugin create a todo list system
 * @author Author
 * 
 * @help
 * 
 * What am I supposed to do? oh yeah X,Y,Z.
 * 
 * Donate to keep the train running: https://ko-fi.com/jomarcentermjm
 * 
 * 
 * Plugin Command:
 * 
 * MJM Creative works and idea provided the plugins for free and out of our
 * good will as most of the code produced are also used in production of our titles.
 * MJMCWAI does not obfuscation public relased codes as all of our codes are open source.
 * if you want to support us. please purchase our products, we also provide various
 * way to donate for future plugin developement.
 * 
 * MJMCWAI MAY TAKES SERIOUS LEGAL ACTION FOR ANY UNAUTORIZED RESALE OR MODIFICATION OF OUR PLUGINS.
 * 
* -----------------------------------
 * START OF CHANGE LOGS
 * -----------------------------------
 * CHANGE LOGS -----------------------
 * 
 * Version 1.0_Beta
 * General Plugin release
 * 
 * -----------------------------------
 * END OF CHANGE LOGS
 * -----------------------------------
 * 
 * @url https://jomarcentermjm.carrd.co/
 * 
 * @param addToMenu
 * @desc enable the use of this feature on main menu
 * @type boolean 
 * @default true
 * @on yes
 * @off no
 * 
 * @param hidesbuttonMenu
 * @desc enable the use of this feature on main menu
 * @type boolean 
 * @default true
 * @on visible
 * @off hidden
 * 
 * @param topBarTitleText
 * @desc the text of the completed info
 * @type string
 * @default TODO List
 * 
 * 
 * 
 * @param todoSetList
 * @desc The List of Todo
 * @type struct<TodosStuff>[]
 * 
 * @param defaultTodoID
 * @desc Default selected to do ID
 * @type number
 * @default 0
 * 
 * @param completedText
 * @desc the text of the completed info
 * @type string
 * @default [completed]
 * 
 * @param completedTextColor
 * @desc the color of the completed info
 * @type number
 * @default 1
 * 
 * @param incompletedText
 * @desc the text of the completed info
 * @type string
 * @default ""
 * 
 * @param incompletedTextColor
 * @desc the color of the completed info
 * @type number
 * @default 0
 * 
 * @param optionalText
 * @desc the text of the optional info
 * @type string
 * @default [optional]
 * 
 *
 * @command EnableDisableTodoMenu
 * @desc enable or disable the Todo System button
 *
 * @arg EnableStatus
 * @desc enable or disable the todo menu.
 * @type boolean
 * @default true
 * @on enable
 * @off disable
 * 
 * @command HideUnHideTodoMenu
 * @desc hides or unhides the Todo System button
 *
 * @arg visibleStatus
 * @desc hide or unhides the todo menu.
 * @type boolean
 * @default true
 * @on visible
 * @off hidden
 * 
 * @command open Todo UI
 * @desc Open the Todo System UI
 * 
 * 
 * @command ==By ID Number==
 * @desc 
 * 
 * @command Hide-Unhide todo
 * @desc Open the Todo System UI
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type number
 * @default 0
 * 
 * @arg hideStatus
 * @desc hide or uinhide the main Todo Item
 * @type boolean
 * @default true
 * @on hide
 * @off unhide
 * 
 * @command Hide-Unhide subtodo
 * @desc Open the Todo System UI
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type number
 * @default 0
 * 
 * @arg subIdNumber
 * @desc this is the id number of the sub todo
 * @type number
 * @default 0
 * 
 * @arg hideStatus
 * @desc hide or uinhide the main Todo Item
 * @type boolean
 * @default true
 * @on hide
 * @off unhide
 * 
 * 
 * 
 * 
 * @command Complete todo
 * @desc Complete a single Todo Item
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type number
 * @default 0
 * 
 * @arg subIdNumber
 * @desc this is the id number of the sub todo
 * @type number
 * @default 0
 * 
 *
 * 
 * @command uncomplete todo
 * @desc uncomplete a single Todo Item
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type number
 * @default 0
 * 
 * @arg subIdNumber
 * @desc this is the id number of the sub todo
 * @type number
 * @default 0
 * 
 * 
 * @command Complete todo set
 * @desc Complete an entire todo list
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type number
 * @default 0
 * 
 * 
 * @command uncomplete todo set
 * @desc uncomplete an entire todo list
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type number
 * @default 0
 *  
 * 
 * @command ==By Named ID==
 * @desc 
 * 
 * @command Hide-Unhide todo by nameID
 * @desc Open the Todo System UI
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type string
 * @default 0
 * 
 * @arg hideStatus
 * @desc hide or uinhide the main Todo Item
 * @type boolean
 * @default true
 * @on hide
 * @off unhide
 * 
 * @command Hide-Unhide subtodo by nameID
 * @desc Open the Todo System UI
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type string
 * @default 0
 * 
 * @arg subIdNumber
 * @desc this is the id number of the sub todo
 * @type string
 * @default 0
 * 
 * @arg hideStatus
 * @desc hide or uinhide the main Todo Item
 * @type boolean
 * @default true
 * @on hide
 * @off unhide
 * 
 * 
 * 
 * @command Complete todo by nameID
 * @desc Complete a single Todo Item
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type string
 * @default 0
 * 
 * @arg subIdNumber
 * @desc this is the id number of the sub todo
 * @type string
 * @default 0
 * 
 *
 * 
 * @command uncomplete todo by nameID
 * @desc uncomplete a single Todo Item
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type string
 * @default 0
 * 
 * @arg subIdNumber 
 * @desc this is the id number of the sub todo
 * @type string
 * @default 0
 * 
 * 
 * @command Complete todo set by nameID
 * @desc Complete an entire todo list
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type string
 * @default 0
 * 
 * 
 * @command uncomplete todo set by nameID
 * @desc uncomplete an entire todo list
 * 
 * @arg mainIdNumber
 * @desc this is the id number of the todo
 * @type string
 * @default 0
 */

/*~struct~TodosStuff:
 * @param todoName
 * @desc Name of the todo set
 * @type string
 * @default Default
 * 
 * @param todoDescription
 * @desc description of the todo
 * @type multiline_string
 * @default Default
 * 
* @param mainListIdentifier
 * @desc easier methods to find a certain mainlist ID
 * @type string
 * @default Default
 * 
 * @param TodoSetIsHidden
 * @desc this is the hidden status of the todo
 * @type boolean
 * @default true
 * @on yes
 * @off no
 * 
 * @param todoStatusList
 * @desc List of todos of the given set
 * @type struct<TodosStatus>[]
 */

/*~struct~TodosStatus:
 * @param todoMessage
 * @desc Todo message
 * @type multiline_string
 * @default Default
 *
 * @param subListIdentifier
 * @desc easier methods to find a certain sublist ID
 * @type string
 * @default Default
 * 
 * @param TodoIsCompleted
 * @desc this is the completionSet of the todo
 * @type boolean
 * @default false
 * @on yes
 * @off no
 * 
 * @param TodoIsHidden
 * @desc this is the hidden status of the todo
 * @type boolean
 * @default false
 * @on yes
 * @off no
 * 
 * @param TodoIsOptional
 * @desc this is the Optional status of the todo
 * @type boolean
 * @default false
 * @on yes
 * @off no
 */

//Super parser

var JSONSuperParse = function (string) {
    var temp;
    try {
        temp = JsonEx.parse(typeof string === 'object' ? JsonEx.stringify(string) : string);
    } catch (e) {
        return string;
    }
    if (typeof temp === 'object') {
        Object.keys(temp).forEach(function (key) {
            temp[key] = JSONSuperParse(temp[key]);
            if (temp[key] === '') {
                temp[key] = null;
            }
        });
    }
    return temp;
}


var MJMJS = MJMJS || {};
MJMJS.TodoSystem = MJMJS.TodoSystem || {};
MJMJS.TodoSystem.Parameters = PluginManager.parameters('MJMJS_TodoSystem');
MJMJS.TodoSystem.SuperParameters = JSONSuperParse(MJMJS.TodoSystem.Parameters);
console.log(MJMJS.TodoSystem.SuperParameters);
MJMJS.TodoSystem.Parameters.MainTodoList = MJMJS.TodoSystem.SuperParameters['todoSetList'];
console.log(MJMJS.TodoSystem.Parameters.MainTodoList);
MJMJS.TodoSystem.Parameters.activateMenu = MJMJS.TodoSystem.Parameters['addToMenu'];
MJMJS.TodoSystem.Parameters.hiddenMenu = MJMJS.TodoSystem.Parameters['hidesbuttonMenu'];
MJMJS.TodoSystem.Parameters.defaultTodo = MJMJS.TodoSystem.Parameters['defaultTodoID'];
MJMJS.TodoSystem.selectedTodo = 0;

MJMJS.TodoSystem.Parameters.completedText = MJMJS.TodoSystem.Parameters['completedText'];
MJMJS.TodoSystem.Parameters.completedTextColor = MJMJS.TodoSystem.Parameters['completedTextColor'];
MJMJS.TodoSystem.Parameters.incompletedText = MJMJS.TodoSystem.Parameters['incompletedText'];
MJMJS.TodoSystem.Parameters.incompletedTextColor = MJMJS.TodoSystem.Parameters['incompletedTextColor'];

MJMJS.TodoSystem.Parameters.optionalText = MJMJS.TodoSystem.Parameters['optionalText'];
MJMJS.TodoSystem.Parameters.topbarText = MJMJS.TodoSystem.Parameters['topBarTitleText'];


PluginManager.registerCommand('MJMJS_TodoSystem', 'open Todo UI', args => {
    SceneManager.push(MJMJS_TodoSystem_Scene_TodoListMenu);
})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Hide-Unhide todo', args => {
    MJMJS.TodoSystem.ChangeMainHiddenStatus(args.mainIdNumber, args.hideStatus);
})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Hide-Unhide subtodo', args => {
    MJMJS.TodoSystem.ChangeSubHiddenStatus(args.mainIdNumber, args.subIdNumber, args.hideStatus);
})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Complete todo', args => {
    MJMJS.TodoSystem.TodoCompleted(args.mainIdNumber, args.subIdNumber);

})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Uncomplete todo', args => {
    MJMJS.TodoSystem.TododeCompleted(args.mainIdNumber, args.subIdNumber);

})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Complete todo set', args => {
    MJMJS.TodoSystem.TodoCompletedSet(args.mainIdNumber);

})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Uncomplete todo set', args => {
    MJMJS.TodoSystem.TodoUnCompletedSet(args.mainIdNumber);
})

PluginManager.registerCommand('MJMJS_TodoSystem', 'EnableDisableTodoMenu', args => {

    MJMJS.TodoSystem.enableDisableTodo(eval(args.EnableStatus));
}
)

PluginManager.registerCommand('MJMJS_TodoSystem', 'HideUnHideTodoMenu', args => {

    MJMJS.TodoSystem.hideunhidesTodo(eval(args.visibleStatus));
}
)

MJMJS.TodoSystem.enableDisableTodo = function (set) {

    $MJMJS_TodoSystem_BasicFeatureSettings._EnableTodoSystemMenu = set;
}

MJMJS.TodoSystem.hideunhidesTodo = function (set) {

    $MJMJS_TodoSystem_BasicFeatureSettings._isHiddenSystemMenu = set;
}

//Name ID System

PluginManager.registerCommand('MJMJS_TodoSystem', 'Hide-Unhide todo by nameID', args => {
    MJMJS.TodoSystem.ChangeMainHiddenStatus(args.mainIdNumber, args.hideStatus, true);

})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Hide-Unhide subtodo by nameID', args => {
    MJMJS.TodoSystem.ChangeSubHiddenStatus(args.mainIdNumber, args.subIdNumber, args.hideStatus, true);
})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Complete todo by nameID', args => {
    MJMJS.TodoSystem.TodoCompleted(args.mainIdNumber, args.subIdNumber, true);
})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Uncomplete todo by nameID', args => {
    MJMJS.TodoSystem.TododeCompleted(args.mainIdNumber, args.subIdNumber, true);
})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Complete todo set by nameID', args => {
    MJMJS.TodoSystem.TodoCompletedSet(args.mainIdNumber, true);
})

PluginManager.registerCommand('MJMJS_TodoSystem', 'Uncomplete todo set by nameID', args => {
    MJMJS.TodoSystem.TodoUnCompletedSet(args.mainIdNumber, true);
})


//=============================================================================
// DataManager
//=============================================================================

//Store DataManager Information
MJMJS.TodoSystem.DataManager = MJMJS.TodoSystem.DataManager || {};

MJMJS.TodoSystem.DataManager.createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function () {
    MJMJS.TodoSystem.DataManager.createGameObjects.call(this);
    $MJMJS_TodoData = new MJMJS_Game_TodoData();
    $MJMJS_TodoSystem_BasicFeatureSettings = new MJMJS_TodoSystem_Game_BasicFeatureSettings();
}


MJMJS.TodoSystem.DataManager.makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function () {
    var contents = MJMJS.TodoSystem.DataManager.makeSaveContents.call(this);
    contents.MJMJSTodoSystem = $MJMJS_TodoData;
    contents.MJMJS_TodoSystem_BasicFeatureSettings = $MJMJS_TodoSystem_BasicFeatureSettings;
    return contents;
}

MJMJS.TodoSystem.DataManager.extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
    MJMJS.TodoSystem.DataManager.extractSaveContents.call(this, contents);
    if (contents.MJMJSTodoSystem === undefined) return;
    $MJMJS_TodoData = contents.MJMJSTodoSystem;

    if (contents.MJMJS_TodoSystem_BasicFeatureSettings === undefined) return;
    $MJMJS_TodoSystem_BasicFeatureSettings = contents.MJMJS_TodoSystem_BasicFeatureSettings;
}

var $MJMJS_TodoSystem_BasicFeatureSettings = null;

function MJMJS_TodoSystem_Game_BasicFeatureSettings() {
    this.initialize(...arguments);
};

MJMJS.TodoSystem.MJMJS_Game_BasicFeatureSettings = MJMJS_TodoSystem_Game_BasicFeatureSettings;
MJMJS_TodoSystem_Game_BasicFeatureSettings.prototype.initialize = function () {

    this._EnableTodoSystemMenu = MJMJS.TodoSystem.Parameters.activateMenu;
    this._isHiddenSystemMenu = MJMJS.TodoSystem.Parameters.hiddenMenu;


};

MJMJS_TodoSystem_Game_BasicFeatureSettings.prototype.isTodoSystemMenuEnable = function () {
    return this._EnableTodoSystemMenu;
}

MJMJS_TodoSystem_Game_BasicFeatureSettings.prototype.isTodoSystemMenuhidden = function () {
    return this._isHiddenSystemMenu;
}

//=============================================================================
// Savedata Content - Handler
//=============================================================================
function MJMJS_Game_TodoData() {
    this.initialize(...arguments);
};
MJMJS_Game_TodoData.prototype.initialize = function () {
    this._TodoList = [];
    this.setupStartingList();

};

MJMJS_Game_TodoData.prototype.setupStartingList = function () {
    var tempData = JSON.stringify(MJMJS.TodoSystem.Parameters.MainTodoList)
    if (tempData != null) {
        console.log(tempData);
        console.log(MJMJS.TodoSystem.Parameters.MainTodoList);
        _TodoListTemp = JSONSuperParse(tempData);
        console.log(_TodoListTemp);

        for (let i = 0; i < _TodoListTemp.length; i++) {
            if (!this._TodoList[i]) {
                this._TodoList[i] = { todoStatusList: [] };
            }

            this._TodoList[i].TodoSetIsHidden = _TodoListTemp[i].TodoSetIsHidden;

            for (let j = 0; j < _TodoListTemp[i].todoStatusList.length; j++) {
                if (!this._TodoList[i].todoStatusList[j]) {
                    this._TodoList[i].todoStatusList[j] = {};
                }
                this._TodoList[i].todoStatusList[j].TodoIsCompleted = _TodoListTemp[i].todoStatusList[j].TodoIsCompleted;
                this._TodoList[i].todoStatusList[j].TodoIsHidden = _TodoListTemp[i].todoStatusList[j].TodoIsHidden;
                this._TodoList[i].todoStatusList[j].TodoIsOptional = _TodoListTemp[i].todoStatusList[j].TodoIsOptional;
            }
        }
    }
    console.log(this._TodoList);
};

MJMJS.TodoSystem.updateMainList = function (oldData) {
    var tempData = JSON.stringify(MJMJS.TodoSystem.Parameters.MainTodoList);
    
    if (tempData != null) {
        console.log(tempData);
        console.log(MJMJS.TodoSystem.Parameters.MainTodoList);
        
        var _TodoListTemp = JSON.JSONSuperParse(tempData); 
        console.log(_TodoListTemp);

        for (let i = 0; i < _TodoListTemp.length; i++) {

            if (!oldData[i]) {
                oldData[i] = {
                    TodoSetIsHidden: _TodoListTemp[i].TodoSetIsHidden,
                    todoStatusList: []
                };
            }


            oldData[i].TodoSetIsHidden = oldData[i].TodoSetIsHidden !== undefined
                ? oldData[i].TodoSetIsHidden
                : _TodoListTemp[i].TodoSetIsHidden;

            for (let j = 0; j < _TodoListTemp[i].todoStatusList.length; j++) {
                if (!oldData[i].todoStatusList[j]) {
                    oldData[i].todoStatusList[j] = {};
                }


                oldData[i].todoStatusList[j].TodoIsCompleted = oldData[i].todoStatusList[j].TodoIsCompleted !== undefined
                    ? oldData[i].todoStatusList[j].TodoIsCompleted
                    : _TodoListTemp[i].todoStatusList[j].TodoIsCompleted;

                oldData[i].todoStatusList[j].TodoIsHidden = _TodoListTemp[i].todoStatusList[j].TodoIsHidden;
                oldData[i].todoStatusList[j].TodoIsOptional = _TodoListTemp[i].todoStatusList[j].TodoIsOptional;
            }

            if (oldData[i].todoStatusList.length > _TodoListTemp[i].todoStatusList.length) {
                oldData[i].todoStatusList.length = _TodoListTemp[i].todoStatusList.length;
            }
        }

        if (oldData.length > _TodoListTemp.length) {
            oldData.length = _TodoListTemp.length;
        }
    }

    console.log(oldData);

    return oldData;
};




//=============================================================================
// TodoData - Handler
//=============================================================================
var $MJMJS_TodoData = null;

//Gather only the necessary Data
function MJMJS_TodoSystem_TodoData() {
    this.initialize.apply(this, arguments);
};

MJMJS_TodoSystem_TodoData.prototype.constructor = MJMJS_TodoSystem_TodoData;

MJMJS_TodoSystem_TodoData.prototype.initialize = function () {
    this.todoList = [];
    this.GenerateTodoList();
}

//=============================================================================
// related to modification of $MJMJS_TodoData file
//=============================================================================
MJMJS_TodoSystem_TodoData.prototype.GenerateTodoList = function () {
    console.log($MJMJS_TodoData._TodoList);

    for (let i = 0; i < $MJMJS_TodoData._TodoList.length; i++) {
        console.log($MJMJS_TodoData._TodoList[i]);

        var todoFromTodoList = $MJMJS_TodoData._TodoList[i];
        var originalTodoContent = MJMJS.TodoSystem.Parameters.MainTodoList[i];

        originalTodoContent.TodoSetIsHidden = todoFromTodoList.TodoSetIsHidden;

        for (let j = 0; j < todoFromTodoList.todoStatusList.length; j++) {
            originalTodoContent.todoStatusList[j].TodoIsCompleted = todoFromTodoList.todoStatusList[j].TodoIsCompleted;
            originalTodoContent.todoStatusList[j].TodoIsHidden = todoFromTodoList.todoStatusList[j].TodoIsHidden;
            originalTodoContent.todoStatusList[j].TodoIsOptional = todoFromTodoList.todoStatusList[j].TodoIsOptional;
        }

        if (!todoFromTodoList.TodoSetIsHidden) {
            this.todoList.push(originalTodoContent);
        }
    }

}


MJMJS_TansitRoute_TransitLocationData.prototype.GetTodoSetID = function (TodoSetID) {

    return MJMJS.TodoSystem.Parameters.MainTodoList[TodoSetID];
}

MJMJS_TodoSystem_TodoData.prototype.GetTodoSetIDbyName = function (nameofset) {
    for (let i = 0; i < MJMJS.TodoSystem.Parameters.MainTodoList.length; i++) {

        if (MJMJS.TodoSystem.Parameters.MainTodoList[i].mainListIdentifier == nameofset) {
            return i;
        }
    }
    return null;
}

MJMJS_TodoSystem_TodoData.prototype.GetTodoSubIDbyName = function (mainsetID, progressNameID) {
    for (let i = 0; i < MJMJS.TodoSystem.Parameters.MainTodoList[mainsetID].todoStatusList.length; i++) {

        if (MJMJS.TodoSystem.Parameters.MainTodoList[mainsetID].todoStatusList[i].subListIdentifier == progressNameID) {
            return i;
        }
    }
    return null;
}


//--------------------------------------------------------------------
//Window
//--------------------------------------------------------------------
//Window - Todo List

function MJMJS_TodoSystem_Window_TodoSetList() {
    this.initialize(...arguments);
}

MJMJS_TodoSystem_Window_TodoSetList.prototype = Object.create(Window_Command.prototype);
MJMJS_TodoSystem_Window_TodoSetList.prototype.constructor = MJMJS_TodoSystem_Window_TodoSetList;

MJMJS_TodoSystem_Window_TodoSetList.prototype.initialize = function (todoList, rect) {
    Window_ItemList.prototype.initialize.call(this, rect);
    this._TodoList = todoList;
    console.log(this._TodoList);

    this.refresh();
    this.scrollTo(0, 0);
}

MJMJS_TodoSystem_Window_TodoSetList.prototype.maxCols = function () {
    return 1;
};

MJMJS_TodoSystem_Window_TodoSetList.prototype.colSpacing = function () {
    return 8;
};

MJMJS_TodoSystem_Window_TodoSetList.prototype.makeCommandList = function () {
    console.log("TODOSET " + this._TodoList.todoList[0].todoName);
    for (let i = 0; i < this._TodoList.todoList.length; i++) {
        console.log("TODOSET " + this._TodoList.todoList[i].todoName);
        this.addCommand(this._TodoList.todoList[i].todoName, this._TodoList.todoList[i].todoName, true);

    }

}
//
//Window - Todo TopBar
//
function MJMJS_TodoSystem_Window_TodoTopBar() {
    this.initialize(...arguments);
}
MJMJS_TodoSystem_Window_TodoTopBar.prototype = Object.create(Window_Selectable.prototype);
MJMJS_TodoSystem_Window_TodoTopBar.prototype.constructor = MJMJS_TodoSystem_Window_TodoTopBar;

MJMJS_TodoSystem_Window_TodoTopBar.prototype.initialize = function (rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
    this._text = MJMJS.TodoSystem.Parameters.topbarText;
    this.refresh();
}

MJMJS_TodoSystem_Window_TodoTopBar.prototype.refresh = function () {
    this.contents.clear();
    const width = this.width;
    const textWidth = this.textSizeEx(this._text).width;
    this.drawTextEx(this._text, Math.floor((width - textWidth) / 2), 0, width);
}
//
//Window - Todo Info
//
function MJMJS_TodoSystem_Window_TodoListInfo() {
    this.initialize(...arguments);
}
MJMJS_TodoSystem_Window_TodoListInfo.prototype = Object.create(Window_Selectable.prototype);
MJMJS_TodoSystem_Window_TodoListInfo.prototype.constructor = MJMJS_TodoSystem_Window_TodoListInfo;

MJMJS_TodoSystem_Window_TodoListInfo.prototype.initialize = function (rect) {
    Window_Selectable.prototype.initialize.call(this, rect);

}

MJMJS_TodoSystem_Window_TodoListInfo.prototype.setInformation = function (todoListinformation) {
    if (todoListinformation != null) {
        this.setText(todoListinformation);
        this.refresh();
    }
}

MJMJS_TodoSystem_Window_TodoListInfo.prototype.refresh = function () {
    this.contents.clear();
    const width = this.width;
    this.drawTextEx(this._text, 0, 0, width);
}

MJMJS_TodoSystem_Window_TodoListInfo.prototype.setText = function (infoText) {
    this._text = infoText;

}

//
//Window - Todo sublist
//

function MJMJS_TodoSystem_Window_TodoSubList() {
    this.initialize(...arguments);
}

MJMJS_TodoSystem_Window_TodoSubList.prototype = Object.create(Window_Selectable.prototype);
MJMJS_TodoSystem_Window_TodoSubList.prototype.constructor = MJMJS_TodoSystem_Window_TodoSubList;

MJMJS_TodoSystem_Window_TodoSubList.prototype.initialize = function (rect) {
    Window_ItemList.prototype.initialize.call(this, rect);

}

MJMJS_TodoSystem_Window_TodoSubList.prototype.refresh = function () {
    this.contents.clear();
    const width = this.width;
    this.drawTextEx(this._text, 0, 0, width);
}

MJMJS_TodoSystem_Window_TodoSubList.prototype.setInformation = function (todoItemList) {
    if (todoItemList != null) {
        this.generatePrettyList(todoItemList);
        this.refresh();
    }
}

MJMJS_TodoSystem_Window_TodoSubList.prototype.generatePrettyList = function (todoItemList) {
    var finalOutputText = "";
    for (let i = 0; i < todoItemList.length; i++) {
        if (todoItemList[i].TodoIsHidden == false || (todoItemList[i].TodoIsHidden == true && todoItemList[i].TodoIsCompleted == true)) {
            var generatedText = "";
            if (todoItemList[i].TodoIsCompleted) {
                generatedText += "\\C[" + MJMJS.TodoSystem.Parameters.completedTextColor + "]"
                generatedText += MJMJS.TodoSystem.Parameters.completedText + " ";
            }
            else if (todoItemList[i].TodoIsOptional == true && todoItemList[i].TodoIsCompleted == false) {
                generatedText += MJMJS.TodoSystem.Parameters.optionalText + " ";
            }
            else {
                generatedText += "\\C[" + MJMJS.TodoSystem.Parameters.incompletedTextColor + "]"
            }
            generatedText += todoItemList[i].todoMessage;
            generatedText += "\n"

            finalOutputText += generatedText;

        }

    }
    //finalized and save as useable text
    this._text = finalOutputText;
}

//=============================================================================
// Window_MenuCommand
//=============================================================================
MJMJS.TodoSystem.Window_MenuCommand = MJMJS.TodoSystem.Window_MenuCommand || {};
MJMJS.TodoSystem.Window_MenuCommand.addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function () {
    MJMJS.TodoSystem.Window_MenuCommand.addOriginalCommands.call(this);
    this.addMJMJSTodoCommands();
};

Window_MenuCommand.prototype.addMJMJSTodoCommands = function () {
    var enabledCommand = $MJMJS_TodoSystem_BasicFeatureSettings._EnableTodoSystemMenu;
    if ($MJMJS_TodoSystem_BasicFeatureSettings._isHiddenSystemMenu) {
        this.addCommand(MJMJS.TodoSystem.Parameters.topbarText, 'todoMenu', enabledCommand);
    }

}
//--------------------------------------------------------------------
//Scenes
//--------------------------------------------------------------------

//=============================================================================
// Scene_Menu
//=============================================================================
MJMJS.TodoSystem.SceneMenu = MJMJS.TodoSystem.SceneMenu || {};
MJMJS.TodoSystem.SceneMenu.createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function () {
    MJMJS.TodoSystem.SceneMenu.createCommandWindow.call(this);
    this._commandWindow.setHandler('todoMenu', this.todoMenu.bind(this));
};

Scene_Menu.prototype.todoMenu = function () {
    SceneManager.push(MJMJS_TodoSystem_Scene_TodoListMenu);
};


//=============================================================================
// MJMJS_TodoSystem_Scene_TodoListMenu
//=============================================================================

function MJMJS_TodoSystem_Scene_TodoListMenu() {
    this.initialize(...arguments);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype = Object.create(Scene_MenuBase.prototype);
MJMJS_TodoSystem_Scene_TodoListMenu.prototype.constructor = MJMJS_TodoSystem_Scene_TodoListMenu;

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
    this._generateList = new MJMJS_TodoSystem_TodoData();

}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.prepare = function () {

}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.createTodoTopbarWindow();
    this.createToDoSetListWindow();

    this.createTodoInformationWindow();
    this.createTodoSublistWindow();

    this._todoListWindow.activate();

}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.createDummyWindow = function () {
    const rect = this.dummyWindowRect();
    this._dummyWindow = new Window_Base(rect);
    this.addWindow(this._dummyWindow);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.dummyWindowRect = function () {
    const wx = 100;
    const wy = 100;
    const ww = Graphics.boxWidth;
    const wh = this.mainAreaHeight();
    return new Rectangle(wx, wy, ww, wh);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.generateSubList = function () {
    const wx = 100;
    const wy = 100;
    const ww = Graphics.boxWidth;
    const wh = this.mainAreaHeight();
    return new Rectangle(wx, wy, ww, wh);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.update = function () {
    Scene_MenuBase.prototype.update.call(this);
    console.log(this._generateList);
    if (this._selectedCommand !== this._todoListWindow.index() && this._todoListWindow.active == true && this._todoListWindow.index() >= 0) {
        this._selectedCommand = this._todoListWindow.index();
        const infoData = this._generateList.todoList[this._selectedCommand];

        //handles the top info window
        console.log(this._selectedCommand);
        this._todoInfoWindow.setInformation(infoData.todoDescription);

        //Handles the bottom info window
        this._todoSublistWindow.setInformation(infoData.todoStatusList);
    }
}


MJMJS_TodoSystem_Scene_TodoListMenu.prototype.createToDoSetListWindow = function () {
    this._todoListWindow = new MJMJS_TodoSystem_Window_TodoSetList(this._generateList, this.toDoSetListWindowRect());
    /*     for (let i = 0; i < this._generateList.LocationList.length; i++) {
            this._todoListWindow.setHandler(this._generateList.LocationList[i].locationName, this.onTeleportRequest.bind(this));
    
        } */
    this._todoListWindow.setHandler("cancel", this.popScene.bind(this));
    this.addWindow(this._todoListWindow);
}



MJMJS_TodoSystem_Scene_TodoListMenu.prototype.createTodoTopbarWindow = function () {
    const rect = this.toDoTopBarWindowRect();
    this._todoTopBarWindow = new MJMJS_TodoSystem_Window_TodoTopBar(rect);
    this.addWindow(this._todoTopBarWindow);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.toDoSetListWindowRect = function () {
    const ww = Graphics.boxWidth / 3;
    const wh = this.mainAreaHeight() - this._todoTopBarWindow.height;
    const wx = 0;
    const wy = this.mainAreaTop() + this._todoTopBarWindow.height;
    return new Rectangle(wx, wy, ww, wh);
}



MJMJS_TodoSystem_Scene_TodoListMenu.prototype.toDoTopBarWindowRect = function () {
    const ww = Graphics.boxWidth / 3;
    const wh = this.calcWindowHeight(1, true);
    const wx = 0;
    const wy = this.mainAreaTop();
    return new Rectangle(wx, wy, ww, wh);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.createTodoInformationWindow = function () {
    const rect = this.createTodoInformationRect();
    this._todoInfoWindow = new MJMJS_TodoSystem_Window_TodoListInfo(rect);
    this.addWindow(this._todoInfoWindow);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.createTodoInformationRect = function () {
    const ww = Graphics.boxWidth - this._todoTopBarWindow.width;
    const wh = this.mainAreaHeight() / 2.5;
    const wx = this._todoTopBarWindow.width;
    const wy = this.mainAreaTop();
    return new Rectangle(wx, wy, ww, wh);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.createTodoSublistWindow = function () {
    const rect = this.createTodoSublistRect();
    this._todoSublistWindow = new MJMJS_TodoSystem_Window_TodoSubList(rect);
    this.addWindow(this._todoSublistWindow);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.createTodoSublistRect = function () {
    const ww = Graphics.boxWidth - this._todoTopBarWindow.width;
    const wh = this.mainAreaHeight() - this._todoInfoWindow.height;
    const wx = this._todoTopBarWindow.width;
    const wy = this.mainAreaTop() + this._todoInfoWindow.height;
    return new Rectangle(wx, wy, ww, wh);
}

MJMJS_TodoSystem_Scene_TodoListMenu.prototype.onSubListCancel = function () {
    this._todoSublistWindow.deselect();
    this._todoListWindow.activate();
}

//--------------------------------------------------------------------
//Basic Logic
//--------------------------------------------------------------------

MJMJS.TodoSystem.GetTodoSetIDbyName = function (nameofset) {
    for (let i = 0; i < MJMJS.TodoSystem.Parameters.MainTodoList.length; i++) {

        if (MJMJS.TodoSystem.Parameters.MainTodoList[i].mainListIdentifier == nameofset) {
            return i;
        }
    }
    return null;
}
MJMJS.TodoSystem.GetTodoSubIDbyName = function (mainsetID, progressNameID) {
    for (let i = 0; i < MJMJS.TodoSystem.Parameters.MainTodoList[mainsetID].todoStatusList.length; i++) {

        if (MJMJS.TodoSystem.Parameters.MainTodoList[mainsetID].todoStatusList[i].subListIdentifier == progressNameID) {
            return i;
        }
    }
    return null;
}

MJMJS.TodoSystem.SearchMainListID = function (TodoMainlistID, findByid) {
    if (findByid == true) {
        var detectedID = MJMJS.TodoSystem.GetTodoSetIDbyName(TodoMainlistID);
        if (detectedID != null) {
            return detectedID;
        }
        else {
            console.error("cannot find ID from " + TodoMainlistID);
            return 0;
        }
    }
    else {
        return TodoMainlistID;
    }
}

MJMJS.TodoSystem.SearchSubListID = function (TodoMainlistID, TodoSubListID, findByid) {
    if (findByid == true) {
        var detectedID = MJMJS.TodoSystem.GetTodoSubIDbyName(TodoMainlistID, TodoSubListID);
        if (detectedID != null) {
            return detectedID;
        }
        else {
            console.error("cannot find ID from " + TodoSubListID);
            return 0;
        }
    }
    else {
        return TodoSubListID;
    }
}

MJMJS.TodoSystem.ChangeMainHiddenStatus = function (TodoMainlistID, hiddenStatus, findByid = false) {
    var mlid = MJMJS.TodoSystem.SearchMainListID(TodoMainlistID, findByid);

    //Set the todo system status
    $MJMJS_TodoData._TodoList[mlid].TodoSetIsHidden = eval(hiddenStatus);
    console.log($MJMJS_TodoData._TodoList[mlid].TodoSetIsHidden);
}

MJMJS.TodoSystem.ChangeSubHiddenStatus = function (TodoMainlistID, TodoSublistID, hiddenStatus, findByid = false) {
    var mlid = MJMJS.TodoSystem.SearchMainListID(TodoMainlistID, findByid);
    var slid = MJMJS.TodoSystem.SearchSubListID(mlid, TodoSublistID, findByid);

    //Set the todo system status
    $MJMJS_TodoData._TodoList[mlid].todoStatusList[slid].TodoIsHidden = eval(hiddenStatus);
}

MJMJS.TodoSystem.TodoCompleted = function (TodoMainlistID, TodoSublistID, findByid = false) {
    var mlid = MJMJS.TodoSystem.SearchMainListID(TodoMainlistID, findByid);
    var slid = MJMJS.TodoSystem.SearchSubListID(mlid, TodoSublistID, findByid);
    console.log($MJMJS_TodoData._TodoList);
    //Set the todo system status
    $MJMJS_TodoData._TodoList[mlid].todoStatusList[slid].TodoIsCompleted = true;
    //Also forced a reveal
    $MJMJS_TodoData._TodoList[mlid].todoStatusList[slid].TodoIsHidden = true;
}

MJMJS.TodoSystem.TododeCompleted = function (TodoMainlistID, TodoSublistID, findByid = false) {
    var mlid = MJMJS.TodoSystem.SearchMainListID(TodoMainlistID, findByid);
    var slid = MJMJS.TodoSystem.SearchSubListID(mlid, TodoSublistID, findByid);
    console.log($MJMJS_TodoData._TodoList);
    //Set the todo system status
    $MJMJS_TodoData._TodoList[mlid].todoStatusList[slid].TodoIsCompleted = false;

}

MJMJS.TodoSystem.TodoCompletedSet = function (TodoMainlistID, findByid = false) {
    var mlid = MJMJS.TodoSystem.SearchMainListID(TodoMainlistID, findByid);

    //Set the todo system status
    for (let i = 0; i < $MJMJS_TodoData._TodoList[mlid].todoStatusList.length; i++) {
        $MJMJS_TodoData._TodoList[mlid].todoStatusList[i].TodoIsCompleted = true;

    }


}

MJMJS.TodoSystem.TodoUnCompletedSet = function (TodoMainlistID, findByid = false) {
    var mlid = MJMJS.TodoSystem.SearchMainListID(TodoMainlistID, findByid);

    //Set the todo system status
    for (let i = 0; i < $MJMJS_TodoData._TodoList[mlid].todoStatusList.length; i++) {
        $MJMJS_TodoData._TodoList[mlid].todoStatusList[i].TodoIsCompleted = false;

    }


}