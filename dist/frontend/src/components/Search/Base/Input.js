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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileInput = exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var ariakit_1 = require("ariakit");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var InputField = (0, styled_components_1.default)(ariakit_1.Combobox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding: 14px 16px 14px 40px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tborder: none;\n\tborder-radius: 12px;\n\toutline: none;\n\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t::placeholder {\n\t\tcolor: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tborder-radius: 8px;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\t\tfont-size: 0.875rem;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\n\t\t&[data-variant='secondary'] {\n\t\t\tborder: none;\n\t\t}\n\t}\n"], ["\n\tpadding: 14px 16px 14px 40px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tborder: none;\n\tborder-radius: 12px;\n\toutline: none;\n\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t::placeholder {\n\t\tcolor: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\tborder-radius: 8px;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\t\tfont-size: 0.875rem;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\n\t\t&[data-variant='secondary'] {\n\t\t\tborder: none;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text4;
}, function (_a) {
    var theme = _a.theme;
    return theme.text3;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#22242a' : '#eaeaea');
}, function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.divider;
});
var MobileInputField = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 8px;\n\tright: 8px;\n\tz-index: 1;\n\tpadding: 14px 16px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tborder: none;\n\tborder-radius: 4px 4px 0px 0px;\n\toutline: none;\n\n\t::placeholder {\n\t\tcolor: ", ";\n\t\tfont-size: 1rem;\n\t}\n\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 8px;\n\tright: 8px;\n\tz-index: 1;\n\tpadding: 14px 16px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tborder: none;\n\tborder-radius: 4px 4px 0px 0px;\n\toutline: none;\n\n\t::placeholder {\n\t\tcolor: ", ";\n\t\tfont-size: 1rem;\n\t}\n\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.text3;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text4;
}, function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.divider;
});
var IconWrapper = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 22px;\n\tright: 20px;\n\tz-index: 1;\n\twidth: fit-content;\n\tpadding: 0;\n\n\tsvg {\n\t\tcolor: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\ttop: 8px;\n\t\tleft: 8px;\n\n\t\tsvg {\n\t\t\tcolor: #646466;\n\t\t}\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\ttop: 16px;\n\t\tleft: 16px;\n\n\t\t&[data-variant='secondary'] {\n\t\t\ttop: 8px;\n\t\t\tleft: 8px;\n\t\t}\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 22px;\n\tright: 20px;\n\tz-index: 1;\n\twidth: fit-content;\n\tpadding: 0;\n\n\tsvg {\n\t\tcolor: ", ";\n\t}\n\n\t&[data-variant='secondary'] {\n\t\ttop: 8px;\n\t\tleft: 8px;\n\n\t\tsvg {\n\t\t\tcolor: #646466;\n\t\t}\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\ttop: 16px;\n\t\tleft: 16px;\n\n\t\t&[data-variant='secondary'] {\n\t\t\ttop: 8px;\n\t\t\tleft: 8px;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text3;
}, function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
});
var Shortcut = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tposition: absolute;\n\tfont-weight: 600;\n\n\ttop: 10px;\n\tright: 18px;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\n\tpadding: 6px;\n\tborder-radius: 6px;\n\n\t&[data-variant='secondary'] {\n\t\tfont-size: 0.875rem;\n\t\ttop: 4px;\n\t\tright: 4px;\n\t\tpadding: 4px;\n\t\tborder-radius: 6px;\n\t\tfont-weight: 500;\n\t}\n"], ["\n\tposition: absolute;\n\tfont-weight: 600;\n\n\ttop: 10px;\n\tright: 18px;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\n\tpadding: 6px;\n\tborder-radius: 6px;\n\n\t&[data-variant='secondary'] {\n\t\tfont-size: 0.875rem;\n\t\ttop: 4px;\n\t\tright: 4px;\n\t\tpadding: 4px;\n\t\tborder-radius: 6px;\n\t\tfont-weight: 500;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.link;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#151515' : '#f5f5f5');
});
function Input(_a) {
    var state = _a.state, placeholder = _a.placeholder, withValue = _a.withValue, breadCrumbs = _a.breadCrumbs, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, hideIcon = _a.hideIcon, props = __rest(_a, ["state", "placeholder", "withValue", "breadCrumbs", "variant", "hideIcon"]);
    var inputField = React.useRef();
    React.useEffect(function () {
        function focusSearchBar(e) {
            var _a;
            if ((e.ctrlKey || e.metaKey) && e.code === 'KeyK') {
                e.preventDefault();
                inputField.current && ((_a = inputField.current) === null || _a === void 0 ? void 0 : _a.focus());
                state.toggle();
            }
        }
        window.addEventListener('keydown', focusSearchBar);
        return function () { return window.removeEventListener('keydown', focusSearchBar); };
    }, [state]);
    var onClick = React.useCallback(function () {
        if (state.mounted && withValue) {
            state.setValue('');
        }
        state.toggle();
    }, [withValue, state]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!hideIcon && ((0, jsx_runtime_1.jsx)(IconWrapper, __assign({ "data-variant": variant, onClick: onClick }, { children: state.mounted ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Close Search" })), (0, jsx_runtime_1.jsx)(react_feather_1.X, { size: variant === 'secondary' ? '16px' : '18px' })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Open Search" })), (0, jsx_runtime_1.jsx)(react_feather_1.Search, { size: variant === 'secondary' ? '16px' : '18px' })] })) }))), (0, jsx_runtime_1.jsx)(InputField, __assign({ state: state, placeholder: placeholder, style: breadCrumbs ? { borderBottomLeftRadius: '0', borderBottomRightRadius: 0 } : {}, autoSelect: true, ref: inputField, "data-variant": variant }, props)), !hideIcon && (0, jsx_runtime_1.jsx)(Shortcut, __assign({ "data-variant": variant }, { children: "\u2318K" }))] }));
}
exports.Input = Input;
function MobileInput(_a) {
    var value = _a.value, setValue = _a.setValue, hideInput = _a.hideInput, props = __rest(_a, ["value", "setValue", "hideInput"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(MobileInputField, __assign({ placeholder: "Search...", value: value, onChange: function (e) { return setValue(e.target.value); }, autoFocus: true }, props)), (0, jsx_runtime_1.jsxs)(IconWrapper, __assign({ onClick: function () { return hideInput && hideInput(false); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Close Search" })), (0, jsx_runtime_1.jsx)(react_feather_1.X, {})] }))] }));
}
exports.MobileInput = MobileInput;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
