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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var router_1 = require("next/router");
var image_1 = __importDefault(require("next/future/image"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var shared_1 = require("../shared");
var logo_white_long_png_1 = __importDefault(require("~/assets/logo_white_long.png"));
var Menu_1 = require("./Menu");
var Settings_1 = require("./Settings");
var MobileSearch = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/Search/Base/Mobile')); }); }, {
    ssr: false,
    loading: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }
});
function MobileNav() {
    var router = (0, router_1.useRouter)();
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/", passHref: true }, { children: (0, jsx_runtime_1.jsxs)(shared_1.LogoWrapper, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Navigate to Home Page" })), (0, jsx_runtime_1.jsx)(image_1.default, { src: logo_white_long_png_1.default, alt: "Navigate to Home Page", priority: true })] }) })), !router.pathname.startsWith('/yield') && !router.pathname.startsWith('/raises') && (0, jsx_runtime_1.jsx)(MobileSearch, {}), (0, jsx_runtime_1.jsx)(Settings_1.Settings, {}), (0, jsx_runtime_1.jsx)(Menu_1.Menu, {})] }));
}
exports.default = MobileNav;
var Wrapper = (0, styled_components_1.default)(shared_1.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tz-index: 10;\n\n\tbutton {\n\t\tflex-shrink: 0;\n\t}\n\n\t@media (min-width: ", ") {\n\t\tdisplay: none;\n\t}\n"], ["\n\tdisplay: flex;\n\tz-index: 10;\n\n\tbutton {\n\t\tflex-shrink: 0;\n\t}\n\n\t@media (min-width: ", ") {\n\t\tdisplay: none;\n\t}\n"])), function (_a) {
    var bpLg = _a.theme.bpLg;
    return bpLg;
});
var templateObject_1;
