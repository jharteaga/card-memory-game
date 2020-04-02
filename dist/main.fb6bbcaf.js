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
})({"assets/img/allianz-arena.jpg":[function(require,module,exports) {
module.exports = "/allianz-arena.ae83b97a.jpg";
},{}],"assets/img/camp-nou.jpg":[function(require,module,exports) {
module.exports = "/camp-nou.d7eb0790.jpg";
},{}],"assets/img/eiffel-tower.jpg":[function(require,module,exports) {
module.exports = "/eiffel-tower.61667e99.jpg";
},{}],"assets/img/el-tunco.jpg":[function(require,module,exports) {
module.exports = "/el-tunco.646f0327.jpg";
},{}],"assets/img/golden-gate-bridge.jpg":[function(require,module,exports) {
module.exports = "/golden-gate-bridge.ad915444.jpg";
},{}],"assets/img/london.jpg":[function(require,module,exports) {
module.exports = "/london.60abbd81.jpg";
},{}],"assets/img/romania.jpg":[function(require,module,exports) {
module.exports = "/romania.3b27b8df.jpg";
},{}],"assets/img/taj-mahal.jpeg":[function(require,module,exports) {
module.exports = "/taj-mahal.0bde165f.jpeg";
},{}],"assets/img/thailand.jpg":[function(require,module,exports) {
module.exports = "/thailand.b81a7366.jpg";
},{}],"assets/img/vancouver.jpg":[function(require,module,exports) {
module.exports = "/vancouver.33d8f733.jpg";
},{}],"js/cards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.images = void 0;

var _allianzArena = _interopRequireDefault(require("../assets/img/allianz-arena.jpg"));

var _campNou = _interopRequireDefault(require("../assets/img/camp-nou.jpg"));

var _eiffelTower = _interopRequireDefault(require("../assets/img/eiffel-tower.jpg"));

var _elTunco = _interopRequireDefault(require("../assets/img/el-tunco.jpg"));

var _goldenGateBridge = _interopRequireDefault(require("../assets/img/golden-gate-bridge.jpg"));

var _london = _interopRequireDefault(require("../assets/img/london.jpg"));

var _romania = _interopRequireDefault(require("../assets/img/romania.jpg"));

var _tajMahal = _interopRequireDefault(require("../assets/img/taj-mahal.jpeg"));

var _thailand = _interopRequireDefault(require("../assets/img/thailand.jpg"));

var _vancouver = _interopRequireDefault(require("../assets/img/vancouver.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var images = [{
  name: 'card1',
  image: _allianzArena.default
}, {
  name: 'card2',
  image: _allianzArena.default
}, {
  name: 'card3',
  image: _campNou.default
}, {
  name: 'card4',
  image: _campNou.default
}, {
  name: 'card5',
  image: _eiffelTower.default
}, {
  name: 'card6',
  image: _eiffelTower.default
}, {
  name: 'card7',
  image: _elTunco.default
}, {
  name: 'card8',
  image: _elTunco.default
}, {
  name: 'card9',
  image: _goldenGateBridge.default
}, {
  name: 'card10',
  image: _goldenGateBridge.default
}, {
  name: 'card11',
  image: _london.default
}, {
  name: 'card12',
  image: _london.default
}, {
  name: 'card13',
  image: _romania.default
}, {
  name: 'card14',
  image: _romania.default
}, {
  name: 'card15',
  image: _tajMahal.default
}, {
  name: 'card16',
  image: _tajMahal.default
}, {
  name: 'card17',
  image: _thailand.default
}, {
  name: 'card18',
  image: _thailand.default
}, {
  name: 'card19',
  image: _vancouver.default
}, {
  name: 'card20',
  image: _vancouver.default
}];
exports.images = images;
},{"../assets/img/allianz-arena.jpg":"assets/img/allianz-arena.jpg","../assets/img/camp-nou.jpg":"assets/img/camp-nou.jpg","../assets/img/eiffel-tower.jpg":"assets/img/eiffel-tower.jpg","../assets/img/el-tunco.jpg":"assets/img/el-tunco.jpg","../assets/img/golden-gate-bridge.jpg":"assets/img/golden-gate-bridge.jpg","../assets/img/london.jpg":"assets/img/london.jpg","../assets/img/romania.jpg":"assets/img/romania.jpg","../assets/img/taj-mahal.jpeg":"assets/img/taj-mahal.jpeg","../assets/img/thailand.jpg":"assets/img/thailand.jpg","../assets/img/vancouver.jpg":"assets/img/vancouver.jpg"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _cards = require("./cards");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var cards = document.querySelectorAll('.container__cards__card');
var cardSelected1,
    cardSelected2,
    cardsNotPlaying = [],
    count = 0;
init(); //Initiate Game

function init() {
  _cards.images.sort(function () {
    return 0.9 - Math.random();
  });

  for (var i = 0; i < cards.length; i++) {
    var imgChild = cards[i].childNodes[1];
    var card = document.createElement('img');
    card.setAttribute('src', _cards.images[i].image);
    card.className = 'container__cards__card__img';
    cards[i].appendChild(card);
  }

  addCardEvents(cards);
} //Block Board Game


function blockedBoard() {
  cardsNotPlaying = _toConsumableArray(cards).filter(function (card) {
    return card !== cardSelected1 && card !== cardSelected2;
  });
  cardsNotPlaying.forEach(function (card) {
    card.classList.add('container__cards__card--blocked');
  });
} //Enable Board Game


function enableBoard() {
  cardsNotPlaying.forEach(function (card) {
    card.classList.remove('container__cards__card--blocked');
  });
} //Assign pair to check them


function assignPairToCheck(element) {
  if (count === 0) {
    cardSelected1 = element;
    count++;
  } else if (count === 1) {
    cardSelected2 = element;
    blockedBoard();
    checkPair();
  }
} //Check pairs


function checkPair() {
  var card1 = _cards.images.filter(function (img, index) {
    return "card".concat(index + 1) === cardSelected1.id;
  });

  var card2 = _cards.images.filter(function (img, index) {
    return "card".concat(index + 1) === cardSelected2.id;
  });

  if (card1[0].image === card2[0].image) {
    pairFound();
  } else {
    incorrectPair();
  }
} //Pair Found


function pairFound() {
  cardSelected1.classList.remove('container__cards__card--flip-front');
  cardSelected1.classList.remove('container__cards__card--flip-back');
  cardSelected2.classList.remove('container__cards__card--flip-front');
  cardSelected2.classList.remove('container__cards__card--flip-back');
  cardSelected1.classList.add('container__cards__card--found');
  cardSelected2.classList.add('container__cards__card--found');
  reset();
} //Incorrect pair


function incorrectPair() {
  setTimeout(function () {
    flipEvent(cardSelected1);
    flipEvent(cardSelected2);
  }, 800);
} //Add events listeners


function addCardEvents(elements) {
  elements.forEach(function (element) {
    element.addEventListener('click', function () {
      flipEvent(element);
    });
  });
} //Flip Event


function flipEvent(element) {
  element.classList.toggle('container__cards__card--flip-front');
  element.classList.toggle('container__cards__card--flip-back');
  setTimeout(function () {
    if (element.classList.contains('container__cards__card--flip-back')) {
      element.childNodes[1].style.visibility = 'hidden';
      element.childNodes[3].style.visibility = 'visible';
      assignPairToCheck(element);
    } else {
      element.childNodes[1].style.visibility = 'visible';
      element.childNodes[3].style.visibility = 'hidden';
      reset();
    }
  }, 360);
} //Reset event


function reset() {
  count = 0;
  enableBoard();
  cardSelected1 = null;
  cardSelected2 = null;
  cardsNotPlaying = [];
}
},{"./cards":"js/cards.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55189" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map