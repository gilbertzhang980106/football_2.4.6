
import { DznSocket } from "../../Common/src/DznSocket"
import { utils } from "./utils"
import { gameData } from "./gameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class netCom extends cc.Component {   

    logonData = {
        token : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjQsImF1ZCI6IiIsImV4cCI6MTY2NTI5NTY0MCwiaWF0IjoxNjYyNzAzNjQwLCJpc3MiOiIiLCJqdGkiOiI5YTNhNWVkNmZmMGRkNDVjMTUxODVmODAzODk2OTMwZSIsIm5iZiI6MTY2MjcwMzY0MCwic3ViIjoiIn0.1XzL2-wYKcu8JvWkcGYSb6YaZksDdMH2wcUvZbfyWs8",
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


