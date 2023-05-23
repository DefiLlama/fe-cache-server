"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPeggedAssetPageData = exports.getPeggedChainsPageData = exports.getPeggedOverviewPageData = exports.getPeggedBridgeInfo = exports.getPeggedRates = exports.getPeggedPrices = exports.getPeggedAssets = void 0;
var utils_1 = require("../../../utils");
var constants_1 = require("../../../constants");
var utils_2 = require("./utils");
var async_1 = require("../../../utils/async");
var getPeggedAssets = function () {
    return fetch(constants_1.PEGGEDS_API + '?includeChains=true' + '&includePrices=true')
        .then(function (r) { return r.json(); })
        .then(function (_a) {
        var peggedAssets = _a.peggedAssets, chains = _a.chains;
        return ({
            protocolsDict: peggedAssets.reduce(function (acc, curr) {
                acc[(0, utils_1.standardizeProtocolName)(curr.name)] = curr;
                return acc;
            }, {}),
            peggedAssets: peggedAssets,
            chains: chains
        });
    });
};
exports.getPeggedAssets = getPeggedAssets;
var getPeggedPrices = function () { return fetch(constants_1.PEGGEDPRICES_API).then(function (r) { return r.json(); }); };
exports.getPeggedPrices = getPeggedPrices;
var getPeggedRates = function () { return fetch(constants_1.PEGGEDRATES_API).then(function (r) { return r.json(); }); };
exports.getPeggedRates = getPeggedRates;
var getPeggedBridgeInfo = function () {
    return fetch('https://llama-stablecoins-data.s3.eu-central-1.amazonaws.com/bridgeInfo.json').then(function (r) { return r.json(); });
};
exports.getPeggedBridgeInfo = getPeggedBridgeInfo;
var getChainTVLData = function (chain, chainCoingeckoIds) { return __awaiter(void 0, void 0, void 0, function () {
    var i, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!chain) return [3 /*break*/, 9];
                if (!chainCoingeckoIds[chain]) return [3 /*break*/, 7];
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < 5)) return [3 /*break*/, 6];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, fetch("".concat(constants_1.CHART_API, "/").concat(chain)).then(function (resp) { return resp.json(); })];
            case 3: return [2 /*return*/, _a.sent()];
            case 4:
                e_1 = _a.sent();
                return [3 /*break*/, 5];
            case 5:
                i++;
                return [3 /*break*/, 1];
            case 6: throw new Error("".concat(constants_1.CHART_API, "/").concat(chain, " is broken"));
            case 7: return [2 /*return*/, null];
            case 8: return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, fetch(constants_1.CHART_API).then(function (resp) { return resp.json(); })];
            case 10: return [2 /*return*/, _a.sent()];
            case 11: return [2 /*return*/];
        }
    });
}); };
function getPeggedOverviewPageData(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, peggedAssets, chains, chainCoingeckoIds, priceData, rateData, allChartsStartTimestamp, chartDataByPeggedAsset, peggedAssetNames, peggedNameToChartDataIndex, chainList, chainsSet, chainTVLData, filteredPeggedAssets;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.getPeggedAssets)()];
                case 1:
                    _a = _b.sent(), peggedAssets = _a.peggedAssets, chains = _a.chains;
                    return [4 /*yield*/, fetch(constants_1.CONFIG_API).then(function (r) { return r.json(); })];
                case 2:
                    chainCoingeckoIds = (_b.sent()).chainCoingeckoIds;
                    return [4 /*yield*/, (0, exports.getPeggedPrices)()];
                case 3:
                    priceData = _b.sent();
                    return [4 /*yield*/, (0, exports.getPeggedRates)()];
                case 4:
                    rateData = _b.sent();
                    allChartsStartTimestamp = 1617148800 // for /stablecoins page, charts begin on April 1, 2021, to reduce size of page
                    ;
                    chartDataByPeggedAsset = [];
                    peggedAssetNames = [] // fix name of this variable
                    ;
                    peggedNameToChartDataIndex = {};
                    return [4 /*yield*/, Promise.all(peggedAssets.map(function (elem, i) { return __awaiter(_this, void 0, void 0, function () {
                            var i_1, charts, formattedCharts, e_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (peggedAssetNames.includes(elem.symbol)) {
                                            peggedAssetNames.push("".concat(elem.name));
                                        }
                                        else {
                                            peggedAssetNames.push(elem.symbol);
                                        }
                                        peggedNameToChartDataIndex[elem.name] = i;
                                        i_1 = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i_1 < 5)) return [3 /*break*/, 9];
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 7, , 8]);
                                        charts = [];
                                        if (!!chain) return [3 /*break*/, 4];
                                        return [4 /*yield*/, fetch("".concat(constants_1.PEGGEDCHART_API, "/all?stablecoin=").concat(elem.id, "&startts=").concat(allChartsStartTimestamp)).then(function (resp) { return resp.json(); })];
                                    case 3:
                                        charts = _a.sent();
                                        return [3 /*break*/, 6];
                                    case 4: return [4 /*yield*/, fetch("".concat(constants_1.PEGGEDCHART_API, "/").concat(chain, "?stablecoin=").concat(elem.id)).then(function (resp) { return resp.json(); })];
                                    case 5:
                                        charts = _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        formattedCharts = charts.map(function (chart) {
                                            return {
                                                date: chart.date,
                                                mcap: chart.totalCirculatingUSD
                                            };
                                        });
                                        return [2 /*return*/, formattedCharts];
                                    case 7:
                                        e_2 = _a.sent();
                                        return [3 /*break*/, 8];
                                    case 8:
                                        i_1++;
                                        return [3 /*break*/, 1];
                                    case 9: throw new Error("".concat(constants_1.CHART_API, "/").concat(elem, " is broken"));
                                }
                            });
                        }); }))];
                case 5:
                    chartDataByPeggedAsset = _b.sent();
                    return [4 /*yield*/, chains
                            .sort(function (a, b) {
                            var bTotalCirculatings = Object.values(b.totalCirculatingUSD);
                            var bMcap = bTotalCirculatings.reduce(function (c, d) { return c + d; });
                            var aTotalCirculatings = Object.values(a.totalCirculatingUSD);
                            var aMcap = aTotalCirculatings.reduce(function (c, d) { return c + d; });
                            return bMcap - aMcap;
                        })
                            .map(function (chain) { return chain.name; })];
                case 6:
                    chainList = _b.sent();
                    chainsSet = new Set();
                    peggedAssets.forEach(function (_a) {
                        var chains = _a.chains;
                        chains.forEach(function (chain) {
                            if (!chain) {
                                chainsSet.add(chain);
                            }
                            else {
                                if (chainList.includes(chain)) {
                                    chainsSet.add(chain);
                                }
                            }
                        });
                    });
                    return [4 /*yield*/, getChainTVLData(chain, chainCoingeckoIds)];
                case 7:
                    chainTVLData = _b.sent();
                    filteredPeggedAssets = (0, utils_2.formatPeggedAssetsData)({
                        peggedAssets: peggedAssets,
                        chartDataByPeggedAsset: chartDataByPeggedAsset,
                        priceData: priceData,
                        rateData: rateData,
                        peggedNameToChartDataIndex: peggedNameToChartDataIndex,
                        chain: chain
                    });
                    return [2 /*return*/, {
                            chains: chainList.filter(function (chain) { return chainsSet.has(chain); }),
                            filteredPeggedAssets: filteredPeggedAssets,
                            peggedAssetNames: peggedAssetNames,
                            peggedNameToChartDataIndex: peggedNameToChartDataIndex,
                            chartDataByPeggedAsset: chartDataByPeggedAsset,
                            chainTVLData: chainTVLData,
                            chain: chain !== null && chain !== void 0 ? chain : 'All'
                        }];
            }
        });
    });
}
exports.getPeggedOverviewPageData = getPeggedOverviewPageData;
function getPeggedChainsPageData() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, peggedAssets, chains, chainCoingeckoIds, chartData, chainList, chainsSet, tvlsDataByChain, chainsTVLData, chainsGroupbyParent, peggedChartDataByChain, peggedDomDataByChain, chainDominances, chainCirculatings, chainTVLData;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.getPeggedAssets)()];
                case 1:
                    _a = _b.sent(), peggedAssets = _a.peggedAssets, chains = _a.chains;
                    return [4 /*yield*/, fetch(constants_1.CONFIG_API).then(function (r) { return r.json(); })];
                case 2:
                    chainCoingeckoIds = (_b.sent()).chainCoingeckoIds;
                    return [4 /*yield*/, fetch("".concat(constants_1.PEGGEDCHART_API, "/all")).then(function (r) { return r.json(); })];
                case 3:
                    chartData = _b.sent();
                    return [4 /*yield*/, chains
                            .sort(function (a, b) {
                            var bTotalCirculatings = Object.values(b.totalCirculatingUSD);
                            var bMcap = bTotalCirculatings.reduce(function (c, d) { return c + d; });
                            var aTotalCirculatings = Object.values(a.totalCirculatingUSD);
                            var aMcap = aTotalCirculatings.reduce(function (c, d) { return c + d; });
                            return bMcap - aMcap;
                        })
                            .map(function (chain) { return chain.name; })];
                case 4:
                    chainList = _b.sent();
                    chainsSet = new Set();
                    return [4 /*yield*/, Promise.allSettled(chainList.map(function (elem) { return __awaiter(_this, void 0, void 0, function () {
                            var i, e_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!chainCoingeckoIds[elem]) return [3 /*break*/, 7];
                                        i = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < 5)) return [3 /*break*/, 6];
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, fetch("".concat(constants_1.CHART_API, "/").concat(elem)).then(function (resp) { return resp.json(); })];
                                    case 3: return [2 /*return*/, _a.sent()];
                                    case 4:
                                        e_3 = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 5:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 6: throw new Error("".concat(constants_1.CHART_API, "/").concat(elem, " is broken"));
                                    case 7: return [2 /*return*/, null];
                                }
                            });
                        }); }))];
                case 5:
                    tvlsDataByChain = _b.sent();
                    chainsTVLData = tvlsDataByChain.map(function (t) { return (t.status === 'fulfilled' ? t.value : {}); });
                    chainsGroupbyParent = {};
                    chainList.forEach(function (chain) {
                        var e_4, _a;
                        var _b;
                        var parent = (_b = chainCoingeckoIds[chain]) === null || _b === void 0 ? void 0 : _b.parent;
                        if (parent) {
                            if (!chainsGroupbyParent[parent.chain]) {
                                chainsGroupbyParent[parent.chain] = {};
                            }
                            try {
                                for (var _c = __values(parent.types), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    var type = _d.value;
                                    if (!chainsGroupbyParent[parent.chain][type]) {
                                        chainsGroupbyParent[parent.chain][type] = [];
                                    }
                                    chainsGroupbyParent[parent.chain][type].push(chain);
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                        }
                    });
                    peggedAssets.forEach(function (_a) {
                        var chains = _a.chains;
                        chains.forEach(function (chain) {
                            if (!chain) {
                                chainsSet.add(chain);
                            }
                            else {
                                if (chainList.includes(chain)) {
                                    chainsSet.add(chain);
                                }
                            }
                        });
                    });
                    peggedChartDataByChain = [];
                    return [4 /*yield*/, Promise.all(chainList.map(function (chain) { return __awaiter(_this, void 0, void 0, function () {
                            var i, e_5;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        i = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < 5)) return [3 /*break*/, 6];
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, fetch("".concat(constants_1.PEGGEDCHART_API, "/").concat(chain, "?startts=1652241600")).then(function (resp) { return resp.json(); })];
                                    case 3: return [2 /*return*/, _a.sent()];
                                    case 4:
                                        e_5 = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 5:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 6: throw new Error("".concat(constants_1.PEGGEDCHART_API, "/").concat(chain, " is broken"));
                                }
                            });
                        }); }))];
                case 6:
                    peggedChartDataByChain = _b.sent();
                    peggedDomDataByChain = [];
                    return [4 /*yield*/, Promise.all(chainList.map(function (chain) { return __awaiter(_this, void 0, void 0, function () {
                            var i, res, e_6;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        i = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < 5)) return [3 /*break*/, 6];
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, fetch("".concat(constants_1.PEGGEDDOMINANCE_API, "/").concat(chain)).then(function (resp) { return resp.json(); })];
                                    case 3:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                    case 4:
                                        e_6 = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 5:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 6: throw new Error("".concat(constants_1.PEGGEDDOMINANCE_API, "/").concat(chain, " is broken"));
                                }
                            });
                        }); }))];
                case 7:
                    peggedDomDataByChain = _b.sent();
                    chainDominances = {};
                    peggedDomDataByChain.map(function (charts, i) {
                        var lastChart = charts[charts.length - 1];
                        if (!lastChart)
                            return;
                        var greatestChainMcap = lastChart.greatestMcap;
                        var chainName = chainList[i];
                        chainDominances[chainName] = greatestChainMcap;
                    });
                    chainCirculatings = (0, utils_2.formatPeggedChainsData)({
                        chainList: chainList,
                        peggedChartDataByChain: peggedChartDataByChain,
                        chainDominances: chainDominances,
                        chainsTVLData: chainsTVLData
                    });
                    peggedChartDataByChain = peggedChartDataByChain.map(function (charts) {
                        var formattedCharts = charts.map(function (chart) {
                            return {
                                date: chart.date,
                                mcap: chart.totalCirculatingUSD
                            };
                        });
                        return formattedCharts;
                    });
                    return [4 /*yield*/, getChainTVLData(undefined, undefined)];
                case 8:
                    chainTVLData = _b.sent();
                    return [2 /*return*/, {
                            chainCirculatings: chainCirculatings,
                            chartData: chartData,
                            peggedChartDataByChain: peggedChartDataByChain,
                            chainList: chainList,
                            chainsGroupbyParent: chainsGroupbyParent,
                            chainTVLData: chainTVLData
                        }];
            }
        });
    });
}
exports.getPeggedChainsPageData = getPeggedChainsPageData;
var getPeggedAssetPageData = function (peggedasset) { return __awaiter(void 0, void 0, void 0, function () {
    var peggedNameToPeggedIDMapping, peggedID, _a, res, chainCoingeckoIds, peggedChart, bridgeInfo, pegType, totalCirculating, unreleased, mcap, chainsUnique, chainsData, chainCirculatings;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, async_1.fetchWithThrows)(constants_1.PEGGEDCONFIG_API).then(function (resp) { return resp.json(); })];
            case 1:
                peggedNameToPeggedIDMapping = _b.sent();
                peggedID = peggedNameToPeggedIDMapping[peggedasset];
                return [4 /*yield*/, Promise.all(["".concat(constants_1.PEGGED_API, "/").concat(peggedID), constants_1.CONFIG_API].map(function (apiEndpoint) { return (0, async_1.fetchWithThrows)(apiEndpoint).then(function (r) { return r.json(); }); }))];
            case 2:
                _a = __read.apply(void 0, [_b.sent(), 2]), res = _a[0], chainCoingeckoIds = _a[1].chainCoingeckoIds;
                return [4 /*yield*/, (0, async_1.fetchWithThrows)("".concat(constants_1.PEGGEDCHART_API, "/all?stablecoin=").concat(peggedID)).then(function (resp) { return resp.json(); })];
            case 3:
                peggedChart = _b.sent();
                return [4 /*yield*/, (0, exports.getPeggedBridgeInfo)()];
            case 4:
                bridgeInfo = _b.sent();
                pegType = res.pegType;
                totalCirculating = (0, utils_1.getPrevPeggedTotalFromChart)(peggedChart, 0, 'totalCirculating', pegType);
                unreleased = (0, utils_1.getPrevPeggedTotalFromChart)(peggedChart, 0, 'totalUnreleased', pegType);
                mcap = (0, utils_1.getPrevPeggedTotalFromChart)(peggedChart, 0, 'totalCirculatingUSD', pegType);
                chainsUnique = Object.keys(res.chainBalances);
                return [4 /*yield*/, Promise.all(chainsUnique.map(function (elem) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, res.chainBalances[elem].tokens];
                        });
                    }); }))];
            case 5:
                chainsData = _b.sent();
                chainCirculatings = chainsUnique
                    .map(function (chainName, i) {
                    var _a, _b;
                    var circulating = (0, utils_1.getPrevPeggedTotalFromChart)(chainsData[i], 0, 'circulating', pegType);
                    var unreleased = (0, utils_1.getPrevPeggedTotalFromChart)(chainsData[i], 0, 'unreleased', pegType);
                    var bridgedTo = (0, utils_1.getPrevPeggedTotalFromChart)(chainsData[i], 0, 'bridgedTo', pegType);
                    var bridges = (0, utils_1.getPrevPeggedTotalFromChart)(chainsData[i], 0, 'bridgedTo', 'bridges');
                    var circulatingPrevDay = (0, utils_1.getPrevPeggedTotalFromChart)(chainsData[i], 1, 'circulating', pegType);
                    var circulatingPrevWeek = (0, utils_1.getPrevPeggedTotalFromChart)(chainsData[i], 7, 'circulating', pegType);
                    var circulatingPrevMonth = (0, utils_1.getPrevPeggedTotalFromChart)(chainsData[i], 30, 'circulating', pegType);
                    var change_1d = (0, utils_1.getPercentChange)(circulating, circulatingPrevDay);
                    var change_7d = (0, utils_1.getPercentChange)(circulating, circulatingPrevWeek);
                    var change_1m = (0, utils_1.getPercentChange)(circulating, circulatingPrevMonth);
                    return {
                        circulating: circulating,
                        unreleased: unreleased,
                        change_1d: change_1d,
                        change_7d: change_7d,
                        change_1m: change_1m,
                        circulatingPrevDay: circulatingPrevDay,
                        circulatingPrevWeek: circulatingPrevWeek,
                        circulatingPrevMonth: circulatingPrevMonth,
                        bridgedAmount: bridgedTo,
                        bridges: bridges,
                        name: chainName,
                        symbol: (_b = (_a = chainCoingeckoIds[chainName]) === null || _a === void 0 ? void 0 : _a.symbol) !== null && _b !== void 0 ? _b : '-'
                    };
                })
                    .sort(function (a, b) { return b.circulating - a.circulating; });
                return [2 /*return*/, {
                        props: {
                            chainsUnique: chainsUnique,
                            chainCirculatings: chainCirculatings,
                            peggedAssetData: res,
                            totalCirculating: totalCirculating,
                            unreleased: unreleased,
                            mcap: mcap,
                            bridgeInfo: bridgeInfo
                        }
                    }];
        }
    });
}); };
exports.getPeggedAssetPageData = getPeggedAssetPageData;
