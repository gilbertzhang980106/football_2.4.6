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
    public cardId = null;

    onLoad() {
        // this.instance = this;
    }

    start() {
        this.bg_guang.active = false;
        this.lb_num.node.active = false;
    }

    //渲染卡片信息
    init(data: apiData.card) {
        if (data.img.length > 0) utils.spriteSetImgByUrl(this.img_card, data.img_text);
        this.lb_type.string = data.type_text;
        this.lb_name.string = data.title;
        this.lb_level.string = data.level;
        this.lb_rate.string = data.rate;
        this.cardId = data.id;
    }

    setGuang(isShowGuang: boolean) {
        this.bg_guang.active = isShowGuang;
    }

    setNum(num: any) {
        this.lb_num.node.active = true;
        this.lb_num.string = num + '';
    }

    setScale() {
        this.node.scaleX = 0.35;
        this.node.scaleY = 0.35;
    }

    update(dt: number) {

    }


}


