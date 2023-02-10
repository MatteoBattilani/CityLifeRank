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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*, *::before, *::after {\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Bitter', serif;\\r\\n  font-weight: normal;\\r\\n  color: #0f1b61;\\r\\n}\\r\\n\\r\\nbody{\\r\\n  background-color: #dbefff;\\r\\n}\\r\\n\\r\\n\\r\\n/*--Style for listener which retrieves the result of the city searched via the search button--*/\\r\\n.list{\\r\\n  display: block;\\r\\n}\\r\\n.list-item:hover, #back-button:hover, #city-name:hover{\\r\\n  cursor: pointer;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.categories {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  grid-template-columns: repeat(4, 1fr);\\r\\n}\\r\\n\\r\\n/*--When viewing from mobile, the city categories are shown in a single column--*/\\r\\n#categories-div {\\r\\n  width: 25%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  #categories-div {\\r\\n    width: 50%;\\r\\n    text-align: center;\\r\\n  }\\r\\n}\\r\\n/*---------------------------------------*/\\r\\n\\r\\n\\r\\n/*--Text style for city's description--*/\\r\\n.paragraph{\\r\\n  font-size: 18px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.scoring-text{\\r\\n  font-family:Verdana, Geneva, Tahoma, sans-serif;\\r\\n  font-size: 13px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.categories-text{\\r\\n  font-family:Verdana, Geneva, Tahoma, sans-serif;\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n/*--Style of coloured rectangle accompanying category names--*/\\r\\n.dot {\\r\\n  width: 10px;\\r\\n  height: 50px;\\r\\n  border: 2px solid rgb(229, 236, 242);\\r\\n  display: block;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n/*--Style of the city description border--*/\\r\\n.border-container{\\r\\n  border: 5px;\\r\\n  border-color: #AADCEC;\\r\\n  border-style: groove ;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.windows-background{\\r\\n  background-color: #ffffff30;\\r\\n}\\r\\n\\r\\n/*-----------------------------CUSTOM SCROLLBAR-----------------------------*/\\r\\n\\r\\n\\r\\n/* width */\\r\\n::-webkit-scrollbar {\\r\\n  width: 10px; \\r\\n}\\r\\n\\r\\n/* Track */\\r\\n::-webkit-scrollbar-track {\\r\\n  background: #F3F8FC\\r\\n}\\r\\n\\r\\n/* Handle */\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #AADCEC\\r\\n}\\r\\n\\r\\n/* Handle on hover */\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #0f1b61;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://city-life-rank/./src/CSS/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://city-life-rank/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://city-life-rank/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://city-life-rank/./src/CSS/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://city-life-rank/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://city-life-rank/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://city-life-rank/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://city-life-rank/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://city-life-rank/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://city-life-rank/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Js/index.js":
/*!*************************!*\
  !*** ./src/Js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CSS/style.css */ \"./src/CSS/style.css\");\n\r\n\r\n// ----------------------------CONSTANTS AND VARIABLES-----------------------------------------------\r\n\r\nconst button = document.querySelector(\"#search\");\r\nconst inputField = document.querySelector(\"#inputField\");\r\nconst bestContainer = document.querySelector(\"#best-container\");\r\nconst worstContainer = document.querySelector(\"#worst-container\");\r\nconst scoringContainer = document.querySelector(\"#scoring-container\");\r\nconst cityDescriptionContainer = document.querySelector(\"#city-description\");\r\nconst backContainer = document.querySelector(\"#back\");\r\nconst backButton = document.querySelector(\"#back-button\");\r\n// -----------------------------------LISTENERS---------------------------------------------------\r\n\r\n// Following listeners call the displayTopCities and displayWorstCities functions when the page is refreshed\r\nwindow.addEventListener(\"load\", displayTopCities);\r\nwindow.addEventListener(\"load\", displayWorstCities);\r\n\r\n// this listener retrieves the result of the city searched via the search button\r\nbutton.addEventListener(\"click\", async (event) => {\r\n  event.preventDefault();\r\n  backContainer.classList.add(\"invisible\"); //it is important to make it invisible because if I have already done a search then it is visible\r\n  scoringContainer.innerHTML = \"\";\r\n  cityDescriptionContainer.innerHTML = \"\";\r\n  cityDescriptionContainer.classList.remove(\r\n    \"border-container\",\r\n    \"windows-background\"\r\n  );\r\n  const city = inputField.value.toLowerCase();\r\n  // Make a GET request to the Teleport API with the city name\r\n  try {\r\n    const response = await axios.get(\r\n      `https://api.teleport.org/api/cities/?search=${city}`\r\n    );\r\n    // Get the search results from the API response\r\n    const searchResults = response.data._embedded[\"city:search-results\"];\r\n    let html = \"<ol class='list'>\";\r\n    const promises = [];\r\n    // Loop through the search results and make a GET request for each city\r\n    for (let i = 0; i < searchResults.length; i++) {\r\n      promises.push(axios.get(searchResults[i]._links[\"city:item\"].href));\r\n    }\r\n    // Wait for all the city requests to complete\r\n    const responses = await Promise.all(promises);\r\n    // Loop through the city responses and add the city to the HTML string if it has an urban area\r\n    for (let i = 0; i < responses.length; i++) {\r\n      if (responses[i].data._links.hasOwnProperty(\"city:urban_area\")) {\r\n        html += `<li class='list-item' data-href='${searchResults[i]._links[\"city:item\"].href}'>${searchResults[i].matching_full_name}</li>`;\r\n      }\r\n    }\r\n    html += \"</ol>\";\r\n    if (html === \"<ol class='list'></ol>\") {\r\n      html =\r\n        '<div class=\"alert alert-warning\" role=\"alert\">City not found in database</div>';\r\n    }\r\n    scoringContainer.innerHTML = html;\r\n    backContainer.classList.remove(\"invisible\");\r\n  } catch (error) {\r\n    alert(\"A generic error is occurred.\");\r\n  }\r\n});\r\n\r\n// this listener is activated when clicking on an element with the tag 'li' within the 'scoringcontainer'.\r\nscoringContainer.addEventListener(\"click\", async (event) => {\r\n  // When an 'LI' element is clicked, a request for city data is made\r\n  if (event.target.tagName === \"LI\") {\r\n    try {\r\n      const cityData = await axios.get(event.target.getAttribute(\"data-href\"));\r\n      // The URL for the city's urban area (urbanAreaUrl) and the urban area data (urbanAreaData) is obtained by calling the API.\r\n      const urbanAreaUrl = cityData.data._links[\"city:urban_area\"].href;\r\n      const urbanAreaData = await axios.get(urbanAreaUrl);\r\n      // The URL for the scores (scoresUrl) and the scores data (scoresData) is obtained by calling the API.\r\n      const scoresUrl = urbanAreaData.data._links[\"ua:scores\"].href;\r\n      let scoresData = await axios.get(scoresUrl);\r\n\r\n      scoresData = scoresData.data;\r\n\r\n      createCityScoreHTML(scoresData);\r\n    } catch (error) {\r\n      alert(\"A generic error is occurred.\");\r\n    }\r\n  }\r\n});\r\n\r\n// this listener is activated when clicking on the div cointaining \"to the home\"\r\nbackButton.addEventListener(\"click\", function () {\r\n  location.reload();\r\n});\r\n\r\n// this listener is activated when clicking on the name of a city in the best and worst lists\r\nscoringContainer.addEventListener(\"click\", async (event) => {\r\n  if (event.target.id === \"city-name\") {\r\n    try {\r\n      let cityName = event.target.textContent.toLowerCase();\r\n      cityName = cityName.replace(/\\s/g, \"-\"); // this is important for handling multi-word city names\r\n      const cityData = await axios.get(\r\n        `https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`\r\n      );\r\n\r\n      const scoresData = cityData.data;\r\n      createCityScoreHTML(scoresData);\r\n      backContainer.classList.remove(\"invisible\");\r\n    } catch (error) {\r\n      alert(\"A generic error is occurred.\");\r\n    }\r\n  }\r\n});\r\n\r\n// ----------------------------------------------FUNCTIONS-------------------------------------------------\r\n\r\n// Function used to create description and score of a city\r\nconst createCityScoreHTML = (scoresData) => {\r\n  // Extract the categories, summary, and city score from the data\r\n  let categories = scoresData.categories;\r\n  let summary = scoresData.summary;\r\n  let cityScore = scoresData.teleport_city_score;\r\n\r\n  // Create HTML to display the summary and city score\r\n  let htmlDescription = `<p>${summary}</p> \r\n                <p style='text-align: center;'><b>City Scoring: ${cityScore.toFixed(\r\n                  2\r\n                )}<b></p>`;\r\n\r\n  scoringContainer.innerHTML = createHTMLCategories(categories);\r\n\r\n  cityDescriptionContainer.classList.add(\r\n    \"border-container\",\r\n    \"windows-background\",\r\n    \"paragraph\"\r\n  );\r\n  cityDescriptionContainer.innerHTML = htmlDescription;\r\n};\r\n\r\n// Function for creating the html for city's categories\r\nconst createHTMLCategories = (categories) => {\r\n  let html = \"<div class='categories'>\";\r\n  // Loop through each category and create HTML for each\r\n  for (let category of categories) {\r\n    let score = category.score_out_of_10;\r\n    let firstDecimal = +score.toFixed(1).slice(-1);\r\n    html += `<div id=\"categories-div\" class=\"d-flex\">\r\n              <div class='dot' style='background-color: ${category.color};'></div>\r\n              <div class=\"categories-text\"><p class=\"mb-0 pb-0\">${category.name}</p>`;\r\n    // Check if score has one decimal or not\r\n    if (firstDecimal == 0) {\r\n      html += `<p class=\"scoring-text mt-0 pt-0\" style=\"text-align: left;\">${score.toFixed(\r\n        0\r\n      )}/10</p>`;\r\n    } else {\r\n      html += `<p class=\"scoring-text mt-0 pt-0\" style=\"text-align: left;\">${score.toFixed(\r\n        1\r\n      )}/10</p>`;\r\n    }\r\n\r\n    html += \"</div></div>\";\r\n  }\r\n  html += \"</div>\";\r\n  return html;\r\n};\r\n\r\n// This function retrieves the 10 best cities according to the teleport_city_score via the teleport api\r\n// The flag of each city's country is also fetched and displayed in the HTML.\r\nasync function displayTopCities() {\r\n  bestContainer.innerHTML = \"Loading...\";\r\n  try {\r\n    const timestamp = new Date().getTime();\r\n    const urbanAreasResponse = await axios.get(\r\n      `https://api.teleport.org/api/urban_areas/?t=${timestamp}` // A timestamp is created to avoid cache issues when making API requests\r\n    );\r\n    // A GET request to the Teleport API to retrieve data about all urban areas\r\n    const cities = urbanAreasResponse.data._links[\"ua:item\"];\r\n    // Create an array of promises for each city's scores and country data.\r\n    const citiesPromises = cities.map(async (city) => {\r\n      const cityResponse = await axios.get(city.href);\r\n      const cityScores = await axios.get(\r\n        cityResponse.data._links[\"ua:scores\"].href\r\n      );\r\n      const cityCountry = await axios.get(\r\n        cityResponse.data._links[\"ua:countries\"][0].href\r\n      );\r\n      // Return an object with the city's name, score, and country code.\r\n      return {\r\n        name: city.name,\r\n        score: cityScores.data.teleport_city_score,\r\n        countryCode: cityCountry.data.iso_alpha2,\r\n      };\r\n    });\r\n    // Wait for all the city data promises to resolve and get an array of the fulfilled values.\r\n    const citiesWithScores = await Promise.allSettled(citiesPromises);\r\n    // Filter the array to only include cities with fulfilled promises and sort them based on their score in descending order.\r\n    const topCities = citiesWithScores\r\n      .filter((city) => city.status === \"fulfilled\")\r\n      .map((city) => city.value)\r\n      .sort((a, b) => b.score - a.score)\r\n      .slice(0, 10);\r\n    bestContainer.innerHTML = \"\";\r\n    // Loop through the top 10 cities and display their information.\r\n    for (let i = 0; i < topCities.length; i++) {\r\n      const city = topCities[i];\r\n      const countryFlag = `https://restcountries.com/v2/alpha/${city.countryCode}`;\r\n      const flagResponse = await axios.get(countryFlag);\r\n      const flag = flagResponse.data.flag;\r\n      const cityDiv = document.createElement(\"div\");\r\n      cityDiv.innerHTML = `\r\n        <span style=\"display: inline-block\">\r\n          <h4 style=\"display: inline-block; margin-right: 6px;\">${i + 1}.</h4>\r\n          <h4 id=\"city-name\" style=\"display: inline-block\">${city.name}</h4>\r\n          <img src=\"${flag}\" alt=\"${\r\n        city.name\r\n      }\" style=\"width: 20px;display: inline-block; margin-bottom: 6px; margin-left: 6px;\">\r\n        </span>\r\n        <p>Teleport City Score: ${city.score.toFixed(2)}</p>\r\n      `;\r\n\r\n      bestContainer.appendChild(cityDiv);\r\n    }\r\n  } catch (error) {\r\n    alert(\"A generic error is occurred.\");\r\n  }\r\n}\r\n\r\n// This function retrieves the 10 worst cities according to the teleport_city_score via the teleport api\r\n// The flag of each city's country is also fetched and displayed in the HTML.\r\nasync function displayWorstCities() {\r\n  worstContainer.innerHTML = \"Loading...\";\r\n  try {\r\n    const timestamp = new Date().getTime();\r\n    const urbanAreasResponse = await axios.get(\r\n      `https://api.teleport.org/api/urban_areas/?t=${timestamp}`\r\n    );\r\n    const cities = urbanAreasResponse.data._links[\"ua:item\"];\r\n    const citiesPromises = cities.map(async (city) => {\r\n      const cityResponse = await axios.get(city.href);\r\n      const cityScores = await axios.get(\r\n        cityResponse.data._links[\"ua:scores\"].href\r\n      );\r\n      const cityCountry = await axios.get(\r\n        cityResponse.data._links[\"ua:countries\"][0].href\r\n      );\r\n      return {\r\n        name: city.name,\r\n        score: cityScores.data.teleport_city_score,\r\n        countryCode: cityCountry.data.iso_alpha2,\r\n      };\r\n    });\r\n    const citiesWithScores = await Promise.allSettled(citiesPromises);\r\n    const topCities = citiesWithScores\r\n      .filter((city) => city.status === \"fulfilled\")\r\n      .map((city) => city.value)\r\n      // sorting by lowest score\r\n      .sort((a, b) => a.score - b.score)\r\n      .slice(0, 10);\r\n    worstContainer.innerHTML = \"\";\r\n    for (let i = 0; i < topCities.length; i++) {\r\n      const city = topCities[i];\r\n      const countryFlag = `https://restcountries.com/v2/alpha/${city.countryCode}`;\r\n      const flagResponse = await axios.get(countryFlag);\r\n      const flag = flagResponse.data.flag;\r\n      const cityDiv = document.createElement(\"div\");\r\n      cityDiv.innerHTML = `\r\n        <span style=\"display: inline-block\">\r\n          <h4 style=\"display: inline-block; margin-right: 6px;\">${i + 1}.</h4>\r\n          <h4 id=\"city-name\" style=\"display: inline-block\">${city.name}</h4>\r\n          <img src=\"${flag}\" alt=\"${\r\n        city.name\r\n      }\" style=\"width: 20px;display: inline-block; margin-bottom: 6px; margin-left: 6px;\">\r\n        </span>\r\n        <p>Teleport City Score: ${city.score.toFixed(2)}</p>\r\n      `;\r\n      worstContainer.appendChild(cityDiv);\r\n    }\r\n  } catch (error) {\r\n    alert(\"A generic error is occurred.\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://city-life-rank/./src/Js/index.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Js/index.js");
/******/ 	
/******/ })()
;