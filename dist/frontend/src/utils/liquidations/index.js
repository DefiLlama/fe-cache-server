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
exports.sortObject = exports.PROTOCOL_NAMES_MAP_REVERSE = exports.PROTOCOL_NAMES_MAP = exports.DEFAULT_ASSETS_LIST = exports.DEFAULT_ASSETS_LIST_RAW = exports.getLiquidationsCsvData = exports.getReadableValue = exports.getLatestChartData = exports.getPrevChartData = exports.getAvailableAssetsList = void 0;
var constants_1 = require("../../constants");
var __1 = require("..");
var async_1 = require("../async");
var fetch = async_1.fetchWithErrorLogging;
/**
 * Format the URL to the liquidations data payload
 *
 * @param symbol The symbol of the asset to fetch liquidations for
 * @param timestamp UNIX timestamp in **seconds**
 * @returns The URL to the liquidations data payload
 */
var getDataUrl = function (symbol, timestamp) {
    var hourId = Math.floor(timestamp / 3600 / 6) * 6;
    return "".concat(constants_1.LIQUIDATIONS_HISTORICAL_R2_PATH, "/").concat(symbol.toLowerCase(), "/").concat(hourId, ".json");
};
var getAvailability = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("".concat(constants_1.LIQUIDATIONS_HISTORICAL_R2_PATH, "/availability.json"))];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var TOTAL_BINS = 100;
var WRAPPED_GAS_TOKENS = ['WETH', 'WAVAX', 'WMATIC', 'WFTM', 'WBNB', 'WCRO', 'WONE'];
var SYMBOL_MAP = { BTCB: 'WBTC', BTC: 'WBTC' };
var getNativeSymbol = function (symbol) {
    if (symbol in SYMBOL_MAP) {
        return SYMBOL_MAP[symbol].toLowerCase();
    }
    var originSymbol = symbol.toLowerCase().endsWith('.e') || symbol.toLowerCase().endsWith('.b') ? symbol.slice(0, -2) : symbol;
    var nativeSymbol = WRAPPED_GAS_TOKENS.includes(originSymbol) ? originSymbol.substring(1) : originSymbol;
    return nativeSymbol.toLowerCase();
};
function getChartDataBins(positions, currentPrice, totalBins, stackBy) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
    // protocol/chain -> {bins, binSize, price}
    var aggregatedPositions = new Map();
    var keySet = new Set();
    try {
        // group positions by protocol or chain
        for (var positions_1 = __values(positions), positions_1_1 = positions_1.next(); !positions_1_1.done; positions_1_1 = positions_1.next()) {
            var position = positions_1_1.value;
            keySet.add(position[stackBy]);
            var positionsGroup = aggregatedPositions.get(position[stackBy]);
            if (!positionsGroup) {
                positionsGroup = [position];
                aggregatedPositions.set(position[stackBy], positionsGroup);
            }
            else {
                positionsGroup.push(position);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (positions_1_1 && !positions_1_1.done && (_a = positions_1.return)) _a.call(positions_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var bins = new Map();
    try {
        // init bins
        for (var keySet_1 = __values(keySet), keySet_1_1 = keySet_1.next(); !keySet_1_1.done; keySet_1_1 = keySet_1.next()) {
            var key = keySet_1_1.value;
            bins.set(key, {
                bins: {},
                binSize: currentPrice / totalBins,
                price: currentPrice
            });
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (keySet_1_1 && !keySet_1_1.done && (_b = keySet_1.return)) _b.call(keySet_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        // fill bins
        for (var aggregatedPositions_1 = __values(aggregatedPositions), aggregatedPositions_1_1 = aggregatedPositions_1.next(); !aggregatedPositions_1_1.done; aggregatedPositions_1_1 = aggregatedPositions_1.next()) {
            var _e = __read(aggregatedPositions_1_1.value, 2), key = _e[0], positionsGroup = _e[1];
            var binSize = bins.get(key).binSize;
            var binsGroup = bins.get(key).bins;
            try {
                for (var positionsGroup_1 = (e_4 = void 0, __values(positionsGroup)), positionsGroup_1_1 = positionsGroup_1.next(); !positionsGroup_1_1.done; positionsGroup_1_1 = positionsGroup_1.next()) {
                    var position = positionsGroup_1_1.value;
                    var bin = Math.floor(position.liqPrice / binSize);
                    if (!binsGroup[bin]) {
                        binsGroup[bin] = { native: 0, usd: 0 };
                    }
                    binsGroup[bin] = {
                        native: binsGroup[bin].native + position.collateralAmount,
                        usd: binsGroup[bin].usd + position.collateralValue
                    };
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (positionsGroup_1_1 && !positionsGroup_1_1.done && (_d = positionsGroup_1.return)) _d.call(positionsGroup_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (aggregatedPositions_1_1 && !aggregatedPositions_1_1.done && (_c = aggregatedPositions_1.return)) _c.call(aggregatedPositions_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return Object.fromEntries(bins);
}
function getAvailableAssetsList() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, availability, time, assets;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getAvailability()];
                case 1:
                    _a = _b.sent(), availability = _a.availability, time = _a.time;
                    assets = exports.DEFAULT_ASSETS_LIST.filter(function (asset) {
                        return !!availability[asset.symbol.toLowerCase()];
                    });
                    return [2 /*return*/, { assets: assets, time: time }];
            }
        });
    });
}
exports.getAvailableAssetsList = getAvailableAssetsList;
var disabledProtocols = [];
function getPrevChartData(symbol, totalBins, timePassed) {
    var _a, _b;
    if (totalBins === void 0) { totalBins = TOTAL_BINS; }
    if (timePassed === void 0) { timePassed = 0; }
    return __awaiter(this, void 0, void 0, function () {
        var now, LIQUIDATIONS_DATA_URL, data, res, e_5, res, currentPrice, positions, badDebtsPositions, badDebts, validPositions, totalLiquidable, chartDataBinsByProtocol, protocols, liquidablesByProtocol, chartDataBinsByChain, chains, liquidablesByChain, dangerousPositions, dangerousPositionsAmount, dangerousPositionsAmountByProtocol, dangerousPositionsAmountByChain, topPositions, chartData;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    now = Math.round(Date.now() / 1000) // in seconds
                    ;
                    LIQUIDATIONS_DATA_URL = getDataUrl(symbol, now - timePassed);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 7]);
                    return [4 /*yield*/, fetch(LIQUIDATIONS_DATA_URL)];
                case 2:
                    res = _c.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _c.sent();
                    return [3 /*break*/, 7];
                case 4:
                    e_5 = _c.sent();
                    return [4 /*yield*/, fetch("".concat(constants_1.LIQUIDATIONS_HISTORICAL_R2_PATH, "/").concat(symbol.toLowerCase(), "/latest.json"))];
                case 5:
                    res = _c.sent();
                    return [4 /*yield*/, res.json()];
                case 6:
                    data = _c.sent();
                    return [3 /*break*/, 7];
                case 7:
                    currentPrice = data.currentPrice;
                    positions = data.positions.filter(function (p) { return !disabledProtocols.includes(p.protocol); });
                    badDebtsPositions = positions.filter(function (p) { return p.liqPrice > currentPrice; });
                    badDebts = badDebtsPositions.reduce(function (acc, p) { return acc + p.collateralValue; }, 0);
                    validPositions = positions.filter(function (p) { return p.liqPrice <= currentPrice && p.liqPrice > currentPrice / 1000000; });
                    totalLiquidable = validPositions.reduce(function (acc, p) { return acc + p.collateralValue; }, 0);
                    chartDataBinsByProtocol = getChartDataBins(validPositions, currentPrice, totalBins, 'protocol');
                    protocols = Object.keys(chartDataBinsByProtocol);
                    liquidablesByProtocol = protocols.reduce(function (acc, protocol) {
                        acc[protocol] = Object.values(chartDataBinsByProtocol[protocol].bins).reduce(function (a, b) { return a + b['usd']; }, 0);
                        return acc;
                    }, {});
                    chartDataBinsByChain = getChartDataBins(validPositions, currentPrice, totalBins, 'chain');
                    chains = Object.keys(chartDataBinsByChain);
                    liquidablesByChain = chains.reduce(function (acc, chain) {
                        acc[chain] = Object.values(chartDataBinsByChain[chain].bins).reduce(function (a, b) { return a + b['usd']; }, 0);
                        return acc;
                    }, {});
                    dangerousPositions = validPositions.filter(function (p) { return p.liqPrice > currentPrice * 0.8 && p.liqPrice <= currentPrice; });
                    dangerousPositionsAmount = dangerousPositions.reduce(function (acc, p) { return acc + p.collateralValue; }, 0);
                    dangerousPositionsAmountByProtocol = protocols.reduce(function (acc, protocol) {
                        acc[protocol] = dangerousPositions.filter(function (p) { return p.protocol === protocol; }).reduce(function (a, p) { return a + p.collateralValue; }, 0);
                        return acc;
                    }, {});
                    dangerousPositionsAmountByChain = chains.reduce(function (acc, chain) {
                        acc[chain] = dangerousPositions.filter(function (p) { return p.chain === chain; }).reduce(function (a, p) { return a + p.collateralValue; }, 0);
                        return acc;
                    }, {});
                    topPositions = __spreadArray([], __read(validPositions), false).sort(function (a, b) { return b.collateralValue - a.collateralValue; })
                        .slice(0, 100) // hardcoded to first 100
                        .map(function (p) {
                        var _a, _b;
                        return ({
                            liqPrice: p.liqPrice,
                            collateralAmount: p.collateralAmount,
                            collateralValue: p.collateralValue,
                            protocol: p.protocol,
                            chain: p.chain,
                            url: (_a = p === null || p === void 0 ? void 0 : p.url) !== null && _a !== void 0 ? _a : null,
                            displayName: (_b = p === null || p === void 0 ? void 0 : p.displayName) !== null && _b !== void 0 ? _b : null
                        });
                    });
                    chartData = {
                        name: (_b = (_a = exports.DEFAULT_ASSETS_LIST.find(function (a) { return a.symbol.toLowerCase() === symbol.toLowerCase(); })) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : symbol,
                        symbol: symbol,
                        currentPrice: currentPrice,
                        badDebts: badDebts,
                        dangerousPositionsAmount: dangerousPositionsAmount,
                        dangerousPositionsAmounts: {
                            chains: dangerousPositionsAmountByChain,
                            protocols: dangerousPositionsAmountByProtocol
                        },
                        totalLiquidable: totalLiquidable,
                        totalLiquidables: {
                            chains: liquidablesByChain,
                            protocols: liquidablesByProtocol
                        },
                        totalBins: totalBins,
                        chartDataBins: {
                            chains: (0, exports.sortObject)(chartDataBinsByChain, function (_a, _b) {
                                var _c = __read(_a, 2), keyA = _c[0], a = _c[1];
                                var _d = __read(_b, 2), keyB = _d[0], b = _d[1];
                                return liquidablesByChain[keyB] - liquidablesByChain[keyA];
                            }),
                            protocols: (0, exports.sortObject)(chartDataBinsByProtocol, function (_a, _b) {
                                var _c = __read(_a, 2), keyA = _c[0], a = _c[1];
                                var _d = __read(_b, 2), keyB = _d[0], b = _d[1];
                                return liquidablesByProtocol[keyB] - liquidablesByProtocol[keyA];
                            })
                        },
                        binSize: currentPrice / totalBins,
                        availability: {
                            protocols: protocols,
                            chains: chains
                        },
                        time: data.time,
                        topPositions: topPositions,
                        totalPositions: validPositions.length
                    };
                    return [2 /*return*/, chartData];
            }
        });
    });
}
exports.getPrevChartData = getPrevChartData;
function getLatestChartData(symbol, totalBins) {
    if (totalBins === void 0) { totalBins = TOTAL_BINS; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getPrevChartData(symbol, totalBins)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getLatestChartData = getLatestChartData;
function getReadableValue(value) {
    if (typeof value !== 'number' || isNaN(value) || value === 0)
        return '0';
    if (Math.abs(value) < 1000) {
        return value.toPrecision(4);
    }
    // https://crusaders-of-the-lost-idols.fandom.com/wiki/Large_Number_Abbreviations
    // llamao issa fun
    var s = ['', 'k', 'm', 'b', 't', 'q', 'Q', 's', 'S', 'o', 'n', 'd', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N'];
    var e = Math.floor(Math.log(value) / Math.log(1000));
    return (value / Math.pow(1000, e)).toFixed(1) + s[e];
}
exports.getReadableValue = getReadableValue;
var getLiquidationsCsvData = function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
    var now, LIQUIDATIONS_DATA_URL, res, data, timestamp, positions, allAssetPositions, csvHeader, csvData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                now = Math.round(Date.now() / 1000) // in seconds
                ;
                LIQUIDATIONS_DATA_URL = getDataUrl(symbol, now);
                return [4 /*yield*/, fetch(LIQUIDATIONS_DATA_URL)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = (_a.sent());
                timestamp = data.time;
                positions = data.positions;
                allAssetPositions = positions
                    .filter(function (p) { return p.liqPrice < data.currentPrice && p.collateralValue > 0; })
                    .map(function (p) { return (__assign(__assign({}, p), { symbol: symbol })); });
                csvHeader = [
                    'symbol',
                    'chain',
                    'protocol',
                    'liqPrice',
                    'collateralValue',
                    'collateralAmount',
                    'owner',
                    'timestamp'
                ].join(',');
                csvData = allAssetPositions
                    .map(function (_a) {
                    var symbol = _a.symbol, chain = _a.chain, protocol = _a.protocol, liqPrice = _a.liqPrice, collateralValue = _a.collateralValue, collateralAmount = _a.collateralAmount, owner = _a.owner;
                    return "".concat(symbol.toUpperCase(), ",").concat(chain, ",").concat(protocol, ",").concat(liqPrice, ",").concat(collateralValue, ",").concat(collateralAmount, ",").concat(owner, ",").concat(timestamp);
                })
                    .reduce(function (acc, curr) { return acc + '\n' + curr; }, csvHeader);
                return [2 /*return*/, csvData];
        }
    });
}); };
exports.getLiquidationsCsvData = getLiquidationsCsvData;
exports.DEFAULT_ASSETS_LIST_RAW = [
    {
        name: 'Ethereum',
        symbol: 'ETH'
    },
    {
        name: 'Wrapped Bitcoin',
        symbol: 'WBTC'
    },
    {
        name: 'Dai',
        symbol: 'DAI'
    },
    {
        name: 'Solana',
        symbol: 'SOL'
    },
    {
        name: 'Binance Coin',
        symbol: 'BNB'
    },
    {
        name: 'USD Coin',
        symbol: 'USDC'
    },
    {
        name: 'Lido Staked ETH',
        symbol: 'STETH'
    },
    {
        name: 'Lido Wrapped stETH',
        symbol: 'WSTETH'
    },
    // {
    // 	name: 'Binance Beacon ETH',
    // 	symbol: 'BETH'
    // },
    {
        name: 'Lido Staked SOL',
        symbol: 'STSOL'
    },
    {
        name: 'Marinade Staked SOL',
        symbol: 'MSOL'
    },
    {
        name: 'Tether',
        symbol: 'USDT'
    },
    {
        name: 'Solar Network',
        symbol: 'SXP'
    },
    {
        name: 'yearn.finance',
        symbol: 'YFI'
    },
    {
        name: 'FTX Token',
        symbol: 'FTT'
    },
    // {
    // 	name: 'Compound',
    // 	symbol: 'COMP'
    // },
    {
        name: 'Uniswap',
        symbol: 'UNI'
    },
    {
        name: 'PancakeSwap',
        symbol: 'CAKE'
    },
    {
        name: 'Cardano',
        symbol: 'ADA'
    },
    {
        name: 'Basic Attention',
        symbol: 'BAT'
    },
    {
        name: 'Binance USD',
        symbol: 'BUSD'
    },
    {
        name: 'Curve DAO',
        symbol: 'CRV'
    },
    // {
    // 	name: 'Ampleforth',
    // 	symbol: 'AMPL'
    // },
    {
        name: 'ChainLink',
        symbol: 'LINK'
    },
    // {
    // 	name: 'Frax',
    // 	symbol: 'FRAX'
    // },
    // {
    // 	name: 'Fei USD',
    // 	symbol: 'FEI'
    // },
    {
        name: 'Tezos',
        symbol: 'XTZ'
    },
    {
        name: 'TrueUSD',
        symbol: 'TUSD'
    },
    {
        name: 'Aave',
        symbol: 'AAVE'
    },
    {
        name: 'MakerDAO',
        symbol: 'MKR'
    },
    {
        name: 'Avalanche',
        symbol: 'AVAX'
    },
    {
        name: 'Polygon',
        symbol: 'MATIC'
    },
    {
        name: 'Optimism',
        symbol: 'OP'
    },
    {
        name: 'SushiSwap',
        symbol: 'SUSHI'
    },
    {
        name: 'Synthetix',
        symbol: 'SNX'
    },
    {
        name: 'Trader Joe',
        symbol: 'JOE'
    },
    {
        name: 'Magic Internet Money',
        symbol: 'MIM'
    },
    {
        name: '0x',
        symbol: 'ZRX'
    },
    {
        name: 'Enjin Coin',
        symbol: 'ENJ'
    },
    {
        name: 'Decentraland',
        symbol: 'MANA'
    },
    {
        name: '1inch',
        symbol: '1INCH'
    },
    // {
    // 	name: 'Rai Reflex Index',
    // 	symbol: 'RAI'
    // },
    {
        name: 'REN',
        symbol: 'REN'
    }
];
exports.DEFAULT_ASSETS_LIST = exports.DEFAULT_ASSETS_LIST_RAW.map(function (_a) {
    var name = _a.name, symbol = _a.symbol;
    return ({
        name: name,
        symbol: symbol,
        route: "/liquidations/".concat(symbol.toLowerCase()),
        logo: (0, __1.liquidationsIconUrl)(symbol.toLowerCase())
    });
});
exports.PROTOCOL_NAMES_MAP = {
    'aave-v2': 'Aave V2',
    compound: 'Compound',
    euler: 'Euler',
    liquity: 'Liquity',
    maker: 'MakerDAO',
    'trader-joe-lend': 'Trader Joe',
    'mimo-protocol': 'Mimo',
    polygon: 'Polygon',
    ethereum: 'Ethereum',
    avalanche: 'Avalanche',
    solend: 'Solend',
    solana: 'Solana',
    benqi: 'Benqi',
    venus: 'Venus',
    bsc: 'BSC',
    angle: 'Angle',
    optimism: 'Optimism',
    arbitrum: 'Arbitrum'
};
exports.PROTOCOL_NAMES_MAP_REVERSE = Object.entries(exports.PROTOCOL_NAMES_MAP).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    return (__assign(__assign({}, acc), (_b = {}, _b[value] = key, _b)));
}, {});
var sortObject = function (unordered, compareFn) {
    return Object.entries(unordered)
        .sort(function (_a, _b) {
        var _c = __read(_a, 2), keyA = _c[0], valueA = _c[1];
        var _d = __read(_b, 2), keyB = _d[0], valueB = _d[1];
        return compareFn([keyA, valueA], [keyB, valueB]);
    })
        .reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));
    }, {});
};
exports.sortObject = sortObject;
