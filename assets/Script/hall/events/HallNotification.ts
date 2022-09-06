export default class HallNotification {
    public static readonly START_UP: string = "startUp";
    public static readonly START_INIT: string = "START_INIT";

    public static readonly HALL_QUIT: string = "HALL_QUIT";      //退出大厅
    public static readonly GAME_QUIT: string = "GAME_QUIT";      //退出游戏

    public static readonly RELOAD_SOCKET: string = "RELOAD_SOCKET";
    public static readonly UP_DATE_VERSION: string = "UP_DATE_VERSION";

    //用户协议
    public static readonly USER_AGREE_SHOW: string = "USER_AGREE_SHOW";
    public static readonly USER_AGREE_HIDE: string = "USER_AGREE_HIDE";
    //找回密码
    public static readonly GET_PWD_SHOW: string = "GET_PWD_SHOW";
    public static readonly GET_PWD_HIDE: string = "GET_PWD_HIDE";
    //账号登录
    public static readonly ACCOUNT_LOGIN_SHOW: string = "ACCOUNT_LOGIN_SHOW";
    public static readonly ACCOUNT_LOGIN_HIDE: string = "ACCOUNT_LOGIN_HIDE";
    //电话登录
    public static readonly PHONE_LOGIN_SHOW: string = "PHONE_LOGIN_SHOW";
    public static readonly PHONE_LOGIN_HIDE: string = "PHONE_LOGIN_HIDE";
    // 绑定登录
    public static readonly PHONE_BIND_WECHAT: string = "PHONE_BIND_WECHAT";
    public static readonly ACCOUNT_BIND_WECHAT: string = "ACCOUNT_BIND_WECHAT";

    //加载进度条
    public static readonly LOADING_SHOW: string = "loadingShow";
    public static readonly LOADING_HIDE: string = "loadingHide";
    //smallLoadin 主要用于http请求时候 锁屏
    public static readonly SMALL_LOADING_SHOW: string = "SMALL_LOADING_SHOW";
    public static readonly SMALL_LOADING_HIDE: string = "SMALL_LOADING_HIDE";

    //大厅前的加载界面
    public static readonly LOADING_LAYER_SHOW_BIND = "LOADING_LAYER_SHOW_BIND";
    public static readonly LOADING_LAYER_HIDE_BIND = "LOADING_LAYER_HIDE_BIND";
    public static readonly LOADING_LAYER_SHOW = "LOADING_LAYER_SHOW";
    public static readonly LOADING_LAYER_HIDE = "LOADING_LAYER_HIDE";
    public static readonly START_PING = "START_PING";

    //游戏大厅
    public static readonly MAINLAYER_SHOW: string = "MAINLAYER_SHOW";
    public static readonly MAINLAYER_HIDE: string = "MAINLAYER_HIDE";
    public static readonly MAINLAYER_WEBVIEW: string = "MAINLAYER_WEBVIEW";
    public static readonly MIAN_RETURN_LOBBY: string = "MIAN_RETURN_LOBBY";
    public static readonly GO_LOBBY_FRESH_BALANCE: string = "GO_LOBBY_FRESH_BALANCE"; //刷新余额
    //游戏消息界面
    public static readonly NEWS_VIEW_SHOW: string = "NEWS_VIEW_SHOW";
    public static readonly NEWS_VIEW_HIDE: string = "NEWS_VIEW_HIDE";

    // 跑马灯
    public static readonly MARQUEE_LOBBY: string = "MARQUEE_LOBBY";
    //手机绑定
    public static readonly MOBLILE_VERIFY_SHOW: string = "MOBLILE_VERIFY_SHOW";
    public static readonly MOBLILE_VERIFY_HIDE: string = "MOBLILE_VERIFY_HIDE";

    //用户信息面板
    public static readonly USERINFO_SHOW: string = "USERINFO_SHOW";
    public static readonly USERINFO_HIDE: string = "USERINFO_HIDE";
    public static readonly USERINFO_OTHER_SHOW: string = "USERINFO_OTHER_SHOW";
    public static readonly USERINFO_OTHER_HIDE: string = "USERINFO_OTHER_HIDE";
    public static readonly USERINFO_UPDATE: string = "USERINFO_UPDATE";
    
    //遮罩
    public static readonly CREATEROOMMASK: string = "CREATEROOMMASK"
    public static readonly HIDEALLpopupLayer: string = "HIDEALLpopupLayer" //清除所有弹窗

    //======================  http  ================
    public static readonly LOGIN_BY_WECHAT: string = "LOGIN_BY_WECHAT";
    public static readonly LOGIN_BY_TEL_REQUEST: string = "LOGIN_BY_TEL_REQUEST";
    public static readonly LOGIN_BY_TEL_RESPONSE: string = "LOGIN_BY_TEL_RESPONSE";
    public static readonly LOGIN_BY_ACCOUNT_REQUEST: string = "LOGIN_BY_ACCOUNT_REQUEST";
    public static readonly LOGIN_BY_ACCOUNT_RESPONSE: string = "LOGIN_BY_ACCOUNT";
    public static readonly LOGIN_CHECK_TOKEN: string = "LOGIN_CHECK_TOKEN";
    public static readonly LOGIN_VERIFY_TOKEN_REQUEST: string = "LOGIN_VERIFY_TOKEN_REQUEST";        //校验koken
    public static readonly LOGIN_VERIFY_TOKEN_RESPONSE: string = "LOGIN_VERIFY_TOKEN_RESPONSE";
    public static readonly LOGIN_TEL_RETRIEVE_PWD_REQUEST: string = "LOGIN_TEL_RETRIEVE_PWD_REQUEST";        //重置密码
    public static readonly LOGIN_TEL_RETRIEVE_PWD_RESPONSE: string = "LOGIN_TEL_RETRIEVE_PWD_RESPONSE";
    public static readonly LOGIN_SEND_VERIFY_CODE_REQUEST: string = "LOGIN_SEND_VERIFY_CODE_REQUEST";        //发送验证码
    public static readonly BIND_TEL_REQUEST: string = "BIND_TEL_REQUEST";                //手机绑定微信
    public static readonly BIND_TEL_RESPONSE: string = "BIND_TEL_RESPONSE";
    public static readonly BIND_ACCOUNT_REQUEST: string = "BIND_ACCOUNT_REQUEST";        //账号绑定微信
    public static readonly BIND_ACCOUNT_RESPONSE: string = "BIND_ACCOUNT_RESPONSE";
    public static readonly LOGIN_VERIFY_TOKEN_CLEAR: string = "LOGIN_VERIFY_TOKEN_CLEAR";  //清理TOKEN
    public static readonly GET_WEBURL: string = "GET_WEBURL";//落地页
    public static readonly GET_WEBURL_REBONS: string = "GET_WEBURL_REBONS";//落地页
    public static readonly GET_KEFU: string = "GET_KEFU";//落地页
    public static readonly GET_tenantId: string = "GET_tenantId";//落地页
    public static readonly GAME_VERSION: string = "GAME_VERSION"//版本
    public static readonly TOKEERROR: string = "TOKEERROR"//版本
    public static readonly GAMELIST: string = "GAMELIST"//游戏配置

    //---------------socket --------------------------------
    public static readonly SOCKET_CONTENT: string = "SOCKET_CONTENT";
    public static readonly SOCKET_S_MESSAGE: string = "SOCKET_S_MESSAGE";
    public static readonly SOCKET_R_MESSAGE: string = "SOCKET_R_MESSAGE";
    public static readonly SOCKET_OPEN: string = "webClientOnopen";
    public static readonly SOCKET_INTERVAL: string = "SOCKET_INTERVAL";

}