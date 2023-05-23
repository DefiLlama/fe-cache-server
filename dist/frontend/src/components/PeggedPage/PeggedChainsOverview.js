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
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var components_1 = require("../../components");
var MultiSelect_1 = require("../../components/MultiSelect");
var Search_1 = require("../../components/Search");
var _1 = require("../../components/PeggedPage/.");
var Table_1 = require("../../components/Table");
var stablecoins_1 = require("../../hooks/data/stablecoins");
var stablecoins_2 = require("../../utils/stablecoins");
var utils_1 = require("../../utils");
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var AssetFilters = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin: 12px 0 16px;\n\n\t& > h2 {\n\t\tmargin: 0 2px 8px;\n\t\tfont-weight: 600;\n\t\tfont-size: 0.825rem;\n\t\tcolor: ", ";\n\t}\n"], ["\n\tmargin: 12px 0 16px;\n\n\t& > h2 {\n\t\tmargin: 0 2px 8px;\n\t\tfont-weight: 600;\n\t\tfont-size: 0.825rem;\n\t\tcolor: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
function PeggedChainsOverview(_a) {
    var chainCirculatings = _a.chainCirculatings, chartData = _a.chartData, peggedChartDataByChain = _a.peggedChartDataByChain, chainList = _a.chainList, chainsGroupbyParent = _a.chainsGroupbyParent, chainTVLData = _a.chainTVLData;
    var _b = __read(React.useState('Pie'), 2), chartType = _b[0], setChartType = _b[1];
    var chartTypeList = ['Total Market Cap', 'Chain Market Caps', 'Pie', 'Dominance'];
    var _c = (0, stablecoins_2.useBuildPeggedChartData)(peggedChartDataByChain, chainList, __spreadArray([], __read(Array(chainList.length).keys()), false), 'mcap', chainTVLData), peggedAreaChartData = _c.peggedAreaChartData, peggedAreaTotalData = _c.peggedAreaTotalData, stackedDataset = _c.stackedDataset;
    var filteredPeggedAssets = chainCirculatings;
    var chainTotals = (0, stablecoins_1.useCalcCirculating)(filteredPeggedAssets);
    var _d = (0, stablecoins_1.useCalcGroupExtraPeggedByDay)(stackedDataset), stackedData = _d.data, dataWithExtraPeggedAndDominanceByDay = _d.dataWithExtraPeggedAndDominanceByDay;
    var downloadCsv = function () {
        var rows = [__spreadArray(__spreadArray(['Timestamp', 'Date'], __read(chainList), false), ['Total'], false)];
        stackedData
            .sort(function (a, b) { return a.date - b.date; })
            .forEach(function (day) {
            rows.push(__spreadArray(__spreadArray([
                day.date,
                (0, utils_1.toNiceCsvDate)(day.date)
            ], __read(chainList.map(function (chain) { var _a; return (_a = day[chain]) !== null && _a !== void 0 ? _a : ''; })), false), [
                chainList.reduce(function (acc, curr) {
                    var _a;
                    return (acc += (_a = day[curr]) !== null && _a !== void 0 ? _a : 0);
                }, 0)
            ], false));
        });
        (0, utils_1.download)('stablecoinsChainTotals.csv', rows.map(function (r) { return r.join(','); }).join('\n'));
    };
    var title = "Stablecoins Market Cap";
    var _e = React.useMemo(function () {
        var _a;
        var totalMcapCurrent = (0, utils_1.getPrevPeggedTotalFromChart)(chartData, 0, 'totalCirculatingUSD');
        var totalMcapPrevDay = (0, utils_1.getPrevPeggedTotalFromChart)(chartData, 7, 'totalCirculatingUSD');
        var percentChange = (_a = (0, utils_1.getPercentChange)(totalMcapCurrent, totalMcapPrevDay)) === null || _a === void 0 ? void 0 : _a.toFixed(2);
        return { percentChange: percentChange, totalMcapCurrent: totalMcapCurrent };
    }, [chartData]), percentChange = _e.percentChange, totalMcapCurrent = _e.totalMcapCurrent;
    var mcapToDisplay = (0, utils_1.formattedNum)(totalMcapCurrent, true);
    var topChain = { name: 'Ethereum', mcap: 0 };
    if (chainTotals.length > 0) {
        var topChainData = chainTotals[0];
        topChain.name = topChainData.name;
        topChain.mcap = topChainData.mcap;
    }
    var dominance = (0, utils_1.getPeggedDominance)(topChain, totalMcapCurrent);
    var totalMcapLabel = ['Mcap', 'TVL'];
    var groupedChains = (0, stablecoins_1.useGroupChainsPegged)(chainTotals, chainsGroupbyParent);
    var chainsCirculatingValues = React.useMemo(function () {
        var data = groupedChains.map(function (chain) { return ({ name: chain.name, value: chain.mcap }); });
        var otherCirculating = data.slice(10).reduce(function (total, entry) {
            return (total += entry.value);
        }, 0);
        return data
            .slice(0, 10)
            .sort(function (a, b) { return b.value - a.value; })
            .concat({ name: 'Others', value: otherCirculating });
    }, [groupedChains]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.PeggedSearch, { step: { category: 'Stablecoins', name: 'Chains' } }), (0, jsx_runtime_1.jsxs)(components_1.ChartAndValuesWrapper, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanels, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Total ", title] }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { '--tile-text-color': '#4f8fea' } }, { children: mcapToDisplay })), (0, jsx_runtime_1.jsxs)(components_1.DownloadButton, __assign({ as: "button", onClick: downloadCsv }, { children: [(0, jsx_runtime_1.jsx)(components_1.DownloadIcon, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }))] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Change (7d)" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#fd3c99' } }, { children: [" ", percentChange || 0, "%"] }))] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: [topChain.name, " Dominance"] }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#46acb7' } }, { children: [" ", dominance, "%"] }))] })] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, __assign({ id: "chartWrapper", style: { gap: '16px', minHeight: '450px', justifyContent: 'space-between' } }, { children: [(0, jsx_runtime_1.jsx)(_1.ChartSelector, { options: chartTypeList, selectedChart: chartType, onClick: setChartType }), chartType === 'Total Market Cap' && ((0, jsx_runtime_1.jsx)(AreaChart, { title: "", chartData: peggedAreaTotalData, stacks: totalMcapLabel, color: 'lightcoral', hideDefaultLegend: true, valueSymbol: "$", hideGradient: true })), chartType === 'Chain Market Caps' && ((0, jsx_runtime_1.jsx)(AreaChart, { title: "", chartData: peggedAreaChartData, stacks: chainList, valueSymbol: "$", hideDefaultLegend: true, hideGradient: true })), chartType === 'Dominance' && ((0, jsx_runtime_1.jsx)(AreaChart, { title: "", valueSymbol: "%", chartData: dataWithExtraPeggedAndDominanceByDay, stacks: chainList, hideDefaultLegend: true, hideGradient: true, expandTo100Percent: true })), chartType === 'Pie' && (0, jsx_runtime_1.jsx)(PieChart, { chartData: chainsCirculatingValues })] }))] }), (0, jsx_runtime_1.jsxs)(AssetFilters, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Filters" }), (0, jsx_runtime_1.jsx)(MultiSelect_1.GroupStablecoins, { label: "Filters" })] }), (0, jsx_runtime_1.jsx)(Table_1.PeggedChainsTable, { data: groupedChains })] }));
}
exports.default = PeggedChainsOverview;
var templateObject_1;
