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

/***/ "./assets/bg.png":
/*!***********************!*\
  !*** ./assets/bg.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/bg.png?");

/***/ }),

/***/ "./lib/enemy_system.js":
/*!*****************************!*\
  !*** ./lib/enemy_system.js ***!
  \*****************************/
/*! exports provided: hexagon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexagon\", function() { return hexagon; });\n/* harmony import */ var _mob_enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mob_enemy */ \"./lib/mob_enemy.js\");\n/* harmony import */ var _particle_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particle_system */ \"./lib/particle_system.js\");\n\n\n\nconst hexagon = (game) => {\n  let minSpawnRange = game.gameScreen.x + 10;\n  let maxSpawnRange = minSpawnRange + game.gameScreen.width - 15;\n  let hex = new _mob_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 30, 30, 3, 1, minSpawnRange, maxSpawnRange)\n  hex.draw = () => {\n    hex.ctx.beginPath();\n    hex.ctx.moveTo(hex.x, hex.y);\n    hex.ctx.lineTo(hex.x - 10, hex.y + 10);\n    hex.ctx.lineTo(hex.x - 10, hex.y + 20);\n    hex.ctx.lineTo(hex.x, hex.y + 30);\n    hex.ctx.lineTo(hex.x + 10, hex.y + 30);\n    hex.ctx.lineTo(hex.x + 20, hex.y + 20);\n    hex.ctx.lineTo(hex.x + 20, hex.y + 10);\n    hex.ctx.lineTo(hex.x + 10, hex.y);\n    hex.ctx.closePath();\n    hex.ctx.fillStyle = '#788feb';\n    hex.ctx.fill();\n    hex.ctx.strokeStyle = 'white';\n    hex.ctx.stroke();\n  }\n\n  hex.changeDirection = () => {\n    let screenRight = hex.game.gameScreen.x + hex.game.gameScreen.width + 10;\n    let screenLeft = hex.game.gameScreen.x + 10;\n    if (hex.x + hex.width >= screenRight) hex.velocityX = -hex.velocityX;\n    if (hex.x <= screenLeft) hex.velocityX = -hex.velocityX;\n  }\n\n  hex.checkInBounds = () => {\n    let screenTop = hex.game.gameScreen.y\n    let screenBottom = hex.game.gameScreen.y + hex.game.gameScreen.height;\n    if (hex.y <= screenTop || hex.y - 10 >= screenBottom) {\n      hex.active = false;\n    }\n  }\n\n  hex.update = () => {\n    hex.x += hex.velocityX;\n    hex.y += hex.velocityY;\n    hex.checkInBounds();\n    hex.changeDirection();\n    if (hex.game.frames % 10 === 0) {\n      hex.game.enemyBullets.push(Object(_particle_system__WEBPACK_IMPORTED_MODULE_1__[\"hexagonBullet\"])(hex));\n    }\n  }\n\n  hex.checkCollision = () => {\n    hex.game.playerBullets.forEach((playerBullet) => {\n      if (playerBullet.y - playerBullet.radius <= hex.y + 30 \n        && playerBullet.x + playerBullet.radius >= hex.x - 10\n        && playerBullet.x - playerBullet.radius <= hex.x + 20\n        && playerBullet.y + playerBullet.radius >= hex.y\n        ) {\n        hex.active = false;\n      }\n    })\n  }\n\n  return hex;\n}\n\n//# sourceURL=webpack:///./lib/enemy_system.js?");

