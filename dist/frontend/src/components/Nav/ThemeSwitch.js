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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var IconWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\topacity: ", ";\n\n\t:hover {\n\t\topacity: 1;\n\t}\n"], ["\n\topacity: ", ";\n\n\t:hover {\n\t\topacity: 1;\n\t}\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? 0.8 : 0.4);
});
var Wrapper = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: none;\n\twidth: fit-content;\n\tcolor: ", ";\n\tpadding: 0;\n\n\t@media (min-width: ", ") {\n\t\tdisplay: flex;\n\t}\n"], ["\n\tdisplay: none;\n\twidth: fit-content;\n\tcolor: ", ";\n\tpadding: 0;\n\n\t@media (min-width: ", ") {\n\t\tdisplay: flex;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var bpLg = _a.theme.bpLg;
    return bpLg;
});
function ThemeSwitch(_a) {
    var isActive = _a.isActive, toggle = _a.toggle;
    return ((0, jsx_runtime_1.jsxs)(Wrapper, __assign({ onClick: toggle }, { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(IconWrapper, __assign({ isActive: !isActive }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.Sun, { size: 20 }) })) }), (0, jsx_runtime_1.jsx)("span", __assign({ style: { padding: '0 .5rem' } }, { children: ' / ' })), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(IconWrapper, __assign({ isActive: isActive }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.Moon, { size: 20 }) })) })] })));
}
exports.default = ThemeSwitch;
var templateObject_1, templateObject_2;
