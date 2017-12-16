//启动场景

var BootLayer = cc.Layer.extend({
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
        this.cartoon.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(this.cartoon, 2);
        this.cartoon.setScale(0.8);
        this.cartoon.setPosition(cc.p(size.width/2, size.height/1.7));

        var animation = new cc.Animation();
        for (var i=1; i<=20; i++){
            animation.addSpriteFrameWithFile("Boot/cartoon_"+i+".png");
        }

        animation.setDelayPerUnit(1/20);
        animation.setRestoreOriginalFrame(true);
        var animate = new cc.Animate(animation);
        this.cartoon.runAction(new cc.RepeatForever(animate));


        //添加回忆童年文字图片
        this.childhood = new cc.Sprite(res.ChildHood);
        this.childhood.setPosition(cc.p(size.width/2, size.height/2.5));
        this.childhood.setScale(0.5)
        this.addChild(this.childhood, 2);

        //添加手指图片
        this.finger = new cc.Sprite(res.Finger);
        this.finger.setPosition(cc.p(size.width/1.8, size.height/3));
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