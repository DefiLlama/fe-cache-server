"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMinTwoXl = exports.useMinLg = exports.useXl = exports.useLg = exports.useMed = exports.useSmall = void 0;
var breakpoints_1 = require("../constants/breakpoints");
var useMedia_1 = __importDefault(require("./useMedia"));
var useSmall = function () { return (0, useMedia_1.default)("(max-width: ".concat(breakpoints_1.sm, "rem)")); };
exports.useSmall = useSmall;
var useMed = function () { return (0, useMedia_1.default)("(max-width: ".concat(breakpoints_1.med, "rem)")); };
exports.useMed = useMed;
var useLg = function () { return (0, useMedia_1.default)("(max-width: ".concat(breakpoints_1.lg, "rem)")); };
exports.useLg = useLg;
var useXl = function () { return (0, useMedia_1.default)("(max-width: ".concat(breakpoints_1.xl, "rem)")); };
exports.useXl = useXl;
var useMinLg = function () { return (0, useMedia_1.default)("(min-width: ".concat(breakpoints_1.lg, "rem)")); };
exports.useMinLg = useMinLg;
var useMinTwoXl = function () { return (0, useMedia_1.default)("(min-width: ".concat(breakpoints_1.twoXl, "rem)")); };
exports.useMinTwoXl = useMinTwoXl;
