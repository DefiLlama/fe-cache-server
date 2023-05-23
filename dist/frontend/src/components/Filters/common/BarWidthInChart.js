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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarWidthInChart = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ariakit_1 = require("ariakit");
var components_1 = require("../../../components");
var Popover_1 = __importDefault(require("../../../components/Popover"));
var react_feather_1 = require("react-feather");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var Base_1 = require("./Base");
function BarWidthInChart(_a) {
    var color = _a.color;
    var _b = __read((0, LocalStorage_1.useChartManager)(), 2), barMinWidth = _b[0], updateWidth = _b[1];
    var onSubmit = function (e) {
        var _a;
        e.preventDefault();
        var form = e.target;
        var minAvailable = Number((_a = form.min) === null || _a === void 0 ? void 0 : _a.value);
        updateWidth(Number.isNaN(minAvailable) ? 0 : minAvailable);
    };
    return ((0, jsx_runtime_1.jsx)(Popover_1.default, { trigger: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Settings, { size: 14, style: { height: '19.5px' } }), (0, jsx_runtime_1.jsx)(ariakit_1.MenuButtonArrow, {})] }), content: (0, jsx_runtime_1.jsx)(Base_1.PopoverContent, { children: (0, jsx_runtime_1.jsxs)(Base_1.PopoverForm, __assign({ onSubmit: onSubmit }, { children: [(0, jsx_runtime_1.jsxs)("label", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Bar width in chart" }), (0, jsx_runtime_1.jsx)("input", { type: "number", name: "min", defaultValue: Number.isNaN(Number(barMinWidth)) ? 0 : Number(barMinWidth), min: 0, max: 5 })] }), (0, jsx_runtime_1.jsx)(components_1.ApplyFilters, { children: "Update" })] })) }), variant: "secondary", color: color }));
}
exports.BarWidthInChart = BarWidthInChart;
