
import { DznSocket } from "../../Common/src/DznSocket"
import { utils } from "./utils"
import { gameData } from "./gameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class netCom extends cc.Component {   

    logonData = {
        token : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjI2MzMxLCJhdWQiOiIiLCJleHAiOjE2NjUyODc5MDEsImlhdCI6MTY2MjY5NTkwMSwiaXNzIjoiIiwianRpIjoiYzUwOTYxNjg5ODY4MTg0NzRkZWE2NGJiNTIxNjM4NWQiLCJuYmYiOjE2NjI2OTU5MDEsInN1YiI6IiJ9.b9JMO0jzCqOloplls6FFaqm9-PEqPNVjhJBVGT65v90",
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


