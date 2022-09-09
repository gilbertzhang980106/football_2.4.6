import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class cardsRecordLayer extends cc.Component {
    //产出
    @property(cc.Node)
    output_list: cc.Node;

    //消耗
    @property(cc.Node)
    deplete_list: cc.Node;

    @property(cc.Node)
    no_data_gp: cc.Node;

    @property(cc.ToggleContainer)
    toggleContainer: cc.ToggleContainer;

    @property(cc.Toggle)
    toggle_output: cc.Toggle;

    @property(cc.Toggle)
    toggle_deplete: cc.Toggle;
    

    static instance: cardsRecordLayer = null;

    onLoad() {
        cardsRecordLayer.instance = this;
    }

    start() {
        cardsRecordLayer.instance.onClickOutput();
    }

    //初始化
    init(data: apiData.config_info) {
       
    }

    onClickOutput() {
        cardsRecordLayer.instance.output_list.active = true;
        cardsRecordLayer.instance.deplete_list.active = false;
    }

    onClickDeplete() {
        cardsRecordLayer.instance.output_list.active = false;
        cardsRecordLayer.instance.deplete_list.active = true;
    }

    // //点击抽一次 数据类型 apiData.draw_card_info
    // onClickOneDraw() {
    //     gameData.httpServer.requestOneDraw(1, (data) => {
    //         console.log(data,"抽一次结果");
    //         if(data.code === 0){//
    //             //渲染结果解锁十张或者抽中一张
    //             // if(data.type == 0){
    //                 DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.UNLOCK_NEW_CARD_ONE, data.data);
    //             // }else{
    //             //     DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.DRAW_NEW_CARD_ONE, data.data);
    //             // }
    //         }else {//活动已结束{"code":1003,"msg":"积分不足"}
    //             //弹出错误提示
    //             DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.ERROR_ALERT, data.msg);
    //         }
    //     });//code: number, msg: string, 
    // }

    // //点击抽十次 数据类型 apiData.draw_card_ten_info
    // onClickTenDraw() {
    //     gameData.httpServer.requestOneDraw(10, (data) => {
    //         console.log(data,"抽十次结果");
    //         if(data.code === 0){
    //             //渲染结果解锁十张或者抽中十张
    //             // if(data.type == 0){
    //                 DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.UNLOCK_NEW_CARD_TEN, data.data);
    //             // }else{
    //             //     DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.DRAW_NEW_CARD_ONE, data.data);
    //             // }
    //         }else{
    //             //弹出错误提示
    //             DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.ERROR_ALERT, data.msg);
    //         }
    //     });//code: number, msg: string, 
    // }

    // //点击合成大奖 数据类型 apiData.hecheng_card_info
    // onClickHecheng() {
    //     //参数为合成卡的类型id
    //     gameData.httpServer.requestComposite(1, (data) => {
    //         if(data.code === 0){
    //             //渲染结果
    //             DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.MYSTERY_JACKPOT, data.data);
    //         }else{
    //             //弹出错误提示
    //             DznSocket.emit(gameData.messageFlag.SHOW_ALERT_LAYER, gameData.SHOW_MAIN_HOME_ALERT.ERROR_ALERT, data.msg);
    //         }
    //     });//code: number, msg: string, 
    // }

   

    update(dt: number) {

    }


}


