import LEvent from "../lightUI/events/LEvent";
import Dictionary from "../lightUI/utils/Dictionary";

export namespace gameData {
    /**
     * 主页信息
     */
    export class roomData {
        public static tokenData = "";//
        public static http = "";//
        public static apiport = "";//
        public static requestUrl = "";
        
        /** 跑马灯消息*/
        public static MARQUEE: any[];

        public static updateMarquee(bullet: apiData.bulletin_info){
            this.MARQUEE.push(bullet);
        }

        public static setTokenData(data: string) {
            this.tokenData = data;
        }

        public static setHttp(data: string) {
            this.http = data;
        }

        public static setApiport(data: string) {
            this.apiport = data;
        }
        
        public static setRequestUrl() {
            this.requestUrl = gameData.roomData.http + gameData.roomData.apiport + "/api/v1/Star/";
        }
    }

    /**
     * 接口请求
     */
    export class httpServer {
        // public static requestUrl = 
        /**主页信息 用户信息 */
        public static requestMainHomeInfo(callback: Function) {
            let param = {
                // token: gameData.roomData.tokenData,
            }
            let _url = gameData.roomData.requestUrl + "home";
            gameData.httpServer.httpGetCallBack(_url, param, function (data: any) {
                callback && callback(data);
            });
        }

        /**post回调 */
        public static httpPostCallBack(path, params, callback: Function, fireParam: boolean = false) {
            let url = gameData.roomData.http + ':'+gameData.roomData.apiport + "/v1/" + path;
            return new Promise((resolve, reject) => {
                var xhr = cc.loader.getXMLHttpRequest();
                xhr.onreadystatechange = function () {
                    // cc.log("Get: readyState:" + xhr.readyState + " status:" + xhr.status);
                    if (xhr.readyState === 4 && xhr.status == 200) {
                        let respone = xhr.responseText;
                        console.log("respone ", respone);

                        if (callback) {
                            if (respone == "" || respone == null) {
                                if (fireParam == true) callback(params);
                                else callback(null);
                            } else {
                                if (fireParam == true) callback(respone, params);
                                else callback(respone);
                            }
                        }
                    } else if (xhr.readyState === 4 && xhr.status == 400) {
                        let respone = JSON.parse(xhr.responseText);
                        console.log("respone err", respone);


                    } else if (xhr.readyState == 4 && xhr.status == 401) {
                        //callback(-1);
                        this.checkErro();
                    }
                }.bind(this);

                xhr.open("POST", url, true);



                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
                xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
                xhr.setRequestHeader("Content-Type", "application/json");


                xhr.setRequestHeader('Authorization', gameData.roomData.tokenData);

                xhr.timeout = 8000;// 5 seconds for timeout
                if (params == null) {
                    xhr.send();
                    return;
                }
                xhr.send(JSON.stringify(params));
            })
        }

        /**get回调 */
        public static httpGetCallBack(url, param, callback: Function) {
            let xhr = cc.loader.getXMLHttpRequest();

            param = (param) ? param : {};
            var params = [];
            for (var key in param) {
                params.push(key + '=' + param[key]);
            }
            //参数拼接方式
            // var dataStr = params.join('&');
            // url += "?" + dataStr;

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    let respone: any = xhr.responseText;
                    if (respone) respone = JSON.parse(respone);
                    console.log("respone ", respone instanceof Array, respone);
                    callback && callback(respone)
                } else if (xhr.readyState === 4 && xhr.status == 400) {
                    let respone = JSON.parse(xhr.responseText);
                    console.log("respone err", respone);
                } else {
                }
            }.bind(this);
            xhr.withCredentials = true;
            xhr.open('GET', url, true);

            xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:7456');
            xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
            xhr.setRequestHeader("Content-Type", " text/html");
            // if (param.token) xhr.setRequestHeader('Authorization', param.token);
            xhr.setRequestHeader('Authorization', gameData.roomData.tokenData);

            // xhr.setRequestHeader('tenantId', param.tenantId);
            xhr.timeout = 8000;// 8 seconds for timeout

