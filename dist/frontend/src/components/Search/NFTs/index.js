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
var client_1 = require("../../../api/categories/nfts/client");
var Base_1 = require("../Base");
function NFTsSearch(props) {
    var _a = (0, client_1.useFetchNftCollectionsList)(), _b = _a.data, data = _b === void 0 ? [] : _b, loading = _a.loading;
    return (0, jsx_runtime_1.jsx)(Base_1.DesktopSearch, __assign({}, props, { data: data, loading: loading }));
}
exports.default = NFTsSearch;
