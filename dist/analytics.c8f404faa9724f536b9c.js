/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*************************!*\
  !*** ./js/analytics.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("function createAnalytics() {\r\n  let counter = 0;\r\n  let Destroyed = false;\r\n\r\n  const listener = () => counter++;\r\n\r\n  document.addEventListener('click', listener);\r\n\r\n  return {\r\n    destroy() {\r\n      document.removeEventListener('click', listener);\r\n      Destroyed = true;\r\n    },\r\n    getClics() {\r\n      if (Destroyed) {\r\n        return 'Analitics is destroyed! total clicks = ${counter}';\r\n      }\r\n      return counter;\r\n    }\r\n  }\r\n}\r\n\r\nwindow.analytics = createAnalytics();\r\n\n\n//# sourceURL=webpack:///./js/analytics.js?");
/******/ })()
;