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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.formatProtocolsList = exports.groupDataWithTvlsByDay = exports.formatDataWithExtraTvls = void 0;
var utils_1 = require("../../utils");
var utils_2 = require("./utils");
function formatDataWithExtraTvls(_a) {
    var data = _a.data, defaultSortingColumn = _a.defaultSortingColumn, dir = _a.dir, applyLqAndDc = _a.applyLqAndDc, extraTvlsEnabled = _a.extraTvlsEnabled;
    var updatedProtocols = data.map(function (_a) {
        var tvl = _a.tvl, tvlPrevDay = _a.tvlPrevDay, tvlPrevWeek = _a.tvlPrevWeek, tvlPrevMonth = _a.tvlPrevMonth, extraTvl = _a.extraTvl, mcap = _a.mcap, props = __rest(_a, ["tvl", "tvlPrevDay", "tvlPrevWeek", "tvlPrevMonth", "extraTvl", "mcap"]);
        var finalTvl = tvl;
        var finalTvlPrevDay = tvlPrevDay;
        var finalTvlPrevWeek = tvlPrevWeek;
        var finalTvlPrevMonth = tvlPrevMonth;
        // if (props.name === 'Ethereum') {
        // 	const initialTvl = tvl
        // 	const doublecounted = extraTvl['doublecounted'].tvl
        // 	const liquidstaking = extraTvl['liquidstaking'].tvl
        // 	const overlap = extraTvl['dcandlsoverlap'].tvl
        // 	console.log(['doublecounted', 'liquidstaking', 'total'])
        // 	console.log(['on', 'on', initialTvl])
        // 	console.log(['on', 'off', initialTvl - liquidstaking + overlap])
        // 	console.log(['off', 'on', initialTvl - doublecounted + overlap])
        // 	console.log(['off', 'off', initialTvl - doublecounted - liquidstaking + overlap])
        // }
        Object.entries(extraTvl).forEach(function (_a) {
            var _b = __read(_a, 2), prop = _b[0], propValues = _b[1];
            var tvl = propValues.tvl, tvlPrevDay = propValues.tvlPrevDay, tvlPrevWeek = propValues.tvlPrevWeek, tvlPrevMonth = propValues.tvlPrevMonth;
            if (applyLqAndDc && prop === 'doublecounted' && !extraTvlsEnabled['doublecounted']) {
                tvl && (finalTvl = (finalTvl || 0) - tvl);
                tvlPrevDay && (finalTvlPrevDay = (finalTvlPrevDay || 0) - tvlPrevDay);
                tvlPrevWeek && (finalTvlPrevWeek = (finalTvlPrevWeek || 0) - tvlPrevWeek);
                tvlPrevMonth && (finalTvlPrevMonth = (finalTvlPrevMonth || 0) - tvlPrevMonth);
            }
            if (applyLqAndDc && prop === 'liquidstaking' && !extraTvlsEnabled['liquidstaking']) {
                tvl && (finalTvl = (finalTvl || 0) - tvl);
                tvlPrevDay && (finalTvlPrevDay = (finalTvlPrevDay || 0) - tvlPrevDay);
                tvlPrevWeek && (finalTvlPrevWeek = (finalTvlPrevWeek || 0) - tvlPrevWeek);
                tvlPrevMonth && (finalTvlPrevMonth = (finalTvlPrevMonth || 0) - tvlPrevMonth);
            }
            if (applyLqAndDc && prop.toLowerCase() === 'dcandlsoverlap') {
                if (!extraTvlsEnabled['doublecounted'] || !extraTvlsEnabled['liquidstaking']) {
                    tvl && (finalTvl = (finalTvl || 0) + tvl);
                    tvlPrevDay && (finalTvlPrevDay = (finalTvlPrevDay || 0) + tvlPrevDay);
                    tvlPrevWeek && (finalTvlPrevWeek = (finalTvlPrevWeek || 0) + tvlPrevWeek);
                    tvlPrevMonth && (finalTvlPrevMonth = (finalTvlPrevMonth || 0) + tvlPrevMonth);
                }
            }
            // convert to lowercase as server response is not consistent in extra-tvl names
            if (extraTvlsEnabled[prop.toLowerCase()] && prop !== 'doublecounted' && prop !== 'liquidstaking') {
                // check if final tvls are null, if they are null and tvl exist on selected option, convert to 0 and add them
                tvl && (finalTvl = (finalTvl || 0) + tvl);
                tvlPrevDay && (finalTvlPrevDay = (finalTvlPrevDay || 0) + tvlPrevDay);
                tvlPrevWeek && (finalTvlPrevWeek = (finalTvlPrevWeek || 0) + tvlPrevWeek);
                tvlPrevMonth && (finalTvlPrevMonth = (finalTvlPrevMonth || 0) + tvlPrevMonth);
            }
        });
        var change1d = (0, utils_1.getPercentChange)(finalTvl, finalTvlPrevDay);
        var change7d = (0, utils_1.getPercentChange)(finalTvl, finalTvlPrevWeek);
        var change1m = (0, utils_1.getPercentChange)(finalTvl, finalTvlPrevMonth);
        var mcaptvl = mcap && finalTvl ? mcap / finalTvl : null;
        return __assign(__assign({}, props), { tvl: finalTvl, tvlPrevDay: finalTvlPrevDay, tvlPrevWeek: finalTvlPrevWeek, tvlPrevMonth: finalTvlPrevMonth, change_1d: change1d, change_7d: change7d, change_1m: change1m, mcap: mcap, mcaptvl: mcaptvl });
    });
    if (defaultSortingColumn === undefined) {
        return updatedProtocols.sort(function (a, b) { return b.tvl - a.tvl; });
    }
    else {
        return updatedProtocols.sort(function (a, b) {
            if (dir === 'asc') {
                return a[defaultSortingColumn] - b[defaultSortingColumn];
            }
            else
                return b[defaultSortingColumn] - a[defaultSortingColumn];
        });
    }
}
exports.formatDataWithExtraTvls = formatDataWithExtraTvls;
function groupDataWithTvlsByDay(_a) {
    var chains = _a.chains, tvlTypes = _a.tvlTypes, extraTvlsEnabled = _a.extraTvlsEnabled;
    var extraTvls = __assign({}, extraTvlsEnabled);
    var tvlKey = 'tvl';
    if (tvlTypes !== null) {
        tvlKey = tvlTypes[tvlKey];
        extraTvls = Object.fromEntries(Object.entries(extraTvls).map(function (_a) {
            var _b = __read(_a, 2), toggle = _b[0], val = _b[1];
            return [tvlTypes[toggle], val];
        }));
    }
    var daySum = {};
    var chainsWithExtraTvlsByDay = chains.map(function (_a) {
        var _b = __read(_a, 2), date = _b[0], values = _b[1];
        var tvls = {};
        var totalDaySum = 0;
        Object.entries(values).forEach(function (_a) {
            var _b = __read(_a, 2), name = _b[0], chainTvls = _b[1];
            var sum = chainTvls[tvlKey];
            totalDaySum += chainTvls[tvlKey] || 0;
            for (var c in chainTvls) {
                if ((c === 'doublecounted' || c === 'd') && !extraTvls['doublecounted']) {
                    sum -= chainTvls[c];
                    totalDaySum -= chainTvls[c];
                }
                if ((c === 'liquidstaking' || c === 'l') && !extraTvls['liquidstaking']) {
                    sum -= chainTvls[c];
                    totalDaySum -= chainTvls[c];
                }
                if (c.toLowerCase() === 'dcandlsoverlap' || c === 'dl') {
                    if (!extraTvls['doublecounted'] || !extraTvls['liquidstaking']) {
                        sum += chainTvls[c];
                        totalDaySum += chainTvls[c];
                    }
                }
                if (extraTvls[c.toLowerCase()] && c !== 'doublecounted' && c !== 'liquidstaking') {
                    sum += chainTvls[c];
                    totalDaySum += chainTvls[c];
                }
            }
            tvls[name] = sum;
        });
        daySum[date] = totalDaySum;
        return __assign({ date: Number(date) }, tvls);
    });
    var chainsWithExtraTvlsAndDominanceByDay = chainsWithExtraTvlsByDay.map(function (_a) {
        var date = _a.date, values = __rest(_a, ["date"]);
        var shares = {};
        for (var value in values) {
            shares[value] = (0, utils_1.getDominancePercent)(values[value], daySum[date]);
        }
        return __assign({ date: date }, shares);
    });
    return { chainsWithExtraTvlsByDay: chainsWithExtraTvlsByDay, chainsWithExtraTvlsAndDominanceByDay: chainsWithExtraTvlsAndDominanceByDay };
}
exports.groupDataWithTvlsByDay = groupDataWithTvlsByDay;
var formatProtocolsList = function (_a) {
    var protocols = _a.protocols, parentProtocols = _a.parentProtocols, extraTvlsEnabled = _a.extraTvlsEnabled, _b = _a.volumeData, volumeData = _b === void 0 ? [] : _b, _c = _a.feesData, feesData = _c === void 0 ? [] : _c;
    var checkExtras = __assign(__assign({}, extraTvlsEnabled), { doublecounted: !extraTvlsEnabled.doublecounted });
    var updatedProtocols = Object.values(checkExtras).every(function (t) { return !t; })
        ? protocols
        : protocols.map(function (_a) {
            var _b;
            var tvl = _a.tvl, tvlPrevDay = _a.tvlPrevDay, tvlPrevWeek = _a.tvlPrevWeek, tvlPrevMonth = _a.tvlPrevMonth, extraTvl = _a.extraTvl, mcap = _a.mcap, name = _a.name, props = __rest(_a, ["tvl", "tvlPrevDay", "tvlPrevWeek", "tvlPrevMonth", "extraTvl", "mcap", "name"]);
            var finalTvl = tvl;
            var finalTvlPrevDay = tvlPrevDay;
            var finalTvlPrevWeek = tvlPrevWeek;
            var finalTvlPrevMonth = tvlPrevMonth;
            var strikeTvl = false;
            // keep liquid staking in same positon in table but strike its tvl
            if (props.category === 'Liquid Staking' && !extraTvlsEnabled['liquidstaking']) {
                strikeTvl = true;
            }
            if (['RWA', 'Infrastructure', 'Staking Pool'].includes(props.category)) {
                strikeTvl = true;
            }
            Object.entries(extraTvl).forEach(function (_a) {
                var _b = __read(_a, 2), prop = _b[0], propValues = _b[1];
                var tvl = propValues.tvl, tvlPrevDay = propValues.tvlPrevDay, tvlPrevWeek = propValues.tvlPrevWeek, tvlPrevMonth = propValues.tvlPrevMonth;
                if (prop === 'doublecounted' &&
                    !extraTvlsEnabled['doublecounted'] &&
                    (props.category === 'Liquid Staking' ? !extraTvlsEnabled['liquidstaking'] : true)) {
                    strikeTvl = true;
                }
                else {
                    // convert to lowercase as server response is not consistent in extra-tvl names
                    if (extraTvlsEnabled[prop.toLowerCase()] &&
                        prop.toLowerCase() !== 'doublecounted' &&
                        prop.toLowerCase() !== 'liquidstaking') {
                        // check if final tvls are null, if they are null and tvl exist on selected option, convert to 0 and add them
                        tvl && (finalTvl = (finalTvl || 0) + tvl);
                        tvlPrevDay && (finalTvlPrevDay = (finalTvlPrevDay || 0) + tvlPrevDay);
                        tvlPrevWeek && (finalTvlPrevWeek = (finalTvlPrevWeek || 0) + tvlPrevWeek);
                        tvlPrevMonth && (finalTvlPrevMonth = (finalTvlPrevMonth || 0) + tvlPrevMonth);
                    }
                }
            });
            var change1d = (0, utils_1.getPercentChange)(finalTvl, finalTvlPrevDay);
            var change7d = (0, utils_1.getPercentChange)(finalTvl, finalTvlPrevWeek);
            var change1m = (0, utils_1.getPercentChange)(finalTvl, finalTvlPrevMonth);
            var mcaptvl = mcap && finalTvl ? mcap / finalTvl : null;
            var volume_7d = (_b = volumeData.find(function (data) {
                return (props === null || props === void 0 ? void 0 : props.parentProtocol) || !(data === null || data === void 0 ? void 0 : data.id) ? data.name === name : false;
            })) === null || _b === void 0 ? void 0 : _b.total7d;
            var currentFees = feesData.find(function (data) { return ((props === null || props === void 0 ? void 0 : props.parentProtocol) || !(data === null || data === void 0 ? void 0 : data.id) ? data.name === name : false); });
            return __assign(__assign({}, props), { name: name, tvl: finalTvl, tvlPrevDay: finalTvlPrevDay, tvlPrevWeek: finalTvlPrevWeek, tvlPrevMonth: finalTvlPrevMonth, change_1d: change1d, change_7d: change7d, change_1m: change1m, volume_7d: volume_7d, fees_7d: currentFees === null || currentFees === void 0 ? void 0 : currentFees.total7d, revenue_7d: currentFees === null || currentFees === void 0 ? void 0 : currentFees.revenue7d, mcap: mcap, mcaptvl: mcaptvl, strikeTvl: strikeTvl });
        });
    return parentProtocols ? (0, utils_2.groupProtocols)(updatedProtocols, parentProtocols) : updatedProtocols;
};
exports.formatProtocolsList = formatProtocolsList;
