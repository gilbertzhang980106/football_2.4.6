import { PaymentType } from "../hall/script/hall/model/payment/PaymentType";
import ShopView from "../hall/script/hall/ui/main/shop/ShopView";

export namespace utils {

    export class LineInfo {
        dis: number;
        antipole: cc.Vec2;
        drop: cc.Vec2;
    }

    /**
     * 文本颜色
     */
    export function getColorText(text, color){
        return "<color="+ color +">"+ text + "</color>";
    }

    /**
     * 文本颜色
     */
     export function getRichColorText(text, color, color2, width){
        let str = "<color="+ color +">"+ text + "</color>";
        return "<outline color="+ color2 + "width="+ width+">" + str +"</outline>"
    }

    /**
     * 获取 点p 与p1 p2 构成的的直线的对称点 垂足 距离
     */
    export function getPointInfo(p: cc.Vec2, p1: cc.Vec2, p2: cc.Vec2): LineInfo {
        // 先求p2 p3 直线 A B C
        let A = p2.y - p1.y;
        let B = p1.x - p2.x;
        let C = p2.x * p1.y - p1.x * p2.y;
        let dis = getDis(p, A, B, C)
        let p3 = getOpPoint(p, A, B, C)
        let footP = cc.v2((p.x + p3.x) / 2, (p.y + p3.y) / 2);
        return { dis: dis, antipole: p3, drop: footP };
    }

    /**
     * 求对称点
     */
    export function getOpPoint(p: cc.Vec2, A: number, B: number, C: number): cc.Vec2 {
        let x = (p.x - 2 * A * (A * p.x + B * p.y + C) / (A * A + B * B));
        let y = p.y - 2 * B * (A * p.x + B * p.y + C) / (A * A + B * B);
        return cc.v2(x, y)
    }

    /**
     * 求点到直线的距离
     */
    export function getDis(p: cc.Vec2, A: number, B: number, C: number): number {
        let dis = Math.abs((A * p.x + B * p.y + C) / Math.sqrt(A * A + B * B))
        return dis;
    }

