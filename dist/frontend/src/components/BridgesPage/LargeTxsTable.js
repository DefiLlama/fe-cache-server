"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmolHints = exports.LargeTxsTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var Table_1 = require("../../components/Table");
var DownloadButton_1 = require("./DownloadButton");
var TableNoticeWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin-bottom: -1rem;\n"], ["\n\tmargin-bottom: -1rem;\n"])));
var LargeTxsTable = function (props) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TableNoticeWrapper, { children: (0, jsx_runtime_1.jsxs)(exports.SmolHints, { children: [(0, jsx_runtime_1.jsxs)("i", { children: ["Displaying ", props.data.length, " transactions from the the past ", props.chain === 'All' ? "1d" : "7d"] }), (0, jsx_runtime_1.jsx)(DownloadButton_1.LargeTxDownloadButton, { data: props.data })] }) }), (0, jsx_runtime_1.jsx)(Table_1.BridgesLargeTxsTable, { data: props.data })] }));
};
exports.LargeTxsTable = LargeTxsTable;
exports.SmolHints = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 6px;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: center;\n"], ["\n\tdisplay: flex;\n\tgap: 6px;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: center;\n"])));
var templateObject_1, templateObject_2;
