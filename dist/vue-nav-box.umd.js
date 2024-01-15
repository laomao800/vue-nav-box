/*! @laomao800/vue-nav-box v1.4.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-nav-box"] = factory();
	else
		root["vue-nav-box"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 994:
/***/ (function(module) {

"use strict";


var CSS_UNITS = [
  'em',
  'ex',
  '%',
  'px',
  'cm',
  'mm',
  'in',
  'pt',
  'pc',
  'ch',
  'rem',
  'vh',
  'vw',
  'vmin',
  'vmax',
]

var validReg = new RegExp(
  '^-?\\d+(.\\d+)?(' + CSS_UNITS.join('|') + ')$',
  'i'
)

module.exports = function (input, defaultUnit) {
  if (validReg.test(input)) return input

  var num = parseInt(input, 10)
  if (isNaN(num)) return undefined

  let unit = 'px'
  if (defaultUnit && CSS_UNITS.indexOf(defaultUnit) > -1) {
    unit = defaultUnit
  }
  return num + unit
}


/***/ }),

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 431:
/***/ (function(module) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-box__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.nav-box__content{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:16px;overflow:auto}.nav-box__content:hover::-webkit-scrollbar{opacity:1}.nav-box__content::-webkit-scrollbar{width:8px;height:8px;background-color:rgba(0,0,0,.06);-webkit-border-radius:100px;opacity:0}.nav-box__content::-webkit-scrollbar:hover{background-color:rgba(0,0,0,.09)}.nav-box__content::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);-webkit-border-radius:100px}.nav-box__content::-webkit-scrollbar-thumb:active{background:rgba(0,0,0,.6)}.nav-box__navs{-webkit-box-sizing:content-box;box-sizing:content-box;width:200px;padding-left:16px;overflow:auto}.nav-box__navs:hover::-webkit-scrollbar{opacity:1}.nav-box__navs::-webkit-scrollbar{width:8px;height:8px;background-color:rgba(0,0,0,.06);-webkit-border-radius:100px;opacity:0}.nav-box__navs::-webkit-scrollbar:hover{background-color:rgba(0,0,0,.09)}.nav-box__navs::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);-webkit-border-radius:100px}.nav-box__navs::-webkit-scrollbar-thumb:active{background:rgba(0,0,0,.6)}.nav-box__navs ul{height:100%;padding:0;margin:0;list-style:none;border-left:1px solid #eaeaea}.nav-box__nav{position:relative;padding:6px 0 6px 16px;margin-bottom:4px;font-size:14px;line-height:1.4em;min-height:1.4em;color:#333;cursor:pointer;-webkit-transition:color .4s;transition:color .4s}.nav-box__nav,.nav-box__nav:before{-webkit-box-sizing:content-box;box-sizing:content-box}.nav-box__nav:before{position:absolute;top:50%;left:0;display:block;width:6px;height:6px;content:\"\";background-color:#eee;border:4px solid;border-color:transparent;border-radius:50%;-webkit-transition:background-color .4s;transition:background-color .4s;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nav-box__nav:hover{color:#009efb}.nav-box__nav:hover:before{background-color:#ddd}.nav-box__nav--active{color:#009efb}.nav-box__nav--active:before{background-color:#fff!important;border-color:#009efb}.nav-box__pane:not(:last-child){padding-bottom:16px}.nav-box__header{position:relative;padding:.5em 1em;-webkit-box-sizing:content-box;box-sizing:content-box;margin-bottom:16px;line-height:1.8em;min-height:1.8em;background-color:#fafafa;border-left:3px solid #009efb;-webkit-box-shadow:inset 0 -1px 0 0 #eaeaea;box-shadow:inset 0 -1px 0 0 #eaeaea}.nav-box__title{display:inline-block;font-size:16px;cursor:default}.nav-box__folder{position:absolute;top:50%;right:16px;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;height:20px;background-color:#fff;border:1px solid #ddd;border-radius:2px}.nav-box__folder:hover{border-color:#bbb;cursor:pointer}.nav-box__folder:after,.nav-box__folder:before{content:\"\";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;height:2px;width:10px;background-color:#ddd}.nav-box__folder:after{display:none;-webkit-transform:translate(-50%,-50%) rotate(-90deg);transform:translate(-50%,-50%) rotate(-90deg)}.nav-box__pane--fold .nav-box__header{margin-bottom:0}.nav-box__pane--fold .nav-box__body{display:none}.nav-box__pane--fold .nav-box__folder:after{display:block}.nav-box__wrapper--nav-left{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.nav-box__wrapper--nav-left .nav-box__navs{padding-right:16px;padding-left:0}.nav-box__wrapper--nav-left .nav-box__navs ul{border-left:none;border-right:1px solid #eaeaea}.nav-box__wrapper--nav-left .nav-box__nav{text-align:right;padding:6px 16px 6px 0}.nav-box__wrapper--nav-left .nav-box__nav:before{left:auto;right:0;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 81:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 573:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(741);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("6d922d0a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NavBox: function() { return /* reexport */ nav_box; },
  NavBoxPane: function() { return /* reexport */ nav_box_pane; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/bezier-easing/src/index.js
var bezier_easing_src = __webpack_require__(431);
var src_default = /*#__PURE__*/__webpack_require__.n(bezier_easing_src);
// EXTERNAL MODULE: ./node_modules/@laomao800/parse-size/index.js
var parse_size = __webpack_require__(994);
var parse_size_default = /*#__PURE__*/__webpack_require__.n(parse_size);
;// CONCATENATED MODULE: ./src/nav-box.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Scroll feature fork from https://github.com/eddiemf/vue-scrollactive
 */


/* harmony default export */ var nav_box = ({
  name: 'NavBox',
  props: {
    height: {
      type: [String, Number],
      default: null
    },
    navWidth: {
      type: [String, Number],
      default: null
    },
    navPosition: {
      type: String
    },
    duration: {
      type: Number,
      default: 400
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    foldable: {
      type: Boolean,
      default: false
    },
    navHidden: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      navs: [],
      activeItem: null,
      lastActiveItem: null,
      scrollByNav: false
    };
  },
  computed: {
    internalHeight: function internalHeight() {
      return parse_size_default()(this.height);
    },
    internalNavWidth: function internalNavWidth() {
      return parse_size_default()(this.navWidth);
    }
  },
  watch: {
    navHidden: {
      immediate: true,
      handler: function handler(newVal) {
        if (newVal) {
          this.teardown();
        } else {
          this.init();
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.teardown();
  },
  methods: {
    init: function init() {
      var _this = this;
      this.$nextTick(function () {
        return _this.$refs.content.addEventListener('scroll', _this.onScroll);
      });
    },
    teardown: function teardown() {
      this.$refs.content && this.$refs.content.removeEventListener('scroll', this.onScroll);
      this.scrollAnimationFrame && window.cancelAnimationFrame(this.scrollAnimationFrame);
    },
    addNav: function addNav(item) {
      this.navs.push(item);
    },
    navClick: function navClick(nav) {
      var _this2 = this;
      var target = nav.$el;
      if (!target) {
        return;
      }
      this.scrollByNav = true;
      this.activeItem = nav;
      this.scrollTo(target, function () {
        _this2.scrollByNav = false;
      });
    },
    scrollTo: function scrollTo(target, callback) {
      var _this3 = this;
      var targetDistanceFromTop = this.getOffsetTop(target);
      var startingY = this.$refs.content.scrollTop;
      var difference = targetDistanceFromTop - startingY;
      var easing = src_default()(0.5, 0, 0.35, 1);
      var start = null;
      var step = function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var progressPercentage = progress / _this3.duration;
        if (progress >= _this3.duration) progress = _this3.duration;
        if (progressPercentage >= 1) progressPercentage = 1;
        var perTick = startingY + easing(progressPercentage) * (difference - _this3.offsetTop);
        _this3.$refs.content.scrollTo(0, perTick);
        if (progress < _this3.duration) {
          _this3.scrollAnimationFrame = window.requestAnimationFrame(step);
        } else {
          _this3.$refs.content.addEventListener('scroll', _this3.onScroll);
          callback();
        }
      };
      window.requestAnimationFrame(step);
    },
    getOffsetTop: function getOffsetTop(target) {
      var yPosition = 0;
      var nextElement = target;
      while (nextElement && nextElement !== this.$refs.content) {
        yPosition += nextElement.offsetTop;
        nextElement = nextElement.offsetParent;
      }
      return yPosition;
    },
    onScroll: function onScroll(event) {
      if (!this.scrollByNav) {
        this.activeItem = this.getItemInsideWindow();
        if (this.activeItem !== this.lastActiveItem) {
          this.$emit('activeChanged', event, this.activeItem, this.lastActiveItem);
          this.lastActiveItem = this.activeItem;
        }
      }
    },
    getItemInsideWindow: function getItemInsideWindow() {
      var _this4 = this;
      var activeItem;
      this.navs.forEach(function (item) {
        var target = item.$el;
        if (!target) return;
        var distanceFromTop = _this4.$refs.content.scrollTop;
        var isScreenPastSection = distanceFromTop >= _this4.getOffsetTop(target) - _this4.offsetTop;
        var isScreenBeforeSectionEnd = distanceFromTop < _this4.getOffsetTop(target) - _this4.offsetTop + target.offsetHeight;
        if (isScreenPastSection && isScreenBeforeSectionEnd) activeItem = item;
      });
      return activeItem;
    }
  },
  render: function render() {
    var _this5 = this;
    var h = arguments[0];
    return h("div", {
      "class": _defineProperty({
        'nav-box__wrapper': true,
        'nav-box__wrapper--foldable': this.foldable
      }, "nav-box__wrapper--nav-".concat(this.navPosition), this.foldable),
      "style": {
        height: this.internalHeight
      }
    }, [h("div", {
      "ref": "content",
      "class": "nav-box__content"
    }, [this.$slots.default]), this.navHidden ? null : h("div", {
      "class": "nav-box__navs",
      "style": {
        width: this.internalNavWidth
      }
    }, [h("ul", [this.navs.map(function (nav, index) {
      return h("li", {
        "key": index,
        "class": ['nav-box__nav', {
          'nav-box__nav--active': _this5.activeItem ? _this5.activeItem === nav : index === 0
        }],
        "on": {
          "click": function click() {
            return _this5.navClick(nav);
          }
        }
      }, [nav.$slots.title || nav.title]);
    })])])]);
  }
});
;// CONCATENATED MODULE: ./src/nav-box-pane.js
/* harmony default export */ var nav_box_pane = ({
  name: 'NavBoxPane',
  props: {
    title: {
      type: String,
      default: null
    },
    foldable: {
      type: Boolean,
      default: true
    },
    fold: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      internalFoldable: false,
      internalFold: false
    };
  },
  computed: {
    owner: function owner() {
      return this.$parent.$options.name === 'NavBox' ? this.$parent : null;
    },
    ownerFolable: function ownerFolable() {
      return this.owner ? this.owner.foldable : false;
    }
  },
  watch: {
    foldable: {
      immediate: true,
      handler: function handler(val) {
        this.internalFoldable = this.ownerFolable ? val : false;
      }
    },
    fold: {
      immediate: true,
      handler: function handler(val) {
        this.internalFold = this.ownerFolable ? val : false;
      }
    },
    ownerFolable: function ownerFolable(val) {
      if (val) {
        this.internalFoldable = this.foldable;
        this.internalFold = this.fold;
      } else {
        this.internalFoldable = false;
        this.internalFold = false;
      }
    }
  },
  mounted: function mounted() {
    this.owner && this.owner.addNav(this);
  },
  render: function render() {
    var _this = this;
    var h = arguments[0];
    return h("div", {
      "class": ['nav-box__pane', {
        'nav-box__pane--fold': this.internalFold
      }]
    }, [h("div", {
      "class": "nav-box__header"
    }, [h("div", {
      "class": "nav-box__title"
    }, [this.$slots.title ? this.$slots.title : this.title]), this.internalFoldable ? h("span", {
      "class": "nav-box__folder",
      "on": {
        "click": function click() {
          return _this.internalFold = !_this.internalFold;
        }
      }
    }) : null]), h("div", {
      "class": ['nav-box__body', {
        'nav-box__body--fold': this.internalFold
      }]
    }, [this.$slots.default])]);
  }
});
// EXTERNAL MODULE: ./src/nav-box.less
var src_nav_box = __webpack_require__(573);
;// CONCATENATED MODULE: ./src/index.js



nav_box.install = function (Vue) {
  Vue.component(nav_box.name, nav_box);
};
nav_box_pane.install = function (Vue) {
  Vue.component(nav_box_pane.name, nav_box_pane);
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(nav_box);
  window.Vue.use(nav_box_pane);
}

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});