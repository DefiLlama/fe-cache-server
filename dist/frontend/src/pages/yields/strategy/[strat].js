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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var dynamic_1 = __importDefault(require("next/dynamic"));
var router_1 = require("next/router");
var layout_1 = __importDefault(require("../../../layout"));
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var Pool_1 = require("../../../layout/Pool");
var Medium_1 = require("../../../layout/Stats/Medium");
var client_1 = require("../../../api/categories/yield/client");
var styled_components_1 = __importDefault(require("styled-components"));
var index_1 = require("../../../api/categories/yield/index");
var utils_1 = require("../../../utils");
var StackedBarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/BarChart')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }
});
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/AreaChart')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }
});
var PageView = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var query = (0, router_1.useRouter)().query;
    var tokens = (_a = query.strat) === null || _a === void 0 ? void 0 : _a.split('_');
    var lendToken = (tokens === null || tokens === void 0 ? void 0 : tokens.length) ? tokens[0] : '';
    var borrowToken = (tokens === null || tokens === void 0 ? void 0 : tokens.length) ? tokens[1] : '';
    var farmToken = (tokens === null || tokens === void 0 ? void 0 : tokens.length) ? tokens[2] : '';
    var _t = (0, client_1.useYieldChartData)(lendToken), lendHistory = _t.data, fetchingLendData = _t.loading;
    var borrowHistory = (0, client_1.useYieldChartLendBorrow)(borrowToken).data;
    var farmHistory = (0, client_1.useYieldChartData)(farmToken).data;
    var configData = (0, client_1.useConfigPool)((tokens === null || tokens === void 0 ? void 0 : tokens.length) ? tokens.join(',') : '').data;
    var parseTimestamp = function (timestamp) {
        return new Date(timestamp.split('T')[0]).getTime() / 1000;
    };
    var _u = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        if (!lendHistory || !borrowHistory || !farmHistory || !configData)
            return {};
        var lendData = (_a = lendHistory === null || lendHistory === void 0 ? void 0 : lendHistory.data) === null || _a === void 0 ? void 0 : _a.map(function (t) { return (__assign(__assign({}, t), { timestamp: parseTimestamp(t.timestamp) })); });
        var borrowData = (_b = borrowHistory === null || borrowHistory === void 0 ? void 0 : borrowHistory.data) === null || _b === void 0 ? void 0 : _b.map(function (t) { return (__assign(__assign({}, t), { timestamp: parseTimestamp(t.timestamp) })); });
        var farmData = (_c = farmHistory === null || farmHistory === void 0 ? void 0 : farmHistory.data) === null || _c === void 0 ? void 0 : _c.map(function (t) { return (__assign(__assign({}, t), { timestamp: parseTimestamp(t.timestamp) })); });
        var uniqueDates = __spreadArray([], __read(new Set(lendData
            .map(function (d) { return d.timestamp; })
            .concat(borrowData.map(function (d) { return d.timestamp; }))
            .concat(farmData.map(function (d) { return d.timestamp; })))), false);
        var merged = [];
        uniqueDates.forEach(function (d) {
            merged.push({
                timestamp: d,
                lendData: lendData.find(function (i) { return i.timestamp === d; }),
                borrowData: borrowData.find(function (i) { return i.timestamp === d; }),
                farmData: farmData.find(function (i) { return i.timestamp === d; })
            });
        });
        merged = merged.filter(function (t) { return !Object.values(t).includes(undefined); });
        // filter merged to length where all 3 components (lend/borrow/farm values) are not null
        merged = merged.filter(function (t) { return t.lendData.apy && t.borrowData.apyBaseBorrow && t.farmData.apy; });
        var configs = (configData === null || configData === void 0 ? void 0 : configData.data) || [];
        var ltv = ((_d = configs === null || configs === void 0 ? void 0 : configs.find(function (p) { return p.config_id === lendToken; })) === null || _d === void 0 ? void 0 : _d.ltv) || 0;
        merged = merged.map(function (t) {
            var _a, _b;
            return (__assign(__assign({}, t), { strategyAPY: t.lendData.apy + (-t.borrowData.apyBaseBorrow + t.borrowData.apyRewardBorrow) * ltv + t.farmData.apy * ltv, loopAPY: (_b = (0, index_1.calculateLoopAPY)([__assign(__assign({}, t === null || t === void 0 ? void 0 : t.borrowData), { apyBaseBorrow: -((_a = t === null || t === void 0 ? void 0 : t.borrowData) === null || _a === void 0 ? void 0 : _a.apyBaseBorrow), ltv: ltv })], 10)[0]) === null || _b === void 0 ? void 0 : _b.loopApy }));
        });
        var strategyData = merged.map(function (t) { var _a; return [t.timestamp, (_a = t === null || t === void 0 ? void 0 : t.strategyAPY) === null || _a === void 0 ? void 0 : _a.toFixed(2)]; }).filter(function (t) { return t[1]; });
        var loopData = merged.map(function (t) { var _a; return [t.timestamp, (_a = t === null || t === void 0 ? void 0 : t.loopAPY) === null || _a === void 0 ? void 0 : _a.toFixed(2)]; }).filter(function (t) { return t[1]; });
        // make sure this is the most recent value
        var latestValues = (_e = merged === null || merged === void 0 ? void 0 : merged.slice(-1)[0]) !== null && _e !== void 0 ? _e : [];
        var farmTVL = (_g = (_f = latestValues === null || latestValues === void 0 ? void 0 : latestValues.farmData) === null || _f === void 0 ? void 0 : _f.tvlUsd) !== null && _g !== void 0 ? _g : 0;
        var borrowAvailable = (_k = ((_h = latestValues === null || latestValues === void 0 ? void 0 : latestValues.borrowData) === null || _h === void 0 ? void 0 : _h.totalSupplyUsd) - ((_j = latestValues === null || latestValues === void 0 ? void 0 : latestValues.borrowData) === null || _j === void 0 ? void 0 : _j.totalBorrowUsd)) !== null && _k !== void 0 ? _k : 0;
        var lendApy = (_m = (_l = latestValues === null || latestValues === void 0 ? void 0 : latestValues.lendData) === null || _l === void 0 ? void 0 : _l.apy) !== null && _m !== void 0 ? _m : 0;
        var borrowApyBase = (_p = (_o = latestValues === null || latestValues === void 0 ? void 0 : latestValues.borrowData) === null || _o === void 0 ? void 0 : _o.apyBaseBorrow) !== null && _p !== void 0 ? _p : 0;
        var borrowApyReward = (_r = (_q = latestValues === null || latestValues === void 0 ? void 0 : latestValues.borrowData) === null || _q === void 0 ? void 0 : _q.apyRewardBorrow) !== null && _r !== void 0 ? _r : 0;
        var borrowApy = -borrowApyBase + borrowApyReward;
        var farmApy = (_t = (_s = latestValues === null || latestValues === void 0 ? void 0 : latestValues.farmData) === null || _s === void 0 ? void 0 : _s.apy) !== null && _t !== void 0 ? _t : 0;
        var strategyAPY = (_u = latestValues === null || latestValues === void 0 ? void 0 : latestValues.strategyAPY) !== null && _u !== void 0 ? _u : 0;
        var loopAPY = (_v = latestValues === null || latestValues === void 0 ? void 0 : latestValues.loopAPY) !== null && _v !== void 0 ? _v : 0;
        var finalAPY = lendToken === borrowToken ? loopAPY : strategyAPY;
        var finalChart = lendToken === borrowToken ? loopData : strategyData;
        var barChartDataSupply = (merged === null || merged === void 0 ? void 0 : merged.length)
            ? merged.map(function (item) {
                var _a, _b, _c, _d;
                return ({
                    date: item.lendData.timestamp,
                    Base: (_b = (_a = item.lendData) === null || _a === void 0 ? void 0 : _a.apyBase) === null || _b === void 0 ? void 0 : _b.toFixed(2),
                    Reward: (_d = (_c = item.lendData) === null || _c === void 0 ? void 0 : _c.apyReward) === null || _d === void 0 ? void 0 : _d.toFixed(2)
                });
            })
            : [];
        var barChartDataBorrow = (merged === null || merged === void 0 ? void 0 : merged.length)
            ? merged.map(function (item) {
                var _a, _b, _c, _d;
                return ({
                    date: item.borrowData.timestamp,
                    Base: -((_b = (_a = item.borrowData) === null || _a === void 0 ? void 0 : _a.apyBaseBorrow) === null || _b === void 0 ? void 0 : _b.toFixed(2)),
                    Reward: (_d = (_c = item.borrowData) === null || _c === void 0 ? void 0 : _c.apyRewardBorrow) === null || _d === void 0 ? void 0 : _d.toFixed(2)
                });
            })
            : [];
        var barChartDataFarm = (merged === null || merged === void 0 ? void 0 : merged.length)
            ? merged.map(function (item) {
                var _a, _b, _c, _d, _e, _f;
                return ({
                    date: item.farmData.timestamp,
                    Base: (_c = (_b = (_a = item.farmData) === null || _a === void 0 ? void 0 : _a.apyBase) === null || _b === void 0 ? void 0 : _b.toFixed(2)) !== null && _c !== void 0 ? _c : (_d = item.farmData.apy) === null || _d === void 0 ? void 0 : _d.toFixed(2),
                    Reward: (_f = (_e = item.farmData) === null || _e === void 0 ? void 0 : _e.apyReward) === null || _f === void 0 ? void 0 : _f.toFixed(2)
                });
            })
            : [];
        return {
            finalChart: finalChart,
            lendApy: lendApy,
            borrowApy: borrowApy,
            farmApy: farmApy,
            finalAPY: finalAPY,
            ltv: ltv,
            barChartDataSupply: barChartDataSupply,
            barChartDataBorrow: barChartDataBorrow,
            barChartDataFarm: barChartDataFarm,
            farmTVL: farmTVL,
            borrowAvailable: borrowAvailable
        };
    }, [lendHistory, borrowHistory, farmHistory, configData, lendToken, borrowToken]), _v = _u.finalChart, finalChart = _v === void 0 ? [] : _v, _w = _u.barChartDataSupply, barChartDataSupply = _w === void 0 ? [] : _w, _x = _u.barChartDataBorrow, barChartDataBorrow = _x === void 0 ? [] : _x, _y = _u.barChartDataFarm, barChartDataFarm = _y === void 0 ? [] : _y, lendApy = _u.lendApy, borrowApy = _u.borrowApy, farmApy = _u.farmApy, finalAPY = _u.finalAPY, ltv = _u.ltv, farmTVL = _u.farmTVL, borrowAvailable = _u.borrowAvailable;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(0, jsx_runtime_1.jsxs)(Pool_1.PoolDetails, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.Name, __assign({ style: { flexWrap: 'wrap' } }, { children: "APY Breakdown:" })), (0, jsx_runtime_1.jsx)(TableWrapper, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Strategy APY:" }), (0, jsx_runtime_1.jsxs)("td", { children: [finalAPY === null || finalAPY === void 0 ? void 0 : finalAPY.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsx)("tr", __assign({ "data-divider": true }, { children: (0, jsx_runtime_1.jsx)("th", {}) })), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Supply APY:" }), (0, jsx_runtime_1.jsxs)("td", { children: [lendApy === null || lendApy === void 0 ? void 0 : lendApy.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Borrow APY:" }), (0, jsx_runtime_1.jsxs)("td", { children: [borrowApy === null || borrowApy === void 0 ? void 0 : borrowApy.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Farm APY:" }), (0, jsx_runtime_1.jsxs)("td", { children: [farmApy === null || farmApy === void 0 ? void 0 : farmApy.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Max LTV:" }), (0, jsx_runtime_1.jsxs)("td", { children: [(ltv === null || ltv === void 0 ? void 0 : ltv.toFixed(2)) * 100, "%"] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Available Borrow Liquidity:" }), (0, jsx_runtime_1.jsxs)("td", { children: ["$", (0, utils_1.toK)(borrowAvailable)] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Farm TVL:" }), (0, jsx_runtime_1.jsxs)("td", { children: ["$", (0, utils_1.toK)(farmTVL)] })] })] }) })] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartWrapper, __assign({ style: { position: 'relative' } }, { children: (0, jsx_runtime_1.jsx)(AreaChart, { title: "Strategy APY", chartData: finalChart, color: backgroundColor, valueSymbol: '%' }) }))] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.InfoWrapper, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Steps" }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "1." }), "Lend ", (_b = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === lendToken; })) === null || _b === void 0 ? void 0 : _b.symbol, " as collateral on", ' ', (_c = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === lendToken; })) === null || _c === void 0 ? void 0 : _c.project, " which earns a Supply APY of", ' ', lendApy === null || lendApy === void 0 ? void 0 : lendApy.toFixed(2), "%."] }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "2." }), "Borrow ", (_d = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === borrowToken; })) === null || _d === void 0 ? void 0 : _d.symbol, " against your", ' ', (_e = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === lendToken; })) === null || _e === void 0 ? void 0 : _e.symbol, " collateral with a max LTV of ", ltv * 100, "% and a borrow APY of ", borrowApy === null || borrowApy === void 0 ? void 0 : borrowApy.toFixed(2), "% (", borrowApy > 0 ? 'You get paid by borrowing' : 'The interest you need to pay', ")."] }), ((_f = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === borrowToken; })) === null || _f === void 0 ? void 0 : _f.symbol) !==
                            ((_g = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === farmToken; })) === null || _g === void 0 ? void 0 : _g.symbol) ? ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "3." }), "Swap borrowed ", (_h = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === borrowToken; })) === null || _h === void 0 ? void 0 : _h.symbol, " for", ' ', (_j = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === farmToken; })) === null || _j === void 0 ? void 0 : _j.symbol] })) : null, (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [((_k = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === borrowToken; })) === null || _k === void 0 ? void 0 : _k.symbol) !==
                                    ((_l = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === farmToken; })) === null || _l === void 0 ? void 0 : _l.symbol) ? ((0, jsx_runtime_1.jsx)("span", { children: "4." })) : ((0, jsx_runtime_1.jsx)("span", { children: "3." })), "Farm with ", (_m = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === farmToken; })) === null || _m === void 0 ? void 0 : _m.symbol, " on", ' ', (_o = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === farmToken; })) === null || _o === void 0 ? void 0 : _o.project, " which earns ", farmApy === null || farmApy === void 0 ? void 0 : farmApy.toFixed(2), "%."] }), ((_p = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === lendToken; })) === null || _p === void 0 ? void 0 : _p.symbol) ===
                            ((_q = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === borrowToken; })) === null || _q === void 0 ? void 0 : _q.symbol) ? (
                        // loop strategies
                        (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: ["Strategy APY = Recursively lend and borrow", ' ', (_r = configData === null || configData === void 0 ? void 0 : configData.data.find(function (c) { return c.config_id === lendToken; })) === null || _r === void 0 ? void 0 : _r.symbol, " up to n-times (Strategy APY is calculated assuming 10 loops)"] })) : (
                        // non loop strategies
                        (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: ["Strategy APY = ", lendApy === null || lendApy === void 0 ? void 0 : lendApy.toFixed(2), "%", ' ', borrowApy > 0 ? "+ ".concat(borrowApy === null || borrowApy === void 0 ? void 0 : borrowApy.toFixed(2)) : borrowApy === null || borrowApy === void 0 ? void 0 : borrowApy.toFixed(2), "% * ", ltv === null || ltv === void 0 ? void 0 : ltv.toFixed(2), " +", ' ', farmApy === null || farmApy === void 0 ? void 0 : farmApy.toFixed(2), "% * ", ltv === null || ltv === void 0 ? void 0 : ltv.toFixed(2), " = ", finalAPY === null || finalAPY === void 0 ? void 0 : finalAPY.toFixed(2), "%"] }))] }) }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsWrapper, { children: fetchingLendData ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsPlaceholder, { children: "Loading..." })) : (((_s = lendHistory === null || lendHistory === void 0 ? void 0 : lendHistory.data) === null || _s === void 0 ? void 0 : _s.length) && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(barChartDataSupply === null || barChartDataSupply === void 0 ? void 0 : barChartDataSupply.length) ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(StackedBarChart, { title: "Supply APY", chartData: barChartDataSupply, stacks: barChartStacks, stackColors: stackedBarChartColors, valueSymbol: '%' }) })) : null, (barChartDataBorrow === null || barChartDataBorrow === void 0 ? void 0 : barChartDataBorrow.length) ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(StackedBarChart, { title: "Borrow APY", chartData: barChartDataBorrow, stacks: barChartStacks, stackColors: stackedBarChartColors, valueSymbol: '%' }) })) : null, (barChartDataFarm === null || barChartDataFarm === void 0 ? void 0 : barChartDataFarm.length) ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(StackedBarChart, { title: "Farm APY", chartData: barChartDataFarm, stacks: barChartStacks, stackColors: stackedBarChartColors, valueSymbol: '%' }) })) : null] }))) })] }));
};
var backgroundColor = '#4f8fea';
var stackedBarChartColors = {
    Base: backgroundColor,
    Reward: '#E59421'
};
var barChartStacks = {
    Base: 'a',
    Reward: 'a'
};
var TableWrapper = (0, styled_components_1.default)(ProtocolAndPool_1.DetailsTable)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttr[data-divider] {\n\t\tposition: relative;\n\t\tth::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 5px;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\theight: 10px;\n\t\t\tborder-top: 1px solid ", ";\n\t\t}\n\t}\n"], ["\n\ttr[data-divider] {\n\t\tposition: relative;\n\t\tth::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 5px;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\theight: 10px;\n\t\t\tborder-top: 1px solid ", ";\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.divider;
});
function YieldPoolPage(props) {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "Yield Chart - DefiLlama", defaultSEO: true }, { children: (0, jsx_runtime_1.jsx)(PageView, __assign({}, props)) })));
}
exports.default = YieldPoolPage;
var templateObject_1;
