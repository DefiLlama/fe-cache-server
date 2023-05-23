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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyCard = exports.Divider = exports.Hint = exports.ToggleWrapper2 = exports.ToggleWrapper = exports.FallbackMessage = exports.Checkbox2 = exports.DownloadIcon = exports.DownloadButton = exports.Checkbox = exports.ApplyFilters = exports.FormSubmitBtn = exports.SubNavEl = exports.SubNav = exports.SideBar = exports.StyledIcon = exports.Hover = exports.IconWrapper = exports.PanelHiddenMobile = exports.BreakpointPanel = exports.BreakpointPanels = exports.ChartAndValuesWrapper = exports.StyledAnchor = exports.PanelSmol = exports.PanelThicc = exports.Panel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var rebass_1 = require("rebass");
var ariakit_1 = require("ariakit");
var react_feather_1 = require("react-feather");
var Link_1 = require("../components/Link");
exports.Panel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\tbackground-color: ", ";\n\tpadding: 1.25rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tborder-radius: 8px;\n\tborder: 1px solid ", ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n"], ["\n\tposition: relative;\n\tbackground-color: ", ";\n\tpadding: 1.25rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tborder-radius: 8px;\n\tborder: 1px solid ", ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.advancedBG;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
exports.PanelThicc = (0, styled_components_1.default)(exports.Panel)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: none;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\n\t@media (min-width: 80rem) {\n\t\tdisplay: flex;\n\t}\n"], ["\n\tdisplay: none;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\n\t@media (min-width: 80rem) {\n\t\tdisplay: flex;\n\t}\n"])));
exports.PanelSmol = (0, styled_components_1.default)(exports.Panel)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\n\t@media (min-width: 80rem) {\n\t\tdisplay: none;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\n\t@media (min-width: 80rem) {\n\t\tdisplay: none;\n\t}\n"])));
exports.StyledAnchor = styled_components_1.default.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 0.2rem;\n\tmargin-left: 0.2rem;\n\t:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t@media (min-width: 80rem) {\n\t\tmargin-right: 0.2rem;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 0.2rem;\n\tmargin-left: 0.2rem;\n\t:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t@media (min-width: 80rem) {\n\t\tmargin-right: 0.2rem;\n\t}\n"])));
exports.ChartAndValuesWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tposition: relative;\n\n\t#chartWrapper {\n\t\tflex: 1;\n\t\tmin-height: 381px;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tflex-direction: row;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tposition: relative;\n\n\t#chartWrapper {\n\t\tflex: 1;\n\t\tmin-height: 381px;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tflex-direction: row;\n\t}\n"])));
exports.BreakpointPanels = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tflex: 1;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmax-width: 350px;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tflex: 1;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmax-width: 350px;\n\t}\n"])));
exports.BreakpointPanel = (0, styled_components_1.default)(exports.Panel)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tflex: 1;\n\tgap: 4px;\n\tpadding: 18px 25px;\n\tjustify-content: center;\n\n\t& > h1,\n\t& > h2 {\n\t\tmin-width: 0;\n\t\tfont-weight: 500;\n\t\tfont-size: 1rem;\n\t}\n\n\t& > p {\n\t\tmargin: 4px 0 -6px;\n\t\tfont-weight: 600;\n\t\tfont-size: 2rem;\n\t\tcolor: var(--tile-text-color);\n\t}\n"], ["\n\tflex: 1;\n\tgap: 4px;\n\tpadding: 18px 25px;\n\tjustify-content: center;\n\n\t& > h1,\n\t& > h2 {\n\t\tmin-width: 0;\n\t\tfont-weight: 500;\n\t\tfont-size: 1rem;\n\t}\n\n\t& > p {\n\t\tmargin: 4px 0 -6px;\n\t\tfont-weight: 600;\n\t\tfont-size: 2rem;\n\t\tcolor: var(--tile-text-color);\n\t}\n"])));
exports.PanelHiddenMobile = (0, styled_components_1.default)(exports.BreakpointPanel)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t@media screen and (max-width: 50rem) {\n\t\tdisplay: none;\n\t}\n"], ["\n\t@media screen and (max-width: 50rem) {\n\t\tdisplay: none;\n\t}\n"])));
var Divider = (0, styled_components_1.default)(rebass_1.Box)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\theight: 1px;\n\tbackground-color: ", ";\n"], ["\n\theight: 1px;\n\tbackground-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.divider;
});
exports.Divider = Divider;
exports.IconWrapper = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\tposition: absolute;\n\tright: 0;\n\tborder-radius: 3px;\n\theight: 16px;\n\twidth: 16px;\n\tpadding: 0px;\n\tbottom: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: ", ";\n\n\t:hover {\n\t\tcursor: pointer;\n\t\topacity: 0.7;\n\t}\n"], ["\n\tposition: absolute;\n\tright: 0;\n\tborder-radius: 3px;\n\theight: 16px;\n\twidth: 16px;\n\tpadding: 0px;\n\tbottom: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: ", ";\n\n\t:hover {\n\t\tcursor: pointer;\n\t\topacity: 0.7;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var Hint = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ fontSize: 16, weight: 500 }, rest, { children: children })));
};
exports.Hint = Hint;
exports.Hover = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\t:hover {\n\t\tcursor: pointer;\n\t\topacity: ", ";\n\t}\n"], ["\n\t:hover {\n\t\tcursor: pointer;\n\t\topacity: ", ";\n\t}\n"])), function (_a) {
    var fade = _a.fade;
    return fade && '0.7';
});
exports.StyledIcon = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\tcolor: ", ";\n"], ["\n\tcolor: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var EmptyCard = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 200px;\n\tborder-radius: 20px;\n\tcolor: ", ";\n\theight: ", ";\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 200px;\n\tborder-radius: 20px;\n\tcolor: ", ";\n\theight: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var height = _a.height;
    return height && height;
});
exports.EmptyCard = EmptyCard;
exports.SideBar = styled_components_1.default.span(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-gap: 24px;\n\tposition: sticky;\n\ttop: 4rem;\n"], ["\n\tdisplay: grid;\n\tgrid-gap: 24px;\n\tposition: sticky;\n\ttop: 4rem;\n"])));
exports.SubNav = styled_components_1.default.ul(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tpadding: 0;\n\tmargin-bottom: 2rem;\n"], ["\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tpadding: 0;\n\tmargin-bottom: 2rem;\n"])));
exports.SubNavEl = styled_components_1.default.li(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\tlist-style: none;\n\tdisplay: flex;\n\tpadding-bottom: 0.5rem;\n\tmargin-right: 1rem;\n\tfont-weight: ", ";\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0);\n\n\t:hover {\n\t\tcursor: pointer;\n\t\tborder-bottom: 1px solid ", ";\n\t}\n"], ["\n\tlist-style: none;\n\tdisplay: flex;\n\tpadding-bottom: 0.5rem;\n\tmargin-right: 1rem;\n\tfont-weight: ", ";\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0);\n\n\t:hover {\n\t\tcursor: pointer;\n\t\tborder-bottom: 1px solid ", ";\n\t}\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? 600 : 500);
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
exports.FormSubmitBtn = styled_components_1.default.button(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n\tpadding: 12px;\n\tmargin: 12px 0 0;\n\tbackground: #2172e5;\n\tcolor: #fff;\n\tfont-weight: 400;\n\tborder-radius: 8px;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground: #4190ff;\n\t}\n\n\t:disabled {\n\t\topacity: 0.5;\n\t}\n"], ["\n\tpadding: 12px;\n\tmargin: 12px 0 0;\n\tbackground: #2172e5;\n\tcolor: #fff;\n\tfont-weight: 400;\n\tborder-radius: 8px;\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground: #4190ff;\n\t}\n\n\t:disabled {\n\t\topacity: 0.5;\n\t}\n"])));
exports.ApplyFilters = (0, styled_components_1.default)(exports.FormSubmitBtn)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n\t@media screen and (min-width: 640px) {\n\t\tborder-radius: 0 0 8px 8px;\n\t}\n"], ["\n\t@media screen and (min-width: 640px) {\n\t\tborder-radius: 0 0 8px 8px;\n\t}\n"])));
exports.Checkbox = (0, styled_components_1.default)(ariakit_1.CheckboxCheck)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n\tdisplay: flex;\n\theight: 13px;\n\twidth: 13px;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-left: auto;\n\tborder-radius: 2px;\n\tborder: 1px solid #28a2b5;\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n\tcolor: ", ";\n"], ["\n\tdisplay: flex;\n\theight: 13px;\n\twidth: 13px;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-left: auto;\n\tborder-radius: 2px;\n\tborder: 1px solid #28a2b5;\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n\tcolor: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
exports.DownloadButton = (0, styled_components_1.default)(Link_1.BasicLink)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n\tpadding: 4px 6px;\n\tborder-radius: 6px;\n\tbackground: ", ";\n\tposition: absolute;\n\tbottom: 8px;\n\tright: 8px;\n\tdisplay: flex;\n\talign-items: center;\n"], ["\n\tpadding: 4px 6px;\n\tborder-radius: 6px;\n\tbackground: ", ";\n\tposition: absolute;\n\tbottom: 8px;\n\tright: 8px;\n\tdisplay: flex;\n\talign-items: center;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
exports.DownloadIcon = (0, styled_components_1.default)(react_feather_1.DownloadCloud)(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n\tcolor: inherit;\n\twidth: 16px;\n\theight: 16px;\n"], ["\n\tcolor: inherit;\n\twidth: 16px;\n\theight: 16px;\n"])));
exports.Checkbox2 = styled_components_1.default.input(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n\tposition: relative;\n\ttop: 1px;\n\tpadding: 0;\n\t-webkit-appearance: none;\n\tappearance: none;\n\tbackground-color: transparent;\n\twidth: 1em;\n\theight: 1em;\n\tborder: ", ";\n\tborder-radius: 0.15em;\n\ttransform: translateY(-0.075em);\n\tdisplay: grid;\n\tplace-content: center;\n\tcursor: pointer;\n\n\t::before {\n\t\tcontent: '';\n\t\twidth: 0.5em;\n\t\theight: 0.5em;\n\t\ttransform: scale(0);\n\t\ttransition: 120ms transform ease-in-out;\n\t\tbox-shadow: ", ";\n\t\ttransform-origin: bottom left;\n\t\tclip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n\t}\n\n\t:checked::before {\n\t\ttransform: scale(1);\n\t}\n\n\t:focus-visible {\n\t\toutline-offset: max(2px, 0.15em);\n\t}\n"], ["\n\tposition: relative;\n\ttop: 1px;\n\tpadding: 0;\n\t-webkit-appearance: none;\n\tappearance: none;\n\tbackground-color: transparent;\n\twidth: 1em;\n\theight: 1em;\n\tborder: ", ";\n\tborder-radius: 0.15em;\n\ttransform: translateY(-0.075em);\n\tdisplay: grid;\n\tplace-content: center;\n\tcursor: pointer;\n\n\t::before {\n\t\tcontent: '';\n\t\twidth: 0.5em;\n\t\theight: 0.5em;\n\t\ttransform: scale(0);\n\t\ttransition: 120ms transform ease-in-out;\n\t\tbox-shadow: ", ";\n\t\ttransform-origin: bottom left;\n\t\tclip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n\t}\n\n\t:checked::before {\n\t\ttransform: scale(1);\n\t}\n\n\t:focus-visible {\n\t\toutline-offset: max(2px, 0.15em);\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text4;
}, function (_a) {
    var theme = _a.theme;
    return 'inset 1em 1em ' + theme.text1;
});
exports.FallbackMessage = styled_components_1.default.p(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n\tpadding: 1.25rem;\n\ttext-align: center;\n\tbackground-color: ", ";\n\tborder-radius: 8px;\n\tborder: 1px solid ", ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n"], ["\n\tpadding: 1.25rem;\n\ttext-align: center;\n\tbackground-color: ", ";\n\tborder-radius: 8px;\n\tborder: 1px solid ", ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.advancedBG;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
exports.ToggleWrapper = styled_components_1.default.label(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tgap: 8px;\n\tcursor: pointer;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tgap: 8px;\n\tcursor: pointer;\n"])));
exports.ToggleWrapper2 = (0, styled_components_1.default)(exports.ToggleWrapper)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n\t@media screen and (min-width: ", ") {\n\t\t:first-of-type {\n\t\t\tmargin-left: auto;\n\t\t}\n\t}\n"], ["\n\t@media screen and (min-width: ", ") {\n\t\t:first-of-type {\n\t\t\tmargin-left: auto;\n\t\t}\n\t}\n"])), function (_a) {
    var bpSm = _a.theme.bpSm;
    return bpSm;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25;
