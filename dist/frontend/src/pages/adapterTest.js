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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var dynamic_1 = __importDefault(require("next/dynamic"));
var layout_1 = __importDefault(require("../layout"));
var ProtocolAndPool_1 = require("../layout/ProtocolAndPool");
var Announcement_1 = __importDefault(require("../components/Announcement"));
var router_1 = require("next/router");
function decode(str) {
    var _a;
    var digit = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';
    var fromB64 = function (x) { return x.split('').reduce(function (s, v) { return s * 64 + digit.indexOf(v); }, 0); };
    return (_a = str.match(/.{1,4}/g)) === null || _a === void 0 ? void 0 : _a.map(function (g) { return fromB64(g.replaceAll('=', '')); });
}
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../components/ECharts/BarChart')); }); }, {
    ssr: false
});
function AdapterTest() {
    var _a, _b, _c;
    var router = (0, router_1.useRouter)();
    var start = Number((_a = router.query) === null || _a === void 0 ? void 0 : _a.start);
    var chartData = decode((_c = (_b = router.query) === null || _b === void 0 ? void 0 : _b.data) !== null && _c !== void 0 ? _c : 'W10=').map(function (u, i) { return [start + i * (24 * 3600), u]; });
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Tests", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Announcement_1.default, { children: "This page is just used for tests, don't trust anything on this page" }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsWrapper, { children: (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(BarChart, { chartData: chartData, title: "Data" }) }) })] })));
}
exports.default = AdapterTest;
