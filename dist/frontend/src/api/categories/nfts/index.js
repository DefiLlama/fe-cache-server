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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchNFTsList = exports.getNFTSearchResults = exports.getNFTChainsData = exports.getNFTCollectionChartData = exports.getNFTMarketplaceChartData = exports.getNFTChainChartData = exports.getNFTCollection = exports.getNFTCollectionsByMarketplace = exports.getNFTCollectionsByChain = exports.getNFTCollections = exports.getNFTRoyaltyHistory = exports.getNFTRoyaltyData = exports.getNFTMarketplacesData = exports.getNFTData = exports.getNFTStatistics = void 0;
var swr_1 = __importDefault(require("swr"));
var hooks_1 = require("../../../hooks");
var useSWR_1 = require("../../../utils/useSWR");
var constants_1 = require("../../../constants");
var utils_1 = require("../../../utils");
var async_1 = require("../../../utils/async");
var fetch = async_1.fetchWithErrorLogging;
var getNFTStatistics = function (chart) {
    var _a, _b, _c, _d;
    var _e = (chart.length &&
        chart.reduce(function (volumes, data) {
            var _a, _b, _c, _d;
            if (volumes.totalVolumeUSD >= 0 && volumes.totalVolume >= 0) {
                volumes.totalVolumeUSD += (_a = data.volumeUSD) !== null && _a !== void 0 ? _a : 0;
                volumes.totalVolume += (_b = data.volume) !== null && _b !== void 0 ? _b : 0;
            }
            else {
                volumes.totalVolumeUSD = (_c = data.volumeUSD) !== null && _c !== void 0 ? _c : 0;
                volumes.totalVolume = (_d = data.volume) !== null && _d !== void 0 ? _d : 0;
            }
            return volumes;
        }, {})) || {
        totalVolume: 0,
        totalVolumeUSD: 0
    }, totalVolume = _e.totalVolume, totalVolumeUSD = _e.totalVolumeUSD;
    var dailyVolume = chart.length ? ((_a = chart[chart.length - 1]) === null || _a === void 0 ? void 0 : _a.volume) || 0 : 0;
    var dailyVolumeUSD = chart.length ? ((_b = chart[chart.length - 1]) === null || _b === void 0 ? void 0 : _b.volumeUSD) || 0 : 0;
    var dailyChange = chart.length
        ? ((dailyVolumeUSD - ((_c = chart[chart.length - 2]) === null || _c === void 0 ? void 0 : _c.volumeUSD)) / ((_d = chart[chart.length - 2]) === null || _d === void 0 ? void 0 : _d.volumeUSD)) * 100
        : 0;
    return {
        totalVolumeUSD: totalVolumeUSD,
        totalVolume: totalVolume,
        dailyVolumeUSD: dailyVolumeUSD,
        dailyVolume: dailyVolume,
        dailyChange: dailyChange
    };
};
exports.getNFTStatistics = getNFTStatistics;
var getNFTData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, collections, volumes_1, data, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Promise.all([
                        fetch(constants_1.NFT_COLLECTIONS_API).then(function (r) { return r.json(); }),
                        fetch(constants_1.NFT_VOLUME_API).then(function (r) { return r.json(); })
                    ])
                    // const statistics = getNFTStatistics(chart)
                ];
            case 1:
                _a = __read.apply(void 0, [_b.sent()
                    // const statistics = getNFTStatistics(chart)
                    , 2]), collections = _a[0], volumes_1 = _a[1];
                data = collections.map(function (colleciton) {
                    var _a, _b, _c, _d;
                    var volume = volumes_1.find(function (cx) { return cx.collection === colleciton.collectionId; });
                    return __assign(__assign({}, colleciton), { volume1d: Number(((_a = volume === null || volume === void 0 ? void 0 : volume['1DayVolume']) !== null && _a !== void 0 ? _a : 0).toFixed(2)), volume7d: Number(((_b = volume === null || volume === void 0 ? void 0 : volume['7DayVolume']) !== null && _b !== void 0 ? _b : 0).toFixed(2)), volume30d: Number(((_c = volume === null || volume === void 0 ? void 0 : volume['30DayVolume']) !== null && _c !== void 0 ? _c : 0).toFixed(2)), sales1d: Number(((_d = volume === null || volume === void 0 ? void 0 : volume['1DaySales']) !== null && _d !== void 0 ? _d : 0).toFixed(2)) });
                });
                return [2 /*return*/, {
                        chart: [],
                        collections: data,
                        statistics: []
                    }];
            case 2:
                e_1 = _b.sent();
                console.log(e_1);
                return [2 /*return*/, {
                        chart: [],
                        collections: [],
                        statistics: {}
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getNFTData = getNFTData;
var formatNftVolume = function (volume, column) {
    var sumByDay = {};
    var chartStacks = {};
    var volumeData = volume.reduce(function (acc, curr) {
        var _a;
        var date = Math.floor(Number(curr.date) / 1000);
        if (!acc[date]) {
            acc[date] = {};
        }
        chartStacks[curr.exchangeName] = 'stackA';
        sumByDay[date] = (sumByDay[date] || 0) + curr[column];
        acc[date][curr.exchangeName] = Number((_a = curr[column]) === null || _a === void 0 ? void 0 : _a.toFixed(3));
        return acc;
    }, {});
    var dominance = [];
    for (var date in volumeData) {
        var value = { date: Math.floor(Number(date)) };
        for (var exchangeName in volumeData[date]) {
            value[exchangeName] = (0, utils_1.getDominancePercent)(volumeData[date][exchangeName], sumByDay[date]);
        }
        dominance.push(value);
    }
    return [volumeData, dominance, chartStacks];
};
var getNFTMarketplacesData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, volume, volumeSorted, _b, volumeData, dominance, volumeChartStacks, _c, tradeData, dominanceTrade, tradeChartStacks, marketplaces, colors;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    fetch(constants_1.NFT_MARKETPLACES_STATS_API).then(function (res) { return res.json(); }),
                    fetch(constants_1.NFT_MARKETPLACES_VOLUME_API).then(function (res) { return res.json(); })
                ])];
            case 1:
                _a = __read.apply(void 0, [_d.sent(), 2]), data = _a[0], volume = _a[1];
                volumeSorted = volume.map(function (v) { return (__assign(__assign({}, v), { date: new Date(v.day).getTime() })); }).sort(function (a, b) { return a.date - b.date; });
                _b = __read(formatNftVolume(volumeSorted, 'sum'), 3), volumeData = _b[0], dominance = _b[1], volumeChartStacks = _b[2];
                _c = __read(formatNftVolume(volumeSorted, 'count'), 3), tradeData = _c[0], dominanceTrade = _c[1], tradeChartStacks = _c[2];
                marketplaces = Object.keys(volumeChartStacks);
                colors = {};
                marketplaces.forEach(function (chain, index) {
                    colors[chain] = (0, utils_1.getColorFromNumber)(index, 10);
                });
                colors['Others'] = '#AAAAAA';
                return [2 /*return*/, {
                        data: data,
                        volume: Object.entries(volumeData).map(function (_a) {
                            var _b = __read(_a, 2), date = _b[0], values = _b[1];
                            return (__assign({ date: date }, values));
                        }),
                        dominance: dominance,
                        trades: Object.entries(tradeData).map(function (_a) {
                            var _b = __read(_a, 2), date = _b[0], values = _b[1];
                            return (__assign({ date: date }, values));
                        }),
                        dominanceTrade: dominanceTrade,
                        marketplaces: marketplaces,
                        stackColors: colors,
                        volumeChartStacks: volumeChartStacks,
                        tradeChartStacks: tradeChartStacks
                    }];
        }
    });
}); };
exports.getNFTMarketplacesData = getNFTMarketplacesData;
var getNFTRoyaltyData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, royalties_1, collections, data, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Promise.all([
                        fetch(constants_1.NFT_ROYALTIES_API).then(function (r) { return r.json(); }),
                        fetch(constants_1.NFT_COLLECTIONS_API).then(function (r) { return r.json(); })
                    ])];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 2]), royalties_1 = _a[0], collections = _a[1];
                data = collections
                    .map(function (c) {
                    var royalty = royalties_1.find(function (r) { return "0x".concat(r.collection) === c.collectionId; });
                    if (!royalty)
                        return {};
                    return {
                        defillamaId: c.collectionId,
                        name: c.name,
                        displayName: c.name,
                        logo: "https://icons.llamao.fi/icons/nfts/".concat(c.collecitonId, "?w=48&h=48"),
                        chains: ['Ethereum'],
                        total24h: royalty.usd1D,
                        total7d: royalty.usd7D,
                        total30d: royalty.usd30D
                        // totalAllTime: royalty.usdLifetime
                    };
                })
                    .filter(function (c) { return c.defillamaId; });
                return [2 /*return*/, {
                        royalties: data
                    }];
            case 2:
                err_1 = _b.sent();
                console.log(err_1);
                return [2 /*return*/, {
                        royalties: []
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getNFTRoyaltyData = getNFTRoyaltyData;
var getNFTRoyaltyHistory = function (slug) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, royaltyChart, collection, royalty, data, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Promise.all([
                        fetch("".concat(constants_1.NFT_ROYALTY_HISTORY_API, "/").concat(slug)).then(function (r) { return r.json(); }),
                        fetch("".concat(constants_1.NFT_COLLECTION_API, "/").concat(slug)).then(function (r) { return r.json(); }),
                        fetch("".concat(constants_1.NFT_ROYALTY_API, "/").concat(slug)).then(function (r) { return r.json(); })
                    ])];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 3]), royaltyChart = _a[0], collection = _a[1], royalty = _a[2];
                data = [
                    {
                        defillamaId: slug,
                        name: collection[0].name,
                        displayName: collection[0].name,
                        logo: "https://icons.llamao.fi/icons/nfts/".concat(slug, "?w=48&h=48"),
                        address: slug,
                        url: collection[0].projectUrl,
                        twitter: collection[0].twitterUsername,
                        category: 'Nft',
                        totalDataChart: royaltyChart,
                        total24h: royalty[0].usd1D,
                        total7d: royalty[0].usd7D,
                        total30d: royalty[0].usd30D
                        // totalAllTime: royalty[0].usdLifetime
                    }
                ];
                return [2 /*return*/, {
                        royaltyHistory: data
                    }];
            case 2:
                err_2 = _b.sent();
                console.log(err_2);
                return [2 /*return*/, {
                        royaltyHistory: []
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getNFTRoyaltyHistory = getNFTRoyaltyHistory;
var getNFTCollections = function () { return __awaiter(void 0, void 0, void 0, function () {
    var collections, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch(constants_1.NFT_COLLECTIONS_API).then(function (r) { return r.json(); })];
            case 1:
                collections = (_a.sent()).data;
                return [2 /*return*/, collections];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getNFTCollections = getNFTCollections;
var getNFTCollectionsByChain = function (chain) { return __awaiter(void 0, void 0, void 0, function () {
    var collections, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch("".concat(constants_1.NFT_COLLECTIONS_API, "/chain/").concat(chain)).then(function (r) { return r.json(); })];
            case 1:
                collections = (_a.sent()).data;
                return [2 /*return*/, collections];
            case 2:
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getNFTCollectionsByChain = getNFTCollectionsByChain;
var getNFTCollectionsByMarketplace = function (marketplace) { return __awaiter(void 0, void 0, void 0, function () {
    var collections, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch("".concat(constants_1.NFT_COLLECTIONS_API, "/marketplace/").concat(marketplace)).then(function (r) { return r.json(); })];
            case 1:
                collections = (_a.sent()).data;
                return [2 /*return*/, collections];
            case 2:
                e_4 = _a.sent();
                console.log(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getNFTCollectionsByMarketplace = getNFTCollectionsByMarketplace;
var flagOutliers = function (sales) {
    var values = sales.map(function (s) { return s[1]; });
    var mean = values.reduce(function (acc, val) { return acc + val; }, 0) / values.length;
    var std = Math.sqrt(values.reduce(function (acc, val) { return acc + Math.pow(val - mean, 2); }, 0) / (values.length - 1));
    // zscores
    var scores = values.map(function (s) { return Math.abs((s - mean) / std); });
    // sigma threshold
    return sales.map(function (s, i) { return __spreadArray(__spreadArray([], __read(s), false), [scores[i] >= 2], false); });
};
var median = function (sales) {
    var middle = Math.floor(sales.length / 2);
    if (sales.length % 2 === 0) {
        return (sales[middle - 1] + sales[middle]) / 2;
    }
    return sales[middle];
};
var getNFTCollection = function (slug) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, data, sales, stats, floorHistory, orderbook, salesExOutliers, X_1, x, u, hourlyT, start, stop_1, timestamp, medianWindow_1, salesMedian1d, e_5;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Promise.all([
                        fetch("".concat(constants_1.NFT_COLLECTION_API, "/").concat(slug)).then(function (r) { return r.json(); }),
                        fetch("".concat(constants_1.NFT_COLLECTION_SALES_API, "/").concat(slug))
                            .then(function (r) { return r.json(); })
                            .then(function (data) { return (data && Array.isArray(data) ? data.map(function (i) { return [i[0] * 1000, i[1]]; }) : []); }),
                        fetch("".concat(constants_1.NFT_COLLECTION_STATS_API, "/").concat(slug)).then(function (r) { return r.json(); }),
                        fetch("".concat(constants_1.NFT_COLLECTION_FLOOR_HISTORY_API, "/").concat(slug)).then(function (r) { return r.json(); }),
                        fetch("".concat(constants_1.NFT_COLLECTIONS_ORDERBOOK_API, "/").concat(slug)).then(function (r) { return r.json(); })
                    ])];
            case 1:
                _a = __read.apply(void 0, [_d.sent(), 5]), data = _a[0], sales = _a[1], stats = _a[2], floorHistory = _a[3], orderbook = _a[4];
                salesExOutliers = flagOutliers(sales).filter(function (i) { return i[2] === false; });
                X_1 = salesExOutliers.sort(function (a, b) { return a[0] - b[0]; });
                x = 6;
                u = 3600 * x * 1000;
                hourlyT = [];
                if (X_1.length) {
                    start = Math.ceil(X_1[0][0] / u) * u;
                    stop_1 = Math.ceil(X_1[X_1.length - 1][0] / u) * u;
                    // create hourly timestamps
                    for (timestamp = start; timestamp <= stop_1; timestamp += u) {
                        hourlyT.push(timestamp);
                    }
                }
                medianWindow_1 = X_1.length > 300 ? 24 : 24 * 7;
                salesMedian1d = hourlyT.map(function (hour) {
                    // daily offset
                    var offset = hour - 3600 * 1000 * medianWindow_1;
                    var valuesInRange = X_1.reduce(function (acc, _a) {
                        var _b = __read(_a, 2), timestamp = _b[0], value = _b[1];
                        if (timestamp >= offset && timestamp <= hour) {
                            acc.push(value);
                        }
                        return acc;
                    }, []).sort(function (a, b) { return a - b; }); // sort values, required for median
                    var medianValue = median(valuesInRange);
                    return [hour, medianValue];
                });
                return [2 /*return*/, {
                        data: data,
                        sales: sales,
                        salesExOutliers: salesExOutliers,
                        salesMedian1d: salesMedian1d,
                        stats: stats.map(function (item) { return [Math.floor(new Date(item.day).getTime() / 1000), item.sum]; }),
                        name: (_c = (_b = data === null || data === void 0 ? void 0 : data[0]) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : null,
                        address: slug,
                        floorHistory: floorHistory.map(function (item) { return [
                            Math.floor(new Date(item.timestamp).getTime() / 1000),
                            item.floorPrice
                        ]; }),
                        orderbook: orderbook
                    }];
            case 2:
                e_5 = _d.sent();
                console.log(e_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getNFTCollection = getNFTCollection;
var getNFTChainChartData = function (chain) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, fetch("".concat(constants_1.NFT_CHART_API, "/chain/").concat(chain)).then(function (r) { return r.json(); })];
        }
        catch (e) {
            console.log(e);
        }
        return [2 /*return*/];
    });
}); };
exports.getNFTChainChartData = getNFTChainChartData;
var getNFTMarketplaceChartData = function (marketplace) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, fetch("".concat(constants_1.NFT_CHART_API, "/marketplace/").concat(marketplace)).then(function (r) { return r.json(); })];
        }
        catch (e) {
            console.log(e);
        }
        return [2 /*return*/];
    });
}); };
exports.getNFTMarketplaceChartData = getNFTMarketplaceChartData;
var getNFTCollectionChartData = function (slug) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, fetch("".concat(constants_1.NFT_CHART_API, "/collection/").concat(slug)).then(function (r) { return r.json(); })];
        }
        catch (e) {
            console.log(e);
        }
        return [2 /*return*/];
    });
}); };
exports.getNFTCollectionChartData = getNFTCollectionChartData;
var getNFTChainsData = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, fetch(constants_1.NFT_CHAINS_API).then(function (r) { return r.json(); })];
        }
        catch (e) {
            console.log(e);
        }
        return [2 /*return*/];
    });
}); };
exports.getNFTChainsData = getNFTChainsData;
var getNFTSearchResults = function (query) { return __awaiter(void 0, void 0, void 0, function () {
    var hits, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!query) return [3 /*break*/, 2];
                return [4 /*yield*/, fetch("".concat(constants_1.NFT_SEARCH_API, "?query=").concat(query)).then(function (r) { return r.json(); })];
            case 1:
                hits = (_a.sent()).hits;
                return [2 /*return*/, hits.map(function (hit) { return hit._source; })];
            case 2: return [2 /*return*/, []];
            case 3:
                e_6 = _a.sent();
                console.log(e_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getNFTSearchResults = getNFTSearchResults;
var useFetchNFTsList = function (searchValue) {
    var _a, _b, _c;
    var debouncedSearchTerm = (0, hooks_1.useDebounce)(searchValue, 500);
    var _d = (0, swr_1.default)(debouncedSearchTerm ? "".concat(constants_1.NFT_SEARCH_API, "?query=").concat(debouncedSearchTerm) : constants_1.NFT_COLLECTIONS_API, useSWR_1.fetcher), data = _d.data, error = _d.error;
    return {
        data: (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.hits) === null || _a === void 0 ? void 0 : _a.map(function (el) { return el._source; })) !== null && _b !== void 0 ? _b : data === null || data === void 0 ? void 0 : data.data) !== null && _c !== void 0 ? _c : null,
        error: error === null || error === void 0 ? void 0 : error.error,
        loading: (!data && !error && !!searchValue) || searchValue != debouncedSearchTerm
    };
};
exports.useFetchNFTsList = useFetchNFTsList;
