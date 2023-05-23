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
exports.VolumeCharts = exports.FeesAndRevenueCharts = exports.ProtocolFeesRevenueVolumeCharts = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var utils_1 = require("../../../utils");
var charts_1 = require("./../../DexsAndFees/charts");
var ProtocolFeesRevenueVolumeCharts = function (_a) {
    var _b, _c;
    var data = _a.data;
    var metrics = Object.entries((_b = data.metrics) !== null && _b !== void 0 ? _b : {});
    var hasVersions = ((_c = data.otherProtocols) !== null && _c !== void 0 ? _c : []).length > 0;
    return ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsWrapper, __assign({ style: { background: 'none', border: 'none' } }, { children: metrics.map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], enabled = _b[1];
            return enabled && key !== 'medianApy' ? ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)(charts_1.ChartByType2, { chartType: "chain", protocolName: (0, utils_1.slug)(data.name), type: key }), hasVersions ? (0, jsx_runtime_1.jsx)(charts_1.ChartByType2, { chartType: "version", protocolName: (0, utils_1.slug)(data.name), type: key }) : null, key === 'fees' ? ((0, jsx_runtime_1.jsx)(charts_1.ChartByType2, { chartType: "chain", protocolName: (0, utils_1.slug)(data.name), type: key, breakdownChart: false })) : null] }, key + 'fees-revenue-volume-charts')) : null;
        }) })));
};
exports.ProtocolFeesRevenueVolumeCharts = ProtocolFeesRevenueVolumeCharts;
function FeesAndRevenueCharts(_a) {
    var _b;
    var data = _a.data;
    var hasVersions = ((_b = data.otherProtocols) !== null && _b !== void 0 ? _b : []).length > 0;
    return ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartsWrapper, __assign({ style: { background: 'none', border: 'none' } }, { children: [(0, jsx_runtime_1.jsx)(charts_1.ChartByType2, { chartType: "chain", protocolName: (0, utils_1.slug)(data.name), type: 'fees' }), hasVersions ? (0, jsx_runtime_1.jsx)(charts_1.ChartByType2, { chartType: "version", protocolName: (0, utils_1.slug)(data.name), type: 'fees' }) : null, (0, jsx_runtime_1.jsx)(charts_1.ChartByType2, { chartType: "chain", protocolName: (0, utils_1.slug)(data.name), type: 'fees', breakdownChart: false })] })));
}
exports.FeesAndRevenueCharts = FeesAndRevenueCharts;
function VolumeCharts(_a) {
    var _b;
    var data = _a.data;
    var hasVersions = ((_b = data.otherProtocols) !== null && _b !== void 0 ? _b : []).length > 0;
    return ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartsWrapper, __assign({ style: { background: 'none', border: 'none' } }, { children: [(0, jsx_runtime_1.jsx)(charts_1.ChartByType2, { chartType: "chain", protocolName: (0, utils_1.slug)(data.name), type: 'dexs' }), hasVersions ? (0, jsx_runtime_1.jsx)(charts_1.ChartByType2, { chartType: "version", protocolName: (0, utils_1.slug)(data.name), type: 'dexs' }) : null] })));
}
exports.VolumeCharts = VolumeCharts;
