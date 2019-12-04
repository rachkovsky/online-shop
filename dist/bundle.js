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
/***/ (function(module, exports, __webpack_require__) {

eval("var products = JSON.parse(localStorage.getItem('products')) || [];\nconsole.log('+++++', products);\n\nfunction showProducts(products) {\n  var view = '';\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      product = _step.value;\n      view += \"\\n        <li class=\\\"product\\\">\\n            <a class=\\\"product-link\\\" href=\\\"#\\\">\\n                <div class=\\\"product-header\\\">\\n                    <div class=\\\"product-size\\\">size: \".concat(product.size, \"</div>\\n                    <div class=\\\"product-color\\\">color: \").concat(product.color, \"</div>\\n                </div>\\n                <div class=\\\"product-content\\\">\\n                    <img src=\\\"\").concat(product.imageUrl || './images/product.png', \"\\\" alt=\\\"\\\">\\n                </div>\\n                <div class=\\\"product-footer\\\">\\n                    <div class=\\\"product-name\\\">\").concat(product.name, \"</div>\\n                    <div class=\\\"product-price\\\">\").concat(product.price, \"$</div>\\n                </div>\\n            </a>\\n            <button class=\\\"remove-product\\\" data-id=\\\"\").concat(product.id, \"\\\">Remove</button>  \\n        </li>\");\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  document.querySelector('.products-container').innerHTML = view;\n}\n\nshowProducts(products);\ndocument.querySelector('.products-container').addEventListener('click', function (e) {\n  if (e.target.nodeName =  true && e.target.dataset.id) {\n    console.log(e.target.dataset.id);\n    products = products.filter(function (product) {\n      return +product.id !== +e.target.dataset.id;\n    });\n    localStorage.setItem('products', JSON.stringify(products));\n    showProducts(products);\n  }\n});\n\nfunction handleForm() {\n  var inputs = document.querySelectorAll('form.add-product input[name]');\n  var data = {\n    id: '',\n    name: '',\n    price: '',\n    size: '',\n    color: '',\n    gender: '',\n    imageUrl: ''\n  };\n  var addProductButton = document.getElementById('add-product');\n\n  if (addProductButton) {\n    addProductButton.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      if (data.name.length >= 3 && data.price) {\n        data.id = Date.now();\n        products.push(data);\n        console.log('push: ', data);\n        console.log('------ ', products);\n        localStorage.setItem('products', JSON.stringify(products));\n        showProducts(products);\n        data = {\n          id: '',\n          name: '',\n          price: '',\n          size: '',\n          color: '',\n          gender: '',\n          imageUrl: ''\n        };\n      } else {\n        alert('Incorrect form');\n      }\n    });\n  }\n\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      input = _step2.value;\n      input.addEventListener('input', function (e) {\n        data[e.target.attributes.name.value] = e.target.value;\n        console.log(data);\n      });\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n        _iterator2[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n}\n\nhandleForm();\n\n//# sourceURL=webpack:///./assets/js/admin.js?");

/***/ }),

/***/ "./assets/js/scripts.js":
/*!******************************!*\
  !*** ./assets/js/scripts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function (event) {\n  var button = document.querySelector('.menu-toggle');\n\n  if (button) {\n    button.addEventListener('click', function () {\n      document.body.classList.toggle('menu-opened');\n    });\n  }\n\n  var filter = {\n    gender: ['men'],\n    price: {\n      min: '0',\n      max: '9000'\n    }\n  };\n  var products = JSON.parse(localStorage.getItem('products')) || [];\n\n  function showProducts(products) {\n    var view = '';\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        product = _step.value;\n        view += \"\\n        <li class=\\\"product\\\">\\n            <a class=\\\"product-link\\\" href=\\\"#\\\">\\n                <div class=\\\"product-header\\\">\\n                    <div class=\\\"product-size\\\">size: \".concat(product.size || '', \"</div>\\n                    <div class=\\\"product-color\\\">color: \").concat(product.color || 'unknown', \"</div>\\n                </div>\\n                <div class=\\\"product-content\\\">\\n                    <img src=\\\"\").concat(product.imageUrl || './images/product.png', \"\\\" alt=\\\"\\\">\\n                </div>\\n                <div class=\\\"product-footer\\\">\\n                    <div class=\\\"product-name\\\">\").concat(product.name || '', \"</div>\\n                    <div class=\\\"product-price\\\">\").concat(product.price || '', \"$</div>\\n                </div>\\n            </a>\\n        </li>\");\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    document.querySelector('.products-container').innerHTML = view;\n  }\n\n  function addProduct() {\n    products.push({\n      name: 'New',\n      size: 'XXL',\n      color: 'green',\n      image: './images/product2.png',\n      price: '115'\n    });\n    showProducts(products);\n  }\n\n  showProducts(products); // filter\n\n  var menCheckbox = document.getElementById('checkbox-men');\n  var womenCheckbox = document.getElementById('checkbox-women');\n  var searchParams = new URLSearchParams(window.location.search);\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = searchParams[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var param = _step2.value;\n\n      if (param[0] === menCheckbox.value) {\n        menCheckbox.checked = true;\n        products = products.filter(function (product) {\n          return product.gender === menCheckbox.value;\n        });\n        showProducts(products);\n      }\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n        _iterator2[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n\n  menCheckbox.addEventListener('change', function (e) {\n    if (e.target.checked) {\n      searchParams.set(e.target.value, 'true');\n      window.history.replaceState(null, null, window.location.origin + '?' + searchParams.toString());\n\n      if (menCheckbox.checked === true) {\n        products = products.filter(function (p) {\n          return p.gender === 'men';\n        });\n      }\n\n      showProducts(products);\n    } else {\n      searchParams[\"delete\"](e.target.value);\n      window.history.replaceState(null, null, window.location.origin + '?' + searchParams.toString());\n      products = JSON.parse(localStorage.getItem('products'));\n      showProducts(products);\n    }\n  });\n\n  if (menCheckbox.checked === true) {\n    products = products.filter(function (p) {\n      return p.gender === 'men';\n    });\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/scripts.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/js/scripts */ \"./assets/js/scripts.js\");\n/* harmony import */ var _assets_js_scripts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_js_scripts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_js_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/admin */ \"./assets/js/admin.js\");\n/* harmony import */ var _assets_js_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_admin__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });