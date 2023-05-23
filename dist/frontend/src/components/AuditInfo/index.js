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
var DropdownMenu_1 = require("../../components/DropdownMenu");
var HeadHelp_1 = __importDefault(require("../../components/HeadHelp"));
var Audits = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n"])));
var Info = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmin-height: 32px;\n\tdisplay: flex;\n\talign-items: center;\n"], ["\n\tmin-height: 32px;\n\tdisplay: flex;\n\talign-items: center;\n"])));
var AuditInfo = function (_a) {
    var audits = _a.audits, _b = _a.auditLinks, auditLinks = _b === void 0 ? [] : _b, color = _a.color, isLoading = _a.isLoading, props = __rest(_a, ["audits", "auditLinks", "color", "isLoading"]);
    return ((0, jsx_runtime_1.jsxs)(Audits, __assign({}, props, { children: [(0, jsx_runtime_1.jsx)(HeadHelp_1.default, { title: "Audits", text: "Audits are not a guarantee of security." }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsx)(Info, { children: isLoading ? null : audits > 0 ? ((0, jsx_runtime_1.jsx)(DropdownMenu_1.Menu, { name: "Yes", options: auditLinks, color: color, isExternal: true })) : ((0, jsx_runtime_1.jsx)("span", { children: "No" })) })] })));
};
exports.default = AuditInfo;
var templateObject_1, templateObject_2;
