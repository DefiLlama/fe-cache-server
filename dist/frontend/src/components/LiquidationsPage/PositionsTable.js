"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
exports.PositionsTable = exports.SmolHints = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Table_1 = require("../../components/Table");
var TableNoticeWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin-bottom: -1rem;\n"], ["\n\tmargin-bottom: -1rem;\n"])));
exports.SmolHints = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 6px;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tmargin-top: -1rem;\n\topacity: 0.6;\n"], ["\n\tdisplay: flex;\n\tgap: 6px;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tmargin-top: -1rem;\n\topacity: 0.6;\n"])));
var PositionsTable = function (props) {
    var rows = React.useMemo(function () {
        return props.data.topPositions.map(function (p) { return ({
            chainName: p.chain,
            protocolName: p.protocol,
            value: p.collateralValue,
            amount: p.collateralAmount,
            liqPrice: p.liqPrice,
            owner: {
                displayName: p.displayName,
                url: p.url
            }
        }); });
    }, [props.data]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TableNoticeWrapper, { children: (0, jsx_runtime_1.jsx)(exports.SmolHints, { children: (0, jsx_runtime_1.jsxs)("i", { children: ["Displaying the largest ", rows.length, " positions out of ", props.data.totalPositions, " in total"] }) }) }), (0, jsx_runtime_1.jsx)(Table_1.LiquidatablePositionsTable, { data: rows })] }));
};
exports.PositionsTable = PositionsTable;
var templateObject_1, templateObject_2;
