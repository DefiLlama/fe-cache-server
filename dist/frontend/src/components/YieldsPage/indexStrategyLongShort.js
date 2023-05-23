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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var router_1 = require("next/router");
var components_1 = require("../../components");
var StrategyFR_1 = __importDefault(require("../../components/Table/Yields/StrategyFR"));
var Filters_1 = require("../../components/Filters");
var utils_1 = require("./utils");
var hooks_1 = require("./hooks");
var YieldsStrategyPageLongShort = function (_a) {
    var _b, _c;
    var filteredPools = _a.filteredPools, perps = _a.perps, tokens = _a.tokens, projectList = _a.projectList, chainList = _a.chainList, categoryList = _a.categoryList;
    var query = (0, router_1.useRouter)().query;
    var token = typeof query.token === 'string' || typeof query.token === 'object' ? query.token : null;
    var minTvl = typeof query.minTvl === 'string' ? query.minTvl : null;
    var maxTvl = typeof query.maxTvl === 'string' ? query.maxTvl : null;
    var _d = (0, hooks_1.useFormatYieldQueryParams)({
        projectList: projectList,
        chainList: chainList,
        categoryList: categoryList
    }), selectedChains = _d.selectedChains, selectedAttributes = _d.selectedAttributes;
    var poolsData = React.useMemo(function () {
        var pools = (0, utils_1.findStrategyPoolsFR)(token ? query : null, filteredPools, perps)
            .filter(function (pool) {
            return (0, utils_1.filterPool)({
                pool: pool,
                selectedChains: selectedChains,
                selectedAttributes: selectedAttributes,
                minTvl: minTvl,
                maxTvl: maxTvl
            });
        })
            .sort(function (a, b) { return b.openInterest - a.openInterest; });
        return pools;
    }, [token, query, filteredPools, perps, selectedAttributes, selectedChains, minTvl, maxTvl]);
    var header = 'Strategy Finder' + (token ? ": ".concat(typeof token === 'string' ? token : (_b = token === null || token === void 0 ? void 0 : token.join(', ')) !== null && _b !== void 0 ? _b : '') : '');
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Filters_1.YieldFiltersV2, { header: header, resetFilters: true, noOfStrategies: (_c = poolsData === null || poolsData === void 0 ? void 0 : poolsData.length) !== null && _c !== void 0 ? _c : null, tokens: tokens, chainsNumber: selectedChains.length, chainList: chainList, selectedChains: selectedChains, attributes: true, tvlRange: true, showSearchOnMobile: true }), poolsData.length > 0 ? ((0, jsx_runtime_1.jsx)(StrategyFR_1.default, { data: poolsData })) : ((0, jsx_runtime_1.jsxs)(components_1.Panel, __assign({ as: "p", style: { margin: 0, textAlign: 'center' } }, { children: ["Given a token this finder will display delta neutral \"long-short\" strategies across all our tracked pools and CEX perpetual swap markets.", (0, jsx_runtime_1.jsx)("br", {}), "It calculates annualised Strategy Returns taking into account the CEX funding rate and DeFi yield.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "To start just select a token above."] })))] }));
};
exports.default = YieldsStrategyPageLongShort;
