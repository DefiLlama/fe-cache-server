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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var layout_1 = __importDefault(require("../../layout"));
var Table_1 = require("../../components/Table");
var api_1 = require("../../api");
var nfts_1 = require("../../api/categories/nfts");
var dynamic_1 = __importDefault(require("next/dynamic"));
var Theme_1 = require("../../Theme");
var components_1 = require("../../components");
var ProtocolChart_1 = require("../../components/ECharts/ProtocolChart/ProtocolChart");
var styled_components_1 = __importDefault(require("styled-components"));
var Search_1 = require("../../components/Search");
var perf_1 = require("../../utils/perf");
var FlatDenomination = (0, styled_components_1.default)(ProtocolChart_1.Denomination)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twhite-space: nowrap;\n\toverflow: hidden;\n"], ["\n\twhite-space: nowrap;\n\toverflow: hidden;\n"])));
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('nfts/marketplaces', function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, nfts_1.getNFTMarketplacesData)()];
            case 1:
                data = _a.sent();
                return [2 /*return*/, {
                        props: __assign({}, data),
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function Marketplaces(_a) {
    var data = _a.data, volume = _a.volume, dominance = _a.dominance, trades = _a.trades, dominanceTrade = _a.dominanceTrade, marketplaces = _a.marketplaces, volumeChartStacks = _a.volumeChartStacks, tradeChartStacks = _a.tradeChartStacks, stackColors = _a.stackColors;
    var _b = __read(React.useState(false), 2), dominanceChart = _b[0], setDominanceChart = _b[1];
    //x
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "NFT Marketplaces - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Search_1.NFTsSearch, { step: {
                    category: 'Home',
                    name: 'NFT Marketplaces',
                    route: '',
                    hideOptions: true
                } }), (0, jsx_runtime_1.jsx)(Theme_1.Header, { children: "NFT Marketplaces" }), (0, jsx_runtime_1.jsxs)(ProtocolChart_1.Filters, __assign({ color: '#4f8fea', style: { marginLeft: 'auto' } }, { children: [(0, jsx_runtime_1.jsx)(FlatDenomination, __assign({ active: !dominanceChart, onClick: function () { return setDominanceChart(false); } }, { children: "Absolute" })), (0, jsx_runtime_1.jsx)(FlatDenomination, __assign({ active: dominanceChart, onClick: function () { return setDominanceChart(true); } }, { children: "Relative" }))] })), (0, jsx_runtime_1.jsxs)(ChartWrapper, { children: [dominanceChart ? ((0, jsx_runtime_1.jsx)(AreaChart, { chartData: dominance, stacks: marketplaces, stackColors: stackColors, hideDefaultLegend: true, valueSymbol: "%", title: "Volume", expandTo100Percent: true })) : ((0, jsx_runtime_1.jsx)(BarChart, { title: "Volume", stacks: volumeChartStacks, stackColors: stackColors, chartData: volume, valueSymbol: "ETH", hideDefaultLegend: true, tooltipOrderBottomUp: true })), dominanceChart ? ((0, jsx_runtime_1.jsx)(AreaChart, { chartData: dominanceTrade, stacks: marketplaces, stackColors: stackColors, hideDefaultLegend: true, valueSymbol: "%", title: "Trades", expandTo100Percent: true })) : ((0, jsx_runtime_1.jsx)(BarChart, { title: "Trades", stacks: tradeChartStacks, stackColors: stackColors, chartData: trades, valueSymbol: "", hideDefaultLegend: true, tooltipOrderBottomUp: true }))] }), (0, jsx_runtime_1.jsx)(Table_1.NftsmarketplaceTable, { data: data })] })));
}
exports.default = Marketplaces;
var ChartWrapper = (0, styled_components_1.default)(components_1.Panel)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n"], ["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n"])));
var templateObject_1, templateObject_2;
