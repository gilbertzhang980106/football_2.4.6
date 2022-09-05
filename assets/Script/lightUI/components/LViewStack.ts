import LEvent from "../events/LEvent";
import LComponent from "./LComponent"
import LTabBar from "./LTabBar";

const { ccclass, property } = cc._decorator;

@ccclass

export default class LViewStack extends LComponent{
    private _views:Array<cc.Node> = [];
    private _selectIndex:number = -1;   

    onLoad(){
        for(var i:number = 0; i<this.node.childrenCount; i++){
            this._views.push(this.node.children[i]);
        }
    }

    private visibleAll(value:boolean):void{
        var l:number = this._views.length;
        for(var i:number = 0; i<l; i++){
            this._views[i].active = value;
        }
    }

    public getViewByIndex(index:number):cc.Node{
        return this._views[index]
    }

    public set selectIndex(value:number){
        if(this._selectIndex == value) return;
        this._selectIndex = value;

        this.visibleAll(false);
        this.getViewByIndex(value).active = true;

        this.node.dispatchEvent(new LEvent(LEvent.CHANGED));
        this.node.dispatchEvent(new LEvent(LEvent.SELECT));
    }
    public get selectIndex():number{ return this._selectIndex };


    public addView(view:cc.Node){
        this.node.addChild(view);
        this._views.push(view);
        view.active = false;
    }

    public removeView(view:cc.Node){
        var l:number = this._views.length;
        for(var i:number = 0; i<l; i++){
            if(this._views[i] == view){
                this._views.splice(i,1);
                this.node.removeChild(view,false);
            } 
        }
    }

    public set views(value:Array<cc.Node>){
        var l:number = this._views.length;
        for(var i:number = 0; i<l; i++){
            this.addView(value[i]);
        }
    }

    public get views():Array<cc.Node>{ return this._views };
}