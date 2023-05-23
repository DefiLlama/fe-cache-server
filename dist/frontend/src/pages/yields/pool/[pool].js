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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var dynamic_1 = __importDefault(require("next/dynamic"));
var link_1 = __importDefault(require("next/link"));
var router_1 = require("next/router");
var react_feather_1 = require("react-feather");
var layout_1 = __importDefault(require("../../../layout"));
var AuditInfo_1 = __importDefault(require("../../../components/AuditInfo"));
var utils_1 = require("../../../utils");
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var Pool_1 = require("../../../layout/Pool");
var Medium_1 = require("../../../layout/Stats/Medium");
var Large_1 = require("../../../layout/Stats/Large");
var client_1 = require("../../../api/categories/yield/client");
var StackedBarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/BarChart')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }
});
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/AreaChart')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }
});
var Chart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/AreaChart2')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }
});
var PageView = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var query = (0, router_1.useRouter)().query;
    var _q = (0, client_1.useYieldPoolData)(query.pool), pool = _q.data, fetchingPoolData = _q.loading;
    var _r = (0, client_1.useYieldChartData)(query.pool), chart = _r.data, fetchingChartData = _r.loading;
    var poolData = (pool === null || pool === void 0 ? void 0 : pool.data) ? pool.data[0] : {};
    var _s = (0, client_1.useYieldConfigData)((_a = poolData.project) !== null && _a !== void 0 ? _a : ''), config = _s.data, fetchingConfigData = _s.loading;
    // prepare csv data
    var downloadCsv = function () {
        var _a;
        var rows = [['APY', 'APY_BASE', 'APY_REWARD', 'TVL', 'DATE']];
        (_a = chart.data) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
            rows.push([item.apy, item.apyBase, item.apyReward, item.tvlUsd, item.timestamp]);
        });
        (0, utils_1.download)("".concat(query.pool, ".csv"), rows.map(function (r) { return r.join(','); }).join('\n'));
    };
    var apy = (_c = (_b = poolData.apy) === null || _b === void 0 ? void 0 : _b.toFixed(2)) !== null && _c !== void 0 ? _c : 0;
    var apyDelta20pct = (apy * 0.8).toFixed(2);
    var tvlUsd = (0, utils_1.toK)((_d = poolData.tvlUsd) !== null && _d !== void 0 ? _d : 0);
    var confidence = (_f = (_e = poolData.predictions) === null || _e === void 0 ? void 0 : _e.binnedConfidence) !== null && _f !== void 0 ? _f : null;
    if (confidence) {
        confidence = confidence === 1 ? 'Low' : confidence === 2 ? 'Medium' : 'High';
        // on the frontend we round numerical values; eg values < 0.005 are displayed as 0.00;
        // in the context of apy and predictions this sometimes can lead to the following:
        // an apy is displayed as 0.00% and the outlook on /pool would read:
        // "The algorithm predicts the current APY of 0.00% to not fall below 0.00% within the next 4 weeks. Confidence: High`"
        // which is useless.
        // solution: suppress the outlook and confidence values if apy < 0.005
        confidence = apy >= 0.005 ? confidence : null;
    }
    var predictedDirection = ((_g = poolData.predictions) === null || _g === void 0 ? void 0 : _g.predictedClass) === 'Down' ? '' : 'not';
    var projectName = (_h = config === null || config === void 0 ? void 0 : config.name) !== null && _h !== void 0 ? _h : '';
    var audits = (_j = config === null || config === void 0 ? void 0 : config.audits) !== null && _j !== void 0 ? _j : '';
    var audit_links = (_k = config === null || config === void 0 ? void 0 : config.audit_links) !== null && _k !== void 0 ? _k : [];
    var url = (_l = config === null || config === void 0 ? void 0 : config.url) !== null && _l !== void 0 ? _l : '';
    var twitter = (_m = config === null || config === void 0 ? void 0 : config.twitter) !== null && _m !== void 0 ? _m : '';
    var category = (_o = config === null || config === void 0 ? void 0 : config.category) !== null && _o !== void 0 ? _o : '';
    var isLoading = fetchingPoolData || fetchingChartData || fetchingConfigData;
    var _t = (0, react_1.useMemo)(function () {
        var _a, _b, _c;
        if (!chart)
            return {};
        // - calc 7day APY moving average
        var windowSize = 7;
        var apyValues = (_a = chart === null || chart === void 0 ? void 0 : chart.data) === null || _a === void 0 ? void 0 : _a.map(function (m) { return m.apy; });
        var avg7Days = [];
        for (var i = 0; i < (apyValues === null || apyValues === void 0 ? void 0 : apyValues.length); i++) {
            if (i + 1 < windowSize) {
                avg7Days[i] = null;
            }
            else {
                avg7Days[i] = apyValues.slice(i + 1 - windowSize, i + 1).reduce(function (a, b) { return a + b; }, 0) / windowSize;
            }
        }
        // - format for chart components
        var data = (_b = chart === null || chart === void 0 ? void 0 : chart.data) === null || _b === void 0 ? void 0 : _b.map(function (el, i) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return [
                // round time to day
                Math.floor(new Date(el.timestamp.split('T')[0]).getTime() / 1000),
                el.tvlUsd,
                (_b = (_a = el.apy) === null || _a === void 0 ? void 0 : _a.toFixed(2)) !== null && _b !== void 0 ? _b : null,
                (_d = (_c = el.apyBase) === null || _c === void 0 ? void 0 : _c.toFixed(2)) !== null && _d !== void 0 ? _d : null,
                (_f = (_e = el.apyReward) === null || _e === void 0 ? void 0 : _e.toFixed(2)) !== null && _f !== void 0 ? _f : null,
                (_h = (_g = avg7Days[i]) === null || _g === void 0 ? void 0 : _g.toFixed(2)) !== null && _h !== void 0 ? _h : null
            ];
        });
        var dataBar = (_c = data === null || data === void 0 ? void 0 : data.filter(function (t) { return t[3] !== null || t[4] !== null; })) !== null && _c !== void 0 ? _c : [];
        var barChartData = dataBar.length
            ? dataBar.map(function (item) { return ({ date: item[0], Base: item[3], Reward: item[4] }); })
            : [];
        var areaChartData = (data === null || data === void 0 ? void 0 : data.length) ? data.filter(function (t) { return t[5] !== null; }).map(function (t) { return [t[0], t[5]]; }) : [];
        return {
            finalChartData: data.map(function (item) { return ({ date: item[0], TVL: item[1], APY: item[2] }); }),
            barChartData: barChartData,
            areaChartData: areaChartData
        };
    }, [chart]), _u = _t.finalChartData, finalChartData = _u === void 0 ? [] : _u, _v = _t.barChartData, barChartData = _v === void 0 ? [] : _v, _w = _t.areaChartData, areaChartData = _w === void 0 ? [] : _w;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(0, jsx_runtime_1.jsxs)(Pool_1.PoolDetails, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, __assign({ style: { flexWrap: 'wrap' } }, { children: [poolData.poolMeta !== undefined && poolData.poolMeta !== null && poolData.poolMeta.length > 1
                                        ? "".concat(poolData.symbol, " (").concat(poolData.poolMeta, ")")
                                        : (_p = poolData.symbol) !== null && _p !== void 0 ? _p : 'Loading', (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Symbol, { children: ["(", projectName, " - ", poolData.chain, ")"] })] })), (0, jsx_runtime_1.jsxs)(Medium_1.StatWrapper, { children: [(0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Total APY" }), (0, jsx_runtime_1.jsxs)("span", __assign({ style: { color: '#fd3c99' } }, { children: [apy, "%"] }))] }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DownloadButton, __assign({ as: "button", onClick: downloadCsv }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.DownloadCloud, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }))] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Total Value Locked" }), (0, jsx_runtime_1.jsxs)("span", __assign({ style: { color: '#4f8fea' } }, { children: ["$", tvlUsd] }))] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Outlook" }), isLoading ? ((0, jsx_runtime_1.jsx)("span", { style: { height: '60px' } })) : ((0, jsx_runtime_1.jsx)("span", __assign({ "data-default-style": true }, { children: confidence !== null
                                            ? "The algorithm predicts the current APY of ".concat(apy, "% to ").concat(predictedDirection, " fall below ").concat(apyDelta20pct, "% within the next 4 weeks. Confidence: ").concat(confidence)
                                            : 'No outlook available' })))] })] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ style: { padding: '20px 0' } }, { children: (0, jsx_runtime_1.jsx)(Chart, { chartData: finalChartData, stackColors: mainChartStackColors, stacks: mainChartStacks, title: "" }) }))] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsWrapper, { children: fetchingChartData ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsPlaceholder, { children: "Loading..." })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(barChartData === null || barChartData === void 0 ? void 0 : barChartData.length) ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(StackedBarChart, { title: "Base and Reward APY", chartData: barChartData, stacks: barChartStacks, stackColors: stackedBarChartColors, valueSymbol: '%' }) })) : null, areaChartData.length ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(AreaChart, { title: "7 day moving average of total APY", chartData: areaChartData, color: backgroundColor, valueSymbol: '%' }) })) : null] })) }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.InfoWrapper, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Protocol Information" }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Category" }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/protocols/".concat(category.toLowerCase()) }, { children: category }))] }), (0, jsx_runtime_1.jsx)(AuditInfo_1.default, { audits: audits, auditLinks: audit_links, color: backgroundColor, isLoading: isLoading }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.LinksWrapper, { children: [(url || isLoading) && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: url, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor, disabled: isLoading }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Website" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), twitter && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://twitter.com/".concat(twitter), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Twitter" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })))] })] }) })] }));
};
var backgroundColor = '#4f8fea';
var mainChartStacks = ['APY', 'TVL'];
var mainChartStackColors = {
    APY: '#fd3c99',
    TVL: '#4f8fea'
};
var stackedBarChartColors = {
    Base: backgroundColor,
    Reward: '#E59421'
};
var barChartStacks = {
    Base: 'a',
    Reward: 'a'
};
function YieldPoolPage(props) {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "Yield Chart - DefiLlama", defaultSEO: true }, { children: (0, jsx_runtime_1.jsx)(PageView, __assign({}, props)) })));
}
exports.default = YieldPoolPage;
