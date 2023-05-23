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
exports.ResetAllYieldFilters = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var SlidingMenu_1 = require("../../../components/SlidingMenu");
var v2Base_1 = require("../v2Base");
function ResetAllYieldFilters(_a) {
    var pathname = _a.pathname, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, subMenu = _a.subMenu, resetContext = _a.resetContext;
    var router = (0, router_1.useRouter)();
    var handleClick = function () {
        router.push(pathname, undefined, { shallow: true });
        resetContext === null || resetContext === void 0 ? void 0 : resetContext();
    };
    if (subMenu) {
        return (0, jsx_runtime_1.jsx)(SlidingMenu_1.MenuItem, { label: "Reset all filters", onClick: handleClick });
    }
    return ((0, jsx_runtime_1.jsx)(v2Base_1.ResetAllButton, __assign({ onClick: handleClick, "data-variant": variant }, { children: "Reset all filters" })));
}
exports.ResetAllYieldFilters = ResetAllYieldFilters;
