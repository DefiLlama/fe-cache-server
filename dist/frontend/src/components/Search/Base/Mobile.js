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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var router_1 = require("next/router");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
var Input_1 = require("./Input");
var hooks_1 = require("../../../hooks");
var hooks_2 = require("../Liquidations/hooks");
var hooks_3 = require("../ProtocolsChains/hooks");
var hooks_4 = require("../Stablecoins/hooks");
var Mobile_1 = require("./Results/Mobile");
var hooks_5 = require("../Adaptors/hooks");
var client_1 = require("../../../api/categories/nfts/client");
function MobileSearch() {
    var _a = useMobileSearchResult()({}), data = _a.data, loading = _a.loading, onSearchTermChange = _a.onSearchTermChange, onItemClick = _a.onItemClick;
    var _b = __read((0, react_1.useState)(''), 2), inputValue = _b[0], setInputValue = _b[1];
    var _c = __read((0, react_1.useState)(false), 2), display = _c[0], setDisplay = _c[1];
    var debouncedInputValue = (0, hooks_1.useDebounce)(inputValue, 500);
    (0, react_1.useEffect)(function () {
        if (onSearchTermChange)
            onSearchTermChange(debouncedInputValue);
    }, [debouncedInputValue, onSearchTermChange]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: display ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Input_1.MobileInput, { value: inputValue, setValue: setInputValue, hideInput: setDisplay }), (0, jsx_runtime_1.jsx)(Mobile_1.MobileResults, { inputValue: debouncedInputValue, data: data, loading: loading, onItemClick: onItemClick })] })) : ((0, jsx_runtime_1.jsx)(Button, __assign({ onClick: function () { return setDisplay(true); } }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.Search, { height: 16, width: 16 }) }))) }));
}
exports.default = MobileSearch;
var useMobileSearchResult = function () {
    var router = (0, router_1.useRouter)();
    if (router.pathname.startsWith('/stablecoin')) {
        return hooks_4.useGetStablecoinsSearchList;
    }
    if (router.pathname.startsWith('/liquidations')) {
        return hooks_2.useGetLiquidationSearchList;
    }
    if (router.pathname.startsWith('/dex')) {
        return useGetDexesSearchList;
    }
    if (router.pathname.startsWith('/nft')) {
        return client_1.useFetchNftCollectionsList;
    }
    if (router.pathname.startsWith('/fee')) {
        return useGetFeesSearchList;
    }
    return hooks_3.useGetDefiSearchList;
};
function useGetFeesSearchList() {
    return (0, hooks_5.useGetAdaptorsSearchList)('fees');
}
function useGetDexesSearchList() {
    return (0, hooks_5.useGetAdaptorsSearchList)('dexs');
}
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground: #445ed0;\n\tcolor: #ffffff;\n\tpadding: 6px 10px;\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n"], ["\n\tbackground: #445ed0;\n\tcolor: #ffffff;\n\tpadding: 6px 10px;\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadow;
});
var templateObject_1;
