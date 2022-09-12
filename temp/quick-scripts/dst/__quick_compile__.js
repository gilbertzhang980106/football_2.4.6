
(function () {
var scripts = [{"deps":{"./assets/Common/src/DznSocket":1,"./assets/Common/src/Bullt":64,"./assets/Common/src/Expand":12,"./assets/Common/src/GameSocket":14,"./assets/Common/src/EventManager":9,"./assets/Common/src/StandardButton":13,"./assets/Common/src/StandardCloseButton":19,"./assets/Common/src/ServerRoom":15,"./assets/Common/src/StandardCloseAlertButton":17,"./assets/Common/src/tool":16,"./assets/Common/src/AudioConfig":18,"./assets/Common/src/AudioManage":23,"./assets/Script/component/alertContent_5":21,"./assets/Script/component/alertContent_1":65,"./assets/Script/component/card":27,"./assets/Script/component/bottomBar":24,"./assets/Script/component/alertContent_4":2,"./assets/Script/component/heartBeat":31,"./assets/Script/component/cardsRecordLayer":26,"./assets/Script/component/mainLobby":30,"./assets/Script/component/alertContent_6":25,"./assets/Script/component/popup":32,"./assets/Script/component/netCom":33,"./assets/Script/component/layerRewardCard":28,"./assets/Script/component/gameData":44,"./assets/Script/component/ruleComponent":35,"./assets/Script/component/reconnect":34,"./assets/Script/component/tishi":37,"./assets/Script/component/serverTime":38,"./assets/Script/component/playerInfo":29,"./assets/Script/component/toast":39,"./assets/Script/component/utils":43,"./assets/Script/component/topBar":36,"./assets/Script/component/alertContent_3":22,"./assets/Script/lightUI/components/LListAbs":46,"./assets/Script/lightUI/components/LComponent":68,"./assets/Script/lightUI/components/LTabBar":45,"./assets/Script/lightUI/components/LWindow":48,"./assets/Script/lightUI/components/LViewStack":40,"./assets/Script/lightUI/components/MountDataAbs":47,"./assets/Script/lightUI/components/LButton":50,"./assets/Script/lightUI/LightUI":41,"./assets/Script/lightUI/components/alert/LAlertBox":66,"./assets/Script/lightUI/components/alert/LAlert":4,"./assets/Script/lightUI/components/llist/LList":49,"./assets/Script/lightUI/components/llist/ItemRender":3,"./assets/Script/lightUI/components/newlist/newlist":57,"./assets/Script/lightUI/components/newlist/listItemRender":5,"./assets/Script/lightUI/events/LEvent":7,"./assets/Script/lightUI/logging/LogLevel":52,"./assets/Script/lightUI/logging/Logger":8,"./assets/Script/lightUI/managers/LayerManager":59,"./assets/Script/lightUI/managers/TaskAbs":58,"./assets/Script/lightUI/managers/PopupManager":53,"./assets/Script/lightUI/managers/TaskManager":55,"./assets/Script/lightUI/managers/MessageBlock":10,"./assets/Script/lightUI/utils/Dictionary":11,"./assets/Script/lightUI/utils/Draw":56,"./assets/Script/lightUI/utils/MyMath":63,"./assets/Script/lightUI/utils/Handler":62,"./assets/Script/lightUI/utils/CocosTool":54,"./assets/Script/component/alertComponent":42,"./assets/Script/hall/service/HttpService":60,"./assets/Script/hall/service/HallFacase":61,"./assets/Script/hall/events/HallNotification":51,"./assets/Script/hall/utils/HallAlert":20,"./assets/Script/hall/service/GameHttpService":6,"./assets/Common/src/BasePanel":67},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./ServerRoom":15},"path":"preview-scripts/assets/Common/src/DznSocket.js"},{"deps":{"./card":27},"path":"preview-scripts/assets/Script/component/alertContent_4.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/llist/ItemRender.js"},{"deps":{"../../LightUI":41,"./LAlertBox":66,"../../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlert.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/newlist/listItemRender.js"},{"deps":{"./HallFacase":61,"../utils/HallAlert":20,"../events/HallNotification":51,"../../lightUI/components/MountDataAbs":47},"path":"preview-scripts/assets/Script/hall/service/GameHttpService.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/events/LEvent.js"},{"deps":{"./LogLevel":52,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/logging/Logger.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/EventManager.js"},{"deps":{"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/managers/MessageBlock.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Dictionary.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/Expand.js"},{"deps":{"./AudioManage":23,"./AudioConfig":18},"path":"preview-scripts/assets/Common/src/StandardButton.js"},{"deps":{"./DznSocket":1},"path":"preview-scripts/assets/Common/src/GameSocket.js"},{"deps":{"./GameSocket":14},"path":"preview-scripts/assets/Common/src/ServerRoom.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/tool.js"},{"deps":{"./AudioManage":23,"./AudioConfig":18,"./DznSocket":1,"../../Script/component/gameData":44},"path":"preview-scripts/assets/Common/src/StandardCloseAlertButton.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioConfig.js"},{"deps":{"./AudioManage":23,"./DznSocket":1,"./AudioConfig":18,"../../Script/component/gameData":44},"path":"preview-scripts/assets/Common/src/StandardCloseButton.js"},{"deps":{"../../lightUI/LightUI":41,"../../lightUI/components/alert/LAlert":4},"path":"preview-scripts/assets/Script/hall/utils/HallAlert.js"},{"deps":{"./card":27},"path":"preview-scripts/assets/Script/component/alertContent_5.js"},{"deps":{"./card":27},"path":"preview-scripts/assets/Script/component/alertContent_3.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioManage.js"},{"deps":{"./gameData":44,"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/bottomBar.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/alertContent_6.js"},{"deps":{"./gameData":44,"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/cardsRecordLayer.js"},{"deps":{"./utils":43},"path":"preview-scripts/assets/Script/component/card.js"},{"deps":{"./utils":43,"./gameData":44,"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/layerRewardCard.js"},{"deps":{"./gameData":44,"./utils":43,"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/playerInfo.js"},{"deps":{"./gameData":44,"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/mainLobby.js"},{"deps":{"./serverTime":38,"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/heartBeat.js"},{"deps":{"./toast":39,"./tishi":37,"./utils":43,"./gameData":44},"path":"preview-scripts/assets/Script/component/popup.js"},{"deps":{"./utils":43,"./gameData":44},"path":"preview-scripts/assets/Script/component/netCom.js"},{"deps":{"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/reconnect.js"},{"deps":{"./gameData":44,"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/ruleComponent.js"},{"deps":{"./gameData":44,"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/topBar.js"},{"deps":{"../../Common/src/AudioManage":23,"../../Common/src/AudioConfig":18},"path":"preview-scripts/assets/Script/component/tishi.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/serverTime.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/toast.js"},{"deps":{"./LComponent":68,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/LViewStack.js"},{"deps":{"./managers/TaskManager":55,"./managers/PopupManager":53,"../lightUI/managers/LayerManager":59,"./logging/LogLevel":52,"./logging/Logger":8,"./events/LEvent":7,"./utils/Dictionary":11},"path":"preview-scripts/assets/Script/lightUI/LightUI.js"},{"deps":{"./gameData":44,"./alertContent_1":65,"./alertContent_3":22,"./alertContent_5":21,"./alertContent_4":2,"./alertContent_6":25,"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/alertComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/utils.js"},{"deps":{"../lightUI/utils/Dictionary":11,"../lightUI/events/LEvent":7},"path":"preview-scripts/assets/Script/component/gameData.js"},{"deps":{"./LComponent":68,"./LViewStack":40,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/LTabBar.js"},{"deps":{"./LComponent":68},"path":"preview-scripts/assets/Script/lightUI/components/LListAbs.js"},{"deps":{"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/MountDataAbs.js"},{"deps":{"./LComponent":68,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/LWindow.js"},{"deps":{"../LListAbs":46,"./ItemRender":3,"../../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/llist/LList.js"},{"deps":{"./LComponent":68,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/LButton.js"},{"deps":{},"path":"preview-scripts/assets/Script/hall/events/HallNotification.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/logging/LogLevel.js"},{"deps":{"../LightUI":41,"../utils/Draw":56,"../utils/Dictionary":11,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/managers/PopupManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/CocosTool.js"},{"deps":{"./MessageBlock":10,"./TaskAbs":58,"../events/LEvent":7,"../utils/Handler":62,"../utils/Dictionary":11},"path":"preview-scripts/assets/Script/lightUI/managers/TaskManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Draw.js"},{"deps":{"./listItemRender":5,"../../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/newlist/newlist.js"},{"deps":{"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/managers/TaskAbs.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/managers/LayerManager.js"},{"deps":{"./HallFacase":61,"./GameHttpService":6,"../events/HallNotification":51,"../utils/HallAlert":20,"../../../Script/component/gameData":44,"../../lightUI/components/MountDataAbs":47},"path":"preview-scripts/assets/Script/hall/service/HttpService.js"},{"deps":{"../events/HallNotification":51},"path":"preview-scripts/assets/Script/hall/service/HallFacase.js"},{"deps":{"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/utils/Handler.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/MyMath.js"},{"deps":{"../../Script/component/gameData":44},"path":"preview-scripts/assets/Common/src/Bullt.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/alertContent_1.js"},{"deps":{"../../LightUI":41,"../LWindow":48,"../../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlertBox.js"},{"deps":{"./tool":16,"./AudioManage":23,"./AudioConfig":18},"path":"preview-scripts/assets/Common/src/BasePanel.js"},{"deps":{"./MountDataAbs":47,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/LComponent.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    