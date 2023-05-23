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
exports.MobileResults = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_virtual_1 = require("@tanstack/react-virtual");
var styled_components_1 = __importDefault(require("styled-components"));
var Mobile_1 = require("./Row/Mobile");
var MobilePopover = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 56px;\n\tleft: 8px;\n\tright: 8px;\n\theight: 100%;\n\tmax-height: 240px;\n\toverflow-y: auto;\n\tbackground: ", ";\n\tborder-bottom-left-radius: 12px;\n\tborder-bottom-right-radius: 12px;\n\toutline: ", ";\n\tbox-shadow: ", ";\n\tz-index: 10;\n"], ["\n\tposition: absolute;\n\ttop: 56px;\n\tleft: 8px;\n\tright: 8px;\n\theight: 100%;\n\tmax-height: 240px;\n\toverflow-y: auto;\n\tbackground: ", ";\n\tborder-bottom-left-radius: 12px;\n\tborder-bottom-right-radius: 12px;\n\toutline: ", ";\n\tbox-shadow: ", ";\n\tz-index: 10;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text5;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowLg;
});
var Empty = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tpadding: 24px 12px;\n\tcolor: ", ";\n\ttext-align: center;\n"], ["\n\tpadding: 24px 12px;\n\tcolor: ", ";\n\ttext-align: center;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
function MobileResults(_a) {
    var inputValue = _a.inputValue, data = _a.data, loading = _a.loading, onItemClick = _a.onItemClick, props = __rest(_a, ["inputValue", "data", "loading", "onItemClick"]);
    var results = filterAnSortResults(data, inputValue);
    // The scrollable element for your list
    var parentRef = (0, react_1.useRef)();
    // The virtualizer
    var rowVirtualizer = (0, react_virtual_1.useVirtualizer)({
        count: results.length,
        getScrollElement: function () { return parentRef.current; },
        estimateSize: function () { return 50; }
    });
    return ((0, jsx_runtime_1.jsx)(MobilePopover, __assign({ ref: parentRef }, props, { children: loading ? ((0, jsx_runtime_1.jsx)(Empty, { children: "Loading..." })) : results.length ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                    height: "".concat(rowVirtualizer.getTotalSize(), "px"),
                    width: '100%',
                    position: 'relative'
                } }, { children: rowVirtualizer.getVirtualItems().map(function (virtualItem) {
                    var data = results[virtualItem.index];
                    return ((0, jsx_runtime_1.jsx)(Mobile_1.MobileRow, { data: data, style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: "".concat(virtualItem.size, "px"),
                            transform: "translateY(".concat(virtualItem.start, "px)")
                        }, onItemClick: onItemClick }, virtualItem.key));
                }) })) })) : ((0, jsx_runtime_1.jsx)(Empty, { children: "No results found" })) })));
}
exports.MobileResults = MobileResults;
var filterAnSortResults = function (data, inputValue) {
    if (!inputValue || inputValue === '') {
        return data;
    }
    var results = data.filter(function (item) {
        return item.name.toLowerCase().startsWith(inputValue.toLowerCase());
    });
    if (inputValue.length < 3) {
        return results;
    }
    var _a = results.reduce(function (acc, curr) {
        if (curr.name.startsWith('Show all')) {
            acc.pools.push(curr);
        }
        else
            acc.tokens.push(curr);
        return acc;
    }, { tokens: [], pools: [] }), pools = _a.pools, tokens = _a.tokens;
    return __spreadArray(__spreadArray([], __read(pools), false), __read(tokens), false);
};
var templateObject_1, templateObject_2;
