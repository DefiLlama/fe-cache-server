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
exports.YieldAttributes = exports.attributeOptions = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ariakit_1 = require("ariakit");
var router_1 = require("next/router");
var utils_1 = require("../../../components/Popover/utils");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var common_1 = require("../common");
var utils_2 = require("../../../components/YieldsPage/utils");
var SlidingMenu_1 = require("../../../components/SlidingMenu");
var Base_1 = require("../common/Base");
exports.attributeOptions = [
    {
        name: 'Stablecoins',
        key: LocalStorage_1.YIELDS_SETTINGS.STABLECOINS.toLowerCase(),
        help: 'Select pools consisting of stablecoins only',
        filterFn: function (item) { return item.stablecoin === true; },
        defaultFilterFnOnPage: {
            '/yields/stablecoins': function (item) { return item.stablecoin === true; }
        },
        disabledOnPages: ['/yields/stablecoins', '/borrow', '/yields/strategy', '/yields/strategyFR']
    },
    {
        name: 'Single Exposure',
        key: LocalStorage_1.YIELDS_SETTINGS.SINGLE_EXPOSURE.toLowerCase(),
        help: 'Select pools with single token exposure only',
        filterFn: function (item) { return item.exposure === 'single'; },
        defaultFilterFnOnPage: {},
        disabledOnPages: ['/borrow', '/yields/strategy', '/yields/strategyFR']
    },
    {
        name: 'No IL',
        key: LocalStorage_1.YIELDS_SETTINGS.NO_IL.toLowerCase(),
        help: 'Select pools with no impermanent loss',
        filterFn: function (item) { return item.ilRisk === 'no'; },
        defaultFilterFnOnPage: {
            '/yields/stablecoins': function (item) { return item.ilRisk === 'no'; }
        },
        disabledOnPages: ['/yields/stablecoins', '/borrow', '/yields/strategy', '/yields/strategyFR']
    },
    {
        name: 'Million Dollar',
        key: LocalStorage_1.YIELDS_SETTINGS.MILLION_DOLLAR.toLowerCase(),
        help: 'Select pools with at least one million dollar in TVL',
        filterFn: function (item) { return item.tvlUsd >= 1e6; },
        defaultFilterFnOnPage: {},
        disabledOnPages: ['/yields/borrow', '/borrow', '/yields/loop', '/yields/strategy', '/yields/strategyFR']
    },
    {
        name: 'Audited',
        key: LocalStorage_1.YIELDS_SETTINGS.AUDITED.toLowerCase(),
        help: 'Select pools from audited projects only',
        filterFn: function (item) { return item.audits !== '0'; },
        defaultFilterFnOnPage: {
            '/yields/stablecoins': function (item) { return item.audits !== '0'; }
        },
        disabledOnPages: ['/yields/stablecoins', '/yields/borrow', '/borrow', '/yields/strategy', '/yields/strategyFR']
    },
    {
        name: 'No Outliers',
        key: LocalStorage_1.YIELDS_SETTINGS.NO_OUTLIER.toLowerCase(),
        help: 'Remove pools which are considered outliers based on their geometric mean of apy values',
        filterFn: function (item) { return item.outlier === false; },
        defaultFilterFnOnPage: {},
        disabledOnPages: ['/yields/borrow', '/borrow', '/yields/loop', '/yields/strategy', '/yields/strategyFR']
    },
    {
        name: 'Stable Outlook',
        key: LocalStorage_1.YIELDS_SETTINGS.STABLE_OUTLOOK.toLowerCase(),
        help: 'Select pools with "Stable/Up" Outlook only',
        filterFn: function (item) { return item.predictions.predictedClass === 'Stable/Up'; },
        defaultFilterFnOnPage: {},
        disabledOnPages: ['/yields/borrow', '/borrow', '/yields/loop', '/yields/strategy', '/yields/strategyFR']
    },
    {
        name: 'High Confidence',
        key: LocalStorage_1.YIELDS_SETTINGS.HIGH_CONFIDENCE.toLowerCase(),
        help: 'Select pools with "High" predicted outlook confidence',
        filterFn: function (item) { return item.predictions.binnedConfidence === 3; },
        defaultFilterFnOnPage: {},
        disabledOnPages: ['/yields/borrow', '/borrow', '/yields/loop', '/yields/strategy', '/yields/strategyFR']
    },
    {
        // see: https://bad-debt.riskdao.org/
        name: 'Exclude bad debt',
        key: LocalStorage_1.YIELDS_SETTINGS.NO_BAD_DEBT.toLowerCase(),
        help: 'Remove projects with a bad debt ratio of >= 5% (5% of the tvl is bad debt from insolvent accounts)',
        filterFn: function (item) { return !utils_2.badDebt.includes(item.project); },
        defaultFilterFnOnPage: {},
        disabledOnPages: ['/yields', '/yields/stablecoins', '/yields/strategy', '/borrow', '/yields/strategyFR']
    },
    // strategy specific ones (these are applied on both lendind protocol + farming protocol)
    {
        name: 'Million Dollar',
        key: 'million_dollar_farm',
        help: 'Select pools with at least one million dollar in TVL',
        filterFn: function (item) { return item.farmTvlUsd >= 1e6; },
        defaultFilterFnOnPage: {},
        disabledOnPages: ['/yields', '/yields/overview', '/yields/stablecoins', '/yields/borrow', '/borrow', '/yields/loop']
    },
    {
        // see: https://bad-debt.riskdao.org/
        name: 'Exclude bad debt',
        key: 'no_bad_debt_',
        help: 'Remove projects with a bad debt ratio of >= 5% (5% of the tvl is bad debt from insolvent accounts)',
        filterFn: function (item) {
            return !utils_2.badDebt.includes(item.project) && !utils_2.badDebt.includes(item.farmProject);
        },
        defaultFilterFnOnPage: {},
        disabledOnPages: ['/yields', '/yields/overview', '/yields/stablecoins', '/yields/borrow', '/borrow', '/yields/loop']
    },
    {
        name: 'Exclude deposit lockups',
        key: LocalStorage_1.YIELDS_SETTINGS.NO_LOCKUP_COLLATERAL.toLowerCase(),
        help: 'Remove projects which require locking of deposit tokens',
        filterFn: function (item) {
            return !utils_2.lockupsCollateral.includes(item.projectName) && !utils_2.lockupsCollateral.includes(item.farmProjectName);
        },
        defaultFilterFnOnPage: {},
        disabledOnPages: ['/yields', '/yields/overview', '/yields/stablecoins', '/yields/borrow', '/yields/loop']
    }
];
function YieldAttributes(_a) {
    var pathname = _a.pathname, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, subMenu = _a.subMenu;
    var router = (0, router_1.useRouter)();
    var _c = router.query, _d = _c.attribute, attribute = _d === void 0 ? [] : _d, queries = __rest(_c, ["attribute"]);
    var attributeOptionsFiltered = exports.attributeOptions.filter(function (option) {
        return pathname === '/yields/borrow'
            ? !option.disabledOnPages.includes('/yields/borrow')
            : pathname === '/borrow'
                ? !option.disabledOnPages.includes('/borrow')
                : pathname === '/yields/strategy'
                    ? !option.disabledOnPages.includes('/yields/strategy')
                    : pathname === '/yields/strategyFR'
                        ? !option.disabledOnPages.includes('/yields/strategyFR')
                        : pathname === '/yields'
                            ? !option.disabledOnPages.includes('/yields')
                            : pathname === '/yields/stablecoins'
                                ? !option.disabledOnPages.includes('/yields/stablecoins')
                                : pathname === '/yields/loop'
                                    ? !option.disabledOnPages.includes('/yields/loop')
                                    : true;
    });
    var values = attributeOptionsFiltered
        .filter(function (o) {
        if (attribute) {
            if (typeof attribute === 'string') {
                return o.key === attribute;
            }
            else {
                return attribute.includes(o.key);
            }
        }
    })
        .map(function (o) { return o.key; });
    var updateAttributes = function (newFilters) {
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { attribute: newFilters })
        }, undefined, { shallow: true });
    };
    var _e = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _e[0], renderCallback = _e[1];
    var selectState = (0, ariakit_1.useSelectState)({
        value: values,
        setValue: updateAttributes,
        gutter: 8,
        renderCallback: renderCallback,
        animated: true
    });
    var toggleAllOptions = function () {
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { attribute: attributeOptionsFiltered.map(function (o) { return o.key; }) })
        }, undefined, { shallow: true });
    };
    var clearAllOptions = function () {
        router.push({
            pathname: pathname,
            query: __assign(__assign({}, queries), { attribute: [] })
        }, undefined, { shallow: true });
    };
    var selectedAttributes = attributeOptionsFiltered
        .filter(function (option) { return option.defaultFilterFnOnPage[router.pathname]; })
        .map(function (x) { return x.name; })
        .concat(values);
    var isSelected = selectedAttributes.length > 0;
    var selectedAttributeNames = isSelected
        ? selectedAttributes.map(function (attribute) { var _a, _b; return (_b = (_a = attributeOptionsFiltered.find(function (p) { return p.key === attribute; })) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : attribute; })
        : [];
    if (subMenu) {
        return ((0, jsx_runtime_1.jsx)(SlidingMenu_1.SlidingMenu, __assign({ label: "Attributes", selectState: selectState }, { children: (0, jsx_runtime_1.jsx)(Base_1.SelectContent, { options: attributeOptionsFiltered, selectedOptions: values, clearAllOptions: clearAllOptions, toggleAllOptions: toggleAllOptions, pathname: router.pathname, variant: variant }) })));
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(common_1.SelectButton, __assign({ state: selectState, "data-variant": variant }, { children: [variant === 'secondary' ? ((0, jsx_runtime_1.jsx)(common_1.SecondaryLabel, { children: isSelected ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Attribute: " }), (0, jsx_runtime_1.jsx)("span", __assign({ "data-selecteditems": true }, { children: selectedAttributeNames.length > 2
                                        ? "".concat(selectedAttributeNames[0], " + ").concat(selectedAttributeNames.length - 1, " others")
                                        : selectedAttributeNames.join(', ') }))] })) : ('Attribute') })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Filter by Attribute" }), isSelected && (0, jsx_runtime_1.jsx)(common_1.ItemsSelected, { children: selectedAttributes.length })] })), (0, jsx_runtime_1.jsx)(ariakit_1.MenuButtonArrow, {})] })), (0, jsx_runtime_1.jsx)(common_1.SelectPopover, __assign({ state: selectState, modal: !isLarge, "data-variant": variant }, { children: (0, jsx_runtime_1.jsx)(Base_1.SelectContent, { options: attributeOptionsFiltered, selectedOptions: values, clearAllOptions: clearAllOptions, toggleAllOptions: toggleAllOptions, pathname: router.pathname, variant: variant }) }))] }));
}
exports.YieldAttributes = YieldAttributes;
