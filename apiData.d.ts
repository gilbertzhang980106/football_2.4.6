declare namespace apiData {
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
}

function GetAppConfig(): AppConfig;
