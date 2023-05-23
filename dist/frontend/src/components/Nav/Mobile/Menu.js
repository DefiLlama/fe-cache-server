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
exports.Menu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var link_1 = __importDefault(require("next/link"));
var react_feather_1 = require("react-feather");
var styled_components_1 = __importStar(require("styled-components"));
var Links_1 = require("../Links");
var hooks_1 = require("../../../hooks");
var shared_1 = require("./shared");
var router_1 = require("next/router");
var slideIn = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n\t\tright: -100%;\n  }\n  100% {\n    opacity: 1;\n\t\tright: 0%;\n  }\n"], ["\n  0% {\n    opacity: 0;\n\t\tright: -100%;\n  }\n  100% {\n    opacity: 1;\n\t\tright: 0%;\n  }\n"])));
var Backdrop = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: none;\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgb(0 0 0 / 10%);\n\n\t&[data-acitve='true'] {\n\t\tdisplay: block;\n\t}\n"], ["\n\tdisplay: none;\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgb(0 0 0 / 10%);\n\n\t&[data-acitve='true'] {\n\t\tdisplay: block;\n\t}\n"])));
var Nav = styled_components_1.default.nav(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: auto;\n\tdisplay: flex;\n\tpadding: 16px 16px 40px;\n\twidth: 100%;\n\tmax-width: 300px;\n\tbackground: ", ";\n\tflex-direction: column;\n\tgap: 20px;\n\tanimation: 0.2s ", " ease;\n\n\t& > * {\n\t\tcolor: ", ";\n\t\topacity: 0.7;\n\t\tpadding: 0;\n\t\tfont-weight: 500;\n\t}\n\n\tbutton {\n\t\ttext-align: start;\n\t}\n\n\t& > *[data-linksheader] {\n\t\tfont-size: 0.75rem;\n\t\topacity: 0.5;\n\t}\n"], ["\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: auto;\n\tdisplay: flex;\n\tpadding: 16px 16px 40px;\n\twidth: 100%;\n\tmax-width: 300px;\n\tbackground: ", ";\n\tflex-direction: column;\n\tgap: 20px;\n\tanimation: 0.2s ", " ease;\n\n\t& > * {\n\t\tcolor: ", ";\n\t\topacity: 0.7;\n\t\tpadding: 0;\n\t\tfont-weight: 500;\n\t}\n\n\tbutton {\n\t\ttext-align: start;\n\t}\n\n\t& > *[data-linksheader] {\n\t\tfont-size: 0.75rem;\n\t\topacity: 0.5;\n\t}\n"
    // TODO: add active link styles
])), function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, slideIn, function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
// TODO: add active link styles
function Menu() {
    var _a = __read((0, react_1.useState)(false), 2), show = _a[0], setShow = _a[1];
    var buttonEl = (0, react_1.useRef)(null);
    var navEl = (0, react_1.useRef)(null);
    var isYieldApp = (0, hooks_1.useYieldApp)();
    var commonLinks = isYieldApp ? Links_1.navLinks['Yields'] : Links_1.navLinks['DeFi'];
    (0, react_1.useEffect)(function () {
        function handleClick(e) {
            if (!(buttonEl.current &&
                navEl.current &&
                (buttonEl.current.contains(e.target) ||
                    navEl.current.isSameNode(e.target) ||
                    'togglemenuoff' in e.target.dataset))) {
                setShow(false);
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(shared_1.Button, __assign({ onClick: function () { return setShow(!show); }, ref: buttonEl }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Open Navigation Menu" })), (0, jsx_runtime_1.jsx)(react_feather_1.Menu, { height: 16, width: 16 })] })), (0, jsx_runtime_1.jsx)(Backdrop, __assign({ "data-acitve": show }, { children: (0, jsx_runtime_1.jsxs)(Nav, __assign({ ref: navEl }, { children: [(0, jsx_runtime_1.jsxs)(shared_1.Close, __assign({ onClick: function () { return setShow(!show); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Close Navigation Menu" })), (0, jsx_runtime_1.jsx)(react_feather_1.X, { height: 20, width: 20, strokeWidth: "4px" })] })), (0, jsx_runtime_1.jsxs)("p", __assign({ "data-linksheader": true }, { children: [(0, jsx_runtime_1.jsx)("span", { style: { width: '30px', display: 'inline-block' } }), "Dashboards"] })), Object.keys(Links_1.navLinks).map(function (mainLink) { return ((0, jsx_runtime_1.jsx)(SubMenu, { name: mainLink }, mainLink)); }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("p", __assign({ "data-linksheader": true }, { children: [(0, jsx_runtime_1.jsx)("span", { style: { width: '30px', display: 'inline-block' } }), "Tools"] })), commonLinks.tools.map(function (link) {
                            if ('onClick' in link) {
                                return ((0, jsx_runtime_1.jsxs)("button", __assign({ onClick: link.onClick }, { children: [(0, jsx_runtime_1.jsx)("span", { style: { width: '32px', display: 'inline-block' } }), link.name] }), link.name));
                            }
                            else {
                                return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: link.path, prefetch: false, passHref: true }, { children: (0, jsx_runtime_1.jsxs)("a", __assign({ target: "_blank", rel: "noopener".concat(!link.referrer ? ' noreferrer' : '') }, { children: [(0, jsx_runtime_1.jsx)("span", { style: { width: '32px', display: 'inline-block' } }), (0, jsx_runtime_1.jsx)("span", { children: link.name })] })) }), link.path) }, link.name));
                            }
                        }), (0, jsx_runtime_1.jsx)("hr", {}), commonLinks.footer.map(function (link) {
                            if ('onClick' in link) {
                                return ((0, jsx_runtime_1.jsxs)("button", __assign({ onClick: link.onClick }, { children: [(0, jsx_runtime_1.jsx)("span", { style: { width: '32px', display: 'inline-block' } }), link.name] }), link.name));
                            }
                            else {
                                return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: link.path, prefetch: false, passHref: true }, { children: (0, jsx_runtime_1.jsxs)("a", __assign({ target: "_blank", rel: "noopener".concat(!link.referrer ? ' noreferrer' : '') }, { children: [(0, jsx_runtime_1.jsx)("span", { style: { width: '32px', display: 'inline-block' } }), (0, jsx_runtime_1.jsx)("span", { children: link.name })] })) }), link.path) }, link.name));
                            }
                        })] })) }))] }));
}
exports.Menu = Menu;
var SubMenu = (0, react_1.forwardRef)(function Menu(_a, ref) {
    var _b;
    var name = _a.name;
    var noSubMenu = Links_1.linksWithNoSubMenu.find(function (x) { return x.name === name; });
    var router = (0, router_1.useRouter)();
    if (noSubMenu || (name === 'Yields' && !router.pathname.startsWith('/yields'))) {
        return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: (_b = noSubMenu === null || noSubMenu === void 0 ? void 0 : noSubMenu.url) !== null && _b !== void 0 ? _b : '/yields', passHref: true }, { children: (0, jsx_runtime_1.jsx)(MainLink, __assign({ target: (noSubMenu === null || noSubMenu === void 0 ? void 0 : noSubMenu.external) && '_blank' }, { children: name })) })));
    }
    return ((0, jsx_runtime_1.jsxs)(Details, __assign({ ref: ref }, { children: [(0, jsx_runtime_1.jsxs)("summary", __assign({ "data-togglemenuoff": false }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 18, id: "chevron", "data-togglemenuoff": false }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-togglemenuoff": false }, { children: name }))] })), (0, jsx_runtime_1.jsx)(SubMenuWrapper, { children: Links_1.navLinks[name].main.map(function (subLink) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: subLink.path, prefetch: false, passHref: true }, { children: (0, jsx_runtime_1.jsxs)("a", { children: [(0, jsx_runtime_1.jsx)("span", { style: { width: '32px', display: 'inline-block' } }), (0, jsx_runtime_1.jsx)("span", { children: subLink.name })] }) }), subLink.path)); }) })] })));
});
var Details = styled_components_1.default.details(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t&[open] #chevron {\n\t\ttransform: rotate(90deg);\n\t}\n\n\t& > summary {\n\t\tdisplay: flex;\n\t\tgap: 12px;\n\t\tlist-style: none;\n\t\tlist-style-type: none;\n\t\tfont-weight: 500;\n\t}\n\n\t& > summary::-webkit-details-marker {\n\t\tdisplay: none;\n\t}\n"], ["\n\t&[open] #chevron {\n\t\ttransform: rotate(90deg);\n\t}\n\n\t& > summary {\n\t\tdisplay: flex;\n\t\tgap: 12px;\n\t\tlist-style: none;\n\t\tlist-style-type: none;\n\t\tfont-weight: 500;\n\t}\n\n\t& > summary::-webkit-details-marker {\n\t\tdisplay: none;\n\t}\n"])));
var SubMenuWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n"], ["\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n"])));
var MainLink = styled_components_1.default.a(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tfont-weight: 500;\n\tmargin-left: 32px;\n"], ["\n\tfont-weight: 500;\n\tmargin-left: 32px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
