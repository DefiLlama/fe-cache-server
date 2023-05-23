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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxAgeForNext = exports.getAllCGTokensList = exports.retryCoingeckoRequest = exports.useFetchCoingeckoTokensList = void 0;
var swr_1 = __importDefault(require("swr"));
var index_1 = require("../constants/index");
var useSWR_1 = require("../utils/useSWR");
function getCGMarketsDataURLs() {
    var urls = [];
    var maxPage = 20;
    for (var page = 1; page <= maxPage; page++) {
        urls.push("".concat(index_1.CG_TOKEN_API.replace('<PLACEHOLDER>', "".concat(page))));
    }
    return urls;
}
var useFetchCoingeckoTokensList = function () {
    var _a = (0, swr_1.default)('coingeckotokenslist', function () { return (0, useSWR_1.arrayFetcher)(getCGMarketsDataURLs()); }, {
        onErrorRetry: useSWR_1.retrySWR
    }), data = _a.data, error = _a.error;
    return {
        data: data === null || data === void 0 ? void 0 : data.flat(),
        error: error,
        loading: !data && !error
    };
};
exports.useFetchCoingeckoTokensList = useFetchCoingeckoTokensList;
function retryCoingeckoRequest(func, retries) {
    return __awaiter(this, void 0, void 0, function () {
        var i, resp, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < retries)) return [3 /*break*/, 8];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 7]);
                    return [4 /*yield*/, func()];
                case 3:
                    resp = _a.sent();
                    return [2 /*return*/, resp];
                case 4:
                    e_1 = _a.sent();
                    if (!((i + 1) % 3 === 0 && retries > 3)) return [3 /*break*/, 6];
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10e3); })];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [3 /*break*/, 7];
                case 7:
                    i++;
                    return [3 /*break*/, 1];
                case 8: return [2 /*return*/, {}];
            }
        });
    });
}
exports.retryCoingeckoRequest = retryCoingeckoRequest;
function getAllCGTokensList() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, useSWR_1.fetcher)('https://defillama-datasets.llama.fi/tokenlist/sorted.json')];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.getAllCGTokensList = getAllCGTokensList;
//:00 -> adapters start running, they take up to 15mins
//:20 -> storeProtocols starts running, sets cache expiry to :21 of next hour
//:22 -> we rebuild all pages
function maxAgeForNext(minutesForRollover) {
    var _a;
    if (minutesForRollover === void 0) { minutesForRollover = [22]; }
    // minutesForRollover is an array of minutes in the hour that we want to revalidate
    var currentMinute = new Date().getMinutes();
    var currentSecond = new Date().getSeconds();
    var nextMinute = (_a = minutesForRollover.find(function (m) { return m > currentMinute; })) !== null && _a !== void 0 ? _a : Math.min.apply(Math, __spreadArray([], __read(minutesForRollover), false)) + 60;
    var maxAge = nextMinute * 60 - currentMinute * 60 - currentSecond;
    return maxAge;
}
exports.maxAgeForNext = maxAgeForNext;
