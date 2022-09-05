import LComponent from "./LComponent"
import LEvnet from "../events/LEvent";
import { AudioManage } from "../../../../common/src/AudioManage";

const { ccclass, property } = cc._decorator;

@ccclass

export default class LWindow extends LComponent{
    @property()
    title:string = "";

    @property()
    msg:string = "";

    @property()
    closeParent:Boolean = false;

    @property(cc.Label)
    public title_txt:cc.Label = null;

    @property(cc.Label)
    public msg_txt:cc.Label = null;

    @property(cc.Button)
    public close_btn:cc.Button = null;

    //@override
    public onUpdateView():void{
        if(this.title_txt) this.title_txt.string = this.title;
        if(this.msg_txt) this.msg_txt.string = this.msg;
    }

    //@override
    onLoad(): void {
        // console.log("window close"+this.close_btn.node);
        if(this.close_btn) this.close_btn.node.on(cc.Node.EventType.TOUCH_START,(e:cc.Event)=>{
            // console.log("window close");
            this.close(e.target.name);
        },this);
        this.onUpdateView();

        //遮挡下层事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.none);
    }

    public close(targetName:string = ""){
        console.log("windows close",targetName);
        this.node.dispatchEvent(new LEvnet(LEvnet.CLOSE,targetName));
        this.node.off(cc.Node.EventType.TOUCH_START, this.none);
        if(this.closeParent == true) {
            this.node.parent.parent && this.node.parent.parent.removeChild(this.node,false);
        } else {
            this.node.parent && this.node.parent.removeChild(this.node,false);
        }
        AudioManage.playEffect('audio/click_close');
    }

    private none():void{}

    public getMsg():string{ return this.msg;  }
    public setMsg(value:string){
        this.msg = value;
        if(this.msg_txt) this.msg_txt.string = this.msg;
    }

    public getTitle():string{ return this.title;  }
    public setTitle(value:string){
        this.title = value;
        if(this.title_txt) this.title_txt.string = this.title;
    }
}