"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchProtocolUserMetrics = void 0;
var swr_1 = __importDefault(require("swr"));
var constants_1 = require("../../../constants");
var useSWR_1 = require("../../../utils/useSWR");
var useFetchProtocolUserMetrics = function (protocolName) {
    var _a = (0, swr_1.default)(protocolName ? "".concat(constants_1.USER_METRICS_PROTOCOL_API, "/").concat(protocolName) : null, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: protocolName && !data && !error };
};
exports.useFetchProtocolUserMetrics = useFetchProtocolUserMetrics;
