import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket";
import alertContent_1 from "./alertContent_1";
import alertContent_3 from "./alertContent_3";
import alertContent_4 from "./alertContent_4";
import alertContent_5 from "./alertContent_5";
import alertContent_6 from "./alertContent_6";

const { ccclass, property } = cc._decorator;

@ccclass
export default class alertComponent extends cc.Component {
    @property(cc.Prefab)
    alert_content_1: cc.Prefab = null;//错误提示类型

    @property(cc.Prefab)
    alert_content_2: cc.Prefab = null;//积分不够类型

    @property(cc.Prefab)
    alert_content_3: cc.Prefab = null;//解锁/抽中新卡片一张

    @property(cc.Prefab)
    alert_content_4: cc.Prefab = null;//解锁/抽中新卡片十张

    @property(cc.Prefab)
    alert_content_5: cc.Prefab = null;//兑换卡片

    @property(cc.Prefab)
    alert_content_6: cc.Prefab = null;//集齐SSS卡兑换神秘大奖


    static instance: alertComponent = null;

    onLoad() {
        alertComponent.instance = this;
        alertComponent.instance.node.active = false;
        DznSocket.on(gameData.messageFlag.SHOW_ALERT_LAYER, this.onShowPops, this);
        DznSocket.on(gameData.messageFlag.HIDE_ALERT_LAYER, this.onCloseAlertPanel, this);//关闭弹窗
    }

    start() {

    }

    onShowPops(type: string, data: any) {
        if (alertComponent.instance.node.childrenCount > 0) alertComponent.instance.node.removeAllChildren();
        alertComponent.instance.node.active = true;
        switch (type) {
            case gameData.SHOW_MAIN_HOME_ALERT.ERROR_ALERT:
                alertComponent.instance.onShowErrorPop(data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.NO_SCORE:
                alertComponent.instance.onShowNoScorePop(data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.UNLOCK_NEW_CARD_ONE:
                alertComponent.instance.onShowUnlockDrawOnePop(0, data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.UNLOCK_NEW_CARD_TEN:
                alertComponent.instance.onShowUnlockDrawTenPop(0, data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.DRAW_NEW_CARD_ONE:
                alertComponent.instance.onShowUnlockDrawOnePop(1, data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.DRAW_NEW_CARD_TEN:
                alertComponent.instance.onShowUnlockDrawTenPop(1, data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.EXCHANGE_CARD:
                alertComponent.instance.onShowExchangeCardPop(data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.MYSTERY_JACKPOT:
                alertComponent.instance.onShowMysteryJackpotPop(data);
                break;
        }
    }

    //显示错误信息类的弹窗
    onShowErrorPop(data: any) {
        let showPopNode = cc.instantiate(this.alert_content_1);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent(alertContent_1).init(data);
    }

    //显示积分不够的弹窗
    onShowNoScorePop(data: any) {
        let showPopNode = cc.instantiate(this.alert_content_1);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent(alertContent_1).init(data);
    }

    //显示解锁/抽中新卡片一张的弹窗 type 0-解锁 1-抽中
    onShowUnlockDrawOnePop(type: number, data: any) {
        let showPopNode = cc.instantiate(this.alert_content_3);
        showPopNode.active = true;
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.getComponent(alertContent_3).init(type, data);
    }

    //显示解锁/抽中新卡片十张的弹窗 type 0-解锁 1-抽中
    onShowUnlockDrawTenPop(type: number, data: any) {
        let showPopNode = cc.instantiate(this.alert_content_4);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent(alertContent_4).init(type, data);
    }

    //显示兑换卡片的弹窗
    onShowExchangeCardPop(data: any) {
        let showPopNode = cc.instantiate(this.alert_content_5);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent(alertContent_5).init(data);
    }

    //显示集齐SSS卡兑换神秘大奖的弹窗
    onShowMysteryJackpotPop(data: any) {
        let showPopNode = cc.instantiate(this.alert_content_6);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent(alertContent_6).init(data);
    }

    //关闭提示弹窗
    onCloseAlertPanel() {
        alertComponent.instance.node.active = false;
        alertComponent.instance.node.removeAllChildren();
    }

    update(dt: number) {

    }


}


