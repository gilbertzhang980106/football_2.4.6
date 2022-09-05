import Handler from "../../lightUI/utils/Handler";
import HallNotification from "../events/HallNotification";
import HallFacade from "../HallFacase";
import HallAlert from "../utils/HallAlert";
import GameHttpService from "./GameHttpService";
import LightUI from "../../lightUI/LightUI";
import MountDataAbs from "../../lightUI/components/MountDataAbs";
import netCom from "../../../../component/netCom";
import { gameData } from "../../../../component/gameData";

/**
 * 这里处理与服务器段的http通信事务
 */
export default class HttpService extends com.lightMVC.parrerns.Model implements com.lightMVC.interfaces.IModel {

    public static NAME: string = "HttpService";

    public urlM: HttpUrlManager = new HttpUrlManager();
    public tenantId: string = "AS";
    private _token: string;

    public static readonly POST: string = "POST";
    public static readonly PUT: string = "PUT";

    constructor() {
        super(HttpService.NAME);
        this.token = cc.sys.localStorage.getItem('token');
        this.tenantId = cc.sys.localStorage.getItem('tenantId') || 'AS';
        // this.urlM.rootIp = window.haoyunconfig.ip;
    }

    public get token(): string {
        return this._token;
    }
    public set _tenantId(val) {
        this.tenantId = val;
    }
    public set token(value: string) {
        // console.log("set token==>", value);
        this._token = value;
        cc.sys.localStorage.setItem('token', this._token);


        let games: GameHttpService = HallFacade.getInstance().getModel(GameHttpService.NAME) as GameHttpService;
        if (games) games.token = this._token;
    }

    public loginByTel(param: { account: string, pwd: string }) {
        
        // this.sendRequest();
    }


