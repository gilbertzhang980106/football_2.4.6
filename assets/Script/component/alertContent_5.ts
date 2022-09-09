import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"
import card from "./card";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertContent_5 extends cc.Component {
    @property(cc.Label)
    tip: cc.Label = null;

    @property(cc.Prefab)
    card: cc.Prefab = null;

    @property(cc.Node)
    layoutNode: cc.Node = null;

    static instance: alertContent_5 = null;

    onLoad() {
        alertContent_5.instance = this;
    }

    start() {

    }

    //渲染显示文字内容 抽中/解锁
    init(data: apiData.card[]) {
        let layout = cc.instantiate(alertContent_5.instance.layoutNode);
        for (let i = 0; i < data.length; i++) {
            // alertContent_5.instance.cardArr[i].getComponent("card").init(data[i]);
            let n1 = cc.instantiate(alertContent_5.instance.card);
            n1.active = true;
            n1.y = 0;
            layout.addChild(n1);
            n1.getComponent(card).init(data[i]);
            n1.getComponent(card).setScale();
        }

    }

    //确认兑换点击
    onClickExchange() {

    }

    update(dt: number) {

    }


}


