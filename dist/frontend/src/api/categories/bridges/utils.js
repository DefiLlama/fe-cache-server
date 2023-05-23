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
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatChainsData = exports.formatBridgesData = exports.bridgePropertiesToKeep = void 0;
var utils_1 = require("../../../utils");
var shared_1 = require("../../shared");
exports.bridgePropertiesToKeep = [
    'displayName',
    'name',
    'symbol',
    'icon',
    'chains',
    'lastDailyVolume',
    'dayBeforeLastVolume',
    'weeklyVolume',
    'monthlyVolume',
    'txsPrevDay',
    'change_1d',
    'change_7d',
    'change_1m'
];
var formatBridgesData = function (_a) {
    var _b = _a.chain, chain = _b === void 0 ? '' : _b, _c = _a.bridges, bridges = _c === void 0 ? [] : _c, _d = _a.chartDataByBridge, chartDataByBridge = _d === void 0 ? [] : _d, _e = _a.bridgeNameToChartDataIndex, bridgeNameToChartDataIndex = _e === void 0 ? {} : _e, _f = _a.bridgeProps, bridgeProps = _f === void 0 ? __spreadArray([], __read(exports.bridgePropertiesToKeep), false) : _f;
    var filteredBridges = __spreadArray([], __read(bridges), false);
    if (chain) {
        filteredBridges = filteredBridges.filter(function (_a) {
            var _b = _a.chains, chains = _b === void 0 ? [] : _b;
            return chains.includes(chain);
        });
    }
    filteredBridges = filteredBridges.map(function (bridge) {
        var _a, _b, _c;
        var chartIndex = bridgeNameToChartDataIndex[bridge.displayName];
        var chart = (_a = chartDataByBridge[chartIndex]) !== null && _a !== void 0 ? _a : null;
        if (chain) {
            var dayTotalVolume = void 0, weekTotalVolume = void 0, monthTotalVolume = void 0;
            dayTotalVolume = weekTotalVolume = monthTotalVolume = 0;
            // start from i = 1 to exclude current day
            for (var i = 1; i < 31; i++) {
                var dailyVolume = (0, utils_1.getPrevVolumeFromChart)(chart, i);
                if (i < 2) {
                    dayTotalVolume += dailyVolume;
                }
                if (i < 8) {
                    weekTotalVolume += dailyVolume;
                }
                monthTotalVolume += dailyVolume;
            }
            bridge.lastDailyVolume = dayTotalVolume !== null && dayTotalVolume !== void 0 ? dayTotalVolume : null;
            bridge.dayBeforeLastVolume = (_b = (0, utils_1.getPrevVolumeFromChart)(chart, 2)) !== null && _b !== void 0 ? _b : null;
            bridge.weeklyVolume = weekTotalVolume !== null && weekTotalVolume !== void 0 ? weekTotalVolume : null;
            bridge.monthlyVolume = monthTotalVolume !== null && monthTotalVolume !== void 0 ? monthTotalVolume : null;
        }
        bridge.change_1d = (0, utils_1.getPercentChange)(bridge.lastDailyVolume, bridge.dayBeforeLastVolume);
        bridge.txsPrevDay = (_c = (0, utils_1.getPrevVolumeFromChart)(chart, 1, true)) !== null && _c !== void 0 ? _c : null;
        return (0, shared_1.keepNeededProperties)(bridge, bridgeProps);
    });
    filteredBridges = filteredBridges.sort(function (a, b) { return b.lastDailyVolume - a.lastDailyVolume; });
    return filteredBridges;
};
exports.formatBridgesData = formatBridgesData;
var formatChainsData = function (_a) {
    var _b = _a.chains, chains = _b === void 0 ? [] : _b, _c = _a.chartDataByChain, chartDataByChain = _c === void 0 ? [] : _c, _d = _a.chainToChartDataIndex, chainToChartDataIndex = _d === void 0 ? {} : _d, _e = _a.prevDayDataByChain, prevDayDataByChain = _e === void 0 ? [] : _e;
    var filteredChains = __spreadArray([], __read(chains), false);
    filteredChains = filteredChains.map(function (chain) {
        var e_1, _a;
        var _b, _c;
        var name = chain.name;
        var chartIndex = chainToChartDataIndex[name];
        var charts = (_b = chartDataByChain[chartIndex]) !== null && _b !== void 0 ? _b : null;
        var prevDayData = (_c = prevDayDataByChain[chartIndex]) !== null && _c !== void 0 ? _c : null;
        var prevDayChart = charts === null || charts === void 0 ? void 0 : charts[charts.length - 2];
        var prevDayUsdDeposits = prevDayChart === null || prevDayChart === void 0 ? void 0 : prevDayChart.depositUSD;
        var prevDayUsdWithdrawals = prevDayChart === null || prevDayChart === void 0 ? void 0 : prevDayChart.withdrawUSD;
        var totalTokensDeposited = prevDayData === null || prevDayData === void 0 ? void 0 : prevDayData.totalTokensDeposited;
        var totalTokensWithdrawn = prevDayData === null || prevDayData === void 0 ? void 0 : prevDayData.totalTokensWithdrawn;
        var prevDayNetFlow = prevDayUsdWithdrawals - prevDayUsdDeposits;
        var prevWeekCharts = chartDataByChain[chartIndex].slice(-8, -1);
        var prevWeekUsdDeposits = 0;
        var prevWeekUsdWithdrawals = 0;
        try {
            for (var prevWeekCharts_1 = __values(prevWeekCharts), prevWeekCharts_1_1 = prevWeekCharts_1.next(); !prevWeekCharts_1_1.done; prevWeekCharts_1_1 = prevWeekCharts_1.next()) {
                var chart = prevWeekCharts_1_1.value;
                prevWeekUsdDeposits += chart.depositUSD;
                prevWeekUsdWithdrawals += chart.withdrawUSD;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (prevWeekCharts_1_1 && !prevWeekCharts_1_1.done && (_a = prevWeekCharts_1.return)) _a.call(prevWeekCharts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var prevWeekNetFlow = prevWeekUsdWithdrawals - prevWeekUsdDeposits;
        var topTokenDepositedSymbol = null, topTokenWithdrawnSymbol = null, topTokenDepositedUsd = 0, topTokenWithdrawnUsd = 0;
        if (totalTokensDeposited && Object.keys(totalTokensDeposited).length) {
            var topTokenDeposited = Object.entries(totalTokensDeposited)
                .sort(function (a, b) {
                return b[1].usdValue - a[1].usdValue;
            })
                .slice(0, 1)[0];
            var topDepositTokenData = topTokenDeposited[1];
            topTokenDepositedSymbol = topDepositTokenData.symbol;
            topTokenDepositedUsd = topDepositTokenData.usdValue;
        }
        if (totalTokensWithdrawn && Object.keys(totalTokensWithdrawn).length) {
            var topTokenWithdrawn = Object.entries(totalTokensWithdrawn)
                .sort(function (a, b) {
                return b[1].usdValue - a[1].usdValue;
            })
                .slice(0, 1)[0];
            var topWithdrawnTokenData = topTokenWithdrawn[1];
            topTokenWithdrawnSymbol = topWithdrawnTokenData.symbol;
            topTokenWithdrawnUsd = topWithdrawnTokenData.usdValue;
        }
        return {
            name: name,
            prevDayUsdDeposits: prevDayUsdDeposits !== null && prevDayUsdDeposits !== void 0 ? prevDayUsdDeposits : 0,
            prevDayUsdWithdrawals: prevDayUsdWithdrawals !== null && prevDayUsdWithdrawals !== void 0 ? prevDayUsdWithdrawals : 0,
            prevWeekUsdDeposits: prevWeekUsdDeposits !== null && prevWeekUsdDeposits !== void 0 ? prevWeekUsdDeposits : 0,
            prevWeekUsdWithdrawals: prevWeekUsdWithdrawals !== null && prevWeekUsdWithdrawals !== void 0 ? prevWeekUsdWithdrawals : 0,
            topTokenDepositedSymbol: topTokenDepositedSymbol,
            topTokenDepositedUsd: topTokenDepositedUsd,
            topTokenWithdrawnSymbol: topTokenWithdrawnSymbol,
            topTokenWithdrawnUsd: topTokenWithdrawnUsd,
            prevDayNetFlow: prevDayNetFlow !== null && prevDayNetFlow !== void 0 ? prevDayNetFlow : 0,
            prevWeekNetFlow: prevWeekNetFlow !== null && prevWeekNetFlow !== void 0 ? prevWeekNetFlow : 0
        };
    });
    return filteredChains;
};
exports.formatChainsData = formatChainsData;
