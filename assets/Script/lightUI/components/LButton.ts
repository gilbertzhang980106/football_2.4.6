import LEvent from "../events/LEvent";
import LComponent from "./LComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LButton extends LComponent {
    @property({ type: cc.Boolean, tooltip: "是否是切换模式" })
    toggle: Boolean = false;

    @property({ type: cc.SpriteFrame, tooltip: "平常态" })
    normal: cc.SpriteFrame = null;

    @property({ type: cc.SpriteFrame, tooltip: "按下" })
    pressed: cc.SpriteFrame = null;

    @property({ type: cc.SpriteFrame, tooltip: "悬浮" })
    hover: cc.SpriteFrame = null;

    @property({ type: cc.SpriteFrame, tooltip: "禁用" })
    disabled: cc.SpriteFrame = null;

    @property({ type: cc.SpriteFrame, tooltip: "选择" })
    selectedSprite: cc.SpriteFrame = null;

    @property({ type: cc.Boolean, tooltip: "选择" })
    isSelected: Boolean = false;

    @property({ type: cc.Label, tooltip: "选择" })
    labelTex: cc.Label = null;

    @property({ type: cc.String, tooltip: "选择" })
    label: String = null;

    private _skin: cc.Sprite;

    protected _clickHandler: Function;

    /**
    * @private
    */
    protected _stateChanged: boolean = false;
    /**
     * @private
     * 按钮的状态值。
     */
    protected _state: number = 0;
    private _selected: boolean;

    /**
     * 按钮状态集。
     */
    protected static stateMap: any = { "mouseup": 0, "mousemove": 1, "mousedown": 2, "mouseout": 0, "mouseleave": 0 };
    protected _sources: any[] = [];

    onLoad() {
        this._sources = [this.normal, this.hover, this.pressed, this.disabled, this.selectedSprite];
        this._skin = this.node.getChildByName("Background").getComponent(cc.Sprite);
        this._skin.spriteFrame = this.normal;

        this.selected = this.isSelected as boolean;


        // console.log("LButton onLoad");
        // this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouse,this,false);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onMouse, this);
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouse, this, false);
        // this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouse, this, false);



        // cc.Node.EventType.mou
        // this.node.on(cc.Node.EventType.TOUCH_START,this.onMouse,this,false);
    }

    protected onMouse(e: cc.Event): void {
        // console.log("onMouseonMouse", e.type, this.toggle, this._selected);
        // this._skin.spriteFrame = this.normal;
        if (this.toggle === false && this._selected) return;
        if (e.type === cc.Node.EventType.TOUCH_START) {
            this.toggle && (this.selected = !this._selected);
            this._clickHandler && this._clickHandler();
            return;
        }
        !this._selected && (this.state = LButton.stateMap[e.type]);
    }

    /**
        * 表示按钮的选中状态。
        * <p>如果值为true，表示该对象处于选中状态。否则该对象处于未选中状态。</p>
        * @implements
        */
    get selected(): boolean {
        return this._selected;
    }

    set selected(value: boolean) {
        // console.log("set selected",value);
        if (this._selected != value) {
            this._selected = value;
            this.state = this._selected ? 4 : 0;
            this.node.dispatchEvent(new LEvent(LEvent.CHANGED));
        }
    }

    /**
    * 对象的状态值。
    * @see #stateMap
    */
    protected get state(): number {
        return this._state;
    }

    protected set state(value: number) {
        if (this._state != value) {
            this._state = value;
            this._setStateChanged();
        }
    }


    /**
     * @private
     * 改变对象的状态。
     */
    protected changeState(): void {
        // console.log("changeState");
        this._stateChanged = false;
        var index: number = this._state;
        if (index > -1)
            this._skin.spriteFrame = this._sources[index];

        // console.log("changeState", index, this._sources);

        // this._sources && (this._bitmap.source = this._sources[index]);
        // if (this.label) {
        //     this._text.color = this._labelColors[index];
        //     if (this._strokeColors) this._text.strokeColor = this._strokeColors[index];
        // }
    }

    public setLabel(value: string): void {
        this.labelTex.string = value;
        this.label = value;
    }

    public getLabel(): string {
        return this.labelTex.string;
    }

    /**@private */
    protected _setStateChanged(): void {
        if (!this._stateChanged) {
            this._stateChanged = true;
            // this.callLater(this.changeState);
            this.scheduleOnce(this.changeState, 0);
        }
    }

    public get clickHandler() {
        return this.clickHandler;
    }

    public set clickHandler(value: Function) {
        this._clickHandler = value;
    }
}