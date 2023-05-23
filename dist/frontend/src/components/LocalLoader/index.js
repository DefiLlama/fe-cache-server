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
var jsx_runtime_1 = require("react/jsx-runtime");
var image_1 = __importDefault(require("next/future/image"));
var styled_components_1 = __importStar(require("styled-components"));
var hooks_1 = require("../../hooks");
var logo_white_png_1 = __importDefault(require("~/assets/logo_white.png"));
var nft_logo_white_png_1 = __importDefault(require("~/assets/nft_logo_white.png"));
var rotate = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% { transform: scale(1); }\n  60% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n"], ["\n  0% { transform: scale(1); }\n  60% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n"])));
var Loader = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tpointer-events: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\n\tanimation: ", " 800ms linear infinite;\n\n\t", "\n"], ["\n\tpointer-events: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\n\tanimation: ", " 800ms linear infinite;\n\n\t", "\n"])), rotate, function (props) {
    return props.fill
        ? (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\t\t\theight: 100%;\n\t\t\t  "], ["\n\t\t\t\t\theight: 100%;\n\t\t\t  "]))) : (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\t\t\theight: 180px;\n\t\t\t  "], ["\n\t\t\t\t\theight: 180px;\n\t\t\t  "])));
});
var LocalLoader = function (_a) {
    var fill = _a.fill, props = __rest(_a, ["fill"]);
    var isNFTApp = (0, hooks_1.useNFTApp)();
    return ((0, jsx_runtime_1.jsx)(Loader, __assign({ fill: fill }, props, { children: (0, jsx_runtime_1.jsx)(image_1.default, { src: isNFTApp ? nft_logo_white_png_1.default : logo_white_png_1.default, width: 72, alt: "loading-icon" }) })));
};
exports.default = LocalLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
