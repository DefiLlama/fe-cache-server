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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importStar(require("styled-components"));
var Tooltip_1 = __importDefault(require("../../../components/Tooltip"));
var v2Base_1 = require("../v2Base");
/**
 * Notify Button Powered by HAL.
 * Any Questions, Comments, Maintenance feel free to reach out
 * to the Hal Team: tech@hal.xyz.
 */
function NotifyButton() {
    var _a;
    var router = (0, router_1.useRouter)();
    // Ensured that link uses up-to-date query params from client-side
    // Related: https://nextjs.org/docs/advanced-features/automatic-static-optimization#caveats
    var queryParams = !router.isReady ? '' : (_a = router.asPath.split('?')[1]) !== null && _a !== void 0 ? _a : '';
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ content: "Be notified on your yields using the Hal app." }, { children: router.isReady ? ((0, jsx_runtime_1.jsxs)(NotifyIconButton, __assign({ "data-variant": "secondary", as: "a", href: "https://app.hal.xyz/recipes/defi-llama/track-pools-list?".concat(queryParams), rel: "noopener noreferrer", target: "_blank" }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Bell, { size: 16 }), "Notify"] }))) : ((0, jsx_runtime_1.jsxs)(NotifyIconButton, __assign({ "data-variant": "secondary", disabled: true }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Bell, { size: 16 }), "Notify"] }))) })));
}
exports.NotifyButton = NotifyButton;
var wiggle = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: rotate(10deg);\n\t}\n\n\t50% {\n\t\ttransform: rotate(-10deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(0);\n\t}\n"], ["\n\t0% {\n\t\ttransform: rotate(10deg);\n\t}\n\n\t50% {\n\t\ttransform: rotate(-10deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(0);\n\t}\n"])));
var NotifyIconButton = (0, styled_components_1.default)(v2Base_1.ResetAllButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 4px;\n\t:hover > svg {\n\t\tanimation ", " 0.4s ease;\n\t}\n"], ["\n\tdisplay: flex;\n\tgap: 4px;\n\t:hover > svg {\n\t\tanimation ", " 0.4s ease;\n\t}\n"])), wiggle);
var templateObject_1, templateObject_2;
