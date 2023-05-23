"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoColumn = exports.ColumnCenter = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Column = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\t& + & {\n\t\tmargin-left: 20px;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\t& + & {\n\t\tmargin-left: 20px;\n\t}\n"])));
exports.ColumnCenter = (0, styled_components_1.default)(Column)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\twidth: 100%;\n\talign-items: center;\n"], ["\n\twidth: 100%;\n\talign-items: center;\n"])));
exports.AutoColumn = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-auto-rows: auto;\n\tgrid-row-gap: ", ";\n\tjustify-items: ", ";\n"], ["\n\tdisplay: grid;\n\tgrid-auto-rows: auto;\n\tgrid-row-gap: ", ";\n\tjustify-items: ", ";\n"])), function (_a) {
    var gap = _a.gap;
    return (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap;
}, function (_a) {
    var justify = _a.justify;
    return justify && justify;
});
exports.default = Column;
var templateObject_1, templateObject_2, templateObject_3;
