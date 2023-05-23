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
function Protocols() {
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Reports - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Header, __assign({ style: { textAlign: 'center' } }, { children: "Reports" })), (0, jsx_runtime_1.jsx)(List, { children: (0, jsx_runtime_1.jsxs)("li", { children: ["29 December 2022:", ' ', (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://drive.google.com/file/d/1zfJgQEOA4QVKMUyVifBhybhxgkbFRWpG/view", target: "_blank", rel: "noopener noreferrer" }, { children: "2022 EOY Report" }))] }) })] })));
}
exports.default = Protocols;
var Header = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-weight: 600;\n\tfont-size: revert !important;\n\ttext-align: center;\n\n\ta {\n\t\tposition: relative;\n\t\ttop: 4px;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-weight: 600;\n\tfont-size: revert !important;\n\ttext-align: center;\n\n\ta {\n\t\tposition: relative;\n\t\ttop: 4px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var List = styled_components_1.default.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tlist-style: none;\n  margin: 24px auto;\n  padding: 0;\n\n\tli {\n\t\tfont-size: 1rem;\n\t\tfont-weight: 500;\n    text-center;\n\t}\n\n  a {\n    text-decoration: underline;\n  }\n"], ["\n\tlist-style: none;\n  margin: 24px auto;\n  padding: 0;\n\n\tli {\n\t\tfont-size: 1rem;\n\t\tfont-weight: 500;\n    text-center;\n\t}\n\n  a {\n    text-decoration: underline;\n  }\n"])));
var templateObject_1, templateObject_2;
