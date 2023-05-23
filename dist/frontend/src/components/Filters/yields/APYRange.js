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
exports.APYRange = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var common_1 = require("../common");
function APYRange(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, subMenu = _a.subMenu;
    var router = (0, router_1.useRouter)();
    var handleSubmit = function (e) {
        var _a, _b;
        e.preventDefault();
        var form = e.target;
        var minApy = (_a = form.min) === null || _a === void 0 ? void 0 : _a.value;
        var maxApy = (_b = form.max) === null || _b === void 0 ? void 0 : _b.value;
        router.push({
            pathname: router.pathname,
            query: __assign(__assign({}, router.query), { minApy: minApy, maxApy: maxApy })
        }, undefined, {
            shallow: true
        });
    };
    var _c = router.query, minApy = _c.minApy, maxApy = _c.maxApy;
    var min = typeof minApy === 'string' && minApy !== '' ? Number(minApy).toLocaleString() : null;
    var max = typeof maxApy === 'string' && maxApy !== '' ? Number(maxApy).toLocaleString() : null;
    var label = min || max ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "APY: " }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-selecteditems": true }, { children: "".concat(min || 'min', " - ").concat(max || 'max') }))] })) : ('APY');
    var Header = function () {
        return (0, jsx_runtime_1.jsx)(common_1.SecondaryLabel, { children: label });
    };
    return ((0, jsx_runtime_1.jsx)(common_1.FilterBetweenRange, { name: "APY Range", header: variant === 'secondary' ? (0, jsx_runtime_1.jsx)(Header, {}) : 'Filter by APY', onSubmit: handleSubmit, variant: variant, subMenu: subMenu }));
}
exports.APYRange = APYRange;
