"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchProtocolDex = exports.useFetchCharts = exports.useFetchDexsList = void 0;
var swr_1 = __importDefault(require("swr"));
var constants_1 = require("../../../constants");
var useSWR_1 = require("../../../utils/useSWR");
var useFetchDexsList = function () {
    var _a = (0, swr_1.default)("".concat(constants_1.DEXS_API, "?excludeTotalDataChartBreakdown=true&excludeTotalDataChart=true"), useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useFetchDexsList = useFetchDexsList;
var useFetchCharts = function () {
    var _a = (0, swr_1.default)("".concat(constants_1.DEXS_API, "?excludeTotalDataChart=true"), useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useFetchCharts = useFetchCharts;
var useFetchProtocolDex = function (protocolName) {
    var _a;
    var _b = (0, swr_1.default)(protocolName ? "".concat(constants_1.DEX_BASE_API, "/").concat(protocolName) : null, useSWR_1.fetcher), data = _b.data, error = _b.error;
    var loading = !((_a = data === null || data === void 0 ? void 0 : data.volumeHistory) === null || _a === void 0 ? void 0 : _a.length);
    return { data: data, error: error, loading: loading };
};
exports.useFetchProtocolDex = useFetchProtocolDex;
