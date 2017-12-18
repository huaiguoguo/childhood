var LibraryLayer = cc.Layer.extend({
    goto:function () {
        cc.director.runScene(  new MemoryScene() ) ;
    },
    ctor:function () {
        this._super();

        var size = cc.winSize;

        //交谈动画
        var chat = new cc.Sprite();
        chat.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(chat);

        var chatAnimation = new cc.Animation();
        for (var i=1; i<=10; i++){
            chatAnimation.addSpriteFrameWithFile("LibraryScene/library_"+i+".jpg");
        }
        chatAnimation.setDelayPerUnit(1/10);
        chatAnimation.setRestoreOriginalFrame(true);
        var chatAnimate = new cc.Animate(chatAnimation);
        chat.runAction(new cc.repeatForever(chatAnimate));

        var me = this;
        this.scheduleOnce(function (f) {
            //梅梅的自我介绍
            var answer = new cc.Sprite(res.LibraryScene.library_answer_png);
            answer.setPosition(cc.p(size.width, size.height));
            answer.setScale(0.6);
            me.addChild(answer, 2);
            var actionTo = new cc.MoveTo(1, cc.p(380, 600));
            answer.runAction(actionTo);
        }, 1);


        this.scheduleOnce(function (f) {
            //李雷 好像在哪儿见过
            var question = new cc.Sprite(res.LibraryScene.library_question_png);
            question.setPosition(cc.p(0, size.height/2+200));
            question.setScale(0.6);
            me.addChild(question, 2);
            var action = new cc.MoveTo(1, cc.p(size.width/2-100, size.height/2+200));
            question.runAction(action);
        }, 2);


        this.scheduleOnce(function () {
            me.goto();
        }, 5);

        return true;
    }
});

var LibraryScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var Libraylayer = new LibraryLayer();
        this.addChild(Libraylayer);

    }
});