import { utils } from "./utils"
import { gameData } from "./gameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class playerInfo extends cc.Component {
    @property(cc.Sprite)
    headImg: cc.Sprite = null;

    @property(cc.Label)
    nickName: cc.Label = null;

    @property(cc.Label)
    myScore: cc.Label = null;


    static instance: playerInfo = null;

    onLoad() {
        playerInfo.instance = this;
    }

    start() {

    }

    //接口回调成功后初始化信息显示
    init(data: apiData.user_info) {
        //初始化个人信息
        this.nickName.string = data.nickname;
        this.myScore.string = data.points.toString();
        this.spriteSetImgByUrl(this.headImg, data.avatar);
    }

    public spriteSetImgByUrl(sp: cc.Sprite, url: string, complete: Function = null) {
        if (!url) return;
        let remot: boolean = (url.indexOf("http") == 0)
        if (remot == true) {
            cc.loader.load(url + '?aaa=aa.jpg', function (err, texture) {
                var sprite = new cc.SpriteFrame(texture);
                sp.spriteFrame = sprite;
                if (complete) complete();
            });
        } else {
            cc.loader.loadRes(url, function (err, texture) {
                var sprite = new cc.SpriteFrame(texture);
                sp.spriteFrame = sprite;
                if (complete) complete();
            });
        }
    }

    update(dt: number) {

    }
    
}


