"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionButton = exports.ButtonPlusDull = exports.ButtonFaded = exports.ButtonDark = exports.ButtonLight = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var polished_1 = require("polished");
var Base = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tfont-weight: 600;\n\tborder-radius: 12px;\n"], ["\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tfont-weight: 600;\n\tborder-radius: 12px;\n"])));
var Dull = (0, styled_components_1.default)(Base)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tbackground-color: rgba(255, 255, 255, 0.15);\n\tborder: 1px solid rgba(255, 255, 255, 0.15);\n\tcolor: black;\n\theight: 100%;\n\tfont-weight: 400;\n\t&:hover,\n\t:focus-visible {\n\t\tbackground-color: rgba(255, 255, 255, 0.25);\n\t\tborder-color: rgba(255, 255, 255, 0.25);\n\t}\n\n\t&:focus-visible {\n\t\tbox-shadow: 0 0 0 1pt rgba(255, 255, 255, 0.25);\n\t}\n\t&:active {\n\t\tbackground-color: rgba(255, 255, 255, 0.25);\n\t\tborder-color: rgba(255, 255, 255, 0.25);\n\t}\n"], ["\n\tbackground-color: rgba(255, 255, 255, 0.15);\n\tborder: 1px solid rgba(255, 255, 255, 0.15);\n\tcolor: black;\n\theight: 100%;\n\tfont-weight: 400;\n\t&:hover,\n\t:focus-visible {\n\t\tbackground-color: rgba(255, 255, 255, 0.25);\n\t\tborder-color: rgba(255, 255, 255, 0.25);\n\t}\n\n\t&:focus-visible {\n\t\tbox-shadow: 0 0 0 1pt rgba(255, 255, 255, 0.25);\n\t}\n\t&:active {\n\t\tbackground-color: rgba(255, 255, 255, 0.25);\n\t\tborder-color: rgba(255, 255, 255, 0.25);\n\t}\n"])));
function ButtonStyled(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (0, jsx_runtime_1.jsx)(Base, __assign({}, rest, { children: children }));
}
exports.default = ButtonStyled;
var ContentWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n"])));
exports.ButtonLight = (0, styled_components_1.default)(Base)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\tmin-width: fit-content;\n\tborder-radius: 12px;\n\twhite-space: nowrap;\n\n\ta {\n\t\tcolor: ", ";\n\t}\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"], ["\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\tmin-width: fit-content;\n\tborder-radius: 12px;\n\twhite-space: nowrap;\n\n\ta {\n\t\tcolor: ", ";\n\t}\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"])), function (_a) {
    var color = _a.color, theme = _a.theme;
    return (color ? (0, polished_1.transparentize)(0.9, color) : (0, polished_1.transparentize)(0.9, theme.primary1));
}, function (_a) {
    var color = _a.color, theme = _a.theme, useTextColor = _a.useTextColor;
    return useTextColor ? theme.text1 : color ? (0, polished_1.darken)(0.1, color) : theme.primary1;
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    return (color ? (0, polished_1.darken)(0.1, color) : theme.primary1);
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    return color ? (0, polished_1.transparentize)(0.8, color) : (0, polished_1.transparentize)(0.8, theme.primary1);
});
exports.ButtonDark = (0, styled_components_1.default)(Base)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tbackground-color: ", ";\n\tcolor: white;\n\tmin-width: fit-content;\n\tborder-radius: 12px;\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"], ["\n\tbackground-color: ", ";\n\tcolor: white;\n\tmin-width: fit-content;\n\tborder-radius: 12px;\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"])), function (_a) {
    var color = _a.color, theme = _a.theme;
    return (color ? color : theme.primary1);
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    return (color ? (0, polished_1.darken)(0.1, color) : (0, polished_1.darken)(0.1, theme.primary1));
});
exports.ButtonFaded = (0, styled_components_1.default)(Base)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tpadding: 8px 4px;\n\tbackground-color: ", ";\n\tcolor: (255, 255, 255, 0.5);\n\twhite-space: nowrap;\n\n\t:hover {\n\t\topacity: 0.5;\n\t}\n"], ["\n\tpadding: 8px 4px;\n\tbackground-color: ", ";\n\tcolor: (255, 255, 255, 0.5);\n\twhite-space: nowrap;\n\n\t:hover {\n\t\topacity: 0.5;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
});
function ButtonPlusDull(_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, children = _a.children, rest = __rest(_a, ["disabled", "children"]);
    return ((0, jsx_runtime_1.jsx)(Dull, __assign({ disabled: disabled }, rest, { children: (0, jsx_runtime_1.jsxs)(ContentWrapper, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Plus, { size: 16 }), (0, jsx_runtime_1.jsx)("div", __assign({ style: { display: 'flex', alignItems: 'center' } }, { children: children }))] }) })));
}
exports.ButtonPlusDull = ButtonPlusDull;
exports.OptionButton = styled_components_1.default.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tfont-weight: 500;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\tpadding: 6px;\n\tborder-radius: 6px;\n\tborder: 1px solid ", ";\n\tbackground: ", ";\n\tcolor: ", ";\n\n\t:hover {\n\t\tcursor: ", ";\n\t}\n"], ["\n\tfont-weight: 500;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\tpadding: 6px;\n\tborder-radius: 6px;\n\tborder: 1px solid ", ";\n\tbackground: ", ";\n\tcolor: ", ";\n\n\t:hover {\n\t\tcursor: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg4;
}, function (_a) {
    var active = _a.active, theme = _a.theme;
    return (active ? theme.bg3 : 'none');
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && 'pointer';
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
