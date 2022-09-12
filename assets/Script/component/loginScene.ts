import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class loginScene extends cc.Component {
    @property(cc.Sprite)
    login_bg: cc.Sprite = null;

    @property(cc.Sprite)
    img_logo: cc.Sprite = null;

    @property(cc.EditBox)
    account_editbox: cc.EditBox = null;

    @property(cc.EditBox)
    psw_editbox_1: cc.EditBox = null;

    @property(cc.EditBox)
    psw_editbox_2: cc.EditBox = null;

    @property(cc.EditBox)
    psw_editbox_3: cc.EditBox = null;

    @property(cc.EditBox)
    psw_editbox_4: cc.EditBox = null;

    @property(cc.Button)
    btn_login: cc.Button = null;

    static instance: loginScene = null;

    onLoad() {
        loginScene.instance = this;

    }

    start() {
        this.btn_login.node.on(cc.Node.EventType.TOUCH_START, () => {
            //账号规则检测
            // if(this.account_editbox.string.length < 7)
            // {
            //     return;
            // }
            console.log("输入的账号为：" + this.account_editbox.string);

            //密码规则检测
            console.log("输入的密码为：" + (this.getInputPsw()));

            //校验登陆接口 

            //跳转loading场景
            this.scheduleOnce(() => {
                cc.director.loadScene("loading");
            }, 3);
        });
    }

    //获取密码
    getInputPsw() {
        let psw =  this.psw_editbox_1.string.concat(this.psw_editbox_2.string, this.psw_editbox_3.string, this.psw_editbox_4.string);
        return psw;
    }

    /**
     * 
     * 点击注册
     */
    onClickRegist() {

    }

    /**
     * 
     * 点击客服
     */
    onClickKefu() {

    }

    /** 资源加载进度*/
    update(dt: number) {

    }

}


