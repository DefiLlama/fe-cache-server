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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var Base_1 = require("../Base");
var types_1 = require("../types");
var protocols_1 = require("../../../components/Filters/protocols");
var hooks_1 = require("./hooks");
function ProtocolsChainsSearch(props) {
    var _a = props.includedSets, includedSets = _a === void 0 ? Object.values(types_1.SETS) : _a, customPath = props.customPath, options = props.options;
    var _b = (0, hooks_1.useGetDefiSearchList)({ includedSets: includedSets, customPath: customPath }), data = _b.data, loading = _b.loading;
    return (0, jsx_runtime_1.jsx)(Base_1.DesktopSearch, __assign({}, props, { data: data, loading: loading, filters: (0, jsx_runtime_1.jsx)(TvlOptions, { options: options }) }));
}
exports.default = ProtocolsChainsSearch;
var TvlOptions = function (_a) {
    var _b;
    var options = _a.options;
    var router = (0, router_1.useRouter)();
    if (((_b = router.pathname) === null || _b === void 0 ? void 0 : _b.includes('/protocol/')) && (!options || options.length === 0))
        return null;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(protocols_1.DesktopProtocolFilters, { options: options }), (0, jsx_runtime_1.jsx)(protocols_1.TabletProtocolsFilters, { options: options })] }));
};
