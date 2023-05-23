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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = exports.BridgesSearchSelect = exports.BridgesSearchWithBreakdown = exports.BridgesSearch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var Desktop_1 = require("../../../components/Filters/protocols/Desktop");
var OptionToggle_1 = __importDefault(require("../../../components/OptionToggle"));
var Base_1 = require("../Base");
var hooks_1 = require("./hooks");
function BridgesSearch(props) {
    var _a = (0, hooks_1.useGetBridgesSearchList)(), data = _a.data, loading = _a.loading;
    return (0, jsx_runtime_1.jsx)(Base_1.DesktopSearch, __assign({}, props, { data: data, loading: loading }));
}
exports.BridgesSearch = BridgesSearch;
function BridgesSearchWithBreakdown(props) {
    var _a = __read((0, react_1.useState)(false), 2), isToggleEnabled = _a[0], setIsToggleEnabled = _a[1];
    var _b = (0, hooks_1.useGetBridgesSearchList)(), data = _b.data, loading = _b.loading;
    return ((0, jsx_runtime_1.jsx)(Base_1.DesktopSearch, __assign({}, props, { data: data, loading: loading, filters: props.onToggleClick && ((0, jsx_runtime_1.jsxs)(Desktop_1.ListWrapper, { children: [(0, jsx_runtime_1.jsx)(exports.ListItem, { children: (0, jsx_runtime_1.jsx)(OptionToggle_1.default, { name: "Bridge breakdown", toggle: function () {
                            setIsToggleEnabled(function (prev) {
                                props.onToggleClick(!prev);
                                return !prev;
                            });
                        }, help: "Break down 'All' volume chart by bridge", enabled: isToggleEnabled }) }), (0, jsx_runtime_1.jsx)(exports.ListItem, {})] })) })));
}
exports.BridgesSearchWithBreakdown = BridgesSearchWithBreakdown;
function BridgesSearchSelect(props) {
    var _a = (0, hooks_1.useGetBridgesSearchList)(), data = _a.data, loading = _a.loading;
    var itemClick = function (item) {
        props.formValueToEdit[props.formProperty] = item.name;
        props.click(item.name);
    };
    return (0, jsx_runtime_1.jsx)(Base_1.DesktopSearch, __assign({}, props, { data: data, loading: loading, "data-alwaysdisplay": true, placeholder: props.placeholder, onItemClick: itemClick }));
}
exports.BridgesSearchSelect = BridgesSearchSelect;
exports.ListItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t&:not(:first-child) {\n\t\tmargin-left: 20px;\n\t}\n"], ["\n\t&:not(:first-child) {\n\t\tmargin-left: 20px;\n\t}\n"])));
var templateObject_1;
