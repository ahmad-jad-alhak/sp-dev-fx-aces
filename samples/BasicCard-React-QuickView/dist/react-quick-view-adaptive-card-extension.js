(()=>{ var __RUSHSTACK_CURRENT_SCRIPT__ = document.currentScript; define("9de5431e-069e-4a2b-bd66-6dc732349d9f_0.0.1", ["@microsoft/sp-adaptive-card-extension-base","ReactQuickViewAdaptiveCardExtensionStrings","react","react-dom","@microsoft/sp-loader"], (__WEBPACK_EXTERNAL_MODULE__1340__, __WEBPACK_EXTERNAL_MODULE__4159__, __WEBPACK_EXTERNAL_MODULE__2650__, __WEBPACK_EXTERNAL_MODULE__2729__, __WEBPACK_EXTERNAL_MODULE__4037__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2367:
/*!**********************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/reactQuickView/quickView/QuickView.module.css ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 4726);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".container_62d1c083{padding:20px}.links_62d1c083 a{color:\"[theme:link, default:#03787c]\";color:var(--link);text-decoration:none}.links_62d1c083 a:hover{color:\"[theme:linkHovered, default: #014446]\";color:var(--linkHovered);text-decoration:underline}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvYWhtYWQvRGV2L1NQRngvQUNFcy9HaXRIdWIvQmFzaWNDYXJkLVJlYWN0LVF1aWNrVmlldy9zcmMvYWRhcHRpdmVDYXJkRXh0ZW5zaW9ucy9yZWFjdFF1aWNrVmlldy9xdWlja1ZpZXcvUXVpY2tWaWV3Lm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLG9CQUNFLFlBQUEsQ0FJQSxrQkFFRSxxQ0FBQSxDQUNBLGlCQUFBLENBRkEsb0JBRUEsQ0FFQSx3QkFFRSw2Q0FBQSxDQUNBLHdCQUFBLENBRkEseUJBRUEiLCJmaWxlIjoiUXVpY2tWaWV3Lm1vZHVsZS5jc3MifQ== */", true);


/***/ }),

/***/ 244:
/*!******************************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/reactQuickView/ReactQuickViewAdaptiveCardExtension.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUICK_VIEW_REGISTRY_ID: () => (/* binding */ QUICK_VIEW_REGISTRY_ID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-adaptive-card-extension-base */ 1340);
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cardView_CardView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardView/CardView */ 9960);
/* harmony import */ var _quickView_QuickView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickView/QuickView */ 928);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CARD_VIEW_REGISTRY_ID = 'ReactQuickView_CARD_VIEW';
var QUICK_VIEW_REGISTRY_ID = 'ReactQuickView_QUICK_VIEW';
var ReactQuickViewAdaptiveCardExtension = /** @class */ (function (_super) {
    __extends(ReactQuickViewAdaptiveCardExtension, _super);
    function ReactQuickViewAdaptiveCardExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactQuickViewAdaptiveCardExtension.prototype.onInit = function () {
        this.state = {};
        // registers the card view to be shown in a dashboard
        this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, function () { return new _cardView_CardView__WEBPACK_IMPORTED_MODULE_1__.CardView(); });
        // registers the quick view to open via QuickView action
        this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, function () { return new _quickView_QuickView__WEBPACK_IMPORTED_MODULE_2__.QuickView(); });
        return Promise.resolve();
    };
    ReactQuickViewAdaptiveCardExtension.prototype.loadPropertyPaneResources = function () {
        var _this = this;
        return __webpack_require__.e(/*! import() | ReactQuickView-property-pane */ "ReactQuickView-property-pane").then(__webpack_require__.bind(__webpack_require__, /*! ./ReactQuickViewPropertyPane */ 4707))
            .then(function (component) {
            _this._deferredPropertyPane = new component.ReactQuickViewPropertyPane();
        });
    };
    ReactQuickViewAdaptiveCardExtension.prototype.renderCard = function () {
        return CARD_VIEW_REGISTRY_ID;
    };
    ReactQuickViewAdaptiveCardExtension.prototype.getPropertyPaneConfiguration = function () {
        var _a;
        return (_a = this._deferredPropertyPane) === null || _a === void 0 ? void 0 : _a.getPropertyPaneConfiguration();
    };
    return ReactQuickViewAdaptiveCardExtension;
}(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__.BaseAdaptiveCardExtension));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactQuickViewAdaptiveCardExtension);


/***/ }),

/***/ 9960:
/*!************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/reactQuickView/cardView/CardView.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardView: () => (/* binding */ CardView)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-adaptive-card-extension-base */ 1340);
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ReactQuickViewAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ReactQuickViewAdaptiveCardExtensionStrings */ 4159);
/* harmony import */ var ReactQuickViewAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ReactQuickViewAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReactQuickViewAdaptiveCardExtension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ReactQuickViewAdaptiveCardExtension */ 244);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CardView = /** @class */ (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardView.prototype, "cardViewParameters", {
        get: function () {
            return (0,_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__.BasicCardView)({
                cardBar: {
                    componentName: 'cardBar',
                    title: this.properties.title
                },
                header: {
                    componentName: 'text',
                    text: ReactQuickViewAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__.PrimaryText
                },
                footer: {
                    componentName: 'cardButton',
                    title: ReactQuickViewAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__.QuickViewButton,
                    action: {
                        type: 'QuickView',
                        parameters: {
                            view: _ReactQuickViewAdaptiveCardExtension__WEBPACK_IMPORTED_MODULE_2__.QUICK_VIEW_REGISTRY_ID
                        }
                    }
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "onCardSelection", {
        get: function () {
            return {
                type: 'ExternalLink',
                parameters: {
                    target: 'https://www.bing.com'
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return CardView;
}(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__.BaseComponentsCardView));



/***/ }),

/***/ 928:
/*!**************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/reactQuickView/quickView/QuickView.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickView: () => (/* binding */ QuickView)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-adaptive-card-extension-base */ 1340);
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 2650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ 2729);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_QuickViewComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/QuickViewComponent */ 6682);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var QuickView = /** @class */ (function (_super) {
    __extends(QuickView, _super);
    function QuickView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickView.prototype.render = function () {
        if (this.domElement) {
            var element = react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_QuickViewComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
                context: this.context,
                listName: this.properties.listName // Example data passed as props
            });
            react_dom__WEBPACK_IMPORTED_MODULE_2__.render(element, this.domElement); // Render the React component in the DOM
        }
        else {
            console.error("domElement is undefined");
        }
    };
    return QuickView;
}(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__.BaseWebQuickView));



/***/ }),

/***/ 1813:
/*!**************************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/reactQuickView/quickView/QuickView.module.scss.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* tslint:disable */
__webpack_require__(/*! ./QuickView.module.css */ 2367);
var styles = {
    container: 'container_62d1c083',
    links: 'links_62d1c083'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);
/* tslint:enable */ 


/***/ }),

/***/ 6682:
/*!**********************************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/reactQuickView/quickView/components/QuickViewComponent.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 2650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuickView_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../QuickView.module.scss */ 1813);
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp */ 7881);
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/webs */ 3867);
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/items */ 9721);
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp/lists */ 2033);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var QuickViewComponent = function (props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState([]), listItems = _a[0], setListItems = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__.useState(null), error = _c[0], setError = _c[1];
    // Initialize PnPjs using the SPFx context
    var sp = (0,_pnp_sp__WEBPACK_IMPORTED_MODULE_2__.spfi)().using((0,_pnp_sp__WEBPACK_IMPORTED_MODULE_2__.SPFx)(props.context));
    // Fetch the list items on component mount
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var fetchListItems = function () { return __awaiter(void 0, void 0, void 0, function () {
            var items, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Check if listName is empty and set an error message
                        if (!props.listName.trim()) {
                            setError('The list name should be configured in the property pane.');
                            setLoading(false);
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        setError(null); // Reset error state before fetching
                        setLoading(true); // Set loading to true while fetching
                        return [4 /*yield*/, sp.web.lists.getByTitle(props.listName).items()];
                    case 2:
                        items = _a.sent();
                        setListItems(items); // Update state with fetched items
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error fetching list items:', error_1);
                        setError('An error occurred while fetching the list items. Please try again later.');
                        return [3 /*break*/, 5];
                    case 4:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fetchListItems();
    }, [props.listName]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _QuickView_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "React-Based QuickView: Displaying List Items"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
            "List Name: ",
            props.listName),
        loading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading items...")) : error ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, error) // Display error message if an error occurred or list name is missing
        ) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, listItems.length > 0 ? (listItems.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: item.Id },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, item.Title),
            " ")); })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "No items found in the list."))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickViewComponent);


/***/ }),

/***/ 4726:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStyles: () => (/* binding */ loadStyles)
/* harmony export */ });
/* unused harmony exports configureLoadStyles, configureRunMode, flush, loadTheme, clearStyles, detokenize, splitStyles */
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? __webpack_require__.g : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* Mode.sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* Mode.async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* ClearStyleOptions.all */; }
    if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* ClearStyleOptions.onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}


/***/ }),

/***/ 1340:
/*!*************************************************************!*\
  !*** external "@microsoft/sp-adaptive-card-extension-base" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__1340__;

/***/ }),

/***/ 4037:
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__4037__;

/***/ }),

/***/ 4159:
/*!*************************************************************!*\
  !*** external "ReactQuickViewAdaptiveCardExtensionStrings" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__4159__;

/***/ }),

/***/ 2650:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__2650__;

/***/ }),

/***/ 2729:
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__2729__;

/***/ }),

/***/ 4340:
/*!**********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/node_modules/tslib/tslib.es6.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __decorate: () => (/* binding */ __decorate)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ }),

/***/ 4346:
/*!***************************************************************!*\
  !*** ./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __decorate: () => (/* binding */ __decorate)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ }),

/***/ 4337:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/copy-from.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyFrom: () => (/* binding */ CopyFrom)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ 2165);
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../timeline.js */ 447);


/**
 * Behavior that will copy all the observers in the source timeline and apply it to the incoming instance
 *
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @param filter If provided filters the moments from which the observers are copied. It should return true for each moment to include.
 * @returns The mutated this
 */
function CopyFrom(source, behavior = "append", filter) {
    return (instance) => {
        return Reflect.apply(copyObservers, instance, [source, behavior, filter]);
    };
}
/**
 * Function with implied this allows us to access protected members
 *
 * @param this The timeline whose observers we will copy
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @returns The mutated this
 */
function copyObservers(source, behavior, filter) {
    if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(source) || !(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(source.observers)) {
        return this;
    }
    if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunc)(filter)) {
        filter = () => true;
    }
    const clonedSource = (0,_timeline_js__WEBPACK_IMPORTED_MODULE_0__.cloneObserverCollection)(source.observers);
    const keys = Object.keys(clonedSource).filter(filter);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const on = this.on[key];
        if (behavior === "replace") {
            on.clear();
        }
        const momentObservers = clonedSource[key];
        momentObservers.forEach(v => on(v));
    }
    return this;
}


/***/ }),

/***/ 1971:
/*!*****************************************!*\
  !*** ./node_modules/@pnp/core/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyFrom: () => (/* reexport safe */ _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_4__.CopyFrom),
/* harmony export */   PnPClientStorage: () => (/* reexport safe */ _storage_js__WEBPACK_IMPORTED_MODULE_0__.PnPClientStorage),
/* harmony export */   Timeline: () => (/* reexport safe */ _timeline_js__WEBPACK_IMPORTED_MODULE_3__.Timeline),
/* harmony export */   asyncBroadcast: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.asyncBroadcast),
/* harmony export */   asyncReduce: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.asyncReduce),
/* harmony export */   broadcast: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.broadcast),
/* harmony export */   combine: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.combine),
/* harmony export */   dateAdd: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.dateAdd),
/* harmony export */   delay: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.delay),
/* harmony export */   getGUID: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.getGUID),
/* harmony export */   getHashCode: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.getHashCode),
/* harmony export */   hOP: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.hOP),
/* harmony export */   isArray: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.isArray),
/* harmony export */   isFunc: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.isFunc),
/* harmony export */   isUrlAbsolute: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.isUrlAbsolute),
/* harmony export */   jsS: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.jsS),
/* harmony export */   lifecycle: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.lifecycle),
/* harmony export */   noInherit: () => (/* reexport safe */ _timeline_js__WEBPACK_IMPORTED_MODULE_3__.noInherit),
/* harmony export */   objectDefinedNotNull: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull),
/* harmony export */   reduce: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.reduce),
/* harmony export */   request: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.request),
/* harmony export */   stringIsNullOrEmpty: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.stringIsNullOrEmpty)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ 1922);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ 2165);
/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moments.js */ 7955);
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ 447);
/* harmony import */ var _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behaviors/copy-from.js */ 4337);




/**
 * Behavior exports
 */




/***/ }),

