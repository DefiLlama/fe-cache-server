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
var jsx_runtime_1 = require("react/jsx-runtime");
var layout_1 = __importDefault(require("../layout"));
var styled_components_1 = __importDefault(require("styled-components"));
var Style = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: #8e8f91;\n\tfont-size: 3em;\n\tline-height: 1.55;\n\tmargin: auto;\n\ttext-align: center;\n\t/*max-width: 600px;*/\n\twidth: 100%;\n"], ["\n\tcolor: #8e8f91;\n\tfont-size: 3em;\n\tline-height: 1.55;\n\tmargin: auto;\n\ttext-align: center;\n\t/*max-width: 600px;*/\n\twidth: 100%;\n"])));
function HomePage(props) {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "DefiLlama - Page not found" }, { children: (0, jsx_runtime_1.jsx)(Style, { children: "404 - Page not found" }) })));
}
exports.default = HomePage;
var templateObject_1;
