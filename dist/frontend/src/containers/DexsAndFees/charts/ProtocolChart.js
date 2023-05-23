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
exports.stackedBarChartColors = exports.ActualChart = exports.ProtocolChart = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var Medium_1 = require("../../../layout/Stats/Medium");
var Large_1 = require("../../../layout/Stats/Large");
var FormattedName_1 = __importDefault(require("../../../components/FormattedName"));
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var utils_1 = require("../../../utils");
var utils_2 = require("../../../api/categories/dexs/utils");
var common_1 = require("../common");
var utils_3 = require("../../../utils/adaptorsPages/utils");
var LocalLoader_1 = __importDefault(require("../../../components/LocalLoader"));
var router_1 = require("next/router");
var Common_1 = require("../../../containers/Defi/Protocol/Common");
var link_1 = __importDefault(require("next/link"));
var ProtocolChart_1 = require("../../../components/ECharts/ProtocolChart/ProtocolChart");
var StackedChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/BarChart')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(LocalLoader_1.default, { style: { margin: 'auto' } }); }
});
var ProtocolChart = function (_a) {
    var _b;
    var logo = _a.logo, data = _a.data, chartData = _a.chartData, name = _a.name, type = _a.type, title = _a.title, _c = _a.fullChart, fullChart = _c === void 0 ? false : _c, totalAllTime = _a.totalAllTime, childProtocols = _a.childProtocols, _d = _a.disableDefaultLeged, disableDefaultLeged = _d === void 0 ? false : _d;
    var router = (0, router_1.useRouter)();
    var typeString = utils_3.volumeTypes.includes(type) ? 'Volume' : (0, utils_1.capitalizeFirstLetter)(type);
    var typeSimple = utils_3.volumeTypes.includes(type) ? 'volume' : type;
    var tabs = [name];
    if (childProtocols)
        tabs.push.apply(tabs, __spreadArray([], __read(childProtocols), false));
    var _e = __read(React.useState('Daily'), 2), barInterval = _e[0], setBarInterval = _e[1];
    var simpleStack = chartData[1].includes('Fees') || chartData[1].includes('Premium volume')
        ? chartData[1].reduce(function (acc, curr) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[curr] = curr, _a)));
        }, {})
        : undefined;
    var barsData = React.useMemo((0, common_1.aggregateDataByInterval)(barInterval, chartData), [chartData, barInterval]);
    return ((0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [childProtocols && childProtocols.length > 0 && ((0, jsx_runtime_1.jsx)(Common_1.OtherProtocols, { children: tabs.map(function (p) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/".concat(type, "/").concat((0, utils_1.standardizeProtocolName)(p)), passHref: true }, { children: (0, jsx_runtime_1.jsx)(Common_1.ProtocolLink, __assign({ active: router.asPath === "/".concat(type, "/").concat((0, utils_1.standardizeProtocolName)(p)), color: '#fff' }, { children: p })) }), p)); }) })), !fullChart ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.DetailsWrapper, __assign({ style: { borderTopLeftRadius: ((_b = ['23', '2']) === null || _b === void 0 ? void 0 : _b.length) > 1 ? 0 : '12px' } }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [name && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: logo, size: 24 }), (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: name ? name + ' ' : '', maxCharacters: 16, fontWeight: 700 })] })), data.total24h || data.total24h === 0 ? ((0, jsx_runtime_1.jsx)(Medium_1.StatWrapper, { children: (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: data.disabled === true
                                            ? "Last day ".concat(typeString.toLowerCase(), " (").concat((0, utils_2.formatTimestampAsDate)(+chartData[0][chartData[0].length - 1][0]), ")")
                                            : "".concat(typeString, " (24h)") }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(data.total24h || '0', true) })] }) })) : null, data.dailyRevenue || data.dailyRevenue === 0 ? ((0, jsx_runtime_1.jsx)(Medium_1.StatWrapper, { children: (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: data.disabled === true
                                            ? "Last day ".concat(typeString.toLowerCase(), " (").concat((0, utils_2.formatTimestampAsDate)(+chartData[0][chartData[0].length - 1][0]), ")")
                                            : "Revenue (24h)" }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(data.dailyRevenue || '0', true) })] }) })) : null, typeString !== 'Fees' && data.change_1d ? ((0, jsx_runtime_1.jsx)(Medium_1.StatWrapper, { children: (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: data.disabled === true
                                            ? "Last day change (".concat((0, utils_2.formatTimestampAsDate)(+chartData[0][chartData[0].length - 1][0]), ")")
                                            : 'Change (24h)' }), (0, jsx_runtime_1.jsxs)("span", { children: [data.change_1d || 0, "%"] })] }) })) : null, totalAllTime ? ((0, jsx_runtime_1.jsx)(Medium_1.StatWrapper, { children: (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "All time ".concat(typeSimple) }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(totalAllTime, true) })] }) })) : null] }) }))) : (
            // TODO: Temporal work around to unlock feature
            (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "\u200E" })), (0, jsx_runtime_1.jsxs)(ProtocolChart_1.Wrapper, { children: [barsData && barsData.length > 0 && ((0, jsx_runtime_1.jsxs)(common_1.FiltersWrapperRow, { children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: title !== null && title !== void 0 ? title : '' }), (0, jsx_runtime_1.jsx)(common_1.FiltersAligned, __assign({ color: '#4f8fea' }, { children: common_1.GROUP_INTERVALS_LIST.map(function (dataInterval) { return ((0, jsx_runtime_1.jsx)(common_1.FlatDenomination, __assign({ onClick: function () { return setBarInterval(dataInterval); }, active: dataInterval === barInterval }, { children: dataInterval }), dataInterval)); }) }))] })), (0, jsx_runtime_1.jsx)(StackedChart, { title: '', chartData: barsData, customLegendOptions: chartData[1], stacks: simpleStack, stackColors: exports.stackedBarChartColors })] })] }));
};
exports.ProtocolChart = ProtocolChart;
var ActualChart = function (_a) {
    var title = _a.title, chartData = _a.chartData;
    var _b = __read(React.useState('Daily'), 2), barInterval = _b[0], setBarInterval = _b[1];
    var simpleStack = chartData[1].includes('Fees') || chartData[1].includes('Premium volume')
        ? chartData[1].reduce(function (acc, curr) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[curr] = curr, _a)));
        }, {})
        : undefined;
    var barsData = React.useMemo((0, common_1.aggregateDataByInterval)(barInterval, chartData), [chartData, barInterval]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [barsData && barsData.length > 0 && ((0, jsx_runtime_1.jsxs)(common_1.FiltersWrapperRow, __assign({ style: { margin: '0 20px 20px' } }, { children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: title !== null && title !== void 0 ? title : '' }), (0, jsx_runtime_1.jsx)(common_1.FiltersAligned, __assign({ color: '#4f8fea' }, { children: common_1.GROUP_INTERVALS_LIST.map(function (dataInterval) { return ((0, jsx_runtime_1.jsx)(common_1.FlatDenomination, __assign({ onClick: function () { return setBarInterval(dataInterval); }, active: dataInterval === barInterval }, { children: dataInterval }), dataInterval)); }) }))] }))), (0, jsx_runtime_1.jsx)(StackedChart, { title: '', chartData: barsData, customLegendOptions: chartData[1], stacks: simpleStack, stackColors: exports.stackedBarChartColors })] }));
};
exports.ActualChart = ActualChart;
exports.stackedBarChartColors = {
    Fees: '#4f8fea',
    Revenue: '#E59421'
};
