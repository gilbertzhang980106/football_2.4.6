
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Helloworld');
require('./assets/Script/hall/events/HallNotification');
require('./assets/Script/hall/service/GameHttpService');
require('./assets/Script/hall/service/HttpService');
require('./assets/Script/hall/utils/HallAlert');
require('./assets/Script/lightUI/LightUI');
require('./assets/Script/lightUI/components/LButton');
require('./assets/Script/lightUI/components/LComponent');
require('./assets/Script/lightUI/components/LListAbs');
require('./assets/Script/lightUI/components/LTabBar');
require('./assets/Script/lightUI/components/LViewStack');
require('./assets/Script/lightUI/components/LWindow');
require('./assets/Script/lightUI/components/MountDataAbs');
require('./assets/Script/lightUI/components/alert/LAlert');
require('./assets/Script/lightUI/components/alert/LAlertBox');
require('./assets/Script/lightUI/components/llist/ItemRender');
require('./assets/Script/lightUI/components/llist/LList');
require('./assets/Script/lightUI/components/newlist/listItemRender');
require('./assets/Script/lightUI/components/newlist/newlist');
require('./assets/Script/lightUI/events/LEvent');
require('./assets/Script/lightUI/logging/LogLevel');
require('./assets/Script/lightUI/logging/Logger');
require('./assets/Script/lightUI/managers/LayerManager');
require('./assets/Script/lightUI/managers/MessageBlock');
require('./assets/Script/lightUI/managers/PopupManager');
require('./assets/Script/lightUI/managers/TaskAbs');
require('./assets/Script/lightUI/managers/TaskManager');
require('./assets/Script/lightUI/utils/CocosTool');
require('./assets/Script/lightUI/utils/Dictionary');
require('./assets/Script/lightUI/utils/Draw');
require('./assets/Script/lightUI/utils/Handler');
require('./assets/Script/lightUI/utils/MyMath');
require('./assets/config');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();