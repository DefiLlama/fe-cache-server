"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchPeggedList = void 0;
var swr_1 = __importDefault(require("swr"));
var constants_1 = require("../../../constants");
var useSWR_1 = require("../../../utils/useSWR");
var useFetchPeggedList = function () {
    var _a = (0, swr_1.default)(constants_1.PEGGEDS_API, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useFetchPeggedList = useFetchPeggedList;
