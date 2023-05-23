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
exports.ChartSelector = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ariakit_1 = require("ariakit");
var styled_components_1 = __importDefault(require("styled-components"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var FormattedName_1 = __importDefault(require("../../components/FormattedName"));
var DropdownMenu_1 = require("../../components/DropdownMenu");
var Combobox_1 = require("../../components/Combobox");
var utils_1 = require("../Popover/utils");
var ariakit_2 = require("ariakit");
var OptionWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 10px;\n"], ["\n\tdisplay: flex;\n\tgap: 10px;\n"])));
function ChartSelector(_a) {
    var options = _a.options, selectedChart = _a.selectedChart, onClick = _a.onClick;
    var defaultList = options;
    var _b = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _b[0], renderCallback = _b[1];
    var combobox = (0, ariakit_1.useComboboxState)({ defaultList: defaultList, gutter: 8, animated: true, renderCallback: renderCallback });
    var menu = (0, ariakit_1.useMenuState)(combobox);
    var onItemClick = function (chartType) {
        onClick(chartType);
    };
    // Resets combobox value when menu is closed
    if (!menu.mounted && combobox.value) {
        combobox.setValue('');
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(DropdownMenu_1.Button, __assign({ state: menu, style: { fontWeight: 600 } }, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.Name, { children: (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: selectedChart, maxCharacters: 20, fontSize: '16px', fontWeight: 600 }) }), (0, jsx_runtime_1.jsx)(ariakit_1.MenuButtonArrow, {})] })), (0, jsx_runtime_1.jsx)(DropdownMenu_1.Popover, __assign({ state: menu, composite: false, modal: !isLarge }, { children: (0, jsx_runtime_1.jsx)(Combobox_1.List, __assign({ state: combobox }, { children: combobox.matches.map(function (value, i) { return ((0, jsx_runtime_1.jsx)(ChartButtonLink, { value: value, onItemClick: onItemClick }, value + i)); }) })) }))] }));
}
exports.ChartSelector = ChartSelector;
var ChartButtonLink = function (_a) {
    var value = _a.value, onItemClick = _a.onItemClick;
    return ((0, jsx_runtime_1.jsx)(ariakit_2.Button, __assign({ onClick: function () { return onItemClick(value); } }, { children: (0, jsx_runtime_1.jsx)(Combobox_1.Item, __assign({ value: value, focusOnHover: true, setValueOnClick: false, role: "link" }, { children: (0, jsx_runtime_1.jsx)(OptionWrapper, { children: value }) })) })));
};
var templateObject_1;
