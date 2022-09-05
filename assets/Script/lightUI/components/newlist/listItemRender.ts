import LEvent from "../../events/LEvent";


const { ccclass, property } = cc._decorator;

@ccclass
export default class listItemRender extends cc.Component {
    /**数据 */
    public data: any = null;
    /**索引 0表示第一项*/
    public itemIndex: number = 0;

    onLoad() {


    }
    /**数据改变时调用 */
    public dataChanged() {
        // this.node.getChildByName("rankLab").getComponent(cc.Label).string = this.data.rank + "";
        // this.node.getChildByName("nameLab").getComponent(cc.Label).string = this.data.name + "";
    }
}
