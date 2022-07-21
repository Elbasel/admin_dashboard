/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 14px;\n  /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n  font-family: var(--main-font);\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\nbody {\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  background-color: #27272a;\n  display: grid;\n  grid-template-columns: minmax(250px, 1fr) 4fr;\n}\n\naside {\n  display: grid;\n  grid-template-rows: 110px auto;\n  background-color: #181a1b;\n  max-height: 100vh;\n  position: sticky;\n  top: 0;\n}\naside .logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n}\naside .logo svg {\n  max-width: 70px;\n  color: white;\n}\naside .logo h1 {\n  color: white;\n  font-weight: 700;\n  font-size: 2rem;\n  letter-spacing: 4px;\n}\naside nav {\n  display: grid;\n  grid-template-rows: 1.4fr 1fr;\n  gap: 16px;\n}\n\n.links-one,\n.links-two {\n  display: grid;\n  gap: 3px;\n  grid-template-rows: repeat(auto-fit, 50px);\n}\n.links-one li.selected,\n.links-two li.selected {\n  font-weight: 900;\n  background-color: #2b2f31;\n}\n.links-one li,\n.links-two li {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.links-one li svg,\n.links-two li svg {\n  max-width: 30px;\n  color: white;\n  margin-left: 32px;\n}\n.links-one li a,\n.links-two li a {\n  text-decoration: none;\n  color: white;\n  font-size: 1.3rem;\n}\n.links-one li:hover,\n.links-two li:hover {\n  background-color: #2b2f31;\n}\n\n.hero {\n  display: grid;\n  grid-template-rows: 200px auto;\n}\n.hero header {\n  display: grid;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: #27272a;\n  box-shadow: 30px 5px 10px rgba(0, 0, 0, 0.4);\n}\n.hero section {\n  padding: 16px;\n}\n.hero main {\n  background-color: #52525b;\n}\n\n.section-one {\n  display: grid;\n  align-items: center;\n  grid-template-columns: auto 1fr auto auto;\n  grid-auto-flow: column;\n  gap: 16px;\n}\n.section-one .search-icon {\n  margin-left: 32px;\n}\n.section-one svg {\n  width: 30px;\n  color: white;\n}\n.section-one svg:active {\n  transform: scale(0.9);\n}\n.section-one input {\n  height: 50px;\n  border-radius: 18px;\n  border: none;\n  max-width: 600px;\n  padding: 12px;\n  font-size: 1.2rem;\n}\n.section-one .notification-icon {\n  margin-right: 35px;\n  max-width: 24px;\n}\n.section-one .profile {\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 16px;\n  align-items: center;\n  margin-right: 60px;\n}\n.section-one .profile img {\n  max-width: 40px;\n  border-radius: 50%;\n}\n.section-one .profile p {\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: white;\n  letter-spacing: 3px;\n}\n\n.section-two {\n  display: flex;\n  color: white;\n}\n.section-two div {\n  flex: 1;\n}\n.section-two .greeting {\n  display: flex;\n  gap: 16px;\n}\n.section-two .greeting img {\n  margin-left: 32px;\n  max-width: 73px;\n  border-radius: 50%;\n}\n.section-two .greeting .greeting-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-weight: bolder;\n}\n.section-two .buttons {\n  margin-left: 55px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.section-two .buttons button {\n  width: 130px;\n  height: 50px;\n  border-radius: 18px;\n  border: none;\n  font-size: 1.1rem;\n  background-color: #1d4ed8;\n  color: white;\n}\n.section-two .buttons button:active {\n  transform: scale(0.9);\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\nmain .content {\n  padding: 16px;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\nmain .content h2 {\n  width: 80%;\n  margin-left: 22px;\n}\nmain .content .projects {\n  padding: 16px;\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));\n}\nmain .content .projects .project-card {\n  background-color: #292524;\n  height: 300px;\n  border-radius: 18px;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css","webpack://./src/styles/index.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,eAAA;EACA,wBAAA;ACEJ;;ADCA;;;EAGI,mBAAA;EACA,SAAA;EACA,UAAA;ACEJ;;ADCA;;;;;;;;;;EAUI,SAAA;EACA,UAAA;EACA,mBAAA;EACA,6BAAA;ACEJ;;ADCA;;EAEI,gBAAA;ACEJ;;ADCA;EACI,eAAA;EACA,YAAA;ACEJ;;AAzBA,+CAAA;AACA;mEAAA;AAGA;EACI,iBAAA;EACA,iCARW;EASX,eAAA;EAGA,yBAhBS;EAkBT,aAAA;EACA,6CAAA;AAwBJ;;AArBA;EACI,aAAA;EACA,8BAAA;EACA,yBA5BW;EA6BX,iBAAA;EACA,gBAAA;EACA,MAAA;AAwBJ;AAtBI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,aAAA;AAwBR;AAtBQ;EACI,eAAA;EACA,YAAA;AAwBZ;AArBQ;EACI,YAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;AAuBZ;AAnBI;EACI,aAAA;EACA,6BAAA;EACA,SAAA;AAqBR;;AAjBA;;EAEI,aAAA;EACA,QAAA;EACA,0CAAA;AAoBJ;AAlBI;;EACI,gBAAA;EACA,yBAlES;AAuFjB;AAlBI;;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AAqBR;AAjBQ;;EACI,eAAA;EACA,YAAA;EACA,iBAAA;AAoBZ;AAjBQ;;EACI,qBAAA;EACA,YAAA;EACA,iBAAA;AAoBZ;AAlBQ;;EACI,yBAxFK;AA6GjB;;AAhBA;EAGI,aAAA;EACA,8BAAA;AAiBJ;AAfI;EAEI,aAAA;EAGA,gBAAA;EACA,MAAA;EACA,UAAA;EACA,yBA1GK;EA2GL,4CAAA;AAcR;AAXI;EACI,aAAA;AAaR;AAVI;EACI,yBAAA;AAYR;;AAPA;EAEI,aAAA;EACA,mBAAA;EACA,yCAAA;EACA,sBAAA;EACA,SAAA;AASJ;AAPI;EACI,iBAAA;AASR;AAPI;EACI,WAAA;EACA,YAAA;AASR;AANI;EACI,qBAAA;AAQR;AALI;EAEI,YAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;AAMR;AAHI;EACI,kBAAA;EACA,eAAA;AAKR;AAFI;EACI,aAAA;EACA,gCAAA;EACA,SAAA;EACA,mBAAA;EACA,kBAAA;AAIR;AAHQ;EACI,eAAA;EACA,kBAAA;AAKZ;AAFQ;EACI,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AAIZ;;AACA;EACI,aAAA;EAGA,YAAA;AAAJ;AAII;EACI,OAAA;AAFR;AAKI;EACI,aAAA;EACA,SAAA;AAHR;AAOQ;EACI,iBAAA;EACA,eAAA;EACA,kBAAA;AALZ;AAQQ;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EAEA,mBAAA;AAPZ;AAWI;EAEI,iBAAA;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;AAXR;AAaQ;EACI,YAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,yBAAA;EACA,YAAA;AAXZ;AAaQ;EACI,qBAAA;AAXZ;;AAgBA;EACI,aAAA;EACA,8BAAA;AAbJ;AAeI;EACI,aAAA;EAGA,aAAA;EACA,4BAAA;AAfR;AAiBQ;EAEI,UAAA;EACA,iBAAA;AAhBZ;AAoBQ;EACI,aAAA;EACA,aAAA;EACA,SAAA;EACA,yDAAA;AAlBZ;AAoBY;EAEI,yBAAA;EACA,aAAA;EACA,mBAAA;AAnBhB","sourcesContent":["html {\n    box-sizing: border-box;\n    font-size: 14px;\n    /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n    font-family: var(--main-font);\n}\n\nol,\nul {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n","@use 'reset.css';\n@use 'sass:math';\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');\n\n$primary-dark: #181a1b;\n// $primary-dark: #0f172a;\n$secondary-dark: #2b2f31;\n$third-dark: #27272a;\n$dark-blue: #004daa;\n$text-white: #d8d4cf;\n$caption-white: #e8e6e3;\n$primary-font: 'Roboto', sans-serif;\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\n\nbody {\n    min-height: 100vh;\n    font-family: $primary-font;\n    font-size: 16px;\n\n    // background-color: $primary-dark;\n    background-color: $third-dark;\n\n    display: grid;\n    grid-template-columns: minmax(250px, 1fr) 4fr;\n}\n\naside {\n    display: grid;\n    grid-template-rows: 110px auto;\n    background-color: $primary-dark;\n    max-height: 100vh;\n    position: sticky;\n    top: 0;\n\n    .logo {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 12px;\n        padding: 16px;\n\n        svg {\n            max-width: 70px;\n            color: white;\n        }\n\n        h1 {\n            color: white;\n            font-weight: 700;\n            font-size: 2rem;\n            letter-spacing: 4px;\n        }\n    }\n\n    nav {\n        display: grid;\n        grid-template-rows: 1.4fr 1fr;\n        gap: 16px;\n    }\n}\n\n.links-one,\n.links-two {\n    display: grid;\n    gap: 3px;\n    grid-template-rows: repeat(auto-fit, 50px);\n\n    li.selected {\n        font-weight: 900;\n        background-color: $secondary-dark;\n    }\n\n    li {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n        // margin-bottom: 12px;\n        // padding: 8px;\n\n        svg {\n            max-width: 30px;\n            color: white;\n            margin-left: 32px;\n        }\n\n        a {\n            text-decoration: none;\n            color: white;\n            font-size: 1.3rem;\n        }\n        &:hover {\n            background-color: $secondary-dark;\n        }\n    }\n}\n\n.hero {\n    // background-color: white;\n\n    display: grid;\n    grid-template-rows: 200px auto;\n\n    header {\n        // background-color: red;\n        display: grid;\n        // gap: 32px;\n        // padding: 32px;\n        position: sticky;\n        top: 0;\n        z-index: 2;\n        background-color: $third-dark;\n        box-shadow: 30px 5px 10px rgba(0, 0, 0, 0.4);\n    }\n\n    section {\n        padding: 16px;\n    }\n\n    main {\n        background-color: #52525b;\n        // background-color: yellow;\n    }\n}\n\n.section-one {\n    // border: 1px solid white;\n    display: grid;\n    align-items: center;\n    grid-template-columns: auto 1fr auto auto;\n    grid-auto-flow: column;\n    gap: 16px;\n\n    .search-icon {\n        margin-left: 32px;\n    }\n    svg {\n        width: 30px;\n        color: white;\n    }\n\n    svg:active {\n        transform: scale(0.9);\n    }\n\n    input {\n        // background-color: black;\n        height: 50px;\n        border-radius: 18px;\n        border: none;\n        max-width: 600px;\n        padding: 12px;\n        font-size: 1.2rem;\n    }\n\n    .notification-icon {\n        margin-right: 35px;\n        max-width: 24px;\n    }\n\n    .profile {\n        display: grid;\n        grid-template-columns: auto auto;\n        gap: 16px;\n        align-items: center;\n        margin-right: 60px;\n        img {\n            max-width: 40px;\n            border-radius: 50%;\n        }\n\n        p {\n            font-size: 1.4rem;\n            font-weight: 900;\n            color: white;\n            letter-spacing: 3px;\n        }\n    }\n}\n\n.section-two {\n    display: flex;\n    // align-items: center;\n    // border: 1px solid white;\n    color: white;\n    // margin-bottom: 32px;\n    // padding: 8px;\n\n    div {\n        flex: 1;\n    }\n\n    .greeting {\n        display: flex;\n        gap: 16px;\n\n        // background-color: black;\n\n        img {\n            margin-left: 32px;\n            max-width: 73px;\n            border-radius: 50%;\n        }\n\n        .greeting-col {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n\n            font-weight: bolder;\n        }\n    }\n\n    .buttons {\n        // background-color: blue;\n        margin-left: 55px;\n\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        button {\n            width: 130px;\n            height: 50px;\n            border-radius: 18px;\n            border: none;\n            font-size: 1.1rem;\n            background-color: #1d4ed8;\n            color: white;\n        }\n        button:active {\n            transform: scale(0.9);\n        }\n    }\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n\n    .content {\n        padding: 16px;\n        // background-color: blueviolet;\n\n        display: grid;\n        grid-template-rows: auto 1fr;\n\n        h2 {\n            // padding: 16px;\n            width: 80%;\n            margin-left: 22px;\n            // background-color: green;\n        }\n\n        .projects {\n            padding: 16px;\n            display: grid;\n            gap: 16px;\n            grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));\n\n            .project-card {\n                // background-image: linear-gradient(red, yellow);\n                background-color: #292524;\n                height: 300px;\n                border-radius: 18px;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/Kei.webp":
/*!*************************!*\
  !*** ./assets/Kei.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "873618faca376be56d26.webp";

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__webpack_require__.nc = undefined;
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _assets_Kei_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Kei.webp */ "./assets/Kei.webp");



