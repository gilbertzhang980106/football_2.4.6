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
        // cardsRecordLayer.instance.onClickOutput();
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

    //切换主界面
    onClickCardReward(){
        DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.MAIN_HOME);
    }
  

   

    update(dt: number) {

    }


}


