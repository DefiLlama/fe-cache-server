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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverContent = exports.PopoverForm = exports.DialogForm = exports.SelectContent = exports.SecondaryLabel = exports.ItemsSelected = exports.FilterFnsGroup = exports.SelectButton = exports.ComboboxSelectPopover = exports.SelectItem = exports.SelectPopover = exports.Select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var select_1 = require("ariakit/select");
var polished_1 = require("polished");
var styled_components_1 = __importDefault(require("styled-components"));
var components_1 = require("../../../components");
var HeadHelp_1 = __importDefault(require("../../../components/HeadHelp"));
exports.Select = (0, styled_components_1.default)(select_1.Select)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 8px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tpadding: 12px;\n\tborder-radius: 12px;\n\tborder: none;\n\tmargin: 0;\n\twidth: 200px;\n\n\t& > *:first-child {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\n\n\t:focus-visible,\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-focus-visible] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 8px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tpadding: 12px;\n\tborder-radius: 12px;\n\tborder: none;\n\tmargin: 0;\n\twidth: 200px;\n\n\t& > *:first-child {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\n\n\t:focus-visible,\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-focus-visible] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
});
exports.SelectPopover = (0, styled_components_1.default)(select_1.SelectPopover)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\tmax-height: calc(100vh - 200px);\n\tmin-width: 180px;\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\toutline: none !important;\n\tz-index: 10;\n\n\topacity: 0;\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t#no-results {\n\t\tpadding: 0 12px 8px;\n\t\ttext-align: center;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tmax-height: 400px;\n\t\tfont-size: 0.825rem;\n\t\tfont-weight: 400;\n\t\tgap: 0px;\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(0%);\n\n\t\t&[data-variant='secondary'] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\tmax-height: calc(100vh - 200px);\n\tmin-width: 180px;\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tborder-radius: 8px 8px 0 0;\n\tfilter: ", ";\n\toverflow: auto;\n\toverscroll-behavior: contain;\n\toutline: none !important;\n\tz-index: 10;\n\n\topacity: 0;\n\ttransform: translateY(100%);\n\ttransition: 0.2s ease;\n\n\t&[data-enter] {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n\n\t&[data-leave] {\n\t\ttransition: 0.1s ease;\n\t}\n\n\t#no-results {\n\t\tpadding: 0 12px 8px;\n\t\ttext-align: center;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\tmax-height: 400px;\n\t\tfont-size: 0.825rem;\n\t\tfont-weight: 400;\n\t\tgap: 0px;\n\t\tbackground: ", ";\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(0%);\n\n\t\t&[data-variant='secondary'] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"])), function (_a) {
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
    return (theme.mode === 'dark' ? '#222429' : '#f6f6f6');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#1c1f2d' : '#f4f6ff');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#222429' : '#f6f6f6');
});
exports.SelectItem = (0, styled_components_1.default)(select_1.SelectItem)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tflex-shrink: 0;\n\tpadding: 8px 12px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: none;\n\tborder: none;\n\ttext-align: start;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n\n\t& > *[data-name] {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&:first-of-type {\n\t\tpadding-top: 16px;\n\t}\n\n\t&:last-of-type {\n\t\tpadding-bottom: 24px;\n\t}\n\n\t&:first-of-type,\n\t&:last-of-type {\n\t\tborder-radius: 0;\n\t}\n\n\topacity: ", ";\n\n\t@media screen and (min-width: 640px) {\n\t\tborder-bottom: ", ";\n\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-active-item] {\n\t\t\toutline: none;\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&:first-of-type {\n\t\t\tpadding-top: 12px;\n\t\t}\n\n\t\t&:last-of-type {\n\t\t\tpadding-bottom: 12px;\n\t\t\tborder: none;\n\t\t}\n\t}\n"], ["\n\tflex-shrink: 0;\n\tpadding: 8px 12px;\n\tcolor: ", ";\n\tcursor: pointer;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: none;\n\tborder: none;\n\ttext-align: start;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n\n\t& > *[data-name] {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&:first-of-type {\n\t\tpadding-top: 16px;\n\t}\n\n\t&:last-of-type {\n\t\tpadding-bottom: 24px;\n\t}\n\n\t&:first-of-type,\n\t&:last-of-type {\n\t\tborder-radius: 0;\n\t}\n\n\topacity: ", ";\n\n\t@media screen and (min-width: 640px) {\n\t\tborder-bottom: ", ";\n\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-active-item] {\n\t\t\toutline: none;\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&:first-of-type {\n\t\t\tpadding-top: 12px;\n\t\t}\n\n\t\t&:last-of-type {\n\t\t\tpadding-bottom: 12px;\n\t\t\tborder: none;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 0.6 : 1);
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + (0, polished_1.transparentize)(0.9, theme.text1);
}, function (_a) {
    var theme = _a.theme;
    return (0, polished_1.transparentize)(0.8, theme.primary1);
});
exports.ComboboxSelectPopover = (0, styled_components_1.default)(exports.SelectPopover)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tz-index: 10;\n\theight: 60vh;\n\n\t#no-results {\n\t\tmargin: 24px 0;\n\t}\n\n\t.filter-by-list {\n\t\tpadding: 0;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\theight: unset;\n\t\tmax-width: 300px;\n\t}\n"], ["\n\tz-index: 10;\n\theight: 60vh;\n\n\t#no-results {\n\t\tmargin: 24px 0;\n\t}\n\n\t.filter-by-list {\n\t\tpadding: 0;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\theight: unset;\n\t\tmax-width: 300px;\n\t}\n"])));
exports.SelectButton = (0, styled_components_1.default)(select_1.Select)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tborder-radius: 8px;\n\tcursor: pointer;\n\toutline: none;\n\tborder: 1px solid transparent;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t:focus-visible {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n\n\tspan:first-of-type {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\ttop: 1px;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-focus-visible] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tpadding: 8px 12px;\n\tfont-size: 0.825rem;\n\tborder-radius: 8px;\n\tcursor: pointer;\n\toutline: none;\n\tborder: 1px solid transparent;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\n\twhite-space: nowrap;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n\n\t:focus-visible {\n\t\toutline: ", ";\n\t\toutline-offset: 1px;\n\t}\n\n\tspan:first-of-type {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\ttop: 1px;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tbackground: ", ";\n\t\tfont-size: 0.75rem;\n\n\t\t:hover,\n\t\t:focus-visible,\n\t\t&[data-focus-visible] {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"])), function (_a) {
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
    return '1px solid ' + theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
});
exports.FilterFnsGroup = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tposition: sticky;\n\ttop: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tpadding: 12px;\n\tfont-size: 0.75rem;\n\tbackground: ", ";\n\tborder-bottom: ", ";\n\tz-index: 1;\n\n\tbutton {\n\t\tpadding: 4px 0;\n\t\tcolor: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\ttop: -8px;\n\t\tbackground: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tbackground: ", ";\n\n\t\t&[data-variant='secondary'] {\n\t\t\ttop: 0px;\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"], ["\n\tposition: sticky;\n\ttop: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tpadding: 12px;\n\tfont-size: 0.75rem;\n\tbackground: ", ";\n\tborder-bottom: ", ";\n\tz-index: 1;\n\n\tbutton {\n\t\tpadding: 4px 0;\n\t\tcolor: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\ttop: -8px;\n\t\tbackground: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tbackground: ", ";\n\n\t\t&[data-variant='secondary'] {\n\t\t\ttop: 0px;\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + (0, polished_1.transparentize)(0.9, theme.text1);
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#222429' : '#f6f6f6');
}, function (_a) {
    var bpLg = _a.theme.bpLg;
    return bpLg;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#1c1f2d' : '#f4f6ff');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#222429' : '#f6f6f6');
});
exports.ItemsSelected = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: -8px;\n\tright: -8px;\n\tfont-size: 10px;\n\tpadding: 2px;\n\tmin-width: 16px;\n\tbackground: ", ";\n\tborder-radius: 9999px;\n"], ["\n\tposition: absolute;\n\ttop: -8px;\n\tright: -8px;\n\tfont-size: 10px;\n\tpadding: 2px;\n\tmin-width: 16px;\n\tbackground: ", ";\n\tborder-radius: 9999px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg4;
});
exports.SecondaryLabel = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 8px;\n\tfont-size: 0.75rem;\n\n\t& > *[data-selecteditems='true'] {\n\t\tcolor: ", ";\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 8px;\n\tfont-size: 0.75rem;\n\n\t& > *[data-selecteditems='true'] {\n\t\tcolor: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.link;
});
var SelectContent = function (_a) {
    var clearAllOptions = _a.clearAllOptions, toggleAllOptions = _a.toggleAllOptions, variant = _a.variant, pathname = _a.pathname, options = _a.options, selectedOptions = _a.selectedOptions;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(exports.FilterFnsGroup, __assign({ "data-variant": variant }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: clearAllOptions }, { children: "Clear" })), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: toggleAllOptions }, { children: "Toggle all" }))] })), options.map(function (option) {
                var _a, _b, _c, _d;
                return ((0, jsx_runtime_1.jsxs)(exports.SelectItem, __assign({ value: option.key, disabled: (_b = (_a = option.disabledOnPages) === null || _a === void 0 ? void 0 : _a.includes(pathname)) !== null && _b !== void 0 ? _b : false }, { children: [option.help ? (0, jsx_runtime_1.jsx)(HeadHelp_1.default, { title: option.name, text: option.help }) : option.name, (0, jsx_runtime_1.jsx)(components_1.Checkbox, { checked: selectedOptions.includes(option.key) || ((_d = (_c = option.disabledOnPages) === null || _c === void 0 ? void 0 : _c.includes(pathname)) !== null && _d !== void 0 ? _d : false) })] }), option.key));
            })] }));
};
exports.SelectContent = SelectContent;
exports.DialogForm = styled_components_1.default.form(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\tlabel {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 4px;\n\t\tfont: inherit;\n\t\tmargin: 12px 0 0;\n\t}\n\n\tinput,\n\ttextarea,\n\tselect {\n\t\tpadding: 8px;\n\t\tborder-radius: 4px;\n\t\tborder: ", ";\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t\tfont: inherit;\n\t}\n\n\tinput:disabled {\n\t\topacity: 0.5;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tpadding: 12px;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\t&[data-variant='secondary'] {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\tlabel {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 4px;\n\t\tfont: inherit;\n\t\tmargin: 12px 0 0;\n\t}\n\n\tinput,\n\ttextarea,\n\tselect {\n\t\tpadding: 8px;\n\t\tborder-radius: 4px;\n\t\tborder: ", ";\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t\tfont: inherit;\n\t}\n\n\tinput:disabled {\n\t\topacity: 0.5;\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tpadding: 12px;\n\t}\n\n\t@media screen and (min-width: 640px) {\n\t\t&[data-variant='secondary'] {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text4;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#000' : '#fff');
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
exports.PopoverForm = (0, styled_components_1.default)(exports.DialogForm)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\t@media screen and (min-width: 640px) {\n\t\tlabel {\n\t\t\tmargin: 12px 12px 0;\n\t\t}\n\t}\n"], ["\n\t@media screen and (min-width: 640px) {\n\t\tlabel {\n\t\t\tmargin: 12px 12px 0;\n\t\t}\n\t}\n"])));
exports.PopoverContent = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\twidth: 240px;\n\tmargin: 0 auto;\n"], ["\n\twidth: 240px;\n\tmargin: 0 auto;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
