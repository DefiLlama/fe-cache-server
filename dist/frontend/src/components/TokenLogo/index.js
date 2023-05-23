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
var Image = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: inline-block;\n\tobject-fit: cover;\n\taspect-ratio: 1;\n\tbackground: ", ";\n\tborder-radius: 50%;\n\tflex-shrink: 0;\n"], ["\n\tdisplay: inline-block;\n\tobject-fit: cover;\n\taspect-ratio: 1;\n\tbackground: ", ";\n\tborder-radius: 50%;\n\tflex-shrink: 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
function TokenLogo(_a) {
    var _b = _a.logo, logo = _b === void 0 ? null : _b, _c = _a.size, size = _c === void 0 ? 24 : _c, style = _a.style, id = _a.id, fallbackLogo = _a.fallbackLogo, rest = __rest(_a, ["logo", "size", "style", "id", "fallbackLogo"]);
    return ((0, jsx_runtime_1.jsx)(Image, __assign({}, rest, { alt: '', src: logo || fallbackLogo, height: size, width: size, id: id, style: style, loading: "lazy", onError: function (e) {
            e.currentTarget.src = fallbackLogo || '/placeholder.png';
        } })));
}
exports.default = TokenLogo;
var templateObject_1;
