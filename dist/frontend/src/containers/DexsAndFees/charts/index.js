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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetDexsAndFeesChartData = exports.ChartByType2 = exports.ChartByType = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var client_1 = require("../../../api/categories/adaptors/client");
var utils_1 = require("../../../api/categories/adaptors/utils");
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var utils_2 = require("../../../utils");
var utils_3 = require("../../../utils/adaptorsPages/utils");
var ProtocolChart_1 = require("./ProtocolChart");
var utils_4 = require("./utils");
var chartTitleBy = function (chartType, breakdown) {
    switch (chartType) {
        case 'version':
            return function (_title, type) { return "".concat((0, utils_2.capitalizeFirstLetter)(type), " by protocol version"); };
        case 'tokens':
            return function (_title, type) { return "".concat((0, utils_2.capitalizeFirstLetter)(type), " by token"); };
        case 'chain':
        default:
            return function (title, type) {
                if (type === 'fees' && !breakdown)
                    return "".concat((0, utils_2.capitalizeFirstLetter)(type), " and revenue");
                return title && title !== ''
                    ? title
                    : "".concat((0, utils_2.capitalizeFirstLetter)(type)).concat(breakdown ? ' by chain' : ' and revenue');
            };
    }
};
var ChartByType = function (props) {
    var _a, _b, _c, _d, _e;
    var _f = (0, exports.useGetDexsAndFeesChartData)(props), protocolSummary = _f.protocolSummary, error = _f.error, enableBreakdownChart = _f.enableBreakdownChart, fullChart = _f.fullChart, typeSimple = _f.typeSimple, mainChart = _f.mainChart;
    return !error &&
        (((_b = (_a = mainChart.dataChart) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.length) > 0 || ((_d = (_c = protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.totalDataChartBreakdown) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.length) > 0) ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ enable: fullChart }, { children: (0, jsx_runtime_1.jsx)(ProtocolChart_1.ProtocolChart, { logo: protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.logo, data: protocolSummary, chartData: (0, utils_4.chartFormatterBy)(props.chartType)(mainChart.dataChart, protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.totalDataChartBreakdown), name: protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.displayName, type: (_e = protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.type) !== null && _e !== void 0 ? _e : props.type, title: fullChart ? chartTitleBy(props.chartType, enableBreakdownChart)(mainChart.title, typeSimple) : undefined, totalAllTime: protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.totalAllTime, fullChart: fullChart }) }))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
};
exports.ChartByType = ChartByType;
var ChartByType2 = function (props) {
    var _a, _b, _c, _d;
    var _e = (0, exports.useGetDexsAndFeesChartData)(props), protocolSummary = _e.protocolSummary, error = _e.error, enableBreakdownChart = _e.enableBreakdownChart, fullChart = _e.fullChart, typeSimple = _e.typeSimple, mainChart = _e.mainChart;
    return !error &&
        (((_b = (_a = mainChart.dataChart) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.length) > 0 || ((_d = (_c = protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.totalDataChartBreakdown) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.length) > 0) ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ enable: fullChart }, { children: (0, jsx_runtime_1.jsx)(ProtocolChart_1.ActualChart, { chartData: (0, utils_4.chartFormatterBy)(props.chartType)(mainChart.dataChart, protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.totalDataChartBreakdown), title: fullChart ? chartTitleBy(props.chartType, enableBreakdownChart)(mainChart.title, typeSimple) : undefined }) }))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
};
exports.ChartByType2 = ChartByType2;
var useGetDexsAndFeesChartData = function (props) {
    var _a, _b;
    var _c = __read(React.useState(props.protocolSummary), 2), protocolSummary = _c[0], setProtocolSummary = _c[1];
    var _d = (0, client_1.useFetchChartsSummary)(props.type, props.protocolName, undefined, !!props.protocolSummary), data = _d.data, error = _d.error;
    React.useEffect(function () {
        if (data && !error) {
            setProtocolSummary(data);
        }
    }, [data, error]);
    var enableBreakdownChart = (_a = props.breakdownChart) !== null && _a !== void 0 ? _a : true;
    var fullChart = (_b = props.fullChart) !== null && _b !== void 0 ? _b : true;
    var typeSimple = utils_3.volumeTypes.includes(props.type) ? 'volume' : props.type;
    var mainChart = React.useMemo(function () {
        if (!protocolSummary)
            return {
                dataChart: [[], []],
                title: 'Loading'
            };
        var chartData;
        var title;
        var legend;
        if (!enableBreakdownChart) {
            chartData = protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.totalDataChart[0];
            legend = protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.totalDataChart[1];
        }
        else {
            var _a = __read((0, utils_1.chartBreakdownByChain)(protocolSummary === null || protocolSummary === void 0 ? void 0 : protocolSummary.totalDataChartBreakdown), 2), cd = _a[0], lgnd = _a[1];
            chartData = cd;
            legend = lgnd;
        }
        title = Object.keys(legend).length <= 1 ? "".concat((0, utils_2.capitalizeFirstLetter)(typeSimple), " by chain") : '';
        return {
            dataChart: [chartData, legend],
            title: title
        };
    }, [protocolSummary, enableBreakdownChart, typeSimple]);
    return { protocolSummary: protocolSummary, error: error, enableBreakdownChart: enableBreakdownChart, fullChart: fullChart, typeSimple: typeSimple, mainChart: mainChart };
};
exports.useGetDexsAndFeesChartData = useGetDexsAndFeesChartData;
