"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.getStaticProps = exports.type = void 0;
var types_1 = require("../../utils/adaptorsPages/types");
var _type_1 = require("../../utils/adaptorsPages/[type]");
exports.type = types_1.ADAPTOR_TYPES.AGGREGATORS;
var perf_1 = require("../../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('aggregators/index', (0, _type_1.getStaticPropsByType)(exports.type));
var _type_2 = require("../../utils/adaptorsPages/[type]");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(_type_2).default; } });
