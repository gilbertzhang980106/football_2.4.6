
import { DznSocket } from "../../Common/src/DznSocket"
import { utils } from "./utils"
import { gameData } from "./gameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class netCom extends cc.Component {   

    logonData = {
        token : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjI2MzMxLCJhdWQiOiIiLCJleHAiOjE2NjUxOTgwNTYsImlhdCI6MTY2MjYwNjA1NiwiaXNzIjoiIiwianRpIjoiZTA1NDk1MDM1YzRlMDU5YzY5ZTM2YTYxM2NiMWZkMDAiLCJuYmYiOjE2NjI2MDYwNTYsInN1YiI6IiJ9.srFfIj36gt8rOYs0a8j2iciQSD7FvuYaWq6ghTmlYiE",
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


