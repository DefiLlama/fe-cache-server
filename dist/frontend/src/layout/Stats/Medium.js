"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatWrapper = exports.StatsSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.StatsSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tborder-radius: 12px;\n\tbackground: ", ";\n\tborder: ", ";\n\tbox-shadow: ", ";\n\tposition: relative;\n\tisolation: isolate;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: auto 1fr;\n\t}\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tborder-radius: 12px;\n\tbackground: ", ";\n\tborder: ", ";\n\tbox-shadow: ", ";\n\tposition: relative;\n\tisolation: isolate;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: auto 1fr;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.divider;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
exports.StatWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tgap: 20px;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tgap: 20px;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n"])));
var templateObject_1, templateObject_2;
