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

    //微信登录
    public static readonly WEIXIN_LOGIN_SHOW: string = "WEIXIN_LOGIN_SHOW";
    public static readonly WEIXIN_LOGIN_HIDE: string = "WEIXIN_LOGIN_HIDE";
    public static readonly ACCOUNT_BIND_WEIXIN_SHOW: string = "ACCOUNT_BIND_WEIXIN_SHOW";
    public static readonly ACCOUNT_BIND_WEIXIN_HIDE: string = "ACCOUNT_BIND_WEIXIN_HIDE";
    public static readonly TEL_BIND_WEIXIN_SHOW: string = "TEL_BIND_WEIXIN_SHOW";
    public static readonly TEL_BIND_WEIXIN_HIDE: string = "TEL_BIND_WEIXIN_HIDE";

    //加载进度条
    public static readonly LOADING_SHOW: string = "loadingShow";
    public static readonly LOADING_HIDE: string = "loadingHide";
    //smallLoadin 主要用于http请求时候 锁屏
    public static readonly SMALL_LOADING_SHOW: string = "SMALL_LOADING_SHOW";
    public static readonly SMALL_LOADING_HIDE: string = "SMALL_LOADING_HIDE";

    //商城
    public static readonly SHANGCHENG_SHOW: string = "shangchengloadingShow";
    public static readonly SHANGCHENG_HIDE: string = "shangchengloadingHide";

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

    //银行
    public static readonly BANKLAYER_SHOW: string = "BANKLAYER_SHOW";
    public static readonly BANKLAYER_HIDE: string = "BANKLAYER_HIDE";
    public static readonly BANK_LOGIN_SHOW: string = "BANK_LOGIN_SHOW";
    public static readonly BANK_LOGIN_HIDE: string = "BANK_LOGIN_HIDE";

    //好友房
    public static readonly FRIEND_ROOM_JOIN_SHOW: string = "FRIEND_ROOM_JOIN_SHOW";
    public static readonly FRIEND_ROOM_JOIN_HIDE: string = "FRIEND_ROOM_JOIN_HIDE";
    public static readonly FRIEND_ROOOM_DATA_UPDATE: string = "FRIEND_ROOOM_DATA_UPDATE"
    //反馈 客服
    public static readonly KEFU_SHOW: string = "KEFU_SHOW";
    public static readonly KEFU_HIDE: string = "FRIEND_ROOM_JOIN_HIDE";
    //用户信息面板
    public static readonly USERINFO_SHOW: string = "USERINFO_SHOW";
    public static readonly USERINFO_HIDE: string = "USERINFO_HIDE";
    public static readonly USERINFO_OTHER_SHOW: string = "USERINFO_OTHER_SHOW";
    public static readonly USERINFO_OTHER_HIDE: string = "USERINFO_OTHER_HIDE";
    public static readonly USERINFO_UPDATE: string = "USERINFO_UPDATE";
    //分享
    public static readonly SHARE_SHOW: string = "SHARE_SHOW";
    public static readonly SHARE_HIDE: string = "SHARE_HIDE";
    //大厅战绩
    public static readonly MAIN_ZHANJI_SHOW: string = "MAIN_ZHANJI_SHOW";
    public static readonly MAIN_ZHANJI_HIDE: string = "MAIN_ZHANJI_HIDE";
    //俱乐部排行
    public static readonly TH_RANK_SHOW: string = "TH_RANK_SHOW";
    public static readonly TH_RANK_HIDE: string = "TH_RANK_HIDE";
    //积分榜
    public static readonly TH_SCORE_SHOW: string = "TH_SCORE_SHOW";
    public static readonly TH_SCORE_HIDE: string = "TH_SCORE_HIDE";
    // 游戏列表
    public static readonly GAMELISY_HALL: string = "GAMELISY_HALL"
    //钻石 金币
    // public static readonly ZUANSHI_SHOW:string = "ZUANSHI_SHOW";
    // public static readonly ZUANSHI_HIDE:string = "ZUANSHI_HIDE";
    // public static readonly JINBI_SHOW:string = "JINBI_SHOW";
    // public static readonly JINBI_HIDE:string = "JINBI_HIDE";

    //成员面板
    public static readonly MERBER_SHOW: string = "MERBER_SHOW";
    public static readonly MERBER_HIDE: string = "MERBER_HIDE";

    //快乐联盟
    public static readonly CLB_MIAN_SHOW: string = "CLB_MIAN_SHOW";
    public static readonly CLB_MIAN_HIDE: string = "CLB_MIAN_HIDE";
    public static readonly CLB_LIST_SHOW: string = "CLB_LIST_SHOW";       //联盟列表
    public static readonly CLB_LIST_HIDE: string = "CLB_LIST_HIDE";
    public static readonly CLB_REBATE_SHOW: string = "CLB_REBATE_SHOW";      //会员返利面板
    public static readonly CLB_REBATE_HIDE: string = "CLB_REBATE_HIDE";
    public static readonly CLB_MY_REBATE_SHOW: string = "CLB_MY_REBATE_SHOW";      //直属成员返利面板
    public static readonly CLB_MY_REBATE_HIDE: string = "CLB_MY_REBATE_HIDE";
    public static readonly CLB_REBATE_DETAIL_SHOW: string = "CLB_REBATE_DETAIL_SHOW";      //返利详情
    public static readonly CLB_REBATE_DETAIL_HIDE: string = "CLB_REBATE_DETAIL_HIDE";
    public static readonly CLB_UPGRADE_SHOW: string = "CLB_UPGRADE_SHOW";      //升级代理
    public static readonly CLB_UPGRADE_HIDE: string = "CLB_UPGRADE_HIDE";

    public static readonly CREATEROOMMASK: string = "CREATEROOMMASK"

    public static readonly HIDEALLpopupLayer: string = "HIDEALLpopupLayer" //清除所有弹窗

    //俱乐部
    public static readonly TH_MIAN_SHOW: string = "TH_MIAN_SHOW";
    public static readonly TH_MIAN_HIDE: string = "TH_MIAN_HIDE";
    public static readonly TH_LIST_SHOW: string = "TH_LIST_SHOW";       //俱乐部列表
    public static readonly TH_LIST_HIDE: string = "TH_LIST_HIDE";
    public static readonly TH_HEHUO_MEMBER_SHOW: string = "TH_HEHUO_MEMBER_SHOW";    //我的成员面板 即 合伙人详情面板
    public static readonly TH_HEHUO_MEMBER_HIDE: string = "TH_HEHUO_MEMBER_HIDE";
    public static readonly TH_MANAGER_SHOW: string = "TH_MANAGER_SHOW";    //合伙人面板
    public static readonly TH_MANAGER_HIDE: string = "TH_MANAGER_HIDE";
    public static readonly JULEBU_XIAO: string = "JULEBU_XIAO";


    //创建房间
    public static readonly CREATE_ROOM_SHOW: string = "CREATE_ROOM_SHOW";          //打开创建房间列表
    public static readonly CREATE_ROOM_HIDE: string = "CREATE_ROOM_HIDE";
    public static readonly CREATE_ROOM_TEA_SET: string = "CREATE_ROOM_TEA_SET";
    public static readonly CREATE_ROOM_DATA_CHANGE: string = "CREATE_ROOM_DATA_CHANGE";
    //游戏详情面板
    public static readonly GAME_DETAILED_SHOW: string = "GAME_DETAILED_SHOW";          //detailed
    public static readonly GAME_DETAILED_HIDE: string = "GAME_DETAILED_HIDE";

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
    //payment
    public static readonly PAYMENT_VIP_CHANNELS_RESPONSE: string = "PAYMENT_VIP_CHANNELS_RESPONSE";      //获得VIP充值渠道信息
    public static readonly PAYMENT_VIP_CHANNELS_REQUEST: string = "PAYMENT_VIP_CHANNELS_REQUEST";
    public static readonly PAYMENT_CHANNELS_RESPONSE: string = "PAYMENT_CHANNELS_RESPONSE";      //获得VIP充值渠道信息
    public static readonly PAYMENT_CHANNELS_REQUEST: string = "PAYMENT_CHANNELS_REQUEST";
    public static readonly PAYMENT_RECHARGE_RESPONSE: string = "PAYMENT_RECHARGE_RESPONSE";      //提交支付
    public static readonly PAYMENT_RECHARGE_REQUEST: string = "PAYMENT_RECHARGE_REQUEST";
    public static readonly PAYMENT_RECHARGE_RECORD_RESPONSE: string = "PAYMENT_RECHARGE_RECORD_RESPONSE";      //获得充值记录
    public static readonly PAYMENT_RECHARGE_RECORD_REQUEST: string = "PAYMENT_RECHARGE_RECORD_REQUEST";
    public static readonly PAYMENT_RECHARGE_RECORD_INFO: string = "PAYMENT_RECHARGE_RECORD_INFO";//充值详情    

    public static readonly SYS_DIC_REQUEST: string = "SYS_DIC_REQUEST";
    public static readonly SYS_DIC_RESPONSE: string = "SYS_DIC_RESPONSE";


    public static readonly MYMESSAGE_REQUEST: string = "MYMESSAGE_REQUEST";
    public static readonly MYMESSAGE_RESPONSE: string = "MYMESSAGE_RESPONSE";
    public static readonly BOSS_MESSAGE_REQUEST: string = "BOSS_MESSAGE_REQUEST";
    public static readonly BOSS_MESSAGE_RESPONSE: string = "BOSS_MESSAGE_RESPONSE";

    public static readonly SHOW_MYMESSAGE_INDEX: string = "SHOW_MYMESSAGE_INDEX";

    public static readonly MAIL_REQUEST: string = "MAIL_REQUEST";
    public static readonly MAIL_RESPONSE: string = "MAIL_RESPONSE";
    public static readonly MAIL_READ_REQUEST: string = "MAIL_READ_REQUEST";
    public static readonly MAIL_READ_RESPONSE: string = "MAIL_READ_RESPONSE";
    public static readonly MAIL_DEL: string = "MAIL_DEL";
    public static readonly MAIL_BOX_CANCEL: string = "MAIL_BOX_CANCEL";//邀请放弃
    public static readonly MAIL_BOX_OK: string = "MAIL_BOX_OK";//邀请同意
    public static readonly MAIL_NOTIC: string = "MAIL_NOTIC";//邮件消息

    //bank
    public static readonly BANK_LOGIN_REQUEST: string = "BANK_LOGIN_REQUEST";
    public static readonly BANK_LOGIN_RESPONSE: string = "BANK_LOGIN_RESPONSE";
    public static readonly BANK_CHANGE_PWD_REQUEST: string = "BANK_CHANGE_PWD_REQUEST";      //修改银行登录密码  旧密码  加新密码
    public static readonly BANK_CHANGE_PWD_RESPONSE: string = "BANK_CHANGE_PWD_RESPONSE";
    public static readonly BANK_RESET_PWD_REQUEST: string = "BANK_RESET_PWD_REQUEST";      //找回银行登录密码  验证码  加新密码
    public static readonly BANK_RESET_PWD_RESPONSE: string = "BANK_RESET_PWD_RESPONSE";
    public static readonly BANK_WITHDRAW_REQUEST: string = "BANK_WITHDRAW_REQUEST";
    public static readonly BANK_WITHDRAW_RESPONSE: string = "BANK_WITHDRAW_RESPONSE";
    public static readonly BANK_WITHDRAW_LIST_REQUEST: string = "BANK_WITHDRAW_LIST_REQUEST";         //获取兑换进度列表
    public static readonly BANK_WITHDRAW_LIST_RESPONSE: string = "BANK_WITHDRAW_LIST_RESPONSE";
    public static readonly BANK_CUNKUAN_REQUEST: string = "BANK_CUNKUAN_REQUEST";        //存款
    public static readonly BANK_CUNKUAN_RESPONSE: string = "BANK_CUNKUAN_RESPONSE";
    public static readonly BANK_QUKUAN_REQUEST: string = "BANK_QUKUAN_REQUEST";          //取款
    public static readonly BANK_QUKUAN_RESPONSE: string = "BANK_QUKUAN_RESPONSE";
    public static readonly BANK_ZENGSONG_REQUEST: string = "BANK_ZENGSONG_REQUEST";          //赠送
    public static readonly BANK_ZENGSONG_RESPONSE: string = "BANK_ZENGSONG_RESPONSE";
    public static readonly BANK_ZENGSONG_LIST_REQUEST: string = "BANK_ZENGSONG_LIST_REQUEST";          //赠送列表
    public static readonly BANK_ZENGSONG_LIST_RESPONSE: string = "BANK_ZENGSONG_LIST_RESPONSE";
    public static readonly BANK_SHOUQU_LIST_REQUEST: string = "BANK_SHOUQU_LIST_REQUEST";          //收取列表
    public static readonly BANK_SHOUQU_LIST_RESPONSE: string = "BANK_SHOUQU_LIST_RESPONSE";
    public static readonly BANK_ZHANGWU_LIST_REQUEST: string = "BANK_ZHANGWU_LIST_REQUEST";          //账务流水列表
    public static readonly BANK_ZHANGWU_LIST_RESPONSE: string = "BANK_ZHANGWU_LIST_RESPONSE";
    public static readonly BANK_BINDINFO_REQUEST: string = "BANK_BINDINFO_REQUEST";          //获取银行绑定信息
    public static readonly BANK_BINDINFO_RESPONSE: string = "BANK_BINDINFO_RESPONSE";
    public static readonly BANK_BIND_REQUEST: string = "BANK_BIND_REQUEST";          //绑定银行卡信息信息
    public static readonly BANK_BIND_RESPONSE: string = "BANK_BIND_RESPONSE";
    public static readonly BANK_BIND_CHECK_PHONE_CODE: string = "BANK_BIND_CHECK_PHONE_CODE";
    public static readonly BANK_SEND_VERIFY_CODE_REQUEST: string = "BANK_SEND_VERIFY_CODE_REQUEST";
    public static readonly BANK_REMEMBER_CHECK: string = "BANK_REMEMBER_CHECK";
    public static readonly BANK_REFRASH: string = "BANK_REFRASH";


    public static readonly INIT_USER_INFO: string = "INIT_USER_INFO";
    public static readonly MY_INFO_REQUEST: string = "MY_INFO_REQUEST";
    public static readonly MY_INFO_RESPONSE: string = "MY_INFO_RESPONSE";
    public static readonly UNBIND_WECHAT: string = "UNBIND_WECHAT";
    //------------------club--------------------
    public static readonly TH_ADD_REQUEST: string = "TH_ADD_REQUEST";            //创建俱乐部
    public static readonly TH_LIST_REQUEST: string = "TH_LIST_REQUEST";           //查询列表
    public static readonly TH_JOIN_REQUEST: string = "TH_JOIN_REQUEST";          //加入俱乐部
    public static readonly TH_DISBAND_REQUEST: string = "TH_DISBAND_REQUEST";    //解散
    public static readonly TH_QUERY_SET_REQUEST: string = "TH_QUERY_SET_REQUEST";    //查询设置
    public static readonly TH_SET_REQUEST: string = "TH_SET_REQUEST";            //设置俱乐部
    public static readonly TH_UPGREADE_REQUEST: string = "TH_UPGREADE_REQUEST";  //升级俱乐部
    public static readonly TH_JOIN_ALLIANCE_REQUEST: string = "TH_JOIN_ALLIANCE_REQUEST";  //加入联盟
    public static readonly TH_LIST_SESK_FOR_JSOIN: string = "TH_LIST_SESK_FOR_JSOIN" //俱乐部桌台
    public static readonly TH_DELETE_TABLE_LIST: string = "TH_DELETE_TABLE_LIST" //删除桌台
    public static readonly THZHANJI_RECORD: string = "THZHANJI_RECORD";
    public static readonly TH_ZHANJI_DETAILS: string = "TH_ZHANJI_DETAILS";
    public static readonly CLB_ZHANJI_DETAILS: string = "CLB_ZHANJI_DETAILS";
    public static readonly CLB_JIFEN_SEARCH: string = "CLB_JIFEN_SEARCH";//积分查询
    //-----------------club rank------------------------
    public static readonly TH_RANK_LIST_REQUEST: string = "TH_RANK_LIST_REQUEST";  //查询俱乐部排名 同搜索
    public static readonly TH_RANK_DELETE_REQUEST: string = "TH_RANK_DELETE_REQUEST";  //俱乐部排名 删除
    public static readonly TH_RANK_COUNT_REQUEST: string = "TH_RANK_COUNT_REQUEST";  //俱乐部排名 删除
    public static readonly TH_RANK_LEAR_ALL: string = "TH_RANK_LEAR_ALL";

    //-------------------merber-----------------
    public static readonly CLUB_MERBER_INFO_REQUEST: string = "CLUB_MERBER_INFO_REQUEST";            //查询会员信息
    public static readonly MERBER_LIST_REQUEST: string = "MERBER_LIST_REQUEST";            //查询成员列表
    public static readonly FREEZE_LIST_REQUEST: string = "FREEZE_LIST_REQUEST";            //查询冻结列表
    public static readonly FREEZE_MERBER_REQUEST: string = "FREEZE_MERBER_REQUEST";            //冻结会员
    public static readonly CANCEL_FREEZE_MERBER_REQUEST: string = "CANCEL_FREEZE_MERBER_REQUEST";            //取消冻结
    public static readonly AUDIT_MANAGEMENT_LIST_REQUEST: string = "AUDIT_MANAGEMENT_LIST_REQUEST";            //审核列表
    public static readonly REFUSE_OR_AGREE_AUDIT_REQUEST: string = "REFUSE_OR_AGREE_AUDIT_REQUEST";            //同意或者拒绝审核
    public static readonly SET_MERBER_WITHHOLDING_REQUEST: string = "SET_MERBER_WITHHOLDING_REQUEST";            //设置成代扣
    public static readonly CANCEL_SET_MERBER_WITHHOLDING_REQUEST: string = "CANCEL_SET_MERBER_WITHHOLDING_REQUEST";            //设置成代扣
    public static readonly REFUSE_OR_AGREE_WITHHOLDING_REQUEST: string = "REFUSE_OR_AGREE_WITHHOLDING_REQUEST";            //拒绝或同意成代扣
    public static readonly SET_MERBER_ADMIN_REQUEST: string = "SET_MERBER_ADMIN_REQUEST";            //设置成管理员
    public static readonly SET_MERBER_AGENT_REQUEST: string = "SET_MERBER_AGENT_REQUEST";            //设置玩家为代理
    public static readonly CANCEL_MERBER_ADMIN_REQUEST: string = "CANCEL_MERBER_ADMIN_REQUEST";      //取消管理员
    public static readonly TRANSFER_ALLIANCE_REQUEST: string = "TRANSFER_ALLIANCE_REQUEST";      //转让联盟
    public static readonly ADD_MERBER_PARTNER_REQUEST: string = "ADD_MERBER_PARTNER_REQUEST";      //添加合伙人
    public static readonly REMOVE_MERBER_REQUEST: string = "REMOVE_MERBER_REQUEST";          //移除会员
    public static readonly GET_PARTNER_LIST_REQUEST: string = "GET_PARTNER_LIST_REQUEST";
    public static readonly GET_PARTNER_LIST_DETAILS_REQUEST: string = "GET_PARTNER_LIST_DETAILS_REQUEST";
    public static readonly MOBILIZE_PLAYERS: string = "MOBILIZE_PLAYERS";
    public static readonly TRANSFER_CLUB_REQUEST: string = "TRANSFER_CLUB_REQUEST";      //转让俱乐部
    public static readonly THMEMBERMANAGER:string = "THMEMBERMANAGER" //成员记录



    //------------------alliance-----------------
    public static readonly CLB_CREATE_ROOM_SHOW: string = "CLB_CREATE_ROOM_SHOW";
    public static readonly CLB_LIST_SESK_FOR_JSOIN = "CLB_LIST_SESK_FOR_JSOIN"; // 联盟桌台列表
    public static readonly CLB_SHARE_REQUEST = "CLB_SHARE_REQUEST";                 //查询联盟分享信息
    public static readonly CLB_LIST_REQUEST: string = "CLB_LIST_REQUEST";           //查询联盟列表
    public static readonly CLB_LIST_REQUESTSHARE: string = "CLB_LIST_REQUESTSHARE";           //查询联盟列表
    public static readonly CLB_ALL_LIST_REQUEST: string = "CLB_ALL_LIST_REQUEST";           //查询快乐联盟
    public static readonly CLB_JOIN_REQUEST: string = "CLB_JOIN_REQUEST";           //加入联盟
    public static readonly CLB_LEAVE_REQUEST: string = "CLB_LEAVE_REQUEST";    //退出联盟leave-alliance
    public static readonly CLB_QUERY_SET_REQUEST: string = "CLB_QUERY_SET_REQUEST";    //查询设置
    public static readonly CLB_SET_REQUEST: string = "CLB_SET_REQUEST";    //设置
    public static readonly CLB_AGENT_SET_LIST_REQUEST: string = "CLB_AGENT_SET_LIST_REQUEST";        //代理联盟面板
    public static readonly CLB_AGENT_MEMBER_LIST_REQUEST: string = "CLB_AGENT_MEMBER_LIST_REQUEST";   //直属成员返利   
    public static readonly CLB_SUB_AGENT_MEMBER_LIST_REQUEST: string = "CLB_SUB_AGENT_MEMBER_LIST_REQUEST";   //我的成员 
    public static readonly CLB_SUB_AGENT_MEMBER_DETAIL_REQUEST: string = "CLB_SUB_AGENT_MEMBER_DETAIL_REQUEST";   //我的成员 返利详情
    public static readonly CLB_UPGRADE_REQUEST: string = "CLB_UPGRADE_REQUEST";   //升级
    public static readonly CLB_ADD_AGENT_REQUEST: string = "CLB_ADD_AGENT_REQUEST";   //添加代理
    public static readonly CLB_IS_AGENT_REQUEST: string = "CLB_IS_AGENT_REQUEST";   //是否是代理
    public static readonly CLB_SELECT_AGENT_TYPE_REQUEST: string = "CLB_SELECT_AGENT_TYPE_REQUEST";   //添加代理 下拉列表
    public static readonly CLB_CANCEL_AGENT_REQUEST: string = "CLB_CANCEL_AGENT_REQUEST";   //取消代理
    public static readonly CLB_CLEAR_AGENT_REQUEST: string = "CLB_CLEAR_AGENT_REQUEST"; //代理清除
    public static readonly CLB_TACK_AGENT_REQUEST: string = "CLB_TACK_AGENT_REQUEST";   //代理生效
    public static readonly CLB_ADJUST_RATIO_REQUEST: string = "CLB_ADJUST_RATIO_REQUEST";   //调整比例
    public static readonly CLB_DELETE_AGENT_REQUEST: string = "CLB_DELETE_AGENT_REQUEST";   //删除代理
    public static readonly CLB_MEMBER_REQUEST: string = "CLB_MEMBER_REQUEST";

    public static readonly CLB_MERBER_LIST_REQUEST: string = "CLB_MERBER_LIST_REQUEST";            //查询成员列表
    public static readonly CLB_FREEZE_LIST_REQUEST: string = "CLB_FREEZE_LIST_REQUEST";            //查询冻结列表
    public static readonly CLB_AUDIT_MANAGEMENT_LIST_REQUEST: string = "CLB_AUDIT_MANAGEMENT_LIST_REQUEST";            //审核列表
    public static readonly CLB_AGENT_LIST_REQUEST: string = "CLB_AGENT_LIST_REQUEST";            //代理列表 大厅点快乐联盟打开
    public static readonly CLB_AGENT_MERNER_LIST_RESPONESE: string = "CLB_AGENT_MERNER_LIST_RESPONESE";
    public static readonly UPDATE_MAIL: string = "UPDATE_MAIL";
    public static readonly REMOVE_PLAYER_LIST: string = "REMOVE_PLAYER_LIST";
    //---------------socket --------------------------------
    public static readonly SOCKET_CONTENT: string = "SOCKET_CONTENT";
    public static readonly SOCKET_S_MESSAGE: string = "SOCKET_S_MESSAGE";
    public static readonly SOCKET_R_MESSAGE: string = "SOCKET_R_MESSAGE";
    public static readonly SOCKET_OPEN: string = "webClientOnopen";
    public static readonly SOCKET_INTERVAL: string = "SOCKET_INTERVAL";

    //----------------------------room----------------------------- 概念说明 房间是模板  桌子是实例
    public static readonly CREATE_ROOM: string = "CREATE_ROOM";  //开房
    public static readonly UPDATE_ROOM: string = "UPDATE_ROOM";  //更新房间
    public static readonly DELETE_ROOM: string = "CREATE_DESK";  //删除房间
    public static readonly QUERY_ROOM: string = "QUERY_ROOM";  //查询房间
    public static readonly JOIN_ROOM_CODE: string = "JOIN_ROOM_CODE";//加入好友房
}