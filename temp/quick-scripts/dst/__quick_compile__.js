
(function () {
var scripts = [{"deps":{"./assets/Script/lightUI/components/llist/ItemRender":3,"./assets/Script/lightUI/events/LEvent":4,"./assets/Script/lightUI/components/newlist/listItemRender":5,"./assets/Script/lightUI/logging/LogLevel":6,"./assets/Script/lightUI/utils/Dictionary":8,"./assets/Common/src/EventManager":9,"./assets/Common/src/Expand":11,"./assets/Common/src/tool":13,"./assets/Common/src/AudioConfig":16,"./assets/Script/component/layer_reward_card":19,"./assets/Script/component/playerInfo":21,"./assets/Script/component/ruleComponent":23,"./assets/Script/component/serverTime":25,"./assets/Script/component/utils":26,"./assets/Script/component/topBar":28,"./assets/Script/component/toast":29,"./assets/Script/lightUI/utils/Draw":43,"./assets/Script/lightUI/managers/LayerManager":45,"./assets/Common/src/AudioManage":48,"./assets/Script/lightUI/utils/CocosTool":50,"./assets/Script/lightUI/utils/MyMath":51,"./assets/Script/hall/events/HallNotification":53,"./assets/Common/src/DznSocket":1,"./assets/Script/component/mainLobby":2,"./assets/Common/src/GameSocket":10,"./assets/Common/src/ServerRoom":12,"./assets/Common/src/StandardButton":14,"./assets/Common/src/BasePanel":17,"./assets/Script/component/netCom":18,"./assets/Script/component/reconnect":22,"./assets/Script/component/popup":20,"./assets/Script/component/tishi":24,"./assets/Script/component/gameData":27,"./assets/Script/lightUI/LightUI":31,"./assets/Script/component/heartBeat":46,"./assets/Script/lightUI/managers/MessageBlock":7,"./assets/Script/hall/utils/HallAlert":15,"./assets/Script/lightUI/components/LTabBar":30,"./assets/Script/lightUI/components/LViewStack":32,"./assets/Common/src/Bullt":52,"./assets/Script/lightUI/components/LListAbs":33,"./assets/Script/lightUI/components/MountDataAbs":34,"./assets/Script/lightUI/components/LButton":36,"./assets/Script/hall/service/HttpService":38,"./assets/Script/lightUI/managers/TaskAbs":40,"./assets/Script/lightUI/logging/Logger":39,"./assets/Script/lightUI/managers/PopupManager":41,"./assets/Script/lightUI/utils/Handler":42,"./assets/Script/lightUI/managers/TaskManager":44,"./assets/Script/hall/service/HallFacase":49,"./assets/Script/lightUI/components/llist/LList":37,"./assets/Script/hall/service/GameHttpService":54,"./assets/Script/lightUI/components/newlist/newlist":47,"./assets/Script/lightUI/components/alert/LAlertBox":55,"./assets/Script/lightUI/components/LComponent":56,"./assets/Script/lightUI/components/LWindow":35,"./assets/Script/lightUI/components/alert/LAlert":57},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./ServerRoom":12},"path":"preview-scripts/assets/Common/src/DznSocket.js"},{"deps":{"./gameData":27},"path":"preview-scripts/assets/Script/component/mainLobby.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/llist/ItemRender.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/events/LEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/newlist/listItemRender.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/logging/LogLevel.js"},{"deps":{"../events/LEvent":4},"path":"preview-scripts/assets/Script/lightUI/managers/MessageBlock.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Dictionary.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/EventManager.js"},{"deps":{"./DznSocket":1},"path":"preview-scripts/assets/Common/src/GameSocket.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/Expand.js"},{"deps":{"./GameSocket":10},"path":"preview-scripts/assets/Common/src/ServerRoom.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/tool.js"},{"deps":{"./AudioManage":48,"./AudioConfig":16},"path":"preview-scripts/assets/Common/src/StandardButton.js"},{"deps":{"../../lightUI/components/alert/LAlert":57,"../../lightUI/LightUI":31},"path":"preview-scripts/assets/Script/hall/utils/HallAlert.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioConfig.js"},{"deps":{"./tool":13,"./AudioManage":48,"./AudioConfig":16},"path":"preview-scripts/assets/Common/src/BasePanel.js"},{"deps":{"./utils":26,"./gameData":27},"path":"preview-scripts/assets/Script/component/netCom.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/layer_reward_card.js"},{"deps":{"./toast":29,"./tishi":24,"./utils":26,"./gameData":27},"path":"preview-scripts/assets/Script/component/popup.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/playerInfo.js"},{"deps":{"../../Common/src/DznSocket":1},"path":"preview-scripts/assets/Script/component/reconnect.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/ruleComponent.js"},{"deps":{"../../Common/src/AudioManage":48,"../../Common/src/AudioConfig":16},"path":"preview-scripts/assets/Script/component/tishi.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/serverTime.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/utils.js"},{"deps":{"../lightUI/events/LEvent":4,"../lightUI/utils/Dictionary":8},"path":"preview-scripts/assets/Script/component/gameData.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/topBar.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/toast.js"},{"deps":{"../events/LEvent":4,"./LComponent":56,"./LViewStack":32},"path":"preview-scripts/assets/Script/lightUI/components/LTabBar.js"},{"deps":{"../lightUI/managers/LayerManager":45,"./logging/Logger":39,"./logging/LogLevel":6,"./events/LEvent":4,"./managers/PopupManager":41,"./utils/Dictionary":8,"./managers/TaskManager":44},"path":"preview-scripts/assets/Script/lightUI/LightUI.js"},{"deps":{"../events/LEvent":4,"./LComponent":56},"path":"preview-scripts/assets/Script/lightUI/components/LViewStack.js"},{"deps":{"./LComponent":56},"path":"preview-scripts/assets/Script/lightUI/components/LListAbs.js"},{"deps":{"../events/LEvent":4},"path":"preview-scripts/assets/Script/lightUI/components/MountDataAbs.js"},{"deps":{"./LComponent":56,"../events/LEvent":4},"path":"preview-scripts/assets/Script/lightUI/components/LWindow.js"},{"deps":{"../events/LEvent":4,"./LComponent":56},"path":"preview-scripts/assets/Script/lightUI/components/LButton.js"},{"deps":{"../../events/LEvent":4,"./ItemRender":3,"../LListAbs":33},"path":"preview-scripts/assets/Script/lightUI/components/llist/LList.js"},{"deps":{"./HallFacase":49,"../events/HallNotification":53,"../utils/HallAlert":15,"./GameHttpService":54,"../../lightUI/components/MountDataAbs":34,"../../../Script/component/gameData":27},"path":"preview-scripts/assets/Script/hall/service/HttpService.js"},{"deps":{"../events/LEvent":4,"./LogLevel":6},"path":"preview-scripts/assets/Script/lightUI/logging/Logger.js"},{"deps":{"../events/LEvent":4},"path":"preview-scripts/assets/Script/lightUI/managers/TaskAbs.js"},{"deps":{"../utils/Dictionary":8,"../LightUI":31,"../utils/Draw":43,"../events/LEvent":4},"path":"preview-scripts/assets/Script/lightUI/managers/PopupManager.js"},{"deps":{"../events/LEvent":4},"path":"preview-scripts/assets/Script/lightUI/utils/Handler.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Draw.js"},{"deps":{"../events/LEvent":4,"../utils/Dictionary":8,"./MessageBlock":7,"../utils/Handler":42,"./TaskAbs":40},"path":"preview-scripts/assets/Script/lightUI/managers/TaskManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/managers/LayerManager.js"},{"deps":{"../../Common/src/DznSocket":1,"./serverTime":25},"path":"preview-scripts/assets/Script/component/heartBeat.js"},{"deps":{"../../events/LEvent":4,"./listItemRender":5},"path":"preview-scripts/assets/Script/lightUI/components/newlist/newlist.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioManage.js"},{"deps":{"../events/HallNotification":53},"path":"preview-scripts/assets/Script/hall/service/HallFacase.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/CocosTool.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/MyMath.js"},{"deps":{"../../Script/component/gameData":27},"path":"preview-scripts/assets/Common/src/Bullt.js"},{"deps":{},"path":"preview-scripts/assets/Script/hall/events/HallNotification.js"},{"deps":{"../events/HallNotification":53,"../utils/HallAlert":15,"../../lightUI/components/MountDataAbs":34,"./HallFacase":49},"path":"preview-scripts/assets/Script/hall/service/GameHttpService.js"},{"deps":{"../../events/LEvent":4,"../../LightUI":31,"../LWindow":35},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlertBox.js"},{"deps":{"./MountDataAbs":34,"../events/LEvent":4},"path":"preview-scripts/assets/Script/lightUI/components/LComponent.js"},{"deps":{"../../events/LEvent":4,"../../LightUI":31,"./LAlertBox":55},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlert.js"}];
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
    