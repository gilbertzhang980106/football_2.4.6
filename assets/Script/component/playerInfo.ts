import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class playerInfo extends cc.Component {
    @property(cc.Sprite)
    headImg: cc.Sprite = null;

    @property(cc.Label)
    nickName: cc.Label = null;

    @property(cc.Label)
    myScore: cc.Label = null;

    @property(cc.Label)
    myCard: cc.Label = null;

    // @property(cc.Toggle)
    // toggle_menu: cc.Toggle = null;

    // @property(cc.Node)
    // menu_group: cc.Node = null;


    static instance: playerInfo = null;

    onLoad() {
        playerInfo.instance = this;
    }

    start() {

    }

    //接口回调成功后初始化信息显示
    init(data: apiData.user_info) {
        //初始化个人信息
        playerInfo.instance.nickName.string = data.nickname;
        playerInfo.instance.myScore.string = data.points.toString();
        // playerInfo.instance.myCard.string = data.card.toString();
        utils.spriteSetImgByUrl(playerInfo.instance.headImg, data.avatar);
        // playerInfo.instance.menu_group.active = playerInfo.instance.toggle_menu.isChecked;
    }

    // onShowMenuGroup(){
    //     playerInfo.instance.menu_group.active = playerInfo.instance.toggle_menu.isChecked;
    // }

    // onHideMenuGroup(){
    //     playerInfo.instance.menu_group.active = playerInfo.instance.toggle_menu.isChecked = false;
    // }

    //切换主界面
    onClickCardReward(){
        DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.MAIN_HOME);
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

     //切换规则界面
    //  onClickRule(){
    //     playerInfo.instance.onHideMenuGroup();
    //     DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.CARD_RULE);
    // }


    update(dt: number) {

    }
    
}


