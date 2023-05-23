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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFetchResponse = exports.getCexVolume = exports.chartBreakdownByTokens = exports.chartBreakdownByChain = exports.chartBreakdownByVersion = exports.formatTimestampAsDate = exports.formatChain = void 0;
var constants_1 = require("../../../constants");
var formatChain = function (chain) {
    if (!chain)
        return chain;
    var ch = chain.toLowerCase();
    var c = ch === 'avax' ? "avalanche" : ch;
    if (c === 'bsc')
        return c.toUpperCase();
    if (c === 'xdai')
        return "xDai";
    if (c === 'terra' || c === 'terra classic')
        return "Terra Classic";
    else
        return c[0].toUpperCase() + c.slice(1);
};
exports.formatChain = formatChain;
function pad(s) {
    return s < 10 ? "0" + s : s;
}
function formatTimestampAsDate(timestamp) {
    var date = new Date(timestamp * 1000);
    return "".concat(pad(date.getDate()), "/").concat(pad(date.getMonth() + 1), "/").concat(date.getFullYear());
}
exports.formatTimestampAsDate = formatTimestampAsDate;
function chartBreakdownByVersion(chart) {
    var legend = [];
    var rawProcessed = chart.reduce(function (acc, _a) {
        var _b = __read(_a, 2), timestamp = _b[0], data = _b[1];
        Object.entries(data).forEach(function (_a) {
            var _b = __read(_a, 2), _chain = _b[0], chainData = _b[1];
            Object.entries(chainData).forEach(function (_a) {
                var _b, _c;
                var _d = __read(_a, 2), protocolName = _d[0], value = _d[1];
                if (!legend.includes(protocolName.toUpperCase()))
                    legend.push(protocolName.toUpperCase());
                if (!acc["".concat(timestamp)])
                    acc["".concat(timestamp)] = (_b = {},
                        _b[protocolName.toUpperCase()] = getOkValue(value),
                        _b.date = String(timestamp),
                        _b);
                else {
                    var dayAcc = acc["".concat(timestamp)][protocolName.toUpperCase()];
                    acc["".concat(timestamp)] = __assign(__assign({}, acc["".concat(timestamp)]), (_c = {}, _c[protocolName.toUpperCase()] = getOkValue(value) + (typeof dayAcc === 'number' ? dayAcc : 0), _c.date = String(timestamp), _c));
                }
            });
        });
        return acc;
    }, {});
    return [Object.values(rawProcessed), legend];
}
exports.chartBreakdownByVersion = chartBreakdownByVersion;
var getOkValue = function (value) {
    if (typeof value === 'object') {
        return Object.values(value).reduce(function (acc, current) { return acc += current; }, 0);
    }
    else
        return value;
};
function chartBreakdownByChain(chart) {
    if (!chart)
        return [[], []];
    var legend = [];
    var rawProcessed = chart.reduce(function (acc, _a) {
        var _b = __read(_a, 2), timestamp = _b[0], data = _b[1];
        Object.entries(data).forEach(function (_a) {
            var _b = __read(_a, 2), chain = _b[0], chainData = _b[1];
            Object.entries(chainData).forEach(function (_a) {
                var _b, _c;
                var _d = __read(_a, 2), _protocolName = _d[0], value = _d[1];
                if (!legend.includes((0, exports.formatChain)(chain)))
                    legend.push((0, exports.formatChain)(chain));
                if (!acc["".concat(timestamp).concat(chain)])
                    acc["".concat(timestamp).concat(chain)] = (_b = {},
                        _b[(0, exports.formatChain)(chain)] = getOkValue(value),
                        _b.date = String(timestamp),
                        _b);
                else {
                    acc["".concat(timestamp).concat(chain)] = (_c = {},
                        _c[(0, exports.formatChain)(chain)] = +acc["".concat(timestamp).concat(chain)][(0, exports.formatChain)(chain)] + getOkValue(value),
                        _c.date = String(timestamp),
                        _c);
                }
            });
        });
        return acc;
    }, {});
    return [Object.values(rawProcessed), legend];
}
exports.chartBreakdownByChain = chartBreakdownByChain;
function chartBreakdownByTokens(chart) {
    var legend = [];
    var rawProcessed = chart.reduce(function (acc, _a) {
        var _b = __read(_a, 2), timestamp = _b[0], data = _b[1];
        Object.entries(data).forEach(function (_a) {
            var _b = __read(_a, 2), chain = _b[0], chainData = _b[1];
            Object.entries(chainData).forEach(function (_a) {
                var _b = __read(_a, 2), _protocolName = _b[0], value = _b[1];
                if (typeof value === 'number')
                    return;
                Object.entries(value).forEach(function (_a) {
                    var _b, _c;
                    var _d = __read(_a, 2), token = _d[0], value = _d[1];
                    if (!legend.includes(token))
                        legend.push(token);
                    if (!acc["".concat(timestamp).concat(token)])
                        acc["".concat(timestamp).concat(token)] = (_b = {},
                            _b[token] = getOkValue(value),
                            _b.date = String(timestamp),
                            _b);
                    else {
                        acc["".concat(timestamp).concat(token)] = (_c = {},
                            _c[token] = +acc["".concat(timestamp).concat(token)][token] + getOkValue(value),
                            _c.date = String(timestamp),
                            _c);
                    }
                });
            });
        });
        return acc;
    }, {});
    return [Object.values(rawProcessed), legend];
}
exports.chartBreakdownByTokens = chartBreakdownByTokens;
function getCexVolume() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, cexs, btcPriceRes, btcPrice, volume;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        fetch("".concat(constants_1.BASE_API, "cachedExternalResponse?url=").concat(encodeURIComponent("https://api.coingecko.com/api/v3/exchanges?per_page=250"))).then(handleFetchResponse),
                        fetch("".concat(constants_1.BASE_API, "cachedExternalResponse?url=").concat(encodeURIComponent("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"))).then(handleFetchResponse)
                    ])];
                case 1:
                    _b = __read.apply(void 0, [_c.sent(), 2]), cexs = _b[0], btcPriceRes = _b[1];
                    btcPrice = (_a = btcPriceRes === null || btcPriceRes === void 0 ? void 0 : btcPriceRes.bitcoin) === null || _a === void 0 ? void 0 : _a.usd;
                    if (!btcPrice || !cexs || typeof cexs.filter !== 'function')
                        return [2 /*return*/, undefined
                            // cexs might not be a list TypeError: cexs.filter is not a function
                        ];
                    volume = cexs.filter(function (c) { return c.trust_score >= 9; }).reduce(function (sum, c) { return sum + c.trade_volume_24h_btc; }, 0) * btcPrice;
                    return [2 /*return*/, volume];
            }
        });
    });
}
exports.getCexVolume = getCexVolume;
function handleFetchResponse(res) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, res.json()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    e_1 = _a.sent();
                    console.error("Failed to parse response from ".concat(res.url, ", with status ").concat(res.status, " and error message ").concat(e_1.message));
                    return [2 /*return*/, {}];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.handleFetchResponse = handleFetchResponse;
