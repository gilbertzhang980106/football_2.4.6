import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class bottomBar extends cc.Component {

    static instance: bottomBar = null;

    onLoad() {
        bottomBar.instance = this;
    }

    start() {

    }

    //切换卡包界面
    onClickCardBag(){
        DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.CARD_BAG);
    }

    //切换兑换界面
    onClickCardExchange(){
        DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.CARD_EXCHANGE);
    }

    //切换卡牌记录界面
    onClickCardRecord(){
        DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.CARD_RECORD);
    }

    update(dt: number) {

    }
    
}


