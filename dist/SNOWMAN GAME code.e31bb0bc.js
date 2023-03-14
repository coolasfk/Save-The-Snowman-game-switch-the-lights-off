// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
// napisz komentarze

var directionsArrows = document.querySelectorAll(".arrows__arrow");
var snowballThrow = document.querySelector(".throw-mechanics-wrapper__snowball");
var firstSwitch = document.getElementById("firstSwitch");
var secondSwitch = document.getElementById("secondSwitch");
var thirdSwitch = document.getElementById("thirdSwitch");
//isArrowOn is zawsze na poczatku
var isArrowOn = false;
var rectangleArrowAngle;
var arrowClicked;
var theBody = document.querySelector(".main");
// czytelniej : przypisuj zmiennym poczatkowe wartosci

var arrowPosition = 0;
var arrowPositionHeight = 0;
var arrowPositionWidth = 0;
var arrowPositionLeft = 0;
var arrowPositionRight = 0;
var arrowPositionTop = 0;
var arrowPositionBottom = 0;
var rectangleArrowPosition = 0;
var directionsForSnowball = 0;
var snowballTranslateX = "";
var snowballTranslateY = "";
var powerOfThrow = 400;
//przenies atrybut
var allArrows = document.getElementById("ba079a96-df17-41b0-af0d-4c8ae237a5ac").childNodes;

// let allArrows = document.querySelector('[data-id="all-arrows"]').childNodes;
//TODO Awpisane w zlym miejscu

/// hoovering events

var pointerOverEvent = function pointerOverEvent(e) {
  e.target.style.opacity = 0.3;
};
var mouseLeaveEvent = function mouseLeaveEvent(e) {
  setTimeout(function () {
    e.target.style.opacity = 0.1;
  }, "1000");
};
var addHoverListeners = function addHoverListeners() {
  isArrowOn = false; //TODO
  directionsArrows.forEach(function (arrow) {
    arrow.addEventListener("pointerover", pointerOverEvent);
  });
  directionsArrows.forEach(function (arrow) {
    arrow.addEventListener("mouseleave", mouseLeaveEvent);
  });
};
var removeHoverListeners = function removeHoverListeners() {
  directionsArrows.forEach(function (arrow) {
    arrow.removeEventListener("pointerover", pointerOverEvent);
    arrow.removeEventListener("mouseleave", mouseLeaveEvent);
    arrow.style.opacity = 0.1;
  });
};
addHoverListeners();

/// what happens when Arrow is clicked

