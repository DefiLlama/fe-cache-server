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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBridgePageDatanew = exports.getBridgePageData = exports.getBridgeChainsPageData = exports.getBridgeOverviewPageData = exports.getBridges = void 0;
var utils_1 = require("../../../utils");
var utils_2 = require("./utils");
var constants_1 = require("../../../constants");
var getBridges = function () {
    return fetch(constants_1.BRIDGES_API + '/?includeChains=true')
        .then(function (r) { return r.json(); })
        .then(function (_a) {
        var bridges = _a.bridges, chains = _a.chains;
        return ({
            bridges: bridges,
            chains: chains
        });
    });
};
exports.getBridges = getBridges;
var getChainVolumeData = function (chain, chainCoingeckoIds) { return __awaiter(void 0, void 0, void 0, function () {
    var i, chart, formattedChart, e_1, chart, formattedChart;
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
                return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEVOLUME_API, "/").concat(chain)).then(function (resp) { return resp.json(); })];
            case 3:
                chart = _a.sent();
                formattedChart = chart.map(function (chart) {
                    // This is confusing, stats from the endpoint use "deposit" to mean deposit in bridge contract,
                    // i.e., a withdrawal from the chain. Will eventually change that.
                    return {
                        date: chart.date,
                        Deposits: chart.withdrawUSD,
                        Withdrawals: -chart.depositUSD
                    };
                });
                return [2 /*return*/, formattedChart];
            case 4:
                e_1 = _a.sent();
                return [3 /*break*/, 5];
            case 5:
                i++;
                return [3 /*break*/, 1];
            case 6: throw new Error("".concat(constants_1.BRIDGEVOLUME_API, "/").concat(chain, " is broken"));
            case 7: return [2 /*return*/, null];
            case 8: return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, fetch(constants_1.BRIDGEVOLUME_API + '/all').then(function (resp) { return resp.json(); })];
            case 10:
                chart = _a.sent();
                formattedChart = chart.map(function (chart) {
                    return {
                        date: chart.date,
                        volume: (chart.withdrawUSD + chart.depositUSD) / 2,
                        txs: chart.depositTxs + chart.withdrawTxs
                    };
                });
                return [2 /*return*/, formattedChart];
            case 11: return [2 /*return*/];
        }
    });
}); };
var getLargeTransactionsData = function (chain, startTimestamp, endTimestamp) { return __awaiter(void 0, void 0, void 0, function () {
    var i, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < 5)) return [3 /*break*/, 9];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 7, , 8]);
                if (!chain) return [3 /*break*/, 4];
                return [4 /*yield*/, fetch("".concat(constants_1.BRIDGELARGETX_API, "/").concat(chain, "?starttimestamp=").concat(startTimestamp, "&endtimestamp=").concat(endTimestamp)).then(function (resp) { return resp.json(); })];
            case 3: return [2 /*return*/, _a.sent()];
            case 4: return [4 /*yield*/, fetch("".concat(constants_1.BRIDGELARGETX_API, "/all?starttimestamp=").concat(startTimestamp, "&endtimestamp=").concat(endTimestamp)).then(function (resp) { return resp.json(); })];
            case 5: return [2 /*return*/, _a.sent()];
            case 6: return [3 /*break*/, 8];
            case 7:
                e_2 = _a.sent();
                return [3 /*break*/, 8];
            case 8:
                i++;
                return [3 /*break*/, 1];
            case 9: throw new Error("".concat(constants_1.BRIDGELARGETX_API, "/").concat(chain, " is broken"));
        }
    });
}); };
function getBridgeOverviewPageData(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, bridges, chains, chainCoingeckoIds, chartDataByBridge, bridgeNames, bridgeNameToChartDataIndex, chainList, chainVolumeData, currentTimestamp, prevDayTimestamp, bridgeStatsCurrentDay, numberOfDaysForLargeTx, secondsInDay, unformattedLargeTxsData, largeTxsData, filteredBridges;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.getBridges)()];
                case 1:
                    _a = _b.sent(), bridges = _a.bridges, chains = _a.chains;
                    return [4 /*yield*/, fetch(constants_1.CONFIG_API).then(function (r) { return r.json(); })];
                case 2:
                    chainCoingeckoIds = (_b.sent()).chainCoingeckoIds;
                    chartDataByBridge = [];
                    bridgeNames = [];
                    bridgeNameToChartDataIndex = {};
                    return [4 /*yield*/, Promise.all(bridges.map(function (elem, i) { return __awaiter(_this, void 0, void 0, function () {
                            var i_1, charts, formattedCharts, e_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        bridgeNames.push(elem.displayName);
                                        bridgeNameToChartDataIndex[elem.displayName] = i;
                                        i_1 = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i_1 < 5)) return [3 /*break*/, 9];
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 7, , 8]);
                                        charts = [];
                                        if (!!chain) return [3 /*break*/, 4];
                                        return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEVOLUME_API, "/all?id=").concat(elem.id)).then(function (resp) { return resp.json(); })];
                                    case 3:
                                        charts = _a.sent();
                                        return [3 /*break*/, 6];
                                    case 4: return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEVOLUME_API, "/").concat(chain, "?id=").concat(elem.id)).then(function (resp) { return resp.json(); })];
                                    case 5:
                                        charts = _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        formattedCharts = void 0;
                                        if (!chain) {
                                            formattedCharts = charts.map(function (chart) {
                                                return {
                                                    date: chart.date,
                                                    volume: (chart.withdrawUSD + chart.depositUSD) / 2,
                                                    txs: chart.depositTxs + chart.withdrawTxs
                                                };
                                            });
                                        }
                                        else {
                                            formattedCharts = charts.map(function (chart) {
                                                return {
                                                    date: chart.date,
                                                    volume: chart.withdrawUSD + chart.depositUSD,
                                                    txs: chart.depositTxs + chart.withdrawTxs
                                                };
                                            });
                                        }
                                        return [2 /*return*/, formattedCharts];
                                    case 7:
                                        e_3 = _a.sent();
                                        return [3 /*break*/, 8];
                                    case 8:
                                        i_1++;
                                        return [3 /*break*/, 1];
                                    case 9: throw new Error("".concat(constants_1.BRIDGEVOLUME_API, "/?id=").concat(elem.id, " is broken"));
                                }
                            });
                        }); }))
                        // order of chains will update every 24 hrs, can consider changing metric sorted by here
                    ];
                case 3:
                    chartDataByBridge = _b.sent();
                    return [4 /*yield*/, chains
                            .sort(function (a, b) {
                            return b.lastDailyVolume - a.lastDailyVolume;
                        })
                            .map(function (chain) { return chain.name; })];
                case 4:
                    chainList = _b.sent();
                    return [4 /*yield*/, getChainVolumeData(chain, chainCoingeckoIds)];
                case 5:
                    chainVolumeData = _b.sent();
                    currentTimestamp = Math.floor(new Date().getTime() / 1000);
                    prevDayTimestamp = currentTimestamp - 86400 - 3600;
                    bridgeStatsCurrentDay = {};
                    if (!chain) return [3 /*break*/, 7];
                    return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEDAYSTATS_API, "/").concat(prevDayTimestamp, "/").concat(chain)).then(function (resp) {
                            return resp.json();
                        })];
                case 6:
                    bridgeStatsCurrentDay = _b.sent();
                    _b.label = 7;
                case 7:
                    numberOfDaysForLargeTx = chain ? 7 : 1;
                    secondsInDay = 3600 * 24;
                    return [4 /*yield*/, getLargeTransactionsData(chain, currentTimestamp - numberOfDaysForLargeTx * secondsInDay, currentTimestamp)];
                case 8:
                    unformattedLargeTxsData = _b.sent();
                    largeTxsData = unformattedLargeTxsData.map(function (transaction) {
                        var token = transaction.token, symbol = transaction.symbol, isDeposit = transaction.isDeposit, txChain = transaction.chain;
                        var symbolAndTokenForExplorer = "".concat(symbol, "#").concat(token);
                        var correctedIsDeposit = isDeposit;
                        if (chain) {
                            correctedIsDeposit = chain.toLowerCase() === txChain.toLowerCase() ? isDeposit : !isDeposit;
                        }
                        return __assign(__assign({}, transaction), { isDeposit: correctedIsDeposit, symbol: symbolAndTokenForExplorer });
                    });
                    filteredBridges = (0, utils_2.formatBridgesData)({
                        bridges: bridges,
                        chartDataByBridge: chartDataByBridge,
                        bridgeNameToChartDataIndex: bridgeNameToChartDataIndex,
                        chain: chain
                    });
                    return [2 /*return*/, {
                            chains: chainList,
                            filteredBridges: filteredBridges,
                            bridgeNames: bridgeNames,
                            bridgeNameToChartDataIndex: bridgeNameToChartDataIndex,
                            chartDataByBridge: chartDataByBridge,
                            chainVolumeData: chainVolumeData,
                            bridgeStatsCurrentDay: bridgeStatsCurrentDay,
                            largeTxsData: largeTxsData,
                            chain: chain !== null && chain !== void 0 ? chain : 'All'
                        }];
            }
        });
    });
}
exports.getBridgeOverviewPageData = getBridgeOverviewPageData;
function getBridgeChainsPageData() {
    return __awaiter(this, void 0, void 0, function () {
        var chains, chartDataByChain, chainToChartDataIndex, unformattedChartData, useOthers, chartDates, formattedChartEntries, formattedVolumeChartData, chainList, currentTimestamp, prevDayTimestamp, prevDayDataByChain, filteredChains;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, exports.getBridges)()];
                case 1:
                    chains = (_a.sent()).chains;
                    chartDataByChain = [];
                    chainToChartDataIndex = {};
                    return [4 /*yield*/, Promise.all(chains.map(function (chain, i) { return __awaiter(_this, void 0, void 0, function () {
                            var i_2, charts, e_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        chainToChartDataIndex[chain.name] = i;
                                        i_2 = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i_2 < 5)) return [3 /*break*/, 6];
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEVOLUME_API, "/").concat(chain.name)).then(function (resp) { return resp.json(); })];
                                    case 3:
                                        charts = _a.sent();
                                        return [2 /*return*/, charts];
                                    case 4:
                                        e_4 = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 5:
                                        i_2++;
                                        return [3 /*break*/, 1];
                                    case 6: throw new Error("".concat(constants_1.BRIDGEVOLUME_API, "/").concat(chain.name, " is broken"));
                                }
                            });
                        }); }))];
                case 2:
                    chartDataByChain = _a.sent();
                    unformattedChartData = {};
                    useOthers = false;
                    chains.map(function (chain, i) {
                        var charts = chartDataByChain[i];
                        charts.map(function (chart) {
                            var date = chart.date;
                            var netFlow = chart.withdrawUSD - chart.depositUSD;
                            unformattedChartData[date] = unformattedChartData[date] || {};
                            unformattedChartData[date][chain.name] = netFlow;
                        });
                    });
                    chartDates = Object.keys(unformattedChartData);
                    formattedChartEntries = Object.entries(unformattedChartData).reduce(function (acc, data) {
                        var _a;
                        var date = data[0];
                        var netFlows = data[1];
                        var sortednetFlows = Object.entries(netFlows).sort(function (a, b) { return Math.abs(b[1]) - Math.abs(a[1]); });
                        if (sortednetFlows.length > 11) {
                            useOthers = true;
                            var othersnetFlow = sortednetFlows.slice(11).reduce(function (acc, curr) { return (acc += curr[1]); }, 0);
                            sortednetFlows = __spreadArray(__spreadArray([], __read(sortednetFlows.slice(0, 11)), false), [['Others', othersnetFlow]], false);
                        }
                        return __assign(__assign({}, acc), (_a = {}, _a[date] = Object.fromEntries(sortednetFlows), _a));
                    }, {});
                    formattedVolumeChartData = __spreadArray(__spreadArray([], __read(chains), false), ['Others'], false).map(function (chain) {
                        if (chain === 'Others' && !useOthers)
                            return { data: [] };
                        var chainName = chain === 'Others' ? 'Others' : chain.name;
                        if (chainName !== 'Others') {
                            var chartIndex = chainToChartDataIndex[chainName];
                            if (chartDataByChain[chartIndex].length === 0)
                                return { data: [] };
                        }
                        return {
                            name: chainName,
                            data: chartDates.map(function (date) {
                                var _a;
                                return [
                                    JSON.parse(JSON.stringify(new Date((parseInt(date) + 43200) * 1000))),
                                    (_a = formattedChartEntries[date][chainName]) !== null && _a !== void 0 ? _a : 0
                                ];
                            })
                        };
                    })
                        .filter(function (chart) { return chart.data.length !== 0; });
                    return [4 /*yield*/, chains
                            .sort(function (a, b) {
                            return b.volumePrevDay - a.volumePrevDay;
                        })
                            .map(function (chain) { return chain.name; })];
                case 3:
                    chainList = _a.sent();
                    currentTimestamp = Math.floor(new Date().getTime() / 1000);
                    prevDayTimestamp = currentTimestamp - 86400 - 3600;
                    prevDayDataByChain = [];
                    return [4 /*yield*/, Promise.all(chains.map(function (chain) { return __awaiter(_this, void 0, void 0, function () {
                            var i, charts, e_5;
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
                                        return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEDAYSTATS_API, "/").concat(prevDayTimestamp, "/").concat(chain.name)).then(function (resp) {
                                                return resp.json();
                                            })
                                            // can format differently here if needed
                                        ];
                                    case 3:
                                        charts = _a.sent();
                                        // can format differently here if needed
                                        return [2 /*return*/, charts];
                                    case 4:
                                        e_5 = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 5:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 6: throw new Error("".concat(constants_1.BRIDGEDAYSTATS_API, "/").concat(prevDayTimestamp, "/").concat(chain.name, " is broken"));
                                }
                            });
                        }); }))];
                case 4:
                    prevDayDataByChain = _a.sent();
                    filteredChains = (0, utils_2.formatChainsData)({
                        chains: chains,
                        chartDataByChain: chartDataByChain,
                        chainToChartDataIndex: chainToChartDataIndex,
                        prevDayDataByChain: prevDayDataByChain
                    });
                    return [2 /*return*/, {
                            chains: chainList,
                            filteredChains: filteredChains,
                            chainToChartDataIndex: chainToChartDataIndex,
                            formattedVolumeChartData: formattedVolumeChartData
                        }];
            }
        });
    });
}
exports.getBridgeChainsPageData = getBridgeChainsPageData;
function getBridgePageData(bridge) {
    return __awaiter(this, void 0, void 0, function () {
        var bridges, bridgeData, id, chains, icon, displayName, defaultChain, _a, iconType, iconName, logo, bridgeChartDataByChain, chainToChartDataIndex, currentTimestamp, prevDayTimestamp, prevDayDataByChain;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.getBridges)()];
                case 1:
                    bridges = (_b.sent()).bridges;
                    bridgeData = bridges.filter(function (obj) { return (0, utils_1.standardizeProtocolName)(obj.displayName) === (0, utils_1.standardizeProtocolName)(bridge); })[0];
                    id = bridgeData.id, chains = bridgeData.chains, icon = bridgeData.icon, displayName = bridgeData.displayName;
                    defaultChain = chains[0];
                    _a = __read(icon.split(':'), 2), iconType = _a[0], iconName = _a[1];
                    logo = iconType === 'chain' ? (0, utils_1.chainIconUrl)(iconName) : (0, utils_1.tokenIconUrl)(iconName);
                    bridgeChartDataByChain = [];
                    chainToChartDataIndex = {};
                    return [4 /*yield*/, Promise.all(chains.map(function (chain, i) { return __awaiter(_this, void 0, void 0, function () {
                            var i_3, charts, e_6;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        chainToChartDataIndex[chain] = i;
                                        i_3 = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i_3 < 5)) return [3 /*break*/, 6];
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEVOLUME_API, "/").concat(chain, "?id=").concat(id)).then(function (resp) { return resp.json(); })];
                                    case 3:
                                        charts = _a.sent();
                                        return [2 /*return*/, charts];
                                    case 4:
                                        e_6 = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 5:
                                        i_3++;
                                        return [3 /*break*/, 1];
                                    case 6: throw new Error("".concat(constants_1.BRIDGEVOLUME_API, "/").concat(chain, " is broken"));
                                }
                            });
                        }); }))];
                case 2:
                    bridgeChartDataByChain = _b.sent();
                    currentTimestamp = Math.floor(new Date().getTime() / 1000);
                    prevDayTimestamp = currentTimestamp - 86400 - 3600;
                    prevDayDataByChain = [];
                    return [4 /*yield*/, Promise.all(chains.map(function (chain) { return __awaiter(_this, void 0, void 0, function () {
                            var i, charts, e_7;
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
                                        return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEDAYSTATS_API, "/").concat(prevDayTimestamp, "/").concat(chain, "?id=").concat(id)).then(function (resp) {
                                                return resp.json();
                                            })
                                            // can format differently here if needed
                                        ];
                                    case 3:
                                        charts = _a.sent();
                                        // can format differently here if needed
                                        return [2 /*return*/, charts];
                                    case 4:
                                        e_7 = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 5:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 6: throw new Error("".concat(constants_1.BRIDGEDAYSTATS_API, "/").concat(prevDayTimestamp, "/").concat(chain, " is broken"));
                                }
                            });
                        }); }))];
                case 3:
                    prevDayDataByChain = _b.sent();
                    return [2 /*return*/, {
                            displayName: displayName,
                            logo: logo,
                            chains: chains,
                            defaultChain: defaultChain,
                            chainToChartDataIndex: chainToChartDataIndex,
                            bridgeChartDataByChain: bridgeChartDataByChain,
                            prevDayDataByChain: prevDayDataByChain
                        }];
            }
        });
    });
}
exports.getBridgePageData = getBridgePageData;
function getBridgePageDatanew(bridge) {
    return __awaiter(this, void 0, void 0, function () {
        var bridges, bridgeData, id, chains, icon, displayName, _a, iconType, iconName, logo, volumeDataByChain, volume, volumeOnAllChains, currentTimestamp, prevDayTimestamp, statsOnPrevDay, prevDayDataByChain, chainsList, tableDataByChain;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.getBridges)()
                    // find datqa of bridge
                ];
                case 1:
                    bridges = (_b.sent()).bridges;
                    bridgeData = bridges.filter(function (obj) { return (0, utils_1.standardizeProtocolName)(obj.displayName) === (0, utils_1.standardizeProtocolName)(bridge); })[0];
                    id = bridgeData.id, chains = bridgeData.chains, icon = bridgeData.icon, displayName = bridgeData.displayName;
                    _a = __read(icon.split(':'), 2), iconType = _a[0], iconName = _a[1];
                    logo = iconType === 'chain' ? (0, utils_1.chainIconUrl)(iconName) : (0, utils_1.tokenIconUrl)(iconName);
                    volumeDataByChain = {};
                    return [4 /*yield*/, Promise.all(chains.map(function (chain) { return __awaiter(_this, void 0, void 0, function () {
                            var i, charts, e_8;
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
                                        return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEVOLUME_API, "/").concat(chain, "?id=").concat(id)).then(function (resp) { return resp.json(); })];
                                    case 3:
                                        charts = _a.sent();
                                        return [2 /*return*/, charts];
                                    case 4:
                                        e_8 = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 5:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 6: throw new Error("".concat(constants_1.BRIDGEVOLUME_API, "/").concat(chain, " is broken"));
                                }
                            });
                        }); }))];
                case 2:
                    volume = _b.sent();
                    volumeOnAllChains = {};
                    volume.forEach(function (chainVolume, index) {
                        var chartData = [];
                        chainVolume.forEach(function (item) {
                            var date = Number(item.date);
                            chartData.push({ date: date, Deposited: item.depositUSD, Withdrawn: -item.withdrawUSD });
                            if (!volumeOnAllChains[date]) {
                                volumeOnAllChains[date] = { date: date, Deposited: 0, Withdrawn: 0 };
                            }
                            volumeOnAllChains[date] = {
                                date: date,
                                Deposited: volumeOnAllChains[date].Deposited + (item.depositUSD || 0),
                                Withdrawn: volumeOnAllChains[date].Withdrawn - (item.withdrawUSD || 0)
                            };
                        });
                        volumeDataByChain[chains[index]] = chartData;
                    });
                    volumeDataByChain['All Chains'] = Object.values(volumeOnAllChains);
                    currentTimestamp = Math.floor(new Date().getTime() / 1000);
                    prevDayTimestamp = currentTimestamp - 86400 - 3600;
                    return [4 /*yield*/, Promise.all(chains.map(function (chain) { return __awaiter(_this, void 0, void 0, function () {
                            var i, charts, e_9;
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
                                        return [4 /*yield*/, fetch("".concat(constants_1.BRIDGEDAYSTATS_API, "/").concat(prevDayTimestamp, "/").concat(chain, "?id=").concat(id)).then(function (resp) {
                                                return resp.json();
                                            })
                                            // can format differently here if needed
                                        ];
                                    case 3:
                                        charts = _a.sent();
                                        // can format differently here if needed
                                        return [2 /*return*/, charts];
                                    case 4:
                                        e_9 = _a.sent();
                                        return [3 /*break*/, 5];
                                    case 5:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 6: throw new Error("".concat(constants_1.BRIDGEDAYSTATS_API, "/").concat(prevDayTimestamp, "/").concat(chain, " is broken"));
                                }
                            });
                        }); }))];
                case 3:
                    statsOnPrevDay = _b.sent();
                    prevDayDataByChain = {};
                    statsOnPrevDay.forEach(function (data, index) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                        prevDayDataByChain['All Chains'] = {
                            date: Math.max((_b = (_a = prevDayDataByChain['All Chains']) === null || _a === void 0 ? void 0 : _a.date) !== null && _b !== void 0 ? _b : 0, data.date),
                            totalTokensDeposited: __assign(__assign({}, ((_d = (_c = prevDayDataByChain['All Chains']) === null || _c === void 0 ? void 0 : _c.totalTokensDeposited) !== null && _d !== void 0 ? _d : {})), data.totalTokensDeposited),
                            totalTokensWithdrawn: __assign(__assign({}, ((_f = (_e = prevDayDataByChain['All Chains']) === null || _e === void 0 ? void 0 : _e.totalTokensWithdrawn) !== null && _f !== void 0 ? _f : {})), data.totalTokensWithdrawn),
                            totalAddressDeposited: __assign(__assign({}, ((_h = (_g = prevDayDataByChain['All Chains']) === null || _g === void 0 ? void 0 : _g.totalAddressDeposited) !== null && _h !== void 0 ? _h : {})), data.totalAddressDeposited),
                            totalAddressWithdrawn: __assign(__assign({}, ((_k = (_j = prevDayDataByChain['All Chains']) === null || _j === void 0 ? void 0 : _j.totalAddressWithdrawn) !== null && _k !== void 0 ? _k : {})), data.totalAddressWithdrawn)
                        };
                        prevDayDataByChain[chains[index]] = data;
                    });
                    chainsList = __spreadArray(['All Chains'], __read(chains), false);
                    tableDataByChain = {};
                    chainsList.forEach(function (currentChain) {
                        var prevDayData = prevDayDataByChain[currentChain];
                        var tokensTableData = [], addressesTableData = [], tokenDeposits = [], tokenWithdrawals = [], tokenColor = {};
                        if (prevDayData) {
                            var totalTokensDeposited = prevDayData.totalTokensDeposited;
                            var totalTokensWithdrawn = prevDayData.totalTokensWithdrawn;
                            var tokensTableUnformatted_1 = {};
                            Object.entries(totalTokensDeposited).map(function (_a) {
                                var _b, _c;
                                var _d = __read(_a, 2), token = _d[0], tokenData = _d[1];
                                var symbol = tokenData.symbol == null || tokenData.symbol === '' ? 'unknown' : tokenData.symbol;
                                var usdValue = tokenData.usdValue;
                                var key = "".concat(symbol, "#").concat(token);
                                tokensTableUnformatted_1[key] = tokensTableUnformatted_1[key] || {};
                                tokensTableUnformatted_1[key].deposited = ((_b = tokensTableUnformatted_1[key].deposited) !== null && _b !== void 0 ? _b : 0) + usdValue;
                                tokensTableUnformatted_1[key].volume = ((_c = tokensTableUnformatted_1[key].volume) !== null && _c !== void 0 ? _c : 0) + usdValue;
                                // ensure there are no undefined values for deposited/withdrawn so table can be sorted
                                tokensTableUnformatted_1[key].withdrawn = 0;
                            });
                            Object.entries(totalTokensWithdrawn).map(function (_a) {
                                var _b, _c, _d;
                                var _e = __read(_a, 2), token = _e[0], tokenData = _e[1];
                                var symbol = tokenData.symbol == null || tokenData.symbol === '' ? 'unknown' : tokenData.symbol;
                                var usdValue = (_b = tokenData.usdValue) !== null && _b !== void 0 ? _b : 0;
                                var key = "".concat(symbol, "#").concat(token);
                                tokensTableUnformatted_1[key] = tokensTableUnformatted_1[key] || {};
                                tokensTableUnformatted_1[key].withdrawn = ((_c = tokensTableUnformatted_1[key].withdrawn) !== null && _c !== void 0 ? _c : 0) + usdValue;
                                tokensTableUnformatted_1[key].volume = ((_d = tokensTableUnformatted_1[key].volume) !== null && _d !== void 0 ? _d : 0) + usdValue;
                                if (!tokensTableUnformatted_1[key].deposited) {
                                    tokensTableUnformatted_1[key].deposited = 0;
                                }
                            });
                            tokensTableData = Object.entries(tokensTableUnformatted_1)
                                .filter(function (_a) {
                                var _b = __read(_a, 2), symbol = _b[0], volumeData = _b[1];
                                return volumeData.volume !== 0;
                            })
                                .map(function (entry) {
                                return __assign({ symbol: entry[0] }, entry[1]);
                            });
                            var fullTokenDeposits = Object.values(totalTokensDeposited).map(function (tokenData) {
                                return { name: tokenData.symbol, value: tokenData.usdValue };
                            });
                            var otherDeposits = fullTokenDeposits.slice(10).reduce(function (total, entry) {
                                return (total += entry.value);
                            }, 0);
                            tokenDeposits = fullTokenDeposits
                                .slice(0, 10)
                                .sort(function (a, b) { return b.value - a.value; })
                                .concat({ name: 'Others', value: otherDeposits });
                            var fullTokenWithdrawals = Object.values(totalTokensWithdrawn).map(function (tokenData) {
                                return { name: tokenData.symbol, value: tokenData.usdValue };
                            });
                            var otherWithdrawals = fullTokenWithdrawals.slice(10).reduce(function (total, entry) {
                                return (total += entry.value);
                            }, 0);
                            tokenWithdrawals = fullTokenWithdrawals
                                .slice(0, 10)
                                .sort(function (a, b) { return b.value - a.value; })
                                .concat({ name: 'Others', value: otherWithdrawals });
                            tokenColor = Object.fromEntries(__spreadArray(__spreadArray(__spreadArray([], __read(tokenDeposits), false), __read(tokenWithdrawals), false), ['Others'], false).map(function (token) {
                                return typeof token === 'string' ? ['-', (0, utils_1.getRandomColor)()] : [token.name, (0, utils_1.getRandomColor)()];
                            }));
                            var totalAddressesDeposited = prevDayData.totalAddressDeposited;
                            var totalAddressesWithdrawn = prevDayData.totalAddressWithdrawn;
                            var addressesTableUnformatted_1 = {};
                            Object.entries(totalAddressesDeposited).map(function (_a) {
                                var _b, _c;
                                var _d = __read(_a, 2), address = _d[0], addressData = _d[1];
                                var txs = addressData.txs;
                                var usdValue = addressData.usdValue;
                                addressesTableUnformatted_1[address] = addressesTableUnformatted_1[address] || {};
                                addressesTableUnformatted_1[address].deposited = ((_b = addressesTableUnformatted_1[address].deposited) !== null && _b !== void 0 ? _b : 0) + usdValue;
                                addressesTableUnformatted_1[address].txs = ((_c = addressesTableUnformatted_1[address].txs) !== null && _c !== void 0 ? _c : 0) + txs;
                            });
                            Object.entries(totalAddressesWithdrawn).map(function (_a) {
                                var _b, _c;
                                var _d = __read(_a, 2), address = _d[0], addressData = _d[1];
                                var txs = addressData.txs;
                                var usdValue = addressData.usdValue;
                                addressesTableUnformatted_1[address] = addressesTableUnformatted_1[address] || {};
                                addressesTableUnformatted_1[address].withdrawn = ((_b = addressesTableUnformatted_1[address].withdrawn) !== null && _b !== void 0 ? _b : 0) + usdValue;
                                addressesTableUnformatted_1[address].txs = ((_c = addressesTableUnformatted_1[address].txs) !== null && _c !== void 0 ? _c : 0) + txs;
                            });
                            addressesTableData = Object.entries(addressesTableUnformatted_1)
                                .filter(function (_a) {
                                var _b = __read(_a, 2), address = _b[0], addressData = _b[1];
                                return addressData.txs !== 0;
                            })
                                .map(function (entry) {
                                return __assign({ address: entry[0], deposited: 0, withdrawn: 0 }, entry[1]);
                            });
                        }
                        tableDataByChain[currentChain] = {
                            tokensTableData: tokensTableData,
                            addressesTableData: addressesTableData,
                            tokenDeposits: tokenDeposits,
                            tokenWithdrawals: tokenWithdrawals,
                            tokenColor: tokenColor
                        };
                    });
                    return [2 /*return*/, {
                            displayName: displayName,
                            logo: logo,
                            chains: __spreadArray(['All Chains'], __read(chains), false),
                            defaultChain: 'All Chains',
                            volumeDataByChain: volumeDataByChain,
                            tableDataByChain: tableDataByChain
                        }];
            }
        });
    });
}
exports.getBridgePageDatanew = getBridgePageDatanew;
