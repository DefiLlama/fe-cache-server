"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useYields = exports.useFetchProjectsList = exports.useYieldPageData = exports.useYieldConfigData = exports.useConfigPool = exports.useYieldChartLendBorrow = exports.useYieldChartData = exports.useYieldPoolData = void 0;
var swr_1 = __importDefault(require("swr"));
var useSWR_1 = require("../../../utils/useSWR");
var constants_1 = require("../../../constants");
var utils_1 = require("./utils");
// single pool
var useYieldPoolData = function (configID) {
    var url = "".concat(constants_1.YIELD_POOLS_LAMBDA_API, "?pool=").concat(configID);
    var _a = (0, swr_1.default)(configID ? url : null, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useYieldPoolData = useYieldPoolData;
// single pool chart data
var useYieldChartData = function (configID) {
    var url = "".concat(constants_1.YIELD_CHART_API, "/").concat(configID);
    var _a = (0, swr_1.default)(configID ? url : null, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useYieldChartData = useYieldChartData;
var useYieldChartLendBorrow = function (configID) {
    var url = "".concat(constants_1.YIELD_CHART_LEND_BORROW_API, "/").concat(configID);
    var _a = (0, swr_1.default)(configID ? url : null, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useYieldChartLendBorrow = useYieldChartLendBorrow;
var useConfigPool = function (configIDs) {
    var url = "".concat(constants_1.YIELD_CONFIG_POOL_API, "/").concat(configIDs);
    var _a = (0, swr_1.default)(configIDs ? url : null, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useConfigPool = useConfigPool;
// single pool config data
var useYieldConfigData = function (project) {
    var url = "".concat(constants_1.CONFIG_API, "/smol/").concat(project);
    var _a = (0, swr_1.default)(project ? url : null, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useYieldConfigData = useYieldConfigData;
var useYieldPageData = function () {
    var _a = (0, swr_1.default)('/pools-and-config', function () { return (0, useSWR_1.arrayFetcher)([constants_1.YIELD_POOLS_API, constants_1.YIELD_CONFIG_API]); }), data = _a.data, error = _a.error;
    return {
        data: data,
        error: error,
        loading: !data && !error
    };
};
exports.useYieldPageData = useYieldPageData;
var useFetchProjectsList = function () {
    var _a = (0, swr_1.default)('/pools-and-config', function () { return (0, useSWR_1.arrayFetcher)([constants_1.YIELD_POOLS_API, constants_1.YIELD_CONFIG_API]); }), data = _a.data, error = _a.error;
    var projectList = (data ? (0, utils_1.formatYieldsPageData)(data) : { projectList: [] }).projectList;
    return {
        data: projectList,
        error: error,
        loading: !data && !error
    };
};
exports.useFetchProjectsList = useFetchProjectsList;
var useYields = function () {
    var _a = (0, swr_1.default)(constants_1.YIELD_POOLS_API, useSWR_1.fetcher).data, data = _a === void 0 ? {} : _a;
    var res = data === null || data === void 0 ? void 0 : data.data;
    return { data: res };
};
exports.useYields = useYields;
