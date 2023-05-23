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
exports.getPerpData = exports.calculateLoopAPY = exports.getLendBorrowData = exports.getYieldMedianData = exports.getYieldPageData = void 0;
var constants_1 = require("../../../constants");
var useSWR_1 = require("../../../utils/useSWR");
var utils_1 = require("./utils");
function getYieldPageData() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var poolsAndConfig, data, priceChainMapping, pricesList, _loop_1, _c, _d, p, maxSize, pages, pricesA, x, _e, _f, p, _g, e_1_1, prices, _h, _j, p, _loop_2, _k, _l, p, _loop_3, _m, _o, p;
        var e_2, _p, e_1, _q, e_3, _r, e_4, _s, e_5, _t;
        return __generator(this, function (_u) {
            switch (_u.label) {
                case 0: return [4 /*yield*/, (0, useSWR_1.arrayFetcher)([constants_1.YIELD_POOLS_API, constants_1.YIELD_CONFIG_API, constants_1.YIELD_URL_API, constants_1.YIELD_CHAIN_API])];
                case 1:
                    poolsAndConfig = _u.sent();
                    data = (0, utils_1.formatYieldsPageData)(poolsAndConfig);
                    data.pools = data.pools.map(function (p) {
                        var _a, _b;
                        return (__assign(__assign({}, p), { underlyingTokens: (_a = p.underlyingTokens) !== null && _a !== void 0 ? _a : [], rewardTokens: (_b = p.rewardTokens) !== null && _b !== void 0 ? _b : [] }));
                    });
                    priceChainMapping = {
                        binance: 'bsc',
                        avalanche: 'avax',
                        gnosis: 'xdai'
                    };
                    pricesList = [];
                    _loop_1 = function (p) {
                        var rewardTokens = (_a = p.rewardTokens) === null || _a === void 0 ? void 0 : _a.filter(function (t) { return !!t; });
                        if (rewardTokens) {
                            var priceChainName_1 = p.chain.toLowerCase();
                            priceChainName_1 = Object.keys(priceChainMapping).includes(priceChainName_1)
                                ? priceChainMapping[priceChainName_1]
                                : priceChainName_1;
                            // using coingecko ids for projects on Neo, otherwise empty object
                            pricesList.push(p.chain === 'Neo' ? ["coingecko:".concat(p.project)] : rewardTokens.map(function (t) { return "".concat(priceChainName_1, ":").concat(t.toLowerCase()); }));
                        }
                    };
                    try {
                        for (_c = __values(data.pools), _d = _c.next(); !_d.done; _d = _c.next()) {
                            p = _d.value;
                            _loop_1(p);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_p = _c.return)) _p.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    pricesList = __spreadArray([], __read(new Set(pricesList.flat())), false);
                    maxSize = 150;
                    pages = Math.ceil(pricesList.length / maxSize);
                    pricesA = [];
                    x = '';
                    _u.label = 2;
                case 2:
                    _u.trys.push([2, 7, 8, 9]);
                    _e = __values(__spreadArray([], __read(Array(pages).keys()), false)), _f = _e.next();
                    _u.label = 3;
                case 3:
                    if (!!_f.done) return [3 /*break*/, 6];
                    p = _f.value;
                    x = pricesList.slice(p * maxSize, maxSize * (p + 1)).join(',');
                    _g = [__spreadArray([], __read(pricesA), false)];
                    return [4 /*yield*/, (0, useSWR_1.arrayFetcher)(["https://coins.llama.fi/prices/current/".concat(x)])];
                case 4:
                    pricesA = __spreadArray.apply(void 0, _g.concat([[(_u.sent())[0].coins], false]));
                    _u.label = 5;
                case 5:
                    _f = _e.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _u.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_f && !_f.done && (_q = _e.return)) _q.call(_e);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9:
                    prices = {};
                    try {
                        for (_h = __values(pricesA.flat()), _j = _h.next(); !_j.done; _j = _h.next()) {
                            p = _j.value;
                            prices = __assign(__assign({}, prices), p);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_r = _h.return)) _r.call(_h);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    _loop_2 = function (p) {
                        var priceChainName = p.chain.toLowerCase();
                        var rewardTokens = (_b = p.rewardTokens) === null || _b === void 0 ? void 0 : _b.filter(function (t) { return !!t; });
                        priceChainName = Object.keys(priceChainMapping).includes(priceChainName)
                            ? priceChainMapping[priceChainName]
                            : priceChainName;
                        p['rewardTokensSymbols'] =
                            p.chain === 'Neo'
                                ? __spreadArray([], __read(new Set(rewardTokens.map(function (t) {
                                    return t === '0xf0151f528127558851b39c2cd8aa47da7418ab28'
                                        ? 'FLM'
                                        : t === '0x340720c7107ef5721e44ed2ea8e314cce5c130fa'
                                            ? 'NUDES'
                                            : null;
                                }))), false) : __spreadArray([], __read(new Set(rewardTokens.map(function (t) { var _a, _b; return (_b = (_a = prices["".concat(priceChainName, ":").concat(t.toLowerCase())]) === null || _a === void 0 ? void 0 : _a.symbol.toUpperCase()) !== null && _b !== void 0 ? _b : null; }))), false);
                    };
                    try {
                        for (_k = __values(data.pools), _l = _k.next(); !_l.done; _l = _k.next()) {
                            p = _l.value;
                            _loop_2(p);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_l && !_l.done && (_s = _k.return)) _s.call(_k);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    _loop_3 = function (p) {
                        // need to map wrapped chain tokens
                        // eg WAVAX -> AVAX
                        // eg WFTM -> FTM
                        var xy = p.rewardTokensSymbols.map(function (t) {
                            return t === 'WAVAX'
                                ? data.tokenNameMapping['AVAX']
                                : t === 'WFTM'
                                    ? data.tokenNameMapping['FTM']
                                    : t === 'HOP' && p.project === 'hop-protocol'
                                        ? p.projectName
                                        : data.tokenNameMapping[t];
                        });
                        p['rewardTokensNames'] = xy.filter(function (t) { return t; });
                    };
                    try {
                        for (_m = __values(data.pools), _o = _m.next(); !_o.done; _o = _m.next()) {
                            p = _o.value;
                            _loop_3(p);
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_o && !_o.done && (_t = _m.return)) _t.call(_m);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    return [2 /*return*/, {
                            props: data
                        }];
            }
        });
    });
}
exports.getYieldPageData = getYieldPageData;
function getYieldMedianData() {
    return __awaiter(this, void 0, void 0, function () {
        var data, windowSize, apyMedianValues, avg, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, useSWR_1.arrayFetcher)([constants_1.YIELD_MEDIAN_API])];
                case 1:
                    data = (_a.sent())[0];
                    // for the 4th of june we have low nb of datapoints which is skewing the median/
                    // hence why we remove it from the plot
                    data = data.filter(function (p) { return p.timestamp !== '2022-06-04T00:00:00.000Z'; });
                    // add 7day average field
                    data = data
                        .map(function (e) { return (__assign(__assign({}, e), { timestamp: e.timestamp.split('T')[0] })); })
                        .sort(function (a, b) { return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(); });
                    windowSize = 7;
                    apyMedianValues = data.map(function (m) { return m.medianAPY; });
                    avg = [];
                    for (i = 0; i < apyMedianValues.length; i++) {
                        if (i + 1 < windowSize) {
                            avg[i] = null;
                        }
                        else {
                            avg[i] = apyMedianValues.slice(i + 1 - windowSize, i + 1).reduce(function (a, b) { return a + b; }, 0) / windowSize;
                        }
                    }
                    data = data.map(function (m, i) { return (__assign(__assign({}, m), { avg7day: avg[i] })); });
                    return [2 /*return*/, {
                            props: data
                        }];
            }
        });
    });
}
exports.getYieldMedianData = getYieldMedianData;
function getLendBorrowData() {
    return __awaiter(this, void 0, void 0, function () {
        var props, categoriesToKeep, pools, dataBorrow, configIdsCompound, configIdsAave, compoundPools, aavev2Pools, tokenSymbols, cdpPools, projectsList, lendingProtocols, farmProtocols;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getYieldPageData()];
                case 1:
                    props = (_a.sent()).props;
                    // treating fraxlend as cdp category otherwise the output
                    // from optimizer will be wrong (it would use the crossproduct
                    // btw collaterals eg eth -> crv, wbtc -> crv etc. instead of collateral -> frax only)
                    props.pools = props.pools.map(function (p) { return (__assign(__assign({}, p), { category: p.project === 'fraxlend' ? 'CDP' : p.category })); });
                    categoriesToKeep = ['Lending', 'Undercollateralized Lending', 'CDP', 'NFT Lending'];
                    pools = props.pools.filter(function (p) { return categoriesToKeep.includes(p.category); });
                    return [4 /*yield*/, (0, useSWR_1.arrayFetcher)([constants_1.YIELD_LEND_BORROW_API])];
                case 2:
                    dataBorrow = (_a.sent())[0];
                    dataBorrow = dataBorrow.filter(function (p) { return p.ltv <= 1; });
                    configIdsCompound = pools.filter(function (p) { return p.project === 'compound'; }).map(function (p) { return p.pool; });
                    configIdsAave = pools
                        .filter(function (p) { return p.project === 'aave-v2' && p.chain === 'Ethereum' && !p.symbol.toLowerCase().includes('amm'); })
                        .map(function (p) { return p.pool; });
                    compoundPools = dataBorrow.filter(function (p) { return configIdsCompound.includes(p.pool); });
                    aavev2Pools = dataBorrow.filter(function (p) { return configIdsAave.includes(p.pool); });
                    tokenSymbols = new Set();
                    cdpPools = __spreadArray([], __read(new Set(props.pools.filter(function (p) { return p.category === 'CDP'; }).map(function (p) { return p.pool; }))), false);
                    pools = pools
                        .map(function (p) {
                        var x = dataBorrow.find(function (i) { return i.pool === p.pool; });
                        // for some projects we haven't added the new fields yet, dataBorrow will thus be smoler;
                        // hence the check for undefined
                        if (x === undefined)
                            return null;
                        tokenSymbols.add(p.symbol);
                        // we display apyBaseBorrow as a negative value
                        var apyBaseBorrow = x.apyBaseBorrow !== null ? -x.apyBaseBorrow : null;
                        var apyRewardBorrow = x.apyRewardBorrow;
                        var apyBorrow = apyBaseBorrow === null && apyRewardBorrow === null ? null : apyBaseBorrow + apyRewardBorrow;
                        // morpho
                        // (using compound available liquidity if totalSupplyUsd < totalBorrowUsd on morhpo === p2p fully matched
                        // otherwise its negative.
                        // instead we display the compound available pool liq together with a tooltip to clarify this
                        var totalAvailableUsd;
                        if (p.project === 'morpho-compound') {
                            var compoundData = compoundPools.find(function (a) { return a.underlyingTokens[0].toLowerCase() === x.underlyingTokens[0].toLowerCase(); });
                            totalAvailableUsd = (compoundData === null || compoundData === void 0 ? void 0 : compoundData.totalSupplyUsd) - (compoundData === null || compoundData === void 0 ? void 0 : compoundData.totalBorrowUsd);
                        }
                        else if (p.project === 'morpho-aave') {
                            var aaveData = aavev2Pools.find(function (a) { return a.underlyingTokens[0].toLowerCase() === x.underlyingTokens[0].toLowerCase(); });
                            totalAvailableUsd = (aaveData === null || aaveData === void 0 ? void 0 : aaveData.totalSupplyUsd) - (aaveData === null || aaveData === void 0 ? void 0 : aaveData.totalBorrowUsd);
                        }
                        else if (x.totalSupplyUsd === null && x.totalBorrowUsd === null) {
                            totalAvailableUsd = null;
                        }
                        else if (cdpPools.includes(x.pool)) {
                            totalAvailableUsd = x.debtCeilingUsd ? x.debtCeilingUsd - x.totalBorrowUsd : null;
                        }
                        else {
                            totalAvailableUsd = x.totalSupplyUsd - x.totalBorrowUsd;
                        }
                        return __assign(__assign({}, p), { apyBaseBorrow: apyBaseBorrow, apyRewardBorrow: apyRewardBorrow, totalSupplyUsd: x.totalSupplyUsd, totalBorrowUsd: x.totalBorrowUsd, ltv: x.ltv, borrowable: x.borrowable, mintedCoin: x.mintedCoin, borrowFactor: x.borrowFactor, 
                            // note re morpho: they build on top of compound. if the total supply is being used by borrowers
                            // then any excess borrows will be routed via compound pools. so the available liquidity is actually
                            // compounds liquidity. not 100% sure how to present this on the frontend, but for now going to supress
                            // liq values (cause some of them are negative)
                            totalAvailableUsd: totalAvailableUsd, apyBorrow: apyBorrow, rewardTokens: p.apyRewards > 0 || x.apyRewardBorrow > 0 ? x.rewardTokens : p.rewardTokens });
                    })
                        .filter(Boolean)
                        .sort(function (a, b) { return b.totalSupplyUsd - a.totalSupplyUsd; });
                    projectsList = new Set();
                    lendingProtocols = new Set();
                    farmProtocols = new Set();
                    props.pools.forEach(function (pool) {
                        var _a;
                        projectsList.add(pool.projectName);
                        // remove undercollateralised cause we cannot borrow on those
                        if (['Lending', 'CDP', 'NFT Lending'].includes(pool.category)) {
                            lendingProtocols.add(pool.projectName);
                        }
                        farmProtocols.add(pool.projectName);
                        (_a = pool.rewardTokensNames) === null || _a === void 0 ? void 0 : _a.forEach(function (rewardName) {
                            projectsList.add(rewardName);
                            farmProtocols.add(rewardName);
                        });
                    });
                    return [2 /*return*/, {
                            props: {
                                pools: pools,
                                chainList: __spreadArray([], __read(new Set(pools.map(function (p) { return p.chain; }))), false),
                                projectList: Array.from(projectsList),
                                lendingProtocols: Array.from(lendingProtocols),
                                farmProtocols: Array.from(farmProtocols),
                                categoryList: categoriesToKeep,
                                tokenNameMapping: props.tokenNameMapping,
                                allPools: props.pools,
                                symbols: __spreadArray([], __read(tokenSymbols), false)
                            }
                        }];
            }
        });
    });
}
exports.getLendBorrowData = getLendBorrowData;
function calculateLoopAPY(lendBorrowPools, loops, customLTV) {
    if (loops === void 0) { loops = 10; }
    var pools = lendBorrowPools.filter(function (p) { return p.ltv > 0; });
    pools = pools.map(function (p) { return (__assign(__assign({}, p), { ltv: p.project === 'euler' ? p.ltv * p.borrowFactor : p.ltv })); });
    return pools
        .map(function (p) {
        var e_6, _a;
        var deposit_apy = (p.apyBase + p.apyReward) / 100;
        // apyBaseBorrow already set to - in getLendBorrowData
        var borrow_apy = (p.apyBaseBorrow + p.apyRewardBorrow) / 100;
        var total_borrowed = 0;
        var ltv = customLTV ? (customLTV / 100) * p.ltv : p.ltv;
        try {
            for (var _b = __values(__spreadArray([], __read(Array(loops).keys()), false)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                total_borrowed += Math.pow(ltv, (i + 1));
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        var loopApy = ((total_borrowed + 1) * deposit_apy + total_borrowed * borrow_apy) * 100;
        var boost = loopApy / (p.apyBase + p.apyReward);
        if (boost > 1 && Number.isFinite(boost)) {
            return __assign(__assign({}, p), { loopApy: loopApy, boost: boost });
        }
        else
            return null;
    })
        .filter(Boolean)
        .sort(function (a, b) { return b.loopApy - a.loopApy; });
}
exports.calculateLoopAPY = calculateLoopAPY;
function getPerpData() {
    return __awaiter(this, void 0, void 0, function () {
        var perps;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, useSWR_1.arrayFetcher)([constants_1.YIELD_PERPS_API])];
                case 1:
                    perps = (_a.sent())[0];
                    return [2 /*return*/, perps.data.map(function (m) { return (__assign(__assign({}, m), { symbol: m.baseAsset })); })];
            }
        });
    });
}
exports.getPerpData = getPerpData;
