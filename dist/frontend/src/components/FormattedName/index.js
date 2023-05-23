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
var Tooltip_1 = __importDefault(require("../../components/Tooltip"));
var TextWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\ttop: 1px;\n\tmargin-left: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\n\t:hover {\n\t\tcursor: pointer;\n\t}\n\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: ", ";\n\t}\n"], ["\n\tposition: relative;\n\ttop: 1px;\n\tmargin-left: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\n\t:hover {\n\t\tcursor: pointer;\n\t}\n\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: ", ";\n\t}\n"])), function (_a) {
    var margin = _a.margin;
    return margin && '4px';
}, function (_a) {
    var theme = _a.theme, link = _a.link;
    return (link ? theme.blue : theme.text1);
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize !== null && fontSize !== void 0 ? fontSize : 'inherit';
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight;
}, function (_a) {
    var adjustSize = _a.adjustSize;
    return adjustSize && '12px';
});
var FormattedName = function (_a) {
    var text = _a.text, maxCharacters = _a.maxCharacters, _b = _a.margin, margin = _b === void 0 ? false : _b, _c = _a.adjustSize, adjustSize = _c === void 0 ? false : _c, fontSize = _a.fontSize, _d = _a.fontWeight, fontWeight = _d === void 0 ? 400 : _d, link = _a.link, rest = __rest(_a, ["text", "maxCharacters", "margin", "adjustSize", "fontSize", "fontWeight", "link"]);
    if (!text) {
        return null;
    }
    if (text.length > maxCharacters) {
        return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ content: text }, { children: (0, jsx_runtime_1.jsx)(TextWrapper, __assign({ margin: margin, adjustSize: adjustSize, link: link, fontSize: fontSize }, rest, { children: ' ' + text.slice(0, maxCharacters - 1) + '...' })) })));
    }
    return ((0, jsx_runtime_1.jsx)(TextWrapper, __assign({ margin: margin, adjustSize: adjustSize, link: link, fontSize: fontSize, fontWeight: fontWeight }, rest, { children: text })));
};
exports.default = FormattedName;
var templateObject_1;