    httpGetCallBack(url, param, callback: Function, hasTenantId: boolean = false) {



        let xhr = cc.loader.getXMLHttpRequest();
        this.tenantId = cc.sys.localStorage.getItem('tenantId') || 'AS';
        param = (param) ? param : {};
        if (hasTenantId == true) param.tenantId = this.tenantId;

        var params = [];
        for (var key in param) {
            params.push(key + '=' + param[key]);
        }
        var dataStr = params.join('&');
        if (params.length > 0)
            url += "?" + dataStr;

        let none = ['get-bank-card', 'myMessage', 'queryGameConfig'];//筛选loading
        let need = true;
        for (let i = 0; i < none.length; i++) {
            if (url.indexOf(none[i]) != -1)
                need = false;
        }
        if (need)
            this.sentNotification(HallNotification.SMALL_LOADING_SHOW, "httpGetCallBack");

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4 && xhr.status == 200) {
                let respone: any = xhr.responseText;
                if (respone) respone = JSON.parse(respone);

                callback && callback(respone)
                this.sentNotification(HallNotification.SMALL_LOADING_HIDE, "httpGetCallBack");
            } else if (xhr.readyState === 4 && xhr.status == 400) {
                let respone = JSON.parse(xhr.responseText);

                HallAlert.SmallAlert(respone.message);

                this.sentNotification(HallNotification.SMALL_LOADING_HIDE, "httpGetCallBack");
            } else if (xhr.readyState == 4 && xhr.status == 401) {
                this.sentNotification(HallNotification.SMALL_LOADING_HIDE, "httpGetCallBack");
                this.checkErro();
            }
        }.bind(this);
        xhr.withCredentials = true;
        xhr.open('GET', url, true);

        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
        xhr.setRequestHeader("Content-Type", " text/html");
        if (this.token) xhr.setRequestHeader('Authorization', this.token);



        xhr.setRequestHeader('tenantId', this.tenantId);
        xhr.timeout = 8000;// 8 seconds for timeout

        xhr.send();
    }

    private isShowAlert: boolean = false;
    private checkErro(): void {
        if (this.isShowAlert == true) return;
        this.isShowAlert = true;
        this.sentNotification(HallNotification.SMALL_LOADING_HIDE, "httpGetCallBack");
        let merberMount: MountDataAbs = this.getSingleton(MountDataAbs.TOKENERROR) as MountDataAbs;
        merberMount.update({ type: MountDataAbs.TOKENERROR, data: null });

        HallAlert.AlertOk("账号在其它地方登录，请重新登陆!", () => {
            this.isShowAlert = false;
            HallFacade.getInstance().sentNotification(HallNotification.HALL_QUIT);
            HallFacade.getInstance().sentNotification(HallNotification.MAINLAYER_HIDE);
            HallFacade.getInstance().sentNotification(HallNotification.CLB_MIAN_HIDE);
            HallFacade.getInstance().sentNotification(HallNotification.TH_MIAN_HIDE);
            //LightUI.removeAllUI();

        });



    }

    /**
     * get请求
     * @param url 
     * @param param 
     * @param callbackNoritication  //回调的消息
     * @param fireParam             //是否将请求的参数也传递给回调 默认不传递
     */
    static httpGet(url, param, callbackNoritication: Function, fireParam: boolean = false) {
        let xhr = cc.loader.getXMLHttpRequest();

        param = (param) ? param : {};
        param.tenantId = gameData.roomData.tenantId;

        var params = [];
        for (var key in param) {
            params.push(key + '=' + param[key]);
        }
        var dataStr = params.join('&');
        url += "?" + dataStr;

        let none = ['/mail/mine'];//筛选loading
        let need = true;

        for (let i = 0; i < none.length; i++) {
            if (url.indexOf(none[i]) != -1)
                need = false;
        }


        xhr.onreadystatechange = function () {
            // cc.log("Get: readyState:" + xhr.readyState + " status:" + xhr.status);

            if (xhr.readyState === 4 && xhr.status == 200) {
                let respone = {};
                respone["status"] = xhr.status;
                respone['data'] = xhr.responseText
                callbackNoritication(respone);

            } else if (xhr.readyState === 4 && xhr.status == 400) {
                //callback({ status: 401 });
                let respone = JSON.parse(xhr.responseText);
                respone["status"] = xhr.status;

                callbackNoritication(respone);

        
            } 
        }.bind(this);
        xhr.withCredentials = true;
        xhr.open('GET', url, true);

        // if (cc.sys.isNative) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
        // xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Content-Type", " text/html");
        // text/html;charset=UTF-8
        if (gameData.roomData.tokenData) xhr.setRequestHeader('Authorization', gameData.roomData.tokenData);

        xhr.setRequestHeader('tenantId', gameData.roomData.tenantId);
        // xhr.setRequestHeader('Authorization', 'Bearer ' + "");
        // }

        // note: In Internet Explorer, the timeout property may be set only after calling the open()
        // method and before calling the send() method.
        xhr.timeout = 8000;// 8 seconds for timeout

        xhr.send();
    }

    /**
     * 发起post请求 成功后回调callback
     * @param url 
     * @param params 
     * @param callback 
     * @param fireParam         是否把请求参数返回给回调
     * @returns 
     */
    httpPostCallBack(url, params, callback: Function, fireParam: boolean = false) {

        return new Promise((resolve, reject) => {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                // cc.log("Get: readyState:" + xhr.readyState + " status:" + xhr.status);
                if (xhr.readyState === 4 && xhr.status == 200) {
                    let respone = xhr.responseText;


                    if (callback) {
                        if (respone == "" || respone == null) {
                            if (fireParam == true) callback(params);
                            else callback(null);
                        } else {
                            if (fireParam == true) callback(JSON.parse(respone), params);
                            else callback(JSON.parse(respone));
                        }
                    }
                } else if (xhr.readyState === 4 && xhr.status == 400) {
                    let respone = JSON.parse(xhr.responseText);

                    HallAlert.SmallAlert(respone.message);

                } else if (xhr.readyState == 4 && xhr.status == 401) {
                    //callback(-1);
                    this.checkErro();
                }
            }.bind(this);

            xhr.open("POST", url, true);


            // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            // // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            // xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.setRequestHeader("Content-Type", " text/html");
            // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
            // text/html;charset=UTF-8


            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
            xhr.setRequestHeader("Content-Type", "application/json");


            if (this.token) xhr.setRequestHeader('Authorization', this.token);

            xhr.setRequestHeader('tenantId', this.tenantId);
            xhr.timeout = 8000;// 5 seconds for timeout
            if (params == null) {
                xhr.send();
                return;
            }
            xhr.send(JSON.stringify(params));
        })
    }


    /**
     * 发送post 请求
     * @param url 
     * @param params 
     * @param callbackNoritication 
     * @param fireParam 
     * @returns 
     */
    httpPost(url, params, callbackNoritication: string, fireParam: boolean = false, type: string = "POST") {

        return new Promise((resolve, reject) => {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                // cc.log("Get: readyState:" + xhr.readyState + " status:" + xhr.status);
                if (xhr.readyState === 4 && xhr.status == 200) {
                    let respone = xhr.responseText;

                    if (fireParam == true) this.sentNotification(callbackNoritication, { "respone": respone, "param": params });
                    else this.sentNotification(callbackNoritication, respone);
                } else if (xhr.readyState === 4 && xhr.status == 400) {
                    let respone = JSON.parse(xhr.responseText);

                    HallAlert.SmallAlert(respone.message);

                } else if (xhr.readyState == 4 && xhr.status == 401) {
                    //callback(-1);
                    this.checkErro();
                }
            }.bind(this);

            xhr.open("POST", url, true);


            // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            // // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            // xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.setRequestHeader("Content-Type", " text/html");
            // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
            // text/html;charset=UTF-8


            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
            xhr.setRequestHeader("Content-Type", "application/json");


            if (this.token) xhr.setRequestHeader('Authorization', this.token);

            xhr.setRequestHeader('tenantId', this.tenantId);
            xhr.timeout = 8000;// 5 seconds for timeout

            xhr.send(JSON.stringify(params));
        })

    }
}