/***/ 7955:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/moments.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asyncBroadcast: () => (/* binding */ asyncBroadcast),
/* harmony export */   asyncReduce: () => (/* binding */ asyncReduce),
/* harmony export */   broadcast: () => (/* binding */ broadcast),
/* harmony export */   lifecycle: () => (/* binding */ lifecycle),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   request: () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ 2165);

/**
 * Emits to all registered observers the supplied arguments. Any values returned by the observers are ignored
 *
 * @returns void
 */
function broadcast() {
    return function (observers, ...args) {
        const obs = [...observers];
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
    };
}
/**
 * Defines a moment that executes each observer asynchronously in parallel awaiting all promises to resolve or reject before continuing
 *
 * @returns The final set of arguments
 */
function asyncBroadcast() {
    return async function (observers, ...args) {
        // get our initial values
        const r = args;
        const obs = [...observers];
        const promises = [];
        for (let i = 0; i < obs.length; i++) {
            promises.push(Reflect.apply(obs[i], this, r));
        }
        return Promise.all(promises);
    };
}
/**
 * Defines a moment that executes each observer synchronously, passing the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function reduce() {
    return function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((params, func) => Reflect.apply(func, this, params), args);
    };
}
/**
 * Defines a moment that executes each observer asynchronously, awaiting the result and passes the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function asyncReduce() {
    return async function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((prom, func) => prom.then((params) => Reflect.apply(func, this, params)), Promise.resolve(args));
    };
}
/**
 * Defines a moment where the first registered observer is used to asynchronously execute a request, returning a single result
 * If no result is returned (undefined) no further action is taken and the result will be undefined (i.e. additional observers are not used)
 *
 * @returns The result returned by the first registered observer
 */
function request() {
    return async function (observers, ...args) {
        if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(observers) || observers.length < 1) {
            return undefined;
        }
        const handler = observers[0];
        return Reflect.apply(handler, this, args);
    };
}
/**
 * Defines a special moment used to configure the timeline itself before starting. Each observer is executed in order,
 * possibly modifying the "this" instance, with the final product returned
 *
 */
function lifecycle() {
    return function (observers, ...args) {
        const obs = [...observers];
        // process each handler which updates our instance in order
        // very similar to asyncReduce but the state is the object itself
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
        return this;
    };
}


/***/ }),

/***/ 1922:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/storage.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PnPClientStorage: () => (/* binding */ PnPClientStorage)
/* harmony export */ });
/* unused harmony export PnPClientStorageWrapper */
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ 2165);

let storageShim;
function getStorageShim() {
    if (typeof storageShim === "undefined") {
        storageShim = new MemoryStorage();
    }
    return storageShim;
}
/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
class PnPClientStorageWrapper {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    constructor(store) {
        this.store = store;
        this.enabled = this.test();
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get(key) {
        if (!this.enabled) {
            return null;
        }
        const o = this.store.getItem(key);
        if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(o)) {
            return null;
        }
        const persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    }
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    }
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    }
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    async getOrPut(key, getter, expire) {
        if (!this.enabled) {
            return getter();
        }
        let o = this.get(key);
        if (o === null) {
            o = await getter();
            this.put(key, o, expire);
        }
        return o;
    }
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    async deleteExpired() {
        if (!this.enabled) {
            return;
        }
        for (let i = 0; i < this.store.length; i++) {
            const key = this.store.key(i);
            if (key !== null) {
                // test the stored item to see if we stored it
                if (/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) {
                    // get those items as get will delete from cache if they are expired
                    await this.get(key);
                }
            }
        }
    }
    /**
     * Used to determine if the wrapped storage is available currently
     */
    test() {
        const str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Creates the persistable to store
     */
    createPersistable(o, expire) {
        if (expire === undefined) {
            expire = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "minute", 5);
        }
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.jsS)({ pnp: 1, expiration: expire, value: o });
    }
}
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
class MemoryStorage {
    constructor(_store = new Map()) {
        this._store = _store;
    }
    get length() {
        return this._store.size;
    }
    clear() {
        this._store.clear();
    }
    getItem(key) {
        return this._store.get(key);
    }
    key(index) {
        return Array.from(this._store)[index][0];
    }
    removeItem(key) {
        this._store.delete(key);
    }
    setItem(key, data) {
        this._store.set(key, data);
    }
}
/**
 * A class that will establish wrappers for both local and session storage, substituting basic memory storage for nodejs
 */
class PnPClientStorage {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    constructor(_local = null, _session = null) {
        this._local = _local;
        this._session = _session;
    }
    /**
     * Provides access to the local storage of the browser
     */
    get local() {
        if (this._local === null) {
            this._local = new PnPClientStorageWrapper(typeof localStorage === "undefined" ? getStorageShim() : localStorage);
        }
        return this._local;
    }
    /**
     * Provides access to the session storage of the browser
     */
    get session() {
        if (this._session === null) {
            this._session = new PnPClientStorageWrapper(typeof sessionStorage === "undefined" ? getStorageShim() : sessionStorage);
        }
        return this._session;
    }
}


/***/ }),

/***/ 447:
/*!********************************************!*\
  !*** ./node_modules/@pnp/core/timeline.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   cloneObserverCollection: () => (/* binding */ cloneObserverCollection),
/* harmony export */   noInherit: () => (/* binding */ noInherit)
/* harmony export */ });
/* unused harmony export once */
/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moments.js */ 7955);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ 2165);


/**
 * Field name to hold any flags on observer functions used to modify their behavior
 */
const flags = Symbol.for("ObserverLifecycleFlags");
/**
 * Creates a filter function for use in Array.filter that will filter OUT any observers with the specified [flag]
 *
 * @param flag The flag used to exclude observers
 * @returns An Array.filter function
 */
// eslint-disable-next-line no-bitwise
const byFlag = (flag) => ((observer) => !((observer[flags] || 0) & flag));
/**
 * Creates an observer lifecycle modification flag application function
 * @param flag The flag to the bound function should add
 * @returns A function that can be used to apply [flag] to any valid observer
 */
const addFlag = (flag) => ((observer) => {
    // eslint-disable-next-line no-bitwise
    observer[flags] = (observer[flags] || 0) | flag;
    return observer;
});
/**
 * Observer lifecycle modifier that indicates this observer should NOT be inherited by any child
 * timelines.
 */
const noInherit = addFlag(1 /* ObserverLifecycleFlags.noInherit */);
/**
 * Observer lifecycle modifier that indicates this observer should only fire once per instance, it is then removed.
 *
 * Note: If you have a parent and child timeline "once" will affect both and the observer will fire once for a parent lifecycle
 * and once for a child lifecycle
 */
const once = addFlag(2 /* ObserverLifecycleFlags.once */);
/**
 * Timeline represents a set of operations executed in order of definition,
 * with each moment's behavior controlled by the implementing function
 */
class Timeline {
    /**
     * Creates a new instance of Timeline with the supplied moments and optionally any observers to include
     *
     * @param moments The moment object defining this timeline
     * @param observers Any observers to include (optional)
     */
    constructor(moments, observers = {}) {
        this.moments = moments;
        this.observers = observers;
        this._onProxy = null;
        this._emitProxy = null;
        this._inheritingObservers = true;
    }
    /**
     * Apply the supplied behavior(s) to this timeline
     *
     * @param behaviors One or more behaviors
     * @returns `this` Timeline
     */
    using(...behaviors) {
        for (let i = 0; i < behaviors.length; i++) {
            behaviors[i](this);
        }
        return this;
    }
    /**
     * Property allowing access to manage observers on moments within this timeline
     */
    get on() {
        if (this._onProxy === null) {
            this._onProxy = new Proxy(this, {
                get: (target, p) => Object.assign((handler) => {
                    target.cloneObserversOnChange();
                    addObserver(target.observers, p, handler, 1 /* ObserverAddBehavior.Add */);
                    return target;
                }, {
                    toArray: () => {
                        return Reflect.has(target.observers, p) ? [...Reflect.get(target.observers, p)] : [];
                    },
                    replace: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, 3 /* ObserverAddBehavior.Replace */);
                        return target;
                    },
                    prepend: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, 2 /* ObserverAddBehavior.Prepend */);
                        return target;
                    },
                    clear: () => {
                        if (Reflect.has(target.observers, p)) {
                            target.cloneObserversOnChange();
                            // we trust ourselves that this will be an array
                            target.observers[p].length = 0;
                            return true;
                        }
                        return false;
                    },
                }),
            });
        }
        return this._onProxy;
    }
    /**
     * Shorthand method to emit a logging event tied to this timeline
     *
     * @param message The message to log
     * @param level The level at which the message applies
     */
    log(message, level = 0) {
        this.emit.log(message, level);
    }
    /**
     * Shorthand method to emit an error event tied to this timeline
     *
     * @param e Optional. Any error object to emit. If none is provided no emit occurs
     */
    error(e) {
        if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(e)) {
            this.emit.error(e);
        }
    }
    /**
     * Property allowing access to invoke a moment from within this timeline
     */
    get emit() {
        if (this._emitProxy === null) {
            this._emitProxy = new Proxy(this, {
                get: (target, p) => (...args) => {
                    // handle the case where no observers registered for the target moment
                    const observers = Reflect.has(target.observers, p) ? Reflect.get(target.observers, p) : [];
                    if ((!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(observers) || observers.length < 1) && p === "error") {
                        // if we are emitting an error, and no error observers are defined, we throw
                        throw Error(`Unhandled Exception: ${args[0]}`);
                    }
                    try {
                        // default to broadcasting any events without specific impl (will apply to log and error)
                        const moment = Reflect.has(target.moments, p) ? Reflect.get(target.moments, p) : p === "init" || p === "dispose" ? (0,_moments_js__WEBPACK_IMPORTED_MODULE_1__.lifecycle)() : (0,_moments_js__WEBPACK_IMPORTED_MODULE_1__.broadcast)();
                        // pass control to the individual moment's implementation
                        return Reflect.apply(moment, target, [observers, ...args]);
                    }
                    catch (e) {
                        if (p !== "error") {
                            this.error(e);
                        }
                        else {
                            // if all else fails, re-throw as we are getting errors from error observers meaning something is sideways
                            throw e;
                        }
                    }
                    finally {
                        // here we need to remove any "once" observers
                        if (observers && observers.length > 0) {
                            Reflect.set(target.observers, p, observers.filter(byFlag(2 /* ObserverLifecycleFlags.once */)));
                        }
                    }
                },
            });
        }
        return this._emitProxy;
    }
    /**
     * Starts a timeline
     *
     * @description This method first emits "init" to allow for any needed initial conditions then calls execute with any supplied init
     *
     * @param init A value passed into the execute logic from the initiator of the timeline
     * @returns The result of this.execute
     */
    start(init) {
        // initialize our timeline
        this.emit.init();
        // get a ref to the promise returned by execute
        const p = this.execute(init);
        // attach our dispose logic
        p.finally(() => {
            try {
                // provide an opportunity for cleanup of the timeline
                this.emit.dispose();
            }
            catch (e) {
                // shouldn't happen, but possible dispose throws - which may be missed as the usercode await will have resolved.
                const e2 = Object.assign(Error("Error in dispose."), { innerException: e });
                this.error(e2);
            }
        }).catch(() => void (0));
        // give the promise back to the caller
        return p;
    }
    /**
     * By default a timeline references the same observer collection as a parent timeline,
     * if any changes are made to the observers this method first clones them ensuring we
     * maintain a local copy and de-ref the parent
     */
    cloneObserversOnChange() {
        if (this._inheritingObservers) {
            this._inheritingObservers = false;
            this.observers = cloneObserverCollection(this.observers);
        }
    }
}
/**
 * Adds an observer to a given target
 *
 * @param target The object to which events are registered
 * @param moment The name of the moment to which the observer is registered
 * @param addBehavior Determines how the observer is added to the collection
 *
 */
function addObserver(target, moment, observer, addBehavior) {
    if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunc)(observer)) {
        throw Error("Observers must be functions.");
    }
    if (!Reflect.has(target, moment)) {
        // if we don't have a registration for this moment, then we just add a new prop
        target[moment] = [observer];
    }
    else {
        // if we have an existing property then we follow the specified behavior
        switch (addBehavior) {
            case 1 /* ObserverAddBehavior.Add */:
                target[moment].push(observer);
                break;
            case 2 /* ObserverAddBehavior.Prepend */:
                target[moment].unshift(observer);
                break;
            case 3 /* ObserverAddBehavior.Replace */:
                target[moment].length = 0;
                target[moment].push(observer);
                break;
        }
    }
    return target[moment];
}
function cloneObserverCollection(source) {
    return Reflect.ownKeys(source).reduce((clone, key) => {
        clone[key] = [...source[key].filter(byFlag(1 /* ObserverLifecycleFlags.noInherit */))];
        return clone;
    }, {});
}


/***/ }),

/***/ 2165:
/*!****************************************!*\
  !*** ./node_modules/@pnp/core/util.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   dateAdd: () => (/* binding */ dateAdd),
