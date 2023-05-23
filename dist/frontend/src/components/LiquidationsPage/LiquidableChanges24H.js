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
exports.LiquidableChanges24H = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var context_1 = require("../../components/LiquidationsPage/context");
var liquidations_1 = require("../../utils/liquidations");
var utils_1 = require("./utils");
var LiquidableChanges24H = function (props) {
    var stackBy = (0, utils_1.useStackBy)();
    var selectedSeries = React.useContext(context_1.LiquidationsContext).selectedSeries;
    var liquidableChanges = React.useMemo(function () { return getLiquidableChangesRatio(props.data, props.prevData, stackBy, selectedSeries); }, [props.data, props.prevData, stackBy, selectedSeries]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Liquidatable value change (24h)" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#fd3c99' } }, { children: [(liquidableChanges * 100).toFixed(1) || 0, "%"] }))] }));
};
exports.LiquidableChanges24H = LiquidableChanges24H;
var getLiquidableChangesRatio = function (data, prevData, stackBy, selectedSeries) {
    var current = 0;
    var prev = 0;
    if (!selectedSeries) {
        if (stackBy === 'chains') {
            Object.keys(data.totalLiquidables.chains).forEach(function (chain) {
                if (!prevData.totalLiquidables.chains[chain]) {
                    return;
                }
                current += data.totalLiquidables.chains[chain];
                prev += prevData.totalLiquidables.chains[chain];
            });
        }
        else {
            Object.keys(data.totalLiquidables.protocols).forEach(function (protocol) {
                if (!prevData.totalLiquidables.protocols[protocol]) {
                    return;
                }
                current += data.totalLiquidables.protocols[protocol];
                prev += prevData.totalLiquidables.protocols[protocol];
            });
        }
    }
    else {
        if (stackBy === 'chains') {
            Object.keys(selectedSeries)
                .filter(function (chain) { return selectedSeries[chain]; })
                .forEach(function (chain) {
                var _chain = liquidations_1.PROTOCOL_NAMES_MAP_REVERSE[chain];
                if (!prevData.totalLiquidables.chains[_chain]) {
                    return;
                }
                current += data.totalLiquidables.chains[_chain];
                prev += prevData.totalLiquidables.chains[_chain];
            });
        }
        else {
            Object.keys(selectedSeries)
                .filter(function (protocol) { return selectedSeries[protocol]; })
                .forEach(function (protocol) {
                var _protocol = liquidations_1.PROTOCOL_NAMES_MAP_REVERSE[protocol];
                if (!prevData.totalLiquidables.protocols[_protocol]) {
                    return;
                }
                current += data.totalLiquidables.protocols[_protocol];
                prev += prevData.totalLiquidables.protocols[_protocol];
            });
        }
    }
    var changesRatio = (current - prev) / prev;
    return isNaN(changesRatio) ? 0 : changesRatio;
};
