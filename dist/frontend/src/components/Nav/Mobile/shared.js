"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Close = exports.Button = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground: #445ed0;\n\tcolor: #ffffff;\n\tpadding: 6px 10px;\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n"], ["\n\tbackground: #445ed0;\n\tcolor: #ffffff;\n\tpadding: 6px 10px;\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadow;
});
exports.Close = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin-left: auto;\n\tcolor: ", ";\n"], ["\n\tmargin-left: auto;\n\tcolor: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var templateObject_1, templateObject_2;
