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
exports.formatVolumeHistoryToChartDataByProtocol = exports.formatVolumeHistoryToChartDataByChain = exports.getChartDataFromVolumeHistory = void 0;
var __1 = require("..");
var summAllVolumes = function (breakdownVolumes) {
    return Object.values(breakdownVolumes).reduce(function (acc, volume) {
        return acc +
            Object.values(volume).reduce(function (vacc, current) { return (typeof current === 'number' ? vacc + current : vacc); }, 0);
    }, 0);
};
var getChartDataFromVolumeHistory = function (volumeHistory) {
    return volumeHistory.map(function (_a) {
        var timestamp = _a.timestamp, dailyVolume = _a.dailyVolume;
        return [new Date(timestamp * 1000), summAllVolumes(dailyVolume)];
    });
};
exports.getChartDataFromVolumeHistory = getChartDataFromVolumeHistory;
// TODO: do better
var ALL_CHAINS = [];
var formatVolumeHistoryToChartDataByChain = function (volumeHistory) {
    if (ALL_CHAINS.length === 0)
        ALL_CHAINS = getAllChains(volumeHistory);
    var chartData = volumeHistory.reduce(function (acc, _a) {
        var e_1, _b;
        var dailyVolume = _a.dailyVolume, timestamp = _a.timestamp;
        //different timestamp
        var rawItems = ALL_CHAINS.reduce(function (acc, chain) {
            var _a;
            var protVolumes = (_a = dailyVolume[chain]) !== null && _a !== void 0 ? _a : {};
            //different chain
            var volumeAccrossProtocols = Object.entries(protVolumes).reduce(function (acc, _a) {
                var _b = __read(_a, 2), _ = _b[0], volume = _b[1];
                //different version
                if (typeof volume === 'number')
                    return (acc += volume);
                // return sum accross protocols
                return acc;
            }, 0);
            acc.push({
                name: chain,
                data: [new Date(timestamp * 1000), volumeAccrossProtocols]
            });
            // return total volume by chain
            return acc;
        }, []);
        try {
            for (var rawItems_1 = __values(rawItems), rawItems_1_1 = rawItems_1.next(); !rawItems_1_1.done; rawItems_1_1 = rawItems_1.next()) {
                var rawItem = rawItems_1_1.value;
                if (acc[rawItem.name])
                    acc[rawItem.name].push(rawItem.data);
                else
                    acc[rawItem.name] = [rawItem.data];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rawItems_1_1 && !rawItems_1_1.done && (_b = rawItems_1.return)) _b.call(rawItems_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // return all data by chain
        return acc;
    }, {});
    return Object.entries(chartData).map(function (_a) {
        var _b = __read(_a, 2), name = _b[0], data = _b[1];
        return ({
            name: (0, __1.capitalizeFirstLetter)(name),
            data: data
        });
    });
};
exports.formatVolumeHistoryToChartDataByChain = formatVolumeHistoryToChartDataByChain;
// TODO: do better
var ALL_VERSIONS = [];
var formatVolumeHistoryToChartDataByProtocol = function (volumeHistory, dexName, adapterName) {
    if (ALL_VERSIONS.length === 0)
        ALL_VERSIONS = getAllVProtocols(volumeHistory);
    var chartData = volumeHistory.reduce(function (acc, _a) {
        var e_2, _b;
        var _c, _d;
        var dailyVolume = _a.dailyVolume, timestamp = _a.timestamp;
        //different timestamp
        var rawItems = Object.entries(dailyVolume).reduce(function (acc, _a) {
            var e_3, _b;
            var _c;
            var _d = __read(_a, 2), _ = _d[0], protVolumes = _d[1];
            try {
                //different chain
                for (var _e = __values(Object.keys(protVolumes)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var version = _f.value;
                    var value = protVolumes[version];
                    if (typeof value === 'number') {
                        if (!ALL_VERSIONS.includes(version))
                            ALL_VERSIONS.push(version);
                        acc[version] = ((_c = acc[version]) !== null && _c !== void 0 ? _c : 0) + value;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // return total volume across chains by version
            return acc;
        }, {});
        try {
            for (var ALL_VERSIONS_1 = __values(ALL_VERSIONS), ALL_VERSIONS_1_1 = ALL_VERSIONS_1.next(); !ALL_VERSIONS_1_1.done; ALL_VERSIONS_1_1 = ALL_VERSIONS_1.next()) {
                var key = ALL_VERSIONS_1_1.value;
                //all versions should have value
                if (acc[key])
                    acc[key].push([new Date(timestamp * 1000), (_c = rawItems[key]) !== null && _c !== void 0 ? _c : 0]); //default to 0 to avoid buggy chart
                else
                    acc[key] = [[new Date(timestamp * 1000), (_d = rawItems[key]) !== null && _d !== void 0 ? _d : 0]];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (ALL_VERSIONS_1_1 && !ALL_VERSIONS_1_1.done && (_b = ALL_VERSIONS_1.return)) _b.call(ALL_VERSIONS_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // return all data by chain
        return acc;
    }, {});
    return Object.entries(chartData).map(function (_a) {
        var _b = __read(_a, 2), name = _b[0], data = _b[1];
        return ({
            name: name === adapterName ? dexName : name,
            data: data
        });
    });
};
exports.formatVolumeHistoryToChartDataByProtocol = formatVolumeHistoryToChartDataByProtocol;
// TODO: Get list of vprotocols from api or improve
var getAllVProtocols = function (volumeHistory) {
    return volumeHistory.reduce(function (acc, _a) {
        var e_4, _b, e_5, _c;
        var dailyVolume = _a.dailyVolume;
        try {
            for (var _d = __values(Object.values(dailyVolume)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var protData = _e.value;
                try {
                    for (var _f = (e_5 = void 0, __values(Object.entries(protData))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var _h = __read(_g.value, 2), protocolName = _h[0], value = _h[1];
                        if (typeof value === 'number' && !acc.includes(protocolName))
                            acc.push(protocolName);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return acc;
    }, []);
};
// TODO: Get list of chains from api or improve
var getAllChains = function (volumeHistory) {
    return volumeHistory.reduce(function (acc, _a) {
        var e_6, _b, e_7, _c;
        var dailyVolume = _a.dailyVolume;
        try {
            for (var _d = __values(Object.entries(dailyVolume)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = __read(_e.value, 2), chains = _f[0], protData = _f[1];
                try {
                    for (var _g = (e_7 = void 0, __values(Object.entries(protData))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var _j = __read(_h.value, 2), protocolName = _j[0], value = _j[1];
                        if (typeof value === 'number' && !acc.includes(chains))
                            acc.push(chains);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return acc;
    }, []);
};
