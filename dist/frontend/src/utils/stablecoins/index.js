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
exports.useBuildPeggedChartData = void 0;
var utils_1 = require("../../utils");
var react_1 = require("react");
var useBuildPeggedChartData = function (chartDataByAssetOrChain, assetsOrChainsList, filteredIndexes, issuanceType, chainTVLData, selectedChain, totalChartTooltipLabel) {
    if (issuanceType === void 0) { issuanceType = 'mcap'; }
    if (totalChartTooltipLabel === void 0) { totalChartTooltipLabel = 'Mcap'; }
    var _a = (0, react_1.useMemo)(function () {
        if (selectedChain === null)
            return {};
        var backfilledChains = [
            'All',
            'Ethereum',
            'BSC',
            'Avalanche',
            'Arbitrum',
            'Optimism',
            'Fantom',
            'Polygon',
            'Gnosis',
            'Celo',
            'Harmony',
            'Moonriver',
            'Aztec',
            'Loopring',
            'Starknet',
            'zkSync',
            'Boba',
            'Metis',
            'Moonbeam',
            'Syscoin',
            'OKExChain',
            'IoTeX',
            'Heco'
        ];
        var unformattedAreaData = {};
        var unformattedTotalData = {};
        var stackedDatasetObject = {};
        var unformattedTokenInflowData = {};
        var assetAddedToInflows = assetsOrChainsList.reduce(function (acc, curr) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[curr] = false, _a)));
        }, {});
        chartDataByAssetOrChain.map(function (charts, i) {
            if (!charts.length || !filteredIndexes.includes(i))
                return;
            charts.forEach(function (chart, j) {
                var _a;
                var mcap = (0, utils_1.getPrevPeggedTotalFromChart)([chart], 0, issuanceType); // 'issuanceType' and 'mcap' here are 'circulating' values on /stablecoin pages, and 'mcap' otherwise
                var prevDayMcap = (0, utils_1.getPrevPeggedTotalFromChart)([charts[j - 1]], 0, issuanceType);
                var assetOrChain = assetsOrChainsList[i];
                var date = chart.date;
                if (date > 1596248105 && mcap) {
                    if (backfilledChains.includes(selectedChain) || date > 1652241600) {
                        // for individual chains data is currently only backfilled to May 11, 2022
                        unformattedAreaData[date] = unformattedAreaData[date] || {};
                        unformattedAreaData[date][assetsOrChainsList[i]] = mcap;
                        unformattedTotalData[date] = ((_a = unformattedTotalData[date]) !== null && _a !== void 0 ? _a : 0) + mcap;
                        if (mcap !== null && mcap !== 0) {
                            if (stackedDatasetObject[date] == undefined) {
                                stackedDatasetObject[date] = {};
                            }
                            var b = stackedDatasetObject[date][assetOrChain];
                            stackedDatasetObject[date][assetOrChain] = __assign(__assign({}, b), { circulating: mcap !== null && mcap !== void 0 ? mcap : 0 });
                        }
                        var diff = (mcap !== null && mcap !== void 0 ? mcap : 0) - (prevDayMcap !== null && prevDayMcap !== void 0 ? prevDayMcap : 0);
                        // the first day's inflow is not added to prevent large inflows on the day token is first tracked
                        if (assetAddedToInflows[assetOrChain]) {
                            unformattedTokenInflowData[date] = unformattedTokenInflowData[date] || {};
                            unformattedTokenInflowData[date][assetsOrChainsList[i]] = diff;
                        }
                        if (diff) {
                            assetAddedToInflows[assetOrChain] = true;
                        }
                    }
                }
            });
        });
        var peggedAreaChartData = Object.entries(unformattedAreaData).map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], chart = _b[1];
            if (typeof chart === 'object') {
                return __assign({ date: date }, chart);
            }
        });
        var peggedAreaTotalData = chainTVLData
            ? chainTVLData.tvl
                .map(function (_a) {
                var _b;
                var _c;
                var _d = __read(_a, 2), date = _d[0], tvl = _d[1];
                if (date < 1609372800)
                    return;
                if (!backfilledChains.includes(selectedChain) && date < 1652241600)
                    return;
                var mcap = (_c = unformattedTotalData[date]) !== null && _c !== void 0 ? _c : 0;
                if (mcap === 0)
                    return;
                return _b = {
                        date: date
                    },
                    _b[totalChartTooltipLabel] = mcap,
                    _b.TVL = tvl,
                    _b;
            })
                .filter(function (entry) { return entry; })
            : Object.entries(unformattedTotalData).map(function (_a) {
                var _b;
                var _c = __read(_a, 2), date = _c[0], mcap = _c[1];
                return _b = {
                        date: date
                    },
                    _b[totalChartTooltipLabel] = mcap,
                    _b;
            });
        var stackedDataset = Object.entries(stackedDatasetObject);
        var secondsInDay = 3600 * 24;
        var zeroTokenInflows = 0;
        var zeroUsdInfows = 0;
        var tokenInflows = [];
        var usdInflows = [];
        var tokenSet = new Set();
        Object.entries(unformattedTokenInflowData).map(function (_a) {
            var _b;
            var _c = __read(_a, 2), date = _c[0], chart = _c[1];
            if (typeof chart === 'object') {
                var dayDifference = 0;
                var tokenDayDifference = {};
                for (var token in chart) {
                    tokenSet.add(token);
                    var diff = chart[token];
                    if (!Number.isNaN(diff)) {
                        // Here, the inflow tokens could be restricted to top daily top tokens, but they aren't. Couldn't find good UX doing so.
                        tokenDayDifference[token] = diff;
                        dayDifference += diff;
                    }
                }
                if (dayDifference === 0) {
                    zeroUsdInfows++;
                }
                if (((_b = Object.keys(tokenDayDifference)) === null || _b === void 0 ? void 0 : _b.length) === 0) {
                    zeroTokenInflows++;
                }
                // the dates on the inflows are all off by 1 (because timestamps are at 00:00), so they are moved back 1 day
                var adjustedDate = (parseInt(date) - secondsInDay).toString();
                tokenInflows.push(__assign(__assign({}, tokenDayDifference), { date: adjustedDate }));
                usdInflows.push([adjustedDate, dayDifference]);
            }
        });
        var tokenInflowNames = zeroTokenInflows === tokenInflows.length ? ['USDT'] : Array.from(tokenSet);
        tokenInflows = zeroTokenInflows === tokenInflows.length ? [{ USDT: 0, date: '1652486400' }] : tokenInflows;
        usdInflows = zeroUsdInfows === usdInflows.length ? [['1652486400', 0]] : usdInflows;
        return { peggedAreaChartData: peggedAreaChartData, peggedAreaTotalData: peggedAreaTotalData, stackedDataset: stackedDataset, tokenInflows: tokenInflows, tokenInflowNames: tokenInflowNames, usdInflows: usdInflows };
    }, [
        chartDataByAssetOrChain,
        assetsOrChainsList,
        filteredIndexes,
        issuanceType,
        chainTVLData,
        selectedChain,
        totalChartTooltipLabel
    ]), peggedAreaChartData = _a.peggedAreaChartData, peggedAreaTotalData = _a.peggedAreaTotalData, stackedDataset = _a.stackedDataset, tokenInflows = _a.tokenInflows, tokenInflowNames = _a.tokenInflowNames, usdInflows = _a.usdInflows;
    return { peggedAreaChartData: peggedAreaChartData, peggedAreaTotalData: peggedAreaTotalData, stackedDataset: stackedDataset, tokenInflows: tokenInflows, tokenInflowNames: tokenInflowNames, usdInflows: usdInflows };
};
exports.useBuildPeggedChartData = useBuildPeggedChartData;
