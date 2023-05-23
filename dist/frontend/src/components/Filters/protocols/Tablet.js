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
exports.TabletProtocolsFilters = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var select_1 = require("ariakit/select");
var HeadHelp_1 = __importDefault(require("../../../components/HeadHelp"));
var components_1 = require("../../../components");
var options_1 = require("./options");
var common_1 = require("../common");
var useProtocolFilterState_1 = require("./useProtocolFilterState");
var utils_1 = require("../../../components/Popover/utils");
var WrapperWithLabel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: none;\n\tgap: 8px;\n\talign-items: center;\n\tmargin-left: auto;\n\n\t@media screen and (min-width: ", ") and (max-width: ", ") {\n\t\tdisplay: flex;\n\t\tpadding: 0 16px;\n\t}\n"], ["\n\tdisplay: none;\n\tgap: 8px;\n\talign-items: center;\n\tmargin-left: auto;\n\n\t@media screen and (min-width: ", ") and (max-width: ", ") {\n\t\tdisplay: flex;\n\t\tpadding: 0 16px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.bp2Xl;
});
var Label = (0, styled_components_1.default)(select_1.SelectLabel)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-weight: 400;\n\tfont-size: 0.75rem;\n\topacity: 0.8;\n\twhite-space: nowrap;\n"], ["\n\tcolor: ", ";\n\tfont-weight: 400;\n\tfont-size: 0.75rem;\n\topacity: 0.8;\n\twhite-space: nowrap;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var Menu = (0, styled_components_1.default)(common_1.Select)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tbackground: ", ";\n"], ["\n\tbackground: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#000' : '#f5f5f5');
});
function renderValue(value) {
    var _a, _b;
    if (value.length === 0)
        return 'No option selected';
    if (value.length === 1)
        return (_b = (_a = options_1.protocolsAndChainsOptions.find(function (e) { return e.key === value[0]; })) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : value[0];
    return "".concat(value.length, " options selected");
}
function TabletProtocolsFilters(_a) {
    var options = _a.options, props = __rest(_a, ["options"]);
    var select = (0, useProtocolFilterState_1.useProtocolsFilterState)({ sameWidth: true });
    var _b = __read((0, utils_1.useSetPopoverStyles)(), 1), isLarge = _b[0];
    var tvlOptions = options || options_1.protocolsAndChainsOptions;
    return ((0, jsx_runtime_1.jsxs)(WrapperWithLabel, __assign({}, props, { children: [(0, jsx_runtime_1.jsx)(Label, __assign({ state: select }, { children: "INCLUDE IN TVL: " })), (0, jsx_runtime_1.jsxs)(Menu, __assign({ state: select }, { children: [(0, jsx_runtime_1.jsx)("span", { children: renderValue(select.value) }), (0, jsx_runtime_1.jsx)(select_1.SelectArrow, {})] })), select.mounted && ((0, jsx_runtime_1.jsx)(common_1.SelectPopover, __assign({ state: select, modal: !isLarge }, { children: tvlOptions.map(function (_a) {
                    var key = _a.key, name = _a.name, help = _a.help;
                    return ((0, jsx_runtime_1.jsxs)(common_1.SelectItem, __assign({ value: key }, { children: [help ? (0, jsx_runtime_1.jsx)(HeadHelp_1.default, { title: name, text: help }) : name, (0, jsx_runtime_1.jsx)(components_1.Checkbox, { checked: select.value.includes(key) })] }), key));
                }) })))] })));
}
exports.TabletProtocolsFilters = TabletProtocolsFilters;
var templateObject_1, templateObject_2, templateObject_3;
