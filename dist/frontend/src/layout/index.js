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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var head_1 = __importDefault(require("next/head"));
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = __importStar(require("../Theme"));
var SEO_1 = __importDefault(require("../components/SEO"));
var Nav_1 = __importDefault(require("../components/Nav"));
var PageWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 16px;\n\tisolation: isolate;\n\n\t@media screen and (min-width: ", ") {\n\t\tmargin: 28px 28px 28px 248px;\n\t}\n"], ["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 16px;\n\tisolation: isolate;\n\n\t@media screen and (min-width: ", ") {\n\t\tmargin: 28px 28px 28px 248px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
});
var Center = styled_components_1.default.main(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 28px;\n\twidth: 100%;\n\tmax-width: 140rem;\n\tmin-height: 100%;\n\tmargin: 0 auto;\n\tcolor: ", ";\n"], ["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 28px;\n\twidth: 100%;\n\tmax-width: 140rem;\n\tmin-height: 100%;\n\tmargin: 0 auto;\n\tcolor: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
function Layout(_a) {
    var title = _a.title, children = _a.children, _b = _a.defaultSEO, defaultSEO = _b === void 0 ? false : _b, props = __rest(_a, ["title", "children", "defaultSEO"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(head_1.default, { children: [(0, jsx_runtime_1.jsx)("title", { children: title }), (0, jsx_runtime_1.jsx)("link", { rel: "icon", type: "image/png", href: "/favicon-32x32.png" })] }), defaultSEO && (0, jsx_runtime_1.jsx)(SEO_1.default, {}), (0, jsx_runtime_1.jsxs)(Theme_1.default, { children: [(0, jsx_runtime_1.jsx)(Theme_1.GlobalStyle, {}), (0, jsx_runtime_1.jsx)(Nav_1.default, {}), (0, jsx_runtime_1.jsx)(PageWrapper, { children: (0, jsx_runtime_1.jsx)(Center, __assign({}, props, { children: children })) })] })] }));
}
exports.default = Layout;
var templateObject_1, templateObject_2;
