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
exports.useFormatTokensSearchList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var router_1 = require("next/router");
var styled_components_1 = __importDefault(require("styled-components"));
var Desktop_1 = require("../Base/Results/Desktop");
var Input_1 = require("../Base/Input");
var ariakit_1 = require("ariakit");
var utils_1 = require("../Base/utils");
function useFormatTokensSearchList(_a) {
    var lend = _a.lend, searchData = _a.searchData;
    var router = (0, router_1.useRouter)();
    var _b = router.query, lendQuery = _b.lend, borrow = _b.borrow, queryParams = __rest(_b, ["lend", "borrow"]);
    var _c = __read(lend ? ['lend', 'borrow'] : ['borrow', 'lend'], 2), targetParam = _c[0], restParam = _c[1];
    var data = React.useMemo(function () {
        var _a;
        var _b;
        var stablecoinsSearch = {
            name: "All USD Stablecoins",
            symbol: 'USD_Stables',
            route: {
                pathname: router.pathname,
                query: __assign((_a = {}, _a[targetParam] = 'USD_Stables', _a[restParam] = router.query[restParam] || '', _a), queryParams)
            },
            logo: 'https://icons.llamao.fi/icons/pegged/usd_native?h=48&w=48'
        };
        var yieldsList = (_b = searchData === null || searchData === void 0 ? void 0 : searchData.map(function (el) {
            var _a;
            var _b, _c, _d;
            return ({
                name: "".concat(el.name, " (").concat((_b = el.symbol) === null || _b === void 0 ? void 0 : _b.toUpperCase(), ")"),
                symbol: (_c = el.symbol) === null || _c === void 0 ? void 0 : _c.toUpperCase(),
                route: {
                    pathname: router.pathname,
                    query: __assign((_a = {}, _a[targetParam] = (_d = el.symbol) === null || _d === void 0 ? void 0 : _d.toUpperCase(), _a[restParam] = router.query[restParam] || '', _a), queryParams)
                },
                logo: el.image2 || null,
                fallbackLogo: el.image || null
            });
        })) !== null && _b !== void 0 ? _b : [];
        return [stablecoinsSearch].concat(yieldsList);
    }, [searchData, restParam, router.query, targetParam, router.pathname, queryParams]);
    var onItemClick = function (item) {
        router.push(item.route, undefined, { shallow: true });
    };
    return { data: data, onItemClick: onItemClick };
}
exports.useFormatTokensSearchList = useFormatTokensSearchList;
function YieldsSearch(_a) {
    var _b = _a.lend, lend = _b === void 0 ? false : _b, searchData = _a.searchData, value = _a.value;
    var _c = useFormatTokensSearchList({ lend: lend, searchData: searchData }), data = _c.data, onItemClick = _c.onItemClick;
    var combobox = (0, ariakit_1.useComboboxState)(__assign(__assign({ gutter: 6, sameWidth: true }, (value && { defaultValue: value })), { list: data.map(function (x) { return x.name; }) }));
    // select first item on open
    var item = (0, utils_1.findActiveItem)(combobox);
    var firstId = combobox.first();
    if (combobox.open && !item && firstId) {
        combobox.setActiveId(firstId);
    }
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { state: combobox, placeholder: lend ? 'Collateral Token' : 'Token to Borrow', withValue: true, variant: "secondary" }), (0, jsx_runtime_1.jsx)(Desktop_1.DesktopResults, { state: combobox, data: data, loading: false, onItemClick: onItemClick })] }));
}
exports.default = YieldsSearch;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\n\tinput {\n\t\twidth: 100%;\n\t}\n"], ["\n\tposition: relative;\n\n\tinput {\n\t\twidth: 100%;\n\t}\n"])));
var templateObject_1;
