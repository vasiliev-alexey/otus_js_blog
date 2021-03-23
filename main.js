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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/*! exports provided: StateSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateSlider\", function() { return StateSlider; });\nconst images = ['./images/twt.svg', './images/VK.com-logo.svg', './images/sea.jpg'];\nfunction StateSlider(imageCount) {\n  this.currentIndex = 0;\n  this.rotator = null;\n\n  this.nextImage = function nextImage() {\n    this.currentIndex += 1;\n\n    if (this.currentIndex === imageCount) {\n      this.currentIndex = 0;\n    }\n  };\n\n  this.prevImage = function prevImage() {\n    if (this.currentIndex === 0) {\n      this.currentIndex = imageCount - 1;\n    } else {\n      this.currentIndex -= 1;\n    }\n  };\n\n  this.disableRotation = function disableRotation() {\n    clearInterval(this.rotator);\n  };\n}\nconst state = new StateSlider(images.length);\n\nfunction rotate() {\n  const curImg = document.querySelector('.carousel__sliderImg');\n  curImg.src = images[state.currentIndex];\n}\n\n(function init() {\n  state.rotator = setInterval(() => {\n    state.nextImage();\n    rotate();\n  }, 5000);\n  const prev = document.getElementById('prevBtn');\n\n  if (prev !== null) {\n    prev.addEventListener('click', ev => {\n      ev.stopPropagation();\n      state.disableRotation();\n      state.prevImage();\n      rotate();\n    });\n  }\n\n  const nextBtn = document.getElementById('nextBtn');\n\n  if (nextBtn !== null) {\n    nextBtn.addEventListener('click', ev => {\n      ev.stopPropagation();\n      state.disableRotation();\n      state.nextImage();\n      rotate();\n    });\n  }\n})();\n\n//# sourceURL=webpack:///./src/carousel.js?");

/***/ }),

/***/ "./src/img/Instagram-Logo.wine.svg":
/*!*****************************************!*\
  !*** ./src/img/Instagram-Logo.wine.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/Instagram-Logo.wine.svg\");\n\n//# sourceURL=webpack:///./src/img/Instagram-Logo.wine.svg?");

/***/ }),

/***/ "./src/img/VK.com-logo.svg":
/*!*********************************!*\
  !*** ./src/img/VK.com-logo.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/VK.com-logo.svg\");\n\n//# sourceURL=webpack:///./src/img/VK.com-logo.svg?");

/***/ }),

/***/ "./src/img/instagram.png":
/*!*******************************!*\
  !*** ./src/img/instagram.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW1hZ2VzL2luc3RhZ3JhbS5wbmciOw==\");\n\n//# sourceURL=webpack:///./src/img/instagram.png?");

/***/ }),

/***/ "./src/img/post-it.png":
/*!*****************************!*\
  !*** ./src/img/post-it.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW1hZ2VzL3Bvc3QtaXQucG5nIjs=\");\n\n//# sourceURL=webpack:///./src/img/post-it.png?");

/***/ }),

/***/ "./src/img/post-it.svg":
/*!*****************************!*\
  !*** ./src/img/post-it.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/post-it.svg\");\n\n//# sourceURL=webpack:///./src/img/post-it.svg?");

/***/ }),

/***/ "./src/img/sea.jpg":
/*!*************************!*\
  !*** ./src/img/sea.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/sea.jpg\");\n\n//# sourceURL=webpack:///./src/img/sea.jpg?");

/***/ }),

/***/ "./src/img/twt.svg":
/*!*************************!*\
  !*** ./src/img/twt.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/twt.svg\");\n\n//# sourceURL=webpack:///./src/img/twt.svg?");

/***/ }),

/***/ "./src/img/vk.png":
/*!************************!*\
  !*** ./src/img/vk.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW1hZ2VzL3ZrLnBuZyI7\");\n\n//# sourceURL=webpack:///./src/img/vk.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _img_vk_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/vk.png */ \"./src/img/vk.png\");\n/* harmony import */ var _img_instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/instagram.png */ \"./src/img/instagram.png\");\n/* harmony import */ var _img_twt_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/twt.svg */ \"./src/img/twt.svg\");\n/* harmony import */ var _img_post_it_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/post-it.png */ \"./src/img/post-it.png\");\n/* harmony import */ var _img_post_it_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/post-it.svg */ \"./src/img/post-it.svg\");\n/* harmony import */ var _img_VK_com_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/VK.com-logo.svg */ \"./src/img/VK.com-logo.svg\");\n/* harmony import */ var _img_Instagram_Logo_wine_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/Instagram-Logo.wine.svg */ \"./src/img/Instagram-Logo.wine.svg\");\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel */ \"./src/carousel.js\");\n/* harmony import */ var _img_sea_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/sea.jpg */ \"./src/img/sea.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });