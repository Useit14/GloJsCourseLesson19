/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_anim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/anim */ \"./modules/anim.js\");\n\r\n(0,_modules_anim__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/anim.js":
/*!*************************!*\
  !*** ./modules/anim.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst anim = () => {\r\n  const baloon = document.querySelectorAll(\".baloon\");\r\n  const needle = document.querySelectorAll(\".needle\");\r\n  const buttonStart = document.querySelector(\".start\");\r\n  const buttonReset = document.querySelector(\".reset\");\r\n  const balArr = [];\r\n  let isStart = false;\r\n  let animId = 0;\r\n  let winNumber = null;\r\n  let predictNumber = \"\";\r\n\r\n  const render = () => {\r\n    balArr.forEach((bal, index) => {\r\n      baloon[index].style.top = bal.top + \"px\";\r\n      baloon[index].style.left = bal.left + \"px\";\r\n      baloon[index].style.right = bal.right + \"px\";\r\n    });\r\n  };\r\n  const init = () => {\r\n    baloon.forEach((bal, index) => {\r\n      const randNumbLeft = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;\r\n      const randNumbTop = Math.floor(Math.random() * (100 - 50 + 1)) + 50;\r\n      balArr[index] = {\r\n        id: index,\r\n        top: randNumbTop,\r\n        left: randNumbLeft,\r\n        right: bal.getBoundingClientRect().right,\r\n      };\r\n    });\r\n    render();\r\n  };\r\n\r\n  const down = () => {\r\n    animId = requestAnimationFrame(down);\r\n    if (!winNumber) {\r\n      balArr.forEach((bal, index) => {\r\n        if (bal.top >= needle[0].getBoundingClientRect().top) {\r\n          winNumber = index;\r\n        }\r\n\r\n        balArr[index].top =\r\n          bal.top + 10 * Math.floor(Math.random() * (3 - 2 + 1)) + 2;\r\n      });\r\n      render();\r\n    } else {\r\n      cancelAnimationFrame(animId);\r\n      alert(`${winNumber === predictNumber ? \"Вы выйграли\" : \"Вы проиграли\"}`);\r\n    }\r\n  };\r\n\r\n  init();\r\n  buttonStart.addEventListener(\"click\", () => {\r\n    isStart = !isStart;\r\n    if (isStart) {\r\n      down();\r\n    } else {\r\n      cancelAnimationFrame(animId);\r\n    }\r\n  });\r\n  document.addEventListener(\"DOMContentLoaded\", () => {\r\n    setTimeout(() => {\r\n      predictNumber = +prompt(\"Угадайте номер какого шара первый лопнет?\", \"0\");\r\n    }, 300);\r\n  });\r\n  buttonReset.addEventListener(\"click\", () => {\r\n    init();\r\n    isStart = false;\r\n    winNumber = null;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anim);\r\n\n\n//# sourceURL=webpack:///./modules/anim.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;