/* harmony export */   delay: () => (/* binding */ delay),
/* harmony export */   getGUID: () => (/* binding */ getGUID),
/* harmony export */   getHashCode: () => (/* binding */ getHashCode),
/* harmony export */   hOP: () => (/* binding */ hOP),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isFunc: () => (/* binding */ isFunc),
/* harmony export */   isUrlAbsolute: () => (/* binding */ isUrlAbsolute),
/* harmony export */   jsS: () => (/* binding */ jsS),
/* harmony export */   objectDefinedNotNull: () => (/* binding */ objectDefinedNotNull),
/* harmony export */   stringIsNullOrEmpty: () => (/* binding */ stringIsNullOrEmpty)
/* harmony export */ });
/* unused harmony exports getRandomString, parseToAtob */
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    let ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine(...paths) {
    return paths
        .filter(path => !stringIsNullOrEmpty(path))
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    const text = new Array(chars);
    for (let i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* eslint-disable no-bitwise */
function getGUID() {
    let d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* eslint-enable no-bitwise */
/**
 * Determines if a given value is a function
 *
 * @param f The thing to test for functionness
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunc(f) {
    return typeof f === "function";
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray(array);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return typeof s === "undefined" || s === null || s.length < 1;
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * @returns validates and returns a valid atob conversion
*/
function parseToAtob(str) {
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
    try {
        // test if str has been JSON.stringified
        const parsed = JSON.parse(str);
        if (base64Regex.test(parsed)) {
            return atob(parsed);
        }
        return null;
    }
    catch (err) {
        // Not a valid JSON string, check if it's a standalone Base64 string
        return base64Regex.test(str) ? atob(str) : null;
    }
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
/* eslint-disable no-bitwise */
function getHashCode(s) {
    let hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (let i = 0; i < s.length; i++) {
        const chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/* eslint-enable no-bitwise */
/**
 * Waits a specified number of milliseconds before resolving
 *
 * @param ms Number of ms to wait
 */
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


/***/ }),

/***/ 8786:
/*!****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/browser-fetch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserFetchWithRetry: () => (/* binding */ BrowserFetchWithRetry)
/* harmony export */ });
/* unused harmony export BrowserFetch */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers.js */ 5102);


function BrowserFetch(props) {
    const { replace } = {
        replace: true,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            this.log(`Fetch: ${init.method} ${url.toString()}`, 0);
            return fetch(url.toString(), init);
        });
        return instance;
    };
}
function BrowserFetchWithRetry(props) {
    const { interval, replace, retries } = {
        replace: true,
        interval: 200,
        retries: 3,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            let response;
            let wait = interval;
            let count = 0;
            let lastErr;
            const retry = async () => {
                // if we've tried too many times, throw
                if (count >= retries) {
                    throw lastErr || new _parsers_js__WEBPACK_IMPORTED_MODULE_1__.HttpRequestError(`Retry count exceeded (${retries}) for this request. ${response.status}: ${response.statusText};`, response);
                }
                count++;
                if (typeof response === "undefined" || (response === null || response === void 0 ? void 0 : response.status) === 429 || (response === null || response === void 0 ? void 0 : response.status) === 503 || (response === null || response === void 0 ? void 0 : response.status) === 504) {
                    // this is our first try and response isn't defined yet
                    // we have been throttled OR http status code 503 or 504, we can retry this
                    if (typeof response !== "undefined") {
                        // this isn't our first try so we need to calculate delay
                        if (response.headers.has("Retry-After")) {
                            // if we have gotten a header, use that value as the delay value in seconds
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            wait = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                        }
                        else {
                            // Increment our counters.
                            wait *= 2;
                        }
                        this.log(`Attempt #${count} to retry request which failed with ${response.status}: ${response.statusText}`, 0);
                        await (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.delay)(wait);
                    }
                    try {
                        const u = url.toString();
                        this.log(`Fetch: ${init.method} ${u}`, 0);
                        response = await fetch(u, init);
                        // if we got a good response, return it, otherwise see if we can retry
                        return response.ok ? response : retry();
                    }
                    catch (err) {
                        if (/AbortError/.test(err.name)) {
                            // don't retry aborted requests
                            throw err;
                        }
                        // if there is no network the response is undefined and err is all we have
                        // so we grab the err and save it to throw if we exceed the number of retries
                        // #2226 first reported this
                        lastErr = err;
                        return retry();
                    }
                }
                else {
                    return response;
                }
            };
            // this the the first call to retry that starts the cycle
            // response is undefined and the other values have their defaults
            return retry();
        });
        return instance;
    };
}


/***/ }),

/***/ 7395:
/*!**********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching-pessimistic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CachingPessimisticRefresh */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queryable.js */ 7111);
/* harmony import */ var _caching_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching.js */ 6936);



/**
 * Pessimistic Caching Behavior
 * Always returns the cached value if one exists but asynchronously executes the call and updates the cache.
 * If a expireFunc is included then the cache update only happens if the cache has expired.
 *
 * @param store Use local or session storage
 * @param keyFactory: a function that returns the key for the cache value, if not provided a default hash of the url will be used
 * @param expireFunc: a function that returns a date of expiration for the cache value, if not provided the cache never expires but is always updated.
 */
function CachingPessimisticRefresh(props) {
    return (instance) => {
        const pre = async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = (0,_caching_js__WEBPACK_IMPORTED_MODULE_2__.bindCachingCore)(url, init, props);
            if (!shouldCache) {
                return [url, init, result];
            }
            const cached = getCachedValue();
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(cached)) {
                // set our result
                result = cached;
                setTimeout(async () => {
                    const q = new _queryable_js__WEBPACK_IMPORTED_MODULE_1__.Queryable(this);
                    const a = q.on.pre.toArray();
                    q.on.pre.clear();
                    // filter out this pre handler from the original queryable as we don't want to re-run it
                    a.filter(v => v !== pre).map(v => q.on.pre(v));
                    // in this case the init should contain the correct "method"
                    const value = await q(init);
                    setCachedValue(value);
                }, 0);
            }
            else {
                // register the post handler to cache the value as there is not one already in the cache
                // and we need to run this request as normal
                this.on.post((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.noInherit)(async function (url, result) {
                    setCachedValue(result);
                    return [url, result];
                }));
            }
            return [url, init, result];
        };
        instance.on.pre(pre);
        return instance;
    };
}


/***/ }),

/***/ 6936:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindCachingCore: () => (/* binding */ bindCachingCore)
/* harmony export */ });
/* unused harmony exports CacheAlways, CacheNever, CacheKey, Caching */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

/**
 * Behavior that forces caching for the request regardless of "method"
 *
 * @returns TimelinePipe
 */
function CacheAlways() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheAlways": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that blocks caching for the request regardless of "method"
 *
 * Note: If both Caching and CacheAlways are present AND CacheNever is present the request will not be cached
 * as we give priority to the CacheNever case
 *
 * @returns TimelinePipe
 */
function CacheNever() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheNever": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that allows you to specify a cache key for a request
 *
 * @param key The key to use for caching
  */
function CacheKey(key) {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheKey": key };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Adds caching to the requests based on the supplied props
 *
 * @param props Optional props that configure how caching will work
 * @returns TimelinePipe used to configure requests
 */
function Caching(props) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = bindCachingCore(url, init, props);
            // only cache get requested data or where the CacheAlways header is present (allows caching of POST requests)
            if (shouldCache) {
                const cached = getCachedValue();
                // we need to ensure that result stays "undefined" unless we mean to set null as the result
                if (cached === null) {
                    // if we don't have a cached result we need to get it after the request is sent. Get the raw value (un-parsed) to store into cache
                    this.on.post((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.noInherit)(async function (url, result) {
                        setCachedValue(result);
                        return [url, result];
                    }));
                }
                else {
                    result = cached;
                }
            }
            return [url, init, result];
        });
        return instance;
    };
}
const storage = new _pnp_core__WEBPACK_IMPORTED_MODULE_0__.PnPClientStorage();
/**
 * Based on the supplied properties, creates bound logic encapsulating common caching configuration
 * sharable across implementations to more easily provide consistent behavior across behaviors
 *
 * @param props Any caching props used to initialize the core functions
 */
function bindCachingCore(url, init, props) {
    var _a, _b;
    const { store, keyFactory, expireFunc } = {
        store: "local",
        keyFactory: (url) => (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getHashCode)(url.toLowerCase()).toString(),
        expireFunc: () => (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "minute", 5),
        ...props,
    };
    const s = store === "session" ? storage.session : storage.local;
    const key = (init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheKey"]) ? init.headers["X-PnP-CacheKey"] : keyFactory(url);
    return [
        // calculated value indicating if we should cache this request
        (/get/i.test(init.method) || ((_a = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheAlways"]) !== null && _a !== void 0 ? _a : false)) && !((_b = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheNever"]) !== null && _b !== void 0 ? _b : false),
        // gets the cached value
        () => s.get(key),
        // sets the cached value
        (value) => s.put(key, value, expireFunc(url)),
    ];
}


/***/ }),

/***/ 238:
/*!*************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/cancelable.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports asCancelableScope, cancelableScope, Cancelable, CancelAction */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

/**
 * Cancelable is a fairly complex behavior as there is a lot to consider through multiple timelines. We have
 * two main cases:
 *
 * 1. basic method that is a single call and returns the result of an operation (return spPost(...))
 * 2. complex method that has multiple async calls within
 *
 * 1. For basic calls the cancel info is attached in init as it is only involved within a single request.
 *    This works because there is only one request and the cancel logic doesn't need to persist across
 *    inheriting instances. Also, many of these requests are so fast canceling is likely unnecessary
 *
 * 2. Complex method present a larger challenge because they are comprised of > 1 request and the promise
 *    that is actually returned to the user is not directly from one of our calls. This promise is the
 *    one "created" by the language when you await. For complex methods we have two things that solve these
 *    needs.
 *
 *    The first is the use of either the cancelableScope decorator or the asCancelableScope method
 *    wrapper. These create an upper level cancel info that is then shared across the child requests within
 *    the complex method. Meaning if I do a files.addChunked the same cancel info (and cancel method)
 *    are set on the current "this" which is user object on which the method was called. This info is then
 *    passed down to any child requests using the original "this" as a base using the construct moment.
 *
 *    The CancelAction behavior is used to apply additional actions to a request once it is canceled. For example
 *    in the case of uploading files chunked in sp we cancel the upload by id.
 */
// this is a special moment used to broadcast when a request is canceled
const MomentName = "__CancelMoment__";
// this value is used to track cancel state and the value is represetented by IScopeInfo
const ScopeId = Symbol.for("CancelScopeId");
// module map of all currently tracked cancel scopes
const cancelScopes = new Map();
/**
 * This method is bound to a scope id and used as the cancel method exposed to the user via cancelable promise
 *
 * @param this unused, the current promise
 * @param scopeId Id bound at creation time
 */
async function cancelPrimitive(scopeId) {
    const scope = cancelScopes.get(scopeId);
    scope.controller.abort();
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(scope === null || scope === void 0 ? void 0 : scope.actions)) {
        scope.actions.map(action => scope.currentSelf.on[MomentName](action));
    }
    try {
        await scope.currentSelf.emit[MomentName]();
    }
    catch (e) {
        scope.currentSelf.log(`Error in cancel: ${e}`, 3);
    }
}
/**
 * Creates a new scope id, sets it on the instance's ScopeId property, and adds the info to the map
 *
 * @returns the new scope id (GUID)
 */
function createScope(instance) {
    const id = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
    instance[ScopeId] = id;
    cancelScopes.set(id, {
        cancel: cancelPrimitive.bind({}, id),
        actions: [],
        controller: null,
        currentSelf: instance,
    });
    return id;
}
/**
 * Function wrapper that turns the supplied function into a cancellation scope
 *
 * @param func Func to wrap
 * @returns The same func signature, wrapped with our cancel scoping logic
 */
const asCancelableScope = (func) => {
    return function (...args) {
        // ensure we have setup "this" to cancel
        // 1. for single requests the value is set in the behavior's init observer
        // 2. for complex requests the value is set here
        if (!Reflect.has(this, ScopeId)) {
            createScope(this);
        }
        // execute the original function, but don't await it
        const result = func.apply(this, args).finally(() => {
            // remove any cancel scope values tied to this instance
            cancelScopes.delete(this[ScopeId]);
            delete this[ScopeId];
        });
        // ensure the synthetic promise from a complex method has a cancel method
        result.cancel = cancelScopes.get(this[ScopeId]).cancel;
        return result;
    };
};
/**
 * Decorator used to mark multi-step methods to ensure all subrequests are properly cancelled
 */
function cancelableScope(_target, _propertyKey, descriptor) {
    // wrapping the original method
    descriptor.value = asCancelableScope(descriptor.value);
}
/**
 * Allows requests to be canceled by the caller by adding a cancel method to the Promise returned by the library
 *
 * @returns Timeline pipe to setup canelability
 */
