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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.getStaticProps = exports.getStaticPaths = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var polished_1 = require("polished");
var layout_1 = __importDefault(require("../../../layout"));
var FormattedName_1 = __importDefault(require("../../../components/FormattedName"));
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var Medium_1 = require("../../../layout/Stats/Medium");
var Large_1 = require("../../../layout/Stats/Large");
var Search_1 = require("../../../components/Search");
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var shared_1 = require("../../../components/ECharts/shared");
var api_1 = require("../../../api");
var protocols_1 = require("../../../api/categories/protocols");
var utils_1 = require("../../../utils");
var getColor_1 = require("../../../utils/getColor");
var constants_1 = require("../../../constants");
var perf_1 = require("../../../utils/perf");
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
function getStaticPaths() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var res, paths;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, fetch("".concat(constants_1.USER_METRICS_CHAIN_API_BY_DATE, "/ethereum?day=2022-08-20")).then(function (res) { return res.json(); })];
                case 1:
                    res = _c.sent();
                    paths = (_b = (_a = res.protocols) === null || _a === void 0 ? void 0 : _a.slice(0, 30).map(function (_a) {
                        var adaptor = _a.adaptor;
                        return ({
                            params: { protocol: [(0, utils_1.standardizeProtocolName)(adaptor)] }
                        });
                    })) !== null && _b !== void 0 ? _b : [];
                    return [2 /*return*/, { paths: paths, fallback: 'blocking' }];
            }
        });
    });
}
exports.getStaticPaths = getStaticPaths;
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('aggregators/[item]', function (_a) {
    var _b = __read(_a.params.protocol, 1), protocol = _b[0];
    return __awaiter(void 0, void 0, void 0, function () {
        var _c, userMetrics, protocolData, logoUrl, backgroundColor, _d, uniqueChains, uniqueColumns, error_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, Promise.all([
                            fetch("".concat(constants_1.USER_METRICS_PROTOCOL_API, "/").concat(protocol)).then(function (res) { return res.json(); }),
                            (0, protocols_1.getProtocol)(protocol)
                        ])];
                case 1:
                    _c = __read.apply(void 0, [_e.sent(), 2]), userMetrics = _c[0], protocolData = _c[1];
                    logoUrl = protocolData.logo || (0, utils_1.tokenIconUrl)(protocol);
                    return [4 /*yield*/, (0, getColor_1.getColor)((0, utils_1.tokenIconPaletteUrl)(protocol))];
                case 2:
                    backgroundColor = _e.sent();
                    _d = userMetrics === null || userMetrics === void 0 ? void 0 : userMetrics.reduce(function (acc, curr) {
                        acc.uniqueChains.add((0, utils_1.capitalizeFirstLetter)(curr.chain));
                        acc.uniqueColumns.add(curr.column_type);
                        return acc;
                    }, { uniqueChains: new Set(), uniqueColumns: new Set() }), uniqueChains = _d.uniqueChains, uniqueColumns = _d.uniqueColumns;
                    return [2 /*return*/, {
                            props: {
                                data: userMetrics === null || userMetrics === void 0 ? void 0 : userMetrics.sort(function (a, b) { return new Date(a.day).getTime() - new Date(b.day).getTime(); }),
                                name: protocolData.name || protocol,
                                logo: logoUrl,
                                uniqueChains: Array.from(uniqueChains),
                                uniqueColumns: Array.from(uniqueColumns),
                                backgroundColor: backgroundColor,
                                revalidate: (0, api_1.maxAgeForNext)([22])
                            }
                        }];
                case 3:
                    error_1 = _e.sent();
                    return [2 /*return*/, {
                            notFound: true
                        }];
                case 4: return [2 /*return*/];
            }
        });
    });
});
function Protocol(_a) {
    var name = _a.name, logo = _a.logo, backgroundColor = _a.backgroundColor, data = _a.data, uniqueChains = _a.uniqueChains, uniqueColumns = _a.uniqueColumns;
    var allTxsChart = React.useMemo(function () {
        var allTxsByDate = {};
        var txs = data === null || data === void 0 ? void 0 : data.filter(function (item) { return item.column_type === 'all'; });
        txs.forEach(function (value) {
            var day = new Date(value.day).getTime() / 1000;
            // intialize object with date and column type props
            if (!allTxsByDate[day]) {
                allTxsByDate[day] = {
                    'Daily Transactions': 0,
                    'Unique Users': 0
                };
            }
            // sum all values of same category on same date
            allTxsByDate[day]['Daily Transactions'] += value.total_txs;
            allTxsByDate[day]['Unique Users'] += value.unique_users;
        });
        return Object.keys(allTxsByDate).map(function (date) { return (__assign({ date: date }, allTxsByDate[date])); });
    }, [data]);
    var recentMetrics = allTxsChart[allTxsChart.length - 1];
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "".concat(name, ": User Metrics - DefiLlama"), defaultSEO: true, backgroundColor: (0, polished_1.transparentize)(0.6, backgroundColor), style: { gap: '36px' } }, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Users', name: name, hideOptions: true } }), (0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DetailsWrapper, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: logo, size: 24 }), (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: name ? name + ' ' : '', maxCharacters: 16, fontWeight: 700 })] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "24h Users" }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(recentMetrics === null || recentMetrics === void 0 ? void 0 : recentMetrics['Unique Users']) })] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "24h Transactions" }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(recentMetrics === null || recentMetrics === void 0 ? void 0 : recentMetrics['Daily Transactions']) })] })] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartWrapper, { children: (0, jsx_runtime_1.jsx)(BarChart, { chartData: allTxsChart, stacks: { 'Unique Users': 'stackA' }, title: "", color: backgroundColor }) })] }), (0, jsx_runtime_1.jsx)(Charts, { data: data, chains: uniqueChains, columns: uniqueColumns })] })));
}
exports.default = Protocol;
var Charts = function (_a) {
    var data = _a.data, chains = _a.chains, columns = _a.columns;
    var _b = __read(React.useState(chains), 2), selectedChains = _b[0], setSelectedChains = _b[1];
    var _c = React.useMemo(function () {
        var uniqueUsersByDate = {};
        var dailyTxsByDate = {};
        var chartStacks = {};
        selectedChains === null || selectedChains === void 0 ? void 0 : selectedChains.forEach(function (selectedChain) {
            var transactions = data === null || data === void 0 ? void 0 : data.filter(function (item) { return item.chain === selectedChain.toLowerCase(); });
            transactions.forEach(function (value) {
                var day = new Date(value.day).getTime() / 1000;
                // check if date is present in data and initialize objects with date and column type props
                if (!uniqueUsersByDate[day]) {
                    var keys = columns.length === 1 && columns.includes('all')
                        ? ['Unique Users', 'Daily Transactions']
                        : __spreadArray(__spreadArray([], __read(columns.filter(function (c) { return c !== 'all'; }).map(function (c) { return (0, utils_1.capitalizeFirstLetter)(c); })), false), ['Others'], false);
                    uniqueUsersByDate[day] = {};
                    dailyTxsByDate[day] = {};
                    keys.forEach(function (key) {
                        // set same stack key for all categories, so they render on top of each other
                        chartStacks[key] = 'stackA';
                        // initialize category on a day with 0
                        uniqueUsersByDate[day][key] = 0;
                        dailyTxsByDate[day][key] = 0;
                    });
                }
                var columnType = (0, utils_1.capitalizeFirstLetter)(value.column_type);
                // If theres only 1 column and its 'All' then you hover on charts, show the value other than 'All' or 'Others' //
                if (columnType === 'All' && columns.length === 1) {
                    uniqueUsersByDate[day]['Unique Users'] += value.unique_users;
                    dailyTxsByDate[day]['Daily Transactions'] += value.total_txs;
                }
                else if (columnType === 'All') {
                    // store user metrics of column type 'all', so we can calculate remaining txs of the day after subtracting tx types like deposit, withdraw later //
                    uniqueUsersByDate[day]['Others'] += value.unique_users;
                    dailyTxsByDate[day]['Others'] += value.total_txs;
                }
                else {
                    // subtract values of columns types like deposit/withdraw from column type 'all' to show under Remaining txs of the day
                    uniqueUsersByDate[day]['Others'] -= value.unique_users;
                    dailyTxsByDate[day]['Others'] -= value.total_txs;
                }
                // sum values of this category or column type under same date
                uniqueUsersByDate[day][columnType] += value.unique_users;
                dailyTxsByDate[day][columnType] += value.total_txs;
            });
        });
        var uniqueUsersChart = Object.keys(uniqueUsersByDate).map(function (date) { return (__assign({ date: date }, uniqueUsersByDate[date])); });
        var dailyTxsChart = Object.keys(dailyTxsByDate).map(function (date) { return (__assign({ date: date }, dailyTxsByDate[date])); });
        return {
            uniqueUsersChart: uniqueUsersChart,
            dailyTxsChart: dailyTxsChart,
            uniqueUsersStack: columns.length === 1 && columns.includes('all') ? { 'Unique Users': 'a' } : chartStacks,
            dailyTxsStack: columns.length === 1 && columns.includes('all') ? { 'Daily Transactions': 'a' } : chartStacks
        };
    }, [data, selectedChains, columns]), uniqueUsersChart = _c.uniqueUsersChart, uniqueUsersStack = _c.uniqueUsersStack, dailyTxsStack = _c.dailyTxsStack, dailyTxsChart = _c.dailyTxsChart;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(SectionHeaderWrapper, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.SectionHeader, { children: "Charts" }), chains.length > 1 && ((0, jsx_runtime_1.jsx)(shared_1.SelectLegendMultiple, { allOptions: chains, options: selectedChains, setOptions: setSelectedChains, title: selectedChains.length === 1 ? 'Chain' : 'Chains' }))] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsWrapper, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(LazyChartWrapper, { children: (0, jsx_runtime_1.jsx)(BarChart, { chartData: dailyTxsChart, title: "Daily Transactions", stacks: dailyTxsStack }) }), (0, jsx_runtime_1.jsx)(LazyChartWrapper, { children: (0, jsx_runtime_1.jsx)(BarChart, { chartData: uniqueUsersChart, title: "Unique Users", stacks: uniqueUsersStack }) })] }) })] }));
};
var SectionHeaderWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 24px;\n\tposition: relative;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 24px;\n\tposition: relative;\n"])));
var LazyChartWrapper = (0, styled_components_1.default)(ProtocolAndPool_1.LazyChart)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: 1 / -1;\n\t}\n\t@media screen and (min-width: 90rem) {\n\t\tgrid-column: span 1;\n\t}\n"], ["\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: 1 / -1;\n\t}\n\t@media screen and (min-width: 90rem) {\n\t\tgrid-column: span 1;\n\t}\n"])));
var templateObject_1, templateObject_2;
