//店铺老头卖东西的场景

var OneSceneLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;

        //创建店铺画面
        this.store = new cc.Sprite();
        this.store.setPosition(cc.p(size.width/2, size.height/2));
        this.store.setScale(0.7);
        this.addChild(this.store, 1);

        //创建店铺动画
        var storeAnimation = new cc.Animation();
        for (var i=1; i<=10; i++){
            storeAnimation.addSpriteFrameWithFile("OneScene/store_"+i+".jpg");
        }
        storeAnimation.setDelayPerUnit(1/10);
        storeAnimation.setRestoreOriginalFrame(true);
        var animate = new cc.Animate(storeAnimation);
        this.store.runAction(new cc.RepeatForever(animate));


        //小鸟
        this.bird = new cc.Sprite(res.OneScene.bird);
        this.bird.setPosition(cc.p(size.width/3.8, size.height/1.2));
        this.bird.setScale(0.6);
        this.addChild(this.bird, 3);



        //手拿香瓜子
        this.sunflower = new cc.Sprite(res.OneScene.sunflower);
        this.sunflower.setScale(0.6);
        this.sunflower.setPosition(cc.p(size.width/4, size.height/3));
        this.addChild(this.sunflower, 2);

        var sunflower_animation = new cc.Animation();
        var move = new cc.MoveBy(2, cc.p(500, 0));
        var scal = new cc.ScaleTo(2, 1);
        // this.sunflower.runAction(new cc.Spawn(move, scal));


        //问题
        this.question = new cc.Sprite(res.OneScene.question);
        this.question.setPosition(cc.p(size.width/1.4, size.height/2));
        this.question.setScale(0.7);
        this.addChild(this.question, 3);

        //答案
        this.answer_a = new cc.Sprite(res.OneScene.answer_a);
        this.answer_a.setPosition(cc.p(size.width/1.5, size.height/3.2));
        this.answer_a.setScale(0.8);
        this.addChild(this.answer_a, 3);

        this.answer_b = new cc.Sprite(res.OneScene.answer_b);
        this.answer_b.setPosition(cc.p(size.width/1.5, size.height/4.5));
        this.answer_b.setScale(0.8);
        this.addChild(this.answer_b, 3);

        this.answer_c = new cc.Sprite(res.OneScene.answer_c);
        this.answer_c.setPosition(cc.p(size.width/1.5, size.height/7));
        this.answer_c.setScale(0.8);
        this.addChild(this.answer_c, 3);

        return true;
    }
});

var OneScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var OneScenelayer = new OneSceneLayer();
        this.addChild(OneScenelayer);
    }

});