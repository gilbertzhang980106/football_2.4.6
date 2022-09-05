import LayerManager from "../lightUI/managers/LayerManager";
import LEvent from "./events/LEvent";
import Logger from "./logging/Logger";
import LogLevel from "./logging/LogLevel";
import PopupManager from "./managers/PopupManager";
import TaskManager from "./managers/TaskManager";
import Dictionary from "./utils/Dictionary";

export default class LightUI {
    //ui根节点 
    public static root: cc.Node;
    //层级管理类
    public static layerManager: LayerManager;
    //弹出窗管理类
    public static popupManager: PopupManager;

    public static taskManager: TaskManager;

    public static logger: Logger = new Logger("LUI", false, "http://10.63.7.63:60521/ClientLog", "bull.log");

    private static _uiDic: Dictionary = new Dictionary;



    public static init(root: cc.Node) {
        this.root = root;

        this.layerManager = new LayerManager();
        this.layerManager.init(root);

        this.popupManager = new PopupManager();
        this.taskManager = new TaskManager(500);

        LightUI.setIsDebug(true, 2);
    }
    public static clearAllPopupManager() {

        LightUI.layerManager.popupLayer.removeAllChildren();
        // LightUI.layerManager.sceneLayer.removeAllChildren();
        for (let i = 0; i < LightUI.layerManager.sceneLayer.childrenCount; i++) {
            let item = LightUI.layerManager.sceneLayer.children[i];
            if (item.name == "loadingLayer")
                item.active = true;
            else
                item.active = false;

        }
        this._uiDic.clear();

    }
    public static getRootPos(pos: cc.Vec3, parent: cc.Node): cc.Vec3 {
        let position: cc.Vec3 = new cc.Vec3();
        //世界坐标
        position = parent.convertToWorldSpaceAR(pos);
        //root坐标
        position = LightUI.root.convertToNodeSpaceAR(position);
        return position;
    }

    public static setIsDebug(value: boolean, level: number = -1): void {
        this.logger.isDebug = value;
        level = (level < 0) ? LogLevel.DEBUG : level;
        this.logger.loggingLevel = level;
    }

    public static loadPrefab(url: string, completeHandler: (node: cc.Node) => void) {
        cc.loader.loadRes(url,
            (err, prefab) => {
                if (err == null && prefab) {
                    let ui: cc.Node = cc.instantiate(prefab)
                    if (ui) {
                        if (completeHandler) completeHandler(ui);
                    }
                } else {
                    cc.warn("加载Prefab：" + url + "错误");
                }
            });
    }
    //UI

    /**
     * 加载UI
     * @param url 
     * @param parent 
     * @param mask              default true    是否需要挡住下层点击
     * @param autoRemove           default true     是否自动移除  是的话 在接受node close事件时候 销毁和移除ui
     * @param completeHandler 
     * @param progressCallback 
     */
    public static loadUI(url: string, parent: cc.Node, mask: boolean = true, autoRemove: boolean = true, completeHandler?: (node: cc.Node) => void, progressCallback?: (completedCount: number, totalCount: number, item: any) => void) {
        // console.log("loadUI url:",url)
        let ui: cc.Node = this._uiDic.get(url);
        if (ui) {
            LightUI.showUI(url, ui, parent, mask, autoRemove, completeHandler);
        } else {


            cc.loader.loadRes(url, progressCallback,
                (err, prefab) => {
                    if (err == null && prefab) {
                        let ui: cc.Node = cc.instantiate(prefab)
                        if (ui) {
                            LightUI.showUI(url, ui, parent, mask, autoRemove, completeHandler);
                        }
                    } else {
                        cc.warn("加载UI：" + url + "错误");
                    }
                }
            );
        }
    }
    public static showUI(url: string, ui: cc.Node, parent: cc.Node, mask: boolean = true, autoRemove: boolean = false, completeHandler?: (node: cc.Node) => void): void {
        // console.log("showUI url:", url)
        this._uiDic.set(url, ui);
        if (ui.parent != null) {
            if (completeHandler) completeHandler(ui);
            return;
        }
        // if (mask == true) ui.on(cc.Node.EventType.TOUCH_START, () => { })
        if (mask == true) ui.addComponent(cc.BlockInputEvents);
        if (parent) parent.addChild(ui);
        if (completeHandler) completeHandler(ui);
        setTimeout(() => {
            //确保 第一次时候  onShow 在start后触发
            ui.dispatchEvent(new LEvent(LEvent.SHOW));
        }, 0);
        if (autoRemove == true) ui.on(LEvent.CLOSE, (e: LEvent) => {
            //做好消除工作
            let node: cc.Node = e.target;
            LightUI.disdroyUI(url);
        });
    }
    public static getUI(url: string): cc.Node {
        return this._uiDic.get(url);
    }
    public static addUI(ui: cc.Node, parent: cc.Node, mask: boolean = true, autoRemove: boolean = false): void {
        if (mask == true) ui.addComponent(cc.BlockInputEvents);
        if (parent) parent.addChild(ui);
        ui.dispatchEvent(new LEvent(LEvent.SHOW));
        if (autoRemove == true) ui.on(LEvent.CLOSE, (e: LEvent) => {
            //做好消除工作
            let node: cc.Node = e.target;
            node.destroy();
        });
    }

