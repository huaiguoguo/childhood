//视频场景

var VideoLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

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