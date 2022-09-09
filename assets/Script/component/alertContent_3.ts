import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"
import card from "./card";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertContent_3 extends cc.Component {
    @property(cc.Label)
    tip: cc.Label = null;

    @property(card)
    card: card;

    static instance: alertContent_3 = null;

    onLoad() {
        alertContent_3.instance = this;
    }

    start() {

    }

    //渲染显示文字内容 抽中/解锁
    init(data: apiData.card) {
        alertContent_3.instance.tip.string = "恭喜你，抽中" + data.level + "级球星卡";

        //显示卡片内容
        alertContent_3.instance.card.getComponent("card").init(data);
    }

    update(dt: number) {

    }


}


