import { DznSocket } from "../../Common/src/DznSocket"
import serverTime from "./serverTime"
import { gameData } from "./gameData";
const { ccclass, property } = cc._decorator;

@ccclass
export default class heartBeat extends cc.Component {

    @property
    interval: number = 5;

    @property
    time: number = 0;

    @property
    maxTime: number = 3;

    onLoad() {
        DznSocket.on("JOIN_DESK_ACK", this.JOIN_DESK_ACK, this);
        DznSocket.on("PONG", this.PONG, this);
    }

    onDestroy() {
        DznSocket.targetOff(this);
    }

    JOIN_DESK_ACK(v: apiData.join_desk_ack) {
        
        this.unscheduleAllCallbacks();

        let sendBeat = () => {
            this.time++;
            // 心跳超过次数 关闭网络 重连在场景中处理
            if (this.time > this.maxTime) {
                this.unscheduleAllCallbacks();
                this.time = 0;
                DznSocket.closeSocket();
                return;
            }

            if (!DznSocket.getConnect()) {
                this.unscheduleAllCallbacks();
                return;
            }

            DznSocket.sendMessage({
                cmdKey: "PING",
                clientTime: Date.now(),
            })

        };
        sendBeat();
        this.schedule(sendBeat, this.interval);
    }

    PONG(v: apiData.pong) {
        this.time = 0;
        serverTime.setOffsetTime(v);
    }
}
