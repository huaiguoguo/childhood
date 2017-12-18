
cc.game.onStart = function () {

    var sys = cc.sys;
    if (!sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(sys.os === sys.OS_IOS ? true : false);

    // Disable auto full screen on baidu and wechat, you might also want to eliminate sys.BROWSER_TYPE_MOBILE_QQ
    if (sys.isMobile &&
        sys.browserType !== sys.BROWSER_TYPE_BAIDU &&
        sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
        cc.view.enableAutoFullScreen(false);
    }

    var designSize = cc.size(500, 800);
    var screenSize = cc.view.getFrameSize();

    cc.view.adjustViewPort(true); //设置html5的viewport meta属性
    cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.SHOW_ALL);
    // cc.view.setDesignResolutionSize(800, 800, cc.ResolutionPolicy.SHOW_ALL); //设置画面尺寸和适配规则
    cc.view.resizeWithBrowserSize(true); //设置是否跟随浏览器窗口变化

    // if (!cc.sys.isNative && screenSize.height < 800) {
    //     designSize = cc.size(320, 480);
    // }

    cc.loader.resPath = "res";
    cc.audioEngine.playMusic(res.background_music);
    // cc.director.setClearColor(cc.color(55,100,155,255));

    cc.LoaderScene.preload(res.Start_BackGround_png, function () {
        cc.director.runScene(new StartScene());
    },this);

};

cc.game.run();