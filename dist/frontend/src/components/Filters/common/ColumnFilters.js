"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnFilters = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var ariakit_1 = require("ariakit");
var Base_1 = require("./Base");
var utils_1 = require("../../../components/Popover/utils");
var SlidingMenu_1 = require("../../../components/SlidingMenu");
var optionalFilters = [
    { name: '7d Base APY', key: 'show7dBaseApy' },
    { name: '7d IL', key: 'show7dIL' },
    { name: '1d Volume', key: 'show1dVolume' },
    { name: '7d Volume', key: 'show7dVolume' },
    { name: 'Inception APY', key: 'showInceptionApy' }
];
function ColumnFilters(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, subMenu = _a.subMenu, props = __rest(_a, ["variant", "subMenu"]);
    var router = (0, router_1.useRouter)();
    var _c = router.query, show7dBaseApy = _c.show7dBaseApy, show7dIL = _c.show7dIL, show1dVolume = _c.show1dVolume, show7dVolume = _c.show7dVolume, showInceptionApy = _c.showInceptionApy, queries = __rest(_c, ["show7dBaseApy", "show7dIL", "show1dVolume", "show7dVolume", "showInceptionApy"]);
    var options = optionalFilters.filter(function (op) { return props[op.key]; });
    var selectedOptions = options.filter(function (option) { return router.query[option.key] === 'true'; }).map(function (op) { return op.key; });
    var addOption = function (newOptions) {
        router.push({
            pathname: router.pathname,
            query: __assign(__assign({}, queries), Object.fromEntries(newOptions.map(function (op) { return [op, true]; })))
        }, undefined, {
            shallow: true
        });
    };
    var _d = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _d[0], renderCallback = _d[1];
    var selectState = (0, ariakit_1.useSelectState)(__assign({ value: selectedOptions, setValue: addOption, gutter: 8, renderCallback: renderCallback }, (!subMenu && { animated: true })));
    var toggleAllOptions = function () {
        router.push({
            pathname: router.pathname,
            query: __assign(__assign({}, queries), Object.fromEntries(options.map(function (op) { return [op.key, true]; })))
        }, undefined, { shallow: true });
    };
    var clearAllOptions = function () {
        router.push({
            pathname: router.pathname,
            query: __assign({}, queries)
        }, undefined, { shallow: true });
    };
    var isSelected = selectedOptions.length > 0;
    if (subMenu) {
        return ((0, jsx_runtime_1.jsx)(SlidingMenu_1.SlidingMenu, __assign({ label: "Columns", selectState: selectState }, { children: (0, jsx_runtime_1.jsx)(Base_1.SelectContent, { options: options, selectedOptions: selectedOptions, clearAllOptions: clearAllOptions, toggleAllOptions: toggleAllOptions, pathname: router.pathname, variant: variant }) })));
    }
    var selectedOptionNames = selectedOptions.map(function (op) { var _a, _b; return (_b = (_a = optionalFilters.find(function (x) { return x.key === op; })) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : op; });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Base_1.SelectButton, __assign({ state: selectState, "data-variant": variant }, { children: [variant === 'secondary' ? ((0, jsx_runtime_1.jsx)(Base_1.SecondaryLabel, { children: isSelected ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Columns: " }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-selecteditems": true }, { children: selectedOptionNames.length > 2
                                        ? "".concat(selectedOptionNames[0], " + ").concat(selectedOptionNames.length - 1, " others")
                                        : selectedOptionNames.join(', ') }))] })) : ('Columns') })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Columns" }), isSelected && (0, jsx_runtime_1.jsx)(Base_1.ItemsSelected, { children: selectedOptionNames.length })] })), (0, jsx_runtime_1.jsx)(ariakit_1.MenuButtonArrow, {})] })), (0, jsx_runtime_1.jsx)(Base_1.SelectPopover, __assign({ state: selectState, modal: !isLarge, "data-variant": variant }, { children: (0, jsx_runtime_1.jsx)(Base_1.SelectContent, { options: options, selectedOptions: selectedOptions, clearAllOptions: clearAllOptions, toggleAllOptions: toggleAllOptions, pathname: router.pathname, variant: variant }) }))] }));
}
exports.ColumnFilters = ColumnFilters;
