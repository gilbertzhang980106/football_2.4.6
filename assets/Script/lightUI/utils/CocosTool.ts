export default class CocosTool {
    public static Test() {
        console.log("test");
    }

    public static buttonSetLabel(button: cc.Button, label: string): void {
        button.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = label;
    }
    public static buttonSetSouce(button: cc.Button, label: string): void {
        // button.node.getChildByName("childname").getComponent(cc.Sprite).spriteFrame.setTexture()
    }

    public static rebackToPool(items: Array<cc.Node>, pool: cc.NodePool): void {
        for (var i = 0; i < items.length; i++) {
            pool.put(items[i]);
        }
    }

    public static spriteSetImgByUrl(sp: cc.Sprite, url: string, isUserHead: boolean = true, complete: Function = null) {
        // if (!url) return;
        if (!isUserHead && !url) return;
        if (url == "" || url == null) url = "core/mainscene/head/head_default.png"
        let remot: boolean = (url.indexOf("http") == 0)
        if (remot == true) {
            cc.loader.load(url + '?aaa=aa.jpg', function (err, texture) {
                var sprite = new cc.SpriteFrame(texture);
                sp.spriteFrame = sprite;
                if (complete) complete();
            });
        } else {
            cc.loader.loadRes(url, function (err, texture) {
                var sprite = new cc.SpriteFrame(texture);
                sp.spriteFrame = sprite;
                if (complete) complete();
            });
        }
    }

    public static cleatWidget(node: cc.Node) {
        let widget: cc.Widget = node.getComponent(cc.Widget);
        widget.left = widget.right = widget.top = widget.bottom = 0;
    }
}