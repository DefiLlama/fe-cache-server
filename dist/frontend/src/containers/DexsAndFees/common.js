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
exports.MainBarChart = exports.aggregateDataByInterval = exports.GROUP_CHART_LIST = exports.GROUP_INTERVALS_LIST = exports.FiltersWrapperRow = exports.FiltersAligned = exports.FlatDenomination = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var link_1 = __importDefault(require("next/link"));
var styled_components_1 = __importDefault(require("styled-components"));
var components_1 = require("../../components");
var ProtocolChart_1 = require("../../components/ECharts/ProtocolChart/ProtocolChart");
var Misc_1 = require("../../components/ECharts/ProtocolChart/Misc");
var utils_1 = require("../../utils");
var utils_2 = require("./utils");
var utils_3 = require("../../utils/adaptorsPages/utils");
var QuestionHelper_1 = __importDefault(require("../../components/QuestionHelper"));
var LocalStorage_1 = require("../../contexts/LocalStorage");
var LocalLoader_1 = __importDefault(require("../../components/LocalLoader"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var StackedBarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(LocalLoader_1.default, { style: { margin: 'auto' } }); }
});
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/AreaChart')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(LocalLoader_1.default, { style: { margin: 'auto' } }); }
});
exports.FlatDenomination = (0, styled_components_1.default)(ProtocolChart_1.Denomination)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twhite-space: nowrap;\n\toverflow: hidden;\n"], ["\n\twhite-space: nowrap;\n\toverflow: hidden;\n"])));
exports.FiltersAligned = (0, styled_components_1.default)(ProtocolChart_1.Filters)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
exports.FiltersWrapperRow = (0, styled_components_1.default)(Misc_1.FiltersWrapper)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tjustify-content: space-between;\n\tflex-direction: row;\n\tmargin: 1rem 1rem 0 1rem;\n\talign-items: center;\n\tfont-weight: 600;\n\tcolor: ", ";\n\tfont-size: 1.3em;\n"], ["\n\tjustify-content: space-between;\n\tflex-direction: row;\n\tmargin: 1rem 1rem 0 1rem;\n\talign-items: center;\n\tfont-weight: 600;\n\tcolor: ", ";\n\tfont-size: 1.3em;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)');
});
var AdjustedBreakpointPannels = (0, styled_components_1.default)(components_1.BreakpointPanels)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tmin-width: 17rem;\n"], ["\n\tmin-width: 17rem;\n"])));
exports.GROUP_INTERVALS_LIST = ['Daily', 'Weekly', 'Monthly'];
exports.GROUP_CHART_LIST = ['Volume', 'Dominance'];
var aggregateDataByInterval = function (barInterval, chartData) { return function () {
    var cleanTimestampFormatter;
    if (barInterval === 'Monthly')
        cleanTimestampFormatter = utils_2.getCleanMonthTimestamp;
    else if (barInterval === 'Weekly')
        cleanTimestampFormatter = utils_2.getCleanWeekTimestamp;
    else
        cleanTimestampFormatter = function (timestampInSeconds) { return timestampInSeconds; };
    var monthBarsDataMap = chartData[0].reduce(function (acc, current) {
        var _a;
        var cleanDate = cleanTimestampFormatter(+current.date);
        acc[cleanDate] = Object.entries(current).reduce(function (intervalAcc, _a) {
            var _b;
            var _c = __read(_a, 2), label = _c[0], value = _c[1];
            if (typeof value === 'string')
                return intervalAcc;
            var v = ((_b = intervalAcc[label]) !== null && _b !== void 0 ? _b : 0) + value;
            if (v !== 0)
                intervalAcc[label] = v;
            return intervalAcc;
        }, (_a = acc[cleanDate]) !== null && _a !== void 0 ? _a : {});
        return acc;
    }, {});
    return Object.entries(monthBarsDataMap).map(function (_a) {
        var _b = __read(_a, 2), date = _b[0], bar = _b[1];
        return (__assign(__assign({}, bar), { date: date }));
    });
}; };
exports.aggregateDataByInterval = aggregateDataByInterval;
var MainBarChart = function (props) {
    var _a, _b;
    var _c = __read(React.useState('Volume'), 2), chartType = _c[0], setChartType = _c[1];
    var _d = __read((0, LocalStorage_1.useChartInterval)(), 2), chartInterval = _d[0], changeChartInterval = _d[1];
    var dataType = utils_3.volumeTypes.includes(props.type) ? 'volume' : props.type;
    var simpleStack = props.chartData[1].includes('Fees') || props.chartData[1].includes('Premium volume')
        ? props.chartData[1].reduce(function (acc, curr) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[curr] = curr, _a)));
        }, {})
        : undefined;
    var barsData = React.useMemo((0, exports.aggregateDataByInterval)(chartInterval, props.chartData), [
        props.chartData,
        chartInterval
    ]);
    return ((0, jsx_runtime_1.jsxs)(components_1.ChartAndValuesWrapper, { children: [typeof props.data.total24h === 'number' ||
                typeof props.data.change_1d === 'number' ||
                typeof props.data.change_1m === 'number' ||
                (typeof props.data.dexsDominance === 'number' && props.type === 'dexs') ||
                (typeof props.data.change_7dover7d === 'number' && props.type === 'dexs') ||
                (typeof props.data.total7d === 'number' && props.type === 'dexs') ? ((0, jsx_runtime_1.jsxs)(AdjustedBreakpointPannels, { children: [!Number.isNaN(props.data.total24h) ? ((0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Total ", dataType, " (24h)"] }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { '--tile-text-color': '#46acb7' } }, { children: (0, utils_1.formattedNum)(props.data.total24h, true) }))] })) : null, props.type === 'dexs' && !Number.isNaN(props.data.total7d) ? ((0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Total ", dataType, " (7d)"] }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { '--tile-text-color': '#4f8fea' } }, { children: (0, utils_1.formattedNum)(props.data.total7d, true) }))] })) : null, props.type === 'dexs' && !Number.isNaN(props.data.change_7dover7d) ? ((0, jsx_runtime_1.jsxs)(PanelHiddenMobileHelper, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Weekly change" }), (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "Change of last 7d volume over the previous 7d volume of all dexs", textAlign: "center" })] }), props.data.change_7dover7d > 0 ? ((0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#3cfd99' } }, { children: [' ', props.data.change_7dover7d || 0, "%"] }))) : ((0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#fd3c99' } }, { children: [' ', props.data.change_7dover7d || 0, "%"] })))] })) : null, props.type !== 'dexs' && !Number.isNaN(props.data.change_1d) ? ((0, jsx_runtime_1.jsxs)(components_1.PanelHiddenMobile, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Change (24h)" }), props.data.change_1d > 0 ? ((0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#3cfd99' } }, { children: [" ", props.data.change_1d || 0, "%"] }))) : ((0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#fd3c99' } }, { children: [" ", props.data.change_1d || 0, "%"] })))] })) : null, props.type === 'dexs' && !Number.isNaN(props.data.dexsDominance) ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !props.name && ((0, jsx_runtime_1.jsxs)(PanelHiddenMobileHelper, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "DEX vs CEX dominance" }), (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "Dexs dominance over aggregated dexs and cexs volume (24h)", textAlign: "center" })] }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#46acb7' } }, { children: [' ', props.data.dexsDominance || 0, "%"] }))] })) })) : !Number.isNaN(props.data.change_1m) ? ((0, jsx_runtime_1.jsxs)(components_1.PanelHiddenMobile, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Change (30d)" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#46acb7' } }, { children: [" ", props.data.change_1m || 0, "%"] }))] })) : null] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})), (0, jsx_runtime_1.jsxs)(components_1.Panel, __assign({ style: { padding: 0, width: '100%' } }, { children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(exports.FiltersWrapperRow, { children: [(0, jsx_runtime_1.jsx)(exports.FiltersAligned, __assign({ color: '#4f8fea' }, { children: exports.GROUP_INTERVALS_LIST.map(function (dataInterval) { return ((0, jsx_runtime_1.jsx)(exports.FlatDenomination, __assign({ onClick: function () { return changeChartInterval(dataInterval); }, active: dataInterval === chartInterval }, { children: dataInterval }), dataInterval)); }) })), props.chartTypes && ((0, jsx_runtime_1.jsx)(ProtocolChart_1.Filters, __assign({ color: '#4f8fea' }, { children: props.chartTypes.map(function (dataType) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/options?dataType=".concat(dataType), shallow: true, passHref: true }, { children: (0, jsx_runtime_1.jsx)(exports.FlatDenomination, __assign({ active: dataType === props.selectedType }, { children: dataType })) }), dataType)); }) }))), ((_b = (_a = props.chartData) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.length) > 1 ? ((0, jsx_runtime_1.jsx)(ProtocolChart_1.Filters, __assign({ color: '#4f8fea' }, { children: exports.GROUP_CHART_LIST.map(function (dataType) { return ((0, jsx_runtime_1.jsx)(exports.FlatDenomination, __assign({ active: dataType === chartType, onClick: function () { return setChartType(dataType); } }, { children: dataType }), dataType)); }) }))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}))] }) }), barsData && barsData.length > 0 && ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartWrapper, { children: chartType === 'Dominance' ? ((0, jsx_runtime_1.jsx)(AreaChart, { title: "", chartData: barsData, stacks: props.chartData[1], expandTo100Percent: true, valueSymbol: "%" })) : ((0, jsx_runtime_1.jsx)(StackedBarChart, { title: "", chartData: barsData, customLegendOptions: props.chartData[1], stacks: simpleStack, hideDefaultLegend: props.disableDefaultLeged })) }))] }))] }));
};
exports.MainBarChart = MainBarChart;
var PanelHiddenMobileHelper = (0, styled_components_1.default)(components_1.PanelHiddenMobile)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t& > div {\n\t\tdisplay: inline-flex;\n\t\tgap: 0.5em;\n\t}\n\t& > div > h2 {\n\t\tmin-width: 0;\n\t\tfont-weight: 500;\n\t\tfont-size: 1rem;\n\t}\n"], ["\n\t& > div {\n\t\tdisplay: inline-flex;\n\t\tgap: 0.5em;\n\t}\n\t& > div > h2 {\n\t\tmin-width: 0;\n\t\tfont-weight: 500;\n\t\tfont-size: 1rem;\n\t}\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
