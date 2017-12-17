/*
 * 这是商店那个阿婆场景
 */

var ThreeLayer = cc.Layer.extend({
    _size:cc.winSize,
    time:function () {
        var time = new cc.Sprite();
        time.setPosition(cc.p(this._size.width/2, this._size.height/2));
        this.addChild(time,3);

        var time_machine = new cc.Animation();
        for (var i=1; i<=10; i++){
            time_machine.addSpriteFrameWithFile("machine/time_machine_"+i+".jpg");
        }

        time_machine.setDelayPerUnit(4/10);
        time_machine.setRestoreOriginalFrame(true);
        var animate = new cc.Animate(time_machine);
        time.runAction(new cc.repeatForever(animate));

        cc.audioEngine.playEffect(res.TimeMachine.time_auto);
        this.scheduleOnce(function () {
            var transition=new cc.TransitionCrossFade(2,new SchoolScene() );
            cc.director.runScene(transition);
        }, 1);

    },
    ctor:function () {
        this._super();

        var size = cc.winSize;

        //创建店铺
        this.store = new cc.Sprite();
        this.store.setScale(0.7);
        this.store.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(this.store, 1);

        var storeAnimation = new cc.Animation();
        for (var i=1; i<=10; i++){
            storeAnimation.addSpriteFrameWithFile("ThreeScene/store_"+i+".jpg");
        }

        storeAnimation.setDelayPerUnit(1/10);
        storeAnimation.setRestoreOriginalFrame(true);
        var storeAnimate = new cc.Animate(storeAnimation);
        this.store.runAction(new cc.repeatForever(storeAnimate));

        //小鸟
        this.bird = new cc.Sprite(res.ThreeScene.bird);
        this.bird.setPosition(cc.p(size.width/3.8, size.height/1.2));
        this.bird.setScale(0.6);
        this.addChild(this.bird, 3);


        //电子产品(遥晃)
        this.hand = new cc.Sprite(res.ThreeScene.hand);
        this.hand.setPosition(cc.p(size.width/3.9, size.height/3.6));
        this.hand.setScale(0.8);
        this.addChild(this.hand, 2);


        //问题
        this.question = new cc.Sprite(res.ThreeScene.question);
        this.question.setPosition(cc.p(size.width/1.4, size.height/2));
        this.question.setScale(0.7);
        this.addChild(this.question, 3);

        var me = this;
        //答案
        this.answer_a = new ccui.Button(res.ThreeScene.answer_a);
        this.answer_a.setPosition(cc.p(size.width/1.5, size.height/3.8));
        this.answer_a.setScale(0.7);
        this.addChild(this.answer_a, 3);
        this.answer_a.addClickEventListener(function () {
            me.time();
        });


        this.answer_b = new ccui.Button(res.ThreeScene.answer_b);
        this.answer_b.setPosition(cc.p(size.width/1.5, size.height/5.4));
        this.answer_b.setScale(0.7);
        this.addChild(this.answer_b, 3);
        this.answer_b.addClickEventListener(function () {
            me.time();
        });


        this.answer_c = new ccui.Button(res.ThreeScene.answer_c);
        this.answer_c.setPosition(cc.p(size.width/1.5, size.height/9));
        this.answer_c.setScale(0.7);
        this.addChild(this.answer_c, 3);
        this.answer_c.addClickEventListener(function () {
            me.time();
        });

        return true;
    }
});

var ThreeScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var Threelayer = new ThreeLayer();
        this.addChild(Threelayer);

    }
});