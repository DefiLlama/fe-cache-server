"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersWrapper = exports.Toggle = exports.Denomination = exports.Filters = void 0;
var polished_1 = require("polished");
var styled_components_1 = __importDefault(require("styled-components"));
exports.Filters = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tpadding: 4px;\n\tbackground-color: ", ";\n\tborder-radius: 12px;\n\tflex-wrap: nowrap;\n\toverflow-x: auto;\n\tmax-width: calc(100vw - 64px);\n\twidth: fit-content;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tpadding: 4px;\n\tbackground-color: ", ";\n\tborder-radius: 12px;\n\tflex-wrap: nowrap;\n\toverflow-x: auto;\n\tmax-width: calc(100vw - 64px);\n\twidth: fit-content;\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return (color ? (0, polished_1.transparentize)(0.8, color) : (0, polished_1.transparentize)(0.8, theme.primary1));
});
exports.Denomination = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: inline-block;\n\tfont-weight: 500;\n\tfont-size: 0.875rem;\n\tborder-radius: 10px;\n\tbackground: ", ";\n\tpadding: 6px 8px;\n\tcolor: ", ";\n"], ["\n\tdisplay: inline-block;\n\tfont-weight: 500;\n\tfont-size: 0.875rem;\n\tborder-radius: 10px;\n\tbackground: ", ";\n\tpadding: 6px 8px;\n\tcolor: ", ";\n"])), function (_a) {
    var theme = _a.theme, active = _a.active;
    return active ? (0, polished_1.transparentize)(0.5, theme.mode === 'dark' ? '#000' : '#fff') : 'none';
}, function (_a) {
    var theme = _a.theme, active = _a.active;
    return active
        ? theme.mode === 'dark'
            ? '#fff'
            : '#000'
        : theme.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.6)'
            : 'rgba(0, 0, 0, 0.6)';
});
exports.Toggle = styled_components_1.default.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcursor: pointer;\n\n\tinput {\n\t\tposition: absolute;\n\t\twidth: 1em;\n\t\theight: 1em;\n\t\topacity: 0.00001;\n\t}\n\n\tspan[data-wrapper='true'] {\n\t\tposition: relative;\n\t\tz-index: 1;\n\t\tpadding: 8px 12px;\n\t\tbackground: red;\n\t\tborder-radius: 10px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-wrap: nowrap;\n\t\tgap: 4px;\n\t\tbackground: ", ";\n\t}\n\n\tinput:checked + span[data-wrapper='true'] {\n\t\tbackground: ", ";\n\t}\n\n\tinput:focus-visible {\n\t\toutline: none;\n\t}\n\n\tinput:focus-visible + span[data-wrapper='true'] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n"], ["\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcursor: pointer;\n\n\tinput {\n\t\tposition: absolute;\n\t\twidth: 1em;\n\t\theight: 1em;\n\t\topacity: 0.00001;\n\t}\n\n\tspan[data-wrapper='true'] {\n\t\tposition: relative;\n\t\tz-index: 1;\n\t\tpadding: 8px 12px;\n\t\tbackground: red;\n\t\tborder-radius: 10px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-wrap: nowrap;\n\t\tgap: 4px;\n\t\tbackground: ", ";\n\t}\n\n\tinput:checked + span[data-wrapper='true'] {\n\t\tbackground: ", ";\n\t}\n\n\tinput:focus-visible {\n\t\toutline: none;\n\t}\n\n\tinput:focus-visible + span[data-wrapper='true'] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n"])), function (_a) {
    var backgroundColor = _a.backgroundColor, theme = _a.theme;
    return backgroundColor ? (0, polished_1.transparentize)(0.8, backgroundColor) : (0, polished_1.transparentize)(0.8, theme.primary1);
}, function (_a) {
    var backgroundColor = _a.backgroundColor, theme = _a.theme;
    return backgroundColor ? (0, polished_1.transparentize)(0.4, backgroundColor) : (0, polished_1.transparentize)(0.4, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text1;
});
exports.FiltersWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n\tgap: 16px;\n\tmargin: 0 16px;\n\n\t@media screen and (min-width: ", ") {\n\t\tflex-wrap: wrap;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n\tgap: 16px;\n\tmargin: 0 16px;\n\n\t@media screen and (min-width: ", ") {\n\t\tflex-wrap: wrap;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t}\n"])), function (_a) {
    var bpSm = _a.theme.bpSm;
    return bpSm;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
