import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

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
        if(alertComponent.instance.node.childrenCount>0)alertComponent.instance.node.removeAllChildren();
        alertComponent.instance.node.active = true;
        switch (type) {
            case gameData.SHOW_MAIN_HOME_ALERT.ERROR_ALERT:
                this.onShowErrorPop(data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.NO_SCORE:
                this.onShowNoScorePop(data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.UNLOCK_NEW_CARD_ONE:
                this.onShowUnlockDrawOnePop(0, data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.UNLOCK_NEW_CARD_TEN:
                this.onShowUnlockDrawTenPop(0, data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.DRAW_NEW_CARD_ONE:
                this.onShowUnlockDrawOnePop(1, data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.DRAW_NEW_CARD_TEN:
                this.onShowUnlockDrawTenPop(1, data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.EXCHANGE_CARD:
                this.onShowExchangeCardPop(data);
                break;
            case gameData.SHOW_MAIN_HOME_ALERT.MYSTERY_JACKPOT:
                this.onShowMysteryJackpotPop(data);
                break;
        }
    }

    //显示错误信息类的弹窗
    onShowErrorPop(data: any) {
        let showPopNode = cc.instantiate(this.alert_content_1);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent("").init(data);
    }

    //显示积分不够的弹窗
    onShowNoScorePop(data: any) {
        let showPopNode = cc.instantiate(this.alert_content_1);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent("").init(data);
    }

    //显示解锁/抽中新卡片一张的弹窗 type 0-解锁 1-抽中
    onShowUnlockDrawOnePop(type: number, data: any) {
        let showPopNode = cc.instantiate(this.alert_content_1);
        showPopNode.active = true;
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.getComponent("").init(data);
    }

    //显示解锁/抽中新卡片十张的弹窗 type 0-解锁 1-抽中
    onShowUnlockDrawTenPop(type: number, data: any) {
        let showPopNode = cc.instantiate(this.alert_content_1);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent("").init(data);
    }

    //显示兑换卡片的弹窗
    onShowExchangeCardPop(data: any) {
        let showPopNode = cc.instantiate(this.alert_content_1);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent("").init(data);
    }

    //显示集齐SSS卡兑换神秘大奖的弹窗
    onShowMysteryJackpotPop(data: any) {
        let showPopNode = cc.instantiate(this.alert_content_1);
        showPopNode.parent = alertComponent.instance.node;
        showPopNode.active = true;
        showPopNode.getComponent("").init(data);
    }

    //关闭提示弹窗
    onCloseAlertPanel() {
        alertComponent.instance.node.active = false;
        alertComponent.instance.node.removeAllChildren();
    }

    update(dt: number) {

    }


}


