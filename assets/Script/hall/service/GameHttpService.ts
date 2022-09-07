import HallNotification from "../events/HallNotification";
import HallAlert from "../utils/HallAlert";
import MountDataAbs from "../../lightUI/components/MountDataAbs";
import HallFacade from "./HallFacase";

/**
 * 这里处理与服务器段的http通信事务  游戏相关接口在这里
 */
export default class GameHttpService extends com.lightMVC.parrerns.Model implements com.lightMVC.interfaces.IModel {
    public static NAME: string = "GameHttpService";
    public tenantId: string = "AS";
    private _token: string = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjI2MzMxLCJhdWQiOiIiLCJleHAiOjE2NjUwNDcyNzgsImlhdCI6MTY2MjQ1NTI3OCwiaXNzIjoiIiwianRpIjoiYTljYzEyMzhlY2MwZDg2NDhhMGNjN2UwODQ4MGQ4MTEiLCJuYmYiOjE2NjI0NTUyNzgsInN1YiI6IiJ9.ITQC7zbvDV8OpUrTfO3o69STngyxbg30Q90UH6FaNGw";
    public static readonly POST: string = "POST";
    public static readonly PUT: string = "PUT";

    constructor() {
        super(GameHttpService.NAME);
        this.token = cc.sys.localStorage.getItem('token');
    }

    public get token(): string {
        return this._token;
    }
    public set token(value: string) {

        this._token = value;
        cc.sys.localStorage.setItem('token', this._token);
    }

    public set _tenantId(val) {
        this.tenantId = val;
    }
    httpGet(url, param, callback: Function) {

        // let lobbyhttp = window.GetAppConfig()['lobbyhttp'];
        // let htp = lobbyhttp.split(':')[0];
        // url = htp + "://" + url;

        url = window.GetAppConfig()['apiAdrress'] + url;


        let xhr = cc.loader.getXMLHttpRequest();

        param = (param) ? param : {};
        // param.tenantId = this.tenantId;

        var params = [];
        for (var key in param) {
            params.push(key + '=' + param[key]);
        }
        // var dataStr = params.join('&');
        // url += "?" + dataStr;
        // this.sentNotification(HallNotification.SMALL_LOADING_SHOW, "httpGetCallBack");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                let respone: any = xhr.responseText;
                if (respone) respone = JSON.parse(respone);

                callback && callback(respone)
                // this.sentNotification(HallNotification.SMALL_LOADING_HIDE, "httpGetCallBack");
            } else if (xhr.readyState === 4 && xhr.status == 400) {
                let respone = JSON.parse(xhr.responseText);

                HallAlert.SmallAlert(respone.message);
                // this.sentNotification(HallNotification.SMALL_LOADING_HIDE, "httpGetCallBack");
            } else if (xhr.readyState === 4 && xhr.status == 401) {
                this.checkErro();
            }
        }.bind(this);
        xhr.withCredentials = true;
        xhr.open('GET', url, true);

        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
        xhr.setRequestHeader("Content-Type", " text/html");
        if (this.token) xhr.setRequestHeader('Authorization', this.token);

        // xhr.setRequestHeader('tenantId', this.tenantId);
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
     * 发起post请求 成功后回调callback
     * @param url 
     * @param params 
     * @param callback 
     * @param fireParam         是否把请求参数返回给回调
     * @returns 
     */
    httpPost(url, params, callback: Function, fireParam: boolean = false) {
        let lobbyhttp = window.GetAppConfig()['lobbyhttp'];
        let htp = lobbyhttp.split(':')[0];
        url = htp + "://" + url;
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
                } else if (xhr.readyState === 4 && xhr.status == 401) {
                    this.checkErro();
                    //callback(-1);
                }
            }.bind(this);

            xhr.open("POST", url, true);

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

    /**主页信息 用户信息 */
    public requestMainHomeInfo(callback: Function) {
        let param = {}
        this.httpGet("home", param, function (data: any) {
            callback && callback(data);
        });
    }
}