function Cancelable() {
    if (!AbortController) {
        throw Error("The current environment appears to not support AbortController, please include a suitable polyfill.");
    }
    return (instance) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        instance.on.construct(function (init, path) {
            if (typeof init !== "string") {
                const parent = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(init) ? init[0] : init;
                if (Reflect.has(parent, ScopeId)) {
                    // ensure we carry over the scope id to the new instance from the parent
                    this[ScopeId] = parent[ScopeId];
                }
                // define the moment's implementation
                this.moments[MomentName] = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncBroadcast)();
            }
        });
        // init our queryable to support cancellation
        instance.on.init(function () {
            if (!Reflect.has(this, ScopeId)) {
                // ensure we have setup "this" to cancel
                // 1. for single requests this will set the value
                // 2. for complex requests the value is set in asCancelableScope
                const id = createScope(this);
                // if we are creating the scope here, we have not created it within asCancelableScope
                // meaning the finally handler there will not delete the tracked scope reference
                this.on.dispose(() => {
                    cancelScopes.delete(id);
                });
            }
            this.on[this.InternalPromise]((promise) => {
                // when a new promise is created add a cancel method
                promise.cancel = cancelScopes.get(this[ScopeId]).cancel;
                return [promise];
            });
        });
        instance.on.pre(async function (url, init, result) {
            // grab the current scope, update the controller and currentSelf
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we are here without a scope we are likely running a CancelAction request so we just ignore canceling
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(existingScope)) {
                const controller = new AbortController();
                existingScope.controller = controller;
                existingScope.currentSelf = this;
                if (init.signal) {
                    // we do our best to hook our logic to the existing signal
                    init.signal.addEventListener("abort", () => {
                        existingScope.cancel();
                    });
                }
                else {
                    init.signal = controller.signal;
                }
            }
            return [url, init, result];
        });
        // clean up any cancel info from the object after the request lifecycle is complete
        instance.on.dispose(function () {
            delete this[ScopeId];
            delete this.moments[MomentName];
        });
        return instance;
    };
}
/**
 * Allows you to define an action that is run when a request is cancelled
 *
 * @param action The action to run
 * @returns A timeline pipe used in the request lifecycle
 */
function CancelAction(action) {
    return (instance) => {
        instance.on.pre(async function (...args) {
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we don't have a scope this request is not using Cancelable so we do nothing
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(existingScope)) {
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(existingScope.actions)) {
                    existingScope.actions = [];
                }
                if (existingScope.actions.indexOf(action) < 0) {
                    existingScope.actions.push(action);
                }
            }
            return args;
        });
        return instance;
    };
}


/***/ }),

/***/ 6046:
/*!*****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/inject-headers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectHeaders: () => (/* binding */ InjectHeaders)
/* harmony export */ });
function InjectHeaders(headers, prepend = false) {
    return (instance) => {
        const f = async function (url, init, result) {
            init.headers = { ...init.headers, ...headers };
            return [url, init, result];
        };
        if (prepend) {
            instance.on.pre.prepend(f);
        }
        else {
            instance.on.pre(f);
        }
        return instance;
    };
}


/***/ }),

/***/ 5102:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/parsers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultParse: () => (/* binding */ DefaultParse),
/* harmony export */   HttpRequestError: () => (/* binding */ HttpRequestError),
/* harmony export */   JSONParse: () => (/* binding */ JSONParse),
/* harmony export */   TextParse: () => (/* binding */ TextParse),
/* harmony export */   parseBinderWithErrorCheck: () => (/* binding */ parseBinderWithErrorCheck),
/* harmony export */   parseODataJSON: () => (/* binding */ parseODataJSON)
/* harmony export */ });
/* unused harmony exports BlobParse, BufferParse, HeaderParse, JSONHeaderParse, errorCheck */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);


function DefaultParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return parseODataJSON(json);
    });
}
function TextParse() {
    return parseBinderWithErrorCheck(r => r.text());
}
function BlobParse() {
    return parseBinderWithErrorCheck(r => r.blob());
}
function JSONParse() {
    return parseBinderWithErrorCheck(r => r.json());
}
function BufferParse() {
    return parseBinderWithErrorCheck(r => (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(r.arrayBuffer) ? r.arrayBuffer() : r.buffer());
}
function HeaderParse() {
    return parseBinderWithErrorCheck(async (r) => r.headers);
}
function JSONHeaderParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return { data: { ...parseODataJSON(json) }, headers: { ...response.headers } };
    });
}
async function errorCheck(url, response, result) {
    if (!response.ok) {
        throw await HttpRequestError.init(response);
    }
    return [url, response, result];
}
function parseODataJSON(json) {
    let result = json;
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json, "d")) {
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json.d, "results")) {
            result = json.d.results;
        }
        else {
            result = json.d;
        }
    }
    else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json, "value")) {
        result = json.value;
    }
    return result;
}
/**
 * Provides a clean way to create new parse bindings without having to duplicate a lot of boilerplate
 * Includes errorCheck ahead of the supplied impl
 *
 * @param impl Method used to parse the response
 * @returns Queryable behavior binding function
 */
function parseBinderWithErrorCheck(impl) {
    return (instance) => {
        // we clear anything else registered for parse
        // add error check
        // add the impl function we are supplied
        instance.on.parse.replace(errorCheck);
        instance.on.parse(async (url, response, result) => {
            if (response.ok && typeof result === "undefined") {
                result = await impl(response);
            }
            return [url, response, result];
        });
        return instance;
    };
}
class HttpRequestError extends Error {
    constructor(message, response, status = response.status, statusText = response.statusText) {
        super(message);
        this.response = response;
        this.status = status;
        this.statusText = statusText;
        this.isHttpRequestError = true;
    }
    static async init(r) {
        const t = await r.clone().text();
        return new HttpRequestError(`Error making HttpClient request in queryable [${r.status}] ${r.statusText} ::> ${t}`, r);
    }
}


/***/ }),

/***/ 5234:
/*!************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/resolvers.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RejectOnError: () => (/* binding */ RejectOnError),
/* harmony export */   ResolveOnData: () => (/* binding */ ResolveOnData)
/* harmony export */ });
function ResolveOnData() {
    return (instance) => {
        instance.on.data(function (data) {
            this.emit[this.InternalResolve](data);
        });
        return instance;
    };
}
function RejectOnError() {
    return (instance) => {
        instance.on.error(function (err) {
            this.emit[this.InternalReject](err);
        });
        return instance;
    };
}


/***/ }),

/***/ 6844:
/*!**********************************************!*\
  !*** ./node_modules/@pnp/queryable/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserFetchWithRetry: () => (/* reexport safe */ _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_2__.BrowserFetchWithRetry),
/* harmony export */   DefaultParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.DefaultParse),
/* harmony export */   InjectHeaders: () => (/* reexport safe */ _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_6__.InjectHeaders),
/* harmony export */   JSONParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.JSONParse),
/* harmony export */   Queryable: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.Queryable),
/* harmony export */   RejectOnError: () => (/* reexport safe */ _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_8__.RejectOnError),
/* harmony export */   ResolveOnData: () => (/* reexport safe */ _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_8__.ResolveOnData),
/* harmony export */   TextParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.TextParse),
/* harmony export */   addProp: () => (/* binding */ addProp),
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   del: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.del),
/* harmony export */   get: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.get),
/* harmony export */   headers: () => (/* binding */ headers),
/* harmony export */   op: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.op),
/* harmony export */   parseBinderWithErrorCheck: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.parseBinderWithErrorCheck),
/* harmony export */   parseODataJSON: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.parseODataJSON),
/* harmony export */   patch: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.patch),
/* harmony export */   post: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.post),
/* harmony export */   queryableFactory: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.queryableFactory)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryable.js */ 7111);
/* harmony import */ var _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behaviors/browser-fetch.js */ 8786);
/* harmony import */ var _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./behaviors/caching.js */ 6936);
/* harmony import */ var _behaviors_caching_pessimistic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behaviors/caching-pessimistic.js */ 7395);
/* harmony import */ var _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./behaviors/cancelable.js */ 238);
/* harmony import */ var _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/inject-headers.js */ 6046);
/* harmony import */ var _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./behaviors/parsers.js */ 5102);
/* harmony import */ var _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviors/resolvers.js */ 5234);


/**
 * Behavior exports
 */









/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path || name);
        },
    });
}
/**
 * takes the supplied object of type U, JSON.stringify's it, and sets it as the value of a "body" property
 */
function body(o, previous) {
    return Object.assign({ body: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.jsS)(o) }, previous);
}
/**
 * Adds headers to an new/existing RequestInit
 *
 * @param o Headers to add
 * @param previous Any previous partial RequestInit
 * @returns RequestInit combining previous and specified headers
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({}, previous, { headers: { ...previous === null || previous === void 0 ? void 0 : previous.headers, ...o } });
}


/***/ }),

/***/ 7111:
/*!**************************************************!*\
  !*** ./node_modules/@pnp/queryable/queryable.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Queryable: () => (/* binding */ Queryable),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   op: () => (/* binding */ op),
/* harmony export */   patch: () => (/* binding */ patch),
/* harmony export */   post: () => (/* binding */ post),
/* harmony export */   queryableFactory: () => (/* binding */ queryableFactory)
/* harmony export */ });
/* unused harmony exports put, invokable */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4340);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);


const DefaultMoments = {
    construct: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.lifecycle)(),
    pre: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    auth: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    send: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.request)(),
    parse: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    post: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    data: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.broadcast)(),
};
let Queryable = class Queryable extends _pnp_core__WEBPACK_IMPORTED_MODULE_0__.Timeline {
    constructor(init, path) {
        super(DefaultMoments);
        // these keys represent internal events for Queryable, users are not expected to
        // subscribe directly to these, rather they enable functionality within Queryable
        // they are Symbols such that there are NOT cloned between queryables as we only grab string keys (by design)
        this.InternalResolve = Symbol.for("Queryable_Resolve");
        this.InternalReject = Symbol.for("Queryable_Reject");
        this.InternalPromise = Symbol.for("Queryable_Promise");
        // default to use the included URL search params to parse the query string
        this._query = new URLSearchParams();
        // add an internal moment with specific implementation for promise creation
        this.moments[this.InternalPromise] = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.reduce)();
        let parent;
        if (typeof init === "string") {
            this._url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(init, path);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(init)) {
            if (init.length !== 2) {
                throw Error("When using the tuple param exactly two arguments are expected.");
            }
            if (typeof init[1] !== "string") {
                throw Error("Expected second tuple param to be a string.");
            }
            parent = init[0];
            this._url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(init[1], path);
        }
        else {
            parent = init;
            this._url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(parent._url, path);
        }
        if (typeof parent !== "undefined") {
            this.observers = parent.observers;
            this._inheritingObservers = true;
        }
    }
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    concat(pathPart) {
        this._url += pathPart;
        return this;
    }
    /**
     * Gets the full url with query information
     *
     */
    toRequestUrl() {
        let url = this.toUrl();
        const query = this.query.toString();
        if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Querystring key, value pairs which will be included in the request
     */
    get query() {
        return this._query;
    }
    /**
     * Gets the current url
     *
     */
    toUrl() {
        return this._url;
    }
    execute(userInit) {
        // if there are NO observers registered this is likely either a bug in the library or a user error, direct to docs
        if (Reflect.ownKeys(this.observers).length < 1) {
            throw Error("No observers registered for this request. (https://pnp.github.io/pnpjs/queryable/queryable#no-observers-registered-for-this-request)");
        }
        // schedule the execution after we return the promise below in the next event loop
        setTimeout(async () => {
            const requestId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
            let requestUrl;
            const log = (msg, level) => {
                // this allows us to easily and consistently format our messages
                this.log(`[${requestId}] ${msg}`, level);
            };
            try {
                log("Beginning request", 0);
                // include the request id in the headers to assist with debugging against logs
                const initSeed = {
                    ...userInit,
                    headers: { ...userInit.headers, "X-PnPjs-RequestId": requestId },
                };
                // eslint-disable-next-line prefer-const
                let [url, init, result] = await this.emit.pre(this.toRequestUrl(), initSeed, undefined);
                log(`Url: ${url}`, 1);
                if (typeof result !== "undefined") {
                    log("Result returned from pre, Emitting data");
                    this.emit.data(result);
                    log("Emitted data");
                    return;
                }
                log("Emitting auth");
                [requestUrl, init] = await this.emit.auth(new URL(url), init);
                log("Emitted auth");
                // we always resepect user supplied init over observer modified init
                init = { ...init, ...userInit, headers: { ...init.headers, ...userInit.headers } };
                log("Emitting send");
                let response = await this.emit.send(requestUrl, init);
                log("Emitted send");
                log("Emitting parse");
                [requestUrl, response, result] = await this.emit.parse(requestUrl, response, result);
                log("Emitted parse");
                log("Emitting post");
                [requestUrl, result] = await this.emit.post(requestUrl, result);
                log("Emitted post");
                log("Emitting data");
                this.emit.data(result);
                log("Emitted data");
            }
            catch (e) {
                log(`Emitting error: "${e.message || e}"`, 3);
                // anything that throws we emit and continue
                this.error(e);
                log("Emitted error", 3);
            }
            finally {
                log("Finished request", 0);
            }
        }, 0);
        // this allows us to internally hook the promise creation and modify it. This was introduced to allow for
        // cancelable to work as envisioned, but may have other users. Meant for internal use in the library accessed via behaviors.
        return this.emit[this.InternalPromise](new Promise((resolve, reject) => {
            // we overwrite any pre-existing internal events as a
            // given queryable only processes a single request at a time
            this.on[this.InternalResolve].replace(resolve);
            this.on[this.InternalReject].replace(reject);
        }))[0];
    }
};
Queryable = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    invokable()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
], Queryable);

