import LEvent from "../events/LEvent";

export default class MessageBlock extends cc.EventTarget{
    private _list:Array<any> = [];
    private _blockLength:number = 50;

    constructor(blockLength:number = 500){
        super();
        this._blockLength = blockLength;
    }

    public add(msg:any):void{
        if(this._list.length >= this._blockLength) return;
       this._list.push(msg);
    }

    public pop<T>(something:T):void{
        let msg:T = this._list.shift();
        this.dispatchEvent(new LEvent(LEvent.POP,msg,false));
    }

    public getFirst<T>():T{
        return this._list[0];
    }

    public clear(){
        this._list = [];
    }

    public get size():number{
        return this._list.length;
    }

    public set size(value:number){
        this._blockLength = value;
    }
}