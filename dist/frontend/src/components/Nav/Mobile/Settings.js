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
exports.Settings = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var select_1 = require("ariakit/select");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var utils_1 = require("../../../components/Popover/utils");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var Filters_1 = require("../../../components/Filters");
var options_1 = require("../../../components/Filters/nfts/options");
var router_1 = require("next/router");
function Settings() {
    var _a = __read((0, LocalStorage_1.useDarkModeManager)(), 1), darkMode = _a[0];
    var _b = useAppSettings(), options = _b.options, useSettings = _b.useSettings;
    var _c = __read(useSettings(), 2), enabledOptions = _c[0], updater = _c[1];
    var selectedOptions = options
        .map(function (o) { return o.key; })
        .filter(function (key) { return enabledOptions[key]; })
        .concat(darkMode ? [LocalStorage_1.DARK_MODE] : []);
    var onChange = function (values) {
        if (values.length < selectedOptions.length) {
            var off = selectedOptions.find(function (o) { return !values.includes(o); });
            updater(off)();
        }
        else {
            var on = values.find(function (o) { return !selectedOptions.includes(o); });
            updater(on)();
        }
    };
    var _d = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _d[0], renderCallback = _d[1];
    var select = (0, select_1.useSelectState)({
        value: selectedOptions,
        setValue: onChange,
        animated: true,
        renderCallback: renderCallback
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Trigger, __assign({ state: select }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Open Settings Menu" })), (0, jsx_runtime_1.jsx)(react_feather_1.Settings, { height: 16, width: 16 })] })), (0, jsx_runtime_1.jsxs)(Popover, __assign({ state: select, modal: !isLarge }, { children: [(0, jsx_runtime_1.jsx)(PopoverHeader, { children: "Settings" }), options.map(function (option) { return ((0, jsx_runtime_1.jsxs)(Item, __assign({ value: option.key }, { children: [option.name, (0, jsx_runtime_1.jsx)(select_1.SelectItemCheck, {})] }), option.key)); }), (0, jsx_runtime_1.jsxs)(Item, __assign({ value: LocalStorage_1.DARK_MODE }, { children: ["Dark Mode", (0, jsx_runtime_1.jsx)(select_1.SelectItemCheck, {})] }))] }))] }));
}
exports.Settings = Settings;
var useAppSettings = function () {
    var router = (0, router_1.useRouter)();
    if (router.pathname.startsWith('/yields')) {
        return { options: [], useSettings: LocalStorage_1.useDefiManager };
    }
    if (router.pathname.startsWith('/stablecoin')) {
        return { options: [], useSettings: LocalStorage_1.useDefiManager };
    }
    if (router.pathname.startsWith('/liquidations')) {
        return { options: [], useSettings: LocalStorage_1.useDefiManager };
    }
    if (router.pathname.startsWith('/dex')) {
        return { options: [], useSettings: LocalStorage_1.useDefiManager };
    }
    if (router.pathname.startsWith('/raises')) {
        return { options: [], useSettings: LocalStorage_1.useDefiManager };
    }
    if (router.pathname.startsWith('/hacks')) {
        return { options: [], useSettings: LocalStorage_1.useDefiManager };
    }
    if (router.pathname.startsWith('/bridge')) {
        return { options: [], useSettings: LocalStorage_1.useDefiManager };
    }
    if (router.pathname.startsWith('/borrow')) {
        return { options: [], useSettings: LocalStorage_1.useDefiManager };
    }
    if (router.pathname.startsWith('/nfts')) {
        return { options: options_1.nftOptions, useSettings: LocalStorage_1.useNftsManager };
    }
    return { options: Filters_1.protocolsAndChainsOptions, useSettings: LocalStorage_1.useDefiManager };
};
// TODO remove repeated styles
var Trigger = (0, styled_components_1.default)(select_1.Select)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground: #445ed0;\n\tcolor: #ffffff;\n\tpadding: 6px 10px;\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n"], ["\n\tbackground: #445ed0;\n\tcolor: #ffffff;\n\tpadding: 6px 10px;\n\tborder-radius: 8px;\n\tbox-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadow;
});
var Popover = (0, styled_components_1.default)(select_1.SelectPopover)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\tpadding: 12px 8px;\n\twidth: 100%;\n\tmax-width: none;\n\tmax-height: calc(100vh - 200px);\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\tz-index: 10;\n\n\topacity: 0;\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t:focus-visible,\n\t[data-focus-visible] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 4px 0;\n\t\tmax-height: 400px;\n\t\tmax-width: min(calc(100vw - 16px), 320px);\n\t\tfont-weight: 400;\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-5%);\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\tpadding: 12px 8px;\n\twidth: 100%;\n\tmax-width: none;\n\tmax-height: calc(100vh - 200px);\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\tz-index: 10;\n\n\topacity: 0;\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t:focus-visible,\n\t[data-focus-visible] {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 4px 0;\n\t\tmax-height: 400px;\n\t\tmax-width: min(calc(100vw - 16px), 320px);\n\t\tfont-weight: 400;\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-5%);\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#40444f' : '#cbcbcb');
}, function (_a) {
    var theme = _a.theme;
    return theme.mode === 'dark'
        ? 'drop-shadow(0px 6px 10px rgba(0, 0, 0, 40%))'
        : 'drop-shadow(0px 6px 10px rgba(0, 0, 0, 15%))';
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#1c1f2d' : '#f4f6ff');
});
var PopoverHeader = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tcolor: ", ";\n\tmargin: 8px 12px 4px;\n\tpadding-bottom: 4px;\n\tborder-bottom: 1px solid ", ";\n\n\t@media screen and (min-width: 640px) {\n\t\tdisplay: none;\n\t}\n"], ["\n\tcolor: ", ";\n\tmargin: 8px 12px 4px;\n\tpadding-bottom: 4px;\n\tborder-bottom: 1px solid ", ";\n\n\t@media screen and (min-width: 640px) {\n\t\tdisplay: none;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text2;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#40444f' : '#cbcbcb');
});
var Item = (0, styled_components_1.default)(select_1.SelectItem)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tpadding: 8px 12px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tmin-width: 160px;\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 8px 12px;\n\t}\n"], ["\n\tpadding: 8px 12px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tmin-width: 160px;\n\n\t@media screen and (min-width: 640px) {\n\t\tpadding: 8px 12px;\n\t}\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