function ensureInit(method, init = { headers: {} }) {
    return { method, ...init, headers: { ...init.headers } };
}
function get(init) {
    return this.start(ensureInit("GET", init));
}
function post(init) {
    return this.start(ensureInit("POST", init));
}
function put(init) {
    return this.start(ensureInit("PUT", init));
}
function patch(init) {
    return this.start(ensureInit("PATCH", init));
}
function del(init) {
    return this.start(ensureInit("DELETE", init));
}
function op(q, operation, init) {
    return Reflect.apply(operation, q, [init]);
}
function queryableFactory(constructor) {
    return (init, path) => {
        // construct the concrete instance
        const instance = new constructor(init, path);
        // we emit the construct event from the factory because we need all of the decorators and constructors
        // to have fully finished before we emit, which is now true. We type the instance to any to get around
        // the protected nature of emit
        instance.emit.construct(init, path);
        return instance;
    };
}
/**
 * Allows a decorated object to be invoked as a function, optionally providing an implementation for that action
 *
 * @param invokeableAction Optional. The logic to execute upon invoking the object as a function.
 * @returns Decorator which applies the invokable logic to the tagged class
 */
function invokable(invokeableAction) {
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                const invokableInstance = Object.assign(function (init) {
                    if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(invokeableAction)) {
                        invokeableAction = function (init) {
                            return op(this, get, init);
                        };
                    }
                    return Reflect.apply(invokeableAction, invokableInstance, [init]);
                }, Reflect.construct(clz, args, newTarget));
                Reflect.setPrototypeOf(invokableInstance, newTarget.prototype);
                return invokableInstance;
            },
        });
    };
}


/***/ }),

/***/ 8018:
/*!******************************************!*\
  !*** ./node_modules/@pnp/sp/batching.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchNever: () => (/* binding */ BatchNever)
/* harmony export */ });
/* unused harmony export createBatch */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spqueryable.js */ 2678);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fi.js */ 6553);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webs/types.js */ 3169);





_fi_js__WEBPACK_IMPORTED_MODULE_3__.SPFI.prototype.batched = function (props) {
    const batched = (0,_fi_js__WEBPACK_IMPORTED_MODULE_3__.spfi)(this);
    const [behavior, execute] = createBatch(batched._root, props);
    batched.using(behavior);
    return [batched, execute];
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_4__._Web.prototype.batched = function (props) {
    const batched = (0,_webs_types_js__WEBPACK_IMPORTED_MODULE_4__.Web)(this);
    const [behavior, execute] = createBatch(batched, props);
    batched.using(behavior);
    return [batched, execute];
};
/**
 * Tracks on a batched instance that registration is complete (the child request has gotten to the send moment and the request is included in the batch)
 */
const RegistrationCompleteSym = Symbol.for("batch_registration");
/**
 * Tracks on a batched instance that the child request timeline lifecycle is complete (called in child.dispose)
 */
const RequestCompleteSym = Symbol.for("batch_request");
/**
 * Special batch parsing behavior used to convert the batch response text into a set of Response objects for each request
 * @returns A parser behavior
 */
function BatchParse() {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.parseBinderWithErrorCheck)(async (response) => {
        const text = await response.text();
        return parseResponse(text);
    });
}
/**
 * Internal class used to execute the batch request through the timeline lifecycle
 */
class BatchQueryable extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPQueryable {
    constructor(base, requestBaseUrl = base.toUrl().replace(/_api[\\|/].*$/i, "")) {
        super(requestBaseUrl, "_api/$batch");
        this.requestBaseUrl = requestBaseUrl;
        // this will copy over the current observables from the base associated with this batch
        // this will replace any other parsing present
        this.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(base, "replace"), BatchParse());
        this.on.dispose(() => {
            // there is a code path where you may invoke a batch, say on items.add, whose return
            // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
            // is immediately usable to make additional queries. Without this step when that IItem instance is
            // created using "this.getById" within IITems.add all of the current observers of "this" are
            // linked to the IItem instance created (expected), BUT they will be the set of observers setup
            // to handle the batch, meaning invoking `item` will result in a half batched call that
            // doesn't really work. To deliver the expected functionality we "reset" the
            // observers using the original instance, mimicing the behavior had
            // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
            // that we maintain the references to the InternalResolve and InternalReject events through
            // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
            // which ignores symbol properties.
            base.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(this, "replace", (k) => /(auth|send|pre|init)/i.test(k)));
        });
    }
}
/**
 * Creates a batched version of the supplied base, meaning that all chained fluent operations from the new base are part of the batch
 *
 * @param base The base from which to initialize the batch
 * @param props Any properties used to initialize the batch functionality
 * @returns A tuple of [behavior used to assign objects to the batch, the execute function used to resolve the batch requests]
 */
function createBatch(base, props) {
    const registrationPromises = [];
    const completePromises = [];
    const requests = [];
    const batchId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
    const batchQuery = new BatchQueryable(base);
    // this query is used to copy back the behaviors after the batch executes
    // it should not manipulated or have behaviors added.
    const refQuery = new BatchQueryable(base);
    const { headersCopyPattern } = {
        headersCopyPattern: /Accept|Content-Type|IF-Match/i,
        ...props,
    };
    const execute = async () => {
        await Promise.all(registrationPromises);
        if (requests.length < 1) {
            // even if we have no requests we need to await the complete promises to ensure
            // that execute only resolves AFTER every child request disposes #2457
            // this likely means caching is being used, we returned values for all child requests from the cache
            return Promise.all(completePromises).then(() => void (0));
        }
        const batchBody = [];
        let currentChangeSetId = "";
        for (let i = 0; i < requests.length; i++) {
            const [, url, init] = requests[i];
            if (init.method === "GET") {
                if (currentChangeSetId.length > 0) {
                    // end an existing change set
                    batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                    currentChangeSetId = "";
                }
                batchBody.push(`--batch_${batchId}\n`);
            }
            else {
                if (currentChangeSetId.length < 1) {
                    // start new change set
                    currentChangeSetId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
                    batchBody.push(`--batch_${batchId}\n`);
                    batchBody.push(`Content-Type: multipart/mixed; boundary="changeset_${currentChangeSetId}"\n\n`);
                }
                batchBody.push(`--changeset_${currentChangeSetId}\n`);
            }
            // common batch part prefix
            batchBody.push("Content-Type: application/http\n");
            batchBody.push("Content-Transfer-Encoding: binary\n\n");
            // these are the per-request headers
            const headers = new Headers(init.headers);
            // this is the url of the individual request within the batch
            const reqUrl = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url) ? url : (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(batchQuery.requestBaseUrl, url);
            if (init.method !== "GET") {
                let method = init.method;
                if (headers.has("X-HTTP-Method")) {
                    method = headers.get("X-HTTP-Method");
                    headers.delete("X-HTTP-Method");
                }
                batchBody.push(`${method} ${reqUrl} HTTP/1.1\n`);
            }
            else {
                batchBody.push(`${init.method} ${reqUrl} HTTP/1.1\n`);
            }
            // lastly we apply any default headers we need that may not exist
            if (!headers.has("Accept")) {
                headers.append("Accept", "application/json");
            }
            if (!headers.has("Content-Type")) {
                headers.append("Content-Type", "application/json;charset=utf-8");
            }
            // write headers into batch body
            headers.forEach((value, name) => {
                if (headersCopyPattern.test(name)) {
                    batchBody.push(`${name}: ${value}\n`);
                }
            });
            batchBody.push("\n");
            if (init.body) {
                batchBody.push(`${init.body}\n\n`);
            }
        }
        if (currentChangeSetId.length > 0) {
            // Close the changeset
            batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
            currentChangeSetId = "";
        }
        batchBody.push(`--batch_${batchId}--\n`);
        const responses = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(batchQuery, {
            body: batchBody.join(""),
            headers: {
                "Content-Type": `multipart/mixed; boundary=batch_${batchId}`,
            },
        });
        if (responses.length !== requests.length) {
            throw Error("Could not properly parse responses to match requests in batch.");
        }
        return new Promise((res, rej) => {
            try {
                for (let index = 0; index < responses.length; index++) {
                    const [, , , resolve, reject] = requests[index];
                    try {
                        resolve(responses[index]);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
                // this small delay allows the promises to resolve correctly in order by dropping this resolve behind
                // the other work in the event loop. Feels hacky, but it works so 🤷
                setTimeout(res, 0);
            }
            catch (e) {
                setTimeout(() => rej(e), 0);
            }
        }).then(() => Promise.all(completePromises)).then(() => void (0));
    };
    const register = (instance) => {
        instance.on.init(function () {
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(this[RegistrationCompleteSym])) {
                throw Error("This instance is already part of a batch. Please review the docs at https://pnp.github.io/pnpjs/concepts/batching#reuse.");
            }
            // we need to ensure we wait to start execute until all our batch children hit the .send method to be fully registered
            registrationPromises.push(new Promise((resolve) => {
                this[RegistrationCompleteSym] = resolve;
            }));
            return this;
        });
        instance.on.pre(async function (url, init, result) {
            // Do not add to timeline if using BatchNever behavior
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "X-PnP-BatchNever")) {
                // clean up the init operations from the timeline
                // not strictly necessary as none of the logic that uses this should be in the request, but good to keep things tidy
                if (typeof (this[RequestCompleteSym]) === "function") {
                    this[RequestCompleteSym]();
                    delete this[RequestCompleteSym];
                }
                this.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(refQuery, "replace", (k) => /(init|pre)/i.test(k)));
                return [url, init, result];
            }
            // the entire request will be auth'd - we don't need to run this for each batch request
            this.on.auth.clear();
            // we replace the send function with our batching logic
            this.on.send.replace(async function (url, init) {
                // this is the promise that Queryable will see returned from .emit.send
                const promise = new Promise((resolve, reject) => {
                    // add the request information into the batch
                    requests.push([this, url.toString(), init, resolve, reject]);
                });
                this.log(`[batch:${batchId}] (${(new Date()).getTime()}) Adding request ${init.method} ${url.toString()} to batch.`, 0);
                // we need to ensure we wait to resolve execute until all our batch children have fully completed their request timelines
                completePromises.push(new Promise((resolve) => {
                    this[RequestCompleteSym] = resolve;
                }));
                // indicate that registration of this request is complete
                this[RegistrationCompleteSym]();
                return promise;
            });
            this.on.dispose(function () {
                if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(this[RegistrationCompleteSym])) {
                    // if this request is in a batch and caching is in play we need to resolve the registration promises to unblock processing of the batch
                    // because the request will never reach the "send" moment as the result is returned from "pre"
                    this[RegistrationCompleteSym]();
                    // remove the symbol props we added for good hygene
                    delete this[RegistrationCompleteSym];
                }
                if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(this[RequestCompleteSym])) {
                    // let things know we are done with this request
                    this[RequestCompleteSym]();
                    delete this[RequestCompleteSym];
                    // there is a code path where you may invoke a batch, say on items.add, whose return
                    // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
                    // is immediately usable to make additional queries. Without this step when that IItem instance is
                    // created using "this.getById" within IITems.add all of the current observers of "this" are
                    // linked to the IItem instance created (expected), BUT they will be the set of observers setup
                    // to handle the batch, meaning invoking `item` will result in a half batched call that
                    // doesn't really work. To deliver the expected functionality we "reset" the
                    // observers using the original instance, mimicing the behavior had
                    // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
                    // that we maintain the references to the InternalResolve and InternalReject events through
                    // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
                    // which ignores symbol properties.
                    this.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(refQuery, "replace", (k) => /(auth|pre|send|init|dispose)/i.test(k)));
                }
            });
            return [url, init, result];
        });
        return instance;
    };
    return [register, execute];
}
/**
 * Behavior that blocks batching for the request regardless of "method"
 *
 * This is used for requests to bypass batching methods. Example - Request Digest where we need to get a request-digest inside of a batch.
 * @returns TimelinePipe
 */
