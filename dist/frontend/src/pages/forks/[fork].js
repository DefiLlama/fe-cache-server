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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticPaths = exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var dynamic_1 = __importDefault(require("next/dynamic"));
var layout_1 = __importDefault(require("../../layout"));
var components_1 = require("../../components");
var Search_1 = require("../../components/Search");
var Filters_1 = require("../../components/Filters");
var data_1 = require("../../hooks/data");
var utils_1 = require("../../utils");
var api_1 = require("../../api");
var protocols_1 = require("../../api/categories/protocols");
var defi_1 = require("../../hooks/data/defi");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var perf_1 = require("../../utils/perf");
var Protocols_1 = require("../../components/Table/Defi/Protocols");
var Chart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/AreaChart2')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }
});
var charts = ['TVL'];
var chartColors = {
    TVL: '#4f8fea'
};
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('fees/chains/index', function (_a) {
    var fork = _a.params.fork;
    return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, protocols_1.getForkPageData)(fork)];
                case 1:
                    data = _b.sent();
                    return [2 /*return*/, __assign(__assign({}, data), { revalidate: (0, api_1.maxAgeForNext)([22]) })];
            }
        });
    });
});
function getStaticPaths() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, forks, forksList, paths;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, protocols_1.getForkPageData)()];
                case 1:
                    _a = (_b.sent()).forks, forks = _a === void 0 ? {} : _a;
                    forksList = Object.keys(forks);
                    paths = forksList.slice(0, 10).map(function (fork) {
                        return {
                            params: { fork: fork }
                        };
                    });
                    return [2 /*return*/, { paths: paths, fallback: 'blocking' }];
            }
        });
    });
}
exports.getStaticPaths = getStaticPaths;
var PageView = function (_a) {
    var _b, _c;
    var chartData = _a.chartData, tokenLinks = _a.tokenLinks, token = _a.token, filteredProtocols = _a.filteredProtocols, parentTokens = _a.parentTokens;
    var _d = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvlsEnabled = _d[0];
    var _e = (0, react_1.useMemo)(function () {
        var protocolsData = (0, defi_1.formatDataWithExtraTvls)({
            data: filteredProtocols,
            extraTvlsEnabled: extraTvlsEnabled
        });
        var parentForks = (0, defi_1.formatDataWithExtraTvls)({
            data: parentTokens,
            extraTvlsEnabled: extraTvlsEnabled
        });
        var finalChartData = (0, data_1.formatChartTvlsByDay)({ data: chartData, extraTvlsEnabled: extraTvlsEnabled, key: 'TVL' });
        var totalVolume = (0, utils_1.getPrevTvlFromChart2)(finalChartData, 0, 'TVL');
        var tvlPrevDay = (0, utils_1.getPrevTvlFromChart2)(finalChartData, 1, 'TVL');
        var volumeChangeUSD = (0, utils_1.getPercentChange)(totalVolume, tvlPrevDay);
        return { protocolsData: protocolsData, parentForks: parentForks, finalChartData: finalChartData, totalVolume: totalVolume, volumeChangeUSD: volumeChangeUSD };
    }, [chartData, filteredProtocols, parentTokens, extraTvlsEnabled]), protocolsData = _e.protocolsData, parentForks = _e.parentForks, finalChartData = _e.finalChartData, totalVolume = _e.totalVolume, volumeChangeUSD = _e.volumeChangeUSD;
    var topToken = {};
    if (protocolsData.length > 0) {
        topToken.name = (_b = protocolsData[0]) === null || _b === void 0 ? void 0 : _b.name;
        topToken.tvl = (_c = protocolsData[0]) === null || _c === void 0 ? void 0 : _c.tvl;
    }
    var tvl = (0, utils_1.formattedNum)(totalVolume, true);
    var dominance = (0, utils_1.getTokenDominance)(topToken, totalVolume);
    var percentChange = volumeChangeUSD === null || volumeChangeUSD === void 0 ? void 0 : volumeChangeUSD.toFixed(2);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Forks', name: token, route: 'forks' } }), (0, jsx_runtime_1.jsxs)(components_1.ChartAndValuesWrapper, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanels, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Total Value Locked (USD)" }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { '--tile-text-color': '#4f8fea' } }, { children: tvl }))] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Change (24h)" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#fd3c99' } }, { children: [" ", percentChange || 0, "%"] }))] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: [topToken.name, " Dominance"] }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#46acb7' } }, { children: [" ", dominance, "%"] }))] })] }), (0, jsx_runtime_1.jsx)(components_1.BreakpointPanel, __assign({ id: "chartWrapper" }, { children: (0, jsx_runtime_1.jsx)(Chart, { chartData: finalChartData, stackColors: chartColors, stacks: charts, title: "", valueSymbol: "$" }) }))] }), (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWrapper, { children: (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWithDropdown, { links: tokenLinks, activeLink: token }) }), (0, jsx_runtime_1.jsx)(Protocols_1.ProtocolsTableWithSearch, { data: protocolsData, pinnedRow: parentForks[0] })] }));
};
function Forks(props) {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "Forks - DefiLlama", defaultSEO: true }, { children: (0, jsx_runtime_1.jsx)(PageView, __assign({}, props)) })));
}
exports.default = Forks;
