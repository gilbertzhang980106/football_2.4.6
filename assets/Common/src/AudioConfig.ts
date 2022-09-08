
export default class dznAudio {

    //点击按钮
    static effect_button_click = "audio/click_button";
    //关闭按钮
    static effect_button_close = "audio/click_close";
    //红包提示
    static effect_hb_begin = "audio/hb_begin";
    //红包雨
    static effect_hb_rain = "audio/hb_rain";
    //红包输
    static effect_hb_lose = "audio/hb_lose";
    //红包赢
    static effect_hb_win = "audio/win";

    static isPreload = false;
    static preload() {
        if (this.isPreload) return;
        this.isPreload = true;
        // const arr = [
        //     this.coins_fly,
        //     this.effect_betStart,
        //     this.effect_betEnd,
        //     this.effect_flipCard,
        //     this.effect_sendCard,
        // ]
        // cc.resources.preload(arr, cc.AudioClip);
    }
}
