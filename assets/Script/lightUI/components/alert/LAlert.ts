import LEvent from "../../events/LEvent";
import LightUI from "../../LightUI";
import LWindow from "../LWindow";
import LAlertBox from "./LAlertBox";
export default class LAlert{
    private static delayRemoveDie: Object = {};

    private static pools:object = {};

    public static show(message:string,tile:string
        ,windowSource:string,parent:cc.Node,closeHandler:Function,data,delayRemove:number = 0){

        //从对象池中获取
        let window:LAlertBox = this.getWindow(windowSource);
        let pool:cc.NodePool = LAlert.pools[windowSource];

        window.data = data;
        // let winNode:LWindow = window.getLWindow();
        window.title = tile;
        window.msg = message;
        // winNode.updateView();
        window.width = LightUI.root.width;
        window.height = LightUI.root.height;
        LightUI.popupManager.addPopUp(window,LightUI.layerManager.popupLayer);


        let removeFun:Function = (ww:cc.Node)=>{
            LightUI.popupManager.removePopUp(ww);
        };


        if(delayRemove > 0){
            setTimeout(removeFun.bind(this), delayRemove,window);
        }

        window.once(LEvent.CLOSE,(e:LEvent)=>{
            if(window.parent)
            {
                LightUI.popupManager.removePopUp(window);
            } 
            closeHandler && closeHandler(e.data);
            //归还对象池
            pool.put(window);
        });

        return window;
    }

    private static getWindow(url:string):LAlertBox{
        let pool:cc.NodePool = LAlert.pools[url];
       if(pool == null){
           pool = new cc.NodePool();
           LAlert.pools[url] = pool;
       }
       
       if (pool.size() == 0) {
            return  new LAlertBox(url);
        } else {
            return pool.get() as LAlertBox;
        }
    }
}