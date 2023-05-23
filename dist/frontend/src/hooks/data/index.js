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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatChartTvlsByDay = exports.useCalcGroupExtraTvlsByDay = exports.useGroupChainsByParent = exports.useCalcStakePool2Tvl = void 0;
var react_1 = require("react");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var defi_1 = require("./defi");
// PROTOCOLS
var useCalcStakePool2Tvl = function (filteredProtocols, defaultSortingColumn, dir, applyLqAndDc) {
    if (applyLqAndDc === void 0) { applyLqAndDc = false; }
    var _a = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvlsEnabled = _a[0];
    var protocolTotals = (0, react_1.useMemo)(function () {
        return (0, defi_1.formatDataWithExtraTvls)({
            data: filteredProtocols,
            defaultSortingColumn: defaultSortingColumn,
            dir: dir,
            applyLqAndDc: applyLqAndDc,
            extraTvlsEnabled: extraTvlsEnabled
        });
    }, [filteredProtocols, extraTvlsEnabled, defaultSortingColumn, dir, applyLqAndDc]);
    return protocolTotals;
};
exports.useCalcStakePool2Tvl = useCalcStakePool2Tvl;
var useGroupChainsByParent = function (chains, groupData) {
    var _a = __read((0, LocalStorage_1.useDefiChainsManager)(), 1), groupsEnabled = _a[0];
    var data = (0, react_1.useMemo)(function () {
        var _a;
        var finalData = {};
        var addedChains = [];
        var _loop_1 = function (parentName) {
            var e_1, _b;
            var tvl = null;
            var tvlPrevDay = null;
            var tvlPrevWeek = null;
            var tvlPrevMonth = null;
            var mcap = null;
            var stablesMcap = null;
            var protocols = null;
            finalData[parentName] = {};
            var parentData = chains.find(function (item) { return item.name === parentName; });
            if (parentData) {
                tvl = parentData.tvl || null;
                tvlPrevDay = parentData.tvlPrevDay || null;
                tvlPrevWeek = parentData.tvlPrevWeek || null;
                tvlPrevMonth = parentData.tvlPrevMonth || null;
                mcap = parentData.mcap || null;
                stablesMcap = parentData.stablesMcap || null;
                protocols = parentData.protocols || null;
                finalData[parentName] = __assign(__assign({}, parentData), { subRows: [parentData], symbol: '-' });
                addedChains.push(parentName);
            }
            else {
                finalData[parentName] = {
                    symbol: '-'
                };
            }
            var addedChildren = false;
            for (var type in groupData[parentName]) {
                if (groupsEnabled[type] === true) {
                    var _loop_2 = function (child) {
                        var childData = chains.find(function (item) { return item.name === child; });
                        var alreadyAdded = ((_a = finalData[parentName].subRows) !== null && _a !== void 0 ? _a : []).find(function (p) { return p.name === child; });
                        if (childData && alreadyAdded === undefined) {
                            tvl += childData.tvl;
                            tvlPrevDay += childData.tvlPrevDay;
                            tvlPrevWeek += childData.tvlPrevWeek;
                            tvlPrevMonth += childData.tvlPrevMonth;
                            mcap += childData.mcap;
                            stablesMcap += childData.stablesMcap;
                            protocols += childData.protocols;
                            var subChains = finalData[parentName].subRows || [];
                            var mcaptvl = mcap && tvl && mcap / tvl;
                            finalData[parentName] = __assign(__assign({}, finalData[parentName]), { tvl: tvl, tvlPrevDay: tvlPrevDay, tvlPrevWeek: tvlPrevWeek, tvlPrevMonth: tvlPrevMonth, mcap: mcap, stablesMcap: stablesMcap, mcaptvl: mcaptvl, protocols: protocols, name: parentName, subRows: __spreadArray(__spreadArray([], __read(subChains), false), [childData], false) });
                            addedChains.push(child);
                            addedChildren = true;
                        }
                    };
                    try {
                        for (var _c = (e_1 = void 0, __values(groupData[parentName][type])), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var child = _d.value;
                            _loop_2(child);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
            if (!addedChildren) {
                if (finalData[parentName].tvl === undefined) {
                    delete finalData[parentName];
                }
                else {
                    finalData[parentName] = parentData;
                }
            }
        };
        for (var parentName in groupData) {
            _loop_1(parentName);
        }
        chains.forEach(function (item) {
            if (!addedChains.includes(item.name)) {
                finalData[item.name] = item;
            }
        });
        return Object.values(finalData).sort(function (a, b) { return b.tvl - a.tvl; });
    }, [chains, groupData, groupsEnabled]);
    return data;
};
exports.useGroupChainsByParent = useGroupChainsByParent;
// returns tvl by day for a group of tokens
var useCalcGroupExtraTvlsByDay = function (chains, tvlTypes) {
    if (tvlTypes === void 0) { tvlTypes = null; }
    var _a = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvls = _a[0];
    return (0, defi_1.groupDataWithTvlsByDay)({ chains: chains, tvlTypes: tvlTypes, extraTvlsEnabled: extraTvls });
};
exports.useCalcGroupExtraTvlsByDay = useCalcGroupExtraTvlsByDay;
// returns tvl by day for a single token
function formatChartTvlsByDay(_a) {
    var data = _a.data, extraTvlsEnabled = _a.extraTvlsEnabled, key = _a.key;
    return data.map(function (_a) {
        var _b;
        var _c = __read(_a, 2), date = _c[0], values = _c[1];
        var sum = values.tvl || 0;
        for (var value in values) {
            if (value === 'doublecounted' && !extraTvlsEnabled['doublecounted']) {
                sum -= values[value];
            }
            if ((value === 'liquidstaking' || value === 'd') && !extraTvlsEnabled['liquidstaking']) {
                sum -= values[value];
            }
            if (value.toLowerCase() === 'dcandlsoverlap') {
                if (!extraTvlsEnabled['doublecounted'] || !extraTvlsEnabled['liquidstaking']) {
                    sum += values[value];
                }
            }
            if (extraTvlsEnabled[value.toLowerCase()] && value !== 'doublecounted' && value !== 'liquidstaking') {
                sum += values[value];
            }
        }
        return _b = { date: date }, _b[key] = sum, _b;
    });
}
exports.formatChartTvlsByDay = formatChartTvlsByDay;
