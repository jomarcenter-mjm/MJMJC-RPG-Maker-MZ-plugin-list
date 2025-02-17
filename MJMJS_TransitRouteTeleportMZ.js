/*:
 * @target MZ
 * @plugindesc This software allowes the creation of teleport location like a transit service
 * @author Author
 * 
 * @help
 * 
 * Welcome to the Journey Express, Where we take you anywhere for a fee.
 * This Plugin allows you to Travel from one place to another 
 * 
 * Donate to keep the train running: https://ko-fi.com/jomarcentermjm
 * 
 * 
 * Plugin Command:
 * (Avalable on Version 1.0)
 * Open Transport System UI
 * This command contain Two Argument
 * setname - Name of the set of location the player can go (Manditory to function)
 * locationname - the current location of the player (Optional)
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
 * @param locationSetList
 * @desc The List of Accessible Location
 * @type struct<locationSet>[]
 * 
 * 
 * @param buyname
 * @desc Name of the buy button
 * @type string
 * @default "Buy ticket"
 * 
 * @param purchaseType
 * @desc Type of purchase your game will use
 * @type select
 * @default free
 * @option free
 * @value free
 * @option gold
 * @value gold
 * @option item
 * @value item
 * @option mixed
 * @value mixed
 * 
 * @param purchaseGoldSettings
 * @parent purchaseType
 * 
 * @param fixedGoldRate
 * @desc This set to a fixed rate regardless of set or location
 * @type boolean
 * @default true
 * @parent purchaseGoldSettings
 * @on yes
 * @off no
 * 
 * @param fixedRatePrice
 * @desc This set the value of using the traveling system (Enable using fixed rate)
 * @parent purchaseGoldSettings
 * @type number
 * @default 100
 * 
 * @param purchaseTicketSettings
 * @parent purchaseType
 * 
 * @param fixedTicketRate
 * @desc This set to a fixed since ticket regardless of set
 * @type boolean
 * @default true
 * @parent purchaseTicketSettings
 * @on yes
 * @off no
 * 
 * @param fixedRateTicketItem
 * @desc This set the item to used for the service. (Enable using fixed rate)
 * @parent purchaseTicketSettings
 * @type item
 * @default 1
 * 
 * @param TicketConsuable
 * @desc This set the item to be consuable.
 * @type boolean
 * @default true
 * @parent purchaseTicketSettings
 * @on yes
 * @off no
 * 
 * @param enableImage
 * @desc Enable the image function of the plugin
 * @type boolean
 * @default true
 * @on yes
 * @off no
 * 
 * 
 * @command Open Transport System UI
 * @desc Open the Transport System UI
 * 
 * @arg setName
 * @desc the name of the set
 * @type string
 * @default name
 * 
 * @arg locationName
 * @desc the name of the location
 * @type string
 * @default name
 * 
 * @command LockUnlock Location
 * @desc Lock and Unlock Locations
 * 
 * @arg setName
 * @desc the name of the set
 * @type string
 * @default name
 * 
 * @arg locationName
 * @desc the name of the location
 * @type string
 * @default name
 * 
 * @arg lockStatus
 * @desc lock or unlock the location
 * @type boolean
 * @default true
 * @on lock
 * @off unlock
 * 
 * @command HideUnhide Location
 * @desc Lock and Unlock Locations
 * 
 * @arg setName
 * @desc the name of the set
 * @type string
 * @default name
 * 
 * @arg locationName
 * @desc the name of the location
 * @type string
 * @default name
 * 
 * @arg hideStatus
 * @desc hide or unhide the location
 * @type boolean
 * @default true
 * @on unhide
 * @off hide
 */

/*~struct~locationSet:
 *
 * @param locationSetName
 * @desc Name of the Location set
 * @type string
 * @default Default
 * 
 * @param ticketItem
 * @desc This set the item to used for the service. (disabled when using fixed rate)
 * @parent purchaseTicketSettings
 * @type item
 * @default 1
 * 
 * @param mixedModePurchaseType
 * @desc Type of purchase your game will use under mixed mode
 * @type select
 * @default free
 * @option free
 * @value free
 * @option gold
 * @value gold
 * @option item
 * @value item
 * 
 * @param goldPriceType
 * @desc How much the ticket will cost when using the service
 * @type select
 * @default fixedRate
 * @option fixedRate
 * @value fixedRate
 * @option fareMatrixPerPoint
 * @value fareMatrixPerPoint
 * @option fareMatrixPerLocation
 * @value fareMatrixPerLocation
 * @option fixedPerLocation
 * @value fixedPerLocation
 * 
 * @param fareMatrixPrice
 * @desc This set the value of using the traveling system (Enable using fareMatrixPerPoint)
 * @parent goldPriceType
 * @type number
 * @default 10
 * 
 * @param LocationList
 * @desc List of location of the given set
 * @type struct<Accessiblelocations>[]
 */