            xhr.send();
        }

    }

    /**
     * 读写文件
     */
    export class WebviewWriteAndReadFile {
        public static fileJson = null;

        static get volumeMusic(){
            let betNum = cc.sys.localStorage.getItem("autoBetScore") || 0;
            return betNum
        }
        static set volumeMusic(autoBet: any){
            cc.sys.localStorage.setItem("autoBetScore",autoBet)
        }
    }

    /**
     * 加载预制体
     * 二级弹窗
     */
    export class PreloadPrefab {
        public static _uiDic: Dictionary = new Dictionary;
        public static chat1: string = "prefabs/chat1";//聊天窗1
        public static chat2: string = "prefabs/chat2";//聊天窗2
        public static jsfj_layer: string = "prefabs/jsfj_layer";//解散房间
        public static yxsz_layer: string = "prefabs/yxsz_layer";//游戏设置
        public static sjhg_layer: string = "prefabs/sjhg_layer";//上局回顾
        public static pgz_layer: string = "prefabs/pgz_layer";//旁观列表
        public static thRoomDataView: string = "hall/teahouse/main/ThRoomDataView";//房间详情
        public static jackpot_detail: string = "prefabs/jackpot_detail";//大奖池详情
        public static redBagNode: string = "prefabs/redBagNode";//抢红包
        public static redbag_layer: string = "prefabs/redbag_layer";//红包雨
        public static home_bg_mohu: string = "prefabs/home_bg_mohu";//战绩
        public static shopView: string = "hall/main/shopView";//充值
        public static grxx_layer: string = "prefabs/grxx_layer";//个人信息

        public static trusteeTip1: string = "prefabs/trusteeTip1";
        public static trusteeTip2: string = "prefabs/trusteeTip2";
        public static trusteeShip: string = "prefabs/trusteeShip";

        //预加载预制体
        public static loadPrefab() {
            let prefab = [PreloadPrefab.pgz_layer,PreloadPrefab.sjhg_layer, PreloadPrefab.yxsz_layer ,PreloadPrefab.chat1, PreloadPrefab.chat2, PreloadPrefab.jsfj_layer, PreloadPrefab.jackpot_detail, PreloadPrefab.redBagNode, PreloadPrefab.redbag_layer,PreloadPrefab.home_bg_mohu,PreloadPrefab.shopView];
            prefab.forEach((value, index) => {
                cc.resources.preload(value);
            })
        }

        //优先加载托管弹窗&&房间信息弹窗资源
        public static loadPrefabFirst() {
            let prefab = [PreloadPrefab.thRoomDataView];
            prefab.forEach((value, index) => {
                cc.resources.preload(value);
            })
        }

        /**
         * 加载UI
         * @param url 
         * @param parent 
         * @param mask              default true    是否需要挡住下层点击
         * @param autoRemove           default true     是否自动移除  是的话 在接受node close事件时候 销毁和移除ui
         * @param completeHandler 
         * @param progressCallback 
         */
        public static loadUI(url: string, parent: cc.Node, mask: boolean = true, autoRemove: boolean = true, completeHandler?: (node: cc.Node) => void, progressCallback?: (completedCount: number, totalCount: number, item: any) => void) {
            let ui: cc.Node = this._uiDic.get(url);
            if (ui) {
                PreloadPrefab.showUI(url, ui, parent, mask, autoRemove, completeHandler);
            } else {
                cc.loader.loadRes(url, progressCallback,
                    (err, prefab) => {
                        if (err == null && prefab) {
                            let ui: cc.Node = cc.instantiate(prefab)
                            if (ui) {
                                PreloadPrefab.showUI(url, ui, parent, mask, autoRemove, completeHandler);
                            }
                        } else {
                            cc.warn("加载UI：" + url + "错误");
                        }
                    }
                );
            }
        }

        /**显示 UI */
        public static showUI(url: string, ui: cc.Node, parent: cc.Node, mask: boolean = true, autoRemove: boolean = false, completeHandler?: (node: cc.Node) => void): void {
            console.log("showUI url:", url)
            this._uiDic.set(url, ui);
            if (ui.parent != null) {
                if (completeHandler) completeHandler(ui);
                return;
            }
            // if (mask == true) ui.on(cc.Node.EventType.TOUCH_START, () => { })
            if (mask == true) ui.addComponent(cc.BlockInputEvents);
            if (parent) parent.addChild(ui);
            if (completeHandler) completeHandler(ui);
            setTimeout(() => {
                //确保 第一次时候  onShow 在start后触发
                ui.dispatchEvent(new LEvent(LEvent.SHOW));
            }, 0);
            if (autoRemove == true) ui.on(LEvent.CLOSE, (e: LEvent) => {
                //做好消除工作
                let node: cc.Node = e.target;
                PreloadPrefab.disdroyUI(url);
            });
        }
        public static getUI(url: string): cc.Node {
            return this._uiDic.get(url);
        }
        public static addUI(ui: cc.Node, parent: cc.Node, mask: boolean = true, autoRemove: boolean = false): void {
            if (mask == true) ui.addComponent(cc.BlockInputEvents);
            if (parent) parent.addChild(ui);
            ui.dispatchEvent(new LEvent(LEvent.SHOW));
            if (autoRemove == true) ui.on(LEvent.CLOSE, (e: LEvent) => {
                //做好消除工作
                let node: cc.Node = e.target;
                node.destroy();
            });
        }
        public static getNodeUrl(node: cc.Node): string {
            for (var k of this._uiDic.keys) {
                if (this._uiDic.get(k) == node) return k;
            }
            return null;
        }
        public static getUIComponent<T>(url: string, clazz: T): T {
            return PreloadPrefab.getUI(url).getComponent(clazz as any) as any;
        }
    
        /**
         * 销毁UI
         * @param url 
         */
        public static disdroyUI(url: string) {
            // console.log("disdroyUI url:", url)
            let node: cc.Node = this.hideUI(url);
            if (node == null) return;
            node.destroy();
            this._uiDic.remove(url);
        }
    
        public static removeUI(url: string) {
            let node: cc.Node = this._uiDic.get(url);
            node.removeFromParent(false);
        }
    
        public static removeAllUI(): void {
            let d: Dictionary = this._uiDic;
            for (let key in d) {
                d[key].removeFromParent(false);
            }
        }
        public static removeUIByNode(node: cc.Node) {
            let url: string = this.getNodeUrl(node);
            if (!url) return;
            this.removeUI(url);
        }
        
        /**
         * 隐藏ui
         * @param url 
         * @returns 
         */
        public static hideUI(url: string): cc.Node {
            // console.log("hideUI ", url)
            let ui: cc.Node = this._uiDic.get(url);
            if (ui == null) return null;
            ui.removeFromParent(false);
            return ui;
        }

    }

    /**
     * 原生函数调用
     */
    export class nataviApi {

        public static rnOperaData(){
            return window['RnOpera'];
        }

        public static rnOpera(data){
            nataviApi.rnOperaData() && window['RnOpera'](data);
        }

        public static backHall(){
            window['backHall'] && window['backHall']();
        }

        //原生端震动接口pattern[]在 Android 上，pattern数组的奇数索引代表振动持续时间，而偶数索引代表分离时间。在 iOS 上，pattern数组中的数字代表分离时间，因为振动持续时间是固定的。
        // repeat-是否重复震动
        public static vibrate(pattern?: number[], repeat?: boolean, webview?, navigation?) {
            if(gameData.WebviewWriteAndReadFile.fileJson && gameData.WebviewWriteAndReadFile.fileJson.shake <=0)return;
            if(cc.sys.isMobile)window['RnOpera']({cmd:'vibrate',data:{}});
            // (pattern?: number | number[] | null, repeat?: boolean | null): void;
        }

        //cancel()被调用
        public static cancelVibrate() {
            if(cc.sys.isMobile)window['RnOpera']({cmd:'cancel()'});
        }
    }
}