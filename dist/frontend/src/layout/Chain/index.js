"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fallback = exports.TableHeader = exports.ChartWrapper = exports.LinksWrapper = exports.Wrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Filters_1 = require("../../components/Filters");
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 32px;\n\tborder-radius: 12px;\n\tisolation: isolate;\n\n\t@media screen and (min-width: ", ") {\n\t\tpadding: 16px;\n\t\tbackground: ", ";\n\t\tbox-shadow: ", ";\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: auto 1fr;\n\t\tgap: 48px;\n\t}\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 32px;\n\tborder-radius: 12px;\n\tisolation: isolate;\n\n\t@media screen and (min-width: ", ") {\n\t\tpadding: 16px;\n\t\tbackground: ", ";\n\t\tbox-shadow: ", ";\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: auto 1fr;\n\t\tgap: 48px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpSm;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(7, 14, 15, 0.7)' : '#fbfbfb');
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
exports.LinksWrapper = (0, styled_components_1.default)(Filters_1.RowLinksWrapper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tgrid-column: 1 / -1;\n\tmargin-bottom: 0;\n\n\t@media screen and (max-width: ", ") {\n\t\tbutton:only-child {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"], ["\n\tgrid-column: 1 / -1;\n\tmargin-bottom: 0;\n\n\t@media screen and (max-width: ", ") {\n\t\tbutton:only-child {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpSm;
});
exports.ChartWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tgrid-column: 1 / -1;\n\tmin-height: 360px;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: span 1;\n\t}\n"], ["\n\tgrid-column: 1 / -1;\n\tmin-height: 360px;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: span 1;\n\t}\n"])));
exports.TableHeader = styled_components_1.default.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tfont-weight: 700;\n\tfont-size: 1.25rem;\n\tmargin: 0 0 -24px;\n\tgrid-column: 1 / -1;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmargin: 0 16px -24px;\n\t}\n"], ["\n\tfont-weight: 700;\n\tfont-size: 1.25rem;\n\tmargin: 0 0 -24px;\n\tgrid-column: 1 / -1;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmargin: 0 16px -24px;\n\t}\n"])));
exports.Fallback = styled_components_1.default.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tpadding: 1.25rem;\n\ttext-align: center;\n\tbackground: ", ";\n\tborder-radius: 16px;\n\tgrid-column: 1 / -1;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmargin: 0 16px;\n\t}\n"], ["\n\tpadding: 1.25rem;\n\ttext-align: center;\n\tbackground: ", ";\n\tborder-radius: 16px;\n\tgrid-column: 1 / -1;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmargin: 0 16px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#070E0F' : '#fff');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
