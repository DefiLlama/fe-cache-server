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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupProtocols = exports.groupData = void 0;
var utils_1 = require("../../utils");
// group protocols so we can show child protocols inside an accordion in a table
var groupData = function (protocols, parent) {
    var strikeTvl = false;
    var _a = protocols.reduce(function (acc, curr) {
        if (curr.strikeTvl) {
            strikeTvl = true;
        }
        curr.tvl && (acc.tvl = (acc.tvl || 0) + curr.tvl);
        curr.tvlPrevDay && (acc.tvlPrevDay = (acc.tvlPrevDay || 0) + curr.tvlPrevDay);
        curr.tvlPrevWeek && (acc.tvlPrevWeek = (acc.tvlPrevWeek || 0) + curr.tvlPrevWeek);
        curr.tvlPrevMonth && (acc.tvlPrevMonth = (acc.tvlPrevMonth || 0) + curr.tvlPrevMonth);
        (curr === null || curr === void 0 ? void 0 : curr.volume_7d) && (acc.volume_7d = ((acc === null || acc === void 0 ? void 0 : acc.volume_7d) || 0) + (curr === null || curr === void 0 ? void 0 : curr.volume_7d));
        (curr === null || curr === void 0 ? void 0 : curr.fees_7d) && (acc.fees_7d = ((acc === null || acc === void 0 ? void 0 : acc.fees_7d) || 0) + (curr === null || curr === void 0 ? void 0 : curr.fees_7d));
        (curr === null || curr === void 0 ? void 0 : curr.revenue_7d) && (acc.revenue_7d = ((acc === null || acc === void 0 ? void 0 : acc.revenue_7d) || 0) + (curr === null || curr === void 0 ? void 0 : curr.revenue_7d));
        if (curr.mcap) {
            acc.mcap = (acc.mcap || 0) + curr.mcap;
        }
        else
            acc.mcap = null;
        return acc;
    }, {
        mcap: null,
        tvl: null,
        tvlPrevDay: null,
        tvlPrevWeek: null,
        tvlPrevMonth: null,
        volume_7d: null,
        fees_7d: null,
        revenue_7d: null
    }), mcap = _a.mcap, tvl = _a.tvl, tvlPrevDay = _a.tvlPrevDay, tvlPrevWeek = _a.tvlPrevWeek, tvlPrevMonth = _a.tvlPrevMonth, volume_7d = _a.volume_7d, fees_7d = _a.fees_7d, revenue_7d = _a.revenue_7d;
    var change1d = (0, utils_1.getPercentChange)(tvl, tvlPrevDay);
    var change7d = (0, utils_1.getPercentChange)(tvl, tvlPrevWeek);
    var change1m = (0, utils_1.getPercentChange)(tvl, tvlPrevMonth);
    var mcaptvl = mcap && tvl ? mcap / tvl : null;
    return {
        name: parent.name,
        logo: parent.logo,
        url: parent.url,
        chains: parent.chains,
        tvl: tvl,
        tvlPrevDay: tvlPrevDay,
        tvlPrevWeek: tvlPrevWeek,
        tvlPrevMonth: tvlPrevMonth,
        change_1d: change1d,
        change_7d: change7d,
        change_1m: change1m,
        fees_7d: fees_7d,
        revenue_7d: revenue_7d,
        volume_7d: volume_7d,
        mcap: mcap,
        mcaptvl: mcaptvl,
        extraTvl: {},
        symbol: undefined,
        category: undefined,
        subRows: __spreadArray([], __read(protocols), false),
        chainTvls: {},
        strikeTvl: strikeTvl,
        isParentProtocol: true
    };
};
exports.groupData = groupData;
var groupProtocols = function (protocols, parentProtocols) {
    var data = __spreadArray([], __read(protocols), false);
    parentProtocols.forEach(function (item) {
        var list = protocols.filter(function (p) { return p.parentProtocol === item.id; });
        if (list.length >= 2) {
            data = data.filter(function (p) { return p.parentProtocol !== item.id; });
            data.push((0, exports.groupData)(list, item));
        }
    });
    return data.sort(function (a, b) { return b.tvl - a.tvl; });
};
exports.groupProtocols = groupProtocols;
