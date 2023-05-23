"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.List = exports.Input = void 0;
var combobox_1 = require("ariakit/combobox");
var polished_1 = require("polished");
var styled_components_1 = __importDefault(require("styled-components"));
exports.Input = (0, styled_components_1.default)(combobox_1.Combobox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont: inherit;\n\tpadding: 8px 12px;\n\tborder: ", ";\n\tborder-radius: 8px;\n\tmargin: 12px 12px 0;\n\n\t:focus-visible {\n\t\toutline: ", ";\n\t}\n"], ["\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont: inherit;\n\tpadding: 8px 12px;\n\tborder: ", ";\n\tborder-radius: 8px;\n\tmargin: 12px 12px 0;\n\n\t:focus-visible {\n\t\toutline: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#000' : '#fff');
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text4;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text1;
});
exports.List = (0, styled_components_1.default)(combobox_1.ComboboxList)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\tpadding: 16px 0;\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 8px 0;\n\t\tgap: 0;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\tpadding: 16px 0;\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 8px 0;\n\t\tgap: 0;\n\t}\n"])));
exports.Item = (0, styled_components_1.default)(combobox_1.ComboboxItem)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tflex-shrink: 0;\n\tpadding: 8px 12px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: none;\n\tborder: none;\n\ttext-align: start;\n\n\t@media screen and (min-width: 640px) {\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-active-item] {\n\t\t\toutline: none;\n\t\t\tbackground-color: ", ";\n\t\t}\n\t}\n"], ["\n\tflex-shrink: 0;\n\tpadding: 8px 12px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: none;\n\tborder: none;\n\ttext-align: start;\n\n\t@media screen and (min-width: 640px) {\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-active-item] {\n\t\t\toutline: none;\n\t\t\tbackground-color: ", ";\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (0, polished_1.transparentize)(0.8, theme.primary1);
});
var templateObject_1, templateObject_2, templateObject_3;
