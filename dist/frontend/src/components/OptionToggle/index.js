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
var react_switch_1 = __importDefault(require("react-switch"));
var styled_components_1 = __importDefault(require("styled-components"));
var HeadHelp_1 = __importDefault(require("../../components/HeadHelp"));
var image_1 = __importDefault(require("next/future/image"));
var loading_circle_svg_1 = __importDefault(require("~/assets/loading_circle.svg"));
var Wrapper = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n"])));
var Switch = react_switch_1.default;
var baseWidth = 40;
var baseHeight = 20;
var OptionToggle = function (_a) {
    var toggle = _a.toggle, _b = _a.enabled, enabled = _b === void 0 ? false : _b, help = _a.help, name = _a.name, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, props = __rest(_a, ["toggle", "enabled", "help", "name", "isLoading"]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Wrapper, __assign({}, props, { htmlFor: name }, { children: [isLoading ? ((0, jsx_runtime_1.jsx)(image_1.default, { style: { margin: "0 ".concat((baseWidth - baseHeight) / 2, "px") }, height: baseHeight * 0.75, src: loading_circle_svg_1.default, alt: "Loading" })) : ((0, jsx_runtime_1.jsx)(Switch, { id: name, onChange: toggle, checked: enabled, onColor: "#0A71F1", height: baseHeight, width: baseWidth, uncheckedIcon: false, checkedIcon: false })), "\u00A0", help ? (0, jsx_runtime_1.jsx)(HeadHelp_1.default, { title: name, text: help }) : name] })) }));
};
exports.default = OptionToggle;
var templateObject_1;
