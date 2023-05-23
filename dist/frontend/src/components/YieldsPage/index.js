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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var router_1 = require("next/router");
var components_1 = require("../../components");
var Table_1 = require("../../components/Table");
var Filters_1 = require("../../components/Filters");
var Announcement_1 = require("../../components/Announcement");
var hooks_1 = require("./hooks");
var utils_1 = require("./utils");
var YieldPage = function (_a) {
    var pools = _a.pools, projectList = _a.projectList, chainList = _a.chainList, categoryList = _a.categoryList, tokens = _a.tokens, tokenSymbolsList = _a.tokenSymbolsList;
    var _b = (0, router_1.useRouter)(), query = _b.query, pathname = _b.pathname, push = _b.push;
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
                return acc.concat({
                    pool: curr.symbol,
                    configID: curr.pool,
                    projectslug: curr.project,
                    project: curr.projectName,
                    airdrop: curr.airdrop,
                    chains: [curr.chain],
                    tvl: curr.tvlUsd,
                    apy: curr.apy,
                    apyBase: curr.apyBase,
                    apyReward: curr.apyReward,
                    rewardTokensSymbols: curr.rewardTokensSymbols,
                    rewards: curr.rewardTokensNames,
                    change1d: curr.apyPct1D,
                    change7d: curr.apyPct7D,
                    outlook: curr.apy >= 0.005 ? curr.predictions.predictedClass : null,
                    confidence: curr.apy >= 0.005 ? curr.predictions.binnedConfidence : null,
                    url: curr.url,
                    category: curr.category,
                    il7d: curr.il7d,
                    apyBase7d: curr.apyBase7d,
                    apyNet7d: curr.apyNet7d,
                    apyMean30d: curr.apyMean30d,
                    volumeUsd1d: curr.volumeUsd1d,
                    volumeUsd7d: curr.volumeUsd7d,
                    apyBaseInception: curr.apyBaseInception
                });
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
        selectedCategories,
        selectedChains,
        selectedAttributes,
        includeTokens,
        excludeTokens,
        pathname
    ]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [includeTokens.length > 0 &&
                (!selectedAttributes.includes('no_il') || !selectedAttributes.includes('single_exposure')) && ((0, jsx_runtime_1.jsxs)(Announcement_1.AnnouncementWrapper, { children: ["Do you want to see only pools that have a single token? Click", ' ', (0, jsx_runtime_1.jsx)("a", __assign({ style: { textDecoration: 'underline' }, onClick: function () {
                            push({
                                pathname: pathname,
                                query: __assign(__assign({}, query), { attribute: ['no_il', 'single_exposure'] })
                            }, undefined, { shallow: true });
                        } }, { children: "here" }))] })), (0, jsx_runtime_1.jsx)(Filters_1.YieldFiltersV2, { header: "Yield Rankings", poolsNumber: poolsData.length, projectsNumber: selectedProjects.length, chainsNumber: selectedChains.length, tokens: tokens, tokensList: tokenSymbolsList, selectedTokens: includeTokens, chainList: chainList, selectedChains: selectedChains, projectList: projectList, selectedProjects: selectedProjects, categoryList: categoryList, selectedCategories: selectedCategories, attributes: true, tvlRange: true, apyRange: true, show7dBaseApy: true, show7dIL: true, resetFilters: true, show1dVolume: true, show7dVolume: true, showInceptionApy: true }), poolsData.length > 0 ? ((0, jsx_runtime_1.jsx)(Table_1.YieldsPoolsTable, { data: poolsData })) : ((0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ as: "p", style: { margin: 0, textAlign: 'center' } }, { children: "Couldn't find any pools for these filters" })))] }));
};
exports.default = YieldPage;
