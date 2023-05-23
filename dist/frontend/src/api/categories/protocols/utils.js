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
exports.formatProtocolsData = exports.basicPropertiesToKeep = void 0;
var shared_1 = require("../../../api/shared");
var utils_1 = require("../../../utils");
exports.basicPropertiesToKeep = [
    'tvl',
    'name',
    'symbol',
    'chains',
    'tvlPrevDay',
    'tvlPrevWeek',
    'tvlPrevMonth',
    'change_1d',
    'change_7d',
    'change_1m',
    'mcap',
    'mcaptvl',
    'category',
    'parentProtocol'
];
var formatProtocolsData = function (_a) {
    var chain = _a.chain, oracle = _a.oracle, fork = _a.fork, category = _a.category, _b = _a.protocols, protocols = _b === void 0 ? [] : _b, _c = _a.protocolProps, protocolProps = _c === void 0 ? __spreadArray(__spreadArray([], __read(exports.basicPropertiesToKeep), false), ['extraTvl'], false) : _c, _d = _a.removeBridges, removeBridges = _d === void 0 ? false : _d;
    var data = protocols
        .filter(function (protocol) {
        var _a, _b, _c, _d, _e;
        var toFilter = true;
        if (removeBridges) {
            toFilter = toFilter && (protocol === null || protocol === void 0 ? void 0 : protocol.category) !== 'Bridge';
        }
        if (chain) {
            toFilter = toFilter && ((_a = protocol.chains) === null || _a === void 0 ? void 0 : _a.includes(chain));
        }
        if (oracle) {
            if (protocol.oraclesByChain) {
                protocol.tvl = 0;
                Object.entries(protocol.oraclesByChain).forEach(function (_a) {
                    var _b, _c;
                    var _d = __read(_a, 2), chain = _d[0], oracles = _d[1];
                    if (oracles.includes(oracle)) {
                        var _tvl = (_c = (_b = protocol === null || protocol === void 0 ? void 0 : protocol.chainTvls[chain]) === null || _b === void 0 ? void 0 : _b.tvl) !== null && _c !== void 0 ? _c : 0;
                        protocol.tvl += _tvl;
                    }
                });
                toFilter = toFilter && protocol.tvl !== 0;
            }
            else {
                toFilter = toFilter && ((_b = protocol.oracles) === null || _b === void 0 ? void 0 : _b.includes(oracle));
            }
        }
        if (fork) {
            toFilter = toFilter && ((_c = protocol.forkedFrom) === null || _c === void 0 ? void 0 : _c.includes(fork));
        }
        if (category) {
            toFilter = toFilter && category.toLowerCase() === ((_e = (_d = protocol.category) === null || _d === void 0 ? void 0 : _d.toLowerCase()) !== null && _e !== void 0 ? _e : '');
        }
        return toFilter;
    })
        .map(function (p) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var protocol = (0, shared_1.keepNeededProperties)(p, protocolProps);
        if (chain) {
            protocol.tvl = (_b = (_a = p.chainTvls[chain]) === null || _a === void 0 ? void 0 : _a.tvl) !== null && _b !== void 0 ? _b : 0;
            protocol.tvlPrevDay = (_d = (_c = p.chainTvls[chain]) === null || _c === void 0 ? void 0 : _c.tvlPrevDay) !== null && _d !== void 0 ? _d : null;
            protocol.tvlPrevWeek = (_f = (_e = p.chainTvls[chain]) === null || _e === void 0 ? void 0 : _e.tvlPrevWeek) !== null && _f !== void 0 ? _f : null;
            protocol.tvlPrevMonth = (_h = (_g = p.chainTvls[chain]) === null || _g === void 0 ? void 0 : _g.tvlPrevMonth) !== null && _h !== void 0 ? _h : null;
        }
        protocol.extraTvl = {};
        protocol.change_1d = (0, utils_1.getPercentChange)(protocol.tvl, protocol.tvlPrevDay);
        protocol.change_7d = (0, utils_1.getPercentChange)(protocol.tvl, protocol.tvlPrevWeek);
        protocol.change_1m = (0, utils_1.getPercentChange)(protocol.tvl, protocol.tvlPrevMonth);
        protocol.mcaptvl = p.mcap && protocol.tvl ? p.mcap / protocol.tvl : null;
        Object.entries(p.chainTvls).forEach(function (_a) {
            var _b = __read(_a, 2), sectionName = _b[0], sectionTvl = _b[1];
            if (chain) {
                if (sectionName.startsWith("".concat(chain, "-"))) {
                    var sectionToAdd = sectionName.split('-')[1];
                    protocol.extraTvl[sectionToAdd] = sectionTvl;
                }
            }
            else {
                var firstChar = sectionName[0];
                if (firstChar === firstChar.toLowerCase()) {
                    protocol.extraTvl[sectionName] = sectionTvl;
                }
            }
        });
        return (0, shared_1.keepNeededProperties)(protocol, protocolProps);
    });
    return data.sort(function (a, b) { return b.tvl - a.tvl; });
};
exports.formatProtocolsData = formatProtocolsData;
