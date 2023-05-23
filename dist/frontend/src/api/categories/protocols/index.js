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
exports.formatGovernanceData = exports.getLSDPageData = exports.getChainsPageData = exports.getNewChainsPageData = exports.getCategoriesPageData = exports.getForkPageData = exports.getOraclePageData = exports.getChainPageData = exports.getSimpleProtocolsPageData = exports.getProtocolsPageData = exports.fuseProtocolData = exports.getProtocolEmissons = exports.getAllProtocolEmissions = exports.getProtocol = exports.getProtocols = exports.getProtocolsRaw = void 0;
var utils_1 = require("../../../utils");
var constants_1 = require("../../../constants");
var utils_2 = require("./utils");
var adaptors_1 = require("../../../api/categories/adaptors");
var stablecoins_1 = require("../stablecoins");
var defi_1 = require("../../../hooks/data/defi");
var async_1 = require("../../../utils/async");
var perf_1 = require("../../../utils/perf");
var fetch = async_1.fetchWithErrorLogging;
var getProtocolsRaw = function () { return fetch(constants_1.PROTOCOLS_API).then(function (r) { return r.json(); }); };
exports.getProtocolsRaw = getProtocolsRaw;
var getProtocols = function () {
    return fetch(constants_1.PROTOCOLS_API)
        .then(function (r) { return r.json(); })
        .then(function (_a) {
        var protocols = _a.protocols, chains = _a.chains, parentProtocols = _a.parentProtocols;
        return ({
            protocolsDict: protocols.reduce(function (acc, curr) {
                acc[(0, utils_1.standardizeProtocolName)(curr.name)] = curr;
                return acc;
            }, {}),
            protocols: protocols,
            chains: chains,
            parentProtocols: parentProtocols
        });
    });
};
exports.getProtocols = getProtocols;
var getProtocol = function (protocolName) { return __awaiter(void 0, void 0, void 0, function () {
    var data, isNewlyListedProtocol_1, hourlyData, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, (0, perf_1.fetchWithPerformaceLogging)("".concat(constants_1.PROTOCOL_API, "/").concat(protocolName))];
            case 1:
                data = _a.sent();
                isNewlyListedProtocol_1 = true;
                Object.values(data.chainTvls).forEach(function (chain) {
                    var _a;
                    if (((_a = chain.tvl) === null || _a === void 0 ? void 0 : _a.length) > 7) {
                        isNewlyListedProtocol_1 = false;
                    }
                });
                if (!(isNewlyListedProtocol_1 && !data.isParentProtocol)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, perf_1.fetchWithPerformaceLogging)("".concat(constants_1.HOURLY_PROTOCOL_API, "/").concat(protocolName))];
            case 2:
                hourlyData = _a.sent();
                return [2 /*return*/, __assign(__assign({}, hourlyData), { isHourlyChart: true })];
            case 3: return [2 /*return*/, data];
            case 4: return [3 /*break*/, 6];
            case 5:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getProtocol = getProtocol;
var getAllProtocolEmissions = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch("".concat(constants_1.PROTOCOL_EMISSIONS_API)).then(function (res) { return res.json(); })];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res.map(function (protocol) {
                        var _a, _b, _c, _d, _e, _f, _g, _h;
                        var upcomingEvent = protocol.events.find(function (e) { return e.timestamp >= Date.now() / 1000; });
                        var tSymbol = protocol.name === 'LooksRare' ? 'LOOKS' : (_d = (_c = (_b = (_a = protocol.tokenPrice) === null || _a === void 0 ? void 0 : _a.coins) === null || _b === void 0 ? void 0 : _b[protocol.token]) === null || _c === void 0 ? void 0 : _c.symbol) !== null && _d !== void 0 ? _d : null;
                        return __assign(__assign({}, protocol), { upcomingEvent: upcomingEvent || {}, tPrice: (_h = (_g = (_f = (_e = protocol.tokenPrice) === null || _e === void 0 ? void 0 : _e.coins) === null || _f === void 0 ? void 0 : _f[protocol.token]) === null || _g === void 0 ? void 0 : _g.price) !== null && _h !== void 0 ? _h : null, tSymbol: tSymbol });
                    })];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllProtocolEmissions = getAllProtocolEmissions;
