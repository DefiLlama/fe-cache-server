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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.YieldsChartWrapper = exports.ProtocolChartWrapper = exports.SelectLegendMultiple = exports.Item = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var select_1 = require("ariakit/select");
var components_1 = require("../../components");
var Filters_1 = require("../../components/Filters");
var Combobox_1 = require("../../components/Combobox");
var utils_1 = require("../Popover/utils");
var ariakit_1 = require("ariakit");
var router_1 = require("next/router");
exports.Item = (0, styled_components_1.default)(Filters_1.SelectItem)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding: 12px 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tcursor: pointer;\n\n\t:hover,\n\t&[data-focus-visible] {\n\t\toutline: none;\n\t\tbackground: ", ";\n\t}\n\n\t&:last-of-type {\n\t\tborder-radius: 0 0 12px 12px;\n\t}\n"], ["\n\tpadding: 12px 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tcursor: pointer;\n\n\t:hover,\n\t&[data-focus-visible] {\n\t\toutline: none;\n\t\tbackground: ", ";\n\t}\n\n\t&:last-of-type {\n\t\tborder-radius: 0 0 12px 12px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
var Menu = (0, styled_components_1.default)(Filters_1.Select)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tz-index: 1;\n\tposition: absolute;\n\tright: 0;\n\ttop: -3px;\n\tpadding: 4px;\n\twidth: min-content;\n\tborder: ", ";\n\tborder-radius: 8px;\n\tfont-size: 0.75rem;\n\n\t& > * {\n\t\tdisplay: flex;\n\t\tgap: 8px;\n\t\talign-items: center;\n\t}\n"], ["\n\tz-index: 1;\n\tposition: absolute;\n\tright: 0;\n\ttop: -3px;\n\tpadding: 4px;\n\twidth: min-content;\n\tborder: ", ";\n\tborder-radius: 8px;\n\tfont-size: 0.75rem;\n\n\t& > * {\n\t\tdisplay: flex;\n\t\tgap: 8px;\n\t\talign-items: center;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.bg4;
});
var SelectedOptions = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tbackground: ", ";\n\tpadding: 4px;\n\tborder-radius: 100px;\n\tmin-width: 22px;\n"], ["\n\tbackground: ", ";\n\tpadding: 4px;\n\tborder-radius: 100px;\n\tmin-width: 22px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg4;
});
function renderValue(value, title) {
    var _a;
    return ((0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)(SelectedOptions, { children: (_a = value === null || value === void 0 ? void 0 : value.length) !== null && _a !== void 0 ? _a : 0 }), (0, jsx_runtime_1.jsx)("span", { children: title })] }));
}
function SelectLegendMultiple(_a) {
    var allOptions = _a.allOptions, options = _a.options, setOptions = _a.setOptions, title = _a.title, props = __rest(_a, ["allOptions", "options", "setOptions", "title"]);
    var router = (0, router_1.useRouter)();
    var _b = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _b[0], renderCallback = _b[1];
    var combobox = (0, ariakit_1.useComboboxState)({ list: allOptions });
    var value = combobox.value, setValue = combobox.setValue, selectProps = __rest(combobox, ["value", "setValue"]);
    var onChange = function (values) {
        setOptions(values);
    };
    var select = (0, select_1.useSelectState)(__assign(__assign({}, selectProps), { value: options, setValue: onChange, gutter: 6, animated: true, renderCallback: renderCallback }));
    // Resets combobox value when popover is collapsed
    if (!select.mounted && combobox.value) {
        combobox.setValue('');
    }
    var focusItemRef = React.useRef(null);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Menu, __assign({ state: select }, props, { children: [renderValue(select.value, title), (0, jsx_runtime_1.jsx)(select_1.SelectArrow, {})] })), (0, jsx_runtime_1.jsxs)(Filters_1.ComboboxSelectPopover, __assign({ state: select, modal: !isLarge, composite: false, initialFocusRef: focusItemRef }, { children: [(0, jsx_runtime_1.jsx)(Combobox_1.Input, { state: combobox, placeholder: "Search...", autoFocus: true }), combobox.matches.length > 0 ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Filters_1.FilterFnsGroup, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return select.setValue([]); } }, { children: "Clear" })), router.pathname !== '/comparison' && ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return select.setValue(allOptions); } }, { children: "Toggle all" })))] }), (0, jsx_runtime_1.jsx)(Combobox_1.List, __assign({ state: combobox, className: "filter-by-list" }, { children: combobox.matches.map(function (value, i) { return ((0, jsx_runtime_1.jsxs)(Filters_1.SelectItem, __assign({ value: value, ref: i === 0 && options.length === allOptions.length ? focusItemRef : null, focusOnHover: true }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ "data-name": true }, { children: value })), (0, jsx_runtime_1.jsx)(components_1.Checkbox, { checked: select.value.includes(value) ? true : false })] }), value + i)); }) }))] })) : ((0, jsx_runtime_1.jsx)("p", __assign({ id: "no-results" }, { children: "No results" })))] }))] }));
}
exports.SelectLegendMultiple = SelectLegendMultiple;
exports.ProtocolChartWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 0 0 20px 0;\n\tmin-height: 460px;\n\tgrid-column: span 1;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 0 0 20px 0;\n\tmin-height: 460px;\n\tgrid-column: span 1;\n"])));
exports.YieldsChartWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tposition: relative;\n\tpadding: 20px;\n\tborder-radius: 12px;\n\tbackground: ", ";\n\tborder: ", ";\n\tbox-shadow: ", ";\n"], ["\n\tposition: relative;\n\tpadding: 20px;\n\tborder-radius: 12px;\n\tbackground: ", ";\n\tborder: ", ";\n\tbox-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.divider;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
