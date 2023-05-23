"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolLink = exports.OtherProtocols = exports.Tab = exports.TabList = exports.GridContent = exports.TabLayout = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var ariakit_1 = require("ariakit");
var polished_1 = require("polished");
exports.TabLayout = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: ", ";\n\tborder: ", ";\n\tborder-radius: 12px;\n\tbox-shadow: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: ", ";\n\tborder: ", ";\n\tborder-radius: 12px;\n\tbox-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg7;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.divider;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
exports.GridContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tpadding: 24px;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-rows: repeat(2, auto);\n\t}\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tpadding: 24px;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-rows: repeat(2, auto);\n\t}\n"])));
exports.TabList = (0, styled_components_1.default)(ariakit_1.TabList)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\toverflow-x: auto;\n\tborder-bottom: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\toverflow-x: auto;\n\tborder-bottom: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.divider;
});
exports.Tab = (0, styled_components_1.default)(ariakit_1.Tab)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tpadding: 8px 24px;\n\twhite-space: nowrap;\n\tborder-bottom: 1px solid transparent;\n\n\t&[aria-selected='true'] {\n\t\tborder-bottom: ", ";\n\t}\n\n\t& + & {\n\t\tborder-left: ", ";\n\t}\n\n\t:first-child {\n\t\tborder-top-left-radius: 12px;\n\t}\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"], ["\n\tpadding: 8px 24px;\n\twhite-space: nowrap;\n\tborder-bottom: 1px solid transparent;\n\n\t&[aria-selected='true'] {\n\t\tborder-bottom: ", ";\n\t}\n\n\t& + & {\n\t\tborder-left: ", ";\n\t}\n\n\t:first-child {\n\t\tborder-top-left-radius: 12px;\n\t}\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"])), function (_a) {
    var color = _a.color;
    return '1px solid ' + color;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.divider;
}, function (_a) {
    var color = _a.color;
    return (0, polished_1.transparentize)(0.9, color);
});
exports.OtherProtocols = styled_components_1.default.nav(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tgrid-column: span 1;\n\tdisplay: flex;\n\toverflow-x: auto;\n\tbackground: ", ";\n\tfont-weight: 500;\n\tborder-radius: 12px 12px 0 0;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: span 2;\n\t}\n"], ["\n\tgrid-column: span 1;\n\tdisplay: flex;\n\toverflow-x: auto;\n\tbackground: ", ";\n\tfont-weight: 500;\n\tborder-radius: 12px 12px 0 0;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: span 2;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg7;
});
exports.ProtocolLink = styled_components_1.default.a(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tpadding: 8px 24px;\n\twhite-space: nowrap;\n\n\t& + & {\n\t\tborder-left: ", ";\n\t}\n\n\tborder-bottom: ", ";\n\n\t:first-child {\n\t\tborder-top-left-radius: 12px;\n\t}\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"], ["\n\tpadding: 8px 24px;\n\twhite-space: nowrap;\n\n\t& + & {\n\t\tborder-left: ", ";\n\t}\n\n\tborder-bottom: ", ";\n\n\t:first-child {\n\t\tborder-top-left-radius: 12px;\n\t}\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.divider;
}, function (_a) {
    var active = _a.active, color = _a.color, theme = _a.theme;
    return '1px solid ' + (active ? color : theme.divider);
}, function (_a) {
    var color = _a.color;
    return (0, polished_1.transparentize)(0.9, color);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
