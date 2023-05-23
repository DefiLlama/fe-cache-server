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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolPools = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var Common_1 = require("./Common");
var swr_1 = __importDefault(require("swr"));
var Table_1 = require("../../../components/Table");
var yield_1 = require("../../../api/categories/yield");
function ProtocolPools(_a) {
    var protocol = _a.protocol, data = _a.data;
    var _b = (0, swr_1.default)('yields-pools-list', function () {
        return (0, yield_1.getYieldPageData)().then(function (res) {
            var _a, _b, _c;
            return (_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.props) === null || _a === void 0 ? void 0 : _a.pools) === null || _b === void 0 ? void 0 : _b.filter(function (p) { return p.project === protocol && p.apy > 0; }).map(function (i) { return (__assign(__assign({}, i), { tvl: i.tvlUsd, pool: i.symbol, configID: i.pool, chains: [i.chain], project: i.projectName })); })) !== null && _c !== void 0 ? _c : null;
        });
    }), poolsList = _b.data, error = _b.error;
    return ((0, jsx_runtime_1.jsx)(Common_1.GridContent, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Number of pools tracked" }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsx)("span", { children: data.noOfPoolsTracked })] }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Average APY" }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsxs)("span", { children: [data.averageAPY.toFixed(2), "%"] })] }), !poolsList && poolsList !== null && !error ? ((0, jsx_runtime_1.jsx)("p", __assign({ style: { margin: '180px 0', textAlign: 'center' } }, { children: "Loading..." }))) : !poolsList ? ((0, jsx_runtime_1.jsx)("p", { style: { margin: '180px 0', textAlign: 'center' } })) : ((0, jsx_runtime_1.jsx)(Table_1.YieldsPoolsTable, { data: poolsList }))] }) }));
}
exports.ProtocolPools = ProtocolPools;
