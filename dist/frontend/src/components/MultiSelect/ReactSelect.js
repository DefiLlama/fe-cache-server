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
var react_select_1 = __importDefault(require("react-select"));
var styled_components_1 = __importDefault(require("styled-components"));
var Wrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--background: ", ";\n\t--menu-background: ", ";\n\t--color: ", ";\n\t--placeholder: ", ";\n\t--bg-hover: ", ";\n\t--option-bg: ", ";\n\n\t& > * > * {\n\t\tbox-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),\n\t\t\t0px 0px 1px rgba(0, 0, 0, 0.04);\n\t\tborder-radius: 12px;\n\t}\n"], ["\n\t--background: ", ";\n\t--menu-background: ", ";\n\t--color: ", ";\n\t--placeholder: ", ";\n\t--bg-hover: ", ";\n\t--option-bg: ", ";\n\n\t& > * > * {\n\t\tbox-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),\n\t\t\t0px 0px 1px rgba(0, 0, 0, 0.04);\n\t\tborder-radius: 12px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.text3;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
});
var customStyles = {
    control: function (provided) { return (__assign(__assign({}, provided), { background: 'var(--background)', padding: '4px 2px', borderRadius: '12px', border: 'none', color: 'var(--color)', boxShadow: '0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)', margin: 0, zIndex: 0 })); },
    input: function (provided) { return (__assign(__assign({}, provided), { color: 'var(--color)' })); },
    menu: function (provided) { return (__assign(__assign({}, provided), { background: 'var(--menu-background)', zIndex: 10 })); },
    option: function (provided, state) { return (__assign(__assign({}, provided), { color: state.isActive ? 'black' : 'var(--color)' })); },
    multiValue: function (provided) { return (__assign(__assign({}, provided), { fontFamily: 'inherit', background: 'var(--option-bg)', padding: '2px' })); },
    multiValueLabel: function (styles) { return (__assign(__assign({}, styles), { color: 'var(--color)' })); },
    placeholder: function (provided) { return (__assign(__assign({}, provided), { color: 'var(--placeholder)' })); },
    singleValue: function (provided, state) { return (__assign(__assign({}, provided), { color: 'var(--color)' })); }
};
var ReactSelect = function (_a) {
    var options = _a.options, styles = _a.styles, props = __rest(_a, ["options", "styles"]);
    return ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)(react_select_1.default, __assign({ styles: __assign(__assign({}, customStyles), styles), options: options, theme: function (theme) {
                return __assign(__assign({}, theme), { colors: __assign(__assign({}, theme.colors), { primary25: 'var(--bg-hover)', primary50: 'var(--bg-hover)', primary75: 'var(--bg-hover)' }) });
            } }, props)) }));
};
exports.default = ReactSelect;
var templateObject_1;
