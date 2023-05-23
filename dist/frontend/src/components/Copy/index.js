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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var CopyIcon = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tflex-shrink: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 2px 0;\n\n\t:hover,\n\t:active,\n\t:focus-visible {\n\t\topacity: 0.8;\n\t}\n\n\t& > svg {\n\t\tcolor: ", ";\n\t}\n"], ["\n\tflex-shrink: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 2px 0;\n\n\t:hover,\n\t:active,\n\t:focus-visible {\n\t\topacity: 0.8;\n\t}\n\n\t& > svg {\n\t\tcolor: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
function CopyHelper(_a) {
    var toCopy = _a.toCopy, props = __rest(_a, ["toCopy"]);
    var _b = __read((0, react_1.useState)(false), 2), copied = _b[0], setCopied = _b[1];
    var copy = function () {
        navigator.clipboard.writeText(toCopy);
        setCopied(true);
        setTimeout(function () { return setCopied(false); }, 2000);
    };
    return ((0, jsx_runtime_1.jsx)(CopyIcon, __assign({ onClick: copy, "aria-label": "Copy" }, props, { children: copied ? (0, jsx_runtime_1.jsx)(react_feather_1.CheckCircle, { size: 14 }) : (0, jsx_runtime_1.jsx)(react_feather_1.Copy, { size: 14 }) })));
}
exports.default = CopyHelper;
var templateObject_1;
