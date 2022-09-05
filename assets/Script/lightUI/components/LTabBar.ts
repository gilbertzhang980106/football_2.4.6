import LEvent from "../events/LEvent";
import LComponent from "./LComponent"
import LViewStack from "./LViewStack";

const { ccclass, property } = cc._decorator;

@ccclass

export default class LTabBar extends LComponent {


    @property(LViewStack)
    viewStack: LViewStack = null;

    private _btns: Array<cc.Button> = [];
    private _selectIndex: number = -1;


    constructor() {
        super();
        // console.log("LTabBar.constructor");
    }

    //@override 
    onLoad(): void {
        // console.log("LTabBar.onLoad",this.node.childrenCount);
        var btn: cc.Button;
        let isShow = true;
        for (var i: number = 0; i < this.node.childrenCount; i++) {
            btn = this.node.children[i].getComponent(cc.Button);
            if (btn != null) {
                this._btns.push(btn);
                btn.node["index"] = this._btns.length - 1;
                if (btn.node.active == true && btn.node.opacity == 255) {
                    btn.node.on(cc.Node.EventType.TOUCH_START, this.onItemClick, this);

                }
            }
        }
        this.node.dispatchEvent(new LEvent(LEvent.ITEM_CLICK, this.selectIndex));

    }

    private onItemClick(e: cc.Event) {
        // console.log("seleonItemClickctAll",e.target["index"]);
        this.selectIndex = e.target["index"];
        this.node.dispatchEvent(new LEvent(LEvent.ITEM_CLICK, this.selectIndex));
    }

    private selectAll(value: boolean): void {
        // console.log("selectAll",value);
        var l: number = this._btns.length;
        for (var i: number = 0; i < l; i++) {
            this._btns[i].interactable = !value;
        }
    }

    private getButtonByIndex(index: number): cc.Button {
        return this._btns[index]
    }

    public clear() {
        this._selectIndex = -1;
        var btn: cc.Button;
        for (var i = 0; i < this._btns.length; i++) {
            btn = this._btns[i];
            btn.node.off(cc.Node.EventType.TOUCH_START, this.onItemClick, this);
            btn.interactable = true;
        }
        this._btns = [];
    }

    public getSelectButton() {
        if (this._selectIndex == -1) return null;
        return this._btns[this._selectIndex];
    }

    public set selectIndex(value: number) {
        //-1则清除选中状态
        if (value < 0) {
            this._selectIndex = -1;
            this.selectAll(false);
            return;
        };

        if (this._btns.length <= 0) return;
        if (this._selectIndex == value) return;
        this._selectIndex = value;
        // console.log("selectIndex", value);
        this.selectAll(false);
        this.getButtonByIndex(value).interactable = false;

        if (this.viewStack) this.viewStack.selectIndex = this._selectIndex;

        this.node.dispatchEvent(new LEvent(LEvent.CHANGED, value));
        this.node.dispatchEvent(new LEvent(LEvent.SELECT, value));



    }
    public get selectIndex(): number { return this._selectIndex };

    public get selectButton(): cc.Button {
        return this._btns[this._selectIndex];
    }
}