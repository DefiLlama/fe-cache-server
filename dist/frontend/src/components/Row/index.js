"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowFixed = exports.AutoRow = exports.RowFlat = exports.RowBetween = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var styled_components_2 = require("rebass/styled-components");
var Row = (0, styled_components_1.default)(styled_components_2.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100%;\n\tdisplay: flex;\n\tpadding: 0;\n\talign-items: center;\n\talign-items: ", ";\n\tpadding: ", ";\n\tborder: ", ";\n\tborder-radius: ", ";\n\tjustify-content: ", ";\n"], ["\n\twidth: 100%;\n\tdisplay: flex;\n\tpadding: 0;\n\talign-items: center;\n\talign-items: ", ";\n\tpadding: ", ";\n\tborder: ", ";\n\tborder-radius: ", ";\n\tjustify-content: ", ";\n"])), function (_a) {
    var align = _a.align;
    return align && align;
}, function (_a) {
    var padding = _a.padding;
    return padding;
}, function (_a) {
    var border = _a.border;
    return border;
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius;
}, function (_a) {
    var justify = _a.justify;
    return justify;
});
exports.RowBetween = (0, styled_components_1.default)(Row)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tjustify-content: space-between;\n"], ["\n\tjustify-content: space-between;\n"])));
exports.RowFlat = (0, styled_components_1.default)(styled_components_2.Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: flex-end;\n"], ["\n\tdisplay: flex;\n\talign-items: flex-end;\n"])));
exports.AutoRow = (0, styled_components_1.default)(Row)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tflex-wrap: ", ";\n\tmargin: -", ";\n\t& > * {\n\t\tmargin: ", " !important;\n\t}\n"], ["\n\tflex-wrap: ", ";\n\tmargin: -", ";\n\t& > * {\n\t\tmargin: ", " !important;\n\t}\n"])), function (_a) {
    var wrap = _a.wrap;
    return wrap !== null && wrap !== void 0 ? wrap : 'nowrap';
}, function (_a) {
    var gap = _a.gap;
    return gap;
}, function (_a) {
    var gap = _a.gap;
    return gap;
});
exports.RowFixed = (0, styled_components_1.default)(Row)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\twidth: fit-content;\n"], ["\n\twidth: fit-content;\n"])));
exports.default = Row;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
