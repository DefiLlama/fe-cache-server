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
exports.TableSwitch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var TableSwitch = function () {
    var _a = __read((0, LocalStorage_1.useLiqsManager)(), 2), liqsSettings = _a[0], toggleLiqsSettings = _a[1];
    var LIQS_SHOWING_INSPECTOR = LocalStorage_1.LIQS_SETTINGS.LIQS_SHOWING_INSPECTOR;
    var isLiqsShowingInspector = liqsSettings[LIQS_SHOWING_INSPECTOR];
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsxs)(Switch, __assign({ active: !isLiqsShowingInspector, onClick: toggleLiqsSettings(LIQS_SHOWING_INSPECTOR) }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Percent, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: "Distribution" })] })), (0, jsx_runtime_1.jsxs)(Switch, __assign({ active: isLiqsShowingInspector, onClick: toggleLiqsSettings(LIQS_SHOWING_INSPECTOR) }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Search, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: "Positions" })] }))] }));
};
exports.TableSwitch = TableSwitch;
var Wrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 8px;\n\tborder-radius: 6px;\n\tbackground-color: ", ";\n\tpadding: 6px;\n\theight: 40px;\n\twidth: 250px;\n\tmargin: 0 auto;\n\tbox-shadow: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 8px;\n\tborder-radius: 6px;\n\tbackground-color: ", ";\n\tpadding: 6px;\n\theight: 40px;\n\twidth: 250px;\n\tmargin: 0 auto;\n\tbox-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
var Switch = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 4px;\n\tcolor: ", ";\n\tfont-size: 14px;\n\twhite-space: nowrap;\n\tflex-wrap: nowrap;\n\tpadding: 6px;\n\tborder-radius: 6px;\n\tbackground: ", ";\n\tflex: 1;\n"], ["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 4px;\n\tcolor: ", ";\n\tfont-size: 14px;\n\twhite-space: nowrap;\n\tflex-wrap: nowrap;\n\tpadding: 6px;\n\tborder-radius: 6px;\n\tbackground: ", ";\n\tflex: 1;\n"])), function (_a) {
    var active = _a.active, theme = _a.theme;
    return (active ? '#fff' : theme.text1);
}, function (_a) {
    var active = _a.active, theme = _a.theme;
    return (active ? '#445ed0' : theme.bg6);
});
var templateObject_1, templateObject_2;
