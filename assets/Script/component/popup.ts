import toast from "./toast"
import tishi from "./tishi"
import { utils } from "./utils";
import { gameData } from "./gameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class popup extends cc.Component {

    static instance: popup = null;

    @property(cc.Prefab)
    toastPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    tishitPrefab: cc.Prefab = null;

    callBack: Function = null;
    private tishiNode = null;

    private chat1node: cc.Node = null;
    private chat2node: cc.Node = null;
    onLoad() {
        popup.instance = this;
    }

    

    toast(str: string) {
        let node = cc.instantiate(this.toastPrefab);
        node.parent = cc.find('Canvas');
        let t = node.getComponent(toast);
        t.setString(str);
        t.play("toastShow", () => {
            node.removeFromParent();
        })
    }

    toastLongTime(str: string, playLongTime: boolean) {
        let node = cc.instantiate(this.toastPrefab);
        node.parent = cc.find('Canvas');
        let t = node.getComponent(toast);
        t.setString(str);
        t.playLongTime("toastShow")
        if(!playLongTime){
            t.scheduleOnce(()=>{
                node.removeFromParent();
            }, 1)
        }
    }

    openTishi(str: string) {
        this.tishiNode = cc.instantiate(this.tishitPrefab);
        this.tishiNode.parent = cc.find('Canvas');
        let t = this.tishiNode.getComponent(tishi);
        t.setString(str);
        t.isOpen = true;
    }

    closeTishi() {
        if (this.tishiNode) this.tishiNode.removeFromParent();
    }

    chat1() {
        if (this.chat2node) {
            cc.find('Canvas').removeChild(this.chat2node);
            this.chat1node = null;
        }

        // this.chat1node = cc.instantiate(this.chat1Prefab);
        // this.chat1node.parent = cc.find('Canvas');
        utils.clickGetPrefab.clickGetPrefab(gameData.PreloadPrefab.chat1);
        // let url = gameData.PreloadPrefab.chat1//"prefabs/chat1";
        // utils.getPrefab(url);
    }

    chat2() {
        if (this.chat1node) {
            cc.find('Canvas').removeChild(this.chat1node);
            this.chat1node = null;
        }

        // this.chat2node = cc.instantiate(this.chat2Prefab)
        // this.chat2node.parent = cc.find('Canvas');
        utils.clickGetPrefab.clickGetPrefab(gameData.PreloadPrefab.chat2);
        // let url = gameData.PreloadPrefab.chat2;//"prefabs/chat2";
        // utils.getPrefab(url);

    }


}
