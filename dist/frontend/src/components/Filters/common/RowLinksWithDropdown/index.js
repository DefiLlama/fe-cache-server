"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowLinksWithDropdown = exports.RowLinksWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var hooks_1 = require("../../../../hooks");
var LinksWithDropdown_1 = require("./LinksWithDropdown");
Object.defineProperty(exports, "RowLinksWrapper", { enumerable: true, get: function () { return LinksWithDropdown_1.RowLinksWrapper; } });
var OtherLinks_1 = require("./OtherLinks");
var RowLinksWithDropdown = function (props) {
    var _a;
    var isSmall = (0, hooks_1.useMedia)("(max-width: 37.5rem)");
    if (isSmall) {
        return ((0, jsx_runtime_1.jsx)(OtherLinks_1.OtherLinks, { name: props.links.find(function (link) { return link.label === props.activeLink; })
                ? props.activeLink
                : (_a = props.alternativeOthersText) !== null && _a !== void 0 ? _a : 'Others', options: props.links }));
    }
    return (0, jsx_runtime_1.jsx)(LinksWithDropdown_1.LinksWithDropdown, __assign({}, props));
};
exports.RowLinksWithDropdown = RowLinksWithDropdown;
