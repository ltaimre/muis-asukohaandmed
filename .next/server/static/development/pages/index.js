module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MuseumInfo.js":
/*!**********************************!*\
  !*** ./components/MuseumInfo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/liisitaimre/Documents/hello-next/components/MuseumInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MuseumInfo = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Jumbotron"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, "Hello, world!"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  variant: "primary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 17
  }
}, "Learn more"))));

/* harmony default export */ __webpack_exports__["default"] = (MuseumInfo);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MuseumInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MuseumInfo */ "./components/MuseumInfo.js");
var _jsxFileName = "/Users/liisitaimre/Documents/hello-next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const rdfetch = __webpack_require__(/*! @rdfjs/fetch */ "@rdfjs/fetch");

const Test = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, "Museaale muuseumis: ", props.count), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, "Museaale valikus: ", props.choice), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, "Museaale s\xFCndmusega: ", props.countEvent));

Test.getInitialProps = async function getInitialProps(context) {
  async function getDataset(link) {
    const dataset = await rdfetch(`${link}`).then(res => res.dataset()).catch(err => console.error(err));
    return dataset;
  }

  function isIterable(obj) {
    if (obj == null) {
      return false;
    }

    return typeof obj[Symbol.iterator] === 'function';
  }

  async function checkHigherPlace(link) {
    const dataset = getDataset(link);

    if (isIterable(dataset)) {
      for (const quad of dataset) {
        if (quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P87_falls_within") {
          if (quad.object.value == "http://opendata.muis.ee/place/6218") {
            return true;
          } else {}
        }
      }
    }
  }

  async function getPlace(link) {
    const dataset = getDataset(link);

    if (isIterable(dataset)) {
      //
      for (const quad of dataset) {//check if is already
      }
    }
  }

  async function hasHigher(link) {
    const dataset = getDataset(link);

    if (isIterable(dataset)) {
      //
      for (const quad of dataset) {
        if (quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P127_has_broader_term") {
          if (quad.object.value == "http://opendata.muis.ee/thesaurus/61/11273") {
            return true;
          }
        }
      }
    }
  }

  async function isTypeEvent(link) {
    const dataset = getDataset(link);

    if (isIterable(dataset)) {
      let type = 0;
      let place = [];

      for (const quad of dataset) {
        if (quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P2_has_type") {
          if (quad.object.value == "http://opendata.muis.ee/thesaurus/61/11273") {
            type = 1;
          } else {
            let a = await hasHigher(quad.object.value);

            if (a) {
              type = 1;
            }
          }
        }

        if (quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P7_took_place_at") {
          place.push(quad.object.value);
        }
      }

      if (type && place.length) {
        for (let x = 0; x < place.length; x++) {//getPlace(place[x]);
        }

        return true;
      }
    }
  }

  async function hasEvent(link) {
    const dataset = getDataset(link);

    if (isIterable(dataset)) {
      for (const quad of dataset) {
        if (quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P12_occurred_in_the_presence_of") {
          {
            let isType = await isTypeEvent(quad.object.value);

            if (isType) {
              return true;
            }
          }
        }
      }
    }
  }

  let count = 0;
  let countEvent = 0;
  const choice = 188;
  const array = []; //Jääri ajaloolised 1204
  //Jääri fotod: 1252
  //Jööri ajaloolised: 1238
  //Meierei: 1210
  //Pudukogu 1198
  //Alver - ajalooline 392

  const dataset = await getDataset('https://www.muis.ee/rdf/collection/1210');

  if (isIterable(dataset)) {
    for (const quad of dataset) {
      if (quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P46_is_composed_of") {
        array.push(quad.object.value);
        count++;
      }
    }
  }

  for (let x = 0; x < array.length; x++) {
    {
      let hasEv = await hasEvent(array[x]);

      if (hasEv) {
        countEvent++;
      }
    }
  }

  return {
    count,
    choice,
    countEvent
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/liisitaimre/Documents/hello-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@rdfjs/fetch":
/*!*******************************!*\
  !*** external "@rdfjs/fetch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rdfjs/fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map