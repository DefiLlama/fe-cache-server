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
exports.StablecoinInfo = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var swr_1 = __importDefault(require("swr"));
var stablecoins_1 = require("../../../api/categories/stablecoins");
var colors_1 = require("../../../constants/colors");
var PeggedContainer_1 = require("../../../containers/PeggedContainer");
var StablecoinInfo = function (_a) {
    var assetName = _a.assetName;
    var _b = (0, swr_1.default)("stablecoinInfo/".concat(assetName), function () { return (0, stablecoins_1.getPeggedAssetPageData)(assetName); }), data = _b.data, error = _b.error;
    if (!data && !error) {
        return ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)("p", __assign({ style: { margin: '180px 0', textAlign: 'center' } }, { children: "Loading..." })) }));
    }
    if (!data) {
        return ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)("p", { style: { margin: '180px 0', textAlign: 'center' } }) }));
    }
    return ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)(PeggedContainer_1.PeggedAssetInfo, __assign({}, data.props, { backgroundColor: colors_1.primaryColor })) }));
};
exports.StablecoinInfo = StablecoinInfo;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 24px;\n\tmax-width: calc(100vw - 32px);\n\n\t& > * {\n\t\t@media screen and (min-width: ", ") {\n\t\t\tmax-width: calc(100vw - 276px - 66px);\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 24px;\n\tmax-width: calc(100vw - 32px);\n\n\t& > * {\n\t\t@media screen and (min-width: ", ") {\n\t\t\tmax-width: calc(100vw - 276px - 66px);\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
});
var templateObject_1;
