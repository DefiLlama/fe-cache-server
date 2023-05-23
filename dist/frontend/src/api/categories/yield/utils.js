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
exports.formatYieldsPageData = void 0;
function formatYieldsPageData(poolsAndConfig) {
    var e_1, _a, e_2, _b;
    var _c, _d, _e, _f, _g, _h;
    var _pools = (_d = (_c = poolsAndConfig[0]) === null || _c === void 0 ? void 0 : _c.data) !== null && _d !== void 0 ? _d : [];
    var _config = (_f = (_e = poolsAndConfig[1]) === null || _e === void 0 ? void 0 : _e.protocols) !== null && _f !== void 0 ? _f : [];
    var _urls = (_g = poolsAndConfig[2]) !== null && _g !== void 0 ? _g : [];
    var _chains = (_h = poolsAndConfig[3]) !== null && _h !== void 0 ? _h : [];
    // add projectName and audit fields from config to pools array
    _pools = _pools.map(function (p) {
        var _a, _b, _c, _d, _e, _f;
        return (__assign(__assign({}, p), { symbol: p.poolMeta !== undefined && p.poolMeta !== null && p.poolMeta.length > 1
                ? "".concat(p.symbol, " (").concat(p.poolMeta, ")")
                : p.symbol, projectName: (_a = _config[p.project]) === null || _a === void 0 ? void 0 : _a.name, audits: (_b = _config[p.project]) === null || _b === void 0 ? void 0 : _b.audits, airdrop: ((_c = _config[p.project]) === null || _c === void 0 ? void 0 : _c.symbol) === null || ((_d = _config[p.project]) === null || _d === void 0 ? void 0 : _d.symbol) === '-', category: (_e = _config[p.project]) === null || _e === void 0 ? void 0 : _e.category, url: (_f = _urls[p.pool]) !== null && _f !== void 0 ? _f : '', apyReward: p.apyReward > 0 ? p.apyReward : null, rewardTokens: p.apyReward > 0 ? p.rewardTokens : [], apyNet7d: p.apyBase7d > 0 ? Math.max(p.apyBase7d + p.il7d * 52, -100) : null // scale il7d (negative value) to year
         }));
    });
    var poolsList = [];
    var chainList = new Set();
    var projectList = new Set();
    var categoryList = new Set();
    _pools.forEach(function (pool) {
        // remove potential undefined on projectName
        if (pool.projectName) {
            poolsList.push(pool);
            chainList.add(pool.chain);
            categoryList.add(pool.category);
            projectList.add(pool.projectName);
        }
    });
    var tokenNameMapping = {};
    try {
        for (var _j = __values(Object.keys(_config)), _k = _j.next(); !_k.done; _k = _j.next()) {
            var key = _k.value;
            if (key === 'cakedao')
                continue;
            tokenNameMapping[_config[key].symbol] = _config[key].name;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_k && !_k.done && (_a = _j.return)) _a.call(_j);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        // add chain symbols too
        for (var _chains_1 = __values(_chains), _chains_1_1 = _chains_1.next(); !_chains_1_1.done; _chains_1_1 = _chains_1.next()) {
            var chain = _chains_1_1.value;
            tokenNameMapping[chain.tokenSymbol] = chain.name === 'xDai' ? 'Gnosis' : chain.name;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_chains_1_1 && !_chains_1_1.done && (_b = _chains_1.return)) _b.call(_chains_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    // remove any null keys (where no token)
    tokenNameMapping = Object.fromEntries(Object.entries(tokenNameMapping).filter(function (_a) {
        var _b = __read(_a, 2), k = _b[0], _ = _b[1];
        return k !== 'null';
    }));
    return {
        pools: poolsList,
        chainList: Array.from(chainList),
        projectList: Array.from(projectList),
        categoryList: Array.from(categoryList),
        tokenNameMapping: tokenNameMapping
    };
}
exports.formatYieldsPageData = formatYieldsPageData;
