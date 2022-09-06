export default class serverTime {
    static offsetTime = 0;

    static setOffsetTime(v: apiData.pong) {
        let msgTime = Date.now() - v.clientTime;
        let serverNow = v.serverTime + msgTime / 2;
        this.offsetTime = Math.round(serverNow - Date.now());
    }

    static get serverTime() {
        return Date.now() + this.offsetTime;
    }
}