var StartLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var fontDef = new cc.FontDefinition();
        fontDef.fillStyle = cc.color(125, 188, 233);
        fontDef.fontSize = 38;
        fontDef.fontFamily = "YaHei";
        fontDef.shadowEnabled = true;
        fontDef.shadowOffsetX = 5;
        fontDef.shadowOffsetY = 8;

        // var HelloLabel = new cc.LabelTTF("你好,世界", fontDef);
        // HelloLabel.setColor(cc.color(255,255,235));
        // HelloLabel.x = size.width/2;
        // HelloLabel.y = size.height/2;
        // this.addChild(HelloLabel);

        this.bgSprite = new cc.Sprite(res.BackGround_png);
        this.bgSprite.attr({
            x: size.width / 2,
            y: size.height / 2,
        });
        this.addChild(this.bgSprite);

        return true;
    }
});


var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});