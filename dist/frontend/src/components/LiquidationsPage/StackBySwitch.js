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
exports.StackBySwitch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var StackBySwitch = function () {
    var router = (0, router_1.useRouter)();
    var stackBy = router.query.stackBy;
    var _stackBy = !!stackBy ? stackBy : 'protocols';
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsxs)(Switch, __assign({ active: _stackBy === 'protocols', onClick: function () {
                    router.push({
                        query: __assign(__assign({}, router.query), { stackBy: 'protocols' })
                    });
                } }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Map, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: "Protocols" })] })), (0, jsx_runtime_1.jsxs)(Switch, __assign({ active: _stackBy === 'chains', onClick: function () {
                    router.push({
                        query: __assign(__assign({}, router.query), { stackBy: 'chains' })
                    });
                } }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Link, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: "Chains" })] }))] }));
};
exports.StackBySwitch = StackBySwitch;
var Wrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 8px;\n\tborder-radius: 6px;\n\tbackground: ", ";\n\tbox-shadow: ", ";\n\tpadding: 6px;\n\theight: 40px;\n\twidth: 220px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 8px;\n\tborder-radius: 6px;\n\tbackground: ", ";\n\tbox-shadow: ", ";\n\tpadding: 6px;\n\theight: 40px;\n\twidth: 220px;\n"])), function (_a) {
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
