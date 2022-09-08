import { utils } from "./utils"
import { gameData } from "./gameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class topBar extends cc.Component {
    @property(cc.Sprite)
    title_img: cc.Sprite = null;

    @property(cc.Node)
    btn_back: cc.Node = null;

    static instance: topBar = null;

    onLoad() {
        topBar.instance = this;
    }

    start() {

    }

    //初始化当前title图片
    init(data: apiData.user_info) {
        
    }

    //title图片更新
    updateCurTitle(){

    }

    //返回上一级
    backLastLayer(){

    }

    update(dt: number) {

    }
    
}


