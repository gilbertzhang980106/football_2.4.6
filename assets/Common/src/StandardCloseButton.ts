// import AudioManager from "../utils/AudioManager";
import { AudioManage } from './AudioManage'
import audioConfig from "./AudioConfig"
import { DznSocket } from "./DznSocket"
import { gameData } from "../../Script/component/gameData"
const { ccclass, property, requireComponent, menu } = cc._decorator;

/** 标准按钮拓展组件 */
@ccclass
@menu('Custom/StandardButton')
@requireComponent(cc.Button)
export default class StandardCloseButton extends cc.Component {

    @property({
        tooltip: '增加标准点击缩放效果'
    })
    scaleTransition = true;

    @property({
        tooltip: '增加点击音效'
    })
    clickSound = true;

    @property({
        tooltip: '防止短时间内点击多次，增加点击后短暂的按钮无效'
    })
    clickInvalid = true;

    btn: cc.Button;

    onLoad() {
        const btn = this.btn = this.getComponent(cc.Button);
        if (this.scaleTransition) {
            btn.transition = cc.Button.Transition.SCALE;
            btn.zoomScale = 0.9;
        }

        if (this.clickSound || this.clickInvalid) {
            const _onTouchEnded: Function = btn['_onTouchEnded'].bind(btn);
            let touchEnable = true;
            btn['_onTouchEnded'] = (e) => {
                if (this.clickInvalid) {
                    if (!touchEnable) return cc.log('clickInvalid');
                    touchEnable = false;
                    this.scheduleOnce(() => {
                        touchEnable = true;
                    }, 0.3)

                    //发送返回主页的请求
                    DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.MAIN_HOME);
                }
                if (this.clickSound) {
                    AudioManage.playEffect(audioConfig.effect_button_click);
                }
                _onTouchEnded(e);
            }
        }

    }

}