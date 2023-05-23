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
var HeadHelp = function (_a) {
    var title = _a.title, text = _a.text, _b = _a.adjustSize, adjustSize = _b === void 0 ? false : _b, fontSize = _a.fontSize, link = _a.link, props = __rest(_a, ["title", "text", "adjustSize", "fontSize", "link"]);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ content: text }, props, { children: (0, jsx_runtime_1.jsxs)(TextWrapper, __assign({ adjustSize: adjustSize, link: link, fontSize: fontSize }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ style: { textAlign: 'center' } }, { children: title })), (0, jsx_runtime_1.jsx)(react_feather_1.HelpCircle, { size: 15, style: { marginLeft: '.3rem', marginRight: props.headerIsSorted ? '1rem' : undefined } })] })) })));
};
var TextWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\tcolor: ", ";\n\tfont-size: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\twhite-space: nowrap;\n\t:hover {\n\t\tcursor: pointer;\n\t}\n\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: ", ";\n\t}\n"], ["\n\tposition: relative;\n\tcolor: ", ";\n\tfont-size: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\twhite-space: nowrap;\n\t:hover {\n\t\tcursor: pointer;\n\t}\n\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme, link = _a.link;
    return (link ? theme.blue : theme.text1);
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize !== null && fontSize !== void 0 ? fontSize : 'inherit';
}, function (_a) {
    var adjustSize = _a.adjustSize;
    return adjustSize && '12px';
});
exports.default = HeadHelp;
var templateObject_1;