function BatchNever() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-BatchNever": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Parses the text body returned by the server from a batch request
 *
 * @param body String body from the server response
 * @returns Parsed response objects
 */
function parseResponse(body) {
    const responses = [];
    const header = "--batchresponse_";
    // Ex. "HTTP/1.1 500 Internal Server Error"
    const statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
    const lines = body.split("\n");
    let state = "batch";
    let status;
    let statusText;
    let headers = {};
    const bodyReader = [];
    for (let i = 0; i < lines.length; ++i) {
        let line = lines[i];
        switch (state) {
            case "batch":
                if (line.substring(0, header.length) === header) {
                    state = "batchHeaders";
                }
                else {
                    if (line.trim() !== "") {
                        throw Error(`Invalid response, line ${i}`);
                    }
                }
                break;
            case "batchHeaders":
                if (line.trim() === "") {
                    state = "status";
                }
                break;
            case "status": {
                const parts = statusRegExp.exec(line);
                if (parts.length !== 3) {
                    throw Error(`Invalid status, line ${i}`);
                }
                status = parseInt(parts[1], 10);
                statusText = parts[2];
                state = "statusHeaders";
                break;
            }
            case "statusHeaders":
                if (line.trim() === "") {
                    state = "body";
                }
                else {
                    const headerParts = line.split(":");
                    if ((headerParts === null || headerParts === void 0 ? void 0 : headerParts.length) === 2) {
                        headers[headerParts[0].trim()] = headerParts[1].trim();
                    }
                }
                break;
            case "body":
                // reset the body reader
                bodyReader.length = 0;
                // this allows us to capture batch bodies that are returned as multi-line (renderListDataAsStream, #2454)
                while (line.substring(0, header.length) !== header) {
                    bodyReader.push(line);
                    line = lines[++i];
                }
                // because we have read the closing --batchresponse_ line, we need to move the line pointer back one
                // so that the logic works as expected either to get the next result or end processing
                i--;
                responses.push(new Response(status === 204 ? null : bodyReader.join(""), { status, statusText, headers }));
                state = "batch";
                headers = {};
                break;
        }
    }
    if (state !== "status") {
        throw Error("Unexpected end of input");
    }
    return responses;
}


/***/ }),

/***/ 7140:
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/defaults.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultHeaders: () => (/* binding */ DefaultHeaders),
/* harmony export */   DefaultInit: () => (/* binding */ DefaultInit)
/* harmony export */ });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telemetry.js */ 2630);


function DefaultInit() {
    return (instance) => {
        instance.on.pre(async (url, init, result) => {
            init.cache = "no-cache";
            init.credentials = "same-origin";
            return [url, init, result];
        });
        instance.using((0,_telemetry_js__WEBPACK_IMPORTED_MODULE_1__.Telemetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.RejectOnError)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.ResolveOnData)());
        return instance;
    };
}
function DefaultHeaders() {
    return (instance) => {
        instance
            .using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.InjectHeaders)({
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8",
        }));
        return instance;
    };
}


/***/ }),

/***/ 670:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/request-digest.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestDigest: () => (/* binding */ RequestDigest)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ 2997);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../batching.js */ 8018);





function clearExpired(digest) {
    const now = new Date();
    return !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest) || (now > digest.expiration) ? null : digest;
}
// allows for the caching of digests across all calls which each have their own IDigestInfo wrapper.
const digests = new Map();
function RequestDigest(hook) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            // add the request to the auth moment of the timeline
            this.on.auth(async (url, init) => {
                // eslint-disable-next-line max-len
                if (/get/i.test(init.method) || (init.headers && ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "X-RequestDigest") || (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "Authorization") || (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "X-PnPjs-NoDigest")))) {
                    return [url, init];
                }
                const urlAsString = url.toString();
                const webUrl = (0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(urlAsString);
                // do we have one in the cache that is still valid
                // from #2186 we need to always ensure the digest we get isn't expired
                let digest = clearExpired(digests.get(webUrl));
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest) && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(hook)) {
                    digest = clearExpired(hook(urlAsString, init));
                }
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest)) {
                    digest = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.spPost)((0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.SPQueryable)([this, (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(webUrl, "_api/contextinfo")]).using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.JSONParse)(), (0,_batching_js__WEBPACK_IMPORTED_MODULE_4__.BatchNever)()), {
                        headers: {
                            "Accept": "application/json",
                            "X-PnPjs-NoDigest": "1",
                        },
                    }).then(p => ({
                        expiration: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "second", p.FormDigestTimeoutSeconds),
                        value: p.FormDigestValue,
                    }));
                }
                if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest)) {
                    // if we got a digest, set it in the headers
                    init.headers = {
                        "X-RequestDigest": digest.value,
                        ...init.headers,
                    };
                    // and cache it for future requests
                    digests.set(webUrl, digest);
                }
                return [url, init];
            });
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 6793:
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spbrowser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SPBrowser */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ 7140);
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ 670);




function SPBrowser(props) {
    if ((props === null || props === void 0 ? void 0 : props.baseUrl) && !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(props.baseUrl)) {
        throw Error("SPBrowser props.baseUrl must be absolute when supplied.");
    }
    return (instance) => {
        instance.using((0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaders)(), (0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultInit)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.BrowserFetchWithRetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.DefaultParse)(), (0,_request_digest_js__WEBPACK_IMPORTED_MODULE_3__.RequestDigest)());
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(props === null || props === void 0 ? void 0 : props.baseUrl)) {
            // we want to fix up the url first
            instance.on.pre.prepend(async (url, init, result) => {
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url)) {
                    url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(props.baseUrl, url);
                }
                return [url, init, result];
            });
        }
        return instance;
    };
}


/***/ }),

/***/ 4243:
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spfx.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPFx: () => (/* binding */ SPFx)
/* harmony export */ });
/* unused harmony export SPFxToken */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ 7140);
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ 670);




class SPFxTokenNullOrUndefinedError extends Error {
    constructor(behaviorName) {
        super(`SPFx Context supplied to ${behaviorName} Behavior is null or undefined.`);
    }
    static check(behaviorName, context) {
        if (typeof context === "undefined" || context === null) {
            throw new SPFxTokenNullOrUndefinedError(behaviorName);
        }
    }
}
function SPFxToken(context) {
    SPFxTokenNullOrUndefinedError.check("SPFxToken", context);
    return (instance) => {
        instance.on.auth.replace(async function (url, init) {
            const provider = await context.aadTokenProviderFactory.getTokenProvider();
            const token = await provider.getToken(`${url.protocol}//${url.hostname}`);
            // eslint-disable-next-line @typescript-eslint/dot-notation
            init.headers["Authorization"] = `Bearer ${token}`;
            return [url, init];
        });
        return instance;
    };
}
function SPFx(context) {
    SPFxTokenNullOrUndefinedError.check("SPFx", context);
    return (instance) => {
        instance.using((0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaders)(), (0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultInit)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.BrowserFetchWithRetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.DefaultParse)(), 
        // remove SPFx Token in default due to issues #2570, #2571
        // SPFxToken(context),
        (0,_request_digest_js__WEBPACK_IMPORTED_MODULE_3__.RequestDigest)((url) => {
            var _a, _b, _c;
            const sameWeb = (new RegExp(`^${(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(context.pageContext.web.absoluteUrl, "/_api")}`, "i")).test(url);
            if (sameWeb && ((_b = (_a = context === null || context === void 0 ? void 0 : context.pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b.formDigestValue)) {
                const creationDateFromDigest = new Date(context.pageContext.legacyPageContext.formDigestValue.split(",")[1]);
                // account for page lifetime in timeout #2304 & others
                // account for tab sleep #2550
                return {
                    value: context.pageContext.legacyPageContext.formDigestValue,
                    expiration: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(creationDateFromDigest, "second", ((_c = context.pageContext.legacyPageContext) === null || _c === void 0 ? void 0 : _c.formDigestTimeoutSeconds) - 15 || 1585),
                };
            }
        }));
        // we want to fix up the url first
        instance.on.pre.prepend(async (url, init, result) => {
            if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url)) {
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(context.pageContext.web.absoluteUrl, url);
            }
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 2630:
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/telemetry.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Telemetry: () => (/* binding */ Telemetry)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

function Telemetry() {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            let clientTag = "PnPCoreJS:4.5.0:";
            // make our best guess based on url to the method called
            const { pathname } = new URL(url);
            // remove anything before the _api as that is potentially PII and we don't care, just want to get the called path to the REST API
            // and we want to modify any (*) calls at the end such as items(3) and items(344) so we just track "items()"
            clientTag = pathname.split("/")
                .filter((v) => !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(v) && ["_api", "v2.1", "v2.0"].indexOf(v) < 0)
                .map((value, index, arr) => index === arr.length - 1 ? value.replace(/\(.*?$/i, "()") : value[0])
                .join(".");
            if (clientTag.length > 32) {
                clientTag = clientTag.substring(0, 32);
            }
            this.log(`Request Tag: ${clientTag}`, 0);
            init.headers = { ...init.headers, ["X-ClientService-ClientTag"]: clientTag };
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 6540:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/decorators.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPath: () => (/* binding */ defaultPath)
/* harmony export */ });
/**
 * Decorator used to specify the default path for SPQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(args[0], args.length > 1 && args[1] !== undefined ? args[1] : path);
            }
        };
    };
}


/***/ }),

/***/ 6553:
/*!************************************!*\
  !*** ./node_modules/@pnp/sp/fi.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPFI: () => (/* binding */ SPFI),
/* harmony export */   spfi: () => (/* binding */ spfi)
/* harmony export */ });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ 2678);

class SPFI {
    /**
     * Creates a new instance of the SPFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root = "") {
        this._root = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)(root);
    }
    /**
     * Applies one or more behaviors which will be inherited by all instances chained from this root
     *
     */
    using(...behaviors) {
        this._root.using(...behaviors);
        return this;
    }
    /**
     * Used by extending classes to create new objects directly from the root
     *
     * @param factory The factory for the type of object to create
     * @returns A configured instance of that object
     */
    create(factory, path) {
        return factory(this._root, path);
    }
}
function spfi(root = "") {
    if (typeof root === "object" && !Reflect.has(root, "length")) {
        root = root._root;
    }
    return new SPFI(root);
}


/***/ }),

/***/ 7881:
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPFx: () => (/* reexport safe */ _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_10__.SPFx),
/* harmony export */   extractWebUrl: () => (/* reexport safe */ _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__.extractWebUrl),
/* harmony export */   spfi: () => (/* reexport safe */ _fi_js__WEBPACK_IMPORTED_MODULE_1__.spfi)
/* harmony export */ });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ 2678);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fi.js */ 6553);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 8713);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/extract-web-url.js */ 2997);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/odata-url-from.js */ 905);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/encode-path-str.js */ 4729);
/* harmony import */ var _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/defaults.js */ 7140);
/* harmony import */ var _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./behaviors/telemetry.js */ 2630);
/* harmony import */ var _behaviors_request_digest_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviors/request-digest.js */ 670);
/* harmony import */ var _behaviors_spbrowser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviors/spbrowser.js */ 6793);
/* harmony import */ var _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/spfx.js */ 4243);
















/***/ }),

/***/ 9721:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ 5685);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 132);




/***/ }),

/***/ 5685:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/items/list.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ 9706);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 132);



(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List, "items", _types_js__WEBPACK_IMPORTED_MODULE_2__.Items);


/***/ }),

/***/ 132:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Items: () => (/* binding */ Items)
/* harmony export */ });
/* unused harmony exports _Items, _Item, Item, _ItemVersions, ItemVersions, _ItemVersion, ItemVersion */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4346);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp */ 7881);
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lists/types.js */ 9706);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ 6540);







/**
 * Describes a collection of Item objects
 *
 */
let _Items = class _Items extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPCollection {
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    getById(id) {
        return Item(this).concat(`(${id})`);
    }
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    getItemByStringId(stringId) {
        // creates an item with the parent list path and append out method call
        return Item([this, this.parentUrl], `getItemByStringId('${stringId}')`);
    }
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    skip(skip, reverse = false) {
        if (reverse) {
            this.query.set("$skiptoken", `Paged=TRUE&PagedPrev=TRUE&p_ID=${skip}`);
        }
        else {
            this.query.set("$skiptoken", `Paged=TRUE&p_ID=${skip}`);
        }
        return this;
    }
    [Symbol.asyncIterator]() {
        const nextInit = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPCollection)(this).using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.parseBinderWithErrorCheck)(async (r) => {
            const json = await r.json();
            const nextLink = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.hOP)(json, "d") && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.hOP)(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
            return {
                hasNext: typeof nextLink === "string" && nextLink.length > 0,
                nextLink,
                value: (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.parseODataJSON)(json),
            };
        }));
        const queryParams = ["$top", "$select", "$expand", "$filter", "$orderby", "$skiptoken"];
        for (let i = 0; i < queryParams.length; i++) {
            const param = this.query.get(queryParams[i]);
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(param)) {
                nextInit.query.set(queryParams[i], param);
            }
        }
        return {
            _next: nextInit,
            async next() {
                if (this._next === null) {
                    return { done: true, value: undefined };
                }
                const result = await this._next();
                if (result.hasNext) {
                    this._next = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPCollection)([this._next, result.nextLink]);
                    return { done: false, value: result.value };
                }
                else {
                    this._next = null;
                    return { done: false, value: result.value };
                }
            },
        };
    }
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    async add(properties = {}) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)(properties));
    }
};
_Items = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("items")
], _Items);

