import Handler from "../../lightUI/utils/Handler";
import HallNotification from "../events/HallNotification";
import HallFacade from "./HallFacase";
import HallAlert from "../utils/HallAlert";
import GameHttpService from "./GameHttpService";
import LightUI from "../../lightUI/LightUI";
import MountDataAbs from "../../lightUI/components/MountDataAbs";
import netCom from "../../../Script/component/netCom";
import { gameData } from "../../../Script/component/gameData";

/**
 * 这里处理与服务器段的http通信事务
 */
export default class HttpService extends com.lightMVC.parrerns.Model implements com.lightMVC.interfaces.IModel {

    public static NAME: string = "HttpService";

    public tenantId: string = "AS";
    private _token: string = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjI2MzMxLCJhdWQiOiIiLCJleHAiOjE2NjUwNDcyNzgsImlhdCI6MTY2MjQ1NTI3OCwiaXNzIjoiIiwianRpIjoiYTljYzEyMzhlY2MwZDg2NDhhMGNjN2UwODQ4MGQ4MTEiLCJuYmYiOjE2NjI0NTUyNzgsInN1YiI6IiJ9.ITQC7zbvDV8OpUrTfO3o69STngyxbg30Q90UH6FaNGw";

    public static readonly POST: string = "POST";
    public static readonly PUT: string = "PUT";

    constructor() {
        super(HttpService.NAME);
        this.token = cc.sys.localStorage.getItem('token');
        this.tenantId = cc.sys.localStorage.getItem('tenantId') || 'AS';
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
