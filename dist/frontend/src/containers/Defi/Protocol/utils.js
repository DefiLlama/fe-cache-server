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
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRaisedAmount = exports.formatRaise = exports.buildProtocolAddlChartsData = exports.formatTvlsByChain = void 0;
var formatTvlsByChain = function (_a) {
    var _b;
    var historicalChainTvls = _a.historicalChainTvls, extraTvlsEnabled = _a.extraTvlsEnabled;
    var tvlDictionary = {};
    var _loop_1 = function (section) {
        var sectionName = section;
        var name_1 = section.toLowerCase();
        var toSumSection = false;
        // sum keys like ethereum-staking, arbitrum-vesting only if chain is present
        if (name_1.includes('-')) {
            var formattedName = name_1.split('-');
            if (extraTvlsEnabled[formattedName[1]]) {
                toSumSection = true;
                sectionName = section.split('-').slice(0, -1).join('-');
            }
        }
        else {
            // sum key with staking, ethereum, arbitrum etc but ethereum-staking, arbitrum-vesting
            if (!Object.keys(extraTvlsEnabled).includes(name_1)) {
                toSumSection = true;
            }
        }
        if (toSumSection) {
            (_b = historicalChainTvls[section].tvl) === null || _b === void 0 ? void 0 : _b.forEach(function (_a) {
                var _b, _c;
                var date = _a.date, totalLiquidityUSD = _a.totalLiquidityUSD;
                if (!tvlDictionary[date]) {
                    tvlDictionary[date] = (_b = {}, _b[sectionName] = 0, _b);
                }
                tvlDictionary[date] = __assign(__assign({}, tvlDictionary[date]), (_c = {}, _c[sectionName] = (tvlDictionary[date][sectionName] || 0) + totalLiquidityUSD, _c));
            });
        }
    };
    for (var section in historicalChainTvls) {
        _loop_1(section);
    }
    return Object.entries(tvlDictionary).map(function (_a) {
        var _b = __read(_a, 2), date = _b[0], values = _b[1];
        return (__assign(__assign({}, values), { date: Number(date) }));
    });
};
exports.formatTvlsByChain = formatTvlsByChain;
// build unique tokens based on top 10 tokens in usd value on each day
function getUniqueTokens(_a) {
    var _b;
    var chainTvls = _a.chainTvls, extraTvlsEnabled = _a.extraTvlsEnabled;
    var tokenSet = new Set();
    var othersCategoryExist = false;
    for (var section in chainTvls) {
        var name_2 = section.toLowerCase();
        // skip sum of keys like ethereum-staking, arbitrum-vesting
        if (!name_2.includes('-')) {
            // sum key with staking, ethereum, arbitrum etc
            if (Object.keys(extraTvlsEnabled).includes(name_2) ? extraTvlsEnabled[name_2] : true) {
                (_b = chainTvls[section].tokensInUsd) === null || _b === void 0 ? void 0 : _b.forEach(function (dayTokens) {
                    // filters tokens that have no name or their value is near zero and pick top 10 tokens from the list
                    var topTokens = Object.entries(dayTokens.tokens)
                        .filter(function (t) { return !(t[0].startsWith('UNKNOWN') && t[1] < 1); })
                        .sort(function (a, b) { return b[1] - a[1]; });
                    if (topTokens.length > 10) {
                        othersCategoryExist = true;
                    }
                    topTokens.slice(0, 11).forEach(function (_a) {
                        var _b = __read(_a, 1), symbol = _b[0];
                        return tokenSet.add(symbol);
                    });
                });
                // if 'others' exist, add it to the end of unique token list
                if (othersCategoryExist) {
                    tokenSet.add('Others');
                }
            }
        }
    }
    return Array.from(tokenSet);
}
function buildInflows(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var chainTvls = _a.chainTvls, extraTvlsEnabled = _a.extraTvlsEnabled, tokensUnique = _a.tokensUnique, datesToDelete = _a.datesToDelete;
    var usdInflows = {};
    var tokenInflows = {};
    var zeroUsdInfows = 0;
    var zeroTokenInfows = 0;
    for (var section in chainTvls) {
        var name_3 = section.toLowerCase();
        // skip sum of keys like ethereum-staking, arbitrum-vesting
        if (!name_3.includes('-')) {
            // sum key with staking, ethereum, arbitrum etc
            if (Object.keys(extraTvlsEnabled).includes(name_3) ? extraTvlsEnabled[name_3] : true) {
                var tokensInUsd = Object.fromEntries((_d = (_c = (_b = chainTvls[section]) === null || _b === void 0 ? void 0 : _b.tokensInUsd) === null || _c === void 0 ? void 0 : _c.map(function (_a) {
                    var date = _a.date, tokens = _a.tokens;
                    return [date, tokens];
                })) !== null && _d !== void 0 ? _d : []);
                var tokens = Object.fromEntries((_g = (_f = (_e = chainTvls[section]) === null || _e === void 0 ? void 0 : _e.tokens) === null || _f === void 0 ? void 0 : _f.map(function (_a) {
                    var date = _a.date, tokens = _a.tokens;
                    return [date, tokens];
                })) !== null && _g !== void 0 ? _g : []);
                var prevDate = null;
                for (var date in tokensInUsd) {
                    var dayDifference = 0;
                    var tokenDayDifference = {};
                    for (var token in tokensInUsd[date]) {
                        var price = ((_h = tokens[date]) === null || _h === void 0 ? void 0 : _h[token])
                            ? Number((tokensInUsd[date][token] / tokens[date][token]).toFixed(4))
                            : null;
                        var diff = ((_j = tokens[date]) === null || _j === void 0 ? void 0 : _j[token]) && prevDate && ((_k = tokens[prevDate]) === null || _k === void 0 ? void 0 : _k[token])
                            ? tokens[date][token] - tokens[prevDate][token]
                            : null;
                        var diffUsd = price && diff ? price * diff : null;
                        if (diffUsd && !Number.isNaN(diffUsd) && isFinite(price)) {
                            // Show only top 10 inflow tokens of the day, add remaining inlfows under "Others" category
                            if (tokensUnique.includes(token)) {
                                tokenDayDifference[token] = (tokenDayDifference[token] || 0) + diffUsd;
                            }
                            else {
                                tokenDayDifference['Others'] = (tokenDayDifference['Others'] || 0) + diffUsd;
                            }
                            dayDifference += diffUsd;
                        }
                    }
                    if (dayDifference === 0) {
                        zeroUsdInfows++;
                    }
                    if (((_l = Object.keys(tokenDayDifference)) === null || _l === void 0 ? void 0 : _l.length) === 0) {
                        zeroTokenInfows++;
                    }
                    usdInflows[date] = (usdInflows[date] || 0) + dayDifference;
                    if (!tokenInflows[date]) {
                        tokenInflows[date] = { date: date };
                    }
                    for (var token in tokenInflows[date]) {
                        if (token !== 'date') {
                            tokenDayDifference[token] = (tokenDayDifference[token] || 0) + tokenInflows[date][token];
                        }
                    }
                    tokenInflows[date] = __assign(__assign({}, tokenInflows[date]), tokenDayDifference);
                    prevDate = date;
                }
            }
        }
    }
    datesToDelete.forEach(function (date) {
        delete usdInflows[date];
        delete tokenInflows[date];
    });
    var usdFlows = Object.entries(usdInflows);
    var tokenFlows = Object.values(tokenInflows);
    return {
        usdInflows: (zeroUsdInfows === usdFlows.length ? null : usdFlows),
        tokenInflows: zeroTokenInfows === tokenFlows.length ? null : tokenFlows
    };
}
function storeTokensBreakdown(_a) {
    var date = _a.date, tokens = _a.tokens, tokensUnique = _a.tokensUnique, directory = _a.directory;
    // filters tokens that have no name or their value is near zero
    var tokensOfTheDay = Object.entries(tokens).filter(function (t) { return !(t[0].startsWith('UNKNOWN') && t[1] < 1); });
    var tokensToShow = [];
    var remainingTokensSum = 0;
    // split tokens of the day into tokens present in top 10 tokens list and add tvl of remaining tokens into category named 'Others'
    tokensOfTheDay.forEach(function (token) {
        if (tokensUnique.includes(token[0])) {
            tokensToShow.push(token);
        }
        else {
            remainingTokensSum += token[1];
        }
    });
    // add "Others" to tokens list
    if (tokensUnique.includes('Others') && remainingTokensSum > 0) {
        tokensToShow.push(['Others', remainingTokensSum]);
    }
    if (!directory[date]) {
        directory[date] = { date: date };
    }
    var sumOfAllTokensInThisDate = Object.fromEntries(tokensToShow);
    for (var token in directory[date]) {
        if (token !== 'date') {
            sumOfAllTokensInThisDate[token] = (sumOfAllTokensInThisDate[token] || 0) + directory[date][token];
        }
    }
    directory[date] = __assign(__assign({}, directory[date]), sumOfAllTokensInThisDate);
}
function buildTokensBreakdown(_a) {
    var _b, _c;
    var chainTvls = _a.chainTvls, extraTvlsEnabled = _a.extraTvlsEnabled, tokensUnique = _a.tokensUnique;
    var tokensInUsd = {};
    var rawTokens = {};
    for (var section in chainTvls) {
        var name_4 = section.toLowerCase();
        // skip sum of keys like ethereum-staking, arbitrum-vesting
        if (!name_4.includes('-')) {
            // sum key with staking, ethereum, arbitrum etc
            if (Object.keys(extraTvlsEnabled).includes(name_4) ? extraTvlsEnabled[name_4] : true) {
                (_b = chainTvls[section].tokensInUsd) === null || _b === void 0 ? void 0 : _b.forEach(function (_a) {
                    var date = _a.date, tokens = _a.tokens;
                    storeTokensBreakdown({ date: date, tokens: tokens, tokensUnique: tokensUnique, directory: tokensInUsd });
                });
                (_c = chainTvls[section].tokens) === null || _c === void 0 ? void 0 : _c.forEach(function (_a) {
                    var date = _a.date, tokens = _a.tokens;
                    storeTokensBreakdown({ date: date, tokens: tokens, tokensUnique: tokensUnique, directory: rawTokens });
                });
            }
        }
    }
    var tokenBreakdownUSD = Object.values(tokensInUsd);
    var tokenBreakdownPieChart = tokenBreakdownUSD.length > 0
        ? Object.entries(tokenBreakdownUSD[tokenBreakdownUSD.length - 1])
            .filter(function (values) { return values[0] !== 'date'; })
            .map(function (_a) {
            var _b = __read(_a, 2), name = _b[0], value = _b[1];
            return ({ name: name, value: value });
        })
            .sort(function (a, b) { return b.value - a.value; })
        : [];
    var pieChartData = [];
    var othersDataInPieChart = 0;
    tokenBreakdownPieChart.forEach(function (token, index) {
        if (index < 15 && token.name !== 'Others') {
            pieChartData.push(token);
        }
        else {
            othersDataInPieChart += token.value;
        }
    });
    if (othersDataInPieChart) {
        pieChartData.push({ name: 'Others', value: othersDataInPieChart });
    }
    return { tokenBreakdownUSD: tokenBreakdownUSD, tokenBreakdownPieChart: pieChartData, tokenBreakdown: Object.values(rawTokens) };
}
var buildProtocolAddlChartsData = function (_a) {
    var protocolData = _a.protocolData, extraTvlsEnabled = _a.extraTvlsEnabled;
    if (protocolData) {
        var tokensInUsdExsists_1 = false;
        var tokensExists_1 = false;
        Object.values(protocolData.chainTvls).forEach(function (chain) {
            if (!tokensInUsdExsists_1 && chain.tokensInUsd) {
                tokensInUsdExsists_1 = true;
            }
            if (!tokensExists_1 && chain.tokens) {
                tokensExists_1 = true;
            }
        });
        if (!protocolData.misrepresentedTokens && tokensInUsdExsists_1 && tokensExists_1) {
            var tokensUnique = getUniqueTokens({ chainTvls: protocolData.chainTvls, extraTvlsEnabled: extraTvlsEnabled });
            var _b = buildTokensBreakdown({
                chainTvls: protocolData.chainTvls,
                extraTvlsEnabled: extraTvlsEnabled,
                tokensUnique: tokensUnique
            }), tokenBreakdownUSD = _b.tokenBreakdownUSD, tokenBreakdownPieChart = _b.tokenBreakdownPieChart, tokenBreakdown = _b.tokenBreakdown;
            var _c = buildInflows({
                chainTvls: protocolData.chainTvls,
                extraTvlsEnabled: extraTvlsEnabled,
                tokensUnique: tokensUnique,
                datesToDelete: protocolData.name === 'Binance CEX' ? [1681430400, 1681516800] : []
            }), usdInflows = _c.usdInflows, tokenInflows = _c.tokenInflows;
            return {
                tokensUnique: tokensUnique,
                tokenBreakdownUSD: tokenBreakdownUSD,
                tokenBreakdownPieChart: tokenBreakdownPieChart,
                tokenBreakdown: tokenBreakdown,
                usdInflows: usdInflows,
                tokenInflows: tokenInflows
            };
        }
        return {};
    }
    return {};
};
exports.buildProtocolAddlChartsData = buildProtocolAddlChartsData;
var formatRaise = function (raise) {
    var text = '';
    if (raise.round) {
        text += " ".concat(raise.round);
    }
    if (raise.round && raise.amount) {
        text += ' -';
    }
    if (raise.amount) {
        text += " Raised $".concat((0, exports.formatRaisedAmount)(Number(raise.amount)));
    }
    if (raise.valuation && Number(raise.valuation)) {
        text += " at $".concat((0, exports.formatRaisedAmount)(Number(raise.valuation)), " valuation");
    }
    return text;
};
exports.formatRaise = formatRaise;
var formatRaisedAmount = function (n) {
    if (n >= 1e3) {
        return "".concat((n / 1e3).toLocaleString(undefined, { maximumFractionDigits: 2 }), "b");
    }
    return "".concat(n.toLocaleString(undefined, { maximumFractionDigits: 2 }), "m");
};
exports.formatRaisedAmount = formatRaisedAmount;