const Items = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_Items);
/**
 * Descrines a single Item instance
 *
 */
class _Item extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.deleteableWithETag)();
    }
    /**
     * Gets the effective base permissions for the item
     *
     */
    get effectiveBasePermissions() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the effective base permissions for the item in a UI context
     *
     */
    get effectiveBasePermissionsForUI() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)(this, "EffectiveBasePermissionsForUI");
    }
    /**
     * Gets the field values for this list item in their HTML representation
     *
     */
    get fieldValuesAsHTML() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance)(this, "FieldValuesAsHTML");
    }
    /**
     * Gets the field values for this list item in their text representation
     *
     */
    get fieldValuesAsText() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance)(this, "FieldValuesAsText");
    }
    /**
     * Gets the field values for this list item for use in editing controls
     *
     */
    get fieldValuesForEdit() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance)(this, "FieldValuesForEdit");
    }
    /**
     * Gets the collection of versions associated with this item
     */
    get versions() {
        return ItemVersions(this);
    }
    /**
     * this item's list
     */
    get list() {
        return this.getParent(_lists_types_js__WEBPACK_IMPORTED_MODULE_3__.List, "", this.parentUrl.substring(0, this.parentUrl.lastIndexOf("/")));
    }
    /**
     * Updates this list instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)(properties, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.headers)({
            "IF-Match": eTag,
            "X-HTTP-Method": "MERGE",
        }));
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this).using(ItemUpdatedParser()), postBody);
    }
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this, "recycle"));
    }
    /**
     * Deletes the item object with options.
     *
     * @param parameters Specifies the options to use when deleting a item.
     */
    async deleteWithParams(parameters) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this, "DeleteWithParameters"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)({ parameters }));
    }
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    async getWopiFrameUrl(action = 0) {
        const i = Item(this, "getWOPIFrameUrl(@action)");
        i.query.set("@action", action);
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(i);
    }
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    validateUpdateListItem(formValues, bNewDocumentUpdate = false) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this, "validateupdatelistitem"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)({ formValues, bNewDocumentUpdate }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "ParentList/Id", "ParentList/Title", "ParentList/RootFolder/UniqueId", "ParentList/RootFolder/ServerRelativeUrl", "ParentList/RootFolder/ServerRelativePath", "ParentList/ParentWeb/Id", "ParentList/ParentWeb/Url", "ParentList/ParentWeb/ServerRelativeUrl", "ParentList/ParentWeb/ServerRelativePath").expand("ParentList", "ParentList/RootFolder", "ParentList/ParentWeb")();
        return {
            Item: {
                Id: urlInfo.Id,
            },
            ParentList: {
                Id: urlInfo.ParentList.Id,
                Title: urlInfo.ParentList.Title,
                RootFolderServerRelativePath: urlInfo.ParentList.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.ParentList.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.ParentList.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentList.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentList.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentList.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentList.ParentWeb.Url,
            },
        };
    }
    async setImageField(fieldName, imageName, imageContent) {
        const contextInfo = await this.getParentInfos();
        const webUrl = (0,_pnp_sp__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(this.toUrl());
        const q = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)([this, webUrl], "/_api/web/UploadImage");
        q.concat("(listTitle=@a1,imageName=@a2,listId=@a3,itemId=@a4)");
        q.query.set("@a1", `'${contextInfo.ParentList.Title}'`);
        q.query.set("@a2", `'${imageName}'`);
        q.query.set("@a3", `'${contextInfo.ParentList.Id}'`);
        q.query.set("@a4", contextInfo.Item.Id);
        const result = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(q, { body: imageContent });
        const itemInfo = {
            "type": "thumbnail",
            "fileName": result.Name,
            "nativeFile": {},
            "fieldName": fieldName,
            "serverUrl": contextInfo.ParentWeb.Url.replace(contextInfo.ParentWeb.ServerRelativeUrl, ""),
            "serverRelativeUrl": result.ServerRelativeUrl,
            "id": result.UniqueId,
        };
        return this.validateUpdateListItem([{
                FieldName: fieldName,
                FieldValue: JSON.stringify(itemInfo),
            }]);
    }
}
const Item = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_Item);
/**
 * Describes a collection of Version objects
 *
 */
let _ItemVersions = class _ItemVersions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPCollection {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId) {
        return ItemVersion(this).concat(`(${versionId})`);
    }
};
_ItemVersions = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("versions")
], _ItemVersions);

const ItemVersions = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
class _ItemVersion extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.deleteableWithETag)();
    }
}
const ItemVersion = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_ItemVersion);
function ItemUpdatedParser() {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.parseBinderWithErrorCheck)(async (r) => ({
        etag: r.headers.get("etag"),
    }));
}


/***/ }),

/***/ 2033:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ 2519);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 9706);




/***/ }),

/***/ 9706:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Lists: () => (/* binding */ Lists),
/* harmony export */   _List: () => (/* binding */ _List)
/* harmony export */ });
/* unused harmony exports _Lists, RenderListDataOptions, ControlMode */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4346);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ 905);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ 6540);
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-resource-path.js */ 4259);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 4729);








let _Lists = class _Lists extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPCollection {
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    getById(id) {
        return List(this).concat(`('${id}')`);
    }
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    getByTitle(title) {
        return List(this, `getByTitle('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(title)}')`);
    }
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    async add(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addSettings = {
            "AllowContentTypes": enableContentTypes,
            "BaseTemplate": template,
            "ContentTypesEnabled": enableContentTypes,
            "Description": desc,
            "Title": title,
            ...additionalSettings,
        };
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(addSettings));
    }
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    async ensure(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addOrUpdateSettings = { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes, ...additionalSettings };
        const list = this.getByTitle(addOrUpdateSettings.Title);
        try {
            await list.select("Title")();
            const data = await list.update(addOrUpdateSettings);
            return { created: false, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
        catch (e) {
            const data = await this.add(title, desc, template, enableContentTypes, addOrUpdateSettings);
            return { created: true, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
    }
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    async ensureSiteAssetsLibrary() {
        const json = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Lists(this, "ensuresiteassetslibrary"));
        return List([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(json)]);
    }
    /**
     * Gets a list that is the default location for wiki pages.
     */
    async ensureSitePagesLibrary() {
        const json = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Lists(this, "ensuresitepageslibrary"));
        return List([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(json)]);
    }
};
_Lists = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("lists")
], _Lists);

const Lists = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Lists);
class _List extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteableWithETag)();
    }
    /**
     * Gets the effective base permissions of this list
     *
     */
    get effectiveBasePermissions() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPQueryable)(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the event receivers attached to this list
     *
     */
    get eventReceivers() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPCollection)(this, "EventReceivers");
    }
    /**
     * Gets the related fields of this list
     *
     */
    get relatedFields() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPQueryable)(this, "getRelatedFields");
    }
    /**
     * Gets the IRM settings for this list
     *
     */
    get informationRightsManagementSettings() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPQueryable)(this, "InformationRightsManagementSettings");
    }
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(properties, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.headers)({ "IF-Match": eTag })));
        return data;
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    getChanges(query) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "getchanges"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ query }));
    }
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    getItemsByCAMLQuery(query, ...expands) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "getitems").expand(...expands), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ query }));
    }
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    getListItemChangesSinceToken(query) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "getlistitemchangessincetoken").using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.TextParse)()), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ query }));
    }
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    async recycle() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "recycle"));
    }
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    async renderListData(viewXml) {
        const q = List(this, "renderlistdata(@viewXml)");
        q.query.set("@viewXml", `'${viewXml}'`);
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(q);
        return JSON.parse(data);
    }
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParams The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param query Allows setting of query parameters
     */
    // eslint-disable-next-line max-len
    renderListDataAsStream(parameters, overrideParameters = null, query = new Map()) {
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(parameters, "RenderOptions") && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce((v, c) => v + c);
        }
        const clone = List(this, "RenderListDataAsStream");
        if (query && query.size > 0) {
            query.forEach((v, k) => clone.query.set(k, v));
        }
        const params = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(overrideParameters) ? { parameters, overrideParameters } : { parameters };
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(clone, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(params));
    }
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    async renderListFormData(itemId, formId, mode) {
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, `renderlistformdata(itemid=${itemId}, formid='${formId}', mode='${mode}')`));
        // data will be a string, so we parse it again
        return JSON.parse(data);
    }
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    async reserveListItemId() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "reservelistitemid"));
    }
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    async addValidateUpdateItemUsingPath(formValues, decodedUrl, bNewDocumentUpdate = false, checkInComment, additionalProps) {
        const addProps = {
            FolderPath: (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__.toResourcePath)(decodedUrl),
        };
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(additionalProps)) {
            if (additionalProps.leafName) {
                addProps.LeafName = (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__.toResourcePath)(additionalProps.leafName);
            }
            if (additionalProps.objectType) {
                addProps.UnderlyingObjectType = additionalProps.objectType;
            }
        }
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "AddValidateUpdateItemUsingPath()"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({
            bNewDocumentUpdate,
            checkInComment,
            formValues,
            listItemCreateInfo: addProps,
        }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "RootFolder/UniqueId", "RootFolder/ServerRelativeUrl", "RootFolder/ServerRelativePath", "ParentWeb/Id", "ParentWeb/Url", "ParentWeb/ServerRelativeUrl", "ParentWeb/ServerRelativePath").expand("RootFolder", "ParentWeb")();
        return {
            List: {
                Id: urlInfo.Id,
                RootFolderServerRelativePath: urlInfo.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentWeb.Url,
            },
        };
    }
}
const List = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    /**
     * The returned list will have a FileSystemItemId field on each item if possible.
     */
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    /**
     * Returns the client form schema to add and edit items.
     */
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    /**
     * Returns QuickLaunch navigation nodes.
     */
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    /**
     * Returns Spotlight rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    /**
     * Returns Visualization rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    /**
     * Returns view XML and other information about the current view.
     */
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    /**
     * Prevents AutoHyperlink from being run on text fields in this query.
     */
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    /**
     * Enables urls pointing to Media TA service, such as .thumbnailUrl, .videoManifestUrl, .pdfConversionUrls.
     */
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    /**
     * Return Parant folder information.
     */
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    /**
     * Return Page context info for the current list being rendered.
     */
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    /**
     * Return client-side component manifest information associated with the list.
     */
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
    /**
     * Return all content-types available on the list.
     */
    RenderListDataOptions[RenderListDataOptions["ListAvailableContentTypes"] = 65536] = "ListAvailableContentTypes";
    /**
      * Return the order of items in the new-item menu.
      */
    RenderListDataOptions[RenderListDataOptions["FolderContentTypeOrder"] = 131072] = "FolderContentTypeOrder";
    /**
     * Return information to initialize Grid for quick edit.
     */
    RenderListDataOptions[RenderListDataOptions["GridInitInfo"] = 262144] = "GridInitInfo";
    /**
     * Indicator if the vroom API of the SPItemUrl returned in MediaTAUrlGenerator should use site url as host.
     */
    RenderListDataOptions[RenderListDataOptions["SiteUrlAsMediaTASPItemHost"] = 524288] = "SiteUrlAsMediaTASPItemHost";
    /**
     * Return the files representing mount points in the list.
     */
    RenderListDataOptions[RenderListDataOptions["AddToOneDrive"] = 1048576] = "AddToOneDrive";
    /**
     * Return SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["SPFXCustomActions"] = 2097152] = "SPFXCustomActions";
    /**
     * Do not return non-SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["CustomActions"] = 4194304] = "CustomActions";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));


/***/ }),

/***/ 2519:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/lists/web.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ 3169);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 9706);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ 905);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 4729);






(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "lists", _types_js__WEBPACK_IMPORTED_MODULE_2__.Lists);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "siteUserInfoList", _types_js__WEBPACK_IMPORTED_MODULE_2__.List);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "defaultDocumentLibrary", _types_js__WEBPACK_IMPORTED_MODULE_2__.List);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "customListTemplates", _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__.SPCollection, "getcustomlisttemplates");
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getList = function (listRelativeUrl) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.List)(this, `getList('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__.encodePath)(listRelativeUrl)}')`);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getCatalog = async function (type) {
    const data = await (0,_webs_types_js__WEBPACK_IMPORTED_MODULE_1__.Web)(this, `getcatalog(${type})`).select("Id")();
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.List)([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(data)]);
};


/***/ }),

