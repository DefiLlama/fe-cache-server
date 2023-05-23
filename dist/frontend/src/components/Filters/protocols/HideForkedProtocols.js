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
exports.HideForkedProtocols = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var styled_components_1 = __importDefault(require("styled-components"));
var components_1 = require("../../../components");
function HideForkedProtocols() {
    var router = (0, router_1.useRouter)();
    var hideForks = router.query.hideForks;
    var toHide = hideForks && typeof hideForks === 'string' && hideForks === 'true' ? false : true;
    var hide = function () {
        router.push({
            pathname: router.pathname,
            query: __assign(__assign({}, router.query), { hideForks: toHide })
        }, undefined, { shallow: true });
    };
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(components_1.Checkbox2, { type: "checkbox", value: "hideForks", checked: !toHide, onChange: hide }), (0, jsx_runtime_1.jsx)("span", { children: "Hide Forked Protocols" })] }));
}
exports.HideForkedProtocols = HideForkedProtocols;
var Wrapper = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n\tcursor: pointer;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n\tcursor: pointer;\n"])));
var templateObject_1;
