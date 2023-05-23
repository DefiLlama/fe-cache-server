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
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var polished_1 = require("polished");
var layout_1 = __importDefault(require("../../layout"));
var Chain_1 = require("../../layout/Chain");
var Large_1 = require("../../layout/Stats/Large");
var Search_1 = require("../../components/Search");
var utils_1 = require("../../utils");
var Filters_1 = require("../../components/Filters");
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
function UsersByChain(_a) {
    var chart = _a.chart, backgroundColor = _a.backgroundColor, name = _a.name, chains = _a.chains, chain = _a.chain;
    var allTxsChart = React.useMemo(function () {
        var allTxsByDate = {};
        chart.forEach(function (value) {
            var day = new Date(value.day).getTime() / 1000;
            // intialize object with date and column type props
            if (!allTxsByDate[day]) {
                allTxsByDate[day] = {
                    'New Users': 0,
                    'Unique Users': 0,
                    'Daily Transactions': 0
                };
            }
            // sum all values of same category on same date
            allTxsByDate[day]['New Users'] += value.new_users;
            allTxsByDate[day]['Unique Users'] += value.unique_users;
            allTxsByDate[day]['Daily Transactions'] += value.total_txs;
        });
        return Object.keys(allTxsByDate).map(function (date) { return (__assign({ date: date }, allTxsByDate[date])); });
    }, [chart]);
    var recentMetrics = allTxsChart[allTxsChart.length - 1];
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "".concat(name ? name + ': ' : '', "User Metrics - DefiLlama"), defaultSEO: true, backgroundColor: backgroundColor && (0, polished_1.transparentize)(0.6, backgroundColor), style: { gap: '36px' } }, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Home', name: 'Users', hideOptions: true } }), (0, jsx_runtime_1.jsxs)(Chain_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)(Chain_1.LinksWrapper, { children: (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWithDropdown, { links: chains, activeLink: chain }) }), (0, jsx_runtime_1.jsxs)(Large_1.StatsWrapper, { children: [(0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "24h Unique Users" }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(recentMetrics === null || recentMetrics === void 0 ? void 0 : recentMetrics['Unique Users']) })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "24h New Users" }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(recentMetrics === null || recentMetrics === void 0 ? void 0 : recentMetrics['New Users']) })] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "24h Transactions" }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(recentMetrics === null || recentMetrics === void 0 ? void 0 : recentMetrics['Daily Transactions']) })] })] }), (0, jsx_runtime_1.jsx)(ChartContainer, { children: (0, jsx_runtime_1.jsx)(BarChart, { chartData: allTxsChart, stacks: stacks, seriesConfig: seriesConfig, title: "", chartOptions: chartOptions }) }), (0, jsx_runtime_1.jsx)(Chain_1.TableHeader, { children: "User Rankings" }), (0, jsx_runtime_1.jsx)(Chain_1.Fallback, { children: "No protocols being tracked on this chain" })] })] })));
}
exports.default = UsersByChain;
var stacks = { 'Unique Users': 'stackA', 'New Users': 'stackB' };
var seriesConfig = {
    stackA: {
        color: '#2172E5'
    },
    stackB: {
        type: 'line',
        symbol: 'none',
        color: '#E59421'
    }
};
var chartOptions = {
    legend: {
        right: null // set legend to center, default is right on larger screens
    }
};
var ChartContainer = (0, styled_components_1.default)(Chain_1.ChartWrapper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin-top: -32px;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmargin-top: 0;\n\t}\n"], ["\n\tmargin-top: -32px;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmargin-top: 0;\n\t}\n"])));
var templateObject_1;
