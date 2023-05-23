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
exports.MoreResults = exports.DesktopResults = exports.Empty = exports.Popover = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var combobox_1 = require("ariakit/combobox");
var styled_components_1 = __importDefault(require("styled-components"));
var Desktop_1 = require("./Row/Desktop");
exports.Popover = (0, styled_components_1.default)(combobox_1.ComboboxPopover)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\theight: 100%;\n\tmax-height: 320px;\n\toverflow-y: auto;\n\tbackground: ", ";\n\tborder-radius: 12px;\n\toutline: ", ";\n\tbox-shadow: ", ";\n\tz-index: 10;\n"], ["\n\theight: 100%;\n\tmax-height: 320px;\n\toverflow-y: auto;\n\tbackground: ", ";\n\tborder-radius: 12px;\n\toutline: ", ";\n\tbox-shadow: ", ";\n\tz-index: 10;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text5;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowLg;
});
exports.Empty = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tpadding: 24px 12px;\n\tcolor: ", ";\n\ttext-align: center;\n"], ["\n\tpadding: 24px 12px;\n\tcolor: ", ";\n\ttext-align: center;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
function DesktopResults(_a) {
    var state = _a.state, data = _a.data, loading = _a.loading, onItemClick = _a.onItemClick, props = __rest(_a, ["state", "data", "loading", "onItemClick"]);
    var _b = __read((0, react_1.useState)(10), 2), resultsLength = _b[0], setResultsLength = _b[1];
    var showMoreResults = function () {
        setResultsLength(function (prev) { return prev + 10; });
    };
    var sortedList = state.value.length > 2 ? sortResults(state.matches) : state.matches;
    var options = sortedList.map(function (o) { var _a; return (_a = data.find(function (x) { return x.name === o; })) !== null && _a !== void 0 ? _a : o; });
    return ((0, jsx_runtime_1.jsx)(exports.Popover, __assign({ state: state }, props, { children: loading || !state.mounted ? ((0, jsx_runtime_1.jsx)(exports.Empty, { children: "Loading..." })) : state.matches.length ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [options.slice(0, resultsLength + 1).map(function (token) { return ((0, jsx_runtime_1.jsx)(Desktop_1.DesktopRow, { onItemClick: onItemClick, data: token, state: state }, token.name)); }), resultsLength < sortedList.length && (0, jsx_runtime_1.jsx)(exports.MoreResults, __assign({ onClick: showMoreResults }, { children: "See more..." }))] })) : ((0, jsx_runtime_1.jsx)(exports.Empty, { children: "No results found" })) })));
}
exports.DesktopResults = DesktopResults;
var sortResults = function (results) {
    var _a = results.reduce(function (acc, curr) {
        if (curr.startsWith('Show all')) {
            acc.pools.push(curr);
        }
        else
            acc.tokens.push(curr);
        return acc;
    }, { tokens: [], pools: [] }), pools = _a.pools, tokens = _a.tokens;
    return __spreadArray(__spreadArray([], __read(pools), false), __read(tokens), false);
};
exports.MoreResults = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\ttext-align: left;\n\twidth: 100%;\n\tpadding: 12px 16px 28px;\n\tcolor: ", ";\n\tbackground: ", ";\n"], ["\n\ttext-align: left;\n\twidth: 100%;\n\tpadding: 12px 16px 28px;\n\tcolor: ", ";\n\tbackground: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.link;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg6;
});
var templateObject_1, templateObject_2, templateObject_3;
