"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColoredAPY = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ColoredAPY = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n\n\t&[data-variant='supply'] {\n\t\tcolor: #4f8fea;\n\t}\n\n\t&[data-variant='borrow'] {\n\t\tcolor: #e59421;\n\t}\n\n\t&[data-variant='positive'] {\n\t\tcolor: #30c338;\n\t}\n"], ["\n\tcolor: ", ";\n\n\t&[data-variant='supply'] {\n\t\tcolor: #4f8fea;\n\t}\n\n\t&[data-variant='borrow'] {\n\t\tcolor: #e59421;\n\t}\n\n\t&[data-variant='positive'] {\n\t\tcolor: #30c338;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var templateObject_1;
