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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterByValue = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ariakit_1 = require("ariakit");
var components_1 = require("../../../components");
var Popover_1 = __importDefault(require("../../../components/Popover"));
var Base_1 = require("./Base");
function FilterByValue(_a) {
    var header = _a.header, onSubmit = _a.onSubmit, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b;
    return ((0, jsx_runtime_1.jsx)(Popover_1.default, { trigger: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: header }), (0, jsx_runtime_1.jsx)(ariakit_1.MenuButtonArrow, {})] }), content: (0, jsx_runtime_1.jsx)(Base_1.PopoverContent, { children: (0, jsx_runtime_1.jsxs)(Base_1.PopoverForm, __assign({ onSubmit: onSubmit }, { children: [(0, jsx_runtime_1.jsx)("label", { children: (0, jsx_runtime_1.jsx)("input", { type: "number", name: "max" }) }), (0, jsx_runtime_1.jsx)(components_1.ApplyFilters, { children: "Apply Filter" })] })) }) }));
}
exports.FilterByValue = FilterByValue;
