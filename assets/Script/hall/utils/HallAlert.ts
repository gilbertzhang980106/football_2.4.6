import LAlert from "../../lightUI/components/alert/LAlert";
import LightUI from "../../lightUI/LightUI";

export default class HallAlert{
    //最小的2秒自动关闭的提示条
    public static SmallAlert(msg:string){
        if(msg == null) return;
        LAlert.show(msg,null,"hall/common/PopMsg.prefab",null,null,null,2000);
    }

    //只有确定按钮的提示框
    public static AlertOk(msg:string,closeHandler:Function,data:any = null){
        LAlert.show(msg,null,"hall/common/DialogOk.prefab",LightUI.layerManager.popupLayer,closeHandler,data);
    }
}