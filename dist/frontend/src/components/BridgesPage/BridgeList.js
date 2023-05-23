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
var LocalStorage_1 = require("../../contexts/LocalStorage");
var components_1 = require("../../components");
var Theme_1 = require("../../Theme");
var Filters_1 = require("../../components/Filters");
var Bridges_1 = require("../Search/Bridges");
var _1 = require("../../components/BridgesPage/.");
var Table_1 = require("../../components/Table");
var LargeTxsTable_1 = require("./LargeTxsTable");
var TableSwitch_1 = require("../BridgesPage/TableSwitch");
var bridges_1 = require("../../utils/bridges");
var utils_1 = require("../../utils");
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
var StackedBarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart/Stacked')); }); }, {
    ssr: false
});
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var HeaderWrapper = (0, styled_components_1.default)(Theme_1.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 12px;\n\tborder: 1px solid transparent;\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 12px;\n\tborder: 1px solid transparent;\n"])));
function BridgesOverview(_a) {
    var _b = _a.selectedChain, selectedChain = _b === void 0 ? 'All' : _b, _c = _a.chains, chains = _c === void 0 ? [] : _c, filteredBridges = _a.filteredBridges, bridgeNames = _a.bridgeNames, bridgeNameToChartDataIndex = _a.bridgeNameToChartDataIndex, chartDataByBridge = _a.chartDataByBridge, chainVolumeData = _a.chainVolumeData, bridgeStatsCurrentDay = _a.bridgeStatsCurrentDay, largeTxsData = _a.largeTxsData;
    var _d = __read(React.useState(false), 2), enableBreakdownChart = _d[0], setEnableBreakdownChart = _d[1];
    var _e = __read(React.useState(selectedChain === 'All' ? 'Volumes' : 'Net Flow'), 2), chartType = _e[0], setChartType = _e[1];
    var chartTypeList = selectedChain === 'All' ? ['Volumes'] : ['Net Flow', 'Inflows', '24h Tokens Deposited', '24h Tokens Withdrawn'];
    var _f = __read((0, LocalStorage_1.useBridgesManager)(), 1), bridgesSettings = _f[0];
    var isBridgesShowingTxs = bridgesSettings[LocalStorage_1.BRIDGES_SHOWING_TXS];
    var handleRouting = function (selectedChain) {
        if (selectedChain === 'All')
            return "/bridges";
        return "/bridges/".concat(selectedChain);
    };
    var chainOptions = __spreadArray(['All'], __read(chains), false).map(function (label) { return ({ label: label, to: handleRouting(label) }); });
    var chartData = React.useMemo(function () {
        var secondsOffset = 3600 * 12 * 1000; // added 12 hours so date will match charts that use unix timestamp
        if (enableBreakdownChart) {
            var unformattedChartData_1 = {};
            bridgeNames.map(function (name) {
                var chartDataIndex = bridgeNameToChartDataIndex[name];
                var charts = chartDataByBridge[chartDataIndex];
                charts.map(function (chart) {
                    var date = chart.date;
                    var volume = chart.volume;
                    unformattedChartData_1[date] = unformattedChartData_1[date] || {};
                    unformattedChartData_1[date][name] = volume;
                });
            });
            var chartDates_1 = Object.keys(unformattedChartData_1);
            return bridgeNames
                .map(function (name) {
                return {
                    name: name,
                    data: chartDates_1.map(function (date) {
                        var _a;
                        return [
                            new Date(parseInt(date) * 1000 + secondsOffset),
                            (_a = unformattedChartData_1[date][name]) !== null && _a !== void 0 ? _a : 0
                        ];
                    })
                };
            })
                .filter(function (chart) { return chart.data.length !== 0; });
        }
        else
            return chainVolumeData.map(function (chart) { return [new Date(chart.date * 1000 + secondsOffset), chart.volume]; });
    }, [bridgeNames, bridgeNameToChartDataIndex, chartDataByBridge, chainVolumeData, enableBreakdownChart]);
    var _g = (0, bridges_1.useBuildBridgeChartData)(bridgeStatsCurrentDay), tokenDeposits = _g.tokenDeposits, tokenWithdrawals = _g.tokenWithdrawals;
    var chainNetFlowData = React.useMemo(function () {
        return chainVolumeData.map(function (entry) {
            return {
                date: entry.date,
                'Net Flow': entry.Deposits + entry.Withdrawals
            };
        });
    }, [chainVolumeData]);
    var downloadCsv = function () {
        var filteredBridgeNames = bridgeNames.filter(function (bridgeName) {
            var chartDataIndex = bridgeNameToChartDataIndex[bridgeName];
            var charts = chartDataByBridge[chartDataIndex];
            return charts.length;
        });
        var rows = [__spreadArray(__spreadArray(['Timestamp', 'Date'], __read(filteredBridgeNames), false), ['Total'], false)];
        var stackedDatasetObject = {};
        filteredBridgeNames.map(function (bridgeName) {
            var chartDataIndex = bridgeNameToChartDataIndex[bridgeName];
            var charts = chartDataByBridge[chartDataIndex];
            charts.map(function (chart) {
                var date = chart.date;
                stackedDatasetObject[date] = stackedDatasetObject[date] || {};
                stackedDatasetObject[date][bridgeName] = chart.volume;
            });
        });
        var stackedData = Object.entries(stackedDatasetObject).map(function (data) {
            return __assign({ date: parseInt(data[0]) }, data[1]);
        });
        stackedData
            .sort(function (a, b) { return a.date - b.date; })
            .forEach(function (day) {
            rows.push(__spreadArray(__spreadArray([
                day.date,
                (0, utils_1.toNiceCsvDate)(day.date)
            ], __read(filteredBridgeNames.map(function (chain) { var _a; return (_a = day[chain]) !== null && _a !== void 0 ? _a : ''; })), false), [
                filteredBridgeNames.reduce(function (acc, curr) {
                    var _a;
                    return (acc += (_a = day[curr]) !== null && _a !== void 0 ? _a : 0);
                }, 0)
            ], false));
        });
        (0, utils_1.download)('bridge-volumes.csv', rows.map(function (r) { return r.join(','); }).join('\n'));
    };
    var _h = React.useMemo(function () {
        var dayTotalVolume, weekTotalVolume, monthTotalVolume;
        dayTotalVolume = weekTotalVolume = monthTotalVolume = 0;
        // start from i = 1 to exclude current day
        for (var i = 1; i < 31; i++) {
            var dailyVolume = (0, utils_1.getPrevVolumeFromChart)(chainVolumeData, i, false, selectedChain !== 'All');
            if (i < 2) {
                dayTotalVolume += dailyVolume;
            }
            if (i < 8) {
                weekTotalVolume += dailyVolume;
            }
            monthTotalVolume += dailyVolume;
        }
        return { dayTotalVolume: dayTotalVolume, weekTotalVolume: weekTotalVolume, monthTotalVolume: monthTotalVolume };
    }, [chainVolumeData, selectedChain]), dayTotalVolume = _h.dayTotalVolume, weekTotalVolume = _h.weekTotalVolume, monthTotalVolume = _h.monthTotalVolume;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Bridges_1.BridgesSearchWithBreakdown, { step: {
                    category: 'Bridges',
                    name: selectedChain
                }, onToggleClick: function (enabled) { return setEnableBreakdownChart(enabled); } }), (0, jsx_runtime_1.jsx)(HeaderWrapper, { children: (0, jsx_runtime_1.jsxs)("span", { children: ["Bridge Volume in ", selectedChain === 'All' ? 'all bridges' : selectedChain] }) }), (0, jsx_runtime_1.jsxs)(components_1.ChartAndValuesWrapper, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanels, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Total volume (24h)" }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { '--tile-text-color': '#4f8fea' } }, { children: (0, utils_1.formattedNum)(dayTotalVolume, true) })), (0, jsx_runtime_1.jsxs)(components_1.DownloadButton, __assign({ as: "button", onClick: downloadCsv }, { children: [(0, jsx_runtime_1.jsx)(components_1.DownloadIcon, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }))] }), (0, jsx_runtime_1.jsxs)(components_1.PanelHiddenMobile, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Total volume (7d)" }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { '--tile-text-color': '#fd3c99' } }, { children: (0, utils_1.formattedNum)(weekTotalVolume, true) }))] }), (0, jsx_runtime_1.jsxs)(components_1.PanelHiddenMobile, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Total volume (1mo)" }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { '--tile-text-color': '#46acb7' } }, { children: (0, utils_1.formattedNum)(monthTotalVolume, true) }))] })] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, __assign({ id: "chartWrapper", style: { gap: '16px', minHeight: '450px', justifyContent: 'space-between' } }, { children: [(0, jsx_runtime_1.jsx)(_1.ChartSelector, { options: chartTypeList, selectedChart: chartType, onClick: setChartType }), chartType === 'Net Flow' && chainNetFlowData && chainNetFlowData.length > 0 && ((0, jsx_runtime_1.jsx)(BarChart, { chartData: chainNetFlowData, title: "", hideDefaultLegend: true, customLegendName: "Volume", customLegendOptions: ['Net Flow'] })), chartType === 'Inflows' && chainVolumeData && chainVolumeData.length > 0 && ((0, jsx_runtime_1.jsx)(BarChart, { chartData: chainVolumeData, title: "", hideDefaultLegend: true, customLegendName: "Volume", customLegendOptions: ['Deposits', 'Withdrawals'], chartOptions: volumeChartOptions }, ['Deposits', 'Withdrawals'])), chartType === 'Volumes' && chartData && chartData.length > 0 && ((0, jsx_runtime_1.jsx)(StackedBarChart, { chartData: enableBreakdownChart
                                    ? chartData
                                    : [
                                        {
                                            name: selectedChain,
                                            data: chartData
                                        }
                                    ] })), chartType === '24h Tokens Deposited' && (0, jsx_runtime_1.jsx)(PieChart, { chartData: tokenWithdrawals }), chartType === '24h Tokens Withdrawn' && (0, jsx_runtime_1.jsx)(PieChart, { chartData: tokenDeposits })] }))] }), (0, jsx_runtime_1.jsx)(TableSwitch_1.TxsTableSwitch, {}), (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWrapper, { children: (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWithDropdown, { links: chainOptions, activeLink: selectedChain }) }), isBridgesShowingTxs && (0, jsx_runtime_1.jsx)(LargeTxsTable_1.LargeTxsTable, { data: largeTxsData, chain: selectedChain }), !isBridgesShowingTxs && (0, jsx_runtime_1.jsx)(Table_1.BridgesTable, { data: filteredBridges })] }));
}
var volumeChartOptions = {
    overrides: {
        inflow: true
    }
};
exports.default = BridgesOverview;
var templateObject_1;
