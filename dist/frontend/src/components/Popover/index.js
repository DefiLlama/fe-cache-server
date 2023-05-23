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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var popover_1 = require("ariakit/popover");
var polished_1 = require("polished");
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("./utils");
var Trigger = (0, styled_components_1.default)(popover_1.PopoverDisclosure)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 8px;\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tborder-radius: 8px;\n\tcursor: pointer;\n\toutline: none;\n\tborder: 1px solid transparent;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\n\t:focus-visible,\n\t[data-focus-visible] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 8px;\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tborder-radius: 8px;\n\tcursor: pointer;\n\toutline: none;\n\tborder: 1px solid transparent;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\n\t:focus-visible,\n\t[data-focus-visible] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (0, polished_1.transparentize)(0.9, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (0, polished_1.transparentize)(0.8, theme.primary1);
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color ? (0, polished_1.transparentize)(0.8, color) : theme.mode === 'dark' ? '#22242a' : '#eaeaea';
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color ? (0, polished_1.transparentize)(0.8, color) : theme.mode === 'dark' ? '#22242a' : '#eaeaea';
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text1;
});
exports.PopoverWrapper = (0, styled_components_1.default)(popover_1.Popover)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 20px 0 32px;\n\twidth: 100%;\n\tmax-width: none;\n\tmax-height: calc(100vh - 200px);\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\topacity: 0;\n\tz-index: 10;\n\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\topacity: 1;\n\t\ttransform: translateY(0%);\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t:focus-visible,\n\t[data-focus-visible] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 0;\n\t\tmax-width: min(calc(100vw - 16px), 320px);\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(0%);\n\n\t\t&[data-variant='secondary'] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 20px 0 32px;\n\twidth: 100%;\n\tmax-width: none;\n\tmax-height: calc(100vh - 200px);\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\topacity: 0;\n\tz-index: 10;\n\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\topacity: 1;\n\t\ttransform: translateY(0%);\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t:focus-visible,\n\t[data-focus-visible] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 0;\n\t\tmax-width: min(calc(100vw - 16px), 320px);\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(0%);\n\n\t\t&[data-variant='secondary'] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#40444f' : '#cbcbcb');
}, function (_a) {
    var theme = _a.theme;
    return theme.mode === 'dark'
        ? 'drop-shadow(0px 6px 10px rgba(0, 0, 0, 40%))'
        : 'drop-shadow(0px 6px 10px rgba(0, 0, 0, 15%))';
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#222429' : '#f6f6f6');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#1c1f2d' : '#f4f6ff');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#222429' : '#f6f6f6');
});
function Popover(_a) {
    var trigger = _a.trigger, content = _a.content, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, color = _a.color, props = __rest(_a, ["trigger", "content", "variant", "color"]);
    var _c = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _c[0], renderCallback = _c[1];
    var popover = (0, popover_1.usePopoverState)({ renderCallback: renderCallback, gutter: 8, animated: true });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Trigger, __assign({ state: popover, "data-variant": variant, color: color }, { children: trigger })), (0, jsx_runtime_1.jsx)(exports.PopoverWrapper, __assign({ state: popover, modal: !isLarge, "data-variant": variant }, props, { children: content }))] }));
}
exports.default = Popover;
var templateObject_1, templateObject_2;
