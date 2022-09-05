/**
 * @author light
 * 
 */
export default class MyMath {
    public static getPersent(num1: number, num2: number): string {
        return Math.ceil((num1 / num2) * 100) + "%";
    }

    public static randomIntRange(minNum: number, maxNum: number): number {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }

    public static getAngle(from: cc.Vec2, to: cc.Vec2): number {
        var dx: number = to.x - from.x;
        var dy: number = to.y - from.y;
        //trace(from,to,dx,dy,Math.atan(dx/dy))
        return Math.atan(dx / dy);
    }

    public static getRotationFromAngle(angle: number): number {
        //trace(angle,angle*)
        return angle * 180 / Math.PI;
    }

    public static randomInRectangle(rect: cc.Rect): cc.Vec2 {
        return new cc.Vec2(MyMath.randomIntRange(rect.x, rect.x + rect.width), MyMath.randomIntRange(rect.y, rect.y + rect.height));
    }

    public static randomFromChange(...arg): void {

    }

    public static randomFrom(...arg): any {
        return arg[MyMath.randomIntRange(0, arg.length)];
    }

    public static randomFromArray(arg: Array<any>): any {
        return arg[MyMath.randomIntRange(0, arg.length - 1)];
    }

    public static between(num: number, n1: number, n2: number): Boolean {
        if (n2 > n1) {
            var temp: number = n1;
            n1 = n2;
            n2 = temp;
        }
        if (num <= n1 && num >= n2) return true;
        return false;
    }

    public static sun(...arg): number {
        var sun: number = 0;
        for (var i: number = 0; i < arg.length; i++) {
            sun += arg[i];
        }
        return sun;

    }

    public static countTheSamenumber(numbers: Array<number>, num: number): number {
        var count: number = 0;
        for (var i: number = 0; i < numbers.length; numbers) {
            if (numbers[i] == num) count++;
        }
        return count;
    }

    public static countTheSamestring(numbers: Array<string>, str: string): number {
        var count: number = 0;
        for (var i: number = 0; i < numbers.length; numbers) {
            if (numbers[i] == str) count++;
        }
        return count;
    }


    public static getPointDistance(p1: cc.Vec2, p2: cc.Vec2): number {
        var dx: number = p2.x - p1.x;
        var dy: number = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    //数组元素叠加 [1,2,3,4,,] -> [1,3,6,10,,,,]
    private static arrOverAdd(arr: Array<number>) {
        if (!arr || arr.length <= 0) {
            return [];
        } else {
            var temp = [];
            for (var i = 0; i < arr.length; i++) {
                if (i == 0) {
                    temp[i] = arr[i];
                } else {
                    temp[i] = temp[i - 1] + arr[i];
                }
            }
            return temp;
        }
    }

    public static getAreaIndex(num: number, arr: Array<Array<number>>): number {
        let item: Array<number>;
        for (var i = 0; i < arr.length; i++) {
            item = arr[i];
            if (num >= item[0] && num <= item[1]) return i;
        }
        return -1;
    }

    /**
     * 获取数组中最接近的值得index
     * @param random 随机数
     * @param weightArray 权重数组
     * @returns {number}
     */
    private static getArrIndex(random: number, weightArray: Array<number>) {
        var index = 0;
        if (random <= weightArray[0]) {
            return 0;
        } else if (random >= weightArray[weightArray.length - 1]) {
            index = weightArray.length - 1;
            return index;
        } else {
            for (var i = 0; i < weightArray.length; i++) {
                if (random <= weightArray[i]) {
                    index = i;
                } else if (random > weightArray[i] && random <= weightArray[i + 1]) {
                    index = i + 1;
                    break
                } else if (random > weightArray[i] && random <= weightArray[i + 1]) {
                    index = i + 1;
                    break;
                }
            }
        }
        return index;
    }

    public static getRandomByWight(weightArr: Array<number>): number {
        weightArr = this.arrOverAdd(weightArr);
        var totalWeight = weightArr[weightArr.length - 1];
        var random = Math.random() * totalWeight;
        var arrIndex = this.getArrIndex(random, weightArr);
        return arrIndex;
    }

    public static map2arr(map: any): Array<any> {
        let re: Array<any> = [];
        for (var k in map) {
            re.push(map[k]);
        }
        return re;
    }

    public static bigNumberChange(num: number, fractionDigits: number = 0): string {
        let re: string = num.toString();
        if (num > 10000) {
            num = num / 10000;
            num.toFixed(fractionDigits);
            re = num + "W";
        }
        return re;
    }

    public static formatDate(date: Date, fmt: string) {
        var o = {
            "M+": date.getMonth() + 1,                 //月份 
            "d+": date.getDate(),                    //日 
            "h+": date.getHours(),                   //小时 
            "m+": date.getMinutes(),                 //分 
            "s+": date.getSeconds(),                 //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds()             //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
}