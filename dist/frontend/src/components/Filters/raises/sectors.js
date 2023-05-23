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
exports.Sectors = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var router_1 = require("next/router");
var ariakit_1 = require("ariakit");
var common_1 = require("../common");
var utils_1 = require("../../../components/Popover/utils");
var SlidingMenu_1 = require("../../../components/SlidingMenu");
var ComboboxSelectContent_1 = require("../common/ComboboxSelectContent");
function Sectors(_a) {
    var _b, _c;
    var _d = _a.sectors, sectors = _d === void 0 ? [] : _d, selectedSectors = _a.selectedSectors, pathname = _a.pathname, _e = _a.variant, variant = _e === void 0 ? 'primary' : _e, subMenu = _a.subMenu;
    var router = (0, router_1.useRouter)();
    var _f = router.query, sector = _f.sector, queries = __rest(_f, ["sector"]);
    var addSector = function (newSector) {
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { sector: newSector })
        }, undefined, { shallow: true });
    };
    var combobox = (0, ariakit_1.useComboboxState)({ list: sectors });
    // value and setValue shouldn't be passed to the select state because the
    // select value and the combobox value are different things.
    var value = combobox.value, setValue = combobox.setValue, selectProps = __rest(combobox, ["value", "setValue"]);
    var _g = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _g[0], renderCallback = _g[1];
    var selectState = (0, ariakit_1.useSelectState)(__assign(__assign({}, selectProps), { value: selectedSectors, setValue: addSector, gutter: 8, animated: true, renderCallback: renderCallback }));
    var toggleAllOptions = function () {
        if (!sector || sector === 'All') {
            router.push({
                pathname: pathname,
                query: __assign(__assign({}, queries), { sector: 'None' })
            }, undefined, { shallow: true });
        }
        else {
            router.push({
                pathname: pathname,
                query: __assign(__assign({}, queries), { sector: 'All' })
            }, undefined, { shallow: true });
        }
    };
    var clearAllOptions = function () {
        selectState.up(1);
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { sector: 'None' })
        }, undefined, { shallow: true });
    };
    // Resets combobox value when popover is collapsed
    if (!selectState.mounted && combobox.value) {
        combobox.setValue('');
    }
    var focusItemRef = (0, react_1.useRef)(null);
    var isSelected = selectedSectors.length > 0 && selectedSectors.length !== sectors.length;
    var isOptionToggled = function (option) {
        return (selectState.value.includes(option) ? true : false) || (sector || []).includes('All');
    };
    if (subMenu) {
        return ((0, jsx_runtime_1.jsx)(SlidingMenu_1.SlidingMenu, __assign({ label: "Sectors", selectState: selectState }, { children: (0, jsx_runtime_1.jsx)(ComboboxSelectContent_1.ComboboxSelectContent, { options: sectors, selectedOptions: selectedSectors, clearAllOptions: clearAllOptions, toggleAllOptions: toggleAllOptions, focusItemRef: focusItemRef, variant: variant, pathname: pathname, isOptionToggled: isOptionToggled, contentElementId: (_b = selectState.contentElement) === null || _b === void 0 ? void 0 : _b.id }) })));
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(common_1.SelectButton, __assign({ state: selectState, "data-variant": variant }, { children: [variant === 'secondary' ? ((0, jsx_runtime_1.jsx)(common_1.SecondaryLabel, { children: isSelected ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Sector: " }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-selecteditems": true }, { children: selectedSectors.length > 2
                                        ? "".concat(selectedSectors[0], " + ").concat(selectedSectors.length - 1, " others")
                                        : selectedSectors.join(', ') }))] })) : ('Sector') })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Filter by Sector" }), isSelected && (0, jsx_runtime_1.jsx)(common_1.ItemsSelected, { children: selectedSectors.length })] })), (0, jsx_runtime_1.jsx)(ariakit_1.MenuButtonArrow, {})] })), (0, jsx_runtime_1.jsx)(common_1.ComboboxSelectPopover, __assign({ state: selectState, modal: !isLarge, composite: false, initialFocusRef: focusItemRef, "data-variant": variant }, { children: (0, jsx_runtime_1.jsx)(ComboboxSelectContent_1.ComboboxSelectContent, { options: sectors, selectedOptions: selectedSectors, clearAllOptions: clearAllOptions, toggleAllOptions: toggleAllOptions, focusItemRef: focusItemRef, variant: variant, pathname: pathname, autoFocus: true, isOptionToggled: isOptionToggled, contentElementId: (_c = selectState.contentElement) === null || _c === void 0 ? void 0 : _c.id }) }))] }));
}
exports.Sectors = Sectors;
