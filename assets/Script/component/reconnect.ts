import { DznSocket } from "../../Common/src/DznSocket"
import { gameData } from "./gameData";
const { ccclass, property } = cc._decorator;

@ccclass
export default class reconnect extends cc.Component {

    @property
    recTimes: number = 0;

    @property
    recInterval: number = 6;

    @property
    maxTimes: number = 50;

    onLoad() {
        this.recTimes = 0;
        this.maxTimes = 50;
        this.recInterval = 6;
        DznSocket.on("webClientOnopen", this.webClientOnopen, this);
        DznSocket.on("webClientOnclose", this.webClientOnclose, this);
        // DznSocket.on("webClientOnerror", this.webClientOnclose, this);
    }

    onDestroy() {
        DznSocket.targetOff(this);
    }

    webClientOnopen() {
        this.recTimes = 0;
        this.maxTimes = 50;
        this.recInterval = 6;
    }

    webClientOnclose() {
        let kick = DznSocket.getCache("KICK_OFF");
        let exit = DznSocket.getCache("EXIT_DESK_ACK");
        let error = DznSocket.getCache("ERROR_INFO");
        if (exit || error || kick) {
            this.unscheduleAllCallbacks();
            return;
        }

        // if (this.recTimes >= this.maxTimes) {
        //     popup.instance.toastLongTime("重连失败...", true);
        //     //返回大厅
        //     gameData.nataviApi.backHall();
        //     return;
        // }

        let delayTime = this.recInterval;//this.recTimes * this.recInterval;

        this.scheduleOnce(() => {
            if (exit || error || kick) {
                this.unscheduleAllCallbacks();
                return;
            }
            DznSocket.OnConnect(DznSocket.pUrl);
            this.recTimes += 1;
        }, delayTime);

        console.warn("第",this.recTimes+1,"次重连");//"延迟时间为:", this.recTimes * this.recInterval
    }

}
