
cc.game.onStart = function () {

    var sys = cc.sys;
    if (!sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    if (sys.isMobile &&
        sys.browserType !== sys.BROWSER_TYPE_BAIDU &&
        sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
        cc.view.enableAutoFullScreen(true);
    }
    cc.loader.resPath = "res";
    cc.audioEngine.playMusic(res.background_music);
    // cc.director.setClearColor(cc.color(55,100,155,255));

    var designSize = cc.size(480, 700);
    var screenSize = cc.view.getFrameSize();

    cc.view.adjustViewPort(true); //设置html5的viewport meta属性
    cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.SHOW_ALL);
    // cc.view.setDesignResolutionSize(800, 800, cc.ResolutionPolicy.SHOW_ALL); //设置画面尺寸和适配规则
    cc.view.resizeWithBrowserSize(true); //设置是否跟随浏览器窗口变化

    cc.LoaderScene.preload(res.Start_BackGround_png, function () {
        cc.director.runScene(new ShareScene());
    },this);

};

cc.game.run();