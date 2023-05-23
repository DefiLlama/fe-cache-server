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
exports.Wrapper = exports.DummyProtocol = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var Medium_1 = require("../../../layout/Stats/Medium");
var FormattedName_1 = __importDefault(require("../../../components/FormattedName"));
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var polished_1 = require("polished");
var layout_1 = __importDefault(require("../../../layout"));
var Search_1 = require("../../../components/Search");
var SEO_1 = __importDefault(require("../../../components/SEO"));
var utils_1 = require("../../../utils");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
var Treasury_1 = require("./Treasury");
var Fees_1 = require("./Fees");
var Common_1 = require("./Common");
var router_1 = require("next/router");
function DummyProtocol(_a) {
    var _b;
    var data = _a.data, title = _a.title, backgroundColor = _a.backgroundColor, protocol = _a.protocol;
    var router = (0, router_1.useRouter)();
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: title, backgroundColor: (0, polished_1.transparentize)(0.6, backgroundColor), style: { gap: '36px' } }, { children: [(0, jsx_runtime_1.jsx)(SEO_1.default, { cardName: data.name, token: data.name, logo: (0, utils_1.tokenIconUrl)(data.name) }), (0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Protocols', name: data.name } }), (0, jsx_runtime_1.jsxs)(exports.Wrapper, { children: [((_b = data === null || data === void 0 ? void 0 : data.otherProtocols) === null || _b === void 0 ? void 0 : _b.length) > 1 && ((0, jsx_runtime_1.jsx)(Common_1.OtherProtocols, __assign({ style: { margin: '-24px -24px -12px' } }, { children: data.otherProtocols.map(function (p) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/protocol/".concat((0, utils_1.standardizeProtocolName)(p)), passHref: true }, { children: (0, jsx_runtime_1.jsx)(Common_1.ProtocolLink, __assign({ active: router.asPath === "/protocol/".concat((0, utils_1.standardizeProtocolName)(p)), color: backgroundColor }, { children: p })) }), p)); }) }))), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: data.logo, size: 24 }), (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: data.name, maxCharacters: 16, fontWeight: 700 })] }), data.description && (0, jsx_runtime_1.jsx)("p", { children: data.description }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.LinksWrapper, { children: [data.url && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: data.url, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Website" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), data.twitter && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://twitter.com/".concat(data.twitter), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Twitter" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), data.treasury && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://github.com/DefiLlama/DefiLlama-Adapters/tree/main/projects/treasury/".concat(data.treasury), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Methodology" }), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })))] }), data.treasury && (0, jsx_runtime_1.jsx)(Treasury_1.Treasury, { protocolName: protocol }), (0, jsx_runtime_1.jsx)(Fees_1.ProtocolFeesRevenueVolumeCharts, { data: data })] })] })));
}
exports.DummyProtocol = DummyProtocol;
exports.Wrapper = (0, styled_components_1.default)(Medium_1.StatsSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tcolor: ", ";\n\tbackground: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tcolor: ", ";\n\tbackground: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg7;
});
var templateObject_1;
