/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/admin.js":
/*!****************************!*\
  !*** ./assets/js/admin.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// let products = JSON.parse(localStorage.getItem('products')) || [];\n// function showProducts(products) {\n//     let view = '';\n//     for (product of products) {\n//         view += `\n//         <li class=\"product\">\n//             <a class=\"product-link\" href=\"#\">\n//                 <div class=\"product-header\">\n//                     <div class=\"product-size\">size: ${product.size}</div>\n//                     <div class=\"product-color\">color: ${product.color}</div>\n//                 </div>\n//                 <div class=\"product-content\">\n//                     <img src=\"${product.imageUrl || './images/product.png'}\" alt=\"\">\n//                 </div>\n//                 <div class=\"product-footer\">\n//                     <div class=\"product-name\">${product.name}</div>\n//                     <div class=\"product-price\">${product.price}$</div>\n//                 </div>\n//             </a>\n//             <button class=\"remove-product\" data-id=\"${product.id}\">Remove</button>  \n//         </li>`\n//     }\n//     document.querySelector('.products-container').innerHTML = view;\n// }\n// function handleForm() {\n//     const inputs = document.querySelectorAll('form.add-product input[name]');\n//     const addProduct = document.getElementById('add-product');\n//     let data = {\n//         id: '',\n//         name: '',\n//         price: '',\n//         size: '',\n//         color: '',\n//         gender: '',\n//         imageUrl: '',\n//     }\n//     if (addProduct) {\n//         document.getElementById('add-product').addEventListener('click', (e) => {\n//             e.preventDefault();\n//             if (data.name.length >= 3 && data.price) {\n//                 data.id = Date.now();\n//                 products.push(data);\n//                 localStorage.setItem('products', JSON.stringify(products));\n//                 showProducts(products);\n//                 data = {\n//                     id: '',\n//                     name: '',\n//                     price: '',\n//                     size: '',\n//                     color: '',\n//                     gender: '',\n//                     imageUrl: '',\n//                 }\n//                 for (input of inputs) {\n//                     input.value = '';\n//                 }\n//             } else {\n//                 alert('Incorrect form');\n//             }\n//         });\n//     }\n//     for (input of inputs) {\n//         input.addEventListener('input', (e) => {\n//             data[e.target.attributes.name.value] = e.target.value;\n//             console.log(data);\n//         });\n//     }\n// }\n// document.querySelector('.products-container').addEventListener('click', (e) => {\n//     if (e.target.nodeName = 'BUTTON' && e.target.dataset.id) {\n//         console.log(e.target.dataset.id);\n//         products = products.filter((product) => {\n//             return +product.id !== +e.target.dataset.id;\n//         });\n//         localStorage.setItem('products', JSON.stringify(products));\n//         showProducts(products);\n//     }\n// });\n// showProducts(products);\n// handleForm();\nvar form = document.querySelector('.add-product');\nvar addProductButton = document.getElementById('add-product');\naddProductButton.addEventListener('click', function (e) {\n  e.preventDefault();\n  var data = new URLSearchParams(new FormData(form)).toString();\n  fetch('/add-product', {\n    method: 'POST',\n    body: data,\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded'\n    }\n  }).then(function (res) {\n    console.log('Success: ', res);\n  })[\"catch\"](function (err) {\n    console.log('Error: ', err);\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/admin.js?");

/***/ }),

/***/ "./assets/js/scripts.js":
/*!******************************!*\
  !*** ./assets/js/scripts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function (event) {\n  var button = document.querySelector('.menu-toggle');\n\n  if (button) {\n    button.addEventListener('click', function () {\n      document.body.classList.toggle('menu-opened');\n    });\n  }\n\n  var filter = {\n    gender: ['men'],\n    price: {\n      min: '0',\n      max: '9000'\n    }\n  };\n  var products = JSON.parse(localStorage.getItem('products')) || [];\n\n  function showProducts(products) {\n    var view = '';\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        product = _step.value;\n        view += \"\\n        <li class=\\\"product\\\">\\n            <a class=\\\"product-link\\\" href=\\\"#\\\">\\n                <div class=\\\"product-header\\\">\\n                    <div class=\\\"product-size\\\">size: \".concat(product.size || '', \"</div>\\n                    <div class=\\\"product-color\\\">color: \").concat(product.color || 'unknown', \"</div>\\n                </div>\\n                <div class=\\\"product-content\\\">\\n                    <img src=\\\"\").concat(product.imageUrl || './images/product.png', \"\\\" alt=\\\"\\\">\\n                </div>\\n                <div class=\\\"product-footer\\\">\\n                    <div class=\\\"product-name\\\">\").concat(product.name || '', \"</div>\\n                    <div class=\\\"product-price\\\">\").concat(product.price || '', \"$</div>\\n                </div>\\n            </a>\\n        </li>\");\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    document.querySelector('.products-container').innerHTML = view;\n  }\n\n  function addProduct() {\n    products.push({\n      name: 'New',\n      size: 'XXL',\n      color: 'green',\n      image: './images/product2.png',\n      price: '115'\n    });\n    showProducts(products);\n  }\n\n  showProducts(products); // filter\n\n  var menCheckbox = document.getElementById('checkbox-men');\n\n  if (menCheckbox) {\n    var searchParams = new URLSearchParams(window.location.search);\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = searchParams[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var param = _step2.value;\n\n        if (param[0] === menCheckbox.value) {\n          menCheckbox.checked = true;\n          products = products.filter(function (product) {\n            return product.gender === menCheckbox.value;\n          });\n          showProducts(products);\n        }\n      }\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n          _iterator2[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n\n    menCheckbox.addEventListener('change', function (e) {\n      if (e.target.checked) {\n        searchParams.set(e.target.value, 'true');\n        window.history.replaceState(null, null, window.location.origin + '?' + searchParams.toString());\n\n        if (menCheckbox.checked === true) {\n          products = products.filter(function (p) {\n            return p.gender === 'men';\n          });\n        }\n\n        showProducts(products);\n      } else {\n        searchParams[\"delete\"](e.target.value);\n        window.history.replaceState(null, null, window.location.origin + '?' + searchParams.toString());\n        products = JSON.parse(localStorage.getItem('products'));\n        showProducts(products);\n      }\n    });\n\n    if (menCheckbox.checked === true) {\n      products = products.filter(function (p) {\n        return p.gender === 'men';\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/scripts.js?");

/***/ }),

