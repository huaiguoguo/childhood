

var HouseLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        var size = cc.winSize;

        //asus1
        var asus = new cc.Sprite(res.HouseScene.asus_png);
        asus.setPosition(cc.p(size.width/2, size.height/2-360));
        asus.setScale(0.8);
        this.addChild(asus, 4);

        //房间2
        var house = new cc.Sprite(res.HouseScene.window_jpg);
        house.setPosition(cc.p(size.width/2, size.height/2));
        house.setScale(0.8);
        this.addChild(house, 1);

        //桌子3
        var desktop = new cc.Sprite(res.HouseScene.desktop_png);
        desktop.setPosition(cc.p(size.width/2, size.height/2-200));
        desktop.setScale(0.7);
        this.addChild(desktop, 3);

        //电脑4
        var computer = new cc.Sprite(res.HouseScene.computer_png);
        computer.setPosition(cc.p(size.width/2+10, size.height/2-50));
        computer.setScale(0.8);
        this.addChild(computer, 3);

        //台灯5
        var table_lamp = new cc.Sprite(res.HouseScene.table_lnmp_png);
        table_lamp.setPosition(cc.p(size.width/2-150, size.height/2));
        table_lamp.setScale(0.5);
        this.addChild(table_lamp, 2);

        //人物 从右向左移动6
        var person_site = new cc.Sprite(res.HouseScene.person_sit_png);
        person_site.setPosition(cc.p(size.width, size.height/2-100));
        person_site.setScale(0.7);
        this.addChild(person_site, 2);
        var action = new cc.MoveTo(1, cc.p(size.width/2, size.height/2-100));
        person_site.runAction(action);

        //笔7
        var pen = new cc.Sprite(res.HouseScene.know_png);
        pen.setPosition(cc.p(size.width/2-90, size.height/2-50));
        pen.setScale(0.7);
        this.addChild(pen, 2);

        //小鸟8
        var bird = new cc.Sprite(res.HouseScene.bird_png);
        bird.setPosition(cc.p(size.width/2+150, size.height/2-40));
        bird.setScale(0.6);
        this.addChild(bird, 3);


        this.scheduleOnce(function () {
            // var trans = new cc.TransitionCrossFade(1, new ShareScene());
            cc.director.runScene(new ShareScene());
            // trans = null;
        }, 5);

        return true;
    }
});


var HouseScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        cc.director.runScene(new HouseLayer());
    }
});