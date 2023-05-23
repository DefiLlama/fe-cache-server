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
exports.UnlocksCharts = exports.Emissions = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var client_1 = require("../../../api/categories/protocols/client");
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var utils_1 = require("../../../utils");
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var MAX_LENGTH_EVENTS_LIST = 5;
function Emissions(_a) {
    var data = _a.data, isEmissionsPage = _a.isEmissionsPage;
    return ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, __assign({ id: "emissions", style: { paddingLeft: 0, gridColumn: '1 / -1' } }, { children: [!isEmissionsPage && (0, jsx_runtime_1.jsx)("h3", { children: "Emissions" }), (0, jsx_runtime_1.jsx)(ChartContainer, { data: data, isEmissionsPage: isEmissionsPage })] })));
}
exports.Emissions = Emissions;
var ChartContainer = function (_a) {
    var _b, _c, _d, _e;
    var data = _a.data, isEmissionsPage = _a.isEmissionsPage;
    var cutEventsList = !isEmissionsPage && ((_b = data.events) === null || _b === void 0 ? void 0 : _b.length) > MAX_LENGTH_EVENTS_LIST;
    var styles = isEmissionsPage ? {} : { background: 'none', padding: 0, border: 'none' };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartsWrapper, __assign({ style: styles }, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(PieChart, { title: "Allocation", chartData: data.pieChartData, stackColors: data.stackColors, usdFormat: false }) }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(AreaChart, { title: "Vesting Schedule", stacks: data.categories, chartData: data.chartData, hideDefaultLegend: true, hallmarks: data.hallmarks, stackColors: data.stackColors, isStackedChart: true }) })] })), ((_c = data.sources) === null || _c === void 0 ? void 0 : _c.length) > 0 && ((0, jsx_runtime_1.jsxs)(SmolSection, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Sources" }), (0, jsx_runtime_1.jsx)(List, { children: data.sources.map(function (source) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ target: "_blank", rel: "noreferrer noopener", href: source }, { children: source })) }, source)); }) })] })), ((_d = data.notes) === null || _d === void 0 ? void 0 : _d.length) > 0 && ((0, jsx_runtime_1.jsxs)(SmolSection, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Notes" }), (0, jsx_runtime_1.jsx)(List, { children: data.notes.map(function (note) { return ((0, jsx_runtime_1.jsx)("li", { children: note }, note)); }) })] })), ((_e = data.events) === null || _e === void 0 ? void 0 : _e.length) > 0 && ((0, jsx_runtime_1.jsxs)(SmolSection, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Events" }), (0, jsx_runtime_1.jsxs)(List, { children: [(cutEventsList ? data.events.slice(0, MAX_LENGTH_EVENTS_LIST) : data.events).map(function (event) {
                                var _a;
                                return ((0, jsx_runtime_1.jsx)("li", { children: (0, utils_1.formatUnlocksEvent)({
                                        description: event.description,
                                        noOfTokens: (_a = event.noOfTokens) !== null && _a !== void 0 ? _a : [],
                                        timestamp: event.timestamp,
                                        price: data.tokenPrice.price,
                                        symbol: data.tokenPrice.symbol
                                    }) }, event.description));
                            }), cutEventsList && (0, jsx_runtime_1.jsx)("li", { children: "..." }, "more")] })] }))] }));
};
var UnlocksCharts = function (_a) {
    var protocolName = _a.protocolName;
    var _b = (0, client_1.useGetProtocolEmissions)(protocolName), data = _b.data, loading = _b.loading;
    if (loading) {
        return (0, jsx_runtime_1.jsx)("p", __assign({ style: { margin: '180px 0', textAlign: 'center' } }, { children: "Loading..." }));
    }
    if (!data) {
        return (0, jsx_runtime_1.jsx)("p", { style: { margin: '180px 0', textAlign: 'center' } });
    }
    return (0, jsx_runtime_1.jsx)(ChartContainer, { data: data });
};
exports.UnlocksCharts = UnlocksCharts;
var List = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin: 0;\n\tmargin-top: -8px;\n\tpadding: 0;\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\tli,\n\ta {\n\t\toverflow-wrap: break-word;\n\t}\n\n\ta {\n\t\ttext-decoration: underline;\n\t}\n"], ["\n\tmargin: 0;\n\tmargin-top: -8px;\n\tpadding: 0;\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\tli,\n\ta {\n\t\toverflow-wrap: break-word;\n\t}\n\n\ta {\n\t\ttext-decoration: underline;\n\t}\n"])));
var SmolSection = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 0 24px;\n\tmargin-bottom: 24px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 0 24px;\n\tmargin-bottom: 24px;\n"])));
var templateObject_1, templateObject_2;