/*~struct~Accessiblelocations:
 *
 * @param locationName
 * @desc Name of the Location set
 * @type string
 * @default Default
 * 
 * @param locationDescription
 * @desc The Description of the location
 * @type multiline_string
 * @default Default
 * 
 * @param locationImage
 * @desc The image to use for this location
 * @type file
 * @dir img/pictures
 * @default Default
 * 
 * @param MapID
 * @desc Map ID of the location
 * @type number
 * @default 1
 * 
 * @param Xposition
 * @desc X position of the map
 * @type number
 * @default 1
 * 
 * @param Yposition
 * @desc Y position of the Map
 * @type number
 * @default 1
 * 
 * @param FacingPosition
 * @desc Where the player will face after the transfer
 * @type select
 * @default retain
 * @option retain
 * @value 0
 * @option up
 * @value 1
 * @option down
 * @value 2
 * @option left
 * @value 3
 * @option right
 * @value 4
 * 
 * @param InitialLocked
 * @desc this set the lock status of the location
 * @type boolean
 * @default false
 * @on yes
 * @off no
 * 
 * @param locationHidden
 * @desc is the Location Hidden from the game
 * @type boolean
 * @default false
 * 
 * @param locationPrice
 * @desc This set the value of using the traveling system (Enable using fixedPerLocation or fareMatrixPerLocation)
 * @type number
 * @default 10
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
MJMJS.TransitRoute = MJMJS.TransitRoute || {};
MJMJS.TransitRoute.Parameters = PluginManager.parameters('MJMJS_TransitRouteTeleportMZ');
MJMJS.TransitRoute.SuperParameters = JSONSuperParse(MJMJS.TransitRoute.Parameters);
MJMJS.TransitRoute.Parameters.buyName = MJMJS.TransitRoute.Parameters['buyname'];
MJMJS.TransitRoute.Parameters.purchaseType = MJMJS.TransitRoute.Parameters['purchaseType'];
MJMJS.TransitRoute.Parameters.MainRouteList = MJMJS.TransitRoute.SuperParameters['locationSetList'];
MJMJS.TransitRoute.Parameters.fixedGoldPrice = MJMJS.TransitRoute.Parameters['fixedRatePrice'];

MJMJS.TransitRoute.Parameters.fixedTicketsetting = eval(MJMJS.TransitRoute.Parameters['fixedTicketRate']);
MJMJS.TransitRoute.Parameters.fixedTicketItemID = MJMJS.TransitRoute.Parameters['fixedRateTicketItem'];
MJMJS.TransitRoute.Parameters.consumeableTicket = eval(MJMJS.TransitRoute.Parameters['TicketConsuable']);
MJMJS.TransitRoute.Parameters.enableImage = eval(MJMJS.TransitRoute.Parameters['enableImage']);


PluginManager.registerCommand('MJMJS_TransitRouteTeleportMZ','Open Transport System UI', args =>
{
    SceneManager.push(MJMJS_TansitRoute_Scene_TransportSystem);
SceneManager.prepareNextScene(args.setName, args.locationName);
}
)

PluginManager.registerCommand('MJMJS_TransitRouteTeleportMZ','HideUnhide Location', args =>
{
    
    
    MJMJS.TransitRoute.ChangehidesStatus(args.setName, args.locationName, eval(args.hideStatus))
}
)

PluginManager.registerCommand('MJMJS_TransitRouteTeleportMZ','LockUnlock Location', args =>
{
    
    MJMJS.TransitRoute.ChangeLockStatus(args.setName, args.locationName, eval(args.lockStatus));

}
)

//=============================================================================
// DataManager
//=============================================================================

//Store DataManager Information
MJMJS.TransitRoute.DataManager = MJMJS.TransitRoute.DataManager || {};

MJMJS.TransitRoute.DataManager.createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function()
{
    MJMJS.TransitRoute.DataManager.createGameObjects.call(this);
    $MJMJS_DataRoute = new MJMJS_Game_TransitRoute();
}
MJMJS.TransitRoute.DataManager.makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function () {
    var contents = MJMJS.TransitRoute.DataManager.makeSaveContents.call(this);
    contents.MJMJSTransitRoute = {
        _LocationList: $MJMJS_DataRoute._LocationList.map(set => ({
            locationSetName: set.locationSetName,
            LocationList: set.LocationList.map(location => ({
                locationName: location.locationName,
                InitialLocked: location.InitialLocked,
                locationHidden: location.locationHidden
            }))
        }))
    };
    return contents;
}

MJMJS.TransitRoute.DataManager.extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
    MJMJS.TransitRoute.DataManager.extractSaveContents.call(this, contents);
    if (contents.MJMJSTransitRoute === undefined) return;
    $MJMJS_DataRoute = new MJMJS_Game_TransitRoute();
    $MJMJS_DataRoute._LocationList.forEach((set, index) => {
        const savedSet = contents.MJMJSTransitRoute._LocationList[index];
        set.LocationList.forEach((location, locIndex) => {
            location.InitialLocked = savedSet.LocationList[locIndex].InitialLocked;
            location.locationHidden = savedSet.LocationList[locIndex].locationHidden;
        });
    });
}

//=============================================================================
// Savedata Content - Handler
//=============================================================================
function MJMJS_Game_TransitRoute() {
    this.initialize(...arguments);
};
MJMJS_Game_TransitRoute.prototype.initialize = function(){
    this._LocationList = [];
    //MJMJS.TransitRoute.Parameters.MainRouteList;
    this.setupStartingList();
};

MJMJS_Game_TransitRoute.prototype.setupStartingList = function()
{
    var tempData = JSON.stringify(MJMJS.TransitRoute.Parameters.MainRouteList)
    this._LocationList = JSONSuperParse(tempData);

}

//=============================================================================
// RouteData - Handler
//=============================================================================
var $MJMJS_DataRoute = null;

//Gather only the necessary Data
function MJMJS_TansitRoute_TransitLocationData() {
    this.initialize.apply(this, arguments);
};
MJMJS_TansitRoute_TransitLocationData.prototype.constructor = MJMJS_TansitRoute_TransitLocationData;

MJMJS_TansitRoute_TransitLocationData.prototype.initialize = function (nameOfSet) {
    setID = this.GetLocationSetIDbyName(nameOfSet)
    this.LocationList = [];
    this._setID = setID  || 0;
    this.GenerateLocationList(this._setID);
}


//=============================================================================
// related to modification of $MJMJS_DataRoute file
//=============================================================================

MJMJS_TansitRoute_TransitLocationData.prototype.GenerateLocationList = function (locationSetID) {
    //Get The SetID
    var premetSetID = this.GetLocationSetID(locationSetID);
    if (premetSetID == null) {
        throw "Cannot load location list"
    }
    //Add all items that is nothidden
    for (let i = 0; i < premetSetID.LocationList.length; i++) {
        
        
        if (premetSetID.LocationList[i].locationHidden == false) {

            this.LocationList.push(premetSetID.LocationList[i]);
        }
    }
}


MJMJS_TansitRoute_TransitLocationData.prototype.GetLocationSetID = function (locationSetID) {
    
    return $MJMJS_DataRoute._LocationList[locationSetID];
}

MJMJS_TansitRoute_TransitLocationData.prototype.GetLocationSetIDbyName  = function(nameofset)
{
    for (let i = 0; i < $MJMJS_DataRoute._LocationList.length; i++) {
        
        if ($MJMJS_DataRoute._LocationList[i].locationSetName == nameofset) {
            return i;
        }
    }
    return null;
}



//Unused Code
MJMJS_TansitRoute_TransitLocationData.prototype.ChangeLocksandHidesStatus = function (locationSetID, locationNameID, status) {
    this.ChangeLockStatus(locationSetID, locationNameID, status);
    this.ChangehidesStatus(locationSetID, locationNameID, status);
}
//--------------------------------------------------------------------
//Window
//--------------------------------------------------------------------
//Window - Transport Command

function MJMJS_TansitRoute_Window_TransportCommand() {
    this.initialize(...arguments);
}

MJMJS_TansitRoute_Window_TransportCommand.prototype = Object.create(Window_HorzCommand.prototype);
MJMJS_TansitRoute_Window_TransportCommand.prototype.constructor = MJMJS_TansitRoute_Window_TransportCommand;

MJMJS_TansitRoute_Window_TransportCommand.prototype.initialize = function (rect) {
    Window_HorzCommand.prototype.initialize.call(this, rect);
}

MJMJS_TansitRoute_Window_TransportCommand.prototype.maxCols = function () {
    return 2;
}

MJMJS_TansitRoute_Window_TransportCommand.prototype.makeCommandList = function () {
    this.addCommand(MJMJS.TransitRoute.Parameters.buyName, 'ticket', true);
    this.addCommand(TextManager.cancel, 'cancel', true);
}


//--------------------------------------------------------------------
//Window - Transport list

function MJMJS_TansitRoute_Window_TransportList() {
    this.initialize(...arguments);
}

MJMJS_TansitRoute_Window_TransportList.prototype = Object.create(Window_Command.prototype);
MJMJS_TansitRoute_Window_TransportList.prototype.constructor = MJMJS_TansitRoute_Window_TransportList;

MJMJS_TansitRoute_Window_TransportList.prototype.initialize = function (setList, curLocation, rect) {
    Window_ItemList.prototype.initialize.call(this, rect);
    this._setID = setList;
    this._curLocation = curLocation;


    this.refresh();
    this.scrollTo(0, 0);
}

MJMJS_TansitRoute_Window_TransportList.prototype.maxCols = function () {
    return 1;
};

MJMJS_TansitRoute_Window_TransportList.prototype.colSpacing = function () {
    return 8;
};

MJMJS_TansitRoute_Window_TransportList.prototype.makeCommandList = function () {

    for (let i = 0; i < this._setID.LocationList.length; i++) {
        var canUse = true;

        if (this._curLocation == this._setID.LocationList[i].locationName) {
            canUse = false;
        }

        if (this._setID.LocationList[i].InitialLocked == true) {
            canUse = false;
        }

        this.addCommand(this._setID.LocationList[i].locationName, this._setID.LocationList[i].locationName, canUse);


    }
    //Get the data from game
}

//--------------------------------------------------------------------
//Window - Transport Info

function MJMJS_TansitRoute_Window_TransportInfo() {
    this.initialize(...arguments);
}
MJMJS_TansitRoute_Window_TransportInfo.prototype = Object.create(Window_Selectable.prototype);
MJMJS_TansitRoute_Window_TransportInfo.prototype.constructor = MJMJS_TansitRoute_Window_TransportInfo;

MJMJS_TansitRoute_Window_TransportInfo.prototype.initialize = function (rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
}

MJMJS_TansitRoute_Window_TransportInfo.prototype.setImage = function (imagelocation) {
    if (this._TransportImage !== imagelocation) {
        this._TransportImage = imagelocation;
    }

}

MJMJS_TansitRoute_Window_TransportInfo.prototype.setText = function (dataSelected, calculatedPrice, mixedType) {
    //Generate data
    var newInformation = this.GenerateLocationData(dataSelected, calculatedPrice, mixedType);
    if (this._text !== newInformation) {
        this._text = newInformation;
    }
}
MJMJS_TansitRoute_Window_TransportInfo.prototype.setInformation = function (dataSelected, calculatedPrice, mixedType = null) {
    if (dataSelected != null) {
        
        this.setImage(dataSelected.locationImage);
        this.setText(dataSelected, calculatedPrice, mixedType);

        this.refresh();
    }
}

MJMJS_TansitRoute_Window_TransportInfo.prototype.GenerateLocationData = function (dataSelected, calculatedPrice, mixedType) {
    var generatedText = dataSelected.locationName + "\n" + dataSelected.locationDescription;

    //ticket
    if (MJMJS.TransitRoute.Parameters.purchaseType == "gold" || (MJMJS.TransitRoute.Parameters.purchaseType == "mixed" && mixedType == "gold") ) {
        generatedText += "\n\nPrice: " + calculatedPrice + "G";
    }


    return generatedText;
}

MJMJS_TansitRoute_Window_TransportInfo.prototype.refresh = function () {

    this.contents.clear();
    if (MJMJS.TransitRoute.Parameters.enableImage) {
        this.drawPictureAndText(this._TransportImage, 0, 0);
    }
    else {
        const width = this.width;
        this.drawTextEx(this._text, 0, 0, width);
    }

}
//External code source
MJMJS_TansitRoute_Window_TransportInfo.prototype.drawPictureAndText = function (filename, x, y) {
    const bitmap = ImageManager.loadPicture(filename) // This will load the filename inside the Img/pictures folder
    bitmap.addLoadListener(() => { // This is a method that will run a callback when the bitmap is loaded
        this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y) // This will draw the bitmap on the contents of the window.
        const texty = 5 + bitmap.height;
        const width = this.width;
        this.drawTextEx(this._text, 0, texty, width);
    })

};


//--------------------------------------------------------------------
//Window - Item Counter
function MJMJS_TansitRoute_Window_ItemCounter() {
    this.initialize(...arguments);
}

MJMJS_TansitRoute_Window_ItemCounter.prototype = Object.create(Window_Selectable.prototype);
MJMJS_TansitRoute_Window_ItemCounter.prototype.constructor = MJMJS_TansitRoute_Window_ItemCounter;



//--------------------------------------------------------------------
//Scenes
//--------------------------------------------------------------------

function MJMJS_TansitRoute_Scene_TransportSystem() {
    this.initialize(...arguments);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype = Object.create(Scene_MenuBase.prototype);
MJMJS_TansitRoute_Scene_TransportSystem.prototype.constructor = MJMJS_TansitRoute_Scene_TransportSystem;

MJMJS_TansitRoute_Scene_TransportSystem.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.prepare = function (setName, curLocation = "nodata") {
    this._setID = 0;
    this._curLocation = curLocation || "nodata";
    this._generateList = new MJMJS_TansitRoute_TransitLocationData(setName);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.GetLocationSetIDbyName  = function(nameofset)
{
    for (let i = 0; i < $MJMJS_DataRoute._LocationList.length; i++) {
        
        if ($MJMJS_DataRoute._LocationList[i].locationSetName == nameofset) {
            return i;
        }
    }
    return null;
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createCommandWindow();
    this.createTransportListWindow();
    this.createInfoWindow();

}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.update = function () {
    Scene_MenuBase.prototype.update.call(this);
    if (this._selectedCommand !== this._locListWindow.index() && this._locListWindow.active == true && this._locListWindow.index() >= 0) {
        this._selectedCommand = this._locListWindow.index();
        var calculatedPrice = MJMJS.TransitRoute.priceOutput(this._generateList.LocationList[this._selectedCommand], this._setID, this._curLocation);
        const infoData = this._generateList.LocationList[this._selectedCommand];
        this._infoWindow.setInformation(infoData, calculatedPrice, MJMJS.TransitRoute.Parameters.MainRouteList[this._setID].mixedModePurchaseType)
    }
};

MJMJS_TansitRoute_Scene_TransportSystem.prototype.createCommandWindow = function () {
    const rect = this.commandWindowRect();
    this._commandWindow = new MJMJS_TansitRoute_Window_TransportCommand(rect);
    this._commandWindow.setHandler("ticket", this.onBuyTicketOptionOK.bind(this));
    this._commandWindow.setHandler("cancel", this.popScene.bind(this));
    this.addWindow(this._commandWindow);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.commandWindowRect = function () {
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(1, true);
    const wx = 0;
    const wy = this.mainAreaTop();
    return new Rectangle(wx, wy, ww, wh);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.createDummyWindow = function () {
    const rect = this.dummyWindowRect();
    this._dummyWindow = new Window_Base(rect);
    this.addWindow(this._dummyWindow);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.createInfoWindow = function () {
    const rect = this.infoWindowRect();
    this._infoWindow = new MJMJS_TansitRoute_Window_TransportInfo(rect);
    this.addWindow(this._infoWindow);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.dummyWindowRect = function () {
    const wx = this._locListWindow.width;
    const wy = this._locListWindow.y;
    const ww = Graphics.boxWidth - this._locListWindow.width;
    const wh = this.mainAreaHeight() - this._commandWindow.height;
    return new Rectangle(wx, wy, ww, wh);
}
MJMJS_TansitRoute_Scene_TransportSystem.prototype.infoWindowRect = function () {
    const wx = this._locListWindow.width;
    const wy = this._locListWindow.y;
    const ww = Graphics.boxWidth - this._locListWindow.width;
    const wh = this.mainAreaHeight() - this._commandWindow.height;
    return new Rectangle(wx, wy, ww, wh);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.createTransportListWindow = function () {
    this._locListWindow = new MJMJS_TansitRoute_Window_TransportList(this._generateList, this._curLocation, this.transportListWindowRect());
    for (let i = 0; i < this._generateList.LocationList.length; i++) {
        this._locListWindow.setHandler(this._generateList.LocationList[i].locationName, this.onTeleportRequest.bind(this));

    }
    this._locListWindow.setHandler("cancel", this.onTicketCancel.bind(this));
    this.addWindow(this._locListWindow);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.transportListWindowRect = function () {
    const ww = Graphics.boxWidth / 3;
    const wh = this.mainAreaHeight() - this._commandWindow.height;
    const wx = 0;
    const wy = this._commandWindow.y + this._commandWindow.height;
    return new Rectangle(wx, wy, ww, wh);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.onBuyTicketOptionOK = function () {
    this._locListWindow.refresh();
    this._locListWindow.activate();
    this._locListWindow.select(0);
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.onTeleportRequest = function () {
    //if true then teleport
    const teleportID = this._locListWindow.index();
    const teleportData = this._generateList.LocationList[teleportID];

    if (MJMJS.TransitRoute.validatePurchase(teleportData, this._setID, this._curLocation)) {
        this.popScene();
        $gamePlayer.reserveTransfer(teleportData.MapID, teleportData.Xposition, teleportData.Yposition, 0, 0);
    }
    //if false show a error
    else {
        SoundManager.playBuzzer();
        this._helpWindow.setText("You don't have enought to use our service");
        this._locListWindow.refresh();
        this._locListWindow.activate();
        //Show error
    }
}

MJMJS_TansitRoute_Scene_TransportSystem.prototype.onTicketCancel = function () {
    this._locListWindow.deselect();
    this._commandWindow.activate();
}


//--------------------------------------------------------------------
//Basic Logic
//--------------------------------------------------------------------


MJMJS.TransitRoute.priceOutput = function (databaseItem, LocationSetID, currentLocation) {
    //Check for item verification
    var itemList = MJMJS.TransitRoute.Parameters.MainRouteList[LocationSetID];
    var totalPrice = 0;
    if (MJMJS.TransitRoute.Parameters.purchaseType == "gold" || (MJMJS.TransitRoute.Parameters.purchaseType == "mixed" && itemList.mixedModePurchaseType == "gold")) {
        var totalPrice = MJMJS.TransitRoute.pricingCalculation(databaseItem, itemList, currentLocation);
    }
    return totalPrice;

}

MJMJS.TransitRoute.validatePurchase = function (databaseItem, LocationSetID, currentLocation) {
    //Check for item verification
    var itemList = MJMJS.TransitRoute.Parameters.MainRouteList[LocationSetID];
    switch (MJMJS.TransitRoute.Parameters.purchaseType) {
        case "free":
            return true;
            break;
        case "gold":
            var result = MJMJS.TransitRoute.goldHandling(databaseItem, itemList, currentLocation);
            return result;
            break;
        case "item":
            var result = MJMJS.TransitRoute.ticketHandling(itemList);
            return result;
            break;
        case "mixed":
            var result = MJMJS.TransitRoute.mixedValidatePurchase(databaseItem, itemList, currentLocation);
            return result;
        default:
            break;
    }
}

MJMJS.TransitRoute.mixedValidatePurchase = function (databaseItem, itemList, currentLocation) {
    //Check for item verification
    switch (itemList.mixedModePurchaseType) {
        case "free":
            return true;
            break;
        case "gold":
            var result = MJMJS.TransitRoute.goldHandling(databaseItem, itemList, currentLocation);
            return result;
            break;
        case "item":
            var result = MJMJS.TransitRoute.ticketHandling(itemList);
            return result;
            break;
        default:
            break;
    }
}




MJMJS.TransitRoute.goldHandling = function (databaseItem, itemList, currentLocation) {
    var totalPrice = MJMJS.TransitRoute.pricingCalculation(databaseItem, itemList, currentLocation);
    if (totalPrice <= $gameParty.gold()) {
        $gameParty.loseGold(totalPrice);
        return true;
    }
    else {
        return false;
    }
}


MJMJS.TransitRoute.pricingCalculation = function (databaseItem, itemList, currentLocation) {
    switch (itemList.goldPriceType) {
        case "fixedRate":
            return itemList.fareMatrixPrice;
            break;
        case "fixedPerLocation":
            return databaseItem.locationPrice;
            break;
        case "fareMatrixPerPoint":
            var finalPrice = MJMJS.TransitRoute.fixmetrixRateCalculator(databaseItem, itemList, currentLocation);
            return finalPrice;
            break;
        case "fareMatrixPerLocation":
            var finalPrice = MJMJS.TransitRoute.dynamicmetrixRateCalculator(databaseItem, itemList, currentLocation);
            return finalPrice;
            break;
        default:
            return 0;
            break;
    }
}

MJMJS.TransitRoute.fixmetrixRateCalculator = function (databaseItem, itemList, currentLocation) {
    
    
    
    var locationIDArray = MJMJS.TransitRoute.GetLocationPointAandB(databaseItem, itemList, currentLocation);
    
    var totalPrice = 0;
    for (let i = locationIDArray[0]; i < locationIDArray[1]; i++) {
        totalPrice += itemList.fareMatrixPrice;

    }

    return totalPrice;
}


MJMJS.TransitRoute.dynamicmetrixRateCalculator = function (databaseItem, itemList, currentLocation) {
    
    
    
    var locationIDArray = MJMJS.TransitRoute.GetLocationPointAandB(databaseItem, itemList, currentLocation);
    var totalPrice = 0;
    for (let i = locationIDArray[0]; i < locationIDArray[1]; i++) {
        totalPrice += itemList.LocationList[i].locationPrice;

    }

    return totalPrice;
}

MJMJS.TransitRoute.GetLocationPointAandB = function (databaseItem, itemList, currentLocation) {
    

    var locationA = MJMJS.TransitRoute.GetDatabasePosition(itemList.LocationList, databaseItem.locationName);
    var locationB = MJMJS.TransitRoute.GetDatabasePosition(itemList.LocationList, currentLocation);
    if (locationB < locationA) {
        return [locationB, locationA];
    }
    else {
        return [locationA, locationB];
    }

}


MJMJS.TransitRoute.GetDatabasePosition = function (SetKit, locationName) {
    for (let i = 0; i < SetKit.length; i++) {
        if (SetKit[i].locationName == locationName) {
            return i;
        }
    }
}

MJMJS.TransitRoute.GetTicketItemData = function (itemInfo) {
    var itemID = 0;
    if (MJMJS.TransitRoute.Parameters.fixedTicketsetting == true) {

        itemID = MJMJS.TransitRoute.Parameters.fixedTicketItemID;
    }
    else {

        itemID = itemInfo.ticketItem;
    }
    return $dataItems[itemID]
}

MJMJS.TransitRoute.ticketHandling = function (itemList) {
    var ItemType = MJMJS.TransitRoute.GetTicketItemData(itemList);
    //Check if Item Exist
    if ($gameParty.hasItem(ItemType) == true) {
        if (MJMJS.TransitRoute.Parameters.consumeableTicket) {
            $gameParty.loseItem(ItemType, 1, false)
        }
        return true
    }
    else {
        return false;
    }
}

MJMJS.TransitRoute.GetLocationSetIDbyName = function(nameofset)
{
    for (let i = 0; i < $MJMJS_DataRoute._LocationList.length; i++) {
        
        if ($MJMJS_DataRoute._LocationList[i].locationSetName == nameofset) {
            return i;
        }
    }
    return null;
}

MJMJS.TransitRoute.ChangehidesStatus = function(locationSetID, locationNameID, hideStatus)
{
    var setID = MJMJS.TransitRoute.GetLocationSetIDbyName(locationSetID);
    
    for (let i = 0; i < $MJMJS_DataRoute._LocationList[setID].LocationList.length; i++) {
        if ($MJMJS_DataRoute._LocationList[setID].LocationList[i].locationName == locationNameID) {
            $MJMJS_DataRoute._LocationList[setID].LocationList[i].locationHidden = hideStatus;
            
            
            
        }
    }
}

MJMJS.TransitRoute.ChangeLockStatus = function(locationSetID, locationNameID, lockStatus)
{
    var setID = MJMJS.TransitRoute.GetLocationSetIDbyName(locationSetID);
    
    for (let i = 0; i < $MJMJS_DataRoute._LocationList[setID].LocationList.length; i++) {
        if ($MJMJS_DataRoute._LocationList[setID].LocationList[i].locationName == locationNameID) {
            $MJMJS_DataRoute._LocationList[setID].LocationList[i].InitialLocked = lockStatus;
            
            
            
        }
    }
}