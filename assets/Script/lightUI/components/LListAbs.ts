import LComponent from "./LComponent";

export default class LListAbs extends LComponent{
    // private _dataProvider;
    public set dataProvider(data:Array<any>){
        // this._dataProvider = data;
    }

    public get selectedIndex(): number {
        return -1;
    }

    public get selectedItem(): any {
        return null;
    }
}