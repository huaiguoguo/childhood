var TwoSceneLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;

        //在店铺内敲键盘的少年
        this.store = new cc.Sprite();
        this.store.setScale(0.7);
        this.store.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(this.store, 1);

        var storeAnimation = new cc.Animation();
        for (var i=1; i<=10; i++){
            storeAnimation.addSpriteFrameWithFile("TwoScene/store_"+i+".jpg");
        }
        storeAnimation.setDelayPerUnit(1/10);
        storeAnimation.setRestoreOriginalFrame(true);
        var storeAnimate = new cc.Animate(storeAnimation);
        this.store.runAction(new cc.repeatForever(storeAnimate));

        //电子产品(遥晃)
        this.elec = new cc.Sprite(res.TwoScene.elec_product);
        this.elec.setPosition(cc.p(size.width/3.9, size.height/3.6));
        this.elec.setScale(0.6);
        this.addChild(this.elec, 2);


        //问题
        this.question = new cc.Sprite(res.TwoScene.question);
        this.question.setPosition(cc.p(size.width/1.4, size.height/2.5));
        this.question.setScale(0.7);
        this.addChild(this.question, 3);

        //答案
        this.answer_a = new cc.Sprite(res.TwoScene.answer_a);
        this.answer_a.setPosition(cc.p(size.width/1.5, size.height/3.8));
        this.answer_a.setScale(0.7);
        this.addChild(this.answer_a, 3);

        this.answer_b = new cc.Sprite(res.TwoScene.answer_b);
        this.answer_b.setPosition(cc.p(size.width/1.5, size.height/5.4));
        this.answer_b.setScale(0.7);
        this.addChild(this.answer_b, 3);

        this.answer_c = new cc.Sprite(res.TwoScene.answer_c);
        this.answer_c.setPosition(cc.p(size.width/1.5, size.height/9));
        this.answer_c.setScale(0.7);
        this.addChild(this.answer_c, 3);


        return true;
    }
});


var TwoScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var TwoScenelayer = new TwoSceneLayer();
        this.addChild(TwoScenelayer);
    }
});