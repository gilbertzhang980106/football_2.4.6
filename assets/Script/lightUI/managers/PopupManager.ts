import Dictionary from "../utils/Dictionary";
import LightUI from "../LightUI";
import Draw from "../utils/Draw";
import LEvent from "../events/LEvent";
export default class PopupManager {
    private _infos:Dictionary = new Dictionary();
	
	/**
	 * 
	 * @param window 
	 * @param parent 
	 * @param closeClickOut 是否点击外部关闭面板
	 * @param modal         是否要遮罩
	 * @param modalColor    遮罩颜色
	 * @param modalAlpha    遮罩透明度  0-255
	 * @returns 
	 */
	public addPopUp(window:cc.Node,parent:cc.Node = null
		,closeClickOut:boolean = false,modal:boolean = false,modalColor:string = null,modalAlpha:number = 0):void
	{
		if(closeClickOut == true) modal = true;
		modalColor = modalColor?modalColor:"#000000";
		if(!parent) parent = LightUI.layerManager.popupLayer;
		
		if(this._infos.get(window)) {
			console.log("弹出面板已经存在");
			return;
		}
		let info:PopupInfo = new PopupInfo(window,parent,closeClickOut,modal,modalColor,modalAlpha);
		this._infos.set(window,info);

		// bg_mask
		

		if(modal){
			var sp:cc.Node = Draw.drawRect(new cc.Rect(0,0,LightUI.root.width,LightUI.root.height),modalColor);
			sp.opacity = modalAlpha;
			console.log("弹出面板",sp.opacity);
			parent.addChild(sp);
			parent.addChild(window);
			
			info.modal_bg = sp;
		}else{
			let mask:cc.Node = window.getChildByName("bg_mask");
			if(mask){
				info.modal_bg = mask;
				mask.addComponent(cc.BlockInputEvents);
			} 
			parent.addChild(window);
			console.log("弹出面板");
		}

		window.dispatchEvent(new LEvent(LEvent.SHOW));

		if(closeClickOut)  {
			// console.log("关闭面板",LightUI.root.width,LightUI.root.height);

			// let mask:cc.Node = window.getChildByName("bg_mask");
			// if(mask) {
			// 	mask.on(cc.Node.EventType.TOUCH_START,info.onCloseClickOut,info);
			// }
			
			if(info.modal_bg) info.modal_bg.on(cc.Node.EventType.TOUCH_START,info.onCloseClickOut,info);
		}
	}
	
	public autoClose(window:cc.Node,delay:number){
		if(delay != 0){
			let info:PopupInfo = this._infos.get(window);
			let index = setTimeout(()=>{
				if(!info) return;
				this.removePopUp(window);
				window.dispatchEvent(new cc.Event("close",false));
			},delay);
			info.interval = index;
		}
	}

	public removePopUp(popUp:cc.Node):cc.Node
	{
		let info:PopupInfo = this._infos.get(popUp);
		if(!info)	return;
		var sp:cc.Node = info.modal_bg;
		this._infos.remove(popUp);

		LightUI.root.off(cc.Node.EventType.TOUCH_START,info.onCloseClickOut);

		if(popUp.parent) {
			popUp.parent.removeChild(popUp,false);
		}
		if(sp && sp.parent && info.modal == true){
			sp.parent.removeChild(sp,false);
		}
		popUp.dispatchEvent(new cc.Event("close",false));
		return sp;
	}
	
	public centerPopUp(popUp:cc.Node,rect:cc.Size = null):void
	{
		if(rect != null){
			popUp.x = (rect.width - popUp.width)/2;
			popUp.y = (rect.height - popUp.height)/2;
		}else{
			if((popUp.parent as cc.Node).width == 0 && (popUp.parent as cc.Node).height == 0){
				popUp.x = (LightUI.root.width - popUp.width)/2;
				popUp.y = (LightUI.root.height - popUp.height)/2;
			}else{
				popUp.x = ((popUp.parent as cc.Node).width - popUp.width)/2;
				popUp.y = ((popUp.parent as cc.Node).height - popUp.height)/2;
			}
		}
	}
	
	public static bringToFront(popUp:cc.Sprite):void
	{
		
	}
}

export class PopupInfo{
	public window:cc.Node;
	public parent:cc.Node = null;
	public closeClickOut:boolean = false;
	public modal:boolean = false;
	public modalColor:string = null;
	public modalAlpha:number = 0.60;

	public interval:number;	//自动关闭的延迟id

	public modal_bg:cc.Node;		//背景蒙版

	constructor(window:cc.Node,parent:cc.Node = null
		,closeClickOut:boolean = false,modal:boolean = false,modalColor:string = null,modalAlpha:number = 25){
			this.window = window;
			this.parent = parent;
			this.closeClickOut = closeClickOut;
			this.modal = modal;
			this.modalColor = modalColor;
			this.modalAlpha = modalAlpha;
	}

	public onCloseClickOut(e:cc.Event):void{
        // console.log("onCloseClickOut");
		// if(this.window.getChildByUuid(e.target.uuid)) return;

		// if(this.modal_bg && e.target != this.modal_bg) return;

       
		LightUI.root.off(cc.Node.EventType.TOUCH_START,this.onCloseClickOut);
		// popupM.removePopUp(this.window);
        LightUI.popupManager.removePopUp(this.window);
	}
}