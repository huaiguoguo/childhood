/*
 * 学校场景
 */

var SchoolLayer = cc.Layer.extend({
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
            var transition=new cc.TransitionCrossFade(2,new CartoonScene() );
            cc.director.runScene(transition);
        }, 1);
    },
    ctor:function () {
        this._super();

        var size = cc.winSize;

        //创建店铺
        this.school = new cc.Sprite();
        this.school.setScale(0.7);
        this.school.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(this.school, 1);

        var schoolAnimation = new cc.Animation();
        for (var i=1; i<=10; i++){
            schoolAnimation.addSpriteFrameWithFile("SchoolScene/school_"+i+".jpg");
        }

        schoolAnimation.setDelayPerUnit(1/10);
        schoolAnimation.setRestoreOriginalFrame(true);
        var schoolAnimate = new cc.Animate(schoolAnimation);
        this.school.runAction(new cc.repeatForever(schoolAnimate));

        //小鸟
        this.bird = new cc.Sprite(res.SchoolScene.bird);
        this.bird.setPosition(cc.p(size.width/3.8, size.height/1.2));
        this.bird.setScale(0.6);
        this.addChild(this.bird, 3);

        //问题
        this.question = new cc.Sprite(res.SchoolScene.question);
        this.question.setPosition(cc.p(size.width/1.3, size.height/1.6));
        this.question.setScale(0.7);
        this.addChild(this.question, 3);

        var me = this;
        //答案
        this.answer_a = new ccui.Button(res.SchoolScene.answer_a);
        this.answer_a.setPosition(cc.p(size.width/1.5, size.height/3.8));
        this.answer_a.setScale(0.7);
        this.addChild(this.answer_a, 3);
        this.answer_a.addClickEventListener(function () {
            me.time();
            score+=20;
        });


        this.answer_b = new ccui.Button(res.SchoolScene.answer_b);
        this.answer_b.setPosition(cc.p(size.width/1.5, size.height/5.4));
        this.answer_b.setScale(0.7);
        this.addChild(this.answer_b, 3);
        this.answer_b.addClickEventListener(function () {
            me.time();
        });

        this.answer_c = new ccui.Button(res.SchoolScene.answer_c);
        this.answer_c.setPosition(cc.p(size.width/1.5, size.height/9));
        this.answer_c.setScale(0.7);
        this.addChild(this.answer_c, 3);
        this.answer_c.addClickEventListener(function () {
            me.time();
        });


        return true;

    }
});

var SchoolScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var Schoollayer = new SchoolLayer();
        this.addChild(Schoollayer);
        
    }
});