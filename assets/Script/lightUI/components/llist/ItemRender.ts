import List, { ListType } from "./LList";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemRender extends cc.Component {

    @property({ type: cc.Label, tooltip: "显示文本" })
    public label: cc.Label;

    /**数据 */
    public data: any = null;
    /**索引 0表示第一项*/
    public itemIndex: number = 0;

    /**数据改变时调用 */
    public dataChanged() {
        // console.log("ItemRender",this.data);
        if(!this.label) return;
        if (this.data instanceof Object) this.label.string = this.data.label;
        else this.label.string = this.data;
    }
}
