//视频场景

var VideoLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

        var size = cc.winSize;

        cc.spriteFrameCache.addSpriteFrame(res.plist);

        var time_8 = cc.spriteFrameCache.getSpriteFrame("time_8.png");
        var sprite = new cc.Sprite(time_8);

        console.log(time_8);

        sprite.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(sprite);

        return true;
    }
});

var VideoScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var videoLayer = new VideoLayer();
        this.addChild(videoLayer);
    }
});