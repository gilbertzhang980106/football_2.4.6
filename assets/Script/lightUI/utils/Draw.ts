export default class Draw{

    public static drawRect(rect:cc.Rect, color:string = null):cc.Node{
		
		color = color?color:"0xff0000";
		
		var re:cc.Node = new cc.Node();
        re.width = rect.width;
        re.height = rect.height;
        // re.anchorX = 0;
        // re.anchorY = 0;
        let g:cc.Graphics = re.addComponent(cc.Graphics);
        g.fillColor.fromHEX(color);
        g.rect(-rect.width/2,-rect.height/2,rect.width,rect.height);
		g.fill();
		
		return re;
	}

}