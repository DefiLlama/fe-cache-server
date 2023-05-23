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
var client_1 = require("../../../api/categories/yield/client");
var utils_2 = require("../../../utils");
var styled_components_1 = __importDefault(require("styled-components"));
var StackedBarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/BarChart')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }
});
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/AreaChart')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }
});
var PageView = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var query = (0, router_1.useRouter)().query;
    var _u = (0, client_1.useYieldPoolData)(query.pool), pool = _u.data, fetchingPoolData = _u.loading;
    var _v = (0, client_1.useYieldChartLendBorrow)(query.pool), chart = _v.data, fetchingChartData = _v.loading;
    var poolData = (pool === null || pool === void 0 ? void 0 : pool.data) ? pool.data[0] : {};
    var _w = (0, client_1.useYieldConfigData)((_a = poolData.project) !== null && _a !== void 0 ? _a : ''), config = _w.data, fetchingConfigData = _w.loading;
    // prepare csv data
    var downloadCsv = function () {
        var _a;
        var rows = [
            [
                'DATE',
                'SUPPLY_BASE',
                'SUPPLY_REWARD',
                'BORROW_NET',
                'BORROW_BASE',
                'BORROW_REWARD',
                'SUPPLIED',
                'BORROWED',
                'AVAILABLE'
            ]
        ];
        (_a = chart.data) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
            rows.push([
                item.timestamp,
                item.apyBase,
                item.apyReward,
                -item.apyBaseBorrow + item.apyRewardBorrow,
                -item.apyBaseBorrow,
                item.apyRewardBorrow,
                item.totalSupplyUsd,
                item.totalBorrowUsd,
                category === 'CDP' && item.debtCeilingUsd
                    ? item.debtCeilingUsd - item.totalBorrowUsd
                    : category === 'CDP'
                        ? null
                        : item.totalSupplyUsd === null && item.totalBorrowUsd === null
                            ? null
                            : item.totalSupplyUsd - item.totalBorrowUsd
            ]);
        });
        (0, utils_1.download)("".concat(query.pool, ".csv"), rows.map(function (r) { return r.join(','); }).join('\n'));
    };
    var projectName = (_b = config === null || config === void 0 ? void 0 : config.name) !== null && _b !== void 0 ? _b : '';
    var audits = (_c = config === null || config === void 0 ? void 0 : config.audits) !== null && _c !== void 0 ? _c : '';
    var audit_links = (_d = config === null || config === void 0 ? void 0 : config.audit_links) !== null && _d !== void 0 ? _d : [];
    var url = (_e = config === null || config === void 0 ? void 0 : config.url) !== null && _e !== void 0 ? _e : '';
    var twitter = (_f = config === null || config === void 0 ? void 0 : config.twitter) !== null && _f !== void 0 ? _f : '';
    var category = (_g = config === null || config === void 0 ? void 0 : config.category) !== null && _g !== void 0 ? _g : '';
    var latestValues = (_j = (_h = chart === null || chart === void 0 ? void 0 : chart.data) === null || _h === void 0 ? void 0 : _h.slice(-1)[0]) !== null && _j !== void 0 ? _j : [];
    var apyBase = (_k = latestValues === null || latestValues === void 0 ? void 0 : latestValues.apyBase) !== null && _k !== void 0 ? _k : 0;
    var apyReward = (_l = latestValues === null || latestValues === void 0 ? void 0 : latestValues.apyReward) !== null && _l !== void 0 ? _l : 0;
    var apyBaseBorrow = (_m = -(latestValues === null || latestValues === void 0 ? void 0 : latestValues.apyBaseBorrow)) !== null && _m !== void 0 ? _m : 0;
    var apyRewardBorrow = (_o = latestValues === null || latestValues === void 0 ? void 0 : latestValues.apyRewardBorrow) !== null && _o !== void 0 ? _o : 0;
    var totalSupplyUsd = (_p = latestValues === null || latestValues === void 0 ? void 0 : latestValues.totalSupplyUsd) !== null && _p !== void 0 ? _p : 0;
    var totalBorrowUsd = (_q = latestValues === null || latestValues === void 0 ? void 0 : latestValues.totalBorrowUsd) !== null && _q !== void 0 ? _q : 0;
    var debtCeilingUsd = (_r = latestValues === null || latestValues === void 0 ? void 0 : latestValues.debtCeilingUsd) !== null && _r !== void 0 ? _r : 0;
    var totalAvailableUsd = category === 'CDP' && debtCeilingUsd
        ? debtCeilingUsd - totalBorrowUsd
        : category === 'CDP'
            ? null
            : totalSupplyUsd - totalBorrowUsd;
    var newBorrowApy = Number(apyBaseBorrow) + Number(apyRewardBorrow);
    var isLoading = fetchingPoolData || fetchingChartData || fetchingConfigData;
    var colors = {};
    ['Supplied', 'Borrowed', 'Available'].forEach(function (l, index) {
        colors[l] = (0, utils_2.getColorFromNumber)(index, 6);
    });
    var _x = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e;
        if (!chart)
            return {};
        // - format for chart components
        var data = (_a = chart === null || chart === void 0 ? void 0 : chart.data) === null || _a === void 0 ? void 0 : _a.map(function (el) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return [
                // round time to day
                Math.floor(new Date(el.timestamp.split('T')[0]).getTime() / 1000),
                el.totalSupplyUsd,
                el.totalBorrowUsd,
                category === 'CDP' && el.debtCeilingUsd
                    ? el.debtCeilingUsd - el.totalBorrowUsd
                    : category === 'CDP'
                        ? null
                        : el.totalSupplyUsd === null && el.totalBorrowUsd === null
                            ? null
                            : el.totalSupplyUsd - el.totalBorrowUsd,
                (_b = (_a = el.apyBase) === null || _a === void 0 ? void 0 : _a.toFixed(2)) !== null && _b !== void 0 ? _b : null,
                (_d = (_c = el.apyReward) === null || _c === void 0 ? void 0 : _c.toFixed(2)) !== null && _d !== void 0 ? _d : null,
                (_f = -((_e = el.apyBaseBorrow) === null || _e === void 0 ? void 0 : _e.toFixed(2))) !== null && _f !== void 0 ? _f : null,
                (_h = (_g = el.apyRewardBorrow) === null || _g === void 0 ? void 0 : _g.toFixed(2)) !== null && _h !== void 0 ? _h : null,
                el.apyBaseBorrow === null && el.apyRewardBorrow === null
                    ? null
                    : (_j = (-el.apyBaseBorrow + el.apyRewardBorrow).toFixed(2)) !== null && _j !== void 0 ? _j : null
            ];
        });
        var dataBarSupply = (_b = data === null || data === void 0 ? void 0 : data.filter(function (t) { return t[4] !== null || t[5] !== null; })) !== null && _b !== void 0 ? _b : [];
        var barChartDataSupply = dataBarSupply.length
            ? dataBarSupply.map(function (item) { return ({ date: item[0], Base: item[4], Reward: item[5] }); })
            : [];
        var dataBarBorrow = (_c = data === null || data === void 0 ? void 0 : data.filter(function (t) { return Number.isFinite(t[6]) || t[7] !== null; })) !== null && _c !== void 0 ? _c : [];
        var barChartDataBorrow = dataBarBorrow.length
            ? dataBarBorrow.map(function (item) { return ({ date: item[0], Base: item[6], Reward: item[7] }); })
            : [];
        var dataArea = (_d = data === null || data === void 0 ? void 0 : data.filter(function (t) { return t[1] !== null && t[2] !== null && t[3] !== null; })) !== null && _d !== void 0 ? _d : [];
        var areaChartData = dataArea.length
            ? dataArea.map(function (t) { return ({ date: t[0], Supplied: t[1], Borrowed: t[2], Available: t[3] }); })
            : [];
        var dataNetBorrowArea = (_e = data === null || data === void 0 ? void 0 : data.filter(function (t) { return t[8] !== null; })) !== null && _e !== void 0 ? _e : [];
        var netBorrowChartData = dataNetBorrowArea.length ? dataNetBorrowArea.map(function (t) { return [t[0], t[8]]; }) : [];
        return { barChartDataSupply: barChartDataSupply, barChartDataBorrow: barChartDataBorrow, areaChartData: areaChartData, netBorrowChartData: netBorrowChartData };
    }, [chart, category]), _y = _x.barChartDataSupply, barChartDataSupply = _y === void 0 ? [] : _y, _z = _x.barChartDataBorrow, barChartDataBorrow = _z === void 0 ? [] : _z, _0 = _x.areaChartData, areaChartData = _0 === void 0 ? [] : _0, _1 = _x.netBorrowChartData, netBorrowChartData = _1 === void 0 ? [] : _1;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(0, jsx_runtime_1.jsxs)(Pool_1.PoolDetails, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, __assign({ style: { flexWrap: 'wrap' } }, { children: [poolData.poolMeta !== undefined && poolData.poolMeta !== null && poolData.poolMeta.length > 1
                                        ? "".concat(poolData.symbol, " (").concat(poolData.poolMeta, ")")
                                        : (_s = poolData.symbol) !== null && _s !== void 0 ? _s : 'Loading', (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Symbol, { children: ["(", projectName, " - ", poolData.chain, ")"] })] })), (0, jsx_runtime_1.jsx)(TableWrapper, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Supply Base APY:" }), (0, jsx_runtime_1.jsxs)("td", { children: [apyBase.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Supply Reward APY:" }), (0, jsx_runtime_1.jsxs)("td", { children: [apyReward.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsx)("tr", __assign({ "data-divider": true }, { children: (0, jsx_runtime_1.jsx)("th", {}) })), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Net Borrow APY:" }), (0, jsx_runtime_1.jsxs)("td", { children: [newBorrowApy.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Borrow Base APY:" }), (0, jsx_runtime_1.jsxs)("td", { children: [apyBaseBorrow.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Borrow Reward APY:" }), (0, jsx_runtime_1.jsxs)("td", { children: [apyRewardBorrow.toFixed(2), "%"] })] }), (0, jsx_runtime_1.jsx)("tr", __assign({ "data-divider": true }, { children: (0, jsx_runtime_1.jsx)("th", {}) })), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Supplied:" }), (0, jsx_runtime_1.jsxs)("td", { children: ["$", (0, utils_1.toK)(totalSupplyUsd !== null && totalSupplyUsd !== void 0 ? totalSupplyUsd : 0)] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Borrowed:" }), (0, jsx_runtime_1.jsxs)("td", { children: ["$", (0, utils_1.toK)(totalBorrowUsd !== null && totalBorrowUsd !== void 0 ? totalBorrowUsd : 0)] })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Available:" }), (0, jsx_runtime_1.jsxs)("td", { children: ["$", (0, utils_1.toK)(totalAvailableUsd !== null && totalAvailableUsd !== void 0 ? totalAvailableUsd : 0)] })] })] }) })] }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartWrapper, __assign({ style: { position: 'relative' } }, { children: [(0, jsx_runtime_1.jsx)(AreaChart, { title: "Net Borrow APY", chartData: netBorrowChartData, color: backgroundColor, valueSymbol: '%' }), (0, jsx_runtime_1.jsxs)(DownloadToCSV, __assign({ as: "button", onClick: downloadCsv }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.DownloadCloud, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }))] })), (0, jsx_runtime_1.jsxs)(DownloadToCSV, __assign({ as: "button", onClick: downloadCsv }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.DownloadCloud, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }))] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsWrapper, { children: fetchingChartData ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsPlaceholder, { children: "Loading..." })) : (((_t = chart === null || chart === void 0 ? void 0 : chart.data) === null || _t === void 0 ? void 0 : _t.length) && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(barChartDataSupply === null || barChartDataSupply === void 0 ? void 0 : barChartDataSupply.length) ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(StackedBarChart, { title: "Supply APY", chartData: barChartDataSupply, stacks: barChartStacks, stackColors: stackedBarChartColors, valueSymbol: '%' }) })) : null, (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(StackedBarChart, { title: "Borrow APY", chartData: barChartDataBorrow, stacks: barChartStacks, stackColors: stackedBarChartColors, valueSymbol: '%' }) }), (areaChartData === null || areaChartData === void 0 ? void 0 : areaChartData.length) ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: areaChartData, title: "Pool Liquidity", customLegendName: "Filter", customLegendOptions: ['Supplied', 'Borrowed', 'Available'], valueSymbol: "$", stackColors: colors }) })) : null] }))) }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.InfoWrapper, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Protocol Information" }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Category" }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/protocols/".concat(category.toLowerCase()) }, { children: category }))] }), (0, jsx_runtime_1.jsx)(AuditInfo_1.default, { audits: audits, auditLinks: audit_links, color: backgroundColor, isLoading: isLoading }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.LinksWrapper, { children: [(url || isLoading) && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: url, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor, disabled: isLoading }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Website" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), twitter && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://twitter.com/".concat(twitter), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Twitter" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })))] })] }) })] }));
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
var DownloadToCSV = (0, styled_components_1.default)(ProtocolAndPool_1.DownloadButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 20px;\n\tright: 24px;\n"], ["\n\tposition: absolute;\n\ttop: 20px;\n\tright: 24px;\n"])));
var TableWrapper = (0, styled_components_1.default)(ProtocolAndPool_1.DetailsTable)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\ttr[data-divider] {\n\t\tposition: relative;\n\t\tth::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 5px;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\theight: 10px;\n\t\t\tborder-top: 1px solid ", ";\n\t\t}\n\t}\n"], ["\n\ttr[data-divider] {\n\t\tposition: relative;\n\t\tth::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 5px;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\theight: 10px;\n\t\t\tborder-top: 1px solid ", ";\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.divider;
});
function YieldPoolPage(props) {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "Yield Chart - DefiLlama", defaultSEO: true }, { children: (0, jsx_runtime_1.jsx)(PageView, __assign({}, props)) })));
}
exports.default = YieldPoolPage;
var templateObject_1, templateObject_2;