export class HttpUrlManager {
    public rootIp: string = gameData.roomData.api + ":" + gameData.roomData.apiport + "/api/";
    public version: string = "v1";



    // 获取落地页
    public get getUrlWeb(): string {
        return this.rootIp + this.version + "/supportstaff/query-landingpage-address";
    }
    //手机号码登录
    public get by_tel(): string {
        return this.rootIp + this.version + "/login/by-tel";
    };
    // 微信号登录
    public get by_wechat(): string {
        return this.rootIp + this.version + "/login/by-wechat";
    }
    //账号登录
    public get by_user_no(): string {
        return this.rootIp + this.version + "/login/by-user-no";
    }
    //验证koten
    public get verify_token(): string {
        return this.rootIp + this.version + "/login/verify-token";
    }

    public get tel_retrieve_pwd(): string {
        return this.rootIp + this.version + "/login/tel-retrieve-pwd";
    }
    public get send_verify_code(): string {
        return this.rootIp + this.version + "/login/send-verify-code";
    }

    public get bind_tel(): string {
        return this.rootIp + this.version + "/login/bind-tel";
    }

    public get bing_account(): string {
        return this.rootIp + this.version + "/login/bind-account";
    }

    public get mail_mine(): string {
        return this.rootIp + this.version + "/mail/mine";
    }

    public get mail_read(): string {
        return this.rootIp + this.version + "/mail/read";
    }

    public get mail_del(): string {
        return this.rootIp + this.version + "/mail/delete";
    }

    public get mail_refuseOrAgreeMail(): string {
        return this.rootIp + this.version + "/mail/refuseOrAgreeMail";
    }

    public get unbind_wechat(): string {
        return this.rootIp + this.version + "/login/unbind-wechat";
    }

    public get my_info(): string {
        return this.rootIp + this.version + "/customer/my-info";
    }

    public get sys_dic(): string {
        return this.rootIp + this.version + "/sys-dic/all";
    }
    public get mymessage(): string {

        return this.rootIp + this.version + "/message/myMessage";
    }

    public get queryBossMessage(): string {
        return this.rootIp + this.version + "/message/query-boss-message";
    }
    /** 获取游戏版本*/
    public get gameVersion(): string {
        return this.rootIp + this.version + "/app/version"
    }
    /** 获取游戏配置*/
    public get gameList(): string {
        return this.rootIp + this.version + "/game/queryGameConfig"
    }

    //=========客服===========


    public get kefu(): string {
        return this.rootIp + this.version + "/supportstaff/mysupportstaff";
    }

    //-------------------payment----------------

    public get get_balance(): string {
        return this.rootIp + this.version + "/customer/get-balance";
    }

    //获取充值记录
    public get recharge_record(): string {
        return this.rootIp + this.version + "/payment/recharge-record";
    }

