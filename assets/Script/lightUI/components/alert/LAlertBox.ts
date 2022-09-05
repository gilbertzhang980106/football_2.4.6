import LEvent from "../../events/LEvent";
import LightUI from "../../LightUI";
import LComponent from "../LComponent";
import LWindow from "../LWindow";

export default class LAlertBox extends cc.Node{
    public data:any;
    public url:string;
    private window:cc.Node;

    private _title: string;
    
    private _msg: string;
   

    constructor(prefabUrl:string){
        super();
        this.url = prefabUrl;
        LightUI.loadPrefab(prefabUrl,(node:cc.Node)=>{
            this.window = node;
            this.addChild(this.window);
            this.updataView();
            this.initWindow();
            this.window.on(LEvent.CLOSE,(e:LEvent)=>{
                this.dispatchEvent(new LEvent(LEvent.CLOSE,e.data));
            },this)
        });
    }

    private initWindow(){
        let btn:cc.Button;
        for(var i = 0; i<this.window.children.length; i++){
            btn = this.window.children[i].getComponent(cc.Button);
            if(btn != null) btn.node.on(cc.Node.EventType.TOUCH_START,(e:cc.Event)=>{
                this.window.getComponent(LWindow).close(e.target.name);
            })
        }
    }

    private updataView():void{
        this.window.getComponent(LWindow).setTitle(this._title);
        this.window.getComponent(LWindow).setMsg(this._msg);
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
        if(!this.window) return
        this.window.getComponent(LWindow).setTitle(value);
    }

    public get msg(): string {
        return this._msg;
    }
    public set msg(value: string) {
        this._msg = value;
        if(!this.window) return
        this.window.getComponent(LWindow).setMsg(value);
    }
}