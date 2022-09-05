import HallNotification from "../events/HallNotification";
import HallAlert from "../utils/HallAlert";
import MountDataAbs from "../../lightUI/components/MountDataAbs";
import HallFacade from "../HallFacase";

/**
 * 这里处理与服务器段的http通信事务  游戏相关接口在这里
 */
export default class GameHttpService extends com.lightMVC.parrerns.Model implements com.lightMVC.interfaces.IModel {

    public static NAME: string = "GameHttpService";

    public urlM: HttpUrlManager = new HttpUrlManager();
    public tenantId: string = "AS";
    private _token: string;

    public static readonly POST: string = "POST";
    public static readonly PUT: string = "PUT";

    constructor() {
        super(GameHttpService.NAME);
        this.token = cc.sys.localStorage.getItem('token');
        // this.urlM.rootIp = window.haoyunconfig.ip;
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

        let lobbyhttp = window.GetAppConfig()['lobbyhttp'];
        let htp = lobbyhttp.split(':')[0];
        url = htp + "://" + url;


        let xhr = cc.loader.getXMLHttpRequest();

        param = (param) ? param : {};
        // param.tenantId = this.tenantId;

        var params = [];
        for (var key in param) {
            params.push(key + '=' + param[key]);
        }
        var dataStr = params.join('&');
        url += "?" + dataStr;
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
}

export class HttpUrlManager {

    public rootIp: string = window.GetAppConfig()['gameHttp'] + ':' + window.GetAppConfig()['gameWsPort'] + '/api/';
    public version: string = "v1";

    //--------------------------createroom-------------------------
    public get clubSeachScore(): string {

        return this.rootIp + this.version + "/point/queryPoint";

    }

    //创建桌台
    public get createClubDesk(): string {
        return this.rootIp + this.version + "/desk/createClubDesk";
    }

    //更新桌台
    public get updateClubDesk(): string {
        return this.rootIp + this.version + "/desk/updateClubDesk";
    }

    //删除桌台
    public get getDeleteClubDesk(): string {
        return this.rootIp + this.version + "/desk/deleteClubDesk/";
    }

    //查询桌台
    public get queryClubDesks(): string {
        return this.rootIp + this.version + "/desk/queryClubDesks";
    }
    // 加入好友房间
    public get queryJoinRoomCode(): string {
        return this.rootIp + this.version + "/desk/checkClubDesk";
    }
    //俱乐部排行榜
    public get queryThRecordRank(): string {
        return this.rootIp + this.version + "/rankRecord/queryRecord"
    }
    //俱乐部 查询排名
    public get queryAllLeaderboard(): string {
        return this.rootIp + this.version + "/clubrecord/query-all-leaderboard";
    }

    //俱乐部 删除单个或者所有
    public get deleteLeaderboard(): string {
        return this.rootIp + this.version + "/clubrecord/delete-leaderboard";
    }
    // 排行榜清理
    public get rankClearRecord(): string {
        return this.rootIp + this.version + "/rankRecord/clearRecord";
    }
    // 排行榜统计
    public get rankRecordStatis(): string {
        return this.rootIp + this.version + "/rankRecord/statistics"
    }
    // 排行榜清理
    public get rankClearRecordAll(): string {
        return this.rootIp + this.version + "/rankRecord/clearAll";
    }
    //俱乐部 统计
    public get countAllLeaderboardInfo(): string {
        return this.rootIp + this.version + "/clubrecord/count-all-leaderboard-info";
    }


    /** 战绩查询*/
    public get zhanjiRecrod(): string {
        return this.rootIp + this.version + "/game/queryBetRecords";
    }
    /** 战绩详情*/
    public get betRecordDetails(): string {
        return this.rootIp + this.version + "/game/betRecordsDetails";
    }
    /** 牛牛战绩详情*/
    public get NNbetRecordDetails(): string {
        return this.rootIp + this.version + "/game/niuNiuRecordsDetails"
    }
}