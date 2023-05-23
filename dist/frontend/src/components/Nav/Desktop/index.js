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
exports.Wrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var link_1 = __importDefault(require("next/link"));
var router_1 = require("next/router");
var image_1 = __importDefault(require("next/future/image"));
var styled_components_1 = __importDefault(require("styled-components"));
var hooks_1 = require("../../../hooks");
var shared_1 = require("../shared");
var Links_1 = require("../Links");
var ThemeSwitch_1 = __importDefault(require("../ThemeSwitch"));
var defillama_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama.png"));
var defillama_dark_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama-dark.png"));
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var SubMenu_1 = __importDefault(require("./SubMenu"));
function DesktopNav() {
    var asPath = (0, router_1.useRouter)().asPath;
    var isYieldApp = (0, hooks_1.useYieldApp)();
    var _a = __read((0, LocalStorage_1.useDarkModeManager)(), 2), darkMode = _a[0], toggleDarkMode = _a[1];
    var commonLinks = isYieldApp ? Links_1.navLinks['Yields'] : Links_1.navLinks['DeFi'];
    return ((0, jsx_runtime_1.jsxs)(exports.Wrapper, __assign({ as: "aside" }, { children: [(0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/", passHref: true }, { children: (0, jsx_runtime_1.jsxs)(shared_1.LogoWrapper, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Navigate to Home Page" })), (0, jsx_runtime_1.jsx)(image_1.default, { src: darkMode ? defillama_png_1.default : defillama_dark_png_1.default, alt: "Navigate to Home Page", priority: true })] }) })), (0, jsx_runtime_1.jsxs)(Nav, { children: [(0, jsx_runtime_1.jsx)("p", __assign({ "data-linksheader": true }, { children: "Dashboards" })), Object.keys(Links_1.navLinks).map(function (mainLink) { return ((0, jsx_runtime_1.jsx)(SubMenu_1.default, { name: mainLink }, mainLink)); }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("p", __assign({ "data-linksheader": true }, { children: "Tools" })), commonLinks.tools.map(function (link) {
                        if ('onClick' in link) {
                            return ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: link.onClick }, { children: link.name }), link.name));
                        }
                        else {
                            return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: link.path, prefetch: false, passHref: true }, { children: (0, jsx_runtime_1.jsxs)("a", __assign({ target: link.external && '_blank', rel: "noopener".concat(!link.referrer ? ' noreferrer' : ''), "data-linkactive": link.path === asPath }, { children: [link.name, link.newTag === true && (0, jsx_runtime_1.jsx)("span", __assign({ "data-newtag": true }, { children: "NEW" }))] })) }), link.path) }, link.name));
                        }
                    }), (0, jsx_runtime_1.jsx)("hr", {}), commonLinks.footer.map(function (link) {
                        if ('onClick' in link) {
                            return ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: link.onClick }, { children: link.name }), link.name));
                        }
                        else {
                            return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: link.path, prefetch: false, passHref: true }, { children: (0, jsx_runtime_1.jsxs)("a", __assign({ target: link.external && '_blank', rel: "noopener".concat(!link.referrer ? ' noreferrer' : ''), "data-linkactive": link.path === asPath }, { children: [link.name, link.newTag === true && (0, jsx_runtime_1.jsx)("span", __assign({ "data-newtag": true }, { children: "NEW" }))] })) }), link.path) }, link.name));
                        }
                    })] }), (0, jsx_runtime_1.jsx)(ThemeSwitch_1.default, { isActive: darkMode, toggle: toggleDarkMode })] })));
}
exports.default = DesktopNav;
exports.Wrapper = (0, styled_components_1.default)(shared_1.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: none;\n\n\t@media (min-width: ", ") {\n\t\tdisplay: flex;\n\t}\n"], ["\n\tdisplay: none;\n\n\t@media (min-width: ", ") {\n\t\tdisplay: flex;\n\t}\n"])), function (_a) {
    var bpLg = _a.theme.bpLg;
    return bpLg;
});
var Nav = styled_components_1.default.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tgap: 16px;\n\tuser-select: none;\n\n\ta,\n\tbutton {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 12px;\n\t\tcursor: pointer;\n\t\topacity: 0.8;\n\t\ttext-align: start;\n\t\tmargin: -6px 0 -6px -6px;\n\t\tpadding: 6px;\n\t\tborder-radius: 6px;\n\n\t\t& > *[data-newtag] {\n\t\t\tbackground: #ebebeb;\n\t\t\tfont-size: 0.625rem;\n\t\t\tborder-radius: 4px;\n\t\t\tpadding: 3px;\n\t\t\tcolor: black;\n\t\t\tposition: relative;\n\t\t\tleft: -4px;\n\t\t\ttop: 2px;\n\t\t}\n\n\t\t:hover,\n\t\t:focus-visible {\n\t\t\topacity: 1;\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&[data-linkactive='true'] {\n\t\t\tbackground-color: #2172e5;\n\t\t\tcolor: white;\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\tp[data-linksheader] {\n\t\tfont-size: 0.75rem;\n\t\topacity: 0.5;\n\t}\n"], ["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tgap: 16px;\n\tuser-select: none;\n\n\ta,\n\tbutton {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 12px;\n\t\tcursor: pointer;\n\t\topacity: 0.8;\n\t\ttext-align: start;\n\t\tmargin: -6px 0 -6px -6px;\n\t\tpadding: 6px;\n\t\tborder-radius: 6px;\n\n\t\t& > *[data-newtag] {\n\t\t\tbackground: #ebebeb;\n\t\t\tfont-size: 0.625rem;\n\t\t\tborder-radius: 4px;\n\t\t\tpadding: 3px;\n\t\t\tcolor: black;\n\t\t\tposition: relative;\n\t\t\tleft: -4px;\n\t\t\ttop: 2px;\n\t\t}\n\n\t\t:hover,\n\t\t:focus-visible {\n\t\t\topacity: 1;\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&[data-linkactive='true'] {\n\t\t\tbackground-color: #2172e5;\n\t\t\tcolor: white;\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\tp[data-linksheader] {\n\t\tfont-size: 0.75rem;\n\t\topacity: 0.5;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mode === 'dark' ? 'rgba(246, 246, 246, 0.1)' : 'rgba(246, 246, 246, 1)';
});
var templateObject_1, templateObject_2;
