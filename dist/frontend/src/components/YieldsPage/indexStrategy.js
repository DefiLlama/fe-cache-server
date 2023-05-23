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
var Strategy_1 = __importDefault(require("../../components/Table/Yields/Strategy"));
var Filters_1 = require("../../components/Filters");
var utils_1 = require("./utils");
var hooks_1 = require("./hooks");
var YieldsStrategyPage = function (_a) {
    var _b;
    var pools = _a.pools, projectList = _a.projectList, searchData = _a.searchData, chainList = _a.chainList, categoryList = _a.categoryList, allPools = _a.allPools, lendingProtocols = _a.lendingProtocols, farmProtocols = _a.farmProtocols;
    var query = (0, router_1.useRouter)().query;
    var lend = typeof query.lend === 'string' ? query.lend : null;
    var borrow = typeof query.borrow === 'string' ? query.borrow : null;
    var minTvl = typeof query.minTvl === 'string' ? query.minTvl : null;
    var maxTvl = typeof query.maxTvl === 'string' ? query.maxTvl : null;
    var minAvailable = typeof query.minAvailable === 'string' ? query.minAvailable : null;
    var maxAvailable = typeof query.maxAvailable === 'string' ? query.maxAvailable : null;
    var customLTV = typeof query.customLTV === 'string' ? query.customLTV : null;
    var _c = (0, hooks_1.useFormatYieldQueryParams)({
        projectList: projectList,
        chainList: chainList,
        categoryList: categoryList,
        lendingProtocols: lendingProtocols,
        farmProtocols: farmProtocols
    }), selectedChains = _c.selectedChains, selectedAttributes = _c.selectedAttributes, selectedLendingProtocols = _c.selectedLendingProtocols, selectedFarmProtocols = _c.selectedFarmProtocols;
    // prepare cdp pools
    var cdpPools = pools
        .filter(function (p) { return p.category === 'CDP' && p.mintedCoin; })
        .map(function (p) { return (__assign(__assign({}, p), { chains: [p.chain], borrow: __assign(__assign({}, p), { symbol: p.mintedCoin.toUpperCase() }) })); });
    // exclude cdp from lending
    var lendingPools = pools.filter(function (p) { return p.category !== 'CDP'; });
    var poolsData = React.useMemo(function () {
        var filteredPools = (0, utils_1.findStrategyPools)(lendingPools, lend, borrow, allPools, cdpPools, customLTV).filter(function (pool) {
            return (0, utils_1.filterPool)({
                pool: pool,
                selectedChains: selectedChains,
                selectedAttributes: selectedAttributes,
                minTvl: minTvl,
                maxTvl: maxTvl,
                minAvailable: minAvailable,
                maxAvailable: maxAvailable,
                selectedLendingProtocols: selectedLendingProtocols,
                selectedFarmProtocols: selectedFarmProtocols,
                customLTV: customLTV,
                strategyPage: true
            });
        });
        return filteredPools;
    }, [
        lendingPools,
        borrow,
        lend,
        selectedChains,
        selectedAttributes,
        selectedLendingProtocols,
        selectedFarmProtocols,
        allPools,
        cdpPools,
        minTvl,
        maxTvl,
        minAvailable,
        maxAvailable,
        customLTV
    ]);
    var header = "Strategy Finder ".concat(lend && !borrow
        ? "(Supply: ".concat(lend || '', " )")
        : lend && borrow
            ? "(Supply: ".concat(lend || '', " \u279E Borrow: ").concat(borrow || '', " \u279E Farm: ").concat(borrow || '', ")")
            : '');
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Filters_1.YieldFiltersV2, { header: header, chainsNumber: selectedChains.length, chainList: chainList, selectedChains: selectedChains, lendingProtocols: lendingProtocols, selectedLendingProtocols: selectedLendingProtocols, farmProtocols: farmProtocols, selectedFarmProtocols: selectedFarmProtocols, attributes: true, tvlRange: true, availableRange: true, resetFilters: true, noOfStrategies: (_b = poolsData === null || poolsData === void 0 ? void 0 : poolsData.length) !== null && _b !== void 0 ? _b : null, strategyInputsData: searchData, ltvPlaceholder: '% of max LTV' }), poolsData.length > 0 ? ((0, jsx_runtime_1.jsx)(Strategy_1.default, { data: poolsData })) : ((0, jsx_runtime_1.jsxs)(components_1.Panel, __assign({ as: "p", style: { margin: 0, textAlign: 'center' } }, { children: ["Given a collateral token this finder will display \"lend-borrow-farm\" strategies across all our tracked pools.", (0, jsx_runtime_1.jsx)("br", {}), "It calculates the total Strategy APY taking into account the individual apy components at each step.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "To narrow search results, you can optionally select a token to borrow.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "To start just select a collateral token above."] })))] }));
};
exports.default = YieldsStrategyPage;
