import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class topBar extends cc.Component {
    @property(cc.Sprite)
    title_img: cc.Sprite = null;

    @property(cc.SpriteFrame)//title图片数组
    titleArr: cc.SpriteFrame[] = [];

    static instance: topBar = null;

    onLoad() {
        topBar.instance = this;
        DznSocket.on(gameData.messageFlag.CHANGE_SHOW_LAYER, this.updateCurTitle, this);//弹出搓牌界面协议
    }

    start() {
        this.title_img.spriteFrame = this.titleArr[0];
    }

    //初始化当前title图片
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


