/*:
 * @target MZ
 * @plugindesc Modification of the main menu of the game to more design for puzzle games.
 * @author jomarcenter-mjm / MJM Creative works and ideas
 * 
 * 
 * @help
 * MJM Creative works and idea provided the plugins for free and out of our
 * good will as most of the code produced are also used in production of our titles.
 * MJMCWAI does not obfuscate public relased codes as all of our codes are open source.
 * if you want to support us. please purchase our products, we also provide various
 * way to donate for future plugin developement.
 * 
 * MJMCWAI MAY TAKES SERIOUS LEGAL ACTION FOR ANY UNAUTORIZED RESALE OR MODIFICATION OF OUR PLUGINS.
 * 
 * @param loadGameText
 * @desc loadGameText
 * @type text
 * @default Load Game
 * 
 * @param LogoImg
 * @desc insert Game Logo
 * @type file
 * @dir img/system
 * @default Default
 * 
 * @param infotext
 * @desc infotext
 * @type text
 * @default Default
 * 
 * @param xPercentage
 * @desc Description
 * @type number
 * @default 100
 * @max 1000
 * @min 1
 * @default 100
 * 
 * @param yPercentage
 * @desc Description
 * @type number
 * @max 1000
 * @min 1
 * @default 100
 * 
 * @param imageList
 * @desc List of images to use
 * @type struct<imageSet>[]
 * 
 * @url https://jomarcentermjm.carrd.co/
 */

/*~struct~imageSet:
 * @param internalCommandName
 * @desc The Name of the command
 * @type text
 * @default Default
 * 
 * @param imageLocation
 * @desc Location of the image
 * @type file
 * @dir img/system
 * @default Default
 */

//Internal Notice: Plugin is created due to OCP team raises a red flag notice on Visustella

var MJMJS = MJMJS || {};
MJMJS.PuzzleGameMenu_A = MJMJS.PuzzleGameMenu_A || {};
MJMJS.PuzzleGameMenu_A.Parameters = PluginManager.parameters('MJMJS_PuzzleGameMenu_A');
MJMJS.PuzzleGameMenu_A.Parameters.loadGameText = MJMJS.PuzzleGameMenu_A.Parameters["loadGameText"];
MJMJS.PuzzleGameMenu_A.Parameters.LogoImage = MJMJS.PuzzleGameMenu_A.Parameters["LogoImg"];
MJMJS.PuzzleGameMenu_A.Parameters.xSizePercent = MJMJS.PuzzleGameMenu_A.Parameters["xPercentage"];
MJMJS.PuzzleGameMenu_A.Parameters.ySizePercent = MJMJS.PuzzleGameMenu_A.Parameters["yPercentage"];
MJMJS.PuzzleGameMenu_A.Parameters.infoText = String(MJMJS.PuzzleGameMenu_A.Parameters["infotext"]);
MJMJS.PuzzleGameMenu_A.Parameters.imageList = JSON.parse(MJMJS.PuzzleGameMenu_A.Parameters["imageList"]);

