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
exports.TreasuryChart = exports.Treasury = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dynamic_1 = __importDefault(require("next/dynamic"));
var client_1 = require("../../../api/categories/protocols/client");
var ProtocolChart_1 = require("../../../components/ECharts/ProtocolChart/ProtocolChart");
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var utils_1 = require("./utils");
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
function Treasury(_a) {
    var protocolName = _a.protocolName;
    return ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, __assign({ id: "treasury" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Treasury" }), (0, jsx_runtime_1.jsx)(exports.TreasuryChart, { protocolName: protocolName })] })));
}
exports.Treasury = Treasury;
var TreasuryChart = function (_a) {
    var _b, _c;
    var protocolName = _a.protocolName;
    var _d = (0, client_1.useFetchProtocolTreasury)(protocolName), data = _d.data, loading = _d.loading;
    if (loading) {
        return (0, jsx_runtime_1.jsx)("p", __assign({ style: { margin: '180px 0', textAlign: 'center' } }, { children: "Loading..." }));
    }
    var tokens = Object.entries((_b = data === null || data === void 0 ? void 0 : data.chainTvls) !== null && _b !== void 0 ? _b : {})
        .filter(function (chain) { return !chain[0].endsWith('-OwnTokens'); })
        .reduce(function (acc, curr) {
        var _a;
        if (((_a = curr[1].tokensInUsd) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            var tokens_1 = curr[1].tokensInUsd.slice(-1)[0].tokens;
            for (var token in tokens_1) {
                acc = __spreadArray(__spreadArray([], __read(acc), false), [{ name: token, value: tokens_1[token] }], false);
            }
        }
        return acc;
    }, [])
        .sort(function (a, b) { return b.value - a.value; });
    var top10Tokens = tokens.slice(0, 11);
    if (tokens.length > 10) {
        top10Tokens.push({ name: 'Others', value: tokens.slice(11).reduce(function (acc, curr) { return (acc += curr.value); }, 0) });
    }
    if (!loading && (!data || top10Tokens.length === 0)) {
        return (0, jsx_runtime_1.jsx)("p", __assign({ style: { margin: '180px 0', textAlign: 'center' } }, { children: "Loading..." }));
    }
    var historicalTreasury = (0, ProtocolChart_1.formatProtocolsTvlChartData)({
        historicalChainTvls: (_c = data === null || data === void 0 ? void 0 : data.chainTvls) !== null && _c !== void 0 ? _c : [],
        extraTvlEnabled: {}
    });
    var _e = (0, utils_1.buildProtocolAddlChartsData)({
        protocolData: data,
        extraTvlsEnabled: {}
    }), tokenBreakdown = _e.tokenBreakdown, tokenBreakdownUSD = _e.tokenBreakdownUSD, tokensUnique = _e.tokensUnique;
    return ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartsWrapper, __assign({ style: { background: 'none', border: 'none', padding: 0 } }, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ style: { minHeight: '320px' } }, { children: (0, jsx_runtime_1.jsx)(PieChart, { chartData: top10Tokens }) })), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ style: { minHeight: '320px' } }, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: historicalTreasury, title: "Historical Treasury", valueSymbol: "$" }) })), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ style: { minHeight: '320px' } }, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: tokenBreakdown, title: "Tokens Breakdown", stacks: tokensUnique }) })), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ style: { minHeight: '320px' } }, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: tokenBreakdownUSD, title: "Tokens (USD)", stacks: tokensUnique, valueSymbol: "$" }) }))] })));
};
exports.TreasuryChart = TreasuryChart;
