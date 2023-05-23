"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = exports.Filters = exports.Denomination = exports.formatProtocolsTvlChartData = exports.Wrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var router_1 = require("next/router");
var link_1 = __importDefault(require("next/link"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var client_1 = require("../../../api/categories/protocols/client");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var chainTokens_1 = require("../../../constants/chainTokens");
var utils_1 = require("../../../utils");
var hooks_1 = require("../../../containers/DexsAndFees/charts/hooks");
var swr_1 = __importDefault(require("swr"));
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var Misc_1 = require("./Misc");
Object.defineProperty(exports, "Denomination", { enumerable: true, get: function () { return Misc_1.Denomination; } });
Object.defineProperty(exports, "Filters", { enumerable: true, get: function () { return Misc_1.Filters; } });
Object.defineProperty(exports, "Toggle", { enumerable: true, get: function () { return Misc_1.Toggle; } });
var utils_2 = require("./utils");
var BridgeContainer_1 = require("../../../containers/BridgeContainer");
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('.')); }); }, {
    ssr: false
});
var CHART_TYPES = [
    'tvl',
    'mcap',
    'tokenPrice',
    'tokenVolume',
    'tokenLiquidity',
    'fdv',
    'volume',
    'fees',
    'revenue',
    'unlocks',
    'activeUsers',
    'newUsers',
    'transactions',
    'gasUsed',
    'events',
    'staking',
    'borrowed',
    'medianApy',
    'usdInflows',
    'governance',
    'bridgeVolume'
];
function ProtocolChart(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var protocol = _a.protocol, color = _a.color, historicalChainTvls = _a.historicalChainTvls, _p = _a.chains, chains = _p === void 0 ? [] : _p, _q = _a.bobo, bobo = _q === void 0 ? false : _q, hallmarks = _a.hallmarks, geckoId = _a.geckoId, chartColors = _a.chartColors, metrics = _a.metrics, activeUsersId = _a.activeUsersId, usdInflowsData = _a.usdInflowsData, governanceApi = _a.governanceApi, isHourlyChart = _a.isHourlyChart, isCEX = _a.isCEX, tokenSymbol = _a.tokenSymbol, protocolId = _a.protocolId;
    var router = (0, router_1.useRouter)();
    var _r = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvlEnabled = _r[0];
    var _s = router.query, denomination = _s.denomination, groupBy = _s.groupBy, tvl = _s.tvl, mcap = _s.mcap, tokenPrice = _s.tokenPrice, fdv = _s.fdv, volume = _s.volume, fees = _s.fees, revenue = _s.revenue, unlocks = _s.unlocks, activeUsers = _s.activeUsers, newUsers = _s.newUsers, events = _s.events, transactions = _s.transactions, gasUsed = _s.gasUsed, staking = _s.staking, borrowed = _s.borrowed, medianApy = _s.medianApy, usdInflows = _s.usdInflows, governance = _s.governance, treasury = _s.treasury, bridgeVolume = _s.bridgeVolume, tokenVolume = _s.tokenVolume, tokenLiquidity = _s.tokenLiquidity;
    var DENOMINATIONS = [];
    if (chains && chains.length > 0) {
        DENOMINATIONS.push({ symbol: 'USD', geckoId: null });
        if ((_b = chainTokens_1.chainCoingeckoIds[chains[0]]) === null || _b === void 0 ? void 0 : _b.geckoId) {
            DENOMINATIONS.push(chainTokens_1.chainCoingeckoIds[chains[0]]);
        }
        else {
            DENOMINATIONS.push(chainTokens_1.chainCoingeckoIds['Ethereum']);
        }
    }
    // fetch denomination on protocol chains
    var _t = (0, client_1.useDenominationPriceHistory)(router.isReady && denomination ? (_c = DENOMINATIONS.find(function (d) { return d.symbol === denomination; })) === null || _c === void 0 ? void 0 : _c.geckoId : null), denominationHistory = _t.data, denominationLoading = _t.loading;
    // fetch protocol mcap data
    var _u = (0, client_1.useDenominationPriceHistory)(router.isReady && (mcap === 'true' || tokenPrice === 'true' || fdv === 'true' || tokenVolume === 'true')
        ? geckoId
        : null), protocolCGData = _u.data, loading = _u.loading;
    var _v = (0, swr_1.default)("fdv-".concat(geckoId && fdv === 'true' && router.isReady ? geckoId : null), geckoId && fdv === 'true' && router.isReady
        ? function () {
            return fetch("https://api.coingecko.com/api/v3/coins/".concat(geckoId, "?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false")).then(function (res) { return res.json(); });
        }
        : function () { return null; }), _w = _v.data, fdvData = _w === void 0 ? null : _w, fdvError = _v.error;
    var fetchingFdv = !fdvData && fdvData !== null && !fdvError;
    var _x = (0, hooks_1.useGetOverviewChartData)({
        name: protocol,
        dataToFetch: 'fees',
        type: 'chains',
        enableBreakdownChart: false,
        disabled: router.isReady && (fees === 'true' || revenue === 'true') && metrics.fees ? false : true
    }), feesAndRevenue = _x.data, fetchingFees = _x.loading;
    var _y = (0, client_1.useFetchProtocolActiveUsers)(router.isReady && activeUsers === 'true' && activeUsersId ? activeUsersId : null), activeUsersData = _y.data, fetchingActiveUsers = _y.loading;
    var _z = (0, client_1.useFetchProtocolNewUsers)(router.isReady && newUsers === 'true' && activeUsersId ? activeUsersId : null), newUsersData = _z.data, fetchingNewUsers = _z.loading;
    var _0 = (0, client_1.useFetchProtocolTransactions)(router.isReady && transactions === 'true' && activeUsersId ? activeUsersId : null), transactionsData = _0.data, fetchingTransactions = _0.loading;
    var _1 = (0, client_1.useFetchProtocolGasUsed)(router.isReady && gasUsed === 'true' && activeUsersId ? activeUsersId : null), gasData = _1.data, fetchingGasUsed = _1.loading;
    var _2 = (0, client_1.useFetchProtocolMedianAPY)(router.isReady && medianApy === 'true' && metrics.medianApy ? protocol : null), medianAPYData = _2.data, fetchingMedianAPY = _2.loading;
    var _3 = (0, client_1.useFetchProtocolGovernanceData)(router.isReady && governance === 'true' && governanceApi ? governanceApi : null), governanceData = _3.data, fetchingGovernanceData = _3.loading;
    var _4 = (0, client_1.useFetchProtocolTreasury)(router.isReady && metrics.treasury && treasury === 'true' ? protocol : null), treasuryData = _4.data, fetchingTreasury = _4.loading;
    var _5 = (0, client_1.useGetProtocolEmissions)(router.isReady && metrics.unlocks && unlocks === 'true' ? protocol : null), emissions = _5.data, fetchingEmissions = _5.loading;
    var _6 = (0, BridgeContainer_1.useFetchBridgeVolumeOnAllChains)(router.isReady && metrics.bridge && bridgeVolume === 'true' ? protocol : null), bridgeVolumeData = _6.data, fetchingBridgeVolume = _6.loading;
    var _7 = (0, client_1.useFetchProtocolTokenLiquidity)(router.isReady && metrics.tokenLiquidity && tokenLiquidity === 'true' ? protocolId : null), tokenLiquidityData = _7.data, fetchingTokenLiquidity = _7.loading;
    var _8 = (0, hooks_1.useGetOverviewChartData)({
        name: protocol,
        dataToFetch: 'dexs',
        type: 'chains',
        enableBreakdownChart: false,
        disabled: router.isReady && volume === 'true' && metrics.dexs ? false : true
    }), volumeData = _8.data, fetchingVolume = _8.loading;
    var showNonUsdDenomination = denomination &&
        denomination !== 'USD' &&
        DENOMINATIONS.find(function (d) { return d.symbol === denomination; }) &&
        ((_d = denominationHistory === null || denominationHistory === void 0 ? void 0 : denominationHistory.prices) === null || _d === void 0 ? void 0 : _d.length) > 0
        ? true
        : false;
    var valueSymbol = '$';
    if (showNonUsdDenomination) {
        var d = DENOMINATIONS.find(function (d) { return d.symbol === denomination; });
        valueSymbol = d.symbol || '';
    }
    var _9 = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        if (!router.isReady) {
            return { chartData: [], chartsUnique: [] };
        }
        var chartsUnique = [];
        var chartData = {};
        var tvlData = tvl !== 'false' ? (0, exports.formatProtocolsTvlChartData)({ historicalChainTvls: historicalChainTvls, extraTvlEnabled: extraTvlEnabled }) : [];
        if (tvlData.length > 0 && tvl !== 'false') {
            chartsUnique.push('TVL');
            var prevDate_1 = null;
            tvlData.forEach(function (_a) {
                var _b, _c;
                var _d = __read(_a, 2), dateS = _d[0], TVL = _d[1];
                var date = isHourlyChart ? dateS : Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                if (prevDate_1 && +date - prevDate_1 > 86400) {
                    var noOfDatesMissing = Math.floor((+date - prevDate_1) / 86400);
                    for (var i = 1; i < noOfDatesMissing + 1; i++) {
                        var missingDate = prevDate_1 + 86400 * i;
                        if (!chartData[missingDate]) {
                            chartData[missingDate] = {};
                        }
                        var missingTvl = (((_c = (_b = chartData[prevDate_1]) === null || _b === void 0 ? void 0 : _b['TVL']) !== null && _c !== void 0 ? _c : 0) +
                            (showNonUsdDenomination ? TVL / getPriceAtDate(dateS, denominationHistory.prices) : TVL)) /
                            2;
                        chartData[missingDate]['TVL'] = missingTvl;
                    }
                }
                prevDate_1 = +date;
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['TVL'] = showNonUsdDenomination ? TVL / getPriceAtDate(dateS, denominationHistory.prices) : TVL;
            });
        }
        if (staking === 'true' && ((_b = (_a = historicalChainTvls['staking']) === null || _a === void 0 ? void 0 : _a.tvl) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            chartsUnique.push('Staking');
            var prevDate_2 = null;
            historicalChainTvls['staking'].tvl.forEach(function (_a) {
                var _b, _c;
                var dateS = _a.date, totalLiquidityUSD = _a.totalLiquidityUSD;
                var date = isHourlyChart ? dateS : Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                if (prevDate_2 && +date - prevDate_2 > 86400) {
                    var noOfDatesMissing = Math.floor((+date - prevDate_2) / 86400);
                    for (var i = 1; i < noOfDatesMissing + 1; i++) {
                        var missingDate = prevDate_2 + 86400 * i;
                        if (!chartData[missingDate]) {
                            chartData[missingDate] = {};
                        }
                        var missingStakedTvl = (((_c = (_b = chartData[prevDate_2]) === null || _b === void 0 ? void 0 : _b['Staking']) !== null && _c !== void 0 ? _c : 0) +
                            (showNonUsdDenomination
                                ? totalLiquidityUSD / getPriceAtDate(dateS, denominationHistory.prices)
                                : totalLiquidityUSD)) /
                            2;
                        chartData[missingDate]['Staking'] = missingStakedTvl;
                    }
                }
                prevDate_2 = date;
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Staking'] = showNonUsdDenomination
                    ? totalLiquidityUSD / getPriceAtDate(dateS, denominationHistory.prices)
                    : totalLiquidityUSD;
            });
        }
        if (borrowed === 'true' && ((_d = (_c = historicalChainTvls['borrowed']) === null || _c === void 0 ? void 0 : _c.tvl) === null || _d === void 0 ? void 0 : _d.length) > 0) {
            chartsUnique.push('Borrowed');
            var prevDate_3 = null;
            historicalChainTvls['borrowed'].tvl.forEach(function (_a) {
                var _b, _c;
                var dateS = _a.date, totalLiquidityUSD = _a.totalLiquidityUSD;
                var date = isHourlyChart ? dateS : Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                if (prevDate_3 && +date - prevDate_3 > 86400) {
                    var noOfDatesMissing = Math.floor((+date - prevDate_3) / 86400);
                    for (var i = 1; i < noOfDatesMissing + 1; i++) {
                        var missingDate = prevDate_3 + 86400 * i;
                        if (!chartData[missingDate]) {
                            chartData[missingDate] = {};
                        }
                        var missingBorrowedTvl = (((_c = (_b = chartData[prevDate_3]) === null || _b === void 0 ? void 0 : _b['Borrowed']) !== null && _c !== void 0 ? _c : 0) +
                            (showNonUsdDenomination
                                ? totalLiquidityUSD / getPriceAtDate(dateS, denominationHistory.prices)
                                : totalLiquidityUSD)) /
                            2;
                        chartData[missingDate]['Borrowed'] = missingBorrowedTvl;
                    }
                }
                prevDate_3 = date;
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Borrowed'] = showNonUsdDenomination
                    ? totalLiquidityUSD / getPriceAtDate(dateS, denominationHistory.prices)
                    : totalLiquidityUSD;
            });
        }
        if (geckoId && protocolCGData) {
            if (mcap === 'true') {
                chartsUnique.push('Mcap');
                protocolCGData['market_caps'].forEach(function (_a) {
                    var _b = __read(_a, 2), dateMs = _b[0], Mcap = _b[1];
                    var date = Math.floor((0, utils_1.nearestUtc)(dateMs) / 1000);
                    if (!chartData[date]) {
                        chartData[date] = {};
                    }
                    chartData[date]['Mcap'] = showNonUsdDenomination
                        ? Mcap / getPriceAtDate(date, denominationHistory.prices)
                        : Mcap;
                });
                if (tvlData.length > 0 &&
                    tvl !== 'false' &&
                    protocolCGData['market_caps'].length > 0 &&
                    protocolCGData['market_caps'][protocolCGData['market_caps'].length - 1][0] <
                        +tvlData[tvlData.length - 1][0] * 1000) {
                    var date = isHourlyChart
                        ? tvlData[tvlData.length - 1][0]
                        : Math.floor((0, utils_1.nearestUtc)(+tvlData[tvlData.length - 1][0] * 1000) / 1000);
                    var Mcap = protocolCGData['market_caps'][protocolCGData['market_caps'].length - 1][1];
                    chartData[date]['Mcap'] = showNonUsdDenomination
                        ? Mcap / getPriceAtDate(date, denominationHistory.prices)
                        : Mcap;
                }
            }
            if (tokenPrice === 'true') {
                chartsUnique.push('Token Price');
                protocolCGData['prices'].forEach(function (_a) {
                    var _b = __read(_a, 2), dateMs = _b[0], price = _b[1];
                    var date = Math.floor((0, utils_1.nearestUtc)(dateMs) / 1000);
                    if (!chartData[date]) {
                        chartData[date] = {};
                    }
                    chartData[date]['Token Price'] = showNonUsdDenomination
                        ? price / getPriceAtDate(date, denominationHistory.prices)
                        : price;
                });
                if (tvlData.length > 0 &&
                    tvl !== 'false' &&
                    protocolCGData['prices'].length > 0 &&
                    protocolCGData['prices'][protocolCGData['prices'].length - 1][0] < +tvlData[tvlData.length - 1][0] * 1000) {
                    var date = isHourlyChart
                        ? tvlData[tvlData.length - 1][0]
                        : Math.floor((0, utils_1.nearestUtc)(+tvlData[tvlData.length - 1][0] * 1000) / 1000);
                    var tokenPrice_1 = protocolCGData['prices'][protocolCGData['prices'].length - 1][1];
                    chartData[date]['Token Price'] = showNonUsdDenomination
                        ? tokenPrice_1 / getPriceAtDate(date, denominationHistory.prices)
                        : tokenPrice_1;
                }
            }
            if (fdv === 'true' && fdvData) {
                chartsUnique.push('FDV');
                var totalSupply_1 = fdvData['market_data']['total_supply'];
                protocolCGData['prices'].forEach(function (_a) {
                    var _b = __read(_a, 2), dateMs = _b[0], price = _b[1];
                    var date = Math.floor((0, utils_1.nearestUtc)(dateMs) / 1000);
                    if (!chartData[date]) {
                        chartData[date] = {};
                    }
                    var fdv = totalSupply_1 * price;
                    chartData[date]['FDV'] = showNonUsdDenomination ? fdv / getPriceAtDate(date, denominationHistory.prices) : fdv;
                });
                if (tvlData.length > 0 &&
                    tvl !== 'false' &&
                    protocolCGData['prices'].length > 0 &&
                    protocolCGData['prices'][protocolCGData['prices'].length - 1][0] < +tvlData[tvlData.length - 1][0] * 1000) {
                    var date = isHourlyChart
                        ? tvlData[tvlData.length - 1][0]
                        : Math.floor((0, utils_1.nearestUtc)(+tvlData[tvlData.length - 1][0] * 1000) / 1000);
                    var tokenPrice_2 = protocolCGData['prices'][protocolCGData['prices'].length - 1][1];
                    var fdv_1 = totalSupply_1 * tokenPrice_2;
                    chartData[date]['FDV'] = showNonUsdDenomination ? fdv_1 / getPriceAtDate(date, denominationHistory.prices) : fdv_1;
                }
            }
            if (tokenVolume === 'true') {
                chartsUnique.push('Token Volume');
                protocolCGData['total_volumes'].forEach(function (_a) {
                    var _b = __read(_a, 2), dateMs = _b[0], price = _b[1];
                    var date = Math.floor((0, utils_1.nearestUtc)(dateMs) / 1000);
                    if (!chartData[date]) {
                        chartData[date] = {};
                    }
                    chartData[date]['Token Volume'] = showNonUsdDenomination
                        ? price / getPriceAtDate(date, denominationHistory.prices)
                        : price;
                });
                if (tvlData.length > 0 &&
                    tvl !== 'false' &&
                    protocolCGData['total_volumes'].length > 0 &&
                    protocolCGData['total_volumes'][protocolCGData['total_volumes'].length - 1][0] <
                        +tvlData[tvlData.length - 1][0] * 1000) {
                    var date = isHourlyChart
                        ? tvlData[tvlData.length - 1][0]
                        : Math.floor((0, utils_1.nearestUtc)(+tvlData[tvlData.length - 1][0] * 1000) / 1000);
                    var tokenVolume_1 = protocolCGData['total_volumes'][protocolCGData['total_volumes'].length - 1][1];
                    chartData[date]['Token Volume'] = showNonUsdDenomination
                        ? tokenVolume_1 / getPriceAtDate(date, denominationHistory.prices)
                        : tokenVolume_1;
                }
            }
        }
        if (tokenLiquidity === 'true' && tokenLiquidityData) {
            chartsUnique.push('Token Liquidity');
            tokenLiquidityData.forEach(function (item) {
                var date = Math.floor((0, utils_1.nearestUtc)(+item[0] * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Token Liquidity'] = showNonUsdDenomination
                    ? item[1] / getPriceAtDate(date, denominationHistory.prices)
                    : item[1];
            });
        }
        if (bridgeVolume === 'true' && bridgeVolumeData) {
            chartsUnique.push('Bridge Deposits');
            chartsUnique.push('Bridge Withdrawals');
            bridgeVolumeData.forEach(function (item) {
                var date = Math.floor((0, utils_1.nearestUtc)(+item.date * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Bridge Deposits'] = showNonUsdDenomination
                    ? item.Deposited / getPriceAtDate(date, denominationHistory.prices)
                    : item.Deposited;
                chartData[date]['Bridge Withdrawals'] = showNonUsdDenomination
                    ? item.Withdrawn / getPriceAtDate(date, denominationHistory.prices)
                    : item.Withdrawn;
            });
        }
        if (volume === 'true' && volumeData) {
            chartsUnique.push('Volume');
            volumeData.forEach(function (item) {
                var date = Math.floor((0, utils_1.nearestUtc)(+item.date * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Volume'] = showNonUsdDenomination
                    ? +item.Dexs / getPriceAtDate(date, denominationHistory.prices)
                    : item.Dexs;
            });
        }
        if (feesAndRevenue) {
            if (fees === 'true') {
                chartsUnique.push('Fees');
            }
            if (revenue === 'true') {
                chartsUnique.push('Revenue');
            }
            feesAndRevenue.forEach(function (item) {
                var date = Math.floor((0, utils_1.nearestUtc)(+item.date * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                if (fees === 'true') {
                    chartData[date]['Fees'] = showNonUsdDenomination
                        ? +item.Fees / getPriceAtDate(date, denominationHistory.prices)
                        : item.Fees;
                }
                if (revenue === 'true') {
                    chartData[date]['Revenue'] = showNonUsdDenomination
                        ? +item.Revenue / getPriceAtDate(date, denominationHistory.prices)
                        : item.Revenue;
                }
            });
        }
        if (emissions && unlocks === 'true') {
            chartsUnique.push('Unlocks');
            emissions.chartData
                .filter(function (emission) { return +emission.date * 1000 <= Date.now(); })
                .forEach(function (item) {
                var date = Math.floor((0, utils_1.nearestUtc)(+item.date * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                var totalUnlocked = 0;
                for (var label in item) {
                    if (label !== 'date') {
                        totalUnlocked += item[label];
                    }
                }
                chartData[date]['Unlocks'] = totalUnlocked;
            });
        }
        if (activeUsers === 'true' && activeUsersData) {
            chartsUnique.push('Active Users');
            activeUsersData.forEach(function (_a) {
                var _b = __read(_a, 2), dateS = _b[0], noOfUsers = _b[1];
                var date = Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Active Users'] = noOfUsers || 0;
            });
        }
        if (newUsers === 'true' && newUsersData) {
            chartsUnique.push('New Users');
            newUsersData.forEach(function (_a) {
                var _b = __read(_a, 2), dateS = _b[0], noOfUsers = _b[1];
                var date = Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['New Users'] = noOfUsers || 0;
            });
        }
        if (transactions === 'true' && transactionsData) {
            chartsUnique.push('Transactions');
            transactionsData.forEach(function (_a) {
                var _b = __read(_a, 2), dateS = _b[0], noOfTxs = _b[1];
                var date = Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Transactions'] = noOfTxs || 0;
            });
        }
        if (gasUsed === 'true' && gasData) {
            chartsUnique.push('Gas Used');
            gasData.forEach(function (_a) {
                var _b = __read(_a, 2), dateS = _b[0], gasAmount = _b[1];
                var date = Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Gas Used'] = showNonUsdDenomination
                    ? gasAmount / getPriceAtDate(date, denominationHistory.prices)
                    : gasAmount;
            });
        }
        if (medianApy === 'true' && medianAPYData) {
            chartsUnique.push('Median APY');
            medianAPYData.forEach(function (_a) {
                var dateS = _a.date, medianAPY = _a.medianAPY;
                var date = Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Median APY'] = medianAPY;
            });
        }
        if (!isHourlyChart && usdInflows === 'true' && usdInflowsData) {
            chartsUnique.push('USD Inflows');
            var isHourlyInflows_1 = usdInflowsData.length > 2 ? false : true;
            usdInflowsData.slice(0, 100).forEach(function (item, index) {
                if (usdInflowsData[index + 1] && +usdInflowsData[index + 1][0] - +usdInflowsData[index][0] < 86400) {
                    isHourlyInflows_1 = true;
                }
            });
            var currentDate_1;
            var data = isHourlyInflows_1
                ? Object.entries(usdInflowsData.reduce(function (acc, curr) {
                    if (!currentDate_1 || currentDate_1 + 86400 < +curr[0]) {
                        currentDate_1 = Math.floor((0, utils_1.nearestUtc)(+curr[0] * 1000) / 1000);
                    }
                    if (!acc[currentDate_1]) {
                        acc[currentDate_1] = 0;
                    }
                    acc[currentDate_1] = acc[currentDate_1] + curr[1];
                    return acc;
                }, {}))
                : usdInflowsData;
            data.forEach(function (_a) {
                var _b = __read(_a, 2), dateS = _b[0], inflows = _b[1];
                var date = isHourlyChart ? dateS : Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['USD Inflows'] = inflows;
            });
        }
        if (governance === 'true' && governanceData) {
            chartsUnique.push('Total Proposals');
            chartsUnique.push('Successful Proposals');
            chartsUnique.push('Max Votes');
            (_e = governanceData.activity) === null || _e === void 0 ? void 0 : _e.forEach(function (item) {
                var date = Math.floor((0, utils_1.nearestUtc)(+item.date * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Total Proposals'] = item['Total'] || 0;
                chartData[date]['Successful Proposals'] = item['Successful'] || 0;
            });
            (_f = governanceData.maxVotes) === null || _f === void 0 ? void 0 : _f.forEach(function (item) {
                var date = Math.floor((0, utils_1.nearestUtc)(+item.date * 1000) / 1000);
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Max Votes'] = item['Max Votes'] || 0;
            });
        }
        if (treasury === 'true' && treasuryData) {
            chartsUnique.push('Treasury');
            var tData = (0, exports.formatProtocolsTvlChartData)({ historicalChainTvls: treasuryData.chainTvls, extraTvlEnabled: {} });
            var prevDate = null;
            tData.forEach(function (_a) {
                var _b = __read(_a, 2), dateS = _b[0], treasuryValue = _b[1];
                var date = isHourlyChart ? dateS : Math.floor((0, utils_1.nearestUtc)(+dateS * 1000) / 1000);
                // if (prevDate && +date - prevDate > 86400) {
                // 	const noOfDatesMissing = Math.floor((+date - prevDate) / 86400)
                // 	for (let i = 1; i < noOfDatesMissing + 1; i++) {
                // 		const missingDate = prevDate + 86400 * i
                // 		if (!chartData[missingDate]) {
                // 			chartData[missingDate] = {}
                // 		}
                // 		const missingTvl =
                // 			((chartData[prevDate]?.['Treasury'] ?? 0) +
                // 				(showNonUsdDenomination
                // 					? treasuryValue / getPriceAtDate(dateS, denominationHistory.prices)
                // 					: treasuryValue)) /
                // 			2
                // 		chartData[missingDate]['Treasury'] = missingTvl
                // 	}
                // }
                // prevDate = date
                if (!chartData[date]) {
                    chartData[date] = {};
                }
                chartData[date]['Treasury'] = showNonUsdDenomination
                    ? treasuryValue / getPriceAtDate(dateS, denominationHistory.prices)
                    : treasuryValue;
            });
        }
        return {
            chartData: chartData,
            chartsUnique: chartsUnique
        };
    }, [
        protocolCGData,
        mcap,
        geckoId,
        volume,
        volumeData,
        tvl,
        showNonUsdDenomination,
        denominationHistory === null || denominationHistory === void 0 ? void 0 : denominationHistory.prices,
        feesAndRevenue,
        fees,
        revenue,
        router.isReady,
        unlocks,
        activeUsers,
        newUsers,
        activeUsersData,
        newUsersData,
        tokenPrice,
        fdv,
        fdvData,
        gasData,
        gasUsed,
        transactions,
        transactionsData,
        staking,
        borrowed,
        historicalChainTvls,
        medianAPYData,
        medianApy,
        usdInflows,
        usdInflowsData,
        isHourlyChart,
        governance,
        governanceData,
        extraTvlEnabled,
        treasury,
        treasuryData,
        emissions,
        bridgeVolume,
        bridgeVolumeData,
        tokenVolume,
        tokenLiquidity,
        tokenLiquidityData
    ]), chartData = _9.chartData, chartsUnique = _9.chartsUnique;
    var finalData = React.useMemo(function () {
        return groupDataByDays(chartData, isHourlyChart || typeof groupBy !== 'string' ? null : groupBy, chartsUnique);
    }, [chartData, chartsUnique, isHourlyChart, groupBy]);
    var fetchingTypes = [];
    if (denominationLoading) {
        fetchingTypes.push(denomination + ' price');
    }
    if (loading) {
        if (mcap === 'true') {
            fetchingTypes.push('mcap');
        }
        if (tokenPrice === 'true') {
            fetchingTypes.push('token price');
        }
        if (tokenVolume === 'true') {
            fetchingTypes.push('token volume');
        }
    }
    if ((loading || fetchingFdv) && fdv === 'true') {
        fetchingTypes.push('fdv');
    }
    if (fetchingTokenLiquidity) {
        fetchingTypes.push('token liquidity');
    }
    if (fetchingBridgeVolume) {
        fetchingTypes.push('bridge volume');
    }
    if (fetchingFees) {
        if (fees === 'true') {
            fetchingTypes.push('fees');
        }
        if (revenue === 'true') {
            fetchingTypes.push('revenue');
        }
    }
    if (fetchingVolume) {
        fetchingTypes.push('volume');
    }
    if (fetchingEmissions) {
        fetchingTypes.push('unlocks');
    }
    if (fetchingActiveUsers) {
        fetchingTypes.push('active users');
    }
    if (fetchingNewUsers) {
        fetchingTypes.push('new users');
    }
    if (fetchingTransactions) {
        fetchingTypes.push('transactions');
    }
    if (fetchingGasUsed) {
        fetchingTypes.push('gas used');
    }
    if (fetchingMedianAPY) {
        fetchingTypes.push('median apy');
    }
    if (fetchingGovernanceData) {
        fetchingTypes.push('governance');
    }
    if (fetchingTreasury) {
        fetchingTypes.push('treasury');
    }
    var isLoading = loading ||
        fetchingFdv ||
        denominationLoading ||
        fetchingFees ||
        fetchingVolume ||
        fetchingActiveUsers ||
        fetchingNewUsers ||
        fetchingTransactions ||
        fetchingGasUsed ||
        fetchingMedianAPY ||
        fetchingGovernanceData ||
        fetchingTreasury ||
        fetchingEmissions ||
        fetchingBridgeVolume ||
        fetchingTokenLiquidity;
    var realPathname = "/".concat(isCEX ? 'cex' : 'protocol', "/").concat(protocol, "?") +
        CHART_TYPES.reduce(function (acc, curr) {
            if (router.query[curr]) {
                acc += "".concat(curr, "=").concat(router.query[curr], "&");
            }
            return acc;
        }, '');
    var hasAtleasOneBarChart = chartsUnique.reduce(function (acc, curr) {
        if (utils_2.BAR_CHARTS.includes(curr)) {
            acc = true;
        }
        return acc;
    }, false);
    return ((0, jsx_runtime_1.jsxs)(exports.Wrapper, { children: [geckoId ||
                (hallmarks === null || hallmarks === void 0 ? void 0 : hallmarks.length) > 0 ||
                metrics.bridge ||
                metrics.fees ||
                metrics.dexs ||
                metrics.unlocks ||
                activeUsersId ||
                ((_f = (_e = historicalChainTvls['borrowed']) === null || _e === void 0 ? void 0 : _e.tvl) === null || _f === void 0 ? void 0 : _f.length) > 0 ||
                ((_h = (_g = historicalChainTvls['staking']) === null || _g === void 0 ? void 0 : _g.tvl) === null || _h === void 0 ? void 0 : _h.length) > 0 ||
                metrics.medianApy ||
                (metrics.inflows && !isHourlyChart ? true : false) ||
                governanceApi ||
                metrics.treasury ? ((0, jsx_runtime_1.jsxs)(ToggleWrapper, { children: [(0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "tvl", checked: tvl !== 'false', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { tvl: tvl === 'false' ? true : false })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "TVL" }) }))] })), geckoId && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "mcap", checked: mcap === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { mcap: mcap === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Mcap" }) }))] })), (0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "tokenPrice", checked: tokenPrice === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { tokenPrice: tokenPrice === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsxs)("span", { children: [tokenSymbol, " Price"] }) }))] })), (0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "tokenVolume", checked: tokenVolume === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { tokenVolume: tokenVolume === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsxs)("span", { children: [tokenSymbol, " Volume"] }) }))] })), metrics.tokenLiquidity && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "tokenLiquidity", checked: tokenLiquidity === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { tokenLiquidity: tokenLiquidity === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsxs)("span", { children: [tokenSymbol, " Liquidity"] }) }))] }))), (0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "fdv", checked: fdv === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { fdv: fdv === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "FDV" }) }))] }))] })), metrics.bridge && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "bridgeVolume", checked: bridgeVolume === 'true', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { bridgeVolume: bridgeVolume === 'true' ? false : true })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Bridge Volume" }) }))] }))), metrics.dexs && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "volume", checked: volume === 'true', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { volume: volume === 'true' ? false : true })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Volume" }) }))] }))), metrics.fees && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "fees", checked: fees === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { fees: fees === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Fees" }) }))] })), (0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "revenue", checked: revenue === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { revenue: revenue === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Revenue" }) }))] }))] })), metrics.unlocks && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "unlocks", checked: unlocks === 'true', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { unlocks: unlocks === 'true' ? false : true })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Unlocks" }) }))] }))), activeUsersId && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "activeUsers", checked: activeUsers === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { activeUsers: activeUsers === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Active Users" }) }))] })), (0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "newUsers", checked: newUsers === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { newUsers: newUsers === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "New Users" }) }))] })), (0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "transactions", checked: transactions === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { transactions: transactions === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Transactions" }) }))] })), (0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "gasUsed", checked: gasUsed === 'true', onChange: function () {
                                            return router.push({
                                                pathname: router.pathname,
                                                query: __assign(__assign({}, router.query), { gasUsed: gasUsed === 'true' ? false : true })
                                            }, undefined, { shallow: true });
                                        } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Gas Used" }) }))] }))] })), ((_k = (_j = historicalChainTvls['staking']) === null || _j === void 0 ? void 0 : _j.tvl) === null || _k === void 0 ? void 0 : _k.length) > 0 && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "staking", checked: staking === 'true', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { staking: staking === 'true' ? false : true })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Staking" }) }))] }))), ((_m = (_l = historicalChainTvls['borrowed']) === null || _l === void 0 ? void 0 : _l.tvl) === null || _m === void 0 ? void 0 : _m.length) > 0 && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "borrowed", checked: borrowed === 'true', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { borrowed: borrowed === 'true' ? false : true })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Borrowed" }) }))] }))), metrics.medianApy && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "medianApy", checked: medianApy === 'true', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { medianApy: medianApy === 'true' ? false : true })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Median APY" }) }))] }))), !isHourlyChart && metrics.inflows && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "usdInflows", checked: usdInflows === 'true', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { usdInflows: usdInflows === 'true' ? false : true })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "USD Inflows" }) }))] }))), governanceApi && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "governance", checked: governance === 'true', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { governance: governance === 'true' ? false : true })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Governance" }) }))] }))), metrics.treasury && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "treasury", checked: treasury === 'true', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { treasury: treasury === 'true' ? false : true })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Treasury" }) }))] }))), (hallmarks === null || hallmarks === void 0 ? void 0 : hallmarks.length) > 0 && ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, __assign({ backgroundColor: color }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "events", checked: events !== 'false', onChange: function () {
                                    return router.push({
                                        pathname: router.pathname,
                                        query: __assign(__assign({}, router.query), { events: events === 'false' ? true : false })
                                    }, undefined, { shallow: true });
                                } }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Events" }) }))] })))] })) : null, (0, jsx_runtime_1.jsxs)(Misc_1.FiltersWrapper, { children: [DENOMINATIONS.length > 0 && ((0, jsx_runtime_1.jsx)(Misc_1.Filters, __assign({ color: color, style: { marginRight: 'auto' } }, { children: DENOMINATIONS.map(function (D) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: realPathname + "denomination=".concat(D.symbol) + (groupBy ? "&groupBy=".concat(groupBy) : ''), shallow: true, passHref: true }, { children: (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ active: denomination === D.symbol || (D.symbol === 'USD' && !denomination) }, { children: D.symbol })) }), D.symbol)); }) }))), !isHourlyChart && hasAtleasOneBarChart ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Misc_1.Filters, __assign({ color: color }, { children: [(0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: realPathname + (denomination ? "denomination=".concat(denomination, "&") : '') + 'groupBy=daily', shallow: true, passHref: true }, { children: (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ active: groupBy === 'daily' || !groupBy }, { children: "Daily" })) })), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: realPathname + (denomination ? "denomination=".concat(denomination, "&") : '') + 'groupBy=weekly', shallow: true, passHref: true }, { children: (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ active: groupBy === 'weekly' }, { children: "Weekly" })) })), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: realPathname + (denomination ? "denomination=".concat(denomination, "&") : '') + 'groupBy=monthly', shallow: true, passHref: true }, { children: (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ active: groupBy === 'monthly' }, { children: "Monthly" })) })), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: realPathname + (denomination ? "denomination=".concat(denomination, "&") : '') + 'groupBy=cumulative', shallow: true, passHref: true }, { children: (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ active: groupBy === 'cumulative' }, { children: "Cumulative" })) }))] })) })) : null] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ style: { padding: 0, minHeight: '360px' } }, { children: !router.isReady ? null : isLoading ? ((0, jsx_runtime_1.jsx)("p", __assign({ style: { position: 'relative', top: '180px', textAlign: 'center' } }, { children: "Fetching ".concat(fetchingTypes.join(', '), " ...") }))) : ((0, jsx_runtime_1.jsx)(AreaChart, { chartData: finalData, color: color, title: "", valueSymbol: valueSymbol, stacks: chartsUnique, hallmarks: !(events === 'false') && hallmarks, tooltipSort: false, stackColors: chartColors, style: __assign({}, (bobo && {
                        backgroundImage: 'url("/bobo.png")',
                        backgroundSize: '100% 360px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom'
                    })), unlockTokenSymbol: (_o = emissions === null || emissions === void 0 ? void 0 : emissions.tokenPrice) === null || _o === void 0 ? void 0 : _o.symbol })) }))] }));
}
exports.default = ProtocolChart;
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 16px 0;\n\tgrid-column: span 1;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 16px 0;\n\tgrid-column: span 1;\n"])));
var formatProtocolsTvlChartData = function (_a) {
    var _b;
    var historicalChainTvls = _a.historicalChainTvls, extraTvlEnabled = _a.extraTvlEnabled;
    var tvlDictionary = {};
    var _loop_1 = function (section) {
        var name_1 = section.toLowerCase();
        // skip sum of keys like ethereum-staking, arbitrum-vesting
        if (!name_1.includes('-') && name_1 !== 'offers') {
            // sum key with staking, ethereum, arbitrum etc
            if (Object.keys(extraTvlEnabled).includes(name_1) ? extraTvlEnabled[name_1] : true) {
                (_b = historicalChainTvls[section].tvl) === null || _b === void 0 ? void 0 : _b.forEach(function (_a, index) {
                    var _b;
                    var date = _a.date, totalLiquidityUSD = _a.totalLiquidityUSD;
                    var nearestDate = date;
                    // roundup timestamps on last tvl values in chart
                    if (index > historicalChainTvls[section].tvl.length - 2 && !tvlDictionary[date]) {
                        var prevDate = (_b = historicalChainTvls[section].tvl[index - 1]) === null || _b === void 0 ? void 0 : _b.date;
                        // only change timestamp if prev timestamp is at UTC 00:00
                        if (prevDate && new Date(prevDate * 1000).getUTCHours() === 0) {
                            // find date in tvlDictionary
                            for (var i = prevDate + 1; i <= Number((new Date().getTime() / 1000).toFixed(0)) && nearestDate === date; i++) {
                                if (tvlDictionary[i]) {
                                    nearestDate = i;
                                }
                            }
                        }
                    }
                    if (!tvlDictionary[nearestDate]) {
                        tvlDictionary[nearestDate] = 0;
                    }
                    tvlDictionary[nearestDate] += totalLiquidityUSD;
                });
            }
        }
    };
    for (var section in historicalChainTvls) {
        _loop_1(section);
    }
    return Object.entries(tvlDictionary);
};
exports.formatProtocolsTvlChartData = formatProtocolsTvlChartData;
var getPriceAtDate = function (date, history) {
    var _a;
    var priceAtDate = history.find(function (x) { return x[0] === Number(date) * 1000; });
    if (!priceAtDate) {
        priceAtDate = history.find(function (x) { return -432000000 < x[0] - Number(date) * 1000 && x[0] - Number(date) * 1000 < 432000000; });
    }
    return (_a = priceAtDate === null || priceAtDate === void 0 ? void 0 : priceAtDate[1]) !== null && _a !== void 0 ? _a : 0;
};
var ToggleWrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin: 0 16px;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin: 0 16px;\n"])));
var oneWeek = 7 * 24 * 60 * 60;
var oneMonth = 30 * 24 * 60 * 60;
var groupDataByDays = function (data, groupBy, chartsUnique) {
    if (groupBy && ['weekly', 'monthly', 'cumulative'].includes(groupBy)) {
        var chartData_1 = {};
        var currentDate_2;
        var cumulative_1 = {};
        var _loop_2 = function (date) {
            if (!currentDate_2 ||
                currentDate_2 + (groupBy === 'weekly' ? oneWeek : groupBy === 'monthly' ? oneMonth : 0) < +date) {
                currentDate_2 = +date;
            }
            chartsUnique.forEach(function (chartType) {
                if (!chartData_1[date]) {
                    chartData_1[date] = {};
                }
                if (utils_2.BAR_CHARTS.includes(chartType)) {
                    if (groupBy === 'cumulative') {
                        cumulative_1[chartType] = (cumulative_1[chartType] || 0) + (+data[date][chartType] || 0);
                        chartData_1[currentDate_2][chartType] = cumulative_1[chartType];
                    }
                    else {
                        chartData_1[currentDate_2][chartType] = (chartData_1[currentDate_2][chartType] || 0) + (+data[date][chartType] || 0);
                    }
                }
                else {
                    chartData_1[date][chartType] = +data[date][chartType] || 0;
                }
            });
        };
        for (var date in data) {
            _loop_2(date);
        }
        return Object.entries(chartData_1).map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], values = _b[1];
            return (__assign({ date: date }, values));
        });
    }
    return Object.entries(data).map(function (_a) {
        var _b = __read(_a, 2), date = _b[0], values = _b[1];
        return (__assign({ date: date }, values));
    });
};
var templateObject_1, templateObject_2;
