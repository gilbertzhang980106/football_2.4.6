import toast from "./toast"
import { AudioManage } from "../../Common/src/AudioManage"
import audioConfig from "../../Common/src/AudioConfig"
const { ccclass, property } = cc._decorator;

@ccclass
export default class tishi extends cc.Component {

    static instance: tishi = null;

    @property(cc.Label)
    tishi: cc.Label = null;

    callBack:Function = null;

    isOpen = false;

    onLoad() {
        tishi.instance = this;
    }

    setString(str: string){
        this.tishi.string = str;
    }

    onCloseTishi() {
        this.isOpen = false;
        if(this.node)this.node.destroy();
        if (this.callBack) {
            AudioManage.playEffect(audioConfig.effect_button_click);
            this.callBack()
        }
    }

}
