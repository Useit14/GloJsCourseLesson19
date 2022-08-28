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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/date */ \"./modules/date.js\");\n\r\n(0,_modules_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/date.js":
/*!*************************!*\
  !*** ./modules/date.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst date = () => {\r\n  let idInterval = 0;\r\n  const getTime = () => {\r\n    const date = new Date();\r\n    const dateStop = new Date(`1 January  ${date.getFullYear() + 1}`).getTime();\r\n    const dateNow = new Date().getTime();\r\n    const timeRemaining = dateStop - dateNow;\r\n    const daysRemainder =\r\n      Math.floor(timeRemaining / 8.64e7) < 0\r\n        ? \"0\"\r\n        : Math.floor(timeRemaining / 8.64e7);\r\n    const hours = date.getHours();\r\n    const day = [\r\n      \"Воскресенье\",\r\n      \"Понедельник\",\r\n      \"Вторник\",\r\n      \"Среда\",\r\n      \"Четверг\",\r\n      \"Пятница\",\r\n      \"Суббота\",\r\n    ][date.getDay()];\r\n    const now = date.toLocaleTimeString(\"en\");\r\n\r\n    let timeOfDay = \"\";\r\n    if (hours < 10) {\r\n      timeOfDay = \"утро\";\r\n    } else if (hours < 18) {\r\n      timeOfDay = \"день\";\r\n    } else {\r\n      timeOfDay = \"вечер\";\r\n    }\r\n\r\n    return {\r\n      timeOfDay,\r\n      day,\r\n      now,\r\n      daysRemainder,\r\n    };\r\n  };\r\n\r\n  const addTimeInfo = () => {\r\n    const { timeOfDay, day, now, daysRemainder } = getTime();\r\n    const box = document.createElement(\"div\");\r\n    const app = document.querySelector(\".app\");\r\n    const innHTML = (box.innerHTML = `\r\n    Добрый ${timeOfDay} <br>\r\n    Сегодня: ${day} <br>\r\n    Текущее время: ${now} <br>\r\n    До нового года осталось ${daysRemainder} дней <br>\r\n    `);\r\n    if (app.innerHTML !== \"\") {\r\n      app.innerHTML = innHTML;\r\n    } else {\r\n      app.append(box);\r\n    }\r\n\r\n    if (daysRemainder < 0) {\r\n      clearInterval(idInterval);\r\n    }\r\n  };\r\n\r\n  idInterval = setInterval(addTimeInfo, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (date);\r\n\n\n//# sourceURL=webpack:///./modules/date.js?");

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