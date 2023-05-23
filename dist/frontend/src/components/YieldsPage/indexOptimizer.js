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
var Optimizer_1 = __importDefault(require("../../components/Table/Yields/Optimizer"));
var Filters_1 = require("../../components/Filters");
var hooks_1 = require("./hooks");
var utils_1 = require("./utils");
var YieldsOptimizerPage = function (_a) {
    var pools = _a.pools, projectList = _a.projectList, chainList = _a.chainList, categoryList = _a.categoryList, lendingProtocols = _a.lendingProtocols, searchData = _a.searchData;
    var query = (0, router_1.useRouter)().query;
    var customLTV = typeof query.customLTV === 'string' ? query.customLTV : null;
    var minAvailable = typeof query.minAvailable === 'string' ? query.minAvailable : null;
    var maxAvailable = typeof query.maxAvailable === 'string' ? query.maxAvailable : null;
    var lend = query.lend, borrow = query.borrow;
    var _b = (0, hooks_1.useFormatYieldQueryParams)({
        projectList: projectList,
        chainList: chainList,
        lendingProtocols: lendingProtocols,
        categoryList: categoryList
    }), selectedChains = _b.selectedChains, selectedAttributes = _b.selectedAttributes, selectedLendingProtocols = _b.selectedLendingProtocols;
    // get cdp collateral -> debt token route
    var cdpPools = pools
        .filter(function (p) { return p.category === 'CDP' && p.mintedCoin; })
        .map(function (p) { return (__assign(__assign({}, p), { chains: [p.chain], borrow: __assign(__assign({}, p), { symbol: p.mintedCoin.toUpperCase() }) })); });
    var lendingPools = pools.filter(function (p) { return p.category !== 'CDP'; });
    var poolsData = React.useMemo(function () {
        var filteredPools = (0, utils_1.findOptimizerPools)(lendingPools, lend, borrow, cdpPools)
            .filter(function (pool) {
            var _a, _b, _c;
            if (typeof lend === 'string' && lend.toLowerCase() === 'eth' && ((_a = pool.symbol) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes('steth'))) {
                return false;
            }
            if (typeof borrow === 'string' &&
                borrow.toLowerCase() === 'eth' &&
                ((_c = (_b = pool.borrow) === null || _b === void 0 ? void 0 : _b.symbol) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes('steth'))) {
                return false;
            }
            return (0, utils_1.filterPool)({
                pool: pool,
                selectedChains: selectedChains,
                selectedAttributes: selectedAttributes,
                minAvailable: minAvailable,
                maxAvailable: maxAvailable,
                selectedLendingProtocols: selectedLendingProtocols,
                customLTV: customLTV
            });
        })
            .map(function (p) { return (0, utils_1.formatOptimizerPool)(p, customLTV); })
            .sort(function (a, b) { return b.totalReward - a.totalReward; });
        return filteredPools;
    }, [
        lendingPools,
        lend,
        borrow,
        cdpPools,
        selectedChains,
        selectedAttributes,
        minAvailable,
        maxAvailable,
        selectedLendingProtocols,
        customLTV
    ]);
    var header = "Lending Optimizer Calculator ".concat(lend && borrow ? "(Supply: ".concat(lend || '', " \u279E Borrow: ").concat(borrow || '', ")") : '');
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Filters_1.YieldFiltersV2, { header: header, chainList: chainList, selectedChains: selectedChains, lendingProtocols: lendingProtocols, selectedLendingProtocols: selectedLendingProtocols, attributes: true, availableRange: true, resetFilters: true, excludeBadDebt: true, selectedAttributes: selectedAttributes, excludeRewardApy: true, strategyInputsData: searchData, ltvPlaceholder: 'Custom LTV' }), poolsData.length > 0 ? ((0, jsx_runtime_1.jsx)(Optimizer_1.default, { data: poolsData })) : ((0, jsx_runtime_1.jsxs)(components_1.Panel, __assign({ as: "p", style: { margin: 0, textAlign: 'center' } }, { children: ["Given a token to use for collateral and a token to borrow, this calculator will look at all the lending protocols", (0, jsx_runtime_1.jsx)("br", {}), "and calculate how much would it cost to borrow on each one, taking into account incentives, supply APR and borrow APR,", (0, jsx_runtime_1.jsx)("br", {}), "providing a list of all possible lending routes, their cost and LTV.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "This is similar to skyscanner for flights or 1inch for swaps, but for lending. It calculates the optimal lending route.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "To start just select two tokens above."] })))] }));
};
exports.default = YieldsOptimizerPage;
