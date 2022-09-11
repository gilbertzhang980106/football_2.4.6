
(function () {
var scripts = [{"deps":{"./assets/Common/src/DznSocket":15,"./assets/Common/src/BasePanel":1,"./assets/Common/src/Expand":22,"./assets/Common/src/EventManager":17,"./assets/Common/src/GameSocket":16,"./assets/Common/src/ServerRoom":23,"./assets/Common/src/StandardButton":18,"./assets/Common/src/StandardCloseButton":19,"./assets/Common/src/tool":20,"./assets/Common/src/StandardCloseAlertButton":21,"./assets/Common/src/AudioConfig":34,"./assets/Common/src/AudioManage":24,"./assets/Script/component/alertContent_3":54,"./assets/Script/component/alertContent_4":5,"./assets/Script/component/alertContent_6":28,"./assets/Script/component/alertContent_5":25,"./assets/Script/component/bottomBar":68,"./assets/Script/component/cardsRecordLayer":26,"./assets/Script/component/card":27,"./assets/Script/component/gameData":29,"./assets/Script/component/mainLobby":31,"./assets/Script/component/layerRewardCard":30,"./assets/Script/component/heartBeat":33,"./assets/Script/component/alertComponent":52,"./assets/Script/component/netCom":35,"./assets/Script/component/tishi":41,"./assets/Script/component/ruleComponent":38,"./assets/Script/component/playerInfo":39,"./assets/Script/component/reconnect":37,"./assets/Script/component/serverTime":44,"./assets/Script/component/popup":36,"./assets/Script/component/toast":42,"./assets/Script/component/topBar":45,"./assets/Script/component/utils":46,"./assets/Script/component/alertContent_1":32,"./assets/Script/lightUI/LightUI":51,"./assets/Script/lightUI/components/LButton":62,"./assets/Script/lightUI/components/LListAbs":6,"./assets/Script/lightUI/components/LTabBar":49,"./assets/Script/lightUI/components/LViewStack":40,"./assets/Script/lightUI/components/LWindow":63,"./assets/Script/lightUI/components/MountDataAbs":48,"./assets/Script/lightUI/components/LComponent":43,"./assets/Script/lightUI/components/alert/LAlertBox":2,"./assets/Script/lightUI/components/alert/LAlert":47,"./assets/Script/lightUI/components/llist/ItemRender":50,"./assets/Script/lightUI/components/llist/LList":7,"./assets/Script/lightUI/components/newlist/newlist":8,"./assets/Script/lightUI/components/newlist/listItemRender":53,"./assets/Script/lightUI/events/LEvent":10,"./assets/Script/lightUI/logging/Logger":55,"./assets/Script/lightUI/logging/LogLevel":12,"./assets/Script/lightUI/managers/TaskAbs":56,"./assets/Script/lightUI/managers/PopupManager":57,"./assets/Script/lightUI/managers/MessageBlock":58,"./assets/Script/lightUI/managers/TaskManager":59,"./assets/Script/lightUI/managers/LayerManager":9,"./assets/Script/lightUI/utils/Draw":67,"./assets/Script/lightUI/utils/Handler":60,"./assets/Script/lightUI/utils/Dictionary":11,"./assets/Script/lightUI/utils/MyMath":61,"./assets/Script/lightUI/utils/CocosTool":64,"./assets/Common/src/Bullt":4,"./assets/Script/hall/service/HallFacase":3,"./assets/Script/hall/service/HttpService":65,"./assets/Script/hall/service/GameHttpService":66,"./assets/Script/hall/utils/HallAlert":13,"./assets/Script/hall/events/HallNotification":14},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./AudioConfig":34,"./tool":20,"./AudioManage":24},"path":"preview-scripts/assets/Common/src/BasePanel.js"},{"deps":{"../../LightUI":51,"../../events/LEvent":10,"../LWindow":63},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlertBox.js"},{"deps":{"../events/HallNotification":14},"path":"preview-scripts/assets/Script/hall/service/HallFacase.js"},{"deps":{"../../Script/component/gameData":29},"path":"preview-scripts/assets/Common/src/Bullt.js"},{"deps":{"./card":27},"path":"preview-scripts/assets/Script/component/alertContent_4.js"},{"deps":{"./LComponent":43},"path":"preview-scripts/assets/Script/lightUI/components/LListAbs.js"},{"deps":{"../../events/LEvent":10,"../LListAbs":6,"./ItemRender":50},"path":"preview-scripts/assets/Script/lightUI/components/llist/LList.js"},{"deps":{"../../events/LEvent":10,"./listItemRender":53},"path":"preview-scripts/assets/Script/lightUI/components/newlist/newlist.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/managers/LayerManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/events/LEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Dictionary.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/logging/LogLevel.js"},{"deps":{"../../lightUI/LightUI":51,"../../lightUI/components/alert/LAlert":47},"path":"preview-scripts/assets/Script/hall/utils/HallAlert.js"},{"deps":{},"path":"preview-scripts/assets/Script/hall/events/HallNotification.js"},{"deps":{"./ServerRoom":23},"path":"preview-scripts/assets/Common/src/DznSocket.js"},{"deps":{"./DznSocket":15},"path":"preview-scripts/assets/Common/src/GameSocket.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/EventManager.js"},{"deps":{"./AudioManage":24,"./AudioConfig":34},"path":"preview-scripts/assets/Common/src/StandardButton.js"},{"deps":{"./AudioManage":24,"./AudioConfig":34,"../../Script/component/gameData":29,"./DznSocket":15},"path":"preview-scripts/assets/Common/src/StandardCloseButton.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/tool.js"},{"deps":{"./AudioManage":24,"./DznSocket":15,"./AudioConfig":34,"../../Script/component/gameData":29},"path":"preview-scripts/assets/Common/src/StandardCloseAlertButton.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/Expand.js"},{"deps":{"./GameSocket":16},"path":"preview-scripts/assets/Common/src/ServerRoom.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioManage.js"},{"deps":{"./card":27},"path":"preview-scripts/assets/Script/component/alertContent_5.js"},{"deps":{"./gameData":29,"../../Common/src/DznSocket":15},"path":"preview-scripts/assets/Script/component/cardsRecordLayer.js"},{"deps":{"./utils":46},"path":"preview-scripts/assets/Script/component/card.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/alertContent_6.js"},{"deps":{"../lightUI/events/LEvent":10,"../lightUI/utils/Dictionary":11},"path":"preview-scripts/assets/Script/component/gameData.js"},{"deps":{"./gameData":29,"./utils":46,"../../Common/src/DznSocket":15},"path":"preview-scripts/assets/Script/component/layerRewardCard.js"},{"deps":{"./gameData":29,"../../Common/src/DznSocket":15},"path":"preview-scripts/assets/Script/component/mainLobby.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/alertContent_1.js"},{"deps":{"./serverTime":44,"../../Common/src/DznSocket":15},"path":"preview-scripts/assets/Script/component/heartBeat.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioConfig.js"},{"deps":{"./gameData":29,"./utils":46},"path":"preview-scripts/assets/Script/component/netCom.js"},{"deps":{"./toast":42,"./tishi":41,"./utils":46,"./gameData":29},"path":"preview-scripts/assets/Script/component/popup.js"},{"deps":{"../../Common/src/DznSocket":15},"path":"preview-scripts/assets/Script/component/reconnect.js"},{"deps":{"./gameData":29,"../../Common/src/DznSocket":15},"path":"preview-scripts/assets/Script/component/ruleComponent.js"},{"deps":{"./utils":46,"./gameData":29,"../../Common/src/DznSocket":15},"path":"preview-scripts/assets/Script/component/playerInfo.js"},{"deps":{"../events/LEvent":10,"./LComponent":43},"path":"preview-scripts/assets/Script/lightUI/components/LViewStack.js"},{"deps":{"../../Common/src/AudioConfig":34,"../../Common/src/AudioManage":24},"path":"preview-scripts/assets/Script/component/tishi.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/toast.js"},{"deps":{"../events/LEvent":10,"./MountDataAbs":48},"path":"preview-scripts/assets/Script/lightUI/components/LComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/serverTime.js"},{"deps":{"./gameData":29,"../../Common/src/DznSocket":15},"path":"preview-scripts/assets/Script/component/topBar.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/utils.js"},{"deps":{"../../events/LEvent":10,"../../LightUI":51,"./LAlertBox":2},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlert.js"},{"deps":{"../events/LEvent":10},"path":"preview-scripts/assets/Script/lightUI/components/MountDataAbs.js"},{"deps":{"./LComponent":43,"./LViewStack":40,"../events/LEvent":10},"path":"preview-scripts/assets/Script/lightUI/components/LTabBar.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/llist/ItemRender.js"},{"deps":{"../lightUI/managers/LayerManager":9,"./events/LEvent":10,"./logging/Logger":55,"./managers/PopupManager":57,"./logging/LogLevel":12,"./utils/Dictionary":11,"./managers/TaskManager":59},"path":"preview-scripts/assets/Script/lightUI/LightUI.js"},{"deps":{"./gameData":29,"../../Common/src/DznSocket":15,"./alertContent_1":32,"./alertContent_4":5,"./alertContent_3":54,"./alertContent_5":25,"./alertContent_6":28},"path":"preview-scripts/assets/Script/component/alertComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/newlist/listItemRender.js"},{"deps":{"./card":27},"path":"preview-scripts/assets/Script/component/alertContent_3.js"},{"deps":{"../events/LEvent":10,"./LogLevel":12},"path":"preview-scripts/assets/Script/lightUI/logging/Logger.js"},{"deps":{"../events/LEvent":10},"path":"preview-scripts/assets/Script/lightUI/managers/TaskAbs.js"},{"deps":{"../utils/Dictionary":11,"../LightUI":51,"../events/LEvent":10,"../utils/Draw":67},"path":"preview-scripts/assets/Script/lightUI/managers/PopupManager.js"},{"deps":{"../events/LEvent":10},"path":"preview-scripts/assets/Script/lightUI/managers/MessageBlock.js"},{"deps":{"../events/LEvent":10,"../utils/Dictionary":11,"../utils/Handler":60,"./MessageBlock":58,"./TaskAbs":56},"path":"preview-scripts/assets/Script/lightUI/managers/TaskManager.js"},{"deps":{"../events/LEvent":10},"path":"preview-scripts/assets/Script/lightUI/utils/Handler.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/MyMath.js"},{"deps":{"./LComponent":43,"../events/LEvent":10},"path":"preview-scripts/assets/Script/lightUI/components/LButton.js"},{"deps":{"../events/LEvent":10,"./LComponent":43},"path":"preview-scripts/assets/Script/lightUI/components/LWindow.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/CocosTool.js"},{"deps":{"../events/HallNotification":14,"./HallFacase":3,"../utils/HallAlert":13,"../../lightUI/components/MountDataAbs":48,"./GameHttpService":66,"../../../Script/component/gameData":29},"path":"preview-scripts/assets/Script/hall/service/HttpService.js"},{"deps":{"../events/HallNotification":14,"../utils/HallAlert":13,"../../lightUI/components/MountDataAbs":48,"./HallFacase":3},"path":"preview-scripts/assets/Script/hall/service/GameHttpService.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Draw.js"},{"deps":{"./gameData":29,"../../Common/src/DznSocket":15},"path":"preview-scripts/assets/Script/component/bottomBar.js"}];
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
    