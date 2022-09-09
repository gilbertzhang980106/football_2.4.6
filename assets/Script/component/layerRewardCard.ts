import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class layerRewardCard extends cc.Component {
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

    //合成大奖按钮
    @property(cc.Node)
    btn_synthesis: cc.Node;

    //红包界面
    @property(cc.Node)
    redbag_content: cc.Node;

    //展示卡片组件
    @property(cc.Node)
    content_show_card: cc.Node;


    static instance: layerRewardCard = null;

    onLoad() {
        layerRewardCard.instance = this;
    }

    start() {

    }

    //初始化主页面活动banner, 活动时间开始, 结束, 兑换积分值
    init(data: apiData.config_info) {
        let imgUrl = window.GetAppConfig()['imageAddress'] + data.banner;
        utils.spriteSetImgByUrl(layerRewardCard.instance.img_banner, imgUrl);
        layerRewardCard.instance.lb_title.string = data.title;
        layerRewardCard.instance.lb_time.string = "活动时间 " + data.show_st_time + "~" + data.show_ed_time;
        layerRewardCard.instance.lb_rule_score.string = "每 " + data.score + " 积分可抽卡 1 次";
    }

    //点击抽一次
    onClickOneDraw() {
        gameData.httpServer.requestOneDraw(1, ({ code, msg, data }) => {
            console.log(data,"抽一次结果");
            if(code === 0){
                //渲染结果
            }else {//活动已结束
                //弹出错误提示
                DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.ERROR_ALERT, msg);
            }
        });//code: number, msg: string, 
            
        
    }

    //点击抽十次
    onClickTenDraw() {
        gameData.httpServer.requestOneDraw(10, ({ code, msg, data }) => {
            console.log(data,"抽十次结果");
            if(code === 0){
                //渲染结果
            }else{
                //弹出错误提示
                DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.ERROR_ALERT, msg);
            }
        });//code: number, msg: string, 
    }

    //点击合成大奖
    onClickHecheng() {
        //参数为合成卡的类型id
        gameData.httpServer.requestComposite(1, ({ code, msg, data }) => {
            if(code === 0){
                //渲染结果
            }else{
                //弹出错误提示
                DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.ERROR_ALERT, msg);
            }
        });//code: number, msg: string, 
    }

    //点击打开红包
    onClickOpenRedBag() {

    }

    update(dt: number) {

    }


}


