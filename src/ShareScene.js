var ShareLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var background = new cc.Sprite(res.LibraryScene.sun_jpg);
        background.setPosition(cc.p(size.width/2, size.height/2));
        background.setScale(0.7);
        this.addChild(background, 1);

        var person_left = new cc.Sprite(res.LibraryScene.person_left_png);
        person_left.setPosition(cc.p(size.width/8, size.height/2));
        person_left.setScale(0.6);
        this.addChild(person_left,2);

        var person_right = new cc.Sprite(res.LibraryScene.person_right_png);
        person_right.setPosition(cc.p(size.width/1.2, size.height/2));
        person_right.setScale(0.6);
        this.addChild(person_right,2);


        var youchildheart = new cc.Sprite(res.LibraryScene.youchildheart_png);
        youchildheart.setPosition(cc.p(size.width/2, size.height/2+250));
        youchildheart.setScale(0.6);
        this.addChild(youchildheart,2);


        var notice = new cc.Sprite(res.LibraryScene.notice_png);
        notice.setPosition(cc.p(size.width/2, size.height/4));
        notice.setScale(0.7);
        this.addChild(notice,2);


        //百分比 数字
        var rate_num = new cc.LabelTTF("40", "", 150);
        rate_num.setFontFillColor(cc.color(0,0,0));
        rate_num.setPosition(cc.p(size.width/2-50, size.height/2));
        rate_num.setScale(0.6);
        this.addChild(rate_num,2);


        //百分号
        var rate = new cc.Sprite(res.LibraryScene.rate_png);
        rate.setPosition(cc.p(size.width/2+50, size.height/2));
        rate.setScale(0.6);
        this.addChild(rate,2);



        var again = new ccui.Button(res.LibraryScene.again_png);
        again.setPosition(cc.p(size.width/2, size.height/2-100));
        again.setScale(0.6);
        this.addChild(again,2);
        var me = this;
        again.addClickEventListener(function () {

            var share_guid_bg = new cc.Node();
            share_guid_bg.setPosition(cc.p(size.width/2, size.height/2));
            share_guid_bg.setColor(cc.color(255, 255, 233));
            share_guid_bg.setOpacity(1.8);
            me.addChild(share_guid_bg,3);

            var share_guid = new cc.Sprite(res.LibraryScene.share_guid_png);
            share_guid.setPosition(cc.p(size.width/2, size.height/2));
            // share_guid.setScale();
            me.addChild(share_guid,3);
        });


        var share = new cc.Sprite(res.LibraryScene.share_png);
        share.setPosition(cc.p(size.width/2, size.height/7.5));
        share.setScale(0.6);
        this.addChild(share,2);

        var asus = new cc.Sprite(res.LibraryScene.asus_png);
        asus.setPosition(cc.p(size.width/2, size.height/2-320));
        asus.setScale(0.6);
        this.addChild(asus,2);



        return true;
    }
});


var ShareScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        cc.director.runScene(new ShareLayer());
    }
});