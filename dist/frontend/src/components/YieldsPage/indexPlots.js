"use strict";
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
var Filters_1 = require("../../components/Filters");
var dynamic_1 = __importDefault(require("next/dynamic"));
var hooks_1 = require("./hooks");
var utils_1 = require("./utils");
var ScatterChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/ScatterChart')); }); }, {
    ssr: false
});
var BoxplotChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BoxplotChart')); }); }, {
    ssr: false
});
var TreemapChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/TreemapChart')); }); }, {
    ssr: false
});
var BarChartYields = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart/Yields')); }); }, {
    ssr: false
});
var PlotsPage = function (_a) {
    var pools = _a.pools, chainList = _a.chainList, projectList = _a.projectList, categoryList = _a.categoryList, median = _a.median, tokens = _a.tokens, tokenSymbolsList = _a.tokenSymbolsList;
    var _b = (0, router_1.useRouter)(), query = _b.query, pathname = _b.pathname;
    var minTvl = query.minTvl, maxTvl = query.maxTvl, minApy = query.minApy, maxApy = query.maxApy;
    var _c = (0, hooks_1.useFormatYieldQueryParams)({ projectList: projectList, chainList: chainList, categoryList: categoryList }), selectedProjects = _c.selectedProjects, selectedChains = _c.selectedChains, selectedAttributes = _c.selectedAttributes, includeTokens = _c.includeTokens, excludeTokens = _c.excludeTokens, selectedCategories = _c.selectedCategories;
    var poolsData = React.useMemo(function () {
        return pools.reduce(function (acc, curr) {
            var toFilter = (0, utils_1.toFilterPool)({
                curr: curr,
                pathname: pathname,
                selectedProjects: selectedProjects,
                selectedChains: selectedChains,
                selectedAttributes: selectedAttributes,
                includeTokens: includeTokens,
                excludeTokens: excludeTokens,
                selectedCategories: selectedCategories,
                minTvl: minTvl,
                maxTvl: maxTvl,
                minApy: minApy,
                maxApy: maxApy
            });
            if (toFilter) {
                return acc.concat(curr);
            }
            else
                return acc;
        }, []);
    }, [
        minTvl,
        maxTvl,
        minApy,
        maxApy,
        pools,
        selectedProjects,
        selectedChains,
        selectedAttributes,
        includeTokens,
        excludeTokens,
        selectedCategories,
        pathname
    ]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Filters_1.YieldFiltersV2, { header: "Yields Overview", tokens: tokens, tokensList: tokenSymbolsList, selectedTokens: includeTokens, chainList: chainList, selectedChains: selectedChains, projectList: projectList, selectedProjects: selectedProjects, categoryList: categoryList, selectedCategories: selectedCategories, attributes: true, tvlRange: true, apyRange: true, resetFilters: true }), (0, jsx_runtime_1.jsx)(BarChartYields, { chartData: median }), (0, jsx_runtime_1.jsx)(TreemapChart, { chartData: poolsData }), (0, jsx_runtime_1.jsx)(ScatterChart, { chartData: poolsData.filter(function (p) { return !p.outlier; }) }), (0, jsx_runtime_1.jsx)(BoxplotChart, { chartData: poolsData.filter(function (p) { return !p.outlier; }) })] }));
};
exports.default = PlotsPage;
