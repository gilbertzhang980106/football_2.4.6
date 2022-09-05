import LEvent from "../events/LEvent";

export default class MountDataAbs extends cc.EventTarget{
    public static readonly SHOWME:string = "SHOWME";
    public static readonly HIDEME:string = "HIDEME";
    public static readonly UPDATE:string = "UPDATE";

    public static readonly TOKENERROR:string = "TOKENERROR";


    private _active:boolean = false;


    public showMe(){
        this._active = true;
        this.dispatchEvent(new LEvent(MountDataAbs.SHOWME));
    }

    public hideMe(){
        this._active = false;
        this.dispatchEvent(new LEvent(MountDataAbs.HIDEME));
    }

    public update(data?:MountParam){
        this.dispatchEvent(new LEvent(MountDataAbs.UPDATE,data));
    }
}

export class MountParam{
    public type:string;
    public data:any;

    constructor(type:string,data:any){
        this.type = type;
        this.data = data;
    }
}