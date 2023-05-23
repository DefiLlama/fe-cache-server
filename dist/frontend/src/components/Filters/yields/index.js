"use strict";
var __assign = (this && this.__assign) || function () {
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attributeOptions = exports.YieldFiltersV2 = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var Optimizer_1 = __importDefault(require("../../../components/Search/Yields/Optimizer"));
var hooks_1 = require("../../../hooks");
var IncludeExcludeTokens_1 = require("./IncludeExcludeTokens");
var LTV_1 = require("./LTV");
var SlidingMenu_1 = require("../../../components/SlidingMenu");
var Dropdowns_1 = require("./Dropdowns");
var v2Base_1 = require("../v2Base");
function YieldFiltersV2(_a) {
    var header = _a.header, poolsNumber = _a.poolsNumber, projectsNumber = _a.projectsNumber, chainsNumber = _a.chainsNumber, tokens = _a.tokens, noOfStrategies = _a.noOfStrategies, strategyInputsData = _a.strategyInputsData, ltvPlaceholder = _a.ltvPlaceholder, showSearchOnMobile = _a.showSearchOnMobile, props = __rest(_a, ["header", "poolsNumber", "projectsNumber", "chainsNumber", "tokens", "noOfStrategies", "strategyInputsData", "ltvPlaceholder", "showSearchOnMobile"]);
    var trackingStats = poolsNumber && projectsNumber && chainsNumber
        ? "Tracking ".concat(poolsNumber + (poolsNumber > 1 ? ' pools' : ' pool'), " over ").concat(projectsNumber + (projectsNumber > 1 ? ' protocols' : ' protocol'), " on ").concat(chainsNumber + (chainsNumber > 1 ? ' chains' : ' chain'), ".")
        : noOfStrategies
            ? ": ".concat(noOfStrategies, " Strategies")
            : null;
    var isSmall = (0, hooks_1.useMedia)("(max-width: 30rem)");
    var query = (0, router_1.useRouter)().query;
    var lend = typeof query.lend === 'string' ? query.lend : null;
    var borrow = typeof query.borrow === 'string' ? query.borrow : null;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(v2Base_1.Header, { children: [(0, jsx_runtime_1.jsx)("h1", { children: header }), trackingStats && (0, jsx_runtime_1.jsx)("p", { children: trackingStats })] }), (0, jsx_runtime_1.jsxs)(v2Base_1.Wrapper, { children: [strategyInputsData && ((0, jsx_runtime_1.jsxs)(v2Base_1.SearchWrapper, { children: [(0, jsx_runtime_1.jsx)(Optimizer_1.default, { value: lend, searchData: strategyInputsData, lend: true }), lend && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Optimizer_1.default, { value: borrow, searchData: strategyInputsData }), (0, jsx_runtime_1.jsx)(LTV_1.LTV, { placeholder: ltvPlaceholder })] }))] })), tokens && (showSearchOnMobile || !isSmall) && ((0, jsx_runtime_1.jsx)(IncludeExcludeTokens_1.IncludeExcludeTokens, { tokens: tokens, "data-alwaysdisplay": showSearchOnMobile ? true : false })), (0, jsx_runtime_1.jsx)(v2Base_1.DropdownsWrapper, { children: isSmall ? ((0, jsx_runtime_1.jsx)(SlidingMenu_1.SlidingMenu, __assign({ label: "Filters", variant: "secondary" }, { children: (0, jsx_runtime_1.jsx)(Dropdowns_1.YieldFilterDropdowns, __assign({}, props, { isMobile: true })) }))) : ((0, jsx_runtime_1.jsx)(Dropdowns_1.YieldFilterDropdowns, __assign({}, props))) })] })] }));
}
exports.YieldFiltersV2 = YieldFiltersV2;
var Attributes_1 = require("./Attributes");
Object.defineProperty(exports, "attributeOptions", { enumerable: true, get: function () { return Attributes_1.attributeOptions; } });
