"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListHeader = exports.ListOptions = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ListOptions = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\toverflow: hidden;\n\tmargin: 0 0 -20px;\n\n\tbutton {\n\t\tfont-weight: 600;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\toverflow: hidden;\n\tmargin: 0 0 -20px;\n\n\tbutton {\n\t\tfont-weight: 600;\n\t}\n"])));
exports.ListHeader = styled_components_1.default.h3(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tfont-size: 1.125rem;\n\tcolor: ", ";\n\tfont-weight: 500;\n\twhite-space: nowrap;\n\n\t@media screen and (max-width: 40rem) {\n\t\tfont-size: 1rem;\n\t}\n"], ["\n\tfont-size: 1.125rem;\n\tcolor: ", ";\n\tfont-weight: 500;\n\twhite-space: nowrap;\n\n\t@media screen and (max-width: 40rem) {\n\t\tfont-size: 1rem;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var templateObject_1, templateObject_2;
