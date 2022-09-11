import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class ruleComponent extends cc.Component {
    @property(cc.Label)
    lb_rule: cc.Label = null;

    static instance: ruleComponent = null;

    onLoad() {
        ruleComponent.instance = this;
    }

    start() {

    }

    //初始化规则内容
    init(data: apiData.config_info) {
        ruleComponent.instance.lb_rule.string = data.rule;
    }

    //切换主界面
    onClickCardReward(){
        DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.MAIN_HOME);
    }

    update(dt: number) {

    }
    
}


