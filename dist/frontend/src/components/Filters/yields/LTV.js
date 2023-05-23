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
exports.LTV = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
function LTV(_a) {
    var placeholder = _a.placeholder;
    var router = (0, router_1.useRouter)();
    var setLTV = function (value) {
        router.push({
            pathname: router.pathname,
            query: __assign(__assign({}, router.query), { customLTV: value })
        }, undefined, {
            shallow: true
        });
    };
    var onChange = function (e) {
        var timer;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () { return setLTV(e.target.value); }, 1000);
    };
    return ((0, jsx_runtime_1.jsxs)(Wrapper, __assign({ "data-alwaysdisplay": true }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Search, { size: 16 }), (0, jsx_runtime_1.jsx)("input", { placeholder: placeholder, onChange: onChange, type: "number" })] })));
}
exports.LTV = LTV;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex: nowrap;\n\tbackground: ", ";\n\tborder-radius: 8px;\n\n\tsvg {\n\t\tposition: absolute;\n\t\ttop: 8px;\n\t\tleft: 8px;\n\t\tcolor: #646466;\n\t}\n\n\tinput {\n\t\tborder-radius: 8px;\n\t\tborder: none;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\t\tfont-size: 0.875rem;\n\t\twidth: 100%;\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tflex: nowrap;\n\tbackground: ", ";\n\tborder-radius: 8px;\n\n\tsvg {\n\t\tposition: absolute;\n\t\ttop: 8px;\n\t\tleft: 8px;\n\t\tcolor: #646466;\n\t}\n\n\tinput {\n\t\tborder-radius: 8px;\n\t\tborder: none;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\t\tfont-size: 0.875rem;\n\t\twidth: 100%;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
});
var templateObject_1;