/***/ "./assets/sass/main.sass":
/*!*******************************!*\
  !*** ./assets/sass/main.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./main.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./assets/sass/main.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./assets/sass/main.sass?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js_scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/js/scripts.js */ \"./assets/js/scripts.js\");\n/* harmony import */ var _assets_js_scripts_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_js_scripts_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_js_admin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/admin.js */ \"./assets/js/admin.js\");\n/* harmony import */ var _assets_js_admin_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_admin_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_sass_main_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sass/main.sass */ \"./assets/sass/main.sass\");\n/* harmony import */ var _assets_sass_main_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_main_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./assets/sass/main.sass":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./assets/sass/main.sass ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nheader {\\n  background-image: url(\\\"/images/hero.jpg\\\");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat;\\n  min-height: 50rem;\\n  color: #fff;\\n}\\n\\nnav {\\n  padding: 1rem 2rem;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\nul.nav-list {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\nli {\\n  display: inline-flex;\\n  padding: 0.5rem 1rem;\\n}\\nli a {\\n  color: white;\\n  text-decoration: none;\\n  font-size: 20px;\\n}\\n\\n.hero {\\n  margin-top: 10rem;\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\nh1 {\\n  font-size: 3rem;\\n}\\n\\np {\\n  max-width: 20rem;\\n}\\n\\nbutton.menu-toggle {\\n  display: none;\\n  z-index: 1;\\n}\\n\\nbutton.menu-toggle {\\n  display: block;\\n}\\n\\nul.nav-list {\\n  position: absolute;\\n  padding: 1rem 0;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  background: rgba(0, 0, 0, 0.5);\\n  transform: translateY(-100%);\\n  transition: transform 0.3s;\\n}\\nul.nav-list li {\\n  display: block;\\n  text-align: center;\\n  font-size: 1.5rem;\\n  padding: 1rem;\\n}\\n\\n.menu-opened .nav-list {\\n  transform: translateY(0);\\n}\\n\\n.products {\\n  display: flex;\\n  justify-content: center;\\n  margin: 2rem auto;\\n  padding: 0 1rem;\\n}\\n\\n.products-container {\\n  margin: 0 -1.5rem;\\n  padding: 0;\\n  list-style: none;\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n}\\n\\n.products-wrapper {\\n  width: 100%;\\n  max-width: 1100px;\\n}\\n\\n.products-container:after {\\n  content: \\\"\\\";\\n  flex: auto;\\n}\\n\\n.product {\\n  width: 33.33%;\\n  padding: 1.5rem;\\n}\\n\\n.product-link {\\n  display: flex;\\n  text-decoration: none;\\n  color: #000;\\n  font-size: 1.25rem;\\n  flex-direction: column;\\n  background: #dddddd;\\n  border: 2px solid transparent;\\n  padding: 1rem;\\n}\\n.product-link:hover {\\n  border-color: #aa9b77;\\n}\\n\\n.product-content img {\\n  display: block;\\n  max-width: 100%;\\n  margin: auto;\\n}\\n\\n.filter {\\n  background: #dddddd;\\n}\\n\\n.filter-wrapper {\\n  margin: 0 auto;\\n  padding: 2rem;\\n  max-width: 1100px;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.checkbox-list {\\n  display: flex;\\n}\\n\\n.headline {\\n  position: relative;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  font-size: 1.5rem;\\n  max-width: 1100px;\\n  padding: 0 1.5rem;\\n  margin: 0 auto;\\n  overflow: hidden;\\n}\\n\\n.title {\\n  display: inline-block;\\n  background: #fff;\\n  padding: 0 2rem 0 0;\\n}\\n.title:after {\\n  display: block;\\n  width: calc(100% - 3rem);\\n  height: 2px;\\n  background: #aa9b77;\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 1.5rem;\\n  top: 50%;\\n  z-index: -1;\\n}\\n\\n.add-product input {\\n  display: block;\\n}\\n\\n.container {\\n  max-width: 1100px;\\n  margin: 0 auto;\\n  padding: 0 1rem;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./assets/sass/main.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });