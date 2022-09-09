import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"
import card from "./card";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertContent_4 extends cc.Component {
    @property(cc.Label)
    tip: cc.Label = null;

    @property(card)
    cardArr: card[] = [];

    static instance: alertContent_4 = null;

    onLoad() {
        alertContent_4.instance = this;
    }

    start() {

    }

    //渲染显示文字内容 抽中/解锁
    init(data: apiData.card[]) {
        let num = 0;
        data.forEach(element => {
            element as apiData.card;
            if (element.level.indexOf("SSS") > -1) {
                num++;
            }
        });

        for (let i = 0; i < data.length; i++) {
            alertContent_4.instance.cardArr[i].getComponent("card").init(data[i]);
        }

        alertContent_4.instance.tip.string = "恭喜你，抽中" + num + "张SSS级球星卡";
    }

    update(dt: number) {

    }


}