    //获取VIVP充值渠道
    public get vip_channels(): string {
        return this.rootIp + this.version + "/payment/vip-channels";
    }

    //获得充值渠道信息与充值商品信息
    public get channels(): string {
        return this.rootIp + this.version + "/payment/channels";
    }

    //提交支付
    public get recharge(): string {
        return this.rootIp + this.version + "/payment/recharge";
    }

    public get verify_band_card_phone_code(): string {
        return this.rootIp + this.version + "/withdraw/verify-band-card-phone-code";
    }
    //-----------------------bank--------------------------
    //绑定银行卡
    public get bind_bank_card(): string {
        return this.rootIp + this.version + "/withdraw/bind-bank-card";
    }

    //验证银行秘密  银行登录时使用
    public get verify_bank_pwd(): string {
        return this.rootIp + this.version + "/withdraw/verify-bank-pwd";
    }
    // 验证是否需要输入密码
    public get need_bank_pwd(): string {
        return this.rootIp + this.version + "/withdraw/need-bank-pwd";
    }

    //获取银行绑定信息
    public get get_bank_card(): string {
        return this.rootIp + this.version + "/withdraw/get-bank-card";
    }
    //确认兑换
    public get withdraw(): string {
        return this.rootIp + this.version + "/withdraw/withdraw";
    }
    //获取兑换列表信息
    public get get_withdraw_records(): string {
        return this.rootIp + this.version + "/withdraw/get-withdraw-records";
    }

    //存款  将金币转入保险箱
    public get transfer_to_safe_box(): string {
        return this.rootIp + this.version + "/withdraw/transfer-to-safe-box";
    }
    //取款，将金币转出保险箱
    public get transfer_from_safe_box(): string {
        return this.rootIp + this.version + "/withdraw/transfer-from-safe-box";
    }
    //赠送金币给其它用户
    public get send_coin(): string {
        return this.rootIp + this.version + "/withdraw/send-coin";
    }
    //获取赠送记录
    public get get_send_coin_records(): string {
        return this.rootIp + this.version + "/withdraw/get-send-coin-records";
    }
    //获得收取记录
    public get get_receive_coin_records(): string {
        return this.rootIp + this.version + "/withdraw/get-receive-coin-records";
    }
    //查询账务流水
    public get query_trans_logs(): string {
        return this.rootIp + this.version + "/withdraw/query-trans-logs";
    }
    //修改保险箱 银行 密码
    public get change_safe_box_pwd(): string {
        return this.rootIp + this.version + "/withdraw/change-safe-box-pwd";
    }

    //找回银行登录密码
    public get reset_safe_box_pwd(): string {
        return this.rootIp + this.version + "/withdraw/reset-safe-box-pwd";
    }

    //=================俱乐部=======================


    //升级俱乐部
    public get upgreade_club(): string {
        return this.rootIp + this.version + "/club/upgreade-club";
    }

    //添加俱乐部
    public get add_club(): string {
        return this.rootIp + this.version + "/club/add-club";
    }

    //查询俱乐部列表
    public get club_list(): string {
        return this.rootIp + this.version + "/club/club-list";
    }

    //加入俱乐部
    public get join_club(): string {
        return this.rootIp + this.version + "/club/join-club";
    }

    //解散俱乐部
    public get disband_club(): string {
        return this.rootIp + this.version + "/club/disband-club";
    }

    //查询俱乐部设置
    public get query_club_set(): string {
        return this.rootIp + this.version + "/club/query-club-set";
    }

    //设置俱乐部
    public get set_club(): string {
        return this.rootIp + this.version + "/club/set-club";
    }

    //俱乐部加入联盟
    public get join_alliance(): string {
        return this.rootIp + this.version + "/club/join_alliance";
    }

    //====================成员管理======================
    //查询俱乐部会员信息
    public get club_merber_info(): string {
        return this.rootIp + this.version + "/clubmerbermanager/member-info";
    }

    //查询俱乐部会员列表  以及通过playerId搜索 两操作同一接口
    public get merber_list(): string {
        return this.rootIp + this.version + "/clubmerbermanager/merber-list";
    }

    //查询冻结俱乐部成员列表
    public get freeze_list(): string {
        return this.rootIp + this.version + "/clubmerbermanager/freeze-list";
    }

