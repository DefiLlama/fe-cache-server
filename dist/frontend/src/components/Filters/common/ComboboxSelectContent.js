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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.ComboboxSelectContent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var hooks_1 = require("../../../hooks");
var Base_1 = require("./Base");
var components_1 = require("../../../components");
var utils_1 = require("../../../utils");
var SelectContent = function (_a) {
    var options = _a.options, selectedOptions = _a.selectedOptions, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, focusItemRef = _a.focusItemRef, clearAllOptions = _a.clearAllOptions, toggleAllOptions = _a.toggleAllOptions, isOptionToggled = _a.isOptionToggled, isSlugValue = _a.isSlugValue;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Base_1.FilterFnsGroup, __assign({ "data-variant": variant }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: clearAllOptions }, { children: "Clear" })), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: toggleAllOptions }, { children: "Select all" }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "select-filteredOptions-wrapper" }, { children: options.map(function (value, i) {
                    var formattedValue = isSlugValue ? (0, utils_1.slug)(value) : value;
                    return ((0, jsx_runtime_1.jsxs)(Base_1.SelectItem, __assign({ value: formattedValue, ref: i === 0 && selectedOptions.length === options.length ? focusItemRef : null, focusOnHover: true }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ "data-name": true }, { children: value })), (0, jsx_runtime_1.jsx)(components_1.Checkbox, { checked: isOptionToggled(formattedValue) })] }), formattedValue + i));
                }) }))] }));
};
var ComboboxSelectContent = function (_a) {
    var autoFocus = _a.autoFocus, options = _a.options, contentElementId = _a.contentElementId, props = __rest(_a, ["autoFocus", "options", "contentElementId"]);
    var _b = __read((0, react_1.useState)(''), 2), inputValue = _b[0], setInputValue = _b[1];
    var debouncedInputValue = (0, hooks_1.useDebounce)(inputValue, 300);
    var filteredOptions = (0, react_1.useMemo)(function () {
        if (debouncedInputValue.length > 0) {
            var searchValue_1 = debouncedInputValue.toLowerCase();
            return options.filter(function (option) { return option.toLowerCase().includes(searchValue_1); });
        }
        return options;
    }, [options, debouncedInputValue]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { className: "combobox-input", onChange: function (e) { return setInputValue(e.target.value); }, placeholder: "Search...", role: "combobox", autoFocus: autoFocus, "aria-expanded": true, "aria-haspopup": "listbox", "aria-controls": contentElementId }), filteredOptions.length > 0 ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(SelectContent, __assign({ options: filteredOptions.slice(0, 100) }, props)) })) : ((0, jsx_runtime_1.jsx)("p", __assign({ id: "no-results" }, { children: "No results" })))] }));
};
exports.ComboboxSelectContent = ComboboxSelectContent;
