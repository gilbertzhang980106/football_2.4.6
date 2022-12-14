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
         * ???????????????????????????
         * @param notiName	?????????????????????
         * @return
         *
         */
        addNotifiction(notiName: string): IMediator;
        /**
         * ?????????????????????
         * @param notiName	????????????
         * @return
         *
         */
        removeNotifiction(notiName: string): IMediator;
        /**
         * ??????UI
         * @return
         *
         */
        getViewComponent(): Object;
        /**
         * ??????UI
         * @param viewComponent
         *
         */
        setViewComponent(viewComponent: Object): void;
        /**
         * ??????????????? ??????????????????   ???????????? getInjector()???????????????
         *
         */
        injector(): void;
        setProxy(proxy: IProxy): void;
        /**
         * ??????model??????
         * @param modelName
         * @return
         *
         */
        getModel(modelName: string): IModel;
        /**
         * ??????mediatot??????
         * @param mediatorName
         * @return
         *
         */
        getMediator(mediatorName: string): IMediator;
        /**
         * ????????????
         * @param notiName	????????????
         * @param body		?????????????????????
         *
         */
        sentNotification(notiName: string, body?: Object): INode;
        /**
         * ??????????????????
         * @param notiName
         * @param body
         * @return
         *
         */
        sentPipeNotification(notiName: string, body?: Object): INode;
        /**
         * ??????????????????????????????
         *
         */
        onRegister(): void;
        /**
         * ?????????????????????????????????   ??????????????????????????????  ????????????????????????  ??????????????????????????????
         *
         */
        onInitialize(): void;
        /**
         * ??????????????????????????????
         *
         */
        onRemove(): void;
        /**
         * ??????????????????  ???????????????????????????
         * @param notification
         *
         */
        handler(notification: INotification): void;
        /**
         * ???????????????????????? ???????????????????????????
         * @param noti
         *
         */
        pipeHandler(noti: IPipelineNotification): void;
        /**
         * ????????????????????????
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
         * ????????????model??????
         * @param modelName
         * @return
         *
         */
        getModel(modelName: string): IModel;
        /**
         * ????????????mediator??????
         * @param mediatorName
         * @return
         *
         */
        getMediator(mediatorName: string): IMediator;
        setProxy(proxy: IProxy): void;
        /**
         * ????????????
         * @param notiName	????????????
         * @param body		?????????????????????
         *
         */
        sentNotification(notiName: string, body?: Object): INode;
        /**
         * ??????????????????
         * @param notiName
         * @param body
         * @return
         *
         */
        sentPipeNotification(notiName: string, body?: Object): INode;
        /**
         * ??????????????? ??????????????????   ???????????? getInjector()???????????????
         *
         */
        injector(): void;
        /**
         * ??????????????????  ???????????????????????????
         * @param notification
         *
         */
        handler(notification: INotification): void;
        /**
         * ???????????????????????? ???????????????????????????
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
         * ??????????????????
         *
         */
        injectorAll(): void;
        asSingleton(name: string, single: any): void;
        /**
         * ??????????????????????????? ??????????????????
         *
         */
        configure(): void;
        /**
         * ??????model??????
         * @param mmodel
         * @return
         *
         */
        registerModel(mmodel: IModel): IModel;
        /**
         * ??????command?????????
         * @param noteName			????????????????????????
         * @param commandClassRef	?????????command???
         *
         */
        registerCommand(noteName: string, commandClassRef: any): void;
        registerPipeCommand(noteName: string, commandClassRef: any): void;
        /**
         * ??????mediator??????
         * @param mediator
         * @return
         *
         */
        registerMediator(mediator: IMediator, viewClazz?: any): IMediator;
        setProxy(proxy: IProxy): void;
        getProxy(): IProxy;
        /**
         * ????????????
         * @param notiName	????????????
         * @param body		?????????????????????
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
         * ????????????????????????
         * @param clazzname
         * @return
         *
         */
        getSingleton(clazzname: string): Object;
        /**
         * ??????model??????
         * @param modelName
         * @return
         *
         */
        getModel(modelName: string): IModel;
        setProxy(proxy: IProxy): void;
        /**
         * ????????????
         * @param notiName	????????????
         * @param body		?????????????????????
         *
         */
        sentNotification(notiName: string, body?: Object): INode;
        /**
         * ??????????????????
         * @param notiName
         * @param body
         * @return
         *
         */
        sentPipeNotification(notiName: string, body?: Object): INode;
        /**
         * ??????????????? ??????????????????   ???????????? getInjector()???????????????
         *
         */
        injector(): void;
        /**
         * ??????????????????????????????
         *
         */
        onRegister(): void;
        /**
         * ?????????????????????????????????   ??????????????????????????????  ????????????????????????  ??????????????????????????????
         *
         */
        onInitialize(): void;
        /**
         * ??????????????????????????????
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
     * mvc?????? ??????   ???????????????????????????????????? ????????????
     * @author light-k
     *
     * TODO: ?????????????????? asSingleton ??????????????????????????? ?????? model??????
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
         * ??????mvc??????  ??????command mediator model ???????????? IConfigure ??????????????????
         * @param config	?????????
         * @return 			???????????????
         *
         */
        configure(config: IConfigure): IFacade;
        injectUI2Meditor(view: Object, meditorName: string): IFacade;
        injectUI(view: Object): IFacade;
        /**
         * ????????????????????? ????????????
         * @param notiName	????????????
         * @param body		?????????????????????
         *
         */
        protected sentNotification(notiName: string, body?: Object): void;
        /**
         * ????????????facade??????????????????
         * @param notiName
         * @param body
         *
         */
        sentPipelineNotification(notiName: string, body?: Object): void;
        handlerPipelineNotification(notification: IPipelineNotification): void;
        destroy(): void;
    }
}