    //冻结俱乐部成员
    public get freeze_merber(): string {
        return this.rootIp + this.version + "/clubmerbermanager/freeze-merber";
    }

    //取消冻结俱乐部成员
    public get cancel_freeze_merber(): string {
        return this.rootIp + this.version + "/clubmerbermanager/cancel-freeze-merber";
    }

    //审核管理列表
    public get audit_management_list(): string {
        return this.rootIp + this.version + "/clubmerbermanager/audit-management-list";
    }

    //同意或者拒绝审核
    public get refuse_or_agree_audit(): string {
        return this.rootIp + this.version + "/clubmerbermanager/refuse-or-agree-audit";
    }

    //设置成为代扣
    public get set_merber_withholding(): string {
        return this.rootIp + this.version + "/clubmerbermanager/set-merber-withholding";
    }

    //设置成为代扣
    public get cancel_set_merber_withholding(): string {
        return this.rootIp + this.version + "/clubmerbermanager/cancel-merber-withholding";
    }


    //同意或者拒绝代扣
    public get refuse_or_agree_withholding(): string {
        return this.rootIp + this.version + "/clubmerbermanager/refuse-or-agree-withholding";
    }

    //设置为代理
    public set_merber_agent(allianceId: string): string {

        return this.rootIp + this.version + "/alliancemerbermanager/set-merber-agent/" + allianceId;
    }

    //设置为管理员
    public set_merber_admin(allianceId: string): string {
        if (allianceId == "")
            return this.rootIp + this.version + "/clubmerbermanager/set-merber-admin";
        return this.rootIp + this.version + "/alliancemerbermanager/set-merber-admin/" + allianceId;
    }

    //取消管理员
    public cancel_merber_admin(allianceId): string {
        if (allianceId == "")
            return this.rootIp + this.version + "/clubmerbermanager/cancel-merber-admin";
        return this.rootIp + this.version + "/alliancemerbermanager/cancel-merber-admin/" + allianceId;
    }

    //转让联盟

    public transfer_alliance(allianceId: string): string {
        return this.rootIp + this.version + "/alliancemerbermanager/transfer-other-member/" + allianceId;
    }
    // 转让俱乐部
    public get club_transfer_alliance(): string {
        return this.rootIp + this.version + "/clubmerbermanager/transfer-alliance"
    }
    public getlianmengInfo(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/alliance-merber-info";
    }

    //添加为合伙人
    public get add_merber_partner(): string {
        return this.rootIp + this.version + "/clubmerbermanager/add-merber-partner";
    }

    //同意或者拒绝为合伙人
    public get refuse_or_agree_partner(): string {
        return this.rootIp + this.version + "/clubmerbermanager/refuse-or-agree-partner";
    }

    //获取合伙人列表
    public get partner_list(): string {
        return this.rootIp + this.version + "/clubmerbermanager/partner-list";
    }


    //获取合伙人列表详情
    public get partner_list_details(): string {
        return this.rootIp + this.version + "/clubmerbermanager/partner-details-list";
    }

    //调配玩家
    public get mobilize_players(): string {
        return this.rootIp + this.version + "/clubmerbermanager/mobilize-players";
    }
    //移除会员
    public get remove_merber(): string {
        return this.rootIp + this.version + "/clubmerbermanager/remove-merber";
    }

    //=================联盟=======================
    //查询联盟分享信息
    public get share(): string {
        return this.rootIp + this.version + "/alliance/share";
    }
    public Clbremove_member(allianceId): string {
        return this.rootIp + this.version + "/alliancemerbermanager/remove-merber/" + allianceId;
    }
    //查询联盟
    public get query_alliance_info(): string {
        return this.rootIp + this.version + "/alliance/query-alliance-info";
    }

    //加入联盟
    public getPlayer_join_alliance(allianceId: string): string {
        return this.rootIp + this.version + "/alliance/join-alliance/" + allianceId + "";
    }

    //退出联盟
    public getPlayer_leave_alliance(allianceId: string): string {
        return this.rootIp + this.version + "/alliance/leave-alliance";
    }

    //查询联盟设置
    public get query_alliance_set(): string {
        return this.rootIp + this.version + "/alliance/query-alliance-set";
    }

    //联盟设置
    public getSetAlliance(allianceId: string): string {
        return this.rootIp + this.version + "/alliance/set-alliance/" + allianceId + "";
    }

