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
var styled_components_1 = __importDefault(require("styled-components"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var components_1 = require("../../components");
var Theme_1 = require("../../Theme");
var Search_1 = require("../../components/Search");
var Table_1 = require("../../components/Table");
var ButtonStyled_1 = require("../../components/ButtonStyled");
var utils_1 = require("../../utils");
var StackedBarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart/Stacked')); }); }, {
    ssr: false
});
var HeaderWrapper = (0, styled_components_1.default)(Theme_1.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 12px;\n\tborder: 1px solid transparent;\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 12px;\n\tborder: 1px solid transparent;\n"])));
function BridgeChainsOverview(_a) {
    var chains = _a.chains, filteredChains = _a.filteredChains, chainToChartDataIndex = _a.chainToChartDataIndex, formattedVolumeChartData = _a.formattedVolumeChartData;
    var downloadCsv = function () {
        var rows = [__spreadArray(['Timestamp', 'Date'], __read(chains), false)];
        var stackedDatasetObject = {};
        formattedVolumeChartData.map(function (volumeChart) {
            var chain = volumeChart.name;
            var chart = volumeChart.data;
            chart.map(function (chart) {
                var date = Math.floor(new Date(chart[0]).getTime() / 1000);
                stackedDatasetObject[date] = stackedDatasetObject[date] || {};
                stackedDatasetObject[date][chain] = chart[1];
            });
        });
        var stackedData = Object.entries(stackedDatasetObject).map(function (data) {
            return __assign({ date: parseInt(data[0]) }, data[1]);
        });
        stackedData
            .sort(function (a, b) { return a.date - b.date; })
            .forEach(function (day) {
            rows.push(__spreadArray([day.date, (0, utils_1.toNiceCsvDate)(day.date)], __read(chains.map(function (chain) { var _a; return (_a = day[chain]) !== null && _a !== void 0 ? _a : ''; })), false));
        });
        (0, utils_1.download)('bridge-chains.csv', rows.map(function (r) { return r.join(','); }).join('\n'));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.BridgesSearch, { step: {
                    category: 'Bridges',
                    name: 'Chains'
                } }), (0, jsx_runtime_1.jsxs)(HeaderWrapper, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Bridge Inflows by Chain" }), (0, jsx_runtime_1.jsx)(ButtonStyled_1.ButtonDark, __assign({ onClick: downloadCsv }, { children: "Download all data in .csv" }))] }), (0, jsx_runtime_1.jsx)(components_1.ChartAndValuesWrapper, { children: (0, jsx_runtime_1.jsx)(components_1.BreakpointPanel, __assign({ id: "chartWrapper", style: { gap: '16px', minHeight: '450px', justifyContent: 'space-between' } }, { children: formattedVolumeChartData && formattedVolumeChartData.length > 0 && ((0, jsx_runtime_1.jsx)(StackedBarChart, { chartData: formattedVolumeChartData })) })) }), (0, jsx_runtime_1.jsx)(Table_1.BridgeChainsTable, { data: filteredChains })] }));
}
exports.default = BridgeChainsOverview;
var templateObject_1;
