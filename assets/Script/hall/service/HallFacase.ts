import HallNotification from "../events/HallNotification";

/**
 * mvc总入口 作为单例方便任意获取 但需谨慎在业务逻辑中获取此单例
 */
export default class HallFacade extends com.lightMVC.parrerns.Facade{
    protected static instance:HallFacade;

    constructor(){
        super();
        if (HallFacade.instance != null) throw Error("请使用getInstance获取单例");
        HallFacade.instance = this;
    }

    public static getInstance(): HallFacade {
        if (HallFacade.instance == null) HallFacade.instance = new HallFacade();
        return HallFacade.instance;
    }

    public sentNotification(notiName: string, body?: Object){
        super.sentNotification(notiName,body);
    }

    public startup(node: cc.Node, isReload:boolean=false) {
        this.sentNotification(HallNotification.START_UP, node);
    }
}