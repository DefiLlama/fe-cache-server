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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoreResults = exports.IncludeExcludeTokens = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var router_1 = require("next/router");
var ariakit_1 = require("ariakit");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var Input_1 = require("../../../components/Search/Base/Input");
var Desktop_1 = require("../../../components/Search/Base/Results/Desktop");
var utils_1 = require("../../../components/Search/Base/utils");
function IncludeExcludeTokens(_a) {
    var tokens = _a.tokens, props = __rest(_a, ["tokens"]);
    var _b = __read((0, react_1.useState)(3), 2), resultsLength = _b[0], setResultsLength = _b[1];
    var searchWrapperRef = (0, react_1.useRef)();
    var router = (0, router_1.useRouter)();
    var _c = router.query, token = _c.token, excludeToken = _c.excludeToken;
    var tokensToInclude = token ? (typeof token === 'string' ? [token] : __spreadArray([], __read(token), false)) : [];
    var tokensToExclude = excludeToken ? (typeof excludeToken === 'string' ? [excludeToken] : __spreadArray([], __read(excludeToken), false)) : [];
    var showMoreResults = function () {
        setResultsLength(function (prev) { return prev + 5; });
    };
    var combobox = (0, ariakit_1.useComboboxState)({
        gutter: 6,
        sameWidth: true,
        list: tokens.map(function (x) { return x.symbol; })
    });
    // select first item on open
    var item = (0, utils_1.findActiveItem)(combobox);
    var firstId = combobox.first();
    if (combobox.open && !item && firstId) {
        combobox.setActiveId(firstId);
    }
    var handleTokenInclude = function (token, action) {
        var tokenQueryParams = action === 'delete' ? tokensToInclude.filter(function (x) { return x !== token; }) : __spreadArray(__spreadArray([], __read(tokensToInclude), false), [token], false);
        router.push({ pathname: router.pathname, query: __assign(__assign({}, router.query), { token: tokenQueryParams }) }, undefined, {
            shallow: true
        });
    };
    var handleTokenExclude = function (token, action) {
        var tokenQueryParams = action === 'delete' ? tokensToExclude.filter(function (x) { return x !== token; }) : __spreadArray(__spreadArray([], __read(tokensToExclude), false), [token], false);
        router.push({ pathname: router.pathname, query: __assign(__assign({}, router.query), { excludeToken: tokenQueryParams }) }, undefined, {
            shallow: true
        });
    };
    var options = combobox.matches
        .filter(function (t) { return !tokensToInclude.includes(t) && !tokensToExclude.includes(t); })
        .map(function (o) { return tokens.find(function (x) { return x.symbol === o; }); });
    return ((0, jsx_runtime_1.jsxs)(SearchWrapper, __assign({ ref: searchWrapperRef }, props, { children: [(tokensToInclude.length > 0 || tokensToExclude.length > 0) && ((0, jsx_runtime_1.jsxs)(OptionsWrapper, { children: [tokensToInclude.map(function (token) { return ((0, jsx_runtime_1.jsxs)(IncludeOrExclude, __assign({ onClick: function () { return handleTokenInclude(token, 'delete'); } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Include: ".concat(token) }), (0, jsx_runtime_1.jsx)(react_feather_1.X, { size: 14 })] }), 'includedtokeninsearch' + token)); }), tokensToExclude.map(function (token) { return ((0, jsx_runtime_1.jsxs)(IncludeOrExclude, __assign({ onClick: function () { return handleTokenExclude(token, 'delete'); } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Exclude: ".concat(token) }), (0, jsx_runtime_1.jsx)(react_feather_1.X, { size: 14 })] }), 'excludedtokeninsearch' + token)); })] })), (0, jsx_runtime_1.jsxs)(InputWrapper, { children: [(0, jsx_runtime_1.jsx)(SearchIcon, { size: 16 }), (0, jsx_runtime_1.jsx)(Input_1.Input, { state: combobox, placeholder: "Search for a token to filter by", hideIcon: true })] }), (0, jsx_runtime_1.jsx)(StyledPopover, __assign({ state: combobox }, { children: !combobox.mounted ? ((0, jsx_runtime_1.jsx)(Desktop_1.Empty, { children: "Loading..." })) : combobox.matches.length ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [options.slice(0, resultsLength + 1).map(function (token) { return ((0, jsx_runtime_1.jsxs)(ResultRow, __assign({ onClick: function () { return handleTokenInclude(token.symbol); } }, { children: [((token === null || token === void 0 ? void 0 : token.logo) || (token === null || token === void 0 ? void 0 : token.fallbackLogo)) && ((0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: token === null || token === void 0 ? void 0 : token.logo, fallbackLogo: token === null || token === void 0 ? void 0 : token.fallbackLogo })), (0, jsx_runtime_1.jsx)("span", { children: "".concat(token.name, " (").concat(token.symbol, ")") }), (0, jsx_runtime_1.jsxs)(ActionsWrapper, { children: [(0, jsx_runtime_1.jsx)(Action, __assign({ onClick: function (e) {
                                                e.stopPropagation();
                                                handleTokenInclude(token.symbol);
                                            } }, { children: "Include" })), (0, jsx_runtime_1.jsx)(Action, __assign({ onClick: function (e) {
                                                e.stopPropagation();
                                                handleTokenExclude(token.symbol);
                                            } }, { children: "Exclude" }))] })] }), token.name)); }), resultsLength < combobox.matches.length && ((0, jsx_runtime_1.jsx)(exports.MoreResults, __assign({ onClick: showMoreResults }, { children: "See more..." })))] })) : ((0, jsx_runtime_1.jsx)(Desktop_1.Empty, { children: "No results found" })) }))] })));
}
exports.IncludeExcludeTokens = IncludeExcludeTokens;
var OptionsWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 4px;\n\tpadding: 0 8px;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 4px;\n\tpadding: 0 8px;\n"])));
var SearchWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: none;\n\tflex-direction: column;\n\tgap: 8px;\n\tbackground: ", ";\n\tborder-radius: 8px;\n\tpadding: 8px 0;\n\n\t:focus-within {\n\t\toutline: 1px solid ", ";\n\t}\n\n\t&[data-alwaysdisplay='true'] {\n\t\tdisplay: flex;\n\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\tsvg {\n\t\tcolor: #646466;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tdisplay: flex;\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: none;\n\tflex-direction: column;\n\tgap: 8px;\n\tbackground: ", ";\n\tborder-radius: 8px;\n\tpadding: 8px 0;\n\n\t:focus-within {\n\t\toutline: 1px solid ", ";\n\t}\n\n\t&[data-alwaysdisplay='true'] {\n\t\tdisplay: flex;\n\n\t\tsvg {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\tsvg {\n\t\tcolor: #646466;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tdisplay: flex;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bpSm;
});
var StyledPopover = (0, styled_components_1.default)(Desktop_1.Popover)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tleft: 0;\n\tright: 0;\n\ttop: 12px;\n\tborder-radius: 8px;\n"], ["\n\tleft: 0;\n\tright: 0;\n\ttop: 12px;\n\tborder-radius: 8px;\n"])));
var SearchIcon = (0, styled_components_1.default)(react_feather_1.Search)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tposition: absolute;\n\tleft: 8px;\n\n\t@media screen and (max-width: ", ") {\n\t\tdisplay: none;\n\n\t\t&[data-alwaysdisplay='true'] {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n"], ["\n\tposition: absolute;\n\tleft: 8px;\n\n\t@media screen and (max-width: ", ") {\n\t\tdisplay: none;\n\n\t\t&[data-alwaysdisplay='true'] {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpSm;
});
var InputWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t& *:nth-child(2) {\n\t\twidth: 100%;\n\t\tfont-size: 0.875rem;\n\t\tborder: none;\n\t\tbackground: none;\n\t\tborder-radius: 8px;\n\t\tpadding: 0 32px;\n\n\t\t:focus-visible {\n\t\t\toutline: none;\n\t\t}\n\t}\n"], ["\n\t& *:nth-child(2) {\n\t\twidth: 100%;\n\t\tfont-size: 0.875rem;\n\t\tborder: none;\n\t\tbackground: none;\n\t\tborder-radius: 8px;\n\t\tpadding: 0 32px;\n\n\t\t:focus-visible {\n\t\t\toutline: none;\n\t\t}\n\t}\n"])));
var ResultRow = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 4px;\n\tpadding: 8px;\n\tfont-size: 0.85rem;\n\tcolor: ", ";\n\toverflow: hidden;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t& + & {\n\t\tborder-top: 1px solid ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tpadding: 12px 16px;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 4px;\n\tpadding: 8px;\n\tfont-size: 0.85rem;\n\tcolor: ", ";\n\toverflow: hidden;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t& + & {\n\t\tborder-top: 1px solid ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tpadding: 12px 16px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
}, function (_a) {
    var theme = _a.theme;
    return theme.bpSm;
});
var ActionsWrapper = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tgap: 4px;\n\tmargin-top: 4px;\n\n\t@media screen and (min-width: ", ") {\n\t\twidth: min-content;\n\t\tmargin-top: 0px;\n\t\tmargin-left: auto;\n\t}\n"], ["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tgap: 4px;\n\tmargin-top: 4px;\n\n\t@media screen and (min-width: ", ") {\n\t\twidth: min-content;\n\t\tmargin-top: 0px;\n\t\tmargin-left: auto;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpSm;
});
var Action = styled_components_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tflex: 1;\n\tborder-radius: 8px;\n\tpadding: 8px;\n\tbackground: ", ";\n\n\t@media screen and (min-width: ", ") {\n\t\tpadding: 4px 8px;\n\t}\n"], ["\n\tflex: 1;\n\tborder-radius: 8px;\n\tpadding: 8px;\n\tbackground: ", ";\n\n\t@media screen and (min-width: ", ") {\n\t\tpadding: 4px 8px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#40444F' : '#dcdcdc');
}, function (_a) {
    var theme = _a.theme;
    return theme.bpSm;
});
var IncludeOrExclude = styled_components_1.default.button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 4px;\n\tflex-wrap: nowrap;\n\tpadding: 4px 8px;\n\twhite-space: nowrap;\n\tborder-radius: 8px;\n\tbackground: ", ";\n\n\tsvg {\n\t\tflex-shrink: 0;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 4px;\n\tflex-wrap: nowrap;\n\tpadding: 4px 8px;\n\twhite-space: nowrap;\n\tborder-radius: 8px;\n\tbackground: ", ";\n\n\tsvg {\n\t\tflex-shrink: 0;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#40444F' : '#dcdcdc');
});
exports.MoreResults = styled_components_1.default.button(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\ttext-align: left;\n\twidth: 100%;\n\tpadding: 12px 16px;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder-top: 1px solid ", ";\n"], ["\n\ttext-align: left;\n\twidth: 100%;\n\tpadding: 12px 16px;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder-top: 1px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.link;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
