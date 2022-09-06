
(function () {
var scripts = [{"deps":{"./assets/Common/src/BasePanel":3,"./assets/Common/src/Bullt":50,"./assets/Common/src/EventManager":49,"./assets/Common/src/DznSocket":51,"./assets/Common/src/Expand":48,"./assets/Common/src/StandardButton":54,"./assets/Common/src/ServerRoom":47,"./assets/Common/src/GameSocket":45,"./assets/Common/src/tool":52,"./assets/Common/src/AudioConfig":53,"./assets/Common/src/AudioManage":46,"./assets/config":1,"./assets/Script/component/gameData":2,"./assets/Script/component/heartBeat":16,"./assets/Script/component/reconnect":15,"./assets/Script/component/toast":21,"./assets/Script/component/serverTime":20,"./assets/Script/component/utils":22,"./assets/Script/component/tishi":17,"./assets/Script/component/netCom":26,"./assets/Script/hall/events/HallNotification":4,"./assets/Script/hall/lightMVC":19,"./assets/Script/hall/service/HallFacase":23,"./assets/Script/hall/service/HttpService":24,"./assets/Script/hall/service/GameHttpService":6,"./assets/Script/hall/utils/HallAlert":7,"./assets/Script/lightUI/LightUI":25,"./assets/Script/lightUI/components/LListAbs":28,"./assets/Script/lightUI/components/LComponent":8,"./assets/Script/lightUI/components/LTabBar":27,"./assets/Script/lightUI/components/LViewStack":30,"./assets/Script/lightUI/components/LWindow":31,"./assets/Script/lightUI/components/MountDataAbs":29,"./assets/Script/lightUI/components/LButton":33,"./assets/Script/lightUI/components/alert/LAlertBox":32,"./assets/Script/lightUI/components/alert/LAlert":5,"./assets/Script/lightUI/components/llist/LList":35,"./assets/Script/lightUI/components/llist/ItemRender":10,"./assets/Script/lightUI/logging/Logger":37,"./assets/Script/lightUI/logging/LogLevel":13,"./assets/Script/lightUI/components/newlist/newlist":34,"./assets/Script/lightUI/components/newlist/listItemRender":9,"./assets/Script/lightUI/events/LEvent":12,"./assets/Script/lightUI/managers/LayerManager":42,"./assets/Script/lightUI/managers/TaskAbs":38,"./assets/Script/lightUI/managers/PopupManager":11,"./assets/Script/lightUI/managers/TaskManager":40,"./assets/Script/lightUI/managers/MessageBlock":36,"./assets/Script/lightUI/utils/CocosTool":44,"./assets/Script/lightUI/utils/Dictionary":39,"./assets/Script/lightUI/utils/Handler":41,"./assets/Script/lightUI/utils/MyMath":43,"./assets/Script/lightUI/utils/Draw":14,"./assets/Script/component/popup":18},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/config.js"},{"deps":{"../lightUI/events/LEvent":12,"../lightUI/utils/Dictionary":39},"path":"preview-scripts/assets/Script/component/gameData.js"},{"deps":{"./tool":52,"./AudioManage":46,"./AudioConfig":53},"path":"preview-scripts/assets/Common/src/BasePanel.js"},{"deps":{},"path":"preview-scripts/assets/Script/hall/events/HallNotification.js"},{"deps":{"../../events/LEvent":12,"./LAlertBox":32,"../../LightUI":25},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlert.js"},{"deps":{"../events/HallNotification":4,"../utils/HallAlert":7,"../../lightUI/components/MountDataAbs":29,"./HallFacase":23},"path":"preview-scripts/assets/Script/hall/service/GameHttpService.js"},{"deps":{"../../lightUI/components/alert/LAlert":5,"../../lightUI/LightUI":25},"path":"preview-scripts/assets/Script/hall/utils/HallAlert.js"},{"deps":{"../events/LEvent":12,"./MountDataAbs":29},"path":"preview-scripts/assets/Script/lightUI/components/LComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/newlist/listItemRender.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/llist/ItemRender.js"},{"deps":{"../utils/Dictionary":39,"../LightUI":25,"../utils/Draw":14,"../events/LEvent":12},"path":"preview-scripts/assets/Script/lightUI/managers/PopupManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/events/LEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/logging/LogLevel.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Draw.js"},{"deps":{"../../Common/src/DznSocket":51},"path":"preview-scripts/assets/Script/component/reconnect.js"},{"deps":{"./serverTime":20,"../../Common/src/DznSocket":51},"path":"preview-scripts/assets/Script/component/heartBeat.js"},{"deps":{"../../Common/src/AudioConfig":53,"../../Common/src/AudioManage":46},"path":"preview-scripts/assets/Script/component/tishi.js"},{"deps":{"./tishi":17,"./toast":21,"./utils":22,"./gameData":2},"path":"preview-scripts/assets/Script/component/popup.js"},{"deps":{},"path":"preview-scripts/assets/Script/hall/lightMVC.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/serverTime.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/toast.js"},{"deps":{},"path":"preview-scripts/assets/Script/component/utils.js"},{"deps":{"../events/HallNotification":4},"path":"preview-scripts/assets/Script/hall/service/HallFacase.js"},{"deps":{"./HallFacase":23,"../events/HallNotification":4,"../utils/HallAlert":7,"./GameHttpService":6,"../../lightUI/components/MountDataAbs":29,"../../../Script/component/gameData":2},"path":"preview-scripts/assets/Script/hall/service/HttpService.js"},{"deps":{"../lightUI/managers/LayerManager":42,"./events/LEvent":12,"./managers/PopupManager":11,"./logging/Logger":37,"./logging/LogLevel":13,"./managers/TaskManager":40,"./utils/Dictionary":39},"path":"preview-scripts/assets/Script/lightUI/LightUI.js"},{"deps":{"./utils":22,"./gameData":2},"path":"preview-scripts/assets/Script/component/netCom.js"},{"deps":{"./LViewStack":30,"../events/LEvent":12,"./LComponent":8},"path":"preview-scripts/assets/Script/lightUI/components/LTabBar.js"},{"deps":{"./LComponent":8},"path":"preview-scripts/assets/Script/lightUI/components/LListAbs.js"},{"deps":{"../events/LEvent":12},"path":"preview-scripts/assets/Script/lightUI/components/MountDataAbs.js"},{"deps":{"../events/LEvent":12,"./LComponent":8},"path":"preview-scripts/assets/Script/lightUI/components/LViewStack.js"},{"deps":{"./LComponent":8,"../events/LEvent":12},"path":"preview-scripts/assets/Script/lightUI/components/LWindow.js"},{"deps":{"../../LightUI":25,"../../events/LEvent":12,"../LWindow":31},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlertBox.js"},{"deps":{"./LComponent":8,"../events/LEvent":12},"path":"preview-scripts/assets/Script/lightUI/components/LButton.js"},{"deps":{"../../events/LEvent":12,"./listItemRender":9},"path":"preview-scripts/assets/Script/lightUI/components/newlist/newlist.js"},{"deps":{"./ItemRender":10,"../LListAbs":28,"../../events/LEvent":12},"path":"preview-scripts/assets/Script/lightUI/components/llist/LList.js"},{"deps":{"../events/LEvent":12},"path":"preview-scripts/assets/Script/lightUI/managers/MessageBlock.js"},{"deps":{"../events/LEvent":12,"./LogLevel":13},"path":"preview-scripts/assets/Script/lightUI/logging/Logger.js"},{"deps":{"../events/LEvent":12},"path":"preview-scripts/assets/Script/lightUI/managers/TaskAbs.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Dictionary.js"},{"deps":{"../events/LEvent":12,"../utils/Dictionary":39,"../utils/Handler":41,"./MessageBlock":36,"./TaskAbs":38},"path":"preview-scripts/assets/Script/lightUI/managers/TaskManager.js"},{"deps":{"../events/LEvent":12},"path":"preview-scripts/assets/Script/lightUI/utils/Handler.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/managers/LayerManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/MyMath.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/CocosTool.js"},{"deps":{"./DznSocket":51},"path":"preview-scripts/assets/Common/src/GameSocket.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioManage.js"},{"deps":{"./GameSocket":45},"path":"preview-scripts/assets/Common/src/ServerRoom.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/Expand.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/EventManager.js"},{"deps":{"../../Script/component/gameData":2},"path":"preview-scripts/assets/Common/src/Bullt.js"},{"deps":{"./ServerRoom":47},"path":"preview-scripts/assets/Common/src/DznSocket.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/tool.js"},{"deps":{},"path":"preview-scripts/assets/Common/src/AudioConfig.js"},{"deps":{"./AudioManage":46,"./AudioConfig":53},"path":"preview-scripts/assets/Common/src/StandardButton.js"}];
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
    