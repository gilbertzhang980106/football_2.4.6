

const { ccclass, property } = cc._decorator;

@ccclass
export default class toast extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Animation)
    ani: cc.Animation = null;

    play(name:string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => void) {
        this.ani.play(name);
        this.ani.once(name, callback);
        this.label.string
    }

    setString(str:string){
        this.label.string = str;
    }

    playLongTime(name:string) {
        this.ani.play(name);
        this.label.string
    }
}
