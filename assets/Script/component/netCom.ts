
import {DznSocket} from "../../Common/src/DznSocket"
import { utils } from "./utils"
import { gameData } from "./gameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class netCom extends cc.Component {   

    logonData = {
        ip : "10.63.98.40",
        port : "12000",
        gameCode : "NIU_NIU",
        desk : "2000",
        token : "eyJhbGciOiJIUzI1NiJ9.eyJjdXJyZW5jeVR5cGUiOiJDTlkiLCJoZWFkSWNvbiI6Imh0dHA6Ly9tLmltZWl0b3UuY29tL3VwbG9hZHMvYWxsaW1nLzIwMTYwNjI4MTcvem1tdWNjaG92eW4uanBnIiwibG9naW5UeXBlIjoiVVNFUiIsIm5pY2tOYW1lIjoiQmVybmllIiwiYWdlbmN5SWQiOiIiLCJ1c2VyTmFtZSI6ImJvZ2FuIiwidXNlcklkIjoiMyIsImhlYWRJZCI6bnVsbCwiYmFsYW5jZSI6bnVsbCwibG9naW5JcCI6IjEyNy4wLjAuMSIsImFjY291bnRObyI6bnVsbCwidGVuYW50SWQiOm51bGwsInVzZXJUeXBlIjoiQ0VOVFJBTElaRSIsImV4cCI6MTYyNDc1NzkyNjI0NywiaWF0IjoxNjI0Njg1OTI2MjQ3fQ._T0PW0Njvp-zTMbnbpRgoxK6l8sqiYZS7KD8Wh5znHQ",
        channelld :1,
    }

    static instance:netCom = null;

    onLoad(){
        netCom.instance = this;
        cc.game.addPersistRootNode(this.node);
    }

    start(){
        let token = utils.GetQueryVariable(window.location.href, "token");
        let gameCode = utils.GetQueryVariable(window.location.href, "gameCode");//外网 游戏code
        let desk = utils.GetQueryVariable(window.location.href, "desk");//外网 房间号
        let gameWs = utils.GetQueryVariable(window.location.href, "gameWs");//socket ip
        let api = utils.GetQueryVariable(window.location.href, "api");//大厅服
        let lobbyPort = utils.GetQueryVariable(window.location.href, "lobbyPort");//大厅服端口号
        let gameWsPort = utils.GetQueryVariable(window.location.href, "gameWsPort");//socket 端口号
        let tenantId = utils.GetQueryVariable(window.location.href, "tenantId");//外网 端口
        let ws = utils.GetQueryVariable(window.location.href, "ws");//https || https 
        let gameHttpPort = utils.GetQueryVariable(window.location.href, "gameHttpPort");//游戏服http端口号
        let gameHttp = utils.GetQueryVariable(window.location.href, "gameHttp");//游戏服http
        
        gameData.roomData.setTokenData(token);
        gameData.roomData.setIp(gameWs);
        gameData.roomData.setApi(api);
        gameData.roomData.setApiport(lobbyPort);
        gameData.roomData.setPort(gameWsPort);
        gameData.roomData.setTenantId(tenantId);
        gameData.roomData.wsData(ws);
        gameData.roomData.gameHttpPort(gameHttpPort);
        gameData.roomData.gameHttp(gameHttp);


        let wsUrl = gameData.roomData.ws + gameWs + ':' + gameWsPort + "/game/" + gameCode + '/' + desk + '/';
        // DznSocket.OnConnect(GetAppConfig().wsUrl+ token);//内网测试
        DznSocket.OnConnect(wsUrl + token);//外网

        
    }

    update (dt:number) {
        DznSocket.OnMissionUpdate();
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



