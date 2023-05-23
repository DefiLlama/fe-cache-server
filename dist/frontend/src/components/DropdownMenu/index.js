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
exports.Item = exports.Popover = exports.Button = exports.Menu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var menu_1 = require("ariakit/menu");
var polished_1 = require("polished");
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../../components/Popover/utils");
function Menu(_a) {
    var options = _a.options, name = _a.name, color = _a.color, isExternal = _a.isExternal, onItemClick = _a.onItemClick, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, props = __rest(_a, ["options", "name", "color", "isExternal", "onItemClick", "variant"]);
    var _c = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _c[0], renderCallback = _c[1];
    var menu = (0, menu_1.useMenuState)({ gutter: 8, animated: true, renderCallback: renderCallback });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(exports.Button, __assign({ state: menu, color: color, "data-variant": variant }, props, { children: [name, (0, jsx_runtime_1.jsx)(menu_1.MenuButtonArrow, {})] })), (0, jsx_runtime_1.jsx)(exports.Popover, __assign({ state: menu, modal: !isLarge }, { children: options.map(function (value, i) {
                    return onItemClick ? ((0, jsx_runtime_1.jsx)(exports.Item, __assign({ as: "button", onClick: function () { return onItemClick(value); } }, { children: value }), value + i)) : isExternal ? ((0, jsx_runtime_1.jsx)("a", __assign({ href: value, target: "_blank", rel: "noopener noreferrer" }, { children: (0, jsx_runtime_1.jsx)(exports.Item, { children: value }) }), value + i)) : ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: value, passHref: true }, { children: (0, jsx_runtime_1.jsx)(exports.Item, { children: value }) }), value + i));
                }) }))] }));
}
exports.Menu = Menu;
exports.Button = (0, styled_components_1.default)(menu_1.MenuButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tborder-radius: 8px;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t:focus-visible {\n\t\toutline-offset: 1px;\n\t}\n\n\tspan {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\ttop: 1px;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-focus-visible] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tborder-radius: 8px;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t:focus-visible {\n\t\toutline-offset: 1px;\n\t}\n\n\tspan {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\ttop: 1px;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-focus-visible] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"
    // TODO remove repeated styles
])), function (_a) {
    var color = _a.color, theme = _a.theme;
    return (0, polished_1.transparentize)(0.9, color || theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    return (0, polished_1.transparentize)(0.8, color || theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
});
// TODO remove repeated styles
exports.Popover = (0, styled_components_1.default)(menu_1.Menu)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\theight: 60vh;\n\tmin-width: 180px;\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\toutline: none !important;\n\tz-index: 10;\n\n\topacity: 0;\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t#no-results {\n\t\tmargin: 24px 0;\n\t\ttext-align: center;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\theight: unset;\n\t\tmax-height: 400px;\n\t\tfont-size: 0.825rem;\n\t\tfont-weight: 400;\n\t\tgap: 0px;\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(0%);\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\theight: 60vh;\n\tmin-width: 180px;\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\toutline: none !important;\n\tz-index: 10;\n\n\topacity: 0;\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t#no-results {\n\t\tmargin: 24px 0;\n\t\ttext-align: center;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\theight: unset;\n\t\tmax-height: 400px;\n\t\tfont-size: 0.825rem;\n\t\tfont-weight: 400;\n\t\tgap: 0px;\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(0%);\n\t}\n"])), function (_a) {
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
    return (theme.mode === 'dark' ? '#1c1f2d' : '#f4f6ff');
});
exports.Item = (0, styled_components_1.default)(menu_1.MenuItem)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tflex-shrink: 0;\n\tpadding: 8px 12px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: none;\n\tborder: none;\n\tborder-radius: 8px;\n\ttext-align: start;\n\n\t:hover,\n\t:focus-visible,\n\t&[data-active-item] {\n\t\toutline: none;\n\t\tbackground-color: ", ";\n\t}\n"], ["\n\tflex-shrink: 0;\n\tpadding: 8px 12px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: none;\n\tborder: none;\n\tborder-radius: 8px;\n\ttext-align: start;\n\n\t:hover,\n\t:focus-visible,\n\t&[data-active-item] {\n\t\toutline: none;\n\t\tbackground-color: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (0, polished_1.transparentize)(0.8, theme.primary1);
});
var templateObject_1, templateObject_2, templateObject_3;
