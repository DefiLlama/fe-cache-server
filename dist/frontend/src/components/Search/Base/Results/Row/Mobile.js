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
exports.MobileRow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var router_1 = require("next/router");
var styled_components_1 = __importDefault(require("styled-components"));
var TokenLogo_1 = __importDefault(require("../../../../../components/TokenLogo"));
var Item = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding: 12px 14px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tfont-size: 0.85rem;\n\tcolor: ", ";\n\n\t& > * {\n\t\tmargin-right: 6px;\n\t}\n\n\t:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: ", ";\n\t}\n\n\t&[data-active-item] {\n\t\tbackground-color: ", ";\n\t}\n"], ["\n\tpadding: 12px 14px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tfont-size: 0.85rem;\n\tcolor: ", ";\n\n\t& > * {\n\t\tmargin-right: 6px;\n\t}\n\n\t:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: ", ";\n\t}\n\n\t&[data-active-item] {\n\t\tbackground-color: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
});
var MobileRow = function (_a) {
    var data = _a.data, onItemClick = _a.onItemClick, props = __rest(_a, ["data", "onItemClick"]);
    var _b = __read(React.useState(false), 2), loading = _b[0], setLoading = _b[1];
    var router = (0, router_1.useRouter)();
    return ((0, jsx_runtime_1.jsxs)(Item, __assign({ onClick: function () {
            setLoading(true);
            if (onItemClick) {
                onItemClick(data);
            }
            else {
                router.push(data.route).then(function () {
                    setLoading(false);
                });
            }
        } }, props, { "aria-disabled": loading }, { children: [((data === null || data === void 0 ? void 0 : data.logo) || (data === null || data === void 0 ? void 0 : data.fallbackLogo)) && (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: data === null || data === void 0 ? void 0 : data.logo, fallbackLogo: data === null || data === void 0 ? void 0 : data.fallbackLogo }), (0, jsx_runtime_1.jsx)("span", { children: data.name }), loading && ((0, jsx_runtime_1.jsx)("svg", __assign({ version: "1.1", id: "svg-spinner", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "10 10 80 80", xmlSpace: "preserve", height: 12 }, { children: (0, jsx_runtime_1.jsx)("circle", __assign({ cx: "50", cy: "50", fill: "none", stroke: "#7e96ff", strokeWidth: "10", r: "35", strokeDasharray: "164.93361431346415 56.97787143782138" }, { children: (0, jsx_runtime_1.jsx)("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 50 50;360 50 50", keyTimes: "0;1" }) })) })))] })));
};
exports.MobileRow = MobileRow;
var templateObject_1;
