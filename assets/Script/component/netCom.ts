
import { DznSocket } from "../../Common/src/DznSocket"
import { utils } from "./utils"
import { gameData } from "./gameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class netCom extends cc.Component {   

    logonData = {
        token : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjI2MzMxLCJhdWQiOiIiLCJleHAiOjE2NjUwNDcyNzgsImlhdCI6MTY2MjQ1NTI3OCwiaXNzIjoiIiwianRpIjoiYTljYzEyMzhlY2MwZDg2NDhhMGNjN2UwODQ4MGQ4MTEiLCJuYmYiOjE2NjI0NTUyNzgsInN1YiI6IiJ9.ITQC7zbvDV8OpUrTfO3o69STngyxbg30Q90UH6FaNGw",
    }

    static instance:netCom = null;

    onLoad(){
        netCom.instance = this;
        cc.game.addPersistRootNode(this.node);
    }

    start(){
        let token = utils.GetQueryVariable(window.location.href, "token") || netCom.instance.logonData.token;//用户token
        gameData.roomData.setTokenData(token);
    }

    update (dt:number) {
        // DznSocket.OnMissionUpdate();
    }
    
}


