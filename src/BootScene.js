//启动场景

var BootLayer = cc.Layer.extend({
    _size: cc.winSize,
    time: function () {
        var time = new cc.Sprite();
        time.setPosition(cc.p(this._size.width / 2, this._size.height / 2));
        this.addChild(time, 3);

        var time_machine = new cc.Animation();
        for (var i = 1; i <= 10; i++) {
            time_machine.addSpriteFrameWithFile("machine/time_machine_" + i + ".jpg");
        }

        time_machine.setDelayPerUnit(4 / 10);
        time_machine.setRestoreOriginalFrame(true);
        var animate = new cc.Animate(time_machine);
        time.runAction(new cc.repeatForever(animate));

        cc.audioEngine.playMusic(res.TimeMachine.time_auto);
        this.scheduleOnce(function (f) {
            var transition = new cc.TransitionCrossFade(2, new OneScene());
            cc.director.runScene(transition);
        }, 1);

    },
    ctor: function () {
        this._super();
        var size = cc.winSize;

        //添加背景
        this.bgSprite = new cc.Sprite(res.Boot_BackGround_png);
        this.bgSprite.attr({
            x: size.width / 2,
            y: size.height / 2,
        });
        this.addChild(this.bgSprite, 1);

        //创建电视动画
        this.cartoon = new cc.Sprite();
        this.cartoon.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(this.cartoon, 2);
        this.cartoon.setScale(0.8);
        this.cartoon.setPosition(cc.p(size.width / 2, size.height / 1.7));

        var animation = new cc.Animation();
        for (var i = 1; i <= 20; i++) {
            animation.addSpriteFrameWithFile("Boot/cartoon_" + i + ".png");
        }

        animation.setDelayPerUnit(1 / 20);
        animation.setRestoreOriginalFrame(true);
        var animate = new cc.Animate(animation);
        this.cartoon.runAction(new cc.RepeatForever(animate));


        //添加回忆童年文字图片

        var startBtn = new ccui.Button(res.ChildHood);
        startBtn.setPosition(cc.p(size.width / 2, size.height / 2.5));
        startBtn.setScale(0.5)
        this.addChild(startBtn, 2);

        var me = this;
        startBtn.addClickEventListener(function () {
            me.time();
        });


        // this.childhood = new cc.Sprite(res.ChildHood);
        // this.childhood.setPosition(cc.p(size.width/2, size.height/2.5));
        // this.childhood.setScale(0.5)
        // this.addChild(this.childhood, 2);

        //添加手指图片
        this.finger = new cc.Sprite(res.Finger);
        this.finger.setPosition(cc.p(size.width / 1.8, size.height / 3));
        this.finger.setScale(0.8)
        this.addChild(this.finger, 2);

        return true;
    }
});


var BootScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var bootLayer = new BootLayer();
        this.addChild(bootLayer);
    }
});