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
Object.defineProperty(exports, "__esModule", { value: true });
exports.earlyExit = exports.disclaimer = exports.badDebt = exports.lockupsCollateral = exports.lockupsRewards = exports.filterPool = exports.findStrategyPoolsFR = exports.formatOptimizerPool = exports.findStrategyPools = exports.findOptimizerPools = exports.toFilterPool = void 0;
var Filters_1 = require("../../components/Filters");
var index_1 = require("../../api/categories/yield/index");
function toFilterPool(_a) {
    var curr = _a.curr, selectedProjects = _a.selectedProjects, selectedChains = _a.selectedChains, selectedAttributes = _a.selectedAttributes, includeTokens = _a.includeTokens, excludeTokens = _a.excludeTokens, selectedCategories = _a.selectedCategories, pathname = _a.pathname, minTvl = _a.minTvl, maxTvl = _a.maxTvl, minApy = _a.minApy, maxApy = _a.maxApy;
    var toFilter = true;
    // used in pages like /yields/stablecoins to filter some pools by default
    Filters_1.attributeOptions.forEach(function (option) {
        // check if this page has default attribute filter function
        if (option.defaultFilterFnOnPage[pathname]) {
            // apply default attribute filter function
            toFilter = toFilter && option.defaultFilterFnOnPage[pathname](curr);
        }
    });
    selectedAttributes.forEach(function (attribute) {
        var attributeOption = Filters_1.attributeOptions.find(function (o) { return o.key === attribute; });
        if (attributeOption) {
            toFilter = toFilter && attributeOption.filterFn(curr);
        }
    });
    toFilter = toFilter && (selectedProjects === null || selectedProjects === void 0 ? void 0 : selectedProjects.map(function (p) { return p.toLowerCase(); }).includes(curr.project.toLowerCase()));
    toFilter = toFilter && (selectedCategories === null || selectedCategories === void 0 ? void 0 : selectedCategories.map(function (p) { return p.toLowerCase(); }).includes(curr.category.toLowerCase()));
    var tokensInPool = curr.symbol
        .split('(')[0]
        .split('-')
        .map(function (x) { return x.toLowerCase(); });
    var includeToken = includeTokens.length > 0 && includeTokens[0] !== 'All'
        ? includeTokens
            .map(function (t) { return t.toLowerCase(); })
            .find(function (token) {
            if (tokensInPool.some(function (x) { return x.includes(token.toLowerCase()); })) {
                return true;
            }
            else if (token === 'eth') {
                return tokensInPool.find(function (x) { return x.includes('weth') && x.includes(token); });
            }
            else
                return false;
        })
        : true;
    var excludeToken = !excludeTokens
        .map(function (t) { return t.toLowerCase(); })
        .find(function (token) { return tokensInPool.includes(token.toLowerCase()); });
    toFilter =
        toFilter &&
            selectedChains.map(function (t) { return t.toLowerCase(); }).includes(curr.chain.toLowerCase()) &&
            includeToken &&
            excludeToken;
    var isValidTvlRange = (minTvl !== undefined && !Number.isNaN(Number(minTvl))) || (maxTvl !== undefined && !Number.isNaN(Number(maxTvl)));
    var isValidApyRange = (minApy !== undefined && !Number.isNaN(Number(minApy))) || (maxApy !== undefined && !Number.isNaN(Number(maxApy)));
    if (isValidTvlRange) {
        toFilter = toFilter && (minTvl ? curr.tvlUsd > minTvl : true) && (maxTvl ? curr.tvlUsd < maxTvl : true);
    }
    if (isValidApyRange) {
        toFilter = toFilter && (minApy ? curr.apy > minApy : true) && (maxApy ? curr.apy < maxApy : true);
    }
    return toFilter;
}
exports.toFilterPool = toFilterPool;
var findOptimizerPools = function (pools, tokenToLend, tokenToBorrow, cdpRoutes) {
    var availableToLend = pools.filter(function (_a) {
        var symbol = _a.symbol, ltv = _a.ltv;
        return (tokenToLend === 'USD_Stables' ? true : symbol.includes(tokenToLend)) && ltv > 0 && !symbol.includes('AMM');
    });
    var availableProjects = availableToLend.map(function (_a) {
        var project = _a.project;
        return project;
    });
    var availableChains = availableToLend.map(function (_a) {
        var chain = _a.chain;
        return chain;
    });
    var lendBorrowPairs = pools.reduce(function (acc, pool) {
        if (!availableProjects.includes(pool.project) ||
            !availableChains.includes(pool.chain) ||
            (tokenToBorrow === 'USD_Stables' ? false : !pool.symbol.includes(tokenToBorrow)) ||
            pool.symbol.includes('AMM') ||
            pool.borrowable === false ||
            (pool.project === 'liqee' && (tokenToLend === 'RETH' || tokenToBorrow === 'RETH')))
            return acc;
        if (tokenToBorrow === 'USD_Stables' && !pool.stablecoin)
            return acc;
        var collatteralPools = availableToLend.filter(function (collateralPool) {
            return collateralPool.chain === pool.chain &&
                collateralPool.project === pool.project &&
                ((tokenToLend === 'STETH' && tokenToBorrow === 'ETH') || !collateralPool.symbol.includes(tokenToBorrow)) &&
                collateralPool.pool !== pool.pool &&
                (pool.project === 'solend' ? collateralPool.poolMeta === pool.poolMeta : true) &&
                (tokenToLend === 'USD_Stables' ? collateralPool.stablecoin : true) &&
                (pool.project === 'compound-v3' ? pool.symbol === 'USDC' : true);
        });
        var poolsPairs = collatteralPools.map(function (collatteralPool) { return (__assign(__assign({}, collatteralPool), { chains: [collatteralPool.chain], borrow: pool, ltv: collatteralPool.project === 'euler' ? collatteralPool.ltv * pool.borrowFactor : collatteralPool.ltv })); });
        return acc.concat(poolsPairs);
    }, []);
    // add cdp pairs
    var cdpPairs = tokenToLend && tokenToBorrow
        ? cdpRoutes.filter(function (p) {
            return (tokenToLend === 'USD_Stables' ? p.stablecoin : removeMetaTag(p.symbol).includes(tokenToLend)) &&
                // tokenToBorrow in the context of cdps -> minted stablecoin -> always true
                (tokenToBorrow === 'USD_Stables' ? true : removeMetaTag(p.borrow.symbol).includes(tokenToBorrow));
        })
        : [];
    return lendBorrowPairs.concat(cdpPairs);
};
exports.findOptimizerPools = findOptimizerPools;
var removeMetaTag = function (symbol) { return symbol.replace(/ *\([^)]*\) */g, ''); };
var findStrategyPools = function (pools, tokenToLend, tokenToBorrow, allPools, cdpRoutes, customLTV) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
    // prepare leveraged lending (loop) pools
    var loopPools = (0, index_1.calculateLoopAPY)(pools, 10, customLTV);
    var availableToLend = pools.filter(function (_a) {
        var symbol = _a.symbol, ltv = _a.ltv;
        return (tokenToLend === 'USD_Stables' ? true : removeMetaTag(symbol).includes(tokenToLend)) &&
            ltv > 0 &&
            !removeMetaTag(symbol).includes('AMM');
    });
    var availableProjects = availableToLend.map(function (_a) {
        var project = _a.project;
        return project;
    });
    var availableChains = availableToLend.map(function (_a) {
        var chain = _a.chain;
        return chain;
    });
    // lendBorrowPairs is the same as in the optimizer, only difference is the optional filter on tokenToBorrow
    var lendBorrowPairs = pools.reduce(function (acc, pool) {
        if (!availableProjects.includes(pool.project) ||
            !availableChains.includes(pool.chain) ||
            (tokenToBorrow === 'USD_Stables' ? false : !removeMetaTag(pool.symbol).includes(tokenToBorrow)) ||
            removeMetaTag(pool.symbol).includes('AMM') ||
            pool.apyBorrow === null ||
            // remove any pools where token is not borrowable
            pool.borrowable === false)
            return acc;
        if (tokenToBorrow === 'USD_Stables' && !pool.stablecoin)
            return acc;
        var collatteralPools = availableToLend.filter(function (collateralPool) {
            return collateralPool.chain === pool.chain &&
                collateralPool.project === pool.project &&
                (tokenToBorrow ? !removeMetaTag(collateralPool.symbol).includes(tokenToBorrow) : true) &&
                collateralPool.pool !== pool.pool &&
                (pool.project === 'solend' ? collateralPool.poolMeta === pool.poolMeta : true) &&
                (tokenToLend === 'USD_Stables' ? collateralPool.stablecoin : true) &&
                (pool.project === 'compound-v3' ? removeMetaTag(pool.symbol) === 'USDC' : true);
        });
        var poolsPairs = collatteralPools.map(function (collatteralPool) { return (__assign(__assign({}, collatteralPool), { chains: [collatteralPool.chain], borrow: pool, ltv: collatteralPool.project === 'euler' ? collatteralPool.ltv * pool.borrowFactor : collatteralPool.ltv })); });
        return acc.concat(poolsPairs);
    }, []);
    // add cdp pairs
    var cdpPairs = [];
    if (tokenToLend) {
        cdpPairs = cdpRoutes.filter(function (p) { return removeMetaTag(p.symbol).includes(tokenToLend); });
    }
    if (tokenToBorrow) {
        cdpPairs = cdpPairs.filter(function (p) { return removeMetaTag(p.borrow.symbol).includes(tokenToBorrow); });
    }
    lendBorrowPairs = lendBorrowPairs.concat(cdpPairs);
    var finalPools = [];
    // if borrow token is specified
    if (tokenToBorrow) {
        // filter to suitable farm strategies
        var farmPools = allPools.filter(function (i) {
            return tokenToBorrow === 'USD_Stables' ? i.stablecoin : removeMetaTag(i.symbol).includes(tokenToBorrow);
        });
        try {
            for (var lendBorrowPairs_1 = __values(lendBorrowPairs), lendBorrowPairs_1_1 = lendBorrowPairs_1.next(); !lendBorrowPairs_1_1.done; lendBorrowPairs_1_1 = lendBorrowPairs_1.next()) {
                var p = lendBorrowPairs_1_1.value;
                try {
                    for (var farmPools_1 = (e_2 = void 0, __values(farmPools)), farmPools_1_1 = farmPools_1.next(); !farmPools_1_1.done; farmPools_1_1 = farmPools_1.next()) {
                        var i = farmPools_1_1.value;
                        // we ignore strategies not on the same chain
                        if (p.chain !== i.chain)
                            continue;
                        // we ignore strategies where the farm symbol doesn't include tokenToBorrow
                        // (special case of USD_Stables selector for which we need to check if the pool is a stablecoin
                        // and also if the subset matches (eg if debt token = DAI -> should not be matched against a USDC farm)
                        if (tokenToBorrow === 'USD_Stables'
                            ? !i.stablecoin || !removeMetaTag(i.symbol).includes(removeMetaTag(p.borrow.symbol).toUpperCase())
                            : !removeMetaTag(i.symbol).includes(tokenToBorrow))
                            continue;
                        finalPools.push(__assign(__assign({}, p), { farmPool: i.pool, farmSymbol: i.symbol, farmChain: [i.chain], farmProjectName: i.projectName, farmProject: i.project, farmTvlUsd: i.tvlUsd, farmApy: i.apy, farmApyBase: i.apyBase, farmApyReward: i.apyReward }));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (farmPools_1_1 && !farmPools_1_1.done && (_b = farmPools_1.return)) _b.call(farmPools_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (lendBorrowPairs_1_1 && !lendBorrowPairs_1_1.done && (_a = lendBorrowPairs_1.return)) _a.call(lendBorrowPairs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else {
        try {
            for (var lendBorrowPairs_2 = __values(lendBorrowPairs), lendBorrowPairs_2_1 = lendBorrowPairs_2.next(); !lendBorrowPairs_2_1.done; lendBorrowPairs_2_1 = lendBorrowPairs_2.next()) {
                var p = lendBorrowPairs_2_1.value;
                try {
                    for (var allPools_1 = (e_4 = void 0, __values(allPools)), allPools_1_1 = allPools_1.next(); !allPools_1_1.done; allPools_1_1 = allPools_1.next()) {
                        var i = allPools_1_1.value;
                        // we ignore strategies not on the same chain
                        if (p.chain !== i.chain)
                            continue;
                        // ignore pools where farm symbol doesn't include the borrow symbol and vice versa
                        // eg borrow symbol => WAVAX, farm symbol => AVAX (or borrow = AVAX and farm = WAVAX)
                        // (if we'd just look in one way we'd miss some strategies)
                        if (!removeMetaTag(i.symbol).includes(removeMetaTag(p.borrow.symbol).toUpperCase()) &&
                            !removeMetaTag(p.borrow.symbol).toUpperCase().includes(removeMetaTag(i.symbol)))
                            continue;
                        finalPools.push(__assign(__assign({}, p), { farmPool: i.pool, farmSymbol: i.symbol, farmChain: [i.chain], farmProjectName: i.projectName, farmProject: i.project, farmTvlUsd: i.tvlUsd, farmApy: i.apy, farmApyBase: i.apyBase, farmApyReward: i.apyReward }));
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (allPools_1_1 && !allPools_1_1.done && (_d = allPools_1.return)) _d.call(allPools_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (lendBorrowPairs_2_1 && !lendBorrowPairs_2_1.done && (_c = lendBorrowPairs_2.return)) _c.call(lendBorrowPairs_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    // keep looping strategies only if no tokenToBorrow is given or if they both match
    var loopPoolsFiltered = tokenToBorrow !== tokenToLend && tokenToBorrow.length > 0
        ? []
        : loopPools
            .filter(function (p) { return removeMetaTag(p.symbol.toUpperCase()).includes(tokenToLend); })
            .map(function (p) { return (__assign(__assign({}, p), { farmPool: p.pool, borrow: p, chains: [p.chain], farmSymbol: p.symbol, farmChain: [p.chain], farmProjectName: p.projectName, farmProject: p.project, farmTvlUsd: p.tvlUsd, farmApy: p.apy, farmApyBase: p.apyBase, farmApyReward: p.apyReward, strategy: 'loop' })); });
    finalPools = finalPools.concat(loopPoolsFiltered);
    // calc the total strategy apy
    finalPools = finalPools.map(function (p) {
        // apy = apyBase + apyReward on the collateral side
        // apyBorrow = apyBaseBorrow + apyRewardBorrow on the borrow side
        // farmApy = apyBase + apyReward on the farm side
        // either use default LTV or the one given via input field
        var ltv = customLTV ? (customLTV / 100) * p.ltv : p.ltv;
        var totalApy = p.strategy === 'loop' ? p.loopApy : p.apy + p.borrow.apyBorrow * ltv + p.farmApy * ltv;
        return __assign(__assign({}, p), { totalApy: totalApy, delta: totalApy - p.apy });
    });
    // keep pools with :
    // - profitable strategy only (delta > 0)
    // - require at least 1% delta compared to baseline (we could even increase this, otherwise we show lots of
    // strategies which have higher yield compared to just depositing on lending protocol but by
    // a smol amount only, so not really worth the effort)
    // - if deposit token and borrow token are the same, then the farm can't have higher apy then just depositing on the lending protocol
    // (cause in this case the strategy makes no sense, would be better to just got to the farm directly)
    finalPools = finalPools
        .filter(function (p) { return Number.isFinite(p.delta) && p.delta > 1 && !(p.farmSymbol.includes(tokenToLend) && p.totalApy < p.farmApy); })
        .sort(function (a, b) { return b.totalApy - a.totalApy; });
    return finalPools;
};
exports.findStrategyPools = findStrategyPools;
var formatOptimizerPool = function (pool, customLTV) {
    var ltv = customLTV ? customLTV / 100 : pool.ltv;
    var lendingReward = (pool.apyBase || 0) + (pool.apyReward || 0);
    var borrowReward = (pool.borrow.apyBaseBorrow || 0) + (pool.borrow.apyRewardBorrow || 0);
    var totalReward = lendingReward + borrowReward * ltv;
    var borrowAvailableUsd = pool.borrow.totalAvailableUsd;
    return __assign(__assign({}, pool), { lendingReward: lendingReward, borrowReward: borrowReward, totalReward: totalReward, borrowAvailableUsd: borrowAvailableUsd, totalBase: (pool.apyBase || 0) + (pool.borrow.apyBaseBorrow || 0) * ltv, lendingBase: pool.apyBase || 0, borrowBase: pool.borrow.apyBaseBorrow || 0 });
};
exports.formatOptimizerPool = formatOptimizerPool;
var findStrategyPoolsFR = function (token, filteredPools, perps) {
    var e_5, _a, e_6, _b;
    var tokensToInclude = token === null || token === void 0 ? void 0 : token.token;
    tokensToInclude = typeof tokensToInclude === 'string' ? [tokensToInclude] : tokensToInclude;
    var tokensToExclude = token === null || token === void 0 ? void 0 : token.excludeToken;
    tokensToExclude = typeof tokensToExclude === 'string' ? [tokensToExclude] : tokensToExclude;
    // filter pools to selected token
    var pools = filteredPools.filter(function (p) {
        // remove poolMeta from symbol string
        var farmSymbol = p.symbol.replace(/ *\([^)]*\) */g, '');
        return ((tokensToInclude === null || tokensToInclude === void 0 ? void 0 : tokensToInclude.some(function (t) { return farmSymbol.includes(t); })) &&
            !(tokensToExclude === null || tokensToExclude === void 0 ? void 0 : tokensToExclude.some(function (t) { return farmSymbol.includes(t); })) &&
            p.apy > 0);
    });
    // filter FR data to positive funding rates only (longs pay shorts -> open short position and earn FR)
    var perpsData = perps.filter(function (p) { return (tokensToInclude === null || tokensToInclude === void 0 ? void 0 : tokensToInclude.some(function (t) { return t.includes(p.symbol); })) && p.fundingRate > 0 && p.baseAsset !== 'T'; });
    var finalPools = [];
    try {
        for (var pools_1 = __values(pools), pools_1_1 = pools_1.next(); !pools_1_1.done; pools_1_1 = pools_1.next()) {
            var pool = pools_1_1.value;
            try {
                for (var perpsData_1 = (e_6 = void 0, __values(perpsData)), perpsData_1_1 = perpsData_1.next(); !perpsData_1_1.done; perpsData_1_1 = perpsData_1.next()) {
                    var perp = perpsData_1_1.value;
                    var fr8hPrevious = Number(perp.fundingRatePrevious) * 100;
                    var frCurrent = Number(perp.fundingRate) * 100;
                    var afr = fr8hPrevious * 3 * 365;
                    var afr7d = Number(perp.fundingRate7dSum) * 100 * 52;
                    var afr30d = Number(perp.fundingRate30dSum) * 100 * 12;
                    finalPools.push(__assign(__assign({}, pool), { symbolPerp: perp.market, fr8hCurrent: frCurrent.toFixed(3), fr8hPrevious: fr8hPrevious.toFixed(3), frDay: frCurrent * 3, frWeek: frCurrent * 3 * 7, frMonth: frCurrent * 3 * 30, frYear: frCurrent * 3 * 365, poolReturn8h: pool.apy / 365 / 3, poolReturnDay: pool.apy / 365, poolReturnWeek: pool.apy / 52, poolReturnMonth: pool.apy / 12, strategyReturn: pool.apy / 365 + frCurrent * 3, afr: afr, afr7d: afr7d, afr30d: afr30d, strategyAPY: pool.apy + afr, openInterest: Number(perp.openInterest), indexPrice: perp.indexPrice, chains: [pool.chain], farmTvlUsd: pool.tvlUsd, marketplace: perp.marketplace, fundingRate7dAverage: (perp.fundingRate7dAverage * 100).toFixed(3), fundingRate7dSum: (perp.fundingRate7dSum * 100).toFixed(3), fundingRate30dAverage: (perp.fundingRate30dAverage * 100).toFixed(3), fundingRate30dSum: (perp.fundingRate30dSum * 100).toFixed(3) }));
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (perpsData_1_1 && !perpsData_1_1.done && (_b = perpsData_1.return)) _b.call(perpsData_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (pools_1_1 && !pools_1_1.done && (_a = pools_1.return)) _a.call(pools_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return finalPools;
};
exports.findStrategyPoolsFR = findStrategyPoolsFR;
var filterPool = function (_a) {
    var pool = _a.pool, selectedChains = _a.selectedChains, selectedAttributes = _a.selectedAttributes, selectedLendingProtocols = _a.selectedLendingProtocols, selectedFarmProtocols = _a.selectedFarmProtocols, minTvl = _a.minTvl, maxTvl = _a.maxTvl, minAvailable = _a.minAvailable, maxAvailable = _a.maxAvailable, customLTV = _a.customLTV, strategyPage = _a.strategyPage;
    var toFilter = true;
    toFilter = toFilter && selectedChains.map(function (chain) { return chain.toLowerCase(); }).includes(pool.chain.toLowerCase());
    // stratey page filters
    if (selectedLendingProtocols) {
        toFilter = toFilter && selectedLendingProtocols.map(function (project) { return project.toLowerCase(); }).includes(pool.project);
    }
    if (selectedFarmProtocols) {
        toFilter = toFilter && selectedFarmProtocols.map(function (project) { return project.toLowerCase(); }).includes(pool.farmProject);
    }
    if (selectedAttributes) {
        selectedAttributes.forEach(function (attribute) {
            var attributeOption = Filters_1.attributeOptions.find(function (o) { return o.key === attribute; });
            if (attributeOption) {
                toFilter = toFilter && attributeOption.filterFn(pool);
            }
        });
    }
    var isValidTvlRange = (minTvl !== undefined && !Number.isNaN(Number(minTvl))) || (maxTvl !== undefined && !Number.isNaN(Number(maxTvl)));
    if (isValidTvlRange) {
        toFilter = toFilter && (minTvl ? pool.farmTvlUsd > minTvl : true) && (maxTvl ? pool.tvlUsd < maxTvl : true);
    }
    var isValidAvailableRange = (minAvailable !== undefined && !Number.isNaN(Number(minAvailable))) ||
        (maxAvailable !== undefined && !Number.isNaN(Number(maxAvailable)));
    if (isValidAvailableRange) {
        toFilter =
            toFilter &&
                (minAvailable ? pool.borrow.totalAvailableUsd > minAvailable : true) &&
                (maxAvailable ? pool.borrow.totalAvailableUsd < maxAvailable : true);
    }
    var isValidLtvValue = customLTV !== undefined && !Number.isNaN(Number(customLTV));
    if (isValidLtvValue && strategyPage) {
        toFilter = toFilter && (customLTV ? Number(customLTV) > 0 && Number(customLTV) <= 100 : true);
    }
    // on optimizer the filter includes a check against customLTV
    if (isValidLtvValue && !strategyPage) {
        toFilter =
            toFilter &&
                (customLTV ? Number(customLTV) > 0 && Number(customLTV) < 100 && Number(customLTV) / 100 <= pool.ltv : true);
    }
    return toFilter;
};
exports.filterPool = filterPool;
exports.lockupsRewards = ['Geist Finance', 'Radiant', 'Valas Finance', 'UwU Lend'];
exports.lockupsCollateral = [
    'Ribbon',
    'TrueFi',
    'Maple',
    'Clearpool',
    'Centrifuge',
    'UniCrypt',
    'Osmosis',
    'HedgeFarm',
    'BarnBridge',
    'WOOFi',
    'Kokoa Finance',
    'Lyra',
    'Arbor Finance',
    'Sommelier'
];
exports.badDebt = ['moonwell-apollo', 'inverse-finance', 'venus', 'iron-bank'];
exports.disclaimer = 'DefiLlama doesnt audit nor endorse any of the protocols listed, we just focus on providing accurate data. Ape at your own risk';
exports.earlyExit = 'Rewards are calculated assuming an early exit penalty applies. So this is the minimum APY you can expect when claiming your rewards early.';
