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
exports.BasicLink = exports.CustomLink = exports.CustomLinkStyle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var rebass_1 = require("rebass");
var link_1 = __importDefault(require("next/link"));
var prop_types_1 = __importDefault(require("prop-types"));
var styled_components_1 = __importDefault(require("styled-components"));
var WrappedLink = function (_a) {
    var external = _a.external, children = _a.children, rest = __rest(_a, ["external", "children"]);
    return ((0, jsx_runtime_1.jsx)(rebass_1.Link, __assign({ target: external ? '_blank' : null, rel: external ? 'noopener noreferrer' : null, color: "#2f80ed" }, rest, { children: children })));
};
WrappedLink.propTypes = {
    external: prop_types_1.default.bool
};
var Link = (0, styled_components_1.default)(WrappedLink)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n"], ["\n\tcolor: ", ";\n"])), function (_a) {
    var color = _a.color, theme = _a.theme;
    return (color ? color : theme.link);
});
exports.default = Link;
exports.CustomLinkStyle = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tcolor: ", ";\n"], ["\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tcolor: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#629ff4' : '#2172E5');
});
var CustomLink = function (_a) {
    var href = _a.href, children = _a.children, target = _a.target, props = __rest(_a, ["href", "children", "target"]);
    // Must add passHref to Link
    return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: href, passHref: true, prefetch: false }, { children: (0, jsx_runtime_1.jsx)(exports.CustomLinkStyle, __assign({ target: target }, props, { children: children })) })));
};
exports.CustomLink = CustomLink;
var BasicLink = function (_a) {
    var href = _a.href, children = _a.children, shallow = _a.shallow, props = __rest(_a, ["href", "children", "shallow"]);
    return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: href, passHref: true, prefetch: false, shallow: shallow }, { children: (0, jsx_runtime_1.jsx)("a", __assign({}, props, { children: children })) })));
};
exports.BasicLink = BasicLink;
var templateObject_1, templateObject_2;