    public static getNodeUrl(node: cc.Node): string {
        for (var k of this._uiDic.keys) {
            if (this._uiDic.get(k) == node) return k;
        }
        return null;
    }

    public static getUIComponent<T>(url: string, clazz: T): T {
        return LightUI.getUI(url).getComponent(clazz as any) as any;
    }

    /**
     * 销毁ui
     * @param url 
     */
    public static disdroyUI(url: string) {
        // console.log("disdroyUI url:", url)
        let node: cc.Node = this.hideUI(url);
        if (node == null) return;
        node.destroy();
        this._uiDic.remove(url);
    }

    public static removeUI(url: string) {
        let node: cc.Node = this._uiDic.get(url);
        node.removeFromParent(false);
    }

    public static removeAllUI(): void {
        let d: Dictionary = this._uiDic;
        for (let key in d) {
            d[key].removeFromParent(false);
        }
    }
    public static removeUIByNode(node: cc.Node) {
        let url: string = this.getNodeUrl(node);
        if (!url) return;
        this.removeUI(url);
    }



    /**
     * 隐藏ui
     * @param url 
     * @returns 
     */
    public static hideUI(url: string): cc.Node {
        // console.log("hideUI ", url)
        let ui: cc.Node = this._uiDic.get(url);
        if (ui == null) return null;
        // ui.active = false;
        ui.removeFromParent(false);
        // this.layerManager.hideScene(ui);
        return ui;
    }


    public static loadScene(url: string, parent: cc.Node, autoRemove: boolean = true, completeHandler?: (node: cc.Node) => void, mask: boolean = true, progressCallback?: (completedCount: number, totalCount: number, item: any) => void) {
        this.loadUI(url, parent, mask, autoRemove, completeHandler, progressCallback);
    }

    //popup

    //scene
    public static addScene(scene: cc.Node) {
        this.layerManager.addScene(scene);
    }

    public static removeScene(scene: cc.Node) {
        this.layerManager.removeScene(scene);
    }

    public static desdroyScene(scene: cc.Node) {
        this.layerManager.desdroyScene(scene);
    }

    public static showScene(scene: cc.Node) {
        this.layerManager.showScene(scene);
    }

    public static hideSceneByNode(scene: cc.Node) {
        this.layerManager.hideScene(scene);
        for (var k of this._uiDic.keys) {
            if (scene == this._uiDic.get(k)) this.hideScene(k);
        }
    }
    public static hideScene(url: string) {
        // console.log("hideScene ", url)
        // let scene:cc.Node = this._uiDic.get(url);
        // if(scene == null) return;
        // this.layerManager.hideScene(scene);
        this.hideUI(url);
    }
}