/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./lib/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const cvs = document.getElementById('danmaku-symphony');\n  const ctx = cvs.getContext('2d');\n  cvs.width = window.innerWidth;\n  cvs.height = window.innerHeight;\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cvs, ctx);\n  window.game = game;\n  game.setupGame();\n})\n\n\n\n\n//# sourceURL=webpack:///./lib/entry.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./lib/player.js\");\n/* harmony import */ var _game_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_screen */ \"./lib/game_screen.js\");\n/* harmony import */ var _enemy_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy_system */ \"./lib/enemy_system.js\");\n/* harmony import */ var _mob_enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mob_enemy */ \"./lib/mob_enemy.js\");\n/* harmony import */ var _assets_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/bg.png */ \"./assets/bg.png\");\n/* harmony import */ var _assets_bg_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_bg_png__WEBPACK_IMPORTED_MODULE_4__);\n\n// import MobEnemy from './mob_enemy';\n\n\n\n\n\nconst IDLE_GAME = 'IDLE_GAME';\nconst RUNNING_GAME = 'RUNNING_GAME';\nconst END_GAME = 'END_GAME';\n\nclass Game {\n  constructor(cvs, ctx) {\n    this.frames = 0;\n    this.cvs = cvs;\n    this.ctx = ctx;\n    this.IDLE_GAME = IDLE_GAME;\n    this.RUNNING_GAME = RUNNING_GAME;\n    this.END_GAME = END_GAME;\n    this.currentState = IDLE_GAME;\n    this.gameScreen = new _game_screen__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.loop = this.loop.bind(this);\n    this.entities = [];\n    this.playerBullets = [];\n    this.enemyBullets = [];\n  }\n\n  setupGame() {\n    this.player.trackMovements();\n    this.loop();\n  }\n\n  generateEnemies() {\n    if (this.frames % 200 === 0) {\n      this.entities.push(Object(_enemy_system__WEBPACK_IMPORTED_MODULE_2__[\"hexagon\"])(this))\n    } \n  }\n  \n  checkGameOver() {\n    switch (this.currentState) {\n      case END_GAME:\n\n        break;\n    }\n  }\n\n  draw() {\n    this.ctx.fillStyle = '#866286';\n    this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);\n    this.gameScreen.draw();\n    this.entities.forEach((entity) => entity.draw());\n    this.player.draw();\n    this.playerBullets.forEach((playerBullet) => playerBullet.draw());\n    this.enemyBullets.forEach((enemyBullet) => enemyBullet.draw())\n  }\n\n  update() {\n    this.gameScreen.update();\n    this.playerBullets.forEach((playerBullet) => playerBullet.update())\n    this.enemyBullets.forEach((enemyBullet) => enemyBullet.update())\n    this.checkCollision();\n    this.removePlayerBullets();\n    this.removeEnemyBullets();\n    this.removeEntities();\n    this.generateEnemies();\n    this.entities.forEach((entity) => entity.update());\n    this.player.update();\n  }\n\n  checkCollision() {\n    this.entities.forEach((entity) => {\n      // debugger\n      if (entity instanceof _mob_enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n        entity.checkCollision();\n      }\n    })\n  }\n\n  removePlayerBullets() {\n    this.playerBullets = this.playerBullets.filter((playerBullet) => playerBullet.active)\n  }\n\n  removeEnemyBullets() {\n    this.enemyBullets = this.enemyBullets.filter((enemyBullet) => enemyBullet.active)\n  }\n\n  removeEntities() {\n    this.entities = this.entities.filter((entity) => entity.active)\n  }\n\n  loop() {\n    this.update();\n    this.draw();\n    this.player.draw();\n    this.frames++;\n    window.requestAnimationFrame(this.loop);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_screen.js":
/*!****************************!*\
  !*** ./lib/game_screen.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameScreen {\n  constructor(game) {\n    this.cvs = game.cvs;\n    this.ctx = game.ctx;\n    this.width = this.cvs.width;\n    this.height = this.cvs.height;\n    this.x = this.cvs.width / 2 - this.width / 2;\n    this.y = 0;\n  }\n\n  draw() {\n    this.ctx.fillStyle = '#1a1a1a';\n    this.ctx.fillRect(this.x, this.y, this.width, this.cvs.height);\n  }\n\n  update() {\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameScreen);\n\n//# sourceURL=webpack:///./lib/game_screen.js?");

/***/ }),

/***/ "./lib/mob_enemy.js":
/*!**************************!*\
  !*** ./lib/mob_enemy.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MobEnemy {\n  constructor(game, width, height, velocityX, velocityY, minSpawnRange, maxSpawnRange) {\n    this.game = game;\n    this.cvs = game.cvs;\n    this.ctx = game.ctx;\n    this.width = width;\n    this.height = height;\n    this.radius = this.width / 2;\n    this.minSpawnRange = minSpawnRange;\n    this.maxSpawnRange= maxSpawnRange;\n    this.x = Math.floor(Math.random() * (this.maxSpawnRange - this.minSpawnRange + 1)) + this.minSpawnRange;\n    this.y = 0;\n    this.velocityX = velocityX;\n    this.velocityY = velocityY;\n    this.active = true;\n  }\n\n  checkInBounds() {\n\n  }\n\n  changeDirection() {\n\n  }\n\n  update() {\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobEnemy);\n\n//# sourceURL=webpack:///./lib/mob_enemy.js?");

/***/ }),

