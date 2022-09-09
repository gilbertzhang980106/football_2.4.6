import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class card extends cc.Component {
    @property(cc.Node)
    bg_guang: cc.Node;

    @property(cc.Sprite)
    img_card: cc.Sprite = null;

    @property(cc.Label)
    lb_type: cc.Label = null;

    @property(cc.Label)
    lb_name: cc.Label = null;

    @property(cc.Label)
    lb_level: cc.Label = null;

    @property(cc.Label)
    lb_rate: cc.Label = null;

    @property(cc.Label)
    lb_num: cc.Label = null;


    static instance: card = null;
    static cardId = null;

    onLoad() {
        card.instance = this;
    }

    start() {
        card.instance.bg_guang.active = false;
        card.instance.lb_num.node.active = false;
    }

    //渲染卡片信息
    init(data: apiData.card) {
        if (data.img.length > 0) utils.spriteSetImgByUrl(card.instance.img_card, data.img_text);
        card.instance.lb_type.string = data.type_text;
        card.instance.lb_name.string = data.title;
        card.instance.lb_level.string = data.level;
        card.instance.lb_rate.string = data.rate;
        card.cardId = data.id;
    }

    setGuang(isShowGuang: boolean) {
        card.instance.bg_guang.active = isShowGuang;
    }

    setNum(num: any) {
        card.instance.lb_num.node.active = true;
        card.instance.lb_num.string = num + '';
    }

    setScale() {
        card.instance.node.scaleX = 0.35;
        card.instance.node.scaleY = 0.35;
    }

    update(dt: number) {

    }


}


