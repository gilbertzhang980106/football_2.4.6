import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class loadingScene extends cc.Component {
    @property(cc.Sprite)
    loadingBg: cc.Sprite = null;

    @property(cc.ProgressBar)
    loading: cc.ProgressBar = null;

    static instance: loadingScene = null;

    onLoad() {
        loadingScene.instance = this;

    }

    start() {
        //假的加载过程，延迟五秒加载主场景
        this.scheduleOnce(() => {
            cc.director.loadScene("mainLobby");
        }, 5);
    }

    /** 资源加载进度*/
    update(dt: number) {

    }

}