    //1.7联盟代理设置列表
    public get alliance_agent_set_list(): string {
        return this.rootIp + this.version + "/alliance/alliance-agent-set-list";
    }

    //1.8联盟代理直属会员返利
    public get query_agent_member_list(): string {
        return this.rootIp + this.version + "/alliance/query-agent-member-list";
    }

    //1.9联盟代理我的代理成员 返利面板
    public get query_sub_agent_member_list(): string {
        return this.rootIp + this.version + "/alliance/query-sub-agent-member-list";
    }

    //返利详情面板
    public get query_sub_agent_member_detail(): string {
        return this.rootIp + this.version + "/alliance/query-sub-agent-member-detail";
    }

    //升级代理
    public getUpgradeAgent(allianceId: string): string {
        return this.rootIp + this.version + "/alliance/upgrade-agent/" + allianceId + "";
    }

    //添加代理查询   设置级别面板 下拉信息查询
    public get select_agent_type(): string {
        return this.rootIp + this.version + "/alliance/select-agent-type";
    }

    //玩家是否加入代理
    public get is_agent(): string {
        return this.rootIp + this.version + "/alliance/is-agent";
    }

    //添加代理
    public getAddAgent(allianceId: string, playerId: string) {
        return this.rootIp + this.version + "/alliance/add-agent/" + allianceId + "?playerId=" + playerId;
    }

    //取消
    public getCancelAgent(allianceId: string, agentId: string): string {
        return this.rootIp + this.version + "/alliance/cancel-agent/" + agentId + "?agentId=" + agentId;
    }

    //生效
    public getTakeEffectAgent(allianceId: string): string {
        return this.rootIp + this.version + "/alliance/take-effect-agent/" + allianceId + "";
    }

    //调整比列
    public getAdjustTatio(allianceId: string): string {
        return this.rootIp + this.version + "/alliance/adjust-ratio/" + allianceId + "";
    }
    //清楚
    public getCleanAgent(allianceId: string, agentId: string): string {
        return this.rootIp + this.version + "/alliance/clean-agent/" + agentId + "?agentId=" + agentId;
    }

    //删除
    public getDeleteAgent(agentId: string): string {
        return this.rootIp + this.version + "/alliance/delete-agent/" + agentId + "";
    }

    //联盟会员alliancemerbermanager/alliance-merber-info
    //会员个人信息
    public get alliance_merber_info(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/alliance-merber-info";
    }

    //会员管理列表,和通过玩家id搜索同一个接口
    public get alliance_merber_list(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/merber-list";
    }

    //冻结会员查询
    public get alliance_freeze_list(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/freeze-list";
    }

    //冻结会员
    public get alliance_freeze_merber(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/freeze-merber";
    }

    //取消冻结会员
    public get alliance_cancel_freeze_merber(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/cancel-freeze-merber";
    }

    //审核管理列表
    public get alliance_audit_management_list(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/audit-management-list";
    }

    //同意或者拒绝审核  邮件内调用
    public get alliance_refuse_or_agree_audit(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/refuse-or-agree-audit";
    }

    //移除会员
    public get alliance_remove_merber(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/remove-merber";
    }

    //设置玩家成为管理員
    public get alliance_set_merber_admin(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/set-merber-admin";
    }

    //取消 玩家成为管理員
    public get alliance_cancel_merber_admin(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/cancel-merber-admin";
    }

    //設置玩家为代理
    public get alliance_set_merber_agent(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/set-merber-agent";
    }

    //取消玩家为代理
    public get alliance_cancel_merber_agent(): string {
        return this.rootIp + this.version + "/alliancemerbermanager/cancel-merber-agent";
    }

    //--------------------------createroom-------------------------

    //创建桌台
    public get createClubDesk(): string {
        return this.rootIp + this.version + "/desk/createClubDesk";
    }

    //更新桌台
    public get updateClubDesk(): string {
        return this.rootIp + this.version + "/desk/updateClubDesk";
    }

    //删除桌台
    public getDeleteClubDesk(id: string): string {
        return this.rootIp + this.version + "/desk/deleteClubDesk/" + id;
    }

    //查询桌台
    public queryClubDesks(): string {
        return this.rootIp + this.version + "/desk/queryClubDesks";
    }
}