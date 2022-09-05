import LEvent from "../events/LEvent";
import MountDataAbs, { MountParam } from "./MountDataAbs";

const { ccclass, property } = cc._decorator;

@ccclass

export default class LComponent extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    //onLoad 回调会在节点首次激活时触发
    onLoad () {
        this.node.on(LEvent.CLOSE,this.onClose,this);
        this.node.on(LEvent.SHOW,this.onShow,this);
    }

    protected data:any;
    //标记组件是否完成初始化

    //start 回调函数会在组件第一次激活前
    start() {
    }

    //组件调用close时候触发
    onClose(){

    }

    //每次被显示的时候调用  第一次 早于 start触发
    onShow(){

    }

    private onProgress(value) {
        //TODO: 显示加载进度条
    }

    public onUpdateView(e?:MountParam){

    }

    public showMe(data?:any){
        data && this.setData(data)
    }

    public hideMe(data?:any){

    }

    public setData(data:any){
        this.data = data;
    } 

    public mountData(data:MountDataAbs){
        this.data = data;
        this.data.on(MountDataAbs.SHOWME,this.showMe,this);
        this.data.on(MountDataAbs.HIDEME,this.hideMe,this);
        this.data.on(MountDataAbs.UPDATE,this.updataHandler,this);
    }
    private updataHandler(e:LEvent):void{
        this.onUpdateView(e.data)
    }

    public unMountData(){
        if( this.data == null) return;
        this.data.off(MountDataAbs.SHOWME,this.showMe);
        this.data.off(MountDataAbs.HIDEME,this.hideMe);
        this.data.off(MountDataAbs.UPDATE,this.updataHandler);
        this.data = null;
    }
}