const profilePicture = document.querySelector('.profile img')
profilePicture.setAttribute('src', _assets_Kei_webp__WEBPACK_IMPORTED_MODULE_1__)

const greetingPicture = document.querySelector('.greeting img')
greetingPicture.setAttribute('src', _assets_Kei_webp__WEBPACK_IMPORTED_MODULE_1__)

const sidebarIcons = document.querySelectorAll('li')

sidebarIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        document.querySelector('.selected').classList.remove('selected')
        icon.classList.add('selected')
    })
})

})();


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxXQUFXLE1BQU0sT0FBTyxZQUFZLFFBQVEsTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxpQ0FBaUMsNkJBQTZCLHNCQUFzQiw2QkFBNkIsS0FBSyw0QkFBNEIsMEJBQTBCLGdCQUFnQixpQkFBaUIsR0FB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QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7U0NmQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsaUNBQWlDLFdBQVc7VUFDNUM7VUFDQTs7Ozs7VUNQQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7Ozs7VUNOQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNROztBQUVwQztBQUNBLG1DQUFtQyw2Q0FBRzs7QUFFdEM7QUFDQSxvQ0FBb0MsNkNBQUc7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzRjMzciLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzEsMTAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIC8qIGNvbG9yLXNjaGVtZTogZGFyazsgKi9cXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogPT09PT09PT09PSBFTkQgRGFyayBNb2RlIENvbG9ycyA9PT09PT09PT09ICovXFxuLyogVG8gdXNlIGJhY2tncm91bmQgaW1hZ2VzIHRob3VyZ2ggIHVybCwgdXNlIGl0IGluIEphdmFzY2lwcnQgdXNpbmcgXFxuaW1wb3J0IGFzc2V0IHN0YXRtZW50IGFuZCBlLnN0eWxlLmJhY2tncm91bmQgPSBgJHtpbXBvcnRlZEltYWdlfWAgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyYTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNTBweCwgMWZyKSA0ZnI7XFxufVxcblxcbmFzaWRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDExMHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTFiO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5hc2lkZSAubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuYXNpZGUgLmxvZ28gc3ZnIHtcXG4gIG1heC13aWR0aDogNzBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYXNpZGUgLmxvZ28gaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcbmFzaWRlIG5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjRmciAxZnI7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5saW5rcy1vbmUsXFxuLmxpbmtzLXR3byB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAzcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgNTBweCk7XFxufVxcbi5saW5rcy1vbmUgbGkuc2VsZWN0ZWQsXFxuLmxpbmtzLXR3byBsaS5zZWxlY3RlZCB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmYzMTtcXG59XFxuLmxpbmtzLW9uZSBsaSxcXG4ubGlua3MtdHdvIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG4ubGlua3Mtb25lIGxpIHN2ZyxcXG4ubGlua3MtdHdvIGxpIHN2ZyB7XFxuICBtYXgtd2lkdGg6IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMzJweDtcXG59XFxuLmxpbmtzLW9uZSBsaSBhLFxcbi5saW5rcy10d28gbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmxpbmtzLW9uZSBsaTpob3ZlcixcXG4ubGlua3MtdHdvIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJmMzE7XFxufVxcblxcbi5oZXJvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IGF1dG87XFxufVxcbi5oZXJvIGhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzJhO1xcbiAgYm94LXNoYWRvdzogMzBweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbi5oZXJvIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuLmhlcm8gbWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjViO1xcbn1cXG5cXG4uc2VjdGlvbi1vbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcbi5zZWN0aW9uLW9uZSAuc2VhcmNoLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XFxufVxcbi5zZWN0aW9uLW9uZSBzdmcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5zZWN0aW9uLW9uZSBzdmc6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuLnNlY3Rpb24tb25lIGlucHV0IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4uc2VjdGlvbi1vbmUgLm5vdGlmaWNhdGlvbi1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMzVweDtcXG4gIG1heC13aWR0aDogMjRweDtcXG59XFxuLnNlY3Rpb24tb25lIC5wcm9maWxlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGdhcDogMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxufVxcbi5zZWN0aW9uLW9uZSAucHJvZmlsZSBpbWcge1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uc2VjdGlvbi1vbmUgLnByb2ZpbGUgcCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbn1cXG5cXG4uc2VjdGlvbi10d28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnNlY3Rpb24tdHdvIGRpdiB7XFxuICBmbGV4OiAxO1xcbn1cXG4uc2VjdGlvbi10d28gLmdyZWV0aW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxufVxcbi5zZWN0aW9uLXR3byAuZ3JlZXRpbmcgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbiAgbWF4LXdpZHRoOiA3M3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uc2VjdGlvbi10d28gLmdyZWV0aW5nIC5ncmVldGluZy1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5zZWN0aW9uLXR3byAuYnV0dG9ucyB7XFxuICBtYXJnaW4tbGVmdDogNTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2VjdGlvbi10d28gLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDRlZDg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5zZWN0aW9uLXR3byAuYnV0dG9ucyBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbn1cXG5tYWluIC5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxubWFpbiAuY29udGVudCBoMiB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XFxufVxcbm1haW4gLmNvbnRlbnQgLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxNnB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MCUsIDFmcikpO1xcbn1cXG5tYWluIC5jb250ZW50IC5wcm9qZWN0cyAucHJvamVjdC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI1MjQ7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDRUo7O0FEQ0E7OztFQUdJLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFSjs7QURDQTs7Ozs7Ozs7OztFQVVJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENBOztFQUVJLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0VKOztBQXpCQSwrQ0FBQTtBQUNBO21FQUFBO0FBR0E7RUFDSSxpQkFBQTtFQUNBLGlDQVJXO0VBU1gsZUFBQTtFQUdBLHlCQWhCUztFQWtCVCxhQUFBO0VBQ0EsNkNBQUE7QUF3Qko7O0FBckJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBNUJXO0VBNkJYLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0FBd0JKO0FBdEJJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQXdCUjtBQXRCUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBd0JaO0FBckJRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBdUJaO0FBbkJJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQXFCUjs7QUFqQkE7O0VBRUksYUFBQTtFQUNBLFFBQUE7RUFDQSwwQ0FBQTtBQW9CSjtBQWxCSTs7RUFDSSxnQkFBQTtFQUNBLHlCQWxFUztBQXVGakI7QUFsQkk7O0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXFCUjtBQWpCUTs7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBb0JaO0FBakJROztFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBb0JaO0FBbEJROztFQUNJLHlCQXhGSztBQTZHakI7O0FBaEJBO0VBR0ksYUFBQTtFQUNBLDhCQUFBO0FBaUJKO0FBZkk7RUFFSSxhQUFBO0VBR0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQTFHSztFQTJHTCw0Q0FBQTtBQWNSO0FBWEk7RUFDSSxhQUFBO0FBYVI7QUFWSTtFQUNJLHlCQUFBO0FBWVI7O0FBUEE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVNKO0FBUEk7RUFDSSxpQkFBQTtBQVNSO0FBUEk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNSO0FBTkk7RUFDSSxxQkFBQTtBQVFSO0FBTEk7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFNUjtBQUhJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBS1I7QUFGSTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSVI7QUFIUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUtaO0FBRlE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSVo7O0FBQ0E7RUFDSSxhQUFBO0VBR0EsWUFBQTtBQUFKO0FBSUk7RUFDSSxPQUFBO0FBRlI7QUFLSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBSFI7QUFPUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTFo7QUFRUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7QUFQWjtBQVdJO0VBRUksaUJBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVhSO0FBYVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBWFo7QUFhUTtFQUNJLHFCQUFBO0FBWFo7O0FBZ0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBYko7QUFlSTtFQUNJLGFBQUE7RUFHQSxhQUFBO0VBQ0EsNEJBQUE7QUFmUjtBQWlCUTtFQUVJLFVBQUE7RUFDQSxpQkFBQTtBQWhCWjtBQW9CUTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHlEQUFBO0FBbEJaO0FBb0JZO0VBRUkseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFuQmhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIC8qIGNvbG9yLXNjaGVtZTogZGFyazsgKi9cXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cIixcIkB1c2UgJ3Jlc2V0LmNzcyc7XFxuQHVzZSAnc2FzczptYXRoJztcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzEsMTAwOzEsMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRwcmltYXJ5LWRhcms6ICMxODFhMWI7XFxuLy8gJHByaW1hcnktZGFyazogIzBmMTcyYTtcXG4kc2Vjb25kYXJ5LWRhcms6ICMyYjJmMzE7XFxuJHRoaXJkLWRhcms6ICMyNzI3MmE7XFxuJGRhcmstYmx1ZTogIzAwNGRhYTtcXG4kdGV4dC13aGl0ZTogI2Q4ZDRjZjtcXG4kY2FwdGlvbi13aGl0ZTogI2U4ZTZlMztcXG4kcHJpbWFyeS1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXG4vKiA9PT09PT09PT09IEVORCBEYXJrIE1vZGUgQ29sb3JzID09PT09PT09PT0gKi9cXG4vKiBUbyB1c2UgYmFja2dyb3VuZCBpbWFnZXMgdGhvdXJnaCAgdXJsLCB1c2UgaXQgaW4gSmF2YXNjaXBydCB1c2luZyBcXG5pbXBvcnQgYXNzZXQgc3RhdG1lbnQgYW5kIGUuc3R5bGUuYmFja2dyb3VuZCA9IGAke2ltcG9ydGVkSW1hZ2V9YCAqL1xcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZGFyaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWRhcms7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCAxZnIpIDRmcjtcXG59XFxuXFxuYXNpZGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDExMHB4IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuXFxuICAgIC5sb2dvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEycHg7XFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwcHg7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaDEge1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjRmciAxZnI7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgIH1cXG59XFxuXFxuLmxpbmtzLW9uZSxcXG4ubGlua3MtdHdvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCA1MHB4KTtcXG5cXG4gICAgbGkuc2VsZWN0ZWQge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktZGFyaztcXG4gICAgfVxcblxcbiAgICBsaSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgICAgICAvLyBwYWRkaW5nOiA4cHg7XFxuXFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1kYXJrO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5oZXJvIHtcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggYXV0bztcXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAvLyBnYXA6IDMycHg7XFxuICAgICAgICAvLyBwYWRkaW5nOiAzMnB4O1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQtZGFyaztcXG4gICAgICAgIGJveC1zaGFkb3c6IDMwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB9XFxuXFxuICAgIHNlY3Rpb24ge1xcbiAgICAgICAgcGFkZGluZzogMTZweDtcXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNWI7XFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIH1cXG59XFxuXFxuLnNlY3Rpb24tb25lIHtcXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxuXFxuICAgIC5zZWFyY2gtaWNvbiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcXG4gICAgfVxcbiAgICBzdmcge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgc3ZnOmFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIH1cXG5cXG4gICAgaW5wdXQge1xcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcblxcbiAgICAubm90aWZpY2F0aW9uLWljb24ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9maWxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5zZWN0aW9uLXR3byB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIC8vIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICAgIC8vIHBhZGRpbmc6IDhweDtcXG5cXG4gICAgZGl2IHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgLmdyZWV0aW5nIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuXFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3M3B4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5ncmVldGluZy1jb2wge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5idXR0b25zIHtcXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNTVweDtcXG5cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDRlZDg7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcblxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuXFxuICAgICAgICBoMiB7XFxuICAgICAgICAgICAgLy8gcGFkZGluZzogMTZweDtcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3RzIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ2FwOiAxNnB4O1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAlLCAxZnIpKTtcXG5cXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkIHtcXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJlZCwgeWVsbG93KTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjUyNDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAodHlwZW9mIGltcG9ydC5tZXRhLnVybCA9PT0gXCJzdHJpbmdcIikgc2NyaXB0VXJsID0gaW1wb3J0Lm1ldGEudXJsXG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2NzcydcbmltcG9ydCBrZWkgZnJvbSAnLi4vYXNzZXRzL0tlaS53ZWJwJ1xuXG5jb25zdCBwcm9maWxlUGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlIGltZycpXG5wcm9maWxlUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGtlaSlcblxuY29uc3QgZ3JlZXRpbmdQaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nIGltZycpXG5ncmVldGluZ1BpY3R1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCBrZWkpXG5cbmNvbnN0IHNpZGViYXJJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcblxuc2lkZWJhckljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgIH0pXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9