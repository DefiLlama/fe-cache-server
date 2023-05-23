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
exports.useFetchProtocolFees = exports.mapProtocolName = void 0;
var swr_1 = __importDefault(require("swr"));
var constants_1 = require("../../../constants");
var utils_1 = require("../../../utils");
var useSWR_1 = require("../../../utils/useSWR");
var mapProtocolName = function (protocolName) {
    if (protocolName === 'trader-joe') {
        return 'traderjoe';
    }
    else if (protocolName === 'aave') {
        return 'AAVE';
    }
    else if (protocolName === 'convex-finance') {
        return 'convex';
    }
    return protocolName;
};
exports.mapProtocolName = mapProtocolName;
var useFetchProtocolFees = function (protocolName) {
    var _a;
    var _b = (0, swr_1.default)("".concat(constants_1.FEES_BASE_API, "/").concat((0, exports.mapProtocolName)(protocolName)), useSWR_1.fetcher), data = _b.data, error = _b.error;
    var chartData = {};
    if (data && data.feesHistory && data.revenueHistory) {
        data.feesHistory.forEach(function (item) {
            if (!chartData[item.timestamp]) {
                chartData[item.timestamp] = {};
            }
            chartData[item.timestamp] = __assign(__assign({}, chartData[item.timestamp]), { Fees: Object.values(item.dailyFees).reduce(function (sum, curr) {
                    return Object.values(curr).reduce(function (item1, item2) { return item1 + item2; }, 0) + sum;
                }, 0) });
        });
        data.revenueHistory.forEach(function (item) {
            if (!chartData[item.timestamp]) {
                chartData[item.timestamp] = {};
            }
            chartData[item.timestamp] = __assign(__assign({}, chartData[item.timestamp]), { Revenue: Object.values(item.dailyRevenue).reduce(function (sum, curr) {
                    return Object.values(curr).reduce(function (item1, item2) { return item1 + item2; }, 0) + sum;
                }, 0) });
        });
    }
    var res = {
        data: __assign(__assign({}, (data || {})), { name: (0, utils_1.capitalizeFirstLetter)((0, exports.mapProtocolName)(protocolName)) }),
        chartData: Object.keys(chartData).map(function (date) { return (__assign({ date: date }, chartData[date])); })
    };
    var loading = !((_a = res === null || res === void 0 ? void 0 : res.chartData) === null || _a === void 0 ? void 0 : _a.length);
    return { data: res, loading: loading, error: error };
};
exports.useFetchProtocolFees = useFetchProtocolFees;
