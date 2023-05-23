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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopSearch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var link_1 = __importDefault(require("next/link"));
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var combobox_1 = require("ariakit/combobox");
var Desktop_1 = require("./Results/Desktop");
var Input_1 = require("./Input");
var utils_1 = require("./utils");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: none;\n\n\t&[data-alwaysdisplay='true'] {\n\t\tdisplay: flex;\n\t}\n\n\tflex-direction: column;\n\n\t@media screen and (min-width: ", ") {\n\t\tdisplay: flex;\n\t\tborder-radius: 12px;\n\t\tbox-shadow: ", ";\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: none;\n\n\t&[data-alwaysdisplay='true'] {\n\t\tdisplay: flex;\n\t}\n\n\tflex-direction: column;\n\n\t@media screen and (min-width: ", ") {\n\t\tdisplay: flex;\n\t\tborder-radius: 12px;\n\t\tbox-shadow: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
var OptionsWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 8px;\n\tborder-bottom-left-radius: 12px;\n\tborder-bottom-right-radius: 12px;\n\tbackground-color: ", ";\n\t--step-color: ", ";\n\n\t& > p {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t\tpadding: 16px;\n\n\t\t& > * {\n\t\t\tcolor: ", ";\n\t\t\tfont-size: 0.875rem;\n\t\t}\n\n\t\tsvg {\n\t\t\tflex-shrink: 0;\n\t\t}\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-top: 0;\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 8px;\n\tborder-bottom-left-radius: 12px;\n\tborder-bottom-right-radius: 12px;\n\tbackground-color: ", ";\n\t--step-color: ", ";\n\n\t& > p {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t\tpadding: 16px;\n\n\t\t& > * {\n\t\t\tcolor: ", ";\n\t\t\tfont-size: 0.875rem;\n\t\t}\n\n\t\tsvg {\n\t\t\tflex-shrink: 0;\n\t\t}\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-top: 0;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(246, 246, 246, 0.6)');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#7e96ff' : '#475590');
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.divider;
});
var DesktopSearch = function (props) {
    var data = props.data, _a = props.loading, loading = _a === void 0 ? false : _a, step = props.step, onSearchTermChange = props.onSearchTermChange, filters = props.filters, withValue = props.withValue, _b = props.placeholder, placeholder = _b === void 0 ? 'Search...' : _b, value = props.value, extra = __rest(props, ["data", "loading", "step", "onSearchTermChange", "filters", "withValue", "placeholder", "value"]);
    var combobox = (0, combobox_1.useComboboxState)(__assign(__assign({ gutter: 6, sameWidth: true }, (value && { defaultValue: value })), { list: data.map(function (x) { return x.name; }) }));
    // select first item on open
    var item = (0, utils_1.findActiveItem)(combobox);
    var firstId = combobox.first();
    if (combobox.open && !item && firstId) {
        combobox.setActiveId(firstId);
    }
    React.useEffect(function () {
        if (onSearchTermChange)
            onSearchTermChange(combobox.value);
    }, [combobox.value, onSearchTermChange]);
    // Resets combobox value when popover is collapsed
    if (!withValue && !combobox.mounted && combobox.value) {
        combobox.setValue('');
    }
    return ((0, jsx_runtime_1.jsxs)(Wrapper, __assign({}, extra, { children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { state: combobox, placeholder: placeholder, breadCrumbs: step ? true : false, withValue: withValue }), step && (0, jsx_runtime_1.jsx)(Options, { step: step, filters: filters }), (0, jsx_runtime_1.jsx)(Desktop_1.DesktopResults, { state: combobox, data: data, loading: loading, onItemClick: props.onItemClick })] })));
};
exports.DesktopSearch = DesktopSearch;
var Options = function (_a) {
    var step = _a.step, filters = _a.filters;
    return ((0, jsx_runtime_1.jsxs)(OptionsWrapper, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/".concat(step.route || step.category.toLowerCase()), prefetch: false }, { children: step.category })), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowRight, { size: 16 }), (0, jsx_runtime_1.jsx)("span", __assign({ style: { color: 'var(--step-color)' } }, { children: step.name }))] }), !step.hideOptions && filters && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: filters })] }));
};
var templateObject_1, templateObject_2;
