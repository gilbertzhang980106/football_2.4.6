import LEvent from "../events/LEvent";
import Dictionary from "../utils/Dictionary";
import Handler from "../utils/Handler";
import MessageBlock from "./MessageBlock";
import TaskAbs from "./TaskAbs";

/**
 * 异步任务管理器 用来统一管理异步任务 做到统一停止所有的异步任务  同时也能简化顺序执行异步任务的写法
 * 应用场景  比如需要游戏暂停功能 
 * 
 *  example  simpletask
 * 
 *  var tasks:Array<Laya.Handler> = new Array<Laya.Handler>();
 *  tasks.push(Laya.Handler.create(this,this.task1));
 *  tasks.push(Laya.Handler.create(this,this.task2));
 *  LightUI.taskManager.runSimpleTasksOrder(tasks,Laya.Handler.create(this,this.complete)); // task1=>task2=>complete
 *  LightUI.taskManager.runSimpleTasks(tasks,Laya.Handler.create(this,this.complete));  // task2=>task1=>complete
 *
 *	private complete(){
 *		console.log("complete");
 *	}
 *
 *	private task1(complete?:Laya.Handler){
 *		setTimeout(() => {
 *			console.log("task1");
 *			complete.run();
 *		}, 2000);
 *	}
 *
 *	private task2(complete?:Laya.Handler){
 *		setTimeout(() => {
 *			console.log("task2");
 *			complete.run();
 *		}, 1000);
 *	}
 * 
 * 
 * 
 * 
 * 作为任务队列的用法 
 * private test(){
 *         LightUI.taskManager.addTask(TaskAbs.create(this,this.testTask));
 *         LightUI.taskManager.addTask(TaskAbs.create(this,this.testTask2));
 *          LightUI.taskManager.run
 *     }
 *
 *     private testTask():void{
 *         this.scheduleOnce(()=>{
 *             console.log("testTask1任务执行完毕");
 *             //complete.apply(this);
 *             LightUI.taskManager.runNextTask();
 *        },2);
 *    }
 *
 *  private testTask2():void{
 *      console.log("testTask2任务执行完毕");
 *      //complete.apply(this);
 *      LightUI.taskManager.runNextTask();
 *  }
 * 
 * 或者是
 *  
 * private test(){
 *    LightUI.taskManager.addTask(TaskAbs.create(this,this.testTask));
 *      LightUI.taskManager.addTask(TaskAbs.create(this,this.testTask2));
 *  }
 *
 *  private testTask(complete:Function):void{
 *      this.scheduleOnce(()=>{
 *          console.log("testTask1任务执行完毕");
 *          complete.apply(this);
 *      },2);
 *  }
 *
 *  private testTask2(complete:Function):void{
 *      console.log("testTask2任务执行完毕");
 *      complete.apply(this);
 *  }
 * 
 * 
 */
export default class TaskManager extends cc.EventTarget{
    private _id:number = 0;
    private dic:Dictionary = new Dictionary();
    private _block:MessageBlock;
    private _autoReback:boolean;

    public static _pool:Array<TaskManager> = [];
    
    constructor(blockLength:number = 500, autoReback:boolean = false){
        super();
        this._block = new MessageBlock(blockLength);
        this._autoReback = autoReback;
    }

    public static creat(blockLength:number = 500, autoReback:boolean = true){
        if(this._pool.length <= 0){
            //creat
            return new TaskManager(blockLength,autoReback);
        }else{
            //borrow
            let taskManager:TaskManager = this._pool.pop();
            taskManager.blockLength = blockLength;
            taskManager.autoReback = autoReback;
            return taskManager;
        }
    }

    public static reback(taskManager:TaskManager){
        taskManager.clear();
        this._pool.push(taskManager);
    }

    public addTask(task:TaskAbs){
        // console.log("增加一个任务");
        this._block.add(task);
        //如果只有一个任务 则立马开始执行
        // if(this._block.size == 1) this.runTask(task);
    }

    public run(){
        if(this._block.size <= 0) return;
        this.runTask(this._block.getFirst());
    }

    public clear(){
        this._block.clear();
        this.dic.clear();
    }

    //手动调用执行下一个任务
    public runNextTask(){
        this._block.pop(TaskAbs);
        if(this._block.size > 0) this.runTask(this._block.getFirst());
        else{
            //批次任务 执行完毕
            // console.log("批次任务 执行完毕");
            this.dispatchEvent(new LEvent(LEvent.COMPLETE));
            if(this._autoReback == true){
                TaskManager.reback(this);
            }
        }
    }

    private runTask(task:TaskAbs){
        task.once(LEvent.COMPLETE,()=>{
            this._block.pop(TaskAbs);   //任务执行完毕  出列
            //如果还有任务 则继续执行
            if(this._block.size > 0) this.runTask(this._block.getFirst());
            else console.log("暂无任务");
        })
        task.run();
    }
    
    private runSimpleTask(task:Handler,complete?:Handler){
            if(this.dic.get(task)){ return null}
            this.dic.set(task,task);
            if(!task.args) task.args = [];
            task.args.push(complete);
            task.run();
    }

    /**
     * 按顺序执行任务列表
     * @param tasks 
     * @param complete 
     */
    public runSimpleTasksOrder(tasks:Array<Handler>,complete?:Handler):number{

        let id = this._id++;
        this.dic.set(id,tasks);


        let l:number = tasks.length;
        let task:Handler = tasks.shift();
        let itemComplete:Function = ()=>{
            if(task) this.clearSimpleTask(task);
            let tasklist:Array<Handler> = this.dic.get(id);
            if(tasklist == null){
                console.log("被清除了");
                return;
            }
            
            if(tasklist.length <= 0){
                if(complete) complete.run(); 
                return;
            } 
            task = tasklist.shift();
            this.runSimpleTask(task,Handler.create(this,itemComplete));
        }
        this.runSimpleTask(task,Handler.create(this,itemComplete));
        return id;
    }

    /**
     * 同时执行一批任务
     * @param tasks 
     * @param complete 
     */
    public runSimpleTasks(tasks:Array<Handler>,complete?:Handler){
        let l:number = tasks.length;

        if(l <= 0) if(complete) complete.run();

        let lights:number = 0;
        let itemComplete:Function = ()=>{
            if(tasks[lights]) this.clearSimpleTask(tasks[lights]);
            if(++lights >= l){
                if(complete) complete.run();
                return;
            }
        }
        for(var i:number = 0; i<l; i++){
            this.runSimpleTask(tasks[i],Handler.create(this,itemComplete));
        }
    }

    public clearSimpleTask(task:Handler){
        if(!this.dic.get(task)) return; 
        this.dic.remove(task); 
    }

    public set blockLength(value:number){
        this._block.size = value;
    }

    public set autoReback(value:boolean){
        this._autoReback = value;
    }
}