    export function toolNick(val: string) {
        var len = 0;
        let nick = [];
        for (var i = 0; i < val.length; i++) {
            var a = val.charAt(i);
            nick.push(val[i]);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
                nick.push("");
            } else {
                len += 1;
            }
        }
        if (len > 8)
            val = (nick.slice(0, 8)).join("") + "...";
        return val;
    }


    /**
     * 获得 v1=>v2 的夹角
     */
    export function getSignAngle(v1: cc.Vec2, v2: cc.Vec2): number {
        var radian = v1.signAngle(v2);
        var angle = 180 / Math.PI * radian;
        return angle;
    }

    /**
     * 获得 v1=>v2 距离 返回移动角度
     * v1 起始向量
     * v2 起始向量
     * 横向变化差值大于纵向变化差值时 左右 +-180
     * 纵向变化差值大于纵向变化差值时 左右 +-90
     */
     export function getDistanceRotation(v1: cc.Vec2, v2: cc.Vec2): number {
        let xDis = Math.abs(v2.x - v1.x);
        let yDis = Math.abs(v2.y - v1.y);
        return xDis>yDis? 180:90;
    }

    /**
     * 获得外接矩形的大小
     */
    export function getOutRectSize(inRect: cc.Size, angle: number): cc.Size {
        angle = Math.abs(angle);
        if (angle > 90 && angle <= 180) {
            angle = 180 - angle;
        }
        var radian = Math.PI / 180 * angle;
        var w = inRect.height * Math.sin(radian) + inRect.width * Math.cos(radian);
        var h = inRect.height * Math.cos(radian) + inRect.width * Math.sin(radian);
        return cc.size(w, h);
    }

    /**
     * 获得外接矩形的大小
     * angle +-180 时 h高不变
     * angle +-90 时 w宽不变
     */
     export function getOutRectSizeStraight(inRect: cc.Size, angle: number): cc.Size {
        angle = Math.abs(angle);
        // if (angle > 90 && angle <= 180) {
        //     angle = 180 - angle;
        // }

        var w = 0;
        var h = 0;
        var radian = Math.PI / 180 * angle;
        if(angle === 180){//高不变
            w= inRect.width;//inRect.height * Math.sin(radian) + inRect.width * Math.cos(radian);
            h= inRect.height;
        }else{//宽不变
            h = inRect.width;//inRect.height * Math.cos(radian) + inRect.width * Math.sin(radian);
            w= inRect.height;
        }
        
        return cc.size(w, h);
    }

    /**
     * 得四个顶点的世界坐标
     */
    export function getNodeVertexByWorldSpaceAR(node: cc.Node, offset: number = 0): cc.Vec2[] {
        let vertexs = getNodeVertexByNodeSpaceAR(node, offset);
        for (let i = 0; i < vertexs.length; i++) {
            vertexs[i] = node.convertToWorldSpaceAR(vertexs[i]);
        }
        return vertexs;
    }

    /**
     * 得四个顶点的节点坐标
     */
    export function getNodeVertexByNodeSpaceAR(node: cc.Node, offset: number = 0): cc.Vec2[] {
        var left = node.width * node.anchorX + offset;
        var right = node.width * (1 - node.anchorX) + offset;
        var bottom = node.height * node.anchorY + offset;
        var top = node.height * (1 - node.anchorY) + offset;
        let lt = cc.v2(-left, top);
        let rt = cc.v2(right, top);
        let rb = cc.v2(right, -bottom);
        let lb = cc.v2(-left, -bottom);
        return [lt, rt, rb, lb];
    }


    export function GetQueryVariable(url: string, variable: string): string {
        var str = url.substr(url.indexOf("?") + 1, url.length);
        var vars = str.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return "";
    };

    export function copyToClipboard(txt: string) {

        let selectText = (textbox, startIndex, stopIndex) => {
            if (textbox.createTextRange) {
                const range = textbox.createTextRange();
                range.collapse(true);
                range.moveStart('character', startIndex);
                range.moveEnd('character', stopIndex - startIndex);
                range.select();
            } else {
                textbox.setSelectionRange(startIndex, stopIndex);
                textbox.focus();
            }
        }

        let input = document.querySelector('#copy-input');
        if (!input) {
            input = document.createElement('input');
            input.id = "copy-input";
            input.readOnly = "readOnly";
            input.style.position = "absolute";
            input.style.left = "-1000px";
            input.style.zIndex = "-1000";
            document.body.appendChild(input);
        }

        input.value = txt;
        selectText(input, 0, txt.length);
        if (document.execCommand('copy')) {

        }
        input.blur();

    }

    export function prefixInteger(num: number, length: number) {
        return (Array(length).join('0') + num).slice(-length);
    }
    
    export class clickGetPrefab{
        public static lastKey = -1;
        public static clickGetPrefab(url: string, callback?: Function){
            clickGetPrefab.lastKey++;
            if(clickGetPrefab.lastKey>0)return;
            // console.log(clickGetPrefab.lastKey,"击的key");
            utils.getPrefab(url, (node)=>{
                clickGetPrefab.lastKey = -1;
                // console.log(clickGetPrefab.lastKey,"回调的key");
                callback && callback(node);
            }); 
        }
    }

    //load预制体
    export function getPrefab(url: string, callback?: Function) {
        let node:cc.Node = null;
        cc.resources.load<cc.Prefab>(url,
            (err, prefab) => {
                if (err == null && prefab) {
                    node = cc.instantiate(prefab);
                    callback && callback(node);
                    if(node.parent)node.parent.removeChild(node);
                    node.parent = cc.find('Canvas');
                    return true;
                } else {
                    clickGetPrefab.lastKey = -1;
                    cc.warn("加载UI：" + url + "错误");
                    return null;
                }
            }
        );
    }

}