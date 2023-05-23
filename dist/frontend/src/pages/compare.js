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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_query_1 = require("react-query");
var ComparePage_1 = __importDefault(require("../components/ComparePage"));
var layout_1 = __importDefault(require("../layout"));
var queryClient = new react_query_1.QueryClient();
function Compare() {
    return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, __assign({ client: queryClient }, { children: (0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "Compare Chains - DefiLlama" }, { children: (0, jsx_runtime_1.jsx)(ComparePage_1.default, {}) })) })));
}
exports.default = Compare;
