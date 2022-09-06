var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var com;
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var core;
        (function (core) {
            var Node = /** @class */ (function () {
                function Node(name) {
                    if (name === void 0) { name = null; }
                    this._isInitialize = false; ///////////////标记是否已经被初始化
                    this.name = name;
                }
                //		public setProxy(proxy:IProxy):void{
                //			this.proxy = proxy;
                //			
                //			//TODO:  如此的做法 只能是  被注入的类 必须先与注入类 创建     优化方案   静态注入类  同一批次注入   动态注入的类  只能是被注入 已创建的类 
                //			//if(getInjector().length != 0) proxy["injector"](getInjector(),this);
                //		}
                Node.prototype.getName = function () {
                    return this.name;
                };
                //		public sentNotification(notiName:string, body:Object = null):INode{
                //			proxy.sentNotification(new Notification(notiName,body));
                //			return this;
                //		}
                Node.prototype.getInjector = function () {
                    return [];
                };
                Node.prototype.getIsInitialize = function () {
                    return this._isInitialize;
                };
                Node.prototype.setIsInitialize = function (value) {
                    this._isInitialize = value;
                };
                return Node;
            }());
            core.Node = Node;
        })(core = lightMVC.core || (lightMVC.core = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
//========= parrerns ==========
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var parrerns;
        (function (parrerns) {
            var PipelineNotification = /** @class */ (function () {
                function PipelineNotification(name, body) {
                    if (body === void 0) { body = null; }
                    this._name = name;
                    this._body = body;
                }
                PipelineNotification.prototype.getName = function () {
                    return this._name;
                };
                PipelineNotification.prototype.setName = function (value) {
                    this._name = value;
                };
                PipelineNotification.prototype.setBody = function (body) {
                    this._body = body;
                };
                PipelineNotification.prototype.getBody = function () {
                    return this._body;
                };
                PipelineNotification.prototype.toString = function () {
                    return null;
                };
                return PipelineNotification;
            }());
            parrerns.PipelineNotification = PipelineNotification;
        })(parrerns = lightMVC.parrerns || (lightMVC.parrerns = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var parrerns;
        (function (parrerns) {
            var PipelineNotification = com.lightMVC.parrerns.PipelineNotification;
            var FacadeManager = /** @class */ (function () {
                function FacadeManager() {
                }
                FacadeManager.getFacade = function (key) {
                    var facade = this._facades[key];
                    if (facade == null) {
                        facade = new parrerns.Facade();
                        this._facades[key] = facade;
                    }
                    return facade;
                };
                FacadeManager.registerFacade = function (name, facade) {
                    this._facades[name] = facade;
                };
                FacadeManager.removeFacade = function (name) {
                    var facade = this._facades[name];
                    if (facade == null)
                        return;
                    facade.destroy();
                    delete this._facades[name];
                };
                FacadeManager.sentPipelineNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    //foreach
                    var facade;
                    for (var key in this._facades) {
                        facade = this._facades[key];
                        facade.handlerPipelineNotification(new PipelineNotification(notiName, body));
                    }
                };
                FacadeManager._facades = new Object();
                return FacadeManager;
            }());
            parrerns.FacadeManager = FacadeManager;
        })(parrerns = lightMVC.parrerns || (lightMVC.parrerns = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var parrerns;
        (function (parrerns) {
            var Node = com.lightMVC.core.Node;
            var Mediator = /** @class */ (function (_super) {
                __extends(Mediator, _super);
                function Mediator(mediatorName, viewComponent) {
                    if (mediatorName === void 0) { mediatorName = ""; }
                    if (viewComponent === void 0) { viewComponent = null; }
                    var _this = _super.call(this) || this;
                    _this.name = (mediatorName != null) ? mediatorName : Mediator.NAME;
                    //if(viewComponent) setViewComponent(viewComponent);
                    if (viewComponent)
                        _this.viewComponent = viewComponent;
                    return _this;
                }
                Mediator.prototype.getSingleton = function (clazzname) {
                    return this._proxy.getSingleton(clazzname);
                };
                /**
                 * 添加关注的消息名称
                 * @param notiName	关注的消息名称
                 * @return
                 *
                 */
                Mediator.prototype.addNotifiction = function (notiName) {
                    this._proxy.registerNotificationMediator(notiName, this);
                    return this;
                };
                /**
                 * 删除关注的消息
                 * @param notiName	消息名称
                 * @return
                 *
                 */
                Mediator.prototype.removeNotifiction = function (notiName) {
                    this._proxy.removeOneNotificationMediator(notiName, this);
                    return this;
                };
                /**
                 * 获取UI
                 * @return
                 *
                 */
                Mediator.prototype.getViewComponent = function () {
                    return this.viewComponent;
                };
                /**
                 * 设置UI
                 * @param viewComponent
                 *
                 */
                Mediator.prototype.setViewComponent = function (viewComponent) {
                    this.viewComponent = viewComponent;
                };
                /**
                 * 调用此方法 完成参数注入   参数需在 getInjector()数组里申明
                 *
                 */
                Mediator.prototype.injector = function () {
                    this._proxy.injector(this.getInjector(), this);
                };
                Mediator.prototype.setProxy = function (proxy) {
                    this._proxy = proxy;
                };
                /**
                 * 获取model数据
                 * @param modelName
                 * @return
                 *
                 */
                Mediator.prototype.getModel = function (modelName) {
                    return this._proxy.getModel(modelName);
                };
                /**
                 * 获取mediatot视图
                 * @param mediatorName
                 * @return
                 *
                 */
                Mediator.prototype.getMediator = function (mediatorName) {
                    return this._proxy.getMediator(mediatorName);
                };
                /**
                 * 发送消息
                 * @param notiName	消息名称
                 * @param body		消息携带的参数
                 *
                 */
                Mediator.prototype.sentNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    this._proxy.sentNotification(new parrerns.Notification(notiName, body));
                    return this;
                };
                /**
                 * 发送管道消息
                 * @param notiName
                 * @param body
                 * @return
                 *
                 */
                Mediator.prototype.sentPipeNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    this._proxy.sentNotification(new parrerns.Notification(notiName, body));
                    return this;
                };
                /**
                 * 注册完成后触发此函数
                 *
                 */
                Mediator.prototype.onRegister = function () {
                };
                /**
                 * 初始化完成后触发此函数   如需获取其它注册对象  需在此函数执行后  否则不能确保获取成功
                 *
                 */
                Mediator.prototype.onInitialize = function () {
                };
                /**
                 * 被移除时候调用此函数
                 *
                 */
                Mediator.prototype.onRemove = function () {
                };
                /**
                 * 消息处理函数  子类可以重写此方法
                 * @param notification
                 *
                 */
                Mediator.prototype.handler = function (notification) {
                };
                /**
                 * 响应管道消息函数 自雷可以重写此方法
                 * @param noti
                 *
                 */
                Mediator.prototype.pipeHandler = function (noti) {
                };
                /**
                 * 绑定关注的视图类
                 * @param viewClazz
                 *
                 */
                Mediator.prototype.bindingView = function (viewClazz) {
                    this._viewClazz = viewClazz;
                };
                Mediator.prototype.getViewClazz = function () {
                    return this._viewClazz;
                };
                Mediator.NAME = "Mediator";
                return Mediator;
            }(Node));
            parrerns.Mediator = Mediator;
        })(parrerns = lightMVC.parrerns || (lightMVC.parrerns = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var parrerns;
        (function (parrerns) {
            var Node = com.lightMVC.core.Node;
            var Command = /** @class */ (function (_super) {
                __extends(Command, _super);
                function Command() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Command.prototype.getSingleton = function (clazzname) {
                    return this._proxy.getSingleton(clazzname);
                };
                /**
                 * 获取一个model数据
                 * @param modelName
                 * @return
                 *
                 */
                Command.prototype.getModel = function (modelName) {
                    return this._proxy.getModel(modelName);
                };
                /**
                 * 获取一个mediator视图
                 * @param mediatorName
                 * @return
                 *
                 */
                Command.prototype.getMediator = function (mediatorName) {
                    return this._proxy.getMediator(mediatorName);
                };
                Command.prototype.setProxy = function (proxy) {
                    this._proxy = proxy;
                };
                /**
                 * 发送消息
                 * @param notiName	消息名称
                 * @param body		消息携带的参数
                 *
                 */
                Command.prototype.sentNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    this._proxy.sentNotification(new parrerns.Notification(notiName, body));
                    return this;
                };
                /**
                 * 发送管道消息
                 * @param notiName
                 * @param body
                 * @return
                 *
                 */
                Command.prototype.sentPipeNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    this._proxy.sentNotification(new parrerns.Notification(notiName, body));
                    return this;
                };
                /**
                 * 调用此方法 完成参数注入   参数需在 getInjector()数组里申明
                 *
                 */
                Command.prototype.injector = function () {
                    this._proxy.injector(this.getInjector(), this);
                };
                /**
                 * 消息处理函数  子类可以重写此方法
                 * @param notification
                 *
                 */
                Command.prototype.handler = function (notification) {
                };
                /**
                 * 响应管道消息函数 自雷可以重写此方法
                 * @param noti
                 *
                 */
                Command.prototype.pipeHandler = function (noti) {
                };
                return Command;
            }(Node));
            parrerns.Command = Command;
        })(parrerns = lightMVC.parrerns || (lightMVC.parrerns = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var parrerns;
        (function (parrerns) {
            var Notification = /** @class */ (function () {
                function Notification(name, body) {
                    if (body === void 0) { body = null; }
                    this._name = name;
                    this._body = body;
                }
                Notification.prototype.getName = function () {
                    return this._name;
                };
                Notification.prototype.setName = function (value) {
                    this._name = value;
                };
                Notification.prototype.setBody = function (body) {
                    this._body = body;
                };
                Notification.prototype.getBody = function () {
                    return this._body;
                };
                Notification.prototype.toString = function () {
                    return null;
                };
                return Notification;
            }());
            parrerns.Notification = Notification;
        })(parrerns = lightMVC.parrerns || (lightMVC.parrerns = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var parrerns;
        (function (parrerns) {
            var Node = com.lightMVC.core.Node;
            var Configure = /** @class */ (function (_super) {
                __extends(Configure, _super);
                function Configure() {
                    return _super.call(this) || this;
                }
                ;
                /**
                 * 注入依赖关系
                 *
                 */
                Configure.prototype.injectorAll = function () {
                    this._proxy.injectorAll();
                };
                Configure.prototype.asSingleton = function (name, single) {
                    this._proxy.asSingleton(name, single);
                };
                /**
                 * 子类可以重写此方法 完成流程配置
                 *
                 */
                Configure.prototype.configure = function () {
                };
                /**
                 * 注册model数据
                 * @param mmodel
                 * @return
                 *
                 */
                Configure.prototype.registerModel = function (mmodel) {
                    return this._proxy.registerModel(mmodel);
                };
                /**
                 * 注册command控制器
                 * @param noteName			需要关注的消息名
                 * @param commandClassRef	处理的command类
                 *
                 */
                Configure.prototype.registerCommand = function (noteName, commandClassRef) {
                    this._proxy.registerCommand(noteName, commandClassRef);
                };
                Configure.prototype.registerPipeCommand = function (noteName, commandClassRef) {
                    this._proxy.registerPipeNotificationCommand(noteName, commandClassRef);
                };
                /**
                 * 注册mediator视图
                 * @param mediator
                 * @return
                 *
                 */
                Configure.prototype.registerMediator = function (mediator, viewClazz) {
                    if (viewClazz === void 0) { viewClazz = null; }
                    return this._proxy.registerMediator(mediator, viewClazz);
                };
                Configure.prototype.setProxy = function (proxy) {
                    this._proxy = proxy;
                    this.configure();
                };
                Configure.prototype.getProxy = function () {
                    return this._proxy;
                };
                /**
                 * 发送消息
                 * @param notiName	消息名称
                 * @param body		消息携带的参数
                 *
                 */
                Configure.prototype.sentNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    this._proxy.sentNotification(new parrerns.Notification(notiName, body));
                    return this;
                };
                return Configure;
            }(Node));
            parrerns.Configure = Configure;
        })(parrerns = lightMVC.parrerns || (lightMVC.parrerns = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var parrerns;
        (function (parrerns) {
            var Node = com.lightMVC.core.Node;
            var Model = /** @class */ (function (_super) {
                __extends(Model, _super);
                function Model(modelName, data) {
                    if (modelName === void 0) { modelName = null; }
                    if (data === void 0) { data = null; }
                    var _this = _super.call(this) || this;
                    _this.name = (modelName != null) ? modelName : Model.NAME;
                    if (data != null)
                        _this.setData(data);
                    return _this;
                }
                /**
                 * 获取注册过的单列
                 * @param clazzname
                 * @return
                 *
                 */
                Model.prototype.getSingleton = function (clazzname) {
                    return this._proxy.getSingleton(clazzname);
                };
                /**
                 * 获取model数据
                 * @param modelName
                 * @return
                 *
                 */
                Model.prototype.getModel = function (modelName) {
                    return this._proxy.getModel(modelName);
                };
                Model.prototype.setProxy = function (proxy) {
                    this._proxy = proxy;
                };
                /**
                 * 发送消息
                 * @param notiName	消息名称
                 * @param body		消息携带的参数
                 *
                 */
                Model.prototype.sentNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    this._proxy.sentNotification(new parrerns.Notification(notiName, body));
                    return this;
                };
                /**
                 * 发送管道消息
                 * @param notiName
                 * @param body
                 * @return
                 *
                 */
                Model.prototype.sentPipeNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    this._proxy.sentNotification(new parrerns.Notification(notiName, body));
                    return this;
                };
                /**
                 * 调用此方法 完成参数注入   参数需在 getInjector()数组里申明
                 *
                 */
                Model.prototype.injector = function () {
                    this._proxy.injector(this.getInjector(), this);
                };
                /**
                 * 注册完成后触发此函数
                 *
                 */
                Model.prototype.onRegister = function () {
                };
                /**
                 * 初始化完成后触发此函数   如需获取其它注册对象  需在此函数执行后  否则不能确保获取成功
                 *
                 */
                Model.prototype.onInitialize = function () {
                };
                /**
                 * 被移除时候调用此函数
                 *
                 */
                Model.prototype.onRemove = function () {
                };
                Model.prototype.getData = function () {
                    return this._data;
                };
                Model.prototype.setData = function (value) {
                    this._data = value;
                };
                Model.NAME = "Model";
                return Model;
            }(Node));
            parrerns.Model = Model;
        })(parrerns = lightMVC.parrerns || (lightMVC.parrerns = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var core;
        (function (core) {
            var FacadeManager = com.lightMVC.parrerns.FacadeManager;
            var Proxy = /** @class */ (function () {
                function Proxy() {
                    //		private var _dispatcher:INofiticationDispatcher = new NofiticationDispatcher();
                    this._commandMap = {}; /////////////以name为key
                    this._mediatorMap = {};
                    this._modelMap = {};
                    this._singleMap = {};
                    this._notoViewMap = {};
                    this._notoCommMap = {};
                    this._pipeViewMap = {};
                    this._pipeCommMap = {};
                }
                Proxy.prototype.destroy = function () {
                    this._commandMap = null; /////////////以name为key
                    this._mediatorMap = null;
                    this._modelMap = null;
                    this._singleMap = null;
                    this._notoViewMap = null;
                    this._notoCommMap = null;
                    this._pipeViewMap = null;
                    this._pipeCommMap = null;
                };
                Proxy.prototype.asSingleton = function (name, clazz) {
                    //Laya.ClassUtils.getClass();
                    if (this._singleMap[name])
                        throw new Error("asSingleton() 单例不能重名");
                    this._singleMap[name] = new SingleInfo(name, clazz);
                };
                Proxy.prototype.getSingleton = function (clazzname) {
                    var info = this._singleMap[clazzname];
                    return info ? info.single : null;
                };
                Proxy.prototype.hasSingleton = function (name) {
                    return (this._singleMap[name] == null) ? false : true;
                    ;
                };
                Proxy.prototype.removeSingleton = function (name) {
                    var model = this._modelMap[name];
                    delete this._modelMap[name];
                    if (model.onRemove)
                        model.onRemove();
                    return model;
                };
                Proxy.prototype.registerModel = function (model) {
                    //trace("registerModel",mmodel,mmodel.getName, mmodel is IModel,mmodel is TestModel)
                    this._modelMap[model.getName()] = model;
                    model.setProxy(this);
                    model.onRegister();
                    //if(model.getInjector().length == 0) model.onInitialize();
                    return model;
                };
                Proxy.prototype.getModel = function (modelName) {
                    return this._modelMap[modelName];
                };
                Proxy.prototype.hasModel = function (modelName) {
                    return (this._modelMap[modelName] == null) ? false : true;
                };
                Proxy.prototype.removeModel = function (modelName) {
                    var model = this._modelMap[modelName];
                    delete this._modelMap[modelName];
                    model.onRemove();
                    model = null;
                };
                Proxy.prototype.registerCommand = function (noteName, commandClassRef) {
                    this._commandMap[commandClassRef] = commandClassRef;
                    this.registerNotificationCommand(noteName, commandClassRef);
                };
                Proxy.prototype.hasCommand = function (commandClassRef) {
                    return (this._commandMap[commandClassRef] == null) ? false : true;
                };
                Proxy.prototype.removeCommand = function (commandClassRef) {
                    delete this._commandMap[commandClassRef];
                    this.removeNotificationCommand(commandClassRef);
                };
                Proxy.prototype.registerMediator = function (mediator, viewClazz) {
                    if (viewClazz === void 0) { viewClazz = null; }
                    this._mediatorMap[mediator.getName()] = mediator;
                    mediator.setProxy(this);
                    mediator.onRegister();
                    if (mediator.getViewComponent() != null)
                        mediator.setViewComponent(mediator.getViewComponent());
                    mediator.bindingView(viewClazz);
                    if (mediator.getInjector().length == 0)
                        mediator.onInitialize();
                    return mediator;
                };
                //getMediator(mediatorName:String):IMediator;
                Proxy.prototype.getMediator = function (mediatorName) {
                    return this._mediatorMap[mediatorName];
                };
                Proxy.prototype.hasMediator = function (mediatorName) {
                    return (this._mediatorMap[mediatorName] == null) ? false : true;
                };
                Proxy.prototype.removeMediator = function (mediatorName) {
                    var mediator = this.getMediator(mediatorName);
                    if (mediator == null)
                        return;
                    delete this._mediatorMap[mediatorName];
                    this.removeAllNotificationMediator(mediatorName);
                    mediator.onRemove();
                };
                Proxy.prototype.refisterPipeNotificationMediator = function (notiName, mediator) {
                    if (this._pipeViewMap[notiName] == null)
                        this._notoViewMap[notiName] = [];
                    this._pipeViewMap[notiName].push(mediator);
                };
                Proxy.prototype.removeOnePipeNotificationMediator = function (notiName, mediator) {
                    var handler;
                    var items = this._pipeViewMap[notiName];
                    if (items == null)
                        return;
                    //var l:number = items.length;
                    for (var key in items) {
                        handler = items[key];
                        if (handler == mediator) {
                            delete (items[key]);
                        }
                    }
                };
                Proxy.prototype.removeAllPipeNotificationMediator = function (nodename) {
                    var handler;
                    var items;
                    for (var key in this._pipeViewMap) {
                        items = this._pipeViewMap[key];
                        for (var k in items) {
                            handler = items[k];
                            if (handler != null && handler.getName() == nodename) {
                                delete (items[k]);
                            }
                        }
                        delete (this._pipeViewMap[key]);
                    }
                };
                Proxy.prototype.registerNotificationMediator = function (notiName, mediator) {
                    if (this._notoViewMap[notiName] == null)
                        this._notoViewMap[notiName] = [];
                    (this._notoViewMap[notiName]).push(mediator);
                };
                Proxy.prototype.removeOneNotificationMediator = function (notiName, mediator) {
                    var handler;
                    var items = this._notoViewMap[notiName];
                    if (items == null)
                        return;
                    var l = items.length;
                    if (l == 0)
                        delete (this._notoViewMap[notiName]);
                    else {
                        for (var i = 0; i < l; i++) {
                            handler = items[i];
                            if (handler == mediator) {
                                items.splice(i, 1);
                            }
                        }
                    }
                };
                Proxy.prototype.removeAllNotificationMediator = function (nodename) {
                    var handler;
                    var items;
                    for (var key in this._notoViewMap) {
                        items = this._notoViewMap[key];
                        for (var i = 0; i < items.length; i++) {
                            handler = items[i];
                            if (handler != null && handler.getName() == nodename) {
                                items.splice(i, 1);
                            }
                        }
                        delete (this._notoViewMap[key]);
                    }
                };
                Proxy.prototype.registerPipeNotificationCommand = function (nofiticationName, commandClassRef) {
                    if (this._pipeCommMap[nofiticationName] == null)
                        this._pipeCommMap[nofiticationName] = [];
                    (this._pipeCommMap[nofiticationName]).push(commandClassRef);
                };
                Proxy.prototype.removePipeNotificationCommand = function (commandClassRef) {
                    var comm;
                    var items;
                    for (var key in this._pipeCommMap) {
                        items = this._pipeCommMap[key];
                        var l = items.length;
                        if (l == 0)
                            delete (this._pipeCommMap[key]);
                        else {
                            for (var i = 0; i < items.length; i++) {
                                comm = items[i];
                                if (comm == commandClassRef)
                                    items.splice(i, 1);
                            }
                        }
                    }
                };
                Proxy.prototype.registerNotificationCommand = function (nofiticationName, commandClassRef) {
                    if (this._notoCommMap[nofiticationName] == null)
                        this._notoCommMap[nofiticationName] = [];
                    (this._notoCommMap[nofiticationName]).push(commandClassRef);
                };
                Proxy.prototype.removeNotificationCommand = function (commandClassRef) {
                    var comm;
                    var items;
                    for (var key in this._notoCommMap) {
                        items = this._notoCommMap[key];
                        var l = items.length;
                        if (l == 0) {
                            delete (this._notoCommMap[key]);
                        }
                        else {
                            for (var i = 0; i < items.length; i++) {
                                comm = items[i];
                                if (comm == commandClassRef)
                                    items.splice(i, 1);
                            }
                        }
                    }
                };
                Proxy.prototype.handlerPipelineNotification = function (notification) {
                    this.sendViewPipeModle(notification);
                    this.sendCommandPipe(notification);
                };
                Proxy.prototype.sentPipeNotification = function (notification) {
                    //sendViewPipeModle(notification);
                    //sendCommandPipe(notification);
                    FacadeManager.sentPipelineNotification(notification.getName(), notification.getBody());
                };
                Proxy.prototype.sendViewPipeModle = function (notification) {
                    var list = this._pipeViewMap[notification.getName()];
                    if (list == null)
                        return;
                    var l = list.length;
                    var handler;
                    for (var i = 0; i < list.length; i++) {
                        handler = list[i];
                        handler.pipeHandler(notification);
                    }
                };
                Proxy.prototype.sendCommandPipe = function (notification) {
                    var list = this._pipeCommMap[notification.getName()];
                    if (list == null)
                        return;
                    var l = list.length;
                    var clazz;
                    var command;
                    for (var i = 0; i < list.length; i++) {
                        clazz = list[i];
                        command = new clazz();
                        command.setProxy(this);
                        command["pipeHandler"](notification);
                    }
                };
                Proxy.prototype.sentNotification = function (notification) {
                    this.sendViewModle(notification);
                    this.sendCommand(notification);
                };
                Proxy.prototype.sendViewModle = function (notification) {
                    var list = this._notoViewMap[notification.getName()];
                    if (list == null)
                        return;
                    var l = list.length;
                    var handler;
                    for (var i = 0; i < list.length; i++) {
                        handler = list[i];
                        handler.handler(notification);
                    }
                };
                Proxy.prototype.sendCommand = function (notification) {
                    var list = this._notoCommMap[notification.getName()];
                    if (list == null)
                        return;
                    var l = list.length;
                    var clazz;
                    var command;
                    for (var i = 0; i < list.length; i++) {
                        clazz = list[i];
                        command = new clazz();
                        command.setProxy(this);
                        command["handler"](notification);
                        //(new clazz() as INode).setProxy(this);
                        //(new clazz() as IHandle).handler(notification);
                    }
                };
                Proxy.prototype.injectorAll = function () {
                    this.injectorMediator();
                    this.injectorModle();
                    this.inJectorSingle();
                };
                Proxy.prototype.inJectorSingle = function () {
                    var single;
                    for (var key in this._singleMap) {
                        single = this._singleMap[key];
                        if (single.isInitialize)
                            continue;
                        this.inJectorSingleHandler(single.single["injector"], single.single);
                    }
                };
                Proxy.prototype.inJectorSingleHandler = function (injectors, single) {
                    //trace("inJectorSingleHandler",injectors)
                    if (!injectors)
                        return;
                    var item;
                    var key;
                    var l = injectors.length;
                    for (var i = 0; i < l; i++) {
                        key = injectors[i];
                        item = this.getSingleton(key);
                        if (item) {
                            single[key] = item;
                        }
                        else {
                            console.log("要注入的" + key + "对象不存在 请检查注入名是否正确 或者确保注入对象已经注册成功！！！");
                        }
                        single["isInitialize"] = true;
                    }
                };
                Proxy.prototype.injectorMediator = function () {
                    var mediator;
                    for (var key in this._mediatorMap) {
                        mediator = this._mediatorMap[key];
                        if (mediator.getIsInitialize())
                            continue;
                        this.injector(mediator.getInjector(), mediator);
                        if (mediator.getInjector().length > 0) {
                            mediator.onInitialize();
                            mediator.setIsInitialize(true);
                        }
                    }
                };
                Proxy.prototype.injectorModle = function () {
                    var model;
                    for (var key in this._modelMap) {
                        model = this._modelMap[key];
                        if (model.getIsInitialize())
                            continue;
                        this.injector(model.getInjector(), model);
                        //if(model.getInjector().length > 0){
                        model.onInitialize();
                        model.setIsInitialize(true);
                        //}
                    }
                };
                Proxy.prototype.injector = function (injectors, node) {
                    var item;
                    var key;
                    var l = injectors.length;
                    for (var i = 0; i < l; i++) {
                        key = injectors[i];
                        item = this.getNode(key);
                        if (item) {
                            node[key] = item;
                        }
                        else {
                            console.log("injector" + node.getName() + "要注入的" + key + "对象不存在 请检查注入名是否正确 或者确保注入对象已经注册成功！！！");
                            //trace("injector: ",node.getName(),key,node[key],item);
                        }
                    }
                };
                Proxy.prototype.getNode = function (name) {
                    var node;
                    node = this.getMediator(name);
                    if (node)
                        return node;
                    node = this.getModel(name);
                    if (node)
                        return node;
                    node = this.getSingleton(name);
                    if (node)
                        return node;
                    return null;
                };
                Proxy.prototype.getMediatorMap = function () {
                    return this._mediatorMap;
                };
                return Proxy;
            }());
            core.Proxy = Proxy;
            var SingleInfo = /** @class */ (function () {
                function SingleInfo(name, single) {
                    this.isInitialize = false;
                    this.single = null;
                    this.single = single;
                }
                return SingleInfo;
            }());
        })(core = lightMVC.core || (lightMVC.core = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
(function (com) {
    var lightMVC;
    (function (lightMVC) {
        var parrerns;
        (function (parrerns) {
            var Proxy = com.lightMVC.core.Proxy;
            /**
             * mvc总管 入口   可以继承此类并设计为单列 方便调用
             * @author light-k
             *
             * TODO: 可以考虑增加 asSingleton 数据层直接发送时间 摆脱 model束缚
             *
             */
            var Facade = /** @class */ (function () {
                function Facade() {
                    this._proxy = new Proxy();
                }
                Facade.prototype.getModel = function (modelName) {
                    return this._proxy.getModel(modelName);
                };
                ;
                Facade.prototype.getSingleton = function (name) {
                    return this._proxy.getSingleton(name);
                };
                Facade.prototype.registerModel = function (mmodel) {
                    return this._proxy.registerModel(mmodel);
                };
                Facade.prototype.registerCommand = function (noteName, commandClassRef) {
                    this._proxy.registerCommand(noteName, commandClassRef);
                };
                Facade.prototype.asSingleton = function (name, clazz) {
                    this._proxy.asSingleton(name, clazz);
                };
                Facade.prototype.removeSingleton = function (name) {
                    return this.removeSingleton(name);
                };
                Facade.prototype.registerMediator = function (mediator, viewClazz) {
                    return this._proxy.registerMediator(mediator, viewClazz);
                };
                Facade.prototype.removeMediator = function (mediatorName) {
                    this._proxy.removeMediator(mediatorName);
                };
                Facade.prototype.removeModel = function (modelName) {
                    this._proxy.removeModel(modelName);
                };
                Facade.prototype.removeCommand = function (commandClassRef) {
                    this._proxy.removeCommand(commandClassRef);
                };
                Facade.prototype.getProxy = function () {
                    return this._proxy;
                };
                /**
                 * 配置mvc流程  注册command mediator model 都可以在 IConfigure 配置类里进行
                 * @param config	配置类
                 * @return 			返回入口类
                 *
                 */
                Facade.prototype.configure = function (config) {
                    config.setProxy(this._proxy);
                    this._proxy.injectorAll();
                    return this;
                };
                Facade.prototype.injectUI2Meditor = function (view, meditorName) {
                    var mediator = this._proxy.getMediator(meditorName);
                    if (mediator)
                        this._proxy.getMediator(meditorName).setViewComponent(view);
                    else
                        console.log(view["name"] + "没有注册meditor");
                    return this;
                };
                Facade.prototype.injectUI = function (view) {
                    var mediatorMap = this._proxy.getMediatorMap();
                    var mediator;
                    for (var key in mediatorMap) {
                        mediator = mediatorMap[key];
                        if (mediator.getViewClazz() && view instanceof mediator.getViewClazz()) {
                            mediator.setViewComponent(view);
                        }
                    }
                    return this;
                };
                /**
                 * 提供给子类使用 发送消息
                 * @param notiName	消息名称
                 * @param body		消息携带的参数
                 *
                 */
                Facade.prototype.sentNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    this._proxy.sentNotification(new parrerns.Notification(notiName, body));
                };
                /**
                 * 给所有的facade发送管道消息
                 * @param notiName
                 * @param body
                 *
                 */
                Facade.prototype.sentPipelineNotification = function (notiName, body) {
                    if (body === void 0) { body = null; }
                    this._proxy.sentPipeNotification(new parrerns.PipelineNotification(notiName, body));
                };
                Facade.prototype.handlerPipelineNotification = function (notification) {
                    this._proxy.handlerPipelineNotification(notification);
                };
                Facade.prototype.destroy = function () {
                    this._proxy.destroy();
                };
                return Facade;
            }());
            parrerns.Facade = Facade;
        })(parrerns = lightMVC.parrerns || (lightMVC.parrerns = {}));
    })(lightMVC = com.lightMVC || (com.lightMVC = {}));
})(com || (com = {}));
window.com = com;