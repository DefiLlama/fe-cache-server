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
exports.LazyChart = exports.ChartWrapper = exports.ChartsWrapper = exports.ChartsPlaceholder = exports.ExtraOption = exports.DetailsTable = exports.DownloadButton = exports.FlexRow = exports.Button = exports.LinksWrapper = exports.Section = exports.InfoWrapper = exports.SectionHeader = exports.Symbol = exports.Name = exports.DetailsWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_intersection_observer_1 = require("react-intersection-observer");
var styled_components_1 = __importDefault(require("styled-components"));
var ButtonStyled_1 = require("../../components/ButtonStyled");
exports.DetailsWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tpadding-bottom: calc(24px + 0.4375rem);\n\tcolor: ", ";\n\tbackground: ", ";\n\tgrid-column: span 1;\n\tborder-radius: 12px 12px 0 0;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmin-width: 380px;\n\t\tborder-radius: 12px 0 0 12px;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tpadding-bottom: calc(24px + 0.4375rem);\n\tcolor: ", ";\n\tbackground: ", ";\n\tgrid-column: span 1;\n\tborder-radius: 12px 12px 0 0;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmin-width: 380px;\n\t\tborder-radius: 12px 0 0 12px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg7;
});
exports.Name = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tfont-size: 1.25rem;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tfont-size: 1.25rem;\n"])));
exports.Symbol = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tfont-weight: 400;\n\tmargin-right: auto;\n"], ["\n\tfont-weight: 400;\n\tmargin-right: auto;\n"])));
exports.SectionHeader = styled_components_1.default.h2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tfont-weight: 700;\n\tfont-size: 1.25rem;\n\tmargin: 0 0 -24px;\n\tborder-left: 1px solid transparent;\n"], ["\n\tfont-weight: 700;\n\tfont-size: 1.25rem;\n\tmargin: 0 0 -24px;\n\tborder-left: 1px solid transparent;\n"])));
exports.InfoWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tbackground: ", ";\n\tborder: ", ";\n\tborder-radius: 12px;\n\tdisplay: grid;\n\tpadding: 24px;\n\tgrid-template-columns: 1fr 1fr;\n\tbox-shadow: ", ";\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-rows: repeat(2, auto);\n\t}\n"], ["\n\tbackground: ", ";\n\tborder: ", ";\n\tborder-radius: 12px;\n\tdisplay: grid;\n\tpadding: 24px;\n\tgrid-template-columns: 1fr 1fr;\n\tbox-shadow: ", ";\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-rows: repeat(2, auto);\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg7;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.divider;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
exports.Section = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tgrid-column: 1 / -1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 24px 0;\n\n\t&:first-child {\n\t\tpadding-top: 0;\n\t}\n\n\t&:last-child {\n\t\tpadding-bottom: 0;\n\t}\n\n\t:nth-child(n + 2) {\n\t\tborder-top: ", ";\n\t}\n\n\th3 {\n\t\tfont-weight: 600;\n\t\tfont-size: 1.125rem;\n\t}\n\n\tp {\n\t\tline-height: 1.5rem;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: span 1;\n\n\t\t:nth-child(2) {\n\t\t\tborder-top: 1px solid transparent;\n\t\t\tpadding-top: 0;\n\t\t}\n\n\t\t:nth-child(odd) {\n\t\t\tborder-right: ", ";\n\t\t}\n\n\t\t:nth-child(even) {\n\t\t\tpadding-left: 24px;\n\t\t}\n\n\t\t&:only-child,\n\t\t:nth-child(odd):last-child {\n\t\t\tborder-right: 1px solid transparent;\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n"], ["\n\tgrid-column: 1 / -1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 24px 0;\n\n\t&:first-child {\n\t\tpadding-top: 0;\n\t}\n\n\t&:last-child {\n\t\tpadding-bottom: 0;\n\t}\n\n\t:nth-child(n + 2) {\n\t\tborder-top: ", ";\n\t}\n\n\th3 {\n\t\tfont-weight: 600;\n\t\tfont-size: 1.125rem;\n\t}\n\n\tp {\n\t\tline-height: 1.5rem;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: span 1;\n\n\t\t:nth-child(2) {\n\t\t\tborder-top: 1px solid transparent;\n\t\t\tpadding-top: 0;\n\t\t}\n\n\t\t:nth-child(odd) {\n\t\t\tborder-right: ", ";\n\t\t}\n\n\t\t:nth-child(even) {\n\t\t\tpadding-left: 24px;\n\t\t}\n\n\t\t&:only-child,\n\t\t:nth-child(odd):last-child {\n\t\t\tborder-right: 1px solid transparent;\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text5;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text5;
});
exports.LinksWrapper = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 16px;\n\tflex-wrap: wrap;\n"], ["\n\tdisplay: flex;\n\tgap: 16px;\n\tflex-wrap: wrap;\n"])));
exports.Button = (0, styled_components_1.default)(ButtonStyled_1.ButtonLight)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 4px;\n\talign-items: center;\n\tpadding: 8px 12px;\n\tfont-size: 0.875rem;\n\tfont-weight: 400;\n\twhite-space: nowrap;\n\tfont-family: var(--font-inter);\n"], ["\n\tdisplay: flex;\n\tgap: 4px;\n\talign-items: center;\n\tpadding: 8px 12px;\n\tfont-size: 0.875rem;\n\tfont-weight: 400;\n\twhite-space: nowrap;\n\tfont-family: var(--font-inter);\n"])));
exports.FlexRow = styled_components_1.default.p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n"])));
exports.DownloadButton = (0, styled_components_1.default)(exports.Button)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: inherit;\n\tpadding: 8px 12px;\n\tborder-radius: 10px;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: inherit;\n\tpadding: 8px 12px;\n\tborder-radius: 10px;\n"])));
exports.DetailsTable = styled_components_1.default.table(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\tborder-collapse: collapse;\n\n\tcaption,\n\tthead th {\n\t\tfont-weight: 400;\n\t\tfont-size: 0.75rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\tcaption {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t}\n\n\tth {\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\ttext-align: start;\n\t\tcolor: ", ";\n\t}\n\n\ttd {\n\t\tfont-weight: 600;\n\t\tfont-size: 1rem;\n\t\ttext-align: right;\n\t\tfont-family: var(--font-jetbrains);\n\t}\n\n\tthead td {\n\t\t> * {\n\t\t\twidth: min-content;\n\t\t\tbackground: none;\n\t\t\tmargin-left: auto;\n\t\t\tcolor: ", ";\n\t\t}\n\t}\n\n\tthead > tr > *,\n\tcaption {\n\t\tpadding: 0 0 4px;\n\t}\n\n\ttbody > tr > * {\n\t\tpadding: 4px 0;\n\t}\n\n\t.question-helper {\n\t\tpadding: 0 16px 4px;\n\t}\n"], ["\n\tborder-collapse: collapse;\n\n\tcaption,\n\tthead th {\n\t\tfont-weight: 400;\n\t\tfont-size: 0.75rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\tcaption {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tgap: 8px;\n\t}\n\n\tth {\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\ttext-align: start;\n\t\tcolor: ", ";\n\t}\n\n\ttd {\n\t\tfont-weight: 600;\n\t\tfont-size: 1rem;\n\t\ttext-align: right;\n\t\tfont-family: var(--font-jetbrains);\n\t}\n\n\tthead td {\n\t\t> * {\n\t\t\twidth: min-content;\n\t\t\tbackground: none;\n\t\t\tmargin-left: auto;\n\t\t\tcolor: ", ";\n\t\t}\n\t}\n\n\tthead > tr > *,\n\tcaption {\n\t\tpadding: 0 0 4px;\n\t}\n\n\ttbody > tr > * {\n\t\tpadding: 4px 0;\n\t}\n\n\t.question-helper {\n\t\tpadding: 0 16px 4px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#cccccc' : '#545757');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#cccccc' : '#545757');
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
exports.ExtraOption = styled_components_1.default.label(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\n\t:hover {\n\t\tcursor: pointer;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\n\t:hover {\n\t\tcursor: pointer;\n\t}\n"])));
exports.ChartsPlaceholder = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\theight: 400px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-column: 1 / -1;\n"], ["\n\theight: 400px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgrid-column: 1 / -1;\n"])));
exports.ChartsWrapper = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tborder-radius: 12px;\n\tbackground: ", ";\n\tborder: ", ";\n\tbox-shadow: ", ";\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tborder-radius: 12px;\n\tbackground: ", ";\n\tborder: ", ";\n\tbox-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.divider;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
exports.ChartWrapper = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\tgrid-column: span 2;\n\tmin-height: 400px;\n\tpadding: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: span 1;\n\n\t\t:last-child:nth-child(2n - 1) {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n"], ["\n\tgrid-column: span 2;\n\tmin-height: 400px;\n\tpadding: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-column: span 1;\n\n\t\t:last-child:nth-child(2n - 1) {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n"])));
(0, react_intersection_observer_1.defaultFallbackInView)(true);
var LazyChart = function (_a) {
    var children = _a.children, _b = _a.enable, enable = _b === void 0 ? true : _b, props = __rest(_a, ["children", "enable"]);
    var _c = (0, react_intersection_observer_1.useInView)({
        triggerOnce: true
    }), ref = _c.ref, inView = _c.inView;
    return enable ? ((0, jsx_runtime_1.jsx)(exports.ChartWrapper, __assign({ ref: ref }, props, { children: inView && children }))) : (children);
};
exports.LazyChart = LazyChart;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
