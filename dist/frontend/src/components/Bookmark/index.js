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
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
var LocalStorage_1 = require("../../contexts/LocalStorage");
var hooks_1 = require("../../hooks");
var utils_1 = require("../../utils");
var Wrapper = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding-inline: 0;\n\n\t& > svg {\n\t\tfill: ", ";\n\t\tpath {\n\t\t\tstroke: ", ";\n\t\t}\n\t}\n"], ["\n\tpadding-inline: 0;\n\n\t& > svg {\n\t\tfill: ", ";\n\t\tpath {\n\t\t\tstroke: ", ";\n\t\t}\n\t}\n"
    // readableProtocolName has proper caps and spaces
])), function (_a) {
    var text1 = _a.theme.text1, saved = _a.saved;
    return (saved ? text1 : 'none');
}, function (_a) {
    var text1 = _a.theme.text1;
    return text1;
});
// readableProtocolName has proper caps and spaces
function Bookmark(_a) {
    var readableProtocolName = _a.readableProtocolName, props = __rest(_a, ["readableProtocolName"]);
    var bookmarkRef = (0, react_1.useRef)(null);
    var _b = (0, LocalStorage_1.useWatchlist)(), savedProtocols = _b.savedProtocols, addProtocol = _b.addProtocol, removeProtocol = _b.removeProtocol;
    // isClient for local storage
    var isClient = (0, hooks_1.useIsClient)();
    var portfolio = Object.keys(savedProtocols) || [];
    var protocolName = (0, utils_1.standardizeProtocolName)(readableProtocolName);
    var isSaved = (portfolio === null || portfolio === void 0 ? void 0 : portfolio.includes(protocolName)) && isClient;
    var onClick = isSaved ? function () { return removeProtocol(readableProtocolName); } : function () { return addProtocol(readableProtocolName); };
    return ((0, jsx_runtime_1.jsx)(Wrapper, __assign({ ref: bookmarkRef, onClick: onClick, saved: isSaved }, props, { children: (0, jsx_runtime_1.jsx)(react_feather_1.Bookmark, { width: 16, height: 16 }) })));
}
exports.default = Bookmark;
var templateObject_1;
