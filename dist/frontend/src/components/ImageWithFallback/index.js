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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageWithFallback = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var image_1 = __importDefault(require("next/future/image"));
var react_1 = require("react");
// empty pixel
var fallbackImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
var ImageWithFallback = function (_a) {
    var _b = _a.fallback, fallback = _b === void 0 ? fallbackImage : _b, alt = _a.alt, src = _a.src, props = __rest(_a, ["fallback", "alt", "src"]);
    var _c = __read((0, react_1.useState)(null), 2), error = _c[0], setError = _c[1];
    (0, react_1.useEffect)(function () {
        setError(null);
    }, [src]);
    return (0, jsx_runtime_1.jsx)(image_1.default, __assign({ alt: alt, onError: setError, src: error ? fallbackImage : src, unoptimized: true }, props));
};
exports.ImageWithFallback = ImageWithFallback;
