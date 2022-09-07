import { utils } from "./utils"
import { gameData } from "./gameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class mainLobby extends cc.Component {   
    @property(cc.Node)
    topBar: cc.Node = null;

    @property(cc.Node)
    playerInfo: cc.Node = null;

    @property(cc.Node)
    show_layer: cc.Node = null;


    static instance: mainLobby = null;

    onLoad(){
        mainLobby.instance = this;
    }

    start(){
        /**请求主页信息
         * 1-玩家信息
         * 2-基础配置信息
         */
         gameData.httpServer.requestMainHomeInfo(({code, msg, data}) => {//code: number, msg: string, 
             if(code === 0){//获取成功
                //存储个人信息及其他数据
                gameData.userInfo.setUsereInfo(data.user);
                gameData.userInfo.setDrawCard(data.draw_card);
                gameData.userInfo.setConfigData(data.config);

                //初始化挂在组件
                mainLobby.instance.initOtherNodeData(data);
             }else {
                 console.error("错误信息："+ msg);
             }
        });
        
        //初始化顶部title模块

        //初始化显示layer模块
    }

    //初始化其他组件信息
    initOtherNodeData(data: apiData.home_info){
        //初始化个人信息模块
        mainLobby.instance.playerInfo.getComponent('playerInfo').init(data.user);
    }

    update (dt:number) {
        
    }
    
}


