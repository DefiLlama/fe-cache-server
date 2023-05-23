"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var Desktop_1 = require("../Base/Results/Desktop");
var Input_1 = require("../Base/Input");
var ariakit_1 = require("ariakit");
var utils_1 = require("../Base/utils");
var react_1 = require("react");
var utils_2 = require("../../../utils");
function InvestorsSearch(_a) {
    var list = _a.list;
    var data = (0, react_1.useMemo)(function () { return list.map(function (name) { return ({ name: name, route: "/raises/".concat((0, utils_2.slug)(name.toLowerCase())) }); }); }, [list]);
    var combobox = (0, ariakit_1.useComboboxState)({
        gutter: 6,
        sameWidth: true,
        list: data.map(function (x) { return x.name; })
    });
    // select first item on open
    var item = (0, utils_1.findActiveItem)(combobox);
    var firstId = combobox.first();
    if (combobox.open && !item && firstId) {
        combobox.setActiveId(firstId);
    }
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { state: combobox, placeholder: "Search investors...", withValue: true, variant: "secondary" }), (0, jsx_runtime_1.jsx)(Desktop_1.DesktopResults, { state: combobox, data: data, loading: false })] }));
}
exports.default = InvestorsSearch;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\n\tinput {\n\t\twidth: 100%;\n\t}\n"], ["\n\tposition: relative;\n\n\tinput {\n\t\twidth: 100%;\n\t}\n"])));
var templateObject_1;
