"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPIUrlSummary = exports.useFetchChartsSummary = exports.getAPIUrl = exports.useFetchCharts = exports.useFetchAdaptorsList = void 0;
var swr_1 = __importDefault(require("swr"));
var constants_1 = require("../../../constants");
var useSWR_1 = require("../../../utils/useSWR");
var _1 = require(".");
var useFetchAdaptorsList = function (type) {
    var _a = (0, swr_1.default)("".concat(constants_1.ADAPTORS_BASE_API, "/").concat(type, "?excludeTotalDataChartBreakdown=true&excludeTotalDataChart=true"), useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useFetchAdaptorsList = useFetchAdaptorsList;
var useFetchCharts = function (type, chain, dataType, disable) {
    var _a = (0, swr_1.default)(!disable ? (0, exports.getAPIUrl)(type, chain, true, false, dataType) : null, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useFetchCharts = useFetchCharts;
var getAPIUrl = function (type, chain, excludeTotalDataChart, excludeTotalDataChartBreakdown, dataType, fullChart) {
    var API = "".concat(constants_1.ADAPTORS_BASE_API, "/").concat(type).concat(chain ? "/".concat(chain, "?") : '?');
    API = "".concat(API, "excludeTotalDataChart=").concat(excludeTotalDataChart, "&excludeTotalDataChartBreakdown=").concat(excludeTotalDataChartBreakdown);
    if (dataType)
        API = "".concat(API, "&dataType=").concat(dataType);
    if (fullChart)
        API = "".concat(API, "&fullChart=").concat(true);
    return API;
};
exports.getAPIUrl = getAPIUrl;
var useFetchChartsSummary = function (type, protocolName, dataType, disable) {
    var fetch = function (input, init) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, useSWR_1.fetcherWErrorHandling)(input, init).then(function (item) {
                    return (0, _1.generateGetOverviewItemPageDate)(item, type, protocolName);
                })];
        });
    }); };
    var _a = (0, swr_1.default)(!disable ? (0, exports.getAPIUrlSummary)(type, protocolName, dataType) : null, fetch, {
        onErrorRetry: function (error, _key, _config, revalidate, _a) {
            var retryCount = _a.retryCount;
            if ([502, 404].includes(error.status))
                return;
            setTimeout(function () { return revalidate({ retryCount: retryCount }); }, retryCount * 5000);
        }
    }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: disable ? false : !data && !error };
};
exports.useFetchChartsSummary = useFetchChartsSummary;
var getAPIUrlSummary = function (type, protocolName, dataType, fullChart) {
    var API = "".concat(constants_1.ADAPTORS_SUMMARY_BASE_API, "/").concat(type, "/").concat(protocolName, "?");
    if (dataType)
        API = "".concat(API, "dataType=").concat(dataType, "&");
    if (fullChart)
        API = "".concat(API, "fullChart=").concat(true);
    return API;
};
exports.getAPIUrlSummary = getAPIUrlSummary;
/* export const useFetchProtocolDex = (protocolName) => {
    const { data, error } = useSWR<IDexResponse>(protocolName ? `${DEX_BASE_API}/${protocolName}` : null, fetcher)
    const loading = !data?.volumeHistory?.length
    return { data, error, loading }
} */
