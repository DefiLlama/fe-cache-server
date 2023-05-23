"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetAllButton = exports.DropdownsWrapper = exports.SearchWrapper = exports.Wrapper = exports.Header = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Header = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tbackground: ", ";\n\tpadding: 16px;\n\tborder-radius: 12px 12px 0 0;\n\tborder: 1px solid ", ";\n\tborder-bottom: 0;\n\n\t& > * {\n\t\tfont-size: 0.875rem;\n\t\tfont-weight: 400;\n\t}\n\n\tp {\n\t\tcolor: #646466;\n\t}\n\n\tbutton {\n\t\tmargin-left: auto;\n\t\tcolor: ", ";\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tbackground: ", ";\n\tpadding: 16px;\n\tborder-radius: 12px 12px 0 0;\n\tborder: 1px solid ", ";\n\tborder-bottom: 0;\n\n\t& > * {\n\t\tfont-size: 0.875rem;\n\t\tfont-weight: 400;\n\t}\n\n\tp {\n\t\tcolor: #646466;\n\t}\n\n\tbutton {\n\t\tmargin-left: auto;\n\t\tcolor: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'black' : 'white');
}, function (_a) {
    var theme = _a.theme;
    return theme.divider;
}, function (_a) {
    var theme = _a.theme;
    return theme.link;
});
exports.Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\tpadding: 20px 16px 24px;\n\tbackground: ", ";\n\tborder-radius: 0 0 12px 12px;\n\tborder: 1px solid ", ";\n\tborder-top: 0;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\tpadding: 20px 16px 24px;\n\tbackground: ", ";\n\tborder-radius: 0 0 12px 12px;\n\tborder: 1px solid ", ";\n\tborder-top: 0;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(246, 246, 246, 0.6)');
}, function (_a) {
    var theme = _a.theme;
    return theme.divider;
});
exports.SearchWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\twidth: 100%;\n\n\t& > * {\n\t\tgap: 8px;\n\t\tflex: 1;\n\t}\n\n\t& > * {\n\t\t& > *[data-searchicon='true'] {\n\t\t\ttop: 14px;\n\t\t\tright: 16px;\n\t\t}\n\t}\n\n\t@media (min-width: ", ") {\n\t\tflex-direction: row;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\twidth: 100%;\n\n\t& > * {\n\t\tgap: 8px;\n\t\tflex: 1;\n\t}\n\n\t& > * {\n\t\t& > *[data-searchicon='true'] {\n\t\t\ttop: 14px;\n\t\t\tright: 16px;\n\t\t}\n\t}\n\n\t@media (min-width: ", ") {\n\t\tflex-direction: row;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpMed;
});
exports.DropdownsWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 12px;\n\tflex-wrap: wrap;\n\n\t@media screen and (max-width: 30rem) {\n\t\t& > *:first-child {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\tgap: 12px;\n\tflex-wrap: wrap;\n\n\t@media screen and (max-width: 30rem) {\n\t\t& > *:first-child {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"])));
exports.ResetAllButton = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\ttext-decoration: underline;\n\n\t&[data-variant='secondary'] {\n\t\tpadding: 8px 12px;\n\t\tborder-radius: 8px;\n\t\tborder: none;\n\t\tbackground: ", ";\n\t\ttext-decoration: none;\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"], ["\n\ttext-decoration: underline;\n\n\t&[data-variant='secondary'] {\n\t\tpadding: 8px 12px;\n\t\tborder-radius: 8px;\n\t\tborder: none;\n\t\tbackground: ", ";\n\t\ttext-decoration: none;\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
