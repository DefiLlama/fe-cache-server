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
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../Theme");
var layout_1 = __importDefault(require("../layout"));
var components_1 = require("../components");
var Search_1 = require("../components/Search");
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var perf_1 = require("../utils/perf");
var utils_1 = require("../utils");
var TableWithSearch_1 = require("../components/Table/TableWithSearch");
var columns_1 = require("../components/Table/Defi/columns");
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('lsd', function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, finalData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, protocols_1.getLSDPageData)()];
            case 1:
                data = _a.sent();
                finalData = getChartData(__assign({}, data.props));
                return [2 /*return*/, {
                        props: __assign({}, finalData),
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
var ChartsWrapper = (0, styled_components_1.default)(components_1.Panel)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n"], ["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n"])));
var PageView = function (_a) {
    var areaChartData = _a.areaChartData, pieChartData = _a.pieChartData, tokensList = _a.tokensList, tokens = _a.tokens, stakedEthSum = _a.stakedEthSum, stakedEthInUsdSum = _a.stakedEthInUsdSum, lsdColors = _a.lsdColors;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Home', name: 'ETH Liquid Staking Derivatives' } }), (0, jsx_runtime_1.jsxs)(TotalLocked, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Total Value Locked ETH LSDs" }), (0, jsx_runtime_1.jsxs)("span", { children: [" ", "".concat((0, utils_1.formattedNum)(stakedEthSum), " ETH ($").concat((0, utils_1.toK)(stakedEthInUsdSum), ")")] })] }), (0, jsx_runtime_1.jsxs)(ChartsWrapper, { children: [(0, jsx_runtime_1.jsx)(PieChart, { chartData: pieChartData, stackColors: lsdColors, usdFormat: false }), (0, jsx_runtime_1.jsx)(AreaChart, { chartData: areaChartData, stacks: tokens, stackColors: lsdColors, customLegendName: "LSD", customLegendOptions: tokens, hideDefaultLegend: true, valueSymbol: "%", title: "" })] }), (0, jsx_runtime_1.jsx)(TableWithSearch_1.TableWithSearch, { data: tokensList, columns: columns_1.LSDColumn, columnToSearch: 'name', placeholder: 'Search protocols...' })] }));
};
var TotalLocked = (0, styled_components_1.default)(Theme_1.Header)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tflex-wrap: wrap;\n\n\t& > *:last-child {\n\t\tfont-family: var(--font-jetbrains);\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tflex-wrap: wrap;\n\n\t& > *:last-child {\n\t\tfont-family: var(--font-jetbrains);\n\t}\n"])));
function LSDs(props) {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "Liquid Staking Derivatives - DefiLlama", defaultSEO: true }, { children: (0, jsx_runtime_1.jsx)(PageView, __assign({}, props)) })));
}
exports.default = LSDs;
function getChartData(_a) {
    var chartData = _a.chartData, lsdRates = _a.lsdRates, lsdApy = _a.lsdApy, lsdColors = _a.lsdColors;
    var historicData = chartData
        .map(function (protocol) {
        var tokensArray = protocol.chainTvls['Ethereum'].tokens;
        return tokensArray.map(function (t, i, arr) {
            var date = function (d) { return Math.floor(d.date / 24 / 60 / 60) * 60 * 60 * 24; };
            if (i > 0 && date(arr[i - 1]) == date(t)) {
                return { value: 0 };
            }
            return {
                name: protocol.name,
                date: date(t),
                value: t.tokens[Object.keys(t.tokens).filter(function (k) { return k.includes('ETH'); })[0]]
            };
        });
    })
        .flat()
        .filter(function (p) { return p.value > 0; });
    var uniqueDates = __spreadArray([], __read(new Set(historicData.map(function (p) { return p.date; }))), false);
    var areaChartData = uniqueDates
        .map(function (d) {
        var _a;
        var dayData = historicData.filter(function (z) { return z.date === d; });
        // on the 27th of august, lido is duplicated, removing dupes
        if (d === 1630022400) {
            dayData = dayData.filter(function (v, i, a) { return a.findIndex(function (v2) { return v2.name === v.name; }) === i; });
        }
        // there are few days for which we don't have lido data, removing those
        if (d > 1608321600 && ((_a = dayData.find(function (x) { return x.name === 'Lido'; })) === null || _a === void 0 ? void 0 : _a.name) === undefined)
            return {};
        var stakedEthSumDay = dayData.reduce(function (sum, a) { return sum + a.value; }, 0);
        return dayData
            .map(function (p) {
            var _a;
            return (_a = { date: p.date }, _a[p.name] = (p.value / stakedEthSumDay) * 100, _a);
        })
            .reduce(function (acc, x) {
            for (var key in x)
                acc[key] = x[key];
            return acc;
        }, {});
    })
        .sort(function (a, b) { return a.date - b.date; });
    // ffill data from 12of may to 13th and 14th
    // const may12th = areaChartData.find((t) => t.date === 1620777600)
    // 13th is missing
    // areaChartData = [...areaChartData, { ...may12th, date: 1620864000 }]
    // fill 14th
    // for (const d of areaChartData) {
    // 	if (d.date === 1620950400) {
    // 		for (const k of Object.keys(may12th)) {
    // 			if (k === 'date') continue
    // 			d[k] = may12th[k]
    // 		}
    // 	}
    // }
    var roundDate = function (date) { return Math.floor(date / 24 / 60 / 60) * 60 * 60 * 24; };
    var secDay = 86400;
    var tokenTvls = chartData
        .map(function (protocol) {
        var _a, _b, _c, _d;
        var p = protocol.chainTvls['Ethereum'];
        if (p.tokens.length < 1) {
            return {
                name: protocol.name,
                logo: protocol.logo,
                mcap: protocol.mcap
            };
        }
        var lastDate = p.tokens.slice(-1)[0].date;
        var offset7d = roundDate(lastDate - 7 * secDay);
        var offset30d = roundDate(lastDate - 30 * secDay);
        var lastTokens = p.tokens.slice(-1)[0].tokens;
        var lastTokensInUsd = p.tokensInUsd.slice(-1)[0].tokens;
        var lastTokens7d = (_a = p.tokens.find(function (x) { return x.date === offset7d; })) === null || _a === void 0 ? void 0 : _a.tokens;
        var lastTokens30d = (_b = p.tokens.find(function (x) { return x.date === offset30d; })) === null || _b === void 0 ? void 0 : _b.tokens;
        var eth = lastTokens[Object.keys(lastTokens).filter(function (k) { return k.includes('ETH'); })[0]];
        var eth7d = lastTokens7d !== undefined ? lastTokens7d[(_c = Object.keys(lastTokens7d)) === null || _c === void 0 ? void 0 : _c.filter(function (k) { return k.includes('ETH'); })[0]] : null;
        var eth30d = lastTokens30d !== undefined
            ? lastTokens30d[(_d = Object.keys(lastTokens30d)) === null || _d === void 0 ? void 0 : _d.filter(function (k) { return k.includes('ETH'); })[0]]
            : null;
        return {
            name: protocol.name,
            logo: protocol.logo,
            mcap: protocol.mcap,
            stakedEth: eth,
            stakedEthInUsd: lastTokensInUsd[Object.keys(lastTokensInUsd).filter(function (k) { return k.includes('ETH'); })[0]],
            stakedEthPctChange7d: eth7d !== null ? ((eth - eth7d) / eth7d) * 100 : null,
            stakedEthPctChange30d: eth30d !== null ? ((eth - eth30d) / eth30d) * 100 : null
        };
    })
        .filter(function (p) { return p.stakedEth !== undefined; })
        .sort(function (a, b) { return b.stakedEth - a.stakedEth; });
    var stakedEthSum = tokenTvls.reduce(function (sum, a) { return sum + a.stakedEth; }, 0);
    var stakedEthInUsdSum = tokenTvls.reduce(function (sum, a) { return sum + a.stakedEthInUsd; }, 0);
    var tokensList = tokenTvls.map(function (p) {
        var _a, _b, _c, _d;
        var priceInfo = (_a = lsdRates.marketRates) === null || _a === void 0 ? void 0 : _a.find(function (i) { var _a, _b; return ((_a = i.sellTokenAddress) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === ((_b = lsdRates.expectedRates.find(function (r) { return r.name === p.name; })) === null || _b === void 0 ? void 0 : _b.address); });
        var expectedInfo = lsdRates.expectedRates.find(function (r) { return r.name === p.name; });
        var marketRate = (priceInfo === null || priceInfo === void 0 ? void 0 : priceInfo.buyAmount) / Math.pow(10, 18);
        var expectedRate = expectedInfo === null || expectedInfo === void 0 ? void 0 : expectedInfo.expectedRate;
        var ethPeg = (marketRate / expectedRate - 1) * 100;
        var pegInfo = expectedInfo === null || expectedInfo === void 0 ? void 0 : expectedInfo.peg;
        var mcaptvl = p.mcap / p.stakedEthInUsd;
        return __assign(__assign({}, p), { marketShare: (p.stakedEth / stakedEthSum) * 100, lsdSymbol: (_b = expectedInfo === null || expectedInfo === void 0 ? void 0 : expectedInfo.symbol) !== null && _b !== void 0 ? _b : null, ethPeg: p.name === 'SharedStake' ? null : ethPeg !== null && ethPeg !== void 0 ? ethPeg : null, pegInfo: pegInfo !== null && pegInfo !== void 0 ? pegInfo : null, marketRate: marketRate !== null && marketRate !== void 0 ? marketRate : null, expectedRate: expectedRate !== null && expectedRate !== void 0 ? expectedRate : null, mcapOverTvl: mcaptvl ? mcaptvl.toFixed(2) : null, apy: (_d = (_c = lsdApy.find(function (m) { return m.name === p.name; })) === null || _c === void 0 ? void 0 : _c.apy) !== null && _d !== void 0 ? _d : null });
    });
    var pieChartData = tokenTvls.map(function (p) { return ({ name: p.name, value: p.stakedEth }); });
    var tokens = tokensList.map(function (p) { return p.name; });
    return { areaChartData: areaChartData, pieChartData: pieChartData, tokensList: tokensList, tokens: tokens, stakedEthSum: stakedEthSum, stakedEthInUsdSum: stakedEthInUsdSum, lsdColors: lsdColors };
}
var templateObject_1, templateObject_2;
