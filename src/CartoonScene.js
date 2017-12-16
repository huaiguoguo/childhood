/*
 * 窗户里面的动画片场景
 */


var CartoonLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //创建动画片
        this.cartoon = new cc.Sprite();
        this.cartoon.setScale(0.7);
        this.cartoon.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(this.cartoon, 2);

        var cartoonAnimation = new cc.Animation();
        for (var i=1; i<=10; i++){
            cartoonAnimation.addSpriteFrameWithFile("CartoonScene/cartoon_"+i+".jpg");
        }

        cartoonAnimation.setDelayPerUnit(1/10);
        cartoonAnimation.setRestoreOriginalFrame(true);
        var cartoonAnimate = new cc.Animate(cartoonAnimation);
        this.cartoon.runAction(new cc.repeatForever(cartoonAnimate));

        //小鸟
        this.bird = new cc.Sprite(res.CartoonScene.bird);
        this.bird.setPosition(cc.p(size.width/3.8, size.height/1.2));
        this.bird.setScale(0.6);
        this.addChild(this.bird, 3);

        //问题
        this.question = new cc.Sprite(res.CartoonScene.question);
        this.question.setPosition(cc.p(size.width/1.3, size.height/1.6));
        this.question.setScale(0.7);
        this.addChild(this.question, 3);

        //答案
        this.answer_a = new cc.Sprite(res.CartoonScene.answer_a);
        this.answer_a.setPosition(cc.p(size.width/1.5, size.height/3.8));
        this.answer_a.setScale(0.7);
        this.addChild(this.answer_a, 3);

        this.answer_b = new cc.Sprite(res.CartoonScene.answer_b);
        this.answer_b.setPosition(cc.p(size.width/1.5, size.height/5.4));
        this.answer_b.setScale(0.7);
        this.addChild(this.answer_b, 3);

        this.answer_c = new cc.Sprite(res.CartoonScene.answer_c);
        this.answer_c.setPosition(cc.p(size.width/1.5, size.height/9));
        this.answer_c.setScale(0.7);
        this.addChild(this.answer_c, 3);

        return true;
    }
});


var CartoonScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var cartoonLayer = new CartoonLayer();
        this.addChild(cartoonLayer);

    }
});