import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

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

    //活动推荐banner组件
    @property(cc.Node)
    activity: cc.Node;

    static instance: layer_reward_card = null;

    onLoad() {
        layer_reward_card.instance = this;
    }

    start() {
        
    }

    //点击抽一次
    onClickOneDraw(){
        // DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.CARD_RECORD);
    }

    //点击抽十次
    onClickTenDraw(){
        
    }

    //点击合成大奖
    onClickHecheng(){
        
    }

    //点击打开红包
    onClickOpenRedBag(){
        
    }

    update(dt: number) {

    }
    
    
}