directionsArrows.forEach(function (arrow) {
  arrow.addEventListener("click", function (e) {
    arrowClicked = e.target;
    // nie potrzenuje tylu zmiennych
    //rozbic na inne funkcje
    var rectangleArrow = document.createElement("div");
    arrowPosition = arrowClicked.getBoundingClientRect();
    arrowPositionLeft = arrowPosition.left + "px"; //TODO
    arrowPositionRight = arrowPosition.right + "px";
    arrowPositionTop = arrowPosition.top + "px";
    arrowPositionBottom = arrowPosition.bottom + "px";
    arrowPositionHeight = arrowPosition.height;
    arrowPositionWidth = arrowPosition.width;
    console.log(arrowPosition.height, arrowPosition.width);
    rectangleArrow.style.transformOrigin = "left bottom";
    rectangleArrow.style.height = arrowPosition.height + "px";
    rectangleArrow.style.width = arrowPosition.width + "px";
    rectangleArrow.style.top = arrowPositionTop;
    rectangleArrow.style.bottom = arrowPositionBottom;
    rectangleArrow.style.left = arrowPositionLeft;
    rectangleArrow.style.right = arrowPositionRight;
    rectangleArrow.style.backgroundColor = "red";
    rectangleArrow.style.opacity = 0.5;
    rectangleArrow.style.position = "absolute";
    theBody.append(rectangleArrow);
    rectangleArrowPosition = rectangleArrow.getBoundingClientRect();
    var rectangleArrowHeight = parseFloat(rectangleArrow.style.height);
    var rectangleArrowWidth = parseFloat(rectangleArrow.style.width);
    var result;
    console.log(rectangleArrow.style.height, rectangleArrowHeight);
    // function getTheAngle(rectangleArrowHeight, rectangleArrowWidth) {
    //   result = Math.atan(rectangleArrowHeight / rectangleArrowWidth);
    //   return result;
    // }
    var getTheAngle = function getTheAngle(rectangleArrowHeight, rectangleArrowWidth) {
      return Math.atan(rectangleArrowHeight / rectangleArrowWidth);
    }; //TODO

    getTheAngle(rectangleArrowHeight, rectangleArrowWidth);
    console.log("this is the angle", getTheAngle(rectangleArrowHeight, rectangleArrowWidth));
    console.log("rectangleArrowHeight", rectangleArrowHeight);
    console.log("rectangleArrowWidth", rectangleArrowWidth);
    angle = result;
    var newHeight = rectangleArrowHeight + powerOfThrow;
    var newWidthCalc = function newWidthCalc(newHeight, result //TODO
    ) {
      return newHeight / Math.tan(result);
    };
    var newWidth = newWidthCalc(newHeight, result);
    console.log("This is new height", newHeight, "and this is new width", newWidth);
    rectangleArrow.style.height = newHeight + "px";
    rectangleArrow.style.width = newWidth + "px";
    rectangleArrow.style.transform = "translateY(-".concat(newHeight - arrowPositionHeight, "px)");

    //const foo = (name,age,country='Poland')=>...

    snowballTranslateX = rectangleArrow.style.width;
    snowballTranslateY = rectangleArrow.style.height;
    var fakeSnowball = document.createElement("div");
    var snowball = document.getElementById("b5716cf9-1b3f-4ddb-b558-979ef37c5855" //TODO
    );

    console.log(snowball);
    var snowballPosition = snowball.getBoundingClientRect();
    fakeSnowball.style.top = snowballPosition.top;
    fakeSnowball.style.height = snowballPosition.height + "px";
    console.log(fakeSnowball.style.height);
    fakeSnowball.style.width = snowballPosition.width + "px";
    fakeSnowball.style.top = snowballPosition.top + "px";
    fakeSnowball.style.bottom = snowballPosition.bottom + "px";
    fakeSnowball.style.left = snowballPosition.left + "px";
    fakeSnowball.style.right = snowballPosition.right + "px";
    fakeSnowball.style.position = "absolute";
    fakeSnowball.style.backgroundColor = "green";
    document.querySelector(".footer").append(fakeSnowball);
    console.log(fakeSnowball.style.height);
    console.log("before the shoot", fakeSnowball.getBoundingClientRect());
    console.log(snowballTranslateX, snowballTranslateY);
    console.log(arrowClicked);
    var directionOfThrow; //TODO
    for (i = 0; i < 15; i++) {
      if (arrowClicked == allArrows[i]) {
        fakeSnowball.style.transform = "translateX(".concat(snowballTranslateX, ") translateY(-").concat(snowballTranslateY, ") ");
        directionOfThrow = function directionOfThrow() {
          directionsForSnowball = "translateX(".concat(snowballTranslateX, ") translateY(-").concat(snowballTranslateY, ") ");
          return directionsForSnowball;
        };
      }
    }
    console.log("po 1 petli", directionOfThrow);
    for (i = 15; i < 30; i++) {
      if (arrowClicked == allArrows[i]) {
        fakeSnowball.style.transform = "translateX(-".concat(snowballTranslateX, ") translateY(-").concat(snowballTranslateY, ") ");
        directionOfThrow = function directionOfThrow() {
          directionsForSnowball = "translateX(-".concat(snowballTranslateX, ") translateY(-").concat(snowballTranslateY, ") ");
          return directionsForSnowball;
        };
      }
    }
    console.log("po 2 petli", directionOfThrow);
    console.log("after the shoot", fakeSnowball.getBoundingClientRect());
    var fakeSnowballAfterThrowPosition = fakeSnowball.getBoundingClientRect();
    var switchPosition = firstSwitch.getBoundingClientRect();
    console.log(fakeSnowballAfterThrowPosition.top, switchPosition.top);
    if (fakeSnowballAfterThrowPosition.top == switchPosition.top) {
      console.log("hit");
    } else {
      console.log("miss");
    }
    console.log("przed przypisaniem", directionOfThrow);
    var directionsForSnowballRead = directionOfThrow();
    var throwingSnowBall = [{
      transform: directionsForSnowball
    }];
    console.log(directionsForSnowball);
    var throwingSnowBallTiming = {
      duration: 1000,
      iterations: 1
    };
    snowballThrow.addEventListener("click", function () {
      snowballThrow.animate(throwingSnowBall, throwingSnowBallTiming);
    });
    for (var _i = 0; _i < allArrows.length; _i++) {
      if (_i % 2 == !0) {
        allArrows[_i].style.opacity = "0.1";
      } //changing all the arrows to 0.1 opacity
    }

    removeHoverListeners();
    arrow.style.opacity = 1;
  });
});

// unclicking the arrows

function clickOutside(e) {
  //TODO
  if (!e.target.classList.contains("arrows__arrow")) {
    console.log("target doesn't include");
    removeHoverListeners();
    addHoverListeners();
  }
}
theBody.addEventListener("click", clickOutside);
directionsArrows.forEach(function (arrow) {
  arrow.addEventListener("dblclick", function () {
    console.log("doubleclick");
    removeHoverListeners();
    addHoverListeners();
    arrow.style.opacity = 0.1;
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54311" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/SNOWMAN%20GAME%20code.e31bb0bc.js.map