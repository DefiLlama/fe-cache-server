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
exports.Tooltip2 = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var tooltip_1 = require("ariakit/tooltip");
var link_1 = __importDefault(require("next/link"));
var TooltipPopver = (0, styled_components_1.default)(tooltip_1.Tooltip)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-size: 0.85rem;\n\tpadding: 1rem;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px;\n\tfilter: ", ";\n\tmax-width: 228px;\n"], ["\n\tfont-size: 0.85rem;\n\tpadding: 1rem;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px;\n\tfilter: ", ";\n\tmax-width: 228px;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(204, 10%, 10%)');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'hsl(204, 3%, 12%)' : 'hsl(204, 20%, 100%)');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'hsl(204, 3%, 32%)' : 'hsl(204, 20%, 88%)');
}, function (_a) {
    var theme = _a.theme;
    return theme.mode === 'dark' ? 'drop-shadow(0 4px 6px rgba(0, 0, 0, 40%))' : 'drop-shadow(0 4px 6px rgba(0, 0, 0, 15%))';
});
var TooltipAnchor2 = (0, styled_components_1.default)(tooltip_1.TooltipAnchor)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\tflex-shrink: 0;\n\tcolor: ", ";\n\tfont-size: ", ";\n\n\ta {\n\t\tdisplay: flex;\n\t}\n"], ["\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\tflex-shrink: 0;\n\tcolor: ", ";\n\tfont-size: ", ";\n\n\ta {\n\t\tdisplay: flex;\n\t}\n"])), function (_a) {
    var color = _a.color;
    return color || 'inherit';
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || 'inherit';
});
var Popover2 = (0, styled_components_1.default)(TooltipPopver)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tpadding: 12px;\n"], ["\n\tpadding: 12px;\n"])));
function Tooltip(_a) {
    var content = _a.content, as = _a.as, href = _a.href, shallow = _a.shallow, onClick = _a.onClick, children = _a.children, props = __rest(_a, ["content", "as", "href", "shallow", "onClick", "children"]);
    var tooltip = (0, tooltip_1.useTooltipState)();
    if (!content || content === '')
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    var triggerProps = __assign({}, (onClick && { onClick: onClick }));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(tooltip_1.TooltipAnchor, __assign({ state: tooltip, as: as, className: "tooltip-trigger" }, triggerProps, { children: href ? ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: href, shallow: shallow, prefetch: false, passHref: true }, { children: (0, jsx_runtime_1.jsx)("a", { children: children }) }))) : (children) })), (0, jsx_runtime_1.jsx)(TooltipPopver, __assign({ state: tooltip }, props, { children: content }))] }));
}
exports.default = Tooltip;
function Tooltip2(_a) {
    var content = _a.content, children = _a.children, color = _a.color, fontSize = _a.fontSize, anchorStyles = _a.anchorStyles, props = __rest(_a, ["content", "children", "color", "fontSize", "anchorStyles"]);
    var tooltip = (0, tooltip_1.useTooltipState)();
    if (!content || content === '')
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TooltipAnchor2, __assign({ state: tooltip, color: color, fontSize: fontSize, style: anchorStyles, "data-tooltipanchor": true }, { children: children })), (0, jsx_runtime_1.jsx)(Popover2, __assign({ state: tooltip }, props, { children: content }))] }));
}
exports.Tooltip2 = Tooltip2;
var templateObject_1, templateObject_2, templateObject_3;
