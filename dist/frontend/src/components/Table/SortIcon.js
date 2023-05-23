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
function SortIcon(_a) {
    var dir = _a.dir;
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(Caret, __assign({ role: "img", "aria-label": "caret-up", active: dir === 'asc' }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ viewBox: "0 0 1024 1024", width: "10px", focusable: "false", "data-icon": "caret-up", fill: "currentColor", "aria-hidden": "true" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" }) })) })), (0, jsx_runtime_1.jsx)(Caret, __assign({ role: "img", "aria-label": "caret-down", active: dir === 'desc' }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ viewBox: "0 0 1024 1024", width: "10px", focusable: "false", "data-icon": "caret-down", fill: "currentColor", "aria-hidden": "true" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }) })) }))] }));
}
exports.default = SortIcon;
var Wrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tposition: relative;\n\ttop: 1px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tposition: relative;\n\ttop: 1px;\n"])));
var Caret = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tcolor: ", ";\n\tflex-shrink: 0;\n\tposition: relative;\n\n\t:first-of-type {\n\t\ttop: 2px;\n\t}\n\n\t:last-of-type {\n\t\tbottom: 2px;\n\t}\n"], ["\n\tcolor: ", ";\n\tflex-shrink: 0;\n\tposition: relative;\n\n\t:first-of-type {\n\t\ttop: 2px;\n\t}\n\n\t:last-of-type {\n\t\tbottom: 2px;\n\t}\n"])), function (_a) {
    var active = _a.active, theme = _a.theme;
    return (active ? theme.blue : 'gray');
});
var templateObject_1, templateObject_2;
