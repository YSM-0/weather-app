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

/***/ "./src/api_load.js":
/*!*************************!*\
  !*** ./src/api_load.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInfoObject\": () => (/* binding */ getInfoObject),\n/* harmony export */   \"setBackground\": () => (/* binding */ setBackground)\n/* harmony export */ });\nasync function loadWeatherJson(location) {\n  const city = location;\n  try {\n    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1f03ba2cb86d40a5957211626232103&q=${city}&aqi=no`);\n    return response.json();\n  } catch (err) {\n    console.log(err);\n  }\n}\nasync function getInfoObject(location) {\n  const weatherJson = await loadWeatherJson(location);\n  const infoObject = {};\n  infoObject.name = weatherJson.location.name;\n  infoObject.country = weatherJson.location.country;\n  infoObject.temp_f = weatherJson.current.temp_f;\n  infoObject.temp_c = weatherJson.current.temp_c;\n  infoObject.feelslike_f = weatherJson.current.feelslike_f;\n  infoObject.feelslike_c = weatherJson.current.feelslike_c;\n  infoObject.wind_mph = weatherJson.current.wind_mph;\n  infoObject.wind_kph = weatherJson.current.wind_kph;\n  infoObject.humidity = weatherJson.current.humidity;\n  infoObject.cloud = weatherJson.current.cloud;\n  infoObject.is_day = weatherJson.current.is_day;\n  infoObject.condition = weatherJson.current.condition.text;\n  infoObject.icon = weatherJson.current.condition.icon;\n  return infoObject;\n}\nfunction setBackground(infoObject) {\n  const body = document.body;\n  infoObject.then(result => {\n    if (result.is_day == 1) {\n      body.style.backgroundImage = \"url('assets/day.jpeg')\";\n    } else {\n      body.style.backgroundImage = \"url('assets/night.jpeg')\";\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/api_load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_load */ \"./src/api_load.js\");\n\nconst degToggler = document.querySelector('.deg-toggler');\nconst searchButton = document.querySelector('#button');\nconst input = document.querySelector('#search');\nlet deg = '°C';\nlet infoObject = (0,_api_load__WEBPACK_IMPORTED_MODULE_0__.getInfoObject)('medellin');\nlet currentCityObject = {};\nfunction displayInfo(currentCityObject, deg) {\n  const name = document.querySelector('.name');\n  const country = document.querySelector('.country');\n  const temp = document.querySelector('.temp');\n  const feelsLikeTemp = document.querySelector('.feels-like');\n  const windKph = document.querySelector('.wind');\n  const humidity = document.querySelector('.humidity');\n  const cloud = document.querySelector('.cloud');\n  const icon = document.querySelector('.icon');\n  name.textContent = currentCityObject.name;\n  country.textContent = currentCityObject.country;\n  if (deg === '°C') {\n    temp.textContent = `Temperature: ${currentCityObject.temp_c} °C`;\n  } else {\n    temp.textContent = `Temperature: ${currentCityObject.temp_f} °F`;\n  }\n  if (deg === '°C') {\n    feelsLikeTemp.textContent = `Feels like: ${currentCityObject.feelslike_c} °C`;\n  } else {\n    feelsLikeTemp.textContent = `Feels like: ${currentCityObject.feelslike_f} °F`;\n  }\n  windKph.textContent = `Wind: ${currentCityObject.wind_kph} km/h`;\n  humidity.textContent = `Humidity: ${currentCityObject.humidity} %`;\n  cloud.textContent = `Clouds: ${currentCityObject.cloud} %`;\n  icon.src = currentCityObject.icon;\n}\ninfoObject.then((0,_api_load__WEBPACK_IMPORTED_MODULE_0__.setBackground)(infoObject)).then(result => {\n  displayInfo(result, deg);\n  currentCityObject = result;\n});\ndegToggler.addEventListener('click', () => {\n  const temp = document.querySelector('.temp');\n  const feelsLikeTemp = document.querySelector('.feels-like');\n  if (deg === '°C') {\n    deg = '°F';\n    degToggler.textContent = deg;\n    temp.textContent = `Temperature: ${currentCityObject.temp_f} °F`;\n    feelsLikeTemp.textContent = `Feels like: ${currentCityObject.feelslike_f} °F`;\n  } else {\n    deg = '°C';\n    degToggler.textContent = deg;\n    temp.textContent = `Temperature: ${currentCityObject.temp_c} °C`;\n    feelsLikeTemp.textContent = `Feels like: ${currentCityObject.feelslike_c} °C`;\n  }\n});\nsearchButton.addEventListener('click', () => {\n  const city = document.querySelector('#search').value;\n  infoObject = (0,_api_load__WEBPACK_IMPORTED_MODULE_0__.getInfoObject)(city);\n  infoObject.then((0,_api_load__WEBPACK_IMPORTED_MODULE_0__.setBackground)(infoObject)).then(result => {\n    displayInfo(result, deg);\n    currentCityObject = result;\n    console.log(currentCityObject);\n  });\n});\ninput.addEventListener('keyup', function (event) {\n  if (event.key === 'Enter') {\n    const city = document.querySelector('#search').value;\n    infoObject = (0,_api_load__WEBPACK_IMPORTED_MODULE_0__.getInfoObject)(city);\n    infoObject.then((0,_api_load__WEBPACK_IMPORTED_MODULE_0__.setBackground)(infoObject)).then(result => {\n      displayInfo(result, deg);\n      currentCityObject = result;\n      console.log(currentCityObject);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;