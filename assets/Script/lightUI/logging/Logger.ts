import LEvent from "../events/LEvent";
import LogLevel from "./LogLevel";

// import HttpRequest = Laya.HttpRequest;
// import Browser = Laya.Browser;

export default class Logger extends cc.EventTarget
{
    private _enableConsoleTrace:boolean = true;
    private _enableEventDispatching:boolean = false;
    private _loggingLevel:number = 200;
    private _loggingPrefix:string;
    private _date:Date = new Date();
    
    //是否开启持久化  存入服务端
    private _isPersistence:boolean = false;
    private _address:string;////////////////////http请求地址 
    private _path:string;//////////////////////日志目录 
    // private _hr:HttpRequest;
    private _isDebug:boolean = false;

    constructor(param1:string = "LightUI",isPersistence:boolean = false,address:string = "",path:string = "")
    {
        super();
        this._loggingPrefix = param1;
        this._isPersistence = isPersistence;
        this._address = address;
        this._path = path;
        
        // this._hr = new HttpRequest();
        // this._hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
        // this._hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
        // this._hr.once(Laya.Event.ERROR, this, this.onHttpRequestError);
    }// end function

    public get enableConsoleTrace() : boolean
    {
        return this._enableConsoleTrace;
    }// end function

    public set enableConsoleTrace(param1:boolean)
    {
        this._enableConsoleTrace = param1;
        return;
    }// end function

    public get enableEventDispatching() : boolean
    {
        return this._enableEventDispatching;
    }// end function

    public set enableEventDispatching(param1:boolean)
    {
        this._enableEventDispatching = param1;
        return;
    }// end function

    public get loggingLevel() : number
    {
        return this._loggingLevel;
    }// end function

    public set loggingLevel(param1:number)
    {
        this._loggingLevel = param1;
        return;
    }// end function

    public debug(... args:Array<any>) : void
    {
        this.log(LogLevel.DEBUG, args.join(" "));
        return;
    }// end function

    public info(... args:Array<any>) : void
    {
        this.log(LogLevel.INFO, args.join(" "));
        return;
    }// end function

    public warn(... args:Array<any>) : void
    {
        this.log(LogLevel.WARN, args.join(" "));
        return;
    }// end function

    public error(... args:Array<any>) : void
    {
        this.log(LogLevel.ERROR, args.join(" "));
        return;
    }// end function

    private log(param1:number, param2:string) : void
    {
        if(this._isDebug == false) return;
        var _loc_4:Object = null;
        //var _loc_5:LoggerEvent = null;
        if (param1 < this._loggingLevel)
        {
            return;
        }
        var _loc_3:any = LogLevel.toString(param1);
        if (this._enableConsoleTrace)
        {
            console.log("[" + this._loggingPrefix + "|" + _loc_3 + "|" + this.getNewDate() + "]", param2);
            if(this._isPersistence){
                //{"path" : "123/456.log", "content" : "test"}
                // var data:Object = {};
                // data["path"] = "123/456.log";
                // data["content"] = "[" + this._loggingPrefix + "|" + _loc_3 + "|" + this.getNewDate() + "]" + param2;
                // this._hr.send(this._address,JSON.stringify(data),"post","text");
            }
        }
        if (this._enableEventDispatching)
        {
            
            this.dispatchEvent(new LEvent(_loc_3,param2));
        }
        return;
    }// end function

    private onHttpRequestError(e:any=null):void
    {
        this.error(e);
    }
    
    private onHttpRequestProgress(e:any=null):void
    {
        this.error(e)
    }
    
    private onHttpRequestComplete(e:any=null):void
    {
        //trace("收到数据：" + _hr.data);
    }
    
    private getNewDate():string{
        this._date = new Date();
        return this.dateFormart(this._date);
    }
    
    private dateFormart(date:Date):string{
        return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds();
    }

    public get isPersistence():boolean
    {
        return this._isPersistence;
    }

    public set isPersistence(value:boolean)
    {
        this._isPersistence = value;
    }

    public get isDebug():boolean
    {
        return this._isDebug;
    }

    public set isDebug(value:boolean)
    {
        this._isDebug = value;
    }


}