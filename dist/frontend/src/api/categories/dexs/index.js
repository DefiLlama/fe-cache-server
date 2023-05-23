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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVolumesByChain = exports.getChainPageData = exports.getDexPageData = exports.getDexs = exports.getDex = void 0;
var constants_1 = require("../../../constants");
var utils_1 = require("../../../utils");
var utils_2 = require("./utils");
var getDex = function (dexName) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, fetch("".concat(constants_1.DEX_BASE_API, "/").concat(dexName)).then(function (r) { return r.json(); })];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
exports.getDex = getDex;
var getDexs = function () {
    return fetch("".concat(constants_1.DEXS_API, "?excludeTotalDataChartBreakdown=true&excludeTotalDataChart=true")).then(function (r) { return r.json(); });
};
exports.getDexs = getDexs;
// - used in /[dex]
function getDexPageData(dex) {
    return __awaiter(this, void 0, void 0, function () {
        var dexResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(constants_1.DEX_BASE_API, "/").concat(dex)).then(function (r) { return r.json(); })];
                case 1:
                    dexResponse = _a.sent();
                    return [2 /*return*/, {
                            props: dexResponse
                        }];
            }
        });
    });
}
exports.getDexPageData = getDexPageData;
// - used in /dexs and /dexs/[chain]
var getChainPageData = function (chain) { return __awaiter(void 0, void 0, void 0, function () {
    var API, _a, dexs, totalVolume, changeVolume1d, changeVolume7d, changeVolume30d, totalDataChart, totalDataChartBreakdown, allChains, getProtocolsRaw, protocolsData, tvlData, dexsWithSubrows;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                API = "".concat(constants_1.DEXS_API);
                if (chain !== undefined)
                    API = "".concat(API, "/").concat(chain);
                API = "".concat(API, "?excludeTotalDataChartBreakdown=true");
                return [4 /*yield*/, fetch(API).then(function (res) { return res.json(); })];
            case 1:
                _a = (_b.sent()), dexs = _a.dexs, totalVolume = _a.totalVolume, changeVolume1d = _a.changeVolume1d, changeVolume7d = _a.changeVolume7d, changeVolume30d = _a.changeVolume30d, totalDataChart = _a.totalDataChart, totalDataChartBreakdown = _a.totalDataChartBreakdown, allChains = _a.allChains;
                getProtocolsRaw = function () { return fetch(constants_1.PROTOCOLS_API).then(function (r) { return r.json(); }); };
                return [4 /*yield*/, getProtocolsRaw()];
            case 2:
                protocolsData = _b.sent();
                tvlData = protocolsData.protocols.reduce(function (acc, pd) {
                    acc[pd.name] = pd.tvlPrevDay;
                    return acc;
                }, {});
                dexsWithSubrows = dexs.map(function (dex) { return (__assign(__assign({}, dex), { volumetvl: dex.totalVolume24h / tvlData[dex.name], dominance: (100 * dex.totalVolume24h) / totalVolume, chains: dex.chains.map(utils_2.formatChain), subRows: dex.protocolVersions
                        ? Object.entries(dex.protocolVersions)
                            .map(function (_a) {
                            var _b = __read(_a, 2), versionName = _b[0], summary = _b[1];
                            return (__assign(__assign(__assign({}, dex), { name: "".concat(dex.name, " - ").concat(versionName.toUpperCase()), displayName: "".concat(dex.name, " - ").concat(versionName.toUpperCase()) }), summary));
                        })
                            .sort(function (first, second) { return 0 - (first.totalVolume24h > second.totalVolume24h ? 1 : -1); })
                        : null })); });
                return [2 /*return*/, {
                        props: {
                            dexs: dexsWithSubrows,
                            totalVolume: totalVolume,
                            changeVolume1d: changeVolume1d,
                            changeVolume30d: changeVolume30d,
                            changeVolume7d: changeVolume7d,
                            totalDataChart: totalDataChart,
                            chain: chain ? chain : 'All',
                            tvlData: tvlData,
                            totalDataChartBreakdown: totalDataChartBreakdown,
                            allChains: allChains
                        }
                    }];
        }
    });
}); };
exports.getChainPageData = getChainPageData;
// - used in /dexs/chains
var getVolumesByChain = function () { return __awaiter(void 0, void 0, void 0, function () {
    var allChains, volumesByChain, tableData, chartData, dateKeys, volumes, totalVolume24hrs, chainColors, chartStacks, formattedChartData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("".concat(constants_1.DEXS_API, "?excludeTotalDataChartBreakdown=true&excludeTotalDataChart=true")).then(function (res) { return res.json(); })];
            case 1:
                allChains = (_a.sent()).allChains;
                return [4 /*yield*/, Promise.all(allChains.map(function (chain) { return (0, exports.getChainPageData)(chain); }))];
            case 2:
                volumesByChain = _a.sent();
                tableData = volumesByChain.map(function (_a) {
                    var _b = _a.props, totalVolume = _b.totalVolume, changeVolume1d = _b.changeVolume1d, changeVolume30d = _b.changeVolume30d, chain = _b.chain, changeVolume7d = _b.changeVolume7d;
                    return ({
                        name: chain,
                        logo: (0, utils_1.chainIconUrl)(chain),
                        totalVolume: totalVolume,
                        changeVolume1d: changeVolume1d,
                        changeVolume30d: changeVolume30d,
                        changeVolume7d: changeVolume7d,
                        dominance: 0
                    });
                });
                chartData = {};
                volumesByChain.forEach(function (_a) {
                    var _b = _a.props, totalDataChart = _b.totalDataChart, chain = _b.chain;
                    totalDataChart.forEach(function (_a) {
                        var _b, _c;
                        var _d = __read(_a, 2), dateString = _d[0], volume = _d[1];
                        var date = Number(dateString);
                        if (chartData[date]) {
                            chartData[date] = __assign(__assign({}, chartData[date]), (_b = {}, _b[chain] = volume, _b));
                        }
                        else {
                            var closestTimestamp = 0;
                            // +- 6hours
                            for (var i = date - 21600; i <= date + 21600; i++) {
                                if (chartData[i]) {
                                    closestTimestamp = i;
                                }
                            }
                            if (!closestTimestamp) {
                                chartData[date] = {};
                                closestTimestamp = date;
                            }
                            chartData[closestTimestamp] = __assign(__assign({}, chartData[closestTimestamp]), (_c = {}, _c[chain] = volume, _c));
                        }
                    });
                });
                dateKeys = Object.keys(chartData).sort(function (a, b) { return Number(a) - Number(b); });
                volumes = chartData[dateKeys[dateKeys.length - 1]];
                totalVolume24hrs = Object.values(volumes).reduce(function (acc, curr) { return (acc += curr); }, 0);
                chainColors = {
                    Others: '#AAAAAA'
                };
                chartStacks = {
                    Others: 'a'
                };
                tableData = tableData.map(function (row) { return (__assign(__assign({}, row), { dominance: (0, utils_1.getDominancePercent)(row.totalVolume, totalVolume24hrs) })); });
                allChains.forEach(function (chain, index) {
                    // set unique color on each chain
                    chainColors[chain] = (0, utils_1.getColorFromNumber)(index, 9);
                    chartStacks[chain] = 'a';
                });
                formattedChartData = dateKeys.map(function (date) {
                    var volumesAtDate = Object.entries(chartData[date]);
                    if (volumesAtDate.length > 10) {
                        return __assign(__assign({ date: date }, Object.fromEntries(volumesAtDate.slice(0, 11))), { Others: volumesAtDate.slice(11).reduce(function (acc, curr) { return (acc += curr[1]); }, 0) });
                    }
                    return __assign({ date: date }, chartData[date]);
                });
                return [2 /*return*/, {
                        props: {
                            tableData: tableData,
                            chartData: formattedChartData,
                            chartStacks: chartStacks,
                            chainColors: chainColors
                        }
                    }];
        }
    });
}); };
exports.getVolumesByChain = getVolumesByChain;
