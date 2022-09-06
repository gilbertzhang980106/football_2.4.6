declare class QRCode{
	constructor(typeNumber, errorCorrectLevel);
	addData(url);
	make();
	getModuleCount();
	isDark(row, col);
}
declare class QRErrorCorrectLevel{
	public H;
}

declare module com.lightMVC.core {
    import INode = com.lightMVC.interfaces.INode;
    import IProxy = com.lightMVC.interfaces.IProxy;
    class Node implements INode {
        protected proxy: IProxy;
        protected name: string;
        private _isInitialize;
        constructor(name?: string);
        getName(): string;
        getInjector(): Array<any>;
        getIsInitialize(): Boolean;
        setIsInitialize(value: Boolean): void;
    }
}
declare module com.lightMVC.parrerns {
    import IPipelineNotification = com.lightMVC.interfaces.IPipelineNotification;
    class PipelineNotification implements IPipelineNotification {
        private _name;
        private _body;
        constructor(name: string, body?: Object);
        getName(): string;
        setName(value: string): void;
        setBody(body: Object): void;
        getBody(): Object;
        toString(): string;
    }
}
declare module com.lightMVC.parrerns {
    class FacadeManager {
        private static _facades;
        static getFacade(key: string): Facade;
        static registerFacade(name: string, facade: Facade): void;
        static removeFacade(name: string): void;
        static sentPipelineNotification(notiName: string, body?: Object): void;
    }
}
declare module com.lightMVC.parrerns {
    import Node = com.lightMVC.core.Node;
    import IHandle = com.lightMVC.interfaces.IHandle;
    import IMediator = com.lightMVC.interfaces.IMediator;
    import IModel = com.lightMVC.interfaces.IModel;
    import INode = com.lightMVC.interfaces.INode;
    import INotification = com.lightMVC.interfaces.INotification;
    import IPipelineNotification = com.lightMVC.interfaces.IPipelineNotification;
    import IProxy = com.lightMVC.interfaces.IProxy;
    class Mediator extends Node implements IMediator, IHandle {
        private _proxy;
        static NAME: string;
        protected viewComponent: Object;
        private _viewClazz;
        constructor(mediatorName?: string, viewComponent?: Object);
        getSingleton(clazzname: string): Object;
        /**
         * 添加关注的消息名称
         * @param notiName	关注的消息名称
         * @return
         *
         */
        addNotifiction(notiName: string): IMediator;
        /**
         * 删除关注的消息
         * @param notiName	消息名称
         * @return
         *
         */
        removeNotifiction(notiName: string): IMediator;
        /**
         * 获取UI
         * @return
         *
         */
        getViewComponent(): Object;
        /**
         * 设置UI
         * @param viewComponent
         *
         */
        setViewComponent(viewComponent: Object): void;
        /**
         * 调用此方法 完成参数注入   参数需在 getInjector()数组里申明
         *
         */
        injector(): void;
        setProxy(proxy: IProxy): void;
        /**
         * 获取model数据
         * @param modelName
         * @return
         *
         */
        getModel(modelName: string): IModel;
        /**
         * 获取mediatot视图
         * @param mediatorName
         * @return
         *
         */
        getMediator(mediatorName: string): IMediator;
        /**
         * 发送消息
         * @param notiName	消息名称
         * @param body		消息携带的参数
         *
         */
        sentNotification(notiName: string, body?: Object): INode;
        /**
         * 发送管道消息
         * @param notiName
         * @param body
         * @return
         *
         */
        sentPipeNotification(notiName: string, body?: Object): INode;
        /**
         * 注册完成后触发此函数
         *
         */
        onRegister(): void;
        /**
         * 初始化完成后触发此函数   如需获取其它注册对象  需在此函数执行后  否则不能确保获取成功
         *
         */
        onInitialize(): void;
        /**
         * 被移除时候调用此函数
         *
         */
        onRemove(): void;
        /**
         * 消息处理函数  子类可以重写此方法
         * @param notification
         *
         */
        handler(notification: INotification): void;
        /**
         * 响应管道消息函数 自雷可以重写此方法
         * @param noti
         *
         */
        pipeHandler(noti: IPipelineNotification): void;
        /**
         * 绑定关注的视图类
         * @param viewClazz
         *
         */
        bindingView(viewClazz: any): void;
        getViewClazz(): any;
    }
}
declare module com.lightMVC.parrerns {
    import Node = com.lightMVC.core.Node;
    import ICommand = com.lightMVC.interfaces.ICommand;
    import IHandle = com.lightMVC.interfaces.IHandle;
    import IMediator = com.lightMVC.interfaces.IMediator;
    import IModel = com.lightMVC.interfaces.IModel;
    import INode = com.lightMVC.interfaces.INode;
    import INotification = com.lightMVC.interfaces.INotification;
    import IPipelineNotification = com.lightMVC.interfaces.IPipelineNotification;
    import IProxy = com.lightMVC.interfaces.IProxy;
    class Command extends Node implements ICommand, IHandle {
        private _proxy;
        getSingleton(clazzname: string): Object;
        /**
         * 获取一个model数据
         * @param modelName
         * @return
         *
         */
        getModel(modelName: string): IModel;
        /**
         * 获取一个mediator视图
         * @param mediatorName
         * @return
         *
         */
        getMediator(mediatorName: string): IMediator;
        setProxy(proxy: IProxy): void;
        /**
         * 发送消息
         * @param notiName	消息名称
         * @param body		消息携带的参数
         *
         */
        sentNotification(notiName: string, body?: Object): INode;
        /**
         * 发送管道消息
         * @param notiName
         * @param body
         * @return
         *
         */
        sentPipeNotification(notiName: string, body?: Object): INode;
        /**
         * 调用此方法 完成参数注入   参数需在 getInjector()数组里申明
         *
         */
        injector(): void;
        /**
         * 消息处理函数  子类可以重写此方法
         * @param notification
         *
         */
        handler(notification: INotification): void;
        /**
         * 响应管道消息函数 自雷可以重写此方法
         * @param noti
         *
         */
        pipeHandler(noti: IPipelineNotification): void;
    }
}
declare module com.lightMVC.parrerns {
    import INotification = com.lightMVC.interfaces.INotification;
    class Notification implements INotification {
        private _name;
        private _body;
        constructor(name: string, body?: Object);
        getName(): string;
        setName(value: string): void;
        setBody(body: Object): void;
        getBody(): Object;
        toString(): string;
    }
}
declare module com.lightMVC.parrerns {
    import Node = com.lightMVC.core.Node;
    import IConfigure = com.lightMVC.interfaces.IConfigure;
    import IMediator = com.lightMVC.interfaces.IMediator;
    import IModel = com.lightMVC.interfaces.IModel;
    import INode = com.lightMVC.interfaces.INode;
    import IProxy = com.lightMVC.interfaces.IProxy;
    class Configure extends Node implements IConfigure {
        private _proxy;
        constructor();
        /**
         * 注入依赖关系
         *
         */
        injectorAll(): void;
        asSingleton(name: string, single: any): void;
        /**
         * 子类可以重写此方法 完成流程配置
         *
         */
        configure(): void;
        /**
         * 注册model数据
         * @param mmodel
         * @return
         *
         */
        registerModel(mmodel: IModel): IModel;
        /**
         * 注册command控制器
         * @param noteName			需要关注的消息名
         * @param commandClassRef	处理的command类
         *
         */
        registerCommand(noteName: string, commandClassRef: any): void;
        registerPipeCommand(noteName: string, commandClassRef: any): void;
        /**
         * 注册mediator视图
         * @param mediator
         * @return
         *
         */
        registerMediator(mediator: IMediator, viewClazz?: any): IMediator;
        setProxy(proxy: IProxy): void;
        getProxy(): IProxy;
        /**
         * 发送消息
         * @param notiName	消息名称
         * @param body		消息携带的参数
         *
         */
        sentNotification(notiName: string, body?: Object): INode;
    }
}
declare module com.lightMVC.interfaces {
    interface IModel extends INode {
        getData(): Object;
        setData(value: Object): void;
        getModel(modelName: string): IModel;
        getSingleton(clazzname: string): Object;
        onRegister(): void;
        onInitialize(): void;
        onRemove(): void;
        injector(): void;
        setProxy(proxy: IProxy): void;
        sentNotification(notiName: string): INode;
        sentNotification(notiName: string, body: Object): INode;
        sentPipeNotification(notiName: string): INode;
        sentPipeNotification(notiName: string, body: Object): INode;
    }
}
declare module com.lightMVC.interfaces {
    interface IMediator extends INode {
        getViewComponent(): Object;
        setViewComponent(viewComponent: Object): void;
        onRegister(): void;
        onInitialize(): void;
        onRemove(): void;
        getModel(modelName: string): IModel;
        getMediator(mediatorName: string): IMediator;
        getSingleton(clazzname: string): Object;
        addNotifiction(notiName: string): IMediator;
        removeNotifiction(notiName: string): IMediator;
        injector(): void;
        setProxy(proxy: IProxy): void;
        sentNotification(notiName: string): INode;
        sentNotification(notiName: string, body: Object): INode;
        sentPipeNotification(notiName: string): INode;
        sentPipeNotification(notiName: string, body: Object): INode;
        bindingView(viewClazz: any): void;
        getViewClazz(): any;
    }
}
declare module com.lightMVC.interfaces {
    interface IProxy {
        registerModel(model: IModel): IModel;
        getModel(modelName: string): IModel;
        hasModel(modelName: string): Boolean;
        removeModel(modelName: string): void;
        registerCommand(noteName: String, commandClassRef: any): void;
        hasCommand(commandClassRef: any): Boolean;
        removeCommand(commandClassRef: any): void;
        registerMediator(mediator: IMediator): IMediator;
        registerMediator(mediator: IMediator, viewClazz: any): IMediator;
        getMediator(mediatorName: string): IMediator;
        hasMediator(mediatorName: string): Boolean;
        removeMediator(mediatorName: string): void;
        sentPipeNotification(notification: IPipelineNotification): void;
        refisterPipeNotificationMediator(notiName: string, mediator: IMediator): void;
        registerPipeNotificationCommand(nofiticationName: string, commandClassRef: any): void;
        removePipeNotificationCommand(commandClassRef: any): void;
        removeOnePipeNotificationMediator(notiName: string, mediator: IMediator): void;
        removeAllPipeNotificationMediator(nodename: string): void;
        sentNotification(notification: INotification): void;
        registerNotificationMediator(notiName: string, mediator: IMediator): void;
        registerNotificationCommand(nofiticationName: string, commandClassRef: any): void;
        removeNotificationCommand(commandClassRef: any): void;
        removeOneNotificationMediator(notiName: string, mediator: IMediator): void;
        removeAllNotificationMediator(nodename: string): void;
        asSingleton(name: string, single: any): void;
        getSingleton(clazzname: string): Object;
        hasSingleton(name: string): boolean;
        removeSingleton(name: string): any;
        injectorAll(): void;
        injector(injectors: Array<any>, node: INode): void;
        handlerPipelineNotification(notification: IPipelineNotification): void;
        destroy(): void;
        getMediatorMap(): Object;
    }
}
declare module com.lightMVC.interfaces {
    interface IConfigure {
        registerModel(mmodel: IModel): IModel;
        registerCommand(noteName: String, commandClassRef: any): void;
        registerMediator(mediator: IMediator): IMediator;
        registerMediator(mediator: IMediator, viewClazz: any): IMediator;
        setProxy(proxy: IProxy): void;
        configure(): void;
        getProxy(): IProxy;
        asSingleton(name: string, single: any): void;
        injectorAll(): void;
        registerPipeCommand(noteName: string, commandClassRef: any): void;
    }
}
declare module com.lightMVC.interfaces {
    interface ICommand extends INode {
        getModel(modelName: string): IModel;
        getMediator(mediatorName: string): IMediator;
        getSingleton(clazzname: string): Object;
        setProxy(proxy: IProxy): void;
        sentNotification(notiName: string): INode;
        sentNotification(notiName: string, body: Object): INode;
        injector(): void;
        sentPipeNotification(notiName: string): INode;
        sentPipeNotification(notiName: string, body: Object): INode;
    }
}
declare module com.lightMVC.interfaces {
    interface IHandle {
        handler(notification: INotification): void;
        pipeHandler(noti: IPipelineNotification): void;
    }
}
declare module com.lightMVC.interfaces {
    interface IInjection {
        getInjection(): Array<any>;
    }
}
declare module com.lightMVC.interfaces {
    interface IFacade {
        configure(config: IConfigure): IFacade;
        injectUI2Meditor(view: Object, meditorName: string): IFacade;
        injectUI(view: Object): IFacade;
        registerModel(mmodel: IModel): IModel;
        registerCommand(noteName: String, commandClassRef: any): void;
        registerMediator(mediator: IMediator): IMediator;
        registerMediator(mediator: IMediator, viewClazz: any): IMediator;
        asSingleton(name: string, clazz: any): void;
        removeSingleton(name: string): any;
        removeModel(modelName: string): void;
        removeCommand(commandClassRef: any): void;
        removeMediator(mediatorName: string): void;
        sentPipelineNotification(notiName: string): void;
        sentPipelineNotification(notiName: string, body: Object): void;
        handlerPipelineNotification(notification: IPipelineNotification): void;
        getModel(modelName: string): IModel;
        getSingleton(clazzname: string): Object;
        destroy(): void;
    }
}
declare module com.lightMVC.interfaces {
    interface INode {
        getName(): string;
        getInjector(): Array<any>;
        getIsInitialize(): Boolean;
        setIsInitialize(value: Boolean): void;
    }
}
declare module com.lightMVC.interfaces {
    interface INotification {
        getName(): string;
        setName(value: string): void;
        setBody(body: Object): void;
        getBody(): Object;
        toString(): string;
    }
}
declare module com.lightMVC.interfaces {
    interface IPipelineNotification {
        getName(): string;
        setName(value: string): void;
        setBody(body: Object): void;
        getBody(): Object;
        toString(): string;
    }
}
declare module com.lightMVC.parrerns {
    import Node = com.lightMVC.core.Node;
    import IModel = com.lightMVC.interfaces.IModel;
    import INode = com.lightMVC.interfaces.INode;
    import IProxy = com.lightMVC.interfaces.IProxy;
    class Model extends Node implements IModel {
        private _proxy;
        private _data;
        static NAME: string;
        constructor(modelName?: string, data?: Object);
        /**
         * 获取注册过的单列
         * @param clazzname
         * @return
         *
         */
        getSingleton(clazzname: string): Object;
        /**
         * 获取model数据
         * @param modelName
         * @return
         *
         */
        getModel(modelName: string): IModel;
        setProxy(proxy: IProxy): void;
        /**
         * 发送消息
         * @param notiName	消息名称
         * @param body		消息携带的参数
         *
         */
        sentNotification(notiName: string, body?: Object): INode;
        /**
         * 发送管道消息
         * @param notiName
         * @param body
         * @return
         *
         */
        sentPipeNotification(notiName: string, body?: Object): INode;
        /**
         * 调用此方法 完成参数注入   参数需在 getInjector()数组里申明
         *
         */
        injector(): void;
        /**
         * 注册完成后触发此函数
         *
         */
        onRegister(): void;
        /**
         * 初始化完成后触发此函数   如需获取其它注册对象  需在此函数执行后  否则不能确保获取成功
         *
         */
        onInitialize(): void;
        /**
         * 被移除时候调用此函数
         *
         */
        onRemove(): void;
        getData(): Object;
        setData(value: Object): void;
    }
}
declare module com.lightMVC.core {
    import IMediator = com.lightMVC.interfaces.IMediator;
    import IModel = com.lightMVC.interfaces.IModel;
    import INode = com.lightMVC.interfaces.INode;
    import INotification = com.lightMVC.interfaces.INotification;
    import IPipelineNotification = com.lightMVC.interfaces.IPipelineNotification;
    import IProxy = com.lightMVC.interfaces.IProxy;
    class Proxy implements IProxy {
        private _commandMap;
        private _mediatorMap;
        private _modelMap;
        private _singleMap;
        private _notoViewMap;
        private _notoCommMap;
        private _pipeViewMap;
        private _pipeCommMap;
        destroy(): void;
        asSingleton(name: string, clazz: any): void;
        getSingleton(clazzname: string): Object;
        hasSingleton(name: string): boolean;
        removeSingleton(name: string): any;
        registerModel(model: IModel): IModel;
        getModel(modelName: string): IModel;
        hasModel(modelName: string): Boolean;
        removeModel(modelName: string): void;
        registerCommand(noteName: string, commandClassRef: any): void;
        hasCommand(commandClassRef: any): Boolean;
        removeCommand(commandClassRef: any): void;
        registerMediator(mediator: IMediator, viewClazz?: any): IMediator;
        getMediator(mediatorName: string): IMediator;
        hasMediator(mediatorName: string): Boolean;
        removeMediator(mediatorName: string): void;
        refisterPipeNotificationMediator(notiName: string, mediator: IMediator): void;
        removeOnePipeNotificationMediator(notiName: string, mediator: IMediator): void;
        removeAllPipeNotificationMediator(nodename: string): void;
        registerNotificationMediator(notiName: string, mediator: IMediator): void;
        removeOneNotificationMediator(notiName: string, mediator: IMediator): void;
        removeAllNotificationMediator(nodename: string): void;
        registerPipeNotificationCommand(nofiticationName: string, commandClassRef: any): void;
        removePipeNotificationCommand(commandClassRef: any): void;
        registerNotificationCommand(nofiticationName: string, commandClassRef: any): void;
        removeNotificationCommand(commandClassRef: any): void;
        handlerPipelineNotification(notification: IPipelineNotification): void;
        sentPipeNotification(notification: IPipelineNotification): void;
        private sendViewPipeModle;
        private sendCommandPipe;
        sentNotification(notification: INotification): void;
        private sendViewModle;
        private sendCommand;
        injectorAll(): void;
        private inJectorSingle;
        private inJectorSingleHandler;
        private injectorMediator;
        private injectorModle;
        injector(injectors: Array<any>, node: INode): void;
        private getNode;
        getMediatorMap(): Object;
    }
}
declare module com.lightMVC.parrerns {
    import IConfigure = com.lightMVC.interfaces.IConfigure;
    import IFacade = com.lightMVC.interfaces.IFacade;
    import IMediator = com.lightMVC.interfaces.IMediator;
    import IModel = com.lightMVC.interfaces.IModel;
    import IPipelineNotification = com.lightMVC.interfaces.IPipelineNotification;
    import IProxy = com.lightMVC.interfaces.IProxy;
    /**
     * mvc总管 入口   可以继承此类并设计为单列 方便调用
     * @author light-k
     *
     * TODO: 可以考虑增加 asSingleton 数据层直接发送时间 摆脱 model束缚
     *
     */
    class Facade implements IFacade {
        private _proxy;
        getModel(modelName: string): IModel;
        getSingleton(name: string): Object;
        registerModel(mmodel: IModel): IModel;
        registerCommand(noteName: String, commandClassRef: any): void;
        asSingleton(name: string, clazz: any): void;
        removeSingleton(name: string): any;
        registerMediator(mediator: IMediator, viewClazz?: any): IMediator;
        removeMediator(mediatorName: string): void;
        removeModel(modelName: string): void;
        removeCommand(commandClassRef: any): void;
        getProxy(): IProxy;
        /**
         * 配置mvc流程  注册command mediator model 都可以在 IConfigure 配置类里进行
         * @param config	配置类
         * @return 			返回入口类
         *
         */
        configure(config: IConfigure): IFacade;
        injectUI2Meditor(view: Object, meditorName: string): IFacade;
        injectUI(view: Object): IFacade;
        /**
         * 提供给子类使用 发送消息
         * @param notiName	消息名称
         * @param body		消息携带的参数
         *
         */
        protected sentNotification(notiName: string, body?: Object): void;
        /**
         * 给所有的facade发送管道消息
         * @param notiName
         * @param body
         *
         */
        sentPipelineNotification(notiName: string, body?: Object): void;
        handlerPipelineNotification(notification: IPipelineNotification): void;
        destroy(): void;
    }
}