var getProtocolEmissons = function (protocolName) { return __awaiter(void 0, void 0, void 0, function () {
    var list, res, data, metadata, name_1, protocolEmissions_1, emissionCategories_1, prices, tokenPrice, chartData, pieChartData, stackColors_1, e_3;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fetch(constants_1.PROTOCOL_EMISSIONS_LIST_API).then(function (r) { return r.json(); })];
            case 1:
                list = _f.sent();
                if (!list.includes(protocolName))
                    return [2 /*return*/, { data: [], categories: [] }];
                return [4 /*yield*/, fetch("".concat(constants_1.PROTOCOL_EMISSION_API, "/").concat(protocolName))
                        .then(function (r) { return r.json(); })
                        .then(function (r) { return JSON.parse(r.body); })];
            case 2:
                res = _f.sent();
                data = res.data, metadata = res.metadata, name_1 = res.name;
                protocolEmissions_1 = {};
                emissionCategories_1 = [];
                return [4 /*yield*/, fetch("https://coins.llama.fi/prices/current/".concat(metadata.token, "?searchWidth=4h"))
                        .then(function (res) { return res.json(); })
                        .catch(function (err) {
                        console.log(err);
                        return {};
                    })];
            case 3:
                prices = _f.sent();
                tokenPrice = (_b = (_a = prices === null || prices === void 0 ? void 0 : prices.coins) === null || _a === void 0 ? void 0 : _a[metadata.token]) !== null && _b !== void 0 ? _b : {};
                data.forEach(function (emission) {
                    var label = emission.label
                        .split(' ')
                        .map(function (l) { return (0, utils_1.capitalizeFirstLetter)(l); })
                        .join(' ');
                    if (emissionCategories_1.includes(label)) {
                        return;
                    }
                    emissionCategories_1.push(label);
                    emission.data.forEach(function (value) {
                        var _a;
                        if (!protocolEmissions_1[value.timestamp]) {
                            protocolEmissions_1[value.timestamp] = {};
                        }
                        protocolEmissions_1[value.timestamp] = __assign(__assign({}, protocolEmissions_1[value.timestamp]), (_a = {}, _a[label] = value.unlocked, _a));
                    });
                });
                chartData = Object.entries(protocolEmissions_1).map(function (_a) {
                    var _b = __read(_a, 2), date = _b[0], values = _b[1];
                    return (__assign({ date: date }, values));
                });
                pieChartData = Object.entries(chartData[chartData.length - 1] || {})
                    .filter(function (_a) {
                    var _b = __read(_a, 1), key = _b[0];
                    return key !== 'date';
                })
                    .map(function (_a) {
                    var _b = __read(_a, 2), name = _b[0], value = _b[1];
                    return ({ name: name, value: value });
                });
                stackColors_1 = {};
                pieChartData.forEach(function (_a, index) {
                    var name = _a.name;
                    stackColors_1[name] = (0, utils_1.getColorFromNumber)(index, 6);
                });
                if (protocolName == 'looksrare') {
                    tokenPrice.symbol = 'LOOKS';
                }
                return [2 /*return*/, {
                        chartData: chartData,
                        pieChartData: pieChartData,
                        stackColors: stackColors_1,
                        sources: (_c = metadata === null || metadata === void 0 ? void 0 : metadata.sources) !== null && _c !== void 0 ? _c : [],
                        notes: (_d = metadata === null || metadata === void 0 ? void 0 : metadata.notes) !== null && _d !== void 0 ? _d : [],
                        events: (_e = metadata === null || metadata === void 0 ? void 0 : metadata.events) !== null && _e !== void 0 ? _e : [],
                        categories: emissionCategories_1,
                        hallmarks: data.length > 0 ? [[Date.now() / 1000, 'Today']] : [],
                        name: name_1 || null,
                        tokenPrice: tokenPrice
                    }];
            case 4:
                e_3 = _f.sent();
                console.log(e_3);
                return [2 /*return*/, { data: [], categories: [] }];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getProtocolEmissons = getProtocolEmissons;
var fuseProtocolData = function (protocolData) {
    var _a, _b, _c, _d, _e, _f;
    var tvlBreakdowns = (_a = protocolData === null || protocolData === void 0 ? void 0 : protocolData.currentChainTvls) !== null && _a !== void 0 ? _a : {};
    var historicalChainTvls = (_b = protocolData === null || protocolData === void 0 ? void 0 : protocolData.chainTvls) !== null && _b !== void 0 ? _b : {};
    var tvlByChain = (_e = (_d = Object.entries((_c = protocolData === null || protocolData === void 0 ? void 0 : protocolData.currentChainTvls) !== null && _c !== void 0 ? _c : {})) === null || _d === void 0 ? void 0 : _d.sort(function (a, b) { return b[1] - a[1]; })) !== null && _e !== void 0 ? _e : [];
    var onlyChains = tvlByChain.filter(function (c) {
        var _a;
        var name = c[0];
        if (name[0] === ((_a = name[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || name.includes('-')) {
            return false;
        }
        else
            return true;
    });
    var chains = onlyChains.length === 0 ? (_f = protocolData === null || protocolData === void 0 ? void 0 : protocolData.chains) !== null && _f !== void 0 ? _f : [] : [onlyChains[0][0]];
    return __assign(__assign({}, protocolData), { tvlBreakdowns: tvlBreakdowns, tvlByChain: tvlByChain, chains: chains, historicalChainTvls: historicalChainTvls });
};
exports.fuseProtocolData = fuseProtocolData;
// used in /protocols/[category]
function getProtocolsPageData(category, chain) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, protocols, chains, parentProtocols, chainsSet, filteredProtocols;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.getProtocols)()];
                case 1:
                    _a = _b.sent(), protocols = _a.protocols, chains = _a.chains, parentProtocols = _a.parentProtocols;
                    chainsSet = new Set();
                    protocols.forEach(function (_a) {
                        var chains = _a.chains, pCategory = _a.category;
                        chains.forEach(function (chain) {
                            if (!category || !chain) {
                                chainsSet.add(chain);
                            }
                            else {
                                if ((pCategory === null || pCategory === void 0 ? void 0 : pCategory.toLowerCase()) === (category === null || category === void 0 ? void 0 : category.toLowerCase()) && chains.includes(chain)) {
                                    chainsSet.add(chain);
                                }
                            }
                        });
                    });
                    filteredProtocols = (0, utils_2.formatProtocolsData)({ category: category, protocols: protocols, chain: chain });
                    return [2 /*return*/, {
                            filteredProtocols: filteredProtocols,
                            chain: chain !== null && chain !== void 0 ? chain : 'All',
                            category: category,
                            chains: chains.filter(function (chain) { return chainsSet.has(chain); }),
                            parentProtocols: parentProtocols
                        }];
            }
        });
    });
}
exports.getProtocolsPageData = getProtocolsPageData;
// - used in /airdrops, /protocols, /recent, /top-gainers-and-losers, /top-protocols, /watchlist
function getSimpleProtocolsPageData(propsToKeep) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, protocols, chains, filteredProtocols;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, exports.getProtocolsRaw)()];
                case 1:
                    _a = _b.sent(), protocols = _a.protocols, chains = _a.chains;
                    filteredProtocols = (0, utils_2.formatProtocolsData)({
                        protocols: protocols,
                        protocolProps: propsToKeep
                    });
                    return [2 /*return*/, { protocols: filteredProtocols, chains: chains }];
            }
        });
    });
}
exports.getSimpleProtocolsPageData = getSimpleProtocolsPageData;
var getExtraTvlCharts = function (data) {
    var _a = data || {}, _b = _a.tvl, tvl = _b === void 0 ? [] : _b, _c = _a.staking, staking = _c === void 0 ? [] : _c, _d = _a.borrowed, borrowed = _d === void 0 ? [] : _d, _e = _a.pool2, pool2 = _e === void 0 ? [] : _e, _f = _a.vesting, vesting = _f === void 0 ? [] : _f, _g = _a.offers, offers = _g === void 0 ? [] : _g, _h = _a.doublecounted, doublecounted = _h === void 0 ? [] : _h, _j = _a.liquidstaking, liquidstaking = _j === void 0 ? [] : _j, _k = _a.dcAndLsOverlap, dcAndLsOverlap = _k === void 0 ? [] : _k;
    var chart = tvl.map(function (_a) {
        var _b = __read(_a, 2), date = _b[0], totalLiquidityUSD = _b[1];
        return [date, Math.trunc(totalLiquidityUSD)];
    });
    var extraTvlCharts = {
        staking: staking.map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], totalLiquidityUSD = _b[1];
            return [date, Math.trunc(totalLiquidityUSD)];
        }),
        borrowed: borrowed.map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], totalLiquidityUSD = _b[1];
            return [date, Math.trunc(totalLiquidityUSD)];
        }),
        pool2: pool2.map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], totalLiquidityUSD = _b[1];
            return [date, Math.trunc(totalLiquidityUSD)];
        }),
        vesting: vesting.map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], totalLiquidityUSD = _b[1];
            return [date, Math.trunc(totalLiquidityUSD)];
        }),
        offers: offers.map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], totalLiquidityUSD = _b[1];
            return [date, Math.trunc(totalLiquidityUSD)];
        }),
        doublecounted: doublecounted.map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], totalLiquidityUSD = _b[1];
            return [date, Math.trunc(totalLiquidityUSD)];
        }),
        liquidstaking: liquidstaking.map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], totalLiquidityUSD = _b[1];
            return [date, Math.trunc(totalLiquidityUSD)];
        }),
        dcAndLsOverlap: dcAndLsOverlap.map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], totalLiquidityUSD = _b[1];
            return [date, Math.trunc(totalLiquidityUSD)];
        })
    };
    return {
        chart: chart,
        extraTvlCharts: extraTvlCharts
    };
};
// - used in / and /[chain]
function getChainPageData(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, chartData, _b, protocols, chains, parentProtocols, filteredProtocols, charts, protocolsList;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, Promise.all([constants_1.CHART_API + (chain ? '/' + chain : ''), constants_1.PROTOCOLS_API].map(function (url) { return fetch(url).then(function (r) { return r.json(); }).catch(); }))];
                case 1:
                    _a = __read.apply(void 0, [_c.sent(), 2]), chartData = _a[0], _b = _a[1], protocols = _b.protocols, chains = _b.chains, parentProtocols = _b.parentProtocols;
                    filteredProtocols = (0, utils_2.formatProtocolsData)({
                        chain: chain,
                        protocols: protocols,
                        removeBridges: true
                    });
                    charts = getExtraTvlCharts(chartData);
                    protocolsList = (0, defi_1.formatProtocolsList)({
                        protocols: filteredProtocols,
                        parentProtocols: parentProtocols,
                        extraTvlsEnabled: {}
                    })
                        .slice(0, 30)
                        .map(function (protocol) {
                        var _a;
                        for (var prop in protocol) {
                            if (protocol[prop] === undefined) {
                                protocol[prop] = null;
                            }
                            if (prop === 'subRows') {
                                (_a = protocol[prop]) === null || _a === void 0 ? void 0 : _a.map(function (subRow) {
                                    for (var subProp in subRow) {
                                        if (subRow[subProp] === undefined) {
                                            subRow[subProp] = null;
                                        }
                                    }
                                    return subRow;
                                });
                            }
                        }
                        return protocol;
                    });
                    return [2 /*return*/, {
                            props: __assign(__assign(__assign({}, (chain && { chain: chain })), { chainsSet: chains, protocolsList: protocolsList }), charts)
                        }];
            }
        });
    });
}
exports.getChainPageData = getChainPageData;
// - used in /oracles and /oracles/[name]
function getOraclePageData(oracle) {
    var _a;
    if (oracle === void 0) { oracle = null; }
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, _d, chart, _e, oracles, protocols, oracleExists, filteredProtocols, chartData, oraclesUnique, data_1, oraclesProtocols, orc, oracleLinks, colors_1, e_4;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Promise.all([constants_1.ORACLE_API, constants_1.PROTOCOLS_API].map(function (url) { return fetch(url).then(function (r) { return r.json(); }); }))];
                case 1:
                    _b = __read.apply(void 0, [_f.sent(), 2]), _c = _b[0], _d = _c.chart, chart = _d === void 0 ? {} : _d, _e = _c.oracles, oracles = _e === void 0 ? {} : _e, protocols = _b[1].protocols;
                    oracleExists = !oracle || oracles[oracle];
                    if (!oracleExists) {
                        return [2 /*return*/, {
                                notFound: true
                            }];
                    }
                    filteredProtocols = (0, utils_2.formatProtocolsData)({ oracle: oracle, protocols: protocols });
                    chartData = Object.entries(chart);
                    oraclesUnique = Object.entries(chartData[chartData.length - 1][1])
                        .sort(function (a, b) { return b[1].tvl - a[1].tvl; })
                        .map(function (orc) { return orc[0]; });
                    if (oracle) {
                        data_1 = [];
                        chartData.forEach(function (_a) {
                            var _b = __read(_a, 2), date = _b[0], tokens = _b[1];
                            var value = tokens[oracle];
                            if (value) {
                                data_1.push([date, value]);
                            }
                        });
                        chartData = data_1;
                    }
                    oraclesProtocols = {};
                    for (orc in oracles) {
                        oraclesProtocols[orc] = (_a = oracles[orc]) === null || _a === void 0 ? void 0 : _a.length;
                    }
                    oracleLinks = [{ label: 'All', to: "/oracles" }].concat(oraclesUnique.map(function (o) { return ({ label: o, to: "/oracles/".concat(o) }); }));
                    colors_1 = {};
                    oraclesUnique.forEach(function (chain, index) {
                        colors_1[chain] = (0, utils_1.getColorFromNumber)(index, 6);
                    });
                    colors_1['Others'] = '#AAAAAA';
                    return [2 /*return*/, {
                            props: {
                                tokens: oraclesUnique,
                                tokenLinks: oracleLinks,
                                token: oracle,
                                tokensProtocols: oraclesProtocols,
                                filteredProtocols: filteredProtocols,
                                chartData: chartData,
                                oraclesColors: colors_1
                            }
                        }];
                case 2:
                    e_4 = _f.sent();
                    console.log(e_4);
                    return [2 /*return*/, {
                            notFound: true
                        }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getOraclePageData = getOraclePageData;
// - used in /forks and /forks/[name]
function getForkPageData(fork) {
    var _a;
    if (fork === void 0) { fork = null; }
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, _d, chart, _e, forks, protocols, forkExists, chartData, forksUnique, protocolsData_1, parentTokens_1, data_2, protocol, forksProtocols, frk, forkLinks, filteredProtocols, colors_2, e_5;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Promise.all([constants_1.FORK_API, constants_1.PROTOCOLS_API].map(function (url) { return fetch(url).then(function (r) { return r.json(); }); }))];
                case 1:
                    _b = __read.apply(void 0, [_f.sent(), 2]), _c = _b[0], _d = _c.chart, chart = _d === void 0 ? {} : _d, _e = _c.forks, forks = _e === void 0 ? {} : _e, protocols = _b[1].protocols;
                    forkExists = !fork || forks[fork];
                    if (!forkExists) {
                        return [2 /*return*/, {
                                notFound: true
                            }];
                    }
                    chartData = Object.entries(chart);
                    forksUnique = Object.entries(chartData[chartData.length - 1][1])
                        .sort(function (a, b) { return b[1].tvl - a[1].tvl; })
                        .map(function (fr) { return fr[0]; });
                    protocolsData_1 = (0, utils_2.formatProtocolsData)({ protocols: protocols });
                    parentTokens_1 = [];
                    if (fork) {
                        data_2 = [];
                        chartData.forEach(function (_a) {
                            var _b = __read(_a, 2), date = _b[0], tokens = _b[1];
                            var value = tokens[fork];
                            if (value) {
                                data_2.push([date, value]);
                            }
                        });
                        chartData = data_2;
                        protocol = protocolsData_1.find(function (p) { return p.name.toLowerCase() === fork.toLowerCase(); });
                        if (protocol) {
                            parentTokens_1.push(protocol);
                        }
                    }
                    else {
                        forksUnique.forEach(function (fork) {
                            var protocol = protocolsData_1.find(function (p) { return p.name.toLowerCase() === fork.toLowerCase(); });
                            if (protocol) {
                                parentTokens_1.push(protocol);
                            }
                        });
                    }
                    forksProtocols = {};
                    for (frk in forks) {
                        forksProtocols[frk] = (_a = forks[frk]) === null || _a === void 0 ? void 0 : _a.length;
                    }
                    forkLinks = [{ label: 'All', to: "/forks" }].concat(forksUnique.map(function (o) { return ({ label: o, to: "/forks/".concat(o) }); }));
                    filteredProtocols = (0, utils_2.formatProtocolsData)({ fork: fork, protocols: protocols });
                    colors_2 = {};
                    forksUnique.forEach(function (chain, index) {
                        colors_2[chain] = (0, utils_1.getColorFromNumber)(index, 6);
                    });
                    colors_2['Others'] = '#AAAAAA';
                    return [2 /*return*/, {
                            props: {
                                tokens: forksUnique,
                                tokenLinks: forkLinks,
                                token: fork,
                                tokensProtocols: forksProtocols,
                                filteredProtocols: filteredProtocols,
                                chartData: chartData,
                                parentTokens: parentTokens_1,
                                forkColors: colors_2
                            }
                        }];
                case 2:
                    e_5 = _f.sent();
                    console.log(e_5);
                    return [2 /*return*/, {
                            notFound: true
                        }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getForkPageData = getForkPageData;
// - used in /categories and /categories/[name]
function getCategoriesPageData(category) {
    if (category === void 0) { category = null; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, chart, _d, categories, categoryExists, chartData, data_3, uniqueCategories, colors_3, e_6;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Promise.all([constants_1.CATEGORY_API, constants_1.PROTOCOLS_API].map(function (url) { return fetch(url).then(function (r) { return r.json(); }); }))];
                case 1:
                    _a = __read.apply(void 0, [_e.sent(), 1]), _b = _a[0], _c = _b.chart, chart = _c === void 0 ? {} : _c, _d = _b.categories, categories = _d === void 0 ? {} : _d;
                    categoryExists = !category || categories[category];
                    if (!categoryExists) {
                        return [2 /*return*/, {
                                notFound: true
                            }];
                    }
                    chartData = Object.entries(chart);
                    if (category) {
                        data_3 = [];
                        chartData.forEach(function (_a) {
                            var _b = __read(_a, 2), date = _b[0], tokens = _b[1];
                            var value = tokens[category];
                            if (value) {
                                data_3.push([date, value]);
                            }
                        });
                        chartData = data_3;
                    }
                    uniqueCategories = Object.keys(categories);
                    colors_3 = {};
                    Object.keys(categories).map(function (c, index) {
                        colors_3[c] = (0, utils_1.getColorFromNumber)(index, 9);
                    });
                    return [2 /*return*/, { chartData: chartData, categoryColors: colors_3, uniqueCategories: uniqueCategories }];
                case 2:
                    e_6 = _e.sent();
                    console.log(e_6);
                    return [2 /*return*/, {
                            notFound: true
                        }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getCategoriesPageData = getCategoriesPageData;
var getNewChainsPageData = function (category) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, dexsProtocols, feesAndRevenueProtocols, stablesChainData, activeUsers, categories, chainTvls, rest, categoryLinks, colors, feesAndRevenueChains, dexsChains, stablesChainMcaps;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    fetch("https://api.llama.fi/chains2/".concat(category)).then(function (res) { return res.json(); }),
                    (0, adaptors_1.getChainsPageData)('dexs'),
                    (0, adaptors_1.getChainPageData)('fees'),
                    (0, stablecoins_1.getPeggedAssets)(),
                    fetch(constants_1.ACTIVE_USERS_API).then(function (res) { return res.json(); })
                ])];
            case 1:
                _a = __read.apply(void 0, [_c.sent(), 5]), _b = _a[0], dexsProtocols = _a[1].protocols, feesAndRevenueProtocols = _a[2].protocols, stablesChainData = _a[3].chains, activeUsers = _a[4], categories = _b.categories, chainTvls = _b.chainTvls, rest = __rest(_b, ["categories", "chainTvls"]);
                categoryLinks = [
                    { label: 'All', to: '/chains' },
                    { label: 'Non-EVM', to: '/chains/Non-EVM' }
                ].concat(categories.map(function (category) { return ({
                    label: category,
                    to: "/chains/".concat(category)
                }); }));
                colors = {};
                rest.chainsUnique.forEach(function (chain, index) {
                    colors[chain] = (0, utils_1.getColorFromNumber)(index, 10);
                });
                colors['Others'] = '#AAAAAA';
                feesAndRevenueChains = feesAndRevenueProtocols.filter(function (p) { return p.category === 'Chain'; });
                dexsChains = dexsProtocols;
                stablesChainMcaps = stablesChainData.map(function (chain) {
                    return {
                        name: chain.name,
                        mcap: Object.values(chain.totalCirculatingUSD).reduce(function (a, b) { return a + b; })
                    };
                });
                return [2 /*return*/, {
                        props: __assign(__assign({}, rest), { category: category, categories: categoryLinks, colorsByChain: colors, chainTvls: chainTvls.map(function (chain) {
                                var _a, _b, _c, _d, _e;
                                var _f = feesAndRevenueChains.find(function (x) { return x.name.toLowerCase() === chain.name.toLowerCase(); }) || {}, total24h = _f.total24h, revenue24h = _f.revenue24h;
                                var dexsTotal24h = (dexsChains.find(function (x) { return x.name.toLowerCase() === chain.name.toLowerCase(); }) || {}).total24h;
                                var users = Object.entries(activeUsers).find(function (_a) {
                                    var _b = __read(_a, 1), name = _b[0];
                                    return name.toLowerCase() === 'chain#' + chain.name.toLowerCase();
                                });
                                return __assign(__assign({}, chain), { totalVolume24h: dexsTotal24h || 0, totalFees24h: total24h || 0, totalRevenue24h: revenue24h || 0, stablesMcap: (_b = (_a = stablesChainMcaps.find(function (x) { return x.name.toLowerCase() === chain.name.toLowerCase(); })) === null || _a === void 0 ? void 0 : _a.mcap) !== null && _b !== void 0 ? _b : 0, users: (_e = (_d = (_c = users === null || users === void 0 ? void 0 : users[1]) === null || _c === void 0 ? void 0 : _c.users) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : 0 });
                            }) })
                    }];
        }
    });
}); };
exports.getNewChainsPageData = getNewChainsPageData;
// used in /chains , /chains/[category]
// where category can be EVM, Non-EVM etc
var getChainsPageData = function (category) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, res, chainCoingeckoIds, chainsByParent, allCategories, chain, parentChain, categoryExists, categoryLinks, chainsUnique, chainsGroupbyParent, chainsData, chainMcaps, numProtocolsPerChain, extraPropPerChain, tvlData, chainTvls, stackedDataset;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, Promise.all([constants_1.PROTOCOLS_API, constants_1.CONFIG_API].map(function (apiEndpoint) { return fetch(apiEndpoint).then(function (r) { return r.json(); }); }))
                // get all chains by parent and not include them in categories below as we don't want to show these links, but user can access with url
            ];
            case 1:
                _a = __read.apply(void 0, [_d.sent()
                    // get all chains by parent and not include them in categories below as we don't want to show these links, but user can access with url
                    , 2]), res = _a[0], chainCoingeckoIds = _a[1].chainCoingeckoIds;
                chainsByParent = [];
                allCategories = [];
                for (chain in chainCoingeckoIds) {
                    (_b = chainCoingeckoIds[chain].categories) === null || _b === void 0 ? void 0 : _b.forEach(function (cat) {
                        if (!allCategories.includes(cat)) {
                            allCategories.push(cat);
                        }
                    });
                    parentChain = (_c = chainCoingeckoIds[chain].parent) === null || _c === void 0 ? void 0 : _c.chain;
                    if (parentChain && !chainsByParent.includes(parentChain)) {
                        chainsByParent.push(parentChain);
                    }
                }
                categoryExists = allCategories.includes(category) ||
                    category === 'All' ||
                    category === 'Non-EVM' ||
                    chainsByParent.includes(category);
                // return if category not found
                if (!categoryExists) {
                    return [2 /*return*/, {
                            notFound: true
                        }];
                }
                categoryLinks = [
                    { label: 'All', to: '/chains' },
                    { label: 'Non-EVM', to: '/chains/Non-EVM' }
                ].concat(allCategories.map(function (category) { return ({
                    label: category,
                    to: "/chains/".concat(category)
                }); }));
                chainsUnique = res.chains.filter(function (t) {
                    var _a, _b, _c, _d, _e, _f;
                    var chainCategories = (_b = (_a = chainCoingeckoIds[t]) === null || _a === void 0 ? void 0 : _a.categories) !== null && _b !== void 0 ? _b : [];
                    if (category === 'All') {
                        return true;
                    }
                    else if (category === 'Non-EVM') {
                        return !chainCategories.includes('EVM');
                    }
                    else if (allCategories.includes(category)) {
                        return chainCategories.includes(category);
                    }
                    else {
                        // filter chains like Polkadot and Kusama that are not defined as categories but can be accessed as from url
                        return (((_d = (_c = chainCoingeckoIds[t]) === null || _c === void 0 ? void 0 : _c.parent) === null || _d === void 0 ? void 0 : _d.chain) === category && chainsByParent.includes((_f = (_e = chainCoingeckoIds[t]) === null || _e === void 0 ? void 0 : _e.parent) === null || _f === void 0 ? void 0 : _f.chain));
                    }
                });
                chainsGroupbyParent = {};
                chainsUnique.forEach(function (chain) {
                    var e_7, _a;
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
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                            }
                            finally { if (e_7) throw e_7.error; }
                        }
                    }
                });
                return [4 /*yield*/, Promise.all(chainsUnique.map(function (elem) { return __awaiter(void 0, void 0, void 0, function () {
                        var i, e_8;
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
                                    return [4 /*yield*/, fetch("".concat(constants_1.CHART_API, "/").concat(elem)).then(function (resp) { return resp.json(); })];
                                case 3: return [2 /*return*/, _a.sent()];
                                case 4:
                                    e_8 = _a.sent();
                                    return [3 /*break*/, 5];
                                case 5:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 6: throw new Error("".concat(constants_1.CHART_API, "/").concat(elem, " is broken"));
                            }
                        });
                    }); }))
                    // get mcaps of chains in given category
                ];
            case 2:
                chainsData = _d.sent();
                return [4 /*yield*/, fetch("https://api.coingecko.com/api/v3/simple/price?ids=".concat(Object.values(chainCoingeckoIds)
                        .map(function (v) { return v.geckoId; })
                        .join(','), "&vs_currencies=usd&include_market_cap=true")).then(function (res) { return res.json(); })
                    // calc no.of protocols present in each chains as well as extra tvl data like staking , pool2 etc
                ];
            case 3:
                chainMcaps = _d.sent();
                numProtocolsPerChain = {};
                extraPropPerChain = {};
                res.protocols.forEach(function (protocol) {
                    protocol.chains.forEach(function (chain) {
                        numProtocolsPerChain[chain] = (numProtocolsPerChain[chain] || 0) + 1;
                    });
                    Object.entries(protocol.chainTvls).forEach(function (_a) {
                        var _b, _c, _d, _e, _f, _g, _h, _j;
                        var _k = __read(_a, 2), propKey = _k[0], propValue = _k[1];
                        if (propKey.includes('-')) {
                            var prop = propKey.split('-')[1].toLowerCase();
                            var chain = propKey.split('-')[0];
                            if (extraPropPerChain[chain] === undefined) {
                                extraPropPerChain[chain] = {};
                            }
                            extraPropPerChain[chain][prop] = {
                                tvl: (propValue.tvl || 0) + ((_c = (_b = extraPropPerChain[chain][prop]) === null || _b === void 0 ? void 0 : _b.tvl) !== null && _c !== void 0 ? _c : 0),
                                tvlPrevDay: (propValue.tvlPrevDay || 0) + ((_e = (_d = extraPropPerChain[chain][prop]) === null || _d === void 0 ? void 0 : _d.tvlPrevDay) !== null && _e !== void 0 ? _e : 0),
                                tvlPrevWeek: (propValue.tvlPrevWeek || 0) + ((_g = (_f = extraPropPerChain[chain][prop]) === null || _f === void 0 ? void 0 : _f.tvlPrevWeek) !== null && _g !== void 0 ? _g : 0),
                                tvlPrevMonth: (propValue.tvlPrevMonth || 0) + ((_j = (_h = extraPropPerChain[chain][prop]) === null || _h === void 0 ? void 0 : _h.tvlPrevMonth) !== null && _j !== void 0 ? _j : 0)
                            };
                        }
                    });
                });
                tvlData = chainsData.map(function (d) { return d.tvl; });
                chainTvls = chainsUnique
                    .map(function (chainName, i) {
                    var _a, _b, _c, _d;
                    var tvl = (0, utils_1.getPrevTvlFromChart)(tvlData[i], 0);
                    var tvlPrevDay = (0, utils_1.getPrevTvlFromChart)(tvlData[i], 1);
                    var tvlPrevWeek = (0, utils_1.getPrevTvlFromChart)(tvlData[i], 7);
                    var tvlPrevMonth = (0, utils_1.getPrevTvlFromChart)(tvlData[i], 30);
                    var mcap = (_b = chainMcaps[(_a = chainCoingeckoIds[chainName]) === null || _a === void 0 ? void 0 : _a.geckoId]) === null || _b === void 0 ? void 0 : _b.usd_market_cap;
                    var mcaptvl = mcap && tvl && mcap / tvl;
                    return {
                        tvl: tvl,
                        tvlPrevDay: tvlPrevDay,
                        tvlPrevWeek: tvlPrevWeek,
                        tvlPrevMonth: tvlPrevMonth,
                        mcap: mcap || null,
                        mcaptvl: mcaptvl || null,
                        name: chainName,
                        symbol: (_d = (_c = chainCoingeckoIds[chainName]) === null || _c === void 0 ? void 0 : _c.symbol) !== null && _d !== void 0 ? _d : '-',
                        protocols: numProtocolsPerChain[chainName],
                        extraTvl: extraPropPerChain[chainName] || {},
                        change_1d: (0, utils_1.getPercentChange)(tvl, tvlPrevDay),
                        change_7d: (0, utils_1.getPercentChange)(tvl, tvlPrevWeek),
                        change_1m: (0, utils_1.getPercentChange)(tvl, tvlPrevMonth)
                    };
                })
                    .sort(function (a, b) { return b.tvl - a.tvl; });
                stackedDataset = Object.entries(chainsData.reduce(function (total, chains, i) {
                    var chainName = chainsUnique[i];
                    Object.entries(chains).forEach(function (_a) {
                        var _b = __read(_a, 2), tvlType = _b[0], values = _b[1];
                        values.forEach(function (value) {
                            var _a;
                            if (value[0] < 1596248105)
                                return;
                            if (total[value[0]] === undefined) {
                                total[value[0]] = {};
                            }
                            var b = total[value[0]][chainName];
                            total[value[0]][chainName] = __assign(__assign({}, b), (_a = {}, _a[tvlType] = value[1], _a));
                        });
                    });
                    return total;
                }, {}));
                return [2 /*return*/, {
                        props: {
                            chainsUnique: chainsUnique,
                            chainTvls: chainTvls,
                            stackedDataset: stackedDataset,
                            category: category,
                            categories: categoryLinks,
                            chainsGroupbyParent: chainsGroupbyParent
                        }
                    }];
        }
    });
}); };
exports.getChainsPageData = getChainsPageData;
// - used in /lsd
function getLSDPageData() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, protocols, pools, lsdRates, lsdProtocols, lsdProtocolsSlug, history, lsdApy, nameGeckoMapping, history_1, history_1_1, p, colors;
        var e_9, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, Promise.all([constants_1.PROTOCOLS_API].map(function (url) { return fetch(url).then(function (r) { return r.json(); }); }))];
                case 1:
                    _a = __read.apply(void 0, [_c.sent(), 1]), protocols = _a[0].protocols;
                    return [4 /*yield*/, fetch(constants_1.YIELD_POOLS_API).then(function (r) { return r.json(); })];
                case 2:
                    pools = (_c.sent()).data;
                    return [4 /*yield*/, fetch('https://yields.llama.fi/lsdRatesNew').then(function (r) { return r.json(); })
                        // filter for LSDs
                    ];
                case 3:
                    lsdRates = _c.sent();
                    lsdProtocols = protocols
                        .filter(function (p) { return (p.category === 'Liquid Staking' || ['Stafi'].includes(p.name)) && p.chains.includes('Ethereum'); })
                        .map(function (p) { return p.name; })
                        .filter(function (p) { return p !== 'Genius'; });
                    lsdProtocolsSlug = lsdProtocols.map(function (p) { return p.replace(/\s+/g, '-').toLowerCase(); });
                    return [4 /*yield*/, Promise.all(lsdProtocolsSlug.map(function (p) { return fetch("".concat(constants_1.PROTOCOL_API, "/").concat(p)).then(function (r) { return r.json(); }); }))];
                case 4:
                    history = _c.sent();
                    lsdApy = pools
                        .filter(function (p) { return lsdProtocolsSlug.includes(p.project) && p.chain === 'Ethereum' && p.symbol.includes('ETH'); })
                        .map(function (p) { return (__assign(__assign({}, p), { name: p.project
                            .split('-')
                            .map(function (i) {
                            return i === 'stakewise' ? 'StakeWise' : i === 'eth' ? i.toUpperCase() : i.charAt(0).toUpperCase() + i.slice(1);
                        })
                            .join(' ') })); });
                    nameGeckoMapping = {};
                    try {
                        for (history_1 = __values(history), history_1_1 = history_1.next(); !history_1_1.done; history_1_1 = history_1.next()) {
                            p = history_1_1.value;
                            nameGeckoMapping[p.name] = p.name === 'Frax Ether' ? 'frax-share' : p.gecko_id;
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (history_1_1 && !history_1_1.done && (_b = history_1.return)) _b.call(history_1);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                    colors = {};
                    lsdProtocols.forEach(function (protocol, index) {
                        colors[protocol] = (0, utils_1.getColorFromNumber)(index, 10);
                    });
                    colors['Others'] = '#AAAAAA';
                    return [2 /*return*/, {
                            props: {
                                chartData: history,
                                lsdColors: colors,
                                lsdRates: lsdRates,
                                nameGeckoMapping: nameGeckoMapping,
                                lsdApy: lsdApy
                            }
                        }];
            }
        });
    });
}
exports.getLSDPageData = getLSDPageData;
function formatGovernanceData(data) {
    var proposals = Object.values(data.proposals).map(function (proposal) {
        var winningScore = __spreadArray([], __read(proposal.scores), false).sort(function (a, b) { return b - a; })[0];
        var totalVotes = proposal.scores.reduce(function (acc, curr) { return (acc += curr); }, 0);
        return __assign(__assign({}, proposal), { winningChoice: winningScore ? proposal.choices[proposal.scores.findIndex(function (x) { return x === winningScore; })] : '', winningPerc: totalVotes && winningScore ? "(".concat(Number(((winningScore / totalVotes) * 100).toFixed(2)), "% of votes)") : '' });
    });
    var activity = Object.entries(data.stats.months || {}).map(function (_a) {
        var _b = __read(_a, 2), date = _b[0], values = _b[1];
        return ({
            date: Math.floor(new Date(date).getTime() / 1000),
            Total: values.total || 0,
            Successful: values.successful || 0
        });
    });
    var maxVotes = Object.entries(data.stats.months || {}).map(function (_a) {
        var _b = __read(_a, 2), date = _b[0], values = _b[1];
        var maxVotes = 0;
        values.proposals.forEach(function (proposal) {
            var _a, _b;
            var votes = (_b = (_a = proposals.find(function (p) { return p.id === proposal; })) === null || _a === void 0 ? void 0 : _a['scores_total']) !== null && _b !== void 0 ? _b : 0;
            if (votes > maxVotes) {
                maxVotes = votes;
            }
        });
        return {
            date: Math.floor(new Date(date).getTime() / 1000),
            'Max Votes': maxVotes.toFixed(2)
        };
    });
    return { maxVotes: maxVotes, activity: activity, proposals: proposals };
}
exports.formatGovernanceData = formatGovernanceData;
