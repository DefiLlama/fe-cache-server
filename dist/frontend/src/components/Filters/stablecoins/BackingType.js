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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackingType = exports.stablecoinBackingOptions = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ariakit_1 = require("ariakit");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var HeadHelp_1 = __importDefault(require("../../../components/HeadHelp"));
var utils_1 = require("../../../components/Popover/utils");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var common_1 = require("../common");
exports.stablecoinBackingOptions = [
    {
        name: 'Fiat',
        key: LocalStorage_1.STABLECOINS_SETTINGS.FIATSTABLES,
        filterFn: function (item) { return item.pegMechanism === 'fiat-backed'; },
        help: 'Show stablecoins backed by fiat'
    },
    {
        name: 'Crypto',
        key: LocalStorage_1.STABLECOINS_SETTINGS.CRYPTOSTABLES,
        filterFn: function (item) { return item.pegMechanism === 'crypto-backed'; },
        help: 'Show stablecoins backed by crypto'
    },
    {
        name: 'Algorithmic',
        key: LocalStorage_1.STABLECOINS_SETTINGS.ALGOSTABLES,
        filterFn: function (item) { return item.pegMechanism === 'algorithmic'; },
        help: 'Show algorithmic stablecoins'
    }
];
function BackingType(_a) {
    var pathname = _a.pathname;
    var router = (0, router_1.useRouter)();
    var _b = router.query, _c = _b.backing, backing = _c === void 0 ? [] : _c, chain = _b.chain, queries = __rest(_b, ["backing", "chain"]);
    var values = exports.stablecoinBackingOptions
        .filter(function (o) {
        if (backing) {
            if (backing.length === 0) {
                return true;
            }
            else if (typeof backing === 'string') {
                return o.key === backing;
            }
            else {
                return backing.includes(o.key);
            }
        }
    })
        .map(function (o) { return o.key; });
    var updateBackings = function (newFilters) {
        if (values.length === 1 && newFilters.length === 0) {
            router.push({
                pathname: pathname,
                query: __assign(__assign({}, queries), { backing: 'None' })
            }, undefined, { shallow: true });
        }
        else {
            router.push({
                pathname: pathname,
                query: __assign(__assign({}, queries), { backing: newFilters })
            }, undefined, { shallow: true });
        }
    };
    var _d = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _d[0], renderCallback = _d[1];
    var select = (0, ariakit_1.useSelectState)({
        value: values,
        setValue: updateBackings,
        gutter: 8,
        animated: true,
        renderCallback: renderCallback
    });
    var toggleAll = function () {
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { backing: exports.stablecoinBackingOptions.map(function (o) { return o.key; }) })
        }, undefined, { shallow: true });
    };
    var clear = function () {
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { backing: 'None' })
        }, undefined, { shallow: true });
    };
    var totalSelected = values.length;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(common_1.SelectButton, __assign({ state: select }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Filter by Backing" }), (0, jsx_runtime_1.jsx)(ariakit_1.MenuButtonArrow, {}), totalSelected > 0 && (0, jsx_runtime_1.jsx)(common_1.ItemsSelected, { children: totalSelected })] })), (0, jsx_runtime_1.jsxs)(common_1.SelectPopover, __assign({ state: select, modal: !isLarge }, { children: [(0, jsx_runtime_1.jsxs)(common_1.FilterFnsGroup, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: clear }, { children: "Clear" })), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: toggleAll }, { children: "Toggle all" }))] }), exports.stablecoinBackingOptions.map(function (option) { return ((0, jsx_runtime_1.jsxs)(common_1.SelectItem, __assign({ value: option.key }, { children: [option.help ? (0, jsx_runtime_1.jsx)(HeadHelp_1.default, { title: option.name, text: option.help }) : option.name, (0, jsx_runtime_1.jsx)(components_1.Checkbox, { checked: values.includes(option.key) })] }), option.key)); })] }))] }));
}
exports.BackingType = BackingType;
