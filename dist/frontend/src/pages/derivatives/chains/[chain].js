"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.default = exports.getStaticPaths = void 0;
var _chain_1 = require("../../../utils/adaptorsPages/[type]/chains/[chain]");
var __1 = require("..");
exports.getStaticPaths = (0, _chain_1.getStaticPathsByType)(__1.type);
var __2 = require("..");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(__2).default; } });
Object.defineProperty(exports, "getStaticProps", { enumerable: true, get: function () { return __2.getStaticProps; } });
