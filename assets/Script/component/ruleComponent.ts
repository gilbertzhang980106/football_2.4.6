import { utils } from "./utils"
import { gameData } from "./gameData";

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

    update(dt: number) {

    }
    
}


