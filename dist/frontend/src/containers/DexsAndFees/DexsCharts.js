"use strict";
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
exports.DexCharts = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dynamic_1 = __importDefault(require("next/dynamic"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var Medium_1 = require("../../layout/Stats/Medium");
var Large_1 = require("../../layout/Stats/Large");
var FormattedName_1 = __importDefault(require("../../components/FormattedName"));
var TokenLogo_1 = __importDefault(require("../../components/TokenLogo"));
var utils_1 = require("../../utils");
var utils_2 = require("../../api/categories/dexs/utils");
var LocalLoader_1 = __importDefault(require("../../components/LocalLoader"));
// TODO remove duplicate bar chart component and use '~/components/ECharts/BarChart'
var StackedBarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart/Stacked')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(LocalLoader_1.default, { style: { margin: 'auto' } }); }
});
var DexCharts = function (_a) {
    var logo = _a.logo, data = _a.data, chartData = _a.chartData, name = _a.name, chainsChart = _a.chainsChart, _b = _a.isProtocolPage, isProtocolPage = _b === void 0 ? false : _b;
    return ((0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DetailsWrapper, { children: [isProtocolPage ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.Name, { children: "Trading Volume" })) : ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: logo, size: 24 }), (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: name ? name + ' ' : '', maxCharacters: 16, fontWeight: 700 })] })), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: data.disabled === true
                                    ? "Last day volume (".concat((0, utils_2.formatTimestampAsDate)(data.volumeHistory[data.volumeHistory.length - 1].timestamp), ")")
                                    : '24h volume' }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(data.total1dVolume || '0', true) })] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: data.disabled === true
                                    ? "Last day change (".concat((0, utils_2.formatTimestampAsDate)(data.volumeHistory[data.volumeHistory.length - 1].timestamp), ")")
                                    : '24 change' }), (0, jsx_runtime_1.jsxs)("span", { children: [data.change1dVolume || 0, "%"] })] })] }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartWrapper, { children: [chartData && chartData.length > 0 && !isProtocolPage && ((0, jsx_runtime_1.jsx)(StackedBarChart, { title: "Total volume", chartData: chartData })), chainsChart && (0, jsx_runtime_1.jsx)(StackedBarChart, { title: "Volume by chain", chartData: chainsChart })] })] }));
};
exports.DexCharts = DexCharts;
