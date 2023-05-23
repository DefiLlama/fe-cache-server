"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.getStaticPaths = exports.getStaticProps = void 0;
var _1 = require(".");
var _item_1 = require("../../utils/adaptorsPages/[type]/[item]");
var perf_1 = require("../../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('aggregators/[item]', (0, _item_1.getStaticPropsByType)(_1.type));
exports.getStaticPaths = (0, _item_1.getStaticPathsByType)(_1.type);
var _item_2 = require("../../utils/adaptorsPages/[type]/[item]");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(_item_2).default; } });
