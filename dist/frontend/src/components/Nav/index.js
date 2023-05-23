"use strict";
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
var jsx_runtime_1 = require("react/jsx-runtime");
var dynamic_1 = __importDefault(require("next/dynamic"));
var shared_1 = require("./shared");
// TODO update types/react package and remvoe 'any' type
var Desktop = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('./Desktop')); }); }, {
    loading: function () { return (0, jsx_runtime_1.jsx)(shared_1.Header, {}); }
});
var Mobile = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('./Mobile')); }); }, {
    loading: function () { return (0, jsx_runtime_1.jsx)(shared_1.Header, {}); }
});
function Nav() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Mobile, {}), (0, jsx_runtime_1.jsx)(Desktop, {})] }));
}
exports.default = Nav;
