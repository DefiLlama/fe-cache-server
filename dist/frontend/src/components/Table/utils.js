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
exports.getColumnSizesKeys = exports.splitArrayByFalsyValues = exports.formatColumnOrder = void 0;
var formatColumnOrder = function (columnOrders) {
    return Object.entries(columnOrders)
        .map(function (_a) {
        var _b = __read(_a, 2), size = _b[0], order = _b[1];
        return [Number(size), order];
    })
        .sort(function (_a, _b) {
        var _c = __read(_a, 1), a = _c[0];
        var _d = __read(_b, 1), b = _d[0];
        return b - a;
    });
};
exports.formatColumnOrder = formatColumnOrder;
function splitArrayByFalsyValues(data, column) {
    return data.reduce(function (acc, curr) {
        if (!curr[column] && curr[column] !== 0) {
            acc[1].push(curr);
        }
        else
            acc[0].push(curr);
        return acc;
    }, [[], []]);
}
exports.splitArrayByFalsyValues = splitArrayByFalsyValues;
function getColumnSizesKeys(columnSizes) {
    return Object.keys(columnSizes)
        .map(function (x) { return Number(x); })
        .sort(function (a, b) { return Number(b) - Number(a); });
}
exports.getColumnSizesKeys = getColumnSizesKeys;
