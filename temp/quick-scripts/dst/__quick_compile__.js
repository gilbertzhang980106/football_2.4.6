
(function () {
var scripts = [{"deps":{"./assets/Script/lightUI/components/llist/ItemRender":2,"./assets/Script/lightUI/components/newlist/listItemRender":4,"./assets/Script/lightUI/events/LEvent":6,"./assets/Script/lightUI/utils/Draw":8,"./assets/Script/component/playerInfo":10,"./assets/Script/component/ruleComponent":12,"./assets/Script/component/serverTime":16,"./assets/Script/component/topBar":17,"./assets/Script/component/utils":18,"./assets/Script/component/toast":19,"./assets/Script/lightUI/logging/LogLevel":30,"./assets/Script/lightUI/managers/LayerManager":33,"./assets/Script/lightUI/utils/Dictionary":36,"./assets/Script/lightUI/utils/CocosTool":40,"./assets/common/src/Expand":41,"./assets/common/src/EventManager":42,"./assets/common/src/tool":46,"./assets/common/src/AudioConfig":48,"./assets/Script/lightUI/utils/MyMath":49,"./assets/common/src/AudioManage":52,"./assets/Script/hall/events/HallNotification":53,"./assets/Script/component/netCom":11,"./assets/Script/component/popup":13,"./assets/Script/component/gameData":20,"./assets/Script/lightUI/LightUI":21,"./assets/Script/lightUI/logging/Logger":5,"./assets/Script/lightUI/managers/PopupManager":7,"./assets/common/src/BasePanel":39,"./assets/common/src/ServerRoom":43,"./assets/Script/hall/service/HttpService":9,"./assets/common/src/StandardCloseButton":44,"./assets/common/src/GameSocket":45,"./assets/Script/lightUI/components/LListAbs":22,"./assets/common/src/StandardButton":51,"./assets/Script/lightUI/components/LViewStack":23,"./assets/Script/lightUI/components/MountDataAbs":25,"./assets/Script/lightUI/components/LButton":24,"./assets/Script/lightUI/components/LTabBar":26,"./assets/Script/hall/utils/HallAlert":29,"./assets/common/src/Bullt":54,"./assets/Script/lightUI/managers/MessageBlock":31,"./assets/Script/lightUI/components/alert/LAlert":3,"./assets/Script/lightUI/utils/Handler":34,"./assets/Script/lightUI/managers/TaskManager":32,"./assets/Script/lightUI/managers/TaskAbs":35,"./assets/Script/hall/service/GameHttpService":38,"./assets/Script/component/mainLobby":1,"./assets/Script/component/layer_reward_card":47,"./assets/Script/component/reconnect":14,"./assets/Script/lightUI/components/newlist/newlist":28,"./assets/Script/hall/service/HallFacase":55,"./assets/common/src/DznSocket":56,"./assets/Script/lightUI/components/llist/LList":50,"./assets/Script/lightUI/components/LWindow":27,"./assets/Script/lightUI/components/LComponent":57,"./assets/Script/lightUI/components/alert/LAlertBox":58,"./assets/Script/component/tishi":15,"./assets/Script/component/heartBeat":37},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./gameData":20,"../../Common/src/DznSocket":60},"path":"preview-scripts/assets/Script/component/mainLobby.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/llist/ItemRender.js"},{"deps":{"../../events/LEvent":6,"../../LightUI":21,"./LAlertBox":58},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlert.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/newlist/listItemRender.js"},{"deps":{"../events/LEvent":6,"./LogLevel":30},"path":"preview-scripts/assets/Script/lightUI/logging/Logger.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/events/LEvent.js"},{"deps":{"../utils/Dictionary":36,"../utils/Draw":8,"../LightUI":21,"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/managers/PopupManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Draw.js"},{"deps":{"../events/HallNotification":53,"./HallFacase":55,"../utils/HallAlert":29,"./GameHttpService":38,"../../lightUI/components/MountDataAbs":25,"../../../Script/component/gameData":20},"path":"preview-scripts/assets/Script/hall/service/HttpService.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/playerInfo.js"},{"deps":{"./utils":18,"./gameData":20},"path":"preview-scripts/assets/Script/component/netCom.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/ruleComponent.js"},{"deps":{"./toast":19,"./utils":18,"./tishi":15,"./gameData":20},"path":"preview-scripts/assets/Script/component/popup.js"},{"deps":{"../../Common/src/DznSocket":60},"path":"preview-scripts/assets/Script/component/reconnect.js"},{"deps":{"../../Common/src/AudioConfig":59,"../../Common/src/AudioManage":61},"path":"preview-scripts/assets/Script/component/tishi.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/serverTime.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/topBar.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/utils.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/toast.js"},{"deps":{"../lightUI/events/LEvent":6,"../lightUI/utils/Dictionary":36},"path":"preview-scripts/assets/Script/component/gameData.js"},{"deps":{"../lightUI/managers/LayerManager":33,"./events/LEvent":6,"./logging/Logger":5,"./logging/LogLevel":30,"./managers/PopupManager":7,"./managers/TaskManager":32,"./utils/Dictionary":36},"path":"preview-scripts/assets/Script/lightUI/LightUI.js"},{"deps":{"./LComponent":57},"path":"preview-scripts/assets/Script/lightUI/components/LListAbs.js"},{"deps":{"../events/LEvent":6,"./LComponent":57},"path":"preview-scripts/assets/Script/lightUI/components/LViewStack.js"},{"deps":{"../events/LEvent":6,"./LComponent":57},"path":"preview-scripts/assets/Script/lightUI/components/LButton.js"},{"deps":{"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/components/MountDataAbs.js"},{"deps":{"../events/LEvent":6,"./LComponent":57,"./LViewStack":23},"path":"preview-scripts/assets/Script/lightUI/components/LTabBar.js"},{"deps":{"./LComponent":57,"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/components/LWindow.js"},{"deps":{"../../events/LEvent":6,"./listItemRender":4},"path":"preview-scripts/assets/Script/lightUI/components/newlist/newlist.js"},{"deps":{"../../lightUI/LightUI":21,"../../lightUI/components/alert/LAlert":3},"path":"preview-scripts/assets/Script/hall/utils/HallAlert.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/logging/LogLevel.js"},{"deps":{"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/managers/MessageBlock.js"},{"deps":{"../events/LEvent":6,"../utils/Dictionary":36,"../utils/Handler":34,"./MessageBlock":31,"./TaskAbs":35},"path":"preview-scripts/assets/Script/lightUI/managers/TaskManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/managers/LayerManager.js"},{"deps":{"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/utils/Handler.js"},{"deps":{"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/managers/TaskAbs.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Dictionary.js"},{"deps":{"./serverTime":16,"../../Common/src/DznSocket":60},"path":"preview-scripts/assets/Script/component/heartBeat.js"},{"deps":{"../events/HallNotification":53,"../utils/HallAlert":29,"./HallFacase":55,"../../lightUI/components/MountDataAbs":25},"path":"preview-scripts/assets/Script/hall/service/GameHttpService.js"},{"deps":{"./tool":46,"./AudioManage":52,"./AudioConfig":48},"path":"preview-scripts/assets/common/src/BasePanel.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/CocosTool.js"},{"deps":{},"path":"preview-scripts/assets/common/src/Expand.js"},{"deps":{},"path":"preview-scripts/assets/common/src/EventManager.js"},{"deps":{"./GameSocket":45},"path":"preview-scripts/assets/common/src/ServerRoom.js"},{"deps":{"./AudioManage":52,"./AudioConfig":48,"./DznSocket":56,"../../Script/component/gameData":20},"path":"preview-scripts/assets/common/src/StandardCloseButton.js"},{"deps":{"./DznSocket":56},"path":"preview-scripts/assets/common/src/GameSocket.js"},{"deps":{},"path":"preview-scripts/assets/common/src/tool.js"},{"deps":{"./gameData":20,"../../Common/src/DznSocket":60},"path":"preview-scripts/assets/Script/component/layer_reward_card.js"},{"deps":{},"path":"preview-scripts/assets/common/src/AudioConfig.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/MyMath.js"},{"deps":{"../../events/LEvent":6,"../LListAbs":22,"./ItemRender":2},"path":"preview-scripts/assets/Script/lightUI/components/llist/LList.js"},{"deps":{"./AudioManage":52,"./AudioConfig":48},"path":"preview-scripts/assets/common/src/StandardButton.js"},{"deps":{},"path":"preview-scripts/assets/common/src/AudioManage.js"},{"deps":{},"path":"preview-scripts/assets/Script/hall/events/HallNotification.js"},{"deps":{"../../Script/component/gameData":20},"path":"preview-scripts/assets/common/src/Bullt.js"},{"deps":{"../events/HallNotification":53},"path":"preview-scripts/assets/Script/hall/service/HallFacase.js"},{"deps":{"./ServerRoom":43},"path":"preview-scripts/assets/common/src/DznSocket.js"},{"deps":{"./MountDataAbs":25,"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/components/LComponent.js"},{"deps":{"../../events/LEvent":6,"../../LightUI":21,"../LWindow":27},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlertBox.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioConfig.js"},{"deps":{"./ServerRoom":62},"path":"preview-scripts/assets/Common/src/DznSocket.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioManage.js"},{"deps":{"./GameSocket":63},"path":"preview-scripts/assets/Common/src/ServerRoom.js"},{"deps":{"./DznSocket":60},"path":"preview-scripts/assets/Common/src/GameSocket.js"}];
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
    