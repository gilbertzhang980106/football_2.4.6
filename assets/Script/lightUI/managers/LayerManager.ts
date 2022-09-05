export default class LayerManager {
    public popupLayer: cc.Node;
    public sceneLayer: cc.Node;
    public topLayer: cc.Node;

    public init(root: cc.Node) {
        this.popupLayer = root.getChildByName("popupLayer");
        this.sceneLayer = root.getChildByName("sceneLayer");
        this.topLayer = root.getChildByName("topLayer");
    }

    public addScene(scene: cc.Node) {
        this.sceneLayer.addChild(scene);
    }

    public removeScene(scene: cc.Node) {
        scene.removeFromParent();
    }

    public desdroyScene(scene: cc.Node) {
        scene.active = false;
        scene.removeFromParent();
        scene.destroy();
    }

    public showScene(scene: cc.Node) {
        scene.active = true;
    }

    public hideScene(scene: cc.Node) {
        scene.active = false;
    }

    public removeAll() {
        for (let i = 0; i < this.popupLayer.childrenCount; i++) {
            if (i < this.popupLayer.childrenCount - 1)
                this.popupLayer.removeChild(this.popupLayer.children[i]);
        }
    }
}
