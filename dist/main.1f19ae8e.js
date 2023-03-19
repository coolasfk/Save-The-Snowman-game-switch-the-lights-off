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
})({"hovers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeHoverListeners = exports.changeAllArrowsOpacity = exports.addHoverListeners = void 0;
///------------ FUNCTIONS HOOVERING EVENTS ------------///

var changeAllArrowsOpacity = function changeAllArrowsOpacity(item) {
  for (var i = 0; i < item.length; i++) {
    // if (i % 2 == !0) {
    item[i].style.opacity = "0.1";
    // }
  }
};
exports.changeAllArrowsOpacity = changeAllArrowsOpacity;
var removeHoverListeners = function removeHoverListeners(element) {
  element.forEach(function (arrow) {
    arrow.removeEventListener("pointerover", pointerOverEvent);
    arrow.removeEventListener("mouseleave", mouseLeaveEvent);
  });
};

//to powinno sie dziac tylko gdy jest mobile device albo maly
//add event listener zmiana szerokosci i tam dac ify (onchange)
// resize
// export const removeHoverListeners = (element) => {
//   console.log("");
//   element.forEach((arrow) => {
//     arrow.removeEventListener("touchmove", pointerOverEvent);
//     arrow.removeEventListener("touchend", mouseLeaveEvent);
//   });
// };
exports.removeHoverListeners = removeHoverListeners;
var pointerOverEvent = function pointerOverEvent(e) {
  e.target.style.opacity = 0.3;
};
var mouseLeaveEvent = function mouseLeaveEvent(e) {
  setTimeout(function () {
    e.target.style.opacity = 0.1;
  }, "1000");
};
var addHoverListeners = function addHoverListeners(element) {
  element.forEach(function (arrow) {
    arrow.addEventListener("pointerover", pointerOverEvent);
    arrow.addEventListener("mouseleave", mouseLeaveEvent);
  });
  return false;
};
exports.addHoverListeners = addHoverListeners;
},{}],"slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readPowerOfThrow = void 0;
// /------------ SLIDER-POWER ------------/
// const sliderPower = document.querySelector(".choose-power-wrapper__slider");
// const textSlider = document.querySelector(".choose-power-wrapper__power-text");

