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
exports.GlobalStyle = exports.Header = exports.TYPE = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importStar(require("styled-components"));
var rebass_1 = require("rebass");
var LocalStorage_1 = require("../contexts/LocalStorage");
var breakpoints_1 = require("../constants/breakpoints");
function ThemeProvider(_a) {
    var children = _a.children;
    var _b = __read((0, LocalStorage_1.useDarkModeManager)(), 1), darkMode = _b[0];
    return (0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, __assign({ theme: theme(darkMode) }, { children: children }));
}
exports.default = ThemeProvider;
var theme = function (darkMode) { return ({
    mode: darkMode ? 'dark' : 'light',
    text1: darkMode ? '#FAFAFA' : '#1F1F1F',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? '#2C2F36' : '#EDEEF2',
    // special case text types
    white: '#FFFFFF',
    // backgrounds / greys
    bg1: darkMode ? '#212429' : '#FAFAFA',
    bg2: darkMode ? '#2C2F36' : '#F7F8FA',
    bg3: darkMode ? '#40444F' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#565A69' : '#888D9B',
    bg6: darkMode ? '#000' : '#FFFFFF',
    bg7: darkMode ? 'rgba(7,14,15,0.7)' : 'rgba(252,252,251,1)',
    //specialty colors
    background: darkMode ? '#17181c' : '#ffffff',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.4)',
    divider: darkMode ? 'rgba(43, 43, 43, 0.435)' : 'rgba(43, 43, 43, 0.035)',
    //primary colors
    primary1: darkMode ? '#2172E5' : '#445ed0',
    // other
    red1: '#FF6871',
    green1: '#27AE60',
    link: '#2172E5',
    blue: '#2f80ed',
    //shadow
    shadowSm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    // breakpoints
    bpSm: "".concat(breakpoints_1.sm, "rem"),
    bpMed: "".concat(breakpoints_1.med, "rem"),
    bpLg: "".concat(breakpoints_1.lg, "rem"),
    bpXl: "".concat(breakpoints_1.xl, "rem"),
    bp2Xl: "".concat(breakpoints_1.twoXl, "rem"),
    maxSm: "@media screen and (max-width: ".concat(breakpoints_1.sm, "rem)"),
    maxMed: "@media screen and (max-width: ".concat(breakpoints_1.med, "rem)"),
    maxLg: "@media screen and (max-width: ".concat(breakpoints_1.lg, "rem)"),
    maxXl: "@media screen and (max-width: ".concat(breakpoints_1.xl, "rem)"),
    minSm: "@media screen and (min-width: ".concat(breakpoints_1.sm, "rem)"),
    minMed: "@media screen and (min-width: ".concat(breakpoints_1.med, "rem)"),
    minLg: "@media screen and (min-width: ".concat(breakpoints_1.lg, "rem)"),
    minXl: "@media screen and (min-width: ".concat(breakpoints_1.xl, "rem)"),
    min2Xl: "@media screen and (min-width: ".concat(breakpoints_1.twoXl, "rem)"),
    breakpoints: ["".concat(breakpoints_1.sm, "rem"), "".concat(breakpoints_1.med, "rem"), "".concat(breakpoints_1.lg, "rem"), "".concat(breakpoints_1.xl, "rem")]
}); };
var TextWrapper = (0, styled_components_1.default)(rebass_1.Text)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n"], ["\n\tcolor: ", ";\n"])), function (_a) {
    var color = _a.color, theme = _a.theme;
    return theme[color];
});
exports.TYPE = {
    heading: function (props) {
        return (0, jsx_runtime_1.jsx)(TextWrapper, __assign({ fontWeight: 500, fontSize: 16, color: 'text1' }, props));
    },
    main: function (props) {
        return (0, jsx_runtime_1.jsx)(TextWrapper, __assign({ fontWeight: 500, fontSize: 14, color: 'text1' }, props));
    },
    body: function (props) {
        return (0, jsx_runtime_1.jsx)(TextWrapper, __assign({ fontWeight: 400, fontSize: 14, color: 'text1' }, props));
    },
    largeHeader: function (props) {
        return (0, jsx_runtime_1.jsx)(TextWrapper, __assign({ fontWeight: 500, color: 'text1', fontSize: 24 }, props));
    }
};
exports.Header = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 24px;\n\tfont-weight: 500;\n\tmargin: 0 0 -20px;\n"], ["\n\tcolor: ", ";\n\tfont-size: 24px;\n\tfont-weight: 500;\n\tmargin: 0 0 -20px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme['text1'];
});
var slideUp = (0, styled_components_1.keyframes)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t0% {\n\t\topacity: 0;\n\ttransform: translateY(100%);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n"], ["\n\t0% {\n\t\topacity: 0;\n\ttransform: translateY(100%);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0%);\n\t\topacity: 1;\n\t}\n"])));
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t:root {\n\t\t--text-disabled: ", "\n\t}\n\n\tbody, #__next {\n\t\tbackground-color: ", ";\n\t}\n\n  #__next {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 100%;\n    position: relative;\n    color: ", ";\n    isolation: isolate;\n\n    ", " {\n      flex-direction: row;\n    }\n  }\n\n  a, input, button, textarea, select {\n    &:focus-visible {\n      outline: 1px solid ", ";\n    }\n  }\n\n  .visually-hidden {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n  }\n\n\t.tooltip-trigger {\n\t\tcolor: ", ";\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding: 0;\n\n\t\t:focus-visible {\n\t\t\toutline-offset: 2px;\n\t\t}\n\t}\n\n\t.tooltip-trigger a {\n\t\tdisplay: flex;\n\t}\n\n\n\t.sliding-menu-item {\n\t\tflex-shrink: 0;\n\t\tpadding: 8px;\n\t\tcolor: ", ";\n\t\tcursor: pointer;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tbackground: none;\n\t\tborder: none;\n\t\ttext-align: start;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tgap: 16px;\n\n\t\t& > *[data-name] {\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\topacity: ", ";\n\n\t\t@media screen and (min-width: 640px) {\n\t\t\t\n\n\t\t\t:hover,\n\t\t\t:focus-visible,\n\t\t\t&[data-active-item] {\n\t\t\t\toutline: none;\n\n\t\t\t\t&[data-variant='secondary'] {\n\t\t\t\t\tbackground: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.sliding-menu {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 8px;\n\t\theight: 70vh;\n\t\tmin-width: 180px;\n\t\tfont-size: 0.875rem;\n\t\tfont-weight: 500;\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t\tborder: 1px solid ", ";\n\t\tborder-radius: 8px 8px 0 0;\n\t\tfilter: ", ";\n\t\toverflow-y: auto;\n\t\toutline: none !important;\n\t\tz-index: 10;\n\t\tpadding: 8px;\n\n\t\t#no-results {\n\t\t\tpadding: 0 12px 8px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t&[data-variant='secondary'] {\n\t\t\tbackground: ", ";\n\t\t}\n\n\t\t&[data-menuwrapper='true'] {\n\t\t\toverflow-x: scroll;\n\t\t\toverscroll-behavior: contain;\n\t\t\tscroll-behavior: smooth;\n\t\t\tscroll-snap-type: x mandatory;\n\t\t\tscroll-snap-stop: always;\n\t\t\tscrollbar-width: none;\n\t\t\tanimation: ", " 0.2s ease;\n\t\t\tz-index: 10;\n\n\t\t\t::-webkit-scrollbar {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\n\t\t&[data-leave] {\n\t\t\tz-index: 0;\n\t\t}\n\n\t\t#no-results {\n\t\t\topacity: 0.7;\n\t\t\tmargin: auto;\n\t\t}\n\n\t\t@media screen and (min-width: 640px) {\n\t\t\tmax-height: 400px;\n\t\t\tfont-size: 0.825rem;\n\t\t\tfont-weight: 400;\n\t\t\tgap: 0px;\n\t\t\tbackground: ", ";\n\t\t\tborder-radius: 8px;\n\t\t\ttransform: translateY(0%);\n\n\t\t\t&[data-variant='secondary'] {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t}\n\t}\n\n\t.sliding-menu-button {\n\t\tposition: relative;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tgap: 16px;\n\t\tpadding: 8px 12px;\n\t\tfont-size: 0.825rem;\n\t\tborder-radius: 8px;\n\t\tcursor: pointer;\n\t\toutline: none;\n\t\tborder: 1px solid transparent;\n\t\tcolor: ", ";\n\n\t\twhite-space: nowrap;\n\n\t\t:focus-visible {\n\t\t\toutline: ", ";\n\t\t\toutline-offset: 1px;\n\t\t}\n\n\t\tspan:first-of-type {\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\tsvg {\n\t\t\tposition: relative;\n\t\t\ttop: 1px;\n\t\t}\n\n\t\t&[data-variant='secondary'] {\n\t\t\tbackground: ", ";\n\t\t\tfont-size: 0.75rem;\n\n\t\t\t:hover,\n\t\t\t:focus-visible,\n\t\t\t&[data-focus-visible] {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t}\n\t}\n\n\t.sliding-menu-button.no-bg {\n\t\tbackground: none;\n\t}\n\n\t.sliding-menu-button.align-reverse {\n\t\tflex-direction: row-reverse;\n\t}\n\n\t.dialog {\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t\tborder: 1px solid ", ";\n\t}\n\n\t.combobox-input {\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t\tfont: inherit;\n\t\tpadding: 8px 12px;\n\t\tborder: ", ";\n\t\tborder-radius: 8px;\n\t\tmargin: 12px 12px 0;\n\t\n\t\t:focus-visible {\n\t\t\toutline: ", ";\n\t\t}\n\t}\n\n\t.select-options-wrapper {\n\t\toverflow-y: auto;\n\t}\n\n\t.checkbox-filter {\n\t\tdisplay: flex;\n\t\tgap: 6px;\n\t\talign-items: center;\n\t\tflex-wrap: nowrap;\n\t}\n\n"], ["\n\t:root {\n\t\t--text-disabled: ", "\n\t}\n\n\tbody, #__next {\n\t\tbackground-color: ", ";\n\t}\n\n  #__next {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 100%;\n    position: relative;\n    color: ", ";\n    isolation: isolate;\n\n    ", " {\n      flex-direction: row;\n    }\n  }\n\n  a, input, button, textarea, select {\n    &:focus-visible {\n      outline: 1px solid ", ";\n    }\n  }\n\n  .visually-hidden {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n  }\n\n\t.tooltip-trigger {\n\t\tcolor: ", ";\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding: 0;\n\n\t\t:focus-visible {\n\t\t\toutline-offset: 2px;\n\t\t}\n\t}\n\n\t.tooltip-trigger a {\n\t\tdisplay: flex;\n\t}\n\n\n\t.sliding-menu-item {\n\t\tflex-shrink: 0;\n\t\tpadding: 8px;\n\t\tcolor: ", ";\n\t\tcursor: pointer;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tbackground: none;\n\t\tborder: none;\n\t\ttext-align: start;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tgap: 16px;\n\n\t\t& > *[data-name] {\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\topacity: ", ";\n\n\t\t@media screen and (min-width: 640px) {\n\t\t\t\n\n\t\t\t:hover,\n\t\t\t:focus-visible,\n\t\t\t&[data-active-item] {\n\t\t\t\toutline: none;\n\n\t\t\t\t&[data-variant='secondary'] {\n\t\t\t\t\tbackground: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.sliding-menu {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 8px;\n\t\theight: 70vh;\n\t\tmin-width: 180px;\n\t\tfont-size: 0.875rem;\n\t\tfont-weight: 500;\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t\tborder: 1px solid ", ";\n\t\tborder-radius: 8px 8px 0 0;\n\t\tfilter: ", ";\n\t\toverflow-y: auto;\n\t\toutline: none !important;\n\t\tz-index: 10;\n\t\tpadding: 8px;\n\n\t\t#no-results {\n\t\t\tpadding: 0 12px 8px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t&[data-variant='secondary'] {\n\t\t\tbackground: ", ";\n\t\t}\n\n\t\t&[data-menuwrapper='true'] {\n\t\t\toverflow-x: scroll;\n\t\t\toverscroll-behavior: contain;\n\t\t\tscroll-behavior: smooth;\n\t\t\tscroll-snap-type: x mandatory;\n\t\t\tscroll-snap-stop: always;\n\t\t\tscrollbar-width: none;\n\t\t\tanimation: ", " 0.2s ease;\n\t\t\tz-index: 10;\n\n\t\t\t::-webkit-scrollbar {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\n\t\t&[data-leave] {\n\t\t\tz-index: 0;\n\t\t}\n\n\t\t#no-results {\n\t\t\topacity: 0.7;\n\t\t\tmargin: auto;\n\t\t}\n\n\t\t@media screen and (min-width: 640px) {\n\t\t\tmax-height: 400px;\n\t\t\tfont-size: 0.825rem;\n\t\t\tfont-weight: 400;\n\t\t\tgap: 0px;\n\t\t\tbackground: ", ";\n\t\t\tborder-radius: 8px;\n\t\t\ttransform: translateY(0%);\n\n\t\t\t&[data-variant='secondary'] {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t}\n\t}\n\n\t.sliding-menu-button {\n\t\tposition: relative;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tgap: 16px;\n\t\tpadding: 8px 12px;\n\t\tfont-size: 0.825rem;\n\t\tborder-radius: 8px;\n\t\tcursor: pointer;\n\t\toutline: none;\n\t\tborder: 1px solid transparent;\n\t\tcolor: ", ";\n\n\t\twhite-space: nowrap;\n\n\t\t:focus-visible {\n\t\t\toutline: ", ";\n\t\t\toutline-offset: 1px;\n\t\t}\n\n\t\tspan:first-of-type {\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\tsvg {\n\t\t\tposition: relative;\n\t\t\ttop: 1px;\n\t\t}\n\n\t\t&[data-variant='secondary'] {\n\t\t\tbackground: ", ";\n\t\t\tfont-size: 0.75rem;\n\n\t\t\t:hover,\n\t\t\t:focus-visible,\n\t\t\t&[data-focus-visible] {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t}\n\t}\n\n\t.sliding-menu-button.no-bg {\n\t\tbackground: none;\n\t}\n\n\t.sliding-menu-button.align-reverse {\n\t\tflex-direction: row-reverse;\n\t}\n\n\t.dialog {\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t\tborder: 1px solid ", ";\n\t}\n\n\t.combobox-input {\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t\tfont: inherit;\n\t\tpadding: 8px 12px;\n\t\tborder: ", ";\n\t\tborder-radius: 8px;\n\t\tmargin: 12px 12px 0;\n\t\n\t\t:focus-visible {\n\t\t\toutline: ", ";\n\t\t}\n\t}\n\n\t.select-options-wrapper {\n\t\toverflow-y: auto;\n\t}\n\n\t.checkbox-filter {\n\t\tdisplay: flex;\n\t\tgap: 6px;\n\t\talign-items: center;\n\t\tflex-wrap: nowrap;\n\t}\n\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#999' : '#757575');
}, function (_a) {
    var theme = _a.theme;
    return theme.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var minLg = _a.theme.minLg;
    return minLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 0.6 : 1);
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#222429' : '#f6f6f6');
}, function (_a) {
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
}, slideUp, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#1c1f2d' : '#f4f6ff');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#222429' : '#f6f6f6');
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
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#40444f' : '#cbcbcb');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#000' : '#fff');
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text4;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text1;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
