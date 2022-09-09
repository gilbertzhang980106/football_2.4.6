import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"
import card from "./card";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertContent_6 extends cc.Component {
    @property(cc.Label)
    tip: cc.Label = null;

    @property(cc.Label)
    lb_reward: cc.Label = null;

    @property(cc.Label)
    reward_type_lb: cc.Label = null;

    @property(cc.Label)
    tip2: cc.Label = null;
   

    static instance: alertContent_6 = null;

    onLoad() {
        alertContent_6.instance = this;
    }

    start() {

    }

    //渲染显示文字内容 抽中/解锁
    init(data: apiData.card[]) {

    }

    update(dt: number) {

    }


}


