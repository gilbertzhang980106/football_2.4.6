
(function () {
var scripts = [{"deps":{"./assets/Common/src/Bullt":27,"./assets/Common/src/EventManager":15,"./assets/Common/src/Expand":18,"./assets/Common/src/GameSocket":14,"./assets/Common/src/ServerRoom":17,"./assets/Common/src/StandardButton":16,"./assets/Common/src/StandardCloseAlertButton":19,"./assets/Common/src/StandardCloseButton":20,"./assets/Common/src/tool":21,"./assets/Common/src/AudioManage":22,"./assets/Common/src/AudioConfig":23,"./assets/Script/component/alertContent_4":8,"./assets/Script/component/alertContent_3":65,"./assets/Script/component/alertContent_5":25,"./assets/Script/component/alertContent_6":26,"./assets/Script/component/card":31,"./assets/Script/component/cardsRecordLayer":29,"./assets/Script/component/gameData":32,"./assets/Script/component/heartBeat":30,"./assets/Script/component/layerRewardCard":28,"./assets/Script/component/netCom":38,"./assets/Script/component/mainLobby":33,"./assets/Script/component/playerInfo":34,"./assets/Script/component/reconnect":36,"./assets/Script/component/popup":39,"./assets/Script/component/serverTime":37,"./assets/Script/component/ruleComponent":35,"./assets/Script/component/tishi":40,"./assets/Script/component/toast":41,"./assets/Script/component/topBar":46,"./assets/Script/component/utils":57,"./assets/Script/component/alertComponent":64,"./assets/Script/lightUI/LightUI":44,"./assets/Script/lightUI/components/LComponent":49,"./assets/Script/lightUI/components/LListAbs":5,"./assets/Script/lightUI/components/LViewStack":45,"./assets/Script/lightUI/components/LTabBar":43,"./assets/Script/lightUI/components/MountDataAbs":48,"./assets/Script/lightUI/components/LWindow":42,"./assets/Script/lightUI/components/LButton":47,"./assets/Script/component/alertContent_1":24,"./assets/Script/hall/service/HallFacase":3,"./assets/Script/hall/service/HttpService":66,"./assets/Script/hall/service/GameHttpService":67,"./assets/Script/hall/utils/HallAlert":12,"./assets/Script/hall/events/HallNotification":61,"./assets/Script/lightUI/components/llist/ItemRender":6,"./assets/Script/lightUI/components/llist/LList":50,"./assets/Script/lightUI/components/newlist/listItemRender":54,"./assets/Script/lightUI/components/newlist/newlist":11,"./assets/Script/lightUI/logging/Logger":53,"./assets/Script/lightUI/logging/LogLevel":9,"./assets/Script/lightUI/events/LEvent":7,"./assets/Script/lightUI/managers/MessageBlock":10,"./assets/Script/lightUI/managers/TaskAbs":55,"./assets/Script/lightUI/managers/PopupManager":56,"./assets/Script/lightUI/managers/TaskManager":59,"./assets/Script/lightUI/managers/LayerManager":52,"./assets/Script/lightUI/components/alert/LAlert":2,"./assets/Script/lightUI/components/alert/LAlertBox":51,"./assets/Script/lightUI/utils/Draw":60,"./assets/Script/lightUI/utils/Dictionary":13,"./assets/Script/lightUI/utils/Handler":58,"./assets/Script/lightUI/utils/CocosTool":62,"./assets/Common/src/BasePanel":1,"./assets/Script/lightUI/utils/MyMath":63,"./assets/Common/src/DznSocket":4},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./tool":21,"./AudioManage":22,"./AudioConfig":23},"path":"preview-scripts/assets/Common/src/BasePanel.js"},{"deps":{"../../LightUI":44,"../../events/LEvent":7,"./LAlertBox":51},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlert.js"},{"deps":{"../events/HallNotification":61},"path":"preview-scripts/assets/Script/hall/service/HallFacase.js"},{"deps":{"./ServerRoom":17},"path":"preview-scripts/assets/Common/src/DznSocket.js"},{"deps":{"./LComponent":49},"path":"preview-scripts/assets/Script/lightUI/components/LListAbs.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/llist/ItemRender.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/events/LEvent.js"},{"deps":{"./card":31},"path":"preview-scripts/assets/Script/component/alertContent_4.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/logging/LogLevel.js"},{"deps":{"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/managers/MessageBlock.js"},{"deps":{"./listItemRender":54,"../../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/newlist/newlist.js"},{"deps":{"../../lightUI/LightUI":44,"../../lightUI/components/alert/LAlert":2},"path":"preview-scripts/assets/Script/hall/utils/HallAlert.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Dictionary.js"},{"deps":{"./DznSocket":4},"path":"preview-scripts/assets/Common/src/GameSocket.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/EventManager.js"},{"deps":{"./AudioConfig":23,"./AudioManage":22},"path":"preview-scripts/assets/Common/src/StandardButton.js"},{"deps":{"./GameSocket":14},"path":"preview-scripts/assets/Common/src/ServerRoom.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/Expand.js"},{"deps":{"./AudioManage":22,"../../Script/component/gameData":32,"./AudioConfig":23,"./DznSocket":4},"path":"preview-scripts/assets/Common/src/StandardCloseAlertButton.js"},{"deps":{"./AudioConfig":23,"./AudioManage":22,"../../Script/component/gameData":32,"./DznSocket":4},"path":"preview-scripts/assets/Common/src/StandardCloseButton.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/tool.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioManage.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioConfig.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/alertContent_1.js"},{"deps":{"./card":31},"path":"preview-scripts/assets/Script/component/alertContent_5.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/alertContent_6.js"},{"deps":{"../../Script/component/gameData":32},"path":"preview-scripts/assets/Common/src/Bullt.js"},{"deps":{"./gameData":32,"./utils":57,"../../Common/src/DznSocket":4},"path":"preview-scripts/assets/Script/component/layerRewardCard.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/cardsRecordLayer.js"},{"deps":{"../../Common/src/DznSocket":4,"./serverTime":37},"path":"preview-scripts/assets/Script/component/heartBeat.js"},{"deps":{"./utils":57},"path":"preview-scripts/assets/Script/component/card.js"},{"deps":{"../lightUI/events/LEvent":7,"../lightUI/utils/Dictionary":13},"path":"preview-scripts/assets/Script/component/gameData.js"},{"deps":{"./gameData":32,"../../Common/src/DznSocket":4},"path":"preview-scripts/assets/Script/component/mainLobby.js"},{"deps":{"./utils":57,"./gameData":32,"../../Common/src/DznSocket":4},"path":"preview-scripts/assets/Script/component/playerInfo.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/ruleComponent.js"},{"deps":{"../../Common/src/DznSocket":4},"path":"preview-scripts/assets/Script/component/reconnect.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/serverTime.js"},{"deps":{"./utils":57,"./gameData":32},"path":"preview-scripts/assets/Script/component/netCom.js"},{"deps":{"./tishi":40,"./utils":57,"./gameData":32,"./toast":41},"path":"preview-scripts/assets/Script/component/popup.js"},{"deps":{"../../Common/src/AudioManage":22,"../../Common/src/AudioConfig":23},"path":"preview-scripts/assets/Script/component/tishi.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/toast.js"},{"deps":{"./LComponent":49,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/LWindow.js"},{"deps":{"./LComponent":49,"../events/LEvent":7,"./LViewStack":45},"path":"preview-scripts/assets/Script/lightUI/components/LTabBar.js"},{"deps":{"../lightUI/managers/LayerManager":52,"./events/LEvent":7,"./logging/Logger":53,"./logging/LogLevel":9,"./managers/TaskManager":59,"./managers/PopupManager":56,"./utils/Dictionary":13},"path":"preview-scripts/assets/Script/lightUI/LightUI.js"},{"deps":{"./LComponent":49,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/LViewStack.js"},{"deps":{"./gameData":32,"../../Common/src/DznSocket":4},"path":"preview-scripts/assets/Script/component/topBar.js"},{"deps":{"../events/LEvent":7,"./LComponent":49},"path":"preview-scripts/assets/Script/lightUI/components/LButton.js"},{"deps":{"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/components/MountDataAbs.js"},{"deps":{"../events/LEvent":7,"./MountDataAbs":48},"path":"preview-scripts/assets/Script/lightUI/components/LComponent.js"},{"deps":{"../../events/LEvent":7,"../LListAbs":5,"./ItemRender":6},"path":"preview-scripts/assets/Script/lightUI/components/llist/LList.js"},{"deps":{"../../events/LEvent":7,"../../LightUI":44,"../LWindow":42},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlertBox.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/managers/LayerManager.js"},{"deps":{"../events/LEvent":7,"./LogLevel":9},"path":"preview-scripts/assets/Script/lightUI/logging/Logger.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/newlist/listItemRender.js"},{"deps":{"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/managers/TaskAbs.js"},{"deps":{"../utils/Draw":60,"../utils/Dictionary":13,"../LightUI":44,"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/managers/PopupManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/utils.js"},{"deps":{"../events/LEvent":7},"path":"preview-scripts/assets/Script/lightUI/utils/Handler.js"},{"deps":{"../utils/Dictionary":13,"../events/LEvent":7,"../utils/Handler":58,"./TaskAbs":55,"./MessageBlock":10},"path":"preview-scripts/assets/Script/lightUI/managers/TaskManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Draw.js"},{"deps":{},"path":"preview-scripts/assets/Script/hall/events/HallNotification.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/CocosTool.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/MyMath.js"},{"deps":{"./gameData":32,"./alertContent_1":24,"../../Common/src/DznSocket":4,"./alertContent_4":8,"./alertContent_3":65,"./alertContent_6":26,"./alertContent_5":25},"path":"preview-scripts/assets/Script/component/alertComponent.js"},{"deps":{"./card":31},"path":"preview-scripts/assets/Script/component/alertContent_3.js"},{"deps":{"../events/HallNotification":61,"./HallFacase":3,"./GameHttpService":67,"../../lightUI/components/MountDataAbs":48,"../utils/HallAlert":12,"../../../Script/component/gameData":32},"path":"preview-scripts/assets/Script/hall/service/HttpService.js"},{"deps":{"../utils/HallAlert":12,"../events/HallNotification":61,"./HallFacase":3,"../../lightUI/components/MountDataAbs":48},"path":"preview-scripts/assets/Script/hall/service/GameHttpService.js"}];
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
    