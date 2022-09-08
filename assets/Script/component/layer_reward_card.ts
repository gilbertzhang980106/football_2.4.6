import { utils } from "./utils"
import { gameData } from "./gameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class layer_reward_card extends cc.Component {
    @property(cc.Node)
    toast: cc.Node;

    @property(cc.Label)
    lb_describ: cc.Label = null;

    @property(cc.Sprite)
    img_banner: cc.Sprite = null;

    @property(cc.Label)
    lb_title: cc.Label = null;

    @property(cc.Label)
    lb_time: cc.Label = null;

    @property(cc.Label)
    lb_rule_score: cc.Label = null;

    //抽奖按钮节点--用于显示隐藏
    @property(cc.Node)
    btn_lottery: cc.Node;
    //抽一次按钮
    // @property(cc.Node)
    // btn_lottery_1: cc.Node;

    //抽十次按钮
    // @property(cc.Node)
    // btn_lottery_10: cc.Node;

    //合成大奖按钮
    @property(cc.Node)
    btn_synthesis: cc.Node;

    //红包界面
    @property(cc.Node)
    redbag_content: cc.Node;

    //打开红包按钮
    // @property(cc.Node)
    // btn_open: cc.Node;

    static instance: layer_reward_card = null;

    onLoad() {
        layer_reward_card.instance = this;
    }

    start() {

    }

    //初始化规则内容
    init(data: apiData.config_info) {
        
    }

    update(dt: number) {

    }
    
}


