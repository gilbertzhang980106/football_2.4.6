
(function () {
var scripts = [{"deps":{"./assets/Common/src/Bullt":4,"./assets/Common/src/DznSocket":13,"./assets/Common/src/EventManager":14,"./assets/Common/src/Expand":17,"./assets/Common/src/GameSocket":15,"./assets/Common/src/ServerRoom":18,"./assets/Common/src/StandardButton":20,"./assets/Common/src/StandardCloseAlertButton":19,"./assets/Common/src/StandardCloseButton":21,"./assets/Common/src/tool":26,"./assets/Common/src/AudioConfig":23,"./assets/Common/src/BasePanel":1,"./assets/Script/component/alertContent_3":5,"./assets/Script/component/alertContent_4":25,"./assets/Script/component/alertContent_5":24,"./assets/Script/component/card":45,"./assets/Script/component/alertContent_6":29,"./assets/Script/component/cardsRecordLayer":67,"./assets/Script/component/gameData":32,"./assets/Script/component/heartBeat":28,"./assets/Script/component/layerRewardCard":38,"./assets/Script/component/mainLobby":30,"./assets/Script/component/playerInfo":31,"./assets/Script/component/netCom":34,"./assets/Script/component/popup":33,"./assets/Script/component/reconnect":48,"./assets/Script/component/serverTime":35,"./assets/Script/component/ruleComponent":36,"./assets/Script/component/tishi":46,"./assets/Script/component/topBar":43,"./assets/Script/component/toast":39,"./assets/Script/component/utils":40,"./assets/Script/component/alertContent_1":50,"./assets/Script/lightUI/LightUI":44,"./assets/Script/lightUI/components/LComponent":37,"./assets/Script/lightUI/components/LListAbs":11,"./assets/Script/lightUI/components/LViewStack":49,"./assets/Script/lightUI/components/LWindow":53,"./assets/Script/lightUI/components/LTabBar":42,"./assets/Script/lightUI/components/MountDataAbs":57,"./assets/Script/lightUI/components/LButton":59,"./assets/Script/lightUI/components/alert/LAlertBox":2,"./assets/Script/lightUI/components/alert/LAlert":51,"./assets/Script/lightUI/components/llist/LList":52,"./assets/Script/lightUI/components/llist/ItemRender":7,"./assets/Script/lightUI/components/newlist/newlist":56,"./assets/Script/lightUI/components/newlist/listItemRender":9,"./assets/Script/component/alertComponent":41,"./assets/Script/hall/service/HttpService":54,"./assets/Script/hall/service/HallFacase":3,"./assets/Script/hall/service/GameHttpService":58,"./assets/Script/hall/utils/HallAlert":12,"./assets/Script/hall/events/HallNotification":22,"./assets/Script/lightUI/logging/Logger":6,"./assets/Script/lightUI/logging/LogLevel":47,"./assets/Script/lightUI/events/LEvent":8,"./assets/Script/lightUI/managers/MessageBlock":10,"./assets/Script/lightUI/managers/PopupManager":55,"./assets/Script/lightUI/managers/TaskManager":60,"./assets/Script/lightUI/managers/TaskAbs":61,"./assets/Script/lightUI/managers/LayerManager":62,"./assets/Script/lightUI/utils/Dictionary":16,"./assets/Script/lightUI/utils/Draw":63,"./assets/Script/lightUI/utils/CocosTool":65,"./assets/Script/lightUI/utils/Handler":64,"./assets/Script/lightUI/utils/MyMath":66,"./assets/Common/src/AudioManage":27},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./AudioManage":27,"./AudioConfig":23,"./tool":26},"path":"preview-scripts/assets/Common/src/BasePanel.js"},{"deps":{"../../events/LEvent":8,"../LWindow":53,"../../LightUI":44},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlertBox.js"},{"deps":{"../events/HallNotification":22},"path":"preview-scripts/assets/Script/hall/service/HallFacase.js"},{"deps":{"../../Script/component/gameData":32},"path":"preview-scripts/assets/Common/src/Bullt.js"},{"deps":{"./card":45},"path":"preview-scripts/assets/Script/component/alertContent_3.js"},{"deps":{"./LogLevel":47,"../events/LEvent":8},"path":"preview-scripts/assets/Script/lightUI/logging/Logger.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/llist/ItemRender.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/events/LEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/newlist/listItemRender.js"},{"deps":{"../events/LEvent":8},"path":"preview-scripts/assets/Script/lightUI/managers/MessageBlock.js"},{"deps":{"./LComponent":37},"path":"preview-scripts/assets/Script/lightUI/components/LListAbs.js"},{"deps":{"../../lightUI/components/alert/LAlert":51,"../../lightUI/LightUI":44},"path":"preview-scripts/assets/Script/hall/utils/HallAlert.js"},{"deps":{"./ServerRoom":18},"path":"preview-scripts/assets/Common/src/DznSocket.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/EventManager.js"},{"deps":{"./DznSocket":13},"path":"preview-scripts/assets/Common/src/GameSocket.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Dictionary.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/Expand.js"},{"deps":{"./GameSocket":15},"path":"preview-scripts/assets/Common/src/ServerRoom.js"},{"deps":{"./AudioConfig":23,"./DznSocket":13,"./AudioManage":27,"../../Script/component/gameData":32},"path":"preview-scripts/assets/Common/src/StandardCloseAlertButton.js"},{"deps":{"./AudioManage":27,"./AudioConfig":23},"path":"preview-scripts/assets/Common/src/StandardButton.js"},{"deps":{"./AudioConfig":23,"./AudioManage":27,"./DznSocket":13,"../../Script/component/gameData":32},"path":"preview-scripts/assets/Common/src/StandardCloseButton.js"},{"deps":{},"path":"preview-scripts/assets/Script/hall/events/HallNotification.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioConfig.js"},{"deps":{"./card":45},"path":"preview-scripts/assets/Script/component/alertContent_5.js"},{"deps":{"./card":45},"path":"preview-scripts/assets/Script/component/alertContent_4.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/tool.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioManage.js"},{"deps":{"../../Common/src/DznSocket":13,"./serverTime":35},"path":"preview-scripts/assets/Script/component/heartBeat.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/alertContent_6.js"},{"deps":{"./gameData":32,"../../Common/src/DznSocket":13},"path":"preview-scripts/assets/Script/component/mainLobby.js"},{"deps":{"./gameData":32,"./utils":40,"../../Common/src/DznSocket":13},"path":"preview-scripts/assets/Script/component/playerInfo.js"},{"deps":{"../lightUI/utils/Dictionary":16,"../lightUI/events/LEvent":8},"path":"preview-scripts/assets/Script/component/gameData.js"},{"deps":{"./toast":39,"./tishi":46,"./utils":40,"./gameData":32},"path":"preview-scripts/assets/Script/component/popup.js"},{"deps":{"./utils":40,"./gameData":32},"path":"preview-scripts/assets/Script/component/netCom.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/serverTime.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/ruleComponent.js"},{"deps":{"../events/LEvent":8,"./MountDataAbs":57},"path":"preview-scripts/assets/Script/lightUI/components/LComponent.js"},{"deps":{"./utils":40,"./gameData":32,"../../Common/src/DznSocket":13},"path":"preview-scripts/assets/Script/component/layerRewardCard.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/toast.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/utils.js"},{"deps":{"./gameData":32,"../../Common/src/DznSocket":13,"./alertContent_1":50,"./alertContent_3":5,"./alertContent_4":25,"./alertContent_6":29,"./alertContent_5":24},"path":"preview-scripts/assets/Script/component/alertComponent.js"},{"deps":{"../events/LEvent":8,"./LComponent":37,"./LViewStack":49},"path":"preview-scripts/assets/Script/lightUI/components/LTabBar.js"},{"deps":{"./gameData":32,"../../Common/src/DznSocket":13},"path":"preview-scripts/assets/Script/component/topBar.js"},{"deps":{"../lightUI/managers/LayerManager":62,"./events/LEvent":8,"./logging/LogLevel":47,"./managers/TaskManager":60,"./logging/Logger":6,"./utils/Dictionary":16,"./managers/PopupManager":55},"path":"preview-scripts/assets/Script/lightUI/LightUI.js"},{"deps":{"./utils":40},"path":"preview-scripts/assets/Script/component/card.js"},{"deps":{"../../Common/src/AudioManage":27,"../../Common/src/AudioConfig":23},"path":"preview-scripts/assets/Script/component/tishi.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/logging/LogLevel.js"},{"deps":{"../../Common/src/DznSocket":13},"path":"preview-scripts/assets/Script/component/reconnect.js"},{"deps":{"../events/LEvent":8,"./LComponent":37},"path":"preview-scripts/assets/Script/lightUI/components/LViewStack.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/alertContent_1.js"},{"deps":{"../../events/LEvent":8,"../../LightUI":44,"./LAlertBox":2},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlert.js"},{"deps":{"../../events/LEvent":8,"../LListAbs":11,"./ItemRender":7},"path":"preview-scripts/assets/Script/lightUI/components/llist/LList.js"},{"deps":{"../events/LEvent":8,"./LComponent":37},"path":"preview-scripts/assets/Script/lightUI/components/LWindow.js"},{"deps":{"../events/HallNotification":22,"../utils/HallAlert":12,"../../../Script/component/gameData":32,"./HallFacase":3,"./GameHttpService":58,"../../lightUI/components/MountDataAbs":57},"path":"preview-scripts/assets/Script/hall/service/HttpService.js"},{"deps":{"../utils/Dictionary":16,"../LightUI":44,"../utils/Draw":63,"../events/LEvent":8},"path":"preview-scripts/assets/Script/lightUI/managers/PopupManager.js"},{"deps":{"../../events/LEvent":8,"./listItemRender":9},"path":"preview-scripts/assets/Script/lightUI/components/newlist/newlist.js"},{"deps":{"../events/LEvent":8},"path":"preview-scripts/assets/Script/lightUI/components/MountDataAbs.js"},{"deps":{"../events/HallNotification":22,"../utils/HallAlert":12,"../../lightUI/components/MountDataAbs":57,"./HallFacase":3},"path":"preview-scripts/assets/Script/hall/service/GameHttpService.js"},{"deps":{"../events/LEvent":8,"./LComponent":37},"path":"preview-scripts/assets/Script/lightUI/components/LButton.js"},{"deps":{"../events/LEvent":8,"../utils/Handler":64,"../utils/Dictionary":16,"./MessageBlock":10,"./TaskAbs":61},"path":"preview-scripts/assets/Script/lightUI/managers/TaskManager.js"},{"deps":{"../events/LEvent":8},"path":"preview-scripts/assets/Script/lightUI/managers/TaskAbs.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/managers/LayerManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Draw.js"},{"deps":{"../events/LEvent":8},"path":"preview-scripts/assets/Script/lightUI/utils/Handler.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/CocosTool.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/MyMath.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/cardsRecordLayer.js"}];
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
    