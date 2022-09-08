
import { DznSocket } from "../../Common/src/DznSocket"
import { utils } from "./utils"
import { gameData } from "./gameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class netCom extends cc.Component {   

    logonData = {
        token : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEyNDQwMywiYXVkIjoiIiwiZXhwIjoxNjY1MjIwMzA0LCJpYXQiOjE2NjI2MjgzMDQsImlzcyI6IiIsImp0aSI6ImViZDRhOTdlODlhODBlMWVmZGI4ZTI5YWJmZjIyNGQxIiwibmJmIjoxNjYyNjI4MzA0LCJzdWIiOiIifQ.FEHYgXElxdqH74SlIGTWY_HcTKx6vopVrW1RkLCvd0w",
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


