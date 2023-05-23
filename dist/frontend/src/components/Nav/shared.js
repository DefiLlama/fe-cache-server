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
exports.Entry = exports.NavLink = exports.LogoWrapper = exports.Header = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var styled_components_1 = __importDefault(require("styled-components"));
var Link_1 = require("../../components/Link");
exports.Header = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tgap: 10px;\n\tpadding: 12px 16px;\n\tbackground: linear-gradient(168deg, #344179 3.98%, #445ed0 100%);\n\n\tscrollbar-width: none;\n\t::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n\n\thr {\n\t\tborder-color: ", ";\n\t\tmargin: 4px 0;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tflex-direction: column;\n\t\tgap: 20px;\n\t\tpadding: 24px;\n\t\theight: 100vh;\n\t\toverflow-y: auto;\n\t\tbackground: ", ";\n\t}\n"], ["\n\tgap: 10px;\n\tpadding: 12px 16px;\n\tbackground: linear-gradient(168deg, #344179 3.98%, #445ed0 100%);\n\n\tscrollbar-width: none;\n\t::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n\n\thr {\n\t\tborder-color: ", ";\n\t\tmargin: 4px 0;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tflex-direction: column;\n\t\tgap: 20px;\n\t\tpadding: 24px;\n\t\theight: 100vh;\n\t\toverflow-y: auto;\n\t\tbackground: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.divider;
}, function (_a) {
    var bpLg = _a.theme.bpLg;
    return bpLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.background;
});
exports.LogoWrapper = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tflex-shrink: 0;\n\ttransition: transform 0.3s ease;\n\tmargin-right: auto;\n\n\t:focus-visible {\n\t\toutline: 1px solid white;\n\t}\n\n\timg {\n\t\theight: 36px;\n\t\tobject-fit: contain;\n\t\tobject-position: left;\n\t\twidth: min-content;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\t:hover {\n\t\t\ttransform: rotate(-5deg);\n\t\t}\n\n\t\timg {\n\t\t\theight: 53px;\n\t\t}\n\t}\n"], ["\n\tflex-shrink: 0;\n\ttransition: transform 0.3s ease;\n\tmargin-right: auto;\n\n\t:focus-visible {\n\t\toutline: 1px solid white;\n\t}\n\n\timg {\n\t\theight: 36px;\n\t\tobject-fit: contain;\n\t\tobject-position: left;\n\t\twidth: min-content;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\t:hover {\n\t\t\ttransform: rotate(-5deg);\n\t\t}\n\n\t\timg {\n\t\t\theight: 53px;\n\t\t}\n\t}\n"])), function (_a) {
    var bpLg = _a.theme.bpLg;
    return bpLg;
});
exports.NavLink = (0, styled_components_1.default)(Link_1.BasicLink)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tcolor: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 12px;\n\topacity: 0.7;\n\n\t&[data-active='true'] {\n\t\topacity: 1;\n\t}\n\n\t:hover {\n\t\topacity: 1;\n\t}\n\n\t:focus-visible {\n\t\toutline: 1px solid ", ";\n\t\topacity: 1;\n\t}\n"], ["\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tcolor: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 12px;\n\topacity: 0.7;\n\n\t&[data-active='true'] {\n\t\topacity: 1;\n\t}\n\n\t:hover {\n\t\topacity: 1;\n\t}\n\n\t:focus-visible {\n\t\toutline: 1px solid ", ";\n\t\topacity: 1;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var Entry = function (_a) {
    var url = _a.url, name = _a.name, Icon = _a.Icon, newTag = _a.newTag, props = __rest(_a, ["url", "name", "Icon", "newTag"]);
    var router = (0, router_1.useRouter)();
    return ((0, jsx_runtime_1.jsxs)(exports.NavLink, __assign({ href: url }, props, { "data-active": router.pathname === url }, { children: [(0, jsx_runtime_1.jsx)(Icon, { size: 20 }), (0, jsx_runtime_1.jsx)("span", { children: name }), newTag === true && ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
                    background: '#ebebeb',
                    padding: '3px',
                    position: 'relative',
                    top: '2px',
                    left: '-6px',
                    borderRadius: '4px',
                    color: 'black',
                    fontSize: '0.625rem'
                } }, { children: "NEW" })))] })));
};
exports.Entry = Entry;
var templateObject_1, templateObject_2, templateObject_3;
