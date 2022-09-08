
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
require('./assets/Common/src/AudioConfig');
require('./assets/Common/src/AudioManage');
require('./assets/Common/src/BasePanel');
require('./assets/Common/src/Bullt');
require('./assets/Common/src/DznSocket');
require('./assets/Common/src/EventManager');
require('./assets/Common/src/Expand');
require('./assets/Common/src/GameSocket');
require('./assets/Common/src/ServerRoom');
require('./assets/Common/src/StandardButton');
require('./assets/Common/src/StandardCloseButton');
require('./assets/Common/src/tool');
require('./assets/Script/component/activityInfo');
require('./assets/Script/component/gameData');
require('./assets/Script/component/heartBeat');
require('./assets/Script/component/layer_reward_card');
require('./assets/Script/component/mainLobby');
require('./assets/Script/component/netCom');
require('./assets/Script/component/playerInfo');
require('./assets/Script/component/popup');
require('./assets/Script/component/reconnect');
require('./assets/Script/component/ruleComponent');
require('./assets/Script/component/serverTime');
require('./assets/Script/component/tishi');
require('./assets/Script/component/toast');
require('./assets/Script/component/topBar');
require('./assets/Script/component/utils');
require('./assets/Script/hall/events/HallNotification');
require('./assets/Script/hall/service/GameHttpService');
require('./assets/Script/hall/service/HallFacase');
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/BasePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a19aru6N1Ks47hFMpYSCtP', 'BasePanel');
// Common/src/BasePanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tool_1 = require("./tool");
var AudioManage_1 = require("./AudioManage");
var AudioConfig_1 = require("./AudioConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/** 弹窗基类
 *  方便拓展弹窗通用逻辑
 */
var BasePanel = /** @class */ (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.mask = null;
        _this.isPlaysound = true;
        return _this;
    }
    BasePanel.prototype.onLoad = function () {
        var _this = this;
        this.mask.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onClose();
        });
        if (this.btnClose) {
            this.btnClose.clickEvents.push(tool_1.newEventHandler(this, 'onClose'));
        }
        this.showAnimation();
        var bgNode = this.node.getChildByName("bg");
        if (bgNode) {
            bgNode.on(cc.Node.EventType.TOUCH_END, function () { });
        }
    };
    BasePanel.prototype.showAnimation = function () {
        cc.tween(this.node)
            .set({ scale: 0.01, opacity: 255 / 2 })
            .to(84 / 1000, { scale: 1.05, opacity: 255 })
            .to(116 / 1000, { scale: 1 })
            .start();
    };
    BasePanel.prototype.onClose = function () {
        if (this.isPlaysound)
            AudioManage_1.AudioManage.playEffect(AudioConfig_1.default.effect_button_close);
        cc.log('onClose', this.node.name);
        this.node.destroy();
    };
    __decorate([
        property(cc.Button)
    ], BasePanel.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], BasePanel.prototype, "mask", void 0);
    BasePanel = __decorate([
        ccclass
    ], BasePanel);
    return BasePanel;
}(cc.Component));
exports.default = BasePanel;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXEJhc2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBeUM7QUFDekMsNkNBQTJDO0FBQzNDLDZDQUF1QztBQUNqQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQzs7R0FFRztBQUVIO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBc0NDO1FBbkNHLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUE4QnZCLENBQUM7SUE1QkcsMEJBQU0sR0FBTjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBZSxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsY0FBTSxDQUFDLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUMsQ0FBQzthQUMvQixFQUFFLENBQUMsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEdBQUcsRUFBQyxDQUFDO2FBQ3JDLEVBQUUsQ0FBQyxHQUFHLEdBQUMsSUFBSSxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDO2FBQ3RCLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDSSxJQUFHLElBQUksQ0FBQyxXQUFXO1lBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUMscUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQU5KLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzQzdCO0lBQUQsZ0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3NDLEVBQUUsQ0FBQyxTQUFTLEdBc0NsRDtrQkF0Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXdFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi90b29sXCI7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VcIlxyXG5pbXBvcnQgYXVkaW9Db25maWcgZnJvbSBcIi4vQXVkaW9Db25maWdcIlxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKiDlvLnnqpfln7rnsbtcclxuICogIOaWueS+v+aLk+WxleW8ueeql+mAmueUqOmAu+i+kVxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuQ2xvc2U6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBpc1BsYXlzb3VuZCA9IHRydWU7XHJcbiAgICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCgpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmJ0bkNsb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2UuY2xpY2tFdmVudHMucHVzaChuZXdFdmVudEhhbmRsZXIodGhpcywnb25DbG9zZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgbGV0IGJnTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgaWYgKGJnTm9kZSkge1xyXG4gICAgICAgICAgICBiZ05vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCgpPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAuc2V0KHtzY2FsZTowLjAxLG9wYWNpdHk6MjU1LzJ9KVxyXG4gICAgICAgIC50byg4NC8xMDAwLHtzY2FsZToxLjA1LCBvcGFjaXR5OjI1NX0pXHJcbiAgICAgICAgLnRvKDExNi8xMDAwLHtzY2FsZToxfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNQbGF5c291bmQpQXVkaW9NYW5hZ2UucGxheUVmZmVjdChhdWRpb0NvbmZpZy5lZmZlY3RfYnV0dG9uX2Nsb3NlKTtcclxuICAgICAgICBjYy5sb2coJ29uQ2xvc2UnLHRoaXMubm9kZS5uYW1lKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/alert/LAlert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '444b2uKT5JK261tPH78CYU8', 'LAlert');
// Script/lightUI/components/alert/LAlert.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../../events/LEvent");
var LightUI_1 = require("../../LightUI");
var LAlertBox_1 = require("./LAlertBox");
var LAlert = /** @class */ (function () {
    function LAlert() {
    }
    LAlert.show = function (message, tile, windowSource, parent, closeHandler, data, delayRemove) {
        if (delayRemove === void 0) { delayRemove = 0; }
        //从对象池中获取
        var window = this.getWindow(windowSource);
        var pool = LAlert.pools[windowSource];
        window.data = data;
        // let winNode:LWindow = window.getLWindow();
        window.title = tile;
        window.msg = message;
        // winNode.updateView();
        window.width = LightUI_1.default.root.width;
        window.height = LightUI_1.default.root.height;
        LightUI_1.default.popupManager.addPopUp(window, LightUI_1.default.layerManager.popupLayer);
        var removeFun = function (ww) {
            LightUI_1.default.popupManager.removePopUp(ww);
        };
        if (delayRemove > 0) {
            setTimeout(removeFun.bind(this), delayRemove, window);
        }
        window.once(LEvent_1.default.CLOSE, function (e) {
            if (window.parent) {
                LightUI_1.default.popupManager.removePopUp(window);
            }
            closeHandler && closeHandler(e.data);
            //归还对象池
            pool.put(window);
        });
        return window;
    };
    LAlert.getWindow = function (url) {
        var pool = LAlert.pools[url];
        if (pool == null) {
            pool = new cc.NodePool();
            LAlert.pools[url] = pool;
        }
        if (pool.size() == 0) {
            return new LAlertBox_1.default(url);
        }
        else {
            return pool.get();
        }
    };
    LAlert.delayRemoveDie = {};
    LAlert.pools = {};
    return LAlert;
}());
exports.default = LAlert;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxhbGVydFxcTEFsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLHlDQUFvQztBQUVwQyx5Q0FBb0M7QUFDcEM7SUFBQTtJQXlEQSxDQUFDO0lBcERpQixXQUFJLEdBQWxCLFVBQW1CLE9BQWMsRUFBQyxJQUFXLEVBQ3hDLFlBQW1CLEVBQUMsTUFBYyxFQUFDLFlBQXFCLEVBQUMsSUFBSSxFQUFDLFdBQXNCO1FBQXRCLDRCQUFBLEVBQUEsZUFBc0I7UUFFckYsU0FBUztRQUNULElBQUksTUFBTSxHQUFhLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQWUsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQiw2Q0FBNkM7UUFDN0MsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDckIsd0JBQXdCO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLGlCQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsaUJBQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFHdEUsSUFBSSxTQUFTLEdBQVksVUFBQyxFQUFVO1lBQ2hDLGlCQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUM7UUFHRixJQUFHLFdBQVcsR0FBRyxDQUFDLEVBQUM7WUFDZixVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEQ7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFNLENBQUMsS0FBSyxFQUFDLFVBQUMsQ0FBUTtZQUM5QixJQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQ2hCO2dCQUNJLGlCQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QztZQUNELFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE9BQU87WUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVjLGdCQUFTLEdBQXhCLFVBQXlCLEdBQVU7UUFDL0IsSUFBSSxJQUFJLEdBQWUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFHLElBQUksSUFBSSxJQUFJLEVBQUM7WUFDWixJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDakIsT0FBUSxJQUFJLG1CQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBZSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQXZEYyxxQkFBYyxHQUFXLEVBQUUsQ0FBQztJQUU1QixZQUFLLEdBQVUsRUFBRSxDQUFDO0lBc0RyQyxhQUFDO0NBekRELEFBeURDLElBQUE7a0JBekRvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExFdmVudCBmcm9tIFwiLi4vLi4vZXZlbnRzL0xFdmVudFwiO1xyXG5pbXBvcnQgTGlnaHRVSSBmcm9tIFwiLi4vLi4vTGlnaHRVSVwiO1xyXG5pbXBvcnQgTFdpbmRvdyBmcm9tIFwiLi4vTFdpbmRvd1wiO1xyXG5pbXBvcnQgTEFsZXJ0Qm94IGZyb20gXCIuL0xBbGVydEJveFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMQWxlcnR7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBkZWxheVJlbW92ZURpZTogT2JqZWN0ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9vbHM6b2JqZWN0ID0ge307XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaG93KG1lc3NhZ2U6c3RyaW5nLHRpbGU6c3RyaW5nXHJcbiAgICAgICAgLHdpbmRvd1NvdXJjZTpzdHJpbmcscGFyZW50OmNjLk5vZGUsY2xvc2VIYW5kbGVyOkZ1bmN0aW9uLGRhdGEsZGVsYXlSZW1vdmU6bnVtYmVyID0gMCl7XHJcblxyXG4gICAgICAgIC8v5LuO5a+56LGh5rGg5Lit6I635Y+WXHJcbiAgICAgICAgbGV0IHdpbmRvdzpMQWxlcnRCb3ggPSB0aGlzLmdldFdpbmRvdyh3aW5kb3dTb3VyY2UpO1xyXG4gICAgICAgIGxldCBwb29sOmNjLk5vZGVQb29sID0gTEFsZXJ0LnBvb2xzW3dpbmRvd1NvdXJjZV07XHJcblxyXG4gICAgICAgIHdpbmRvdy5kYXRhID0gZGF0YTtcclxuICAgICAgICAvLyBsZXQgd2luTm9kZTpMV2luZG93ID0gd2luZG93LmdldExXaW5kb3coKTtcclxuICAgICAgICB3aW5kb3cudGl0bGUgPSB0aWxlO1xyXG4gICAgICAgIHdpbmRvdy5tc2cgPSBtZXNzYWdlO1xyXG4gICAgICAgIC8vIHdpbk5vZGUudXBkYXRlVmlldygpO1xyXG4gICAgICAgIHdpbmRvdy53aWR0aCA9IExpZ2h0VUkucm9vdC53aWR0aDtcclxuICAgICAgICB3aW5kb3cuaGVpZ2h0ID0gTGlnaHRVSS5yb290LmhlaWdodDtcclxuICAgICAgICBMaWdodFVJLnBvcHVwTWFuYWdlci5hZGRQb3BVcCh3aW5kb3csTGlnaHRVSS5sYXllck1hbmFnZXIucG9wdXBMYXllcik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcmVtb3ZlRnVuOkZ1bmN0aW9uID0gKHd3OmNjLk5vZGUpPT57XHJcbiAgICAgICAgICAgIExpZ2h0VUkucG9wdXBNYW5hZ2VyLnJlbW92ZVBvcFVwKHd3KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgaWYoZGVsYXlSZW1vdmUgPiAwKXtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZW1vdmVGdW4uYmluZCh0aGlzKSwgZGVsYXlSZW1vdmUsd2luZG93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmNlKExFdmVudC5DTE9TRSwoZTpMRXZlbnQpPT57XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5wYXJlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIExpZ2h0VUkucG9wdXBNYW5hZ2VyLnJlbW92ZVBvcFVwKHdpbmRvdyk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGNsb3NlSGFuZGxlciAmJiBjbG9zZUhhbmRsZXIoZS5kYXRhKTtcclxuICAgICAgICAgICAgLy/lvZLov5jlr7nosaHmsaBcclxuICAgICAgICAgICAgcG9vbC5wdXQod2luZG93KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRXaW5kb3codXJsOnN0cmluZyk6TEFsZXJ0Qm94e1xyXG4gICAgICAgIGxldCBwb29sOmNjLk5vZGVQb29sID0gTEFsZXJ0LnBvb2xzW3VybF07XHJcbiAgICAgICBpZihwb29sID09IG51bGwpe1xyXG4gICAgICAgICAgIHBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICAgICBMQWxlcnQucG9vbHNbdXJsXSA9IHBvb2w7XHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIGlmIChwb29sLnNpemUoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgbmV3IExBbGVydEJveCh1cmwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb29sLmdldCgpIGFzIExBbGVydEJveDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/hall/service/HallFacase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4aa689LR1HMKxnrtwP6bUZ', 'HallFacase');
// Script/hall/service/HallFacase.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HallNotification_1 = require("../events/HallNotification");
/**
 * mvc总入口 作为单例方便任意获取 但需谨慎在业务逻辑中获取此单例
 */
var HallFacade = /** @class */ (function (_super) {
    __extends(HallFacade, _super);
    function HallFacade() {
        var _this = _super.call(this) || this;
        if (HallFacade.instance != null)
            throw Error("请使用getInstance获取单例");
        HallFacade.instance = _this;
        return _this;
    }
    HallFacade.getInstance = function () {
        if (HallFacade.instance == null)
            HallFacade.instance = new HallFacade();
        return HallFacade.instance;
    };
    HallFacade.prototype.sentNotification = function (notiName, body) {
        _super.prototype.sentNotification.call(this, notiName, body);
    };
    HallFacade.prototype.startup = function (node, isReload) {
        if (isReload === void 0) { isReload = false; }
        this.sentNotification(HallNotification_1.default.START_UP, node);
    };
    return HallFacade;
}(com.lightMVC.parrerns.Facade));
exports.default = HallFacade;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxoYWxsXFxzZXJ2aWNlXFxIYWxsRmFjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUUxRDs7R0FFRztBQUNIO0lBQXdDLDhCQUE0QjtJQUdoRTtRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQUZHLElBQUksVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJO1lBQUUsTUFBTSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNuRSxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQzs7SUFDL0IsQ0FBQztJQUVhLHNCQUFXLEdBQXpCO1FBQ0ksSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLElBQUk7WUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDeEUsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFTSxxQ0FBZ0IsR0FBdkIsVUFBd0IsUUFBZ0IsRUFBRSxJQUFhO1FBQ25ELGlCQUFNLGdCQUFnQixZQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLElBQWEsRUFBRSxRQUFzQjtRQUF0Qix5QkFBQSxFQUFBLGdCQUFzQjtRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMEJBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDTCxpQkFBQztBQUFELENBckJBLEFBcUJDLENBckJ1QyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBcUJuRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIYWxsTm90aWZpY2F0aW9uIGZyb20gXCIuLi9ldmVudHMvSGFsbE5vdGlmaWNhdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIG12Y+aAu+WFpeWPoyDkvZzkuLrljZXkvovmlrnkvr/ku7vmhI/ojrflj5Yg5L2G6ZyA6LCo5oWO5Zyo5Lia5Yqh6YC76L6R5Lit6I635Y+W5q2k5Y2V5L6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsRmFjYWRlIGV4dGVuZHMgY29tLmxpZ2h0TVZDLnBhcnJlcm5zLkZhY2FkZXtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2U6SGFsbEZhY2FkZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgaWYgKEhhbGxGYWNhZGUuaW5zdGFuY2UgIT0gbnVsbCkgdGhyb3cgRXJyb3IoXCLor7fkvb/nlKhnZXRJbnN0YW5jZeiOt+WPluWNleS+i1wiKTtcclxuICAgICAgICBIYWxsRmFjYWRlLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEhhbGxGYWNhZGUge1xyXG4gICAgICAgIGlmIChIYWxsRmFjYWRlLmluc3RhbmNlID09IG51bGwpIEhhbGxGYWNhZGUuaW5zdGFuY2UgPSBuZXcgSGFsbEZhY2FkZSgpO1xyXG4gICAgICAgIHJldHVybiBIYWxsRmFjYWRlLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZW50Tm90aWZpY2F0aW9uKG5vdGlOYW1lOiBzdHJpbmcsIGJvZHk/OiBPYmplY3Qpe1xyXG4gICAgICAgIHN1cGVyLnNlbnROb3RpZmljYXRpb24obm90aU5hbWUsYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0dXAobm9kZTogY2MuTm9kZSwgaXNSZWxvYWQ6Ym9vbGVhbj1mYWxzZSkge1xyXG4gICAgICAgIHRoaXMuc2VudE5vdGlmaWNhdGlvbihIYWxsTm90aWZpY2F0aW9uLlNUQVJUX1VQLCBub2RlKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/mainLobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b6begdh2tPEZJ1lrU91fxn', 'mainLobby');
// Script/component/mainLobby.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameData_1 = require("./gameData");
var DznSocket_1 = require("../../Common/src/DznSocket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var mainLobby = /** @class */ (function (_super) {
    __extends(mainLobby, _super);
    function mainLobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topBar = null;
        _this.playerInfo = null;
        _this.show_content = null;
        _this.home_layer = null;
        _this.layer_reward_card = null;
        _this.layer_card_history = null;
        _this.layer_card_exchange = null;
        _this.cards_record_layer = null;
        _this.rule_info = null;
        return _this;
    }
    mainLobby_1 = mainLobby;
    mainLobby.prototype.onLoad = function () {
        mainLobby_1.instance = this;
        DznSocket_1.DznSocket.on(gameData_1.gameData.messageFlag.CHANGE_SHOW_LAYER, this.layerManager, this); //弹出搓牌界面协议
    };
    mainLobby.prototype.start = function () {
        /**请求主页信息
         * 1-玩家信息
         * 2-基础配置信息
         */
        gameData_1.gameData.httpServer.requestMainHomeInfo(function (_a) {
            var code = _a.code, msg = _a.msg, data = _a.data;
            if (code === 0) { //获取成功
                //存储个人信息及其他数据
                gameData_1.gameData.userInfo.setUsereInfo(data.user);
                gameData_1.gameData.userInfo.setDrawCard(data.draw_card);
                gameData_1.gameData.userInfo.setConfigData(data.config);
                //初始化挂在组件
                mainLobby_1.instance.initOtherNodeData(data);
            }
            else {
                console.error("错误信息：" + msg);
            }
        });
        //初始化顶部title模块
        //初始化显示layer模块
    };
    //初始化其他组件信息
    mainLobby.prototype.initOtherNodeData = function (data) {
        //初始化个人信息模块
        mainLobby_1.instance.playerInfo.getComponent('playerInfo').init(data.user);
        //初始化中间显示区域内容
        mainLobby_1.instance.show_content.active = true;
        //初始化活动规则模块
        mainLobby_1.instance.rule_info.getComponent('ruleComponent').init(data.config);
    };
    /**
     * 显示组件显示管理
     * 界面初始化显示主界面
     * 其他界面由点击后加载预制体界面展示
     * 显示的界面数据刷新在各自组件代码中实现
     */
    mainLobby.prototype.layerManager = function (showType) {
        console.log("显示当前界面为：" + showType);
        //先隐藏主界面 再加载需要显示的界面预制体
        mainLobby_1.instance.home_layer.active = false;
        if (showType.indexOf(gameData_1.gameData.SHOW_LAYER_TYPE.MAIN_HOME) > -1) {
            mainLobby_1.instance.home_layer.active = true; //显示主页
            mainLobby_1.instance.show_content.active = false; //隐藏其他面板
            mainLobby_1.instance.show_content.removeAllChildren(); //移除其他面板，下次显示重新加载以确保数据重新加载
        }
        else {
            mainLobby_1.instance.show_content.active = true; //显示父级面板
            switch (showType) {
                case gameData_1.gameData.SHOW_LAYER_TYPE.CARD_BAG:
                    cc.instantiate(this.layer_card_history).parent = mainLobby_1.instance.show_content;
                    //重新设置show_content的高度
                    mainLobby_1.instance.show_content.height = cc.instantiate(this.layer_card_history).height;
                    break;
                case gameData_1.gameData.SHOW_LAYER_TYPE.CARD_EXCHANGE:
                    mainLobby_1.instance.show_content.active = true; //显示父级面板
                    cc.instantiate(this.layer_card_exchange).parent = mainLobby_1.instance.show_content;
                    //重新设置show_content的高度
                    mainLobby_1.instance.show_content.height = cc.instantiate(this.layer_card_exchange).height;
                    break;
                case gameData_1.gameData.SHOW_LAYER_TYPE.CARD_RECORD:
                    mainLobby_1.instance.show_content.active = true; //显示父级面板
                    cc.instantiate(this.cards_record_layer).parent = mainLobby_1.instance.show_content;
                    //重新设置show_content的高度
                    mainLobby_1.instance.show_content.height = cc.instantiate(this.cards_record_layer).height;
                    break;
            }
        }
    };
    /** */
    mainLobby.prototype.update = function (dt) {
    };
    var mainLobby_1;
    mainLobby.instance = null;
    mainLobby.card_bag_layer = null;
    mainLobby.card_exchange_layer = null;
    mainLobby.card_record_layer = null;
    __decorate([
        property(cc.Node)
    ], mainLobby.prototype, "topBar", void 0);
    __decorate([
        property(cc.Node)
    ], mainLobby.prototype, "playerInfo", void 0);
    __decorate([
        property(cc.Node)
    ], mainLobby.prototype, "show_content", void 0);
    __decorate([
        property(cc.Node)
    ], mainLobby.prototype, "home_layer", void 0);
    __decorate([
        property(cc.Node)
    ], mainLobby.prototype, "layer_reward_card", void 0);
    __decorate([
        property(cc.Prefab)
    ], mainLobby.prototype, "layer_card_history", void 0);
    __decorate([
        property(cc.Prefab)
    ], mainLobby.prototype, "layer_card_exchange", void 0);
    __decorate([
        property(cc.Prefab)
    ], mainLobby.prototype, "cards_record_layer", void 0);
    __decorate([
        property(cc.Node)
    ], mainLobby.prototype, "rule_info", void 0);
    mainLobby = mainLobby_1 = __decorate([
        ccclass
    ], mainLobby);
    return mainLobby;
}(cc.Component));
exports.default = mainLobby;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXG1haW5Mb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBc0M7QUFDdEMsd0RBQXNEO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBd0hDO1FBdEhHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBR2xDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUdyQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBR3JDLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBOEY5QixDQUFDO2tCQXhIb0IsU0FBUztJQWtDMUIsMEJBQU0sR0FBTjtRQUNJLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRTFCLHFCQUFTLENBQUMsRUFBRSxDQUFDLG1CQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQSxVQUFVO0lBQzVGLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0k7OztXQUdHO1FBQ0gsbUJBQVEsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsVUFBQyxFQUFtQjtnQkFBakIsSUFBSSxVQUFBLEVBQUUsR0FBRyxTQUFBLEVBQUUsSUFBSSxVQUFBO1lBQ3RELElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFDLE1BQU07Z0JBQ25CLGFBQWE7Z0JBQ2IsbUJBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsbUJBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUMsbUJBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFN0MsU0FBUztnQkFDVCxXQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxjQUFjO1FBRWQsY0FBYztJQUNsQixDQUFDO0lBRUQsV0FBVztJQUNYLHFDQUFpQixHQUFqQixVQUFrQixJQUF1QjtRQUNyQyxXQUFXO1FBQ1gsV0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekUsYUFBYTtRQUNiLFdBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFOUMsV0FBVztRQUNYLFdBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGdDQUFZLEdBQVosVUFBYSxRQUFnQjtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNuQyxzQkFBc0I7UUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QyxJQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsbUJBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDekQsV0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBLE1BQU07WUFDbEQsV0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFBLFFBQVE7WUFDdkQsV0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBLDBCQUEwQjtTQUNqRjthQUFJO1lBQ0QsV0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBLFFBQVE7WUFDdEQsUUFBUSxRQUFRLEVBQUU7Z0JBQ2QsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxRQUFRO29CQUNsQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxXQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztvQkFDakYscUJBQXFCO29CQUNyQixXQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ3hGLE1BQU07Z0JBQ1YsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxhQUFhO29CQUN2QyxXQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUEsUUFBUTtvQkFDdEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLEdBQUcsV0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7b0JBQ2xGLHFCQUFxQjtvQkFDckIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDO29CQUN6RixNQUFNO2dCQUNWLEtBQUssbUJBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVztvQkFDckMsV0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBLFFBQVE7b0JBQ3RELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxHQUFHLFdBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO29CQUNqRixxQkFBcUI7b0JBQ3JCLFdBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDeEYsTUFBTTthQUNiO1NBQ0o7SUFDTCxDQUFDO0lBRUQsTUFBTTtJQUVOLDBCQUFNLEdBQU4sVUFBTyxFQUFVO0lBRWpCLENBQUM7O0lBekZNLGtCQUFRLEdBQWMsSUFBSSxDQUFDO0lBQzNCLHdCQUFjLEdBQVksSUFBSSxDQUFDO0lBQy9CLDZCQUFtQixHQUFZLElBQUksQ0FBQztJQUNwQywyQkFBaUIsR0FBWSxJQUFJLENBQUM7SUE5QnpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDaUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDa0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDaUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQTFCVCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBd0g3QjtJQUFELGdCQUFDO0NBeEhELEFBd0hDLENBeEhzQyxFQUFFLENBQUMsU0FBUyxHQXdIbEQ7a0JBeEhvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiXHJcbmltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4vZ2FtZURhdGFcIjtcclxuaW1wb3J0IHsgRHpuU29ja2V0IH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9zcmMvRHpuU29ja2V0XCJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYWluTG9iYnkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b3BCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVySW5mbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzaG93X2NvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaG9tZV9sYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsYXllcl9yZXdhcmRfY2FyZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxheWVyX2NhcmRfaGlzdG9yeTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbGF5ZXJfY2FyZF9leGNoYW5nZTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2FyZHNfcmVjb3JkX2xheWVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcnVsZV9pbmZvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlOiBtYWluTG9iYnkgPSBudWxsO1xyXG4gICAgc3RhdGljIGNhcmRfYmFnX2xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHN0YXRpYyBjYXJkX2V4Y2hhbmdlX2xheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHN0YXRpYyBjYXJkX3JlY29yZF9sYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIG1haW5Mb2JieS5pbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIER6blNvY2tldC5vbihnYW1lRGF0YS5tZXNzYWdlRmxhZy5DSEFOR0VfU0hPV19MQVlFUiwgdGhpcy5sYXllck1hbmFnZXIsIHRoaXMpOy8v5by55Ye65pCT54mM55WM6Z2i5Y2P6K6uXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLyoq6K+35rGC5Li76aG15L+h5oGvXHJcbiAgICAgICAgICogMS3njqnlrrbkv6Hmga9cclxuICAgICAgICAgKiAyLeWfuuehgOmFjee9ruS/oeaBr1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdhbWVEYXRhLmh0dHBTZXJ2ZXIucmVxdWVzdE1haW5Ib21lSW5mbygoeyBjb2RlLCBtc2csIGRhdGEgfSkgPT4gey8vY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZywgXHJcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAwKSB7Ly/ojrflj5bmiJDlip9cclxuICAgICAgICAgICAgICAgIC8v5a2Y5YKo5Liq5Lq65L+h5oGv5Y+K5YW25LuW5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBnYW1lRGF0YS51c2VySW5mby5zZXRVc2VyZUluZm8oZGF0YS51c2VyKTtcclxuICAgICAgICAgICAgICAgIGdhbWVEYXRhLnVzZXJJbmZvLnNldERyYXdDYXJkKGRhdGEuZHJhd19jYXJkKTtcclxuICAgICAgICAgICAgICAgIGdhbWVEYXRhLnVzZXJJbmZvLnNldENvbmZpZ0RhdGEoZGF0YS5jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyW5oyC5Zyo57uE5Lu2XHJcbiAgICAgICAgICAgICAgICBtYWluTG9iYnkuaW5zdGFuY2UuaW5pdE90aGVyTm9kZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6ZSZ6K+v5L+h5oGv77yaXCIgKyBtc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyW6aG26YOodGl0bGXmqKHlnZdcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJbmmL7npLpsYXllcuaooeWdl1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyW5YW25LuW57uE5Lu25L+h5oGvXHJcbiAgICBpbml0T3RoZXJOb2RlRGF0YShkYXRhOiBhcGlEYXRhLmhvbWVfaW5mbykge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5Liq5Lq65L+h5oGv5qih5Z2XXHJcbiAgICAgICAgbWFpbkxvYmJ5Lmluc3RhbmNlLnBsYXllckluZm8uZ2V0Q29tcG9uZW50KCdwbGF5ZXJJbmZvJykuaW5pdChkYXRhLnVzZXIpO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluS4remXtOaYvuekuuWMuuWfn+WGheWuuVxyXG4gICAgICAgIG1haW5Mb2JieS5pbnN0YW5jZS5zaG93X2NvbnRlbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJbmtLvliqjop4TliJnmqKHlnZdcclxuICAgICAgICBtYWluTG9iYnkuaW5zdGFuY2UucnVsZV9pbmZvLmdldENvbXBvbmVudCgncnVsZUNvbXBvbmVudCcpLmluaXQoZGF0YS5jb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S657uE5Lu25pi+56S6566h55CGXHJcbiAgICAgKiDnlYzpnaLliJ3lp4vljJbmmL7npLrkuLvnlYzpnaJcclxuICAgICAqIOWFtuS7lueVjOmdoueUseeCueWHu+WQjuWKoOi9vemihOWItuS9k+eVjOmdouWxleekulxyXG4gICAgICog5pi+56S655qE55WM6Z2i5pWw5o2u5Yi35paw5Zyo5ZCE6Ieq57uE5Lu25Luj56CB5Lit5a6e546wXHJcbiAgICAgKi9cclxuICAgIGxheWVyTWFuYWdlcihzaG93VHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmmL7npLrlvZPliY3nlYzpnaLkuLrvvJpcIiArIHNob3dUeXBlKTtcclxuICAgICAgICAvL+WFiOmakOiXj+S4u+eVjOmdoiDlho3liqDovb3pnIDopoHmmL7npLrnmoTnlYzpnaLpooTliLbkvZNcclxuICAgICAgICBtYWluTG9iYnkuaW5zdGFuY2UuaG9tZV9sYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZihzaG93VHlwZS5pbmRleE9mKGdhbWVEYXRhLlNIT1dfTEFZRVJfVFlQRS5NQUlOX0hPTUUpID4gLTEpe1xyXG4gICAgICAgICAgICBtYWluTG9iYnkuaW5zdGFuY2UuaG9tZV9sYXllci5hY3RpdmUgPSB0cnVlOy8v5pi+56S65Li76aG1XHJcbiAgICAgICAgICAgIG1haW5Mb2JieS5pbnN0YW5jZS5zaG93X2NvbnRlbnQuYWN0aXZlID0gZmFsc2U7Ly/pmpDol4/lhbbku5bpnaLmnb9cclxuICAgICAgICAgICAgbWFpbkxvYmJ5Lmluc3RhbmNlLnNob3dfY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpOy8v56e76Zmk5YW25LuW6Z2i5p2/77yM5LiL5qyh5pi+56S66YeN5paw5Yqg6L295Lul56Gu5L+d5pWw5o2u6YeN5paw5Yqg6L29XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1haW5Mb2JieS5pbnN0YW5jZS5zaG93X2NvbnRlbnQuYWN0aXZlID0gdHJ1ZTsvL+aYvuekuueItue6p+mdouadv1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNob3dUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGdhbWVEYXRhLlNIT1dfTEFZRVJfVFlQRS5DQVJEX0JBRzpcclxuICAgICAgICAgICAgICAgICAgICBjYy5pbnN0YW50aWF0ZSh0aGlzLmxheWVyX2NhcmRfaGlzdG9yeSkucGFyZW50ID0gbWFpbkxvYmJ5Lmluc3RhbmNlLnNob3dfY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAvL+mHjeaWsOiuvue9rnNob3dfY29udGVudOeahOmrmOW6plxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5Mb2JieS5pbnN0YW5jZS5zaG93X2NvbnRlbnQuaGVpZ2h0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sYXllcl9jYXJkX2hpc3RvcnkpLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZ2FtZURhdGEuU0hPV19MQVlFUl9UWVBFLkNBUkRfRVhDSEFOR0U6XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkxvYmJ5Lmluc3RhbmNlLnNob3dfY29udGVudC5hY3RpdmUgPSB0cnVlOy8v5pi+56S654i257qn6Z2i5p2/XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuaW5zdGFudGlhdGUodGhpcy5sYXllcl9jYXJkX2V4Y2hhbmdlKS5wYXJlbnQgPSBtYWluTG9iYnkuaW5zdGFuY2Uuc2hvd19jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6YeN5paw6K6+572uc2hvd19jb250ZW5055qE6auY5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkxvYmJ5Lmluc3RhbmNlLnNob3dfY29udGVudC5oZWlnaHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxheWVyX2NhcmRfZXhjaGFuZ2UpLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZ2FtZURhdGEuU0hPV19MQVlFUl9UWVBFLkNBUkRfUkVDT1JEOlxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5Mb2JieS5pbnN0YW5jZS5zaG93X2NvbnRlbnQuYWN0aXZlID0gdHJ1ZTsvL+aYvuekuueItue6p+mdouadv1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZHNfcmVjb3JkX2xheWVyKS5wYXJlbnQgPSBtYWluTG9iYnkuaW5zdGFuY2Uuc2hvd19jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6YeN5paw6K6+572uc2hvd19jb250ZW5055qE6auY5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkxvYmJ5Lmluc3RhbmNlLnNob3dfY29udGVudC5oZWlnaHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRzX3JlY29yZF9sYXllcikuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiAqL1xyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/LButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aca6fxOQjlGnLTatyJK/7zu', 'LButton');
// Script/lightUI/components/LButton.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../events/LEvent");
var LComponent_1 = require("./LComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LButton = /** @class */ (function (_super) {
    __extends(LButton, _super);
    function LButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle = false;
        _this.normal = null;
        _this.pressed = null;
        _this.hover = null;
        _this.disabled = null;
        _this.selectedSprite = null;
        _this.isSelected = false;
        _this.labelTex = null;
        _this.label = null;
        /**
        * @private
        */
        _this._stateChanged = false;
        /**
         * @private
         * 按钮的状态值。
         */
        _this._state = 0;
        _this._sources = [];
        return _this;
    }
    LButton_1 = LButton;
    LButton.prototype.onLoad = function () {
        this._sources = [this.normal, this.hover, this.pressed, this.disabled, this.selectedSprite];
        this._skin = this.node.getChildByName("Background").getComponent(cc.Sprite);
        this._skin.spriteFrame = this.normal;
        this.selected = this.isSelected;
        // console.log("LButton onLoad");
        // this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouse,this,false);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onMouse, this);
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouse, this, false);
        // this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouse, this, false);
        // cc.Node.EventType.mou
        // this.node.on(cc.Node.EventType.TOUCH_START,this.onMouse,this,false);
    };
    LButton.prototype.onMouse = function (e) {
        // console.log("onMouseonMouse", e.type, this.toggle, this._selected);
        // this._skin.spriteFrame = this.normal;
        if (this.toggle === false && this._selected)
            return;
        if (e.type === cc.Node.EventType.TOUCH_START) {
            this.toggle && (this.selected = !this._selected);
            this._clickHandler && this._clickHandler();
            return;
        }
        !this._selected && (this.state = LButton_1.stateMap[e.type]);
    };
    Object.defineProperty(LButton.prototype, "selected", {
        /**
            * 表示按钮的选中状态。
            * <p>如果值为true，表示该对象处于选中状态。否则该对象处于未选中状态。</p>
            * @implements
            */
        get: function () {
            return this._selected;
        },
        set: function (value) {
            // console.log("set selected",value);
            if (this._selected != value) {
                this._selected = value;
                this.state = this._selected ? 4 : 0;
                this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.CHANGED));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LButton.prototype, "state", {
        /**
        * 对象的状态值。
        * @see #stateMap
        */
        get: function () {
            return this._state;
        },
        set: function (value) {
            if (this._state != value) {
                this._state = value;
                this._setStateChanged();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @private
     * 改变对象的状态。
     */
    LButton.prototype.changeState = function () {
        // console.log("changeState");
        this._stateChanged = false;
        var index = this._state;
        if (index > -1)
            this._skin.spriteFrame = this._sources[index];
        // console.log("changeState", index, this._sources);
        // this._sources && (this._bitmap.source = this._sources[index]);
        // if (this.label) {
        //     this._text.color = this._labelColors[index];
        //     if (this._strokeColors) this._text.strokeColor = this._strokeColors[index];
        // }
    };
    LButton.prototype.setLabel = function (value) {
        this.labelTex.string = value;
        this.label = value;
    };
    LButton.prototype.getLabel = function () {
        return this.labelTex.string;
    };
    /**@private */
    LButton.prototype._setStateChanged = function () {
        if (!this._stateChanged) {
            this._stateChanged = true;
            // this.callLater(this.changeState);
            this.scheduleOnce(this.changeState, 0);
        }
    };
    Object.defineProperty(LButton.prototype, "clickHandler", {
        get: function () {
            return this.clickHandler;
        },
        set: function (value) {
            this._clickHandler = value;
        },
        enumerable: false,
        configurable: true
    });
    var LButton_1;
    /**
     * 按钮状态集。
     */
    LButton.stateMap = { "mouseup": 0, "mousemove": 1, "mousedown": 2, "mouseout": 0, "mouseleave": 0 };
    __decorate([
        property({ type: cc.Boolean, tooltip: "是否是切换模式" })
    ], LButton.prototype, "toggle", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, tooltip: "平常态" })
    ], LButton.prototype, "normal", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, tooltip: "按下" })
    ], LButton.prototype, "pressed", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, tooltip: "悬浮" })
    ], LButton.prototype, "hover", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, tooltip: "禁用" })
    ], LButton.prototype, "disabled", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, tooltip: "选择" })
    ], LButton.prototype, "selectedSprite", void 0);
    __decorate([
        property({ type: cc.Boolean, tooltip: "选择" })
    ], LButton.prototype, "isSelected", void 0);
    __decorate([
        property({ type: cc.Label, tooltip: "选择" })
    ], LButton.prototype, "labelTex", void 0);
    __decorate([
        property({ type: cc.String, tooltip: "选择" })
    ], LButton.prototype, "label", void 0);
    LButton = LButton_1 = __decorate([
        ccclass
    ], LButton);
    return LButton;
}(LComponent_1.default));
exports.default = LButton;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxMQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QywyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVU7SUFBL0M7UUFBQSxxRUFnS0M7UUE5SkcsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUd4QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUcvQixXQUFLLEdBQW1CLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFHdEMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQVcsSUFBSSxDQUFDO1FBTXJCOztVQUVFO1FBQ1EsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDekM7OztXQUdHO1FBQ08sWUFBTSxHQUFXLENBQUMsQ0FBQztRQU9uQixjQUFRLEdBQVUsRUFBRSxDQUFDOztJQWlIbkMsQ0FBQztnQkFoS29CLE9BQU87SUFpRHhCLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVFLElB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LENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs2Q0FDbEI7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7bURBQ1o7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7K0NBQ2xCO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzZDQUNsQjtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzswQ0FDeEI7SUExQkosT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWdLM0I7SUFBRCxjQUFDO0NBaEtELEFBZ0tDLENBaEtvQyxvQkFBVSxHQWdLOUM7a0JBaEtvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExFdmVudCBmcm9tIFwiLi4vZXZlbnRzL0xFdmVudFwiO1xyXG5pbXBvcnQgTENvbXBvbmVudCBmcm9tIFwiLi9MQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTEJ1dHRvbiBleHRlbmRzIExDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQm9vbGVhbiwgdG9vbHRpcDogXCLmmK/lkKbmmK/liIfmjaLmqKHlvI9cIiB9KVxyXG4gICAgdG9nZ2xlOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHRvb2x0aXA6IFwi5bmz5bi45oCBXCIgfSlcclxuICAgIG5vcm1hbDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB0b29sdGlwOiBcIuaMieS4i1wiIH0pXHJcbiAgICBwcmVzc2VkOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHRvb2x0aXA6IFwi5oKs5rWuXCIgfSlcclxuICAgIGhvdmVyOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHRvb2x0aXA6IFwi56aB55SoXCIgfSlcclxuICAgIGRpc2FibGVkOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHRvb2x0aXA6IFwi6YCJ5oupXCIgfSlcclxuICAgIHNlbGVjdGVkU3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQm9vbGVhbiwgdG9vbHRpcDogXCLpgInmi6lcIiB9KVxyXG4gICAgaXNTZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkxhYmVsLCB0b29sdGlwOiBcIumAieaLqVwiIH0pXHJcbiAgICBsYWJlbFRleDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlN0cmluZywgdG9vbHRpcDogXCLpgInmi6lcIiB9KVxyXG4gICAgbGFiZWw6IFN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2tpbjogY2MuU3ByaXRlO1xyXG5cclxuICAgIHByb3RlY3RlZCBfY2xpY2tIYW5kbGVyOiBGdW5jdGlvbjtcclxuXHJcbiAgICAvKipcclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICog5oyJ6ZKu55qE54q25oCB5YC844CCXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfc3RhdGU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemSrueKtuaAgembhuOAglxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIHN0YXRlTWFwOiBhbnkgPSB7IFwibW91c2V1cFwiOiAwLCBcIm1vdXNlbW92ZVwiOiAxLCBcIm1vdXNlZG93blwiOiAyLCBcIm1vdXNlb3V0XCI6IDAsIFwibW91c2VsZWF2ZVwiOiAwIH07XHJcbiAgICBwcm90ZWN0ZWQgX3NvdXJjZXM6IGFueVtdID0gW107XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3NvdXJjZXMgPSBbdGhpcy5ub3JtYWwsIHRoaXMuaG92ZXIsIHRoaXMucHJlc3NlZCwgdGhpcy5kaXNhYmxlZCwgdGhpcy5zZWxlY3RlZFNwcml0ZV07XHJcbiAgICAgICAgdGhpcy5fc2tpbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5fc2tpbi5zcHJpdGVGcmFtZSA9IHRoaXMubm9ybWFsO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkIGFzIGJvb2xlYW47XHJcblxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxCdXR0b24gb25Mb2FkXCIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9NT1ZFLHRoaXMub25Nb3VzZSx0aGlzLGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Nb3VzZSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZSwgdGhpcywgZmFsc2UpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbk1vdXNlLCB0aGlzLCBmYWxzZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gY2MuTm9kZS5FdmVudFR5cGUubW91XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25Nb3VzZSx0aGlzLGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Nb3VzZShlOiBjYy5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25Nb3VzZW9uTW91c2VcIiwgZS50eXBlLCB0aGlzLnRvZ2dsZSwgdGhpcy5fc2VsZWN0ZWQpO1xyXG4gICAgICAgIC8vIHRoaXMuX3NraW4uc3ByaXRlRnJhbWUgPSB0aGlzLm5vcm1hbDtcclxuICAgICAgICBpZiAodGhpcy50b2dnbGUgPT09IGZhbHNlICYmIHRoaXMuX3NlbGVjdGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGUgJiYgKHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5fc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlja0hhbmRsZXIgJiYgdGhpcy5fY2xpY2tIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgIXRoaXMuX3NlbGVjdGVkICYmICh0aGlzLnN0YXRlID0gTEJ1dHRvbi5zdGF0ZU1hcFtlLnR5cGVdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgICAqIOihqOekuuaMiemSrueahOmAieS4reeKtuaAgeOAglxyXG4gICAgICAgICogPHA+5aaC5p6c5YC85Li6dHJ1Ze+8jOihqOekuuivpeWvueixoeWkhOS6jumAieS4reeKtuaAgeOAguWQpuWImeivpeWvueixoeWkhOS6juacqumAieS4reeKtuaAgeOAgjwvcD5cclxuICAgICAgICAqIEBpbXBsZW1lbnRzXHJcbiAgICAgICAgKi9cclxuICAgIGdldCBzZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZXQgc2VsZWN0ZWRcIix2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkICE9IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9zZWxlY3RlZCA/IDQgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgTEV2ZW50KExFdmVudC5DSEFOR0VEKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDlr7nosaHnmoTnirbmgIHlgLzjgIJcclxuICAgICogQHNlZSAjc3RhdGVNYXBcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHN0YXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXQgc3RhdGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZUNoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIOaUueWPmOWvueixoeeahOeKtuaAgeOAglxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hhbmdlU3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2VTdGF0ZVwiKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZUNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaW5kZXg6IG51bWJlciA9IHRoaXMuX3N0YXRlO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKVxyXG4gICAgICAgICAgICB0aGlzLl9za2luLnNwcml0ZUZyYW1lID0gdGhpcy5fc291cmNlc1tpbmRleF07XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlU3RhdGVcIiwgaW5kZXgsIHRoaXMuX3NvdXJjZXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLl9zb3VyY2VzICYmICh0aGlzLl9iaXRtYXAuc291cmNlID0gdGhpcy5fc291cmNlc1tpbmRleF0pO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmxhYmVsKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX3RleHQuY29sb3IgPSB0aGlzLl9sYWJlbENvbG9yc1tpbmRleF07XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLl9zdHJva2VDb2xvcnMpIHRoaXMuX3RleHQuc3Ryb2tlQ29sb3IgPSB0aGlzLl9zdHJva2VDb2xvcnNbaW5kZXhdO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TGFiZWwodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGFiZWxUZXguc3RyaW5nID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsVGV4LnN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipAcHJpdmF0ZSAqL1xyXG4gICAgcHJvdGVjdGVkIF9zZXRTdGF0ZUNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdGF0ZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGVDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jYWxsTGF0ZXIodGhpcy5jaGFuZ2VTdGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hhbmdlU3RhdGUsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNsaWNrSGFuZGxlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlja0hhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjbGlja0hhbmRsZXIodmFsdWU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fY2xpY2tIYW5kbGVyID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/llist/ItemRender.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca0f9k0oBVDbpQC+OMNTF3m', 'ItemRender');
// Script/lightUI/components/llist/ItemRender.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemRender = /** @class */ (function (_super) {
    __extends(ItemRender, _super);
    function ItemRender() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**数据 */
        _this.data = null;
        /**索引 0表示第一项*/
        _this.itemIndex = 0;
        return _this;
    }
    /**数据改变时调用 */
    ItemRender.prototype.dataChanged = function () {
        // console.log("ItemRender",this.data);
        if (!this.label)
            return;
        if (this.data instanceof Object)
            this.label.string = this.data.label;
        else
            this.label.string = this.data;
    };
    __decorate([
        property({ type: cc.Label, tooltip: "显示文本" })
    ], ItemRender.prototype, "label", void 0);
    ItemRender = __decorate([
        ccclass
    ], ItemRender);
    return ItemRender;
}(cc.Component));
exports.default = ItemRender;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxsbGlzdFxcSXRlbVJlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWlCQztRQVpHLFFBQVE7UUFDRCxVQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3hCLGNBQWM7UUFDUCxlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQVNqQyxDQUFDO0lBUEcsYUFBYTtJQUNOLGdDQUFXLEdBQWxCO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLE1BQU07WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7WUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBYkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7NkNBQ3ZCO0lBSE4sVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWlCOUI7SUFBRCxpQkFBQztDQWpCRCxBQWlCQyxDQWpCdUMsRUFBRSxDQUFDLFNBQVMsR0FpQm5EO2tCQWpCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXN0LCB7IExpc3RUeXBlIH0gZnJvbSBcIi4vTExpc3RcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtUmVuZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5MYWJlbCwgdG9vbHRpcDogXCLmmL7npLrmlofmnKxcIiB9KVxyXG4gICAgcHVibGljIGxhYmVsOiBjYy5MYWJlbDtcclxuXHJcbiAgICAvKirmlbDmja4gKi9cclxuICAgIHB1YmxpYyBkYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgLyoq57Si5byVIDDooajnpLrnrKzkuIDpobkqL1xyXG4gICAgcHVibGljIGl0ZW1JbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKirmlbDmja7mlLnlj5jml7bosIPnlKggKi9cclxuICAgIHB1YmxpYyBkYXRhQ2hhbmdlZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW1SZW5kZXJcIix0aGlzLmRhdGEpO1xyXG4gICAgICAgIGlmKCF0aGlzLmxhYmVsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSBpbnN0YW5jZW9mIE9iamVjdCkgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLmRhdGEubGFiZWw7XHJcbiAgICAgICAgZWxzZSB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuZGF0YTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/events/LEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e58dIEA9dKVpj7gJtA01f3', 'LEvent');
// Script/lightUI/events/LEvent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent = /** @class */ (function (_super) {
    __extends(LEvent, _super);
    function LEvent(type, data, bubbles) {
        var _this = _super.call(this, type, bubbles) || this;
        _this.data = data;
        return _this;
    }
    LEvent.SHOW = "show";
    LEvent.CLOSE = "close";
    LEvent.ITEM_CLICK = "ITEM_CLICK";
    LEvent.KEY_BORD = "KEY_BORD";
    LEvent.CHANGED = "CHANGED";
    LEvent.SELECT = "SELECT";
    LEvent.POP = "POP";
    LEvent.COMPLETE = "COMPLETE";
    LEvent.CANCEL = "CANCEL";
    LEvent.CONFIRM = "CONFIRM";
    /**
     * 提交
     */
    LEvent.SUBMIT = "SUBMIT";
    LEvent.ADD_ITEM = "ADD_ITEM";
    LEvent.REMOVE_ITEM = "REMOVE_ITEM";
    LEvent.RESIZE = "RESIZE";
    LEvent.SOFT_KEY_INPUT_COMPLETE = "RESIZE";
    return LEvent;
}(cc.Event));
exports.default = LEvent;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxldmVudHNcXExFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFvQywwQkFBUTtJQStCeEMsZ0JBQVksSUFBWSxFQUFDLElBQVMsRUFBRSxPQUFpQjtRQUFyRCxZQUNJLGtCQUFNLElBQUksRUFBQyxPQUFPLENBQUMsU0FFdEI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7SUFDckIsQ0FBQztJQWhDYSxXQUFJLEdBQVUsTUFBTSxDQUFBO0lBQ3BCLFlBQUssR0FBVSxPQUFPLENBQUM7SUFDdkIsaUJBQVUsR0FBVSxZQUFZLENBQUM7SUFDakMsZUFBUSxHQUFVLFVBQVUsQ0FBQztJQUk3QixjQUFPLEdBQVUsU0FBUyxDQUFDO0lBQzNCLGFBQU0sR0FBVSxRQUFRLENBQUM7SUFFekIsVUFBRyxHQUFVLEtBQUssQ0FBQztJQUVuQixlQUFRLEdBQVUsVUFBVSxDQUFDO0lBQzdCLGFBQU0sR0FBVSxRQUFRLENBQUM7SUFDekIsY0FBTyxHQUFVLFNBQVMsQ0FBQztJQUN6Qzs7T0FFRztJQUNXLGFBQU0sR0FBVSxRQUFRLENBQUM7SUFFaEIsZUFBUSxHQUFVLFVBQVUsQ0FBQztJQUM3QixrQkFBVyxHQUFVLGFBQWEsQ0FBQztJQUVuQyxhQUFNLEdBQVUsUUFBUSxDQUFDO0lBR3pCLDhCQUF1QixHQUFVLFFBQVEsQ0FBQztJQU9yRSxhQUFDO0NBbkNELEFBbUNDLENBbkNtQyxFQUFFLENBQUMsS0FBSyxHQW1DM0M7a0JBbkNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTEV2ZW50IGV4dGVuZHMgY2MuRXZlbnR7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTSE9XOnN0cmluZyA9IFwic2hvd1wiXHJcbiAgICBwdWJsaWMgc3RhdGljIENMT1NFOnN0cmluZyA9IFwiY2xvc2VcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSVRFTV9DTElDSzpzdHJpbmcgPSBcIklURU1fQ0xJQ0tcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgS0VZX0JPUkQ6c3RyaW5nID0gXCJLRVlfQk9SRFwiO1xyXG5cclxuICAgXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDSEFOR0VEOnN0cmluZyA9IFwiQ0hBTkdFRFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTRUxFQ1Q6c3RyaW5nID0gXCJTRUxFQ1RcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFBPUDpzdHJpbmcgPSBcIlBPUFwiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ09NUExFVEU6c3RyaW5nID0gXCJDT01QTEVURVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBDQU5DRUw6c3RyaW5nID0gXCJDQU5DRUxcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ09ORklSTTpzdHJpbmcgPSBcIkNPTkZJUk1cIjtcclxuICAgIC8qKlxyXG4gICAgICog5o+Q5LqkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU1VCTUlUOnN0cmluZyA9IFwiU1VCTUlUXCI7ICAgICAgICBcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFERF9JVEVNOnN0cmluZyA9IFwiQUREX0lURU1cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVNT1ZFX0lURU06c3RyaW5nID0gXCJSRU1PVkVfSVRFTVwiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVTSVpFOnN0cmluZyA9IFwiUkVTSVpFXCI7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU09GVF9LRVlfSU5QVVRfQ09NUExFVEU6c3RyaW5nID0gXCJSRVNJWkVcIjtcclxuICAgIFxyXG4gICAgcHVibGljIGRhdGE6YW55O1xyXG4gICAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLGRhdGE/OmFueSwgYnViYmxlcz86IGJvb2xlYW4pe1xyXG4gICAgICAgIHN1cGVyKHR5cGUsYnViYmxlcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/managers/TaskAbs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c60aHVQWVFJrt57pj2vwsp', 'TaskAbs');
// Script/lightUI/managers/TaskAbs.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../events/LEvent");
/**
     * <p><code>Handler</code> 是事件处理器类。</p>
     * <p>推荐使用 Handler.create() 方法从对象池创建，减少对象创建消耗。创建的 Handler 对象不再使用后，可以使用 Handler.recover() 将其回收到对象池，回收后不要再使用此对象，否则会导致不可预料的错误。</p>
     * <p><b>注意：</b>由于鼠标事件也用本对象池，不正确的回收及调用，可能会影响鼠标事件的执行。</p>
     */
var TaskAbs = /** @class */ (function (_super) {
    __extends(TaskAbs, _super);
    /**
     * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
     * @param	caller 执行域。
     * @param	method 处理函数。
     * @param	args 函数参数。
     * @param	once 是否只执行一次。
     */
    function TaskAbs(caller, method, args, once) {
        if (caller === void 0) { caller = null; }
        if (method === void 0) { method = null; }
        if (args === void 0) { args = null; }
        if (once === void 0) { once = false; }
        var _this = _super.call(this) || this;
        /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
        _this.runonce = false;
        /**@private */
        _this._id = 0;
        _this.setTo(caller, method, args, once);
        return _this;
    }
    /**
     * 设置此对象的指定属性值。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
     * @return  返回 handler 本身。
     */
    TaskAbs.prototype.setTo = function (caller, method, args, once) {
        if (once === void 0) { once = false; }
        this._id = TaskAbs._gid++;
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.runonce = once;
        return this;
    };
    /**
     * 执行处理器。
     */
    TaskAbs.prototype.run = function () {
        var _this = this;
        if (this.method == null)
            return null;
        var id = this._id;
        this.args = [function () {
                _this.dispatchEvent(new LEvent_1.default(LEvent_1.default.COMPLETE));
            }];
        var result = this.method.apply(this.caller, this.args);
        this._id === id && this.runonce && this.recover();
        return result;
    };
    /**
     * 执行处理器，并携带额外数据。
     * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
     */
    TaskAbs.prototype.runWith = function (data) {
        if (this.method == null)
            return null;
        var id = this._id;
        if (data == null)
            var result = this.method.apply(this.caller, this.args);
        else if (!this.args && !data.unshift)
            result = this.method.call(this.caller, data);
        else if (this.args)
            result = this.method.apply(this.caller, this.args.concat(data));
        else
            result = this.method.apply(this.caller, data);
        this._id === id && this.runonce && this.recover();
        return result;
    };
    /**
     * 清理对象引用。
     */
    TaskAbs.prototype.clear = function () {
        this.caller = null;
        this.method = null;
        this.args = null;
        return this;
    };
    /**
     * 清理并回收到 Handler 对象池内。
     */
    TaskAbs.prototype.recover = function () {
        if (this._id > 0) {
            this._id = 0;
            TaskAbs._pool.push(this.clear());
        }
    };
    TaskAbs.prototype.complete = function () {
        this.dispatchEvent(new LEvent_1.default(LEvent_1.default.COMPLETE));
    };
    /**
     * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
     * @return  返回创建的handler实例。
     */
    TaskAbs.create = function (caller, method, args, once) {
        if (args === void 0) { args = null; }
        if (once === void 0) { once = true; }
        if (TaskAbs._pool.length)
            return TaskAbs._pool.pop().setTo(caller, method, args, once);
        return new TaskAbs(caller, method, args, once);
    };
    /**@private handler对象池*/
    TaskAbs._pool = [];
    /**@private */
    TaskAbs._gid = 1;
    return TaskAbs;
}(cc.EventTarget));
exports.default = TaskAbs;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxtYW5hZ2Vyc1xcVGFza0Ficy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFdEM7Ozs7T0FJSTtBQUNIO0lBQXFDLDJCQUFjO0lBbUJoRDs7Ozs7O09BTUc7SUFDSCxpQkFBWSxNQUF3QixFQUFFLE1BQTBCLEVBQUUsSUFBdUIsRUFBRSxJQUFxQjtRQUFwRyx1QkFBQSxFQUFBLGFBQXdCO1FBQUUsdUJBQUEsRUFBQSxhQUEwQjtRQUFFLHFCQUFBLEVBQUEsV0FBdUI7UUFBRSxxQkFBQSxFQUFBLFlBQXFCO1FBQWhILFlBQ0ksaUJBQU8sU0FFVjtRQWhCRCw4REFBOEQ7UUFDOUQsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFjO1FBQ0osU0FBRyxHQUFHLENBQUMsQ0FBQztRQVdkLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzNDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsdUJBQUssR0FBTCxVQUFNLE1BQVcsRUFBRSxNQUFxQixFQUFFLElBQWdCLEVBQUUsSUFBVTtRQUFWLHFCQUFBLEVBQUEsWUFBVTtRQUNsRSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQkFBRyxHQUFIO1FBQUEsaUJBU0M7UUFSRyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSTtZ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QUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBaEhELHdCQUF3QjtJQUNQLGFBQUssR0FBYyxFQUFFLENBQUM7SUFDdkMsY0FBYztJQUNDLFlBQUksR0FBVyxDQUFDLENBQUM7SUE4R3BDLGNBQUM7Q0FuSEEsQUFtSEEsQ0FuSHFDLEVBQUUsQ0FBQyxXQUFXLEdBbUhuRDtrQkFuSHFCLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTEV2ZW50IGZyb20gXCIuLi9ldmVudHMvTEV2ZW50XCI7XHJcblxyXG4vKipcclxuXHQgKiA8cD48Y29kZT5IYW5kbGVyPC9jb2RlPiDmmK/kuovku7blpITnkIblmajnsbvjgII8L3A+XHJcblx0ICogPHA+5o6o6I2Q5L2/55SoIEhhbmRsZXIuY3JlYXRlKCkg5pa55rOV5LuO5a+56LGh5rGg5Yib5bu677yM5YeP5bCR5a+56LGh5Yib5bu65raI6ICX44CC5Yib5bu655qEIEhhbmRsZXIg5a+56LGh5LiN5YaN5L2/55So5ZCO77yM5Y+v5Lul5L2/55SoIEhhbmRsZXIucmVjb3ZlcigpIOWwhuWFtuWbnuaUtuWIsOWvueixoeaxoO+8jOWbnuaUtuWQjuS4jeimgeWGjeS9v+eUqOatpOWvueixoe+8jOWQpuWImeS8muWvvOiHtOS4jeWPr+mihOaWmeeahOmUmeivr+OAgjwvcD5cclxuXHQgKiA8cD48Yj7ms6jmhI/vvJo8L2I+55Sx5LqO6byg5qCH5LqL5Lu25Lmf55So5pys5a+56LGh5rGg77yM5LiN5q2j56Gu55qE5Zue5pS25Y+K6LCD55So77yM5Y+v6IO95Lya5b2x5ZON6byg5qCH5LqL5Lu255qE5omn6KGM44CCPC9wPlxyXG5cdCAqL1xyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0FicyBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0e1xyXG5cclxuICAgIC8qKkBwcml2YXRlIGhhbmRsZXLlr7nosaHmsaAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfcG9vbDogVGFza0Fic1tdID0gW107XHJcbiAgICAvKipAcHJpdmF0ZSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2dpZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvKiog5omn6KGM5Z+fKHRoaXMp44CCKi9cclxuICAgIGNhbGxlcjogT2JqZWN0fG51bGw7XHJcbiAgICAvKiog5aSE55CG5pa55rOV44CCKi9cclxuICAgIG1ldGhvZDogRnVuY3Rpb258bnVsbDtcclxuICAgIC8qKiDlj4LmlbDjgIIqL1xyXG4gICAgYXJnczogYW55W118bnVsbDtcclxuICAgIC8qKiDooajnpLrmmK/lkKblj6rmiafooYzkuIDmrKHjgILlpoLmnpzkuLp0cnVl77yM5Zue6LCD5ZCO5omn6KGMcmVjb3Zlcigp6L+b6KGM5Zue5pS277yM5Zue5pS25ZCO5Lya6KKr5YaN5Yip55So77yM6buY6K6k5Li6ZmFsc2Ug44CCKi9cclxuICAgIHJ1bm9uY2UgPSBmYWxzZTtcclxuXHJcbiAgICAvKipAcHJpdmF0ZSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pZCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7mjIflrprnmoTlsZ7mgKflgLzvvIzliJvlu7rkuIDkuKogPGNvZGU+SGFuZGxlcjwvY29kZT4g57G755qE5a6e5L6L44CCXHJcbiAgICAgKiBAcGFyYW1cdGNhbGxlciDmiafooYzln5/jgIJcclxuICAgICAqIEBwYXJhbVx0bWV0aG9kIOWkhOeQhuWHveaVsOOAglxyXG4gICAgICogQHBhcmFtXHRhcmdzIOWHveaVsOWPguaVsOOAglxyXG4gICAgICogQHBhcmFtXHRvbmNlIOaYr+WQpuWPquaJp+ihjOS4gOasoeOAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsZXI6IE9iamVjdHxudWxsPW51bGwsIG1ldGhvZDogRnVuY3Rpb258bnVsbD1udWxsLCBhcmdzOiBhbnlbXXxudWxsID0gbnVsbCwgb25jZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNldFRvKGNhbGxlciwgbWV0aG9kLCBhcmdzLCBvbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruatpOWvueixoeeahOaMh+WumuWxnuaAp+WAvOOAglxyXG4gICAgICogQHBhcmFtXHRjYWxsZXIg5omn6KGM5Z+fKHRoaXMp44CCXHJcbiAgICAgKiBAcGFyYW1cdG1ldGhvZCDlm57osIPmlrnms5XjgIJcclxuICAgICAqIEBwYXJhbVx0YXJncyDmkLrluKbnmoTlj4LmlbDjgIJcclxuICAgICAqIEBwYXJhbVx0b25jZSDmmK/lkKblj6rmiafooYzkuIDmrKHvvIzlpoLmnpzkuLp0cnVl77yM5omn6KGM5ZCO5omn6KGMcmVjb3Zlcigp6L+b6KGM5Zue5pS244CCXHJcbiAgICAgKiBAcmV0dXJuICDov5Tlm54gaGFuZGxlciDmnKzouqvjgIJcclxuICAgICAqL1xyXG4gICAgc2V0VG8oY2FsbGVyOiBhbnksIG1ldGhvZDogRnVuY3Rpb258bnVsbCwgYXJnczogYW55W118bnVsbCwgb25jZT1mYWxzZSk6IFRhc2tBYnMge1xyXG4gICAgICAgIHRoaXMuX2lkID0gVGFza0Ficy5fZ2lkKys7XHJcbiAgICAgICAgdGhpcy5jYWxsZXIgPSBjYWxsZXI7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgICAgICB0aGlzLnJ1bm9uY2UgPSBvbmNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omn6KGM5aSE55CG5Zmo44CCXHJcbiAgICAgKi9cclxuICAgIHJ1bigpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGhvZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICB2YXIgaWQ6IG51bWJlciA9IHRoaXMuX2lkO1xyXG4gICAgICAgIHRoaXMuYXJncyA9IFsoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IExFdmVudChMRXZlbnQuQ09NUExFVEUpKTtcclxuICAgICAgICB9XTtcclxuICAgICAgICB2YXIgcmVzdWx0OiBhbnkgPSB0aGlzLm1ldGhvZC5hcHBseSh0aGlzLmNhbGxlciwgdGhpcy5hcmdzKTtcclxuICAgICAgICB0aGlzLl9pZCA9PT0gaWQgJiYgdGhpcy5ydW5vbmNlICYmIHRoaXMucmVjb3ZlcigpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiafooYzlpITnkIblmajvvIzlubbmkLrluKbpop3lpJbmlbDmja7jgIJcclxuICAgICAqIEBwYXJhbVx0ZGF0YSDpmYTliqDnmoTlm57osIPmlbDmja7vvIzlj6/ku6XmmK/ljZXmlbDmja7miJbogIVBcnJheSjkvZzkuLrlpJrlj4Ip44CCXHJcbiAgICAgKi9cclxuICAgIHJ1bldpdGgoZGF0YTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5tZXRob2QgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdmFyIGlkOiBudW1iZXIgPSB0aGlzLl9pZDtcclxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0OiBhbnkgPSB0aGlzLm1ldGhvZC5hcHBseSh0aGlzLmNhbGxlciwgdGhpcy5hcmdzKTtcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5hcmdzICYmICFkYXRhLnVuc2hpZnQpIHJlc3VsdCA9IHRoaXMubWV0aG9kLmNhbGwodGhpcy5jYWxsZXIsIGRhdGEpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXJncykgcmVzdWx0ID0gdGhpcy5tZXRob2QuYXBwbHkodGhpcy5jYWxsZXIsIHRoaXMuYXJncy5jb25jYXQoZGF0YSkpO1xyXG4gICAgICAgIGVsc2UgcmVzdWx0ID0gdGhpcy5tZXRob2QuYXBwbHkodGhpcy5jYWxsZXIsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuX2lkID09PSBpZCAmJiB0aGlzLnJ1bm9uY2UgJiYgdGhpcy5yZWNvdmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuWvueixoeW8leeUqOOAglxyXG4gICAgICovXHJcbiAgICBjbGVhcigpOiBUYXNrQWJzIHtcclxuICAgICAgICB0aGlzLmNhbGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXJncyA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIblubblm57mlLbliLAgSGFuZGxlciDlr7nosaHmsaDlhoXjgIJcclxuICAgICAqL1xyXG4gICAgcmVjb3ZlcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkID0gMDtcclxuICAgICAgICAgICAgVGFza0Ficy5fcG9vbC5wdXNoKHRoaXMuY2xlYXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlKCk6dm9pZHtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IExFdmVudChMRXZlbnQuQ09NUExFVEUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7juWvueixoeaxoOWGheWIm+W7uuS4gOS4qkhhbmRsZXLvvIzpu5jorqTkvJrmiafooYzkuIDmrKHlubbnq4vljbPlm57mlLbvvIzlpoLmnpzkuI3pnIDopoHoh6rliqjlm57mlLbvvIzorr7nva5vbmNl5Y+C5pWw5Li6ZmFsc2XjgIJcclxuICAgICAqIEBwYXJhbVx0Y2FsbGVyIOaJp+ihjOWfnyh0aGlzKeOAglxyXG4gICAgICogQHBhcmFtXHRtZXRob2Qg5Zue6LCD5pa55rOV44CCXHJcbiAgICAgKiBAcGFyYW1cdGFyZ3Mg5pC65bim55qE5Y+C5pWw44CCXHJcbiAgICAgKiBAcGFyYW1cdG9uY2Ug5piv5ZCm5Y+q5omn6KGM5LiA5qyh77yM5aaC5p6c5Li6dHJ1Ze+8jOWbnuiwg+WQjuaJp+ihjHJlY292ZXIoKei/m+ihjOWbnuaUtu+8jOm7mOiupOS4unRydWXjgIJcclxuICAgICAqIEByZXR1cm4gIOi/lOWbnuWIm+W7uueahGhhbmRsZXLlrp7kvovjgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZShjYWxsZXI6IGFueSwgbWV0aG9kOiBGdW5jdGlvbnxudWxsLCBhcmdzOiBhbnlbXXxudWxsID0gbnVsbCwgb25jZTogYm9vbGVhbiA9IHRydWUpOiBUYXNrQWJzIHtcclxuICAgICAgICBpZiAoVGFza0Ficy5fcG9vbC5sZW5ndGgpIFxyXG4gICAgICAgICAgICByZXR1cm4gKFRhc2tBYnMuX3Bvb2wucG9wKCkgYXMgVGFza0Ficykuc2V0VG8oY2FsbGVyLCBtZXRob2QsIGFyZ3MsIG9uY2UpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFza0FicyhjYWxsZXIsIG1ldGhvZCwgYXJncywgb25jZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/logging/Logger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '014ebJrdv5Nh6NalBwtcO8k', 'Logger');
// Script/lightUI/logging/Logger.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../events/LEvent");
var LogLevel_1 = require("./LogLevel");
// import HttpRequest = Laya.HttpRequest;
// import Browser = Laya.Browser;
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger(param1, isPersistence, address, path) {
        if (param1 === void 0) { param1 = "LightUI"; }
        if (isPersistence === void 0) { isPersistence = false; }
        if (address === void 0) { address = ""; }
        if (path === void 0) { path = ""; }
        var _this = _super.call(this) || this;
        _this._enableConsoleTrace = true;
        _this._enableEventDispatching = false;
        _this._loggingLevel = 200;
        _this._date = new Date();
        //是否开启持久化  存入服务端
        _this._isPersistence = false;
        // private _hr:HttpRequest;
        _this._isDebug = false;
        _this._loggingPrefix = param1;
        _this._isPersistence = isPersistence;
        _this._address = address;
        _this._path = path;
        return _this;
        // this._hr = new HttpRequest();
        // this._hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
        // this._hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
        // this._hr.once(Laya.Event.ERROR, this, this.onHttpRequestError);
    } // end function
    Object.defineProperty(Logger.prototype, "enableConsoleTrace", {
        get: function () {
            return this._enableConsoleTrace;
        } // end function
        ,
        set: function (param1) {
            this._enableConsoleTrace = param1;
            return;
        } // end function
        ,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "enableEventDispatching", {
        get: function () {
            return this._enableEventDispatching;
        } // end function
        ,
        set: function (param1) {
            this._enableEventDispatching = param1;
            return;
        } // end function
        ,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "loggingLevel", {
        get: function () {
            return this._loggingLevel;
        } // end function
        ,
        set: function (param1) {
            this._loggingLevel = param1;
            return;
        } // end function
        ,
        enumerable: false,
        configurable: true
    });
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(LogLevel_1.default.DEBUG, args.join(" "));
        return;
    }; // end function
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(LogLevel_1.default.INFO, args.join(" "));
        return;
    }; // end function
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(LogLevel_1.default.WARN, args.join(" "));
        return;
    }; // end function
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(LogLevel_1.default.ERROR, args.join(" "));
        return;
    }; // end function
    Logger.prototype.log = function (param1, param2) {
        if (this._isDebug == false)
            return;
        var _loc_4 = null;
        //var _loc_5:LoggerEvent = null;
        if (param1 < this._loggingLevel) {
            return;
        }
        var _loc_3 = LogLevel_1.default.toString(param1);
        if (this._enableConsoleTrace) {
            console.log("[" + this._loggingPrefix + "|" + _loc_3 + "|" + this.getNewDate() + "]", param2);
            if (this._isPersistence) {
                //{"path" : "123/456.log", "content" : "test"}
                // var data:Object = {};
                // data["path"] = "123/456.log";
                // data["content"] = "[" + this._loggingPrefix + "|" + _loc_3 + "|" + this.getNewDate() + "]" + param2;
                // this._hr.send(this._address,JSON.stringify(data),"post","text");
            }
        }
        if (this._enableEventDispatching) {
            this.dispatchEvent(new LEvent_1.default(_loc_3, param2));
        }
        return;
    }; // end function
    Logger.prototype.onHttpRequestError = function (e) {
        if (e === void 0) { e = null; }
        this.error(e);
    };
    Logger.prototype.onHttpRequestProgress = function (e) {
        if (e === void 0) { e = null; }
        this.error(e);
    };
    Logger.prototype.onHttpRequestComplete = function (e) {
        if (e === void 0) { e = null; }
        //trace("收到数据：" + _hr.data);
    };
    Logger.prototype.getNewDate = function () {
        this._date = new Date();
        return this.dateFormart(this._date);
    };
    Logger.prototype.dateFormart = function (date) {
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    };
    Object.defineProperty(Logger.prototype, "isPersistence", {
        get: function () {
            return this._isPersistence;
        },
        set: function (value) {
            this._isPersistence = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "isDebug", {
        get: function () {
            return this._isDebug;
        },
        set: function (value) {
            this._isDebug = value;
        },
        enumerable: false,
        configurable: true
    });
    return Logger;
}(cc.EventTarget));
exports.default = Logger;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxsb2dnaW5nXFxMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsMkNBQXNDO0FBQ3ZDLHVDQUFrQztBQUVsQyx5Q0FBeUM7QUFDekMsaUNBQWlDO0FBRWpDO0lBQW9DLDBCQUFjO0lBZTlDLGdCQUFZLE1BQXlCLEVBQUMsYUFBNkIsRUFBQyxPQUFtQixFQUFDLElBQWdCO1FBQTVGLHVCQUFBLEVBQUEsa0JBQXlCO1FBQUMsOEJBQUEsRUFBQSxxQkFBNkI7UUFBQyx3QkFBQSxFQUFBLFlBQW1CO1FBQUMscUJBQUEsRUFBQSxTQUFnQjtRQUF4RyxZQUVJLGlCQUFPLFNBVVY7UUF6Qk8seUJBQW1CLEdBQVcsSUFBSSxDQUFDO1FBQ25DLDZCQUF1QixHQUFXLEtBQUssQ0FBQztRQUN4QyxtQkFBYSxHQUFVLEdBQUcsQ0FBQztRQUUzQixXQUFLLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVoQyxnQkFBZ0I7UUFDUixvQkFBYyxHQUFXLEtBQUssQ0FBQztRQUd2QywyQkFBMkI7UUFDbkIsY0FBUSxHQUFXLEtBQUssQ0FBQztRQUs3QixLQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixLQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7UUFFbEIsZ0NBQWdDO1FBQ2hDLHdFQUF3RTtRQUN4RSx3RUFBd0U7UUFDeEUsa0VBQWtFO0lBQ3RFLENBQUMsQ0FBQSxlQUFlO0lBRWhCLHNCQUFXLHNDQUFrQjthQUE3QjtZQUVJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLENBQUMsQ0FBQSxlQUFlOzthQUVoQixVQUE4QixNQUFjO1lBRXhDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFN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aEtBLEFBZ0tDLENBaEttQyxFQUFFLENBQUMsV0FBVyxHQWdLakQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgTEV2ZW50IGZyb20gXCIuLi9ldmVudHMvTEV2ZW50XCI7XHJcbmltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xyXG5cclxuLy8gaW1wb3J0IEh0dHBSZXF1ZXN0ID0gTGF5YS5IdHRwUmVxdWVzdDtcclxuLy8gaW1wb3J0IEJyb3dzZXIgPSBMYXlhLkJyb3dzZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIgZXh0ZW5kcyBjYy5FdmVudFRhcmdldFxyXG57XHJcbiAgICBwcml2YXRlIF9lbmFibGVDb25zb2xlVHJhY2U6Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9lbmFibGVFdmVudERpc3BhdGNoaW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2xvZ2dpbmdMZXZlbDpudW1iZXIgPSAyMDA7XHJcbiAgICBwcml2YXRlIF9sb2dnaW5nUHJlZml4OnN0cmluZztcclxuICAgIHByaXZhdGUgX2RhdGU6RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBcclxuICAgIC8v5piv5ZCm5byA5ZCv5oyB5LmF5YyWICDlrZjlhaXmnI3liqHnq69cclxuICAgIHByaXZhdGUgX2lzUGVyc2lzdGVuY2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYWRkcmVzczpzdHJpbmc7Ly8vLy8vLy8vLy8vLy8vLy8vLy9odHRw6K+35rGC5Zyw5Z2AIFxyXG4gICAgcHJpdmF0ZSBfcGF0aDpzdHJpbmc7Ly8vLy8vLy8vLy8vLy8vLy8vLy8vL+aXpeW/l+ebruW9lSBcclxuICAgIC8vIHByaXZhdGUgX2hyOkh0dHBSZXF1ZXN0O1xyXG4gICAgcHJpdmF0ZSBfaXNEZWJ1Zzpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW0xOnN0cmluZyA9IFwiTGlnaHRVSVwiLGlzUGVyc2lzdGVuY2U6Ym9vbGVhbiA9IGZhbHNlLGFkZHJlc3M6c3RyaW5nID0gXCJcIixwYXRoOnN0cmluZyA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9sb2dnaW5nUHJlZml4ID0gcGFyYW0xO1xyXG4gICAgICAgIHRoaXMuX2lzUGVyc2lzdGVuY2UgPSBpc1BlcnNpc3RlbmNlO1xyXG4gICAgICAgIHRoaXMuX2FkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuX2hyID0gbmV3IEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgLy8gdGhpcy5faHIub25jZShMYXlhLkV2ZW50LlBST0dSRVNTLCB0aGlzLCB0aGlzLm9uSHR0cFJlcXVlc3RQcm9ncmVzcyk7XHJcbiAgICAgICAgLy8gdGhpcy5faHIub25jZShMYXlhLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCB0aGlzLm9uSHR0cFJlcXVlc3RDb21wbGV0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5faHIub25jZShMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLm9uSHR0cFJlcXVlc3RFcnJvcik7XHJcbiAgICB9Ly8gZW5kIGZ1bmN0aW9uXHJcblxyXG4gICAgcHVibGljIGdldCBlbmFibGVDb25zb2xlVHJhY2UoKSA6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW5hYmxlQ29uc29sZVRyYWNlO1xyXG4gICAgfS8vIGVuZCBmdW5jdGlvblxyXG5cclxuICAgIHB1YmxpYyBzZXQgZW5hYmxlQ29uc29sZVRyYWNlKHBhcmFtMTpib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZUNvbnNvbGVUcmFjZSA9IHBhcmFtMTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9Ly8gZW5kIGZ1bmN0aW9uXHJcblxyXG4gICAgcHVibGljIGdldCBlbmFibGVFdmVudERpc3BhdGNoaW5nKCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuYWJsZUV2ZW50RGlzcGF0Y2hpbmc7XHJcbiAgICB9Ly8gZW5kIGZ1bmN0aW9uXHJcblxyXG4gICAgcHVibGljIHNldCBlbmFibGVFdmVudERpc3BhdGNoaW5nKHBhcmFtMTpib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZUV2ZW50RGlzcGF0Y2hpbmcgPSBwYXJhbTE7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfS8vIGVuZCBmdW5jdGlvblxyXG5cclxuICAgIHB1YmxpYyBnZXQgbG9nZ2luZ0xldmVsKCkgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ0xldmVsO1xyXG4gICAgfS8vIGVuZCBmdW5jdGlvblxyXG5cclxuICAgIHB1YmxpYyBzZXQgbG9nZ2luZ0xldmVsKHBhcmFtMTpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2luZ0xldmVsID0gcGFyYW0xO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0vLyBlbmQgZnVuY3Rpb25cclxuXHJcbiAgICBwdWJsaWMgZGVidWcoLi4uIGFyZ3M6QXJyYXk8YW55PikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sb2coTG9nTGV2ZWwuREVCVUcsIGFyZ3Muam9pbihcIiBcIikpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0vLyBlbmQgZnVuY3Rpb25cclxuXHJcbiAgICBwdWJsaWMgaW5mbyguLi4gYXJnczpBcnJheTxhbnk+KSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxvZyhMb2dMZXZlbC5JTkZPLCBhcmdzLmpvaW4oXCIgXCIpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9Ly8gZW5kIGZ1bmN0aW9uXHJcblxyXG4gICAgcHVibGljIHdhcm4oLi4uIGFyZ3M6QXJyYXk8YW55PikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sb2coTG9nTGV2ZWwuV0FSTiwgYXJncy5qb2luKFwiIFwiKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfS8vIGVuZCBmdW5jdGlvblxyXG5cclxuICAgIHB1YmxpYyBlcnJvciguLi4gYXJnczpBcnJheTxhbnk+KSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxvZyhMb2dMZXZlbC5FUlJPUiwgYXJncy5qb2luKFwiIFwiKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfS8vIGVuZCBmdW5jdGlvblxyXG5cclxuICAgIHByaXZhdGUgbG9nKHBhcmFtMTpudW1iZXIsIHBhcmFtMjpzdHJpbmcpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuX2lzRGVidWcgPT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICB2YXIgX2xvY180Ok9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgLy92YXIgX2xvY181OkxvZ2dlckV2ZW50ID0gbnVsbDtcclxuICAgICAgICBpZiAocGFyYW0xIDwgdGhpcy5fbG9nZ2luZ0xldmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2xvY18zOmFueSA9IExvZ0xldmVsLnRvU3RyaW5nKHBhcmFtMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VuYWJsZUNvbnNvbGVUcmFjZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1wiICsgdGhpcy5fbG9nZ2luZ1ByZWZpeCArIFwifFwiICsgX2xvY18zICsgXCJ8XCIgKyB0aGlzLmdldE5ld0RhdGUoKSArIFwiXVwiLCBwYXJhbTIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLl9pc1BlcnNpc3RlbmNlKXtcclxuICAgICAgICAgICAgICAgIC8ve1wicGF0aFwiIDogXCIxMjMvNDU2LmxvZ1wiLCBcImNvbnRlbnRcIiA6IFwidGVzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGRhdGE6T2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICAvLyBkYXRhW1wicGF0aFwiXSA9IFwiMTIzLzQ1Ni5sb2dcIjtcclxuICAgICAgICAgICAgICAgIC8vIGRhdGFbXCJjb250ZW50XCJdID0gXCJbXCIgKyB0aGlzLl9sb2dnaW5nUHJlZml4ICsgXCJ8XCIgKyBfbG9jXzMgKyBcInxcIiArIHRoaXMuZ2V0TmV3RGF0ZSgpICsgXCJdXCIgKyBwYXJhbTI7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9oci5zZW5kKHRoaXMuX2FkZHJlc3MsSlNPTi5zdHJpbmdpZnkoZGF0YSksXCJwb3N0XCIsXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9lbmFibGVFdmVudERpc3BhdGNoaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTEV2ZW50KF9sb2NfMyxwYXJhbTIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfS8vIGVuZCBmdW5jdGlvblxyXG5cclxuICAgIHByaXZhdGUgb25IdHRwUmVxdWVzdEVycm9yKGU6YW55PW51bGwpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG9uSHR0cFJlcXVlc3RQcm9ncmVzcyhlOmFueT1udWxsKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lcnJvcihlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG9uSHR0cFJlcXVlc3RDb21wbGV0ZShlOmFueT1udWxsKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy90cmFjZShcIuaUtuWIsOaVsOaNru+8mlwiICsgX2hyLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGdldE5ld0RhdGUoKTpzdHJpbmd7XHJcbiAgICAgICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hcnQodGhpcy5fZGF0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgZGF0ZUZvcm1hcnQoZGF0ZTpEYXRlKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKStcIjpcIitkYXRlLmdldE1pbnV0ZXMoKStcIjpcIitkYXRlLmdldFNlY29uZHMoKStcIjpcIitkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNQZXJzaXN0ZW5jZSgpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNQZXJzaXN0ZW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGlzUGVyc2lzdGVuY2UodmFsdWU6Ym9vbGVhbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9pc1BlcnNpc3RlbmNlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc0RlYnVnKCk6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RlYnVnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNEZWJ1Zyh2YWx1ZTpib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2lzRGVidWcgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/utils/Draw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7cd1fJ6EZhI5rHXINzxltaL', 'Draw');
// Script/lightUI/utils/Draw.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Draw = /** @class */ (function () {
    function Draw() {
    }
    Draw.drawRect = function (rect, color) {
        if (color === void 0) { color = null; }
        color = color ? color : "0xff0000";
        var re = new cc.Node();
        re.width = rect.width;
        re.height = rect.height;
        // re.anchorX = 0;
        // re.anchorY = 0;
        var g = re.addComponent(cc.Graphics);
        g.fillColor.fromHEX(color);
        g.rect(-rect.width / 2, -rect.height / 2, rect.width, rect.height);
        g.fill();
        return re;
    };
    return Draw;
}());
exports.default = Draw;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFx1dGlsc1xcRHJhdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFtQkEsQ0FBQztJQWpCaUIsYUFBUSxHQUF0QixVQUF1QixJQUFZLEVBQUUsS0FBbUI7UUFBbkIsc0JBQUEsRUFBQSxZQUFtQjtRQUUxRCxLQUFLLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUEsQ0FBQyxDQUFBLFVBQVUsQ0FBQztRQUUvQixJQUFJLEVBQUUsR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLEdBQWUsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVQsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUYsV0FBQztBQUFELENBbkJBLEFBbUJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3e1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZHJhd1JlY3QocmVjdDpjYy5SZWN0LCBjb2xvcjpzdHJpbmcgPSBudWxsKTpjYy5Ob2Rle1xyXG5cdFx0XHJcblx0XHRjb2xvciA9IGNvbG9yP2NvbG9yOlwiMHhmZjAwMDBcIjtcclxuXHRcdFxyXG5cdFx0dmFyIHJlOmNjLk5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIHJlLndpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICByZS5oZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICAvLyByZS5hbmNob3JYID0gMDtcclxuICAgICAgICAvLyByZS5hbmNob3JZID0gMDtcclxuICAgICAgICBsZXQgZzpjYy5HcmFwaGljcyA9IHJlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgZy5maWxsQ29sb3IuZnJvbUhFWChjb2xvcik7XHJcbiAgICAgICAgZy5yZWN0KC1yZWN0LndpZHRoLzIsLXJlY3QuaGVpZ2h0LzIscmVjdC53aWR0aCxyZWN0LmhlaWdodCk7XHJcblx0XHRnLmZpbGwoKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHJlO1xyXG5cdH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/newlist/listItemRender.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04ad3m9iltHdbglm3hl0kE4', 'listItemRender');
// Script/lightUI/components/newlist/listItemRender.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var listItemRender = /** @class */ (function (_super) {
    __extends(listItemRender, _super);
    function listItemRender() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**数据 */
        _this.data = null;
        /**索引 0表示第一项*/
        _this.itemIndex = 0;
        return _this;
    }
    listItemRender.prototype.onLoad = function () {
    };
    /**数据改变时调用 */
    listItemRender.prototype.dataChanged = function () {
        // this.node.getChildByName("rankLab").getComponent(cc.Label).string = this.data.rank + "";
        // this.node.getChildByName("nameLab").getComponent(cc.Label).string = this.data.name + "";
    };
    listItemRender = __decorate([
        ccclass
    ], listItemRender);
    return listItemRender;
}(cc.Component));
exports.default = listItemRender;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxuZXdsaXN0XFxsaXN0SXRlbVJlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWVDO1FBZEcsUUFBUTtRQUNELFVBQUksR0FBUSxJQUFJLENBQUM7UUFDeEIsY0FBYztRQUNQLGVBQVMsR0FBVyxDQUFDLENBQUM7O0lBV2pDLENBQUM7SUFURywrQkFBTSxHQUFOO0lBR0EsQ0FBQztJQUNELGFBQWE7SUFDTixvQ0FBVyxHQUFsQjtRQUNJLDJGQUEyRjtRQUMzRiwyRkFBMkY7SUFDL0YsQ0FBQztJQWRnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBZWxDO0lBQUQscUJBQUM7Q0FmRCxBQWVDLENBZjJDLEVBQUUsQ0FBQyxTQUFTLEdBZXZEO2tCQWZvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExFdmVudCBmcm9tIFwiLi4vLi4vZXZlbnRzL0xFdmVudFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaXN0SXRlbVJlbmRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvKirmlbDmja4gKi9cclxuICAgIHB1YmxpYyBkYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgLyoq57Si5byVIDDooajnpLrnrKzkuIDpobkqL1xyXG4gICAgcHVibGljIGl0ZW1JbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIC8qKuaVsOaNruaUueWPmOaXtuiwg+eUqCAqL1xyXG4gICAgcHVibGljIGRhdGFDaGFuZ2VkKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJhbmtMYWJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmRhdGEucmFuayArIFwiXCI7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibmFtZUxhYlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZGF0YS5uYW1lICsgXCJcIjtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e35e4ISwqZMybSKTjO3FKV9', 'EventManager');
// Common/src/EventManager.ts

var EventManager = /** @class */ (function () {
    function EventManager() {
    }
    EventManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new cc.EventTarget();
        }
        return this.instance;
    };
    return EventManager;
}());
cc.EventManager = EventManager.getInstance();

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXEV2ZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBUUEsQ0FBQztJQU5VLHdCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQUVELEVBQUUsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXZlbnRNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBjYy5FdmVudFRhcmdldCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNjLkV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/hall/events/HallNotification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5e1dDbDZ1MxYJ+GSpLnaAC', 'HallNotification');
// Script/hall/events/HallNotification.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HallNotification = /** @class */ (function () {
    function HallNotification() {
    }
    HallNotification.START_UP = "startUp";
    HallNotification.START_INIT = "START_INIT";
    HallNotification.HALL_QUIT = "HALL_QUIT"; //退出大厅
    HallNotification.GAME_QUIT = "GAME_QUIT"; //退出游戏
    HallNotification.RELOAD_SOCKET = "RELOAD_SOCKET";
    HallNotification.UP_DATE_VERSION = "UP_DATE_VERSION";
    //用户协议
    HallNotification.USER_AGREE_SHOW = "USER_AGREE_SHOW";
    HallNotification.USER_AGREE_HIDE = "USER_AGREE_HIDE";
    //找回密码
    HallNotification.GET_PWD_SHOW = "GET_PWD_SHOW";
    HallNotification.GET_PWD_HIDE = "GET_PWD_HIDE";
    //账号登录
    HallNotification.ACCOUNT_LOGIN_SHOW = "ACCOUNT_LOGIN_SHOW";
    HallNotification.ACCOUNT_LOGIN_HIDE = "ACCOUNT_LOGIN_HIDE";
    //电话登录
    HallNotification.PHONE_LOGIN_SHOW = "PHONE_LOGIN_SHOW";
    HallNotification.PHONE_LOGIN_HIDE = "PHONE_LOGIN_HIDE";
    // 绑定登录
    HallNotification.PHONE_BIND_WECHAT = "PHONE_BIND_WECHAT";
    HallNotification.ACCOUNT_BIND_WECHAT = "ACCOUNT_BIND_WECHAT";
    //加载进度条
    HallNotification.LOADING_SHOW = "loadingShow";
    HallNotification.LOADING_HIDE = "loadingHide";
    //smallLoadin 主要用于http请求时候 锁屏
    HallNotification.SMALL_LOADING_SHOW = "SMALL_LOADING_SHOW";
    HallNotification.SMALL_LOADING_HIDE = "SMALL_LOADING_HIDE";
    //大厅前的加载界面
    HallNotification.LOADING_LAYER_SHOW_BIND = "LOADING_LAYER_SHOW_BIND";
    HallNotification.LOADING_LAYER_HIDE_BIND = "LOADING_LAYER_HIDE_BIND";
    HallNotification.LOADING_LAYER_SHOW = "LOADING_LAYER_SHOW";
    HallNotification.LOADING_LAYER_HIDE = "LOADING_LAYER_HIDE";
    HallNotification.START_PING = "START_PING";
    //游戏大厅
    HallNotification.MAINLAYER_SHOW = "MAINLAYER_SHOW";
    HallNotification.MAINLAYER_HIDE = "MAINLAYER_HIDE";
    HallNotification.MAINLAYER_WEBVIEW = "MAINLAYER_WEBVIEW";
    HallNotification.MIAN_RETURN_LOBBY = "MIAN_RETURN_LOBBY";
    HallNotification.GO_LOBBY_FRESH_BALANCE = "GO_LOBBY_FRESH_BALANCE"; //刷新余额
    //游戏消息界面
    HallNotification.NEWS_VIEW_SHOW = "NEWS_VIEW_SHOW";
    HallNotification.NEWS_VIEW_HIDE = "NEWS_VIEW_HIDE";
    // 跑马灯
    HallNotification.MARQUEE_LOBBY = "MARQUEE_LOBBY";
    //手机绑定
    HallNotification.MOBLILE_VERIFY_SHOW = "MOBLILE_VERIFY_SHOW";
    HallNotification.MOBLILE_VERIFY_HIDE = "MOBLILE_VERIFY_HIDE";
    //用户信息面板
    HallNotification.USERINFO_SHOW = "USERINFO_SHOW";
    HallNotification.USERINFO_HIDE = "USERINFO_HIDE";
    HallNotification.USERINFO_OTHER_SHOW = "USERINFO_OTHER_SHOW";
    HallNotification.USERINFO_OTHER_HIDE = "USERINFO_OTHER_HIDE";
    HallNotification.USERINFO_UPDATE = "USERINFO_UPDATE";
    //遮罩
    HallNotification.CREATEROOMMASK = "CREATEROOMMASK";
    HallNotification.HIDEALLpopupLayer = "HIDEALLpopupLayer"; //清除所有弹窗
    //======================  http  ================
    HallNotification.LOGIN_BY_WECHAT = "LOGIN_BY_WECHAT";
    HallNotification.LOGIN_BY_TEL_REQUEST = "LOGIN_BY_TEL_REQUEST";
    HallNotification.LOGIN_BY_TEL_RESPONSE = "LOGIN_BY_TEL_RESPONSE";
    HallNotification.LOGIN_BY_ACCOUNT_REQUEST = "LOGIN_BY_ACCOUNT_REQUEST";
    HallNotification.LOGIN_BY_ACCOUNT_RESPONSE = "LOGIN_BY_ACCOUNT";
    HallNotification.LOGIN_CHECK_TOKEN = "LOGIN_CHECK_TOKEN";
    HallNotification.LOGIN_VERIFY_TOKEN_REQUEST = "LOGIN_VERIFY_TOKEN_REQUEST"; //校验koken
    HallNotification.LOGIN_VERIFY_TOKEN_RESPONSE = "LOGIN_VERIFY_TOKEN_RESPONSE";
    HallNotification.LOGIN_TEL_RETRIEVE_PWD_REQUEST = "LOGIN_TEL_RETRIEVE_PWD_REQUEST"; //重置密码
    HallNotification.LOGIN_TEL_RETRIEVE_PWD_RESPONSE = "LOGIN_TEL_RETRIEVE_PWD_RESPONSE";
    HallNotification.LOGIN_SEND_VERIFY_CODE_REQUEST = "LOGIN_SEND_VERIFY_CODE_REQUEST"; //发送验证码
    HallNotification.BIND_TEL_REQUEST = "BIND_TEL_REQUEST"; //手机绑定微信
    HallNotification.BIND_TEL_RESPONSE = "BIND_TEL_RESPONSE";
    HallNotification.BIND_ACCOUNT_REQUEST = "BIND_ACCOUNT_REQUEST"; //账号绑定微信
    HallNotification.BIND_ACCOUNT_RESPONSE = "BIND_ACCOUNT_RESPONSE";
    HallNotification.LOGIN_VERIFY_TOKEN_CLEAR = "LOGIN_VERIFY_TOKEN_CLEAR"; //清理TOKEN
    HallNotification.GET_WEBURL = "GET_WEBURL"; //落地页
    HallNotification.GET_WEBURL_REBONS = "GET_WEBURL_REBONS"; //落地页
    HallNotification.GET_KEFU = "GET_KEFU"; //落地页
    HallNotification.GET_tenantId = "GET_tenantId"; //落地页
    HallNotification.GAME_VERSION = "GAME_VERSION"; //版本
    HallNotification.TOKEERROR = "TOKEERROR"; //版本
    HallNotification.GAMELIST = "GAMELIST"; //游戏配置
    //---------------socket --------------------------------
    HallNotification.SOCKET_CONTENT = "SOCKET_CONTENT";
    HallNotification.SOCKET_S_MESSAGE = "SOCKET_S_MESSAGE";
    HallNotification.SOCKET_R_MESSAGE = "SOCKET_R_MESSAGE";
    HallNotification.SOCKET_OPEN = "webClientOnopen";
    HallNotification.SOCKET_INTERVAL = "SOCKET_INTERVAL";
    return HallNotification;
}());
exports.default = HallNotification;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxoYWxsXFxldmVudHNcXEhhbGxOb3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBbUdBLENBQUM7SUFsRzBCLHlCQUFRLEdBQVcsU0FBUyxDQUFDO0lBQzdCLDJCQUFVLEdBQVcsWUFBWSxDQUFDO0lBRWxDLDBCQUFTLEdBQVcsV0FBVyxDQUFDLENBQU0sTUFBTTtJQUM1QywwQkFBUyxHQUFXLFdBQVcsQ0FBQyxDQUFNLE1BQU07SUFFNUMsOEJBQWEsR0FBVyxlQUFlLENBQUM7SUFDeEMsZ0NBQWUsR0FBVyxpQkFBaUIsQ0FBQztJQUVuRSxNQUFNO0lBQ2lCLGdDQUFlLEdBQVcsaUJBQWlCLENBQUM7SUFDNUMsZ0NBQWUsR0FBVyxpQkFBaUIsQ0FBQztJQUNuRSxNQUFNO0lBQ2lCLDZCQUFZLEdBQVcsY0FBYyxDQUFDO0lBQ3RDLDZCQUFZLEdBQVcsY0FBYyxDQUFDO0lBQzdELE1BQU07SUFDaUIsbUNBQWtCLEdBQVcsb0JBQW9CLENBQUM7SUFDbEQsbUNBQWtCLEdBQVcsb0JBQW9CLENBQUM7SUFDekUsTUFBTTtJQUNpQixpQ0FBZ0IsR0FBVyxrQkFBa0IsQ0FBQztJQUM5QyxpQ0FBZ0IsR0FBVyxrQkFBa0IsQ0FBQztJQUNyRSxPQUFPO0lBQ2dCLGtDQUFpQixHQUFXLG1CQUFtQixDQUFDO0lBQ2hELG9DQUFtQixHQUFXLHFCQUFxQixDQUFDO0lBRTNFLE9BQU87SUFDZ0IsNkJBQVksR0FBVyxhQUFhLENBQUM7SUFDckMsNkJBQVksR0FBVyxhQUFhLENBQUM7SUFDNUQsNkJBQTZCO0lBQ04sbUNBQWtCLEdBQVcsb0JBQW9CLENBQUM7SUFDbEQsbUNBQWtCLEdBQVcsb0JBQW9CLENBQUM7SUFFekUsVUFBVTtJQUNhLHdDQUF1QixHQUFHLHlCQUF5QixDQUFDO0lBQ3BELHdDQUF1QixHQUFHLHlCQUF5QixDQUFDO0lBQ3BELG1DQUFrQixHQUFHLG9CQUFvQixDQUFDO0lBQzFDLG1DQUFrQixHQUFHLG9CQUFvQixDQUFDO0lBQzFDLDJCQUFVLEdBQUcsWUFBWSxDQUFDO0lBRWpELE1BQU07SUFDaUIsK0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztJQUMxQywrQkFBYyxHQUFXLGdCQUFnQixDQUFDO0lBQzFDLGtDQUFpQixHQUFXLG1CQUFtQixDQUFDO0lBQ2hELGtDQUFpQixHQUFXLG1CQUFtQixDQUFDO0lBQ2hELHVDQUFzQixHQUFXLHdCQUF3QixDQUFDLENBQUMsTUFBTTtJQUN4RixRQUFRO0lBQ2UsK0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztJQUMxQywrQkFBYyxHQUFXLGdCQUFnQixDQUFDO0lBRWpFLE1BQU07SUFDaUIsOEJBQWEsR0FBVyxlQUFlLENBQUM7SUFDL0QsTUFBTTtJQUNpQixvQ0FBbUIsR0FBVyxxQkFBcUIsQ0FBQztJQUNwRCxvQ0FBbUIsR0FBVyxxQkFBcUIsQ0FBQztJQUUzRSxRQUFRO0lBQ2UsOEJBQWEsR0FBVyxlQUFlLENBQUM7SUFDeEMsOEJBQWEsR0FBVyxlQUFlLENBQUM7SUFDeEMsb0NBQW1CLEdBQVcscUJBQXFCLENBQUM7SUFDcEQsb0NBQW1CLEdBQVcscUJBQXFCLENBQUM7SUFDcEQsZ0NBQWUsR0FBVyxpQkFBaUIsQ0FBQztJQUVuRSxJQUFJO0lBQ21CLCtCQUFjLEdBQVcsZ0JBQWdCLENBQUE7SUFDekMsa0NBQWlCLEdBQVcsbUJBQW1CLENBQUEsQ0FBQyxRQUFRO0lBRS9FLGdEQUFnRDtJQUN6QixnQ0FBZSxHQUFXLGlCQUFpQixDQUFDO0lBQzVDLHFDQUFvQixHQUFXLHNCQUFzQixDQUFDO0lBQ3RELHNDQUFxQixHQUFXLHVCQUF1QixDQUFDO0lBQ3hELHlDQUF3QixHQUFXLDBCQUEwQixDQUFDO0lBQzlELDBDQUF5QixHQUFXLGtCQUFrQixDQUFDO0lBQ3ZELGtDQUFpQixHQUFXLG1CQUFtQixDQUFDO0lBQ2hELDJDQUEwQixHQUFXLDRCQUE0QixDQUFDLENBQVEsU0FBUztJQUNuRiw0Q0FBMkIsR0FBVyw2QkFBNkIsQ0FBQztJQUNwRSwrQ0FBOEIsR0FBVyxnQ0FBZ0MsQ0FBQyxDQUFRLE1BQU07SUFDeEYsZ0RBQStCLEdBQVcsaUNBQWlDLENBQUM7SUFDNUUsK0NBQThCLEdBQVcsZ0NBQWdDLENBQUMsQ0FBUSxPQUFPO0lBQ3pGLGlDQUFnQixHQUFXLGtCQUFrQixDQUFDLENBQWdCLFFBQVE7SUFDdEUsa0NBQWlCLEdBQVcsbUJBQW1CLENBQUM7SUFDaEQscUNBQW9CLEdBQVcsc0JBQXNCLENBQUMsQ0FBUSxRQUFRO0lBQ3RFLHNDQUFxQixHQUFXLHVCQUF1QixDQUFDO0lBQ3hELHlDQUF3QixHQUFXLDBCQUEwQixDQUFDLENBQUUsU0FBUztJQUN6RSwyQkFBVSxHQUFXLFlBQVksQ0FBQyxDQUFBLEtBQUs7SUFDdkMsa0NBQWlCLEdBQVcsbUJBQW1CLENBQUMsQ0FBQSxLQUFLO0lBQ3JELHlCQUFRLEdBQVcsVUFBVSxDQUFDLENBQUEsS0FBSztJQUNuQyw2QkFBWSxHQUFXLGNBQWMsQ0FBQyxDQUFBLEtBQUs7SUFDM0MsNkJBQVksR0FBVyxjQUFjLENBQUEsQ0FBQSxJQUFJO0lBQ3pDLDBCQUFTLEdBQVcsV0FBVyxDQUFBLENBQUEsSUFBSTtJQUNuQyx5QkFBUSxHQUFXLFVBQVUsQ0FBQSxDQUFBLE1BQU07SUFFMUQsd0RBQXdEO0lBQ2pDLCtCQUFjLEdBQVcsZ0JBQWdCLENBQUM7SUFDMUMsaUNBQWdCLEdBQVcsa0JBQWtCLENBQUM7SUFDOUMsaUNBQWdCLEdBQVcsa0JBQWtCLENBQUM7SUFDOUMsNEJBQVcsR0FBVyxpQkFBaUIsQ0FBQztJQUN4QyxnQ0FBZSxHQUFXLGlCQUFpQixDQUFDO0lBRXZFLHVCQUFDO0NBbkdELEFBbUdDLElBQUE7a0JBbkdvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsTm90aWZpY2F0aW9uIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RBUlRfVVA6IHN0cmluZyA9IFwic3RhcnRVcFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTVEFSVF9JTklUOiBzdHJpbmcgPSBcIlNUQVJUX0lOSVRcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEhBTExfUVVJVDogc3RyaW5nID0gXCJIQUxMX1FVSVRcIjsgICAgICAvL+mAgOWHuuWkp+WOhVxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHQU1FX1FVSVQ6IHN0cmluZyA9IFwiR0FNRV9RVUlUXCI7ICAgICAgLy/pgIDlh7rmuLjmiI9cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFTE9BRF9TT0NLRVQ6IHN0cmluZyA9IFwiUkVMT0FEX1NPQ0tFVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVUF9EQVRFX1ZFUlNJT046IHN0cmluZyA9IFwiVVBfREFURV9WRVJTSU9OXCI7XHJcblxyXG4gICAgLy/nlKjmiLfljY/orq5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVNFUl9BR1JFRV9TSE9XOiBzdHJpbmcgPSBcIlVTRVJfQUdSRUVfU0hPV1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVU0VSX0FHUkVFX0hJREU6IHN0cmluZyA9IFwiVVNFUl9BR1JFRV9ISURFXCI7XHJcbiAgICAvL+aJvuWbnuWvhueggVxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHRVRfUFdEX1NIT1c6IHN0cmluZyA9IFwiR0VUX1BXRF9TSE9XXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdFVF9QV0RfSElERTogc3RyaW5nID0gXCJHRVRfUFdEX0hJREVcIjtcclxuICAgIC8v6LSm5Y+355m75b2VXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFDQ09VTlRfTE9HSU5fU0hPVzogc3RyaW5nID0gXCJBQ0NPVU5UX0xPR0lOX1NIT1dcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQUNDT1VOVF9MT0dJTl9ISURFOiBzdHJpbmcgPSBcIkFDQ09VTlRfTE9HSU5fSElERVwiO1xyXG4gICAgLy/nlLXor53nmbvlvZVcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEhPTkVfTE9HSU5fU0hPVzogc3RyaW5nID0gXCJQSE9ORV9MT0dJTl9TSE9XXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBIT05FX0xPR0lOX0hJREU6IHN0cmluZyA9IFwiUEhPTkVfTE9HSU5fSElERVwiO1xyXG4gICAgLy8g57uR5a6a55m75b2VXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBIT05FX0JJTkRfV0VDSEFUOiBzdHJpbmcgPSBcIlBIT05FX0JJTkRfV0VDSEFUXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFDQ09VTlRfQklORF9XRUNIQVQ6IHN0cmluZyA9IFwiQUNDT1VOVF9CSU5EX1dFQ0hBVFwiO1xyXG5cclxuICAgIC8v5Yqg6L296L+b5bqm5p2hXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExPQURJTkdfU0hPVzogc3RyaW5nID0gXCJsb2FkaW5nU2hvd1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMT0FESU5HX0hJREU6IHN0cmluZyA9IFwibG9hZGluZ0hpZGVcIjtcclxuICAgIC8vc21hbGxMb2FkaW4g5Li76KaB55So5LqOaHR0cOivt+axguaXtuWAmSDplIHlsY9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU01BTExfTE9BRElOR19TSE9XOiBzdHJpbmcgPSBcIlNNQUxMX0xPQURJTkdfU0hPV1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTTUFMTF9MT0FESU5HX0hJREU6IHN0cmluZyA9IFwiU01BTExfTE9BRElOR19ISURFXCI7XHJcblxyXG4gICAgLy/lpKfljoXliY3nmoTliqDovb3nlYzpnaJcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTE9BRElOR19MQVlFUl9TSE9XX0JJTkQgPSBcIkxPQURJTkdfTEFZRVJfU0hPV19CSU5EXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExPQURJTkdfTEFZRVJfSElERV9CSU5EID0gXCJMT0FESU5HX0xBWUVSX0hJREVfQklORFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMT0FESU5HX0xBWUVSX1NIT1cgPSBcIkxPQURJTkdfTEFZRVJfU0hPV1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMT0FESU5HX0xBWUVSX0hJREUgPSBcIkxPQURJTkdfTEFZRVJfSElERVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTVEFSVF9QSU5HID0gXCJTVEFSVF9QSU5HXCI7XHJcblxyXG4gICAgLy/muLjmiI/lpKfljoVcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUFJTkxBWUVSX1NIT1c6IHN0cmluZyA9IFwiTUFJTkxBWUVSX1NIT1dcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUFJTkxBWUVSX0hJREU6IHN0cmluZyA9IFwiTUFJTkxBWUVSX0hJREVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUFJTkxBWUVSX1dFQlZJRVc6IHN0cmluZyA9IFwiTUFJTkxBWUVSX1dFQlZJRVdcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUlBTl9SRVRVUk5fTE9CQlk6IHN0cmluZyA9IFwiTUlBTl9SRVRVUk5fTE9CQllcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR09fTE9CQllfRlJFU0hfQkFMQU5DRTogc3RyaW5nID0gXCJHT19MT0JCWV9GUkVTSF9CQUxBTkNFXCI7IC8v5Yi35paw5L2Z6aKdXHJcbiAgICAvL+a4uOaIj+a2iOaBr+eVjOmdolxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBORVdTX1ZJRVdfU0hPVzogc3RyaW5nID0gXCJORVdTX1ZJRVdfU0hPV1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBORVdTX1ZJRVdfSElERTogc3RyaW5nID0gXCJORVdTX1ZJRVdfSElERVwiO1xyXG5cclxuICAgIC8vIOi3kemprOeBr1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBNQVJRVUVFX0xPQkJZOiBzdHJpbmcgPSBcIk1BUlFVRUVfTE9CQllcIjtcclxuICAgIC8v5omL5py657uR5a6aXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1PQkxJTEVfVkVSSUZZX1NIT1c6IHN0cmluZyA9IFwiTU9CTElMRV9WRVJJRllfU0hPV1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBNT0JMSUxFX1ZFUklGWV9ISURFOiBzdHJpbmcgPSBcIk1PQkxJTEVfVkVSSUZZX0hJREVcIjtcclxuXHJcbiAgICAvL+eUqOaIt+S/oeaBr+mdouadv1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVU0VSSU5GT19TSE9XOiBzdHJpbmcgPSBcIlVTRVJJTkZPX1NIT1dcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVNFUklORk9fSElERTogc3RyaW5nID0gXCJVU0VSSU5GT19ISURFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVTRVJJTkZPX09USEVSX1NIT1c6IHN0cmluZyA9IFwiVVNFUklORk9fT1RIRVJfU0hPV1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVU0VSSU5GT19PVEhFUl9ISURFOiBzdHJpbmcgPSBcIlVTRVJJTkZPX09USEVSX0hJREVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVNFUklORk9fVVBEQVRFOiBzdHJpbmcgPSBcIlVTRVJJTkZPX1VQREFURVwiO1xyXG4gICAgXHJcbiAgICAvL+mBrue9qVxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDUkVBVEVST09NTUFTSzogc3RyaW5nID0gXCJDUkVBVEVST09NTUFTS1wiXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEhJREVBTExwb3B1cExheWVyOiBzdHJpbmcgPSBcIkhJREVBTExwb3B1cExheWVyXCIgLy/muIXpmaTmiYDmnInlvLnnqpdcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT0gIGh0dHAgID09PT09PT09PT09PT09PT1cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTE9HSU5fQllfV0VDSEFUOiBzdHJpbmcgPSBcIkxPR0lOX0JZX1dFQ0hBVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMT0dJTl9CWV9URUxfUkVRVUVTVDogc3RyaW5nID0gXCJMT0dJTl9CWV9URUxfUkVRVUVTVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMT0dJTl9CWV9URUxfUkVTUE9OU0U6IHN0cmluZyA9IFwiTE9HSU5fQllfVEVMX1JFU1BPTlNFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExPR0lOX0JZX0FDQ09VTlRfUkVRVUVTVDogc3RyaW5nID0gXCJMT0dJTl9CWV9BQ0NPVU5UX1JFUVVFU1RcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTE9HSU5fQllfQUNDT1VOVF9SRVNQT05TRTogc3RyaW5nID0gXCJMT0dJTl9CWV9BQ0NPVU5UXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExPR0lOX0NIRUNLX1RPS0VOOiBzdHJpbmcgPSBcIkxPR0lOX0NIRUNLX1RPS0VOXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExPR0lOX1ZFUklGWV9UT0tFTl9SRVFVRVNUOiBzdHJpbmcgPSBcIkxPR0lOX1ZFUklGWV9UT0tFTl9SRVFVRVNUXCI7ICAgICAgICAvL+agoemqjGtva2VuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExPR0lOX1ZFUklGWV9UT0tFTl9SRVNQT05TRTogc3RyaW5nID0gXCJMT0dJTl9WRVJJRllfVE9LRU5fUkVTUE9OU0VcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTE9HSU5fVEVMX1JFVFJJRVZFX1BXRF9SRVFVRVNUOiBzdHJpbmcgPSBcIkxPR0lOX1RFTF9SRVRSSUVWRV9QV0RfUkVRVUVTVFwiOyAgICAgICAgLy/ph43nva7lr4bnoIFcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTE9HSU5fVEVMX1JFVFJJRVZFX1BXRF9SRVNQT05TRTogc3RyaW5nID0gXCJMT0dJTl9URUxfUkVUUklFVkVfUFdEX1JFU1BPTlNFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExPR0lOX1NFTkRfVkVSSUZZX0NPREVfUkVRVUVTVDogc3RyaW5nID0gXCJMT0dJTl9TRU5EX1ZFUklGWV9DT0RFX1JFUVVFU1RcIjsgICAgICAgIC8v5Y+R6YCB6aqM6K+B56CBXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJJTkRfVEVMX1JFUVVFU1Q6IHN0cmluZyA9IFwiQklORF9URUxfUkVRVUVTVFwiOyAgICAgICAgICAgICAgICAvL+aJi+acuue7keWumuW+ruS/oVxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCSU5EX1RFTF9SRVNQT05TRTogc3RyaW5nID0gXCJCSU5EX1RFTF9SRVNQT05TRVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCSU5EX0FDQ09VTlRfUkVRVUVTVDogc3RyaW5nID0gXCJCSU5EX0FDQ09VTlRfUkVRVUVTVFwiOyAgICAgICAgLy/otKblj7fnu5Hlrprlvq7kv6FcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQklORF9BQ0NPVU5UX1JFU1BPTlNFOiBzdHJpbmcgPSBcIkJJTkRfQUNDT1VOVF9SRVNQT05TRVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMT0dJTl9WRVJJRllfVE9LRU5fQ0xFQVI6IHN0cmluZyA9IFwiTE9HSU5fVkVSSUZZX1RPS0VOX0NMRUFSXCI7ICAvL+a4heeQhlRPS0VOXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdFVF9XRUJVUkw6IHN0cmluZyA9IFwiR0VUX1dFQlVSTFwiOy8v6JC95Zyw6aG1XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdFVF9XRUJVUkxfUkVCT05TOiBzdHJpbmcgPSBcIkdFVF9XRUJVUkxfUkVCT05TXCI7Ly/okL3lnLDpobVcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR0VUX0tFRlU6IHN0cmluZyA9IFwiR0VUX0tFRlVcIjsvL+iQveWcsOmhtVxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHRVRfdGVuYW50SWQ6IHN0cmluZyA9IFwiR0VUX3RlbmFudElkXCI7Ly/okL3lnLDpobVcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR0FNRV9WRVJTSU9OOiBzdHJpbmcgPSBcIkdBTUVfVkVSU0lPTlwiLy/niYjmnKxcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVE9LRUVSUk9SOiBzdHJpbmcgPSBcIlRPS0VFUlJPUlwiLy/niYjmnKxcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR0FNRUxJU1Q6IHN0cmluZyA9IFwiR0FNRUxJU1RcIi8v5ri45oiP6YWN572uXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS1zb2NrZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU09DS0VUX0NPTlRFTlQ6IHN0cmluZyA9IFwiU09DS0VUX0NPTlRFTlRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU09DS0VUX1NfTUVTU0FHRTogc3RyaW5nID0gXCJTT0NLRVRfU19NRVNTQUdFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNPQ0tFVF9SX01FU1NBR0U6IHN0cmluZyA9IFwiU09DS0VUX1JfTUVTU0FHRVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTT0NLRVRfT1BFTjogc3RyaW5nID0gXCJ3ZWJDbGllbnRPbm9wZW5cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU09DS0VUX0lOVEVSVkFMOiBzdHJpbmcgPSBcIlNPQ0tFVF9JTlRFUlZBTFwiO1xyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/GameSocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2110abyDpGBas70Wae8GWX', 'GameSocket');
// Common/src/GameSocket.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSocket = void 0;
var DznSocket_1 = require("./DznSocket");
// 这个类主要目的是给发送接收设置缓存队列 （附加功能 网络延迟的获取）
var GameSocket = /** @class */ (function (_super) {
    __extends(GameSocket, _super);
    function GameSocket() {
        var _this = _super.call(this) || this;
        _this.pUrl = null;
        _this.pWebClient = null;
        _this.pSendData = []; //发送缓冲
        _this.pRecvData = [];
        _this.pSendTime = 0;
        _this.pPing = 0;
        _this.pUrl = null;
        _this.pWebClient = null;
        _this.pSendData = []; //发送缓冲
        _this.pRecvData = [];
        return _this;
        // 开启定时器
        // cc.director.getScheduler().schedule(this.OnMissionUpdate, this, 0, cc.macro.REPEAT_FOREVER, 0, false);
    }
    GameSocket.prototype.getPing = function () {
        return this.pPing;
    };
    GameSocket.prototype.OnConnect = function (url) {
        if (this.pWebClient) {
            console.warn("WebSocket is already create");
            return;
        }
        this.resetData();
        this.pSendTime = 0;
        this.pPing = 0;
        this.pUrl = url;
        this.pWebClient = new WebSocket(url);
        this.pWebClient.binaryType = "arraybuffer";
        console.warn(cc.js.formatStr("WebSocket OnConnect  %s", url));
        var self = this;
        this.pWebClient.onopen = function (ev) {
            console.warn(cc.js.formatStr("WebSocket onopen  %s", url));
            self.flushSend();
            self.pRecvData.push("webClientOnopen");
        };
        this.pWebClient.onmessage = function (msg) {
            self.onRecv(msg);
        };
        this.pWebClient.onerror = function (evt) {
            self.pWebClient = null;
            // console.warn(cc.js.formatStr("WebSocket onerror  %s", url));
            self.pRecvData.push("webClientOnerror");
        };
        this.pWebClient.onclose = function (evt) {
            self.pWebClient = null;
            console.warn(cc.js.formatStr("WebSocket onclose  %s", url));
            self.pRecvData.push("webClientOnclose");
        };
    };
    GameSocket.prototype.getConnect = function () {
        if (this.pWebClient != null &&
            this.pWebClient.readyState == WebSocket.OPEN) {
            return true;
        }
        return false;
    };
    GameSocket.prototype.sendMessage = function (msg) {
        this.pSendData.push(msg);
    };
    ;
    //接收数据
    GameSocket.prototype.onRecv = function (msg) {
        this.pRecvData.push(msg.data);
        if (this.pSendTime != 0) {
            this.pPing = new Date().getTime() - this.pSendTime;
            this.pSendTime = 0;
        }
    };
    // 发送数据
    GameSocket.prototype.flushSend = function () {
        if (this.getConnect()) {
            var data = this.pSendData.shift();
            if (data) {
                this.pWebClient.send(data);
                this.pSendTime = new Date().getTime();
            }
        }
    };
    GameSocket.prototype.flushRecv = function () { };
    GameSocket.prototype.OnMissionUpdate = function () {
        this.flushSend();
        this.flushRecv();
    };
    GameSocket.prototype.resetData = function () {
        this.pSendData = [];
        this.pRecvData = [];
    };
    GameSocket.prototype.closeSocket = function () {
        console.warn("client closeSocket ping pong超时断开连接", this.pWebClient);
        if (this.pWebClient) { //
            this.pWebClient.close();
        }
        else {
            DznSocket_1.DznSocket.OnConnect(DznSocket_1.DznSocket.pUrl);
        }
    };
    return GameSocket;
}(cc.EventTarget));
exports.GameSocket = GameSocket;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXEdhbWVTb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUV4QyxxQ0FBcUM7QUFDckM7SUFBZ0MsOEJBQWM7SUFTMUM7UUFBQSxZQUNJLGlCQUFPLFNBUVY7UUFoQkQsVUFBSSxHQUFXLElBQUksQ0FBQztRQUNwQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUM3QixlQUFTLEdBQVUsRUFBRSxDQUFDLENBQUMsTUFBTTtRQUM3QixlQUFTLEdBQVUsRUFBRSxDQUFDO1FBQ3RCLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBSU4sS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztRQUVwQixRQUFRO1FBQ1IseUdBQXlHO0lBQzdHLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsR0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzVDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFD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akIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7YUFBSTtZQUNELHFCQUFTLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQWxIQSxBQWtIQyxDQWxIK0IsRUFBRSxDQUFDLFdBQVcsR0FrSDdDO0FBbEhZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHpuU29ja2V0IH0gZnJvbSBcIi4vRHpuU29ja2V0XCI7XHJcblxyXG4vLyDov5nkuKrnsbvkuLvopoHnm67nmoTmmK/nu5nlj5HpgIHmjqXmlLborr7nva7nvJPlrZjpmJ/liJcg77yI6ZmE5Yqg5Yqf6IO9IOe9kee7nOW7tui/n+eahOiOt+WPlu+8iVxyXG5leHBvcnQgY2xhc3MgR2FtZVNvY2tldCBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0IHtcclxuXHJcbiAgICBwVXJsOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcFdlYkNsaWVudDogV2ViU29ja2V0ID0gbnVsbDtcclxuICAgIHBTZW5kRGF0YTogYW55W10gPSBbXTsgLy/lj5HpgIHnvJPlhrJcclxuICAgIHBSZWN2RGF0YTogYW55W10gPSBbXTtcclxuICAgIHBTZW5kVGltZSA9IDA7XHJcbiAgICBwUGluZyA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBVcmwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucFdlYkNsaWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wU2VuZERhdGEgPSBbXTsgLy/lj5HpgIHnvJPlhrJcclxuICAgICAgICB0aGlzLnBSZWN2RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAvLyDlvIDlkK/lrprml7blmahcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zY2hlZHVsZSh0aGlzLk9uTWlzc2lvblVwZGF0ZSwgdGhpcywgMCwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDAsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBQaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIE9uQ29ubmVjdCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnBXZWJDbGllbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2ViU29ja2V0IGlzIGFscmVhZHkgY3JlYXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5wU2VuZFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucFBpbmcgPSAwO1xyXG4gICAgICAgIHRoaXMucFVybCA9IHVybDtcclxuICAgICAgICB0aGlzLnBXZWJDbGllbnQgPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcbiAgICAgICAgdGhpcy5wV2ViQ2xpZW50LmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGNjLmpzLmZvcm1hdFN0cihcIldlYlNvY2tldCBPbkNvbm5lY3QgICVzXCIsIHVybCkpO1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wV2ViQ2xpZW50Lm9ub3BlbiA9IChldjogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGNjLmpzLmZvcm1hdFN0cihcIldlYlNvY2tldCBvbm9wZW4gICVzXCIsIHVybCkpO1xyXG4gICAgICAgICAgICBzZWxmLmZsdXNoU2VuZCgpO1xyXG4gICAgICAgICAgICBzZWxmLnBSZWN2RGF0YS5wdXNoKFwid2ViQ2xpZW50T25vcGVuXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucFdlYkNsaWVudC5vbm1lc3NhZ2UgPSAobXNnOiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5vblJlY3YobXNnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnBXZWJDbGllbnQub25lcnJvciA9IChldnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYucFdlYkNsaWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihjYy5qcy5mb3JtYXRTdHIoXCJXZWJTb2NrZXQgb25lcnJvciAgJXNcIiwgdXJsKSk7XHJcbiAgICAgICAgICAgIHNlbGYucFJlY3ZEYXRhLnB1c2goXCJ3ZWJDbGllbnRPbmVycm9yXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucFdlYkNsaWVudC5vbmNsb3NlID0gKGV2dDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5wV2ViQ2xpZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGNjLmpzLmZvcm1hdFN0cihcIldlYlNvY2tldCBvbmNsb3NlICAlc1wiLCB1cmwpKTtcclxuICAgICAgICAgICAgc2VsZi5wUmVjdkRhdGEucHVzaChcIndlYkNsaWVudE9uY2xvc2VcIik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25uZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBXZWJDbGllbnQgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0aGlzLnBXZWJDbGllbnQucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuT1BFTikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRNZXNzYWdlKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wU2VuZERhdGEucHVzaChtc2cpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL+aOpeaUtuaVsOaNrlxyXG4gICAgb25SZWN2KG1zZzogTWVzc2FnZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wUmVjdkRhdGEucHVzaChtc2cuZGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMucFNlbmRUaW1lICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wUGluZyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5wU2VuZFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMucFNlbmRUaW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+R6YCB5pWw5o2uXHJcbiAgICBmbHVzaFNlbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29ubmVjdCgpKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5wU2VuZERhdGEuc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucFdlYkNsaWVudC5zZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wU2VuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmbHVzaFJlY3YoKSB7IH1cclxuXHJcbiAgICBPbk1pc3Npb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5mbHVzaFNlbmQoKTtcclxuICAgICAgICB0aGlzLmZsdXNoUmVjdigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLnBTZW5kRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMucFJlY3ZEYXRhID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VTb2NrZXQoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiY2xpZW50IGNsb3NlU29ja2V0IHBpbmcgcG9uZ+i2heaXtuaWreW8gOi/nuaOpVwiLCB0aGlzLnBXZWJDbGllbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBXZWJDbGllbnQpIHsvL1xyXG4gICAgICAgICAgICB0aGlzLnBXZWJDbGllbnQuY2xvc2UoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgRHpuU29ja2V0Lk9uQ29ubmVjdChEem5Tb2NrZXQucFVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/hall/utils/HallAlert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01b78Ei+dNL6IZ8mGPGKUxs', 'HallAlert');
// Script/hall/utils/HallAlert.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LAlert_1 = require("../../lightUI/components/alert/LAlert");
var LightUI_1 = require("../../lightUI/LightUI");
var HallAlert = /** @class */ (function () {
    function HallAlert() {
    }
    //最小的2秒自动关闭的提示条
    HallAlert.SmallAlert = function (msg) {
        if (msg == null)
            return;
        LAlert_1.default.show(msg, null, "hall/common/PopMsg.prefab", null, null, null, 2000);
    };
    //只有确定按钮的提示框
    HallAlert.AlertOk = function (msg, closeHandler, data) {
        if (data === void 0) { data = null; }
        LAlert_1.default.show(msg, null, "hall/common/DialogOk.prefab", LightUI_1.default.layerManager.popupLayer, closeHandler, data);
    };
    return HallAlert;
}());
exports.default = HallAlert;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxoYWxsXFx1dGlsc1xcSGFsbEFsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELGlEQUE0QztBQUU1QztJQUFBO0lBV0EsQ0FBQztJQVZHLGVBQWU7SUFDRCxvQkFBVSxHQUF4QixVQUF5QixHQUFVO1FBQy9CLElBQUcsR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsMkJBQTJCLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELFlBQVk7SUFDRSxpQkFBTyxHQUFyQixVQUFzQixHQUFVLEVBQUMsWUFBcUIsRUFBQyxJQUFlO1FBQWYscUJBQUEsRUFBQSxXQUFlO1FBQ2xFLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsNkJBQTZCLEVBQUMsaUJBQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMQWxlcnQgZnJvbSBcIi4uLy4uL2xpZ2h0VUkvY29tcG9uZW50cy9hbGVydC9MQWxlcnRcIjtcclxuaW1wb3J0IExpZ2h0VUkgZnJvbSBcIi4uLy4uL2xpZ2h0VUkvTGlnaHRVSVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbEFsZXJ0e1xyXG4gICAgLy/mnIDlsI/nmoQy56eS6Ieq5Yqo5YWz6Zet55qE5o+Q56S65p2hXHJcbiAgICBwdWJsaWMgc3RhdGljIFNtYWxsQWxlcnQobXNnOnN0cmluZyl7XHJcbiAgICAgICAgaWYobXNnID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBMQWxlcnQuc2hvdyhtc2csbnVsbCxcImhhbGwvY29tbW9uL1BvcE1zZy5wcmVmYWJcIixudWxsLG51bGwsbnVsbCwyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WPquacieehruWumuaMiemSrueahOaPkOekuuahhlxyXG4gICAgcHVibGljIHN0YXRpYyBBbGVydE9rKG1zZzpzdHJpbmcsY2xvc2VIYW5kbGVyOkZ1bmN0aW9uLGRhdGE6YW55ID0gbnVsbCl7XHJcbiAgICAgICAgTEFsZXJ0LnNob3cobXNnLG51bGwsXCJoYWxsL2NvbW1vbi9EaWFsb2dPay5wcmVmYWJcIixMaWdodFVJLmxheWVyTWFuYWdlci5wb3B1cExheWVyLGNsb3NlSGFuZGxlcixkYXRhKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/StandardButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6746VnK9BJmKmFXQGspSSd', 'StandardButton');
// Common/src/StandardButton.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import AudioManager from "../utils/AudioManager";
var AudioManage_1 = require("./AudioManage");
var AudioConfig_1 = require("./AudioConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
/** 标准按钮拓展组件 */
var StandardButton = /** @class */ (function (_super) {
    __extends(StandardButton, _super);
    function StandardButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scaleTransition = true;
        _this.clickSound = true;
        _this.clickInvalid = true;
        return _this;
    }
    StandardButton.prototype.onLoad = function () {
        var _this = this;
        var btn = this.btn = this.getComponent(cc.Button);
        if (this.scaleTransition) {
            btn.transition = cc.Button.Transition.SCALE;
            btn.zoomScale = 0.9;
        }
        if (this.clickSound || this.clickInvalid) {
            var _onTouchEnded_1 = btn['_onTouchEnded'].bind(btn);
            var touchEnable_1 = true;
            btn['_onTouchEnded'] = function (e) {
                if (_this.clickInvalid) {
                    if (!touchEnable_1)
                        return cc.log('clickInvalid');
                    touchEnable_1 = false;
                    _this.scheduleOnce(function () {
                        touchEnable_1 = true;
                    }, 0.3);
                }
                if (_this.clickSound) {
                    // cc.warn('clickSound');
                    // AudioManager.playClickEffect();
                    AudioManage_1.AudioManage.playEffect(AudioConfig_1.default.effect_button_click);
                    // AudioManager.playEffectAsyncBySrc(bcnnAudio.vRedblackStar);
                }
                _onTouchEnded_1(e);
            };
        }
    };
    __decorate([
        property({
            tooltip: '增加标准点击缩放效果'
        })
    ], StandardButton.prototype, "scaleTransition", void 0);
    __decorate([
        property({
            tooltip: '增加点击音效'
        })
    ], StandardButton.prototype, "clickSound", void 0);
    __decorate([
        property({
            tooltip: '防止短时间内点击多次，增加点击后短暂的按钮无效'
        })
    ], StandardButton.prototype, "clickInvalid", void 0);
    StandardButton = __decorate([
        ccclass,
        menu('Custom/StandardButton'),
        requireComponent(cc.Button)
    ], StandardButton);
    return StandardButton;
}(cc.Component));
exports.default = StandardButton;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXFN0YW5kYXJkQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFvRDtBQUNwRCw2Q0FBMkM7QUFDM0MsNkNBQXVDO0FBQ2pDLElBQUEsS0FBZ0QsRUFBRSxDQUFDLFVBQVUsRUFBM0QsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBRXBFLGVBQWU7QUFJZjtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWlEQztRQTVDRyxxQkFBZSxHQUFHLElBQUksQ0FBQztRQUt2QixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUtsQixrQkFBWSxHQUFHLElBQUksQ0FBQzs7SUFrQ3hCLENBQUM7SUE5QkcsK0JBQU0sR0FBTjtRQUFBLGlCQTRCQztRQTNCRyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUM1QyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RDLElBQU0sZUFBYSxHQUFhLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0QsSUFBSSxhQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxVQUFDLENBQUM7Z0JBQ3JCLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGFBQVc7d0JBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNoRCxhQUFXLEdBQUcsS0FBSyxDQUFDO29CQUNwQixLQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNkLGFBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtpQkFDVjtnQkFDRCxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2pCLHlCQUF5QjtvQkFDekIsa0NBQWtDO29CQUNsQyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxxQkFBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ3hELDhEQUE4RDtpQkFDakU7Z0JBQ0QsZUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQTtTQUNKO0lBRUwsQ0FBQztJQTFDRDtRQUhDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxZQUFZO1NBQ3hCLENBQUM7MkRBQ3FCO0lBS3ZCO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLFFBQVE7U0FDcEIsQ0FBQztzREFDZ0I7SUFLbEI7UUFIQyxRQUFRLENBQUM7WUFDTixPQUFPLEVBQUUseUJBQXlCO1NBQ3JDLENBQUM7d0RBQ2tCO0lBZkgsY0FBYztRQUhsQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQzdCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7T0FDUCxjQUFjLENBaURsQztJQUFELHFCQUFDO0NBakRELEFBaURDLENBakQyQyxFQUFFLENBQUMsU0FBUyxHQWlEdkQ7a0JBakRvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vdXRpbHMvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VcIlxyXG5pbXBvcnQgYXVkaW9Db25maWcgZnJvbSBcIi4vQXVkaW9Db25maWdcIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqIOagh+WHhuaMiemSruaLk+Wxlee7hOS7tiAqL1xyXG5AY2NjbGFzc1xyXG5AbWVudSgnQ3VzdG9tL1N0YW5kYXJkQnV0dG9uJylcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuQnV0dG9uKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFuZGFyZEJ1dHRvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAn5aKe5Yqg5qCH5YeG54K55Ye757yp5pS+5pWI5p6cJ1xyXG4gICAgfSlcclxuICAgIHNjYWxlVHJhbnNpdGlvbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAn5aKe5Yqg54K55Ye76Z+z5pWIJ1xyXG4gICAgfSlcclxuICAgIGNsaWNrU291bmQgPSB0cnVlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogJ+mYsuatouefreaXtumXtOWGheeCueWHu+Wkmuasoe+8jOWinuWKoOeCueWHu+WQjuefreaagueahOaMiemSruaXoOaViCdcclxuICAgIH0pXHJcbiAgICBjbGlja0ludmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGJ0bjogY2MuQnV0dG9uO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLmJ0biA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NhbGVUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGJ0bi50cmFuc2l0aW9uID0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEU7XHJcbiAgICAgICAgICAgIGJ0bi56b29tU2NhbGUgPSAwLjk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGlja1NvdW5kIHx8IHRoaXMuY2xpY2tJbnZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9vblRvdWNoRW5kZWQ6IEZ1bmN0aW9uID0gYnRuWydfb25Ub3VjaEVuZGVkJ10uYmluZChidG4pO1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hFbmFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBidG5bJ19vblRvdWNoRW5kZWQnXSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGlja0ludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRvdWNoRW5hYmxlKSByZXR1cm4gY2MubG9nKCdjbGlja0ludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaEVuYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrU291bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy53YXJuKCdjbGlja1NvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXVkaW9NYW5hZ2VyLnBsYXlDbGlja0VmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlLnBsYXlFZmZlY3QoYXVkaW9Db25maWcuZWZmZWN0X2J1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3RBc3luY0J5U3JjKGJjbm5BdWRpby52UmVkYmxhY2tTdGFyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF9vblRvdWNoRW5kZWQoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/DznSocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b563e/DO7VOEbP56WC3IBJD', 'DznSocket');
// Common/src/DznSocket.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DznSocket = void 0;
var ServerRoom_1 = require("./ServerRoom");
exports.DznSocket = new ServerRoom_1.ServerRoom("dzn");

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXER6blNvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFFN0IsUUFBQSxTQUFTLEdBQUcsSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyUm9vbSB9IGZyb20gXCIuL1NlcnZlclJvb21cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEem5Tb2NrZXQgPSBuZXcgU2VydmVyUm9vbShcImR6blwiKTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/StandardCloseButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd1f0MMSTNDZJL5cFZVAJIW', 'StandardCloseButton');
// Common/src/StandardCloseButton.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import AudioManager from "../utils/AudioManager";
var AudioManage_1 = require("./AudioManage");
var AudioConfig_1 = require("./AudioConfig");
var DznSocket_1 = require("./DznSocket");
var gameData_1 = require("../../Script/component/gameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
/** 标准按钮拓展组件 */
var StandardCloseButton = /** @class */ (function (_super) {
    __extends(StandardCloseButton, _super);
    function StandardCloseButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scaleTransition = true;
        _this.clickSound = true;
        _this.clickInvalid = true;
        return _this;
    }
    StandardCloseButton.prototype.onLoad = function () {
        var _this = this;
        var btn = this.btn = this.getComponent(cc.Button);
        if (this.scaleTransition) {
            btn.transition = cc.Button.Transition.SCALE;
            btn.zoomScale = 0.9;
        }
        if (this.clickSound || this.clickInvalid) {
            var _onTouchEnded_1 = btn['_onTouchEnded'].bind(btn);
            var touchEnable_1 = true;
            btn['_onTouchEnded'] = function (e) {
                if (_this.clickInvalid) {
                    if (!touchEnable_1)
                        return cc.log('clickInvalid');
                    touchEnable_1 = false;
                    _this.scheduleOnce(function () {
                        touchEnable_1 = true;
                    }, 0.3);
                    //发送返回主页的请求
                    DznSocket_1.DznSocket.emit(gameData_1.gameData.messageFlag.CHANGE_SHOW_LAYER, gameData_1.gameData.SHOW_LAYER_TYPE.MAIN_HOME);
                }
                if (_this.clickSound) {
                    AudioManage_1.AudioManage.playEffect(AudioConfig_1.default.effect_button_click);
                }
                _onTouchEnded_1(e);
            };
        }
    };
    __decorate([
        property({
            tooltip: '增加标准点击缩放效果'
        })
    ], StandardCloseButton.prototype, "scaleTransition", void 0);
    __decorate([
        property({
            tooltip: '增加点击音效'
        })
    ], StandardCloseButton.prototype, "clickSound", void 0);
    __decorate([
        property({
            tooltip: '防止短时间内点击多次，增加点击后短暂的按钮无效'
        })
    ], StandardCloseButton.prototype, "clickInvalid", void 0);
    StandardCloseButton = __decorate([
        ccclass,
        menu('Custom/StandardButton'),
        requireComponent(cc.Button)
    ], StandardCloseButton);
    return StandardCloseButton;
}(cc.Component));
exports.default = StandardCloseButton;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXFN0YW5kYXJkQ2xvc2VCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW9EO0FBQ3BELDZDQUEyQztBQUMzQyw2Q0FBdUM7QUFDdkMseUNBQXVDO0FBQ3ZDLDREQUEwRDtBQUNwRCxJQUFBLEtBQWdELEVBQUUsQ0FBQyxVQUFVLEVBQTNELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUVwRSxlQUFlO0FBSWY7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUFpREM7UUE1Q0cscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFLdkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFLbEIsa0JBQVksR0FBRyxJQUFJLENBQUM7O0lBa0N4QixDQUFDO0lBOUJHLG9DQUFNLEdBQU47UUFBQSxpQkE0QkM7UUEzQkcsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDNUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QyxJQUFNLGVBQWEsR0FBYSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9ELElBQUksYUFBVyxHQUFHLElBQUksQ0FBQztZQUN2QixHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsVUFBQyxDQUFDO2dCQUNyQixJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxhQUFXO3dCQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDaEQsYUFBVyxHQUFHLEtBQUssQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQzt3QkFDZCxhQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7b0JBRVAsV0FBVztvQkFDWCxxQkFBUyxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDOUY7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQix5QkFBVyxDQUFDLFVBQVUsQ0FBQyxxQkFBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7aUJBQzNEO2dCQUNELGVBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUE7U0FDSjtJQUVMLENBQUM7SUExQ0Q7UUFIQyxRQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsWUFBWTtTQUN4QixDQUFDO2dFQUNxQjtJQUt2QjtRQUhDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxRQUFRO1NBQ3BCLENBQUM7MkRBQ2dCO0lBS2xCO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLHlCQUF5QjtTQUNyQyxDQUFDOzZEQUNrQjtJQWZILG1CQUFtQjtRQUh2QyxPQUFPO1FBQ1AsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQzdCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7T0FDUCxtQkFBbUIsQ0FpRHZDO0lBQUQsMEJBQUM7Q0FqREQsQUFpREMsQ0FqRGdELEVBQUUsQ0FBQyxTQUFTLEdBaUQ1RDtrQkFqRG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL3V0aWxzL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBBdWRpb01hbmFnZSB9IGZyb20gJy4vQXVkaW9NYW5hZ2UnXHJcbmltcG9ydCBhdWRpb0NvbmZpZyBmcm9tIFwiLi9BdWRpb0NvbmZpZ1wiXHJcbmltcG9ydCB7IER6blNvY2tldCB9IGZyb20gXCIuL0R6blNvY2tldFwiXHJcbmltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4uLy4uL1NjcmlwdC9jb21wb25lbnQvZ2FtZURhdGFcIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqIOagh+WHhuaMiemSruaLk+Wxlee7hOS7tiAqL1xyXG5AY2NjbGFzc1xyXG5AbWVudSgnQ3VzdG9tL1N0YW5kYXJkQnV0dG9uJylcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuQnV0dG9uKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFuZGFyZENsb3NlQnV0dG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6ICflop7liqDmoIflh4bngrnlh7vnvKnmlL7mlYjmnpwnXHJcbiAgICB9KVxyXG4gICAgc2NhbGVUcmFuc2l0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6ICflop7liqDngrnlh7vpn7PmlYgnXHJcbiAgICB9KVxyXG4gICAgY2xpY2tTb3VuZCA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAn6Ziy5q2i55+t5pe26Ze05YaF54K55Ye75aSa5qyh77yM5aKe5Yqg54K55Ye75ZCO55+t5pqC55qE5oyJ6ZKu5peg5pWIJ1xyXG4gICAgfSlcclxuICAgIGNsaWNrSW52YWxpZCA9IHRydWU7XHJcblxyXG4gICAgYnRuOiBjYy5CdXR0b247XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMuYnRuID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICBpZiAodGhpcy5zY2FsZVRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgYnRuLnRyYW5zaXRpb24gPSBjYy5CdXR0b24uVHJhbnNpdGlvbi5TQ0FMRTtcclxuICAgICAgICAgICAgYnRuLnpvb21TY2FsZSA9IDAuOTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsaWNrU291bmQgfHwgdGhpcy5jbGlja0ludmFsaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgX29uVG91Y2hFbmRlZDogRnVuY3Rpb24gPSBidG5bJ19vblRvdWNoRW5kZWQnXS5iaW5kKGJ0bik7XHJcbiAgICAgICAgICAgIGxldCB0b3VjaEVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0blsnX29uVG91Y2hFbmRlZCddID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrSW52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdG91Y2hFbmFibGUpIHJldHVybiBjYy5sb2coJ2NsaWNrSW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRW5hYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaEVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4zKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WPkemAgei/lOWbnuS4u+mhteeahOivt+axglxyXG4gICAgICAgICAgICAgICAgICAgIER6blNvY2tldC5lbWl0KGdhbWVEYXRhLm1lc3NhZ2VGbGFnLkNIQU5HRV9TSE9XX0xBWUVSLCBnYW1lRGF0YS5TSE9XX0xBWUVSX1RZUEUuTUFJTl9IT01FKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrU291bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBBdWRpb01hbmFnZS5wbGF5RWZmZWN0KGF1ZGlvQ29uZmlnLmVmZmVjdF9idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX29uVG91Y2hFbmRlZChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/AudioManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25ae3ZvzeJOoqpHsJFFyebK', 'AudioManage');
// Common/src/AudioManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioManage = void 0;
var audioManage = /** @class */ (function () {
    function audioManage() {
        this.effectVolume = 1;
        this.musicVolume = 1;
        this.effectIsClose = false;
        this.musicIsClose = false;
    }
    audioManage.prototype.playEffect = function (res, loop, volume) {
        if (loop === void 0) { loop = false; }
        if (this.effectIsClose) {
            return;
        }
        if (this.getEffectVolume() == 0) {
            return;
        }
        if (res instanceof cc.AudioClip) {
            var audioID = cc.audioEngine.playEffect(res, loop);
            return audioID;
        }
        else {
            if (res.substring(0, 4) == "http") {
                cc.assetManager.loadRemote(res, function (error, clip) {
                    if (error) {
                        cc.log(error);
                        return;
                    }
                    cc.audioEngine.playEffect(clip, loop);
                });
            }
            else {
                cc.resources.load(res, cc.AudioClip, function (error, clip) {
                    if (error) {
                        cc.log(error);
                        return;
                    }
                    cc.audioEngine.playEffect(clip, loop);
                });
            }
        }
    };
    audioManage.prototype.playMusic = function (res, loop, volume) {
        if (loop === void 0) { loop = false; }
        if (this.musicIsClose) {
            return;
        }
        if (this.getMusicVolume() == 0) {
            return;
        }
        if (res instanceof cc.AudioClip) {
            var audioID = cc.audioEngine.playMusic(res, loop);
            return audioID;
        }
        else {
            cc.resources.load(res, cc.AudioClip, null, function (error, clip) {
                cc.audioEngine.playMusic(clip, loop);
            });
        }
    };
    audioManage.prototype.getEffectVolume = function () {
        var volume = cc.sys.localStorage.getItem("effectVolume") || 0.5;
        this.effectVolume = parseFloat(volume);
        return this.effectVolume;
    };
    audioManage.prototype.setEffectVolume = function (volume) {
        if (volume == NaN)
            volume = 0.5;
        cc.sys.localStorage.setItem("effectVolume", volume);
        cc.audioEngine.setEffectsVolume(volume);
        this.effectIsClose = volume == 0;
    };
    audioManage.prototype.getMusicVolume = function () {
        var volume = cc.sys.localStorage.getItem("musicVolume") || 0.5;
        this.musicVolume = parseFloat(volume);
        return this.musicVolume;
    };
    audioManage.prototype.setMusicVolume = function (volume) {
        if (volume == NaN)
            volume = 0.5;
        cc.sys.localStorage.setItem("musicVolume", volume);
        cc.audioEngine.setMusicVolume(volume);
        this.musicIsClose = volume == 0;
    };
    return audioManage;
}());
exports.AudioManage = new audioManage();

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXEF1ZGlvTWFuYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFDSSxpQkFBWSxHQUFDLENBQUMsQ0FBQztRQUNmLGdCQUFXLEdBQUMsQ0FBQyxDQUFDO1FBQ2Qsa0JBQWEsR0FBQyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBQyxLQUFLLENBQUM7SUEyRXZCLENBQUM7SUF6RUcsZ0NBQVUsR0FBVixVQUFXLEdBQXlCLEVBQUUsSUFBa0IsRUFBQyxNQUFjO1FBQWpDLHFCQUFBLEVBQUEsWUFBa0I7UUFDcEQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFDO1lBQ25CLE9BQU07U0FDVDtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFFLENBQUMsRUFBQztZQUMxQixPQUFNO1NBQ1Q7UUFDRCxJQUFLLEdBQUcsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFO1lBQzlCLElBQUksT0FBTyxHQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQTtZQUNsRCxPQUFPLE9BQU8sQ0FBQTtTQUNqQjthQUFNO1lBQ0gsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQzlCLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBQyxVQUFDLEtBQUssRUFBQyxJQUFpQjtvQkFDbkQsSUFBSSxLQUFLLEVBQUM7d0JBQ04sRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDYixPQUFNO3FCQUNUO29CQUNELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEMsQ0FBQyxDQUFDLENBQUE7YUFDTDtpQkFBTTtnQkFDSCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FB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clxuICAgIGVmZmVjdFZvbHVtZT0xO1xyXG4gICAgbXVzaWNWb2x1bWU9MTsgXHJcbiAgICBlZmZlY3RJc0Nsb3NlPWZhbHNlOyBcclxuICAgIG11c2ljSXNDbG9zZT1mYWxzZTsgXHJcblxyXG4gICAgcGxheUVmZmVjdChyZXM6Y2MuQXVkaW9DbGlwIHwgc3RyaW5nLCBsb29wOmJvb2xlYW49ZmFsc2Usdm9sdW1lPzpudW1iZXIgKXtcclxuICAgICAgICBpZiAodGhpcy5lZmZlY3RJc0Nsb3NlKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldEVmZmVjdFZvbHVtZSgpPT0wKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggcmVzIGluc3RhbmNlb2YgY2MuQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lEID0gIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QocmVzLGxvb3ApXHJcbiAgICAgICAgICAgIHJldHVybiBhdWRpb0lEXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdWJzdHJpbmcoMCw0KSA9PSBcImh0dHBcIikge1xyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUocmVzLChlcnJvcixjbGlwOmNjLkF1ZGlvQ2xpcCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsbG9vcClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChyZXMsY2MuQXVkaW9DbGlwLChlcnJvcixjbGlwOmNjLkF1ZGlvQ2xpcCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsbG9vcClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheU11c2ljKHJlczpjYy5BdWRpb0NsaXAgfCBzdHJpbmcsIGxvb3A6Ym9vbGVhbj1mYWxzZSx2b2x1bWU/Om51bWJlciApe1xyXG4gICAgICAgIGlmICh0aGlzLm11c2ljSXNDbG9zZSl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXRNdXNpY1ZvbHVtZSgpPT0wKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggcmVzIGluc3RhbmNlb2YgY2MuQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lEID0gIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhyZXMsbG9vcClcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvSURcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChyZXMsY2MuQXVkaW9DbGlwLG51bGwsKGVycm9yLGNsaXA6Y2MuQXVkaW9DbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsbG9vcClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEVmZmVjdFZvbHVtZSgpe1xyXG4gICAgICAgIGxldCB2b2x1bWUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlZmZlY3RWb2x1bWVcIikgfHwgMC41XHJcbiAgICAgICAgdGhpcy5lZmZlY3RWb2x1bWUgPSBwYXJzZUZsb2F0KHZvbHVtZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5lZmZlY3RWb2x1bWVcclxuICAgIH1cclxuXHJcbiAgICBzZXRFZmZlY3RWb2x1bWUodm9sdW1lOm51bWJlcil7XHJcbiAgICAgICAgaWYodm9sdW1lID09IE5hTil2b2x1bWU9MC41O1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVmZmVjdFZvbHVtZVwiLHZvbHVtZSlcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHZvbHVtZSlcclxuICAgICAgICB0aGlzLmVmZmVjdElzQ2xvc2UgPSB2b2x1bWUgPT0gMFxyXG4gICAgfVxyXG5cclxuICAgIGdldE11c2ljVm9sdW1lKCl7XHJcbiAgICAgICAgbGV0IHZvbHVtZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11c2ljVm9sdW1lXCIpIHx8IDAuNVxyXG4gICAgICAgIHRoaXMubXVzaWNWb2x1bWUgPSBwYXJzZUZsb2F0KHZvbHVtZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5tdXNpY1ZvbHVtZVxyXG4gICAgfVxyXG5cclxuICAgIHNldE11c2ljVm9sdW1lKHZvbHVtZTpudW1iZXIpe1xyXG4gICAgICAgIGlmKHZvbHVtZSA9PSBOYU4pdm9sdW1lPTAuNTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY1ZvbHVtZVwiLHZvbHVtZSlcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh2b2x1bWUpXHJcbiAgICAgICAgdGhpcy5tdXNpY0lzQ2xvc2UgPSB2b2x1bWUgPT0gMFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXVkaW9NYW5hZ2UgPSBuZXcgYXVkaW9NYW5hZ2UgKCkiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/ServerRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0c1d1dTtxNdbkZ+1WIRswc', 'ServerRoom');
// Common/src/ServerRoom.ts

"use strict";
// 这个主要实现 网络协议解析 及分发
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerRoom = void 0;
var GameSocket_1 = require("./GameSocket");
var ServerRoom = /** @class */ (function (_super) {
    __extends(ServerRoom, _super);
    function ServerRoom(name) {
        var _this = _super.call(this) || this;
        _this.roomName = "";
        _this.isStopFlushRecv = false;
        _this.recvCache = null;
        _this.listenerOnce = new cc.EventTarget();
        _this.roomName = name;
        _this.recvCache = {};
        return _this;
    }
    ServerRoom.prototype.getCache = function (cmd) {
        return this.recvCache[cmd];
    };
    ServerRoom.prototype.setCache = function (cmd, obj) {
        this.recvCache[cmd] = obj;
    };
    ServerRoom.prototype.setStopFlushRecv = function (bflag) {
        this.isStopFlushRecv = bflag;
    };
    // 发送消息并且传入收消息回调（多次发送消息） 收到消息回调一次 不会通告notify
    ServerRoom.prototype.sendAndRecv = function (obj, rCmdStr, callback) {
        this.listenerOnce.once(rCmdStr, callback);
        this.sendMessage(obj);
    };
    ServerRoom.prototype.sendMessage = function (obj) {
        cc.warn("=> " + obj.cmdKey, obj);
        _super.prototype.sendMessage.call(this, JSON.stringify(obj));
    };
    // 分发数据
    ServerRoom.prototype.flushRecv = function () {
        if (this.isStopFlushRecv) {
            return;
        }
        var text = this.pRecvData.shift();
        if (text == null) {
            return;
        }
        var obj = { cmdKey: null };
        try {
            obj = JSON.parse(text);
        }
        catch (error) {
            obj.cmdKey = text;
        }
        this.notify(obj.cmdKey, obj);
    };
    ServerRoom.prototype.notify = function (cmd, obj, isSys) {
        if (isSys === void 0) { isSys = false; }
        cc.log("<= " + cmd, obj);
        this.recvCache[cmd] = obj;
        if (this.listenerOnce.hasEventListener(cmd)) {
            this.listenerOnce.emit(cmd, obj, isSys);
            return;
        }
        this.emit(cmd, obj, isSys);
        cc.EventManager.emit(cmd, obj);
    };
    ServerRoom.prototype.resetData = function () {
        this.recvCache = {};
        _super.prototype.resetData.call(this);
    };
    return ServerRoom;
}(GameSocket_1.GameSocket));
exports.ServerRoom = ServerRoom;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXFNlcnZlclJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQiwyQ0FBeUM7QUFHekM7SUFBZ0MsOEJBQVU7SUFPdEMsb0JBQVksSUFBWTtRQUF4QixZQUNJLGlCQUFPLFNBR1Y7UUFURCxjQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGVBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsa0JBQVksR0FBbUIsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFJaEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7O0lBQ3hCLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxHQUFXLEVBQUUsR0FBUTtRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDO0lBRUQscUNBQWdCLEdBQWhCLFVBQWlCLEtBQWM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELDRDQUE0QztJQUM1QyxnQ0FBVyxHQUFYLFVBQVksR0FBUSxFQUFFLE9BQWUsRUFBRSxRQUE4RTtRQUNqSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLEdBQVE7UUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFNLEdBQUcsQ0FBQyxNQUFRLEVBQUcsR0FBRyxDQUFDLENBQUE7UUFDakMsaUJBQU0sV0FBVyxZQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsT0FBTztJQUNQLDhCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsT0FBTTtTQUNUO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLEdBQUcsR0FBRyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsQ0FBQztRQUN4QixJQUFJO1lBQ0EsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLEdBQVEsRUFBRSxLQUFxQjtRQUFyQixzQkFBQSxFQUFBLGFBQXFCO1FBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBTSxHQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGlCQUFNLFNBQVMsV0FBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTCxpQkFBQztBQUFELENBdkVBLEFBdUVDLENBdkUrQix1QkFBVSxHQXVFekM7QUF2RVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDov5nkuKrkuLvopoHlrp7njrAg572R57uc5Y2P6K6u6Kej5p6QIOWPiuWIhuWPkVxyXG5cclxuaW1wb3J0IHsgR2FtZVNvY2tldCB9IGZyb20gXCIuL0dhbWVTb2NrZXRcIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJSb29tIGV4dGVuZHMgR2FtZVNvY2tldCB7XHJcblxyXG4gICAgcm9vbU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1N0b3BGbHVzaFJlY3Y6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHJlY3ZDYWNoZTogYW55ID0gbnVsbDtcclxuICAgIGxpc3RlbmVyT25jZTogY2MuRXZlbnRUYXJnZXQgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yb29tTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWN2Q2FjaGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYWNoZShjbWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlY3ZDYWNoZVtjbWRdXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FjaGUoY21kOiBzdHJpbmcsIG9iajogYW55KSB7XHJcbiAgICAgICAgdGhpcy5yZWN2Q2FjaGVbY21kXSA9IG9iajtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdG9wRmx1c2hSZWN2KGJmbGFnOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc1N0b3BGbHVzaFJlY3YgPSBiZmxhZztcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj5HpgIHmtojmga/lubbkuJTkvKDlhaXmlLbmtojmga/lm57osIPvvIjlpJrmrKHlj5HpgIHmtojmga/vvIkg5pS25Yiw5raI5oGv5Zue6LCD5LiA5qyhIOS4jeS8mumAmuWRim5vdGlmeVxyXG4gICAgc2VuZEFuZFJlY3Yob2JqOiBhbnksIHJDbWRTdHI6IHN0cmluZywgY2FsbGJhY2s6IChhcmcxPzogYW55LCBhcmcyPzogYW55LCBhcmczPzogYW55LCBhcmc0PzogYW55LCBhcmc1PzogYW55KSA9PiB2b2lkLCApIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyT25jZS5vbmNlKHJDbWRTdHIsIGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZE1lc3NhZ2Uob2JqOiBhbnkpIHtcclxuICAgICAgICBjYy53YXJuKGA9PiAke29iai5jbWRLZXl9YCAsIG9iailcclxuICAgICAgICBzdXBlci5zZW5kTWVzc2FnZShKU09OLnN0cmluZ2lmeShvYmopKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliIblj5HmlbDmja5cclxuICAgIGZsdXNoUmVjdigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0b3BGbHVzaFJlY3YpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5wUmVjdkRhdGEuc2hpZnQoKTtcclxuICAgICAgICBpZiAodGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvYmogPSB7Y21kS2V5Om51bGx9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG9iaiA9IEpTT04ucGFyc2UodGV4dCk7ICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgb2JqLmNtZEtleSA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm90aWZ5KG9iai5jbWRLZXksIG9iaik7IFxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeShjbWQ6IHN0cmluZywgb2JqOiBhbnksIGlzU3lzOmJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNjLmxvZyhgPD0gJHtjbWR9YCwgb2JqKVxyXG4gICAgICAgIHRoaXMucmVjdkNhY2hlW2NtZF0gPSBvYmo7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJPbmNlLmhhc0V2ZW50TGlzdGVuZXIoY21kKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyT25jZS5lbWl0KGNtZCwgb2JqLCBpc1N5cyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5lbWl0KGNtZCwgb2JqLCBpc1N5cyk7XHJcbiAgICAgICAgY2MuRXZlbnRNYW5hZ2VyLmVtaXQoY21kLG9iailcclxuICAgIH1cclxuXHJcbiAgICByZXNldERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5yZWN2Q2FjaGUgPSB7fTtcclxuICAgICAgICBzdXBlci5yZXNldERhdGEoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/Expand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a1e6Ao6utJXrSBo9peaEpD', 'Expand');
// Common/src/Expand.ts

cc.findNode = function (name, tag) {
    if (tag.children.length == 0) {
        return null;
    }
    for (var _i = 0, _a = tag.children; _i < _a.length; _i++) {
        var childernNode = _a[_i];
        if (childernNode.name == name) {
            return childernNode;
        }
        else {
            var node = cc.findNode(name, childernNode);
            if (node) {
                return node;
            }
        }
    }
};

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXEV4cGFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFFLENBQUMsUUFBUSxHQUFHLFVBQUMsSUFBVyxFQUFDLEdBQVc7SUFDbEMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDMUIsT0FBTyxJQUFJLENBQUE7S0FDZDtJQUNELEtBQXlCLFVBQVksRUFBWixLQUFBLEdBQUcsQ0FBQyxRQUFRLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTtRQUFsQyxJQUFJLFlBQVksU0FBQTtRQUNqQixJQUFJLFlBQVksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQzNCLE9BQU8sWUFBWSxDQUFBO1NBQ3RCO2FBQU07WUFDSCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxZQUFZLENBQUMsQ0FBQTtZQUN6QyxJQUFJLElBQUksRUFBRTtnQkFDTixPQUFPLElBQUksQ0FBQTthQUNkO1NBQ0o7S0FDSjtBQUNMLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLmZpbmROb2RlID0gKG5hbWU6c3RyaW5nLHRhZzpjYy5Ob2RlKT0+e1xyXG4gICAgaWYgKHRhZy5jaGlsZHJlbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsIFxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgY2hpbGRlcm5Ob2RlIG9mIHRhZy5jaGlsZHJlbikge1xyXG4gICAgICAgIGlmIChjaGlsZGVybk5vZGUubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZGVybk5vZGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmZpbmROb2RlKG5hbWUsY2hpbGRlcm5Ob2RlKVxyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/AudioConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c820edLgDhE2r7rtfxP6NTy', 'AudioConfig');
// Common/src/AudioConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dznAudio = /** @class */ (function () {
    function dznAudio() {
    }
    dznAudio.preload = function () {
        if (this.isPreload)
            return;
        this.isPreload = true;
        // const arr = [
        //     this.coins_fly,
        //     this.effect_betStart,
        //     this.effect_betEnd,
        //     this.effect_flipCard,
        //     this.effect_sendCard,
        // ]
        // cc.resources.preload(arr, cc.AudioClip);
    };
    //点击按钮
    dznAudio.effect_button_click = "audio/click_button";
    //关闭按钮
    dznAudio.effect_button_close = "audio/click_close";
    //红包提示
    dznAudio.effect_hb_begin = "audio/hb_begin";
    //红包雨
    dznAudio.effect_hb_rain = "audio/hb_rain";
    //红包输
    dznAudio.effect_hb_lose = "audio/hb_lose";
    //红包赢
    dznAudio.effect_hb_win = "audio/win";
    dznAudio.isPreload = false;
    return dznAudio;
}());
exports.default = dznAudio;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXEF1ZGlvQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQTRCQSxDQUFDO0lBWlUsZ0JBQU8sR0FBZDtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBQzVCLElBQUk7UUFDSiwyQ0FBMkM7SUFDL0MsQ0FBQztJQXpCRCxNQUFNO0lBQ0MsNEJBQW1CLEdBQUcsb0JBQW9CLENBQUM7SUFDbEQsTUFBTTtJQUNDLDRCQUFtQixHQUFHLG1CQUFtQixDQUFDO0lBQ2pELE1BQU07SUFDQyx3QkFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQzFDLEtBQUs7SUFDRSx1QkFBYyxHQUFHLGVBQWUsQ0FBQztJQUN4QyxLQUFLO0lBQ0UsdUJBQWMsR0FBRyxlQUFlLENBQUM7SUFDeEMsS0FBSztJQUNFLHNCQUFhLEdBQUcsV0FBVyxDQUFDO0lBRTVCLGtCQUFTLEdBQUcsS0FBSyxDQUFDO0lBYTdCLGVBQUM7Q0E1QkQsQUE0QkMsSUFBQTtrQkE1Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZHpuQXVkaW8ge1xyXG5cclxuICAgIC8v54K55Ye75oyJ6ZKuXHJcbiAgICBzdGF0aWMgZWZmZWN0X2J1dHRvbl9jbGljayA9IFwiYXVkaW8vY2xpY2tfYnV0dG9uXCI7XHJcbiAgICAvL+WFs+mXreaMiemSrlxyXG4gICAgc3RhdGljIGVmZmVjdF9idXR0b25fY2xvc2UgPSBcImF1ZGlvL2NsaWNrX2Nsb3NlXCI7XHJcbiAgICAvL+e6ouWMheaPkOekulxyXG4gICAgc3RhdGljIGVmZmVjdF9oYl9iZWdpbiA9IFwiYXVkaW8vaGJfYmVnaW5cIjtcclxuICAgIC8v57qi5YyF6ZuoXHJcbiAgICBzdGF0aWMgZWZmZWN0X2hiX3JhaW4gPSBcImF1ZGlvL2hiX3JhaW5cIjtcclxuICAgIC8v57qi5YyF6L6TXHJcbiAgICBzdGF0aWMgZWZmZWN0X2hiX2xvc2UgPSBcImF1ZGlvL2hiX2xvc2VcIjtcclxuICAgIC8v57qi5YyF6LWiXHJcbiAgICBzdGF0aWMgZWZmZWN0X2hiX3dpbiA9IFwiYXVkaW8vd2luXCI7XHJcblxyXG4gICAgc3RhdGljIGlzUHJlbG9hZCA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHByZWxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQcmVsb2FkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1ByZWxvYWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnN0IGFyciA9IFtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb2luc19mbHksXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZWZmZWN0X2JldFN0YXJ0LFxyXG4gICAgICAgIC8vICAgICB0aGlzLmVmZmVjdF9iZXRFbmQsXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZWZmZWN0X2ZsaXBDYXJkLFxyXG4gICAgICAgIC8vICAgICB0aGlzLmVmZmVjdF9zZW5kQ2FyZCxcclxuICAgICAgICAvLyBdXHJcbiAgICAgICAgLy8gY2MucmVzb3VyY2VzLnByZWxvYWQoYXJyLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/tool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fa7boXlXFLK6ed7ds1Hmvi', 'tool');
// Common/src/tool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardValue2 = exports.getCardValue = exports.getQueryVariable = exports.toWinNumber = exports.toFixed = exports.newEventHandler = exports.registerHoverTips = exports.shuffle = exports.rewardToString = exports.toNodeSpace = exports.toWorldSpace = exports.formatMoney = exports.toWString = exports.randomInt = exports.random = exports.usernameAbbre = exports.getLoaclTime = exports.assert = void 0;
/**
 * 断言方法
 * @param condition 条件为假时输出警告信息：msg
 * @param msg
 */
function assert(condition, msg) {
    if (!condition) {
        cc.warn(msg);
    }
}
exports.assert = assert;
/**获取本机时间 */
function getLoaclTime(time) {
    return new Date(time).toLocaleDateString().replace(/:\d{1,2}$/, " ");
}
exports.getLoaclTime = getLoaclTime;
/**用户名规则 */
function usernameAbbre(account, len) {
    if (len === void 0) { len = 5; }
    assert(account.length > len * 2, "no avilable account account.length <= " + len * 2 + "!");
    return account.slice(0, len) + '...' + account.slice(-len);
}
exports.usernameAbbre = usernameAbbre;
/**
 * 随机值
 * @param min 最小值
 * @param max 最大值
 */
function random(min, max) {
    assert(min < max, 'max >= min');
    return Math.random() * (max - min) + min;
}
exports.random = random;
function randomInt(min, max) {
    assert(min < max, 'max >= min');
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randomInt = randomInt;
/** 转化为带万的单位 50000 => 5 */
function toWString(money, w, isShowFuhao) {
    if (w === void 0) { w = '万'; }
    if (isShowFuhao === void 0) { isShowFuhao = false; }
    var fuhao = money >= 0 ? "+" : "-";
    money = Math.abs(money);
    var str = money.toString();
    if (money >= 10000) {
        var str1 = (money * 0.0001).toString();
        if (money % 10000 != 0) {
            var index = str1.indexOf(".");
            str = str1.substring(0, index + 2) + "万";
        }
        else {
            str = str1 + "万";
        }
    }
    if (isShowFuhao || fuhao == "-") {
        str = fuhao + str;
    }
    return str;
}
exports.toWString = toWString;
/** 转换成标准货币单位 */
function formatMoney(number, symbol, precision, thousandsSep, decimalSep, format) {
    if (symbol === void 0) { symbol = ''; }
    return window['accounting'].formatMoney(number, symbol, precision, thousandsSep, decimalSep, format);
}
exports.formatMoney = formatMoney;
/** 获取节点的世界坐标 */
function toWorldSpace(node) {
    return node.convertToWorldSpaceAR(cc.Vec2.ZERO);
}
exports.toWorldSpace = toWorldSpace;
/** 获取node2相对于node的局部坐标 */
function toNodeSpace(node, node2) {
    return node.convertToNodeSpaceAR(toWorldSpace(node2));
}
exports.toNodeSpace = toNodeSpace;
/** 输赢金额转带 + -符号的字符串 */
function rewardToString(reward) {
    return (reward < 0 ? reward.toString() : '+' + reward);
}
exports.rewardToString = rewardToString;
/** 数组洗乱 */
function shuffle(arr) {
    var _a;
    var l = arr.length;
    for (var i = l - 1; i >= 0; i--) {
        var j = randomInt(0, i);
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    }
}
exports.shuffle = shuffle;
/** 节点注册鼠标停留提示显示事件 */
function registerHoverTips(target, msg, pos, isRight) {
    if (isRight === void 0) { isRight = false; }
    var tips;
    target.on(cc.Node.EventType.MOUSE_ENTER, function () {
        if (isRight) {
            pos = toWorldSpace(target).add(cc.v2(target.width / 2, -target.height / 2));
        }
        else {
            pos = pos || toWorldSpace(target).sub(cc.v2(0, target.height / 2));
        }
        // tips = window.gameController.showHoverTipsPrefab(pos,msg);
        cc.log('MOUSE_ENTER', msg, tips.x, tips.y);
    });
    target.on(cc.Node.EventType.MOUSE_LEAVE, function () {
        if (tips.isValid) {
            tips.destroy();
            cc.log('MOUSE_LEAVE destroy', msg);
        }
    });
}
exports.registerHoverTips = registerHoverTips;
/**自定义事件监听 */
function newEventHandler(componet, handler) {
    var e = new cc.Component.EventHandler();
    e.target = componet.node;
    e.component = componet['__classname__'];
    e.handler = handler;
    return e;
}
exports.newEventHandler = newEventHandler;
/** 四舍五入保留n为小数，返回数字 */
function toFixed(v, n) {
    var p = Math.pow(10, n);
    return Math.round(v * p) / p;
}
exports.toFixed = toFixed;
/** 将数字显示为带符号的字符，正数为红色，负数为绿色*/
function toWinNumber(node, number) {
    var str = "";
    if (number >= 0) {
        str = "+" + toWString(number, "万");
        node.color = cc.color(180, 0, 0);
    }
    else {
        str = toWString(number, "万");
        node.color = cc.color(0, 180, 0);
    }
    node.getComponent(cc.Label).string = str;
}
exports.toWinNumber = toWinNumber;
/** 获取地址栏参数 */
function getQueryVariable(code) {
    var query = window.location.search.substring(1);
    var data = query.split("&");
    for (var index = 0; index < data.length; index++) {
        var pair = data[index].split("=");
        if (pair[0] == code) {
            return pair[1];
        }
    }
    return false;
}
exports.getQueryVariable = getQueryVariable;
/**获取卡片对应值 */
function getCardValue(card) {
    card = card.substring(0, card.length - 1);
    var cards = card.split("_");
    var value = parseInt(cards[1]);
    return value;
}
exports.getCardValue = getCardValue;
/**获取卡片对应值2 */
function getCardValue2(card) {
    card = card.substring(0, card.length - 1);
    var cards = card.split("_");
    var value = parseInt(cards[1]);
    if (value == 11 || value == 12 || value == 13) {
        value = 10;
    }
    return value;
}
exports.getCardValue2 = getCardValue2;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXHRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRztBQUNILFNBQWdCLE1BQU0sQ0FBQyxTQUFpQixFQUFDLEdBQVU7SUFDL0MsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNaLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEI7QUFDTCxDQUFDO0FBSkQsd0JBSUM7QUFFRCxZQUFZO0FBQ1osU0FBZ0IsWUFBWSxDQUFDLElBQVc7SUFDcEMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUE7QUFDdkUsQ0FBQztBQUZELG9DQUVDO0FBRUQsV0FBVztBQUNYLFNBQWdCLGFBQWEsQ0FBQyxPQUFjLEVBQUMsR0FBTztJQUFQLG9CQUFBLEVBQUEsT0FBTztJQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFDLDJDQUF5QyxHQUFHLEdBQUcsQ0FBQyxNQUFHLENBQUMsQ0FBQztJQUNyRixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUhELHNDQUdDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLE1BQU0sQ0FBQyxHQUFHLEVBQUMsR0FBRztJQUMxQixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBQyxZQUFZLENBQUMsQ0FBQTtJQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDN0MsQ0FBQztBQUhELHdCQUdDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEdB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QTtJQUM5QixPQUFPLEtBQUssQ0FBQTtBQUNoQixDQUFDO0FBTEQsb0NBS0M7QUFFRCxjQUFjO0FBQ2QsU0FBZ0IsYUFBYSxDQUFDLElBQVc7SUFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMzQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDOUIsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxJQUFHLEVBQUUsRUFBRTtRQUMxQyxLQUFLLEdBQUcsRUFBRSxDQUFBO0tBQ2I7SUFDRCxPQUFPLEtBQUssQ0FBQTtBQUNoQixDQUFDO0FBUkQsc0NBUUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5pat6KiA5pa55rOVXHJcbiAqIEBwYXJhbSBjb25kaXRpb24g5p2h5Lu25Li65YGH5pe26L6T5Ye66K2m5ZGK5L+h5oGv77yabXNnIFxyXG4gKiBAcGFyYW0gbXNnIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb246Ym9vbGVhbixtc2c6c3RyaW5nKSB7XHJcbiAgICBpZiAoIWNvbmRpdGlvbikge1xyXG4gICAgICAgIGNjLndhcm4obXNnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoq6I635Y+W5pys5py65pe26Ze0ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2FjbFRpbWUodGltZTpudW1iZXIpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lKS50b0xvY2FsZURhdGVTdHJpbmcoKS5yZXBsYWNlKC86XFxkezEsMn0kLyxcIiBcIilcclxufVxyXG5cclxuLyoq55So5oi35ZCN6KeE5YiZICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VybmFtZUFiYnJlKGFjY291bnQ6c3RyaW5nLGxlbiA9IDUpIHtcclxuICAgIGFzc2VydChhY2NvdW50Lmxlbmd0aCA+IGxlbiAqIDIsYG5vIGF2aWxhYmxlIGFjY291bnQgYWNjb3VudC5sZW5ndGggPD0gJHtsZW4gKiAyfSFgKTtcclxuICAgIHJldHVybiBhY2NvdW50LnNsaWNlKDAsbGVuKSArICcuLi4nICsgYWNjb3VudC5zbGljZSgtbGVuKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOmaj+acuuWAvFxyXG4gKiBAcGFyYW0gbWluIOacgOWwj+WAvFxyXG4gKiBAcGFyYW0gbWF4IOacgOWkp+WAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sbWF4KSB7XHJcbiAgICBhc3NlcnQobWluIDwgbWF4LCdtYXggPj0gbWluJylcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLG1heCkge1xyXG4gICAgYXNzZXJ0KG1pbiA8IG1heCwnbWF4ID49IG1pbicpXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuLyoqIOi9rOWMluS4uuW4puS4h+eahOWNleS9jSA1MDAwMCA9PiA1ICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1dTdHJpbmcobW9uZXk6bnVtYmVyLHc6c3RyaW5nID0gJ+S4hycsaXNTaG93RnVoYW86Ym9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBsZXQgZnVoYW8gPSBtb25leSA+PSAwID8gXCIrXCIgOiBcIi1cIlxyXG4gICAgbW9uZXkgPSBNYXRoLmFicyhtb25leSlcclxuICAgIGxldCBzdHIgPSBtb25leS50b1N0cmluZygpO1xyXG4gICAgaWYgKG1vbmV5ID49IDEwMDAwKSB7XHJcbiAgICAgICAgbGV0IHN0cjEgPSAobW9uZXkgKiAwLjAwMDEpLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAobW9uZXklMTAwMDAgIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPXN0cjEuaW5kZXhPZihcIi5cIilcclxuICAgICAgICAgICAgc3RyPSBzdHIxLnN1YnN0cmluZygwLGluZGV4KzIpICsgXCLkuIdcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHN0cjEgKyBcIuS4h1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzU2hvd0Z1aGFvIHx8IGZ1aGFvID09IFwiLVwiKSB7XHJcbiAgICAgICAgc3RyID0gZnVoYW8gKyBzdHJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxufVxyXG5cclxuLyoqIOi9rOaNouaIkOagh+WHhui0p+W4geWNleS9jSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9uZXkobnVtYmVyOm51bWJlciwgc3ltYm9sOnN0cmluZyA9ICcnLCBwcmVjaXNpb24/OnN0cmluZywgdGhvdXNhbmRzU2VwPzpzdHJpbmcsIGRlY2ltYWxTZXA/OnN0cmluZywgZm9ybWF0PzpzdHJpbmcpOnN0cmluZyB7XHJcbiAgICByZXR1cm4gd2luZG93WydhY2NvdW50aW5nJ10uZm9ybWF0TW9uZXkobnVtYmVyLCBzeW1ib2wsIHByZWNpc2lvbiwgdGhvdXNhbmRzU2VwLCBkZWNpbWFsU2VwLCBmb3JtYXQpXHJcbn1cclxuXHJcbi8qKiDojrflj5boioLngrnnmoTkuJbnlYzlnZDmoIcgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvV29ybGRTcGFjZShub2RlOmNjLk5vZGUpIHtcclxuICAgIHJldHVybiBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG59XHJcblxyXG4vKiog6I635Y+Wbm9kZTLnm7jlr7nkuo5ub2Rl55qE5bGA6YOo5Z2Q5qCHICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b05vZGVTcGFjZShub2RlOmNjLk5vZGUsbm9kZTI6Y2MuTm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG9Xb3JsZFNwYWNlKG5vZGUyKSlcclxufVxyXG5cclxuLyoqIOi+k+i1oumHkeminei9rOW4piArIC3nrKblj7fnmoTlrZfnrKbkuLIgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJld2FyZFRvU3RyaW5nKHJld2FyZDpudW1iZXIpIHtcclxuICAgIHJldHVybiAocmV3YXJkIDwgMCA/IHJld2FyZC50b1N0cmluZygpIDogJysnICsgcmV3YXJkKTtcclxufVxyXG5cclxuLyoqIOaVsOe7hOa0l+S5sSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnI6YW55W10pIHtcclxuICAgIGxldCBsID0gYXJyLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSBsIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBsZXQgaiA9IHJhbmRvbUludCgwLGkpO1xyXG4gICAgICAgIFsgYXJyW2ldLGFycltqXSBdID0gWyBhcnJbal0sIGFycltpXSBdXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiDoioLngrnms6jlhozpvKDmoIflgZznlZnmj5DnpLrmmL7npLrkuovku7YgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVySG92ZXJUaXBzKHRhcmdldDpjYy5Ob2RlLG1zZzpzdHJpbmcscG9zPzpjYy5WZWMyLGlzUmlnaHQ9ZmFsc2UpIHtcclxuICAgIHZhciB0aXBzOmNjLk5vZGU7XHJcbiAgICB0YXJnZXQub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsKCk9PntcclxuICAgICAgICBpZiAoaXNSaWdodCkge1xyXG4gICAgICAgICAgICBwb3MgPSB0b1dvcmxkU3BhY2UodGFyZ2V0KS5hZGQoY2MudjIodGFyZ2V0LndpZHRoIC8gMiwgLSB0YXJnZXQuaGVpZ2h0IC8gMikpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9zID0gcG9zIHx8IHRvV29ybGRTcGFjZSh0YXJnZXQpLnN1YihjYy52MigwLHRhcmdldC5oZWlnaHQgLyAyKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGlwcyA9IHdpbmRvdy5nYW1lQ29udHJvbGxlci5zaG93SG92ZXJUaXBzUHJlZmFiKHBvcyxtc2cpO1xyXG4gICAgICAgIGNjLmxvZygnTU9VU0VfRU5URVInLG1zZyx0aXBzLngsdGlwcy55KTtcclxuICAgIH0pXHJcbiAgICB0YXJnZXQub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsKCk9PntcclxuICAgICAgICBpZiAodGlwcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRpcHMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjYy5sb2coJ01PVVNFX0xFQVZFIGRlc3Ryb3knLG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLyoq6Ieq5a6a5LmJ5LqL5Lu255uR5ZCsICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdFdmVudEhhbmRsZXIoY29tcG9uZXQ6IGNjLkNvbXBvbmVudCwgaGFuZGxlcjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBlID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgIGUudGFyZ2V0ID0gY29tcG9uZXQubm9kZTtcclxuICAgIGUuY29tcG9uZW50ID0gY29tcG9uZXRbJ19fY2xhc3NuYW1lX18nXTtcclxuICAgIGUuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICByZXR1cm4gZTtcclxufVxyXG5cclxuLyoqIOWbm+iIjeS6lOWFpeS/neeVmW7kuLrlsI/mlbDvvIzov5Tlm57mlbDlrZcgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvRml4ZWQodjpudW1iZXIsbjpudW1iZXIpIHtcclxuICAgIGNvbnN0IHAgPSBNYXRoLnBvdygxMCxuKTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHYgKiBwKSAvIHA7XHJcbn1cclxuXHJcbi8qKiDlsIbmlbDlrZfmmL7npLrkuLrluKbnrKblj7fnmoTlrZfnrKbvvIzmraPmlbDkuLrnuqLoibLvvIzotJ/mlbDkuLrnu7/oibIqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9XaW5OdW1iZXIobm9kZTpjYy5Ob2RlLG51bWJlcjpudW1iZXIpIHtcclxuICAgIGxldCBzdHIgPSBcIlwiXHJcbiAgICBpZiAobnVtYmVyID49IDApIHtcclxuICAgICAgICBzdHIgPSBcIitcIiArIHRvV1N0cmluZyhudW1iZXIsXCLkuIdcIilcclxuICAgICAgICBub2RlLmNvbG9yID0gY2MuY29sb3IoMTgwLDAsMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyID0gdG9XU3RyaW5nKG51bWJlcixcIuS4h1wiKVxyXG4gICAgICAgIG5vZGUuY29sb3IgPSBjYy5jb2xvcigwLDE4MCwwKVxyXG4gICAgfVxyXG4gICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0clxyXG59XHJcblxyXG4vKiog6I635Y+W5Zyw5Z2A5qCP5Y+C5pWwICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeVZhcmlhYmxlKGNvZGU6c3RyaW5nKSB7XHJcbiAgICBsZXQgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKVxyXG4gICAgbGV0IGRhdGEgPSBxdWVyeS5zcGxpdChcIiZcIilcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCBwYWlyID0gZGF0YVtpbmRleF0uc3BsaXQoXCI9XCIpXHJcbiAgICAgICAgaWYgKHBhaXJbMF09PWNvZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhaXJbMV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLyoq6I635Y+W5Y2h54mH5a+55bqU5YC8ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkVmFsdWUoY2FyZDpzdHJpbmcpIHtcclxuICAgIGNhcmQgPSBjYXJkLnN1YnN0cmluZygwLGNhcmQubGVuZ3RoLTEpXHJcbiAgICBsZXQgY2FyZHMgPSBjYXJkLnNwbGl0KFwiX1wiKVxyXG4gICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoY2FyZHNbMV0pXHJcbiAgICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuLyoq6I635Y+W5Y2h54mH5a+55bqU5YC8MiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZFZhbHVlMihjYXJkOnN0cmluZykge1xyXG4gICAgY2FyZCA9IGNhcmQuc3Vic3RyaW5nKDAsY2FyZC5sZW5ndGgtMSlcclxuICAgIGxldCBjYXJkcyA9IGNhcmQuc3BsaXQoXCJfXCIpXHJcbiAgICBsZXQgdmFsdWUgPSBwYXJzZUludChjYXJkc1sxXSlcclxuICAgIGlmICh2YWx1ZSA9PSAxMSB8fCB2YWx1ZSA9PSAxMiB8fCB2YWx1ZT09IDEzKSB7XHJcbiAgICAgICAgdmFsdWUgPSAxMFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/layer_reward_card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe254xUnOFMWrzgdZ0Qq/37', 'layer_reward_card');
// Script/component/layer_reward_card.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var layer_reward_card = /** @class */ (function (_super) {
    __extends(layer_reward_card, _super);
    function layer_reward_card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_describ = null;
        _this.img_banner = null;
        _this.lb_title = null;
        _this.lb_time = null;
        _this.lb_rule_score = null;
        return _this;
    }
    layer_reward_card_1 = layer_reward_card;
    layer_reward_card.prototype.onLoad = function () {
        layer_reward_card_1.instance = this;
    };
    layer_reward_card.prototype.start = function () {
    };
    //点击抽一次
    layer_reward_card.prototype.onClickOneDraw = function () {
        // DznSocket.emit(gameData.messageFlag.CHANGE_SHOW_LAYER, gameData.SHOW_LAYER_TYPE.CARD_RECORD);
    };
    //点击抽十次
    layer_reward_card.prototype.onClickTenDraw = function () {
    };
    //点击合成大奖
    layer_reward_card.prototype.onClickHecheng = function () {
    };
    //点击打开红包
    layer_reward_card.prototype.onClickOpenRedBag = function () {
    };
    layer_reward_card.prototype.update = function (dt) {
    };
    var layer_reward_card_1;
    layer_reward_card.instance = null;
    __decorate([
        property(cc.Node)
    ], layer_reward_card.prototype, "toast", void 0);
    __decorate([
        property(cc.Label)
    ], layer_reward_card.prototype, "lb_describ", void 0);
    __decorate([
        property(cc.Sprite)
    ], layer_reward_card.prototype, "img_banner", void 0);
    __decorate([
        property(cc.Label)
    ], layer_reward_card.prototype, "lb_title", void 0);
    __decorate([
        property(cc.Label)
    ], layer_reward_card.prototype, "lb_time", void 0);
    __decorate([
        property(cc.Label)
    ], layer_reward_card.prototype, "lb_rule_score", void 0);
    __decorate([
        property(cc.Node)
    ], layer_reward_card.prototype, "btn_lottery", void 0);
    __decorate([
        property(cc.Node)
    ], layer_reward_card.prototype, "btn_synthesis", void 0);
    __decorate([
        property(cc.Node)
    ], layer_reward_card.prototype, "redbag_content", void 0);
    __decorate([
        property(cc.Node)
    ], layer_reward_card.prototype, "activity", void 0);
    layer_reward_card = layer_reward_card_1 = __decorate([
        ccclass
    ], layer_reward_card);
    return layer_reward_card;
}(cc.Component));
exports.default = layer_reward_card;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXGxheWVyX3Jld2FyZF9jYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBaUZDO1FBNUVHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixtQkFBYSxHQUFhLElBQUksQ0FBQzs7SUFnRW5DLENBQUM7MEJBakZvQixpQkFBaUI7SUFnRGxDLGtDQUFNLEdBQU47UUFDSSxtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxpQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELE9BQU87SUFDUCwwQ0FBYyxHQUFkO1FBQ0ksZ0dBQWdHO0lBQ3BHLENBQUM7SUFFRCxPQUFPO0lBQ1AsMENBQWMsR0FBZDtJQUVBLENBQUM7SUFFRCxRQUFRO0lBQ1IsMENBQWMsR0FBZDtJQUVBLENBQUM7SUFFRCxRQUFRO0lBQ1IsNkNBQWlCLEdBQWpCO0lBRUEsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxFQUFVO0lBRWpCLENBQUM7O0lBaENNLDBCQUFRLEdBQXNCLElBQUksQ0FBQztJQTVDMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDSDtJQUdmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0REFDWTtJQUkvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNHO0lBV3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ0s7SUFJdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2REFDTTtJQVF4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNBO0lBNUNELGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBaUZyQztJQUFELHdCQUFDO0NBakZELEFBaUZDLENBakY4QyxFQUFFLENBQUMsU0FBUyxHQWlGMUQ7a0JBakZvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tIFwiLi9nYW1lRGF0YVwiO1xyXG5pbXBvcnQgeyBEem5Tb2NrZXQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL3NyYy9Eem5Tb2NrZXRcIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxheWVyX3Jld2FyZF9jYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdG9hc3Q6IGNjLk5vZGU7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJfZGVzY3JpYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpbWdfYmFubmVyOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiX3RpdGxlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJfdGltZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiX3J1bGVfc2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvL+aKveWlluaMiemSruiKgueCuS0t55So5LqO5pi+56S66ZqQ6JePXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9sb3R0ZXJ5OiBjYy5Ob2RlO1xyXG4gICAgLy/mir3kuIDmrKHmjInpkq5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYnRuX2xvdHRlcnlfMTogY2MuTm9kZTtcclxuXHJcbiAgICAvL+aKveWNgeasoeaMiemSrlxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBidG5fbG90dGVyeV8xMDogY2MuTm9kZTtcclxuXHJcbiAgICAvL+WQiOaIkOWkp+WlluaMiemSrlxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fc3ludGhlc2lzOiBjYy5Ob2RlO1xyXG5cclxuICAgIC8v57qi5YyF55WM6Z2iXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJlZGJhZ19jb250ZW50OiBjYy5Ob2RlO1xyXG5cclxuICAgIC8v5omT5byA57qi5YyF5oyJ6ZKuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGJ0bl9vcGVuOiBjYy5Ob2RlO1xyXG5cclxuICAgIC8v5rS75Yqo5o6o6I2QYmFubmVy57uE5Lu2XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFjdGl2aXR5OiBjYy5Ob2RlO1xyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZTogbGF5ZXJfcmV3YXJkX2NhcmQgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsYXllcl9yZXdhcmRfY2FyZC5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy/ngrnlh7vmir3kuIDmrKFcclxuICAgIG9uQ2xpY2tPbmVEcmF3KCl7XHJcbiAgICAgICAgLy8gRHpuU29ja2V0LmVtaXQoZ2FtZURhdGEubWVzc2FnZUZsYWcuQ0hBTkdFX1NIT1dfTEFZRVIsIGdhbWVEYXRhLlNIT1dfTEFZRVJfVFlQRS5DQVJEX1JFQ09SRCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ngrnlh7vmir3ljYHmrKFcclxuICAgIG9uQ2xpY2tUZW5EcmF3KCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy/ngrnlh7vlkIjmiJDlpKflpZZcclxuICAgIG9uQ2xpY2tIZWNoZW5nKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy/ngrnlh7vmiZPlvIDnuqLljIVcclxuICAgIG9uQ2xpY2tPcGVuUmVkQmFnKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/popup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0732bbHRAVJxp2H0+pYanz2', 'popup');
// Script/component/popup.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var toast_1 = require("./toast");
var tishi_1 = require("./tishi");
var utils_1 = require("./utils");
var gameData_1 = require("./gameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var popup = /** @class */ (function (_super) {
    __extends(popup, _super);
    function popup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toastPrefab = null;
        _this.tishitPrefab = null;
        _this.callBack = null;
        _this.tishiNode = null;
        _this.chat1node = null;
        _this.chat2node = null;
        return _this;
    }
    popup_1 = popup;
    popup.prototype.onLoad = function () {
        popup_1.instance = this;
    };
    popup.prototype.toast = function (str) {
        var node = cc.instantiate(this.toastPrefab);
        node.parent = cc.find('Canvas');
        var t = node.getComponent(toast_1.default);
        t.setString(str);
        t.play("toastShow", function () {
            node.removeFromParent();
        });
    };
    popup.prototype.toastLongTime = function (str, playLongTime) {
        var node = cc.instantiate(this.toastPrefab);
        node.parent = cc.find('Canvas');
        var t = node.getComponent(toast_1.default);
        t.setString(str);
        t.playLongTime("toastShow");
        if (!playLongTime) {
            t.scheduleOnce(function () {
                node.removeFromParent();
            }, 1);
        }
    };
    popup.prototype.openTishi = function (str) {
        this.tishiNode = cc.instantiate(this.tishitPrefab);
        this.tishiNode.parent = cc.find('Canvas');
        var t = this.tishiNode.getComponent(tishi_1.default);
        t.setString(str);
        t.isOpen = true;
    };
    popup.prototype.closeTishi = function () {
        if (this.tishiNode)
            this.tishiNode.removeFromParent();
    };
    popup.prototype.chat1 = function () {
        if (this.chat2node) {
            cc.find('Canvas').removeChild(this.chat2node);
            this.chat1node = null;
        }
        // this.chat1node = cc.instantiate(this.chat1Prefab);
        // this.chat1node.parent = cc.find('Canvas');
        utils_1.utils.clickGetPrefab.clickGetPrefab(gameData_1.gameData.PreloadPrefab.chat1);
        // let url = gameData.PreloadPrefab.chat1//"prefabs/chat1";
        // utils.getPrefab(url);
    };
    popup.prototype.chat2 = function () {
        if (this.chat1node) {
            cc.find('Canvas').removeChild(this.chat1node);
            this.chat1node = null;
        }
        // this.chat2node = cc.instantiate(this.chat2Prefab)
        // this.chat2node.parent = cc.find('Canvas');
        utils_1.utils.clickGetPrefab.clickGetPrefab(gameData_1.gameData.PreloadPrefab.chat2);
        // let url = gameData.PreloadPrefab.chat2;//"prefabs/chat2";
        // utils.getPrefab(url);
    };
    var popup_1;
    popup.instance = null;
    __decorate([
        property(cc.Prefab)
    ], popup.prototype, "toastPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], popup.prototype, "tishitPrefab", void 0);
    popup = popup_1 = __decorate([
        ccclass
    ], popup);
    return popup;
}(cc.Component));
exports.default = popup;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXHBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUEyQjtBQUMzQixpQ0FBMkI7QUFDM0IsaUNBQWdDO0FBQ2hDLHVDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQW9GQztRQS9FRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBQ2xCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixlQUFTLEdBQVksSUFBSSxDQUFDOztJQXNFdEMsQ0FBQztjQXBGb0IsS0FBSztJQWV0QixzQkFBTSxHQUFOO1FBQ0ksT0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUlELHFCQUFLLEdBQUwsVUFBTSxHQUFXO1FBQ2IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw2QkFBYSxHQUFiLFVBQWMsR0FBVyxFQUFFLFlBQXFCO1FBQzVDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMzQixJQUFHLENBQUMsWUFBWSxFQUFDO1lBQ2IsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDUjtJQUNMLENBQUM7SUFFRCx5QkFBUyxHQUFULFVBQVUsR0FBVztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsMEJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBRUQscURBQXFEO1FBQ3JELDZDQUE2QztRQUM3QyxhQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSwyREFBMkQ7UUFDM0Qsd0JBQXdCO0lBQzVCLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUVELG9EQUFvRDtRQUNwRCw2Q0FBNkM7UUFDN0MsYUFBSyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsbUJBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsNERBQTREO1FBQzVELHdCQUF3QjtJQUU1QixDQUFDOztJQS9FTSxjQUFRLEdBQVUsSUFBSSxDQUFDO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDVztJQVJkLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FvRnpCO0lBQUQsWUFBQztDQXBGRCxBQW9GQyxDQXBGa0MsRUFBRSxDQUFDLFNBQVMsR0FvRjlDO2tCQXBGb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2FzdCBmcm9tIFwiLi90b2FzdFwiXHJcbmltcG9ydCB0aXNoaSBmcm9tIFwiLi90aXNoaVwiXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tIFwiLi9nYW1lRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBvcHVwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6IHBvcHVwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdG9hc3RQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRpc2hpdFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBjYWxsQmFjazogRnVuY3Rpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0aXNoaU5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY2hhdDFub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2hhdDJub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBwb3B1cC5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgdG9hc3Qoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudG9hc3RQcmVmYWIpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgbGV0IHQgPSBub2RlLmdldENvbXBvbmVudCh0b2FzdCk7XHJcbiAgICAgICAgdC5zZXRTdHJpbmcoc3RyKTtcclxuICAgICAgICB0LnBsYXkoXCJ0b2FzdFNob3dcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRvYXN0TG9uZ1RpbWUoc3RyOiBzdHJpbmcsIHBsYXlMb25nVGltZTogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50b2FzdFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBsZXQgdCA9IG5vZGUuZ2V0Q29tcG9uZW50KHRvYXN0KTtcclxuICAgICAgICB0LnNldFN0cmluZyhzdHIpO1xyXG4gICAgICAgIHQucGxheUxvbmdUaW1lKFwidG9hc3RTaG93XCIpXHJcbiAgICAgICAgaWYoIXBsYXlMb25nVGltZSl7XHJcbiAgICAgICAgICAgIHQuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblRpc2hpKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50aXNoaU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRpc2hpdFByZWZhYik7XHJcbiAgICAgICAgdGhpcy50aXNoaU5vZGUucGFyZW50ID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzLnRpc2hpTm9kZS5nZXRDb21wb25lbnQodGlzaGkpO1xyXG4gICAgICAgIHQuc2V0U3RyaW5nKHN0cik7XHJcbiAgICAgICAgdC5pc09wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVGlzaGkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGlzaGlOb2RlKSB0aGlzLnRpc2hpTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhdDEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhdDJub2RlKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLnJlbW92ZUNoaWxkKHRoaXMuY2hhdDJub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5jaGF0MW5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jaGF0MW5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNoYXQxUHJlZmFiKTtcclxuICAgICAgICAvLyB0aGlzLmNoYXQxbm9kZS5wYXJlbnQgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICB1dGlscy5jbGlja0dldFByZWZhYi5jbGlja0dldFByZWZhYihnYW1lRGF0YS5QcmVsb2FkUHJlZmFiLmNoYXQxKTtcclxuICAgICAgICAvLyBsZXQgdXJsID0gZ2FtZURhdGEuUHJlbG9hZFByZWZhYi5jaGF0MS8vXCJwcmVmYWJzL2NoYXQxXCI7XHJcbiAgICAgICAgLy8gdXRpbHMuZ2V0UHJlZmFiKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhdDIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhdDFub2RlKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcycpLnJlbW92ZUNoaWxkKHRoaXMuY2hhdDFub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5jaGF0MW5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jaGF0Mm5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNoYXQyUHJlZmFiKVxyXG4gICAgICAgIC8vIHRoaXMuY2hhdDJub2RlLnBhcmVudCA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHV0aWxzLmNsaWNrR2V0UHJlZmFiLmNsaWNrR2V0UHJlZmFiKGdhbWVEYXRhLlByZWxvYWRQcmVmYWIuY2hhdDIpO1xyXG4gICAgICAgIC8vIGxldCB1cmwgPSBnYW1lRGF0YS5QcmVsb2FkUHJlZmFiLmNoYXQyOy8vXCJwcmVmYWJzL2NoYXQyXCI7XHJcbiAgICAgICAgLy8gdXRpbHMuZ2V0UHJlZmFiKHVybCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/netCom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '101baooNg5FbpOu/JlwFNs6', 'netCom');
// Script/component/netCom.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var gameData_1 = require("./gameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var netCom = /** @class */ (function (_super) {
    __extends(netCom, _super);
    function netCom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logonData = {
            token: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEyNDQwMywiYXVkIjoiIiwiZXhwIjoxNjY1MjIwMzA0LCJpYXQiOjE2NjI2MjgzMDQsImlzcyI6IiIsImp0aSI6ImViZDRhOTdlODlhODBlMWVmZGI4ZTI5YWJmZjIyNGQxIiwibmJmIjoxNjYyNjI4MzA0LCJzdWIiOiIifQ.FEHYgXElxdqH74SlIGTWY_HcTKx6vopVrW1RkLCvd0w",
        };
        return _this;
    }
    netCom_1 = netCom;
    netCom.prototype.onLoad = function () {
        netCom_1.instance = this;
        cc.game.addPersistRootNode(this.node);
    };
    netCom.prototype.start = function () {
        var token = utils_1.utils.GetQueryVariable(window.location.href, "token") || netCom_1.instance.logonData.token; //用户token
        gameData_1.gameData.roomData.setTokenData(token);
    };
    netCom.prototype.update = function (dt) {
        // DznSocket.OnMissionUpdate();
    };
    var netCom_1;
    netCom.instance = null;
    netCom = netCom_1 = __decorate([
        ccclass
    ], netCom);
    return netCom;
}(cc.Component));
exports.default = netCom;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXG5ldENvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpQ0FBK0I7QUFDL0IsdUNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBc0JDO1FBcEJHLGVBQVMsR0FBRztZQUNSLEtBQUssRUFBRyw0UUFBNFE7U0FDdlIsQ0FBQTs7SUFrQkwsQ0FBQztlQXRCb0IsTUFBTTtJQVF2Qix1QkFBTSxHQUFOO1FBQ0ksUUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFDSSxJQUFJLEtBQUssR0FBRyxhQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksUUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUEsU0FBUztRQUM5RyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBUSxFQUFTO1FBQ2IsK0JBQStCO0lBQ25DLENBQUM7O0lBZE0sZUFBUSxHQUFVLElBQUksQ0FBQztJQU5iLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FzQjFCO0lBQUQsYUFBQztDQXRCRCxBQXNCQyxDQXRCbUMsRUFBRSxDQUFDLFNBQVMsR0FzQi9DO2tCQXRCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBEem5Tb2NrZXQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL3NyYy9Eem5Tb2NrZXRcIlxyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tIFwiLi9nYW1lRGF0YVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBuZXRDb20gZXh0ZW5kcyBjYy5Db21wb25lbnQgeyAgIFxyXG5cclxuICAgIGxvZ29uRGF0YSA9IHtcclxuICAgICAgICB0b2tlbiA6IFwiQmVhcmVyIGV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUoxYVdRaU9qRXlORFF3TXl3aVlYVmtJam9pSWl3aVpYaHdJam94TmpZMU1qSXdNekEwTENKcFlYUWlPakUyTmpJMk1qZ3pNRFFzSW1semN5STZJaUlzSW1wMGFTSTZJbVZpWkRSaE9UZGxPRGxoT0RCbE1XVm1aR0k0WlRJNVlXSm1aakl5TkdReElpd2libUptSWpveE5qWXlOakk0TXpBMExDSnpkV0lpT2lJaWZRLkZFSFlnWEVseGRxSDc0U2xJR1RXWV9IY1RLeDZ2b3BWclcxUmtMQ3ZkMHdcIixcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6bmV0Q29tID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBuZXRDb20uaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBsZXQgdG9rZW4gPSB1dGlscy5HZXRRdWVyeVZhcmlhYmxlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCBcInRva2VuXCIpIHx8IG5ldENvbS5pbnN0YW5jZS5sb2dvbkRhdGEudG9rZW47Ly/nlKjmiLd0b2tlblxyXG4gICAgICAgIGdhbWVEYXRhLnJvb21EYXRhLnNldFRva2VuRGF0YSh0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdDpudW1iZXIpIHtcclxuICAgICAgICAvLyBEem5Tb2NrZXQuT25NaXNzaW9uVXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/serverTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1cb9BPYIVFD4M/goGCmoxe', 'serverTime');
// Script/component/serverTime.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serverTime = /** @class */ (function () {
    function serverTime() {
    }
    serverTime.setOffsetTime = function (v) {
        var msgTime = Date.now() - v.clientTime;
        var serverNow = v.serverTime + msgTime / 2;
        this.offsetTime = Math.round(serverNow - Date.now());
    };
    Object.defineProperty(serverTime, "serverTime", {
        get: function () {
            return Date.now() + this.offsetTime;
        },
        enumerable: false,
        configurable: true
    });
    serverTime.offsetTime = 0;
    return serverTime;
}());
exports.default = serverTime;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXHNlcnZlclRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBWUEsQ0FBQztJQVRVLHdCQUFhLEdBQXBCLFVBQXFCLENBQWU7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFVBQVUsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHNCQUFXLHdCQUFVO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQVZNLHFCQUFVLEdBQUcsQ0FBQyxDQUFDO0lBVzFCLGlCQUFDO0NBWkQsQUFZQyxJQUFBO2tCQVpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VydmVyVGltZSB7XHJcbiAgICBzdGF0aWMgb2Zmc2V0VGltZSA9IDA7XHJcblxyXG4gICAgc3RhdGljIHNldE9mZnNldFRpbWUodjogYXBpRGF0YS5wb25nKSB7XHJcbiAgICAgICAgbGV0IG1zZ1RpbWUgPSBEYXRlLm5vdygpIC0gdi5jbGllbnRUaW1lO1xyXG4gICAgICAgIGxldCBzZXJ2ZXJOb3cgPSB2LnNlcnZlclRpbWUgKyBtc2dUaW1lIC8gMjtcclxuICAgICAgICB0aGlzLm9mZnNldFRpbWUgPSBNYXRoLnJvdW5kKHNlcnZlck5vdyAtIERhdGUubm93KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgc2VydmVyVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRoaXMub2Zmc2V0VGltZTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/playerInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bedaDuO5xI2aizBUI4EH2A', 'playerInfo');
// Script/component/playerInfo.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var playerInfo = /** @class */ (function (_super) {
    __extends(playerInfo, _super);
    function playerInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headImg = null;
        _this.nickName = null;
        _this.myScore = null;
        return _this;
    }
    playerInfo_1 = playerInfo;
    playerInfo.prototype.onLoad = function () {
        playerInfo_1.instance = this;
    };
    playerInfo.prototype.start = function () {
    };
    //接口回调成功后初始化信息显示
    playerInfo.prototype.init = function (data) {
        //初始化个人信息
        this.nickName.string = data.nickname;
        this.myScore.string = data.points.toString();
        this.spriteSetImgByUrl(this.headImg, data.avatar);
    };
    playerInfo.prototype.spriteSetImgByUrl = function (sp, url, complete) {
        if (complete === void 0) { complete = null; }
        if (!url)
            return;
        var remot = (url.indexOf("http") == 0);
        if (remot == true) {
            cc.loader.load(url + '?aaa=aa.jpg', function (err, texture) {
                var sprite = new cc.SpriteFrame(texture);
                sp.spriteFrame = sprite;
                if (complete)
                    complete();
            });
        }
        else {
            cc.loader.loadRes(url, function (err, texture) {
                var sprite = new cc.SpriteFrame(texture);
                sp.spriteFrame = sprite;
                if (complete)
                    complete();
            });
        }
    };
    playerInfo.prototype.update = function (dt) {
    };
    var playerInfo_1;
    playerInfo.instance = null;
    __decorate([
        property(cc.Sprite)
    ], playerInfo.prototype, "headImg", void 0);
    __decorate([
        property(cc.Label)
    ], playerInfo.prototype, "nickName", void 0);
    __decorate([
        property(cc.Label)
    ], playerInfo.prototype, "myScore", void 0);
    playerInfo = playerInfo_1 = __decorate([
        ccclass
    ], playerInfo);
    return playerInfo;
}(cc.Component));
exports.default = playerInfo;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXHBsYXllckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtREM7UUFqREcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGFBQU8sR0FBYSxJQUFJLENBQUM7O0lBMkM3QixDQUFDO21CQW5Eb0IsVUFBVTtJQWEzQiwyQkFBTSxHQUFOO1FBQ0ksWUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLHlCQUFJLEdBQUosVUFBSyxJQUF1QjtRQUN4QixTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sc0NBQWlCLEdBQXhCLFVBQXlCLEVBQWEsRUFBRSxHQUFXLEVBQUUsUUFBeUI7UUFBekIseUJBQUEsRUFBQSxlQUF5QjtRQUMxRSxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDakIsSUFBSSxLQUFLLEdBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQy9DLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNmLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFhLEVBQUUsVUFBVSxHQUFHLEVBQUUsT0FBTztnQkFDdEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QyxFQUFFLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsSUFBSSxRQUFRO29CQUFFLFFBQVEsRUFBRSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQUcsRUFBRSxPQUFPO2dCQUN6QyxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixJQUFJLFFBQVE7b0JBQUUsUUFBUSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sRUFBVTtJQUVqQixDQUFDOztJQXRDTSxtQkFBUSxHQUFlLElBQUksQ0FBQztJQVRuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDTTtJQVJSLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtRDlCO0lBQUQsaUJBQUM7Q0FuREQsQUFtREMsQ0FuRHVDLEVBQUUsQ0FBQyxTQUFTLEdBbURuRDtrQkFuRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tIFwiLi9nYW1lRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXllckluZm8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGhlYWRJbWc6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmlja05hbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBteVNjb3JlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZTogcGxheWVySW5mbyA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHBsYXllckluZm8uaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+aOpeWPo+Wbnuiwg+aIkOWKn+WQjuWIneWni+WMluS/oeaBr+aYvuekulxyXG4gICAgaW5pdChkYXRhOiBhcGlEYXRhLnVzZXJfaW5mbykge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5Liq5Lq65L+h5oGvXHJcbiAgICAgICAgdGhpcy5uaWNrTmFtZS5zdHJpbmcgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIHRoaXMubXlTY29yZS5zdHJpbmcgPSBkYXRhLnBvaW50cy50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlU2V0SW1nQnlVcmwodGhpcy5oZWFkSW1nLCBkYXRhLmF2YXRhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNwcml0ZVNldEltZ0J5VXJsKHNwOiBjYy5TcHJpdGUsIHVybDogc3RyaW5nLCBjb21wbGV0ZTogRnVuY3Rpb24gPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHJldHVybjtcclxuICAgICAgICBsZXQgcmVtb3Q6IGJvb2xlYW4gPSAodXJsLmluZGV4T2YoXCJodHRwXCIpID09IDApXHJcbiAgICAgICAgaWYgKHJlbW90ID09IHRydWUpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQodXJsICsgJz9hYWE9YWEuanBnJywgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwcml0ZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSBjb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZSkgY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/gameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9677xH4fZGW7wboJPS+jQ8', 'gameData');
// Script/component/gameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameData = void 0;
var LEvent_1 = require("../lightUI/events/LEvent");
var Dictionary_1 = require("../lightUI/utils/Dictionary");
var gameData;
(function (gameData) {
    /**
     * 主页信息
     */
    var roomData = /** @class */ (function () {
        function roomData() {
        }
        roomData.updateMarquee = function (bullet) {
            this.MARQUEE.push(bullet);
        };
        roomData.setTokenData = function (data) {
            this.tokenData = data;
        };
        roomData.tokenData = ""; //
        return roomData;
    }());
    gameData.roomData = roomData;
    /**
     * 用户信息
     */
    var userInfo = /** @class */ (function () {
        function userInfo() {
        }
        userInfo.setUsereInfo = function (data) {
            this.usereInfo = data;
        };
        userInfo.setDrawCard = function (data) {
            this.drawCard = data;
        };
        userInfo.setConfigData = function (data) {
            this.configData = data;
        };
        userInfo.usereInfo = null; //用户信息
        userInfo.drawCard = []; //用户拥有的卡片数组
        userInfo.configData = null; //活动配置信息
        return userInfo;
    }());
    gameData.userInfo = userInfo;
    /**
     * 接口请求
     */
    var httpServer = /** @class */ (function () {
        function httpServer() {
        }
        /**主页信息 用户信息 */
        httpServer.requestMainHomeInfo = function (callback) {
            var param = {};
            gameData.httpServer.httpGet("home", param, function (data) {
                callback && callback(data);
            });
        };
        /**抽一次卡牌或十次卡牌 */
        httpServer.requestOneDraw = function (num, callback) {
            var param = {};
            var api = num == 1 ? "draw_one" : "draw_ten";
            gameData.httpServer.httpPost(api, param, function (data) {
                callback && callback(data);
            });
        };
        /**合成卡
         * id：number --需要合成的卡牌id
        */
        httpServer.requestComposite = function (id, callback) {
            var param = {
                id: id
            };
            gameData.httpServer.httpPost("composite", param, function (data) {
                callback && callback(data);
            });
        };
        /**用户球星卡列表 */
        httpServer.requestUserCard = function (num, callback) {
            var param = {};
            gameData.httpServer.httpPost("user_card", param, function (data) {
                callback && callback(data);
            });
        };
        /**所有球星卡列表 */
        httpServer.requestCardList = function (num, callback) {
            var param = {};
            gameData.httpServer.httpPost("card_list", param, function (data) {
                callback && callback(data);
            });
        };
        /**奖励列表
         * type number --1-积分；2-卡牌；3-彩金
         */
        httpServer.requestCardAward = function (type, callback) {
            var param = {
                award: type
            };
            gameData.httpServer.httpPost("card_award", param, function (data) {
                callback && callback(data);
            });
        };
        /**领取奖励
         * id number --用户合成奖励ID
        */
        httpServer.requestReceiveAward = function (id, callback) {
            var param = {
                id: id
            };
            gameData.httpServer.httpPost("receive_award", param, function (data) {
                callback && callback(data);
            });
        };
        /**卡牌产出
         * time string --时间：today=今日；yesterday=昨日；week=近7日；month=近30日
        */
        httpServer.requestDrawCard = function (time, callback) {
            var param = {
                time: time
            };
            gameData.httpServer.httpPost("draw_card", param, function (data) {
                callback && callback(data);
            });
        };
        /**卡牌消耗
         *  time string --时间：today=今日；yesterday=昨日；week=近7日；month=近30日
         */
        httpServer.requestUserAward = function (time, callback) {
            var param = {
                time: time
            };
            gameData.httpServer.httpPost("user_award", param, function (data) {
                callback && callback(data);
            });
        };
        //短链接POST请求
        httpServer.httpPost = function (api, params, callback, fireParam) {
            var _this = this;
            if (fireParam === void 0) { fireParam = false; }
            var url = window.GetAppConfig()['apiAdrress'] + api;
            return new Promise(function (resolve, reject) {
                var xhr = cc.loader.getXMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status == 200) {
                        var respone = xhr.responseText;
                        console.log("respone ", respone);
                        if (callback) {
                            if (respone == "" || respone == null) {
                                if (fireParam == true)
                                    callback(params);
                                else
                                    callback(null);
                            }
                            else {
                                if (fireParam == true)
                                    callback(respone, params);
                                else
                                    callback(respone);
                            }
                        }
                    }
                    else if (xhr.readyState === 4 && xhr.status == 400) {
                        var respone = JSON.parse(xhr.responseText);
                        console.log("respone err", respone);
                    }
                    else if (xhr.readyState == 4 && xhr.status == 401) {
                        this.checkErro();
                    }
                }.bind(_this);
                xhr.open("POST", url, true);
                // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
                // xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader('Authorization', gameData.roomData.tokenData);
                xhr.timeout = 8000; // 5 seconds for timeout
                if (params == null) {
                    xhr.send();
                    return;
                }
                xhr.send(JSON.stringify(params));
            });
        };
        //短链接GET请求
        httpServer.httpGet = function (api, param, callback) {
            var url = window.GetAppConfig()['apiAdrress'] + api;
            var xhr = cc.loader.getXMLHttpRequest();
            param = (param) ? param : {};
            var params = [];
            for (var key in param) {
                params.push(key + '=' + param[key]);
            }
            //参数拼接方式
            // var dataStr = params.join('&');
            // url += "?" + dataStr;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    var respone = xhr.responseText;
                    if (respone)
                        respone = JSON.parse(respone);
                    console.log("response ", respone instanceof Array, respone);
                    callback && callback(respone);
                }
                else if (xhr.readyState === 4 && xhr.status == 400) {
                    var respone = JSON.parse(xhr.responseText);
                    console.log("respone err", respone);
                }
                else {
                }
            }.bind(this);
            xhr.withCredentials = true;
            xhr.open("GET", url, true);
            // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            // xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
            xhr.setRequestHeader("Content-Type", " text/html");
            xhr.setRequestHeader('Authorization', gameData.roomData.tokenData);
            xhr.timeout = 8000; // 8 seconds for timeout
            xhr.send();
        };
        return httpServer;
    }());
    gameData.httpServer = httpServer;
    /**
     * 读写文件
     */
    var WebviewWriteAndReadFile = /** @class */ (function () {
        function WebviewWriteAndReadFile() {
        }
        Object.defineProperty(WebviewWriteAndReadFile, "volumeMusic", {
            get: function () {
                var betNum = cc.sys.localStorage.getItem("autoBetScore") || 0;
                return betNum;
            },
            set: function (autoBet) {
                cc.sys.localStorage.setItem("autoBetScore", autoBet);
            },
            enumerable: false,
            configurable: true
        });
        WebviewWriteAndReadFile.fileJson = null;
        return WebviewWriteAndReadFile;
    }());
    gameData.WebviewWriteAndReadFile = WebviewWriteAndReadFile;
    /**
     * 加载预制体
     * 二级弹窗
     */
    var PreloadPrefab = /** @class */ (function () {
        function PreloadPrefab() {
        }
        //预加载预制体
        PreloadPrefab.loadPrefab = function () {
            var prefab = [PreloadPrefab.pgz_layer, PreloadPrefab.sjhg_layer, PreloadPrefab.yxsz_layer, PreloadPrefab.chat1, PreloadPrefab.chat2, PreloadPrefab.jsfj_layer, PreloadPrefab.jackpot_detail, PreloadPrefab.redBagNode, PreloadPrefab.redbag_layer, PreloadPrefab.home_bg_mohu, PreloadPrefab.shopView];
            prefab.forEach(function (value, index) {
                cc.resources.preload(value);
            });
        };
        //优先加载托管弹窗&&房间信息弹窗资源
        PreloadPrefab.loadPrefabFirst = function () {
            var prefab = [PreloadPrefab.thRoomDataView];
            prefab.forEach(function (value, index) {
                cc.resources.preload(value);
            });
        };
        /**
         * 加载UI
         * @param url
         * @param parent
         * @param mask              default true    是否需要挡住下层点击
         * @param autoRemove           default true     是否自动移除  是的话 在接受node close事件时候 销毁和移除ui
         * @param completeHandler
         * @param progressCallback
         */
        PreloadPrefab.loadUI = function (url, parent, mask, autoRemove, completeHandler, progressCallback) {
            if (mask === void 0) { mask = true; }
            if (autoRemove === void 0) { autoRemove = true; }
            var ui = this._uiDic.get(url);
            if (ui) {
                PreloadPrefab.showUI(url, ui, parent, mask, autoRemove, completeHandler);
            }
            else {
                cc.loader.loadRes(url, progressCallback, function (err, prefab) {
                    if (err == null && prefab) {
                        var ui_1 = cc.instantiate(prefab);
                        if (ui_1) {
                            PreloadPrefab.showUI(url, ui_1, parent, mask, autoRemove, completeHandler);
                        }
                    }
                    else {
                        cc.warn("加载UI：" + url + "错误");
                    }
                });
            }
        };
        /**显示 UI */
        PreloadPrefab.showUI = function (url, ui, parent, mask, autoRemove, completeHandler) {
            if (mask === void 0) { mask = true; }
            if (autoRemove === void 0) { autoRemove = false; }
            console.log("showUI url:", url);
            this._uiDic.set(url, ui);
            if (ui.parent != null) {
                if (completeHandler)
                    completeHandler(ui);
                return;
            }
            // if (mask == true) ui.on(cc.Node.EventType.TOUCH_START, () => { })
            if (mask == true)
                ui.addComponent(cc.BlockInputEvents);
            if (parent)
                parent.addChild(ui);
            if (completeHandler)
                completeHandler(ui);
            setTimeout(function () {
                //确保 第一次时候  onShow 在start后触发
                ui.dispatchEvent(new LEvent_1.default(LEvent_1.default.SHOW));
            }, 0);
            if (autoRemove == true)
                ui.on(LEvent_1.default.CLOSE, function (e) {
                    //做好消除工作
                    var node = e.target;
                    PreloadPrefab.disdroyUI(url);
                });
        };
        PreloadPrefab.getUI = function (url) {
            return this._uiDic.get(url);
        };
        PreloadPrefab.addUI = function (ui, parent, mask, autoRemove) {
            if (mask === void 0) { mask = true; }
            if (autoRemove === void 0) { autoRemove = false; }
            if (mask == true)
                ui.addComponent(cc.BlockInputEvents);
            if (parent)
                parent.addChild(ui);
            ui.dispatchEvent(new LEvent_1.default(LEvent_1.default.SHOW));
            if (autoRemove == true)
                ui.on(LEvent_1.default.CLOSE, function (e) {
                    //做好消除工作
                    var node = e.target;
                    node.destroy();
                });
        };
        PreloadPrefab.getNodeUrl = function (node) {
            for (var _i = 0, _a = this._uiDic.keys; _i < _a.length; _i++) {
                var k = _a[_i];
                if (this._uiDic.get(k) == node)
                    return k;
            }
            return null;
        };
        PreloadPrefab.getUIComponent = function (url, clazz) {
            return PreloadPrefab.getUI(url).getComponent(clazz);
        };
        /**
         * 销毁UI
         * @param url
         */
        PreloadPrefab.disdroyUI = function (url) {
            // console.log("disdroyUI url:", url)
            var node = this.hideUI(url);
            if (node == null)
                return;
            node.destroy();
            this._uiDic.remove(url);
        };
        PreloadPrefab.removeUI = function (url) {
            var node = this._uiDic.get(url);
            node.removeFromParent(false);
        };
        PreloadPrefab.removeAllUI = function () {
            var d = this._uiDic;
            for (var key in d) {
                d[key].removeFromParent(false);
            }
        };
        PreloadPrefab.removeUIByNode = function (node) {
            var url = this.getNodeUrl(node);
            if (!url)
                return;
            this.removeUI(url);
        };
        /**
         * 隐藏ui
         * @param url
         * @returns
         */
        PreloadPrefab.hideUI = function (url) {
            // console.log("hideUI ", url)
            var ui = this._uiDic.get(url);
            if (ui == null)
                return null;
            ui.removeFromParent(false);
            return ui;
        };
        PreloadPrefab._uiDic = new Dictionary_1.default;
        PreloadPrefab.chat1 = "prefabs/chat1"; //聊天窗1
        PreloadPrefab.chat2 = "prefabs/chat2"; //聊天窗2
        PreloadPrefab.jsfj_layer = "prefabs/jsfj_layer"; //解散房间
        PreloadPrefab.yxsz_layer = "prefabs/yxsz_layer"; //游戏设置
        PreloadPrefab.sjhg_layer = "prefabs/sjhg_layer"; //上局回顾
        PreloadPrefab.pgz_layer = "prefabs/pgz_layer"; //旁观列表
        PreloadPrefab.thRoomDataView = "hall/teahouse/main/ThRoomDataView"; //房间详情
        PreloadPrefab.jackpot_detail = "prefabs/jackpot_detail"; //大奖池详情
        PreloadPrefab.redBagNode = "prefabs/redBagNode"; //抢红包
        PreloadPrefab.redbag_layer = "prefabs/redbag_layer"; //红包雨
        PreloadPrefab.home_bg_mohu = "prefabs/home_bg_mohu"; //战绩
        PreloadPrefab.shopView = "hall/main/shopView"; //充值
        PreloadPrefab.grxx_layer = "prefabs/grxx_layer"; //个人信息
        PreloadPrefab.trusteeTip1 = "prefabs/trusteeTip1";
        PreloadPrefab.trusteeTip2 = "prefabs/trusteeTip2";
        PreloadPrefab.trusteeShip = "prefabs/trusteeShip";
        return PreloadPrefab;
    }());
    gameData.PreloadPrefab = PreloadPrefab;
    /**
     * 原生函数调用
     */
    var nataviApi = /** @class */ (function () {
        function nataviApi() {
        }
        nataviApi.rnOperaData = function () {
            return window['RnOpera'];
        };
        nataviApi.rnOpera = function (data) {
            nataviApi.rnOperaData() && window['RnOpera'](data);
        };
        nataviApi.backHall = function () {
            window['backHall'] && window['backHall']();
        };
        //原生端震动接口pattern[]在 Android 上，pattern数组的奇数索引代表振动持续时间，而偶数索引代表分离时间。在 iOS 上，pattern数组中的数字代表分离时间，因为振动持续时间是固定的。
        // repeat-是否重复震动
        nataviApi.vibrate = function (pattern, repeat, webview, navigation) {
            if (gameData.WebviewWriteAndReadFile.fileJson && gameData.WebviewWriteAndReadFile.fileJson.shake <= 0)
                return;
            if (cc.sys.isMobile)
                window['RnOpera']({ cmd: 'vibrate', data: {} });
            // (pattern?: number | number[] | null, repeat?: boolean | null): void;
        };
        //cancel()被调用
        nataviApi.cancelVibrate = function () {
            if (cc.sys.isMobile)
                window['RnOpera']({ cmd: 'cancel()' });
        };
        return nataviApi;
    }());
    gameData.nataviApi = nataviApi;
    /**
     * 内部消息收发管理
     */
    var messageFlag = /** @class */ (function () {
        function messageFlag() {
        }
        return messageFlag;
    }());
    gameData.messageFlag = messageFlag;
    /**
     * 显示界面类型
     */
    var SHOW_LAYER_TYPE;
    (function (SHOW_LAYER_TYPE) {
        SHOW_LAYER_TYPE["MAIN_HOME"] = "MAIN_HOME";
        SHOW_LAYER_TYPE["CARD_BAG"] = "CARD_BAG";
        SHOW_LAYER_TYPE["CARD_EXCHANGE"] = "CARD_EXCHANGE";
        SHOW_LAYER_TYPE["CARD_RECORD"] = "CARD_RECORD";
    })(SHOW_LAYER_TYPE = gameData.SHOW_LAYER_TYPE || (gameData.SHOW_LAYER_TYPE = {}));
})(gameData = exports.gameData || (exports.gameData = {}));

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXGdhbWVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5QywwREFBcUQ7QUFFckQsSUFBaUIsUUFBUSxDQTZieEI7QUE3YkQsV0FBaUIsUUFBUTtJQUNyQjs7T0FFRztJQUNIO1FBQUE7UUFjQSxDQUFDO1FBUmlCLHNCQUFhLEdBQTNCLFVBQTRCLE1BQTZCO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFYSxxQkFBWSxHQUExQixVQUEyQixJQUFZO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7UUFYYSxrQkFBUyxHQUFHLEVBQUUsQ0FBQyxDQUFBLEVBQUU7UUFhbkMsZUFBQztLQWRELEFBY0MsSUFBQTtJQWRZLGlCQUFRLFdBY3BCLENBQUE7SUFFRDs7T0FFRztJQUNIO1FBQUE7UUFnQkEsQ0FBQztRQVhpQixxQkFBWSxHQUExQixVQUEyQixJQUFTO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7UUFFYSxvQkFBVyxHQUF6QixVQUEwQixJQUFTO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFFYSxzQkFBYSxHQUEzQixVQUE0QixJQUFTO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUM7UUFkYSxrQkFBUyxHQUFzQixJQUFJLENBQUMsQ0FBQSxNQUFNO1FBQzFDLGlCQUFRLEdBQVUsRUFBRSxDQUFDLENBQUEsV0FBVztRQUNoQyxtQkFBVSxHQUF3QixJQUFJLENBQUMsQ0FBQSxRQUFRO1FBYWpFLGVBQUM7S0FoQkQsQUFnQkMsSUFBQTtJQWhCWSxpQkFBUSxXQWdCcEIsQ0FBQTtJQUVEOztPQUVHO0lBQ0g7UUFBQTtRQWdMQSxDQUFDO1FBL0tHLGVBQWU7UUFDRCw4QkFBbUIsR0FBakMsVUFBa0MsUUFBa0I7WUFDaEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQ2QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLElBQVM7Z0JBQzFELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsZ0JBQWdCO1FBQ0YseUJBQWMsR0FBNUIsVUFBNkIsR0FBRyxFQUFFLFFBQWtCO1lBQ2hELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQTtZQUNkLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFBLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ3pDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsVUFBVSxJQUFTO2dCQUN4RCxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVEOztVQUVFO1FBQ1ksMkJBQWdCLEdBQTlCLFVBQStCLEVBQUUsRUFBRSxRQUFrQjtZQUNqRCxJQUFJLEtBQUssR0FBRztnQkFDUixFQUFFLEVBQUUsRUFBRTthQUNULENBQUE7WUFDRCxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsSUFBUztnQkFDaEUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxhQUFhO1FBQ0MsMEJBQWUsR0FBN0IsVUFBOEIsR0FBRyxFQUFFLFFBQWtCO1lBQ2pELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQTtZQUNkLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxJQUFTO2dCQUNoRSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELGFBQWE7UUFDQywwQkFBZSxHQUE3QixVQUE4QixHQUFHLEVBQUUsUUFBa0I7WUFDakQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQ2QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLElBQVM7Z0JBQ2hFLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQ7O1dBRUc7UUFDVywyQkFBZ0IsR0FBOUIsVUFBK0IsSUFBSSxFQUFFLFFBQWtCO1lBQ25ELElBQUksS0FBSyxHQUFHO2dCQUNSLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQTtZQUNELFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxJQUFTO2dCQUNqRSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVEOztVQUVFO1FBQ1ksOEJBQW1CLEdBQWpDLFVBQWtDLEVBQUUsRUFBRSxRQUFrQjtZQUNwRCxJQUFJLEtBQUssR0FBRztnQkFDUixFQUFFLEVBQUUsRUFBRTthQUNULENBQUE7WUFDRCxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLFVBQVUsSUFBUztnQkFDcEUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRDs7VUFFRTtRQUNZLDBCQUFlLEdBQTdCLFVBQThCLElBQUksRUFBRSxRQUFrQjtZQUNsRCxJQUFJLEtBQUssR0FBRztnQkFDUixJQUFJLEVBQUUsSUFBSTthQUNiLENBQUE7WUFDRCxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsSUFBUztnQkFDaEUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRDs7V0FFRztRQUNXLDJCQUFnQixHQUE5QixVQUErQixJQUFJLEVBQUUsUUFBa0I7WUFDbkQsSUFBSSxLQUFLLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDYixDQUFBO1lBQ0QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLElBQVM7Z0JBQ2pFLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBR0QsV0FBVztRQUNHLG1CQUFRLEdBQXRCLFVBQXVCLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBa0IsRUFBRSxTQUEwQjtZQUFsRixpQkF3Q0M7WUF4Q3VELDBCQUFBLEVBQUEsaUJBQTBCO1lBQzlFLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUM7WUFFcEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUMvQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3hDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztvQkFDckIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTt3QkFDM0MsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQzt3QkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ2pDLElBQUksUUFBUSxFQUFFOzRCQUNWLElBQUksT0FBTyxJQUFJLEVBQUUsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dDQUNsQyxJQUFJLFNBQVMsSUFBSSxJQUFJO29DQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7b0NBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDdkI7aUNBQU07Z0NBQ0gsSUFBSSxTQUFTLElBQUksSUFBSTtvQ0FBRSxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztvQ0FDNUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUMxQjt5QkFDSjtxQkFDSjt5QkFBTSxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO3dCQUNsRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ3ZDO3lCQUFNLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7d0JBQ2pELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztxQkFDcEI7Z0JBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztnQkFFYixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLDREQUE0RDtnQkFDNUQscUVBQXFFO2dCQUNyRSx5RkFBeUY7Z0JBQ3pGLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDekQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVuRSxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBLHdCQUF3QjtnQkFDM0MsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO29CQUNoQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1gsT0FBTztpQkFDVjtnQkFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFRCxVQUFVO1FBQ0ksa0JBQU8sR0FBckIsVUFBc0IsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFrQjtZQUNoRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBRXBELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN4QyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDN0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7WUFDRCxRQUFRO1lBQ1Isa0NBQWtDO1lBQ2xDLHdCQUF3QjtZQUV4QixHQUFHLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3JCLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO29CQUNoRSxJQUFJLE9BQU8sR0FBUSxHQUFHLENBQUMsWUFBWSxDQUFDO29CQUNwQyxJQUFJLE9BQU87d0JBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sWUFBWSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQzVELFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQ2hDO3FCQUFLLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7b0JBQ2pELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07aUJBQ047WUFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWIsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTNCLDREQUE0RDtZQUM1RCxxRUFBcUU7WUFDckUseUZBQXlGO1lBQ3pGLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbkQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25FLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUEsd0JBQXdCO1lBQzNDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFDTCxpQkFBQztJQUFELENBaExBLEFBZ0xDLElBQUE7SUFoTFksbUJBQVUsYUFnTHRCLENBQUE7SUFFRDs7T0FFRztJQUNIO1FBQUE7UUFVQSxDQUFDO1FBUEcsc0JBQVcsc0NBQVc7aUJBQXRCO2dCQUNJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELE9BQU8sTUFBTSxDQUFBO1lBQ2pCLENBQUM7aUJBQ0QsVUFBdUIsT0FBWTtnQkFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBQyxPQUFPLENBQUMsQ0FBQTtZQUN2RCxDQUFDOzs7V0FIQTtRQUxhLGdDQUFRLEdBQUcsSUFBSSxDQUFDO1FBU2xDLDhCQUFDO0tBVkQsQUFVQyxJQUFBO0lBVlksZ0NBQXVCLDBCQVVuQyxDQUFBO0lBRUQ7OztPQUdHO0lBQ0g7UUFBQTtRQXdKQSxDQUFDO1FBcElHLFFBQVE7UUFDTSx3QkFBVSxHQUF4QjtZQUNJLElBQUksTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBQyxhQUFhLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxZQUFZLEVBQUMsYUFBYSxDQUFDLFlBQVksRUFBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcFMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO2dCQUN4QixFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFRCxvQkFBb0I7UUFDTiw2QkFBZSxHQUE3QjtZQUNJLElBQUksTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztnQkFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBRUQ7Ozs7Ozs7O1dBUUc7UUFDVyxvQkFBTSxHQUFwQixVQUFxQixHQUFXLEVBQUUsTUFBZSxFQUFFLElBQW9CLEVBQUUsVUFBMEIsRUFBRSxlQUF5QyxFQUFFLGdCQUFrRjtZQUEvSyxxQkFBQSxFQUFBLFdBQW9CO1lBQUUsMkJBQUEsRUFBQSxpQkFBMEI7WUFDL0YsSUFBSSxFQUFFLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsSUFBSSxFQUFFLEVBQUU7Z0JBQ0osYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQzVFO2lCQUFNO2dCQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFDbkMsVUFBQyxHQUFHLEVBQUUsTUFBTTtvQkFDUixJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO3dCQUN2QixJQUFJLElBQUUsR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO3dCQUN4QyxJQUFJLElBQUUsRUFBRTs0QkFDSixhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUM7eUJBQzVFO3FCQUNKO3lCQUFNO3dCQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztxQkFDakM7Z0JBQ0wsQ0FBQyxDQUNKLENBQUM7YUFDTDtRQUNMLENBQUM7UUFFRCxXQUFXO1FBQ0csb0JBQU0sR0FBcEIsVUFBcUIsR0FBVyxFQUFFLEVBQVcsRUFBRSxNQUFlLEVBQUUsSUFBb0IsRUFBRSxVQUEyQixFQUFFLGVBQXlDO1lBQTVGLHFCQUFBLEVBQUEsV0FBb0I7WUFBRSwyQkFBQSxFQUFBLGtCQUEyQjtZQUM3RyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekIsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDbkIsSUFBSSxlQUFlO29CQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekMsT0FBTzthQUNWO1lBQ0Qsb0VBQW9FO1lBQ3BFLElBQUksSUFBSSxJQUFJLElBQUk7Z0JBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN2RCxJQUFJLE1BQU07Z0JBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQyxJQUFJLGVBQWU7Z0JBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLFVBQVUsQ0FBQztnQkFDUCw0QkFBNEI7Z0JBQzVCLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxnQkFBTSxDQUFDLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLFVBQVUsSUFBSSxJQUFJO2dCQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLEVBQUUsVUFBQyxDQUFTO29CQUNsRCxRQUFRO29CQUNSLElBQUksSUFBSSxHQUFZLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQzdCLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNhLG1CQUFLLEdBQW5CLFVBQW9CLEdBQVc7WUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ2EsbUJBQUssR0FBbkIsVUFBb0IsRUFBVyxFQUFFLE1BQWUsRUFBRSxJQUFvQixFQUFFLFVBQTJCO1lBQWpELHFCQUFBLEVBQUEsV0FBb0I7WUFBRSwyQkFBQSxFQUFBLGtCQUEyQjtZQUMvRixJQUFJLElBQUksSUFBSSxJQUFJO2dCQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdkQsSUFBSSxNQUFNO2dCQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGdCQUFNLENBQUMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksVUFBVSxJQUFJLElBQUk7Z0JBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBTSxDQUFDLEtBQUssRUFBRSxVQUFDLENBQVM7b0JBQ2xELFFBQVE7b0JBQ1IsSUFBSSxJQUFJLEdBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDYSx3QkFBVSxHQUF4QixVQUF5QixJQUFhO1lBQ2xDLEtBQWMsVUFBZ0IsRUFBaEIsS0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBaEIsY0FBZ0IsRUFBaEIsSUFBZ0IsRUFBRTtnQkFBM0IsSUFBSSxDQUFDLFNBQUE7Z0JBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO29CQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNhLDRCQUFjLEdBQTVCLFVBQWdDLEdBQVcsRUFBRSxLQUFRO1lBQ2pELE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBWSxDQUFRLENBQUM7UUFDdEUsQ0FBQztRQUVEOzs7V0FHRztRQUNXLHVCQUFTLEdBQXZCLFVBQXdCLEdBQVc7WUFDL0IscUNBQXFDO1lBQ3JDLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLElBQUksSUFBSTtnQkFBRSxPQUFPO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFYSxzQkFBUSxHQUF0QixVQUF1QixHQUFXO1lBQzlCLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRWEseUJBQVcsR0FBekI7WUFDSSxJQUFJLENBQUMsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2hDLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNmLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUM7UUFDYSw0QkFBYyxHQUE1QixVQUE2QixJQUFhO1lBQ3RDLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUc7Z0JBQUUsT0FBTztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7OztXQUlHO1FBQ1csb0JBQU0sR0FBcEIsVUFBcUIsR0FBVztZQUM1Qiw4QkFBOEI7WUFDOUIsSUFBSSxFQUFFLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsSUFBSSxFQUFFLElBQUksSUFBSTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUM1QixFQUFFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBckphLG9CQUFNLEdBQWUsSUFBSSxvQkFBVSxDQUFDO1FBQ3BDLG1CQUFLLEdBQVcsZUFBZSxDQUFDLENBQUEsTUFBTTtRQUN0QyxtQkFBSyxHQUFXLGVBQWUsQ0FBQyxDQUFBLE1BQU07UUFDdEMsd0JBQVUsR0FBVyxvQkFBb0IsQ0FBQyxDQUFBLE1BQU07UUFDaEQsd0JBQVUsR0FBVyxvQkFBb0IsQ0FBQyxDQUFBLE1BQU07UUFDaEQsd0JBQVUsR0FBVyxvQkFBb0IsQ0FBQyxDQUFBLE1BQU07UUFDaEQsdUJBQVMsR0FBVyxtQkFBbUIsQ0FBQyxDQUFBLE1BQU07UUFDOUMsNEJBQWMsR0FBVyxtQ0FBbUMsQ0FBQyxDQUFBLE1BQU07UUFDbkUsNEJBQWMsR0FBVyx3QkFBd0IsQ0FBQyxDQUFBLE9BQU87UUFDekQsd0JBQVUsR0FBVyxvQkFBb0IsQ0FBQyxDQUFBLEtBQUs7UUFDL0MsMEJBQVksR0FBVyxzQkFBc0IsQ0FBQyxDQUFBLEtBQUs7UUFDbkQsMEJBQVksR0FBVyxzQkFBc0IsQ0FBQyxDQUFBLElBQUk7UUFDbEQsc0JBQVEsR0FBVyxvQkFBb0IsQ0FBQyxDQUFBLElBQUk7UUFDNUMsd0JBQVUsR0FBVyxvQkFBb0IsQ0FBQyxDQUFBLE1BQU07UUFFaEQseUJBQVcsR0FBVyxxQkFBcUIsQ0FBQztRQUM1Qyx5QkFBVyxHQUFXLHFCQUFxQixDQUFDO1FBQzVDLHlCQUFXLEdBQVcscUJBQXFCLENBQUM7UUFzSTlELG9CQUFDO0tBeEpELEFBd0pDLElBQUE7SUF4Slksc0JBQWEsZ0JBd0p6QixDQUFBO0lBRUQ7O09BRUc7SUFDSDtRQUFBO1FBMEJBLENBQUM7UUF4QmlCLHFCQUFXLEdBQXpCO1lBQ0ksT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUVhLGlCQUFPLEdBQXJCLFVBQXNCLElBQUk7WUFDdEIsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBRWEsa0JBQVEsR0FBdEI7WUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDL0MsQ0FBQztRQUVELDBHQUEwRztRQUMxRyxnQkFBZ0I7UUFDRixpQkFBTyxHQUFyQixVQUFzQixPQUFrQixFQUFFLE1BQWdCLEVBQUUsT0FBUSxFQUFFLFVBQVc7WUFDN0UsSUFBRyxRQUFRLENBQUMsdUJBQXVCLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFHLENBQUM7Z0JBQUMsT0FBTztZQUMzRyxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUTtnQkFBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQzlELHVFQUF1RTtRQUMzRSxDQUFDO1FBRUQsYUFBYTtRQUNDLHVCQUFhLEdBQTNCO1lBQ0ksSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVE7Z0JBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtJQTFCWSxrQkFBUyxZQTBCckIsQ0FBQTtJQUVEOztPQUVHO0lBQ0g7UUFBQTtRQUtBLENBQUM7UUFBRCxrQkFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksb0JBQVcsY0FLdkIsQ0FBQTtJQUVEOztPQUVHO0lBQ0YsSUFBWSxlQUtaO0lBTEEsV0FBWSxlQUFlO1FBQ3hCLDBDQUF1QixDQUFBO1FBQ3ZCLHdDQUFxQixDQUFBO1FBQ3JCLGtEQUErQixDQUFBO1FBQy9CLDhDQUEyQixDQUFBO0lBQy9CLENBQUMsRUFMWSxlQUFlLEdBQWYsd0JBQWUsS0FBZix3QkFBZSxRQUszQjtBQUNMLENBQUMsRUE3YmdCLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBNmJ4QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMRXZlbnQgZnJvbSBcIi4uL2xpZ2h0VUkvZXZlbnRzL0xFdmVudFwiO1xyXG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tIFwiLi4vbGlnaHRVSS91dGlscy9EaWN0aW9uYXJ5XCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIGdhbWVEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICog5Li76aG15L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyByb29tRGF0YSB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB0b2tlbkRhdGEgPSBcIlwiOy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqIOi3kemprOeBr+a2iOaBryovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBNQVJRVUVFOiBhbnlbXTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB1cGRhdGVNYXJxdWVlKGJ1bGxldDogYXBpRGF0YS5idWxsZXRpbl9pbmZvKXtcclxuICAgICAgICAgICAgdGhpcy5NQVJRVUVFLnB1c2goYnVsbGV0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2V0VG9rZW5EYXRhKGRhdGE6IHN0cmluZykge1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55So5oi35L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyB1c2VySW5mbyB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB1c2VyZUluZm86IGFwaURhdGEudXNlcl9pbmZvID0gbnVsbDsvL+eUqOaIt+S/oeaBr1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZHJhd0NhcmQ6IGFueVtdID0gW107Ly/nlKjmiLfmi6XmnInnmoTljaHniYfmlbDnu4RcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNvbmZpZ0RhdGE6IGFwaURhdGEuY29uZmlnX2luZm8gPSBudWxsOy8v5rS75Yqo6YWN572u5L+h5oGvXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2V0VXNlcmVJbmZvKGRhdGE6IGFueSl7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcmVJbmZvID0gZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2V0RHJhd0NhcmQoZGF0YTogYW55KXtcclxuICAgICAgICAgICAgdGhpcy5kcmF3Q2FyZCA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNldENvbmZpZ0RhdGEoZGF0YTogYW55KXtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdEYXRhID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqXlj6Por7fmsYJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGh0dHBTZXJ2ZXIge1xyXG4gICAgICAgIC8qKuS4u+mhteS/oeaBryDnlKjmiLfkv6Hmga8gKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3RNYWluSG9tZUluZm8oY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IHt9XHJcbiAgICAgICAgICAgIGdhbWVEYXRhLmh0dHBTZXJ2ZXIuaHR0cEdldChcImhvbWVcIiwgcGFyYW0sIGZ1bmN0aW9uIChkYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKuaKveS4gOasoeWNoeeJjOaIluWNgeasoeWNoeeJjCAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdE9uZURyYXcobnVtLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtID0ge31cclxuICAgICAgICAgICAgbGV0IGFwaSA9IG51bT09MT9cImRyYXdfb25lXCIgOiBcImRyYXdfdGVuXCI7XHJcbiAgICAgICAgICAgIGdhbWVEYXRhLmh0dHBTZXJ2ZXIuaHR0cFBvc3QoYXBpLCBwYXJhbSwgZnVuY3Rpb24gKGRhdGE6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoq5ZCI5oiQ5Y2hIFxyXG4gICAgICAgICAqIGlk77yabnVtYmVyIC0t6ZyA6KaB5ZCI5oiQ55qE5Y2h54mMaWRcclxuICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdENvbXBvc2l0ZShpZCwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdhbWVEYXRhLmh0dHBTZXJ2ZXIuaHR0cFBvc3QoXCJjb21wb3NpdGVcIiwgcGFyYW0sIGZ1bmN0aW9uIChkYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKueUqOaIt+eQg+aYn+WNoeWIl+ihqCAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdFVzZXJDYXJkKG51bSwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IHt9XHJcbiAgICAgICAgICAgIGdhbWVEYXRhLmh0dHBTZXJ2ZXIuaHR0cFBvc3QoXCJ1c2VyX2NhcmRcIiwgcGFyYW0sIGZ1bmN0aW9uIChkYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKuaJgOacieeQg+aYn+WNoeWIl+ihqCAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdENhcmRMaXN0KG51bSwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IHt9XHJcbiAgICAgICAgICAgIGdhbWVEYXRhLmh0dHBTZXJ2ZXIuaHR0cFBvc3QoXCJjYXJkX2xpc3RcIiwgcGFyYW0sIGZ1bmN0aW9uIChkYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKuWlluWKseWIl+ihqFxyXG4gICAgICAgICAqIHR5cGUgbnVtYmVyIC0tMS3np6/liIbvvJsyLeWNoeeJjO+8mzMt5b2p6YeRXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZXF1ZXN0Q2FyZEF3YXJkKHR5cGUsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgICAgICBhd2FyZDogdHlwZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdhbWVEYXRhLmh0dHBTZXJ2ZXIuaHR0cFBvc3QoXCJjYXJkX2F3YXJkXCIsIHBhcmFtLCBmdW5jdGlvbiAoZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKirpooblj5blpZblirEgXHJcbiAgICAgICAgICogaWQgbnVtYmVyIC0t55So5oi35ZCI5oiQ5aWW5YqxSURcclxuICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdFJlY2VpdmVBd2FyZChpZCwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdhbWVEYXRhLmh0dHBTZXJ2ZXIuaHR0cFBvc3QoXCJyZWNlaXZlX2F3YXJkXCIsIHBhcmFtLCBmdW5jdGlvbiAoZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKirljaHniYzkuqflh7ogXHJcbiAgICAgICAgICogdGltZSBzdHJpbmcgLS3ml7bpl7TvvJp0b2RheT3ku4rml6XvvJt5ZXN0ZXJkYXk95pio5pel77ybd2Vlaz3ov5E35pel77ybbW9udGg96L+RMzDml6VcclxuICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdERyYXdDYXJkKHRpbWUsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2FtZURhdGEuaHR0cFNlcnZlci5odHRwUG9zdChcImRyYXdfY2FyZFwiLCBwYXJhbSwgZnVuY3Rpb24gKGRhdGE6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoq5Y2h54mM5raI6ICXXHJcbiAgICAgICAgICogIHRpbWUgc3RyaW5nIC0t5pe26Ze077yadG9kYXk95LuK5pel77ybeWVzdGVyZGF5PeaYqOaXpe+8m3dlZWs96L+RN+aXpe+8m21vbnRoPei/kTMw5pelXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZXF1ZXN0VXNlckF3YXJkKHRpbWUsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2FtZURhdGEuaHR0cFNlcnZlci5odHRwUG9zdChcInVzZXJfYXdhcmRcIiwgcGFyYW0sIGZ1bmN0aW9uIChkYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8v55+t6ZO+5o6lUE9TVOivt+axglxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaHR0cFBvc3QoYXBpLCBwYXJhbXMsIGNhbGxiYWNrOiBGdW5jdGlvbiwgZmlyZVBhcmFtOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5HZXRBcHBDb25maWcoKVsnYXBpQWRycmVzcyddICsgYXBpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25lIFwiLCByZXNwb25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZSA9PSBcIlwiIHx8IHJlc3BvbmUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJlUGFyYW0gPT0gdHJ1ZSkgY2FsbGJhY2socGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhbGxiYWNrKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyZVBhcmFtID09IHRydWUpIGNhbGxiYWNrKHJlc3BvbmUsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYWxsYmFjayhyZXNwb25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbmUgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbmUgZXJyXCIsIHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRXJybygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NUJyk7XHJcbiAgICAgICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICd4LXJlcXVlc3RlZC13aXRoLGNvbnRlbnQtdHlwZScpO1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBnYW1lRGF0YS5yb29tRGF0YS50b2tlbkRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHhoci50aW1lb3V0ID0gODAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+efremTvuaOpUdFVOivt+axglxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaHR0cEdldChhcGksIHBhcmFtLCBjYWxsYmFjazogRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gd2luZG93LkdldEFwcENvbmZpZygpWydhcGlBZHJyZXNzJ10gKyBhcGk7XHJcblxyXG4gICAgICAgICAgICBsZXQgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHBhcmFtID0gKHBhcmFtKSA/IHBhcmFtIDoge307XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChrZXkgKyAnPScgKyBwYXJhbVtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WPguaVsOaLvOaOpeaWueW8j1xyXG4gICAgICAgICAgICAvLyB2YXIgZGF0YVN0ciA9IHBhcmFtcy5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIC8vIHVybCArPSBcIj9cIiArIGRhdGFTdHI7XHJcblxyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbmU6IGFueSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmUpIHJlc3BvbmUgPSBKU09OLnBhcnNlKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgXCIsIHJlc3BvbmUgaW5zdGFuY2VvZiBBcnJheSwgcmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzcG9uZSlcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25lID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbmUgZXJyXCIsIHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NUJyk7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ3gtcmVxdWVzdGVkLXdpdGgsY29udGVudC10eXBlJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiIHRleHQvaHRtbFwiKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBnYW1lRGF0YS5yb29tRGF0YS50b2tlbkRhdGEpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7Ly8gOCBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+75YaZ5paH5Lu2XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBXZWJ2aWV3V3JpdGVBbmRSZWFkRmlsZSB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBmaWxlSnNvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXQgdm9sdW1lTXVzaWMoKXtcclxuICAgICAgICAgICAgbGV0IGJldE51bSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dG9CZXRTY29yZVwiKSB8fCAwO1xyXG4gICAgICAgICAgICByZXR1cm4gYmV0TnVtXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBzZXQgdm9sdW1lTXVzaWMoYXV0b0JldDogYW55KXtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0b0JldFNjb3JlXCIsYXV0b0JldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3pooTliLbkvZNcclxuICAgICAqIOS6jOe6p+W8ueeql1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgUHJlbG9hZFByZWZhYiB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBfdWlEaWM6IERpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeTtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNoYXQxOiBzdHJpbmcgPSBcInByZWZhYnMvY2hhdDFcIjsvL+iBiuWkqeeqlzFcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNoYXQyOiBzdHJpbmcgPSBcInByZWZhYnMvY2hhdDJcIjsvL+iBiuWkqeeqlzJcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGpzZmpfbGF5ZXI6IHN0cmluZyA9IFwicHJlZmFicy9qc2ZqX2xheWVyXCI7Ly/op6PmlaPmiL/pl7RcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHl4c3pfbGF5ZXI6IHN0cmluZyA9IFwicHJlZmFicy95eHN6X2xheWVyXCI7Ly/muLjmiI/orr7nva5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNqaGdfbGF5ZXI6IHN0cmluZyA9IFwicHJlZmFicy9zamhnX2xheWVyXCI7Ly/kuIrlsYDlm57pob5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHBnel9sYXllcjogc3RyaW5nID0gXCJwcmVmYWJzL3Bnel9sYXllclwiOy8v5peB6KeC5YiX6KGoXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB0aFJvb21EYXRhVmlldzogc3RyaW5nID0gXCJoYWxsL3RlYWhvdXNlL21haW4vVGhSb29tRGF0YVZpZXdcIjsvL+aIv+mXtOivpuaDhVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgamFja3BvdF9kZXRhaWw6IHN0cmluZyA9IFwicHJlZmFicy9qYWNrcG90X2RldGFpbFwiOy8v5aSn5aWW5rGg6K+m5oOFXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWRCYWdOb2RlOiBzdHJpbmcgPSBcInByZWZhYnMvcmVkQmFnTm9kZVwiOy8v5oqi57qi5YyFXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWRiYWdfbGF5ZXI6IHN0cmluZyA9IFwicHJlZmFicy9yZWRiYWdfbGF5ZXJcIjsvL+e6ouWMhembqFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaG9tZV9iZ19tb2h1OiBzdHJpbmcgPSBcInByZWZhYnMvaG9tZV9iZ19tb2h1XCI7Ly/miJjnu6lcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNob3BWaWV3OiBzdHJpbmcgPSBcImhhbGwvbWFpbi9zaG9wVmlld1wiOy8v5YWF5YC8XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBncnh4X2xheWVyOiBzdHJpbmcgPSBcInByZWZhYnMvZ3J4eF9sYXllclwiOy8v5Liq5Lq65L+h5oGvXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdHJ1c3RlZVRpcDE6IHN0cmluZyA9IFwicHJlZmFicy90cnVzdGVlVGlwMVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdHJ1c3RlZVRpcDI6IHN0cmluZyA9IFwicHJlZmFicy90cnVzdGVlVGlwMlwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdHJ1c3RlZVNoaXA6IHN0cmluZyA9IFwicHJlZmFicy90cnVzdGVlU2hpcFwiO1xyXG5cclxuICAgICAgICAvL+mihOWKoOi9vemihOWItuS9k1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbG9hZFByZWZhYigpIHtcclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IFtQcmVsb2FkUHJlZmFiLnBnel9sYXllcixQcmVsb2FkUHJlZmFiLnNqaGdfbGF5ZXIsIFByZWxvYWRQcmVmYWIueXhzel9sYXllciAsUHJlbG9hZFByZWZhYi5jaGF0MSwgUHJlbG9hZFByZWZhYi5jaGF0MiwgUHJlbG9hZFByZWZhYi5qc2ZqX2xheWVyLCBQcmVsb2FkUHJlZmFiLmphY2twb3RfZGV0YWlsLCBQcmVsb2FkUHJlZmFiLnJlZEJhZ05vZGUsIFByZWxvYWRQcmVmYWIucmVkYmFnX2xheWVyLFByZWxvYWRQcmVmYWIuaG9tZV9iZ19tb2h1LFByZWxvYWRQcmVmYWIuc2hvcFZpZXddO1xyXG4gICAgICAgICAgICBwcmVmYWIuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+S8mOWFiOWKoOi9veaJmOeuoeW8ueeqlyYm5oi/6Ze05L+h5oGv5by556qX6LWE5rqQXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBsb2FkUHJlZmFiRmlyc3QoKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmVmYWIgPSBbUHJlbG9hZFByZWZhYi50aFJvb21EYXRhVmlld107XHJcbiAgICAgICAgICAgIHByZWZhYi5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKHZhbHVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWKoOi9vVVJXHJcbiAgICAgICAgICogQHBhcmFtIHVybCBcclxuICAgICAgICAgKiBAcGFyYW0gcGFyZW50IFxyXG4gICAgICAgICAqIEBwYXJhbSBtYXNrICAgICAgICAgICAgICBkZWZhdWx0IHRydWUgICAg5piv5ZCm6ZyA6KaB5oyh5L2P5LiL5bGC54K55Ye7XHJcbiAgICAgICAgICogQHBhcmFtIGF1dG9SZW1vdmUgICAgICAgICAgIGRlZmF1bHQgdHJ1ZSAgICAg5piv5ZCm6Ieq5Yqo56e76ZmkICDmmK/nmoTor50g5Zyo5o6l5Y+Xbm9kZSBjbG9zZeS6i+S7tuaXtuWAmSDplIDmr4Hlkoznp7vpmaR1aVxyXG4gICAgICAgICAqIEBwYXJhbSBjb21wbGV0ZUhhbmRsZXIgXHJcbiAgICAgICAgICogQHBhcmFtIHByb2dyZXNzQ2FsbGJhY2sgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBsb2FkVUkodXJsOiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSwgbWFzazogYm9vbGVhbiA9IHRydWUsIGF1dG9SZW1vdmU6IGJvb2xlYW4gPSB0cnVlLCBjb21wbGV0ZUhhbmRsZXI/OiAobm9kZTogY2MuTm9kZSkgPT4gdm9pZCwgcHJvZ3Jlc3NDYWxsYmFjaz86IChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgICAgICBsZXQgdWk6IGNjLk5vZGUgPSB0aGlzLl91aURpYy5nZXQodXJsKTtcclxuICAgICAgICAgICAgaWYgKHVpKSB7XHJcbiAgICAgICAgICAgICAgICBQcmVsb2FkUHJlZmFiLnNob3dVSSh1cmwsIHVpLCBwYXJlbnQsIG1hc2ssIGF1dG9SZW1vdmUsIGNvbXBsZXRlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIHByb2dyZXNzQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIgPT0gbnVsbCAmJiBwcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1aTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZWxvYWRQcmVmYWIuc2hvd1VJKHVybCwgdWksIHBhcmVudCwgbWFzaywgYXV0b1JlbW92ZSwgY29tcGxldGVIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oXCLliqDovb1VSe+8mlwiICsgdXJsICsgXCLplJnor69cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKirmmL7npLogVUkgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNob3dVSSh1cmw6IHN0cmluZywgdWk6IGNjLk5vZGUsIHBhcmVudDogY2MuTm9kZSwgbWFzazogYm9vbGVhbiA9IHRydWUsIGF1dG9SZW1vdmU6IGJvb2xlYW4gPSBmYWxzZSwgY29tcGxldGVIYW5kbGVyPzogKG5vZGU6IGNjLk5vZGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93VUkgdXJsOlwiLCB1cmwpXHJcbiAgICAgICAgICAgIHRoaXMuX3VpRGljLnNldCh1cmwsIHVpKTtcclxuICAgICAgICAgICAgaWYgKHVpLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVIYW5kbGVyKSBjb21wbGV0ZUhhbmRsZXIodWkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChtYXNrID09IHRydWUpIHVpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7IH0pXHJcbiAgICAgICAgICAgIGlmIChtYXNrID09IHRydWUpIHVpLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCkgcGFyZW50LmFkZENoaWxkKHVpKTtcclxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlSGFuZGxlcikgY29tcGxldGVIYW5kbGVyKHVpKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+ehruS/nSDnrKzkuIDmrKHml7blgJkgIG9uU2hvdyDlnKhzdGFydOWQjuinpuWPkVxyXG4gICAgICAgICAgICAgICAgdWkuZGlzcGF0Y2hFdmVudChuZXcgTEV2ZW50KExFdmVudC5TSE9XKSk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICBpZiAoYXV0b1JlbW92ZSA9PSB0cnVlKSB1aS5vbihMRXZlbnQuQ0xPU0UsIChlOiBMRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v5YGa5aW95raI6Zmk5bel5L2cXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgUHJlbG9hZFByZWZhYi5kaXNkcm95VUkodXJsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0VUkodXJsOiBzdHJpbmcpOiBjYy5Ob2RlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VpRGljLmdldCh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFkZFVJKHVpOiBjYy5Ob2RlLCBwYXJlbnQ6IGNjLk5vZGUsIG1hc2s6IGJvb2xlYW4gPSB0cnVlLCBhdXRvUmVtb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKG1hc2sgPT0gdHJ1ZSkgdWkuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICBpZiAocGFyZW50KSBwYXJlbnQuYWRkQ2hpbGQodWkpO1xyXG4gICAgICAgICAgICB1aS5kaXNwYXRjaEV2ZW50KG5ldyBMRXZlbnQoTEV2ZW50LlNIT1cpKTtcclxuICAgICAgICAgICAgaWYgKGF1dG9SZW1vdmUgPT0gdHJ1ZSkgdWkub24oTEV2ZW50LkNMT1NFLCAoZTogTEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+WBmuWlvea2iOmZpOW3peS9nFxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXROb2RlVXJsKG5vZGU6IGNjLk5vZGUpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIHRoaXMuX3VpRGljLmtleXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl91aURpYy5nZXQoaykgPT0gbm9kZSkgcmV0dXJuIGs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0VUlDb21wb25lbnQ8VD4odXJsOiBzdHJpbmcsIGNsYXp6OiBUKTogVCB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcmVsb2FkUHJlZmFiLmdldFVJKHVybCkuZ2V0Q29tcG9uZW50KGNsYXp6IGFzIGFueSkgYXMgYW55O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmUgOavgVVJXHJcbiAgICAgICAgICogQHBhcmFtIHVybCBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRpc2Ryb3lVSSh1cmw6IHN0cmluZykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc2Ryb3lVSSB1cmw6XCIsIHVybClcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSB0aGlzLmhpZGVVSSh1cmwpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLl91aURpYy5yZW1vdmUodXJsKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlbW92ZVVJKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gdGhpcy5fdWlEaWMuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlRnJvbVBhcmVudChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGxVSSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgbGV0IGQ6IERpY3Rpb25hcnkgPSB0aGlzLl91aURpYztcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGQpIHtcclxuICAgICAgICAgICAgICAgIGRba2V5XS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlbW92ZVVJQnlOb2RlKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICAgICAgbGV0IHVybDogc3RyaW5nID0gdGhpcy5nZXROb2RlVXJsKG5vZGUpO1xyXG4gICAgICAgICAgICBpZiAoIXVybCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVVJKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmakOiXj3VpXHJcbiAgICAgICAgICogQHBhcmFtIHVybCBcclxuICAgICAgICAgKiBAcmV0dXJucyBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGhpZGVVSSh1cmw6IHN0cmluZyk6IGNjLk5vZGUge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImhpZGVVSSBcIiwgdXJsKVxyXG4gICAgICAgICAgICBsZXQgdWk6IGNjLk5vZGUgPSB0aGlzLl91aURpYy5nZXQodXJsKTtcclxuICAgICAgICAgICAgaWYgKHVpID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB1aS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljp/nlJ/lh73mlbDosIPnlKhcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIG5hdGF2aUFwaSB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcm5PcGVyYURhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1snUm5PcGVyYSddO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBybk9wZXJhKGRhdGEpe1xyXG4gICAgICAgICAgICBuYXRhdmlBcGkucm5PcGVyYURhdGEoKSAmJiB3aW5kb3dbJ1JuT3BlcmEnXShkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYmFja0hhbGwoKXtcclxuICAgICAgICAgICAgd2luZG93WydiYWNrSGFsbCddICYmIHdpbmRvd1snYmFja0hhbGwnXSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ljp/nlJ/nq6/pnIfliqjmjqXlj6NwYXR0ZXJuW13lnKggQW5kcm9pZCDkuIrvvIxwYXR0ZXJu5pWw57uE55qE5aWH5pWw57Si5byV5Luj6KGo5oyv5Yqo5oyB57ut5pe26Ze077yM6ICM5YG25pWw57Si5byV5Luj6KGo5YiG56a75pe26Ze044CC5ZyoIGlPUyDkuIrvvIxwYXR0ZXJu5pWw57uE5Lit55qE5pWw5a2X5Luj6KGo5YiG56a75pe26Ze077yM5Zug5Li65oyv5Yqo5oyB57ut5pe26Ze05piv5Zu65a6a55qE44CCXHJcbiAgICAgICAgLy8gcmVwZWF0LeaYr+WQpumHjeWkjemch+WKqFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdmlicmF0ZShwYXR0ZXJuPzogbnVtYmVyW10sIHJlcGVhdD86IGJvb2xlYW4sIHdlYnZpZXc/LCBuYXZpZ2F0aW9uPykge1xyXG4gICAgICAgICAgICBpZihnYW1lRGF0YS5XZWJ2aWV3V3JpdGVBbmRSZWFkRmlsZS5maWxlSnNvbiAmJiBnYW1lRGF0YS5XZWJ2aWV3V3JpdGVBbmRSZWFkRmlsZS5maWxlSnNvbi5zaGFrZSA8PTApcmV0dXJuO1xyXG4gICAgICAgICAgICBpZihjYy5zeXMuaXNNb2JpbGUpd2luZG93WydSbk9wZXJhJ10oe2NtZDondmlicmF0ZScsZGF0YTp7fX0pO1xyXG4gICAgICAgICAgICAvLyAocGF0dGVybj86IG51bWJlciB8IG51bWJlcltdIHwgbnVsbCwgcmVwZWF0PzogYm9vbGVhbiB8IG51bGwpOiB2b2lkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jYW5jZWwoKeiiq+iwg+eUqFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2FuY2VsVmlicmF0ZSgpIHtcclxuICAgICAgICAgICAgaWYoY2Muc3lzLmlzTW9iaWxlKXdpbmRvd1snUm5PcGVyYSddKHtjbWQ6J2NhbmNlbCgpJ30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWGhemDqOa2iOaBr+aUtuWPkeeuoeeQhlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgbWVzc2FnZUZsYWcge1xyXG4gICAgICAgIC8v5YiH5o2i5Li76aG16Z2i5Lit6Ze05Yy65Z+f5pi+56S65YaF5a65IOaQuuW4puWPguaVsCBcIk1BSU5fSE9NRVwiLeS4u+mhteaKveWlliBcIkNBUkRfQkFHXCIt5Y2h5YyFIFwiQ0FSRF9FWENIQU5HRVwiLembhuWNoeWFkeaNoiBcIkNBUkRfUkVDT1JEXCIt5Y2h54mM6K6w5b2VIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1NIT1dfTEFZRVI6IFwiQ0hBTkdFX1NIT1dfTEFZRVJcIjtcclxuICAgICAgICAvL+aYvuekuuS4u+mhteaPkOekuuW8ueeql+eVjOmdoiBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNIT1dfQUxFUlRfTEFZRVI6IFwiU0hPV19BTEVSVF9MQVlFUlwiXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrnlYzpnaLnsbvlnotcclxuICAgICAqL1xyXG4gICAgIGV4cG9ydCBlbnVtIFNIT1dfTEFZRVJfVFlQRSB7XHJcbiAgICAgICAgTUFJTl9IT01FID0gXCJNQUlOX0hPTUVcIiwvL+S4u+mhteaKveWlllxyXG4gICAgICAgIENBUkRfQkFHID0gXCJDQVJEX0JBR1wiLC8v5Y2h5YyFXHJcbiAgICAgICAgQ0FSRF9FWENIQU5HRSA9IFwiQ0FSRF9FWENIQU5HRVwiLC8v6ZuG5Y2h5YWR5o2iXHJcbiAgICAgICAgQ0FSRF9SRUNPUkQgPSBcIkNBUkRfUkVDT1JEXCIsLy9DQVJEX1JFQ09SRFxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/ruleComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8edexoMGRHyq0e0p5WJlRZ', 'ruleComponent');
// Script/component/ruleComponent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ruleComponent = /** @class */ (function (_super) {
    __extends(ruleComponent, _super);
    function ruleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_rule = null;
        return _this;
    }
    ruleComponent_1 = ruleComponent;
    ruleComponent.prototype.onLoad = function () {
        ruleComponent_1.instance = this;
    };
    ruleComponent.prototype.start = function () {
    };
    //初始化规则内容
    ruleComponent.prototype.init = function (data) {
        ruleComponent_1.instance.lb_rule.string = data.rule;
    };
    ruleComponent.prototype.update = function (dt) {
    };
    var ruleComponent_1;
    ruleComponent.instance = null;
    __decorate([
        property(cc.Label)
    ], ruleComponent.prototype, "lb_rule", void 0);
    ruleComponent = ruleComponent_1 = __decorate([
        ccclass
    ], ruleComponent);
    return ruleComponent;
}(cc.Component));
exports.default = ruleComponent;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXHJ1bGVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUF1QkM7UUFyQkcsYUFBTyxHQUFhLElBQUksQ0FBQzs7SUFxQjdCLENBQUM7c0JBdkJvQixhQUFhO0lBTTlCLDhCQUFNLEdBQU47UUFDSSxlQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxTQUFTO0lBQ1QsNEJBQUksR0FBSixVQUFLLElBQXlCO1FBQzFCLGVBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVTtJQUVqQixDQUFDOztJQWpCTSxzQkFBUSxHQUFrQixJQUFJLENBQUM7SUFGdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTTtJQUZSLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F1QmpDO0lBQUQsb0JBQUM7Q0F2QkQsQUF1QkMsQ0F2QjBDLEVBQUUsQ0FBQyxTQUFTLEdBdUJ0RDtrQkF2Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tIFwiLi9nYW1lRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJ1bGVDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJfcnVsZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZTogcnVsZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHJ1bGVDb21wb25lbnQuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMluinhOWImeWGheWuuVxyXG4gICAgaW5pdChkYXRhOiBhcGlEYXRhLmNvbmZpZ19pbmZvKSB7XHJcbiAgICAgICAgcnVsZUNvbXBvbmVudC5pbnN0YW5jZS5sYl9ydWxlLnN0cmluZyA9IGRhdGEucnVsZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/reconnect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00357eu1j1PHaf2wvOnKouV', 'reconnect');
// Script/component/reconnect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DznSocket_1 = require("../../Common/src/DznSocket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var reconnect = /** @class */ (function (_super) {
    __extends(reconnect, _super);
    function reconnect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.recTimes = 0;
        _this.recInterval = 6;
        _this.maxTimes = 50;
        return _this;
    }
    reconnect.prototype.onLoad = function () {
        this.recTimes = 0;
        this.maxTimes = 50;
        this.recInterval = 6;
        DznSocket_1.DznSocket.on("webClientOnopen", this.webClientOnopen, this);
        DznSocket_1.DznSocket.on("webClientOnclose", this.webClientOnclose, this);
        // DznSocket.on("webClientOnerror", this.webClientOnclose, this);
    };
    reconnect.prototype.onDestroy = function () {
        DznSocket_1.DznSocket.targetOff(this);
    };
    reconnect.prototype.webClientOnopen = function () {
        this.recTimes = 0;
        this.maxTimes = 50;
        this.recInterval = 6;
    };
    reconnect.prototype.webClientOnclose = function () {
        var _this = this;
        var kick = DznSocket_1.DznSocket.getCache("KICK_OFF");
        var exit = DznSocket_1.DznSocket.getCache("EXIT_DESK_ACK");
        var error = DznSocket_1.DznSocket.getCache("ERROR_INFO");
        if (exit || error || kick) {
            this.unscheduleAllCallbacks();
            return;
        }
        // if (this.recTimes >= this.maxTimes) {
        //     popup.instance.toastLongTime("重连失败...", true);
        //     //返回大厅
        //     gameData.nataviApi.backHall();
        //     return;
        // }
        var delayTime = this.recInterval; //this.recTimes * this.recInterval;
        this.scheduleOnce(function () {
            if (exit || error || kick) {
                _this.unscheduleAllCallbacks();
                return;
            }
            DznSocket_1.DznSocket.OnConnect(DznSocket_1.DznSocket.pUrl);
            _this.recTimes += 1;
        }, delayTime);
        console.warn("第", this.recTimes + 1, "次重连"); //"延迟时间为:", this.recTimes * this.recInterval
    };
    __decorate([
        property
    ], reconnect.prototype, "recTimes", void 0);
    __decorate([
        property
    ], reconnect.prototype, "recInterval", void 0);
    __decorate([
        property
    ], reconnect.prototype, "maxTimes", void 0);
    reconnect = __decorate([
        ccclass
    ], reconnect);
    return reconnect;
}(cc.Component));
exports.default = reconnect;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXHJlY29ubmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBc0Q7QUFFaEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUE0REM7UUF6REcsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUd4QixjQUFRLEdBQVcsRUFBRSxDQUFDOztJQW1EMUIsQ0FBQztJQWpERywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIscUJBQVMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsaUVBQWlFO0lBQ3JFLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0kscUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG1DQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQWdCLEdBQWhCO1FBQUEsaUJBNEJDO1FBM0JHLElBQUksSUFBSSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLElBQUksS0FBSyxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsT0FBTztTQUNWO1FBRUQsd0NBQXdDO1FBQ3hDLHFEQUFxRDtRQUNyRCxhQUFhO1FBQ2IscUNBQXFDO1FBQ3JDLGNBQWM7UUFDZCxJQUFJO1FBRUosSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLG1DQUFtQztRQUVwRSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDdkIsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQzlCLE9BQU87YUFDVjtZQUNELHFCQUFTLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRWQsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSw0Q0FBNEM7SUFDeEYsQ0FBQztJQXZERDtRQURDLFFBQVE7K0NBQ1k7SUFHckI7UUFEQyxRQUFRO2tEQUNlO0lBR3hCO1FBREMsUUFBUTsrQ0FDYTtJQVRMLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E0RDdCO0lBQUQsZ0JBQUM7Q0E1REQsQUE0REMsQ0E1RHNDLEVBQUUsQ0FBQyxTQUFTLEdBNERsRDtrQkE1RG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEem5Tb2NrZXQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL3NyYy9Eem5Tb2NrZXRcIlxyXG5pbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gXCIuL2dhbWVEYXRhXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWNvbm5lY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcmVjVGltZXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByZWNJbnRlcnZhbDogbnVtYmVyID0gNjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFRpbWVzOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWNUaW1lcyA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhUaW1lcyA9IDUwO1xyXG4gICAgICAgIHRoaXMucmVjSW50ZXJ2YWwgPSA2O1xyXG4gICAgICAgIER6blNvY2tldC5vbihcIndlYkNsaWVudE9ub3BlblwiLCB0aGlzLndlYkNsaWVudE9ub3BlbiwgdGhpcyk7XHJcbiAgICAgICAgRHpuU29ja2V0Lm9uKFwid2ViQ2xpZW50T25jbG9zZVwiLCB0aGlzLndlYkNsaWVudE9uY2xvc2UsIHRoaXMpO1xyXG4gICAgICAgIC8vIER6blNvY2tldC5vbihcIndlYkNsaWVudE9uZXJyb3JcIiwgdGhpcy53ZWJDbGllbnRPbmNsb3NlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRHpuU29ja2V0LnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB3ZWJDbGllbnRPbm9wZW4oKSB7XHJcbiAgICAgICAgdGhpcy5yZWNUaW1lcyA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhUaW1lcyA9IDUwO1xyXG4gICAgICAgIHRoaXMucmVjSW50ZXJ2YWwgPSA2O1xyXG4gICAgfVxyXG5cclxuICAgIHdlYkNsaWVudE9uY2xvc2UoKSB7XHJcbiAgICAgICAgbGV0IGtpY2sgPSBEem5Tb2NrZXQuZ2V0Q2FjaGUoXCJLSUNLX09GRlwiKTtcclxuICAgICAgICBsZXQgZXhpdCA9IER6blNvY2tldC5nZXRDYWNoZShcIkVYSVRfREVTS19BQ0tcIik7XHJcbiAgICAgICAgbGV0IGVycm9yID0gRHpuU29ja2V0LmdldENhY2hlKFwiRVJST1JfSU5GT1wiKTtcclxuICAgICAgICBpZiAoZXhpdCB8fCBlcnJvciB8fCBraWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5yZWNUaW1lcyA+PSB0aGlzLm1heFRpbWVzKSB7XHJcbiAgICAgICAgLy8gICAgIHBvcHVwLmluc3RhbmNlLnRvYXN0TG9uZ1RpbWUoXCLph43ov57lpLHotKUuLi5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gICAgIC8v6L+U5Zue5aSn5Y6FXHJcbiAgICAgICAgLy8gICAgIGdhbWVEYXRhLm5hdGF2aUFwaS5iYWNrSGFsbCgpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgZGVsYXlUaW1lID0gdGhpcy5yZWNJbnRlcnZhbDsvL3RoaXMucmVjVGltZXMgKiB0aGlzLnJlY0ludGVydmFsO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChleGl0IHx8IGVycm9yIHx8IGtpY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIER6blNvY2tldC5PbkNvbm5lY3QoRHpuU29ja2V0LnBVcmwpO1xyXG4gICAgICAgICAgICB0aGlzLnJlY1RpbWVzICs9IDE7XHJcbiAgICAgICAgfSwgZGVsYXlUaW1lKTtcclxuXHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi56ysXCIsdGhpcy5yZWNUaW1lcysxLFwi5qyh6YeN6L+eXCIpOy8vXCLlu7bov5/ml7bpl7TkuLo6XCIsIHRoaXMucmVjVGltZXMgKiB0aGlzLnJlY0ludGVydmFsXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/LTabBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f55fcLrnZ9C/KqlHrqZs67K', 'LTabBar');
// Script/lightUI/components/LTabBar.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../events/LEvent");
var LComponent_1 = require("./LComponent");
var LViewStack_1 = require("./LViewStack");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LTabBar = /** @class */ (function (_super) {
    __extends(LTabBar, _super);
    function LTabBar() {
        var _this = _super.call(this) || this;
        _this.viewStack = null;
        _this._btns = [];
        _this._selectIndex = -1;
        return _this;
        // console.log("LTabBar.constructor");
    }
    //@override 
    LTabBar.prototype.onLoad = function () {
        // console.log("LTabBar.onLoad",this.node.childrenCount);
        var btn;
        var isShow = true;
        for (var i = 0; i < this.node.childrenCount; i++) {
            btn = this.node.children[i].getComponent(cc.Button);
            if (btn != null) {
                this._btns.push(btn);
                btn.node["index"] = this._btns.length - 1;
                if (btn.node.active == true && btn.node.opacity == 255) {
                    btn.node.on(cc.Node.EventType.TOUCH_START, this.onItemClick, this);
                }
            }
        }
        this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.ITEM_CLICK, this.selectIndex));
    };
    LTabBar.prototype.onItemClick = function (e) {
        // console.log("seleonItemClickctAll",e.target["index"]);
        this.selectIndex = e.target["index"];
        this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.ITEM_CLICK, this.selectIndex));
    };
    LTabBar.prototype.selectAll = function (value) {
        // console.log("selectAll",value);
        var l = this._btns.length;
        for (var i = 0; i < l; i++) {
            this._btns[i].interactable = !value;
        }
    };
    LTabBar.prototype.getButtonByIndex = function (index) {
        return this._btns[index];
    };
    LTabBar.prototype.clear = function () {
        this._selectIndex = -1;
        var btn;
        for (var i = 0; i < this._btns.length; i++) {
            btn = this._btns[i];
            btn.node.off(cc.Node.EventType.TOUCH_START, this.onItemClick, this);
            btn.interactable = true;
        }
        this._btns = [];
    };
    LTabBar.prototype.getSelectButton = function () {
        if (this._selectIndex == -1)
            return null;
        return this._btns[this._selectIndex];
    };
    Object.defineProperty(LTabBar.prototype, "selectIndex", {
        get: function () { return this._selectIndex; },
        set: function (value) {
            //-1则清除选中状态
            if (value < 0) {
                this._selectIndex = -1;
                this.selectAll(false);
                return;
            }
            ;
            if (this._btns.length <= 0)
                return;
            if (this._selectIndex == value)
                return;
            this._selectIndex = value;
            // console.log("selectIndex", value);
            this.selectAll(false);
            this.getButtonByIndex(value).interactable = false;
            if (this.viewStack)
                this.viewStack.selectIndex = this._selectIndex;
            this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.CHANGED, value));
            this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.SELECT, value));
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(LTabBar.prototype, "selectButton", {
        get: function () {
            return this._btns[this._selectIndex];
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(LViewStack_1.default)
    ], LTabBar.prototype, "viewStack", void 0);
    LTabBar = __decorate([
        ccclass
    ], LTabBar);
    return LTabBar;
}(LComponent_1.default));
exports.default = LTabBar;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxMVGFiQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QywyQ0FBcUM7QUFDckMsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSTVDO0lBQXFDLDJCQUFVO0lBVTNDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBVEQsZUFBUyxHQUFlLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUM3QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDOztRQUs5QixzQ0FBc0M7SUFDMUMsQ0FBQztJQUVELFlBQVk7SUFDWix3QkFBTSxHQUFOO1FBQ0kseURBQXlEO1FBQ3pELElBQUksR0FBYyxDQUFDO1FBQ25CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEQsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLElB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LENBQUM7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFFbEQsSUFBSSxJQUFJLENBQUMsU0FBUztnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRW5FLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxnQkFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBSTlELENBQUM7OztPQUFBO0lBQzRELENBQUM7SUFFOUQsc0JBQVcsaUNBQVk7YUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBNUZEO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7OENBQ1E7SUFKWixPQUFPO1FBRjNCLE9BQU87T0FFYSxPQUFPLENBaUczQjtJQUFELGNBQUM7Q0FqR0QsQUFpR0MsQ0FqR29DLG9CQUFVLEdBaUc5QztrQkFqR29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTEV2ZW50IGZyb20gXCIuLi9ldmVudHMvTEV2ZW50XCI7XHJcbmltcG9ydCBMQ29tcG9uZW50IGZyb20gXCIuL0xDb21wb25lbnRcIlxyXG5pbXBvcnQgTFZpZXdTdGFjayBmcm9tIFwiLi9MVmlld1N0YWNrXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExUYWJCYXIgZXh0ZW5kcyBMQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KExWaWV3U3RhY2spXHJcbiAgICB2aWV3U3RhY2s6IExWaWV3U3RhY2sgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2J0bnM6IEFycmF5PGNjLkJ1dHRvbj4gPSBbXTtcclxuICAgIHByaXZhdGUgX3NlbGVjdEluZGV4OiBudW1iZXIgPSAtMTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxUYWJCYXIuY29uc3RydWN0b3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Ab3ZlcnJpZGUgXHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJMVGFiQmFyLm9uTG9hZFwiLHRoaXMubm9kZS5jaGlsZHJlbkNvdW50KTtcclxuICAgICAgICB2YXIgYnRuOiBjYy5CdXR0b247XHJcbiAgICAgICAgbGV0IGlzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgYnRuID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBpZiAoYnRuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J0bnMucHVzaChidG4pO1xyXG4gICAgICAgICAgICAgICAgYnRuLm5vZGVbXCJpbmRleFwiXSA9IHRoaXMuX2J0bnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGlmIChidG4ubm9kZS5hY3RpdmUgPT0gdHJ1ZSAmJiBidG4ubm9kZS5vcGFjaXR5ID09IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uSXRlbUNsaWNrLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IExFdmVudChMRXZlbnQuSVRFTV9DTElDSywgdGhpcy5zZWxlY3RJbmRleCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSXRlbUNsaWNrKGU6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZWxlb25JdGVtQ2xpY2tjdEFsbFwiLGUudGFyZ2V0W1wiaW5kZXhcIl0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SW5kZXggPSBlLnRhcmdldFtcImluZGV4XCJdO1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBMRXZlbnQoTEV2ZW50LklURU1fQ0xJQ0ssIHRoaXMuc2VsZWN0SW5kZXgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdEFsbCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2VsZWN0QWxsXCIsdmFsdWUpO1xyXG4gICAgICAgIHZhciBsOiBudW1iZXIgPSB0aGlzLl9idG5zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J0bnNbaV0uaW50ZXJhY3RhYmxlID0gIXZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEJ1dHRvbkJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IGNjLkJ1dHRvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J0bnNbaW5kZXhdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdEluZGV4ID0gLTE7XHJcbiAgICAgICAgdmFyIGJ0bjogY2MuQnV0dG9uO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fYnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBidG4gPSB0aGlzLl9idG5zW2ldO1xyXG4gICAgICAgICAgICBidG4ubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25JdGVtQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYnRucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTZWxlY3RCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdEluZGV4ID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYnRuc1t0aGlzLl9zZWxlY3RJbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBzZWxlY3RJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8tMeWImea4hemZpOmAieS4reeKtuaAgVxyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2J0bnMubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0SW5kZXggPT0gdmFsdWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9zZWxlY3RJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2VsZWN0SW5kZXhcIiwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmdldEJ1dHRvbkJ5SW5kZXgodmFsdWUpLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhY2spIHRoaXMudmlld1N0YWNrLnNlbGVjdEluZGV4ID0gdGhpcy5fc2VsZWN0SW5kZXg7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBMRXZlbnQoTEV2ZW50LkNIQU5HRUQsIHZhbHVlKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IExFdmVudChMRXZlbnQuU0VMRUNULCB2YWx1ZSkpO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBzZWxlY3RJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0SW5kZXggfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNlbGVjdEJ1dHRvbigpOiBjYy5CdXR0b24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idG5zW3RoaXMuX3NlbGVjdEluZGV4XTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/topBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8acc0nRmvxCZY8mLa8N91U6', 'topBar');
// Script/component/topBar.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameData_1 = require("./gameData");
var DznSocket_1 = require("../../Common/src/DznSocket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var topBar = /** @class */ (function (_super) {
    __extends(topBar, _super);
    function topBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title_img = null;
        _this.titleArr = [];
        return _this;
    }
    topBar_1 = topBar;
    topBar.prototype.onLoad = function () {
        topBar_1.instance = this;
        DznSocket_1.DznSocket.on(gameData_1.gameData.messageFlag.CHANGE_SHOW_LAYER, this.updateCurTitle, this);
    };
    topBar.prototype.start = function () {
        this.title_img.spriteFrame = this.titleArr[0];
    };
    //初始化当前title图片
    topBar.prototype.init = function (data) {
    };
    //title图片更新
    topBar.prototype.updateCurTitle = function (type) {
        switch (type) {
            case gameData_1.gameData.SHOW_LAYER_TYPE.MAIN_HOME:
                this.title_img.spriteFrame = this.titleArr[0];
                break;
            case gameData_1.gameData.SHOW_LAYER_TYPE.CARD_BAG:
                this.title_img.spriteFrame = this.titleArr[1];
                break;
            case gameData_1.gameData.SHOW_LAYER_TYPE.CARD_EXCHANGE:
                this.title_img.spriteFrame = this.titleArr[2];
                break;
            case gameData_1.gameData.SHOW_LAYER_TYPE.CARD_RECORD:
                this.title_img.spriteFrame = this.titleArr[3];
                break;
        }
    };
    topBar.prototype.update = function (dt) {
    };
    var topBar_1;
    topBar.instance = null;
    __decorate([
        property(cc.Sprite)
    ], topBar.prototype, "title_img", void 0);
    __decorate([
        property(cc.SpriteFrame) //title图片数组
    ], topBar.prototype, "titleArr", void 0);
    topBar = topBar_1 = __decorate([
        ccclass
    ], topBar);
    return topBar;
}(cc.Component));
exports.default = topBar;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXHRvcEJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBc0M7QUFDdEMsd0RBQXNEO0FBRWhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBNkNDO1FBM0NHLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFxQixFQUFFLENBQUM7O0lBd0NwQyxDQUFDO2VBN0NvQixNQUFNO0lBU3ZCLHVCQUFNLEdBQU47UUFDSSxRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBUyxDQUFDLEVBQUUsQ0FBQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsY0FBYztJQUNkLHFCQUFJLEdBQUosVUFBSyxJQUF1QjtJQUU1QixDQUFDO0lBRUQsV0FBVztJQUNYLCtCQUFjLEdBQWQsVUFBZSxJQUFZO1FBQ25CLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1YsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxRQUFRO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1YsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxhQUFhO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1YsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1NBQ2I7SUFDVCxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEVBQVU7SUFFakIsQ0FBQzs7SUFwQ00sZUFBUSxHQUFXLElBQUksQ0FBQztJQUwvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQSxXQUFXOzRDQUNKO0lBTGYsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTZDMUI7SUFBRCxhQUFDO0NBN0NELEFBNkNDLENBN0NtQyxFQUFFLENBQUMsU0FBUyxHQTZDL0M7a0JBN0NvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiXHJcbmltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4vZ2FtZURhdGFcIjtcclxuaW1wb3J0IHsgRHpuU29ja2V0IH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9zcmMvRHpuU29ja2V0XCJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b3BCYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHRpdGxlX2ltZzogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpLy90aXRsZeWbvueJh+aVsOe7hFxyXG4gICAgdGl0bGVBcnI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6IHRvcEJhciA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRvcEJhci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgRHpuU29ja2V0Lm9uKGdhbWVEYXRhLm1lc3NhZ2VGbGFnLkNIQU5HRV9TSE9XX0xBWUVSLCB0aGlzLnVwZGF0ZUN1clRpdGxlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRpdGxlX2ltZy5zcHJpdGVGcmFtZSA9IHRoaXMudGl0bGVBcnJbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJblvZPliY10aXRsZeWbvueJh1xyXG4gICAgaW5pdChkYXRhOiBhcGlEYXRhLnVzZXJfaW5mbykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vdGl0bGXlm77niYfmm7TmlrBcclxuICAgIHVwZGF0ZUN1clRpdGxlKHR5cGU6IHN0cmluZyl7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBnYW1lRGF0YS5TSE9XX0xBWUVSX1RZUEUuTUFJTl9IT01FOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVfaW1nLnNwcml0ZUZyYW1lID0gdGhpcy50aXRsZUFyclswXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZ2FtZURhdGEuU0hPV19MQVlFUl9UWVBFLkNBUkRfQkFHOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVfaW1nLnNwcml0ZUZyYW1lID0gdGhpcy50aXRsZUFyclsxXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZ2FtZURhdGEuU0hPV19MQVlFUl9UWVBFLkNBUkRfRVhDSEFOR0U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZV9pbWcuc3ByaXRlRnJhbWUgPSB0aGlzLnRpdGxlQXJyWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBnYW1lRGF0YS5TSE9XX0xBWUVSX1RZUEUuQ0FSRF9SRUNPUkQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZV9pbWcuc3ByaXRlRnJhbWUgPSB0aGlzLnRpdGxlQXJyWzNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0772481R+RLmrnVbGWkiZGq', 'utils');
// Script/component/utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
var utils;
(function (utils) {
    var LineInfo = /** @class */ (function () {
        function LineInfo() {
        }
        return LineInfo;
    }());
    utils.LineInfo = LineInfo;
    /**
     * 文本颜色
     */
    function getColorText(text, color) {
        return "<color=" + color + ">" + text + "</color>";
    }
    utils.getColorText = getColorText;
    /**
     * 文本颜色
     */
    function getRichColorText(text, color, color2, width) {
        var str = "<color=" + color + ">" + text + "</color>";
        return "<outline color=" + color2 + "width=" + width + ">" + str + "</outline>";
    }
    utils.getRichColorText = getRichColorText;
    /**
     * 获取 点p 与p1 p2 构成的的直线的对称点 垂足 距离
     */
    function getPointInfo(p, p1, p2) {
        // 先求p2 p3 直线 A B C
        var A = p2.y - p1.y;
        var B = p1.x - p2.x;
        var C = p2.x * p1.y - p1.x * p2.y;
        var dis = getDis(p, A, B, C);
        var p3 = getOpPoint(p, A, B, C);
        var footP = cc.v2((p.x + p3.x) / 2, (p.y + p3.y) / 2);
        return { dis: dis, antipole: p3, drop: footP };
    }
    utils.getPointInfo = getPointInfo;
    /**
     * 求对称点
     */
    function getOpPoint(p, A, B, C) {
        var x = (p.x - 2 * A * (A * p.x + B * p.y + C) / (A * A + B * B));
        var y = p.y - 2 * B * (A * p.x + B * p.y + C) / (A * A + B * B);
        return cc.v2(x, y);
    }
    utils.getOpPoint = getOpPoint;
    /**
     * 求点到直线的距离
     */
    function getDis(p, A, B, C) {
        var dis = Math.abs((A * p.x + B * p.y + C) / Math.sqrt(A * A + B * B));
        return dis;
    }
    utils.getDis = getDis;
    function toolNick(val) {
        var len = 0;
        var nick = [];
        for (var i = 0; i < val.length; i++) {
            var a = val.charAt(i);
            nick.push(val[i]);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
                nick.push("");
            }
            else {
                len += 1;
            }
        }
        if (len > 8)
            val = (nick.slice(0, 8)).join("") + "...";
        return val;
    }
    utils.toolNick = toolNick;
    /**
     * 获得 v1=>v2 的夹角
     */
    function getSignAngle(v1, v2) {
        var radian = v1.signAngle(v2);
        var angle = 180 / Math.PI * radian;
        return angle;
    }
    utils.getSignAngle = getSignAngle;
    /**
     * 获得 v1=>v2 距离 返回移动角度
     * v1 起始向量
     * v2 起始向量
     * 横向变化差值大于纵向变化差值时 左右 +-180
     * 纵向变化差值大于纵向变化差值时 左右 +-90
     */
    function getDistanceRotation(v1, v2) {
        var xDis = Math.abs(v2.x - v1.x);
        var yDis = Math.abs(v2.y - v1.y);
        return xDis > yDis ? 180 : 90;
    }
    utils.getDistanceRotation = getDistanceRotation;
    /**
     * 获得外接矩形的大小
     */
    function getOutRectSize(inRect, angle) {
        angle = Math.abs(angle);
        if (angle > 90 && angle <= 180) {
            angle = 180 - angle;
        }
        var radian = Math.PI / 180 * angle;
        var w = inRect.height * Math.sin(radian) + inRect.width * Math.cos(radian);
        var h = inRect.height * Math.cos(radian) + inRect.width * Math.sin(radian);
        return cc.size(w, h);
    }
    utils.getOutRectSize = getOutRectSize;
    /**
     * 获得外接矩形的大小
     * angle +-180 时 h高不变
     * angle +-90 时 w宽不变
     */
    function getOutRectSizeStraight(inRect, angle) {
        angle = Math.abs(angle);
        // if (angle > 90 && angle <= 180) {
        //     angle = 180 - angle;
        // }
        var w = 0;
        var h = 0;
        var radian = Math.PI / 180 * angle;
        if (angle === 180) { //高不变
            w = inRect.width; //inRect.height * Math.sin(radian) + inRect.width * Math.cos(radian);
            h = inRect.height;
        }
        else { //宽不变
            h = inRect.width; //inRect.height * Math.cos(radian) + inRect.width * Math.sin(radian);
            w = inRect.height;
        }
        return cc.size(w, h);
    }
    utils.getOutRectSizeStraight = getOutRectSizeStraight;
    /**
     * 得四个顶点的世界坐标
     */
    function getNodeVertexByWorldSpaceAR(node, offset) {
        if (offset === void 0) { offset = 0; }
        var vertexs = getNodeVertexByNodeSpaceAR(node, offset);
        for (var i = 0; i < vertexs.length; i++) {
            vertexs[i] = node.convertToWorldSpaceAR(vertexs[i]);
        }
        return vertexs;
    }
    utils.getNodeVertexByWorldSpaceAR = getNodeVertexByWorldSpaceAR;
    /**
     * 得四个顶点的节点坐标
     */
    function getNodeVertexByNodeSpaceAR(node, offset) {
        if (offset === void 0) { offset = 0; }
        var left = node.width * node.anchorX + offset;
        var right = node.width * (1 - node.anchorX) + offset;
        var bottom = node.height * node.anchorY + offset;
        var top = node.height * (1 - node.anchorY) + offset;
        var lt = cc.v2(-left, top);
        var rt = cc.v2(right, top);
        var rb = cc.v2(right, -bottom);
        var lb = cc.v2(-left, -bottom);
        return [lt, rt, rb, lb];
    }
    utils.getNodeVertexByNodeSpaceAR = getNodeVertexByNodeSpaceAR;
    function GetQueryVariable(url, variable) {
        var str = url.substr(url.indexOf("?") + 1, url.length);
        var vars = str.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return "";
    }
    utils.GetQueryVariable = GetQueryVariable;
    ;
    function copyToClipboard(txt) {
        var selectText = function (textbox, startIndex, stopIndex) {
            if (textbox.createTextRange) {
                var range = textbox.createTextRange();
                range.collapse(true);
                range.moveStart('character', startIndex);
                range.moveEnd('character', stopIndex - startIndex);
                range.select();
            }
            else {
                textbox.setSelectionRange(startIndex, stopIndex);
                textbox.focus();
            }
        };
        var input = document.querySelector('#copy-input');
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
    utils.copyToClipboard = copyToClipboard;
    function prefixInteger(num, length) {
        return (Array(length).join('0') + num).slice(-length);
    }
    utils.prefixInteger = prefixInteger;
    var clickGetPrefab = /** @class */ (function () {
        function clickGetPrefab() {
        }
        clickGetPrefab.clickGetPrefab = function (url, callback) {
            clickGetPrefab.lastKey++;
            if (clickGetPrefab.lastKey > 0)
                return;
            // console.log(clickGetPrefab.lastKey,"击的key");
            utils.getPrefab(url, function (node) {
                clickGetPrefab.lastKey = -1;
                // console.log(clickGetPrefab.lastKey,"回调的key");
                callback && callback(node);
            });
        };
        clickGetPrefab.lastKey = -1;
        return clickGetPrefab;
    }());
    utils.clickGetPrefab = clickGetPrefab;
    //load预制体
    function getPrefab(url, callback) {
        var node = null;
        cc.resources.load(url, function (err, prefab) {
            if (err == null && prefab) {
                node = cc.instantiate(prefab);
                callback && callback(node);
                if (node.parent)
                    node.parent.removeChild(node);
                node.parent = cc.find('Canvas');
                return true;
            }
            else {
                clickGetPrefab.lastKey = -1;
                cc.warn("加载UI：" + url + "错误");
                return null;
            }
        });
    }
    utils.getPrefab = getPrefab;
})(utils = exports.utils || (exports.utils = {}));

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXHV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQWlCLEtBQUssQ0FzUHJCO0FBdFBELFdBQWlCLEtBQUs7SUFFbEI7UUFBQTtRQUlBLENBQUM7UUFBRCxlQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSxjQUFRLFdBSXBCLENBQUE7SUFFRDs7T0FFRztJQUNILFNBQWdCLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSztRQUNwQyxPQUFPLFNBQVMsR0FBRSxLQUFLLEdBQUUsR0FBRyxHQUFFLElBQUksR0FBRyxVQUFVLENBQUM7SUFDcEQsQ0FBQztJQUZlLGtCQUFZLGVBRTNCLENBQUE7SUFFRDs7T0FFRztJQUNGLFNBQWdCLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUs7UUFDeEQsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFFLEtBQUssR0FBRSxHQUFHLEdBQUUsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNuRCxPQUFPLGlCQUFpQixHQUFFLE1BQU0sR0FBRyxRQUFRLEdBQUUsS0FBSyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUUsWUFBWSxDQUFBO0lBQzlFLENBQUM7SUFIZ0Isc0JBQWdCLG1CQUdoQyxDQUFBO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixZQUFZLENBQUMsQ0FBVSxFQUFFLEVBQVcsRUFBRSxFQUFXO1FBQzdELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVCLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQVRlLGtCQUFZLGVBUzNCLENBQUE7SUFFRDs7T0FFRztJQUNILFNBQWdCLFVBQVUsQ0FBQyxDQUFVLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7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QVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsSUFBRyxJQUFJLENBQUMsTUFBTTtvQkFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILGNBQWMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQWpCZSxlQUFTLFlBaUJ4QixDQUFBO0FBRUwsQ0FBQyxFQXRQZ0IsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBc1ByQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheW1lbnRUeXBlIH0gZnJvbSBcIi4uL2hhbGwvc2NyaXB0L2hhbGwvbW9kZWwvcGF5bWVudC9QYXltZW50VHlwZVwiO1xyXG5pbXBvcnQgU2hvcFZpZXcgZnJvbSBcIi4uL2hhbGwvc2NyaXB0L2hhbGwvdWkvbWFpbi9zaG9wL1Nob3BWaWV3XCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIHV0aWxzIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGluZUluZm8ge1xyXG4gICAgICAgIGRpczogbnVtYmVyO1xyXG4gICAgICAgIGFudGlwb2xlOiBjYy5WZWMyO1xyXG4gICAgICAgIGRyb3A6IGNjLlZlYzI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlofmnKzpopzoibJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yVGV4dCh0ZXh0LCBjb2xvcil7XHJcbiAgICAgICAgcmV0dXJuIFwiPGNvbG9yPVwiKyBjb2xvciArXCI+XCIrIHRleHQgKyBcIjwvY29sb3I+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlofmnKzpopzoibJcclxuICAgICAqL1xyXG4gICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRSaWNoQ29sb3JUZXh0KHRleHQsIGNvbG9yLCBjb2xvcjIsIHdpZHRoKXtcclxuICAgICAgICBsZXQgc3RyID0gXCI8Y29sb3I9XCIrIGNvbG9yICtcIj5cIisgdGV4dCArIFwiPC9jb2xvcj5cIjtcclxuICAgICAgICByZXR1cm4gXCI8b3V0bGluZSBjb2xvcj1cIisgY29sb3IyICsgXCJ3aWR0aD1cIisgd2lkdGgrXCI+XCIgKyBzdHIgK1wiPC9vdXRsaW5lPlwiXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5Yg54K5cCDkuI5wMSBwMiDmnoTmiJDnmoTnmoTnm7Tnur/nmoTlr7nnp7Dngrkg5Z6C6LazIOi3neemu1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRJbmZvKHA6IGNjLlZlYzIsIHAxOiBjYy5WZWMyLCBwMjogY2MuVmVjMik6IExpbmVJbmZvIHtcclxuICAgICAgICAvLyDlhYjmsYJwMiBwMyDnm7Tnur8gQSBCIENcclxuICAgICAgICBsZXQgQSA9IHAyLnkgLSBwMS55O1xyXG4gICAgICAgIGxldCBCID0gcDEueCAtIHAyLng7XHJcbiAgICAgICAgbGV0IEMgPSBwMi54ICogcDEueSAtIHAxLnggKiBwMi55O1xyXG4gICAgICAgIGxldCBkaXMgPSBnZXREaXMocCwgQSwgQiwgQylcclxuICAgICAgICBsZXQgcDMgPSBnZXRPcFBvaW50KHAsIEEsIEIsIEMpXHJcbiAgICAgICAgbGV0IGZvb3RQID0gY2MudjIoKHAueCArIHAzLngpIC8gMiwgKHAueSArIHAzLnkpIC8gMik7XHJcbiAgICAgICAgcmV0dXJuIHsgZGlzOiBkaXMsIGFudGlwb2xlOiBwMywgZHJvcDogZm9vdFAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaxguWvueensOeCuVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0T3BQb2ludChwOiBjYy5WZWMyLCBBOiBudW1iZXIsIEI6IG51bWJlciwgQzogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgbGV0IHggPSAocC54IC0gMiAqIEEgKiAoQSAqIHAueCArIEIgKiBwLnkgKyBDKSAvIChBICogQSArIEIgKiBCKSk7XHJcbiAgICAgICAgbGV0IHkgPSBwLnkgLSAyICogQiAqIChBICogcC54ICsgQiAqIHAueSArIEMpIC8gKEEgKiBBICsgQiAqIEIpO1xyXG4gICAgICAgIHJldHVybiBjYy52Mih4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rGC54K55Yiw55u057q/55qE6Led56a7XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXREaXMocDogY2MuVmVjMiwgQTogbnVtYmVyLCBCOiBudW1iZXIsIEM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGRpcyA9IE1hdGguYWJzKChBICogcC54ICsgQiAqIHAueSArIEMpIC8gTWF0aC5zcXJ0KEEgKiBBICsgQiAqIEIpKVxyXG4gICAgICAgIHJldHVybiBkaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHRvb2xOaWNrKHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGxlbiA9IDA7XHJcbiAgICAgICAgbGV0IG5pY2sgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYSA9IHZhbC5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgIG5pY2sucHVzaCh2YWxbaV0pO1xyXG4gICAgICAgICAgICBpZiAoYS5tYXRjaCgvW15cXHgwMC1cXHhmZl0vaWcpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxlbiArPSAyO1xyXG4gICAgICAgICAgICAgICAgbmljay5wdXNoKFwiXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGVuICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbiA+IDgpXHJcbiAgICAgICAgICAgIHZhbCA9IChuaWNrLnNsaWNlKDAsIDgpKS5qb2luKFwiXCIpICsgXCIuLi5cIjtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+lyB2MT0+djIg55qE5aS56KeSXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRTaWduQW5nbGUodjE6IGNjLlZlYzIsIHYyOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgcmFkaWFuID0gdjEuc2lnbkFuZ2xlKHYyKTtcclxuICAgICAgICB2YXIgYW5nbGUgPSAxODAgLyBNYXRoLlBJICogcmFkaWFuO1xyXG4gICAgICAgIHJldHVybiBhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+lyB2MT0+djIg6Led56a7IOi/lOWbnuenu+WKqOinkuW6plxyXG4gICAgICogdjEg6LW35aeL5ZCR6YePXHJcbiAgICAgKiB2MiDotbflp4vlkJHph49cclxuICAgICAqIOaoquWQkeWPmOWMluW3ruWAvOWkp+S6jue6teWQkeWPmOWMluW3ruWAvOaXtiDlt6blj7MgKy0xODBcclxuICAgICAqIOe6teWQkeWPmOWMluW3ruWAvOWkp+S6jue6teWQkeWPmOWMluW3ruWAvOaXtiDlt6blj7MgKy05MFxyXG4gICAgICovXHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlUm90YXRpb24odjE6IGNjLlZlYzIsIHYyOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgeERpcyA9IE1hdGguYWJzKHYyLnggLSB2MS54KTtcclxuICAgICAgICBsZXQgeURpcyA9IE1hdGguYWJzKHYyLnkgLSB2MS55KTtcclxuICAgICAgICByZXR1cm4geERpcz55RGlzPyAxODA6OTA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflvpflpJbmjqXnn6nlvaLnmoTlpKflsI9cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldE91dFJlY3RTaXplKGluUmVjdDogY2MuU2l6ZSwgYW5nbGU6IG51bWJlcik6IGNjLlNpemUge1xyXG4gICAgICAgIGFuZ2xlID0gTWF0aC5hYnMoYW5nbGUpO1xyXG4gICAgICAgIGlmIChhbmdsZSA+IDkwICYmIGFuZ2xlIDw9IDE4MCkge1xyXG4gICAgICAgICAgICBhbmdsZSA9IDE4MCAtIGFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmFkaWFuID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xyXG4gICAgICAgIHZhciB3ID0gaW5SZWN0LmhlaWdodCAqIE1hdGguc2luKHJhZGlhbikgKyBpblJlY3Qud2lkdGggKiBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgIHZhciBoID0gaW5SZWN0LmhlaWdodCAqIE1hdGguY29zKHJhZGlhbikgKyBpblJlY3Qud2lkdGggKiBNYXRoLnNpbihyYWRpYW4pO1xyXG4gICAgICAgIHJldHVybiBjYy5zaXplKHcsIGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5aSW5o6l55+p5b2i55qE5aSn5bCPXHJcbiAgICAgKiBhbmdsZSArLTE4MCDml7YgaOmrmOS4jeWPmFxyXG4gICAgICogYW5nbGUgKy05MCDml7Ygd+WuveS4jeWPmFxyXG4gICAgICovXHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldE91dFJlY3RTaXplU3RyYWlnaHQoaW5SZWN0OiBjYy5TaXplLCBhbmdsZTogbnVtYmVyKTogY2MuU2l6ZSB7XHJcbiAgICAgICAgYW5nbGUgPSBNYXRoLmFicyhhbmdsZSk7XHJcbiAgICAgICAgLy8gaWYgKGFuZ2xlID4gOTAgJiYgYW5nbGUgPD0gMTgwKSB7XHJcbiAgICAgICAgLy8gICAgIGFuZ2xlID0gMTgwIC0gYW5nbGU7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB2YXIgdyA9IDA7XHJcbiAgICAgICAgdmFyIGggPSAwO1xyXG4gICAgICAgIHZhciByYWRpYW4gPSBNYXRoLlBJIC8gMTgwICogYW5nbGU7XHJcbiAgICAgICAgaWYoYW5nbGUgPT09IDE4MCl7Ly/pq5jkuI3lj5hcclxuICAgICAgICAgICAgdz0gaW5SZWN0LndpZHRoOy8vaW5SZWN0LmhlaWdodCAqIE1hdGguc2luKHJhZGlhbikgKyBpblJlY3Qud2lkdGggKiBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgICAgICBoPSBpblJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIH1lbHNley8v5a695LiN5Y+YXHJcbiAgICAgICAgICAgIGggPSBpblJlY3Qud2lkdGg7Ly9pblJlY3QuaGVpZ2h0ICogTWF0aC5jb3MocmFkaWFuKSArIGluUmVjdC53aWR0aCAqIE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgICAgIHc9IGluUmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjYy5zaXplKHcsIGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b6X5Zub5Liq6aG254K555qE5LiW55WM5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXROb2RlVmVydGV4QnlXb3JsZFNwYWNlQVIobm9kZTogY2MuTm9kZSwgb2Zmc2V0OiBudW1iZXIgPSAwKTogY2MuVmVjMltdIHtcclxuICAgICAgICBsZXQgdmVydGV4cyA9IGdldE5vZGVWZXJ0ZXhCeU5vZGVTcGFjZUFSKG5vZGUsIG9mZnNldCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0ZXhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZlcnRleHNbaV0gPSBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih2ZXJ0ZXhzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZlcnRleHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvpflm5vkuKrpobbngrnnmoToioLngrnlnZDmoIdcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVWZXJ0ZXhCeU5vZGVTcGFjZUFSKG5vZGU6IGNjLk5vZGUsIG9mZnNldDogbnVtYmVyID0gMCk6IGNjLlZlYzJbXSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSBub2RlLndpZHRoICogbm9kZS5hbmNob3JYICsgb2Zmc2V0O1xyXG4gICAgICAgIHZhciByaWdodCA9IG5vZGUud2lkdGggKiAoMSAtIG5vZGUuYW5jaG9yWCkgKyBvZmZzZXQ7XHJcbiAgICAgICAgdmFyIGJvdHRvbSA9IG5vZGUuaGVpZ2h0ICogbm9kZS5hbmNob3JZICsgb2Zmc2V0O1xyXG4gICAgICAgIHZhciB0b3AgPSBub2RlLmhlaWdodCAqICgxIC0gbm9kZS5hbmNob3JZKSArIG9mZnNldDtcclxuICAgICAgICBsZXQgbHQgPSBjYy52MigtbGVmdCwgdG9wKTtcclxuICAgICAgICBsZXQgcnQgPSBjYy52MihyaWdodCwgdG9wKTtcclxuICAgICAgICBsZXQgcmIgPSBjYy52MihyaWdodCwgLWJvdHRvbSk7XHJcbiAgICAgICAgbGV0IGxiID0gY2MudjIoLWxlZnQsIC1ib3R0b20pO1xyXG4gICAgICAgIHJldHVybiBbbHQsIHJ0LCByYiwgbGJdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2V0UXVlcnlWYXJpYWJsZSh1cmw6IHN0cmluZywgdmFyaWFibGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIHN0ciA9IHVybC5zdWJzdHIodXJsLmluZGV4T2YoXCI/XCIpICsgMSwgdXJsLmxlbmd0aCk7XHJcbiAgICAgICAgdmFyIHZhcnMgPSBzdHIuc3BsaXQoXCImXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICBpZiAocGFpclswXSA9PSB2YXJpYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhaXJbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodHh0OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdFRleHQgPSAodGV4dGJveCwgc3RhcnRJbmRleCwgc3RvcEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0Ym94LmNyZWF0ZVRleHRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSB0ZXh0Ym94LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIHN0YXJ0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgc3RvcEluZGV4IC0gc3RhcnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRleHRib3guc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnRJbmRleCwgc3RvcEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRleHRib3guZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvcHktaW5wdXQnKTtcclxuICAgICAgICBpZiAoIWlucHV0KSB7XHJcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXQuaWQgPSBcImNvcHktaW5wdXRcIjtcclxuICAgICAgICAgICAgaW5wdXQucmVhZE9ubHkgPSBcInJlYWRPbmx5XCI7XHJcbiAgICAgICAgICAgIGlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XHJcbiAgICAgICAgICAgIGlucHV0LnN0eWxlLnpJbmRleCA9IFwiLTEwMDBcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dC52YWx1ZSA9IHR4dDtcclxuICAgICAgICBzZWxlY3RUZXh0KGlucHV0LCAwLCB0eHQubGVuZ3RoKTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQuYmx1cigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcHJlZml4SW50ZWdlcihudW06IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKEFycmF5KGxlbmd0aCkuam9pbignMCcpICsgbnVtKS5zbGljZSgtbGVuZ3RoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIGNsaWNrR2V0UHJlZmFie1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbGFzdEtleSA9IC0xO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2xpY2tHZXRQcmVmYWIodXJsOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICBjbGlja0dldFByZWZhYi5sYXN0S2V5Kys7XHJcbiAgICAgICAgICAgIGlmKGNsaWNrR2V0UHJlZmFiLmxhc3RLZXk+MClyZXR1cm47XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNsaWNrR2V0UHJlZmFiLmxhc3RLZXksXCLlh7vnmoRrZXlcIik7XHJcbiAgICAgICAgICAgIHV0aWxzLmdldFByZWZhYih1cmwsIChub2RlKT0+e1xyXG4gICAgICAgICAgICAgICAgY2xpY2tHZXRQcmVmYWIubGFzdEtleSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2xpY2tHZXRQcmVmYWIubGFzdEtleSxcIuWbnuiwg+eahGtleVwiKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG5vZGUpO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vbG9hZOmihOWItuS9k1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFByZWZhYih1cmw6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBub2RlOmNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkPGNjLlByZWZhYj4odXJsLFxyXG4gICAgICAgICAgICAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIgPT0gbnVsbCAmJiBwcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihub2RlLnBhcmVudClub2RlLnBhcmVudC5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlja0dldFByZWZhYi5sYXN0S2V5ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihcIuWKoOi9vVVJ77yaXCIgKyB1cmwgKyBcIumUmeivr1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/toast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5232kR0fZC4adJXguj1Tn7', 'toast');
// Script/component/toast.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var toast = /** @class */ (function (_super) {
    __extends(toast, _super);
    function toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.ani = null;
        return _this;
    }
    toast.prototype.play = function (name, callback) {
        this.ani.play(name);
        this.ani.once(name, callback);
        this.label.string;
    };
    toast.prototype.setString = function (str) {
        this.label.string = str;
    };
    toast.prototype.playLongTime = function (name) {
        this.ani.play(name);
        this.label.string;
    };
    __decorate([
        property(cc.Label)
    ], toast.prototype, "label", void 0);
    __decorate([
        property(cc.Animation)
    ], toast.prototype, "ani", void 0);
    toast = __decorate([
        ccclass
    ], toast);
    return toast;
}(cc.Component));
exports.default = toast;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXHRvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBcUJDO1FBbkJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsU0FBRyxHQUFpQixJQUFJLENBQUM7O0lBZ0I3QixDQUFDO0lBZEcsb0JBQUksR0FBSixVQUFLLElBQVcsRUFBRSxRQUE4RTtRQUM1RixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDckIsQ0FBQztJQUVELHlCQUFTLEdBQVQsVUFBVSxHQUFVO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEJBQVksR0FBWixVQUFhLElBQVc7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDckIsQ0FBQztJQWxCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0NBQ0U7SUFMUixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBcUJ6QjtJQUFELFlBQUM7Q0FyQkQsQUFxQkMsQ0FyQmtDLEVBQUUsQ0FBQyxTQUFTLEdBcUI5QztrQkFyQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b2FzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmk6IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcGxheShuYW1lOnN0cmluZywgY2FsbGJhY2s6IChhcmcxPzogYW55LCBhcmcyPzogYW55LCBhcmczPzogYW55LCBhcmc0PzogYW55LCBhcmc1PzogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5hbmkucGxheShuYW1lKTtcclxuICAgICAgICB0aGlzLmFuaS5vbmNlKG5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0cmluZyhzdHI6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5TG9uZ1RpbWUobmFtZTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmFuaS5wbGF5KG5hbWUpO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/LightUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e74a23JPuBJy47lHfeMR9l/', 'LightUI');
// Script/lightUI/LightUI.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LayerManager_1 = require("../lightUI/managers/LayerManager");
var LEvent_1 = require("./events/LEvent");
var Logger_1 = require("./logging/Logger");
var LogLevel_1 = require("./logging/LogLevel");
var PopupManager_1 = require("./managers/PopupManager");
var TaskManager_1 = require("./managers/TaskManager");
var Dictionary_1 = require("./utils/Dictionary");
var LightUI = /** @class */ (function () {
    function LightUI() {
    }
    LightUI.init = function (root) {
        this.root = root;
        this.layerManager = new LayerManager_1.default();
        this.layerManager.init(root);
        this.popupManager = new PopupManager_1.default();
        this.taskManager = new TaskManager_1.default(500);
        LightUI.setIsDebug(true, 2);
    };
    LightUI.clearAllPopupManager = function () {
        LightUI.layerManager.popupLayer.removeAllChildren();
        // LightUI.layerManager.sceneLayer.removeAllChildren();
        for (var i = 0; i < LightUI.layerManager.sceneLayer.childrenCount; i++) {
            var item = LightUI.layerManager.sceneLayer.children[i];
            if (item.name == "loadingLayer")
                item.active = true;
            else
                item.active = false;
        }
        this._uiDic.clear();
    };
    LightUI.getRootPos = function (pos, parent) {
        var position = new cc.Vec3();
        //世界坐标
        position = parent.convertToWorldSpaceAR(pos);
        //root坐标
        position = LightUI.root.convertToNodeSpaceAR(position);
        return position;
    };
    LightUI.setIsDebug = function (value, level) {
        if (level === void 0) { level = -1; }
        this.logger.isDebug = value;
        level = (level < 0) ? LogLevel_1.default.DEBUG : level;
        this.logger.loggingLevel = level;
    };
    LightUI.loadPrefab = function (url, completeHandler) {
        cc.loader.loadRes(url, function (err, prefab) {
            if (err == null && prefab) {
                var ui = cc.instantiate(prefab);
                if (ui) {
                    if (completeHandler)
                        completeHandler(ui);
                }
            }
            else {
                cc.warn("加载Prefab：" + url + "错误");
            }
        });
    };
    //UI
    /**
     * 加载UI
     * @param url
     * @param parent
     * @param mask              default true    是否需要挡住下层点击
     * @param autoRemove           default true     是否自动移除  是的话 在接受node close事件时候 销毁和移除ui
     * @param completeHandler
     * @param progressCallback
     */
    LightUI.loadUI = function (url, parent, mask, autoRemove, completeHandler, progressCallback) {
        if (mask === void 0) { mask = true; }
        if (autoRemove === void 0) { autoRemove = true; }
        // console.log("loadUI url:",url)
        var ui = this._uiDic.get(url);
        if (ui) {
            LightUI.showUI(url, ui, parent, mask, autoRemove, completeHandler);
        }
        else {
            cc.loader.loadRes(url, progressCallback, function (err, prefab) {
                if (err == null && prefab) {
                    var ui_1 = cc.instantiate(prefab);
                    if (ui_1) {
                        LightUI.showUI(url, ui_1, parent, mask, autoRemove, completeHandler);
                    }
                }
                else {
                    cc.warn("加载UI：" + url + "错误");
                }
            });
        }
    };
    LightUI.showUI = function (url, ui, parent, mask, autoRemove, completeHandler) {
        if (mask === void 0) { mask = true; }
        if (autoRemove === void 0) { autoRemove = false; }
        // console.log("showUI url:", url)
        this._uiDic.set(url, ui);
        if (ui.parent != null) {
            if (completeHandler)
                completeHandler(ui);
            return;
        }
        // if (mask == true) ui.on(cc.Node.EventType.TOUCH_START, () => { })
        if (mask == true)
            ui.addComponent(cc.BlockInputEvents);
        if (parent)
            parent.addChild(ui);
        if (completeHandler)
            completeHandler(ui);
        setTimeout(function () {
            //确保 第一次时候  onShow 在start后触发
            ui.dispatchEvent(new LEvent_1.default(LEvent_1.default.SHOW));
        }, 0);
        if (autoRemove == true)
            ui.on(LEvent_1.default.CLOSE, function (e) {
                //做好消除工作
                var node = e.target;
                LightUI.disdroyUI(url);
            });
    };
    LightUI.getUI = function (url) {
        return this._uiDic.get(url);
    };
    LightUI.addUI = function (ui, parent, mask, autoRemove) {
        if (mask === void 0) { mask = true; }
        if (autoRemove === void 0) { autoRemove = false; }
        if (mask == true)
            ui.addComponent(cc.BlockInputEvents);
        if (parent)
            parent.addChild(ui);
        ui.dispatchEvent(new LEvent_1.default(LEvent_1.default.SHOW));
        if (autoRemove == true)
            ui.on(LEvent_1.default.CLOSE, function (e) {
                //做好消除工作
                var node = e.target;
                node.destroy();
            });
    };
    LightUI.getNodeUrl = function (node) {
        for (var _i = 0, _a = this._uiDic.keys; _i < _a.length; _i++) {
            var k = _a[_i];
            if (this._uiDic.get(k) == node)
                return k;
        }
        return null;
    };
    LightUI.getUIComponent = function (url, clazz) {
        return LightUI.getUI(url).getComponent(clazz);
    };
    /**
     * 销毁ui
     * @param url
     */
    LightUI.disdroyUI = function (url) {
        // console.log("disdroyUI url:", url)
        var node = this.hideUI(url);
        if (node == null)
            return;
        node.destroy();
        this._uiDic.remove(url);
    };
    LightUI.removeUI = function (url) {
        var node = this._uiDic.get(url);
        node.removeFromParent(false);
    };
    LightUI.removeAllUI = function () {
        var d = this._uiDic;
        for (var key in d) {
            d[key].removeFromParent(false);
        }
    };
    LightUI.removeUIByNode = function (node) {
        var url = this.getNodeUrl(node);
        if (!url)
            return;
        this.removeUI(url);
    };
    /**
     * 隐藏ui
     * @param url
     * @returns
     */
    LightUI.hideUI = function (url) {
        // console.log("hideUI ", url)
        var ui = this._uiDic.get(url);
        if (ui == null)
            return null;
        // ui.active = false;
        ui.removeFromParent(false);
        // this.layerManager.hideScene(ui);
        return ui;
    };
    LightUI.loadScene = function (url, parent, autoRemove, completeHandler, mask, progressCallback) {
        if (autoRemove === void 0) { autoRemove = true; }
        if (mask === void 0) { mask = true; }
        this.loadUI(url, parent, mask, autoRemove, completeHandler, progressCallback);
    };
    //popup
    //scene
    LightUI.addScene = function (scene) {
        this.layerManager.addScene(scene);
    };
    LightUI.removeScene = function (scene) {
        this.layerManager.removeScene(scene);
    };
    LightUI.desdroyScene = function (scene) {
        this.layerManager.desdroyScene(scene);
    };
    LightUI.showScene = function (scene) {
        this.layerManager.showScene(scene);
    };
    LightUI.hideSceneByNode = function (scene) {
        this.layerManager.hideScene(scene);
        for (var _i = 0, _a = this._uiDic.keys; _i < _a.length; _i++) {
            var k = _a[_i];
            if (scene == this._uiDic.get(k))
                this.hideScene(k);
        }
    };
    LightUI.hideScene = function (url) {
        // console.log("hideScene ", url)
        // let scene:cc.Node = this._uiDic.get(url);
        // if(scene == null) return;
        // this.layerManager.hideScene(scene);
        this.hideUI(url);
    };
    LightUI.logger = new Logger_1.default("LUI", false, "http://10.63.7.63:60521/ClientLog", "bull.log");
    LightUI._uiDic = new Dictionary_1.default;
    return LightUI;
}());
exports.default = LightUI;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxMaWdodFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELDBDQUFxQztBQUNyQywyQ0FBc0M7QUFDdEMsK0NBQTBDO0FBQzFDLHdEQUFtRDtBQUNuRCxzREFBaUQ7QUFDakQsaURBQTRDO0FBRTVDO0lBQUE7SUF3T0EsQ0FBQztJQXhOaUIsWUFBSSxHQUFsQixVQUFtQixJQUFhO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxzQkFBWSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4QyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ2EsNEJBQW9CLEdBQWxDO1FBRUksT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwRCx1REFBdUQ7UUFDdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWM7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOztnQkFFbkIsSUFBSSxDQUFDLE1BQU0s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QUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFDYSxpQkFBUyxHQUF2QixVQUF3QixHQUFXO1FBQy9CLGlDQUFpQztRQUNqQyw0Q0FBNEM7UUFDNUMsNEJBQTRCO1FBQzVCLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUE3TmEsY0FBTSxHQUFXLElBQUksZ0JBQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLG1DQUFtQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRTFGLGNBQU0sR0FBZSxJQUFJLG9CQUFVLENBQUM7SUE0TnZELGNBQUM7Q0F4T0QsQUF3T0MsSUFBQTtrQkF4T29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5ZXJNYW5hZ2VyIGZyb20gXCIuLi9saWdodFVJL21hbmFnZXJzL0xheWVyTWFuYWdlclwiO1xyXG5pbXBvcnQgTEV2ZW50IGZyb20gXCIuL2V2ZW50cy9MRXZlbnRcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9sb2dnaW5nL0xvZ2dlclwiO1xyXG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vbG9nZ2luZy9Mb2dMZXZlbFwiO1xyXG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gXCIuL21hbmFnZXJzL1BvcHVwTWFuYWdlclwiO1xyXG5pbXBvcnQgVGFza01hbmFnZXIgZnJvbSBcIi4vbWFuYWdlcnMvVGFza01hbmFnZXJcIjtcclxuaW1wb3J0IERpY3Rpb25hcnkgZnJvbSBcIi4vdXRpbHMvRGljdGlvbmFyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlnaHRVSSB7XHJcbiAgICAvL3Vp5qC56IqC54K5IFxyXG4gICAgcHVibGljIHN0YXRpYyByb290OiBjYy5Ob2RlO1xyXG4gICAgLy/lsYLnuqfnrqHnkIbnsbtcclxuICAgIHB1YmxpYyBzdGF0aWMgbGF5ZXJNYW5hZ2VyOiBMYXllck1hbmFnZXI7XHJcbiAgICAvL+W8ueWHuueql+euoeeQhuexu1xyXG4gICAgcHVibGljIHN0YXRpYyBwb3B1cE1hbmFnZXI6IFBvcHVwTWFuYWdlcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRhc2tNYW5hZ2VyOiBUYXNrTWFuYWdlcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcihcIkxVSVwiLCBmYWxzZSwgXCJodHRwOi8vMTAuNjMuNy42Mzo2MDUyMS9DbGllbnRMb2dcIiwgXCJidWxsLmxvZ1wiKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdWlEaWM6IERpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeTtcclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdChyb290OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuXHJcbiAgICAgICAgdGhpcy5sYXllck1hbmFnZXIgPSBuZXcgTGF5ZXJNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5sYXllck1hbmFnZXIuaW5pdChyb290KTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3B1cE1hbmFnZXIgPSBuZXcgUG9wdXBNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy50YXNrTWFuYWdlciA9IG5ldyBUYXNrTWFuYWdlcig1MDApO1xyXG5cclxuICAgICAgICBMaWdodFVJLnNldElzRGVidWcodHJ1ZSwgMik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQWxsUG9wdXBNYW5hZ2VyKCkge1xyXG5cclxuICAgICAgICBMaWdodFVJLmxheWVyTWFuYWdlci5wb3B1cExheWVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgLy8gTGlnaHRVSS5sYXllck1hbmFnZXIuc2NlbmVMYXllci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTGlnaHRVSS5sYXllck1hbmFnZXIuc2NlbmVMYXllci5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBMaWdodFVJLmxheWVyTWFuYWdlci5zY2VuZUxheWVyLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09IFwibG9hZGluZ0xheWVyXCIpXHJcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91aURpYy5jbGVhcigpO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Um9vdFBvcyhwb3M6IGNjLlZlYzMsIHBhcmVudDogY2MuTm9kZSk6IGNjLlZlYzMge1xyXG4gICAgICAgIGxldCBwb3NpdGlvbjogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKCk7XHJcbiAgICAgICAgLy/kuJbnlYzlnZDmoIdcclxuICAgICAgICBwb3NpdGlvbiA9IHBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKTtcclxuICAgICAgICAvL3Jvb3TlnZDmoIdcclxuICAgICAgICBwb3NpdGlvbiA9IExpZ2h0VUkucm9vdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NpdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SXNEZWJ1Zyh2YWx1ZTogYm9vbGVhbiwgbGV2ZWw6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaXNEZWJ1ZyA9IHZhbHVlO1xyXG4gICAgICAgIGxldmVsID0gKGxldmVsIDwgMCkgPyBMb2dMZXZlbC5ERUJVRyA6IGxldmVsO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZ2dpbmdMZXZlbCA9IGxldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFByZWZhYih1cmw6IHN0cmluZywgY29tcGxldGVIYW5kbGVyOiAobm9kZTogY2MuTm9kZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCxcclxuICAgICAgICAgICAgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyID09IG51bGwgJiYgcHJlZmFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVpOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVIYW5kbGVyKSBjb21wbGV0ZUhhbmRsZXIodWkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihcIuWKoOi9vVByZWZhYu+8mlwiICsgdXJsICsgXCLplJnor69cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9VSVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29VUlcclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKiBAcGFyYW0gcGFyZW50IFxyXG4gICAgICogQHBhcmFtIG1hc2sgICAgICAgICAgICAgIGRlZmF1bHQgdHJ1ZSAgICDmmK/lkKbpnIDopoHmjKHkvY/kuIvlsYLngrnlh7tcclxuICAgICAqIEBwYXJhbSBhdXRvUmVtb3ZlICAgICAgICAgICBkZWZhdWx0IHRydWUgICAgIOaYr+WQpuiHquWKqOenu+mZpCAg5piv55qE6K+dIOWcqOaOpeWPl25vZGUgY2xvc2Xkuovku7bml7blgJkg6ZSA5q+B5ZKM56e76ZmkdWlcclxuICAgICAqIEBwYXJhbSBjb21wbGV0ZUhhbmRsZXIgXHJcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3NDYWxsYmFjayBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkVUkodXJsOiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSwgbWFzazogYm9vbGVhbiA9IHRydWUsIGF1dG9SZW1vdmU6IGJvb2xlYW4gPSB0cnVlLCBjb21wbGV0ZUhhbmRsZXI/OiAobm9kZTogY2MuTm9kZSkgPT4gdm9pZCwgcHJvZ3Jlc3NDYWxsYmFjaz86IChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9hZFVJIHVybDpcIix1cmwpXHJcbiAgICAgICAgbGV0IHVpOiBjYy5Ob2RlID0gdGhpcy5fdWlEaWMuZ2V0KHVybCk7XHJcbiAgICAgICAgaWYgKHVpKSB7XHJcbiAgICAgICAgICAgIExpZ2h0VUkuc2hvd1VJKHVybCwgdWksIHBhcmVudCwgbWFzaywgYXV0b1JlbW92ZSwgY29tcGxldGVIYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgcHJvZ3Jlc3NDYWxsYmFjayxcclxuICAgICAgICAgICAgICAgIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgPT0gbnVsbCAmJiBwcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVpOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpZ2h0VUkuc2hvd1VJKHVybCwgdWksIHBhcmVudCwgbWFzaywgYXV0b1JlbW92ZSwgY29tcGxldGVIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oXCLliqDovb1VSe+8mlwiICsgdXJsICsgXCLplJnor69cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd1VJKHVybDogc3RyaW5nLCB1aTogY2MuTm9kZSwgcGFyZW50OiBjYy5Ob2RlLCBtYXNrOiBib29sZWFuID0gdHJ1ZSwgYXV0b1JlbW92ZTogYm9vbGVhbiA9IGZhbHNlLCBjb21wbGV0ZUhhbmRsZXI/OiAobm9kZTogY2MuTm9kZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvd1VJIHVybDpcIiwgdXJsKVxyXG4gICAgICAgIHRoaXMuX3VpRGljLnNldCh1cmwsIHVpKTtcclxuICAgICAgICBpZiAodWkucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlSGFuZGxlcikgY29tcGxldGVIYW5kbGVyKHVpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAobWFzayA9PSB0cnVlKSB1aS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4geyB9KVxyXG4gICAgICAgIGlmIChtYXNrID09IHRydWUpIHVpLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICBpZiAocGFyZW50KSBwYXJlbnQuYWRkQ2hpbGQodWkpO1xyXG4gICAgICAgIGlmIChjb21wbGV0ZUhhbmRsZXIpIGNvbXBsZXRlSGFuZGxlcih1aSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v56Gu5L+dIOesrOS4gOasoeaXtuWAmSAgb25TaG93IOWcqHN0YXJ05ZCO6Kem5Y+RXHJcbiAgICAgICAgICAgIHVpLmRpc3BhdGNoRXZlbnQobmV3IExFdmVudChMRXZlbnQuU0hPVykpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIGlmIChhdXRvUmVtb3ZlID09IHRydWUpIHVpLm9uKExFdmVudC5DTE9TRSwgKGU6IExFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WBmuWlvea2iOmZpOW3peS9nFxyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBMaWdodFVJLmRpc2Ryb3lVSSh1cmwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRVSSh1cmw6IHN0cmluZyk6IGNjLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aURpYy5nZXQodXJsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkVUkodWk6IGNjLk5vZGUsIHBhcmVudDogY2MuTm9kZSwgbWFzazogYm9vbGVhbiA9IHRydWUsIGF1dG9SZW1vdmU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChtYXNrID09IHRydWUpIHVpLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICBpZiAocGFyZW50KSBwYXJlbnQuYWRkQ2hpbGQodWkpO1xyXG4gICAgICAgIHVpLmRpc3BhdGNoRXZlbnQobmV3IExFdmVudChMRXZlbnQuU0hPVykpO1xyXG4gICAgICAgIGlmIChhdXRvUmVtb3ZlID09IHRydWUpIHVpLm9uKExFdmVudC5DTE9TRSwgKGU6IExFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WBmuWlvea2iOmZpOW3peS9nFxyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5vZGVVcmwobm9kZTogY2MuTm9kZSk6IHN0cmluZyB7XHJcbiAgICAgICAgZm9yICh2YXIgayBvZiB0aGlzLl91aURpYy5rZXlzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl91aURpYy5nZXQoaykgPT0gbm9kZSkgcmV0dXJuIGs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VUlDb21wb25lbnQ8VD4odXJsOiBzdHJpbmcsIGNsYXp6OiBUKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIExpZ2h0VUkuZ2V0VUkodXJsKS5nZXRDb21wb25lbnQoY2xhenogYXMgYW55KSBhcyBhbnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDplIDmr4F1aVxyXG4gICAgICogQHBhcmFtIHVybCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkaXNkcm95VUkodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc2Ryb3lVSSB1cmw6XCIsIHVybClcclxuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IHRoaXMuaGlkZVVJKHVybCk7XHJcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX3VpRGljLnJlbW92ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlVUkodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IHRoaXMuX3VpRGljLmdldCh1cmwpO1xyXG4gICAgICAgIG5vZGUucmVtb3ZlRnJvbVBhcmVudChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGxVSSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZDogRGljdGlvbmFyeSA9IHRoaXMuX3VpRGljO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkKSB7XHJcbiAgICAgICAgICAgIGRba2V5XS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZVVJQnlOb2RlKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSB0aGlzLmdldE5vZGVVcmwobm9kZSk7XHJcbiAgICAgICAgaWYgKCF1cmwpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlbW92ZVVJKHVybCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj3VpXHJcbiAgICAgKiBAcGFyYW0gdXJsIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaGlkZVVJKHVybDogc3RyaW5nKTogY2MuTm9kZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoaWRlVUkgXCIsIHVybClcclxuICAgICAgICBsZXQgdWk6IGNjLk5vZGUgPSB0aGlzLl91aURpYy5nZXQodXJsKTtcclxuICAgICAgICBpZiAodWkgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgLy8gdWkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdWkucmVtb3ZlRnJvbVBhcmVudChmYWxzZSk7XHJcbiAgICAgICAgLy8gdGhpcy5sYXllck1hbmFnZXIuaGlkZVNjZW5lKHVpKTtcclxuICAgICAgICByZXR1cm4gdWk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFNjZW5lKHVybDogc3RyaW5nLCBwYXJlbnQ6IGNjLk5vZGUsIGF1dG9SZW1vdmU6IGJvb2xlYW4gPSB0cnVlLCBjb21wbGV0ZUhhbmRsZXI/OiAobm9kZTogY2MuTm9kZSkgPT4gdm9pZCwgbWFzazogYm9vbGVhbiA9IHRydWUsIHByb2dyZXNzQ2FsbGJhY2s/OiAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmxvYWRVSSh1cmwsIHBhcmVudCwgbWFzaywgYXV0b1JlbW92ZSwgY29tcGxldGVIYW5kbGVyLCBwcm9ncmVzc0NhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3BvcHVwXHJcblxyXG4gICAgLy9zY2VuZVxyXG4gICAgcHVibGljIHN0YXRpYyBhZGRTY2VuZShzY2VuZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJNYW5hZ2VyLmFkZFNjZW5lKHNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZVNjZW5lKHNjZW5lOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5sYXllck1hbmFnZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzZHJveVNjZW5lKHNjZW5lOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5sYXllck1hbmFnZXIuZGVzZHJveVNjZW5lKHNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dTY2VuZShzY2VuZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJNYW5hZ2VyLnNob3dTY2VuZShzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBoaWRlU2NlbmVCeU5vZGUoc2NlbmU6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmxheWVyTWFuYWdlci5oaWRlU2NlbmUoc2NlbmUpO1xyXG4gICAgICAgIGZvciAodmFyIGsgb2YgdGhpcy5fdWlEaWMua2V5cykge1xyXG4gICAgICAgICAgICBpZiAoc2NlbmUgPT0gdGhpcy5fdWlEaWMuZ2V0KGspKSB0aGlzLmhpZGVTY2VuZShrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGhpZGVTY2VuZSh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGlkZVNjZW5lIFwiLCB1cmwpXHJcbiAgICAgICAgLy8gbGV0IHNjZW5lOmNjLk5vZGUgPSB0aGlzLl91aURpYy5nZXQodXJsKTtcclxuICAgICAgICAvLyBpZihzY2VuZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgLy8gdGhpcy5sYXllck1hbmFnZXIuaGlkZVNjZW5lKHNjZW5lKTtcclxuICAgICAgICB0aGlzLmhpZGVVSSh1cmwpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/tishi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84dccBLmM9AQ5YCivBuouzZ', 'tishi');
// Script/component/tishi.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AudioManage_1 = require("../../Common/src/AudioManage");
var AudioConfig_1 = require("../../Common/src/AudioConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tishi = /** @class */ (function (_super) {
    __extends(tishi, _super);
    function tishi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tishi = null;
        _this.callBack = null;
        _this.isOpen = false;
        return _this;
    }
    tishi_1 = tishi;
    tishi.prototype.onLoad = function () {
        tishi_1.instance = this;
    };
    tishi.prototype.setString = function (str) {
        this.tishi.string = str;
    };
    tishi.prototype.onCloseTishi = function () {
        this.isOpen = false;
        if (this.node)
            this.node.destroy();
        if (this.callBack) {
            AudioManage_1.AudioManage.playEffect(AudioConfig_1.default.effect_button_click);
            this.callBack();
        }
    };
    var tishi_1;
    tishi.instance = null;
    __decorate([
        property(cc.Label)
    ], tishi.prototype, "tishi", void 0);
    tishi = tishi_1 = __decorate([
        ccclass
    ], tishi);
    return tishi;
}(cc.Component));
exports.default = tishi;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXHRpc2hpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDREQUEwRDtBQUMxRCw0REFBc0Q7QUFDaEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE0QkM7UUF2QkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBbUJuQixDQUFDO2NBNUJvQixLQUFLO0lBV3RCLHNCQUFNLEdBQU47UUFDSSxPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLEdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBRyxJQUFJLENBQUMsSUFBSTtZQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YseUJBQVcsQ0FBQyxVQUFVLENBQUMscUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtTQUNsQjtJQUNMLENBQUM7O0lBeEJNLGNBQVEsR0FBVSxJQUFJLENBQUM7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3Q0FDSTtJQUxOLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0E0QnpCO0lBQUQsWUFBQztDQTVCRCxBQTRCQyxDQTVCa0MsRUFBRSxDQUFDLFNBQVMsR0E0QjlDO2tCQTVCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2FzdCBmcm9tIFwiLi90b2FzdFwiXHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlIH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9zcmMvQXVkaW9NYW5hZ2VcIlxyXG5pbXBvcnQgYXVkaW9Db25maWcgZnJvbSBcIi4uLy4uL0NvbW1vbi9zcmMvQXVkaW9Db25maWdcIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGlzaGkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZTogdGlzaGkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpc2hpOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgY2FsbEJhY2s6RnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aXNoaS5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RyaW5nKHN0cjogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLnRpc2hpLnN0cmluZyA9IHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlVGlzaGkoKSB7XHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLm5vZGUpdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICBpZiAodGhpcy5jYWxsQmFjaykge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZS5wbGF5RWZmZWN0KGF1ZGlvQ29uZmlnLmVmZmVjdF9idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxCYWNrKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/heartBeat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '973d9bzH+1KzaambgYeCFFW', 'heartBeat');
// Script/component/heartBeat.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DznSocket_1 = require("../../Common/src/DznSocket");
var serverTime_1 = require("./serverTime");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var heartBeat = /** @class */ (function (_super) {
    __extends(heartBeat, _super);
    function heartBeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interval = 5;
        _this.time = 0;
        _this.maxTime = 3;
        return _this;
    }
    heartBeat.prototype.onLoad = function () {
        DznSocket_1.DznSocket.on("JOIN_DESK_ACK", this.JOIN_DESK_ACK, this);
        DznSocket_1.DznSocket.on("PONG", this.PONG, this);
    };
    heartBeat.prototype.onDestroy = function () {
        DznSocket_1.DznSocket.targetOff(this);
    };
    heartBeat.prototype.JOIN_DESK_ACK = function (v) {
        var _this = this;
        this.unscheduleAllCallbacks();
        var sendBeat = function () {
            _this.time++;
            // 心跳超过次数 关闭网络 重连在场景中处理
            if (_this.time > _this.maxTime) {
                _this.unscheduleAllCallbacks();
                _this.time = 0;
                DznSocket_1.DznSocket.closeSocket();
                return;
            }
            if (!DznSocket_1.DznSocket.getConnect()) {
                _this.unscheduleAllCallbacks();
                return;
            }
            DznSocket_1.DznSocket.sendMessage({
                cmdKey: "PING",
                clientTime: Date.now(),
            });
        };
        sendBeat();
        this.schedule(sendBeat, this.interval);
    };
    heartBeat.prototype.PONG = function (v) {
        this.time = 0;
        serverTime_1.default.setOffsetTime(v);
    };
    __decorate([
        property
    ], heartBeat.prototype, "interval", void 0);
    __decorate([
        property
    ], heartBeat.prototype, "time", void 0);
    __decorate([
        property
    ], heartBeat.prototype, "maxTime", void 0);
    heartBeat = __decorate([
        ccclass
    ], heartBeat);
    return heartBeat;
}(cc.Component));
exports.default = heartBeat;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXGhlYXJ0QmVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBc0Q7QUFDdEQsMkNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBcURDO1FBbERHLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixhQUFPLEdBQVcsQ0FBQyxDQUFDOztJQTRDeEIsQ0FBQztJQTFDRywwQkFBTSxHQUFOO1FBQ0kscUJBQVMsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQscUJBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLENBQXdCO1FBQXRDLGlCQTJCQztRQXpCRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUU5QixJQUFJLFFBQVEsR0FBRztZQUNYLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLHVCQUF1QjtZQUN2QixJQUFJLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3hCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUN6QixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDOUIsT0FBTzthQUNWO1lBRUQscUJBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2FBQ3pCLENBQUMsQ0FBQTtRQUVOLENBQUMsQ0FBQztRQUNGLFFBQVEsRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx3QkFBSSxHQUFKLFVBQUssQ0FBZTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLG9CQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFqREQ7UUFEQyxRQUFROytDQUNZO0lBR3JCO1FBREMsUUFBUTsyQ0FDUTtJQUdqQjtRQURDLFFBQVE7OENBQ1c7SUFUSCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBcUQ3QjtJQUFELGdCQUFDO0NBckRELEFBcURDLENBckRzQyxFQUFFLENBQUMsU0FBUyxHQXFEbEQ7a0JBckRvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHpuU29ja2V0IH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9zcmMvRHpuU29ja2V0XCJcclxuaW1wb3J0IHNlcnZlclRpbWUgZnJvbSBcIi4vc2VydmVyVGltZVwiXHJcbmltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4vZ2FtZURhdGFcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhlYXJ0QmVhdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpbnRlcnZhbDogbnVtYmVyID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhUaW1lOiBudW1iZXIgPSAzO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBEem5Tb2NrZXQub24oXCJKT0lOX0RFU0tfQUNLXCIsIHRoaXMuSk9JTl9ERVNLX0FDSywgdGhpcyk7XHJcbiAgICAgICAgRHpuU29ja2V0Lm9uKFwiUE9OR1wiLCB0aGlzLlBPTkcsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBEem5Tb2NrZXQudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEpPSU5fREVTS19BQ0sodjogYXBpRGF0YS5qb2luX2Rlc2tfYWNrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgICAgIGxldCBzZW5kQmVhdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lKys7XHJcbiAgICAgICAgICAgIC8vIOW/g+i3s+i2hei/h+asoeaVsCDlhbPpl63nvZHnu5wg6YeN6L+e5Zyo5Zy65pmv5Lit5aSE55CGXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWUgPiB0aGlzLm1heFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgICAgICAgICAgIER6blNvY2tldC5jbG9zZVNvY2tldCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIUR6blNvY2tldC5nZXRDb25uZWN0KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBEem5Tb2NrZXQuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgY21kS2V5OiBcIlBJTkdcIixcclxuICAgICAgICAgICAgICAgIGNsaWVudFRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VuZEJlYXQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHNlbmRCZWF0LCB0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBQT05HKHY6IGFwaURhdGEucG9uZykge1xyXG4gICAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICAgICAgc2VydmVyVGltZS5zZXRPZmZzZXRUaW1lKHYpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/alert/LAlertBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ebbaiIo4ZL4IM3cd98N/WA', 'LAlertBox');
// Script/lightUI/components/alert/LAlertBox.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../../events/LEvent");
var LightUI_1 = require("../../LightUI");
var LWindow_1 = require("../LWindow");
var LAlertBox = /** @class */ (function (_super) {
    __extends(LAlertBox, _super);
    function LAlertBox(prefabUrl) {
        var _this = _super.call(this) || this;
        _this.url = prefabUrl;
        LightUI_1.default.loadPrefab(prefabUrl, function (node) {
            _this.window = node;
            _this.addChild(_this.window);
            _this.updataView();
            _this.initWindow();
            _this.window.on(LEvent_1.default.CLOSE, function (e) {
                _this.dispatchEvent(new LEvent_1.default(LEvent_1.default.CLOSE, e.data));
            }, _this);
        });
        return _this;
    }
    LAlertBox.prototype.initWindow = function () {
        var _this = this;
        var btn;
        for (var i = 0; i < this.window.children.length; i++) {
            btn = this.window.children[i].getComponent(cc.Button);
            if (btn != null)
                btn.node.on(cc.Node.EventType.TOUCH_START, function (e) {
                    _this.window.getComponent(LWindow_1.default).close(e.target.name);
                });
        }
    };
    LAlertBox.prototype.updataView = function () {
        this.window.getComponent(LWindow_1.default).setTitle(this._title);
        this.window.getComponent(LWindow_1.default).setMsg(this._msg);
    };
    Object.defineProperty(LAlertBox.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
            if (!this.window)
                return;
            this.window.getComponent(LWindow_1.default).setTitle(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LAlertBox.prototype, "msg", {
        get: function () {
            return this._msg;
        },
        set: function (value) {
            this._msg = value;
            if (!this.window)
                return;
            this.window.getComponent(LWindow_1.default).setMsg(value);
        },
        enumerable: false,
        configurable: true
    });
    return LAlertBox;
}(cc.Node));
exports.default = LAlertBox;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxhbGVydFxcTEFsZXJ0Qm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUN6Qyx5Q0FBb0M7QUFFcEMsc0NBQWlDO0FBRWpDO0lBQXVDLDZCQUFPO0lBVTFDLG1CQUFZLFNBQWdCO1FBQTVCLFlBQ0ksaUJBQU8sU0FXVjtRQVZHLEtBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLGlCQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBQyxVQUFDLElBQVk7WUFDdEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBTSxDQUFDLEtBQUssRUFBQyxVQUFDLENBQVE7Z0JBQ2pDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxnQkFBTSxDQUFDLGdCQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsRUFBQyxLQUFJLENBQUMsQ0FBQTtRQUNYLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFFTyw4QkFBVSxHQUFsQjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxHQUFhLENBQUM7UUFDbEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUM5QyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxJQUFHLEdBQUcsSUFBSSxJQUFJO2dCQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxVQUFDLENBQVU7b0JBQ2pFLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0QsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFTyw4QkFBVSxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxzQkFBVyw0QkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBQ0QsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUxBO0lBT0Qsc0JBQVcsMEJBQUc7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBQ0QsVUFBZSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFNO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BTEE7SUFNTCxnQkFBQztBQUFELENBeERBLEFBd0RDLENBeERzQyxFQUFFLENBQUMsSUFBSSxHQXdEN0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTEV2ZW50IGZyb20gXCIuLi8uLi9ldmVudHMvTEV2ZW50XCI7XHJcbmltcG9ydCBMaWdodFVJIGZyb20gXCIuLi8uLi9MaWdodFVJXCI7XHJcbmltcG9ydCBMQ29tcG9uZW50IGZyb20gXCIuLi9MQ29tcG9uZW50XCI7XHJcbmltcG9ydCBMV2luZG93IGZyb20gXCIuLi9MV2luZG93XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMQWxlcnRCb3ggZXh0ZW5kcyBjYy5Ob2Rle1xyXG4gICAgcHVibGljIGRhdGE6YW55O1xyXG4gICAgcHVibGljIHVybDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHdpbmRvdzpjYy5Ob2RlO1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX21zZzogc3RyaW5nO1xyXG4gICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwcmVmYWJVcmw6c3RyaW5nKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudXJsID0gcHJlZmFiVXJsO1xyXG4gICAgICAgIExpZ2h0VUkubG9hZFByZWZhYihwcmVmYWJVcmwsKG5vZGU6Y2MuTm9kZSk9PntcclxuICAgICAgICAgICAgdGhpcy53aW5kb3cgPSBub2RlO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMud2luZG93KTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGFWaWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFdpbmRvdygpO1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvdy5vbihMRXZlbnQuQ0xPU0UsKGU6TEV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBMRXZlbnQoTEV2ZW50LkNMT1NFLGUuZGF0YSkpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0V2luZG93KCl7XHJcbiAgICAgICAgbGV0IGJ0bjpjYy5CdXR0b247XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTx0aGlzLndpbmRvdy5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGJ0biA9IHRoaXMud2luZG93LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBpZihidG4gIT0gbnVsbCkgYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGU6Y2MuRXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvdy5nZXRDb21wb25lbnQoTFdpbmRvdykuY2xvc2UoZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRhVmlldygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy53aW5kb3cuZ2V0Q29tcG9uZW50KExXaW5kb3cpLnNldFRpdGxlKHRoaXMuX3RpdGxlKTtcclxuICAgICAgICB0aGlzLndpbmRvdy5nZXRDb21wb25lbnQoTFdpbmRvdykuc2V0TXNnKHRoaXMuX21zZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICAgICAgaWYoIXRoaXMud2luZG93KSByZXR1cm5cclxuICAgICAgICB0aGlzLndpbmRvdy5nZXRDb21wb25lbnQoTFdpbmRvdykuc2V0VGl0bGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbXNnKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21zZztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbXNnKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9tc2cgPSB2YWx1ZTtcclxuICAgICAgICBpZighdGhpcy53aW5kb3cpIHJldHVyblxyXG4gICAgICAgIHRoaXMud2luZG93LmdldENvbXBvbmVudChMV2luZG93KS5zZXRNc2codmFsdWUpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/LWindow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d978pBYaBLg4Hp6afE0ze2', 'LWindow');
// Script/lightUI/components/LWindow.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LComponent_1 = require("./LComponent");
var LEvent_1 = require("../events/LEvent");
var AudioManage_1 = require("../../../../common/src/AudioManage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LWindow = /** @class */ (function (_super) {
    __extends(LWindow, _super);
    function LWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = "";
        _this.msg = "";
        _this.closeParent = false;
        _this.title_txt = null;
        _this.msg_txt = null;
        _this.close_btn = null;
        return _this;
    }
    //@override
    LWindow.prototype.onUpdateView = function () {
        if (this.title_txt)
            this.title_txt.string = this.title;
        if (this.msg_txt)
            this.msg_txt.string = this.msg;
    };
    //@override
    LWindow.prototype.onLoad = function () {
        var _this = this;
        // console.log("window close"+this.close_btn.node);
        if (this.close_btn)
            this.close_btn.node.on(cc.Node.EventType.TOUCH_START, function (e) {
                // console.log("window close");
                _this.close(e.target.name);
            }, this);
        this.onUpdateView();
        //遮挡下层事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.none);
    };
    LWindow.prototype.close = function (targetName) {
        if (targetName === void 0) { targetName = ""; }
        console.log("windows close", targetName);
        this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.CLOSE, targetName));
        this.node.off(cc.Node.EventType.TOUCH_START, this.none);
        if (this.closeParent == true) {
            this.node.parent.parent && this.node.parent.parent.removeChild(this.node, false);
        }
        else {
            this.node.parent && this.node.parent.removeChild(this.node, false);
        }
        AudioManage_1.AudioManage.playEffect('audio/click_close');
    };
    LWindow.prototype.none = function () { };
    LWindow.prototype.getMsg = function () { return this.msg; };
    LWindow.prototype.setMsg = function (value) {
        this.msg = value;
        if (this.msg_txt)
            this.msg_txt.string = this.msg;
    };
    LWindow.prototype.getTitle = function () { return this.title; };
    LWindow.prototype.setTitle = function (value) {
        this.title = value;
        if (this.title_txt)
            this.title_txt.string = this.title;
    };
    __decorate([
        property()
    ], LWindow.prototype, "title", void 0);
    __decorate([
        property()
    ], LWindow.prototype, "msg", void 0);
    __decorate([
        property()
    ], LWindow.prototype, "closeParent", void 0);
    __decorate([
        property(cc.Label)
    ], LWindow.prototype, "title_txt", void 0);
    __decorate([
        property(cc.Label)
    ], LWindow.prototype, "msg_txt", void 0);
    __decorate([
        property(cc.Button)
    ], LWindow.prototype, "close_btn", void 0);
    LWindow = __decorate([
        ccclass
    ], LWindow);
    return LWindow;
}(LComponent_1.default));
exports.default = LWindow;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxMV2luZG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQywyQ0FBc0M7QUFDdEMsa0VBQWlFO0FBRTNELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSTVDO0lBQXFDLDJCQUFVO0lBQS9DO1FBQUEscUVBK0RDO1FBN0RHLFdBQUssR0FBVSxFQUFFLENBQUM7UUFHbEIsU0FBRyxHQUFVLEVBQUUsQ0FBQztRQUdoQixpQkFBVyxHQUFXLEtBQUssQ0FBQztRQUdyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFhLElBQUksQ0FBQzs7SUE4Q3RDLENBQUM7SUE1Q0csV0FBVztJQUNKLDhCQUFZLEdBQW5CO1FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBRyxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEQsQ0FBQztJQUVELFdBQVc7SUFDWCx3QkFBTSxHQUFOO1FBQUEsaUJBVUM7UUFURyxtREFBbUQ7UUFDbkQsSUFBRyxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsVUFBQyxDQUFVO2dCQUMvRSwrQkFBK0I7Z0JBQy9CLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLHVCQUFLLEdBQVosVUFBYSxVQUFzQjtRQUF0QiwyQkFBQSxFQUFBLGVBQXNCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxnQkFBTSxDQUFDLEtBQUssRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25GO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztTQUNyRTtRQUNELHlCQUFXLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLHNCQUFJLEdBQVosY0FBb0IsQ0FBQztJQUVkLHdCQUFNLEdBQWIsY0FBd0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztJQUNwQyx3QkFBTSxHQUFiLFVBQWMsS0FBWTtRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqQixJQUFHLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwRCxDQUFDO0lBRU0sMEJBQVEsR0FBZixjQUEwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDO0lBQ3hDLDBCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFHLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMxRCxDQUFDO0lBNUREO1FBREMsUUFBUSxFQUFFOzBDQUNPO0lBR2xCO1FBREMsUUFBUSxFQUFFO3dDQUNLO0lBR2hCO1FBREMsUUFBUSxFQUFFO2dEQUNpQjtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNjO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ1k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDYztJQWpCakIsT0FBTztRQUYzQixPQUFPO09BRWEsT0FBTyxDQStEM0I7SUFBRCxjQUFDO0NBL0RELEFBK0RDLENBL0RvQyxvQkFBVSxHQStEOUM7a0JBL0RvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExDb21wb25lbnQgZnJvbSBcIi4vTENvbXBvbmVudFwiXHJcbmltcG9ydCBMRXZuZXQgZnJvbSBcIi4uL2V2ZW50cy9MRXZlbnRcIjtcclxuaW1wb3J0IHsgQXVkaW9NYW5hZ2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3NyYy9BdWRpb01hbmFnZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMV2luZG93IGV4dGVuZHMgTENvbXBvbmVudHtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICB0aXRsZTpzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBtc2c6c3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgY2xvc2VQYXJlbnQ6Qm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyB0aXRsZV90eHQ6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHB1YmxpYyBtc2dfdHh0OmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHVibGljIGNsb3NlX2J0bjpjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIC8vQG92ZXJyaWRlXHJcbiAgICBwdWJsaWMgb25VcGRhdGVWaWV3KCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLnRpdGxlX3R4dCkgdGhpcy50aXRsZV90eHQuc3RyaW5nID0gdGhpcy50aXRsZTtcclxuICAgICAgICBpZih0aGlzLm1zZ190eHQpIHRoaXMubXNnX3R4dC5zdHJpbmcgPSB0aGlzLm1zZztcclxuICAgIH1cclxuXHJcbiAgICAvL0BvdmVycmlkZVxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2luZG93IGNsb3NlXCIrdGhpcy5jbG9zZV9idG4ubm9kZSk7XHJcbiAgICAgICAgaWYodGhpcy5jbG9zZV9idG4pIHRoaXMuY2xvc2VfYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKGU6Y2MuRXZlbnQpPT57XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2luZG93IGNsb3NlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZVZpZXcoKTtcclxuXHJcbiAgICAgICAgLy/pga7mjKHkuIvlsYLkuovku7ZcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMubm9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKHRhcmdldE5hbWU6c3RyaW5nID0gXCJcIil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aW5kb3dzIGNsb3NlXCIsdGFyZ2V0TmFtZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IExFdm5ldChMRXZuZXQuQ0xPU0UsdGFyZ2V0TmFtZSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMubm9uZSk7XHJcbiAgICAgICAgaWYodGhpcy5jbG9zZVBhcmVudCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQucGFyZW50ICYmIHRoaXMubm9kZS5wYXJlbnQucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMubm9kZSxmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudCAmJiB0aGlzLm5vZGUucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMubm9kZSxmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEF1ZGlvTWFuYWdlLnBsYXlFZmZlY3QoJ2F1ZGlvL2NsaWNrX2Nsb3NlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBub25lKCk6dm9pZHt9XHJcblxyXG4gICAgcHVibGljIGdldE1zZygpOnN0cmluZ3sgcmV0dXJuIHRoaXMubXNnOyAgfVxyXG4gICAgcHVibGljIHNldE1zZyh2YWx1ZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMubXNnID0gdmFsdWU7XHJcbiAgICAgICAgaWYodGhpcy5tc2dfdHh0KSB0aGlzLm1zZ190eHQuc3RyaW5nID0gdGhpcy5tc2c7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpdGxlKCk6c3RyaW5neyByZXR1cm4gdGhpcy50aXRsZTsgIH1cclxuICAgIHB1YmxpYyBzZXRUaXRsZSh2YWx1ZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcclxuICAgICAgICBpZih0aGlzLnRpdGxlX3R4dCkgdGhpcy50aXRsZV90eHQuc3RyaW5nID0gdGhpcy50aXRsZTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/LViewStack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2b75o/y1hM/ax+HF7zOoOP', 'LViewStack');
// Script/lightUI/components/LViewStack.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../events/LEvent");
var LComponent_1 = require("./LComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LViewStack = /** @class */ (function (_super) {
    __extends(LViewStack, _super);
    function LViewStack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._views = [];
        _this._selectIndex = -1;
        return _this;
    }
    LViewStack.prototype.onLoad = function () {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this._views.push(this.node.children[i]);
        }
    };
    LViewStack.prototype.visibleAll = function (value) {
        var l = this._views.length;
        for (var i = 0; i < l; i++) {
            this._views[i].active = value;
        }
    };
    LViewStack.prototype.getViewByIndex = function (index) {
        return this._views[index];
    };
    Object.defineProperty(LViewStack.prototype, "selectIndex", {
        get: function () { return this._selectIndex; },
        set: function (value) {
            if (this._selectIndex == value)
                return;
            this._selectIndex = value;
            this.visibleAll(false);
            this.getViewByIndex(value).active = true;
            this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.CHANGED));
            this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.SELECT));
        },
        enumerable: false,
        configurable: true
    });
    ;
    LViewStack.prototype.addView = function (view) {
        this.node.addChild(view);
        this._views.push(view);
        view.active = false;
    };
    LViewStack.prototype.removeView = function (view) {
        var l = this._views.length;
        for (var i = 0; i < l; i++) {
            if (this._views[i] == view) {
                this._views.splice(i, 1);
                this.node.removeChild(view, false);
            }
        }
    };
    Object.defineProperty(LViewStack.prototype, "views", {
        get: function () { return this._views; },
        set: function (value) {
            var l = this._views.length;
            for (var i = 0; i < l; i++) {
                this.addView(value[i]);
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    LViewStack = __decorate([
        ccclass
    ], LViewStack);
    return LViewStack;
}(LComponent_1.default));
exports.default = LViewStack;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxMVmlld1N0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QywyQ0FBcUM7QUFHL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBd0MsOEJBQVU7SUFBbEQ7UUFBQSxxRUEwREM7UUF6RFcsWUFBTSxHQUFrQixFQUFFLENBQUM7UUFDM0Isa0JBQVksR0FBVSxDQUFDLENBQUMsQ0FBQzs7SUF3RHJDLENBQUM7SUF0REcsMkJBQU0sR0FBTjtRQUNJLEtBQUksSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUVPLCtCQUFVLEdBQWxCLFVBQW1CLEtBQWE7UUFDNUIsSUFBSSxDQUFDLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEMsS0FBSSxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU0sbUNBQWMsR0FBckIsVUFBc0IsS0FBWTtRQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELHNCQUFXLG1DQUFXO2FBVXRCLGNBQWlDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQSxDQUFDLENBQUM7YUFWM0QsVUFBdUIsS0FBWTtZQUMvQixJQUFHLElBQUksQ0FBQyxZQUFZLElBQUksS0FBSztnQkFBRSxPQUFPO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBRTFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRXpDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxnQkFBTSxDQUFDLGdCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUMwRCxDQUFDO0lBR3JELDRCQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSwrQkFBVSxHQUFqQixVQUFrQixJQUFZO1FBQzFCLElBQUksQ0FBQyxHQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDM0IsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7YUFDckM7U0FDSjtJQUNMLENBQUM7SUFFRCxzQkFBVyw2QkFBSzthQU9oQixjQUFtQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDO2FBUHZELFVBQWlCLEtBQW9CO1lBQ2pDLElBQUksQ0FBQyxHQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUI7UUFDTCxDQUFDOzs7T0FBQTtJQUVzRCxDQUFDO0lBekR2QyxVQUFVO1FBRjlCLE9BQU87T0FFYSxVQUFVLENBMEQ5QjtJQUFELGlCQUFDO0NBMURELEFBMERDLENBMUR1QyxvQkFBVSxHQTBEakQ7a0JBMURvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExFdmVudCBmcm9tIFwiLi4vZXZlbnRzL0xFdmVudFwiO1xyXG5pbXBvcnQgTENvbXBvbmVudCBmcm9tIFwiLi9MQ29tcG9uZW50XCJcclxuaW1wb3J0IExUYWJCYXIgZnJvbSBcIi4vTFRhYkJhclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMVmlld1N0YWNrIGV4dGVuZHMgTENvbXBvbmVudHtcclxuICAgIHByaXZhdGUgX3ZpZXdzOkFycmF5PGNjLk5vZGU+ID0gW107XHJcbiAgICBwcml2YXRlIF9zZWxlY3RJbmRleDpudW1iZXIgPSAtMTsgICBcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBmb3IodmFyIGk6bnVtYmVyID0gMDsgaTx0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3MucHVzaCh0aGlzLm5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZpc2libGVBbGwodmFsdWU6Ym9vbGVhbik6dm9pZHtcclxuICAgICAgICB2YXIgbDpudW1iZXIgPSB0aGlzLl92aWV3cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yKHZhciBpOm51bWJlciA9IDA7IGk8bDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3NbaV0uYWN0aXZlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWaWV3QnlJbmRleChpbmRleDpudW1iZXIpOmNjLk5vZGV7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdzW2luZGV4XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc2VsZWN0SW5kZXgodmFsdWU6bnVtYmVyKXtcclxuICAgICAgICBpZih0aGlzLl9zZWxlY3RJbmRleCA9PSB2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdEluZGV4ID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZUFsbChmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5nZXRWaWV3QnlJbmRleCh2YWx1ZSkuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IExFdmVudChMRXZlbnQuQ0hBTkdFRCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBMRXZlbnQoTEV2ZW50LlNFTEVDVCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBzZWxlY3RJbmRleCgpOm51bWJlcnsgcmV0dXJuIHRoaXMuX3NlbGVjdEluZGV4IH07XHJcblxyXG5cclxuICAgIHB1YmxpYyBhZGRWaWV3KHZpZXc6Y2MuTm9kZSl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHZpZXcpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdzLnB1c2godmlldyk7XHJcbiAgICAgICAgdmlldy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlVmlldyh2aWV3OmNjLk5vZGUpe1xyXG4gICAgICAgIHZhciBsOm51bWJlciA9IHRoaXMuX3ZpZXdzLmxlbmd0aDtcclxuICAgICAgICBmb3IodmFyIGk6bnVtYmVyID0gMDsgaTxsOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLl92aWV3c1tpXSA9PSB2aWV3KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHZpZXcsZmFsc2UpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHZpZXdzKHZhbHVlOkFycmF5PGNjLk5vZGU+KXtcclxuICAgICAgICB2YXIgbDpudW1iZXIgPSB0aGlzLl92aWV3cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yKHZhciBpOm51bWJlciA9IDA7IGk8bDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5hZGRWaWV3KHZhbHVlW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2aWV3cygpOkFycmF5PGNjLk5vZGU+eyByZXR1cm4gdGhpcy5fdmlld3MgfTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/LListAbs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89cf7LUGo5MR6MShG+87sfW', 'LListAbs');
// Script/lightUI/components/LListAbs.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LComponent_1 = require("./LComponent");
var LListAbs = /** @class */ (function (_super) {
    __extends(LListAbs, _super);
    function LListAbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LListAbs.prototype, "dataProvider", {
        // private _dataProvider;
        set: function (data) {
            // this._dataProvider = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LListAbs.prototype, "selectedIndex", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LListAbs.prototype, "selectedItem", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    return LListAbs;
}(LComponent_1.default));
exports.default = LListAbs;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxMTGlzdEFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFdEM7SUFBc0MsNEJBQVU7SUFBaEQ7O0lBYUEsQ0FBQztJQVhHLHNCQUFXLGtDQUFZO1FBRHZCLHlCQUF5QjthQUN6QixVQUF3QixJQUFlO1lBQ25DLDZCQUE2QjtRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG1DQUFhO2FBQXhCO1lBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsa0NBQVk7YUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUNMLGVBQUM7QUFBRCxDQWJBLEFBYUMsQ0FicUMsb0JBQVUsR0FhL0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTENvbXBvbmVudCBmcm9tIFwiLi9MQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMTGlzdEFicyBleHRlbmRzIExDb21wb25lbnR7XHJcbiAgICAvLyBwcml2YXRlIF9kYXRhUHJvdmlkZXI7XHJcbiAgICBwdWJsaWMgc2V0IGRhdGFQcm92aWRlcihkYXRhOkFycmF5PGFueT4pe1xyXG4gICAgICAgIC8vIHRoaXMuX2RhdGFQcm92aWRlciA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJdGVtKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/MountDataAbs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b4e2CQ1YhBzqMvRjiYq6VK', 'MountDataAbs');
// Script/lightUI/components/MountDataAbs.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountParam = void 0;
var LEvent_1 = require("../events/LEvent");
var MountDataAbs = /** @class */ (function (_super) {
    __extends(MountDataAbs, _super);
    function MountDataAbs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._active = false;
        return _this;
    }
    MountDataAbs.prototype.showMe = function () {
        this._active = true;
        this.dispatchEvent(new LEvent_1.default(MountDataAbs.SHOWME));
    };
    MountDataAbs.prototype.hideMe = function () {
        this._active = false;
        this.dispatchEvent(new LEvent_1.default(MountDataAbs.HIDEME));
    };
    MountDataAbs.prototype.update = function (data) {
        this.dispatchEvent(new LEvent_1.default(MountDataAbs.UPDATE, data));
    };
    MountDataAbs.SHOWME = "SHOWME";
    MountDataAbs.HIDEME = "HIDEME";
    MountDataAbs.UPDATE = "UPDATE";
    MountDataAbs.TOKENERROR = "TOKENERROR";
    return MountDataAbs;
}(cc.EventTarget));
exports.default = MountDataAbs;
var MountParam = /** @class */ (function () {
    function MountParam(type, data) {
        this.type = type;
        this.data = data;
    }
    return MountParam;
}());
exports.MountParam = MountParam;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxNb3VudERhdGFBYnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUV0QztJQUEwQyxnQ0FBYztJQUF4RDtRQUFBLHFFQXdCQztRQWhCVyxhQUFPLEdBQVcsS0FBSyxDQUFDOztJQWdCcEMsQ0FBQztJQWJVLDZCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxnQkFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSw2QkFBTSxHQUFiLFVBQWMsSUFBZ0I7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGdCQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUF0QnNCLG1CQUFNLEdBQVUsUUFBUSxDQUFDO0lBQ3pCLG1CQUFNLEdBQVUsUUFBUSxDQUFDO0lBQ3pCLG1CQUFNLEdBQVUsUUFBUSxDQUFDO0lBRXpCLHVCQUFVLEdBQVUsWUFBWSxDQUFDO0lBbUI1RCxtQkFBQztDQXhCRCxBQXdCQyxDQXhCeUMsRUFBRSxDQUFDLFdBQVcsR0F3QnZEO2tCQXhCb0IsWUFBWTtBQTBCakM7SUFJSSxvQkFBWSxJQUFXLEVBQUMsSUFBUTtRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExFdmVudCBmcm9tIFwiLi4vZXZlbnRzL0xFdmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91bnREYXRhQWJzIGV4dGVuZHMgY2MuRXZlbnRUYXJnZXR7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNIT1dNRTpzdHJpbmcgPSBcIlNIT1dNRVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBISURFTUU6c3RyaW5nID0gXCJISURFTUVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVBEQVRFOnN0cmluZyA9IFwiVVBEQVRFXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUT0tFTkVSUk9SOnN0cmluZyA9IFwiVE9LRU5FUlJPUlwiO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF9hY3RpdmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgc2hvd01lKCl7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IExFdmVudChNb3VudERhdGFBYnMuU0hPV01FKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVNZSgpe1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTEV2ZW50KE1vdW50RGF0YUFicy5ISURFTUUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE/Ok1vdW50UGFyYW0pe1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTEV2ZW50KE1vdW50RGF0YUFicy5VUERBVEUsZGF0YSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91bnRQYXJhbXtcclxuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcclxuICAgIHB1YmxpYyBkYXRhOmFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlOnN0cmluZyxkYXRhOmFueSl7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/LComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '338124/XppGDaV6TElSRGs9', 'LComponent');
// Script/lightUI/components/LComponent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../events/LEvent");
var MountDataAbs_1 = require("./MountDataAbs");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LComponent = /** @class */ (function (_super) {
    __extends(LComponent, _super);
    function LComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    //onLoad 回调会在节点首次激活时触发
    LComponent.prototype.onLoad = function () {
        this.node.on(LEvent_1.default.CLOSE, this.onClose, this);
        this.node.on(LEvent_1.default.SHOW, this.onShow, this);
    };
    //标记组件是否完成初始化
    //start 回调函数会在组件第一次激活前
    LComponent.prototype.start = function () {
    };
    //组件调用close时候触发
    LComponent.prototype.onClose = function () {
    };
    //每次被显示的时候调用  第一次 早于 start触发
    LComponent.prototype.onShow = function () {
    };
    LComponent.prototype.onProgress = function (value) {
        //TODO: 显示加载进度条
    };
    LComponent.prototype.onUpdateView = function (e) {
    };
    LComponent.prototype.showMe = function (data) {
        data && this.setData(data);
    };
    LComponent.prototype.hideMe = function (data) {
    };
    LComponent.prototype.setData = function (data) {
        this.data = data;
    };
    LComponent.prototype.mountData = function (data) {
        this.data = data;
        this.data.on(MountDataAbs_1.default.SHOWME, this.showMe, this);
        this.data.on(MountDataAbs_1.default.HIDEME, this.hideMe, this);
        this.data.on(MountDataAbs_1.default.UPDATE, this.updataHandler, this);
    };
    LComponent.prototype.updataHandler = function (e) {
        this.onUpdateView(e.data);
    };
    LComponent.prototype.unMountData = function () {
        if (this.data == null)
            return;
        this.data.off(MountDataAbs_1.default.SHOWME, this.showMe);
        this.data.off(MountDataAbs_1.default.HIDEME, this.hideMe);
        this.data.off(MountDataAbs_1.default.UPDATE, this.updataHandler);
        this.data = null;
    };
    LComponent = __decorate([
        ccclass
    ], LComponent);
    return LComponent;
}(cc.Component));
exports.default = LComponent;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxMQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QywrQ0FBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBZ0VBLENBQUM7SUE5REcsd0JBQXdCO0lBRXhCLHNCQUFzQjtJQUN0QiwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBTSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxhQUFhO0lBRWIsc0JBQXNCO0lBQ3RCLDBCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQsZUFBZTtJQUNmLDRCQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLDJCQUFNLEdBQU47SUFFQSxDQUFDO0lBRU8sK0JBQVUsR0FBbEIsVUFBbUIsS0FBSztRQUNwQixlQUFlO0lBQ25CLENBQUM7SUFFTSxpQ0FBWSxHQUFuQixVQUFvQixDQUFhO0lBRWpDLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsSUFBUztRQUNuQixJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRU0sMkJBQU0sR0FBYixVQUFjLElBQVM7SUFFdkIsQ0FBQztJQUVNLDRCQUFPLEdBQWQsVUFBZSxJQUFRO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixJQUFpQjtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxzQkFBWSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHNCQUFZLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsc0JBQVksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ08sa0NBQWEsR0FBckIsVUFBc0IsQ0FBUTtRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRU0sZ0NBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQVksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFZLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBWSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQS9EZ0IsVUFBVTtRQUY5QixPQUFPO09BRWEsVUFBVSxDQWdFOUI7SUFBRCxpQkFBQztDQWhFRCxBQWdFQyxDQWhFdUMsRUFBRSxDQUFDLFNBQVMsR0FnRW5EO2tCQWhFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMRXZlbnQgZnJvbSBcIi4uL2V2ZW50cy9MRXZlbnRcIjtcclxuaW1wb3J0IE1vdW50RGF0YUFicywgeyBNb3VudFBhcmFtIH0gZnJvbSBcIi4vTW91bnREYXRhQWJzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vb25Mb2FkIOWbnuiwg+S8muWcqOiKgueCuemmluasoea/gOa0u+aXtuinpuWPkVxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oTEV2ZW50LkNMT1NFLHRoaXMub25DbG9zZSx0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oTEV2ZW50LlNIT1csdGhpcy5vblNob3csdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRhdGE6YW55O1xyXG4gICAgLy/moIforrDnu4Tku7bmmK/lkKblrozmiJDliJ3lp4vljJZcclxuXHJcbiAgICAvL3N0YXJ0IOWbnuiwg+WHveaVsOS8muWcqOe7hOS7tuesrOS4gOasoea/gOa0u+WJjVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy/nu4Tku7bosIPnlKhjbG9zZeaXtuWAmeinpuWPkVxyXG4gICAgb25DbG9zZSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+avj+asoeiiq+aYvuekuueahOaXtuWAmeiwg+eUqCAg56ys5LiA5qyhIOaXqeS6jiBzdGFydOinpuWPkVxyXG4gICAgb25TaG93KCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Qcm9ncmVzcyh2YWx1ZSkge1xyXG4gICAgICAgIC8vVE9ETzog5pi+56S65Yqg6L296L+b5bqm5p2hXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVXBkYXRlVmlldyhlPzpNb3VudFBhcmFtKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dNZShkYXRhPzphbnkpe1xyXG4gICAgICAgIGRhdGEgJiYgdGhpcy5zZXREYXRhKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVNZShkYXRhPzphbnkpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOmFueSl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIG1vdW50RGF0YShkYXRhOk1vdW50RGF0YUFicyl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmRhdGEub24oTW91bnREYXRhQWJzLlNIT1dNRSx0aGlzLnNob3dNZSx0aGlzKTtcclxuICAgICAgICB0aGlzLmRhdGEub24oTW91bnREYXRhQWJzLkhJREVNRSx0aGlzLmhpZGVNZSx0aGlzKTtcclxuICAgICAgICB0aGlzLmRhdGEub24oTW91bnREYXRhQWJzLlVQREFURSx0aGlzLnVwZGF0YUhhbmRsZXIsdGhpcyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVwZGF0YUhhbmRsZXIoZTpMRXZlbnQpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZVZpZXcoZS5kYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bk1vdW50RGF0YSgpe1xyXG4gICAgICAgIGlmKCB0aGlzLmRhdGEgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZGF0YS5vZmYoTW91bnREYXRhQWJzLlNIT1dNRSx0aGlzLnNob3dNZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLm9mZihNb3VudERhdGFBYnMuSElERU1FLHRoaXMuaGlkZU1lKTtcclxuICAgICAgICB0aGlzLmRhdGEub2ZmKE1vdW50RGF0YUFicy5VUERBVEUsdGhpcy51cGRhdGFIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/newlist/newlist.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f78d01THZlFm6MHYSYDoFLU', 'newlist');
// Script/lightUI/components/newlist/newlist.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartAxisType = exports.ListType = void 0;
var LEvent_1 = require("../../events/LEvent");
var listItemRender_1 = require("./listItemRender");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**列表排列方式 */
var ListType;
(function (ListType) {
    /**水平排列 */
    ListType[ListType["Horizontal"] = 1] = "Horizontal";
    /**垂直排列 */
    ListType[ListType["Vertical"] = 2] = "Vertical";
    /**网格排列 */
    ListType[ListType["Grid"] = 3] = "Grid";
})(ListType = exports.ListType || (exports.ListType = {}));
/**网格布局中的方向 */
var StartAxisType;
(function (StartAxisType) {
    /**水平排列 */
    StartAxisType[StartAxisType["Horizontal"] = 1] = "Horizontal";
    /**垂直排列 */
    StartAxisType[StartAxisType["Vertical"] = 2] = "Vertical";
})(StartAxisType = exports.StartAxisType || (exports.StartAxisType = {}));
/**
 * 列表
 * 根据cocos_example的listView改动而来
 * @author chenkai 2020.7.8
 * @example
 *  1.创建cocos的ScrollView组件，添加List，设置List属性即可
 *
 */
var newlist = /** @class */ (function (_super) {
    __extends(newlist, _super);
    function newlist() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //==================== 属性面板 =========================
        /**列表选项 */
        _this.itemRender = null;
        /**排列方式 */
        _this.type = ListType.Vertical;
        /**网格布局中的方向 */
        _this.startAxis = StartAxisType.Horizontal;
        /**列表项之间X间隔 */
        _this.spaceX = 0;
        /**列表项之间Y间隔 */
        _this.spaceY = 0;
        /**上间距 */
        _this.padding_top = 0;
        /**下间距 */
        _this.padding_buttom = 0;
        /**左间距 */
        _this.padding_left = 0;
        /**列表选项 */
        _this.none = null;
        _this._padding = 0;
        /**右间距 */
        _this.padding_right = 0;
        //====================== 滚动容器 ===============================
        /**列表滚动容器 */
        _this.scrollView = null;
        /**scrollView的内容容器 */
        _this.content = null;
        //======================== 列表项 ===========================
        /**列表项数据 */
        _this.itemDataList = [];
        /**应创建的实例数量 */
        _this.spawnCount = 0;
        /**存放列表项实例的数组 */
        _this.itemList = [];
        /**item的高度 */
        _this.itemHeight = 0;
        /**item的宽度 */
        _this.itemWidth = 0;
        /**存放不再使用中的列表项 */
        _this.itemPool = [];
        //======================= 计算参数 ==========================
        /**距离scrollView中心点的距离，超过这个距离的item会被重置，一般设置为 scrollVIew.height/2 + item.heigt/2 + space，因为这个距离item正好超出scrollView显示范围 */
        _this.halfScrollView = 0;
        /**上一次content的X值，用于和现在content的X值比较，得出是向左还是向右滚动 */
        _this.lastContentPosX = 0;
        /**上一次content的Y值，用于和现在content的Y值比较，得出是向上还是向下滚动 */
        _this.lastContentPosY = 0;
        /**网格行数 */
        _this.gridRow = 0;
        /**网格列数 */
        _this.gridCol = 0;
        /**刷新时间，单位s */
        _this.updateTimer = 0;
        /**刷新间隔，单位s */
        _this.updateInterval = 0.1;
        /**是否滚动容器 */
        _this.bScrolling = false;
        /**刷新的函数 */
        _this.updateFun = function () { };
        return _this;
    }
    newlist.prototype.onLoad = function () {
        this.itemHeight = this.itemRender.height;
        this.itemWidth = this.itemRender.width;
        this.scrollView = this.node.getComponent(cc.ScrollView);
        this.content = this.scrollView.content;
        this.content.anchorX = 0;
        this.content.anchorY = 1;
        this.content.removeAllChildren();
        this.scrollView.node.on("scrolling", this.onScrolling, this);
    };
    /**
     * 列表数据 (列表数据复制使用，如果列表数据改变，则需要重新设置一遍数据)
     * @param itemDataList item数据列表
     */
    newlist.prototype.setData = function (itemDataList) {
        if (itemDataList && itemDataList.length < 1) {
            this.onDestroy();
            return;
        }
        if (this.none)
            this.none.active = (itemDataList.length == 0);
        this.itemDataList = itemDataList.slice();
        this.updateContent();
    };
    /**计算列表的各项参数 */
    newlist.prototype.countListParam = function () {
        var dataLen = this.itemDataList.length;
        if (this.type == ListType.Vertical) {
            this.scrollView.horizontal = false;
            this.scrollView.vertical = true;
            this.content.width = this.content.parent.width;
            this.content.height = dataLen * this.itemHeight + (dataLen - 1) * this.spaceY + this.padding_top + this.padding_buttom;
            this.spawnCount = Math.round(this.scrollView.node.height / (this.itemHeight + this.spaceY)) + 2; //计算创建的item实例数量，比当前scrollView容器能放下的item数量再加上2个
            this.halfScrollView = this.scrollView.node.height / 2 + this.itemHeight / 2 + this.spaceY; //计算bufferZone，item的显示范围
            this.updateFun = this.updateV;
        }
        else if (this.type == ListType.Horizontal) {
            this.scrollView.horizontal = true;
            this.scrollView.vertical = false;
            this.content.width = dataLen * this.itemWidth + (dataLen - 1) * this.spaceX + this.padding_left + this.padding_right;
            this.content.height = this.content.parent.height;
            this.spawnCount = Math.round(this.scrollView.node.width / (this.itemWidth + this.spaceX)) + 2;
            this.halfScrollView = this.scrollView.node.width / 2 + this.itemWidth / 2 + this.spaceX;
            this.updateFun = this.udpateH;
        }
        else if (this.type == ListType.Grid) {
            if (this.startAxis == StartAxisType.Vertical) {
                this.scrollView.horizontal = false;
                this.scrollView.vertical = true;
                this.content.width = this.content.parent.width;
                //如果left和right间隔过大，导致放不下一个item，则left和right都设置为0，相当于不生效
                if (this.padding_left + this.padding_right + this.itemWidth + this.spaceX > this.content.width) {
                    this.padding_left = 0;
                    this.padding_right = 0;
                    console.error("padding_left或padding_right过大");
                }
                this.gridCol = Math.floor((this.content.width - this.padding_left - this.padding_right) / (this.itemWidth + this.spaceX));
                this.gridRow = Math.ceil(dataLen / this.gridCol);
                this.content.height = this.gridRow * this.itemHeight + (this.gridRow - 1) * this.spaceY + this.padding_top + this.padding_buttom;
                this.spawnCount = Math.round(this.scrollView.node.height / (this.itemHeight + this.spaceY)) * this.gridCol + this.gridCol * 2;
                this.halfScrollView = this.scrollView.node.height / 2 + this.itemHeight / 2 + this.spaceY;
                this.updateFun = this.updateGrid_V;
            }
            else if (this.startAxis == StartAxisType.Horizontal) {
                this.scrollView.horizontal = true;
                this.scrollView.vertical = false;
                //计算高间隔
                this.content.height = this.content.parent.height;
                //如果left和right间隔过大，导致放不下一个item，则left和right都设置为0，相当于不生效
                if (this.padding_top + this.padding_buttom + this.itemHeight + this.spaceY > this.content.height) {
                    this.padding_top = 0;
                    this.padding_buttom = 0;
                    console.error("padding_top或padding_buttom过大");
                }
                this.gridRow = Math.floor((this.content.height - this.padding_top - this.padding_buttom) / (this.itemHeight + this.spaceY));
                this.gridCol = Math.ceil(dataLen / this.gridRow);
                this.content.width = this.gridCol * this.itemWidth + (this.gridCol - 1) * this.spaceX + this.padding_left + this.padding_right;
                this.spawnCount = Math.round(this.scrollView.node.width / (this.itemWidth + this.spaceX)) * this.gridRow + this.gridRow * 2;
                this.halfScrollView = this.scrollView.node.width / 2 + this.itemWidth / 2 + this.spaceX;
                this.updateFun = this.updateGrid_H;
            }
        }
    };
    /**
     * 创建列表
     * @param startIndex 起始显示的数据索引 0表示第一项
     * @param offset     scrollView偏移量
     */
    newlist.prototype.createList = function (startIndex, offset) {
        //当需要显示的数据长度 > 虚拟列表长度， 删除最末尾几个数据时，列表需要重置位置到scrollView最底端
        if (this.itemDataList.length > this.spawnCount && (startIndex + this.spawnCount - 1) >= this.itemDataList.length) {
            startIndex = this.itemDataList.length - this.spawnCount;
            offset = this.scrollView.getMaxScrollOffset();
            //当需要显示的数据长度 <= 虚拟列表长度， 隐藏多余的虚拟列表项 
        }
        else if (this.itemDataList.length <= this.spawnCount) {
            startIndex = 0;
        }
        for (var i = 0; i < this.spawnCount; i++) {
            var item = void 0;
            //需要显示的数据索引在数据范围内，则item实例显示出来
            if (i + startIndex < this.itemDataList.length) {
                if (this.itemList[i] == null) {
                    item = this.getItem();
                    this.itemList.push(item);
                    item.parent = this.content;
                }
                else {
                    item = this.itemList[i];
                }
                //需要显示的数据索引超过了数据范围，则item实例隐藏起来
            }
            else {
                //item实例数量 > 需要显示的数据量
                if (this.itemList.length > (this.itemDataList.length - startIndex)) {
                    item = this.itemList.pop();
                    item.removeFromParent();
                    this.itemPool.push(item);
                }
                continue;
            }
            var itemRender = item.getComponent(listItemRender_1.default);
            itemRender.itemIndex = i + startIndex;
            itemRender.data = this.itemDataList[i + startIndex];
            itemRender.dataChanged();
            if (this.type == ListType.Vertical) {
                //因为content的锚点X是0，所以item的x值是content.with/2表示居中，锚点Y是1，所以item的y值从content顶部向下是0到负无穷。所以item.y= -item.height/2时，是在content的顶部。
                item.setPosition(this.content.width / 2, -item.height * (0.5 + i + startIndex) - this.spaceY * (i + startIndex) - this.padding_top);
            }
            else if (this.type == ListType.Horizontal) {
                item.setPosition(item.width * (0.5 + i + startIndex) + this.spaceX * (i + startIndex) + this.padding_left, -this.content.height / 2);
            }
            else if (this.type == ListType.Grid) {
                if (this.startAxis == StartAxisType.Vertical) {
                    var row = Math.floor((i + startIndex) / this.gridCol);
                    var col = (i + startIndex) % this.gridCol;
                    item.setPosition(item.width * (0.5 + col) + this.spaceX * col + this.padding_left, -item.height * (0.5 + row) - this.spaceY * row - this.padding_top);
                    item.opacity = 255;
                }
                else if (this.startAxis == StartAxisType.Horizontal) {
                    var row = (i + startIndex) % this.gridRow;
                    var col = Math.floor((i + startIndex) / this.gridRow);
                    item.setPosition(item.width * (0.5 + col) + this.spaceX * col + this.padding_left, -item.height * (0.5 + row) - this.spaceY * row - this.padding_top);
                    item.opacity = 255;
                }
            }
        }
        this.scrollView.scrollToOffset(offset);
    };
    /**获取一个列表项 */
    newlist.prototype.getItem = function () {
        if (this.itemPool.length == 0) {
            var item = cc.instantiate(this.itemRender);
            item.on(cc.Node.EventType.TOUCH_END, this.itemClickHandler, this);
            return item;
        }
        else {
            return this.itemPool.pop();
        }
    };
    newlist.prototype.itemClickHandler = function (event) {
        var item = event.currentTarget.getComponent(listItemRender_1.default);
        console.log("itemClickHandler ", item.itemIndex);
        this._selectedItem = item.data;
        this._selectedIndex = item.itemIndex;
        this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.ITEM_CLICK, item.itemIndex));
    };
    /**获取选中的视图*/
    newlist.prototype.getSelectedItemrander = function () {
        if (this._selectedIndex < 0)
            return null;
        var itemR;
        for (var _i = 0, _a = this.content.children; _i < _a.length; _i++) {
            var item = _a[_i];
            itemR = item.getComponent(listItemRender_1.default);
            if (itemR && itemR.itemIndex == this.selectedIndex)
                return item;
        }
        return null;
    };
    Object.defineProperty(newlist.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(newlist.prototype, "selectedItem", {
        get: function () {
            return this._selectedItem;
        },
        enumerable: false,
        configurable: true
    });
    newlist.prototype.update = function (dt) {
        if (this.bScrolling == false) {
            return;
        }
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return;
        }
        this.updateTimer = 0;
        this.bScrolling = false;
        this.updateFun();
    };
    newlist.prototype.onScrolling = function () {
        this.bScrolling = true;
    };
    // /**垂直排列 */
    // private updateV() {
    //     let items = this.itemList;
    //     let item;
    //     let bufferZone = this.halfScrollView;
    //     let isUp = this.scrollView.content.y > this.lastContentPosY;
    //     let offset = (this.itemHeight + this.spaceY) * items.length;
    //     for (let i = 0; i < items.length; i++) {
    //         item = items[i];
    //         let viewPos = this.getPositionInView(item);
    //         if (isUp) {
    //             //item上滑时，超出了scrollView上边界，将item移动到下方复用，item移动到下方的位置必须不超过content的下边界
    //             if (viewPos.y > bufferZone && item.y - offset - this.padding_buttom > -this.content.height) {
    //                 let itemRender: listItemRender = item.getComponent(listItemRender);
    //                 let itemIndex = itemRender.itemIndex + items.length;
    //                 itemRender.itemIndex = itemIndex;
    //                 itemRender.data = this.itemDataList[itemIndex];
    //                 itemRender.dataChanged();
    //                 item.y = item.y - offset;
    //             }
    //         } else {
    //             //item下滑时，超出了scrollView下边界，将item移动到上方复用，item移动到上方的位置必须不超过content的上边界
    //             if (viewPos.y < -bufferZone && item.y + offset + this.padding_top < 0) {
    //                 let itemRender: listItemRender = item.getComponent(listItemRender);
    //                 let itemIndex = itemRender.itemIndex - items.length;
    //                 itemRender.itemIndex = itemIndex;
    //                 itemRender.data = this.itemDataList[itemIndex];
    //                 itemRender.dataChanged();
    //                 item.y = item.y + offset;
    //             }
    //         }
    //     }
    //     this.lastContentPosY = this.scrollView.content.y;
    // }
    newlist.prototype.updateV = function () {
        var items = this.itemList;
        var item;
        var bufferZone = this.halfScrollView;
        var isUp = this.scrollView.content.y > this.lastContentPosY;
        var offset = (this.itemHeight + this.spaceY) * items.length;
        for (var i = 0; i < items.length; i++) {
            item = items[i];
            var viewPos = this.getPositionInView(item);
            if (isUp) {
                //item上滑时，超出了scrollView上边界，将item移动到下方复用，item移动到下方的位置必须不超过content的下边界
                if (viewPos.y > bufferZone && item.y - offset - this.padding_buttom > -this.content.height) {
                    var itemRender = item.getComponent(listItemRender_1.default);
                    var itemIndex = itemRender.itemIndex + items.length;
                    itemRender.itemIndex = itemIndex;
                    itemRender.data = this.itemDataList[itemIndex];
                    itemRender.data.index = itemIndex;
                    itemRender.dataChanged();
                    item.y = item.y - offset;
                }
            }
            else {
                //item下滑时，超出了scrollView下边界，将item移动到上方复用，item移动到上方的位置必须不超过content的上边界
                if (viewPos.y + item.height < -bufferZone && item.y + offset + this.padding_top < 0) {
                    console.log("超出了scrollView下边界");
                    var itemRender = item.getComponent(listItemRender_1.default);
                    var itemIndex = itemRender.itemIndex - items.length;
                    itemRender.itemIndex = itemIndex;
                    itemRender.data = this.itemDataList[itemIndex];
                    itemRender.data.index = itemIndex;
                    itemRender.dataChanged();
                    item.y = item.y + offset;
                }
            }
        }
        this.lastContentPosY = this.scrollView.content.y;
    };
    /**水平排列 */
    newlist.prototype.udpateH = function () {
        var items = this.itemList;
        var item;
        var bufferZone = this.halfScrollView;
        var isRight = this.scrollView.content.x > this.lastContentPosX;
        var offset = (this.itemWidth + this.spaceX) * items.length;
        for (var i = 0; i < items.length; i++) {
            item = items[i];
            var viewPos = this.getPositionInView(item);
            if (isRight) {
                //item右滑时，超出了scrollView右边界，将item移动到左方复用，item移动到左方的位置必须不超过content的左边界
                if (viewPos.x > bufferZone && item.x - offset - this.padding_left > 0) {
                    var itemRender = item.getComponent(listItemRender_1.default);
                    var itemIndex = itemRender.itemIndex - items.length;
                    itemRender.itemIndex = itemIndex;
                    itemRender.data = this.itemDataList[itemIndex];
                    itemRender.dataChanged();
                    item.x = item.x - offset;
                }
            }
            else {
                //item左滑时，超出了scrollView左边界，将item移动到右方复用，item移动到右方的位置必须不超过content的右边界
                if (viewPos.x < -bufferZone && item.x + offset + this.padding_right < this.content.width) {
                    var itemRender = item.getComponent(listItemRender_1.default);
                    var itemIndex = itemRender.itemIndex + items.length;
                    itemRender.itemIndex = itemIndex;
                    itemRender.data = this.itemDataList[itemIndex];
                    itemRender.dataChanged();
                    item.x = item.x + offset;
                }
            }
        }
        this.lastContentPosX = this.scrollView.content.x;
    };
    /**网格垂直排列 */
    newlist.prototype.updateGrid_V = function () {
        var items = this.itemList;
        var item;
        var bufferZone = this.halfScrollView;
        var isUp = this.scrollView.content.y > this.lastContentPosY;
        var offset = (this.itemHeight + this.spaceY) * (this.spawnCount / this.gridCol);
        for (var i = 0; i < items.length; i++) {
            item = items[i];
            var viewPos = this.getPositionInView(item);
            if (isUp) {
                //item上滑时，超出了scrollView上边界，将item移动到下方复用，item移动到下方的位置必须不超过content的下边界
                if (viewPos.y > bufferZone && item.y - offset - this.padding_buttom > -this.content.height) {
                    var itemRender = item.getComponent(listItemRender_1.default);
                    var itemIndex = itemRender.itemIndex + (this.spawnCount / this.gridCol) * this.gridCol;
                    if (this.itemDataList[itemIndex] != null) {
                        item.y = item.y - offset;
                        itemRender.itemIndex = itemIndex;
                        itemRender.data = this.itemDataList[itemIndex];
                        itemRender.dataChanged();
                        item.opacity = 255;
                    }
                    else {
                        item.y = item.y - offset;
                        itemRender.itemIndex = itemIndex;
                        item.opacity = 0;
                    }
                }
            }
            else { //item下滑时，超出了scrollView下边界，将item移动到上方复用，item移动到上方的位置必须不超过content的上边界
                if (viewPos.y < -bufferZone && item.y + offset + this.padding_top < 0) {
                    var itemRender = item.getComponent(listItemRender_1.default);
                    var itemIndex = itemRender.itemIndex - (this.spawnCount / this.gridCol) * this.gridCol;
                    if (this.itemDataList[itemIndex] != null) {
                        item.y = item.y + offset;
                        itemRender.itemIndex = itemIndex;
                        itemRender.data = this.itemDataList[itemIndex];
                        itemRender.dataChanged();
                        item.opacity = 255;
                    }
                    else {
                        item.y = item.y + offset;
                        itemRender.itemIndex = itemIndex;
                        item.opacity = 0;
                    }
                }
            }
        }
        this.lastContentPosY = this.scrollView.content.y;
    };
    /**网格水平排列 */
    newlist.prototype.updateGrid_H = function () {
        var items = this.itemList;
        var item;
        var bufferZone = this.halfScrollView;
        var isRight = this.scrollView.content.x > this.lastContentPosX;
        var offset = (this.itemWidth + this.spaceX) * (this.spawnCount / this.gridRow);
        for (var i = 0; i < items.length; i++) {
            item = items[i];
            var viewPos = this.getPositionInView(item);
            if (isRight) {
                //item右滑时，超出了scrollView右边界，将item移动到左方复用，item移动到左方的位置必须不超过content的左边界
                if (viewPos.x > bufferZone && item.x - offset - this.padding_left > 0) {
                    var itemRender = item.getComponent(listItemRender_1.default);
                    var itemIndex = itemRender.itemIndex - (this.spawnCount / this.gridRow) * this.gridRow;
                    if (this.itemDataList[itemIndex] != null) {
                        item.x = item.x - offset;
                        itemRender.itemIndex = itemIndex;
                        itemRender.data = this.itemDataList[itemIndex];
                        itemRender.dataChanged();
                        item.opacity = 255;
                    }
                    else {
                        item.x = item.x - offset;
                        itemRender.itemIndex = itemIndex;
                        item.opacity = 0;
                    }
                }
            }
            else {
                //item左滑时，超出了scrollView左边界，将item移动到右方复用，item移动到右方的位置必须不超过content的右边界
                if (viewPos.x < -bufferZone && item.x + offset + this.padding_right < this.content.width) {
                    var itemRender = item.getComponent(listItemRender_1.default);
                    var itemIndex = itemRender.itemIndex + (this.spawnCount / this.gridRow) * this.gridRow;
                    if (this.itemDataList[itemIndex] != null) {
                        item.x = item.x + offset;
                        itemRender.itemIndex = itemIndex;
                        itemRender.data = this.itemDataList[itemIndex];
                        itemRender.dataChanged();
                        item.opacity = 255;
                    }
                    else {
                        item.x = item.x + offset;
                        itemRender.itemIndex = itemIndex;
                        item.opacity = 0;
                    }
                }
            }
        }
        this.lastContentPosX = this.scrollView.content.x;
    };
    /**获取item在scrollView的局部坐标 */
    newlist.prototype.getPositionInView = function (item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };
    /**获取列表数据 */
    newlist.prototype.getListData = function () {
        return this.itemDataList;
    };
    /**
     * 增加一项数据到列表的末尾
     * @param data 数据
     */
    newlist.prototype.addItem = function (data) {
        this.itemDataList.push(data);
        this.updateContent();
    };
    /**
     * 增加一项数据到列表指定位置
     * @param index   位置，0表示第1项
     * @param data  数据
     */
    newlist.prototype.addItemAt = function (index, data) {
        if (this.itemDataList[index] != null || this.itemDataList.length == index) {
            this.itemDataList.splice(index, 1, data);
            this.updateContent();
        }
    };
    /**
     * 删除一项数据
     * @param index 删除项的位置 ,0表示第1项
     */
    newlist.prototype.deleteItem = function (index) {
        if (this.itemDataList[index] != null) {
            this.itemDataList.splice(index, 1);
            this.updateContent();
        }
    };
    /**
     * 改变一项数据
     * @param index   位置,0表示第1项
     * @param data  替换的数据
     */
    newlist.prototype.changeItem = function (index, data) {
        if (this.itemDataList[index] != null) {
            this.itemDataList[index] = data;
            this.updateContent();
        }
    };
    /**获取第一个Item的位置 */
    newlist.prototype.updateContent = function () {
        //显示列表实例为0个
        if (this.itemList.length == 0) {
            this.countListParam();
            this.createList(0, new cc.Vec2(0, 0));
            //显示列表的实例不为0个，则需要重新排列item实例数组
        }
        else {
            if (this.type == ListType.Vertical) {
                this.itemList.sort(function (a, b) {
                    return b.y - a.y;
                });
            }
            else if (this.type == ListType.Horizontal) {
                this.itemList.sort(function (a, b) {
                    return a.x - b.x;
                });
            }
            else if (this.type == ListType.Grid) {
                if (this.startAxis == StartAxisType.Vertical) {
                    this.itemList.sort(function (a, b) {
                        return a.x - b.x;
                    });
                    this.itemList.sort(function (a, b) {
                        return b.y - a.y;
                    });
                }
                else if (this.startAxis == StartAxisType.Horizontal) {
                    this.itemList.sort(function (a, b) {
                        return b.y - a.y;
                    });
                    this.itemList.sort(function (a, b) {
                        return a.x - b.x;
                    });
                }
            }
            this.countListParam();
            //获取第一个item实例需要显示的数据索引
            var startIndex = this.itemList[0].getComponent(listItemRender_1.default).itemIndex;
            if (this.type == ListType.Grid && this.startAxis == StartAxisType.Vertical) {
                startIndex += (startIndex + this.spawnCount) % this.gridCol;
            }
            else if (this.type == ListType.Grid && this.startAxis == StartAxisType.Horizontal) {
                startIndex += (startIndex + this.spawnCount) % this.gridRow;
            }
            //getScrollOffset()和scrollToOffset()的x值是相反的
            var offset = this.scrollView.getScrollOffset();
            offset.x = -offset.x;
            this.createList(startIndex, offset);
        }
    };
    /**销毁 */
    newlist.prototype.onDestroy = function () {
        //清理列表项
        var len = this.itemList.length;
        for (var i = 0; i < len; i++) {
            if (cc.isValid(this.itemList[i], true)) {
                this.itemList[i].destroy();
            }
        }
        this.itemList.length = 0;
        //清理对象池
        len = this.itemPool.length;
        for (var i = 0; i < len; i++) {
            if (cc.isValid(this.itemPool[i], true)) {
                this.itemPool[i].destroy();
            }
        }
        this.itemPool.length = 0;
        //清理列表数据
        this.itemDataList.length = 0;
    };
    __decorate([
        property({ type: cc.Node, tooltip: "列表项" })
    ], newlist.prototype, "itemRender", void 0);
    __decorate([
        property({ type: cc.Enum(ListType), tooltip: "排列方式" })
    ], newlist.prototype, "type", void 0);
    __decorate([
        property({ type: cc.Enum(StartAxisType), tooltip: "网格布局中的方向", visible: function () { return this.type == ListType.Grid; } })
    ], newlist.prototype, "startAxis", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "列表项X间隔", visible: function () { return (this.type == ListType.Horizontal || this.type == ListType.Grid); } })
    ], newlist.prototype, "spaceX", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "列表项Y间隔", visible: function () { return this.type == ListType.Vertical || this.type == ListType.Grid; } })
    ], newlist.prototype, "spaceY", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "上间距", visible: function () { return (this.type == ListType.Vertical || this.type == ListType.Grid); } })
    ], newlist.prototype, "padding_top", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "下间距", visible: function () { return (this.type == ListType.Vertical || this.type == ListType.Grid); } })
    ], newlist.prototype, "padding_buttom", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "左间距", visible: function () { return (this.type == ListType.Horizontal || this.type == ListType.Grid); } })
    ], newlist.prototype, "padding_left", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "无数据时候的表现" })
    ], newlist.prototype, "none", void 0);
    __decorate([
        property(cc.Integer)
    ], newlist.prototype, "_padding", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "右间距", visible: function () { return (this.type == ListType.Horizontal || this.type == ListType.Grid); } })
    ], newlist.prototype, "padding_right", void 0);
    newlist = __decorate([
        ccclass
    ], newlist);
    return newlist;
}(cc.Component));
exports.default = newlist;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxuZXdsaXN0XFxuZXdsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw4Q0FBeUM7QUFDekMsbURBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLFlBQVk7QUFDWixJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDaEIsVUFBVTtJQUNWLG1EQUFjLENBQUE7SUFDZCxVQUFVO0lBQ1YsK0NBQVksQ0FBQTtJQUNaLFVBQVU7SUFDVix1Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQVBXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBT25CO0FBRUQsY0FBYztBQUNkLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQixVQUFVO0lBQ1YsNkRBQWMsQ0FBQTtJQUNkLFVBQVU7SUFDVix5REFBWSxDQUFBO0FBQ2hCLENBQUMsRUFMVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUt4QjtBQUVEOzs7Ozs7O0dBT0c7QUFFSDtJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWduQkM7UUE5bUJHLHFEQUFxRDtRQUNyRCxVQUFVO1FBRUgsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFbEMsVUFBVTtRQUVILFVBQUksR0FBYSxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRTFDLGNBQWM7UUFFUCxlQUFTLEdBQWtCLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFFM0QsY0FBYztRQUVQLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFMUIsY0FBYztRQUVQLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFMUIs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QUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpREFDdEc7SUFJaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7eUNBQ3JCO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NkNBQ087SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sZ0JBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO2tEQUNyRztJQTVDaEIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWduQjNCO0lBQUQsY0FBQztDQWhuQkQsQUFnbkJDLENBaG5Cb0MsRUFBRSxDQUFDLFNBQVMsR0FnbkJoRDtrQkFobkJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IExFdmVudCBmcm9tIFwiLi4vLi4vZXZlbnRzL0xFdmVudFwiO1xyXG5pbXBvcnQgbGlzdEl0ZW1SZW5kZXIgZnJvbSBcIi4vbGlzdEl0ZW1SZW5kZXJcIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKuWIl+ihqOaOkuWIl+aWueW8jyAqL1xyXG5leHBvcnQgZW51bSBMaXN0VHlwZSB7XHJcbiAgICAvKirmsLTlubPmjpLliJcgKi9cclxuICAgIEhvcml6b250YWwgPSAxLFxyXG4gICAgLyoq5Z6C55u05o6S5YiXICovXHJcbiAgICBWZXJ0aWNhbCA9IDIsXHJcbiAgICAvKirnvZHmoLzmjpLliJcgKi9cclxuICAgIEdyaWQgPSAzXHJcbn1cclxuXHJcbi8qKue9keagvOW4g+WxgOS4reeahOaWueWQkSAqL1xyXG5leHBvcnQgZW51bSBTdGFydEF4aXNUeXBlIHtcclxuICAgIC8qKuawtOW5s+aOkuWIlyAqL1xyXG4gICAgSG9yaXpvbnRhbCA9IDEsXHJcbiAgICAvKirlnoLnm7TmjpLliJcgKi9cclxuICAgIFZlcnRpY2FsID0gMixcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIl+ihqFxyXG4gKiDmoLnmja5jb2Nvc19leGFtcGxl55qEbGlzdFZpZXfmlLnliqjogIzmnaVcclxuICogQGF1dGhvciBjaGVua2FpIDIwMjAuNy44XHJcbiAqIEBleGFtcGxlXHJcbiAqICAxLuWIm+W7umNvY29z55qEU2Nyb2xsVmlld+e7hOS7tu+8jOa3u+WKoExpc3TvvIzorr7nva5MaXN05bGe5oCn5Y2z5Y+vXHJcbiAqICBcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5ld2xpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT0g5bGe5oCn6Z2i5p2/ID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8qKuWIl+ihqOmAiemhuSAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLliJfooajpoblcIiB9KVxyXG4gICAgcHVibGljIGl0ZW1SZW5kZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qKuaOkuWIl+aWueW8jyAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShMaXN0VHlwZSksIHRvb2x0aXA6IFwi5o6S5YiX5pa55byPXCIgfSlcclxuICAgIHB1YmxpYyB0eXBlOiBMaXN0VHlwZSA9IExpc3RUeXBlLlZlcnRpY2FsO1xyXG5cclxuICAgIC8qKue9keagvOW4g+WxgOS4reeahOaWueWQkSAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShTdGFydEF4aXNUeXBlKSwgdG9vbHRpcDogXCLnvZHmoLzluIPlsYDkuK3nmoTmlrnlkJFcIiwgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudHlwZSA9PSBMaXN0VHlwZS5HcmlkIH0gfSlcclxuICAgIHB1YmxpYyBzdGFydEF4aXM6IFN0YXJ0QXhpc1R5cGUgPSBTdGFydEF4aXNUeXBlLkhvcml6b250YWw7XHJcblxyXG4gICAgLyoq5YiX6KGo6aG55LmL6Ze0WOmXtOmalCAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLliJfooajpoblY6Ze06ZqUXCIsIHZpc2libGUoKSB7IHJldHVybiAodGhpcy50eXBlID09IExpc3RUeXBlLkhvcml6b250YWwgfHwgdGhpcy50eXBlID09IExpc3RUeXBlLkdyaWQpIH0gfSlcclxuICAgIHB1YmxpYyBzcGFjZVg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5YiX6KGo6aG55LmL6Ze0WemXtOmalCAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLliJfooajpoblZ6Ze06ZqUXCIsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnR5cGUgPT0gTGlzdFR5cGUuVmVydGljYWwgfHwgdGhpcy50eXBlID09IExpc3RUeXBlLkdyaWQgfSB9KVxyXG4gICAgcHVibGljIHNwYWNlWTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKirkuIrpl7Tot50gKi9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwi5LiK6Ze06LedXCIsIHZpc2libGUoKSB7IHJldHVybiAodGhpcy50eXBlID09IExpc3RUeXBlLlZlcnRpY2FsIHx8IHRoaXMudHlwZSA9PSBMaXN0VHlwZS5HcmlkKSB9IH0pXHJcbiAgICBwdWJsaWMgcGFkZGluZ190b3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5LiL6Ze06LedICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuS4i+mXtOi3nVwiLCB2aXNpYmxlKCkgeyByZXR1cm4gKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5WZXJ0aWNhbCB8fCB0aGlzLnR5cGUgPT0gTGlzdFR5cGUuR3JpZCkgfSB9KVxyXG4gICAgcHVibGljIHBhZGRpbmdfYnV0dG9tOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKuW3pumXtOi3nSAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLlt6bpl7Tot51cIiwgdmlzaWJsZSgpIHsgcmV0dXJuICh0aGlzLnR5cGUgPT0gTGlzdFR5cGUuSG9yaXpvbnRhbCB8fCB0aGlzLnR5cGUgPT0gTGlzdFR5cGUuR3JpZCkgfSB9KVxyXG4gICAgcHVibGljIHBhZGRpbmdfbGVmdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKirliJfooajpgInpobkgKi9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi5peg5pWw5o2u5pe25YCZ55qE6KGo546wXCIgfSlcclxuICAgIHB1YmxpYyBub25lOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHB1YmxpYyBfcGFkZGluZzogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKirlj7Ppl7Tot50gKi9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwi5Y+z6Ze06LedXCIsIHZpc2libGUoKSB7IHJldHVybiAodGhpcy50eXBlID09IExpc3RUeXBlLkhvcml6b250YWwgfHwgdGhpcy50eXBlID09IExpc3RUeXBlLkdyaWQpIH0gfSlcclxuICAgIHB1YmxpYyBwYWRkaW5nX3JpZ2h0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PSDmu5rliqjlrrnlmaggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLyoq5YiX6KGo5rua5Yqo5a655ZmoICovXHJcbiAgICBwdWJsaWMgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcbiAgICAvKipzY3JvbGxWaWV355qE5YaF5a655a655ZmoICovXHJcbiAgICBwcml2YXRlIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09IOWIl+ihqOmhuSA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8qKuWIl+ihqOmhueaVsOaNriAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtRGF0YUxpc3Q6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIC8qKuW6lOWIm+W7uueahOWunuS+i+aVsOmHjyAqL1xyXG4gICAgcHJpdmF0ZSBzcGF3bkNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5a2Y5pS+5YiX6KGo6aG55a6e5L6L55qE5pWw57uEICovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBBcnJheTxjYy5Ob2RlPiA9IFtdO1xyXG4gICAgLyoqaXRlbeeahOmrmOW6piAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqaXRlbeeahOWuveW6piAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICAvKirlrZjmlL7kuI3lho3kvb/nlKjkuK3nmoTliJfooajpobkgKi9cclxuICAgIHByaXZhdGUgaXRlbVBvb2w6IEFycmF5PGNjLk5vZGU+ID0gW107XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PSDorqHnrpflj4LmlbAgPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8qKui3neemu3Njcm9sbFZpZXfkuK3lv4PngrnnmoTot53nprvvvIzotoXov4fov5nkuKrot53nprvnmoRpdGVt5Lya6KKr6YeN572u77yM5LiA6Iis6K6+572u5Li6IHNjcm9sbFZJZXcuaGVpZ2h0LzIgKyBpdGVtLmhlaWd0LzIgKyBzcGFjZe+8jOWboOS4uui/meS4qui3neemu2l0ZW3mraPlpb3otoXlh7pzY3JvbGxWaWV35pi+56S66IyD5Zu0ICovXHJcbiAgICBwcml2YXRlIGhhbGZTY3JvbGxWaWV3OiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5LiK5LiA5qyhY29udGVudOeahFjlgLzvvIznlKjkuo7lkoznjrDlnKhjb250ZW5055qEWOWAvOavlOi+g++8jOW+l+WHuuaYr+WQkeW3pui/mOaYr+WQkeWPs+a7muWKqCAqL1xyXG4gICAgcHJpdmF0ZSBsYXN0Q29udGVudFBvc1g6IG51bWJlciA9IDA7XHJcbiAgICAvKirkuIrkuIDmrKFjb250ZW5055qEWeWAvO+8jOeUqOS6juWSjOeOsOWcqGNvbnRlbnTnmoRZ5YC85q+U6L6D77yM5b6X5Ye65piv5ZCR5LiK6L+Y5piv5ZCR5LiL5rua5YqoICovXHJcbiAgICBwcml2YXRlIGxhc3RDb250ZW50UG9zWTogbnVtYmVyID0gMDtcclxuICAgIC8qKue9keagvOihjOaVsCAqL1xyXG4gICAgcHJpdmF0ZSBncmlkUm93OiBudW1iZXIgPSAwO1xyXG4gICAgLyoq572R5qC85YiX5pWwICovXHJcbiAgICBwcml2YXRlIGdyaWRDb2w6IG51bWJlciA9IDA7XHJcbiAgICAvKirliLfmlrDml7bpl7TvvIzljZXkvY1zICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5Yi35paw6Ze06ZqU77yM5Y2V5L2NcyAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVJbnRlcnZhbDogbnVtYmVyID0gMC4xO1xyXG4gICAgLyoq5piv5ZCm5rua5Yqo5a655ZmoICovXHJcbiAgICBwcml2YXRlIGJTY3JvbGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKuWIt+aWsOeahOWHveaVsCAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVGdW46IEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkgeyB9O1xyXG5cclxuICAgIHByaXZhdGUgX3NlbGVjdGVkSXRlbTogYW55O1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogYW55O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUhlaWdodCA9IHRoaXMuaXRlbVJlbmRlci5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLml0ZW1SZW5kZXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudDtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYW5jaG9yWCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFuY2hvclkgPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ub2RlLm9uKFwic2Nyb2xsaW5nXCIsIHRoaXMub25TY3JvbGxpbmcsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YiX6KGo5pWw5o2uICjliJfooajmlbDmja7lpI3liLbkvb/nlKjvvIzlpoLmnpzliJfooajmlbDmja7mlLnlj5jvvIzliJnpnIDopoHph43mlrDorr7nva7kuIDpgY3mlbDmja4pXHJcbiAgICAgKiBAcGFyYW0gaXRlbURhdGFMaXN0IGl0ZW3mlbDmja7liJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldERhdGEoaXRlbURhdGFMaXN0OiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgaWYgKGl0ZW1EYXRhTGlzdCAmJiBpdGVtRGF0YUxpc3QubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5vbmUpIHRoaXMubm9uZS5hY3RpdmUgPSAoaXRlbURhdGFMaXN0Lmxlbmd0aCA9PSAwKTtcclxuICAgICAgICB0aGlzLml0ZW1EYXRhTGlzdCA9IGl0ZW1EYXRhTGlzdC5zbGljZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuoeeul+WIl+ihqOeahOWQhOmhueWPguaVsCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudExpc3RQYXJhbSgpIHtcclxuICAgICAgICBsZXQgZGF0YUxlbiA9IHRoaXMuaXRlbURhdGFMaXN0Lmxlbmd0aDtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09IExpc3RUeXBlLlZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ob3Jpem9udGFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy52ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC53aWR0aCA9IHRoaXMuY29udGVudC5wYXJlbnQud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQgPSBkYXRhTGVuICogdGhpcy5pdGVtSGVpZ2h0ICsgKGRhdGFMZW4gLSAxKSAqIHRoaXMuc3BhY2VZICsgdGhpcy5wYWRkaW5nX3RvcCArIHRoaXMucGFkZGluZ19idXR0b207XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25Db3VudCA9IE1hdGgucm91bmQodGhpcy5zY3JvbGxWaWV3Lm5vZGUuaGVpZ2h0IC8gKHRoaXMuaXRlbUhlaWdodCArIHRoaXMuc3BhY2VZKSkgKyAyOyAvL+iuoeeul+WIm+W7uueahGl0ZW3lrp7kvovmlbDph4/vvIzmr5TlvZPliY1zY3JvbGxWaWV35a655Zmo6IO95pS+5LiL55qEaXRlbeaVsOmHj+WGjeWKoOS4ijLkuKpcclxuICAgICAgICAgICAgdGhpcy5oYWxmU2Nyb2xsVmlldyA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmhlaWdodCAvIDIgKyB0aGlzLml0ZW1IZWlnaHQgLyAyICsgdGhpcy5zcGFjZVk7IC8v6K6h566XYnVmZmVyWm9uZe+8jGl0ZW3nmoTmmL7npLrojIPlm7RcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGdW4gPSB0aGlzLnVwZGF0ZVY7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gTGlzdFR5cGUuSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuaG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy52ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQud2lkdGggPSBkYXRhTGVuICogdGhpcy5pdGVtV2lkdGggKyAoZGF0YUxlbiAtIDEpICogdGhpcy5zcGFjZVggKyB0aGlzLnBhZGRpbmdfbGVmdCArIHRoaXMucGFkZGluZ19yaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmhlaWdodCA9IHRoaXMuY29udGVudC5wYXJlbnQuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduQ291bnQgPSBNYXRoLnJvdW5kKHRoaXMuc2Nyb2xsVmlldy5ub2RlLndpZHRoIC8gKHRoaXMuaXRlbVdpZHRoICsgdGhpcy5zcGFjZVgpKSArIDI7XHJcbiAgICAgICAgICAgIHRoaXMuaGFsZlNjcm9sbFZpZXcgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aCAvIDIgKyB0aGlzLml0ZW1XaWR0aCAvIDIgKyB0aGlzLnNwYWNlWDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGdW4gPSB0aGlzLnVkcGF0ZUg7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gTGlzdFR5cGUuR3JpZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgPT0gU3RhcnRBeGlzVHlwZS5WZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3Lmhvcml6b250YWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy52ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQud2lkdGggPSB0aGlzLmNvbnRlbnQucGFyZW50LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpxsZWZ05ZKMcmlnaHTpl7TpmpTov4flpKfvvIzlr7zoh7TmlL7kuI3kuIvkuIDkuKppdGVt77yM5YiZbGVmdOWSjHJpZ2h06YO96K6+572u5Li6MO+8jOebuOW9k+S6juS4jeeUn+aViFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFkZGluZ19sZWZ0ICsgdGhpcy5wYWRkaW5nX3JpZ2h0ICsgdGhpcy5pdGVtV2lkdGggKyB0aGlzLnNwYWNlWCA+IHRoaXMuY29udGVudC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFkZGluZ19sZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZGRpbmdfcmlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJwYWRkaW5nX2xlZnTmiJZwYWRkaW5nX3JpZ2h06L+H5aSnXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZENvbCA9IE1hdGguZmxvb3IoKHRoaXMuY29udGVudC53aWR0aCAtIHRoaXMucGFkZGluZ19sZWZ0IC0gdGhpcy5wYWRkaW5nX3JpZ2h0KSAvICh0aGlzLml0ZW1XaWR0aCArIHRoaXMuc3BhY2VYKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRSb3cgPSBNYXRoLmNlaWwoZGF0YUxlbiAvIHRoaXMuZ3JpZENvbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuaGVpZ2h0ID0gdGhpcy5ncmlkUm93ICogdGhpcy5pdGVtSGVpZ2h0ICsgKHRoaXMuZ3JpZFJvdyAtIDEpICogdGhpcy5zcGFjZVkgKyB0aGlzLnBhZGRpbmdfdG9wICsgdGhpcy5wYWRkaW5nX2J1dHRvbTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Db3VudCA9IE1hdGgucm91bmQodGhpcy5zY3JvbGxWaWV3Lm5vZGUuaGVpZ2h0IC8gKHRoaXMuaXRlbUhlaWdodCArIHRoaXMuc3BhY2VZKSkgKiB0aGlzLmdyaWRDb2wgKyB0aGlzLmdyaWRDb2wgKiAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWxmU2Nyb2xsVmlldyA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmhlaWdodCAvIDIgKyB0aGlzLml0ZW1IZWlnaHQgLyAyICsgdGhpcy5zcGFjZVk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZ1biA9IHRoaXMudXBkYXRlR3JpZF9WO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhcnRBeGlzID09IFN0YXJ0QXhpc1R5cGUuSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3Lmhvcml6b250YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL+iuoeeul+mrmOmXtOmalFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmhlaWdodCA9IHRoaXMuY29udGVudC5wYXJlbnQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpxsZWZ05ZKMcmlnaHTpl7TpmpTov4flpKfvvIzlr7zoh7TmlL7kuI3kuIvkuIDkuKppdGVt77yM5YiZbGVmdOWSjHJpZ2h06YO96K6+572u5Li6MO+8jOebuOW9k+S6juS4jeeUn+aViFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFkZGluZ190b3AgKyB0aGlzLnBhZGRpbmdfYnV0dG9tICsgdGhpcy5pdGVtSGVpZ2h0ICsgdGhpcy5zcGFjZVkgPiB0aGlzLmNvbnRlbnQuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkaW5nX3RvcCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkaW5nX2J1dHRvbSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInBhZGRpbmdfdG9w5oiWcGFkZGluZ19idXR0b23ov4flpKdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkUm93ID0gTWF0aC5mbG9vcigodGhpcy5jb250ZW50LmhlaWdodCAtIHRoaXMucGFkZGluZ190b3AgLSB0aGlzLnBhZGRpbmdfYnV0dG9tKSAvICh0aGlzLml0ZW1IZWlnaHQgKyB0aGlzLnNwYWNlWSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkQ29sID0gTWF0aC5jZWlsKGRhdGFMZW4gLyB0aGlzLmdyaWRSb3cpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LndpZHRoID0gdGhpcy5ncmlkQ29sICogdGhpcy5pdGVtV2lkdGggKyAodGhpcy5ncmlkQ29sIC0gMSkgKiB0aGlzLnNwYWNlWCArIHRoaXMucGFkZGluZ19sZWZ0ICsgdGhpcy5wYWRkaW5nX3JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkNvdW50ID0gTWF0aC5yb3VuZCh0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aCAvICh0aGlzLml0ZW1XaWR0aCArIHRoaXMuc3BhY2VYKSkgKiB0aGlzLmdyaWRSb3cgKyB0aGlzLmdyaWRSb3cgKiAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWxmU2Nyb2xsVmlldyA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLndpZHRoIC8gMiArIHRoaXMuaXRlbVdpZHRoIC8gMiArIHRoaXMuc3BhY2VYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGdW4gPSB0aGlzLnVwZGF0ZUdyaWRfSDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuWIl+ihqCBcclxuICAgICAqIEBwYXJhbSBzdGFydEluZGV4IOi1t+Wni+aYvuekuueahOaVsOaNrue0ouW8lSAw6KGo56S656ys5LiA6aG5XHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0ICAgICBzY3JvbGxWaWV35YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlTGlzdChzdGFydEluZGV4OiBudW1iZXIsIG9mZnNldDogY2MuVmVjMikge1xyXG4gICAgICAgIC8v5b2T6ZyA6KaB5pi+56S655qE5pWw5o2u6ZW/5bqmID4g6Jma5ouf5YiX6KGo6ZW/5bqm77yMIOWIoOmZpOacgOacq+WwvuWHoOS4quaVsOaNruaXtu+8jOWIl+ihqOmcgOimgemHjee9ruS9jee9ruWIsHNjcm9sbFZpZXfmnIDlupXnq69cclxuICAgICAgICBpZiAodGhpcy5pdGVtRGF0YUxpc3QubGVuZ3RoID4gdGhpcy5zcGF3bkNvdW50ICYmIChzdGFydEluZGV4ICsgdGhpcy5zcGF3bkNvdW50IC0gMSkgPj0gdGhpcy5pdGVtRGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSB0aGlzLml0ZW1EYXRhTGlzdC5sZW5ndGggLSB0aGlzLnNwYXduQ291bnQ7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuc2Nyb2xsVmlldy5nZXRNYXhTY3JvbGxPZmZzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIC8v5b2T6ZyA6KaB5pi+56S655qE5pWw5o2u6ZW/5bqmIDw9IOiZmuaLn+WIl+ihqOmVv+W6pu+8jCDpmpDol4/lpJrkvZnnmoTomZrmi5/liJfooajpobkgXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLml0ZW1EYXRhTGlzdC5sZW5ndGggPD0gdGhpcy5zcGF3bkNvdW50KSB7XHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwYXduQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogY2MuTm9kZTtcclxuICAgICAgICAgICAgLy/pnIDopoHmmL7npLrnmoTmlbDmja7ntKLlvJXlnKjmlbDmja7ojIPlm7TlhoXvvIzliJlpdGVt5a6e5L6L5pi+56S65Ye65p2lXHJcbiAgICAgICAgICAgIGlmIChpICsgc3RhcnRJbmRleCA8IHRoaXMuaXRlbURhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUxpc3RbaV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmdldEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/pnIDopoHmmL7npLrnmoTmlbDmja7ntKLlvJXotoXov4fkuobmlbDmja7ojIPlm7TvvIzliJlpdGVt5a6e5L6L6ZqQ6JeP6LW35p2lXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2l0ZW3lrp7kvovmlbDph48gPiDpnIDopoHmmL7npLrnmoTmlbDmja7ph49cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1MaXN0Lmxlbmd0aCA+ICh0aGlzLml0ZW1EYXRhTGlzdC5sZW5ndGggLSBzdGFydEluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1MaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVBvb2wucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogbGlzdEl0ZW1SZW5kZXIgPSBpdGVtLmdldENvbXBvbmVudChsaXN0SXRlbVJlbmRlcik7XHJcbiAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaSArIHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YSA9IHRoaXMuaXRlbURhdGFMaXN0W2kgKyBzdGFydEluZGV4XTtcclxuICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhQ2hhbmdlZCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5WZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgLy/lm6DkuLpjb250ZW5055qE6ZSa54K5WOaYrzDvvIzmiYDku6VpdGVt55qEeOWAvOaYr2NvbnRlbnQud2l0aC8y6KGo56S65bGF5Lit77yM6ZSa54K5WeaYrzHvvIzmiYDku6VpdGVt55qEeeWAvOS7jmNvbnRlbnTpobbpg6jlkJHkuIvmmK8w5Yiw6LSf5peg56m344CC5omA5LulaXRlbS55PSAtaXRlbS5oZWlnaHQvMuaXtu+8jOaYr+WcqGNvbnRlbnTnmoTpobbpg6jjgIJcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24odGhpcy5jb250ZW50LndpZHRoIC8gMiwgLWl0ZW0uaGVpZ2h0ICogKDAuNSArIGkgKyBzdGFydEluZGV4KSAtIHRoaXMuc3BhY2VZICogKGkgKyBzdGFydEluZGV4KSAtIHRoaXMucGFkZGluZ190b3ApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5Ib3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKGl0ZW0ud2lkdGggKiAoMC41ICsgaSArIHN0YXJ0SW5kZXgpICsgdGhpcy5zcGFjZVggKiAoaSArIHN0YXJ0SW5kZXgpICsgdGhpcy5wYWRkaW5nX2xlZnQsIC10aGlzLmNvbnRlbnQuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IExpc3RUeXBlLkdyaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyA9PSBTdGFydEF4aXNUeXBlLlZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IoKGkgKyBzdGFydEluZGV4KSAvIHRoaXMuZ3JpZENvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbCA9IChpICsgc3RhcnRJbmRleCkgJSB0aGlzLmdyaWRDb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihpdGVtLndpZHRoICogKDAuNSArIGNvbCkgKyB0aGlzLnNwYWNlWCAqIGNvbCArIHRoaXMucGFkZGluZ19sZWZ0LCAtaXRlbS5oZWlnaHQgKiAoMC41ICsgcm93KSAtIHRoaXMuc3BhY2VZICogcm93IC0gdGhpcy5wYWRkaW5nX3RvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0QXhpcyA9PSBTdGFydEF4aXNUeXBlLkhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gKGkgKyBzdGFydEluZGV4KSAlIHRoaXMuZ3JpZFJvdztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sID0gTWF0aC5mbG9vcigoaSArIHN0YXJ0SW5kZXgpIC8gdGhpcy5ncmlkUm93KTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKGl0ZW0ud2lkdGggKiAoMC41ICsgY29sKSArIHRoaXMuc3BhY2VYICogY29sICsgdGhpcy5wYWRkaW5nX2xlZnQsIC1pdGVtLmhlaWdodCAqICgwLjUgKyByb3cpIC0gdGhpcy5zcGFjZVkgKiByb3cgLSB0aGlzLnBhZGRpbmdfdG9wKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluS4gOS4quWIl+ihqOmhuSAqL1xyXG4gICAgcHJpdmF0ZSBnZXRJdGVtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1Qb29sLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUmVuZGVyKVxyXG4gICAgICAgICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5pdGVtQ2xpY2tIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVBvb2wucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpdGVtQ2xpY2tIYW5kbGVyKGV2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIGxldCBpdGVtID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgY2MuTm9kZSkuZ2V0Q29tcG9uZW50KGxpc3RJdGVtUmVuZGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1DbGlja0hhbmRsZXIgXCIsIGl0ZW0uaXRlbUluZGV4KTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSBpdGVtLmRhdGE7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGl0ZW0uaXRlbUluZGV4O1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBMRXZlbnQoTEV2ZW50LklURU1fQ0xJQ0ssIGl0ZW0uaXRlbUluZGV4KSlcclxuICAgIH1cclxuICAgIC8qKuiOt+WPlumAieS4reeahOinhuWbviovXHJcbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWRJdGVtcmFuZGVyKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4IDwgMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGl0ZW1SOiBsaXN0SXRlbVJlbmRlcjtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuY29udGVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpdGVtUiA9IGl0ZW0uZ2V0Q29tcG9uZW50KGxpc3RJdGVtUmVuZGVyKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW1SICYmIGl0ZW1SLml0ZW1JbmRleCA9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEl0ZW0oKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYlNjcm9sbGluZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVGltZXIgPCB0aGlzLnVwZGF0ZUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5iU2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGdW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbGluZygpIHtcclxuICAgICAgICB0aGlzLmJTY3JvbGxpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8qKuWeguebtOaOkuWIlyAqL1xyXG4gICAgLy8gcHJpdmF0ZSB1cGRhdGVWKCkge1xyXG4gICAgLy8gICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbUxpc3Q7XHJcbiAgICAvLyAgICAgbGV0IGl0ZW07XHJcbiAgICAvLyAgICAgbGV0IGJ1ZmZlclpvbmUgPSB0aGlzLmhhbGZTY3JvbGxWaWV3O1xyXG4gICAgLy8gICAgIGxldCBpc1VwID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueSA+IHRoaXMubGFzdENvbnRlbnRQb3NZO1xyXG4gICAgLy8gICAgIGxldCBvZmZzZXQgPSAodGhpcy5pdGVtSGVpZ2h0ICsgdGhpcy5zcGFjZVkpICogaXRlbXMubGVuZ3RoO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgLy8gICAgICAgICBsZXQgdmlld1BvcyA9IHRoaXMuZ2V0UG9zaXRpb25JblZpZXcoaXRlbSk7XHJcbiAgICAvLyAgICAgICAgIGlmIChpc1VwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAvL2l0ZW3kuIrmu5Hml7bvvIzotoXlh7rkuoZzY3JvbGxWaWV35LiK6L6555WM77yM5bCGaXRlbeenu+WKqOWIsOS4i+aWueWkjeeUqO+8jGl0ZW3np7vliqjliLDkuIvmlrnnmoTkvY3nva7lv4XpobvkuI3otoXov4djb250ZW5055qE5LiL6L6555WMXHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodmlld1Bvcy55ID4gYnVmZmVyWm9uZSAmJiBpdGVtLnkgLSBvZmZzZXQgLSB0aGlzLnBhZGRpbmdfYnV0dG9tID4gLXRoaXMuY29udGVudC5oZWlnaHQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogbGlzdEl0ZW1SZW5kZXIgPSBpdGVtLmdldENvbXBvbmVudChsaXN0SXRlbVJlbmRlcik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW1SZW5kZXIuaXRlbUluZGV4ICsgaXRlbXMubGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YSA9IHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhQ2hhbmdlZCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGl0ZW0ueSA9IGl0ZW0ueSAtIG9mZnNldDtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIC8vaXRlbeS4i+a7keaXtu+8jOi2heWHuuS6hnNjcm9sbFZpZXfkuIvovrnnlYzvvIzlsIZpdGVt56e75Yqo5Yiw5LiK5pa55aSN55So77yMaXRlbeenu+WKqOWIsOS4iuaWueeahOS9jee9ruW/hemhu+S4jei2hei/h2NvbnRlbnTnmoTkuIrovrnnlYxcclxuICAgIC8vICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgPCAtYnVmZmVyWm9uZSAmJiBpdGVtLnkgKyBvZmZzZXQgKyB0aGlzLnBhZGRpbmdfdG9wIDwgMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBpdGVtUmVuZGVyOiBsaXN0SXRlbVJlbmRlciA9IGl0ZW0uZ2V0Q29tcG9uZW50KGxpc3RJdGVtUmVuZGVyKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaXRlbUluZGV4ID0gaXRlbVJlbmRlci5pdGVtSW5kZXggLSBpdGVtcy5sZW5ndGg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5pdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhID0gdGhpcy5pdGVtRGF0YUxpc3RbaXRlbUluZGV4XTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbS55ID0gaXRlbS55ICsgb2Zmc2V0O1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMubGFzdENvbnRlbnRQb3NZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueTtcclxuICAgIC8vIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVigpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1MaXN0O1xyXG4gICAgICAgIGxldCBpdGVtO1xyXG4gICAgICAgIGxldCBidWZmZXJab25lID0gdGhpcy5oYWxmU2Nyb2xsVmlldztcclxuICAgICAgICBsZXQgaXNVcCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkgPiB0aGlzLmxhc3RDb250ZW50UG9zWTtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuaXRlbUhlaWdodCArIHRoaXMuc3BhY2VZKSAqIGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgbGV0IHZpZXdQb3MgPSB0aGlzLmdldFBvc2l0aW9uSW5WaWV3KGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgICAgICAgLy9pdGVt5LiK5ruR5pe277yM6LaF5Ye65LqGc2Nyb2xsVmlld+S4iui+ueeVjO+8jOWwhml0ZW3np7vliqjliLDkuIvmlrnlpI3nlKjvvIxpdGVt56e75Yqo5Yiw5LiL5pa555qE5L2N572u5b+F6aG75LiN6LaF6L+HY29udGVudOeahOS4i+i+ueeVjFxyXG4gICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueSA+IGJ1ZmZlclpvbmUgJiYgaXRlbS55IC0gb2Zmc2V0IC0gdGhpcy5wYWRkaW5nX2J1dHRvbSA+IC10aGlzLmNvbnRlbnQuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1SZW5kZXI6IGxpc3RJdGVtUmVuZGVyID0gaXRlbS5nZXRDb21wb25lbnQobGlzdEl0ZW1SZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSW5kZXggPSBpdGVtUmVuZGVyLml0ZW1JbmRleCArIGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLml0ZW1JbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGEgPSB0aGlzLml0ZW1EYXRhTGlzdFtpdGVtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YS5pbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gaXRlbS55IC0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaXRlbeS4i+a7keaXtu+8jOi2heWHuuS6hnNjcm9sbFZpZXfkuIvovrnnlYzvvIzlsIZpdGVt56e75Yqo5Yiw5LiK5pa55aSN55So77yMaXRlbeenu+WKqOWIsOS4iuaWueeahOS9jee9ruW/hemhu+S4jei2hei/h2NvbnRlbnTnmoTkuIrovrnnlYxcclxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgKyBpdGVtLmhlaWdodCA8IC1idWZmZXJab25lICYmIGl0ZW0ueSArIG9mZnNldCArIHRoaXMucGFkZGluZ190b3AgPCAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LaF5Ye65LqGc2Nyb2xsVmlld+S4i+i+ueeVjFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1SZW5kZXI6IGxpc3RJdGVtUmVuZGVyID0gaXRlbS5nZXRDb21wb25lbnQobGlzdEl0ZW1SZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSW5kZXggPSBpdGVtUmVuZGVyLml0ZW1JbmRleCAtIGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLml0ZW1JbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGEgPSB0aGlzLml0ZW1EYXRhTGlzdFtpdGVtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YS5pbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gaXRlbS55ICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmsLTlubPmjpLliJcgKi9cclxuICAgIHByaXZhdGUgdWRwYXRlSCgpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1MaXN0O1xyXG4gICAgICAgIGxldCBpdGVtO1xyXG4gICAgICAgIGxldCBidWZmZXJab25lID0gdGhpcy5oYWxmU2Nyb2xsVmlldztcclxuICAgICAgICBsZXQgaXNSaWdodCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnggPiB0aGlzLmxhc3RDb250ZW50UG9zWDtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuaXRlbVdpZHRoICsgdGhpcy5zcGFjZVgpICogaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdmlld1BvcyA9IHRoaXMuZ2V0UG9zaXRpb25JblZpZXcoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChpc1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2l0ZW3lj7Pmu5Hml7bvvIzotoXlh7rkuoZzY3JvbGxWaWV35Y+z6L6555WM77yM5bCGaXRlbeenu+WKqOWIsOW3puaWueWkjeeUqO+8jGl0ZW3np7vliqjliLDlt6bmlrnnmoTkvY3nva7lv4XpobvkuI3otoXov4djb250ZW5055qE5bem6L6555WMXHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy54ID4gYnVmZmVyWm9uZSAmJiBpdGVtLnggLSBvZmZzZXQgLSB0aGlzLnBhZGRpbmdfbGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogbGlzdEl0ZW1SZW5kZXIgPSBpdGVtLmdldENvbXBvbmVudChsaXN0SXRlbVJlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW1SZW5kZXIuaXRlbUluZGV4IC0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YSA9IHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGl0ZW0ueCAtIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vaXRlbeW3pua7keaXtu+8jOi2heWHuuS6hnNjcm9sbFZpZXflt6bovrnnlYzvvIzlsIZpdGVt56e75Yqo5Yiw5Y+z5pa55aSN55So77yMaXRlbeenu+WKqOWIsOWPs+aWueeahOS9jee9ruW/hemhu+S4jei2hei/h2NvbnRlbnTnmoTlj7PovrnnlYxcclxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnggPCAtYnVmZmVyWm9uZSAmJiBpdGVtLnggKyBvZmZzZXQgKyB0aGlzLnBhZGRpbmdfcmlnaHQgPCB0aGlzLmNvbnRlbnQud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogbGlzdEl0ZW1SZW5kZXIgPSBpdGVtLmdldENvbXBvbmVudChsaXN0SXRlbVJlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW1SZW5kZXIuaXRlbUluZGV4ICsgaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YSA9IHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGl0ZW0ueCArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50Lng7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq572R5qC85Z6C55u05o6S5YiXICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUdyaWRfVigpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1MaXN0O1xyXG4gICAgICAgIGxldCBpdGVtOiBjYy5Ob2RlO1xyXG4gICAgICAgIGxldCBidWZmZXJab25lID0gdGhpcy5oYWxmU2Nyb2xsVmlldztcclxuICAgICAgICBsZXQgaXNVcCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkgPiB0aGlzLmxhc3RDb250ZW50UG9zWTtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuaXRlbUhlaWdodCArIHRoaXMuc3BhY2VZKSAqICh0aGlzLnNwYXduQ291bnQgLyB0aGlzLmdyaWRDb2wpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdmlld1BvcyA9IHRoaXMuZ2V0UG9zaXRpb25JblZpZXcoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChpc1VwKSB7XHJcbiAgICAgICAgICAgICAgICAvL2l0ZW3kuIrmu5Hml7bvvIzotoXlh7rkuoZzY3JvbGxWaWV35LiK6L6555WM77yM5bCGaXRlbeenu+WKqOWIsOS4i+aWueWkjeeUqO+8jGl0ZW3np7vliqjliLDkuIvmlrnnmoTkvY3nva7lv4XpobvkuI3otoXov4djb250ZW5055qE5LiL6L6555WMXHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy55ID4gYnVmZmVyWm9uZSAmJiBpdGVtLnkgLSBvZmZzZXQgLSB0aGlzLnBhZGRpbmdfYnV0dG9tID4gLXRoaXMuY29udGVudC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogbGlzdEl0ZW1SZW5kZXIgPSBpdGVtLmdldENvbXBvbmVudChsaXN0SXRlbVJlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW1SZW5kZXIuaXRlbUluZGV4ICsgKHRoaXMuc3Bhd25Db3VudCAvIHRoaXMuZ3JpZENvbCkgKiB0aGlzLmdyaWRDb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBpdGVtLnkgLSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGEgPSB0aGlzLml0ZW1EYXRhTGlzdFtpdGVtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBpdGVtLnkgLSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHsvL2l0ZW3kuIvmu5Hml7bvvIzotoXlh7rkuoZzY3JvbGxWaWV35LiL6L6555WM77yM5bCGaXRlbeenu+WKqOWIsOS4iuaWueWkjeeUqO+8jGl0ZW3np7vliqjliLDkuIrmlrnnmoTkvY3nva7lv4XpobvkuI3otoXov4djb250ZW5055qE5LiK6L6555WMXHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy55IDwgLWJ1ZmZlclpvbmUgJiYgaXRlbS55ICsgb2Zmc2V0ICsgdGhpcy5wYWRkaW5nX3RvcCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogbGlzdEl0ZW1SZW5kZXIgPSBpdGVtLmdldENvbXBvbmVudChsaXN0SXRlbVJlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW1SZW5kZXIuaXRlbUluZGV4IC0gKHRoaXMuc3Bhd25Db3VudCAvIHRoaXMuZ3JpZENvbCkgKiB0aGlzLmdyaWRDb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBpdGVtLnkgKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGEgPSB0aGlzLml0ZW1EYXRhTGlzdFtpdGVtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBpdGVtLnkgKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq572R5qC85rC05bmz5o6S5YiXICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUdyaWRfSCgpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1MaXN0O1xyXG4gICAgICAgIGxldCBpdGVtO1xyXG4gICAgICAgIGxldCBidWZmZXJab25lID0gdGhpcy5oYWxmU2Nyb2xsVmlldztcclxuICAgICAgICBsZXQgaXNSaWdodCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnggPiB0aGlzLmxhc3RDb250ZW50UG9zWDtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuaXRlbVdpZHRoICsgdGhpcy5zcGFjZVgpICogKHRoaXMuc3Bhd25Db3VudCAvIHRoaXMuZ3JpZFJvdyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGxldCB2aWV3UG9zID0gdGhpcy5nZXRQb3NpdGlvbkluVmlldyhpdGVtKTtcclxuICAgICAgICAgICAgaWYgKGlzUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8vaXRlbeWPs+a7keaXtu+8jOi2heWHuuS6hnNjcm9sbFZpZXflj7PovrnnlYzvvIzlsIZpdGVt56e75Yqo5Yiw5bem5pa55aSN55So77yMaXRlbeenu+WKqOWIsOW3puaWueeahOS9jee9ruW/hemhu+S4jei2hei/h2NvbnRlbnTnmoTlt6bovrnnlYxcclxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnggPiBidWZmZXJab25lICYmIGl0ZW0ueCAtIG9mZnNldCAtIHRoaXMucGFkZGluZ19sZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtUmVuZGVyOiBsaXN0SXRlbVJlbmRlciA9IGl0ZW0uZ2V0Q29tcG9uZW50KGxpc3RJdGVtUmVuZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUluZGV4ID0gaXRlbVJlbmRlci5pdGVtSW5kZXggLSAodGhpcy5zcGF3bkNvdW50IC8gdGhpcy5ncmlkUm93KSAqIHRoaXMuZ3JpZFJvdztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtRGF0YUxpc3RbaXRlbUluZGV4XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGl0ZW0ueCAtIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5pdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YSA9IHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGl0ZW0ueCAtIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5pdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9pdGVt5bem5ruR5pe277yM6LaF5Ye65LqGc2Nyb2xsVmlld+W3pui+ueeVjO+8jOWwhml0ZW3np7vliqjliLDlj7PmlrnlpI3nlKjvvIxpdGVt56e75Yqo5Yiw5Y+z5pa555qE5L2N572u5b+F6aG75LiN6LaF6L+HY29udGVudOeahOWPs+i+ueeVjFxyXG4gICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueCA8IC1idWZmZXJab25lICYmIGl0ZW0ueCArIG9mZnNldCArIHRoaXMucGFkZGluZ19yaWdodCA8IHRoaXMuY29udGVudC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtUmVuZGVyOiBsaXN0SXRlbVJlbmRlciA9IGl0ZW0uZ2V0Q29tcG9uZW50KGxpc3RJdGVtUmVuZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUluZGV4ID0gaXRlbVJlbmRlci5pdGVtSW5kZXggKyAodGhpcy5zcGF3bkNvdW50IC8gdGhpcy5ncmlkUm93KSAqIHRoaXMuZ3JpZFJvdztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtRGF0YUxpc3RbaXRlbUluZGV4XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGl0ZW0ueCArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5pdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YSA9IHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGl0ZW0ueCArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5pdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NYID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueDtcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5ZpdGVt5Zyoc2Nyb2xsVmlld+eahOWxgOmDqOWdkOaghyAqL1xyXG4gICAgcHJpdmF0ZSBnZXRQb3NpdGlvbkluVmlldyhpdGVtKSB7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gaXRlbS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0ucG9zaXRpb24pO1xyXG4gICAgICAgIGxldCB2aWV3UG9zID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIHJldHVybiB2aWV3UG9zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluWIl+ihqOaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldExpc3REYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1EYXRhTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWinuWKoOS4gOmhueaVsOaNruWIsOWIl+ihqOeahOacq+WwvlxyXG4gICAgICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRJdGVtKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXRlbURhdGFMaXN0LnB1c2goZGF0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlop7liqDkuIDpobnmlbDmja7liLDliJfooajmjIflrprkvY3nva5cclxuICAgICAqIEBwYXJhbSBpbmRleCAgIOS9jee9ru+8jDDooajnpLrnrKwx6aG5XHJcbiAgICAgKiBAcGFyYW0gZGF0YSAg5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRJdGVtQXQoaW5kZXg6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbURhdGFMaXN0W2luZGV4XSAhPSBudWxsIHx8IHRoaXMuaXRlbURhdGFMaXN0Lmxlbmd0aCA9PSBpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1EYXRhTGlzdC5zcGxpY2UoaW5kZXgsIDEsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTkuIDpobnmlbDmja5cclxuICAgICAqIEBwYXJhbSBpbmRleCDliKDpmaTpobnnmoTkvY3nva4gLDDooajnpLrnrKwx6aG5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGVJdGVtKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pdGVtRGF0YUxpc3RbaW5kZXhdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRGF0YUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pS55Y+Y5LiA6aG55pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggICDkvY3nva4sMOihqOekuuesrDHpoblcclxuICAgICAqIEBwYXJhbSBkYXRhICDmm7/mjaLnmoTmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNoYW5nZUl0ZW0oaW5kZXg6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbURhdGFMaXN0W2luZGV4XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbURhdGFMaXN0W2luZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bnrKzkuIDkuKpJdGVt55qE5L2N572uICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgLy/mmL7npLrliJfooajlrp7kvovkuLow5LiqXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUxpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudExpc3RQYXJhbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3QoMCwgbmV3IGNjLlZlYzIoMCwgMCkpO1xyXG4gICAgICAgICAgICAvL+aYvuekuuWIl+ihqOeahOWunuS+i+S4jeS4ujDkuKrvvIzliJnpnIDopoHph43mlrDmjpLliJdpdGVt5a6e5L6L5pWw57uEXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5WZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gTGlzdFR5cGUuSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnggLSBiLng7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gTGlzdFR5cGUuR3JpZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzID09IFN0YXJ0QXhpc1R5cGUuVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnggLSBiLng7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi55IC0gYS55O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0QXhpcyA9PSBTdGFydEF4aXNUeXBlLkhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS54IC0gYi54O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvdW50TGlzdFBhcmFtKCk7XHJcblxyXG4gICAgICAgICAgICAvL+iOt+WPluesrOS4gOS4qml0ZW3lrp7kvovpnIDopoHmmL7npLrnmoTmlbDmja7ntKLlvJVcclxuICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSB0aGlzLml0ZW1MaXN0WzBdLmdldENvbXBvbmVudChsaXN0SXRlbVJlbmRlcikuaXRlbUluZGV4O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5HcmlkICYmIHRoaXMuc3RhcnRBeGlzID09IFN0YXJ0QXhpc1R5cGUuVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggKz0gKHN0YXJ0SW5kZXggKyB0aGlzLnNwYXduQ291bnQpICUgdGhpcy5ncmlkQ29sO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5HcmlkICYmIHRoaXMuc3RhcnRBeGlzID09IFN0YXJ0QXhpc1R5cGUuSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCArPSAoc3RhcnRJbmRleCArIHRoaXMuc3Bhd25Db3VudCkgJSB0aGlzLmdyaWRSb3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZ2V0U2Nyb2xsT2Zmc2V0KCnlkoxzY3JvbGxUb09mZnNldCgp55qEeOWAvOaYr+ebuOWPjeeahFxyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0OiBjYy5WZWMyID0gdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpO1xyXG4gICAgICAgICAgICBvZmZzZXQueCA9IC0gb2Zmc2V0Lng7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3Qoc3RhcnRJbmRleCwgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZSA5q+BICovXHJcbiAgICBwdWJsaWMgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8v5riF55CG5YiX6KGo6aG5XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuaXRlbUxpc3QubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5pdGVtTGlzdFtpXSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3RbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QubGVuZ3RoID0gMDtcclxuICAgICAgICAvL+a4heeQhuWvueixoeaxoFxyXG4gICAgICAgIGxlbiA9IHRoaXMuaXRlbVBvb2wubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5pdGVtUG9vbFtpXSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVBvb2xbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbVBvb2wubGVuZ3RoID0gMDtcclxuICAgICAgICAvL+a4heeQhuWIl+ihqOaVsOaNrlxyXG4gICAgICAgIHRoaXMuaXRlbURhdGFMaXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/components/llist/LList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4db2gY1pRH1JpgDKBPjiWV', 'LList');
// Script/lightUI/components/llist/LList.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartAxisType = exports.ListType = void 0;
var LEvent_1 = require("../../events/LEvent");
var LListAbs_1 = require("../LListAbs");
var ItemRender_1 = require("./ItemRender");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**列表排列方式 */
var ListType;
(function (ListType) {
    /**水平排列 */
    ListType[ListType["Horizontal"] = 1] = "Horizontal";
    /**垂直排列 */
    ListType[ListType["Vertical"] = 2] = "Vertical";
    /**网格排列 */
    ListType[ListType["Grid"] = 3] = "Grid";
})(ListType = exports.ListType || (exports.ListType = {}));
/**网格布局中的方向 */
var StartAxisType;
(function (StartAxisType) {
    /**水平排列 */
    StartAxisType[StartAxisType["Horizontal"] = 1] = "Horizontal";
    /**垂直排列 */
    StartAxisType[StartAxisType["Vertical"] = 2] = "Vertical";
})(StartAxisType = exports.StartAxisType || (exports.StartAxisType = {}));
/**
 * 列表
 * 根据cocos_example的listView改动而来
 * @author chenkai 2020.7.8
 * @example
 *  1.创建cocos的ScrollView组件，添加List，设置List属性即可
 *
 */
var LList = /** @class */ (function (_super) {
    __extends(LList, _super);
    function LList() {
        var _this = _super.call(this) || this;
        //==================== 属性面板 =========================
        _this.autoSize = false;
        _this.enabledScroll = true;
        /**列表选项 */
        _this.itemRender = null;
        /**列表选项 */
        _this.none = null;
        /**排列方式 */
        _this.type = ListType.Vertical;
        /**网格布局中的方向 */
        _this.startAxis = StartAxisType.Horizontal;
        /**列表项之间X间隔 */
        _this.spaceX = 0;
        /**列表项之间Y间隔 */
        _this.spaceY = 0;
        /**上间距 */
        _this.padding_top = 0;
        /**下间距 */
        _this.padding_buttom = 0;
        /**左间距 */
        _this.padding_left = 0;
        _this._padding = 0;
        /**右间距 */
        _this.padding_right = 0;
        //====================== 滚动容器 ===============================
        /**列表滚动容器 */
        _this.scrollView = null;
        /**scrollView的内容容器 */
        _this.content = null;
        _this.bg = null;
        //======================== 列表项 ===========================
        /**列表项数据 */
        _this.itemDataList = [];
        /**应创建的实例数量 */
        _this.spawnCount = 0;
        /**存放列表项实例的数组 */
        _this.itemList = [];
        /**item的高度 */
        _this.itemHeight = 0;
        /**item的宽度 */
        _this.itemWidth = 0;
        /**存放不再使用中的列表项 */
        _this.itemPool = [];
        //======================= 计算参数 ==========================
        /**距离scrollView中心点的距离，超过这个距离的item会被重置，一般设置为 scrollVIew.height/2 + item.heigt/2 + space，因为这个距离item正好超出scrollView显示范围 */
        _this.halfScrollView = 0;
        /**上一次content的X值，用于和现在content的X值比较，得出是向左还是向右滚动 */
        _this.lastContentPosX = 0;
        /**上一次content的Y值，用于和现在content的Y值比较，得出是向上还是向下滚动 */
        _this.lastContentPosY = 0;
        /**网格行数 */
        _this.gridRow = 0;
        /**网格列数 */
        _this.gridCol = 0;
        /**刷新时间，单位s */
        _this.updateTimer = 0;
        /**刷新间隔，单位s */
        _this.updateInterval = 0.1;
        /**是否滚动容器 */
        _this.bScrolling = false;
        /**刷新的函数 */
        _this.updateFun = function () { };
        _this._selectedIndex = -1;
        return _this;
        // console.log("List ===>",  this.scrollView);
    }
    LList.prototype.onLoad = function () {
        this.itemHeight = this.itemRender.height;
        this.itemWidth = this.itemRender.width;
        this.scrollView = this.node.getComponent(cc.ScrollView);
        this.bg = this.scrollView.node.getChildByName("bg");
        this.content = this.scrollView.content;
        this.content.anchorX = 0;
        this.content.anchorY = 1;
        this.content.removeAllChildren();
        this.scrollView.node.on("scrolling", this.onScrolling, this);
        if (this.bg && this.autoSize) {
            var x = 0 - this.bg.x;
            var y = this.bg.y - 0;
            var w = this.bg.width - this.node.width - x;
            var h = this.bg.height - this.node.height - y;
            this.fixSize = new cc.Rect(x, y, w, h);
        }
        // if(this.bg) this.bg.active = false;
        this.scrollView.enabled = this.enabledScroll;
    };
    /**
     * 列表数据 (列表数据复制使用，如果列表数据改变，则需要重新设置一遍数据)
     * @param itemDataList item数据列表
     */
    LList.prototype.setData = function (itemDataList) {
        // console.log("setdata",itemDataList);
        if (!this.scrollView)
            return;
        this.itemDataList = itemDataList.slice();
        if (this.none)
            this.none.active = (itemDataList.length == 0);
        this.updateContent();
        if (this.autoSize)
            this.reSize();
    };
    Object.defineProperty(LList.prototype, "dataProvider", {
        get: function () {
            return this.itemDataList;
        },
        set: function (data) {
            this.setData(data);
        },
        enumerable: false,
        configurable: true
    });
    LList.prototype.reSize = function () {
        this.scrollView.node.width = this.content.width;
        this.scrollView.node.height = this.content.height;
        this.node.height = this.content.height;
        this.node.width = this.content.width;
        var mask = this.scrollView.node.getChildByName("view");
        mask.width = this.content.width;
        mask.height = this.content.height;
        if (this.bg) {
            this.bg.width = this.content.width + this.fixSize.x + this.fixSize.width;
            this.bg.height = this.content.height + this.fixSize.y + this.fixSize.height;
        }
        this.updateContent();
    };
    Object.defineProperty(LList.prototype, "width", {
        set: function (value) {
            this.content.width = value;
            this.reSize();
        },
        enumerable: false,
        configurable: true
    });
    /**计算列表的各项参数 */
    LList.prototype.countListParam = function () {
        var dataLen = this.itemDataList.length;
        if (this.type == ListType.Vertical) {
            this.scrollView.horizontal = false;
            this.scrollView.vertical = true;
            this.content.width = this.content.parent.width;
            this.content.height = dataLen * this.itemHeight + (dataLen - 1) * this.spaceY + this.padding_top + this.padding_buttom;
            this.spawnCount = Math.round(this.scrollView.node.height / (this.itemHeight + this.spaceY)) + 2; //计算创建的item实例数量，比当前scrollView容器能放下的item数量再加上2个
            this.halfScrollView = this.scrollView.node.height / 2 + this.itemHeight / 2 + this.spaceY; //计算bufferZone，item的显示范围
            this.updateFun = this.updateV;
        }
        else if (this.type == ListType.Horizontal) {
            this.scrollView.horizontal = true;
            this.scrollView.vertical = false;
            this.content.width = dataLen * this.itemWidth + (dataLen - 1) * this.spaceX + this.padding_left + this.padding_right;
            this.content.height = this.content.parent.height;
            this.spawnCount = Math.round(this.scrollView.node.width / (this.itemWidth + this.spaceX)) + 2;
            this.halfScrollView = this.scrollView.node.width / 2 + this.itemWidth / 2 + this.spaceX;
            this.updateFun = this.udpateH;
        }
        else if (this.type == ListType.Grid) {
            if (this.startAxis == StartAxisType.Vertical) {
                this.scrollView.horizontal = false;
                this.scrollView.vertical = true;
                this.content.width = this.content.parent.width;
                //如果left和right间隔过大，导致放不下一个item，则left和right都设置为0，相当于不生效
                if (this.padding_left + this.padding_right + this.itemWidth + this.spaceX > this.content.width) {
                    this.padding_left = 0;
                    this.padding_right = 0;
                    console.error("padding_left或padding_right过大");
                }
                this.gridCol = Math.floor((this.content.width - this.padding_left - this.padding_right) / (this.itemWidth + this.spaceX));
                this.gridRow = Math.ceil(dataLen / this.gridCol);
                this.content.height = this.gridRow * this.itemHeight + (this.gridRow - 1) * this.spaceY + this.padding_top + this.padding_buttom;
                this.spawnCount = Math.round(this.scrollView.node.height / (this.itemHeight + this.spaceY)) * this.gridCol + this.gridCol * 2;
                this.halfScrollView = this.scrollView.node.height / 2 + this.itemHeight / 2 + this.spaceY;
                this.updateFun = this.updateGrid_V;
            }
            else if (this.startAxis == StartAxisType.Horizontal) {
                this.scrollView.horizontal = true;
                this.scrollView.vertical = false;
                //计算高间隔
                this.content.height = this.content.parent.height;
                //如果left和right间隔过大，导致放不下一个item，则left和right都设置为0，相当于不生效
                if (this.padding_top + this.padding_buttom + this.itemHeight + this.spaceY > this.content.height) {
                    this.padding_top = 0;
                    this.padding_buttom = 0;
                    console.error("padding_top或padding_buttom过大");
                }
                this.gridRow = Math.floor((this.content.height - this.padding_top - this.padding_buttom) / (this.itemHeight + this.spaceY));
                this.gridCol = Math.ceil(dataLen / this.gridRow);
                this.content.width = this.gridCol * this.itemWidth + (this.gridCol - 1) * this.spaceX + this.padding_left + this.padding_right;
                this.spawnCount = Math.round(this.scrollView.node.width / (this.itemWidth + this.spaceX)) * this.gridRow + this.gridRow * 2;
                this.halfScrollView = this.scrollView.node.width / 2 + this.itemWidth / 2 + this.spaceX;
                this.updateFun = this.updateGrid_H;
            }
        }
    };
    /**
     * 创建列表
     * @param startIndex 起始显示的数据索引 0表示第一项
     * @param offset     scrollView偏移量
     */
    LList.prototype.createList = function (startIndex, offset) {
        //当需要显示的数据长度 > 虚拟列表长度， 删除最末尾几个数据时，列表需要重置位置到scrollView最底端
        if (this.itemDataList.length > this.spawnCount && (startIndex + this.spawnCount - 1) >= this.itemDataList.length) {
            startIndex = this.itemDataList.length - this.spawnCount;
            offset = this.scrollView.getMaxScrollOffset();
            //当需要显示的数据长度 <= 虚拟列表长度， 隐藏多余的虚拟列表项 
        }
        else if (this.itemDataList.length <= this.spawnCount) {
            startIndex = 0;
        }
        for (var i = 0; i < this.spawnCount; i++) {
            var item = void 0;
            //需要显示的数据索引在数据范围内，则item实例显示出来
            if (i + startIndex < this.itemDataList.length) {
                if (this.itemList[i] == null) {
                    item = this.getItem();
                    this.itemList.push(item);
                    item.parent = this.content;
                }
                else {
                    item = this.itemList[i];
                }
                //需要显示的数据索引超过了数据范围，则item实例隐藏起来
            }
            else {
                //item实例数量 > 需要显示的数据量
                if (this.itemList.length > (this.itemDataList.length - startIndex)) {
                    item = this.itemList.pop();
                    item.removeFromParent(false);
                    this.itemPool.push(item);
                }
                continue;
            }
            var itemRender = item.getComponent(ItemRender_1.default);
            itemRender.itemIndex = i + startIndex;
            itemRender.data = this.itemDataList[i + startIndex];
            itemRender.dataChanged();
            if (this.type == ListType.Vertical) {
                //因为content的锚点X是0，所以item的x值是content.with/2表示居中，锚点Y是1，所以item的y值从content顶部向下是0到负无穷。所以item.y= -item.height/2时，是在content的顶部。
                item.setPosition(this.content.width / 2, -item.height * (0.5 + i + startIndex) - this.spaceY * (i + startIndex) - this.padding_top);
            }
            else if (this.type == ListType.Horizontal) {
                item.setPosition(item.width * (0.5 + i + startIndex) + this.spaceX * (i + startIndex) + this.padding_left, -this.content.height / 2);
            }
            else if (this.type == ListType.Grid) {
                if (this.startAxis == StartAxisType.Vertical) {
                    var row = Math.floor((i + startIndex) / this.gridCol);
                    var col = (i + startIndex) % this.gridCol;
                    item.setPosition(item.width * (0.5 + col) + this.spaceX * col + this.padding_left, -item.height * (0.5 + row) - this.spaceY * row - this.padding_top);
                    item.opacity = 255;
                }
                else if (this.startAxis == StartAxisType.Horizontal) {
                    var row = (i + startIndex) % this.gridRow;
                    var col = Math.floor((i + startIndex) / this.gridRow);
                    item.setPosition(item.width * (0.5 + col) + this.spaceX * col + this.padding_left, -item.height * (0.5 + row) - this.spaceY * row - this.padding_top);
                    item.opacity = 255;
                }
            }
        }
        this.scrollView.scrollToOffset(offset);
    };
    /**获取一个列表项 */
    LList.prototype.getItem = function () {
        if (this.itemPool.length == 0) {
            var item = cc.instantiate(this.itemRender);
            item.on(cc.Node.EventType.TOUCH_END, this.itemClickHandler, this);
            // console.log("creatItem");
            return item;
        }
        else {
            return this.itemPool.pop();
        }
    };
    LList.prototype.itemClickHandler = function (event) {
        var item = event.currentTarget.getComponent(ItemRender_1.default);
        // console.log("itemClickHandler ", item.itemIndex);
        this._selectedItem = item.data;
        this._selectedIndex = item.itemIndex;
        this.node.dispatchEvent(new LEvent_1.default(LEvent_1.default.ITEM_CLICK, item.itemIndex));
    };
    LList.prototype.update = function (dt) {
        if (this.bScrolling == false) {
            return;
        }
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return;
        }
        this.updateTimer = 0;
        this.bScrolling = false;
        this.updateFun();
    };
    LList.prototype.onScrolling = function () {
        this.bScrolling = true;
    };
    /**垂直排列 */
    LList.prototype.updateV = function () {
        var items = this.itemList;
        var item;
        var bufferZone = this.halfScrollView;
        var isUp = this.scrollView.content.y > this.lastContentPosY;
        var offset = (this.itemHeight + this.spaceY) * items.length;
        for (var i = 0; i < items.length; i++) {
            item = items[i];
            var viewPos = this.getPositionInView(item);
            if (isUp) {
                //item上滑时，超出了scrollView上边界，将item移动到下方复用，item移动到下方的位置必须不超过content的下边界
                if (viewPos.y > bufferZone && item.y - offset - this.padding_buttom > -this.content.height) {
                    var itemRender = item.getComponent(ItemRender_1.default);
                    var itemIndex = itemRender.itemIndex + items.length;
                    itemRender.itemIndex = itemIndex;
                    itemRender.data = this.itemDataList[itemIndex];
                    itemRender.data.index = itemIndex;
                    itemRender.dataChanged();
                    item.y = item.y - offset;
                }
            }
            else {
                //item下滑时，超出了scrollView下边界，将item移动到上方复用，item移动到上方的位置必须不超过content的上边界
                if (viewPos.y + item.height < -bufferZone && item.y + offset + this.padding_top < 0) {
                    // console.log("超出了scrollView下边界");
                    var itemRender = item.getComponent(ItemRender_1.default);
                    var itemIndex = itemRender.itemIndex - items.length;
                    itemRender.itemIndex = itemIndex;
                    itemRender.data = this.itemDataList[itemIndex];
                    itemRender.data.index = itemIndex;
                    itemRender.dataChanged();
                    item.y = item.y + offset;
                }
            }
        }
        this.lastContentPosY = this.scrollView.content.y;
    };
    /**水平排列 */
    LList.prototype.udpateH = function () {
        var items = this.itemList;
        var item;
        var bufferZone = this.halfScrollView;
        var isRight = this.scrollView.content.x > this.lastContentPosX;
        var offset = (this.itemWidth + this.spaceX) * items.length;
        for (var i = 0; i < items.length; i++) {
            item = items[i];
            var viewPos = this.getPositionInView(item);
            if (isRight) {
                //item右滑时，超出了scrollView右边界，将item移动到左方复用，item移动到左方的位置必须不超过content的左边界
                if (viewPos.x > bufferZone && item.x - offset - this.padding_left > 0) {
                    var itemRender = item.getComponent(ItemRender_1.default);
                    var itemIndex = itemRender.itemIndex - items.length;
                    itemRender.itemIndex = itemIndex;
                    itemRender.data = this.itemDataList[itemIndex];
                    itemRender.dataChanged();
                    item.x = item.x - offset;
                }
            }
            else {
                //item左滑时，超出了scrollView左边界，将item移动到右方复用，item移动到右方的位置必须不超过content的右边界
                if (viewPos.x < -bufferZone && item.x + offset + this.padding_right < this.content.width) {
                    var itemRender = item.getComponent(ItemRender_1.default);
                    var itemIndex = itemRender.itemIndex + items.length;
                    itemRender.itemIndex = itemIndex;
                    itemRender.data = this.itemDataList[itemIndex];
                    itemRender.dataChanged();
                    item.x = item.x + offset;
                }
            }
        }
        this.lastContentPosX = this.scrollView.content.x;
    };
    /**网格垂直排列 */
    LList.prototype.updateGrid_V = function () {
        var items = this.itemList;
        var item;
        var bufferZone = this.halfScrollView;
        var isUp = this.scrollView.content.y > this.lastContentPosY;
        var offset = (this.itemHeight + this.spaceY) * (this.spawnCount / this.gridCol);
        for (var i = 0; i < items.length; i++) {
            item = items[i];
            var viewPos = this.getPositionInView(item);
            if (isUp) {
                //item上滑时，超出了scrollView上边界，将item移动到下方复用，item移动到下方的位置必须不超过content的下边界
                if (viewPos.y > bufferZone && item.y - offset - this.padding_buttom > -this.content.height) {
                    var itemRender = item.getComponent(ItemRender_1.default);
                    var itemIndex = itemRender.itemIndex + (this.spawnCount / this.gridCol) * this.gridCol;
                    if (this.itemDataList[itemIndex] != null) {
                        item.y = item.y - offset;
                        itemRender.itemIndex = itemIndex;
                        itemRender.data = this.itemDataList[itemIndex];
                        itemRender.dataChanged();
                        item.opacity = 255;
                    }
                    else {
                        item.y = item.y - offset;
                        itemRender.itemIndex = itemIndex;
                        item.opacity = 0;
                    }
                }
            }
            else { //item下滑时，超出了scrollView下边界，将item移动到上方复用，item移动到上方的位置必须不超过content的上边界
                if (viewPos.y < -bufferZone && item.y + offset + this.padding_top < 0) {
                    var itemRender = item.getComponent(ItemRender_1.default);
                    var itemIndex = itemRender.itemIndex - (this.spawnCount / this.gridCol) * this.gridCol;
                    if (this.itemDataList[itemIndex] != null) {
                        item.y = item.y + offset;
                        itemRender.itemIndex = itemIndex;
                        itemRender.data = this.itemDataList[itemIndex];
                        itemRender.dataChanged();
                        item.opacity = 255;
                    }
                    else {
                        item.y = item.y + offset;
                        itemRender.itemIndex = itemIndex;
                        item.opacity = 0;
                    }
                }
            }
        }
        this.lastContentPosY = this.scrollView.content.y;
    };
    /**网格水平排列 */
    LList.prototype.updateGrid_H = function () {
        var items = this.itemList;
        var item;
        var bufferZone = this.halfScrollView;
        var isRight = this.scrollView.content.x > this.lastContentPosX;
        var offset = (this.itemWidth + this.spaceX) * (this.spawnCount / this.gridRow);
        for (var i = 0; i < items.length; i++) {
            item = items[i];
            var viewPos = this.getPositionInView(item);
            if (isRight) {
                //item右滑时，超出了scrollView右边界，将item移动到左方复用，item移动到左方的位置必须不超过content的左边界
                if (viewPos.x > bufferZone && item.x - offset - this.padding_left > 0) {
                    var itemRender = item.getComponent(ItemRender_1.default);
                    var itemIndex = itemRender.itemIndex - (this.spawnCount / this.gridRow) * this.gridRow;
                    if (this.itemDataList[itemIndex] != null) {
                        item.x = item.x - offset;
                        itemRender.itemIndex = itemIndex;
                        itemRender.data = this.itemDataList[itemIndex];
                        itemRender.dataChanged();
                        item.opacity = 255;
                    }
                    else {
                        item.x = item.x - offset;
                        itemRender.itemIndex = itemIndex;
                        item.opacity = 0;
                    }
                }
            }
            else {
                //item左滑时，超出了scrollView左边界，将item移动到右方复用，item移动到右方的位置必须不超过content的右边界
                if (viewPos.x < -bufferZone && item.x + offset + this.padding_right < this.content.width) {
                    var itemRender = item.getComponent(ItemRender_1.default);
                    var itemIndex = itemRender.itemIndex + (this.spawnCount / this.gridRow) * this.gridRow;
                    if (this.itemDataList[itemIndex] != null) {
                        item.x = item.x + offset;
                        itemRender.itemIndex = itemIndex;
                        itemRender.data = this.itemDataList[itemIndex];
                        itemRender.dataChanged();
                        item.opacity = 255;
                    }
                    else {
                        item.x = item.x + offset;
                        itemRender.itemIndex = itemIndex;
                        item.opacity = 0;
                    }
                }
            }
        }
        this.lastContentPosX = this.scrollView.content.x;
    };
    Object.defineProperty(LList.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        enumerable: false,
        configurable: true
    });
    /**获取选中的视图*/
    LList.prototype.getSelectedItemrander = function () {
        if (this._selectedIndex < 0)
            return null;
        var itemR;
        for (var _i = 0, _a = this.content.children; _i < _a.length; _i++) {
            var item = _a[_i];
            itemR = item.getComponent(ItemRender_1.default);
            if (itemR && itemR.itemIndex == this.selectedIndex)
                return item;
        }
        return null;
    };
    /**获取item在scrollView的局部坐标 */
    LList.prototype.getPositionInView = function (item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };
    /**获取列表数据 */
    LList.prototype.getListData = function () {
        return this.itemDataList;
    };
    /**
     * 增加一项数据到列表的末尾
     * @param data 数据
     */
    LList.prototype.addItem = function (data) {
        this.itemDataList.push(data);
        this.updateContent();
    };
    /**
     * 增加一项数据到列表指定位置
     * @param index   位置，0表示第1项
     * @param data  数据
     */
    LList.prototype.addItemAt = function (index, data) {
        if (this.itemDataList[index] != null || this.itemDataList.length == index) {
            this.itemDataList.splice(index, 1, data);
            this.updateContent();
        }
    };
    /**
     * 删除一项数据
     * @param index 删除项的位置 ,0表示第1项
     */
    LList.prototype.deleteItem = function (index) {
        if (this.itemDataList[index] != null) {
            this.itemDataList.splice(index, 1);
            this.updateContent();
        }
    };
    /**
     * 改变一项数据
     * @param index   位置,0表示第1项
     * @param data  替换的数据
     */
    LList.prototype.changeItem = function (index, data) {
        if (this.itemDataList[index] != null) {
            this.itemDataList[index] = data;
            this.updateContent();
        }
    };
    /**获取第一个Item的位置 */
    LList.prototype.updateContent = function () {
        //显示列表实例为0个
        if (this.itemList.length == 0) {
            this.countListParam();
            this.createList(0, new cc.Vec2(0, 0));
            //显示列表的实例不为0个，则需要重新排列item实例数组
        }
        else {
            if (this.type == ListType.Vertical) {
                this.itemList.sort(function (a, b) {
                    return b.y - a.y;
                });
            }
            else if (this.type == ListType.Horizontal) {
                this.itemList.sort(function (a, b) {
                    return a.x - b.x;
                });
            }
            else if (this.type == ListType.Grid) {
                if (this.startAxis == StartAxisType.Vertical) {
                    this.itemList.sort(function (a, b) {
                        return a.x - b.x;
                    });
                    this.itemList.sort(function (a, b) {
                        return b.y - a.y;
                    });
                }
                else if (this.startAxis == StartAxisType.Horizontal) {
                    this.itemList.sort(function (a, b) {
                        return b.y - a.y;
                    });
                    this.itemList.sort(function (a, b) {
                        return a.x - b.x;
                    });
                }
            }
            this.countListParam();
            //获取第一个item实例需要显示的数据索引
            var startIndex = this.itemList[0].getComponent(ItemRender_1.default).itemIndex;
            if (this.type == ListType.Grid && this.startAxis == StartAxisType.Vertical) {
                startIndex += (startIndex + this.spawnCount) % this.gridCol;
            }
            else if (this.type == ListType.Grid && this.startAxis == StartAxisType.Horizontal) {
                startIndex += (startIndex + this.spawnCount) % this.gridRow;
            }
            //getScrollOffset()和scrollToOffset()的x值是相反的
            var offset = this.scrollView.getScrollOffset();
            offset.x = -offset.x;
            this.createList(startIndex, offset);
        }
    };
    Object.defineProperty(LList.prototype, "selectedItem", {
        get: function () {
            return this._selectedItem;
        },
        enumerable: false,
        configurable: true
    });
    /**销毁 */
    LList.prototype.onDestroy = function () {
        //清理列表项
        var len = this.itemList.length;
        for (var i = 0; i < len; i++) {
            if (cc.isValid(this.itemList[i], true)) {
                this.itemList[i].destroy();
            }
        }
        this.itemList.length = 0;
        //清理对象池
        len = this.itemPool.length;
        for (var i = 0; i < len; i++) {
            if (cc.isValid(this.itemPool[i], true)) {
                this.itemPool[i].destroy();
            }
        }
        this.itemPool.length = 0;
        //清理列表数据
        this.itemDataList.length = 0;
    };
    __decorate([
        property({ type: cc.Boolean, tooltip: "自适应" })
    ], LList.prototype, "autoSize", void 0);
    __decorate([
        property({ type: cc.Boolean, tooltip: "是否允许滚动" })
    ], LList.prototype, "enabledScroll", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "列表项" })
    ], LList.prototype, "itemRender", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "无数据时候的表现" })
    ], LList.prototype, "none", void 0);
    __decorate([
        property({ type: cc.Enum(ListType), tooltip: "排列方式" })
    ], LList.prototype, "type", void 0);
    __decorate([
        property({ type: cc.Enum(StartAxisType), tooltip: "网格布局中的方向", visible: function () { return this.type == ListType.Grid; } })
    ], LList.prototype, "startAxis", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "列表项X间隔", visible: function () { return (this.type == ListType.Horizontal || this.type == ListType.Grid); } })
    ], LList.prototype, "spaceX", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "列表项Y间隔", visible: function () { return this.type == ListType.Vertical || this.type == ListType.Grid; } })
    ], LList.prototype, "spaceY", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "上间距", visible: function () { return (this.type == ListType.Vertical || this.type == ListType.Grid); } })
    ], LList.prototype, "padding_top", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "下间距", visible: function () { return (this.type == ListType.Vertical || this.type == ListType.Grid); } })
    ], LList.prototype, "padding_buttom", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "左间距", visible: function () { return (this.type == ListType.Horizontal || this.type == ListType.Grid); } })
    ], LList.prototype, "padding_left", void 0);
    __decorate([
        property(cc.Integer)
    ], LList.prototype, "_padding", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: "右间距", visible: function () { return (this.type == ListType.Horizontal || this.type == ListType.Grid); } })
    ], LList.prototype, "padding_right", void 0);
    LList = __decorate([
        ccclass
    ], LList);
    return LList;
}(LListAbs_1.default));
exports.default = LList;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxjb21wb25lbnRzXFxsbGlzdFxcTExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUV6Qyx3Q0FBbUM7QUFDbkMsMkNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLFlBQVk7QUFDWixJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDaEIsVUFBVTtJQUNWLG1EQUFjLENBQUE7SUFDZCxVQUFVO0lBQ1YsK0NBQVksQ0FBQTtJQUNaLFVBQVU7SUFDVix1Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQVBXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBT25CO0FBRUQsY0FBYztBQUNkLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQixVQUFVO0lBQ1YsNkRBQWMsQ0FBQTtJQUNkLFVBQVU7SUFDVix5REFBWSxDQUFBO0FBQ2hCLENBQUMsRUFMVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUt4QjtBQUVEOzs7Ozs7O0dBT0c7QUFFSDtJQUFtQyx5QkFBUTtJQXFHdkM7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUF0R0QscURBQXFEO1FBRzlDLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFckMsVUFBVTtRQUVILGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRWxDLFVBQVU7UUFFSCxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRTVCLFVBQVU7UUFFSCxVQUFJLEdBQWEsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUUxQyxjQUFjO1FBRVAsZUFBUyxHQUFrQixhQUFhLENBQUMsVUFBVSxDQUFDO1FBRTNELGNBQWM7UUFFUCxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLGNBQWM7UUFF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QUFJLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO2dEQUNyRztJQXJEaEIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlwQnpCO0lBQUQsWUFBQztDQWpwQkQsQUFpcEJDLENBanBCa0Msa0JBQVEsR0FpcEIxQztrQkFqcEJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExFdmVudCBmcm9tIFwiLi4vLi4vZXZlbnRzL0xFdmVudFwiO1xyXG5pbXBvcnQgTENvbXBvbmVudCBmcm9tIFwiLi4vTENvbXBvbmVudFwiO1xyXG5pbXBvcnQgTExpc3RBYnMgZnJvbSBcIi4uL0xMaXN0QWJzXCI7XHJcbmltcG9ydCBJdGVtUmVuZGVyIGZyb20gXCIuL0l0ZW1SZW5kZXJcIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKuWIl+ihqOaOkuWIl+aWueW8jyAqL1xyXG5leHBvcnQgZW51bSBMaXN0VHlwZSB7XHJcbiAgICAvKirmsLTlubPmjpLliJcgKi9cclxuICAgIEhvcml6b250YWwgPSAxLFxyXG4gICAgLyoq5Z6C55u05o6S5YiXICovXHJcbiAgICBWZXJ0aWNhbCA9IDIsXHJcbiAgICAvKirnvZHmoLzmjpLliJcgKi9cclxuICAgIEdyaWQgPSAzXHJcbn1cclxuXHJcbi8qKue9keagvOW4g+WxgOS4reeahOaWueWQkSAqL1xyXG5leHBvcnQgZW51bSBTdGFydEF4aXNUeXBlIHtcclxuICAgIC8qKuawtOW5s+aOkuWIlyAqL1xyXG4gICAgSG9yaXpvbnRhbCA9IDEsXHJcbiAgICAvKirlnoLnm7TmjpLliJcgKi9cclxuICAgIFZlcnRpY2FsID0gMixcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIl+ihqFxyXG4gKiDmoLnmja5jb2Nvc19leGFtcGxl55qEbGlzdFZpZXfmlLnliqjogIzmnaVcclxuICogQGF1dGhvciBjaGVua2FpIDIwMjAuNy44XHJcbiAqIEBleGFtcGxlXHJcbiAqICAxLuWIm+W7umNvY29z55qEU2Nyb2xsVmlld+e7hOS7tu+8jOa3u+WKoExpc3TvvIzorr7nva5MaXN05bGe5oCn5Y2z5Y+vXHJcbiAqICBcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExMaXN0IGV4dGVuZHMgTExpc3RBYnMge1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT0g5bGe5oCn6Z2i5p2/ID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Cb29sZWFuLCB0b29sdGlwOiBcIuiHqumAguW6lFwiIH0pXHJcbiAgICBwdWJsaWMgYXV0b1NpemU6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Cb29sZWFuLCB0b29sdGlwOiBcIuaYr+WQpuWFgeiuuOa7muWKqFwiIH0pXHJcbiAgICBwdWJsaWMgZW5hYmxlZFNjcm9sbDogQm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoq5YiX6KGo6YCJ6aG5ICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuWIl+ihqOmhuVwiIH0pXHJcbiAgICBwdWJsaWMgaXRlbVJlbmRlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoq5YiX6KGo6YCJ6aG5ICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiBcIuaXoOaVsOaNruaXtuWAmeeahOihqOeOsFwiIH0pXHJcbiAgICBwdWJsaWMgbm9uZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoq5o6S5YiX5pa55byPICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKExpc3RUeXBlKSwgdG9vbHRpcDogXCLmjpLliJfmlrnlvI9cIiB9KVxyXG4gICAgcHVibGljIHR5cGU6IExpc3RUeXBlID0gTGlzdFR5cGUuVmVydGljYWw7XHJcblxyXG4gICAgLyoq572R5qC85biD5bGA5Lit55qE5pa55ZCRICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKFN0YXJ0QXhpc1R5cGUpLCB0b29sdGlwOiBcIue9keagvOW4g+WxgOS4reeahOaWueWQkVwiLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy50eXBlID09IExpc3RUeXBlLkdyaWQgfSB9KVxyXG4gICAgcHVibGljIHN0YXJ0QXhpczogU3RhcnRBeGlzVHlwZSA9IFN0YXJ0QXhpc1R5cGUuSG9yaXpvbnRhbDtcclxuXHJcbiAgICAvKirliJfooajpobnkuYvpl7RY6Ze06ZqUICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuWIl+ihqOmhuVjpl7TpmpRcIiwgdmlzaWJsZSgpIHsgcmV0dXJuICh0aGlzLnR5cGUgPT0gTGlzdFR5cGUuSG9yaXpvbnRhbCB8fCB0aGlzLnR5cGUgPT0gTGlzdFR5cGUuR3JpZCkgfSB9KVxyXG4gICAgcHVibGljIHNwYWNlWDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKirliJfooajpobnkuYvpl7RZ6Ze06ZqUICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuWIl+ihqOmhuVnpl7TpmpRcIiwgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudHlwZSA9PSBMaXN0VHlwZS5WZXJ0aWNhbCB8fCB0aGlzLnR5cGUgPT0gTGlzdFR5cGUuR3JpZCB9IH0pXHJcbiAgICBwdWJsaWMgc3BhY2VZOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKuS4iumXtOi3nSAqL1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgdG9vbHRpcDogXCLkuIrpl7Tot51cIiwgdmlzaWJsZSgpIHsgcmV0dXJuICh0aGlzLnR5cGUgPT0gTGlzdFR5cGUuVmVydGljYWwgfHwgdGhpcy50eXBlID09IExpc3RUeXBlLkdyaWQpIH0gfSlcclxuICAgIHB1YmxpYyBwYWRkaW5nX3RvcDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKirkuIvpl7Tot50gKi9cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIsIHRvb2x0aXA6IFwi5LiL6Ze06LedXCIsIHZpc2libGUoKSB7IHJldHVybiAodGhpcy50eXBlID09IExpc3RUeXBlLlZlcnRpY2FsIHx8IHRoaXMudHlwZSA9PSBMaXN0VHlwZS5HcmlkKSB9IH0pXHJcbiAgICBwdWJsaWMgcGFkZGluZ19idXR0b206IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5bem6Ze06LedICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuW3pumXtOi3nVwiLCB2aXNpYmxlKCkgeyByZXR1cm4gKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5Ib3Jpem9udGFsIHx8IHRoaXMudHlwZSA9PSBMaXN0VHlwZS5HcmlkKSB9IH0pXHJcbiAgICBwdWJsaWMgcGFkZGluZ19sZWZ0OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgX3BhZGRpbmc6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5Y+z6Ze06LedICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBcIuWPs+mXtOi3nVwiLCB2aXNpYmxlKCkgeyByZXR1cm4gKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5Ib3Jpem9udGFsIHx8IHRoaXMudHlwZSA9PSBMaXN0VHlwZS5HcmlkKSB9IH0pXHJcbiAgICBwdWJsaWMgcGFkZGluZ19yaWdodDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT0g5rua5Yqo5a655ZmoID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8qKuWIl+ihqOa7muWKqOWuueWZqCAqL1xyXG4gICAgcHVibGljIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xyXG4gICAgLyoqc2Nyb2xsVmlld+eahOWGheWuueWuueWZqCAqL1xyXG4gICAgcHJpdmF0ZSBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmc6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09IOWIl+ihqOmhuSA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8qKuWIl+ihqOmhueaVsOaNriAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtRGF0YUxpc3Q6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIC8qKuW6lOWIm+W7uueahOWunuS+i+aVsOmHjyAqL1xyXG4gICAgcHJpdmF0ZSBzcGF3bkNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5a2Y5pS+5YiX6KGo6aG55a6e5L6L55qE5pWw57uEICovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBBcnJheTxjYy5Ob2RlPiA9IFtdO1xyXG4gICAgLyoqaXRlbeeahOmrmOW6piAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqaXRlbeeahOWuveW6piAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICAvKirlrZjmlL7kuI3lho3kvb/nlKjkuK3nmoTliJfooajpobkgKi9cclxuICAgIHByaXZhdGUgaXRlbVBvb2w6IEFycmF5PGNjLk5vZGU+ID0gW107XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PSDorqHnrpflj4LmlbAgPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8qKui3neemu3Njcm9sbFZpZXfkuK3lv4PngrnnmoTot53nprvvvIzotoXov4fov5nkuKrot53nprvnmoRpdGVt5Lya6KKr6YeN572u77yM5LiA6Iis6K6+572u5Li6IHNjcm9sbFZJZXcuaGVpZ2h0LzIgKyBpdGVtLmhlaWd0LzIgKyBzcGFjZe+8jOWboOS4uui/meS4qui3neemu2l0ZW3mraPlpb3otoXlh7pzY3JvbGxWaWV35pi+56S66IyD5Zu0ICovXHJcbiAgICBwcml2YXRlIGhhbGZTY3JvbGxWaWV3OiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5LiK5LiA5qyhY29udGVudOeahFjlgLzvvIznlKjkuo7lkoznjrDlnKhjb250ZW5055qEWOWAvOavlOi+g++8jOW+l+WHuuaYr+WQkeW3pui/mOaYr+WQkeWPs+a7muWKqCAqL1xyXG4gICAgcHJpdmF0ZSBsYXN0Q29udGVudFBvc1g6IG51bWJlciA9IDA7XHJcbiAgICAvKirkuIrkuIDmrKFjb250ZW5055qEWeWAvO+8jOeUqOS6juWSjOeOsOWcqGNvbnRlbnTnmoRZ5YC85q+U6L6D77yM5b6X5Ye65piv5ZCR5LiK6L+Y5piv5ZCR5LiL5rua5YqoICovXHJcbiAgICBwcml2YXRlIGxhc3RDb250ZW50UG9zWTogbnVtYmVyID0gMDtcclxuICAgIC8qKue9keagvOihjOaVsCAqL1xyXG4gICAgcHJpdmF0ZSBncmlkUm93OiBudW1iZXIgPSAwO1xyXG4gICAgLyoq572R5qC85YiX5pWwICovXHJcbiAgICBwcml2YXRlIGdyaWRDb2w6IG51bWJlciA9IDA7XHJcbiAgICAvKirliLfmlrDml7bpl7TvvIzljZXkvY1zICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5Yi35paw6Ze06ZqU77yM5Y2V5L2NcyAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVJbnRlcnZhbDogbnVtYmVyID0gMC4xO1xyXG4gICAgLyoq5piv5ZCm5rua5Yqo5a655ZmoICovXHJcbiAgICBwcml2YXRlIGJTY3JvbGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKuWIt+aWsOeahOWHveaVsCAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVGdW46IEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkgeyB9O1xyXG5cclxuICAgIHByaXZhdGUgX3NlbGVjdGVkSXRlbTogYW55O1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgcHJpdmF0ZSBmaXhTaXplOiBjYy5SZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJMaXN0ID09PT5cIiwgIHRoaXMuc2Nyb2xsVmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUhlaWdodCA9IHRoaXMuaXRlbVJlbmRlci5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLml0ZW1SZW5kZXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuICAgICAgICB0aGlzLmJnID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudDtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYW5jaG9yWCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFuY2hvclkgPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ub2RlLm9uKFwic2Nyb2xsaW5nXCIsIHRoaXMub25TY3JvbGxpbmcsIHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5iZyAmJiB0aGlzLmF1dG9TaXplKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gMCAtIHRoaXMuYmcueDtcclxuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLmJnLnkgLSAwO1xyXG4gICAgICAgICAgICBsZXQgdyA9IHRoaXMuYmcud2lkdGggLSB0aGlzLm5vZGUud2lkdGggLSB4O1xyXG4gICAgICAgICAgICBsZXQgaCA9IHRoaXMuYmcuaGVpZ2h0IC0gdGhpcy5ub2RlLmhlaWdodCAtIHk7XHJcbiAgICAgICAgICAgIHRoaXMuZml4U2l6ZSA9IG5ldyBjYy5SZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5iZykgdGhpcy5iZy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmVuYWJsZWQgPSB0aGlzLmVuYWJsZWRTY3JvbGwgYXMgYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIl+ihqOaVsOaNriAo5YiX6KGo5pWw5o2u5aSN5Yi25L2/55So77yM5aaC5p6c5YiX6KGo5pWw5o2u5pS55Y+Y77yM5YiZ6ZyA6KaB6YeN5paw6K6+572u5LiA6YGN5pWw5o2uKVxyXG4gICAgICogQHBhcmFtIGl0ZW1EYXRhTGlzdCBpdGVt5pWw5o2u5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXREYXRhKGl0ZW1EYXRhTGlzdDogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2V0ZGF0YVwiLGl0ZW1EYXRhTGlzdCk7XHJcbiAgICAgICAgaWYoIXRoaXMuc2Nyb2xsVmlldykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXRlbURhdGFMaXN0ID0gaXRlbURhdGFMaXN0LnNsaWNlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9uZSkgdGhpcy5ub25lLmFjdGl2ZSA9IChpdGVtRGF0YUxpc3QubGVuZ3RoID09IDApO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9TaXplKSB0aGlzLnJlU2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZGF0YVByb3ZpZGVyKGRhdGE6IEFycmF5PGFueT4pIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkYXRhUHJvdmlkZXIoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbURhdGFMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVTaXplKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ub2RlLndpZHRoID0gdGhpcy5jb250ZW50LndpZHRoO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ub2RlLmhlaWdodCA9IHRoaXMuY29udGVudC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLmNvbnRlbnQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMuY29udGVudC53aWR0aDtcclxuXHJcbiAgICAgICAgbGV0IG1hc2s6IGNjLk5vZGUgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZXdcIik7XHJcbiAgICAgICAgbWFzay53aWR0aCA9IHRoaXMuY29udGVudC53aWR0aDtcclxuICAgICAgICBtYXNrLmhlaWdodCA9IHRoaXMuY29udGVudC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmcud2lkdGggPSB0aGlzLmNvbnRlbnQud2lkdGggKyB0aGlzLmZpeFNpemUueCArIHRoaXMuZml4U2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5iZy5oZWlnaHQgPSB0aGlzLmNvbnRlbnQuaGVpZ2h0ICsgdGhpcy5maXhTaXplLnkgKyB0aGlzLmZpeFNpemUuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LndpZHRoID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5yZVNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirorqHnrpfliJfooajnmoTlkITpobnlj4LmlbAgKi9cclxuICAgIHByaXZhdGUgY291bnRMaXN0UGFyYW0oKSB7XHJcbiAgICAgICAgbGV0IGRhdGFMZW4gPSB0aGlzLml0ZW1EYXRhTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5WZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuaG9yaXpvbnRhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcudmVydGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQud2lkdGggPSB0aGlzLmNvbnRlbnQucGFyZW50LndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuaGVpZ2h0ID0gZGF0YUxlbiAqIHRoaXMuaXRlbUhlaWdodCArIChkYXRhTGVuIC0gMSkgKiB0aGlzLnNwYWNlWSArIHRoaXMucGFkZGluZ190b3AgKyB0aGlzLnBhZGRpbmdfYnV0dG9tO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduQ291bnQgPSBNYXRoLnJvdW5kKHRoaXMuc2Nyb2xsVmlldy5ub2RlLmhlaWdodCAvICh0aGlzLml0ZW1IZWlnaHQgKyB0aGlzLnNwYWNlWSkpICsgMjsgLy/orqHnrpfliJvlu7rnmoRpdGVt5a6e5L6L5pWw6YeP77yM5q+U5b2T5YmNc2Nyb2xsVmlld+WuueWZqOiDveaUvuS4i+eahGl0ZW3mlbDph4/lho3liqDkuIoy5LiqXHJcbiAgICAgICAgICAgIHRoaXMuaGFsZlNjcm9sbFZpZXcgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5oZWlnaHQgLyAyICsgdGhpcy5pdGVtSGVpZ2h0IC8gMiArIHRoaXMuc3BhY2VZOyAvL+iuoeeul2J1ZmZlclpvbmXvvIxpdGVt55qE5pi+56S66IyD5Zu0XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRnVuID0gdGhpcy51cGRhdGVWO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IExpc3RUeXBlLkhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3Lmhvcml6b250YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcudmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LndpZHRoID0gZGF0YUxlbiAqIHRoaXMuaXRlbVdpZHRoICsgKGRhdGFMZW4gLSAxKSAqIHRoaXMuc3BhY2VYICsgdGhpcy5wYWRkaW5nX2xlZnQgKyB0aGlzLnBhZGRpbmdfcmlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQgPSB0aGlzLmNvbnRlbnQucGFyZW50LmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5zcGF3bkNvdW50ID0gTWF0aC5yb3VuZCh0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aCAvICh0aGlzLml0ZW1XaWR0aCArIHRoaXMuc3BhY2VYKSkgKyAyO1xyXG4gICAgICAgICAgICB0aGlzLmhhbGZTY3JvbGxWaWV3ID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUud2lkdGggLyAyICsgdGhpcy5pdGVtV2lkdGggLyAyICsgdGhpcy5zcGFjZVg7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRnVuID0gdGhpcy51ZHBhdGVIO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IExpc3RUeXBlLkdyaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzID09IFN0YXJ0QXhpc1R5cGUuVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ob3Jpem9udGFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcudmVydGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LndpZHRoID0gdGhpcy5jb250ZW50LnBhcmVudC53aWR0aDtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6cbGVmdOWSjHJpZ2h06Ze06ZqU6L+H5aSn77yM5a+86Ie05pS+5LiN5LiL5LiA5LiqaXRlbe+8jOWImWxlZnTlkoxyaWdodOmDveiuvue9ruS4ujDvvIznm7jlvZPkuo7kuI3nlJ/mlYhcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZGRpbmdfbGVmdCArIHRoaXMucGFkZGluZ19yaWdodCArIHRoaXMuaXRlbVdpZHRoICsgdGhpcy5zcGFjZVggPiB0aGlzLmNvbnRlbnQud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZGRpbmdfbGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWRkaW5nX3JpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicGFkZGluZ19sZWZ05oiWcGFkZGluZ19yaWdodOi/h+Wkp1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRDb2wgPSBNYXRoLmZsb29yKCh0aGlzLmNvbnRlbnQud2lkdGggLSB0aGlzLnBhZGRpbmdfbGVmdCAtIHRoaXMucGFkZGluZ19yaWdodCkgLyAodGhpcy5pdGVtV2lkdGggKyB0aGlzLnNwYWNlWCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkUm93ID0gTWF0aC5jZWlsKGRhdGFMZW4gLyB0aGlzLmdyaWRDb2wpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmhlaWdodCA9IHRoaXMuZ3JpZFJvdyAqIHRoaXMuaXRlbUhlaWdodCArICh0aGlzLmdyaWRSb3cgLSAxKSAqIHRoaXMuc3BhY2VZICsgdGhpcy5wYWRkaW5nX3RvcCArIHRoaXMucGFkZGluZ19idXR0b207XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduQ291bnQgPSBNYXRoLnJvdW5kKHRoaXMuc2Nyb2xsVmlldy5ub2RlLmhlaWdodCAvICh0aGlzLml0ZW1IZWlnaHQgKyB0aGlzLnNwYWNlWSkpICogdGhpcy5ncmlkQ29sICsgdGhpcy5ncmlkQ29sICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFsZlNjcm9sbFZpZXcgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5oZWlnaHQgLyAyICsgdGhpcy5pdGVtSGVpZ2h0IC8gMiArIHRoaXMuc3BhY2VZO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGdW4gPSB0aGlzLnVwZGF0ZUdyaWRfVjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0QXhpcyA9PSBTdGFydEF4aXNUeXBlLkhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ob3Jpem9udGFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy52ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy/orqHnrpfpq5jpl7TpmpRcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQgPSB0aGlzLmNvbnRlbnQucGFyZW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6cbGVmdOWSjHJpZ2h06Ze06ZqU6L+H5aSn77yM5a+86Ie05pS+5LiN5LiL5LiA5LiqaXRlbe+8jOWImWxlZnTlkoxyaWdodOmDveiuvue9ruS4ujDvvIznm7jlvZPkuo7kuI3nlJ/mlYhcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZGRpbmdfdG9wICsgdGhpcy5wYWRkaW5nX2J1dHRvbSArIHRoaXMuaXRlbUhlaWdodCArIHRoaXMuc3BhY2VZID4gdGhpcy5jb250ZW50LmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFkZGluZ190b3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFkZGluZ19idXR0b20gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJwYWRkaW5nX3RvcOaIlnBhZGRpbmdfYnV0dG9t6L+H5aSnXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFJvdyA9IE1hdGguZmxvb3IoKHRoaXMuY29udGVudC5oZWlnaHQgLSB0aGlzLnBhZGRpbmdfdG9wIC0gdGhpcy5wYWRkaW5nX2J1dHRvbSkgLyAodGhpcy5pdGVtSGVpZ2h0ICsgdGhpcy5zcGFjZVkpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZENvbCA9IE1hdGguY2VpbChkYXRhTGVuIC8gdGhpcy5ncmlkUm93KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC53aWR0aCA9IHRoaXMuZ3JpZENvbCAqIHRoaXMuaXRlbVdpZHRoICsgKHRoaXMuZ3JpZENvbCAtIDEpICogdGhpcy5zcGFjZVggKyB0aGlzLnBhZGRpbmdfbGVmdCArIHRoaXMucGFkZGluZ19yaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Db3VudCA9IE1hdGgucm91bmQodGhpcy5zY3JvbGxWaWV3Lm5vZGUud2lkdGggLyAodGhpcy5pdGVtV2lkdGggKyB0aGlzLnNwYWNlWCkpICogdGhpcy5ncmlkUm93ICsgdGhpcy5ncmlkUm93ICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFsZlNjcm9sbFZpZXcgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aCAvIDIgKyB0aGlzLml0ZW1XaWR0aCAvIDIgKyB0aGlzLnNwYWNlWDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRnVuID0gdGhpcy51cGRhdGVHcmlkX0g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rliJfooaggXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRJbmRleCDotbflp4vmmL7npLrnmoTmlbDmja7ntKLlvJUgMOihqOekuuesrOS4gOmhuVxyXG4gICAgICogQHBhcmFtIG9mZnNldCAgICAgc2Nyb2xsVmlld+WBj+enu+mHj1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZUxpc3Qoc3RhcnRJbmRleDogbnVtYmVyLCBvZmZzZXQ6IGNjLlZlYzIpIHtcclxuICAgICAgICAvL+W9k+mcgOimgeaYvuekuueahOaVsOaNrumVv+W6piA+IOiZmuaLn+WIl+ihqOmVv+W6pu+8jCDliKDpmaTmnIDmnKvlsL7lh6DkuKrmlbDmja7ml7bvvIzliJfooajpnIDopoHph43nva7kvY3nva7liLBzY3JvbGxWaWV35pyA5bqV56uvXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbURhdGFMaXN0Lmxlbmd0aCA+IHRoaXMuc3Bhd25Db3VudCAmJiAoc3RhcnRJbmRleCArIHRoaXMuc3Bhd25Db3VudCAtIDEpID49IHRoaXMuaXRlbURhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdGFydEluZGV4ID0gdGhpcy5pdGVtRGF0YUxpc3QubGVuZ3RoIC0gdGhpcy5zcGF3bkNvdW50O1xyXG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLnNjcm9sbFZpZXcuZ2V0TWF4U2Nyb2xsT2Zmc2V0KCk7XHJcbiAgICAgICAgICAgIC8v5b2T6ZyA6KaB5pi+56S655qE5pWw5o2u6ZW/5bqmIDw9IOiZmuaLn+WIl+ihqOmVv+W6pu+8jCDpmpDol4/lpJrkvZnnmoTomZrmi5/liJfooajpobkgXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLml0ZW1EYXRhTGlzdC5sZW5ndGggPD0gdGhpcy5zcGF3bkNvdW50KSB7XHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Bhd25Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAvL+mcgOimgeaYvuekuueahOaVsOaNrue0ouW8leWcqOaVsOaNruiMg+WbtOWGhe+8jOWImWl0ZW3lrp7kvovmmL7npLrlh7rmnaVcclxuICAgICAgICAgICAgaWYgKGkgKyBzdGFydEluZGV4IDwgdGhpcy5pdGVtRGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtTGlzdFtpXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuZ2V0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuaXRlbUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+mcgOimgeaYvuekuueahOaVsOaNrue0ouW8lei2hei/h+S6huaVsOaNruiMg+WbtO+8jOWImWl0ZW3lrp7kvovpmpDol4/otbfmnaVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vaXRlbeWunuS+i+aVsOmHjyA+IOmcgOimgeaYvuekuueahOaVsOaNrumHj1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUxpc3QubGVuZ3RoID4gKHRoaXMuaXRlbURhdGFMaXN0Lmxlbmd0aCAtIHN0YXJ0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuaXRlbUxpc3QucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1Qb29sLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW1SZW5kZXI6IEl0ZW1SZW5kZXIgPSBpdGVtLmdldENvbXBvbmVudChJdGVtUmVuZGVyKTtcclxuICAgICAgICAgICAgaXRlbVJlbmRlci5pdGVtSW5kZXggPSBpICsgc3RhcnRJbmRleDtcclxuICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhID0gdGhpcy5pdGVtRGF0YUxpc3RbaSArIHN0YXJ0SW5kZXhdO1xyXG4gICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGFDaGFuZ2VkKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IExpc3RUeXBlLlZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WboOS4umNvbnRlbnTnmoTplJrngrlY5pivMO+8jOaJgOS7pWl0ZW3nmoR45YC85pivY29udGVudC53aXRoLzLooajnpLrlsYXkuK3vvIzplJrngrlZ5pivMe+8jOaJgOS7pWl0ZW3nmoR55YC85LuOY29udGVudOmhtumDqOWQkeS4i+aYrzDliLDotJ/ml6DnqbfjgILmiYDku6VpdGVtLnk9IC1pdGVtLmhlaWdodC8y5pe277yM5piv5ZyoY29udGVudOeahOmhtumDqOOAglxyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbih0aGlzLmNvbnRlbnQud2lkdGggLyAyLCAtaXRlbS5oZWlnaHQgKiAoMC41ICsgaSArIHN0YXJ0SW5kZXgpIC0gdGhpcy5zcGFjZVkgKiAoaSArIHN0YXJ0SW5kZXgpIC0gdGhpcy5wYWRkaW5nX3RvcCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IExpc3RUeXBlLkhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24oaXRlbS53aWR0aCAqICgwLjUgKyBpICsgc3RhcnRJbmRleCkgKyB0aGlzLnNwYWNlWCAqIChpICsgc3RhcnRJbmRleCkgKyB0aGlzLnBhZGRpbmdfbGVmdCwgLXRoaXMuY29udGVudC5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gTGlzdFR5cGUuR3JpZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzID09IFN0YXJ0QXhpc1R5cGUuVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcigoaSArIHN0YXJ0SW5kZXgpIC8gdGhpcy5ncmlkQ29sKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sID0gKGkgKyBzdGFydEluZGV4KSAlIHRoaXMuZ3JpZENvbDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKGl0ZW0ud2lkdGggKiAoMC41ICsgY29sKSArIHRoaXMuc3BhY2VYICogY29sICsgdGhpcy5wYWRkaW5nX2xlZnQsIC1pdGVtLmhlaWdodCAqICgwLjUgKyByb3cpIC0gdGhpcy5zcGFjZVkgKiByb3cgLSB0aGlzLnBhZGRpbmdfdG9wKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhcnRBeGlzID09IFN0YXJ0QXhpc1R5cGUuSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSAoaSArIHN0YXJ0SW5kZXgpICUgdGhpcy5ncmlkUm93O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2wgPSBNYXRoLmZsb29yKChpICsgc3RhcnRJbmRleCkgLyB0aGlzLmdyaWRSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24oaXRlbS53aWR0aCAqICgwLjUgKyBjb2wpICsgdGhpcy5zcGFjZVggKiBjb2wgKyB0aGlzLnBhZGRpbmdfbGVmdCwgLWl0ZW0uaGVpZ2h0ICogKDAuNSArIHJvdykgLSB0aGlzLnNwYWNlWSAqIHJvdyAtIHRoaXMucGFkZGluZ190b3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5LiA5Liq5YiX6KGo6aG5ICovXHJcbiAgICBwcml2YXRlIGdldEl0ZW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbVBvb2wubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1SZW5kZXIpXHJcbiAgICAgICAgICAgIGl0ZW0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLml0ZW1DbGlja0hhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0SXRlbVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVBvb2wucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbUNsaWNrSGFuZGxlcihldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIGNjLk5vZGUpLmdldENvbXBvbmVudChJdGVtUmVuZGVyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0ZW1DbGlja0hhbmRsZXIgXCIsIGl0ZW0uaXRlbUluZGV4KTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSBpdGVtLmRhdGE7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGl0ZW0uaXRlbUluZGV4O1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBMRXZlbnQoTEV2ZW50LklURU1fQ0xJQ0ssIGl0ZW0uaXRlbUluZGV4KSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5iU2Nyb2xsaW5nID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy51cGRhdGVUaW1lciA8IHRoaXMudXBkYXRlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmJTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsaW5nKCkge1xyXG4gICAgICAgIHRoaXMuYlNjcm9sbGluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Z6C55u05o6S5YiXICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVYoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtTGlzdDtcclxuICAgICAgICBsZXQgaXRlbTtcclxuICAgICAgICBsZXQgYnVmZmVyWm9uZSA9IHRoaXMuaGFsZlNjcm9sbFZpZXc7XHJcbiAgICAgICAgbGV0IGlzVXAgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55ID4gdGhpcy5sYXN0Q29udGVudFBvc1k7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLml0ZW1IZWlnaHQgKyB0aGlzLnNwYWNlWSkgKiBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGxldCB2aWV3UG9zID0gdGhpcy5nZXRQb3NpdGlvbkluVmlldyhpdGVtKTtcclxuICAgICAgICAgICAgaWYgKGlzVXApIHtcclxuICAgICAgICAgICAgICAgIC8vaXRlbeS4iua7keaXtu+8jOi2heWHuuS6hnNjcm9sbFZpZXfkuIrovrnnlYzvvIzlsIZpdGVt56e75Yqo5Yiw5LiL5pa55aSN55So77yMaXRlbeenu+WKqOWIsOS4i+aWueeahOS9jee9ruW/hemhu+S4jei2hei/h2NvbnRlbnTnmoTkuIvovrnnlYxcclxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgPiBidWZmZXJab25lICYmIGl0ZW0ueSAtIG9mZnNldCAtIHRoaXMucGFkZGluZ19idXR0b20gPiAtdGhpcy5jb250ZW50LmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtUmVuZGVyOiBJdGVtUmVuZGVyID0gaXRlbS5nZXRDb21wb25lbnQoSXRlbVJlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW1SZW5kZXIuaXRlbUluZGV4ICsgaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YSA9IHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhLmluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBpdGVtLnkgLSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pdGVt5LiL5ruR5pe277yM6LaF5Ye65LqGc2Nyb2xsVmlld+S4i+i+ueeVjO+8jOWwhml0ZW3np7vliqjliLDkuIrmlrnlpI3nlKjvvIxpdGVt56e75Yqo5Yiw5LiK5pa555qE5L2N572u5b+F6aG75LiN6LaF6L+HY29udGVudOeahOS4iui+ueeVjFxyXG4gICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueSArIGl0ZW0uaGVpZ2h0IDwgLWJ1ZmZlclpvbmUgJiYgaXRlbS55ICsgb2Zmc2V0ICsgdGhpcy5wYWRkaW5nX3RvcCA8IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLotoXlh7rkuoZzY3JvbGxWaWV35LiL6L6555WMXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogSXRlbVJlbmRlciA9IGl0ZW0uZ2V0Q29tcG9uZW50KEl0ZW1SZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSW5kZXggPSBpdGVtUmVuZGVyLml0ZW1JbmRleCAtIGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLml0ZW1JbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGEgPSB0aGlzLml0ZW1EYXRhTGlzdFtpdGVtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YS5pbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gaXRlbS55ICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmsLTlubPmjpLliJcgKi9cclxuICAgIHByaXZhdGUgdWRwYXRlSCgpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1MaXN0O1xyXG4gICAgICAgIGxldCBpdGVtO1xyXG4gICAgICAgIGxldCBidWZmZXJab25lID0gdGhpcy5oYWxmU2Nyb2xsVmlldztcclxuICAgICAgICBsZXQgaXNSaWdodCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnggPiB0aGlzLmxhc3RDb250ZW50UG9zWDtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuaXRlbVdpZHRoICsgdGhpcy5zcGFjZVgpICogaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdmlld1BvcyA9IHRoaXMuZ2V0UG9zaXRpb25JblZpZXcoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChpc1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2l0ZW3lj7Pmu5Hml7bvvIzotoXlh7rkuoZzY3JvbGxWaWV35Y+z6L6555WM77yM5bCGaXRlbeenu+WKqOWIsOW3puaWueWkjeeUqO+8jGl0ZW3np7vliqjliLDlt6bmlrnnmoTkvY3nva7lv4XpobvkuI3otoXov4djb250ZW5055qE5bem6L6555WMXHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy54ID4gYnVmZmVyWm9uZSAmJiBpdGVtLnggLSBvZmZzZXQgLSB0aGlzLnBhZGRpbmdfbGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogSXRlbVJlbmRlciA9IGl0ZW0uZ2V0Q29tcG9uZW50KEl0ZW1SZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSW5kZXggPSBpdGVtUmVuZGVyLml0ZW1JbmRleCAtIGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLml0ZW1JbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGEgPSB0aGlzLml0ZW1EYXRhTGlzdFtpdGVtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnggPSBpdGVtLnggLSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2l0ZW3lt6bmu5Hml7bvvIzotoXlh7rkuoZzY3JvbGxWaWV35bem6L6555WM77yM5bCGaXRlbeenu+WKqOWIsOWPs+aWueWkjeeUqO+8jGl0ZW3np7vliqjliLDlj7PmlrnnmoTkvY3nva7lv4XpobvkuI3otoXov4djb250ZW5055qE5Y+z6L6555WMXHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy54IDwgLWJ1ZmZlclpvbmUgJiYgaXRlbS54ICsgb2Zmc2V0ICsgdGhpcy5wYWRkaW5nX3JpZ2h0IDwgdGhpcy5jb250ZW50LndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1SZW5kZXI6IEl0ZW1SZW5kZXIgPSBpdGVtLmdldENvbXBvbmVudChJdGVtUmVuZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUluZGV4ID0gaXRlbVJlbmRlci5pdGVtSW5kZXggKyBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5pdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhID0gdGhpcy5pdGVtRGF0YUxpc3RbaXRlbUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS54ID0gaXRlbS54ICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NYID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueDtcclxuICAgIH1cclxuXHJcbiAgICAvKirnvZHmoLzlnoLnm7TmjpLliJcgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlR3JpZF9WKCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbUxpc3Q7XHJcbiAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGU7XHJcbiAgICAgICAgbGV0IGJ1ZmZlclpvbmUgPSB0aGlzLmhhbGZTY3JvbGxWaWV3O1xyXG4gICAgICAgIGxldCBpc1VwID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueSA+IHRoaXMubGFzdENvbnRlbnRQb3NZO1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5pdGVtSGVpZ2h0ICsgdGhpcy5zcGFjZVkpICogKHRoaXMuc3Bhd25Db3VudCAvIHRoaXMuZ3JpZENvbCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGxldCB2aWV3UG9zID0gdGhpcy5nZXRQb3NpdGlvbkluVmlldyhpdGVtKTtcclxuICAgICAgICAgICAgaWYgKGlzVXApIHtcclxuICAgICAgICAgICAgICAgIC8vaXRlbeS4iua7keaXtu+8jOi2heWHuuS6hnNjcm9sbFZpZXfkuIrovrnnlYzvvIzlsIZpdGVt56e75Yqo5Yiw5LiL5pa55aSN55So77yMaXRlbeenu+WKqOWIsOS4i+aWueeahOS9jee9ruW/hemhu+S4jei2hei/h2NvbnRlbnTnmoTkuIvovrnnlYxcclxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgPiBidWZmZXJab25lICYmIGl0ZW0ueSAtIG9mZnNldCAtIHRoaXMucGFkZGluZ19idXR0b20gPiAtdGhpcy5jb250ZW50LmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtUmVuZGVyOiBJdGVtUmVuZGVyID0gaXRlbS5nZXRDb21wb25lbnQoSXRlbVJlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW1SZW5kZXIuaXRlbUluZGV4ICsgKHRoaXMuc3Bhd25Db3VudCAvIHRoaXMuZ3JpZENvbCkgKiB0aGlzLmdyaWRDb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBpdGVtLnkgLSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGEgPSB0aGlzLml0ZW1EYXRhTGlzdFtpdGVtSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnkgPSBpdGVtLnkgLSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuaXRlbUluZGV4ID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHsvL2l0ZW3kuIvmu5Hml7bvvIzotoXlh7rkuoZzY3JvbGxWaWV35LiL6L6555WM77yM5bCGaXRlbeenu+WKqOWIsOS4iuaWueWkjeeUqO+8jGl0ZW3np7vliqjliLDkuIrmlrnnmoTkvY3nva7lv4XpobvkuI3otoXov4djb250ZW5055qE5LiK6L6555WMXHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy55IDwgLWJ1ZmZlclpvbmUgJiYgaXRlbS55ICsgb2Zmc2V0ICsgdGhpcy5wYWRkaW5nX3RvcCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogSXRlbVJlbmRlciA9IGl0ZW0uZ2V0Q29tcG9uZW50KEl0ZW1SZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSW5kZXggPSBpdGVtUmVuZGVyLml0ZW1JbmRleCAtICh0aGlzLnNwYXduQ291bnQgLyB0aGlzLmdyaWRDb2wpICogdGhpcy5ncmlkQ29sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1EYXRhTGlzdFtpdGVtSW5kZXhdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gaXRlbS55ICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLml0ZW1JbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhID0gdGhpcy5pdGVtRGF0YUxpc3RbaXRlbUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS55ID0gaXRlbS55ICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLml0ZW1JbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0Q29udGVudFBvc1kgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKue9keagvOawtOW5s+aOkuWIlyAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVHcmlkX0goKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtTGlzdDtcclxuICAgICAgICBsZXQgaXRlbTtcclxuICAgICAgICBsZXQgYnVmZmVyWm9uZSA9IHRoaXMuaGFsZlNjcm9sbFZpZXc7XHJcbiAgICAgICAgbGV0IGlzUmlnaHQgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC54ID4gdGhpcy5sYXN0Q29udGVudFBvc1g7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLml0ZW1XaWR0aCArIHRoaXMuc3BhY2VYKSAqICh0aGlzLnNwYXduQ291bnQgLyB0aGlzLmdyaWRSb3cpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdmlld1BvcyA9IHRoaXMuZ2V0UG9zaXRpb25JblZpZXcoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChpc1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2l0ZW3lj7Pmu5Hml7bvvIzotoXlh7rkuoZzY3JvbGxWaWV35Y+z6L6555WM77yM5bCGaXRlbeenu+WKqOWIsOW3puaWueWkjeeUqO+8jGl0ZW3np7vliqjliLDlt6bmlrnnmoTkvY3nva7lv4XpobvkuI3otoXov4djb250ZW5055qE5bem6L6555WMXHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy54ID4gYnVmZmVyWm9uZSAmJiBpdGVtLnggLSBvZmZzZXQgLSB0aGlzLnBhZGRpbmdfbGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJlbmRlcjogSXRlbVJlbmRlciA9IGl0ZW0uZ2V0Q29tcG9uZW50KEl0ZW1SZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSW5kZXggPSBpdGVtUmVuZGVyLml0ZW1JbmRleCAtICh0aGlzLnNwYXduQ291bnQgLyB0aGlzLmdyaWRSb3cpICogdGhpcy5ncmlkUm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1EYXRhTGlzdFtpdGVtSW5kZXhdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS54ID0gaXRlbS54IC0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLml0ZW1JbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhID0gdGhpcy5pdGVtRGF0YUxpc3RbaXRlbUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5kYXRhQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS54ID0gaXRlbS54IC0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyLml0ZW1JbmRleCA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2l0ZW3lt6bmu5Hml7bvvIzotoXlh7rkuoZzY3JvbGxWaWV35bem6L6555WM77yM5bCGaXRlbeenu+WKqOWIsOWPs+aWueWkjeeUqO+8jGl0ZW3np7vliqjliLDlj7PmlrnnmoTkvY3nva7lv4XpobvkuI3otoXov4djb250ZW5055qE5Y+z6L6555WMXHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy54IDwgLWJ1ZmZlclpvbmUgJiYgaXRlbS54ICsgb2Zmc2V0ICsgdGhpcy5wYWRkaW5nX3JpZ2h0IDwgdGhpcy5jb250ZW50LndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1SZW5kZXI6IEl0ZW1SZW5kZXIgPSBpdGVtLmdldENvbXBvbmVudChJdGVtUmVuZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUluZGV4ID0gaXRlbVJlbmRlci5pdGVtSW5kZXggKyAodGhpcy5zcGF3bkNvdW50IC8gdGhpcy5ncmlkUm93KSAqIHRoaXMuZ3JpZFJvdztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtRGF0YUxpc3RbaXRlbUluZGV4XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGl0ZW0ueCArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5pdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YSA9IHRoaXMuaXRlbURhdGFMaXN0W2l0ZW1JbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIuZGF0YUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ueCA9IGl0ZW0ueCArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlci5pdGVtSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NYID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bpgInkuK3nmoTop4blm74qL1xyXG4gICAgcHVibGljIGdldFNlbGVjdGVkSXRlbXJhbmRlcigpOmNjLk5vZGUge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4IDwgMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGl0ZW1SOiBJdGVtUmVuZGVyO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5jb250ZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGl0ZW1SID0gaXRlbS5nZXRDb21wb25lbnQoSXRlbVJlbmRlcik7XHJcbiAgICAgICAgICAgIGlmIChpdGVtUiAmJiBpdGVtUi5pdGVtSW5kZXggPT0gdGhpcy5zZWxlY3RlZEluZGV4KSByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+WaXRlbeWcqHNjcm9sbFZpZXfnmoTlsYDpg6jlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgZ2V0UG9zaXRpb25JblZpZXcoaXRlbSkge1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGl0ZW0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpdGVtLnBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgdmlld1BvcyA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgICAgICByZXR1cm4gdmlld1BvcztcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bliJfooajmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXRMaXN0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtRGF0YUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlop7liqDkuIDpobnmlbDmja7liLDliJfooajnmoTmnKvlsL5cclxuICAgICAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkSXRlbShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLml0ZW1EYXRhTGlzdC5wdXNoKGRhdGEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aKe5Yqg5LiA6aG55pWw5o2u5Yiw5YiX6KGo5oyH5a6a5L2N572uXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggICDkvY3nva7vvIww6KGo56S656ysMemhuVxyXG4gICAgICogQHBhcmFtIGRhdGEgIOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkSXRlbUF0KGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1EYXRhTGlzdFtpbmRleF0gIT0gbnVsbCB8fCB0aGlzLml0ZW1EYXRhTGlzdC5sZW5ndGggPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRGF0YUxpc3Quc3BsaWNlKGluZGV4LCAxLCBkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5LiA6aG55pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gaW5kZXgg5Yig6Zmk6aG555qE5L2N572uICww6KGo56S656ysMemhuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlSXRlbShpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbURhdGFMaXN0W2luZGV4XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbURhdGFMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaUueWPmOS4gOmhueaVsOaNrlxyXG4gICAgICogQHBhcmFtIGluZGV4ICAg5L2N572uLDDooajnpLrnrKwx6aG5XHJcbiAgICAgKiBAcGFyYW0gZGF0YSAg5pu/5o2i55qE5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjaGFuZ2VJdGVtKGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1EYXRhTGlzdFtpbmRleF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1EYXRhTGlzdFtpbmRleF0gPSBkYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W56ys5LiA5LiqSXRlbeeahOS9jee9riAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb250ZW50KCkge1xyXG4gICAgICAgIC8v5pi+56S65YiX6KGo5a6e5L6L5Li6MOS4qlxyXG4gICAgICAgIGlmICh0aGlzLml0ZW1MaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRMaXN0UGFyYW0oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVMaXN0KDAsIG5ldyBjYy5WZWMyKDAsIDApKTtcclxuICAgICAgICAgICAgLy/mmL7npLrliJfooajnmoTlrp7kvovkuI3kuLow5Liq77yM5YiZ6ZyA6KaB6YeN5paw5o6S5YiXaXRlbeWunuS+i+aVsOe7hFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gTGlzdFR5cGUuVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3Quc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi55IC0gYS55O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IExpc3RUeXBlLkhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3Quc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS54IC0gYi54O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IExpc3RUeXBlLkdyaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyA9PSBTdGFydEF4aXNUeXBlLlZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS54IC0gYi54O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3Quc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIueSAtIGEueTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGFydEF4aXMgPT0gU3RhcnRBeGlzVHlwZS5Ib3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi55IC0gYS55O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3Quc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEueCAtIGIueDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3VudExpc3RQYXJhbSgpO1xyXG5cclxuICAgICAgICAgICAgLy/ojrflj5bnrKzkuIDkuKppdGVt5a6e5L6L6ZyA6KaB5pi+56S655qE5pWw5o2u57Si5byVXHJcbiAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5pdGVtTGlzdFswXS5nZXRDb21wb25lbnQoSXRlbVJlbmRlcikuaXRlbUluZGV4O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5HcmlkICYmIHRoaXMuc3RhcnRBeGlzID09IFN0YXJ0QXhpc1R5cGUuVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggKz0gKHN0YXJ0SW5kZXggKyB0aGlzLnNwYXduQ291bnQpICUgdGhpcy5ncmlkQ29sO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBMaXN0VHlwZS5HcmlkICYmIHRoaXMuc3RhcnRBeGlzID09IFN0YXJ0QXhpc1R5cGUuSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCArPSAoc3RhcnRJbmRleCArIHRoaXMuc3Bhd25Db3VudCkgJSB0aGlzLmdyaWRSb3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZ2V0U2Nyb2xsT2Zmc2V0KCnlkoxzY3JvbGxUb09mZnNldCgp55qEeOWAvOaYr+ebuOWPjeeahFxyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0OiBjYy5WZWMyID0gdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpO1xyXG4gICAgICAgICAgICBvZmZzZXQueCA9IC0gb2Zmc2V0Lng7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxpc3Qoc3RhcnRJbmRleCwgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEl0ZW0oKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumUgOavgSAqL1xyXG4gICAgcHVibGljIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvL+a4heeQhuWIl+ihqOmhuVxyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLml0ZW1MaXN0Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuaXRlbUxpc3RbaV0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0W2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZW1MaXN0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgLy/muIXnkIblr7nosaHmsaBcclxuICAgICAgICBsZW4gPSB0aGlzLml0ZW1Qb29sLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuaXRlbVBvb2xbaV0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1Qb29sW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZW1Qb29sLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgLy/muIXnkIbliJfooajmlbDmja5cclxuICAgICAgICB0aGlzLml0ZW1EYXRhTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/managers/PopupManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3845xrMydKz5xCLLR7o9Gs', 'PopupManager');
// Script/lightUI/managers/PopupManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupInfo = void 0;
var Dictionary_1 = require("../utils/Dictionary");
var LightUI_1 = require("../LightUI");
var Draw_1 = require("../utils/Draw");
var LEvent_1 = require("../events/LEvent");
var PopupManager = /** @class */ (function () {
    function PopupManager() {
        this._infos = new Dictionary_1.default();
    }
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
    PopupManager.prototype.addPopUp = function (window, parent, closeClickOut, modal, modalColor, modalAlpha) {
        if (parent === void 0) { parent = null; }
        if (closeClickOut === void 0) { closeClickOut = false; }
        if (modal === void 0) { modal = false; }
        if (modalColor === void 0) { modalColor = null; }
        if (modalAlpha === void 0) { modalAlpha = 0; }
        if (closeClickOut == true)
            modal = true;
        modalColor = modalColor ? modalColor : "#000000";
        if (!parent)
            parent = LightUI_1.default.layerManager.popupLayer;
        if (this._infos.get(window)) {
            console.log("弹出面板已经存在");
            return;
        }
        var info = new PopupInfo(window, parent, closeClickOut, modal, modalColor, modalAlpha);
        this._infos.set(window, info);
        // bg_mask
        if (modal) {
            var sp = Draw_1.default.drawRect(new cc.Rect(0, 0, LightUI_1.default.root.width, LightUI_1.default.root.height), modalColor);
            sp.opacity = modalAlpha;
            console.log("弹出面板", sp.opacity);
            parent.addChild(sp);
            parent.addChild(window);
            info.modal_bg = sp;
        }
        else {
            var mask = window.getChildByName("bg_mask");
            if (mask) {
                info.modal_bg = mask;
                mask.addComponent(cc.BlockInputEvents);
            }
            parent.addChild(window);
            console.log("弹出面板");
        }
        window.dispatchEvent(new LEvent_1.default(LEvent_1.default.SHOW));
        if (closeClickOut) {
            // console.log("关闭面板",LightUI.root.width,LightUI.root.height);
            // let mask:cc.Node = window.getChildByName("bg_mask");
            // if(mask) {
            // 	mask.on(cc.Node.EventType.TOUCH_START,info.onCloseClickOut,info);
            // }
            if (info.modal_bg)
                info.modal_bg.on(cc.Node.EventType.TOUCH_START, info.onCloseClickOut, info);
        }
    };
    PopupManager.prototype.autoClose = function (window, delay) {
        var _this = this;
        if (delay != 0) {
            var info_1 = this._infos.get(window);
            var index = setTimeout(function () {
                if (!info_1)
                    return;
                _this.removePopUp(window);
                window.dispatchEvent(new cc.Event("close", false));
            }, delay);
            info_1.interval = index;
        }
    };
    PopupManager.prototype.removePopUp = function (popUp) {
        var info = this._infos.get(popUp);
        if (!info)
            return;
        var sp = info.modal_bg;
        this._infos.remove(popUp);
        LightUI_1.default.root.off(cc.Node.EventType.TOUCH_START, info.onCloseClickOut);
        if (popUp.parent) {
            popUp.parent.removeChild(popUp, false);
        }
        if (sp && sp.parent && info.modal == true) {
            sp.parent.removeChild(sp, false);
        }
        popUp.dispatchEvent(new cc.Event("close", false));
        return sp;
    };
    PopupManager.prototype.centerPopUp = function (popUp, rect) {
        if (rect === void 0) { rect = null; }
        if (rect != null) {
            popUp.x = (rect.width - popUp.width) / 2;
            popUp.y = (rect.height - popUp.height) / 2;
        }
        else {
            if (popUp.parent.width == 0 && popUp.parent.height == 0) {
                popUp.x = (LightUI_1.default.root.width - popUp.width) / 2;
                popUp.y = (LightUI_1.default.root.height - popUp.height) / 2;
            }
            else {
                popUp.x = (popUp.parent.width - popUp.width) / 2;
                popUp.y = (popUp.parent.height - popUp.height) / 2;
            }
        }
    };
    PopupManager.bringToFront = function (popUp) {
    };
    return PopupManager;
}());
exports.default = PopupManager;
var PopupInfo = /** @class */ (function () {
    function PopupInfo(window, parent, closeClickOut, modal, modalColor, modalAlpha) {
        if (parent === void 0) { parent = null; }
        if (closeClickOut === void 0) { closeClickOut = false; }
        if (modal === void 0) { modal = false; }
        if (modalColor === void 0) { modalColor = null; }
        if (modalAlpha === void 0) { modalAlpha = 25; }
        this.parent = null;
        this.closeClickOut = false;
        this.modal = false;
        this.modalColor = null;
        this.modalAlpha = 0.60;
        this.window = window;
        this.parent = parent;
        this.closeClickOut = closeClickOut;
        this.modal = modal;
        this.modalColor = modalColor;
        this.modalAlpha = modalAlpha;
    }
    PopupInfo.prototype.onCloseClickOut = function (e) {
        // console.log("onCloseClickOut");
        // if(this.window.getChildByUuid(e.target.uuid)) return;
        // if(this.modal_bg && e.target != this.modal_bg) return;
        LightUI_1.default.root.off(cc.Node.EventType.TOUCH_START, this.onCloseClickOut);
        // popupM.removePopUp(this.window);
        LightUI_1.default.popupManager.removePopUp(this.window);
    };
    return PopupInfo;
}());
exports.PopupInfo = PopupInfo;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxtYW5hZ2Vyc1xcUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUM3QyxzQ0FBaUM7QUFDakMsc0NBQWlDO0FBQ2pDLDJDQUFzQztBQUN0QztJQUFBO1FBQ1ksV0FBTSxHQUFjLElBQUksb0JBQVUsRUFBRSxDQUFDO0lBZ0hqRCxDQUFDO0lBOUdBOzs7Ozs7Ozs7T0FTRztJQUNJLCtCQUFRLEdBQWYsVUFBZ0IsTUFBYyxFQUFDLE1BQXFCLEVBQ2xELGFBQTZCLEVBQUMsS0FBcUIsRUFBQyxVQUF3QixFQUFDLFVBQXFCO1FBRHJFLHVCQUFBLEVBQUEsYUFBcUI7UUFDbEQsOEJBQUEsRUFBQSxxQkFBNkI7UUFBQyxzQkFBQSxFQUFBLGFBQXFCO1FBQUMsMkJBQUEsRUFBQSxpQkFBd0I7UUFBQywyQkFBQSxFQUFBLGNBQXFCO1FBRW5HLElBQUcsYUFBYSxJQUFJLElBQUk7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLFVBQVUsR0FBRyxVQUFVLENBQUEsQ0FBQyxDQUFBLFVBQVUsQ0FBQSxDQUFDLENBQUEsU0FBUyxDQUFDO1FBQzdDLElBQUcsQ0FBQyxNQUFNO1lBQUUsTUFBTSxHQUFHLGlCQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUVyRCxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsT0FBTztTQUNQO1FBQ0QsSUFBSSxJQUFJLEdBQWEsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENB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QUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyRSxtQ0FBbUM7UUFDN0IsaUJBQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpY3Rpb25hcnkgZnJvbSBcIi4uL3V0aWxzL0RpY3Rpb25hcnlcIjtcclxuaW1wb3J0IExpZ2h0VUkgZnJvbSBcIi4uL0xpZ2h0VUlcIjtcclxuaW1wb3J0IERyYXcgZnJvbSBcIi4uL3V0aWxzL0RyYXdcIjtcclxuaW1wb3J0IExFdmVudCBmcm9tIFwiLi4vZXZlbnRzL0xFdmVudFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cE1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBfaW5mb3M6RGljdGlvbmFyeSA9IG5ldyBEaWN0aW9uYXJ5KCk7XHJcblx0XHJcblx0LyoqXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHdpbmRvdyBcclxuXHQgKiBAcGFyYW0gcGFyZW50IFxyXG5cdCAqIEBwYXJhbSBjbG9zZUNsaWNrT3V0IOaYr+WQpueCueWHu+WklumDqOWFs+mXremdouadv1xyXG5cdCAqIEBwYXJhbSBtb2RhbCAgICAgICAgIOaYr+WQpuimgemBrue9qVxyXG5cdCAqIEBwYXJhbSBtb2RhbENvbG9yICAgIOmBrue9qeminOiJslxyXG5cdCAqIEBwYXJhbSBtb2RhbEFscGhhICAgIOmBrue9qemAj+aYjuW6piAgMC0yNTVcclxuXHQgKiBAcmV0dXJucyBcclxuXHQgKi9cclxuXHRwdWJsaWMgYWRkUG9wVXAod2luZG93OmNjLk5vZGUscGFyZW50OmNjLk5vZGUgPSBudWxsXHJcblx0XHQsY2xvc2VDbGlja091dDpib29sZWFuID0gZmFsc2UsbW9kYWw6Ym9vbGVhbiA9IGZhbHNlLG1vZGFsQ29sb3I6c3RyaW5nID0gbnVsbCxtb2RhbEFscGhhOm51bWJlciA9IDApOnZvaWRcclxuXHR7XHJcblx0XHRpZihjbG9zZUNsaWNrT3V0ID09IHRydWUpIG1vZGFsID0gdHJ1ZTtcclxuXHRcdG1vZGFsQ29sb3IgPSBtb2RhbENvbG9yP21vZGFsQ29sb3I6XCIjMDAwMDAwXCI7XHJcblx0XHRpZighcGFyZW50KSBwYXJlbnQgPSBMaWdodFVJLmxheWVyTWFuYWdlci5wb3B1cExheWVyO1xyXG5cdFx0XHJcblx0XHRpZih0aGlzLl9pbmZvcy5nZXQod2luZG93KSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuW8ueWHuumdouadv+W3sue7j+WtmOWcqFwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGluZm86UG9wdXBJbmZvID0gbmV3IFBvcHVwSW5mbyh3aW5kb3cscGFyZW50LGNsb3NlQ2xpY2tPdXQsbW9kYWwsbW9kYWxDb2xvcixtb2RhbEFscGhhKTtcclxuXHRcdHRoaXMuX2luZm9zLnNldCh3aW5kb3csaW5mbyk7XHJcblxyXG5cdFx0Ly8gYmdfbWFza1xyXG5cdFx0XHJcblxyXG5cdFx0aWYobW9kYWwpe1xyXG5cdFx0XHR2YXIgc3A6Y2MuTm9kZSA9IERyYXcuZHJhd1JlY3QobmV3IGNjLlJlY3QoMCwwLExpZ2h0VUkucm9vdC53aWR0aCxMaWdodFVJLnJvb3QuaGVpZ2h0KSxtb2RhbENvbG9yKTtcclxuXHRcdFx0c3Aub3BhY2l0eSA9IG1vZGFsQWxwaGE7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5by55Ye66Z2i5p2/XCIsc3Aub3BhY2l0eSk7XHJcblx0XHRcdHBhcmVudC5hZGRDaGlsZChzcCk7XHJcblx0XHRcdHBhcmVudC5hZGRDaGlsZCh3aW5kb3cpO1xyXG5cdFx0XHRcclxuXHRcdFx0aW5mby5tb2RhbF9iZyA9IHNwO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGxldCBtYXNrOmNjLk5vZGUgPSB3aW5kb3cuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19tYXNrXCIpO1xyXG5cdFx0XHRpZihtYXNrKXtcclxuXHRcdFx0XHRpbmZvLm1vZGFsX2JnID0gbWFzaztcclxuXHRcdFx0XHRtYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuXHRcdFx0fSBcclxuXHRcdFx0cGFyZW50LmFkZENoaWxkKHdpbmRvdyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5by55Ye66Z2i5p2/XCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBMRXZlbnQoTEV2ZW50LlNIT1cpKTtcclxuXHJcblx0XHRpZihjbG9zZUNsaWNrT3V0KSAge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIuWFs+mXremdouadv1wiLExpZ2h0VUkucm9vdC53aWR0aCxMaWdodFVJLnJvb3QuaGVpZ2h0KTtcclxuXHJcblx0XHRcdC8vIGxldCBtYXNrOmNjLk5vZGUgPSB3aW5kb3cuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19tYXNrXCIpO1xyXG5cdFx0XHQvLyBpZihtYXNrKSB7XHJcblx0XHRcdC8vIFx0bWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxpbmZvLm9uQ2xvc2VDbGlja091dCxpbmZvKTtcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHRcclxuXHRcdFx0aWYoaW5mby5tb2RhbF9iZykgaW5mby5tb2RhbF9iZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxpbmZvLm9uQ2xvc2VDbGlja091dCxpbmZvKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIGF1dG9DbG9zZSh3aW5kb3c6Y2MuTm9kZSxkZWxheTpudW1iZXIpe1xyXG5cdFx0aWYoZGVsYXkgIT0gMCl7XHJcblx0XHRcdGxldCBpbmZvOlBvcHVwSW5mbyA9IHRoaXMuX2luZm9zLmdldCh3aW5kb3cpO1xyXG5cdFx0XHRsZXQgaW5kZXggPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0aWYoIWluZm8pIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnJlbW92ZVBvcFVwKHdpbmRvdyk7XHJcblx0XHRcdFx0d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50KFwiY2xvc2VcIixmYWxzZSkpO1xyXG5cdFx0XHR9LGRlbGF5KTtcclxuXHRcdFx0aW5mby5pbnRlcnZhbCA9IGluZGV4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZVBvcFVwKHBvcFVwOmNjLk5vZGUpOmNjLk5vZGVcclxuXHR7XHJcblx0XHRsZXQgaW5mbzpQb3B1cEluZm8gPSB0aGlzLl9pbmZvcy5nZXQocG9wVXApO1xyXG5cdFx0aWYoIWluZm8pXHRyZXR1cm47XHJcblx0XHR2YXIgc3A6Y2MuTm9kZSA9IGluZm8ubW9kYWxfYmc7XHJcblx0XHR0aGlzLl9pbmZvcy5yZW1vdmUocG9wVXApO1xyXG5cclxuXHRcdExpZ2h0VUkucm9vdC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsaW5mby5vbkNsb3NlQ2xpY2tPdXQpO1xyXG5cclxuXHRcdGlmKHBvcFVwLnBhcmVudCkge1xyXG5cdFx0XHRwb3BVcC5wYXJlbnQucmVtb3ZlQ2hpbGQocG9wVXAsZmFsc2UpO1xyXG5cdFx0fVxyXG5cdFx0aWYoc3AgJiYgc3AucGFyZW50ICYmIGluZm8ubW9kYWwgPT0gdHJ1ZSl7XHJcblx0XHRcdHNwLnBhcmVudC5yZW1vdmVDaGlsZChzcCxmYWxzZSk7XHJcblx0XHR9XHJcblx0XHRwb3BVcC5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudChcImNsb3NlXCIsZmFsc2UpKTtcclxuXHRcdHJldHVybiBzcDtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGNlbnRlclBvcFVwKHBvcFVwOmNjLk5vZGUscmVjdDpjYy5TaXplID0gbnVsbCk6dm9pZFxyXG5cdHtcclxuXHRcdGlmKHJlY3QgIT0gbnVsbCl7XHJcblx0XHRcdHBvcFVwLnggPSAocmVjdC53aWR0aCAtIHBvcFVwLndpZHRoKS8yO1xyXG5cdFx0XHRwb3BVcC55ID0gKHJlY3QuaGVpZ2h0IC0gcG9wVXAuaGVpZ2h0KS8yO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGlmKChwb3BVcC5wYXJlbnQgYXMgY2MuTm9kZSkud2lkdGggPT0gMCAmJiAocG9wVXAucGFyZW50IGFzIGNjLk5vZGUpLmhlaWdodCA9PSAwKXtcclxuXHRcdFx0XHRwb3BVcC54ID0gKExpZ2h0VUkucm9vdC53aWR0aCAtIHBvcFVwLndpZHRoKS8yO1xyXG5cdFx0XHRcdHBvcFVwLnkgPSAoTGlnaHRVSS5yb290LmhlaWdodCAtIHBvcFVwLmhlaWdodCkvMjtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0cG9wVXAueCA9ICgocG9wVXAucGFyZW50IGFzIGNjLk5vZGUpLndpZHRoIC0gcG9wVXAud2lkdGgpLzI7XHJcblx0XHRcdFx0cG9wVXAueSA9ICgocG9wVXAucGFyZW50IGFzIGNjLk5vZGUpLmhlaWdodCAtIHBvcFVwLmhlaWdodCkvMjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgc3RhdGljIGJyaW5nVG9Gcm9udChwb3BVcDpjYy5TcHJpdGUpOnZvaWRcclxuXHR7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cEluZm97XHJcblx0cHVibGljIHdpbmRvdzpjYy5Ob2RlO1xyXG5cdHB1YmxpYyBwYXJlbnQ6Y2MuTm9kZSA9IG51bGw7XHJcblx0cHVibGljIGNsb3NlQ2xpY2tPdXQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHB1YmxpYyBtb2RhbDpib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIG1vZGFsQ29sb3I6c3RyaW5nID0gbnVsbDtcclxuXHRwdWJsaWMgbW9kYWxBbHBoYTpudW1iZXIgPSAwLjYwO1xyXG5cclxuXHRwdWJsaWMgaW50ZXJ2YWw6bnVtYmVyO1x0Ly/oh6rliqjlhbPpl63nmoTlu7bov59pZFxyXG5cclxuXHRwdWJsaWMgbW9kYWxfYmc6Y2MuTm9kZTtcdFx0Ly/og4zmma/okpnniYhcclxuXHJcblx0Y29uc3RydWN0b3Iod2luZG93OmNjLk5vZGUscGFyZW50OmNjLk5vZGUgPSBudWxsXHJcblx0XHQsY2xvc2VDbGlja091dDpib29sZWFuID0gZmFsc2UsbW9kYWw6Ym9vbGVhbiA9IGZhbHNlLG1vZGFsQ29sb3I6c3RyaW5nID0gbnVsbCxtb2RhbEFscGhhOm51bWJlciA9IDI1KXtcclxuXHRcdFx0dGhpcy53aW5kb3cgPSB3aW5kb3c7XHJcblx0XHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0XHR0aGlzLmNsb3NlQ2xpY2tPdXQgPSBjbG9zZUNsaWNrT3V0O1xyXG5cdFx0XHR0aGlzLm1vZGFsID0gbW9kYWw7XHJcblx0XHRcdHRoaXMubW9kYWxDb2xvciA9IG1vZGFsQ29sb3I7XHJcblx0XHRcdHRoaXMubW9kYWxBbHBoYSA9IG1vZGFsQWxwaGE7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25DbG9zZUNsaWNrT3V0KGU6Y2MuRXZlbnQpOnZvaWR7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvbkNsb3NlQ2xpY2tPdXRcIik7XHJcblx0XHQvLyBpZih0aGlzLndpbmRvdy5nZXRDaGlsZEJ5VXVpZChlLnRhcmdldC51dWlkKSkgcmV0dXJuO1xyXG5cclxuXHRcdC8vIGlmKHRoaXMubW9kYWxfYmcgJiYgZS50YXJnZXQgIT0gdGhpcy5tb2RhbF9iZykgcmV0dXJuO1xyXG5cclxuICAgICAgIFxyXG5cdFx0TGlnaHRVSS5yb290Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uQ2xvc2VDbGlja091dCk7XHJcblx0XHQvLyBwb3B1cE0ucmVtb3ZlUG9wVXAodGhpcy53aW5kb3cpO1xyXG4gICAgICAgIExpZ2h0VUkucG9wdXBNYW5hZ2VyLnJlbW92ZVBvcFVwKHRoaXMud2luZG93KTtcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/managers/MessageBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f177cdcZtBEuLbR7suGZb/8', 'MessageBlock');
// Script/lightUI/managers/MessageBlock.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../events/LEvent");
var MessageBlock = /** @class */ (function (_super) {
    __extends(MessageBlock, _super);
    function MessageBlock(blockLength) {
        if (blockLength === void 0) { blockLength = 500; }
        var _this = _super.call(this) || this;
        _this._list = [];
        _this._blockLength = 50;
        _this._blockLength = blockLength;
        return _this;
    }
    MessageBlock.prototype.add = function (msg) {
        if (this._list.length >= this._blockLength)
            return;
        this._list.push(msg);
    };
    MessageBlock.prototype.pop = function (something) {
        var msg = this._list.shift();
        this.dispatchEvent(new LEvent_1.default(LEvent_1.default.POP, msg, false));
    };
    MessageBlock.prototype.getFirst = function () {
        return this._list[0];
    };
    MessageBlock.prototype.clear = function () {
        this._list = [];
    };
    Object.defineProperty(MessageBlock.prototype, "size", {
        get: function () {
            return this._list.length;
        },
        set: function (value) {
            this._blockLength = value;
        },
        enumerable: false,
        configurable: true
    });
    return MessageBlock;
}(cc.EventTarget));
exports.default = MessageBlock;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxtYW5hZ2Vyc1xcTWVzc2FnZUJsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUV0QztJQUEwQyxnQ0FBYztJQUlwRCxzQkFBWSxXQUF3QjtRQUF4Qiw0QkFBQSxFQUFBLGlCQUF3QjtRQUFwQyxZQUNJLGlCQUFPLFNBRVY7UUFOTyxXQUFLLEdBQWMsRUFBRSxDQUFDO1FBQ3RCLGtCQUFZLEdBQVUsRUFBRSxDQUFDO1FBSTdCLEtBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDOztJQUNwQyxDQUFDO0lBRU0sMEJBQUcsR0FBVixVQUFXLEdBQU87UUFDZCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sMEJBQUcsR0FBVixVQUFjLFNBQVc7UUFDckIsSUFBSSxHQUFHLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxnQkFBTSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sNEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQkFBVyw4QkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM3QixDQUFDO2FBRUQsVUFBZ0IsS0FBWTtZQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FKQTtJQUtMLG1CQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsQ0FsQ3lDLEVBQUUsQ0FBQyxXQUFXLEdBa0N2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMRXZlbnQgZnJvbSBcIi4uL2V2ZW50cy9MRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VCbG9jayBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0e1xyXG4gICAgcHJpdmF0ZSBfbGlzdDpBcnJheTxhbnk+ID0gW107XHJcbiAgICBwcml2YXRlIF9ibG9ja0xlbmd0aDpudW1iZXIgPSA1MDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihibG9ja0xlbmd0aDpudW1iZXIgPSA1MDApe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tMZW5ndGggPSBibG9ja0xlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKG1zZzphbnkpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5fbGlzdC5sZW5ndGggPj0gdGhpcy5fYmxvY2tMZW5ndGgpIHJldHVybjtcclxuICAgICAgIHRoaXMuX2xpc3QucHVzaChtc2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3A8VD4oc29tZXRoaW5nOlQpOnZvaWR7XHJcbiAgICAgICAgbGV0IG1zZzpUID0gdGhpcy5fbGlzdC5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTEV2ZW50KExFdmVudC5QT1AsbXNnLGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZpcnN0PFQ+KCk6VHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdFswXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKXtcclxuICAgICAgICB0aGlzLl9saXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzaXplKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHNpemUodmFsdWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9ibG9ja0xlbmd0aCA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/src/Bullt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f7e1MtLT5JOJ55jQql8H0c', 'Bullt');
// Common/src/Bullt.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameData_1 = require("../../Script/component/gameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullt = /** @class */ (function (_super) {
    __extends(Bullt, _super);
    function Bullt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletinLabel = null;
        _this.maskNode = null;
        _this.bg = null;
        _this.m_speed = 100;
        _this.m_xLeftEnd = 0;
        _this.m_xRightEnd = 0;
        _this.m_ypos = 0;
        _this.moving = false;
        _this.m_direction = 2;
        /** 循环播放list*/
        _this.txtList = [];
        /** 只播放一次list*/
        _this.onceList = [];
        return _this;
    }
    Bullt_1 = Bullt;
    Bullt.prototype.start = function () {
        this.noticeId = -1;
        this.onceId = 0;
        var self = this;
        this.moving = false;
        this.bulletinLabel.string = "";
        this.node.active = false;
        var marqueeData = gameData_1.gameData.roomData.MARQUEE;
        if (marqueeData && marqueeData.length > 0)
            this.setMarFactory(marqueeData);
    };
    Bullt.prototype.onLoad = function () {
        Bullt_1.instance = this;
    };
    Bullt.prototype.update = function (dt) {
        // if (this.m_direction == Direction.LEFT_TO_RIGHT) { 从左往右移动注释
        //     let contentSize = this.bulletinLabel.node.getContentSize();
        //     if (this.bulletinLabel.node.x >= this.m_xRightEnd) {
        //         this.bulletinLabel.node.x = this.m_xLeftEnd - contentSize.width;
        //         this.moving = false;
        //         this.upBulletin();
        //     } else {
        //         this.bulletinLabel.node.x += this.m_speed * dt;
        //         this.moving = true;
        //     }
        // } else {
        var contentSize = this.bulletinLabel.node.getContentSize();
        if (this.bulletinLabel.node.x <= this.m_xLeftEnd - contentSize.width) {
            this.bulletinLabel.node.x = this.m_xRightEnd;
            this.moving = false;
            var marqueeData = gameData_1.gameData.roomData.MARQUEE;
            if (marqueeData && marqueeData.length > 0)
                this.setMarFactory(marqueeData);
            else
                this.upBulletin();
        }
        else {
            this.bulletinLabel.node.x -= this.m_speed * dt;
            this.moving = true;
        }
        // }
    };
    Bullt.prototype.setMarFactory = function (notice) {
        if (this.txtList == null || this.txtList.length > 1000)
            this.txtList = [];
        if (this.onceList == null || this.onceList.length > 1000)
            this.onceList = [];
        var fover = [];
        for (var i = 0; i < notice.length; i++) {
            // if (notice[i].marqueeType == "FOREVER")
            //     fover.push(notice[i]);
            // else
            this.onceList.push(notice[i]);
        }
        this.txtList = fover;
        this.node.active = true;
        gameData_1.gameData.roomData.MARQUEE = [];
        if (!this.moving)
            this.upBulletin();
    };
    /** 更新公告栏 */
    Bullt.prototype.upBulletin = function () {
        var s = this;
        //从消息中获取通告列表
        if (s.onceList && s.onceList.length > 0 && s.onceId < s.onceList.length) {
            var notice = s.onceList[s.onceId].content;
            if (notice)
                s.setBulletin(notice);
            s.onceId++;
            console.log("oncelist:" + s.onceList.length + "  index:" + s.onceId);
        }
        else {
            if (s.txtList == null || s.txtList.length < 1) {
                s.bulletinLabel.string = "";
                s.node.active = false;
                this.moving = false;
                return;
            }
            ;
            s.noticeId++;
            if (s.noticeId < 0 || s.noticeId >= s.txtList.length) {
                s.noticeId = 0;
                if (s.txtList.length < 1) {
                    s.bulletinLabel.string = "";
                    s.node.active = false;
                    this.moving = false;
                    return;
                }
            }
            var txt = s.txtList[s.noticeId].content;
            if (txt) {
                s.setBulletin(txt);
            }
        }
    };
    Bullt.prototype.setBulletin = function (text) {
        this.bulletinLabel.string = text;
        this.m_xRightEnd = this.node.x + this.maskNode.node.width * this.maskNode.node.anchorX;
        this.m_xLeftEnd = this.node.x - this.maskNode.node.width * this.maskNode.node.anchorX;
        var contentSize = this.bulletinLabel.node.getContentSize();
        var xPos = 0;
        if (this.m_direction === Direction.LEFT_TO_RIGHT) {
            xPos = this.m_xLeftEnd - contentSize.width;
        }
        else
            xPos = this.m_xRightEnd;
        this.bulletinLabel.node.x = xPos;
        this.bulletinLabel.node.y = this.m_ypos;
    };
    var Bullt_1;
    Bullt.instance = null;
    __decorate([
        property(cc.RichText)
    ], Bullt.prototype, "bulletinLabel", void 0);
    __decorate([
        property(cc.Mask)
    ], Bullt.prototype, "maskNode", void 0);
    __decorate([
        property(cc.Node)
    ], Bullt.prototype, "bg", void 0);
    __decorate([
        property({
            tooltip: "每秒移动像素"
        })
    ], Bullt.prototype, "m_speed", void 0);
    __decorate([
        property({
            tooltip: "文字滚动方向，1从左到右，2从右到左"
        })
    ], Bullt.prototype, "m_direction", void 0);
    Bullt = Bullt_1 = __decorate([
        ccclass
    ], Bullt);
    return Bullt;
}(cc.Component));
exports.default = Bullt;
var Direction;
(function (Direction) {
    Direction[Direction["LEFT_TO_RIGHT"] = 1] = "LEFT_TO_RIGHT";
    Direction[Direction["RIGHT_TO_LEFT"] = 2] = "RIGHT_TO_LEFT";
})(Direction || (Direction = {}));

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tbW9uXFxzcmNcXEJ1bGx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUNyRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQStJQztRQTVJRyxtQkFBYSxHQUFnQixJQUFJLENBQUM7UUFHbEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixRQUFFLEdBQVksSUFBSSxDQUFDO1FBS25CLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFFdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBTXhCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGNBQWM7UUFDSixhQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ25DLGVBQWU7UUFDTCxjQUFRLEdBQWUsRUFBRSxDQUFDOztJQWtIeEMsQ0FBQztjQS9Jb0IsS0FBSztJQWdDdEIscUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxXQUFXLEdBQUcsbUJBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQzVDLElBQUksV0FBVyxJQUFJLFdBQVcs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QUM7MkNBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxQ0FDQztJQUtuQjtRQUhDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxRQUFRO1NBQ3BCLENBQUM7MENBQ29CO0lBV3RCO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLG9CQUFvQjtTQUNoQyxDQUFDOzhDQUNzQjtJQXpCUCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBK0l6QjtJQUFELFlBQUM7Q0EvSUQsQUErSUMsQ0EvSWtDLEVBQUUsQ0FBQyxTQUFTLEdBK0k5QztrQkEvSW9CLEtBQUs7QUFnSjFCLElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNWLDJEQUFpQixDQUFBO0lBQ2pCLDJEQUFhLENBQUE7QUFDakIsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gXCIuLi8uLi9TY3JpcHQvY29tcG9uZW50L2dhbWVEYXRhXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gICAgYnVsbGV0aW5MYWJlbDogY2MuUmljaFRleHQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5NYXNrKVxyXG4gICAgbWFza05vZGU6IGNjLk1hc2sgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogXCLmr4/np5Lnp7vliqjlg4/ntKBcIlxyXG4gICAgfSlcclxuICAgIG1fc3BlZWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBtX3hMZWZ0RW5kOiBudW1iZXIgPSAwO1xyXG4gICAgbV94UmlnaHRFbmQ6IG51bWJlciA9IDA7XHJcbiAgICBtX3lwb3M6IG51bWJlciA9IDA7XHJcbiAgICBtb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG5vdGljZUlkOiBudW1iZXI7XHJcbiAgICBvbmNlSWQ6IG51bWJlcjtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogXCLmloflrZfmu5rliqjmlrnlkJHvvIwx5LuO5bem5Yiw5Y+z77yMMuS7juWPs+WIsOW3plwiXHJcbiAgICB9KVxyXG4gICAgbV9kaXJlY3Rpb246IG51bWJlciA9IDI7XHJcbiAgICAvKiog5b6q546v5pKt5pS+bGlzdCovXHJcbiAgICBwcm90ZWN0ZWQgdHh0TGlzdDogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgLyoqIOWPquaSreaUvuS4gOasoWxpc3QqL1xyXG4gICAgcHJvdGVjdGVkIG9uY2VMaXN0OiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlOiBCdWxsdCA9IG51bGw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vdGljZUlkID0gLTE7XHJcbiAgICAgICAgdGhpcy5vbmNlSWQgPSAwO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0aW5MYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWFycXVlZURhdGEgPSBnYW1lRGF0YS5yb29tRGF0YS5NQVJRVUVFO1xyXG4gICAgICAgIGlmIChtYXJxdWVlRGF0YSAmJiBtYXJxdWVlRGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB0aGlzLnNldE1hckZhY3RvcnkobWFycXVlZURhdGEpO1xyXG5cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBCdWxsdC5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5tX2RpcmVjdGlvbiA9PSBEaXJlY3Rpb24uTEVGVF9UT19SSUdIVCkgeyDku47lt6blvoDlj7Pnp7vliqjms6jph4pcclxuICAgICAgICAvLyAgICAgbGV0IGNvbnRlbnRTaXplID0gdGhpcy5idWxsZXRpbkxhYmVsLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuYnVsbGV0aW5MYWJlbC5ub2RlLnggPj0gdGhpcy5tX3hSaWdodEVuZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5idWxsZXRpbkxhYmVsLm5vZGUueCA9IHRoaXMubV94TGVmdEVuZCAtIGNvbnRlbnRTaXplLndpZHRoO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudXBCdWxsZXRpbigpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5idWxsZXRpbkxhYmVsLm5vZGUueCArPSB0aGlzLm1fc3BlZWQgKiBkdDtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRTaXplID0gdGhpcy5idWxsZXRpbkxhYmVsLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICBpZiAodGhpcy5idWxsZXRpbkxhYmVsLm5vZGUueCA8PSB0aGlzLm1feExlZnRFbmQgLSBjb250ZW50U2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1bGxldGluTGFiZWwubm9kZS54ID0gdGhpcy5tX3hSaWdodEVuZDtcclxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IG1hcnF1ZWVEYXRhID0gZ2FtZURhdGEucm9vbURhdGEuTUFSUVVFRTtcclxuICAgICAgICAgICAgaWYgKG1hcnF1ZWVEYXRhICYmIG1hcnF1ZWVEYXRhLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1hckZhY3RvcnkobWFycXVlZURhdGEpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwQnVsbGV0aW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1bGxldGluTGFiZWwubm9kZS54IC09IHRoaXMubV9zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRNYXJGYWN0b3J5KG5vdGljZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnR4dExpc3QgPT0gbnVsbCB8fCB0aGlzLnR4dExpc3QubGVuZ3RoID4gMTAwMCkgdGhpcy50eHRMaXN0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMub25jZUxpc3QgPT0gbnVsbCB8fCB0aGlzLm9uY2VMaXN0Lmxlbmd0aCA+IDEwMDApIHRoaXMub25jZUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGZvdmVyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub3RpY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gaWYgKG5vdGljZVtpXS5tYXJxdWVlVHlwZSA9PSBcIkZPUkVWRVJcIilcclxuICAgICAgICAgICAgLy8gICAgIGZvdmVyLnB1c2gobm90aWNlW2ldKTtcclxuICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmNlTGlzdC5wdXNoKG5vdGljZVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnR4dExpc3QgPSBmb3ZlcjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBnYW1lRGF0YS5yb29tRGF0YS5NQVJRVUVFID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZylcclxuICAgICAgICAgICAgdGhpcy51cEJ1bGxldGluKCk7XHJcbiAgICB9XHJcbiAgICAvKiog5pu05paw5YWs5ZGK5qCPICovXHJcbiAgICBwdWJsaWMgdXBCdWxsZXRpbigpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgLy/ku47mtojmga/kuK3ojrflj5bpgJrlkYrliJfooahcclxuICAgICAgICBpZiAocy5vbmNlTGlzdCAmJiBzLm9uY2VMaXN0Lmxlbmd0aCA+IDAgJiYgcy5vbmNlSWQgPCBzLm9uY2VMaXN0Lmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vdGljZSA9IHMub25jZUxpc3Rbcy5vbmNlSWRdLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmIChub3RpY2UpXHJcbiAgICAgICAgICAgICAgICBzLnNldEJ1bGxldGluKG5vdGljZSk7XHJcbiAgICAgICAgICAgIHMub25jZUlkKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25jZWxpc3Q6XCIgKyBzLm9uY2VMaXN0Lmxlbmd0aCArIFwiICBpbmRleDpcIiArIHMub25jZUlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKHMudHh0TGlzdCA9PSBudWxsIHx8IHMudHh0TGlzdC5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBzLmJ1bGxldGluTGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHMubm90aWNlSWQrKztcclxuICAgICAgICAgICAgaWYgKHMubm90aWNlSWQgPCAwIHx8IHMubm90aWNlSWQgPj0gcy50eHRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcy5ub3RpY2VJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocy50eHRMaXN0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldGluTGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHR4dCA9IHMudHh0TGlzdFtzLm5vdGljZUlkXS5jb250ZW50O1xyXG4gICAgICAgICAgICBpZiAodHh0KSB7XHJcbiAgICAgICAgICAgICAgICBzLnNldEJ1bGxldGluKHR4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QnVsbGV0aW4odGV4dCkge1xyXG4gICAgICAgIHRoaXMuYnVsbGV0aW5MYWJlbC5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMubV94UmlnaHRFbmQgPSB0aGlzLm5vZGUueCArIHRoaXMubWFza05vZGUubm9kZS53aWR0aCAqIHRoaXMubWFza05vZGUubm9kZS5hbmNob3JYO1xyXG4gICAgICAgIHRoaXMubV94TGVmdEVuZCA9IHRoaXMubm9kZS54IC0gdGhpcy5tYXNrTm9kZS5ub2RlLndpZHRoICogdGhpcy5tYXNrTm9kZS5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRTaXplID0gdGhpcy5idWxsZXRpbkxhYmVsLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICBsZXQgeFBvczogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodGhpcy5tX2RpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQpIHtcclxuICAgICAgICAgICAgeFBvcyA9IHRoaXMubV94TGVmdEVuZCAtIGNvbnRlbnRTaXplLndpZHRoO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB4UG9zID0gdGhpcy5tX3hSaWdodEVuZDtcclxuICAgICAgICB0aGlzLmJ1bGxldGluTGFiZWwubm9kZS54ID0geFBvcztcclxuICAgICAgICB0aGlzLmJ1bGxldGluTGFiZWwubm9kZS55ID0gdGhpcy5tX3lwb3M7XHJcbiAgICB9XHJcblxyXG59XHJcbmVudW0gRGlyZWN0aW9uIHtcclxuICAgIExFRlRfVE9fUklHSFQgPSAxLFxyXG4gICAgUklHSFRfVE9fTEVGVFxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/managers/LayerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a843vSVQhGTqpG/YZz03N5', 'LayerManager');
// Script/lightUI/managers/LayerManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LayerManager = /** @class */ (function () {
    function LayerManager() {
    }
    LayerManager.prototype.init = function (root) {
        this.popupLayer = root.getChildByName("popupLayer");
        this.sceneLayer = root.getChildByName("sceneLayer");
        this.topLayer = root.getChildByName("topLayer");
    };
    LayerManager.prototype.addScene = function (scene) {
        this.sceneLayer.addChild(scene);
    };
    LayerManager.prototype.removeScene = function (scene) {
        scene.removeFromParent();
    };
    LayerManager.prototype.desdroyScene = function (scene) {
        scene.active = false;
        scene.removeFromParent();
        scene.destroy();
    };
    LayerManager.prototype.showScene = function (scene) {
        scene.active = true;
    };
    LayerManager.prototype.hideScene = function (scene) {
        scene.active = false;
    };
    LayerManager.prototype.removeAll = function () {
        for (var i = 0; i < this.popupLayer.childrenCount; i++) {
            if (i < this.popupLayer.childrenCount - 1)
                this.popupLayer.removeChild(this.popupLayer.children[i]);
        }
    };
    return LayerManager;
}());
exports.default = LayerManager;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxtYW5hZ2Vyc1xcTGF5ZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXVDQSxDQUFDO0lBbENVLDJCQUFJLEdBQVgsVUFBWSxJQUFhO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSwrQkFBUSxHQUFmLFVBQWdCLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLEtBQWM7UUFDN0IsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLEtBQWM7UUFDOUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixLQUFjO1FBQzNCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixLQUFjO1FBQzNCLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0wsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgcG9wdXBMYXllcjogY2MuTm9kZTtcclxuICAgIHB1YmxpYyBzY2VuZUxheWVyOiBjYy5Ob2RlO1xyXG4gICAgcHVibGljIHRvcExheWVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIHB1YmxpYyBpbml0KHJvb3Q6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLnBvcHVwTGF5ZXIgPSByb290LmdldENoaWxkQnlOYW1lKFwicG9wdXBMYXllclwiKTtcclxuICAgICAgICB0aGlzLnNjZW5lTGF5ZXIgPSByb290LmdldENoaWxkQnlOYW1lKFwic2NlbmVMYXllclwiKTtcclxuICAgICAgICB0aGlzLnRvcExheWVyID0gcm9vdC5nZXRDaGlsZEJ5TmFtZShcInRvcExheWVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTY2VuZShzY2VuZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVMYXllci5hZGRDaGlsZChzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVNjZW5lKHNjZW5lOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgc2NlbmUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXNkcm95U2NlbmUoc2NlbmU6IGNjLk5vZGUpIHtcclxuICAgICAgICBzY2VuZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBzY2VuZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgc2NlbmUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93U2NlbmUoc2NlbmU6IGNjLk5vZGUpIHtcclxuICAgICAgICBzY2VuZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlU2NlbmUoc2NlbmU6IGNjLk5vZGUpIHtcclxuICAgICAgICBzY2VuZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3B1cExheWVyLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA8IHRoaXMucG9wdXBMYXllci5jaGlsZHJlbkNvdW50IC0gMSlcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBMYXllci5yZW1vdmVDaGlsZCh0aGlzLnBvcHVwTGF5ZXIuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/utils/Dictionary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee007wf6qpDULFlO7CP40sl', 'Dictionary');
// Script/lightUI/utils/Dictionary.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * <code>Dictionary</code> 是一个字典型的数据存取类。
 */
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this._values = [];
        this._keys = [];
    }
    Object.defineProperty(Dictionary.prototype, "values", {
        /**
         * 获取所有的子元素列表。
         */
        get: function () {
            return this._values;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "keys", {
        /**
         * 获取所有的子元素键名列表。
         */
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 给指定的键名设置值。
     * @param	key 键名。
     * @param	value 值。
     */
    Dictionary.prototype.set = function (key, value) {
        var index = this.indexOf(key);
        if (index >= 0) {
            this._values[index] = value;
            return;
        }
        this._keys.push(key);
        this._values.push(value);
    };
    /**
     * 获取指定对象的键名索引。
     * @param	key 键名对象。
     * @return 键名索引。
     */
    Dictionary.prototype.indexOf = function (key) {
        var index = this._keys.indexOf(key);
        if (index >= 0)
            return index;
        key = (key instanceof String) ? Number(key) : ((key instanceof Number) ? key.toString() : key);
        return this._keys.indexOf(key);
    };
    /**
     * 返回指定键名的值。
     * @param	key 键名对象。
     * @return 指定键名的值。
     */
    Dictionary.prototype.get = function (key) {
        var index = this.indexOf(key);
        return index < 0 ? null : this._values[index];
    };
    /**
     * 移除指定键名的值。
     * @param	key 键名对象。
     * @return 是否成功移除。
     */
    Dictionary.prototype.remove = function (key) {
        var index = this.indexOf(key);
        if (index >= 0) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * 清除此对象的键名列表和键值列表。
     */
    Dictionary.prototype.clear = function () {
        this._values.length = 0;
        this._keys.length = 0;
    };
    return Dictionary;
}());
exports.default = Dictionary;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFx1dGlsc1xcRGljdGlvbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0g7SUFBQTtRQUNZLFlBQU8sR0FBYyxFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUFjLEVBQUUsQ0FBQztJQTJFbEMsQ0FBQztJQXRFRyxzQkFBVyw4QkFBTTtRQUhqQjs7V0FFRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsNEJBQUk7UUFIZjs7V0FFRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQ7Ozs7T0FJRztJQUNJLHdCQUFHLEdBQVYsVUFBVyxHQUFPLEVBQUUsS0FBUztRQUN6QixJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksNEJBQU8sR0FBZCxVQUFlLEdBQVU7UUFDckIsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxLQUFLLElBQUksQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzdCLEdBQUcsR0FBRyxDQUFDLEdBQUcsWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9GLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx3QkFBRyxHQUFWLFVBQVcsR0FBTztRQUNkLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwyQkFBTSxHQUFiLFVBQWMsR0FBTztRQUNqQixJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNJLDBCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTCxpQkFBQztBQUFELENBN0VBLEFBNkVDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogPGNvZGU+RGljdGlvbmFyeTwvY29kZT4g5piv5LiA5Liq5a2X5YW45Z6L55qE5pWw5o2u5a2Y5Y+W57G744CCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWN0aW9uYXJ5IHtcclxuICAgIHByaXZhdGUgX3ZhbHVlczpBcnJheTxhbnk+ID0gW107XHJcbiAgICBwcml2YXRlIF9rZXlzOkFycmF5PGFueT4gPSBbXTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInnmoTlrZDlhYPntKDliJfooajjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB2YWx1ZXMoKTpBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOacieeahOWtkOWFg+e0oOmUruWQjeWIl+ihqOOAglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGtleXMoKTpBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5nmjIflrprnmoTplK7lkI3orr7nva7lgLzjgIJcclxuICAgICAqIEBwYXJhbVx0a2V5IOmUruWQjeOAglxyXG4gICAgICogQHBhcmFtXHR2YWx1ZSDlgLzjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChrZXk6YW55LCB2YWx1ZTphbnkpOnZvaWQge1xyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fa2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaMh+WumuWvueixoeeahOmUruWQjee0ouW8leOAglxyXG4gICAgICogQHBhcmFtXHRrZXkg6ZSu5ZCN5a+56LGh44CCXHJcbiAgICAgKiBAcmV0dXJuIOmUruWQjee0ouW8leOAglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5kZXhPZihrZXk6T2JqZWN0KTpudW1iZXIge1xyXG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgIGtleSA9IChrZXkgaW5zdGFuY2VvZiBTdHJpbmcpID8gTnVtYmVyKGtleSkgOiAoKGtleSBpbnN0YW5jZW9mIE51bWJlcikgPyBrZXkudG9TdHJpbmcoKSA6IGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXMuaW5kZXhPZihrZXkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuaMh+WumumUruWQjeeahOWAvOOAglxyXG4gICAgICogQHBhcmFtXHRrZXkg6ZSu5ZCN5a+56LGh44CCXHJcbiAgICAgKiBAcmV0dXJuIOaMh+WumumUruWQjeeahOWAvOOAglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0KGtleTphbnkpOmFueSB7XHJcbiAgICAgICAgdmFyIGluZGV4Om51bWJlciA9IHRoaXMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCA8IDAgPyBudWxsIDogdGhpcy5fdmFsdWVzW2luZGV4XTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTmjIflrprplK7lkI3nmoTlgLzjgIJcclxuICAgICAqIEBwYXJhbVx0a2V5IOmUruWQjeWvueixoeOAglxyXG4gICAgICogQHJldHVybiDmmK/lkKbmiJDlip/np7vpmaTjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZShrZXk6YW55KTpCb29sZWFuIHtcclxuICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gdGhpcy5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fa2V5cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTmraTlr7nosaHnmoTplK7lkI3liJfooajlkozplK7lgLzliJfooajjgIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/managers/TaskManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cffcdh0mgBMCZX0w/mZ2KA9', 'TaskManager');
// Script/lightUI/managers/TaskManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../events/LEvent");
var Dictionary_1 = require("../utils/Dictionary");
var Handler_1 = require("../utils/Handler");
var MessageBlock_1 = require("./MessageBlock");
var TaskAbs_1 = require("./TaskAbs");
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
var TaskManager = /** @class */ (function (_super) {
    __extends(TaskManager, _super);
    function TaskManager(blockLength, autoReback) {
        if (blockLength === void 0) { blockLength = 500; }
        if (autoReback === void 0) { autoReback = false; }
        var _this = _super.call(this) || this;
        _this._id = 0;
        _this.dic = new Dictionary_1.default();
        _this._block = new MessageBlock_1.default(blockLength);
        _this._autoReback = autoReback;
        return _this;
    }
    TaskManager.creat = function (blockLength, autoReback) {
        if (blockLength === void 0) { blockLength = 500; }
        if (autoReback === void 0) { autoReback = true; }
        if (this._pool.length <= 0) {
            //creat
            return new TaskManager(blockLength, autoReback);
        }
        else {
            //borrow
            var taskManager = this._pool.pop();
            taskManager.blockLength = blockLength;
            taskManager.autoReback = autoReback;
            return taskManager;
        }
    };
    TaskManager.reback = function (taskManager) {
        taskManager.clear();
        this._pool.push(taskManager);
    };
    TaskManager.prototype.addTask = function (task) {
        // console.log("增加一个任务");
        this._block.add(task);
        //如果只有一个任务 则立马开始执行
        // if(this._block.size == 1) this.runTask(task);
    };
    TaskManager.prototype.run = function () {
        if (this._block.size <= 0)
            return;
        this.runTask(this._block.getFirst());
    };
    TaskManager.prototype.clear = function () {
        this._block.clear();
        this.dic.clear();
    };
    //手动调用执行下一个任务
    TaskManager.prototype.runNextTask = function () {
        this._block.pop(TaskAbs_1.default);
        if (this._block.size > 0)
            this.runTask(this._block.getFirst());
        else {
            //批次任务 执行完毕
            // console.log("批次任务 执行完毕");
            this.dispatchEvent(new LEvent_1.default(LEvent_1.default.COMPLETE));
            if (this._autoReback == true) {
                TaskManager.reback(this);
            }
        }
    };
    TaskManager.prototype.runTask = function (task) {
        var _this = this;
        task.once(LEvent_1.default.COMPLETE, function () {
            _this._block.pop(TaskAbs_1.default); //任务执行完毕  出列
            //如果还有任务 则继续执行
            if (_this._block.size > 0)
                _this.runTask(_this._block.getFirst());
            else
                console.log("暂无任务");
        });
        task.run();
    };
    TaskManager.prototype.runSimpleTask = function (task, complete) {
        if (this.dic.get(task)) {
            return null;
        }
        this.dic.set(task, task);
        if (!task.args)
            task.args = [];
        task.args.push(complete);
        task.run();
    };
    /**
     * 按顺序执行任务列表
     * @param tasks
     * @param complete
     */
    TaskManager.prototype.runSimpleTasksOrder = function (tasks, complete) {
        var _this = this;
        var id = this._id++;
        this.dic.set(id, tasks);
        var l = tasks.length;
        var task = tasks.shift();
        var itemComplete = function () {
            if (task)
                _this.clearSimpleTask(task);
            var tasklist = _this.dic.get(id);
            if (tasklist == null) {
                console.log("被清除了");
                return;
            }
            if (tasklist.length <= 0) {
                if (complete)
                    complete.run();
                return;
            }
            task = tasklist.shift();
            _this.runSimpleTask(task, Handler_1.default.create(_this, itemComplete));
        };
        this.runSimpleTask(task, Handler_1.default.create(this, itemComplete));
        return id;
    };
    /**
     * 同时执行一批任务
     * @param tasks
     * @param complete
     */
    TaskManager.prototype.runSimpleTasks = function (tasks, complete) {
        var _this = this;
        var l = tasks.length;
        if (l <= 0)
            if (complete)
                complete.run();
        var lights = 0;
        var itemComplete = function () {
            if (tasks[lights])
                _this.clearSimpleTask(tasks[lights]);
            if (++lights >= l) {
                if (complete)
                    complete.run();
                return;
            }
        };
        for (var i = 0; i < l; i++) {
            this.runSimpleTask(tasks[i], Handler_1.default.create(this, itemComplete));
        }
    };
    TaskManager.prototype.clearSimpleTask = function (task) {
        if (!this.dic.get(task))
            return;
        this.dic.remove(task);
    };
    Object.defineProperty(TaskManager.prototype, "blockLength", {
        set: function (value) {
            this._block.size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskManager.prototype, "autoReback", {
        set: function (value) {
            this._autoReback = value;
        },
        enumerable: false,
        configurable: true
    });
    TaskManager._pool = [];
    return TaskManager;
}(cc.EventTarget));
exports.default = TaskManager;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxtYW5hZ2Vyc1xcVGFza01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBQ3RDLGtEQUE2QztBQUM3Qyw0Q0FBdUM7QUFDdkMsK0NBQTBDO0FBQzFDLHFDQUFnQztBQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwRUc7QUFDSDtJQUF5QywrQkFBYztJQVFuRCxxQkFBWSxXQUF3QixFQUFFLFVBQTBCO1FBQXBELDRCQUFBLEVBQUEsaUJBQXdCO1FBQUUsMkJBQUEsRUFBQSxrQkFBMEI7UUFBaEUsWUFDSSxpQkFBTyxTQUdWO1FBWE8sU0FBRyxHQUFVLENBQUMsQ0FBQztRQUNmLFNBQUcsR0FBYyxJQUFJLG9CQUFVLEVBQUUsQ0FBQztRQVF0QyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksc0JBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7SUFDbEMsQ0FBQztJQUVhLGlCQUFLLEdBQW5CLFVBQW9CLFdBQXdCLEVBQUUsVUFBeUI7UUFBbkQsNEJBQUEsRUFBQSxpQkFBd0I7UUFBRSwyQkFBQSxFQUFBLGlCQUF5QjtRQUNuRSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztZQUN0QixPQUFPO1lBQ1AsT0FBTyxJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEQ7YUFBSTtZQUNELFFBQVE7WUFDUixJQUFJLFdBQVcsR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQy9DLFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ3RDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsVUFB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExFdmVudCBmcm9tIFwiLi4vZXZlbnRzL0xFdmVudFwiO1xyXG5pbXBvcnQgRGljdGlvbmFyeSBmcm9tIFwiLi4vdXRpbHMvRGljdGlvbmFyeVwiO1xyXG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vdXRpbHMvSGFuZGxlclwiO1xyXG5pbXBvcnQgTWVzc2FnZUJsb2NrIGZyb20gXCIuL01lc3NhZ2VCbG9ja1wiO1xyXG5pbXBvcnQgVGFza0FicyBmcm9tIFwiLi9UYXNrQWJzXCI7XHJcblxyXG4vKipcclxuICog5byC5q2l5Lu75Yqh566h55CG5ZmoIOeUqOadpee7n+S4gOeuoeeQhuW8guatpeS7u+WKoSDlgZrliLDnu5/kuIDlgZzmraLmiYDmnInnmoTlvILmraXku7vliqEgIOWQjOaXtuS5n+iDveeugOWMlumhuuW6j+aJp+ihjOW8guatpeS7u+WKoeeahOWGmeazlVxyXG4gKiDlupTnlKjlnLrmma8gIOavlOWmgumcgOimgea4uOaIj+aaguWBnOWKn+iDvSBcclxuICogXHJcbiAqICBleGFtcGxlICBzaW1wbGV0YXNrXHJcbiAqIFxyXG4gKiAgdmFyIHRhc2tzOkFycmF5PExheWEuSGFuZGxlcj4gPSBuZXcgQXJyYXk8TGF5YS5IYW5kbGVyPigpO1xyXG4gKiAgdGFza3MucHVzaChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsdGhpcy50YXNrMSkpO1xyXG4gKiAgdGFza3MucHVzaChMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsdGhpcy50YXNrMikpO1xyXG4gKiAgTGlnaHRVSS50YXNrTWFuYWdlci5ydW5TaW1wbGVUYXNrc09yZGVyKHRhc2tzLExheWEuSGFuZGxlci5jcmVhdGUodGhpcyx0aGlzLmNvbXBsZXRlKSk7IC8vIHRhc2sxPT50YXNrMj0+Y29tcGxldGVcclxuICogIExpZ2h0VUkudGFza01hbmFnZXIucnVuU2ltcGxlVGFza3ModGFza3MsTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLHRoaXMuY29tcGxldGUpKTsgIC8vIHRhc2syPT50YXNrMT0+Y29tcGxldGVcclxuICpcclxuICpcdHByaXZhdGUgY29tcGxldGUoKXtcclxuICpcdFx0Y29uc29sZS5sb2coXCJjb21wbGV0ZVwiKTtcclxuICpcdH1cclxuICpcclxuICpcdHByaXZhdGUgdGFzazEoY29tcGxldGU/OkxheWEuSGFuZGxlcil7XHJcbiAqXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gKlx0XHRcdGNvbnNvbGUubG9nKFwidGFzazFcIik7XHJcbiAqXHRcdFx0Y29tcGxldGUucnVuKCk7XHJcbiAqXHRcdH0sIDIwMDApO1xyXG4gKlx0fVxyXG4gKlxyXG4gKlx0cHJpdmF0ZSB0YXNrMihjb21wbGV0ZT86TGF5YS5IYW5kbGVyKXtcclxuICpcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcbiAqXHRcdFx0Y29uc29sZS5sb2coXCJ0YXNrMlwiKTtcclxuICpcdFx0XHRjb21wbGV0ZS5ydW4oKTtcclxuICpcdFx0fSwgMTAwMCk7XHJcbiAqXHR9XHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiDkvZzkuLrku7vliqHpmJ/liJfnmoTnlKjms5UgXHJcbiAqIHByaXZhdGUgdGVzdCgpe1xyXG4gKiAgICAgICAgIExpZ2h0VUkudGFza01hbmFnZXIuYWRkVGFzayhUYXNrQWJzLmNyZWF0ZSh0aGlzLHRoaXMudGVzdFRhc2spKTtcclxuICogICAgICAgICBMaWdodFVJLnRhc2tNYW5hZ2VyLmFkZFRhc2soVGFza0Ficy5jcmVhdGUodGhpcyx0aGlzLnRlc3RUYXNrMikpO1xyXG4gKiAgICAgICAgICBMaWdodFVJLnRhc2tNYW5hZ2VyLnJ1blxyXG4gKiAgICAgfVxyXG4gKlxyXG4gKiAgICAgcHJpdmF0ZSB0ZXN0VGFzaygpOnZvaWR7XHJcbiAqICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICogICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0VGFzazHku7vliqHmiafooYzlrozmr5VcIik7XHJcbiAqICAgICAgICAgICAgIC8vY29tcGxldGUuYXBwbHkodGhpcyk7XHJcbiAqICAgICAgICAgICAgIExpZ2h0VUkudGFza01hbmFnZXIucnVuTmV4dFRhc2soKTtcclxuICogICAgICAgIH0sMik7XHJcbiAqICAgIH1cclxuICpcclxuICogIHByaXZhdGUgdGVzdFRhc2syKCk6dm9pZHtcclxuICogICAgICBjb25zb2xlLmxvZyhcInRlc3RUYXNrMuS7u+WKoeaJp+ihjOWujOavlVwiKTtcclxuICogICAgICAvL2NvbXBsZXRlLmFwcGx5KHRoaXMpO1xyXG4gKiAgICAgIExpZ2h0VUkudGFza01hbmFnZXIucnVuTmV4dFRhc2soKTtcclxuICogIH1cclxuICogXHJcbiAqIOaIluiAheaYr1xyXG4gKiAgXHJcbiAqIHByaXZhdGUgdGVzdCgpe1xyXG4gKiAgICBMaWdodFVJLnRhc2tNYW5hZ2VyLmFkZFRhc2soVGFza0Ficy5jcmVhdGUodGhpcyx0aGlzLnRlc3RUYXNrKSk7XHJcbiAqICAgICAgTGlnaHRVSS50YXNrTWFuYWdlci5hZGRUYXNrKFRhc2tBYnMuY3JlYXRlKHRoaXMsdGhpcy50ZXN0VGFzazIpKTtcclxuICogIH1cclxuICpcclxuICogIHByaXZhdGUgdGVzdFRhc2soY29tcGxldGU6RnVuY3Rpb24pOnZvaWR7XHJcbiAqICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICogICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0VGFzazHku7vliqHmiafooYzlrozmr5VcIik7XHJcbiAqICAgICAgICAgIGNvbXBsZXRlLmFwcGx5KHRoaXMpO1xyXG4gKiAgICAgIH0sMik7XHJcbiAqICB9XHJcbiAqXHJcbiAqICBwcml2YXRlIHRlc3RUYXNrMihjb21wbGV0ZTpGdW5jdGlvbik6dm9pZHtcclxuICogICAgICBjb25zb2xlLmxvZyhcInRlc3RUYXNrMuS7u+WKoeaJp+ihjOWujOavlVwiKTtcclxuICogICAgICBjb21wbGV0ZS5hcHBseSh0aGlzKTtcclxuICogIH1cclxuICogXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza01hbmFnZXIgZXh0ZW5kcyBjYy5FdmVudFRhcmdldHtcclxuICAgIHByaXZhdGUgX2lkOm51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRpYzpEaWN0aW9uYXJ5ID0gbmV3IERpY3Rpb25hcnkoKTtcclxuICAgIHByaXZhdGUgX2Jsb2NrOk1lc3NhZ2VCbG9jaztcclxuICAgIHByaXZhdGUgX2F1dG9SZWJhY2s6Ym9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIF9wb29sOkFycmF5PFRhc2tNYW5hZ2VyPiA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihibG9ja0xlbmd0aDpudW1iZXIgPSA1MDAsIGF1dG9SZWJhY2s6Ym9vbGVhbiA9IGZhbHNlKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrID0gbmV3IE1lc3NhZ2VCbG9jayhibG9ja0xlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5fYXV0b1JlYmFjayA9IGF1dG9SZWJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdChibG9ja0xlbmd0aDpudW1iZXIgPSA1MDAsIGF1dG9SZWJhY2s6Ym9vbGVhbiA9IHRydWUpe1xyXG4gICAgICAgIGlmKHRoaXMuX3Bvb2wubGVuZ3RoIDw9IDApe1xyXG4gICAgICAgICAgICAvL2NyZWF0XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFza01hbmFnZXIoYmxvY2tMZW5ndGgsYXV0b1JlYmFjayk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vYm9ycm93XHJcbiAgICAgICAgICAgIGxldCB0YXNrTWFuYWdlcjpUYXNrTWFuYWdlciA9IHRoaXMuX3Bvb2wucG9wKCk7XHJcbiAgICAgICAgICAgIHRhc2tNYW5hZ2VyLmJsb2NrTGVuZ3RoID0gYmxvY2tMZW5ndGg7XHJcbiAgICAgICAgICAgIHRhc2tNYW5hZ2VyLmF1dG9SZWJhY2sgPSBhdXRvUmViYWNrO1xyXG4gICAgICAgICAgICByZXR1cm4gdGFza01hbmFnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmViYWNrKHRhc2tNYW5hZ2VyOlRhc2tNYW5hZ2VyKXtcclxuICAgICAgICB0YXNrTWFuYWdlci5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuX3Bvb2wucHVzaCh0YXNrTWFuYWdlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRhc2sodGFzazpUYXNrQWJzKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWinuWKoOS4gOS4quS7u+WKoVwiKTtcclxuICAgICAgICB0aGlzLl9ibG9jay5hZGQodGFzayk7XHJcbiAgICAgICAgLy/lpoLmnpzlj6rmnInkuIDkuKrku7vliqEg5YiZ56uL6ams5byA5aeL5omn6KGMXHJcbiAgICAgICAgLy8gaWYodGhpcy5fYmxvY2suc2l6ZSA9PSAxKSB0aGlzLnJ1blRhc2sodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJ1bigpe1xyXG4gICAgICAgIGlmKHRoaXMuX2Jsb2NrLnNpemUgPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucnVuVGFzayh0aGlzLl9ibG9jay5nZXRGaXJzdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKXtcclxuICAgICAgICB0aGlzLl9ibG9jay5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZGljLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miYvliqjosIPnlKjmiafooYzkuIvkuIDkuKrku7vliqFcclxuICAgIHB1YmxpYyBydW5OZXh0VGFzaygpe1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrLnBvcChUYXNrQWJzKTtcclxuICAgICAgICBpZih0aGlzLl9ibG9jay5zaXplID4gMCkgdGhpcy5ydW5UYXNrKHRoaXMuX2Jsb2NrLmdldEZpcnN0KCkpO1xyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8v5om55qyh5Lu75YqhIOaJp+ihjOWujOavlVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaJueasoeS7u+WKoSDmiafooYzlrozmr5VcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTEV2ZW50KExFdmVudC5DT01QTEVURSkpO1xyXG4gICAgICAgICAgICBpZih0aGlzLl9hdXRvUmViYWNrID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgVGFza01hbmFnZXIucmViYWNrKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcnVuVGFzayh0YXNrOlRhc2tBYnMpe1xyXG4gICAgICAgIHRhc2sub25jZShMRXZlbnQuQ09NUExFVEUsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2sucG9wKFRhc2tBYnMpOyAgIC8v5Lu75Yqh5omn6KGM5a6M5q+VICDlh7rliJdcclxuICAgICAgICAgICAgLy/lpoLmnpzov5jmnInku7vliqEg5YiZ57un57ut5omn6KGMXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2Jsb2NrLnNpemUgPiAwKSB0aGlzLnJ1blRhc2sodGhpcy5fYmxvY2suZ2V0Rmlyc3QoKSk7XHJcbiAgICAgICAgICAgIGVsc2UgY29uc29sZS5sb2coXCLmmoLml6Dku7vliqFcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0YXNrLnJ1bigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHJ1blNpbXBsZVRhc2sodGFzazpIYW5kbGVyLGNvbXBsZXRlPzpIYW5kbGVyKXtcclxuICAgICAgICAgICAgaWYodGhpcy5kaWMuZ2V0KHRhc2spKXsgcmV0dXJuIG51bGx9XHJcbiAgICAgICAgICAgIHRoaXMuZGljLnNldCh0YXNrLHRhc2spO1xyXG4gICAgICAgICAgICBpZighdGFzay5hcmdzKSB0YXNrLmFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgdGFzay5hcmdzLnB1c2goY29tcGxldGUpO1xyXG4gICAgICAgICAgICB0YXNrLnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyJ6aG65bqP5omn6KGM5Lu75Yqh5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gdGFza3MgXHJcbiAgICAgKiBAcGFyYW0gY29tcGxldGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBydW5TaW1wbGVUYXNrc09yZGVyKHRhc2tzOkFycmF5PEhhbmRsZXI+LGNvbXBsZXRlPzpIYW5kbGVyKTpudW1iZXJ7XHJcblxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuX2lkKys7XHJcbiAgICAgICAgdGhpcy5kaWMuc2V0KGlkLHRhc2tzKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBsOm51bWJlciA9IHRhc2tzLmxlbmd0aDtcclxuICAgICAgICBsZXQgdGFzazpIYW5kbGVyID0gdGFza3Muc2hpZnQoKTtcclxuICAgICAgICBsZXQgaXRlbUNvbXBsZXRlOkZ1bmN0aW9uID0gKCk9PntcclxuICAgICAgICAgICAgaWYodGFzaykgdGhpcy5jbGVhclNpbXBsZVRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIGxldCB0YXNrbGlzdDpBcnJheTxIYW5kbGVyPiA9IHRoaXMuZGljLmdldChpZCk7XHJcbiAgICAgICAgICAgIGlmKHRhc2tsaXN0ID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLooqvmuIXpmaTkuoZcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRhc2tsaXN0Lmxlbmd0aCA8PSAwKXtcclxuICAgICAgICAgICAgICAgIGlmKGNvbXBsZXRlKSBjb21wbGV0ZS5ydW4oKTsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHRhc2sgPSB0YXNrbGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1blNpbXBsZVRhc2sodGFzayxIYW5kbGVyLmNyZWF0ZSh0aGlzLGl0ZW1Db21wbGV0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJ1blNpbXBsZVRhc2sodGFzayxIYW5kbGVyLmNyZWF0ZSh0aGlzLGl0ZW1Db21wbGV0ZSkpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWQjOaXtuaJp+ihjOS4gOaJueS7u+WKoVxyXG4gICAgICogQHBhcmFtIHRhc2tzIFxyXG4gICAgICogQHBhcmFtIGNvbXBsZXRlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcnVuU2ltcGxlVGFza3ModGFza3M6QXJyYXk8SGFuZGxlcj4sY29tcGxldGU/OkhhbmRsZXIpe1xyXG4gICAgICAgIGxldCBsOm51bWJlciA9IHRhc2tzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYobCA8PSAwKSBpZihjb21wbGV0ZSkgY29tcGxldGUucnVuKCk7XHJcblxyXG4gICAgICAgIGxldCBsaWdodHM6bnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgaXRlbUNvbXBsZXRlOkZ1bmN0aW9uID0gKCk9PntcclxuICAgICAgICAgICAgaWYodGFza3NbbGlnaHRzXSkgdGhpcy5jbGVhclNpbXBsZVRhc2sodGFza3NbbGlnaHRzXSk7XHJcbiAgICAgICAgICAgIGlmKCsrbGlnaHRzID49IGwpe1xyXG4gICAgICAgICAgICAgICAgaWYoY29tcGxldGUpIGNvbXBsZXRlLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaTpudW1iZXIgPSAwOyBpPGw7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMucnVuU2ltcGxlVGFzayh0YXNrc1tpXSxIYW5kbGVyLmNyZWF0ZSh0aGlzLGl0ZW1Db21wbGV0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJTaW1wbGVUYXNrKHRhc2s6SGFuZGxlcil7XHJcbiAgICAgICAgaWYoIXRoaXMuZGljLmdldCh0YXNrKSkgcmV0dXJuOyBcclxuICAgICAgICB0aGlzLmRpYy5yZW1vdmUodGFzayk7IFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYmxvY2tMZW5ndGgodmFsdWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9ibG9jay5zaXplID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBhdXRvUmViYWNrKHZhbHVlOmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX2F1dG9SZWJhY2sgPSB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/logging/LogLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b055daGzFhKgYV6wej3RDAh', 'LogLevel');
// Script/lightUI/logging/LogLevel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel = /** @class */ (function (_super) {
    __extends(LogLevel, _super);
    function LogLevel() {
        var _this = _super.call(this) || this;
        return _this;
    } // end function
    LogLevel.toString = function (param1) {
        var _loc_2 = "Unknown";
        if (param1 == LogLevel.DEBUG) {
            _loc_2 = "DEBUG";
        }
        else if (param1 == LogLevel.INFO) {
            _loc_2 = "INFO";
        }
        else if (param1 == LogLevel.WARN) {
            _loc_2 = "WARN";
        }
        else if (param1 == LogLevel.ERROR) {
            _loc_2 = "ERROR";
        }
        return _loc_2;
    }; // end function
    LogLevel.fromString = function (param1) {
        param1 = param1.toUpperCase();
        if (param1 == this.toString(LogLevel.DEBUG)) {
            return LogLevel.DEBUG;
        }
        if (param1 == this.toString(LogLevel.INFO)) {
            return LogLevel.INFO;
        }
        if (param1 == this.toString(LogLevel.WARN)) {
            return LogLevel.WARN;
        }
        if (param1 == this.toString(LogLevel.ERROR)) {
            return LogLevel.ERROR;
        }
        return -1;
    }; // end function
    LogLevel.DEBUG = 100;
    LogLevel.INFO = 200;
    LogLevel.WARN = 300;
    LogLevel.ERROR = 400;
    return LogLevel;
}(Object));
exports.default = LogLevel;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFxsb2dnaW5nXFxMb2dMZXZlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBSztJQUFzQyw0QkFBTTtJQU96QztRQUFBLFlBRUksaUJBQU8sU0FFVjs7SUFBRCxDQUFDLENBQUEsZUFBZTtJQUVGLGlCQUFRLEdBQXRCLFVBQXVCLE1BQWE7UUFFaEMsSUFBSSxNQUFNLEdBQVUsU0FBUyxDQUFDO1FBQzlCLElBQUksTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQzVCO1lBQ0ksTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUNwQjthQUNJLElBQUksTUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQ2hDO1lBQ0ksTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNuQjthQUNJLElBQUksTUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQ2hDO1lBQ0ksTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNuQjthQUNJLElBQUksTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQ2pDO1lBQ0ksTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUNwQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUMsRUFBQSxlQUFlO0lBRUYsbUJBQVUsR0FBeEIsVUFBeUIsTUFBYTtRQUVsQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUMzQztZQUNJLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUNELElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUMxQztZQUNJLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUMxQztZQUNJLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUMzQztZQUNJLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDLEVBQUEsZUFBZTtJQXJERixjQUFLLEdBQVUsR0FBRyxDQUFDO0lBQ25CLGFBQUksR0FBVSxHQUFHLENBQUM7SUFDbEIsYUFBSSxHQUFVLEdBQUcsQ0FBQztJQUNsQixjQUFLLEdBQVUsR0FBRyxDQUFDO0lBb0RyQyxlQUFDO0NBekRBLEFBeURBLENBekRzQyxNQUFNLEdBeUQ1QztrQkF6RHFCLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyLvu78gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nTGV2ZWwgZXh0ZW5kcyBPYmplY3RcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIERFQlVHOm51bWJlciA9IDEwMDtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIElORk86bnVtYmVyID0gMjAwO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgV0FSTjpudW1iZXIgPSAzMDA7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBFUlJPUjpudW1iZXIgPSA0MDA7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9Ly8gZW5kIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdG9TdHJpbmcocGFyYW0xOm51bWJlcikgOiBTdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBfbG9jXzI6U3RyaW5nID0gXCJVbmtub3duXCI7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbTEgPT0gTG9nTGV2ZWwuREVCVUcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9sb2NfMiA9IFwiREVCVUdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChwYXJhbTEgPT0gTG9nTGV2ZWwuSU5GTylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2xvY18yID0gXCJJTkZPXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocGFyYW0xID09IExvZ0xldmVsLldBUk4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9sb2NfMiA9IFwiV0FSTlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcmFtMSA9PSBMb2dMZXZlbC5FUlJPUilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2xvY18yID0gXCJFUlJPUlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfbG9jXzI7XHJcbiAgICAgICAgfS8vIGVuZCBmdW5jdGlvblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGZyb21TdHJpbmcocGFyYW0xOlN0cmluZykgOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmFtMSA9IHBhcmFtMS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAocGFyYW0xID09IHRoaXMudG9TdHJpbmcoTG9nTGV2ZWwuREVCVUcpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTG9nTGV2ZWwuREVCVUc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhcmFtMSA9PSB0aGlzLnRvU3RyaW5nKExvZ0xldmVsLklORk8pKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTG9nTGV2ZWwuSU5GTztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW0xID09IHRoaXMudG9TdHJpbmcoTG9nTGV2ZWwuV0FSTikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBMb2dMZXZlbC5XQVJOO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXJhbTEgPT0gdGhpcy50b1N0cmluZyhMb2dMZXZlbC5FUlJPUikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBMb2dMZXZlbC5FUlJPUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfS8vIGVuZCBmdW5jdGlvblxyXG5cclxuICAgIH0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/utils/Handler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97dd0yDpDZK9rJzu8viF2iG', 'Handler');
// Script/lightUI/utils/Handler.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LEvent_1 = require("../events/LEvent");
/**
     * <p><code>Handler</code> 是事件处理器类。</p>
     * <p>推荐使用 Handler.create() 方法从对象池创建，减少对象创建消耗。创建的 Handler 对象不再使用后，可以使用 Handler.recover() 将其回收到对象池，回收后不要再使用此对象，否则会导致不可预料的错误。</p>
     * <p><b>注意：</b>由于鼠标事件也用本对象池，不正确的回收及调用，可能会影响鼠标事件的执行。</p>
     */
var Handler = /** @class */ (function (_super) {
    __extends(Handler, _super);
    /**
     * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
     * @param	caller 执行域。
     * @param	method 处理函数。
     * @param	args 函数参数。
     * @param	once 是否只执行一次。
     */
    function Handler(caller, method, args, once) {
        if (caller === void 0) { caller = null; }
        if (method === void 0) { method = null; }
        if (args === void 0) { args = null; }
        if (once === void 0) { once = false; }
        var _this = _super.call(this) || this;
        /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
        _this.runonce = false;
        /**@private */
        _this._id = 0;
        _this.setTo(caller, method, args, once);
        return _this;
    }
    /**
     * 设置此对象的指定属性值。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
     * @return  返回 handler 本身。
     */
    Handler.prototype.setTo = function (caller, method, args, once) {
        if (once === void 0) { once = false; }
        this._id = Handler._gid++;
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.runonce = once;
        return this;
    };
    /**
     * 执行处理器。
     */
    Handler.prototype.run = function () {
        if (this.method == null)
            return null;
        var id = this._id;
        var result = this.method.apply(this.caller, this.args);
        this._id === id && this.runonce && this.recover();
        return result;
    };
    /**
     * 执行处理器，并携带额外数据。
     * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
     */
    Handler.prototype.runWith = function (data) {
        if (this.method == null)
            return null;
        var id = this._id;
        if (data == null)
            var result = this.method.apply(this.caller, this.args);
        else if (!this.args && !data.unshift)
            result = this.method.call(this.caller, data);
        else if (this.args)
            result = this.method.apply(this.caller, this.args.concat(data));
        else
            result = this.method.apply(this.caller, data);
        this._id === id && this.runonce && this.recover();
        return result;
    };
    /**
     * 清理对象引用。
     */
    Handler.prototype.clear = function () {
        this.caller = null;
        this.method = null;
        this.args = null;
        return this;
    };
    /**
     * 清理并回收到 Handler 对象池内。
     */
    Handler.prototype.recover = function () {
        if (this._id > 0) {
            this._id = 0;
            Handler._pool.push(this.clear());
        }
    };
    Handler.prototype.complete = function () {
        this.dispatchEvent(new LEvent_1.default(LEvent_1.default.COMPLETE));
    };
    /**
     * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
     * @return  返回创建的handler实例。
     */
    Handler.create = function (caller, method, args, once) {
        if (args === void 0) { args = null; }
        if (once === void 0) { once = true; }
        if (Handler._pool.length)
            return Handler._pool.pop().setTo(caller, method, args, once);
        return new Handler(caller, method, args, once);
    };
    /**@private handler对象池*/
    Handler._pool = [];
    /**@private */
    Handler._gid = 1;
    return Handler;
}(cc.EventTarget));
exports.default = Handler;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFx1dGlsc1xcSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFdEM7Ozs7T0FJSTtBQUNIO0lBQXFDLDJCQUFjO0lBbUJoRDs7Ozs7O09BTUc7SUFDSCxpQkFBWSxNQUF3QixFQUFFLE1BQTBCLEVBQUUsSUFBdUIsRUFBRSxJQUFxQjtRQUFwRyx1QkFBQSxFQUFBLGFBQXdCO1FBQUUsdUJBQUEsRUFBQSxhQUEwQjtRQUFFLHFCQUFBLEVBQUEsV0FBdUI7UUFBRSxxQkFBQSxFQUFBLFlBQXFCO1FBQWhILFlBQ0ksaUJBQU8sU0FFVjtRQWhCRCw4REFBOEQ7UUFDOUQsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFjO1FBQ0osU0FBRyxHQUFHLENBQUMsQ0FBQztRQVdkLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzNDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsdUJBQUssR0FBTCxVQUFNLE1BQVcsRUFBRSxNQUFxQixFQUFFLElBQWdCLEVBQUUsSUFBVTtRQUFWLHFCQUFBLEVBQUEsWUFBVTtRQUNsRSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQkFBRyxHQUFIO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUks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LENBQUM7SUFDdkMsY0FBYztJQUNDLFlBQUksR0FBVyxDQUFDLENBQUM7SUEyR3BDLGNBQUM7Q0FoSEEsQUFnSEEsQ0FoSHFDLEVBQUUsQ0FBQyxXQUFXLEdBZ0huRDtrQkFoSHFCLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTEV2ZW50IGZyb20gXCIuLi9ldmVudHMvTEV2ZW50XCI7XHJcblxyXG4vKipcclxuXHQgKiA8cD48Y29kZT5IYW5kbGVyPC9jb2RlPiDmmK/kuovku7blpITnkIblmajnsbvjgII8L3A+XHJcblx0ICogPHA+5o6o6I2Q5L2/55SoIEhhbmRsZXIuY3JlYXRlKCkg5pa55rOV5LuO5a+56LGh5rGg5Yib5bu677yM5YeP5bCR5a+56LGh5Yib5bu65raI6ICX44CC5Yib5bu655qEIEhhbmRsZXIg5a+56LGh5LiN5YaN5L2/55So5ZCO77yM5Y+v5Lul5L2/55SoIEhhbmRsZXIucmVjb3ZlcigpIOWwhuWFtuWbnuaUtuWIsOWvueixoeaxoO+8jOWbnuaUtuWQjuS4jeimgeWGjeS9v+eUqOatpOWvueixoe+8jOWQpuWImeS8muWvvOiHtOS4jeWPr+mihOaWmeeahOmUmeivr+OAgjwvcD5cclxuXHQgKiA8cD48Yj7ms6jmhI/vvJo8L2I+55Sx5LqO6byg5qCH5LqL5Lu25Lmf55So5pys5a+56LGh5rGg77yM5LiN5q2j56Gu55qE5Zue5pS25Y+K6LCD55So77yM5Y+v6IO95Lya5b2x5ZON6byg5qCH5LqL5Lu255qE5omn6KGM44CCPC9wPlxyXG5cdCAqL1xyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlciBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0e1xyXG5cclxuICAgIC8qKkBwcml2YXRlIGhhbmRsZXLlr7nosaHmsaAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfcG9vbDogSGFuZGxlcltdID0gW107XHJcbiAgICAvKipAcHJpdmF0ZSAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2dpZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvKiog5omn6KGM5Z+fKHRoaXMp44CCKi9cclxuICAgIGNhbGxlcjogT2JqZWN0fG51bGw7XHJcbiAgICAvKiog5aSE55CG5pa55rOV44CCKi9cclxuICAgIG1ldGhvZDogRnVuY3Rpb258bnVsbDtcclxuICAgIC8qKiDlj4LmlbDjgIIqL1xyXG4gICAgYXJnczogYW55W118bnVsbDtcclxuICAgIC8qKiDooajnpLrmmK/lkKblj6rmiafooYzkuIDmrKHjgILlpoLmnpzkuLp0cnVl77yM5Zue6LCD5ZCO5omn6KGMcmVjb3Zlcigp6L+b6KGM5Zue5pS277yM5Zue5pS25ZCO5Lya6KKr5YaN5Yip55So77yM6buY6K6k5Li6ZmFsc2Ug44CCKi9cclxuICAgIHJ1bm9uY2UgPSBmYWxzZTtcclxuXHJcbiAgICAvKipAcHJpdmF0ZSAqL1xyXG4gICAgcHJvdGVjdGVkIF9pZCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7mjIflrprnmoTlsZ7mgKflgLzvvIzliJvlu7rkuIDkuKogPGNvZGU+SGFuZGxlcjwvY29kZT4g57G755qE5a6e5L6L44CCXHJcbiAgICAgKiBAcGFyYW1cdGNhbGxlciDmiafooYzln5/jgIJcclxuICAgICAqIEBwYXJhbVx0bWV0aG9kIOWkhOeQhuWHveaVsOOAglxyXG4gICAgICogQHBhcmFtXHRhcmdzIOWHveaVsOWPguaVsOOAglxyXG4gICAgICogQHBhcmFtXHRvbmNlIOaYr+WQpuWPquaJp+ihjOS4gOasoeOAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsZXI6IE9iamVjdHxudWxsPW51bGwsIG1ldGhvZDogRnVuY3Rpb258bnVsbD1udWxsLCBhcmdzOiBhbnlbXXxudWxsID0gbnVsbCwgb25jZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNldFRvKGNhbGxlciwgbWV0aG9kLCBhcmdzLCBvbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruatpOWvueixoeeahOaMh+WumuWxnuaAp+WAvOOAglxyXG4gICAgICogQHBhcmFtXHRjYWxsZXIg5omn6KGM5Z+fKHRoaXMp44CCXHJcbiAgICAgKiBAcGFyYW1cdG1ldGhvZCDlm57osIPmlrnms5XjgIJcclxuICAgICAqIEBwYXJhbVx0YXJncyDmkLrluKbnmoTlj4LmlbDjgIJcclxuICAgICAqIEBwYXJhbVx0b25jZSDmmK/lkKblj6rmiafooYzkuIDmrKHvvIzlpoLmnpzkuLp0cnVl77yM5omn6KGM5ZCO5omn6KGMcmVjb3Zlcigp6L+b6KGM5Zue5pS244CCXHJcbiAgICAgKiBAcmV0dXJuICDov5Tlm54gaGFuZGxlciDmnKzouqvjgIJcclxuICAgICAqL1xyXG4gICAgc2V0VG8oY2FsbGVyOiBhbnksIG1ldGhvZDogRnVuY3Rpb258bnVsbCwgYXJnczogYW55W118bnVsbCwgb25jZT1mYWxzZSk6IEhhbmRsZXIge1xyXG4gICAgICAgIHRoaXMuX2lkID0gSGFuZGxlci5fZ2lkKys7XHJcbiAgICAgICAgdGhpcy5jYWxsZXIgPSBjYWxsZXI7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgICAgICB0aGlzLnJ1bm9uY2UgPSBvbmNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omn6KGM5aSE55CG5Zmo44CCXHJcbiAgICAgKi9cclxuICAgIHJ1bigpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGhvZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICB2YXIgaWQ6IG51bWJlciA9IHRoaXMuX2lkO1xyXG4gICAgICAgIHZhciByZXN1bHQ6IGFueSA9IHRoaXMubWV0aG9kLmFwcGx5KHRoaXMuY2FsbGVyLCB0aGlzLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2lkID09PSBpZCAmJiB0aGlzLnJ1bm9uY2UgJiYgdGhpcy5yZWNvdmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJp+ihjOWkhOeQhuWZqO+8jOW5tuaQuuW4pumineWkluaVsOaNruOAglxyXG4gICAgICogQHBhcmFtXHRkYXRhIOmZhOWKoOeahOWbnuiwg+aVsOaNru+8jOWPr+S7peaYr+WNleaVsOaNruaIluiAhUFycmF5KOS9nOS4uuWkmuWPginjgIJcclxuICAgICAqL1xyXG4gICAgcnVuV2l0aChkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGhvZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICB2YXIgaWQ6IG51bWJlciA9IHRoaXMuX2lkO1xyXG4gICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQ6IGFueSA9IHRoaXMubWV0aG9kLmFwcGx5KHRoaXMuY2FsbGVyLCB0aGlzLmFyZ3MpO1xyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmFyZ3MgJiYgIWRhdGEudW5zaGlmdCkgcmVzdWx0ID0gdGhpcy5tZXRob2QuY2FsbCh0aGlzLmNhbGxlciwgZGF0YSk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hcmdzKSByZXN1bHQgPSB0aGlzLm1ldGhvZC5hcHBseSh0aGlzLmNhbGxlciwgdGhpcy5hcmdzLmNvbmNhdChkYXRhKSk7XHJcbiAgICAgICAgZWxzZSByZXN1bHQgPSB0aGlzLm1ldGhvZC5hcHBseSh0aGlzLmNhbGxlciwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5faWQgPT09IGlkICYmIHRoaXMucnVub25jZSAmJiB0aGlzLnJlY292ZXIoKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF55CG5a+56LGh5byV55So44CCXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCk6IEhhbmRsZXIge1xyXG4gICAgICAgIHRoaXMuY2FsbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuW5tuWbnuaUtuWIsCBIYW5kbGVyIOWvueixoeaxoOWGheOAglxyXG4gICAgICovXHJcbiAgICByZWNvdmVyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5faWQgPSAwO1xyXG4gICAgICAgICAgICBIYW5kbGVyLl9wb29sLnB1c2godGhpcy5jbGVhcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGxldGUoKTp2b2lke1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTEV2ZW50KExFdmVudC5DT01QTEVURSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuO5a+56LGh5rGg5YaF5Yib5bu65LiA5LiqSGFuZGxlcu+8jOm7mOiupOS8muaJp+ihjOS4gOasoeW5tueri+WNs+WbnuaUtu+8jOWmguaenOS4jemcgOimgeiHquWKqOWbnuaUtu+8jOiuvue9rm9uY2Xlj4LmlbDkuLpmYWxzZeOAglxyXG4gICAgICogQHBhcmFtXHRjYWxsZXIg5omn6KGM5Z+fKHRoaXMp44CCXHJcbiAgICAgKiBAcGFyYW1cdG1ldGhvZCDlm57osIPmlrnms5XjgIJcclxuICAgICAqIEBwYXJhbVx0YXJncyDmkLrluKbnmoTlj4LmlbDjgIJcclxuICAgICAqIEBwYXJhbVx0b25jZSDmmK/lkKblj6rmiafooYzkuIDmrKHvvIzlpoLmnpzkuLp0cnVl77yM5Zue6LCD5ZCO5omn6KGMcmVjb3Zlcigp6L+b6KGM5Zue5pS277yM6buY6K6k5Li6dHJ1ZeOAglxyXG4gICAgICogQHJldHVybiAg6L+U5Zue5Yib5bu655qEaGFuZGxlcuWunuS+i+OAglxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlKGNhbGxlcjogYW55LCBtZXRob2Q6IEZ1bmN0aW9ufG51bGwsIGFyZ3M6IGFueVtdfG51bGwgPSBudWxsLCBvbmNlOiBib29sZWFuID0gdHJ1ZSk6IEhhbmRsZXIge1xyXG4gICAgICAgIGlmIChIYW5kbGVyLl9wb29sLmxlbmd0aCkgXHJcbiAgICAgICAgICAgIHJldHVybiAoSGFuZGxlci5fcG9vbC5wb3AoKSBhcyBIYW5kbGVyKS5zZXRUbyhjYWxsZXIsIG1ldGhvZCwgYXJncywgb25jZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIYW5kbGVyKGNhbGxlciwgbWV0aG9kLCBhcmdzLCBvbmNlKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/utils/MyMath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5300OuNfNF/pacBA1XtRoz', 'MyMath');
// Script/lightUI/utils/MyMath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author light
 *
 */
var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    MyMath.getPersent = function (num1, num2) {
        return Math.ceil((num1 / num2) * 100) + "%";
    };
    MyMath.randomIntRange = function (minNum, maxNum) {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    };
    MyMath.getAngle = function (from, to) {
        var dx = to.x - from.x;
        var dy = to.y - from.y;
        //trace(from,to,dx,dy,Math.atan(dx/dy))
        return Math.atan(dx / dy);
    };
    MyMath.getRotationFromAngle = function (angle) {
        //trace(angle,angle*)
        return angle * 180 / Math.PI;
    };
    MyMath.randomInRectangle = function (rect) {
        return new cc.Vec2(MyMath.randomIntRange(rect.x, rect.x + rect.width), MyMath.randomIntRange(rect.y, rect.y + rect.height));
    };
    MyMath.randomFromChange = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
    };
    MyMath.randomFrom = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        return arg[MyMath.randomIntRange(0, arg.length)];
    };
    MyMath.randomFromArray = function (arg) {
        return arg[MyMath.randomIntRange(0, arg.length - 1)];
    };
    MyMath.between = function (num, n1, n2) {
        if (n2 > n1) {
            var temp = n1;
            n1 = n2;
            n2 = temp;
        }
        if (num <= n1 && num >= n2)
            return true;
        return false;
    };
    MyMath.sun = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        var sun = 0;
        for (var i = 0; i < arg.length; i++) {
            sun += arg[i];
        }
        return sun;
    };
    MyMath.countTheSamenumber = function (numbers, num) {
        var count = 0;
        for (var i = 0; i < numbers.length; numbers) {
            if (numbers[i] == num)
                count++;
        }
        return count;
    };
    MyMath.countTheSamestring = function (numbers, str) {
        var count = 0;
        for (var i = 0; i < numbers.length; numbers) {
            if (numbers[i] == str)
                count++;
        }
        return count;
    };
    MyMath.getPointDistance = function (p1, p2) {
        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    //数组元素叠加 [1,2,3,4,,] -> [1,3,6,10,,,,]
    MyMath.arrOverAdd = function (arr) {
        if (!arr || arr.length <= 0) {
            return [];
        }
        else {
            var temp = [];
            for (var i = 0; i < arr.length; i++) {
                if (i == 0) {
                    temp[i] = arr[i];
                }
                else {
                    temp[i] = temp[i - 1] + arr[i];
                }
            }
            return temp;
        }
    };
    MyMath.getAreaIndex = function (num, arr) {
        var item;
        for (var i = 0; i < arr.length; i++) {
            item = arr[i];
            if (num >= item[0] && num <= item[1])
                return i;
        }
        return -1;
    };
    /**
     * 获取数组中最接近的值得index
     * @param random 随机数
     * @param weightArray 权重数组
     * @returns {number}
     */
    MyMath.getArrIndex = function (random, weightArray) {
        var index = 0;
        if (random <= weightArray[0]) {
            return 0;
        }
        else if (random >= weightArray[weightArray.length - 1]) {
            index = weightArray.length - 1;
            return index;
        }
        else {
            for (var i = 0; i < weightArray.length; i++) {
                if (random <= weightArray[i]) {
                    index = i;
                }
                else if (random > weightArray[i] && random <= weightArray[i + 1]) {
                    index = i + 1;
                    break;
                }
                else if (random > weightArray[i] && random <= weightArray[i + 1]) {
                    index = i + 1;
                    break;
                }
            }
        }
        return index;
    };
    MyMath.getRandomByWight = function (weightArr) {
        weightArr = this.arrOverAdd(weightArr);
        var totalWeight = weightArr[weightArr.length - 1];
        var random = Math.random() * totalWeight;
        var arrIndex = this.getArrIndex(random, weightArr);
        return arrIndex;
    };
    MyMath.map2arr = function (map) {
        var re = [];
        for (var k in map) {
            re.push(map[k]);
        }
        return re;
    };
    MyMath.bigNumberChange = function (num, fractionDigits) {
        if (fractionDigits === void 0) { fractionDigits = 0; }
        var re = num.toString();
        if (num > 10000) {
            num = num / 10000;
            num.toFixed(fractionDigits);
            re = num + "W";
        }
        return re;
    };
    MyMath.formatDate = function (date, fmt) {
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒 
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
    };
    return MyMath;
}());
exports.default = MyMath;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFx1dGlsc1xcTXlNYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtJQW9MQSxDQUFDO0lBbkxpQixpQkFBVSxHQUF4QixVQUF5QixJQUFZLEVBQUUsSUFBWTtRQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2hELENBQUM7SUFFYSxxQkFBYyxHQUE1QixVQUE2QixNQUFjLEVBQUUsTUFBYztRQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVhLGVBQVEsR0FBdEIsVUFBdUIsSUFBYSxFQUFFLEVBQVc7UUFDN0MsSUFBSSxFQUFFLEdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksRUFBRSxHQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvQix1Q0FBdUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRWEsMkJBQW9CLEdBQWxDLFVBQW1DLEtBQWE7UUFDNUMscUJBQXFCO1FBQ3JCLE9BQU8sS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFYSx3QkFBaUIsR0FBL0IsVUFBZ0MsSUFBYTtRQUN6QyxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEksQ0FBQztJQUVhLHVCQUFnQixHQUE5QjtRQUErQixhQUFNO2FBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtZQUFOLHdCQUFNOztJQUVyQyxDQUFDO0lBRWEsaUJBQVUsR0FBeEI7UUFBeUIsYUFBTTthQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07WUFBTix3QkFBTTs7UUFDM0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVhLHNCQUFlLEdBQTdCLFVBQThCLEdBQWU7UUFDekMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFYSxjQUFPLEdBQXJCLFVBQXNCLEdBQVcsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUNyRCxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDVCxJQUFJLElBQUksR0FBVyxFQUFFLENBQUM7WUFDdEIsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNSLEVBQUUsR0FBRyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3hDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFYSxVQUFHLEdBQWpCO1FBQWtCLGFBQU07YUFBTixVQUFNLEVBQU4scUJBQU0sRUFBTixJQUFNO1lBQU4sd0JBQU07O1FBQ3BCLElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFFZixDQUFDO0lBRWEseUJBQWtCLEdBQWhDLFVBQWlDLE9BQXNCLEVBQUUsR0FBVztRQUNoRSxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFO1lBQ2pELElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7Z0JBQUUsS0FBSyxFQUFFLENBQUM7U0FDbEM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRWEseUJBQWtCLEdBQWhDLFVBQWlDLE9BQXNCLEVBQUUsR0FBVztRQUNoRSxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFO1lBQ2pELElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7Z0JBQUUsS0FBSyxFQUFFLENBQUM7U0FDbEM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBR2EsdUJBQWdCLEdBQTlCLFVBQStCLEVBQVcsRUFBRSxFQUFXO1FBQ25ELElBQUksRUFBRSxHQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEVBQUUsR0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQ0FBc0M7SUFDdkIsaUJBQVUsR0FBekIsVUFBMEIsR0FBa0I7UUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN6QixPQUFPLEVBQUUsQ0FBQztTQUNiO2FBQU07WUFDSCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNSLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbEM7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRWEsbUJBQVksR0FBMUIsVUFBMkIsR0FBVyxFQUFFLEdBQXlCO1FBQzdELElBQUksSUFBbUIsQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNZLGtCQUFXLEdBQTFCLFVBQTJCLE1BQWMsRUFBRSxXQUEwQjtRQUNqRSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLE1BQU0sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxDQUFDLENBQUM7U0FDWjthQUFNLElBQUksTUFBTSxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3RELEtBQUssR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUMvQixPQUFPLEtBQUssQ0FBQztTQUNoQjthQUFNO1lBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDMUIsS0FBSyxHQUFHLENBQUMsQ0FBQztpQkFDYjtxQkFBTSxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hFLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNkLE1BQUs7aUJBQ1I7cUJBQU0sSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNoRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZCxNQUFNO2lCQUNUO2FBQ0o7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFYSx1QkFBZ0IsR0FBOUIsVUFBK0IsU0FBd0I7UUFDbkQsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQztRQUN6QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNuRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRWEsY0FBTyxHQUFyQixVQUFzQixHQUFRO1FBQzFCLElBQUksRUFBRSxHQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkI7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFYSxzQkFBZSxHQUE3QixVQUE4QixHQUFXLEVBQUUsY0FBMEI7UUFBMUIsK0JBQUEsRUFBQSxrQkFBMEI7UUFDakUsSUFBSSxFQUFFLEdBQVcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEtBQUssRUFBRTtZQUNiLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUIsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbEI7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFYSxpQkFBVSxHQUF4QixVQUF5QixJQUFVLEVBQUUsR0FBVztRQUM1QyxJQUFJLENBQUMsR0FBRztZQUNKLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztZQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBYSxLQUFLO1NBQ2hELENBQUM7UUFDRixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN4RjtRQUNELEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2IsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0c7U0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXBMQSxBQW9MQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBhdXRob3IgbGlnaHRcclxuICogXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeU1hdGgge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQZXJzZW50KG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKChudW0xIC8gbnVtMikgKiAxMDApICsgXCIlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnRSYW5nZShtaW5OdW06IG51bWJlciwgbWF4TnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heE51bSAtIG1pbk51bSArIDEpKSArIG1pbk51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBbmdsZShmcm9tOiBjYy5WZWMyLCB0bzogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIGR4OiBudW1iZXIgPSB0by54IC0gZnJvbS54O1xyXG4gICAgICAgIHZhciBkeTogbnVtYmVyID0gdG8ueSAtIGZyb20ueTtcclxuICAgICAgICAvL3RyYWNlKGZyb20sdG8sZHgsZHksTWF0aC5hdGFuKGR4L2R5KSlcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuKGR4IC8gZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Um90YXRpb25Gcm9tQW5nbGUoYW5nbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy90cmFjZShhbmdsZSxhbmdsZSopXHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlICogMTgwIC8gTWF0aC5QSTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbUluUmVjdGFuZ2xlKHJlY3Q6IGNjLlJlY3QpOiBjYy5WZWMyIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIoTXlNYXRoLnJhbmRvbUludFJhbmdlKHJlY3QueCwgcmVjdC54ICsgcmVjdC53aWR0aCksIE15TWF0aC5yYW5kb21JbnRSYW5nZShyZWN0LnksIHJlY3QueSArIHJlY3QuaGVpZ2h0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Gcm9tQ2hhbmdlKC4uLmFyZyk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbUZyb20oLi4uYXJnKTogYW55IHtcclxuICAgICAgICByZXR1cm4gYXJnW015TWF0aC5yYW5kb21JbnRSYW5nZSgwLCBhcmcubGVuZ3RoKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Gcm9tQXJyYXkoYXJnOiBBcnJheTxhbnk+KTogYW55IHtcclxuICAgICAgICByZXR1cm4gYXJnW015TWF0aC5yYW5kb21JbnRSYW5nZSgwLCBhcmcubGVuZ3RoIC0gMSldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmV0d2VlbihudW06IG51bWJlciwgbjE6IG51bWJlciwgbjI6IG51bWJlcik6IEJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChuMiA+IG4xKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wOiBudW1iZXIgPSBuMTtcclxuICAgICAgICAgICAgbjEgPSBuMjtcclxuICAgICAgICAgICAgbjIgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobnVtIDw9IG4xICYmIG51bSA+PSBuMikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3VuKC4uLmFyZyk6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIHN1bjogbnVtYmVyID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgYXJnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1biArPSBhcmdbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdW47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY291bnRUaGVTYW1lbnVtYmVyKG51bWJlcnM6IEFycmF5PG51bWJlcj4sIG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBudW1iZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChudW1iZXJzW2ldID09IG51bSkgY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY291bnRUaGVTYW1lc3RyaW5nKG51bWJlcnM6IEFycmF5PHN0cmluZz4sIHN0cjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBudW1iZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChudW1iZXJzW2ldID09IHN0cikgY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFBvaW50RGlzdGFuY2UocDE6IGNjLlZlYzIsIHAyOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgZHg6IG51bWJlciA9IHAyLnggLSBwMS54O1xyXG4gICAgICAgIHZhciBkeTogbnVtYmVyID0gcDIueSAtIHAxLnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlbDnu4TlhYPntKDlj6DliqAgWzEsMiwzLDQsLF0gLT4gWzEsMyw2LDEwLCwsLF1cclxuICAgIHByaXZhdGUgc3RhdGljIGFyck92ZXJBZGQoYXJyOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgaWYgKCFhcnIgfHwgYXJyLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdGVtcCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBbaV0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBbaV0gPSB0ZW1wW2kgLSAxXSArIGFycltpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBcmVhSW5kZXgobnVtOiBudW1iZXIsIGFycjogQXJyYXk8QXJyYXk8bnVtYmVyPj4pOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBpdGVtOiBBcnJheTxudW1iZXI+O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChudW0gPj0gaXRlbVswXSAmJiBudW0gPD0gaXRlbVsxXSkgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaVsOe7hOS4reacgOaOpei/keeahOWAvOW+l2luZGV4XHJcbiAgICAgKiBAcGFyYW0gcmFuZG9tIOmaj+acuuaVsFxyXG4gICAgICogQHBhcmFtIHdlaWdodEFycmF5IOadg+mHjeaVsOe7hFxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0QXJySW5kZXgocmFuZG9tOiBudW1iZXIsIHdlaWdodEFycmF5OiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuICAgICAgICBpZiAocmFuZG9tIDw9IHdlaWdodEFycmF5WzBdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmFuZG9tID49IHdlaWdodEFycmF5W3dlaWdodEFycmF5Lmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gd2VpZ2h0QXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2VpZ2h0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb20gPD0gd2VpZ2h0QXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbSA+IHdlaWdodEFycmF5W2ldICYmIHJhbmRvbSA8PSB3ZWlnaHRBcnJheVtpICsgMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbSA+IHdlaWdodEFycmF5W2ldICYmIHJhbmRvbSA8PSB3ZWlnaHRBcnJheVtpICsgMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUJ5V2lnaHQod2VpZ2h0QXJyOiBBcnJheTxudW1iZXI+KTogbnVtYmVyIHtcclxuICAgICAgICB3ZWlnaHRBcnIgPSB0aGlzLmFyck92ZXJBZGQod2VpZ2h0QXJyKTtcclxuICAgICAgICB2YXIgdG90YWxXZWlnaHQgPSB3ZWlnaHRBcnJbd2VpZ2h0QXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogdG90YWxXZWlnaHQ7XHJcbiAgICAgICAgdmFyIGFyckluZGV4ID0gdGhpcy5nZXRBcnJJbmRleChyYW5kb20sIHdlaWdodEFycik7XHJcbiAgICAgICAgcmV0dXJuIGFyckluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWFwMmFycihtYXA6IGFueSk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIGxldCByZTogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gbWFwKSB7XHJcbiAgICAgICAgICAgIHJlLnB1c2gobWFwW2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmlnTnVtYmVyQ2hhbmdlKG51bTogbnVtYmVyLCBmcmFjdGlvbkRpZ2l0czogbnVtYmVyID0gMCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJlOiBzdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAobnVtID4gMTAwMDApIHtcclxuICAgICAgICAgICAgbnVtID0gbnVtIC8gMTAwMDA7XHJcbiAgICAgICAgICAgIG51bS50b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKTtcclxuICAgICAgICAgICAgcmUgPSBudW0gKyBcIldcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmbXQ6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBvID0ge1xyXG4gICAgICAgICAgICBcIk0rXCI6IGRhdGUuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAvL+aciOS7vSBcclxuICAgICAgICAgICAgXCJkK1wiOiBkYXRlLmdldERhdGUoKSwgICAgICAgICAgICAgICAgICAgIC8v5pelIFxyXG4gICAgICAgICAgICBcImgrXCI6IGRhdGUuZ2V0SG91cnMoKSwgICAgICAgICAgICAgICAgICAgLy/lsI/ml7YgXHJcbiAgICAgICAgICAgIFwibStcIjogZGF0ZS5nZXRNaW51dGVzKCksICAgICAgICAgICAgICAgICAvL+WIhiBcclxuICAgICAgICAgICAgXCJzK1wiOiBkYXRlLmdldFNlY29uZHMoKSwgICAgICAgICAgICAgICAgIC8v56eSIFxyXG4gICAgICAgICAgICBcInErXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmIFxyXG4gICAgICAgICAgICBcIlNcIjogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAgICAgICAgICAgICAvL+avq+enkiBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICgvKHkrKS8udGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBrIGluIG8pIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCIoXCIgKyBrICsgXCIpXCIpLnRlc3QoZm10KSkge1xyXG4gICAgICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbXQ7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/hall/service/GameHttpService.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34c10sNInlOjKuHdb/xa3Wb', 'GameHttpService');
// Script/hall/service/GameHttpService.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HallNotification_1 = require("../events/HallNotification");
var HallAlert_1 = require("../utils/HallAlert");
var MountDataAbs_1 = require("../../lightUI/components/MountDataAbs");
var HallFacase_1 = require("./HallFacase");
/**
 * 这里处理与服务器段的http通信事务  游戏相关接口在这里
 */
var GameHttpService = /** @class */ (function (_super) {
    __extends(GameHttpService, _super);
    function GameHttpService() {
        var _this = _super.call(this, GameHttpService.NAME) || this;
        _this.tenantId = "AS";
        _this._token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjI2MzMxLCJhdWQiOiIiLCJleHAiOjE2NjUwNDcyNzgsImlhdCI6MTY2MjQ1NTI3OCwiaXNzIjoiIiwianRpIjoiYTljYzEyMzhlY2MwZDg2NDhhMGNjN2UwODQ4MGQ4MTEiLCJuYmYiOjE2NjI0NTUyNzgsInN1YiI6IiJ9.ITQC7zbvDV8OpUrTfO3o69STngyxbg30Q90UH6FaNGw";
        _this.isShowAlert = false;
        _this.token = cc.sys.localStorage.getItem('token');
        return _this;
    }
    Object.defineProperty(GameHttpService.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
            cc.sys.localStorage.setItem('token', this._token);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameHttpService.prototype, "_tenantId", {
        set: function (val) {
            this.tenantId = val;
        },
        enumerable: false,
        configurable: true
    });
    GameHttpService.prototype.httpGet = function (url, param, callback) {
        // let lobbyhttp = window.GetAppConfig()['lobbyhttp'];
        // let htp = lobbyhttp.split(':')[0];
        // url = htp + "://" + url;
        url = window.GetAppConfig()['apiAdrress'] + url;
        var xhr = cc.loader.getXMLHttpRequest();
        param = (param) ? param : {};
        // param.tenantId = this.tenantId;
        var params = [];
        for (var key in param) {
            params.push(key + '=' + param[key]);
        }
        // var dataStr = params.join('&');
        // url += "?" + dataStr;
        // this.sentNotification(HallNotification.SMALL_LOADING_SHOW, "httpGetCallBack");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                var respone = xhr.responseText;
                if (respone)
                    respone = JSON.parse(respone);
                callback && callback(respone);
                // this.sentNotification(HallNotification.SMALL_LOADING_HIDE, "httpGetCallBack");
            }
            else if (xhr.readyState === 4 && xhr.status == 400) {
                var respone = JSON.parse(xhr.responseText);
                HallAlert_1.default.SmallAlert(respone.message);
                // this.sentNotification(HallNotification.SMALL_LOADING_HIDE, "httpGetCallBack");
            }
            else if (xhr.readyState === 4 && xhr.status == 401) {
                this.checkErro();
            }
        }.bind(this);
        xhr.withCredentials = true;
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
        xhr.setRequestHeader("Content-Type", " text/html");
        if (this.token)
            xhr.setRequestHeader('Authorization', this.token);
        // xhr.setRequestHeader('tenantId', this.tenantId);
        xhr.timeout = 8000; // 8 seconds for timeout
        xhr.send();
    };
    GameHttpService.prototype.checkErro = function () {
        var _this = this;
        if (this.isShowAlert == true)
            return;
        this.isShowAlert = true;
        this.sentNotification(HallNotification_1.default.SMALL_LOADING_HIDE, "httpGetCallBack");
        var merberMount = this.getSingleton(MountDataAbs_1.default.TOKENERROR);
        merberMount.update({ type: MountDataAbs_1.default.TOKENERROR, data: null });
        HallAlert_1.default.AlertOk("账号在其它地方登录，请重新登陆!", function () {
            _this.isShowAlert = false;
            HallFacase_1.default.getInstance().sentNotification(HallNotification_1.default.HALL_QUIT);
            HallFacase_1.default.getInstance().sentNotification(HallNotification_1.default.MAINLAYER_HIDE);
            //LightUI.removeAllUI();
        });
    };
    /**
     * 发起post请求 成功后回调callback
     * @param url
     * @param params
     * @param callback
     * @param fireParam         是否把请求参数返回给回调
     * @returns
     */
    GameHttpService.prototype.httpPost = function (url, params, callback, fireParam) {
        var _this = this;
        if (fireParam === void 0) { fireParam = false; }
        var lobbyhttp = window.GetAppConfig()['lobbyhttp'];
        var htp = lobbyhttp.split(':')[0];
        url = htp + "://" + url;
        return new Promise(function (resolve, reject) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                // cc.log("Get: readyState:" + xhr.readyState + " status:" + xhr.status);
                if (xhr.readyState === 4 && xhr.status == 200) {
                    var respone = xhr.responseText;
                    if (callback) {
                        if (respone == "" || respone == null) {
                            if (fireParam == true)
                                callback(params);
                            else
                                callback(null);
                        }
                        else {
                            if (fireParam == true)
                                callback(JSON.parse(respone), params);
                            else
                                callback(JSON.parse(respone));
                        }
                    }
                }
                else if (xhr.readyState === 4 && xhr.status == 400) {
                    var respone = JSON.parse(xhr.responseText);
                    HallAlert_1.default.SmallAlert(respone.message);
                }
                else if (xhr.readyState === 4 && xhr.status == 401) {
                    this.checkErro();
                    //callback(-1);
                }
            }.bind(_this);
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
            xhr.setRequestHeader("Content-Type", "application/json");
            if (_this.token)
                xhr.setRequestHeader('Authorization', _this.token);
            xhr.setRequestHeader('tenantId', _this.tenantId);
            xhr.timeout = 8000; // 5 seconds for timeout
            xhr.send(JSON.stringify(params));
        });
    };
    /**主页信息 用户信息 */
    GameHttpService.prototype.requestMainHomeInfo = function (callback) {
        var param = {};
        this.httpGet("home", param, function (data) {
            callback && callback(data);
        });
    };
    GameHttpService.NAME = "GameHttpService";
    GameHttpService.POST = "POST";
    GameHttpService.PUT = "PUT";
    return GameHttpService;
}(com.lightMVC.parrerns.Model));
exports.default = GameHttpService;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxoYWxsXFxzZXJ2aWNlXFxHYW1lSHR0cFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELGdEQUEyQztBQUMzQyxzRUFBaUU7QUFDakUsMkNBQXNDO0FBRXRDOztHQUVHO0FBQ0g7SUFBNkMsbUNBQTJCO0lBT3BFO1FBQUEsWUFDSSxrQkFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLFNBRTlCO1FBUk0sY0FBUSxHQUFXLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVcsMFFBQTBRLENBQUM7UUF5RTVSLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBbkVqQyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7SUFDdEQsQ0FBQztJQUVELHNCQUFXLGtDQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFpQixLQUFhO1lBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUxBO0lBT0Qsc0JBQVcsc0NBQVM7YUFBcEIsVUFBcUIsR0FBRztZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELGlDQUFPLEdBQVAsVUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQWtCO1FBRWxDLHNEQUFzRDtRQUN0RCxxQ0FBcUM7UUFDckMsMkJBQTJCO1FBRTNCLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBR2hELElBQUks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ZSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVsRSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBLHdCQUF3QjtZQUUzQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxlQUFlO0lBQ1IsNkNBQW1CLEdBQTFCLFVBQTJCLFFBQWtCO1FBQ3pDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLElBQVM7WUFDM0MsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUEzSmEsb0JBQUksR0FBVyxpQkFBaUIsQ0FBQztJQUd4QixvQkFBSSxHQUFXLE1BQU0sQ0FBQztJQUN0QixtQkFBRyxHQUFXLEtBQUssQ0FBQztJQXdKL0Msc0JBQUM7Q0E3SkQsQUE2SkMsQ0E3SjRDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0E2SnZFO2tCQTdKb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIYWxsTm90aWZpY2F0aW9uIGZyb20gXCIuLi9ldmVudHMvSGFsbE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgSGFsbEFsZXJ0IGZyb20gXCIuLi91dGlscy9IYWxsQWxlcnRcIjtcclxuaW1wb3J0IE1vdW50RGF0YUFicyBmcm9tIFwiLi4vLi4vbGlnaHRVSS9jb21wb25lbnRzL01vdW50RGF0YUFic1wiO1xyXG5pbXBvcnQgSGFsbEZhY2FkZSBmcm9tIFwiLi9IYWxsRmFjYXNlXCI7XHJcblxyXG4vKipcclxuICog6L+Z6YeM5aSE55CG5LiO5pyN5Yqh5Zmo5q6155qEaHR0cOmAmuS/oeS6i+WKoSAg5ri45oiP55u45YWz5o6l5Y+j5Zyo6L+Z6YeMXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSHR0cFNlcnZpY2UgZXh0ZW5kcyBjb20ubGlnaHRNVkMucGFycmVybnMuTW9kZWwgaW1wbGVtZW50cyBjb20ubGlnaHRNVkMuaW50ZXJmYWNlcy5JTW9kZWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBOQU1FOiBzdHJpbmcgPSBcIkdhbWVIdHRwU2VydmljZVwiO1xyXG4gICAgcHVibGljIHRlbmFudElkOiBzdHJpbmcgPSBcIkFTXCI7XHJcbiAgICBwcml2YXRlIF90b2tlbjogc3RyaW5nID0gXCJCZWFyZXIgZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFhV1FpT2pJMk16TXhMQ0poZFdRaU9pSWlMQ0psZUhBaU9qRTJOalV3TkRjeU56Z3NJbWxoZENJNk1UWTJNalExTlRJM09Dd2lhWE56SWpvaUlpd2lhblJwSWpvaVlUbGpZekV5TXpobFkyTXdaRGcyTkRoaE1HTmpOMlV3T0RRNE1HUTRNVEVpTENKdVltWWlPakUyTmpJME5UVXlOemdzSW5OMVlpSTZJaUo5LklUUUM3emJ2RFY4T3BVclRmTzNvNjlTVG5neXhiZzMwUTkwVUg2RmFOR3dcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUE9TVDogc3RyaW5nID0gXCJQT1NUXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBVVDogc3RyaW5nID0gXCJQVVRcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihHYW1lSHR0cFNlcnZpY2UuTkFNRSk7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0b2tlbih2YWx1ZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdmFsdWU7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRoaXMuX3Rva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IF90ZW5hbnRJZCh2YWwpIHtcclxuICAgICAgICB0aGlzLnRlbmFudElkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgaHR0cEdldCh1cmwsIHBhcmFtLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgICAgLy8gbGV0IGxvYmJ5aHR0cCA9IHdpbmRvdy5HZXRBcHBDb25maWcoKVsnbG9iYnlodHRwJ107XHJcbiAgICAgICAgLy8gbGV0IGh0cCA9IGxvYmJ5aHR0cC5zcGxpdCgnOicpWzBdO1xyXG4gICAgICAgIC8vIHVybCA9IGh0cCArIFwiOi8vXCIgKyB1cmw7XHJcblxyXG4gICAgICAgIHVybCA9IHdpbmRvdy5HZXRBcHBDb25maWcoKVsnYXBpQWRycmVzcyddICsgdXJsO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBwYXJhbSA9IChwYXJhbSkgPyBwYXJhbSA6IHt9O1xyXG4gICAgICAgIC8vIHBhcmFtLnRlbmFudElkID0gdGhpcy50ZW5hbnRJZDtcclxuXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbSkge1xyXG4gICAgICAgICAgICBwYXJhbXMucHVzaChrZXkgKyAnPScgKyBwYXJhbVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdmFyIGRhdGFTdHIgPSBwYXJhbXMuam9pbignJicpO1xyXG4gICAgICAgIC8vIHVybCArPSBcIj9cIiArIGRhdGFTdHI7XHJcbiAgICAgICAgLy8gdGhpcy5zZW50Tm90aWZpY2F0aW9uKEhhbGxOb3RpZmljYXRpb24uU01BTExfTE9BRElOR19TSE9XLCBcImh0dHBHZXRDYWxsQmFja1wiKTtcclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZTogYW55ID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25lKSByZXNwb25lID0gSlNPTi5wYXJzZShyZXNwb25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXNwb25lKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZW50Tm90aWZpY2F0aW9uKEhhbGxOb3RpZmljYXRpb24uU01BTExfTE9BRElOR19ISURFLCBcImh0dHBHZXRDYWxsQmFja1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbmUgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIEhhbGxBbGVydC5TbWFsbEFsZXJ0KHJlc3BvbmUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNlbnROb3RpZmljYXRpb24oSGFsbE5vdGlmaWNhdGlvbi5TTUFMTF9MT0FESU5HX0hJREUsIFwiaHR0cEdldENhbGxCYWNrXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRXJybygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG5cclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICd4LXJlcXVlc3RlZC13aXRoLGNvbnRlbnQtdHlwZSxhdXRob3JpemF0aW9uJyk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCIgdGV4dC9odG1sXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnRva2VuKSB4aHIuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRoaXMudG9rZW4pO1xyXG5cclxuICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcigndGVuYW50SWQnLCB0aGlzLnRlbmFudElkKTtcclxuICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7Ly8gOCBzZWNvbmRzIGZvciB0aW1lb3V0XHJcblxyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1Nob3dBbGVydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjaGVja0Vycm8oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93QWxlcnQgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNTaG93QWxlcnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VudE5vdGlmaWNhdGlvbihIYWxsTm90aWZpY2F0aW9uLlNNQUxMX0xPQURJTkdfSElERSwgXCJodHRwR2V0Q2FsbEJhY2tcIik7XHJcbiAgICAgICAgbGV0IG1lcmJlck1vdW50OiBNb3VudERhdGFBYnMgPSB0aGlzLmdldFNpbmdsZXRvbihNb3VudERhdGFBYnMuVE9LRU5FUlJPUikgYXMgTW91bnREYXRhQWJzO1xyXG4gICAgICAgIG1lcmJlck1vdW50LnVwZGF0ZSh7IHR5cGU6IE1vdW50RGF0YUFicy5UT0tFTkVSUk9SLCBkYXRhOiBudWxsIH0pO1xyXG5cclxuXHJcbiAgICAgICAgSGFsbEFsZXJ0LkFsZXJ0T2soXCLotKblj7flnKjlhbblroPlnLDmlrnnmbvlvZXvvIzor7fph43mlrDnmbvpmYYhXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dBbGVydCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBIYWxsRmFjYWRlLmdldEluc3RhbmNlKCkuc2VudE5vdGlmaWNhdGlvbihIYWxsTm90aWZpY2F0aW9uLkhBTExfUVVJVCk7XHJcbiAgICAgICAgICAgIEhhbGxGYWNhZGUuZ2V0SW5zdGFuY2UoKS5zZW50Tm90aWZpY2F0aW9uKEhhbGxOb3RpZmljYXRpb24uTUFJTkxBWUVSX0hJREUpO1xyXG4gICAgICAgICAgICAvL0xpZ2h0VUkucmVtb3ZlQWxsVUkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5Hotbdwb3N06K+35rGCIOaIkOWKn+WQjuWbnuiwg2NhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gdXJsIFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBcclxuICAgICAqIEBwYXJhbSBmaXJlUGFyYW0gICAgICAgICDmmK/lkKbmioror7fmsYLlj4LmlbDov5Tlm57nu5nlm57osINcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBodHRwUG9zdCh1cmwsIHBhcmFtcywgY2FsbGJhY2s6IEZ1bmN0aW9uLCBmaXJlUGFyYW06IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCBsb2JieWh0dHAgPSB3aW5kb3cuR2V0QXBwQ29uZmlnKClbJ2xvYmJ5aHR0cCddO1xyXG4gICAgICAgIGxldCBodHAgPSBsb2JieWh0dHAuc3BsaXQoJzonKVswXTtcclxuICAgICAgICB1cmwgPSBodHAgKyBcIjovL1wiICsgdXJsO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIkdldDogcmVhZHlTdGF0ZTpcIiArIHhoci5yZWFkeVN0YXRlICsgXCIgc3RhdHVzOlwiICsgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmUgPT0gXCJcIiB8fCByZXNwb25lID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJlUGFyYW0gPT0gdHJ1ZSkgY2FsbGJhY2socGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyZVBhcmFtID09IHRydWUpIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSksIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25lID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgSGFsbEFsZXJ0LlNtYWxsQWxlcnQocmVzcG9uZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRXJybygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAneC1yZXF1ZXN0ZWQtd2l0aCxjb250ZW50LXR5cGUnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2VuKSB4aHIuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRoaXMudG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ3RlbmFudElkJywgdGhpcy50ZW5hbnRJZCk7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gODAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuXHJcbiAgICAgICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Li76aG15L+h5oGvIOeUqOaIt+S/oeaBryAqL1xyXG4gICAgcHVibGljIHJlcXVlc3RNYWluSG9tZUluZm8oY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtID0ge31cclxuICAgICAgICB0aGlzLmh0dHBHZXQoXCJob21lXCIsIHBhcmFtLCBmdW5jdGlvbiAoZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/lightUI/utils/CocosTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c27ffMVlLtLlLSYPvs86rj0', 'CocosTool');
// Script/lightUI/utils/CocosTool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CocosTool = /** @class */ (function () {
    function CocosTool() {
    }
    CocosTool.Test = function () {
        console.log("test");
    };
    CocosTool.buttonSetLabel = function (button, label) {
        button.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = label;
    };
    CocosTool.buttonSetSouce = function (button, label) {
        // button.node.getChildByName("childname").getComponent(cc.Sprite).spriteFrame.setTexture()
    };
    CocosTool.rebackToPool = function (items, pool) {
        for (var i = 0; i < items.length; i++) {
            pool.put(items[i]);
        }
    };
    CocosTool.spriteSetImgByUrl = function (sp, url, isUserHead, complete) {
        if (isUserHead === void 0) { isUserHead = true; }
        if (complete === void 0) { complete = null; }
        // if (!url) return;
        if (!isUserHead && !url)
            return;
        if (url == "" || url == null)
            url = "core/mainscene/head/head_default.png";
        var remot = (url.indexOf("http") == 0);
        if (remot == true) {
            cc.loader.load(url + '?aaa=aa.jpg', function (err, texture) {
                var sprite = new cc.SpriteFrame(texture);
                sp.spriteFrame = sprite;
                if (complete)
                    complete();
            });
        }
        else {
            cc.loader.loadRes(url, function (err, texture) {
                var sprite = new cc.SpriteFrame(texture);
                sp.spriteFrame = sprite;
                if (complete)
                    complete();
            });
        }
    };
    CocosTool.cleatWidget = function (node) {
        var widget = node.getComponent(cc.Widget);
        widget.left = widget.right = widget.top = widget.bottom = 0;
    };
    return CocosTool;
}());
exports.default = CocosTool;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsaWdodFVJXFx1dGlsc1xcQ29jb3NUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQTBDQSxDQUFDO0lBekNpQixjQUFJLEdBQWxCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRWEsd0JBQWMsR0FBNUIsVUFBNkIsTUFBaUIsRUFBRSxLQUFhO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDM0csQ0FBQztJQUNhLHdCQUFjLEdBQTVCLFVBQTZCLE1BQWlCLEVBQUUsS0FBYTtRQUN6RCwyRkFBMkY7SUFDL0YsQ0FBQztJQUVhLHNCQUFZLEdBQTFCLFVBQTJCLEtBQXFCLEVBQUUsSUFBaUI7UUFDL0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFYSwyQkFBaUIsR0FBL0IsVUFBZ0MsRUFBYSxFQUFFLEdBQVcsRUFBRSxVQUEwQixFQUFFLFFBQXlCO1FBQXJELDJCQUFBLEVBQUEsaUJBQTBCO1FBQUUseUJBQUEsRUFBQSxlQUF5QjtRQUM3RyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBQ2hDLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksSUFBSTtZQUFFLEdBQUcsR0FBRyxzQ0FBc0MsQ0FBQTtRQUMxRSxJQUFJLEtBQUssR0FBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDL0MsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsRUFBRSxVQUFVLEdBQUcsRUFBRSxPQUFPO2dCQUN0RCxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixJQUFJLFFBQVE7b0JBQUUsUUFBUSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLE9BQU87Z0JBQ3pDLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekMsRUFBRSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0JBQ3hCLElBQUksUUFBUTtvQkFBRSxRQUFRLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVhLHFCQUFXLEdBQXpCLFVBQTBCLElBQWE7UUFDbkMsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvY29zVG9vbCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFRlc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYnV0dG9uU2V0TGFiZWwoYnV0dG9uOiBjYy5CdXR0b24sIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBidXR0b24ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGxhYmVsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBidXR0b25TZXRTb3VjZShidXR0b246IGNjLkJ1dHRvbiwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGJ1dHRvbi5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hpbGRuYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lLnNldFRleHR1cmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmViYWNrVG9Qb29sKGl0ZW1zOiBBcnJheTxjYy5Ob2RlPiwgcG9vbDogY2MuTm9kZVBvb2wpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvb2wucHV0KGl0ZW1zW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzcHJpdGVTZXRJbWdCeVVybChzcDogY2MuU3ByaXRlLCB1cmw6IHN0cmluZywgaXNVc2VySGVhZDogYm9vbGVhbiA9IHRydWUsIGNvbXBsZXRlOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICAvLyBpZiAoIXVybCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghaXNVc2VySGVhZCAmJiAhdXJsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHVybCA9PSBcIlwiIHx8IHVybCA9PSBudWxsKSB1cmwgPSBcImNvcmUvbWFpbnNjZW5lL2hlYWQvaGVhZF9kZWZhdWx0LnBuZ1wiXHJcbiAgICAgICAgbGV0IHJlbW90OiBib29sZWFuID0gKHVybC5pbmRleE9mKFwiaHR0cFwiKSA9PSAwKVxyXG4gICAgICAgIGlmIChyZW1vdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHVybCArICc/YWFhPWFhLmpwZycsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZSkgY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ByaXRlID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgc3Auc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGUpIGNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsZWF0V2lkZ2V0KG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgd2lkZ2V0OiBjYy5XaWRnZXQgPSBub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIHdpZGdldC5sZWZ0ID0gd2lkZ2V0LnJpZ2h0ID0gd2lkZ2V0LnRvcCA9IHdpZGdldC5ib3R0b20gPSAwO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/hall/service/HttpService.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ea8609tu5Ie7bWD78KSdiJ', 'HttpService');
// Script/hall/service/HttpService.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HallNotification_1 = require("../events/HallNotification");
var HallFacase_1 = require("./HallFacase");
var HallAlert_1 = require("../utils/HallAlert");
var GameHttpService_1 = require("./GameHttpService");
var MountDataAbs_1 = require("../../lightUI/components/MountDataAbs");
var gameData_1 = require("../../../Script/component/gameData");
/**
 * 这里处理与服务器段的http通信事务
 */
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService() {
        var _this = _super.call(this, HttpService.NAME) || this;
        _this.tenantId = "AS";
        _this._token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjI2MzMxLCJhdWQiOiIiLCJleHAiOjE2NjUwNDcyNzgsImlhdCI6MTY2MjQ1NTI3OCwiaXNzIjoiIiwianRpIjoiYTljYzEyMzhlY2MwZDg2NDhhMGNjN2UwODQ4MGQ4MTEiLCJuYmYiOjE2NjI0NTUyNzgsInN1YiI6IiJ9.ITQC7zbvDV8OpUrTfO3o69STngyxbg30Q90UH6FaNGw";
        _this.isShowAlert = false;
        _this.token = cc.sys.localStorage.getItem('token');
        _this.tenantId = cc.sys.localStorage.getItem('tenantId') || 'AS';
        return _this;
    }
    Object.defineProperty(HttpService.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            // console.log("set token==>", value);
            this._token = value;
            cc.sys.localStorage.setItem('token', this._token);
            var games = HallFacase_1.default.getInstance().getModel(GameHttpService_1.default.NAME);
            if (games)
                games.token = this._token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpService.prototype, "_tenantId", {
        set: function (val) {
            this.tenantId = val;
        },
        enumerable: false,
        configurable: true
    });
    HttpService.prototype.loginByTel = function (param) {
        // this.sendRequest();
    };
    HttpService.prototype.httpGetCallBack = function (url, param, callback, hasTenantId) {
        if (hasTenantId === void 0) { hasTenantId = false; }
        var xhr = cc.loader.getXMLHttpRequest();
        this.tenantId = cc.sys.localStorage.getItem('tenantId') || 'AS';
        param = (param) ? param : {};
        if (hasTenantId == true)
            param.tenantId = this.tenantId;
        var params = [];
        for (var key in param) {
            params.push(key + '=' + param[key]);
        }
        var dataStr = params.join('&');
        if (params.length > 0)
            url += "?" + dataStr;
        var none = ['get-bank-card', 'myMessage', 'queryGameConfig']; //筛选loading
        var need = true;
        for (var i = 0; i < none.length; i++) {
            if (url.indexOf(none[i]) != -1)
                need = false;
        }
        if (need)
            this.sentNotification(HallNotification_1.default.SMALL_LOADING_SHOW, "httpGetCallBack");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                var respone = xhr.responseText;
                if (respone)
                    respone = JSON.parse(respone);
                callback && callback(respone);
                this.sentNotification(HallNotification_1.default.SMALL_LOADING_HIDE, "httpGetCallBack");
            }
            else if (xhr.readyState === 4 && xhr.status == 400) {
                var respone = JSON.parse(xhr.responseText);
                HallAlert_1.default.SmallAlert(respone.message);
                this.sentNotification(HallNotification_1.default.SMALL_LOADING_HIDE, "httpGetCallBack");
            }
            else if (xhr.readyState == 4 && xhr.status == 401) {
                this.sentNotification(HallNotification_1.default.SMALL_LOADING_HIDE, "httpGetCallBack");
                this.checkErro();
            }
        }.bind(this);
        xhr.withCredentials = true;
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
        xhr.setRequestHeader("Content-Type", " text/html");
        if (this.token)
            xhr.setRequestHeader('Authorization', this.token);
        xhr.setRequestHeader('tenantId', this.tenantId);
        xhr.timeout = 8000; // 8 seconds for timeout
        xhr.send();
    };
    HttpService.prototype.checkErro = function () {
        var _this = this;
        if (this.isShowAlert == true)
            return;
        this.isShowAlert = true;
        this.sentNotification(HallNotification_1.default.SMALL_LOADING_HIDE, "httpGetCallBack");
        var merberMount = this.getSingleton(MountDataAbs_1.default.TOKENERROR);
        merberMount.update({ type: MountDataAbs_1.default.TOKENERROR, data: null });
        HallAlert_1.default.AlertOk("账号在其它地方登录，请重新登陆!", function () {
            _this.isShowAlert = false;
            HallFacase_1.default.getInstance().sentNotification(HallNotification_1.default.HALL_QUIT);
            HallFacase_1.default.getInstance().sentNotification(HallNotification_1.default.MAINLAYER_HIDE);
            //LightUI.removeAllUI();
        });
    };
    /**
     * get请求
     * @param url
     * @param param
     * @param callbackNoritication  //回调的消息
     * @param fireParam             //是否将请求的参数也传递给回调 默认不传递
     */
    HttpService.httpGet = function (url, param, callbackNoritication, fireParam) {
        if (fireParam === void 0) { fireParam = false; }
        var xhr = cc.loader.getXMLHttpRequest();
        param = (param) ? param : {};
        param.tenantId = gameData_1.gameData.roomData.tenantId;
        var params = [];
        for (var key in param) {
            params.push(key + '=' + param[key]);
        }
        var dataStr = params.join('&');
        url += "?" + dataStr;
        var none = ['/mail/mine']; //筛选loading
        var need = true;
        for (var i = 0; i < none.length; i++) {
            if (url.indexOf(none[i]) != -1)
                need = false;
        }
        xhr.onreadystatechange = function () {
            // cc.log("Get: readyState:" + xhr.readyState + " status:" + xhr.status);
            if (xhr.readyState === 4 && xhr.status == 200) {
                var respone = {};
                respone["status"] = xhr.status;
                respone['data'] = xhr.responseText;
                callbackNoritication(respone);
            }
            else if (xhr.readyState === 4 && xhr.status == 400) {
                //callback({ status: 401 });
                var respone = JSON.parse(xhr.responseText);
                respone["status"] = xhr.status;
                callbackNoritication(respone);
            }
        }.bind(this);
        xhr.withCredentials = true;
        xhr.open('GET', url, true);
        // if (cc.sys.isNative) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
        // xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Content-Type", " text/html");
        // text/html;charset=UTF-8
        if (gameData_1.gameData.roomData.tokenData)
            xhr.setRequestHeader('Authorization', gameData_1.gameData.roomData.tokenData);
        xhr.setRequestHeader('tenantId', gameData_1.gameData.roomData.tenantId);
        // xhr.setRequestHeader('Authorization', 'Bearer ' + "");
        // }
        // note: In Internet Explorer, the timeout property may be set only after calling the open()
        // method and before calling the send() method.
        xhr.timeout = 8000; // 8 seconds for timeout
        xhr.send();
    };
    /**
     * 发起post请求 成功后回调callback
     * @param url
     * @param params
     * @param callback
     * @param fireParam         是否把请求参数返回给回调
     * @returns
     */
    HttpService.prototype.httpPostCallBack = function (url, params, callback, fireParam) {
        var _this = this;
        if (fireParam === void 0) { fireParam = false; }
        return new Promise(function (resolve, reject) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                // cc.log("Get: readyState:" + xhr.readyState + " status:" + xhr.status);
                if (xhr.readyState === 4 && xhr.status == 200) {
                    var respone = xhr.responseText;
                    if (callback) {
                        if (respone == "" || respone == null) {
                            if (fireParam == true)
                                callback(params);
                            else
                                callback(null);
                        }
                        else {
                            if (fireParam == true)
                                callback(JSON.parse(respone), params);
                            else
                                callback(JSON.parse(respone));
                        }
                    }
                }
                else if (xhr.readyState === 4 && xhr.status == 400) {
                    var respone = JSON.parse(xhr.responseText);
                    HallAlert_1.default.SmallAlert(respone.message);
                }
                else if (xhr.readyState == 4 && xhr.status == 401) {
                    //callback(-1);
                    this.checkErro();
                }
            }.bind(_this);
            xhr.open("POST", url, true);
            // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            // // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            // xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.setRequestHeader("Content-Type", " text/html");
            // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
            // text/html;charset=UTF-8
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
            xhr.setRequestHeader("Content-Type", "application/json");
            if (_this.token)
                xhr.setRequestHeader('Authorization', _this.token);
            xhr.setRequestHeader('tenantId', _this.tenantId);
            xhr.timeout = 8000; // 5 seconds for timeout
            if (params == null) {
                xhr.send();
                return;
            }
            xhr.send(JSON.stringify(params));
        });
    };
    /**
     * 发送post 请求
     * @param url
     * @param params
     * @param callbackNoritication
     * @param fireParam
     * @returns
     */
    HttpService.prototype.httpPost = function (url, params, callbackNoritication, fireParam, type) {
        var _this = this;
        if (fireParam === void 0) { fireParam = false; }
        if (type === void 0) { type = "POST"; }
        return new Promise(function (resolve, reject) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                // cc.log("Get: readyState:" + xhr.readyState + " status:" + xhr.status);
                if (xhr.readyState === 4 && xhr.status == 200) {
                    var respone = xhr.responseText;
                    if (fireParam == true)
                        this.sentNotification(callbackNoritication, { "respone": respone, "param": params });
                    else
                        this.sentNotification(callbackNoritication, respone);
                }
                else if (xhr.readyState === 4 && xhr.status == 400) {
                    var respone = JSON.parse(xhr.responseText);
                    HallAlert_1.default.SmallAlert(respone.message);
                }
                else if (xhr.readyState == 4 && xhr.status == 401) {
                    //callback(-1);
                    this.checkErro();
                }
            }.bind(_this);
            xhr.open("POST", url, true);
            // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            // // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            // xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,authorization');
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.setRequestHeader("Content-Type", " text/html");
            // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
            // text/html;charset=UTF-8
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
            xhr.setRequestHeader("Content-Type", "application/json");
            if (_this.token)
                xhr.setRequestHeader('Authorization', _this.token);
            xhr.setRequestHeader('tenantId', _this.tenantId);
            xhr.timeout = 8000; // 5 seconds for timeout
            xhr.send(JSON.stringify(params));
        });
    };
    HttpService.NAME = "HttpService";
    HttpService.POST = "POST";
    HttpService.PUT = "PUT";
    return HttpService;
}(com.lightMVC.parrerns.Model));
exports.default = HttpService;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxoYWxsXFxzZXJ2aWNlXFxIdHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrREFBMEQ7QUFDMUQsMkNBQXNDO0FBQ3RDLGdEQUEyQztBQUMzQyxxREFBZ0Q7QUFFaEQsc0VBQWlFO0FBRWpFLCtEQUE4RDtBQUU5RDs7R0FFRztBQUNIO0lBQXlDLCtCQUEyQjtJQVVoRTtRQUFBLFlBQ0ksa0JBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxTQUcxQjtRQVZNLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFDdkIsWUFBTSxHQUFXLDBRQUEwUSxDQUFDO1FBbUY1UixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQTVFakMsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDOztJQUNwRSxDQUFDO0lBRUQsc0JBQVcsOEJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUlELFVBQWlCLEtBQWE7WUFDMUIsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELElBQUksS0FBSyxHQUFvQixvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDLElBQUksQ0FBb0IsQ0FBQztZQUN4RyxJQUFJLEtBQUs7Z0JBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxD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RyxDQUFDLGdCQUFnQixDQUFDLDhCQUE4QixFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1lBQ3RGLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUd6RCxJQUFJLEtBQUksQ0FBQyxLQUFLO2dCQUFFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUEsd0JBQXdCO1lBRTNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQXpTYSxnQkFBSSxHQUFXLGFBQWEsQ0FBQztJQUtwQixnQkFBSSxHQUFXLE1BQU0sQ0FBQztJQUN0QixlQUFHLEdBQVcsS0FBSyxDQUFDO0lBb1MvQyxrQkFBQztDQTVTRCxBQTRTQyxDQTVTd0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQTRTbkU7a0JBNVNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uLy4uL2xpZ2h0VUkvdXRpbHMvSGFuZGxlclwiO1xyXG5pbXBvcnQgSGFsbE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vZXZlbnRzL0hhbGxOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IEhhbGxGYWNhZGUgZnJvbSBcIi4vSGFsbEZhY2FzZVwiO1xyXG5pbXBvcnQgSGFsbEFsZXJ0IGZyb20gXCIuLi91dGlscy9IYWxsQWxlcnRcIjtcclxuaW1wb3J0IEdhbWVIdHRwU2VydmljZSBmcm9tIFwiLi9HYW1lSHR0cFNlcnZpY2VcIjtcclxuaW1wb3J0IExpZ2h0VUkgZnJvbSBcIi4uLy4uL2xpZ2h0VUkvTGlnaHRVSVwiO1xyXG5pbXBvcnQgTW91bnREYXRhQWJzIGZyb20gXCIuLi8uLi9saWdodFVJL2NvbXBvbmVudHMvTW91bnREYXRhQWJzXCI7XHJcbmltcG9ydCBuZXRDb20gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9jb21wb25lbnQvbmV0Q29tXCI7XHJcbmltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9jb21wb25lbnQvZ2FtZURhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiDov5nph4zlpITnkIbkuI7mnI3liqHlmajmrrXnmoRodHRw6YCa5L+h5LqL5YqhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwU2VydmljZSBleHRlbmRzIGNvbS5saWdodE1WQy5wYXJyZXJucy5Nb2RlbCBpbXBsZW1lbnRzIGNvbS5saWdodE1WQy5pbnRlcmZhY2VzLklNb2RlbCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBOQU1FOiBzdHJpbmcgPSBcIkh0dHBTZXJ2aWNlXCI7XHJcblxyXG4gICAgcHVibGljIHRlbmFudElkOiBzdHJpbmcgPSBcIkFTXCI7XHJcbiAgICBwcml2YXRlIF90b2tlbjogc3RyaW5nID0gXCJCZWFyZXIgZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFhV1FpT2pJMk16TXhMQ0poZFdRaU9pSWlMQ0psZUhBaU9qRTJOalV3TkRjeU56Z3NJbWxoZENJNk1UWTJNalExTlRJM09Dd2lhWE56SWpvaUlpd2lhblJwSWpvaVlUbGpZekV5TXpobFkyTXdaRGcyTkRoaE1HTmpOMlV3T0RRNE1HUTRNVEVpTENKdVltWWlPakUyTmpJME5UVXlOemdzSW5OMVlpSTZJaUo5LklUUUM3emJ2RFY4T3BVclRmTzNvNjlTVG5neXhiZzMwUTkwVUg2RmFOR3dcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBPU1Q6IHN0cmluZyA9IFwiUE9TVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQVVQ6IHN0cmluZyA9IFwiUFVUXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoSHR0cFNlcnZpY2UuTkFNRSk7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICB0aGlzLnRlbmFudElkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZW5hbnRJZCcpIHx8ICdBUyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0b2tlbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b2tlbjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgX3RlbmFudElkKHZhbCkge1xyXG4gICAgICAgIHRoaXMudGVuYW50SWQgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHRva2VuKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNldCB0b2tlbj09PlwiLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB2YWx1ZTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy5fdG9rZW4pO1xyXG4gICAgICAgIGxldCBnYW1lczogR2FtZUh0dHBTZXJ2aWNlID0gSGFsbEZhY2FkZS5nZXRJbnN0YW5jZSgpLmdldE1vZGVsKEdhbWVIdHRwU2VydmljZS5OQU1FKSBhcyBHYW1lSHR0cFNlcnZpY2U7XHJcbiAgICAgICAgaWYgKGdhbWVzKSBnYW1lcy50b2tlbiA9IHRoaXMuX3Rva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbkJ5VGVsKHBhcmFtOiB7IGFjY291bnQ6IHN0cmluZywgcHdkOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIC8vIHRoaXMuc2VuZFJlcXVlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBodHRwR2V0Q2FsbEJhY2sodXJsLCBwYXJhbSwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBoYXNUZW5hbnRJZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHRoaXMudGVuYW50SWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RlbmFudElkJykgfHwgJ0FTJztcclxuICAgICAgICBwYXJhbSA9IChwYXJhbSkgPyBwYXJhbSA6IHt9O1xyXG4gICAgICAgIGlmIChoYXNUZW5hbnRJZCA9PSB0cnVlKSBwYXJhbS50ZW5hbnRJZCA9IHRoaXMudGVuYW50SWQ7XHJcblxyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW0pIHtcclxuICAgICAgICAgICAgcGFyYW1zLnB1c2goa2V5ICsgJz0nICsgcGFyYW1ba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkYXRhU3RyID0gcGFyYW1zLmpvaW4oJyYnKTtcclxuICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHVybCArPSBcIj9cIiArIGRhdGFTdHI7XHJcblxyXG4gICAgICAgIGxldCBub25lID0gWydnZXQtYmFuay1jYXJkJywgJ215TWVzc2FnZScsICdxdWVyeUdhbWVDb25maWcnXTsvL+etm+mAiWxvYWRpbmdcclxuICAgICAgICBsZXQgbmVlZCA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub25lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZihub25lW2ldKSAhPSAtMSlcclxuICAgICAgICAgICAgICAgIG5lZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5lZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2VudE5vdGlmaWNhdGlvbihIYWxsTm90aWZpY2F0aW9uLlNNQUxMX0xPQURJTkdfU0hPVywgXCJodHRwR2V0Q2FsbEJhY2tcIik7XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25lOiBhbnkgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbmUpIHJlc3BvbmUgPSBKU09OLnBhcnNlKHJlc3BvbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3BvbmUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbnROb3RpZmljYXRpb24oSGFsbE5vdGlmaWNhdGlvbi5TTUFMTF9MT0FESU5HX0hJREUsIFwiaHR0cEdldENhbGxCYWNrXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgSGFsbEFsZXJ0LlNtYWxsQWxlcnQocmVzcG9uZS5tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbnROb3RpZmljYXRpb24oSGFsbE5vdGlmaWNhdGlvbi5TTUFMTF9MT0FESU5HX0hJREUsIFwiaHR0cEdldENhbGxCYWNrXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VudE5vdGlmaWNhdGlvbihIYWxsTm90aWZpY2F0aW9uLlNNQUxMX0xPQURJTkdfSElERSwgXCJodHRwR2V0Q2FsbEJhY2tcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRXJybygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG5cclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICd4LXJlcXVlc3RlZC13aXRoLGNvbnRlbnQtdHlwZSxhdXRob3JpemF0aW9uJyk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCIgdGV4dC9odG1sXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnRva2VuKSB4aHIuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRoaXMudG9rZW4pO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCd0ZW5hbnRJZCcsIHRoaXMudGVuYW50SWQpO1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gODAwMDsvLyA4IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNTaG93QWxlcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2hlY2tFcnJvKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvd0FsZXJ0ID09IHRydWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzU2hvd0FsZXJ0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbnROb3RpZmljYXRpb24oSGFsbE5vdGlmaWNhdGlvbi5TTUFMTF9MT0FESU5HX0hJREUsIFwiaHR0cEdldENhbGxCYWNrXCIpO1xyXG4gICAgICAgIGxldCBtZXJiZXJNb3VudDogTW91bnREYXRhQWJzID0gdGhpcy5nZXRTaW5nbGV0b24oTW91bnREYXRhQWJzLlRPS0VORVJST1IpIGFzIE1vdW50RGF0YUFicztcclxuICAgICAgICBtZXJiZXJNb3VudC51cGRhdGUoeyB0eXBlOiBNb3VudERhdGFBYnMuVE9LRU5FUlJPUiwgZGF0YTogbnVsbCB9KTtcclxuXHJcbiAgICAgICAgSGFsbEFsZXJ0LkFsZXJ0T2soXCLotKblj7flnKjlhbblroPlnLDmlrnnmbvlvZXvvIzor7fph43mlrDnmbvpmYYhXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dBbGVydCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBIYWxsRmFjYWRlLmdldEluc3RhbmNlKCkuc2VudE5vdGlmaWNhdGlvbihIYWxsTm90aWZpY2F0aW9uLkhBTExfUVVJVCk7XHJcbiAgICAgICAgICAgIEhhbGxGYWNhZGUuZ2V0SW5zdGFuY2UoKS5zZW50Tm90aWZpY2F0aW9uKEhhbGxOb3RpZmljYXRpb24uTUFJTkxBWUVSX0hJREUpO1xyXG4gICAgICAgICAgICAvL0xpZ2h0VUkucmVtb3ZlQWxsVUkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldOivt+axglxyXG4gICAgICogQHBhcmFtIHVybCBcclxuICAgICAqIEBwYXJhbSBwYXJhbSBcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja05vcml0aWNhdGlvbiAgLy/lm57osIPnmoTmtojmga9cclxuICAgICAqIEBwYXJhbSBmaXJlUGFyYW0gICAgICAgICAgICAgLy/mmK/lkKblsIbor7fmsYLnmoTlj4LmlbDkuZ/kvKDpgJLnu5nlm57osIMg6buY6K6k5LiN5Lyg6YCSXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBodHRwR2V0KHVybCwgcGFyYW0sIGNhbGxiYWNrTm9yaXRpY2F0aW9uOiBGdW5jdGlvbiwgZmlyZVBhcmFtOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHBhcmFtID0gKHBhcmFtKSA/IHBhcmFtIDoge307XHJcbiAgICAgICAgcGFyYW0udGVuYW50SWQgPSBnYW1lRGF0YS5yb29tRGF0YS50ZW5hbnRJZDtcclxuXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbSkge1xyXG4gICAgICAgICAgICBwYXJhbXMucHVzaChrZXkgKyAnPScgKyBwYXJhbVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRhdGFTdHIgPSBwYXJhbXMuam9pbignJicpO1xyXG4gICAgICAgIHVybCArPSBcIj9cIiArIGRhdGFTdHI7XHJcblxyXG4gICAgICAgIGxldCBub25lID0gWycvbWFpbC9taW5lJ107Ly/nrZvpgIlsb2FkaW5nXHJcbiAgICAgICAgbGV0IG5lZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vbmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHVybC5pbmRleE9mKG5vbmVbaV0pICE9IC0xKVxyXG4gICAgICAgICAgICAgICAgbmVlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIkdldDogcmVhZHlTdGF0ZTpcIiArIHhoci5yZWFkeVN0YXRlICsgXCIgc3RhdHVzOlwiICsgeGhyLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25lID0ge307XHJcbiAgICAgICAgICAgICAgICByZXNwb25lW1wic3RhdHVzXCJdID0geGhyLnN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJlc3BvbmVbJ2RhdGEnXSA9IHhoci5yZXNwb25zZVRleHRcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrTm9yaXRpY2F0aW9uKHJlc3BvbmUpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgLy9jYWxsYmFjayh7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbmUgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uZVtcInN0YXR1c1wiXSA9IHhoci5zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tOb3JpdGljYXRpb24ocmVzcG9uZSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCcpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ3gtcmVxdWVzdGVkLXdpdGgsY29udGVudC10eXBlLGF1dGhvcml6YXRpb24nKTtcclxuICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCIgdGV4dC9odG1sXCIpO1xyXG4gICAgICAgIC8vIHRleHQvaHRtbDtjaGFyc2V0PVVURi04XHJcbiAgICAgICAgaWYgKGdhbWVEYXRhLnJvb21EYXRhLnRva2VuRGF0YSkgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBnYW1lRGF0YS5yb29tRGF0YS50b2tlbkRhdGEpO1xyXG5cclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcigndGVuYW50SWQnLCBnYW1lRGF0YS5yb29tRGF0YS50ZW5hbnRJZCk7XHJcbiAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyBcIlwiKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIG5vdGU6IEluIEludGVybmV0IEV4cGxvcmVyLCB0aGUgdGltZW91dCBwcm9wZXJ0eSBtYXkgYmUgc2V0IG9ubHkgYWZ0ZXIgY2FsbGluZyB0aGUgb3BlbigpXHJcbiAgICAgICAgLy8gbWV0aG9kIGFuZCBiZWZvcmUgY2FsbGluZyB0aGUgc2VuZCgpIG1ldGhvZC5cclxuICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7Ly8gOCBzZWNvbmRzIGZvciB0aW1lb3V0XHJcblxyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5Hotbdwb3N06K+35rGCIOaIkOWKn+WQjuWbnuiwg2NhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gdXJsIFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBcclxuICAgICAqIEBwYXJhbSBmaXJlUGFyYW0gICAgICAgICDmmK/lkKbmioror7fmsYLlj4LmlbDov5Tlm57nu5nlm57osINcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBodHRwUG9zdENhbGxCYWNrKHVybCwgcGFyYW1zLCBjYWxsYmFjazogRnVuY3Rpb24sIGZpcmVQYXJhbTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIkdldDogcmVhZHlTdGF0ZTpcIiArIHhoci5yZWFkeVN0YXRlICsgXCIgc3RhdHVzOlwiICsgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmUgPT0gXCJcIiB8fCByZXNwb25lID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJlUGFyYW0gPT0gdHJ1ZSkgY2FsbGJhY2socGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyZVBhcmFtID09IHRydWUpIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSksIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhbGxiYWNrKEpTT04ucGFyc2UocmVzcG9uZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25lID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgSGFsbEFsZXJ0LlNtYWxsQWxlcnQocmVzcG9uZS5tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRXJybygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICAgICAgLy8gLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NUJyk7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ3gtcmVxdWVzdGVkLXdpdGgsY29udGVudC10eXBlLGF1dGhvcml6YXRpb24nKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcIiB0ZXh0L2h0bWxcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7ICBcclxuICAgICAgICAgICAgLy8gdGV4dC9odG1sO2NoYXJzZXQ9VVRGLThcclxuXHJcblxyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NUJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ3gtcmVxdWVzdGVkLXdpdGgsY29udGVudC10eXBlJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50b2tlbikgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0aGlzLnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCd0ZW5hbnRJZCcsIHRoaXMudGVuYW50SWQpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7Ly8gNSBzZWNvbmRzIGZvciB0aW1lb3V0XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCBcG9zdCDor7fmsYJcclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrTm9yaXRpY2F0aW9uIFxyXG4gICAgICogQHBhcmFtIGZpcmVQYXJhbSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBodHRwUG9zdCh1cmwsIHBhcmFtcywgY2FsbGJhY2tOb3JpdGljYXRpb246IHN0cmluZywgZmlyZVBhcmFtOiBib29sZWFuID0gZmFsc2UsIHR5cGU6IHN0cmluZyA9IFwiUE9TVFwiKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIkdldDogcmVhZHlTdGF0ZTpcIiArIHhoci5yZWFkeVN0YXRlICsgXCIgc3RhdHVzOlwiICsgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJlUGFyYW0gPT0gdHJ1ZSkgdGhpcy5zZW50Tm90aWZpY2F0aW9uKGNhbGxiYWNrTm9yaXRpY2F0aW9uLCB7IFwicmVzcG9uZVwiOiByZXNwb25lLCBcInBhcmFtXCI6IHBhcmFtcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRoaXMuc2VudE5vdGlmaWNhdGlvbihjYWxsYmFja05vcml0aWNhdGlvbiwgcmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbmUgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBIYWxsQWxlcnQuU21hbGxBbGVydChyZXNwb25lLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tFcnJvKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgICAgICAvLyAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QnKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAneC1yZXF1ZXN0ZWQtd2l0aCxjb250ZW50LXR5cGUsYXV0aG9yaXphdGlvbicpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiIHRleHQvaHRtbFwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTsgIFxyXG4gICAgICAgICAgICAvLyB0ZXh0L2h0bWw7Y2hhcnNldD1VVEYtOFxyXG5cclxuXHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAneC1yZXF1ZXN0ZWQtd2l0aCxjb250ZW50LXR5cGUnKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2VuKSB4aHIuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRoaXMudG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ3RlbmFudElkJywgdGhpcy50ZW5hbnRJZCk7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gODAwMDsvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcclxuXHJcbiAgICAgICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/component/activityInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7dd44ufYJdCg7N3pRDiV40k', 'activityInfo');
// Script/component/activityInfo.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameData_1 = require("./gameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var activityInfo = /** @class */ (function (_super) {
    __extends(activityInfo, _super);
    function activityInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner_img = null;
        _this.lb_title = null;
        return _this;
    }
    activityInfo_1 = activityInfo;
    activityInfo.prototype.onLoad = function () {
        activityInfo_1.instance = this;
        // DznSocket.on(gameData.messageFlag.CHANGE_SHOW_LAYER, this.updateCurTitle, this);
    };
    activityInfo.prototype.start = function () {
    };
    //初始化当前活动组件标题, banner图片, 活动时间开始和结束, 抽取分数规则
    activityInfo.prototype.init = function (data) {
    };
    //title图片更新
    activityInfo.prototype.updateCurTitle = function (type) {
        switch (type) {
            case gameData_1.gameData.SHOW_LAYER_TYPE.MAIN_HOME:
                this.title_img.spriteFrame = this.titleArr[0];
                break;
            case gameData_1.gameData.SHOW_LAYER_TYPE.CARD_BAG:
                this.title_img.spriteFrame = this.titleArr[1];
                break;
            case gameData_1.gameData.SHOW_LAYER_TYPE.CARD_EXCHANGE:
                this.title_img.spriteFrame = this.titleArr[2];
                break;
            case gameData_1.gameData.SHOW_LAYER_TYPE.CARD_RECORD:
                this.title_img.spriteFrame = this.titleArr[3];
                break;
        }
    };
    activityInfo.prototype.update = function (dt) {
    };
    var activityInfo_1;
    activityInfo.instance = null;
    __decorate([
        property(cc.Sprite)
    ], activityInfo.prototype, "banner_img", void 0);
    __decorate([
        property(cc.Label)
    ], activityInfo.prototype, "lb_title", void 0);
    activityInfo = activityInfo_1 = __decorate([
        ccclass
    ], activityInfo);
    return activityInfo;
}(cc.Component));
exports.default = activityInfo;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRcXGFjdGl2aXR5SW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE2Q0M7UUEzQ0csZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUF3QzlCLENBQUM7cUJBN0NvQixZQUFZO0lBUzdCLDZCQUFNLEdBQU47UUFDSSxjQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QixtRkFBbUY7SUFDdkYsQ0FBQztJQUVELDRCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMENBQTBDO0lBQzFDLDJCQUFJLEdBQUosVUFBSyxJQUF1QjtJQUU1QixDQUFDO0lBRUQsV0FBVztJQUNYLHFDQUFjLEdBQWQsVUFBZSxJQUFZO1FBQ25CLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1YsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxRQUFRO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1YsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxhQUFhO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1YsS0FBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1NBQ2I7SUFDVCxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQVU7SUFFakIsQ0FBQzs7SUFwQ00scUJBQVEsR0FBaUIsSUFBSSxDQUFDO0lBTHJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTztJQUxULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E2Q2hDO0lBQUQsbUJBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3lDLEVBQUUsQ0FBQyxTQUFTLEdBNkNyRDtrQkE3Q29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tIFwiLi9nYW1lRGF0YVwiO1xyXG5pbXBvcnQgeyBEem5Tb2NrZXQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL3NyYy9Eem5Tb2NrZXRcIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGFjdGl2aXR5SW5mbyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgYmFubmVyX2ltZzogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYl90aXRsZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZTogYWN0aXZpdHlJbmZvID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgYWN0aXZpdHlJbmZvLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICAvLyBEem5Tb2NrZXQub24oZ2FtZURhdGEubWVzc2FnZUZsYWcuQ0hBTkdFX1NIT1dfTEFZRVIsIHRoaXMudXBkYXRlQ3VyVGl0bGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyW5b2T5YmN5rS75Yqo57uE5Lu25qCH6aKYLCBiYW5uZXLlm77niYcsIOa0u+WKqOaXtumXtOW8gOWni+WSjOe7k+adnywg5oq95Y+W5YiG5pWw6KeE5YiZXHJcbiAgICBpbml0KGRhdGE6IGFwaURhdGEudXNlcl9pbmZvKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy90aXRsZeWbvueJh+abtOaWsFxyXG4gICAgdXBkYXRlQ3VyVGl0bGUodHlwZTogc3RyaW5nKXtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGdhbWVEYXRhLlNIT1dfTEFZRVJfVFlQRS5NQUlOX0hPTUU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZV9pbWcuc3ByaXRlRnJhbWUgPSB0aGlzLnRpdGxlQXJyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBnYW1lRGF0YS5TSE9XX0xBWUVSX1RZUEUuQ0FSRF9CQUc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZV9pbWcuc3ByaXRlRnJhbWUgPSB0aGlzLnRpdGxlQXJyWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBnYW1lRGF0YS5TSE9XX0xBWUVSX1RZUEUuQ0FSRF9FWENIQU5HRTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlX2ltZy5zcHJpdGVGcmFtZSA9IHRoaXMudGl0bGVBcnJbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGdhbWVEYXRhLlNIT1dfTEFZRVJfVFlQRS5DQVJEX1JFQ09SRDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlX2ltZy5zcHJpdGVGcmFtZSA9IHRoaXMudGl0bGVBcnJbM107XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------
