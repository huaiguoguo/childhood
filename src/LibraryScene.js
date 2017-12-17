/*
 * 图书馆 交谈场景 —-> 惊呀状 -> 跳转到自己房间->跳转到最后一个场景(童心完整度)
 */

var LibraryLayer = cc.Layer.extend({
    ctor:function () {
        this._super();



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