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
exports.FiltersByCategory = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var router_1 = require("next/router");
var ariakit_1 = require("ariakit");
var common_1 = require("../common");
var utils_1 = require("../../../components/Popover/utils");
var ComboboxSelectContent_1 = require("../common/ComboboxSelectContent");
var SlidingMenu_1 = require("../../../components/SlidingMenu");
function FiltersByCategory(_a) {
    var _b, _c;
    var _d = _a.categoryList, categoryList = _d === void 0 ? [] : _d, selectedCategories = _a.selectedCategories, pathname = _a.pathname, _e = _a.variant, variant = _e === void 0 ? 'primary' : _e, subMenu = _a.subMenu, _f = _a.hideSelectedCount, hideSelectedCount = _f === void 0 ? false : _f;
    var router = (0, router_1.useRouter)();
    var _g = router.query, category = _g.category, queries = __rest(_g, ["category"]);
    var addCategory = function (newCategory) {
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { category: newCategory })
        }, undefined, { shallow: true });
    };
    var combobox = (0, ariakit_1.useComboboxState)({ list: categoryList });
    // value and setValue shouldn't be passed to the select state because the
    // select value and the combobox value are different things.
    var value = combobox.value, setValue = combobox.setValue, selectProps = __rest(combobox, ["value", "setValue"]);
    var _h = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _h[0], renderCallback = _h[1];
    var selectState = (0, ariakit_1.useSelectState)(__assign(__assign(__assign({}, selectProps), { value: selectedCategories, setValue: addCategory, gutter: 8, renderCallback: renderCallback }), (!subMenu && { animated: true })));
    // Resets combobox value when popover is collapsed
    if (!selectState.mounted && combobox.value) {
        combobox.setValue('');
    }
    var toggleAllOptions = function () {
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { category: 'All' })
        }, undefined, { shallow: true });
    };
    var clearAllOptions = function () {
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { category: 'None' })
        }, undefined, { shallow: true });
    };
    var focusItemRef = (0, react_1.useRef)(null);
    var isSelected = selectedCategories.length > 0 && selectedCategories.length !== categoryList.length;
    var isOptionToggled = function (option) {
        return (selectState.value.includes(option) ? true : false) || (category || []).includes('All');
    };
    if (subMenu) {
        return ((0, jsx_runtime_1.jsx)(SlidingMenu_1.SlidingMenu, __assign({ label: "Categories", selectState: selectState }, { children: (0, jsx_runtime_1.jsx)(ComboboxSelectContent_1.ComboboxSelectContent, { options: categoryList, selectedOptions: selectedCategories, clearAllOptions: clearAllOptions, toggleAllOptions: toggleAllOptions, focusItemRef: focusItemRef, variant: variant, pathname: pathname, isOptionToggled: isOptionToggled, contentElementId: (_b = selectState.contentElement) === null || _b === void 0 ? void 0 : _b.id }) })));
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(common_1.SelectButton, __assign({ state: selectState, "data-variant": variant }, { children: [variant === 'secondary' ? ((0, jsx_runtime_1.jsx)(common_1.SecondaryLabel, { children: isSelected ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Category: " }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-selecteditems": true }, { children: selectedCategories.length > 2
                                        ? "".concat(selectedCategories[0], " + ").concat(selectedCategories.length - 1, " others")
                                        : selectedCategories.join(', ') }))] })) : ('Category') })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Filter by Category" }), isSelected && !hideSelectedCount && (0, jsx_runtime_1.jsx)(common_1.ItemsSelected, { children: selectedCategories.length })] })), (0, jsx_runtime_1.jsx)(ariakit_1.MenuButtonArrow, {})] })), (0, jsx_runtime_1.jsx)(common_1.ComboboxSelectPopover, __assign({ state: selectState, modal: !isLarge, composite: false, initialFocusRef: focusItemRef, "data-variant": variant }, { children: (0, jsx_runtime_1.jsx)(ComboboxSelectContent_1.ComboboxSelectContent, { options: categoryList, selectedOptions: selectedCategories, clearAllOptions: clearAllOptions, toggleAllOptions: toggleAllOptions, focusItemRef: focusItemRef, variant: variant, pathname: pathname, autoFocus: true, isOptionToggled: isOptionToggled, contentElementId: (_c = selectState.contentElement) === null || _c === void 0 ? void 0 : _c.id }) }))] }));
}
exports.FiltersByCategory = FiltersByCategory;
