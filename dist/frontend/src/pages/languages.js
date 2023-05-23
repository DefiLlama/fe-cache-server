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
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dynamic_1 = __importDefault(require("next/dynamic"));
var layout_1 = __importDefault(require("../layout"));
var Search_1 = require("../components/Search");
var utils_1 = require("../utils");
var api_1 = require("../api");
var constants_1 = require("../constants");
var ProtocolAndPool_1 = require("../layout/ProtocolAndPool");
var perf_1 = require("../utils/perf");
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
function formatDataForChart(langs) {
    var langsUnique = new Set();
    var dominance = [];
    var formattedLangs = Object.entries(langs)
        .sort(function (a, b) { return Number(a[0]) - Number(b[0]); })
        .map(function (_a) {
        var _b = __read(_a, 2), date = _b[0], tvlByLang = _b[1];
        Object.keys(tvlByLang).map(function (l) { return langsUnique.add(l); });
        var daySum = Object.values(tvlByLang).reduce(function (t, a) { return t + a; }, 0);
        var shares = {};
        for (var lang in tvlByLang) {
            shares[lang] = (0, utils_1.getDominancePercent)(tvlByLang[lang], daySum);
        }
        dominance.push(__assign({ date: date }, shares));
        return __assign(__assign({}, tvlByLang), { date: date });
    });
    return {
        formatted: formattedLangs,
        unique: Array.from(langsUnique),
        dominance: dominance
    };
}
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('languages', function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, _a, langsUnique, formattedLangs, langsDominance, _b, osUnique, osLangs, osDominance, colors;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, fetch(constants_1.LANGS_API).then(function (r) { return r.json(); })];
            case 1:
                data = _c.sent();
                _a = formatDataForChart(data.chart), langsUnique = _a.unique, formattedLangs = _a.formatted, langsDominance = _a.dominance;
                _b = formatDataForChart(data.sumDailySolanaOpenSourceTvls), osUnique = _b.unique, osLangs = _b.formatted, osDominance = _b.dominance;
                colors = {};
                langsUnique.forEach(function (l, index) {
                    colors[l] = (0, utils_1.getColorFromNumber)(index, 6);
                });
                return [2 /*return*/, {
                        props: {
                            langs: formattedLangs,
                            langsUnique: langsUnique,
                            langsDominance: langsDominance,
                            osUnique: osUnique,
                            osLangs: osLangs,
                            osDominance: osDominance,
                            colors: colors
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function Protocols(_a) {
    var langs = _a.langs, langsUnique = _a.langsUnique, langsDominance = _a.langsDominance, osUnique = _a.osUnique, osLangs = _a.osLangs, osDominance = _a.osDominance, colors = _a.colors;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Languages - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Home', name: 'Languages', hideOptions: true } }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.SectionHeader, { children: "Breakdown by Smart Contract Languages" }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartsWrapper, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: langs, title: "TVL", customLegendName: "Language", customLegendOptions: langsUnique, valueSymbol: "$", stacks: langsUnique, stackColors: colors }) }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: langsDominance, title: "TVL Dominance", customLegendName: "Language", customLegendOptions: langsUnique, valueSymbol: "%", stacks: langsUnique, stackColors: colors }) })] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.SectionHeader, { children: "Open/Closed Source breakdown of solana protocols" }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsWrapper, { children: (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: osDominance, title: "", valueSymbol: "%", stacks: osUnique, stackColors: sourceTypeColor, hideDefaultLegend: true }) }) })] })));
}
exports.default = Protocols;
var sourceTypeColor = {
    opensource: '#f85149',
    closedsource: '#3fb950'
};
