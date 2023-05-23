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
exports.fetchChain = void 0;
var protocols_1 = require("../../api/categories/protocols");
var adaptors_1 = require("../../api/categories/adaptors");
var bridges_1 = require("../../api/categories/bridges");
var adaptors_2 = require("../../api/categories/adaptors");
var fetchChain = function (_a) {
    var chain = _a.chain;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, data, volumeData, chainVolumeData, feesData, usersData, txsData, chainFeesData, bridgeData, stablecoinsData;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        (0, protocols_1.getChainPageData)(chain).catch(function () { return null; }),
                        (0, adaptors_2.getChainsPageData)('dexs').catch(function () { return null; }),
                        (0, adaptors_1.getChainPageData)('dexs', chain).catch(function () { return null; }),
                        (0, adaptors_2.getOverviewItemPageData)('fees', chain).catch(function () { return null; }),
                        fetch("https://api.llama.fi/userData/users/chain$".concat(chain))
                            .then(function (r) { return r.json(); })
                            .catch(function () { return null; }),
                        fetch("https://api.llama.fi/userData/txs/chain$".concat(chain))
                            .then(function (r) { return r.json(); })
                            .catch(function () { return null; }),
                        (0, adaptors_2.getChainPageData)('fees', chain)
                            .catch(function () { return null; })
                            .then(function (r) { return (r && r.total24h === undefined ? null : r); }),
                        (0, bridges_1.getBridgeOverviewPageData)(chain).catch(function () { return null; }),
                        []
                    ])];
                case 1:
                    _b = __read.apply(void 0, [_c.sent(), 9]), data = _b[0], volumeData = _b[1], chainVolumeData = _b[2], feesData = _b[3], usersData = _b[4], txsData = _b[5], chainFeesData = _b[6], bridgeData = _b[7], stablecoinsData = _b[8];
                    return [2 /*return*/, __assign(__assign({}, data.props), { volumeData: volumeData || null, chainVolumeData: chainVolumeData || null, feesData: feesData || null, usersData: usersData || null, chainFeesData: chainFeesData || null, txsData: txsData || null, bridgeData: bridgeData || null, stablecoinsData: stablecoinsData || null })];
            }
        });
    });
};
exports.fetchChain = fetchChain;
