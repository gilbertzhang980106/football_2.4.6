
export default class dznAudio {

    static coins_fly = "audio/coins_fly";
    static coins_to_table = "audio/chips_to_table";
    static game_start = "audio/gamestart";
    static jackpot_win = "audio/jackpot_win";
    static sit = "audio/sit";
    static random_banker = "audio/random_banker";
    static random_banker_lianxu = "audio/random_banker_lianxu";
    static effect_betStart = "audio/effect_betStart";
    static effect_betEnd = "audio/effect_betEnd";
    static effect_flipCard = "audio/effect_flipCard";
    static effect_sendCard = "audio/effect_sendCard";
    static effect_jiabei = "audio/effect_jiabei";
    static effect_auto_fanpai = "audio/effect_dagou";
    static effect_win_all = "audio/f0_quanying";
    static effect_lose_all = "audio/f0_quanshu";
    static effect_getReward = "audio/effect_getReward";
    static effect_lottery = "audio/effect_lottery";
    static effect_turnLottery = "audio/effect_turnLottery";

    //点击按钮
    static effect_button_click = "audio/click_button";
    //关闭按钮
    static effect_button_close = "audio/click_close";
    static effect_coin_big = "audio/coin_big";
    //红包提示
    static effect_hb_begin = "audio/hb_begin";
    //红包雨
    static effect_hb_rain = "audio/hb_rain";
    //红包输
    static effect_hb_lose = "audio/coin_hb_lose";
    //红包赢
    static effect_hb_win = "audio/win";

    static bgm = ["audio/table_bgm1", "audio/table_bgm2", "audio/table_bgm3", "audio/table_bgm4", "audio/table_bgm5", "audio/table_bgm6"]

    static isPreload = false;
    static preload() {
        if (this.isPreload) return;
        this.isPreload = true;
        const arr = [
            this.coins_fly,
            this.effect_betStart,
            this.effect_betEnd,
            this.effect_flipCard,
            this.effect_sendCard,
        ]
        cc.resources.preload(arr, cc.AudioClip);
    }
}
