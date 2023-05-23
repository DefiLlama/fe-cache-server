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
exports.ResetAllStablecoinFilters = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
function ResetAllStablecoinFilters(_a) {
    var pathname = _a.pathname;
    var router = (0, router_1.useRouter)();
    var _b = __read((0, LocalStorage_1.useStablecoinsManager)(), 2), state = _b[0], updater = _b[1];
    return ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () {
            Object.values(LocalStorage_1.STABLECOINS_SETTINGS).filter(function (setting) { return !state[setting]; }).map((function (setting) { return updater(setting)(); }));
            router.push(pathname, undefined, { shallow: true });
        }, style: { textDecoration: 'underline' } }, { children: "Reset all filters" })));
}
exports.ResetAllStablecoinFilters = ResetAllStablecoinFilters;
