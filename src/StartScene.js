var StartLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;
        var fontDef = new cc.FontDefinition();
        fontDef.fillStyle = cc.color(125, 188, 233);
        fontDef.fontSize = 38;
        fontDef.fontFamily = "YaHei";
        fontDef.shadowEnabled = true;
        fontDef.shadowOffsetX = 5;
        fontDef.shadowOffsetY = 8;

        // var HelloLabel = new cc.LabelTTF("你好,世界", fontDef);
        // HelloLabel.setColor(cc.color(255,255,235));
        // HelloLabel.x = size.width/2;
        // HelloLabel.y = size.height/2;
        // this.addChild(HelloLabel, 10);

        //添加背景
        this.bgSprite = new cc.Sprite(res.Start_BackGround_png);
        this.bgSprite.attr({
            x: size.width / 2,
            y: size.height / 2,
        });
        this.addChild(this.bgSprite, 1);

        //添时间沙漏精灵
        this.dragon = new cc.Sprite();
        this.dragon.setPosition(cc.p(cc.winSize.width * 0.3, cc.winSize.height / 2));
        this.dragon.rotationX = 180;
        this.dragon.scale = 0.5
        this.dragon.setPositionX(size.width / 2);
        this.dragon.setPositionY(size.height / 1.6);
        this.addChild(this.dragon, 5);

        // 创建帧动画序列，名词形式
        var animation = new cc.Animation();
        for (var i = 1; i <= 20; i++) {
            animation.addSpriteFrameWithFile("StartScene/time_" + i + ".png");
        }
        // 设置帧动画属性
        animation.setDelayPerUnit(1 / 20);       //每一帧停留的时间
        animation.setRestoreOriginalFrame(true);   //播放完后回到第一帧
        var animate = new cc.Animate(animation);
        this.dragon.runAction(new cc.RepeatForever(animate));

        //添加文本："时光倒流中..."
        this.textSprite = new cc.Sprite();
        this.textSprite.setPosition(cc.p(cc.winSize.width * 0.3, cc.winSize.height / 2));
        this.textSprite.rotationX = 0;
        this.textSprite.scale = 0.7
        this.textSprite.setPositionX(size.width / 1.93);
        this.textSprite.setPositionY(size.height / 3);
        this.addChild(this.textSprite, 5);
        var textAnimation = new cc.Animation();
        for (var i = 1; i <= 6; i++) {
            textAnimation.addSpriteFrameWithFile("StartScene/text_" + i + ".png");
        }
        textAnimation.setDelayPerUnit(8 / 20);
        textAnimation.setRestoreOriginalFrame(true);
        var textAnimate = new cc.Animate(textAnimation);
        this.textSprite.runAction(new cc.RepeatForever(textAnimate));


        //跳转到引导(点击)场景页面


        return true;

    }
});


var StartScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});