"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.getStaticProps = void 0;
var chains_1 = require("../../../utils/adaptorsPages/[type]/chains");
var __1 = require("..");
var perf_1 = require("../../../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('dexs/chains/index', (0, chains_1.getStaticPropsByType)(__1.type));
var __2 = require("..");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(__2).default; } });
