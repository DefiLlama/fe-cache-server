"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopProtocolFilters = exports.ListItem = exports.ListWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var select_1 = require("ariakit/select");
var common_1 = require("../common");
var OptionToggle_1 = __importDefault(require("../../../components/OptionToggle"));
var HeadHelp_1 = __importDefault(require("../../../components/HeadHelp"));
var components_1 = require("../../../components");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var options_1 = require("./options");
var useProtocolFilterState_1 = require("./useProtocolFilterState");
var utils_1 = require("../../../components/Popover/utils");
var Wrapper = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-weight: 400;\n\tfont-size: 0.75rem;\n\tdisplay: none;\n\tgap: 8px;\n\talign-items: center;\n\tmargin-left: auto;\n\tpadding: 0 16px;\n\n\tlabel {\n\t\topacity: 0.8;\n\t}\n\n\t@media screen and (min-width: 96.0625rem) {\n\t\tdisplay: flex;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-weight: 400;\n\tfont-size: 0.75rem;\n\tdisplay: none;\n\tgap: 8px;\n\talign-items: center;\n\tmargin-left: auto;\n\tpadding: 0 16px;\n\n\tlabel {\n\t\topacity: 0.8;\n\t}\n\n\t@media screen and (min-width: 96.0625rem) {\n\t\tdisplay: flex;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
exports.ListWrapper = styled_components_1.default.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tfont-size: 0.875rem;\n"], ["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tfont-size: 0.875rem;\n"])));
exports.ListItem = styled_components_1.default.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t&:not(:first-child) {\n\t\tmargin-left: 12px;\n\t}\n"], ["\n\t&:not(:first-child) {\n\t\tmargin-left: 12px;\n\t}\n"])));
var AddlFiltersButton = (0, styled_components_1.default)(common_1.SelectButton)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tbackground: ", ";\n\tfont-size: 0.875rem;\n"], ["\n\tbackground: ", ";\n\tfont-size: 0.875rem;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#000' : '#f5f5f5');
});
var DesktopProtocolFilters = function (_a) {
    var options = _a.options, props = __rest(_a, ["options"]);
    var _b = __read((0, LocalStorage_1.useDefiManager)(), 2), extraTvlEnabled = _b[0], updater = _b[1];
    var tvlOptions = options || options_1.protocolsAndChainsOptions;
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)("label", { children: "INCLUDE IN TVL:" }), (0, jsx_runtime_1.jsx)(exports.ListWrapper, __assign({}, props, { children: tvlOptions.length > 3 ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [tvlOptions.slice(0, 3).map(function (option) { return ((0, jsx_runtime_1.jsx)(exports.ListItem, { children: (0, jsx_runtime_1.jsx)(OptionToggle_1.default, __assign({}, option, { toggle: updater(option.key), enabled: extraTvlEnabled[option.key] })) }, option.key)); }), (0, jsx_runtime_1.jsx)(exports.ListItem, { children: (0, jsx_runtime_1.jsx)(AddlOptions, { options: tvlOptions.slice(3) }) })] })) : (tvlOptions.map(function (option) { return ((0, jsx_runtime_1.jsx)(exports.ListItem, { children: (0, jsx_runtime_1.jsx)(OptionToggle_1.default, __assign({}, option, { toggle: updater(option.key), enabled: extraTvlEnabled[option.key] })) }, option.key)); })) }))] }));
};
exports.DesktopProtocolFilters = DesktopProtocolFilters;
function AddlOptions(_a) {
    var options = _a.options, props = __rest(_a, ["options"]);
    var select = (0, useProtocolFilterState_1.useProtocolsFilterState)();
    var _b = __read((0, utils_1.useSetPopoverStyles)(), 1), isLarge = _b[0];
    var totalSelected = 0;
    options.forEach(function (option) {
        if (select.value.includes(option.key)) {
            totalSelected += 1;
        }
    });
    return ((0, jsx_runtime_1.jsxs)("span", __assign({}, props, { children: [(0, jsx_runtime_1.jsxs)(AddlFiltersButton, __assign({ state: select }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Others" }), (0, jsx_runtime_1.jsx)(select_1.SelectArrow, {}), totalSelected > 0 && (0, jsx_runtime_1.jsx)(common_1.ItemsSelected, { children: totalSelected })] })), select.mounted && ((0, jsx_runtime_1.jsx)(common_1.SelectPopover, __assign({ state: select, modal: !isLarge }, { children: options.map(function (_a) {
                    var key = _a.key, name = _a.name, help = _a.help;
                    return ((0, jsx_runtime_1.jsxs)(common_1.SelectItem, __assign({ value: key }, { children: [help ? (0, jsx_runtime_1.jsx)(HeadHelp_1.default, { title: name, text: help }) : name, (0, jsx_runtime_1.jsx)(components_1.Checkbox, { checked: select.value.includes(key) })] }), key));
                }) })))] })));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
