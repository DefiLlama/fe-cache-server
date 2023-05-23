"use strict";
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
exports.formatPeggedChainsData = exports.formatPeggedAssetsData = exports.peggedPropertiesToKeep = void 0;
var utils_1 = require("../../../utils");
var shared_1 = require("../../shared");
exports.peggedPropertiesToKeep = [
    'circulating',
    'minted',
    'unreleased',
    'mcap',
    'name',
    'symbol',
    'gecko_id',
    'chains',
    'price',
    'pegType',
    'pegMechanism',
    'change_1d',
    'change_7d',
    'change_1m',
    'pegDeviation',
    'pegDeviation_1m',
    'pegDeviationInfo',
    'circulatingPrevDay',
    'circulatingPrevWeek',
    'circulatingPrevMonth',
    'delisted'
];
var getTargetPrice = function (pegType, ratesChart, daysBefore) {
    var _a, _b;
    var currencyTicker = pegType.slice(-3);
    if (currencyTicker === 'USD') {
        return 1;
    }
    var rates = (_a = ratesChart === null || ratesChart === void 0 ? void 0 : ratesChart[ratesChart.length - 1 - daysBefore]) !== null && _a !== void 0 ? _a : null;
    var rate = (_b = rates === null || rates === void 0 ? void 0 : rates.rates) === null || _b === void 0 ? void 0 : _b[currencyTicker];
    return 1 / parseFloat(rate);
};
var formatPeggedAssetsData = function (_a) {
    var _b = _a.chain, chain = _b === void 0 ? '' : _b, _c = _a.peggedAssets, peggedAssets = _c === void 0 ? [] : _c, _d = _a.chartDataByPeggedAsset, chartDataByPeggedAsset = _d === void 0 ? [] : _d, _e = _a.priceData, priceData = _e === void 0 ? [] : _e, _f = _a.rateData, rateData = _f === void 0 ? [] : _f, _g = _a.peggedNameToChartDataIndex, peggedNameToChartDataIndex = _g === void 0 ? {} : _g, _h = _a.peggedAssetProps, peggedAssetProps = _h === void 0 ? __spreadArray([], __read(exports.peggedPropertiesToKeep), false) : _h;
    var filteredPeggedAssets = __spreadArray([], __read(peggedAssets), false);
    if (chain) {
        filteredPeggedAssets = filteredPeggedAssets.filter(function (_a) {
            var _b = _a.chains, chains = _b === void 0 ? [] : _b;
            return chains.includes(chain);
        });
    }
    filteredPeggedAssets = filteredPeggedAssets
        .map(function (pegged) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var pegType = pegged.pegType;
        var peggedGeckoID = pegged.gecko_id;
        var price = pegged.price;
        var priceSource = pegged.priceSource;
        if (chain) {
            var chainCirculating = pegged.chainCirculating[chain];
            pegged.circulating = chainCirculating ? (_a = chainCirculating.current[pegType]) !== null && _a !== void 0 ? _a : 0 : 0;
            pegged.circulatingPrevDay = chainCirculating ? (_b = chainCirculating.circulatingPrevDay[pegType]) !== null && _b !== void 0 ? _b : null : null;
            pegged.circulatingPrevWeek = chainCirculating ? (_c = chainCirculating.circulatingPrevWeek[pegType]) !== null && _c !== void 0 ? _c : null : null;
            pegged.circulatingPrevMonth = chainCirculating ? (_d = chainCirculating.circulatingPrevMonth[pegType]) !== null && _d !== void 0 ? _d : null : null;
        }
        else {
            pegged.circulating = (_e = pegged.circulating[pegType]) !== null && _e !== void 0 ? _e : 0;
            pegged.circulatingPrevDay = (_f = pegged.circulatingPrevDay[pegType]) !== null && _f !== void 0 ? _f : null;
            pegged.circulatingPrevWeek = (_g = pegged.circulatingPrevWeek[pegType]) !== null && _g !== void 0 ? _g : null;
            pegged.circulatingPrevMonth = (_h = pegged.circulatingPrevMonth[pegType]) !== null && _h !== void 0 ? _h : null;
        }
        var chartIndex = peggedNameToChartDataIndex[pegged.name];
        var chart = (_j = chartDataByPeggedAsset[chartIndex]) !== null && _j !== void 0 ? _j : null;
        pegged.mcap = (_k = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 0, 'mcap')) !== null && _k !== void 0 ? _k : null;
        var mcapPrevDay = (_l = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 1, 'mcap')) !== null && _l !== void 0 ? _l : null;
        var mcapPrevWeek = (_m = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 7, 'mcap')) !== null && _m !== void 0 ? _m : null;
        var mcapPrevMonth = (_o = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 30, 'mcap')) !== null && _o !== void 0 ? _o : null;
        pegged.change_1d = (0, utils_1.getPercentChange)(pegged.mcap, mcapPrevDay);
        pegged.change_7d = (0, utils_1.getPercentChange)(pegged.mcap, mcapPrevWeek);
        pegged.change_1m = (0, utils_1.getPercentChange)(pegged.mcap, mcapPrevMonth);
        if (pegType !== 'peggedVAR' && price) {
            var targetPrice = getTargetPrice(pegType, rateData, 0);
            pegged.pegDeviation = (0, utils_1.getPercentChange)(price, targetPrice);
            var greatestDeviation = 0;
            for (var i = 0; i < 30; i++) {
                var historicalPrices = priceData[priceData.length - i - 1];
                var historicalTargetPrice = getTargetPrice(pegType, rateData, i);
                var historicalPrice = parseFloat((_p = historicalPrices === null || historicalPrices === void 0 ? void 0 : historicalPrices.prices) === null || _p === void 0 ? void 0 : _p[peggedGeckoID]);
                if (historicalPrice && historicalTargetPrice) {
                    var timestamp = historicalPrices === null || historicalPrices === void 0 ? void 0 : historicalPrices.date;
                    var deviation = historicalPrice - historicalTargetPrice;
                    if (Math.abs(greatestDeviation) < Math.abs(deviation)) {
                        greatestDeviation = deviation;
                        if (0.02 < Math.abs(greatestDeviation)) {
                            pegged.pegDeviationInfo = {
                                timestamp: timestamp,
                                price: historicalPrice,
                                priceSource: priceSource
                            };
                        }
                    }
                }
            }
            if (Math.abs(greatestDeviation) < Math.abs(price - targetPrice)) {
                greatestDeviation = price - targetPrice;
                if (0.02 < Math.abs(greatestDeviation)) {
                    pegged.pegDeviationInfo = {
                        timestamp: Date.now() / 1000,
                        price: price,
                        priceSource: priceSource
                    };
                }
            }
            pegged.pegDeviation_1m = (0, utils_1.getPercentChange)(targetPrice + greatestDeviation, targetPrice);
        }
        return (0, shared_1.keepNeededProperties)(pegged, peggedAssetProps);
    });
    if (chain) {
        filteredPeggedAssets = filteredPeggedAssets.sort(function (a, b) { return b.mcap - a.mcap; });
    }
    return filteredPeggedAssets;
};
exports.formatPeggedAssetsData = formatPeggedAssetsData;
var formatPeggedChainsData = function (_a) {
    var _b = _a.chainList, chainList = _b === void 0 ? [] : _b, _c = _a.peggedChartDataByChain, peggedChartDataByChain = _c === void 0 ? [] : _c, _d = _a.chainDominances, chainDominances = _d === void 0 ? {} : _d, _e = _a.chainsTVLData, chainsTVLData = _e === void 0 ? [] : _e;
    var filteredPeggedAssets = peggedChartDataByChain.map(function (chart, i) {
        var _a, _b, _c, _d, _e;
        var chainData = {};
        var chainName = chainList[i];
        var chainDominance = (_a = chainDominances[chainName]) !== null && _a !== void 0 ? _a : null;
        var currentTimestamp = Date.now() / 1000;
        var secondsInMonth = 2592000;
        var latestChainTVLCharts = (_c = (_b = chainsTVLData === null || chainsTVLData === void 0 ? void 0 : chainsTVLData[i]) === null || _b === void 0 ? void 0 : _b.tvl) !== null && _c !== void 0 ? _c : null;
        var latestChainTVLItem = latestChainTVLCharts === null || latestChainTVLCharts === void 0 ? void 0 : latestChainTVLCharts[latestChainTVLCharts.length - 1];
        var latestChainTVL = currentTimestamp - secondsInMonth < ((_d = latestChainTVLItem === null || latestChainTVLItem === void 0 ? void 0 : latestChainTVLItem[0]) !== null && _d !== void 0 ? _d : 0) ? latestChainTVLItem[1] : null;
        chainData.name = chainName;
        chainData.circulating = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 0, 'totalCirculating');
        chainData.mcap = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 0, 'totalCirculatingUSD');
        chainData.unreleased = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 0, 'totalUnreleased');
        chainData.bridgedTo = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 0, 'totalBridgedToUSD');
        chainData.minted = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 0, 'totalMintedUSD');
        chainData.mcapPrevDay = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 1, 'totalCirculatingUSD');
        chainData.mcapPrevWeek = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 7, 'totalCirculatingUSD');
        chainData.mcapPrevMonth = (0, utils_1.getPrevPeggedTotalFromChart)(chart, 30, 'totalCirculatingUSD');
        chainData.change_1d = (0, utils_1.getPercentChange)(chainData.mcap, chainData.mcapPrevDay);
        chainData.change_7d = (0, utils_1.getPercentChange)(chainData.mcap, chainData.mcapPrevWeek);
        chainData.change_1m = (0, utils_1.getPercentChange)(chainData.mcap, chainData.mcapPrevMonth);
        chainData.dominance = chainDominance
            ? {
                name: chainDominance.symbol,
                value: (0, utils_1.getPeggedDominance)(chainDominance, chainData.mcap)
            }
            : null;
        chainData.mcaptvl = (_e = (chainData.mcap && latestChainTVL && chainData.mcap / latestChainTVL)) !== null && _e !== void 0 ? _e : null;
        if (chainData.mcaptvl == 0) {
            chainData.mcaptvl = null;
        }
        return chainData;
    });
    filteredPeggedAssets = filteredPeggedAssets.sort(function (a, b) { return b.mcap - a.mcap; });
    return filteredPeggedAssets;
};
exports.formatPeggedChainsData = formatPeggedChainsData;
