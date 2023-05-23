"use strict";
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
exports.useBuildBridgeChartData = void 0;
var react_1 = require("react");
var useBuildBridgeChartData = function (bridgeStatsCurrentDay) {
    var _a = (0, react_1.useMemo)(function () {
        var tokensDeposited = bridgeStatsCurrentDay === null || bridgeStatsCurrentDay === void 0 ? void 0 : bridgeStatsCurrentDay.totalTokensDeposited;
        var tokensWithdrawn = bridgeStatsCurrentDay === null || bridgeStatsCurrentDay === void 0 ? void 0 : bridgeStatsCurrentDay.totalTokensWithdrawn;
        var tokenDeposits = [], tokenWithdrawals = [];
        if (tokensDeposited && tokensWithdrawn) {
            var uniqueTokenDeposits_1 = {};
            Object.entries(tokensDeposited).map(function (_a) {
                var _b;
                var _c = __read(_a, 2), token = _c[0], tokenData = _c[1];
                {
                    var symbol = tokenData.symbol;
                    var usdValue = tokenData.usdValue;
                    uniqueTokenDeposits_1[symbol] = ((_b = uniqueTokenDeposits_1[symbol]) !== null && _b !== void 0 ? _b : 0) + usdValue;
                }
            });
            var fullTokenDeposits = Object.entries(uniqueTokenDeposits_1).map(function (_a) {
                var _b = __read(_a, 2), symbol = _b[0], usdValue = _b[1];
                return { name: symbol, value: usdValue };
            });
            var otherDeposits = fullTokenDeposits.slice(10).reduce(function (total, entry) {
                return (total += entry.value);
            }, 0);
            tokenDeposits = fullTokenDeposits
                .slice(0, 10)
                .sort(function (a, b) { return b.value - a.value; })
                .concat({ name: 'Others', value: otherDeposits });
            var uniqueTokenWithdrawals_1 = {};
            Object.entries(tokensWithdrawn).map(function (_a) {
                var _b;
                var _c = __read(_a, 2), token = _c[0], tokenData = _c[1];
                {
                    var symbol = tokenData.symbol;
                    var usdValue = tokenData.usdValue;
                    uniqueTokenWithdrawals_1[symbol] = ((_b = uniqueTokenWithdrawals_1[symbol]) !== null && _b !== void 0 ? _b : 0) + usdValue;
                }
            });
            var fullTokenWithdrawals = Object.entries(uniqueTokenWithdrawals_1).map(function (_a) {
                var _b = __read(_a, 2), symbol = _b[0], usdValue = _b[1];
                return { name: symbol, value: usdValue };
            });
            var otherWithdrawals = fullTokenWithdrawals.slice(10).reduce(function (total, entry) {
                return (total += entry.value);
            }, 0);
            tokenWithdrawals = fullTokenWithdrawals
                .slice(0, 10)
                .sort(function (a, b) { return b.value - a.value; })
                .concat({ name: 'Others', value: otherWithdrawals });
        }
        return { tokenDeposits: tokenDeposits, tokenWithdrawals: tokenWithdrawals };
    }, [bridgeStatsCurrentDay]), tokenDeposits = _a.tokenDeposits, tokenWithdrawals = _a.tokenWithdrawals;
    return { tokenDeposits: tokenDeposits, tokenWithdrawals: tokenWithdrawals };
};
exports.useBuildBridgeChartData = useBuildBridgeChartData;
