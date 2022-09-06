
import { DznSocket } from "../../Common/src/DznSocket"
import { utils } from "./utils"
import { gameData } from "./gameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class netCom extends cc.Component {   

    logonData = {
        ip : "http://devhdzx.leyuqx5.com",
        port : "",
        gameCode : "",
        token : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjI2MzMxLCJhdWQiOiIiLCJleHAiOjE2NjUwNDcyNzgsImlhdCI6MTY2MjQ1NTI3OCwiaXNzIjoiIiwianRpIjoiYTljYzEyMzhlY2MwZDg2NDhhMGNjN2UwODQ4MGQ4MTEiLCJuYmYiOjE2NjI0NTUyNzgsInN1YiI6IiJ9.ITQC7zbvDV8OpUrTfO3o69STngyxbg30Q90UH6FaNGw",
    }

    static instance:netCom = null;

    onLoad(){
        netCom.instance = this;
        cc.game.addPersistRootNode(this.node);
    }

    start(){
        let token = utils.GetQueryVariable(window.location.href, "token") || netCom.instance.logonData.token;//用户token
        let lobbyApiHttp = utils.GetQueryVariable(window.location.href, "lobbyHttp") || netCom.instance.logonData.ip;//主页接口请求地址
        let lobbyPort = utils.GetQueryVariable(window.location.href, "lobbyPort") || netCom.instance.logonData.port;;//主页接口请求地址端口号
        
        gameData.roomData.setTokenData(token);
        gameData.roomData.setHttp(lobbyApiHttp);
        gameData.roomData.setApiport(lobbyPort);
        gameData.roomData.setRequestUrl();
        

        /**请求主页信息
         * 1-玩家信息
         * 2-基础配置信息
         */
        gameData.httpServer.requestMainHomeInfo(function(data: apiData.home_info){
            console.log("用户信息以及活动配置信息",data);
        });
    }

    update (dt:number) {
        // DznSocket.OnMissionUpdate();
    }
    
}

interface gameData {
    gameCode: string;//游戏code
    token: string;//token
    channelId: number;//进房类型 联盟 俱乐部 好友房
    ip: string;//游戏ip地址
    port: number;//端口号
    desk: number;//房间号
}



