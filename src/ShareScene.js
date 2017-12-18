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

         var notice_img = null;
        if (score<60){
            notice_img = res.LibraryScene.low_png;
        }else if (score>=60 && score<80){
            notice_img = res.LibraryScene.notice_png;
        }else if (score>=80){
            notice_img = res.LibraryScene.text_png;
        }

        var notice = new cc.Sprite(notice_img);
        notice.setPosition(cc.p(size.width/2, size.height/4));
        notice.setScale(0.7);
        this.addChild(notice,2);


        //百分比 数字
        var rate_num = new cc.LabelTTF(score.toString(), "", 150);
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
            cc.director.runScene(new OneScene());
        });

        var share = new ccui.Button(res.LibraryScene.share_png);
        share.setPosition(cc.p(size.width/2, size.height/7.5));
        share.setScale(0.6);
        this.addChild(share,2);
        share.addClickEventListener(function () {

            var share_guid_bg = new cc.Sprite("huise.png");
            share_guid_bg.setPosition(cc.p(size.width/2, size.height/2));
            // share_guid_bg.setColor(cc.color(0, 0, 0));
            me.addChild(share_guid_bg,2);

            var share_guid = new cc.Sprite(res.LibraryScene.share_guid_png);
            share_guid.setPosition(cc.p(size.width/2, size.height/2));
            // share_guid.setScale();
            me.addChild(share_guid,3);
        });

        var asus = new cc.Sprite(res.HouseScene.asus_png);
        asus.setPosition(cc.p(size.width/2, size.height/2-350));
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