(() => {


    Scene_MenuBase.prototype.commandWindowHeight = function () {
        return this.calcWindowHeight(2, true);
    };

    Scene_MenuBase.prototype.goldWindowHeight = function () {
        return this.calcWindowHeight(1, true);
    };

    Window_MenuCommand.prototype.maxCols = function () {
        return 5;
    };

    Window_MenuCommand.prototype.numVisibleRows = function () {
        return 1;
    };

    Window_MenuCommand.prototype.itemHeight = function () {
        return Window_Scrollable.prototype.itemHeight.call(this) * 2.3;
    };

    Window_MenuCommand.prototype.itemTextAlign = function () {
        return "right";
    };

    Window_MenuCommand.prototype.addSaveCommand = function() {
        if (this.needsCommand("save")) {
            const enabled = this.isSaveEnabled();
            this.addCommand(TextManager.save, "save", enabled);
        }
        this.addCommand(MJMJS.PuzzleGameMenu_A.Parameters.loadGameText, "load", true);
    };

    Window_MenuCommand.prototype.itemLineRect = function (index) {
        const rect = this.itemRectWithPadding(index);
        const padding = (rect.height - this.lineHeight());
        rect.y += padding;
        rect.height -= padding * 2;
        return rect;
    };

    Window_MenuCommand.prototype.drawItemBackground = function (index) {
        const rect = this.itemRect(index);

        this.drawBackgroundRect(rect, index);


    };

    Window_MenuCommand.prototype.drawItem = function (index) {
        const rect = this.itemLineRect(index);
        const align = this.itemTextAlign();
        this.resetTextColor();
        this.changePaintOpacity(this.isCommandEnabled(index));
        this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
    };

    Window_MenuCommand.prototype.drawBackgroundRect = function (rect, index) {
        const c1 = ColorManager.itemBackColor1();
        const c2 = ColorManager.itemBackColor2();
        const x = rect.x;
        const y = rect.y;
        const w = rect.width;
        const h = rect.height;
        this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
        this.contentsBack.strokeRect(x, y, w, h, c1);

        //Image code
        const imageLocation = this.getImageItem(index);
        if (imageLocation !== null) {
            
            const image = ImageManager.loadSystem(imageLocation);
            image.addLoadListener(() => {
                const sx = 0;
                const sy = 0;
                const sw = image.width;
                const sh = image.height;
                const dx = rect.x;
                const dy = rect.y;
                const dw = rect.width;
                const dh = rect.height;
                var ratio = Math.min(dw / sw, dh / sh);

                this.contentsBack.blt(image, sx, sy, sw, sh, dx, dy, sw * ratio, sh * ratio)
            })
        }
    };

    Window_MenuCommand.prototype.getImageItem = function (index) {
        
        for (let i = 0; i < MJMJS.PuzzleGameMenu_A.Parameters.imageList.length; i++) {
            const dataChecking = JSON.parse(MJMJS.PuzzleGameMenu_A.Parameters.imageList[i])
            if (dataChecking.internalCommandName === this.commandSymbol(index)) {
                
                return dataChecking.imageLocation;
            }

        }
        return null;
    }


    MJMJS.PuzzleGameMenu_A.SceneMenu = MJMJS.PuzzleGameMenu_A.SceneMenu || {};
    MJMJS.PuzzleGameMenu_A.SceneMenu.create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function () {
        MJMJS.PuzzleGameMenu_A.SceneMenu.create.call(this);
        this.createGameLogoWindow();
        this.createGameInfoWindow();
    }

    Scene_Menu.prototype.goldWindowRect = function () {
        const ww = this.mainCommandWidth();
        const wh = this.gamelogowindowRect().height;
        const wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;
        const wy = this.mainAreaBottom() - wh;
        return new Rectangle(wx, wy, ww, wh);
    };


    Scene_Menu.prototype.createGameInfoWindow = function () {

        const rect = this.infoWindowRect();
        this._infoWindow = new MJMJS_Windows_GameInfoWindow(rect);
        this.addWindow(this._infoWindow);

    }

    Scene_Menu.prototype.createGameLogoWindow = function () {

        const rect = this.gamelogowindowRect();
        this._gameLogoWindow = new MJMJS_PuzzleGameMenu_Window_LogoWindow(rect);
        this.addWindow(this._gameLogoWindow);

    }

    Scene_Menu.prototype.commandWindowRect = function () {
        const ww = Graphics.boxWidth;
        const wh = this.commandWindowHeight();
        const wx = 0;
        const wy = this.mainAreaTop();
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_Menu.prototype.infoWindowRect = function () {
        const ww = Graphics.boxWidth - this.gamelogowindowRect().width - this.goldWindowRect().width;
        const wh = this.gamelogowindowRect().height;
        const wx = this.gamelogowindowRect().width;
        const wy = Graphics.boxHeight - wh;

        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_Menu.prototype.statusWindowRect = function () {
        const ww = Graphics.boxWidth;
        const wh = this.mainAreaHeight() - this.gamelogowindowRect().height - this.commandWindowHeight();
        const wx = 0;
        const wy = this.mainAreaTop() + this.commandWindowHeight();
        return new Rectangle(wx, wy, ww, wh);
    };
    //redundant
    Scene_Menu.prototype.gamelogowindowRect = function () {
        const ww = 140;
        const wh = 80;
        const wx = 0;
        const wy = Graphics.boxHeight - wh;
        return new Rectangle(wx, wy, ww, wh);
    }

    
    MJMJS.PuzzleGameMenu_A.SceneMenu = MJMJS.PuzzleGameMenu_A.SceneMenu || {};
    MJMJS.PuzzleGameMenu_A.SceneMenu.createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function () {
        MJMJS.PuzzleGameMenu_A.SceneMenu.createCommandWindow.call(this);
        this._commandWindow.setHandler('load', this.commandLoad.bind(this));
    };

    Scene_Menu.prototype.commandLoad = function() {
        SceneManager.push(Scene_Load);
    };

    function MJMJS_Windows_GameInfoWindow() {
        this.initialize(...arguments);
    }


    MJMJS_Windows_GameInfoWindow.prototype = Object.create(Window_Selectable.prototype);
    MJMJS_Windows_GameInfoWindow.prototype.constructor = MJMJS_Windows_GameInfoWindow;
    MJMJS_Windows_GameInfoWindow.prototype.initialize = function (rect)  //rect is the rectangle of the window.
    {
        Window_Selectable.prototype.initialize.call(this, rect);
        this.drawInfo();
    }

    MJMJS_Windows_GameInfoWindow.prototype.drawInfo = function () {
        const rect = this.baseTextRect();
        this.drawText(MJMJS.PuzzleGameMenu_A.Parameters.infoText, 0, 0, rect.width, "center");
    }

    //Game Logo
    function MJMJS_Windows_ImageTitleCommand() {
        this.initialize(...arguments);
    }


    MJMJS_Windows_ImageTitleCommand.prototype = Object.create(Window_Selectable.prototype);
    MJMJS_Windows_ImageTitleCommand.prototype.constructor = MJMJS_Windows_ImageTitleCommand;

    //Game Logo
    function MJMJS_PuzzleGameMenu_Window_LogoWindow() {
        this.initialize(...arguments);
    }


    MJMJS_PuzzleGameMenu_Window_LogoWindow.prototype = Object.create(Window_Selectable.prototype);
    MJMJS_PuzzleGameMenu_Window_LogoWindow.prototype.constructor = MJMJS_PuzzleGameMenu_Window_LogoWindow;


    MJMJS_PuzzleGameMenu_Window_LogoWindow.prototype.initialize = function (rect) {
        Window_Selectable.prototype.initialize.call(this, rect);
        this.drawPicture();

    }

    MJMJS_PuzzleGameMenu_Window_LogoWindow.prototype.drawPicture = function () {
        this.winLogoBitmap = ImageManager.loadSystem(MJMJS.PuzzleGameMenu_A.Parameters.LogoImage);
        this.winLogoBitmap.addLoadListener(() => { // This is a method that will run a callback when the bitmap is loaded
            const xResize = this.winLogoBitmap.width * (MJMJS.PuzzleGameMenu_A.Parameters.xSizePercent / 100);
            const yResize = this.winLogoBitmap.height * (MJMJS.PuzzleGameMenu_A.Parameters.ySizePercent / 100);
            this.contents.blt(this.winLogoBitmap, 0, 0, this.winLogoBitmap.width, this.winLogoBitmap.height, 0, 0, xResize, yResize) // This will draw the bitmap on the contents of the window.
        })
    }



    Window_MenuStatus.prototype.maxCols = function () {
        return 4;
    };

    Window_MenuStatus.prototype.numVisibleRows = function () {
        return 1;
    };

    Window_MenuStatus.prototype.drawItemImage = function(index) {
        const actor = this.actor(index);
        const rect = this.itemRectWithPadding(index);
        const w = Math.min(rect.width, 144);
        const h = Math.min(rect.height, 144);
        const lineHeight = this.lineHeight();
        this.changePaintOpacity(actor.isBattleMember());
        this.drawActorFace(actor, rect.x, rect.y + lineHeight * 2, w, h);
        this.changePaintOpacity(true);
    };

    Window_MenuStatus.prototype.drawItemStatus = function(index) {
        const actor = this.actor(index);
        const rect = this.itemRectWithPadding(index);
        const x = rect.x;
        const y = rect.y;
        const width = rect.width;
        const bottom = y + rect.height;
        const lineHeight = this.lineHeight();
        this.drawActorName(actor, x, y + lineHeight * 0, width);
        this.drawActorClass(actor, x, bottom - lineHeight * 4, width);
        this.drawActorIcons(actor, x, bottom - lineHeight * 1, width);
    };

})();
