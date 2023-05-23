"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatInARow = exports.Stat = exports.StatsWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.StatsWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: ", ";\n\tgrid-column: span 1;\n\tpadding: 0 16px;\n\n\thr {\n\t\tmargin: 20px 0;\n\t\tborder: 1px solid hsl(180deg 2% 51% / 10%);\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tmin-width: 380px;\n\t\tpadding: 0 0 0 36px;\n\n\t\thr {\n\t\t\tmargin: 32px 0;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: ", ";\n\tgrid-column: span 1;\n\tpadding: 0 16px;\n\n\thr {\n\t\tmargin: 20px 0;\n\t\tborder: 1px solid hsl(180deg 2% 51% / 10%);\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tmin-width: 380px;\n\t\tpadding: 0 0 0 36px;\n\n\t\thr {\n\t\t\tmargin: 32px 0;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
exports.Stat = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tfont-size: 1.5rem;\n\tfont-weight: 600;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\t& > *:first-child {\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\t& > *:nth-child(2) {\n\t\tfont-family: var(--font-jetbrains);\n\t\tmin-height: 2rem;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 16px;\n\t\tjustify-content: space-between;\n\t\tflex-wrap: wrap;\n\t}\n\n\t& > *[data-default-style='true'] {\n\t\tfont-family: var(--font-inter);\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\tmargin: -2px 0;\n\t}\n"], ["\n\tfont-size: 1.5rem;\n\tfont-weight: 600;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\t& > *:first-child {\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\t& > *:nth-child(2) {\n\t\tfont-family: var(--font-jetbrains);\n\t\tmin-height: 2rem;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 16px;\n\t\tjustify-content: space-between;\n\t\tflex-wrap: wrap;\n\t}\n\n\t& > *[data-default-style='true'] {\n\t\tfont-family: var(--font-inter);\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\tmargin: -2px 0;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#cccccc' : '#545757');
});
exports.StatInARow = styled_components_1.default.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tfont-weight: 400;\n\tfont-size: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\n\t& > *:first-child {\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\t& > *:nth-child(2) {\n\t\tfont-family: var(--font-jetbrains);\n\t\tfont-weight: 600;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 16px;\n\t\tjustify-content: space-between;\n\t\tflex-wrap: wrap;\n\t}\n\n\t& > *[data-default-style='true'] {\n\t\tfont-family: var(--font-inter);\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\tmargin: -2px 0;\n\t}\n"], ["\n\tfont-weight: 400;\n\tfont-size: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\n\t& > *:first-child {\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\t& > *:nth-child(2) {\n\t\tfont-family: var(--font-jetbrains);\n\t\tfont-weight: 600;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 16px;\n\t\tjustify-content: space-between;\n\t\tflex-wrap: wrap;\n\t}\n\n\t& > *[data-default-style='true'] {\n\t\tfont-family: var(--font-inter);\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\tmargin: -2px 0;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#cccccc' : '#545757');
});
var templateObject_1, templateObject_2, templateObject_3;
