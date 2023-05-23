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
exports.ChainLogo = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var hovercard_1 = require("ariakit/hovercard");
var styled_components_1 = __importDefault(require("styled-components"));
var TokenLogo_1 = __importDefault(require("../../components/TokenLogo"));
var Tooltip_1 = require("../../components/Tooltip");
var hooks_1 = require("../../hooks");
var utils_1 = require("../../utils");
var link_1 = __importDefault(require("next/link"));
var CHAIN_ICON_WIDTH = 24;
var TokenCounter = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: ", "px;\n\theight: ", "px;\n\tborder-radius: 50%;\n\tbackground: ", ";\n\tcolor: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t:focus-visible {\n\t\toutline-offset: 2px;\n\t}\n"], ["\n\twidth: ", "px;\n\theight: ", "px;\n\tborder-radius: 50%;\n\tbackground: ", ";\n\tcolor: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t:focus-visible {\n\t\toutline-offset: 2px;\n\t}\n"])), CHAIN_ICON_WIDTH, CHAIN_ICON_WIDTH, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var Row = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tbackground: none;\n\toverflow: hidden;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tbackground: none;\n\toverflow: hidden;\n"])));
var Popover = (0, styled_components_1.default)(hovercard_1.Hovercard)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tmax-width: 600px;\n\tz-index: 10;\n\tpadding: 6px;\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tcolor: ", ";\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n\n\t& > * {\n\t\tjustify-content: flex-start;\n\t\tflex-wrap: wrap;\n\n\t\t& > * {\n\t\t\tflex-shrink: 0;\n\t\t}\n\t}\n"], ["\n\tmax-width: 600px;\n\tz-index: 10;\n\tpadding: 6px;\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tcolor: ", ";\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n\n\t& > * {\n\t\tjustify-content: flex-start;\n\t\tflex-wrap: wrap;\n\n\t\t& > * {\n\t\t\tflex-shrink: 0;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowMd;
});
var ChainLogo = function (_a) {
    var chain = _a.chain, url = _a.url, iconType = _a.iconType, yieldRewardsSymbol = _a.yieldRewardsSymbol, _b = _a.disableLink, disableLinks = _b === void 0 ? false : _b;
    var shallowRoute = url.includes('/yields?chain') || url.includes('/yields?project');
    if (yieldRewardsSymbol || disableLinks) {
        return ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: disableLinks ? chain : yieldRewardsSymbol }, { children: (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { address: chain, logo: iconType === 'token' ? (0, utils_1.tokenIconUrl)(chain) : (0, utils_1.chainIconUrl)(chain) }) })));
    }
    else {
        return ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: chain }, { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: url.includes('/yields?chain')
                    ? "".concat(url, "=").concat(chain)
                    : url.includes('/yields?project')
                        ? "".concat(url, "=").concat(chain.toLowerCase().split(' ').join('-'))
                        : "".concat(url, "/").concat(chain), shallow: shallowRoute, passHref: true, prefetch: false }, { children: (0, jsx_runtime_1.jsx)("a", { children: (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { onClick: function (e) { return e.stopPropagation(); }, address: chain, logo: iconType === 'token' ? (0, utils_1.tokenIconUrl)(chain) : (0, utils_1.chainIconUrl)(chain) }) }) }), chain) })));
    }
};
exports.ChainLogo = ChainLogo;
var isChain = function (chain) {
    return ['ethereum', 'avalanche', 'optimism', 'near', 'metis', 'aurora'].includes(chain.toLowerCase());
};
// todo update links prop to {name: string, iconType: string}
var IconsRow = function (_a) {
    var _b = _a.links, links = _b === void 0 ? [] : _b, url = _a.url, iconType = _a.iconType, _c = _a.yieldRewardsSymbols, yieldRewardsSymbols = _c === void 0 ? [] : _c, _d = _a.disableLinks, disableLinks = _d === void 0 ? false : _d;
    var _e = __read((0, react_1.useState)(0), 2), visibleChainIndex = _e[0], setVisibileChainIndex = _e[1];
    var mainWrapEl = (0, react_1.useRef)(null);
    var mainWrapWidth = (0, hooks_1.useResize)(mainWrapEl).width;
    (0, react_1.useEffect)(function () {
        var remainingWidth = (mainWrapWidth > 280 ? 280 : mainWrapWidth) - CHAIN_ICON_WIDTH;
        var lastIndexOfFilters = 0;
        links.forEach(function () {
            if (remainingWidth < 0)
                return;
            remainingWidth -= CHAIN_ICON_WIDTH;
            lastIndexOfFilters += 1;
        });
        setVisibileChainIndex(links.length > 2 ? lastIndexOfFilters : links.length);
    }, [mainWrapWidth, links]);
    var tooManyChainsIndex = visibleChainIndex < links.length ? visibleChainIndex - 1 : visibleChainIndex;
    var visibleChains = links.length > 2 ? links.slice(0, tooManyChainsIndex) : links;
    var hoverChains = tooManyChainsIndex !== visibleChainIndex ? links.slice(tooManyChainsIndex, links.length) : [];
    var hovercard = (0, hovercard_1.useHovercardState)();
    return ((0, jsx_runtime_1.jsxs)(Row, __assign({ ref: mainWrapEl }, { children: [visibleChains.map(function (chain, i) { return ((0, jsx_runtime_1.jsx)(exports.ChainLogo, { chain: chain, url: url === '/yields?project' ? (isChain(chain) ? '/yields?chain' : url) : url, iconType: isChain(chain) ? 'chain' : iconType, yieldRewardsSymbol: yieldRewardsSymbols[i], disableLink: disableLinks }, chain)); }), !!hoverChains.length && links.length > 2 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(hovercard_1.HovercardAnchor, __assign({ state: hovercard }, { children: (0, jsx_runtime_1.jsx)(TokenCounter, { children: "+".concat(hoverChains.length) }) })), (0, jsx_runtime_1.jsx)(Popover, __assign({ state: hovercard }, { children: (0, jsx_runtime_1.jsx)(Row, { children: hoverChains.map(function (chain, i) { return ((0, jsx_runtime_1.jsx)(exports.ChainLogo, { chain: chain, url: url, iconType: iconType, yieldRewardsSymbol: yieldRewardsSymbols[i] }, chain)); }) }) }))] }))] })));
};
exports.default = IconsRow;
var templateObject_1, templateObject_2, templateObject_3;
