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
        user: user_info,
        draw_card: [],
        config: config_info
    }
    /**
     * 用户信息
     */
     interface user_info {
        uid: number,
        username: string,
        nickname: string,
        avatar: string,
        hashId: string,
        points: number,
        card: number
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
     * 抽卡一次返回数据信息
     */
      interface draw_card_info {
        id: number,
        title: string,
        level: string,
        type: string,
        img: string,
        rate: string,
        img_text: string,
        type_text: string,
    }
    /**
     * 抽卡十次返回数据信息
     */
     interface draw_card_info {
        draw_card_info: []
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