/***/ 2678:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/spqueryable.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPCollection: () => (/* binding */ SPCollection),
/* harmony export */   SPInstance: () => (/* binding */ SPInstance),
/* harmony export */   SPQueryable: () => (/* binding */ SPQueryable),
/* harmony export */   _SPCollection: () => (/* binding */ _SPCollection),
/* harmony export */   _SPInstance: () => (/* binding */ _SPInstance),
/* harmony export */   _SPQueryable: () => (/* binding */ _SPQueryable),
/* harmony export */   deleteable: () => (/* binding */ deleteable),
/* harmony export */   deleteableWithETag: () => (/* binding */ deleteableWithETag),
/* harmony export */   spInvokableFactory: () => (/* binding */ spInvokableFactory),
/* harmony export */   spPost: () => (/* binding */ spPost),
/* harmony export */   spPostMerge: () => (/* binding */ spPostMerge)
/* harmony export */ });
/* unused harmony exports spGet, spPostDelete, spPostDeleteETag, spDelete, spPatch */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);


const spInvokableFactory = (f) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.queryableFactory)(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
class _SPQueryable extends _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.Queryable {
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param base A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(base, path) {
        if (typeof base === "string") {
            let url = "";
            let parentUrl = "";
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(base) || base.lastIndexOf("/") < 0) {
                parentUrl = base;
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(base, path);
            }
            else if (base.lastIndexOf("/") > base.lastIndexOf("(")) {
                // .../items(19)/fields
                const index = base.lastIndexOf("/");
                parentUrl = base.slice(0, index);
                path = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(base.slice(index), path);
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(parentUrl, path);
            }
            else {
                // .../items(19)
                const index = base.lastIndexOf("(");
                parentUrl = base.slice(0, index);
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(base, path);
            }
            // init base with corrected string value
            super(url);
            this.parentUrl = parentUrl;
        }
        else {
            super(base, path);
            const q = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(base) ? base[0] : base;
            this.parentUrl = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(base) ? base[1] : q.toUrl();
        }
    }
    /**
     * Gets the full url with query information
     */
    toRequestUrl() {
        const aliasedParams = new URLSearchParams(this.query);
        // this regex is designed to locate aliased parameters within url paths
        let url = this.toUrl().replace(/'!(@.+?)::((?:[^']|'')+)'/ig, (match, labelName, value) => {
            this.log(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${value}`, 0);
            aliasedParams.set(labelName, `'${value}'`);
            return labelName;
        });
        const query = aliasedParams.toString();
        if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects) {
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    }
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands) {
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, path, base = this.parentUrl) {
        return factory([this, base], path);
    }
}
const SPQueryable = spInvokableFactory(_SPQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _SPCollection extends _SPQueryable {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        this.query.set("$filter", filter);
        return this;
    }
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy, ascending = true) {
        const o = "$orderby";
        const query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(`${orderBy} ${ascending ? "asc" : "desc"}`);
        this.query.set(o, query.join(","));
        return this;
    }
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip) {
        this.query.set("$skip", skip.toString());
        return this;
    }
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
}
const SPCollection = spInvokableFactory(_SPCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _SPInstance extends _SPQueryable {
}
const SPInstance = spInvokableFactory(_SPInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable() {
    return function () {
        return spPostDelete(this);
    };
}
function deleteableWithETag() {
    return function (eTag = "*") {
        return spPostDeleteETag(this, {}, eTag);
    };
}
const spGet = (o, init) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.get, init);
};
const spPost = (o, init) => (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.post, init);
const spPostMerge = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers, "X-HTTP-Method": "MERGE" };
    return spPost(o, init);
};
const spPostDelete = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers || {}, "X-HTTP-Method": "DELETE" };
    return spPost(o, init);
};
const spPostDeleteETag = (o, init, eTag = "*") => {
    init = init || {};
    init.headers = { ...init.headers || {}, "IF-Match": eTag };
    return spPostDelete(o, init);
};
const spDelete = (o, init) => (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.del, init);
const spPatch = (o, init) => (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.patch, init);


/***/ }),

/***/ 8713:
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/types.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports emptyGuid, PrincipalType, PrincipalSource, PageType */
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
const emptyGuid = "00000000-0000-0000-0000-000000000000";
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/**
 * Specifies the source of a principal.
 */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));


/***/ }),

/***/ 4729:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/encode-path-str.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodePath: () => (/* binding */ encodePath)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

/**
 * Encodes path portions of SharePoint urls such as decodedUrl=`encodePath(pathStr)`
 *
 * @param value The string path to encode
 * @returns A path encoded for use in SP urls
 */
function encodePath(value) {
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        return value.replace(/!(@.*?)::(.*)$/ig, (match, labelName, v) => {
            // we do not need to encodeURIComponent v as it will be encoded automatically when it is added as a query string param
            // we do need to double any ' chars
            return `!${labelName}::${v.replace(/'/ig, "''")}`;
        });
    }
    else {
        // because this is a literal path value we encodeURIComponent after doubling any ' chars
        return encodeURIComponent(value.replace(/'/ig, "''"));
    }
}


/***/ }),

/***/ 2997:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/extract-web-url.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractWebUrl: () => (/* binding */ extractWebUrl)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

function extractWebUrl(candidateUrl) {
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(candidateUrl)) {
        return "";
    }
    let index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substring(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}


/***/ }),

/***/ 905:
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/odata-url-from.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   odataUrlFrom: () => (/* binding */ odataUrlFrom)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extract-web-url.js */ 2997);


function odataUrlFrom(candidate) {
    const parts = [];
    const s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[3]) && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            const editLink = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push((0,_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__.extractWebUrl)(candidate[s[3]]), "_api", editLink);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        return "";
    }
    return (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(...parts);
}


/***/ }),

/***/ 4259:
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/to-resource-path.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toResourcePath: () => (/* binding */ toResourcePath)
/* harmony export */ });
function toResourcePath(url) {
    return {
        DecodedUrl: url,
    };
}


/***/ }),

/***/ 3867:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ 3169);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fi.js */ 6553);



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_1__.SPFI.prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_0__.Web);
    },
});


/***/ }),

/***/ 3169:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/types.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Web: () => (/* binding */ Web),
/* harmony export */   _Web: () => (/* binding */ _Web)
/* harmony export */ });
/* unused harmony exports _Webs, Webs */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4346);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ 6540);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ 2997);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 4729);







let _Webs = class _Webs extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__._SPCollection {
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    async add(Title, Url, Description = "", WebTemplate = "STS", Language = 1033, UseSamePermissionsAsParentSite = true) {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
            "parameters": {
                Description,
                Language,
                Title,
                Url,
                UseSamePermissionsAsParentSite,
                WebTemplate,
            },
        });
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Webs(this, "add"), postBody);
    }
};
_Webs = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("webs")
], _Webs);

const Webs = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spInvokableFactory)(_Webs);
/**
 * Ensures the url passed to the constructor is correctly rebased to a web url
 *
 * @param candidate The candidate web url
 * @param path The caller supplied path, which may contain _api, meaning we don't append _api/web
 */
function rebaseWebUrl(candidate, path) {
    let replace = "_api/web";
    // this allows us to both:
    // - test if `candidate` already has an api path
    // - ensure that we append the correct one as sometimes a web is not defined
    //   by _api/web, in the case of _api/site/rootweb for example
    const matches = /(_api[/|\\](site\/rootweb|site|web))/i.exec(candidate);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) > 0) {
        // we want just the base url part (before the _api)
        candidate = (0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(candidate);
        // we want to ensure we put back the correct string
        replace = matches[1];
    }
    // we only need to append the _api part IF `path` doesn't already include it.
    if ((path === null || path === void 0 ? void 0 : path.indexOf("_api")) < 0) {
        candidate = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_3__.combine)(candidate, replace);
    }
    return candidate;
}
/**
 * Describes a web
 *
 */
let _Web = class _Web extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__._SPInstance {
    constructor(base, path) {
        if (typeof base === "string") {
            base = rebaseWebUrl(base, path);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_3__.isArray)(base)) {
            base = [base[0], rebaseWebUrl(base[1], path)];
        }
        else {
            base = [base, rebaseWebUrl(base.toUrl(), path)];
        }
        super(base, path);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.deleteable)();
    }
    /**
     * Gets this web's subwebs
     *
     */
    get webs() {
        return Webs(this);
    }
    /**
     * Allows access to the web's all properties collection
     */
    get allProperties() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPInstance)(this, "allproperties");
    }
    /**
     * Gets a collection of WebInfos for this web's subwebs
     *
     */
    get webinfos() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPCollection)(this, "webinfos");
    }
    /**
     * Gets this web's parent web and data
     *
     */
    async getParentWeb() {
        const { Url, ParentWeb } = await this.select("Url", "ParentWeb/ServerRelativeUrl").expand("ParentWeb")();
        if (ParentWeb === null || ParentWeb === void 0 ? void 0 : ParentWeb.ServerRelativeUrl) {
            return Web([this, (0,_pnp_core__WEBPACK_IMPORTED_MODULE_3__.combine)((new URL(Url)).origin, ParentWeb.ServerRelativeUrl)]);
        }
        return null;
    }
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    async update(properties) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)(properties));
    }
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
            backgroundImageUrl,
            colorPaletteUrl,
            fontSchemeUrl,
            shareGenerated,
        });
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, "applytheme"), postBody);
    }
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    applyWebTemplate(template) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, `applywebtemplate(webTemplate='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(template)}')`));
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, "getchanges"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({ query }));
    }
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    mapToIcon(filename, size = 0, progId = "") {
        return Web(this, `maptoicon(filename='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(filename)}',progid='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(progId)}',size=${size})`)();
    }
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    getStorageEntity(key) {
        return Web(this, `getStorageEntity('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(key)}')`)();
    }
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    setStorageEntity(key, value, description = "", comments = "") {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, "setStorageEntity"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
            comments,
            description,
            key,
            value,
        }));
    }
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    removeStorageEntity(key) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, `removeStorageEntity('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(key)}')`));
    }
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter = -1, nConfigurationFilter = -1) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPCollection)(this, `getSubwebsFilteredForCurrentUser(nWebTemplateFilter=${nWebTemplateFilter},nConfigurationFilter=${nConfigurationFilter})`);
    }
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    availableWebTemplates(language = 1033, includeCrossLanugage = true) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPCollection)(this, `getavailablewebtemplates(lcid=${language},doincludecrosslanguage=${includeCrossLanugage})`);
    }
};
_Web = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("_api/web")
], _Web);

const Web = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spInvokableFactory)(_Web);


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunk." + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "9de5431e-069e-4a2b-bd66-6dc732349d9f_0.0.1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 				if (script.src.indexOf(window.location.origin + '/') !== 0) {
/******/ 					script.crossOrigin = "anonymous";
/******/ 				}
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var _publicPath = __RUSHSTACK_CURRENT_SCRIPT__ ? __RUSHSTACK_CURRENT_SCRIPT__.src : '';
/******/ 		__webpack_require__.p = _publicPath.slice(0, _publicPath.lastIndexOf('/') + 1);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// Returns a list of SPFx components used in a given chunk but not used in the runtime chunk
/******/ 	function getAsyncSpfxComponents(chunkId) {
/******/ 		var component_0 = { // @microsoft/sp-property-pane
/******/ 			i: "f9e737b7-f0df-4597-ba8c-3060f82380db",
/******/ 			v: "1.20.0",
/******/ 			m: 4723
/******/ 		};
/******/ 	
/******/ 		return {"ReactQuickView-property-pane": [component_0]}[chunkId] || [];
/******/ 	}
/******/ 	__webpack_require__.f.compat = (chunkId, promises) => {
/******/ 	
/******/ 		// SPFx Component async loading
/******/ 	
/******/ 		var chunkAsyncComponents = getAsyncSpfxComponents(chunkId);
/******/ 		for (var i = 0; i < chunkAsyncComponents.length; i++) {
/******/ 			// Has the component already been loaded into the modules object?
/******/ 			if (!__webpack_require__.m[chunkAsyncComponents[i].m]) {
/******/ 				((chunkComponent) => {
/******/ 					promises.push(spfxLoader.SPComponentLoader.loadComponentById(
/******/ 						chunkComponent.i,
/******/ 						chunkComponent.v
/******/ 					).then((component) => {
/******/ 						__webpack_require__.m[chunkComponent.m] = (module) => module.exports = component;
/******/ 					}));
/******/ 				})(chunkAsyncComponents[i]);
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	
/******/ 	var spfxLoader = __webpack_require__(4037);
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"react-quick-view-adaptive-card-extension": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackJsonp_9de5431e-069e-4a2b-bd66-6dc732349d9f_0.0.1"] = self["webpackJsonp_9de5431e-069e-4a2b-bd66-6dc732349d9f_0.0.1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(244);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});})();;
//# sourceMappingURL=react-quick-view-adaptive-card-extension.js.map