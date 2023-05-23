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
exports.NewsCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dayjs_1 = __importDefault(require("dayjs"));
var link_1 = __importDefault(require("next/link"));
var polished_1 = require("polished");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var Container = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: ", ";\n\tpadding: 8px;\n\tborder-radius: 12px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 12px;\n\n\t:hover {\n\t\tbackground-color: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tflex-direction: row;\n\t}\n"], ["\n\tbackground-color: ", ";\n\tpadding: 8px;\n\tborder-radius: 12px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 12px;\n\n\t:hover {\n\t\tbackground-color: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tflex-direction: row;\n\t}\n"])), function (_a) {
    var color = _a.color;
    return (0, polished_1.transparentize)(0.9, color);
}, function (_a) {
    var color = _a.color;
    return (0, polished_1.transparentize)(0.8, color);
}, function (_a) {
    var bpSm = _a.theme.bpSm;
    return bpSm;
});
var Img = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tobject-fit: cover;\n\tborder-radius: 4px;\n\twidth: 100%;\n\theight: 100px;\n\n\t@media screen and (min-width: ", ") {\n\t\twidth: 200px;\n\t\tmin-width: 200px;\n\t\theight: 100px;\n\t}\n"], ["\n\tobject-fit: cover;\n\tborder-radius: 4px;\n\twidth: 100%;\n\theight: 100px;\n\n\t@media screen and (min-width: ", ") {\n\t\twidth: 200px;\n\t\tmin-width: 200px;\n\t\theight: 100px;\n\t}\n"])), function (_a) {
    var bpSm = _a.theme.bpSm;
    return bpSm;
});
var Headline = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n"], ["\n\tfont-size: 0.875rem;\n\tfont-weight: 500;\n"])));
var Content = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 14px;\n\tjustify-content: space-between;\n"], ["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 14px;\n\tjustify-content: space-between;\n"])));
var Metadata = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-weight: 400;\n\tfont-size: 0.75rem;\n\topacity: 0.8;\n\twhite-space: wrap;\n"], ["\n\tcolor: ", ";\n\tfont-weight: 400;\n\tfont-size: 0.75rem;\n\topacity: 0.8;\n\twhite-space: wrap;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var Footer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 14px;\n\n\t@media screen and (min-width: ", ") {\n\t\tflex-direction: row;\n\t\talign-items: flex-end;\n\t\tjustify-content: space-between;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 14px;\n\n\t@media screen and (min-width: ", ") {\n\t\tflex-direction: row;\n\t\talign-items: flex-end;\n\t\tjustify-content: space-between;\n\t}\n"])), function (_a) {
    var bpSm = _a.theme.bpSm;
    return bpSm;
});
var NewsCard = function (_a) {
    var imgSrc = _a.imgSrc, href = _a.href, headline = _a.headline, date = _a.date, color = _a.color;
    return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: href, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(Container, __assign({ color: color, target: "_blank", rel: "noopener" }, { children: [imgSrc && (0, jsx_runtime_1.jsx)(Img, { src: imgSrc, alt: headline }), (0, jsx_runtime_1.jsxs)(Content, { children: [(0, jsx_runtime_1.jsx)(Headline, { children: headline }), (0, jsx_runtime_1.jsxs)(Footer, { children: [(0, jsx_runtime_1.jsx)(Metadata, { children: (0, dayjs_1.default)(date).format('MMMM D, YYYY') }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ useTextColor: true, color: color, style: { justifyContent: 'space-between' } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Read on DL News" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] }))] })] })] })) })));
};
exports.NewsCard = NewsCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
