var MemoryLayer = cc.Layer.extend({
    goto: function () {
        cc.director.runScene(  new HouseScene() );
    },
    ctor: function () {
        this._super();

        var size = cc.winSize;
        var newBackground = new cc.Sprite(res.LibraryScene.person_jpg);
        newBackground.setPosition(size.width / 2, size.height / 2);
        newBackground.setScale(0.7);
        this.addChild(newBackground);

        var me = this;

        this.scheduleOnce(function () {
            var newBackground_1 = new cc.Sprite(res.LibraryScene.person_tirrable_jpg);
            newBackground_1.setPosition(size.width / 2, size.height / 2);
            newBackground_1.setScale(0.7);
            me.addChild(newBackground_1, 2);

            var mem_chat = new cc.Sprite();
            mem_chat.setPosition(cc.p(size.width / 3, size.height / 2 + 300));
            mem_chat.setScale(0.7);
            me.addChild(mem_chat, 2);

            var animation = new cc.Animation();
            for (var i = 1; i <= 3; i++) {
                animation.addSpriteFrameWithFile("LibraryScene/remember_chat_" + i + ".png");
            }
            animation.setDelayPerUnit(1 / 3);
            animation.setRestoreOriginalFrame(true);
            var animate = new cc.Animate(animation);
            mem_chat.runAction(new cc.repeatForever(animate));

        }, 2);


        this.scheduleOnce(function () {
            me.goto();
        }, 5);

        return true;
    }
});


var MemoryScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        cc.director.runScene(new MemoryLayer());
    }
});