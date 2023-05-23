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
var react_1 = require("react");
var link_1 = __importDefault(require("next/link"));
var styled_components_1 = __importStar(require("styled-components"));
var Links_1 = require("../Links");
var router_1 = require("next/router");
var react_feather_1 = require("react-feather");
var SubMenu = (0, react_1.forwardRef)(function Menu(_a, ref) {
    var _b;
    var name = _a.name;
    var pathname = (0, router_1.useRouter)().pathname;
    var noSubMenu = Links_1.linksWithNoSubMenu.find(function (x) { return x.name === name; });
    var active = isActive({ category: name, pathname: pathname });
    if (noSubMenu || (name === 'Yields' && !active)) {
        return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: (_b = noSubMenu === null || noSubMenu === void 0 ? void 0 : noSubMenu.url) !== null && _b !== void 0 ? _b : '/yields', prefetch: false, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(MainLink, __assign({ "data-linkactive": active, target: (noSubMenu === null || noSubMenu === void 0 ? void 0 : noSubMenu.external) && '_blank' }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ "data-mainlinkicon": true }, { children: Links_1.navLinks[name].icon })), (0, jsx_runtime_1.jsx)("span", { children: name }), Links_1.navLinks[name].newTag === true && (0, jsx_runtime_1.jsx)("span", __assign({ "data-newtag": true }, { children: "NEW" }))] })) })));
    }
    return ((0, jsx_runtime_1.jsxs)(Details, __assign({ ref: ref, open: active ? true : false }, { children: [(0, jsx_runtime_1.jsxs)("summary", { children: [(0, jsx_runtime_1.jsx)("span", __assign({ "data-mainlinkicon": true }, { children: Links_1.navLinks[name].icon })), (0, jsx_runtime_1.jsx)("span", { children: name }), Links_1.navLinks[name].newTag === true && (0, jsx_runtime_1.jsx)("span", __assign({ "data-newtag": true }, { children: "NEW" })), (0, jsx_runtime_1.jsx)("span", __assign({ "data-arrowicon": true }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16 }) }))] }), (0, jsx_runtime_1.jsx)(SubMenuWrapper, { children: Links_1.navLinks[name].main.map(function (subLink) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: subLink.path, prefetch: false, passHref: true }, { children: (0, jsx_runtime_1.jsxs)("a", __assign({ "data-linkactive": subLink.path === pathname }, { children: [(0, jsx_runtime_1.jsx)("span", { style: { width: '16px', display: 'inline-block' } }), (0, jsx_runtime_1.jsx)("span", { children: subLink.name }), subLink.newTag === true && (0, jsx_runtime_1.jsx)("span", __assign({ "data-newtag": true }, { children: "NEW" }))] })) }), subLink.path)); }) })] })));
});
var wiggle = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: rotate(10deg);\n\t}\n\n\t50% {\n\t\ttransform: rotate(-10deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(0);\n\t}\n"], ["\n\t0% {\n\t\ttransform: rotate(10deg);\n\t}\n\n\t50% {\n\t\ttransform: rotate(-10deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(0);\n\t}\n"])));
var Details = styled_components_1.default.details(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t&[open] {\n\t\tsummary {\n\t\t\t& > *[data-arrowicon] {\n\t\t\t\ttransform: rotate(90deg);\n\t\t\t\ttransition: 0.1s ease;\n\t\t\t}\n\t\t}\n\t}\n\n\tsummary {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 12px;\n\t\tlist-style: none;\n\t\tlist-style-type: none;\n\t\topacity: 1;\n\t\tfont-weight: 600;\n\t\tcursor: pointer;\n\t\tmargin: -6px 0 -6px -6px;\n\t\tpadding: 6px;\n\t\tborder-radius: 6px;\n\n\t\t& > *[data-arrowicon] {\n\t\t\tmargin-left: auto;\n\t\t}\n\n\t\t& > *[data-newtag] {\n\t\t\tbackground: #ebebeb;\n\t\t\tfont-size: 0.625rem;\n\t\t\tborder-radius: 4px;\n\t\t\tpadding: 3px;\n\t\t\tcolor: black;\n\t\t\tposition: relative;\n\t\t\tleft: -4px;\n\t\t}\n\n\t\t:hover {\n\t\t\tbackground-color: ", ";\n\t\t}\n\t}\n\n\tsummary::-webkit-details-marker {\n\t\tdisplay: none;\n\t}\n"], ["\n\t&[open] {\n\t\tsummary {\n\t\t\t& > *[data-arrowicon] {\n\t\t\t\ttransform: rotate(90deg);\n\t\t\t\ttransition: 0.1s ease;\n\t\t\t}\n\t\t}\n\t}\n\n\tsummary {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 12px;\n\t\tlist-style: none;\n\t\tlist-style-type: none;\n\t\topacity: 1;\n\t\tfont-weight: 600;\n\t\tcursor: pointer;\n\t\tmargin: -6px 0 -6px -6px;\n\t\tpadding: 6px;\n\t\tborder-radius: 6px;\n\n\t\t& > *[data-arrowicon] {\n\t\t\tmargin-left: auto;\n\t\t}\n\n\t\t& > *[data-newtag] {\n\t\t\tbackground: #ebebeb;\n\t\t\tfont-size: 0.625rem;\n\t\t\tborder-radius: 4px;\n\t\t\tpadding: 3px;\n\t\t\tcolor: black;\n\t\t\tposition: relative;\n\t\t\tleft: -4px;\n\t\t}\n\n\t\t:hover {\n\t\t\tbackground-color: ", ";\n\t\t}\n\t}\n\n\tsummary::-webkit-details-marker {\n\t\tdisplay: none;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mode === 'dark' ? 'rgba(246, 246, 246, 0.1)' : 'rgba(246, 246, 246, 1)';
});
var SubMenuWrapper = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tmargin-top: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n"], ["\n\tmargin-top: 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n"])));
var MainLink = styled_components_1.default.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tfont-weight: 600;\n\topacity: 1 !important;\n\n\t:hover {\n\t\t& > *[data-mainlinkicon] {\n\t\t\tanimation: ", " 0.4s ease;\n\t\t}\n\t}\n"], ["\n\tfont-weight: 600;\n\topacity: 1 !important;\n\n\t:hover {\n\t\t& > *[data-mainlinkicon] {\n\t\t\tanimation: ", " 0.4s ease;\n\t\t}\n\t}\n"])), wiggle);
var isYields = function (pathname) {
    return pathname === '/yields' || pathname.startsWith('/yields/') || pathname.startsWith('/yields?');
};
var isStables = function (pathname) {
    return pathname === '/stablecoins' || pathname.startsWith('/stablecoin/') || pathname.startsWith('/stablecoins/');
};
var isLiquidations = function (pathname) { return pathname === '/liquidations' || pathname.startsWith('/liquidations/'); };
var isDexs = function (pathname) {
    return pathname === '/dexs' || pathname.startsWith('/dexs/') || pathname.startsWith('/dex/');
};
var isFees = function (pathname) {
    return pathname === '/fees' || pathname.startsWith('/fees/') || pathname.startsWith('/fee/');
};
var isRaises = function (pathname) { return pathname === '/raises'; };
var isHacks = function (pathname) { return pathname === '/hacks'; };
var isBridges = function (pathname) { return pathname.startsWith('bridge'); };
var isBorrow = function (pathname) { return pathname === '/borrow'; };
var isActive = function (_a) {
    var pathname = _a.pathname, category = _a.category;
    switch (category) {
        case 'Yields':
            return isYields(pathname);
        case 'Stables':
            return isStables(pathname);
        case 'Liquidations':
            return isLiquidations(pathname);
        case 'Volumes':
            return isDexs(pathname);
        case 'Fees/Revenue':
            return isFees(pathname);
        case 'Raises':
            return isRaises(pathname);
        case 'Hacks':
            return isHacks(pathname);
        case 'Bridges':
            return isBridges(pathname);
        case 'Borrow Aggregator':
            return isBorrow(pathname);
        case 'DeFi':
            return (!isYields(pathname) &&
                !isStables(pathname) &&
                !isLiquidations(pathname) &&
                !isDexs(pathname) &&
                !isFees(pathname) &&
                !isRaises(pathname) &&
                !isHacks(pathname) &&
                !isBorrow);
        default:
            return false;
    }
};
exports.default = SubMenu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
