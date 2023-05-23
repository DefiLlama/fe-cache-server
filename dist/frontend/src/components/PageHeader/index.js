"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Theme_1 = require("../../Theme");
function PageHeader(_a) {
    var title = _a.title;
    return (0, jsx_runtime_1.jsx)(Theme_1.TYPE.largeHeader, { children: title });
}
exports.default = PageHeader;
