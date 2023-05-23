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
exports.RaisesFilters = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var v2Base_1 = require("../v2Base");
var hooks_1 = require("../../../hooks");
var SlidingMenu_1 = require("../../../components/SlidingMenu");
var Dropdowns_1 = require("./Dropdowns");
var Search_1 = require("../../../components/Search");
function RaisesFilters(props) {
    var isSmall = (0, hooks_1.useMedia)("(max-width: 30rem)");
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(v2Base_1.Header, { children: (0, jsx_runtime_1.jsx)("h1", { children: props.header }) }), (0, jsx_runtime_1.jsxs)(v2Base_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)(Search_1.RaisesSearch, { list: props.investors || [] }), (0, jsx_runtime_1.jsx)(v2Base_1.DropdownsWrapper, { children: isSmall ? ((0, jsx_runtime_1.jsx)(SlidingMenu_1.SlidingMenu, __assign({ label: "Filters", variant: "secondary" }, { children: (0, jsx_runtime_1.jsx)(Dropdowns_1.RaisesFilterDropdowns, __assign({}, props, { isMobile: true })) }))) : ((0, jsx_runtime_1.jsx)(Dropdowns_1.RaisesFilterDropdowns, __assign({}, props))) })] })] }));
}
exports.RaisesFilters = RaisesFilters;
