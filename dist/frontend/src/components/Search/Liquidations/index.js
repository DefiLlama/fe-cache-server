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
var Base_1 = require("../Base");
var hooks_1 = require("./hooks");
function LiquidationsSearch(props) {
    var _a = (0, hooks_1.useGetLiquidationSearchList)(), data = _a.data, loading = _a.loading;
    return (0, jsx_runtime_1.jsx)(Base_1.DesktopSearch, __assign({}, props, { data: data, loading: loading, placeholder: "Search liquidation levels..." }));
}
exports.default = LiquidationsSearch;