var readPowerOfThrow = function readPowerOfThrow(item, text) {
  var powerOfThrow = Math.round(item.value);
  text.innerText = "your power is: ".concat(Math.round(powerOfThrow / 10), " ");
  console.log(powerOfThrow);
  return powerOfThrow;
};
exports.readPowerOfThrow = readPowerOfThrow;
},{}],"text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textOpacityToggle = void 0;
var textOpacityToggle = function textOpacityToggle(item, time1, time2) {
  setTimeout(function () {
    return item.classList.add("active");
  }, time1);
  setTimeout(function () {
    return item.classList.remove("active");
  }, time2);
};
exports.textOpacityToggle = textOpacityToggle;
},{}],"directionsOfThrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.definingDirectionOfThrow = void 0;
var _slider = require("./slider");
var definingDirectionOfThrow = function definingDirectionOfThrow(arrow, fakeSnowball, ball,
//   power,
allArrows, sliderPower, textSlider) {
  var rectangleArrow = document.createElement("div");
  var arrowPosition = arrow.getBoundingClientRect();
  var arrowPositionHeight = arrowPosition.height;
  rectangleArrow.style.transformOrigin = "left bottom";
  rectangleArrow.style.height = arrowPosition.height + "px";
  rectangleArrow.style.width = arrowPosition.width + "px";
  rectangleArrow.style.top = arrowPosition.top + "px";
  rectangleArrow.style.bottom = arrowPosition.bottom + "px";
  rectangleArrow.style.left = arrowPosition.left + "px";
  rectangleArrow.style.right = arrowPosition.right + "px";
  rectangleArrow.style.backgroundColor = "red";
  rectangleArrow.style.opacity = 0;
  rectangleArrow.style.position = "absolute";
  rectangleArrow.style.zIndex = -100;
  document.querySelector(".main").append(rectangleArrow);
  var rectangleArrowPosition = rectangleArrow.getBoundingClientRect();
  var rectangleArrowHeight = parseFloat(rectangleArrow.style.height);
  var rectangleArrowWidth = parseFloat(rectangleArrow.style.width);
  var angle = Math.atan(rectangleArrowHeight / rectangleArrowWidth);
  var snowballPosition = ball.getBoundingClientRect();
  fakeSnowball.style.top = snowballPosition.top;
  fakeSnowball.style.height = snowballPosition.height + "px";
  fakeSnowball.style.width = snowballPosition.width + "px";
  fakeSnowball.style.top = snowballPosition.top + "px";
  fakeSnowball.style.bottom = snowballPosition.bottom + "px";
  fakeSnowball.style.left = snowballPosition.left + "px";
  fakeSnowball.style.right = snowballPosition.right + "px";
  fakeSnowball.style.position = "absolute";
  fakeSnowball.style.opacity = 0;
  fakeSnowball.style.zIndex = 900;
  fakeSnowball.style.backgroundColor = "green";
  document.querySelector(".footer").append(fakeSnowball);
  var newHeight = rectangleArrowHeight + (0, _slider.readPowerOfThrow)(sliderPower, textSlider);
  // rectangleArrowHeight + power.value * 1;

  var newWidth = newHeight / Math.tan(angle);
  rectangleArrow.style.height = newHeight + "px";
  rectangleArrow.style.width = newWidth + "px";
  rectangleArrow.style.transform = "translateY(-".concat(newHeight - arrowPositionHeight, "px)");
  var snowballTranslateX = rectangleArrow.style.width;
  var snowballTranslateY = rectangleArrow.style.height;
  var directionOfThrow;
  for (var i = 0; i < 7; i++) {
    if (arrow == allArrows[i]) {
      fakeSnowball.style.transform = "translateX(".concat(snowballTranslateX, ") translateY(-").concat(snowballTranslateY, ") ");
      directionOfThrow = function directionOfThrow() {
        var directionsForSnowball = [parseFloat(snowballTranslateX), -parseFloat(snowballTranslateY)];
        return directionsForSnowball;
      };
    }
  }
  for (var _i = 8; _i < 14; _i++) {
    if (arrow == allArrows[_i]) {
      fakeSnowball.style.transform = "translateX(-".concat(snowballTranslateX, ") translateY(-").concat(snowballTranslateY, ") ");
      directionOfThrow = function directionOfThrow() {
        var directionsForSnowball = [-parseFloat(snowballTranslateX), -parseFloat(snowballTranslateY)];
        return directionsForSnowball;
      };
    }
  }
  return directionOfThrow();
};
exports.definingDirectionOfThrow = definingDirectionOfThrow;
},{"./slider":"slider.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _hovers = require("./hovers.js");
var _slider = require("./slider.js");
var _text = require("./text.js");
var _directionsOfThrow = require("./directionsOfThrow.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
"use strict";
///------------ DOM ITEMS ------------///

var directionsArrows = document.querySelectorAll(".arrows__arrow");
var meltedSnowman1 = document.querySelector(".meltedSnowman__meltedSnowman1");
var meltedSnowman2 = document.querySelector(".meltedSnowman__meltedSnowman2");
var meltedSnowman3 = document.querySelector(".meltedSnowman__meltedSnowman3");
var meltedSnowman4 = document.querySelector(".meltedSnowman__meltedSnowman4");
var meltedSnowman5 = document.querySelector(".meltedSnowman__meltedSnowman5");
var meltedSnowman6 = document.querySelector(".meltedSnowman__meltedSnowman6");
var firstLampON = document.getElementById("lamp-first-on");
var secondLampON = document.getElementById("lamp-second-on");
var thirdLampON = document.getElementById("lamp-third-on");
var firstLampOFF = document.getElementById("lamp-first-off");
var secondLampOFF = document.getElementById("lamp-second-off");
var thirdLampOFF = document.getElementById("lamp-third-off");
var snowballThrow = document.querySelector(".snowball-wrapper__snowball");
var firstSwitch = document.getElementById("firstSwitch-ON");
var secondSwitch = document.getElementById("secondSwitch");
var thirdSwitch = document.getElementById("thirdSwitch");
var firstSwitchOff = document.getElementById("firstSwitch-OFF");
var secondSwitchOff = document.getElementById("secondSwitch-OFF");
var thirdSwitchOff = document.getElementById("thirdSwitch-OFF");
var firstLampBroken = document.getElementById("lamp-first-broken");
var secondLampBroken = document.getElementById("lamp-second-broken");
var thirdLampBroken = document.getElementById("lamp-third-broken");
var textInfo = document.getElementById("text-info");
var textSlider = document.querySelector(".choose-power-wrapper__power-text");
var sliderPower = document.querySelector(".choose-power-wrapper__slider");
var snowball = document.querySelector("[data-id = \"snowball\"]");
var textOnSnowball = document.querySelector("[data-id = \"snowball-text\"]");
var sliderBall = document.querySelector(".choose-power-wrapper__slider");
var fakeSnowball = document.createElement("div");

// let allArrows = [...document.querySelector(`[data-id="allArrows"]`).childNodes];
var allArrows = _toConsumableArray(document.querySelectorAll(".arrows__arrow"));
console.log("just  found allArrows: ", allArrows);
var throwMechanicsWrapper = document.getElementById("throw-mechanics-wrapper");
var sliderWrapper = document.querySelector(".choose-power-wrapper");
var theBody = document.querySelector(".main");

///------------ GLOBAL VARIABLES ------------///

var isArrowOn = false;
var counterHits = 0;
var requiredDistanceBallSwitch = 150;
var counterMeltingSnowman = 0;
var counterMiss;
var isSnowballAnimationOn = false;
var arrowClicked = false;
// let rectangleArrowPosition = {};

///------------ FUNCTIONS HOOVERING EVENTS ------------///

isArrowOn = (0, _hovers.addHoverListeners)(directionsArrows);

// /------------ SLIDER-POWER ------------/
sliderPower.addEventListener("change", function () {
  (0, _slider.readPowerOfThrow)(sliderPower, textSlider);
});
var power = (0, _slider.readPowerOfThrow)(sliderPower, textSlider);

///------------ INFO-TEXT FUNCTIONS ------------///

window.addEventListener("load", function () {
  (0, _text.textOpacityToggle)(textInfo, 500, 5000);
});

///------------ FUNCTIONS FOR ARROW CLICKED - HANDLING SNOWBALL ------------///

var animationSnowball = function animationSnowball(arrow, fakeBall, ball) {
  isSnowballAnimationOn = true;
  var _definingDirectionOfT = (0, _directionsOfThrow.definingDirectionOfThrow)(arrow, fakeBall, ball,
    // sliderPower, //readPower?
    allArrows, sliderPower, textSlider),
    _definingDirectionOfT2 = _slicedToArray(_definingDirectionOfT, 2),
    finalMoveX = _definingDirectionOfT2[0],
    finalMoveY = _definingDirectionOfT2[1];
  console.log("returned data:", finalMoveX, finalMoveY);
  var throwingSnowBall = [{
    transform: "scale(1)"
  }, {
    transform: "translateX(".concat(finalMoveX / 2, "px) translateY(").concat(finalMoveY / 2, "px) scale(1.5)")
  }, {
    transform: "translateX(".concat(finalMoveX, "px) translateY(").concat(finalMoveY, "px) scale(0.8)")
  }];
  var throwingSnowBallTiming = {
    duration: 1000,
    iterations: 1
  };
  snowballThrow.style.animationTimingFunction = "ease-out";
  snowballThrow.addEventListener("click", function () {
    if (isArrowOn == true) {
      snowballThrow.animate(throwingSnowBall, throwingSnowBallTiming);
    }
  });
};
var checkingIfSwitchGotHit = function checkingIfSwitchGotHit(switchON, snowball) {
  console.log(switchON);
  var switchPosition = switchON.getBoundingClientRect();
  var xSideSwitch = switchPosition.left;
  var ySideSwitch = switchPosition.bottom;
  var fakeSnowballAfterThrowPosition = snowball.getBoundingClientRect();
  var xSideSnowball = fakeSnowballAfterThrowPosition.left;
  var ySideSnowball = fakeSnowballAfterThrowPosition.bottom;
  var xTriangleBetweenSnowballAndSwitch;
  var yTriangleBetweenSnowballAndSwitch;
  xTriangleBetweenSnowballAndSwitch = xSideSwitch - xSideSnowball;
  yTriangleBetweenSnowballAndSwitch = ySideSwitch - ySideSnowball;
  var distanceBetweenSnowballAndSwitch = Math.sqrt(Math.pow(xTriangleBetweenSnowballAndSwitch, 2) + Math.pow(yTriangleBetweenSnowballAndSwitch, 2));
  if (distanceBetweenSnowballAndSwitch < requiredDistanceBallSwitch) {
    switchIsHit(switchON, firstLampON, firstLampOFF, secondLampON, secondLampOFF, thirdLampON, thirdLampOFF, firstSwitch, secondSwitch, thirdSwitch, firstLampBroken, secondLampBroken, thirdLampBroken, snowball);
    console.log("hit");
  } else if (isSnowballAnimationOn = true && distanceBetweenSnowballAndSwitch > requiredDistanceBallSwitch) {
    counterMiss++;
  }
  if (counterMiss == 6) {
    counterMeltingSnowman++;
    console.log("miss");
  }
  meltSnowmaGraphicsSteps(counterMeltingSnowman);
};
snowball.addEventListener("click", function () {
  console.log(isArrowOn);
  if (isArrowOn == true) {
    counterMiss = 0;
    checkingIfSwitchGotHit(firstSwitch, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(secondSwitch, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(thirdSwitch, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(firstLampON, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(secondLampON, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(thirdLampON, fakeSnowball, switchIsHit);
  } else if (isArrowOn == false) {
    textInfo.innerText = "click the direction arrows first";
    (0, _text.textOpacityToggle)(textInfo, 500, 3000);
  }
});
var snowballOpacity = function snowballOpacity(element) {
  var increment = 0.025;
  var opacity = 0;
  var instance = window.setInterval(function () {
    element.style.opacity = opacity;
    opacity = opacity + increment;
    if (opacity > 1) {
      window.clearInterval(instance);
    }
  }, 30);
};

///------------ ARROW CLICKED MAIN FUNCTION ------------///

directionsArrows.forEach(function (arrow) {
  arrow.addEventListener("click", function (e) {
    (0, _hovers.changeAllArrowsOpacity)(allArrows);
    arrowClicked = e.target;
    arrowClicked.style.opacity = 1;
    arrowClicked.style.stroke = "white";
    arrowClicked.style.strokeWidth = "1vw";
    isArrowOn = true;
    animationSnowball(arrowClicked, fakeSnowball, snowball);
    (0, _hovers.removeHoverListeners)(directionsArrows);
  });
});

///------------ UNCLICKING ARROWS ------------///

var clickOutside = function clickOutside(e) {
  if (!e.target.classList.contains("arrows__arrow") && !(e.target.getAttribute("data-clickable-arrow") == "false")) {
    (0, _hovers.removeHoverListeners)(directionsArrows);
    isArrowOn = (0, _hovers.addHoverListeners)(directionsArrows);
    directionsArrows.forEach(function (arrow) {
      arrow.style.opacity = 0.1;
      arrow.style.stroke = "unset";
      arrow.style.stoke = "transparent";
    });
  }
};
theBody.addEventListener("click", clickOutside);
directionsArrows.forEach(function (arrow) {
  arrow.addEventListener("dblclick", function () {
    (0, _hovers.removeHoverListeners)(directionsArrows);
    (0, _hovers.addHoverListeners)(directionsArrows);
    arrow.style.opacity = 0.1;
  });
});
///------------ SWITCH IS HIT ------------///

var switchIsHit = function switchIsHit(switchHit, firstLampON, firstLampOFF, secondLampON, secondLampOFF, thirdLampON, thirdLampOFF, firstSwitch, secondSwitch, thirdSwitch, firstLampBroken, secondLampBroken, thirdLampBroken, snowball) {
  console.log(switchHit);
  textOnSnowball.style.opacity = 0;
  setTimeout(function () {
    snowball.style.opacity = 0;
    textOnSnowball.style.opacity = 1;
    counterHits++;
    if (counterHits == 1) {
      (0, _text.textOpacityToggle)(textInfo, 500, 3000);
      textInfo.innerText = "One down!\nTwo more to go!";
      theBody.style.backgroundColor = "#474c59";
    } else if (counterHits == 2) {
      (0, _text.textOpacityToggle)(textInfo, 500, 3000);
      textInfo.innerText = "Yay snowman is really happy!\nHit one more!";
      theBody.style.backgroundColor = "#3a3e46";
    } else if (counterHits == 3) {
      snowball.style.opacity = 0;
      throwMechanicsWrapper.style.opacity = 0;
      throwMechanicsWrapper.style.zIndex = -100;
      sliderWrapper.style.opacity = 0;
      (0, _text.textOpacityToggle)(textInfo, 500, 99000);
      textInfo.innerText = "Congrats! By saving electricity you contribute\n to less global warming and more happy snowmen!";
    }
    switchHit.classList.add("notactive");
    if (switchHit == firstSwitch) {
      firstLampON.classList.add("notactive");
      firstLampOFF.classList.remove("notactive");
      firstSwitchOff.classList.remove("notactive");
    } else if (switchHit == secondSwitch) {
      secondLampON.classList.add("notactive");
      secondLampOFF.classList.remove("notactive");
      secondSwitchOff.classList.remove("notactive");
    } else if (switchHit == thirdSwitch) {
      thirdLampON.classList.add("notactive");
      thirdLampOFF.classList.remove("notactive");
      thirdSwitchOff.classList.remove("notactive");
    } else if (switchHit == firstLampON) {
      counterMeltingSnowman = 5;
      console.log("lamp got hit");
      firstLampON.classList.add("notactive");
      firstLampBroken.classList.remove("notactive");
      gameOver("Game over!\nDestroying lamps is ver bad for environment :/");
    } else if (switchHit == secondLampON) {
      console.log("lamp got hit");
      secondLampON.classList.add("notactive");
      secondLampBroken.classList.remove("notactive");
      gameOver("Game over!\nDestroying lamps is ver bad for environment :/");
    } else if (switchHit == thirdLampON) {
      console.log("lamp got hit");
      thirdLampON.classList.add("notactive");
      thirdLampBroken.classList.remove("notactive");
      gameOver("Game over!\nDestroying lamps is ver bad for environment :/");
    }
  }, 1000);
};

///------------ SWITCH IS NOT HIT ------------///

var meltSnowmaGraphicsSteps = function meltSnowmaGraphicsSteps(count) {
  if (count == 1) {
    (0, _text.textOpacityToggle)(textInfo, 500, 3000);
    textInfo.innerText = "Oh no! Snowman is melting!\nAim at the switches to save it!";
    meltedSnowman1.classList.add("notactive");
    meltedSnowman2.classList.remove("notactive");
  } else if (count == 2) {
    textInfo.innerText = "You can do better!";
    (0, _text.textOpacityToggle)(textInfo, 500, 3000);
    meltedSnowman2.classList.add("notactive");
    meltedSnowman3.classList.remove("notactive");
  } else if (count == 3) {
    textInfo.innerText = "Try again!\nYou can do it :)";
    (0, _text.textOpacityToggle)(textInfo, 500, 3000);
    meltedSnowman3.classList.add("notactive");
    meltedSnowman4.classList.remove("notactive");
  } else if (count == 4) {
    textInfo.innerText = "Focus!\nYou have one more chance!";
    (0, _text.textOpacityToggle)(textInfo, 500, 3000);
    meltedSnowman4.classList.add("notactive");
    meltedSnowman5.classList.remove("notactive");
  } else if (count == 5) {
    gameOver("Game over! Snowman melted :/\nTry again!");
  }
};
var gameOver = function gameOver(text) {
  meltedSnowman1.classList.add("notactive");
  meltedSnowman2.classList.add("notactive");
  meltedSnowman3.classList.add("notactive");
  meltedSnowman4.classList.add("notactive");
  meltedSnowman5.classList.add("notactive");
  meltedSnowman6.classList.remove("notactive");
  snowball.style.opacity = 0;
  throwMechanicsWrapper.style.opacity = 0;
  throwMechanicsWrapper.style.zIndex = -100;
  sliderWrapper.style.opacity = 0;
  textInfo.innerText = text;
  textInfo.style.opacity = 1;
};
},{"./hovers.js":"hovers.js","./slider.js":"slider.js","./text.js":"text.js","./directionsOfThrow.js":"directionsOfThrow.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54462" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map