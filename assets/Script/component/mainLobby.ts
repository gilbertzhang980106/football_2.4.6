import { utils } from "./utils"
import { gameData } from "./gameData";
import { DznSocket } from "../../Common/src/DznSocket"

const { ccclass, property } = cc._decorator;

@ccclass
export default class mainLobby extends cc.Component {
    @property(cc.Node)
    topBar: cc.Node = null;

    @property(cc.Node)
    playerInfo: cc.Node = null;

    @property(cc.Node)
    show_content: cc.Node = null;

    @property(cc.Node)
    home_layer: cc.Node = null;

    @property(cc.Node)
    layer_reward_card: cc.Node = null;

    @property(cc.Prefab)
    layer_card_history: cc.Prefab = null;

    @property(cc.Prefab)
    layer_card_exchange: cc.Prefab = null;

    @property(cc.Prefab)
    cards_record_layer: cc.Prefab = null;

    @property(cc.Node)
    rule_info: cc.Node = null;


    static instance: mainLobby = null;
    static curLayer: string = "MAIN_HOME";
    

    onLoad() {
        mainLobby.instance = this;

        DznSocket.on(gameData.messageFlag.CHANGE_SHOW_LAYER, this.layerManager, this);//弹出搓牌界面协议
    }

    start() {
        /**请求主页信息
         * 1-玩家信息
         * 2-基础配置信息
         */
        gameData.httpServer.requestMainHomeInfo(({ code, msg, data }) => {//code: number, msg: string, 
            if (code === 0) {//获取成功
                //存储个人信息及其他数据
                gameData.userInfo.setUsereInfo(data.user);
                gameData.userInfo.setDrawCard(data.draw_card);
                gameData.userInfo.setConfigData(data.config);

                //初始化挂在组件
                mainLobby.instance.initOtherNodeData(data);
            } else {
                console.error("错误信息：" + msg);
            }
        });

        //初始化顶部title模块

        //初始化显示layer模块
    }

    //初始化其他组件信息
    initOtherNodeData(data: apiData.home_info) {
        //初始化个人信息模块
        mainLobby.instance.playerInfo.getComponent('playerInfo').init(data.user);

        //初始化中间显示区域内容
        mainLobby.instance.show_content.active = true;
        mainLobby.instance.layer_reward_card.getComponent("layerRewardCard").init(data.config);

        //初始化活动规则模块
        mainLobby.instance.rule_info.getComponent('ruleComponent').init(data.config);
    }

    /**
     * 显示组件显示管理
     * 界面初始化显示主界面
     * 其他界面由点击后加载预制体界面展示
     * 显示的界面数据刷新在各自组件代码中实现
     */
    layerManager(showType: string) {
        if(mainLobby.curLayer.indexOf(showType) > -1)return;
        mainLobby.curLayer = showType;
        console.log("显示当前界面为：" + showType);
        //先隐藏主界面 再加载需要显示的界面预制体
        mainLobby.instance.home_layer.active = false;
        mainLobby.instance.show_content.removeAllChildren();//移除其他面板，下次显示重新加载以确保数据重新加载
        mainLobby.instance.show_content.active = false;//隐藏其他面板
        if(showType.indexOf(gameData.SHOW_LAYER_TYPE.MAIN_HOME) > -1){
            mainLobby.instance.home_layer.active = true;//显示主页
        }else{
            mainLobby.instance.show_content.active = true;//显示父级面板
            switch (showType) {
                case gameData.SHOW_LAYER_TYPE.CARD_BAG:
                    cc.instantiate(this.layer_card_history).parent = mainLobby.instance.show_content;
                    //重新设置show_content的高度
                    mainLobby.instance.show_content.height = cc.instantiate(this.layer_card_history).height;
                    break;
                case gameData.SHOW_LAYER_TYPE.CARD_EXCHANGE:
                    mainLobby.instance.show_content.active = true;//显示父级面板
                    cc.instantiate(this.layer_card_exchange).parent = mainLobby.instance.show_content;
                    //重新设置show_content的高度
                    mainLobby.instance.show_content.height = cc.instantiate(this.layer_card_exchange).height;
                    break;
                case gameData.SHOW_LAYER_TYPE.CARD_RECORD:
                    mainLobby.instance.show_content.active = true;//显示父级面板
                    cc.instantiate(this.cards_record_layer).parent = mainLobby.instance.show_content;
                    //重新设置show_content的高度
                    mainLobby.instance.show_content.height = cc.instantiate(this.cards_record_layer).height;
                    break;
            }
        }
    }

    /** */

    update(dt: number) {

    }

}


