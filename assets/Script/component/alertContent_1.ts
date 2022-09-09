import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertContent_1 extends cc.Component {
    @property(cc.Label)
    tip: cc.Label = null;

    static instance: alertContent_1 = null;

    onLoad() {
        alertContent_1.instance = this;
    }

    start() {

    }

    //渲染显示文字内容
    init(data: string) {
        alertContent_1.instance.tip.string = data;
    }

    //去人物中心
    onClickGoTaskCenter() {

    }

    update(dt: number) {

    }


}


