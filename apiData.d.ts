declare namespace apiData {
    /**
     * 接口返回信息体
     * code: number
     * msg: string
     * data
     */
    interface request_dada {
        code: number,
        msg: string,
        data: any;
    }
    /**主页信息
     * 1-玩家信息
     * 2-基础配置信息
     */
    interface home_info {
        user: user_info,//用户信息
        draw_card: draw_card,//合成奖励相关信息  
        config: config_info//配置相关字段  
    }
    /**
     * 用户信息
     */
    interface user_info {
        uid: number,//用户ID 
        username: string,
        nickname: string,
        avatar: string,
        hashId: string,
        points: number,//积分  
        card: number//卡牌数量 
    }
    /**
     * 配置信息
     */
    interface config_info {
        id: number,
        title: string,
        start_time: string,
        end_time: string,
        show_st_time: string,
        show_ed_time: string,
        score: number,
        banner: string,
        rule: string
    }
    /**
     * 合成大奖返回数据信息
     */
    interface hecheng_card_info {
        draw_card: draw_card
    }
    /**
     * 获得奖励相关信息
     */
    interface draw_card {
        id: number,
        uid: string,
        username: string,
        aid: string,//奖励ID 
        type: string,//任务类型;1-普通；2-合成  
        status: string,// 状态；0-未完成；1-已完成
        cid: string,//卡牌ID
        num: string,//获取数量  
        done_time: string,//完成时间  
        award: string,//奖励类型；1-积分；2-卡牌；3-彩金；
        draw_card: draw_card_info,
        is_composite: number,//能否合成;0-不能；1-能  
    }
    /**
     * 合成奖励
     */
    interface draw_card_info {
        id: number,
        uid: string,
        username: string,
        aid: string,//奖励ID 
        type: string,//任务类型;1-普通；2-合成  
        status: string,// 状态；0-未完成；1-已完成
        cid: string,//卡牌ID
        num: string,//获取数量  
        done_time: string,//完成时间  
        award: string,//奖励类型；1-积分；2-卡牌；3-彩金；
        draw_card: string,
        is_composite: number,//能否合成;0-不能；1-能  
        card: card//卡片信息
    }
    /**卡片信息
     * 
     */
    interface card {
        id: number,//球星卡ID
        title: string,//名称  
        level: string,//卡牌等级
        type: string,//卡牌类型;1-前锋；2-中场；3-后卫；4-内将  
        img: string,//图片  
        rate: string,//概率  
        img_text: string,//图片完整地址  
        type_text: string,//卡牌类型名称 
    }
    /**
    * 跑马灯数据样式
    */
    interface bulletin_info {
        id: string,
        amount: number,
        nickName: string
    }
    // {clientTime: 1622106853925, cmdKey: "PONG", serverTime: 1622106259051}
    // clientTime: 1622106853925
    // cmdKey: "PONG"
    // serverTime: 1622106259051
    interface pong {
        cmdKey: string;
        clientTime: number;
        serverTime: number;
    }
    /**发起重连 */
    // {cmdKey: "JOIN_DESK_ACK", deskCode: "1000"}
    // cmdKey: "JOIN_DESK_ACK"
    // deskCode: "1000"
    interface join_desk_ack {
        cmdKey: string;
        deskCode: string;
        currentStageCode: string;
    }
}

interface AppConfig {
    wsUrl: string;
    apiAdrress: string;
}

function GetAppConfig(): AppConfig;
