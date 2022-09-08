import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class activityInfo extends cc.Component {
    @property(cc.Sprite)
    banner_img: cc.Sprite = null;

    @property(cc.Label)
    lb_title: cc.Label = null;

    static instance: activityInfo = null;

    onLoad() {
        activityInfo.instance = this;
        // DznSocket.on(gameData.messageFlag.CHANGE_SHOW_LAYER, this.updateCurTitle, this);
    }

    start() {
        
    }

    //初始化当前活动组件标题, banner图片, 活动时间开始和结束, 抽取分数规则
    init(data: apiData.user_info) {
        
    }

    //title图片更新
    updateCurTitle(type: string){
            switch (type) {
                case gameData.SHOW_LAYER_TYPE.MAIN_HOME:
                    this.title_img.spriteFrame = this.titleArr[0];
                    break;
                case gameData.SHOW_LAYER_TYPE.CARD_BAG:
                    this.title_img.spriteFrame = this.titleArr[1];
                    break;
                case gameData.SHOW_LAYER_TYPE.CARD_EXCHANGE:
                    this.title_img.spriteFrame = this.titleArr[2];
                    break;
                case gameData.SHOW_LAYER_TYPE.CARD_RECORD:
                    this.title_img.spriteFrame = this.titleArr[3];
                    break;
            }
    }

    update(dt: number) {

    }
    
}


