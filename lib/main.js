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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./lib/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const cvs = document.getElementById('danmaku-symphony');\n  cvs.width = window.innerWidth;\n  cvs.height = window.innerHeight;\n  const ctx = cvs.getContext('2d');\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cvs, ctx);\n  game.loop();\n})\n\n\n//# sourceURL=webpack:///./lib/entry.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./lib/player.js\");\n/* harmony import */ var _game_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_screen */ \"./lib/game_screen.js\");\n\n\n\nclass Game {\n  constructor(cvs, ctx) {\n    this.cvs = cvs;\n    this.ctx = ctx;\n    this.gameScreen = new _game_screen__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.cvs, this.ctx);\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.cvs, this.ctx)\n  }\n\n  draw() {\n    this.ctx.fillStyle = '#866286';\n    this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);\n  }\n\n  loop() {\n    this.draw();\n    this.gameScreen.draw();\n    this.player.draw();\n    window.requestAnimationFrame(loop);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_screen.js":
/*!****************************!*\
  !*** ./lib/game_screen.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameScreen {\n  constructor(cvs, ctx) {\n    this.cvs = cvs,\n    this.ctx = ctx,\n    this.width = cvs.width / 2;\n    this.height = cvs.height;\n  }\n\n  draw() {\n    this.ctx.fillStyle = '#000000';\n    const midpoint = this.cvs.width / 2 - this.width / 2\n    this.ctx.fillRect(midpoint, 0, this.width, this.cvs.height);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameScreen);\n\n//# sourceURL=webpack:///./lib/game_screen.js?");

/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor(cvs, ctx) {\n    this.cvs = cvs,\n    this.ctx = ctx\n    this.x = this.cvs.width / 2;\n    this.y = this.cvs.height - 180;\n  }\n\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'white';\n    this.ctx.moveTo(this.x, this.y - 20);\n    this.ctx.lineTo(this.x - 15, this.y + 20);\n    this.ctx.lineTo(this.x, this.y);\n    this.ctx.lineTo(this.x + 15, this.y + 20);\n    this.ctx.closePath();\n    this.ctx.fill();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./lib/player.js?");

/***/ })

/******/ });