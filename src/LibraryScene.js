/*
 * 图书馆 交谈场景 —-> 惊呀状 -> 跳转到自己房间->跳转到最后一个场景(童心完整度)
 */

var LibraryLayer = cc.Layer.extend({
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

        this.scheduleOnce(function (f) {
            //梅梅的自我介绍
            var answer = new cc.Sprite(res.LibraryScene.library_answer_png);
            answer.setPosition(cc.p(size.width, size.height));
            answer.setScale(0.6);
            this.addChild(answer, 2);
            var actionTo = new cc.MoveTo(1, cc.p(380, 600));
            answer.runAction(actionTo);
        }, 1);
        
        this.scheduleOnce(function (f) {
            //梅梅的自我介绍
            var question = new cc.Sprite(res.LibraryScene.library_question_png);
            question.setPosition(cc.p(0, size.height/2+200));
            question.setScale(0.6);
            this.addChild(question, 2);
            var action = new cc.MoveTo(1, cc.p(size.width/2-100, size.height/2+200));
            question.runAction(action);
        }, 4);

        var me = this;
        this.scheduleOnce(function (f) {
            //创建新场景
            var personScene = new cc.Scene();
            var newBackground=new cc.Sprite(res.LibraryScene.person_tirrable_jpg);
            newBackground.setPosition(size.width/2,size.height/2);
            personScene.addChild(newBackground);
            //替换场景
            cc.director.runScene(personScene);
        }, 7);

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