
(function () {
var scripts = [{"deps":{"./assets/config":1,"./assets/Script/lightUI/components/newlist/listItemRender":4,"./assets/Script/lightUI/events/LEvent":6,"./assets/Script/Helloworld":9,"./assets/Script/lightUI/utils/Dictionary":13,"./assets/Script/lightUI/components/llist/ItemRender":16,"./assets/Script/hall/events/HallNotification":23,"./assets/Script/lightUI/logging/LogLevel":24,"./assets/Script/lightUI/managers/LayerManager":26,"./assets/Script/lightUI/utils/Draw":27,"./assets/Script/lightUI/utils/MyMath":28,"./assets/Script/lightUI/utils/CocosTool":31,"./assets/Script/lightUI/LightUI":7,"./assets/Script/lightUI/components/LListAbs":8,"./assets/Script/lightUI/managers/TaskAbs":11,"./assets/Script/lightUI/logging/Logger":10,"./assets/Script/lightUI/components/LComponent":12,"./assets/Script/lightUI/components/LViewStack":15,"./assets/Script/lightUI/components/LTabBar":17,"./assets/Script/lightUI/components/MountDataAbs":19,"./assets/Script/lightUI/components/alert/LAlertBox":2,"./assets/Script/hall/utils/HallAlert":21,"./assets/Script/lightUI/components/LButton":22,"./assets/Script/lightUI/managers/MessageBlock":25,"./assets/Script/lightUI/components/llist/LList":5,"./assets/Script/lightUI/components/alert/LAlert":18,"./assets/Script/lightUI/components/newlist/newlist":20,"./assets/Script/lightUI/managers/TaskManager":30,"./assets/Script/lightUI/managers/PopupManager":32,"./assets/Script/lightUI/utils/Handler":33,"./assets/Script/lightUI/components/LWindow":14,"./assets/Script/hall/service/GameHttpService":3,"./assets/Script/hall/service/HttpService":29},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/config.js"},{"deps":{"../../events/LEvent":6,"../../LightUI":7,"../LWindow":14},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlertBox.js"},{"deps":{"../events/HallNotification":23,"../utils/HallAlert":21,"../../lightUI/components/MountDataAbs":19},"path":"preview-scripts/assets/Script/hall/service/GameHttpService.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/newlist/listItemRender.js"},{"deps":{"../LListAbs":8,"../../events/LEvent":6,"./ItemRender":16},"path":"preview-scripts/assets/Script/lightUI/components/llist/LList.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/events/LEvent.js"},{"deps":{"../lightUI/managers/LayerManager":26,"./events/LEvent":6,"./logging/Logger":10,"./logging/LogLevel":24,"./managers/PopupManager":32,"./utils/Dictionary":13,"./managers/TaskManager":30},"path":"preview-scripts/assets/Script/lightUI/LightUI.js"},{"deps":{"./LComponent":12},"path":"preview-scripts/assets/Script/lightUI/components/LListAbs.js"},{"deps":{},"path":"preview-scripts/assets/Script/Helloworld.js"},{"deps":{"./LogLevel":24,"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/logging/Logger.js"},{"deps":{"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/managers/TaskAbs.js"},{"deps":{"../events/LEvent":6,"./MountDataAbs":19},"path":"preview-scripts/assets/Script/lightUI/components/LComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Dictionary.js"},{"deps":{"./LComponent":12,"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/components/LWindow.js"},{"deps":{"../events/LEvent":6,"./LComponent":12},"path":"preview-scripts/assets/Script/lightUI/components/LViewStack.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/components/llist/ItemRender.js"},{"deps":{"../events/LEvent":6,"./LComponent":12,"./LViewStack":15},"path":"preview-scripts/assets/Script/lightUI/components/LTabBar.js"},{"deps":{"../../events/LEvent":6,"../../LightUI":7,"./LAlertBox":2},"path":"preview-scripts/assets/Script/lightUI/components/alert/LAlert.js"},{"deps":{"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/components/MountDataAbs.js"},{"deps":{"../../events/LEvent":6,"./listItemRender":4},"path":"preview-scripts/assets/Script/lightUI/components/newlist/newlist.js"},{"deps":{"../../lightUI/components/alert/LAlert":18,"../../lightUI/LightUI":7},"path":"preview-scripts/assets/Script/hall/utils/HallAlert.js"},{"deps":{"../events/LEvent":6,"./LComponent":12},"path":"preview-scripts/assets/Script/lightUI/components/LButton.js"},{"deps":{},"path":"preview-scripts/assets/Script/hall/events/HallNotification.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/logging/LogLevel.js"},{"deps":{"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/managers/MessageBlock.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/managers/LayerManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/Draw.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/MyMath.js"},{"deps":{"../events/HallNotification":23,"../utils/HallAlert":21,"./GameHttpService":3,"../../lightUI/components/MountDataAbs":19},"path":"preview-scripts/assets/Script/hall/service/HttpService.js"},{"deps":{"../events/LEvent":6,"../utils/Dictionary":13,"../utils/Handler":33,"./MessageBlock":25,"./TaskAbs":11},"path":"preview-scripts/assets/Script/lightUI/managers/TaskManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/lightUI/utils/CocosTool.js"},{"deps":{"../utils/Dictionary":13,"../LightUI":7,"../utils/Draw":27,"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/managers/PopupManager.js"},{"deps":{"../events/LEvent":6},"path":"preview-scripts/assets/Script/lightUI/utils/Handler.js"}];
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
    