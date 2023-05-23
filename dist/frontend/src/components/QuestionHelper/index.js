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
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var Tooltip_1 = __importDefault(require("../../components/Tooltip"));
var QuestionWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 36px;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tflex-shrink: 0;\n\n\t:hover,\n\t:focus-visible {\n\t\topacity: 0.7;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 36px;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tflex-shrink: 0;\n\n\t:hover,\n\t:focus-visible {\n\t\topacity: 0.7;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.text2;
});
function QuestionHelper(_a) {
    var text = _a.text, disabled = _a.disabled, textAlign = _a.textAlign, props = __rest(_a, ["text", "disabled", "textAlign"]);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ content: disabled ? null : text, style: { textAlign: textAlign } }, { children: (0, jsx_runtime_1.jsx)(QuestionWrapper, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(react_feather_1.HelpCircle, { size: 16 }) })) })));
}
exports.default = QuestionHelper;
var templateObject_1;
