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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalLiquidable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var liquidations_1 = require("../../utils/liquidations");
var utils_1 = require("./utils");
var context_1 = require("../../components/LiquidationsPage/context");
var DownloadButton_1 = require("./DownloadButton");
var TotalLiquidable = function (props) {
    var stackBy = (0, utils_1.useStackBy)();
    var selectedSeries = React.useContext(context_1.LiquidationsContext).selectedSeries;
    var totalLiquidable;
    if (!selectedSeries) {
        totalLiquidable = (0, liquidations_1.getReadableValue)(props.totalLiquidable);
    }
    else {
        var _totalLiquidable = Object.entries(selectedSeries)
            .filter(function (x) { return x[1]; })
            .map(function (x) { return x[0]; })
            .reduce(function (acc, cur) {
            return acc + props.totalLiquidables[stackBy][liquidations_1.PROTOCOL_NAMES_MAP_REVERSE[cur]];
        }, 0);
        totalLiquidable = (0, liquidations_1.getReadableValue)(_totalLiquidable);
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Total Liquidatable (USD)" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#4f8fea' } }, { children: ["$", totalLiquidable] })), (0, jsx_runtime_1.jsx)(DownloadButton_1.DownloadButtonSmol, { symbol: props.symbol })] }));
};
exports.TotalLiquidable = TotalLiquidable;
