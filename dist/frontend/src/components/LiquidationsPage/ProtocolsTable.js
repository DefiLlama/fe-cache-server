"use strict";
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
exports.ProtocolsTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var utils_1 = require("./utils");
var Table_1 = require("../../components/Table");
var ProtocolsTable = function (props) {
    var stackBy = (0, utils_1.useStackBy)();
    var data = React.useMemo(function () {
        return Object.keys(props.data.totalLiquidables[stackBy]).map(function (name) {
            var current = props.data.totalLiquidables[stackBy][name];
            var prev = props.prevData.totalLiquidables[stackBy][name];
            var changes24h = ((current - prev) / prev) * 100;
            var liquidableAmount = current;
            var dangerousAmount = props.data.dangerousPositionsAmounts[stackBy][name];
            // const positionsCount = props.data.positionsCount[stackBy][name]
            return {
                name: name,
                changes24h: changes24h,
                liquidableAmount: liquidableAmount,
                dangerousAmount: dangerousAmount
                // positionsCount
            };
        });
    }, [props.data.totalLiquidables, props.prevData.totalLiquidables, props.data.dangerousPositionsAmounts, stackBy]);
    return (0, jsx_runtime_1.jsx)(Table_1.LiquidatableProtocolsTable, { data: data });
};
exports.ProtocolsTable = ProtocolsTable;