/***/ "./lib/particle.js":
/*!*************************!*\
  !*** ./lib/particle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Particle {\n  constructor(game, diameter, x, y) {\n    this.game = game;\n    this.diameter = diameter;\n    this.radius = this.diameter / 2;\n    this.cvs = game.cvs;\n    this.ctx = game.ctx;\n    this.active = true;\n    this.x = x;\n    this.y = y;\n  }\n\n  checkInBounds() {\n    let screenLeft = this.game.gameScreen.x\n    let screenRight = this.game.gameScreen.x + this.game.gameScreen.width;\n    let screenTop = this.game.gameScreen.y\n    let screenBottom = this.game.gameScreen.y + this.game.gameScreen.height;\n    if (this.x <= screenLeft\n      || this.x >= screenRight\n      || this.y <= screenTop\n      || this.y >= screenBottom) {\n        this.active = false;\n    }\n  }\n\n  draw() {\n\n  }\n\n  update() {\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Particle);\n\n//# sourceURL=webpack:///./lib/particle.js?");

/***/ }),

/***/ "./lib/particle_system.js":
/*!********************************!*\
  !*** ./lib/particle_system.js ***!
  \********************************/
/*! exports provided: playerBulletA, playerBulletB, playerBulletC, playerBulletAF, playerBulletBF, playerBulletCF, hexagonBullet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerBulletA\", function() { return playerBulletA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerBulletB\", function() { return playerBulletB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerBulletC\", function() { return playerBulletC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerBulletAF\", function() { return playerBulletAF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerBulletBF\", function() { return playerBulletBF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerBulletCF\", function() { return playerBulletCF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexagonBullet\", function() { return hexagonBullet; });\n/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ \"./lib/particle.js\");\n\n\nconst playerBulletA = (player) => {\n  let bullet = new _particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](player.game, 10, player.x, player.y);\n  bullet.velocityX = 10;\n  bullet.velocityY = 40;\n\n  bullet.draw = () => {\n    let ctx = player.game.ctx;\n    ctx.beginPath();\n    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);\n    ctx.save();\n    ctx.shadowBlur = 10;\n    ctx.shadowColor = 'blue';\n    ctx.fillStyle = 'white';\n    ctx.fill();\n    ctx.restore();\n  };\n\n  bullet.update = () => {\n    if (player.game.frames % 2 === 0) {\n      bullet.x -= bullet.velocityX;\n      bullet.y -= bullet.velocityY;\n    }\n    bullet.checkInBounds();\n  };\n  \n  return bullet;\n}\n\nconst playerBulletB = (player) => {\n  let bullet = new _particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](player.game, 10, player.x, player.y);\n  bullet.velocityX = -10;\n  bullet.velocityY = 40;\n  bullet.draw = () => {\n    let ctx = player.game.ctx;\n    ctx.beginPath();\n    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);\n    ctx.save();\n    ctx.shadowBlur = 10;\n    ctx.shadowColor = 'blue';\n    ctx.fillStyle = 'white';\n    ctx.fill();\n    ctx.restore();\n  };\n\n  bullet.update = () => {\n    if (player.game.frames % 2 === 0) {\n      bullet.x -= bullet.velocityX;\n      bullet.y -= bullet.velocityY;\n    }\n    bullet.checkInBounds();\n  };\n  \n  return bullet;\n}\nconst playerBulletC = (player) => {\n  let bullet = new _particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](player.game, 10, player.x, player.y);\n  bullet.velocityY = 40;\n\n  bullet.draw = () => {\n    let ctx = player.game.ctx;\n    ctx.beginPath();\n    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);\n    ctx.save();\n    ctx.shadowBlur = 10;\n    ctx.shadowColor = 'blue';\n    ctx.fillStyle = 'white';\n    ctx.fill();\n    ctx.restore();\n  };\n\n  bullet.update = () => {\n    if (player.game.frames % 2 === 0) {\n      bullet.y -= bullet.velocityY;\n    }\n    bullet.checkInBounds();\n  };\n  \n  return bullet;\n}\n\nconst playerBulletAF = (player) => {\n  let bullet = new _particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](player.game, 8, player.x - 10, player.y);\n  bullet.velocityY = 15;\n\n  bullet.draw = () => {\n    let ctx = player.game.ctx;\n    ctx.beginPath();\n    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);\n    ctx.save();\n    ctx.shadowBlur = 10;\n    ctx.shadowColor = 'blue';\n    ctx.fillStyle = 'white';\n    ctx.fill();\n    ctx.restore();\n  };\n\n  bullet.update = () => {\n    if (player.game.frames % 2 === 0) {\n      bullet.y -= bullet.velocityY;\n    }\n    bullet.checkInBounds();\n  };\n\n  return bullet;\n}\n\nconst playerBulletBF = (player) => {\n  let bullet = new _particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](player.game, 8, player.x + 10, player.y);\n  bullet.velocityY = 15;\n\n  bullet.draw = () => {\n    let ctx = player.game.ctx;\n    ctx.beginPath();\n    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);\n    ctx.save();\n    ctx.shadowBlur = 10;\n    ctx.shadowColor = 'blue';\n    ctx.fillStyle = 'white';\n    ctx.fill();\n    ctx.restore();\n  };\n\n  bullet.update = () => {\n    if (player.game.frames % 2 === 0) {\n      bullet.y -= bullet.velocityY;\n    }\n    bullet.checkInBounds();\n  };\n\n  return bullet;\n}\n\nconst playerBulletCF = (player) => {\n  let bullet = new _particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](player.game, 8, player.x, player.y);\n  bullet.velocityY = 15;\n\n  bullet.draw = () => {\n    let ctx = player.game.ctx;\n    ctx.beginPath();\n    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);\n    ctx.save();\n    ctx.shadowBlur = 10;\n    ctx.shadowColor = 'blue';\n    ctx.fillStyle = 'white';\n    ctx.fill();\n    ctx.restore();\n  };\n\n  bullet.update = () => {\n    if (player.game.frames % 2 === 0) {\n      bullet.y -= bullet.velocityY;\n    }\n    bullet.checkInBounds();\n  };\n\n  return bullet;\n}\n\nconst hexagonBullet = (enemy) => { \n  let hexBullet = new _particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](enemy.game, 10, enemy.x, enemy.y);\n  let angle = Math.random() * 360;\n  hexBullet.velocityX = Math.cos(angle / 180 * Math.PI) * 5;\n  hexBullet.velocityY = Math.cos(angle / 180 * Math.PI) * 5;\n  hexBullet.accelY = 0.01;\n  \n  hexBullet.draw = () => {\n    let ctx = hexBullet.ctx;\n    ctx.beginPath();\n    ctx.arc(hexBullet.x, hexBullet.y, hexBullet.diameter / 2, 0, 2 * Math.PI);\n    ctx.save();\n    ctx.shadowBlur = 10;\n    ctx.shadowColor = 'red';\n    ctx.fillStyle = 'white';\n    ctx.fill();\n    ctx.restore();\n  }\n\n  hexBullet.update = () => {\n    // hexBullet.x += hexBullet.velocityX;\n    hexBullet.y += hexBullet.velocityY;\n    hexBullet.velocityY += hexBullet.accelY;\n    hexBullet.checkInBounds();\n  }\n  \n  return hexBullet;\n}\n\n//# sourceURL=webpack:///./lib/particle_system.js?");

/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _particle_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle_system */ \"./lib/particle_system.js\");\n\n\nconst CONTROLS = {\n  UP: 38,\n  DOWN: 40,\n  LEFT: 37,\n  RIGHT: 39,\n  Z: 90,\n  SHIFT: 16\n}\n\nclass Player {\n  constructor(game) {\n    this.game = game;\n    this.cvs = game.cvs,\n    this.ctx = game.ctx,\n    this.x = this.cvs.width / 2;\n    this.y = this.cvs.height - 170;\n    this.width = 30;\n    this.height = 40;\n    this.radius = 7.5;\n    this.movement = 5;\n    this.focusMovement = 2;\n    this.keyDown = {\n      UP: false,\n      DOWN: false,\n      LEFT: false,\n      RIGHT: false,\n      SHIFT: false,\n      Z: false\n    }\n  }\n\n  trackMovements() {\n    document.addEventListener('keydown', (e) => {\n      this.game.currentState = this.game.RUNNING_GAME\n      switch (e.keyCode) {\n        case CONTROLS.UP: \n          this.keyDown.UP = true;\n          break;\n        case CONTROLS.DOWN: \n          this.keyDown.DOWN = true;\n          break;\n        case CONTROLS.LEFT:\n          this.keyDown.LEFT = true;\n          break;\n        case CONTROLS.RIGHT:\n          this.keyDown.RIGHT = true;\n          break;\n        case CONTROLS.SHIFT:\n          this.keyDown.SHIFT = true;\n          break;\n        case CONTROLS.Z:\n          this.keyDown.Z = true;\n          break;\n      }\n    });\n\n    document.addEventListener('keyup', (e) => {\n      switch (e.keyCode) {\n        case CONTROLS.UP:\n          this.keyDown.UP = false;\n          break;\n        case CONTROLS.DOWN:\n          this.keyDown.DOWN = false;\n          break;\n        case CONTROLS.LEFT:\n          this.keyDown.LEFT = false;\n          break;\n        case CONTROLS.RIGHT:\n          this.keyDown.RIGHT = false;\n          break;\n        case CONTROLS.SHIFT:\n          this.keyDown.SHIFT = false;\n        case CONTROLS.Z:\n          this.keyDown.Z = false;\n      }\n    })\n  }\n\n  update() {\n\n    if (this.keyDown.UP) this.y -= (this.keyDown.SHIFT ? this.focusMovement : this.movement);\n    if (this.keyDown.DOWN) this.y += (this.keyDown.SHIFT ? this.focusMovement : this.movement);\n    if (this.keyDown.LEFT) this.x -= (this.keyDown.SHIFT ? this.focusMovement : this.movement);\n    if (this.keyDown.RIGHT) this.x += (this.keyDown.SHIFT ? this.focusMovement : this.movement);\n    if (this.keyDown.Z && !this.keyDown.SHIFT) { \n      this.game.playerBullets.push(Object(_particle_system__WEBPACK_IMPORTED_MODULE_0__[\"playerBulletA\"])(this));\n      this.game.playerBullets.push(Object(_particle_system__WEBPACK_IMPORTED_MODULE_0__[\"playerBulletB\"])(this));\n      this.game.playerBullets.push(Object(_particle_system__WEBPACK_IMPORTED_MODULE_0__[\"playerBulletC\"])(this));\n    }\n    if (this.keyDown.Z && this.keyDown.SHIFT) { \n      this.game.playerBullets.push(Object(_particle_system__WEBPACK_IMPORTED_MODULE_0__[\"playerBulletAF\"])(this));\n      this.game.playerBullets.push(Object(_particle_system__WEBPACK_IMPORTED_MODULE_0__[\"playerBulletBF\"])(this));\n      this.game.playerBullets.push(Object(_particle_system__WEBPACK_IMPORTED_MODULE_0__[\"playerBulletCF\"])(this));\n    }\n    this.checkInBounds();\n  }\n\n  checkInBounds() {\n    let screenLeft = this.game.gameScreen.x + this.width / 2;\n    let screenRight = this.game.gameScreen.x + this.game.gameScreen.width + this.width / 2;\n    let screenTop = this.game.gameScreen.y;\n    let screenBottom = this.game.gameScreen.y + this.game.gameScreen.height;\n\n    if (this.x <= screenLeft) {\n      this.x = screenLeft\n    }\n\n    if (this.x + this.width >= screenRight) {\n      this.x = screenRight - this.width;\n    } \n    \n    if (this.y <= screenTop) {\n      this.y = screenTop;\n    } \n\n    if (this.y + this.height >= screenBottom) {\n      this.y = screenBottom - this.height;\n    }\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'white';\n    this.ctx.moveTo(this.x, this.y);\n    this.ctx.lineTo(this.x - 15, this.y + 40);\n    this.ctx.lineTo(this.x, this.y + 20);\n    this.ctx.lineTo(this.x + 15, this.y + 40);\n    this.ctx.closePath();\n    this.ctx.fill();\n    this.ctx.stroke();\n\n    if (this.keyDown.SHIFT) {\n      let center = { x: this.x, y: this.y + this.height / 2 }\n      this.ctx.beginPath();\n      this.ctx.arc(center.x, center.y, this.radius, 0, 2 * Math.PI);\n      this.ctx.save();\n      this.ctx.shadowBlur = 10;\n      this.ctx.shadowColor = 'red';\n      this.ctx.fillStyle = 'white';\n      this.ctx.fill();\n      this.ctx.restore();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./lib/player.js?");

/***/ })

/******/ });