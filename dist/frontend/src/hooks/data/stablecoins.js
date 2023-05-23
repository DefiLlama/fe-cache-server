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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.useFormatStablecoinQueryParams = exports.useBuildPeggedChartData = exports.useGroupBridgeData = exports.useGroupChainsPegged = exports.useCalcGroupExtraPeggedByDay = exports.useCalcCirculating = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var router_1 = require("next/router");
var utils_1 = require("../../utils");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var utils_2 = require("../../utils");
var useCalcCirculating = function (filteredPeggedAssets) {
    var _a = __read((0, LocalStorage_1.useStablecoinsManager)(), 1), extraPeggedEnabled = _a[0];
    var peggedAssetTotals = (0, react_1.useMemo)(function () {
        var updatedPeggedAssets = filteredPeggedAssets.map(function (_a) {
            var circulating = _a.circulating, unreleased = _a.unreleased, pegType = _a.pegType, pegDeviation = _a.pegDeviation, props = __rest(_a, ["circulating", "unreleased", "pegType", "pegDeviation"]);
            if (extraPeggedEnabled['unreleased'] && unreleased) {
                circulating += unreleased;
            }
            var floatingPeg = false;
            if (pegType === 'peggedVAR') {
                floatingPeg = true;
            }
            var depeggedTwoPercent = false;
            if (2 < Math.abs(pegDeviation)) {
                depeggedTwoPercent = true;
            }
            return __assign({ circulating: circulating, unreleased: unreleased, pegType: pegType, pegDeviation: pegDeviation, depeggedTwoPercent: depeggedTwoPercent, floatingPeg: floatingPeg }, props);
        });
        return updatedPeggedAssets.sort(function (a, b) { return b.mcap - a.mcap; }).filter(function (pegged) { return !pegged.delisted; });
    }, [filteredPeggedAssets, extraPeggedEnabled]);
    return peggedAssetTotals;
};
exports.useCalcCirculating = useCalcCirculating;
// returns circulating by day for a group of tokens
var useCalcGroupExtraPeggedByDay = function (chains) {
    var _a = __read((0, LocalStorage_1.useStablecoinsManager)(), 1), extraPeggedEnabled = _a[0];
    var _b = (0, react_1.useMemo)(function () {
        var daySum = {};
        var data = chains.map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], values = _b[1];
            var circulatings = {};
            var totalDaySum = 0;
            Object.entries(values).forEach(function (_a) {
                var _b = __read(_a, 2), name = _b[0], chainCirculating = _b[1];
                var sum = chainCirculating.circulating;
                totalDaySum += chainCirculating.circulating;
                if (extraPeggedEnabled['unreleased'] && chainCirculating.unreleased) {
                    sum += chainCirculating.unreleased;
                    totalDaySum += chainCirculating.unreleased;
                }
                circulatings[name] = sum;
            });
            daySum[date] = totalDaySum;
            return __assign({ date: date }, circulatings);
        });
        return { data: data, daySum: daySum };
    }, [chains, extraPeggedEnabled]), data = _b.data, daySum = _b.daySum;
    var dataWithExtraPeggedAndDominanceByDay = data.map(function (_a) {
        var date = _a.date, values = __rest(_a, ["date"]);
        var shares = {};
        for (var value in values) {
            shares[value] = (0, utils_1.getDominancePercent)(values[value], daySum[date]);
        }
        return __assign({ date: date }, shares);
    });
    return { data: data, daySum: daySum, dataWithExtraPeggedAndDominanceByDay: dataWithExtraPeggedAndDominanceByDay };
};
exports.useCalcGroupExtraPeggedByDay = useCalcGroupExtraPeggedByDay;
var useGroupChainsPegged = function (chains, groupData) {
    var _a = __read((0, LocalStorage_1.useDefiChainsManager)(), 1), groupsEnabled = _a[0];
    var data = (0, react_1.useMemo)(function () {
        var _a;
        var finalData = {};
        var addedChains = [];
        var _loop_1 = function (parentName) {
            var e_1, _b;
            var mcap = null;
            var unreleased = null;
            var bridgedTo = null;
            var minted = null;
            var dominance = null;
            var mcaptvl = null;
            finalData[parentName] = {};
            var parentData = chains.find(function (item) { return item.name === parentName; });
            if (parentData) {
                mcap = parentData.mcap || null;
                unreleased = parentData.unreleased || null;
                bridgedTo = parentData.bridgedTo || null;
                minted = parentData.minted || null;
                finalData[parentName] = __assign(__assign({}, parentData), { subRows: [parentData] });
                addedChains.push(parentName);
            }
            var addedChildren = false;
            for (var type in groupData[parentName]) {
                if (groupsEnabled[type] === true) {
                    var _loop_2 = function (child) {
                        var childData = chains.find(function (item) { return item.name === child; });
                        var alreadyAdded = ((_a = finalData[parentName].subRows) !== null && _a !== void 0 ? _a : []).find(function (p) { return p.name === child; });
                        if (childData && alreadyAdded === undefined) {
                            mcap += childData.mcap;
                            unreleased += childData.unreleased;
                            bridgedTo += childData.bridgedTo;
                            minted += childData.minted;
                            dominance = null;
                            mcaptvl = null;
                            var subChains = finalData[parentName].subRows || [];
                            finalData[parentName] = __assign(__assign({}, finalData[parentName]), { mcap: mcap, unreleased: unreleased, bridgedTo: bridgedTo, minted: minted, dominance: dominance, mcaptvl: mcaptvl, name: parentName, subRows: __spreadArray(__spreadArray([], __read(subChains), false), [childData], false) });
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
                if (finalData[parentName].mcap === undefined) {
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
        return Object.values(finalData).sort(function (a, b) { return b.mcap - a.mcap; });
    }, [chains, groupData, groupsEnabled]);
    return data;
};
exports.useGroupChainsPegged = useGroupChainsPegged;
var useGroupBridgeData = function (chains, bridgeInfoObject) {
    var data = (0, react_1.useMemo)(function () {
        var e_2, _a;
        var _b, _c, _d, _e;
        var finalData = {};
        try {
            for (var chains_1 = __values(chains), chains_1_1 = chains_1.next(); !chains_1_1.done; chains_1_1 = chains_1.next()) {
                var parent_1 = chains_1_1.value;
                finalData[parent_1.name] = {};
                var parentBridges = parent_1.bridges;
                var percentBridged = parent_1.circulating && parent_1.bridgedAmount && (parent_1.bridgedAmount / parent_1.circulating) * 100.0;
                var percentBridgedtoDisplay = percentBridged < 100 ? percentBridged.toFixed(2) + '%' : '100%';
                if (!parentBridges || Object.keys(parentBridges).length === 0) {
                    finalData[parent_1.name] = __assign(__assign({}, parent_1), { bridgeInfo: {
                            name: '-'
                        } });
                }
                else {
                    var parentBridgeIDsArray = Object.keys(parentBridges);
                    var parentFirstBridgeID = parentBridgeIDsArray[0];
                    var parentFirstBridgeInfo = (_b = bridgeInfoObject[parentFirstBridgeID]) !== null && _b !== void 0 ? _b : { name: 'not-found' };
                    var parentFirstBridgeSourcesArray = Object.keys(parentBridges[parentFirstBridgeID]);
                    if (parentBridgeIDsArray.length === 1 &&
                        parentFirstBridgeSourcesArray.length === 1 &&
                        parent_1.bridgedAmount === parent_1.circulating) {
                        var childData = {};
                        if (parentFirstBridgeInfo.name === 'Natively Issued') {
                            parentFirstBridgeInfo.name = '-';
                            childData = __assign(__assign({}, parent_1), { bridgeInfo: parentFirstBridgeInfo, bridgedAmount: percentBridgedtoDisplay, name: "Natively Issued" });
                        }
                        else {
                            var sourceChain = (_c = parentFirstBridgeSourcesArray[0]) !== null && _c !== void 0 ? _c : 'not-found';
                            childData = __assign(__assign({}, parent_1), { bridgeInfo: parentFirstBridgeInfo, bridgedAmount: percentBridgedtoDisplay, name: "Bridged from ".concat((0, utils_2.capitalizeFirstLetter)(sourceChain)) });
                        }
                        finalData[parent_1.name] = __assign(__assign({}, parent_1), { bridgeInfo: parentFirstBridgeInfo, bridgedAmount: percentBridgedtoDisplay, subRows: [childData] });
                    }
                    else {
                        var totalBridged = 0;
                        for (var bridgeID in parentBridges) {
                            for (var sourceChain in parentBridges[bridgeID]) {
                                totalBridged += (_d = parentBridges[bridgeID][sourceChain].amount) !== null && _d !== void 0 ? _d : 0;
                            }
                        }
                        for (var bridgeID in parentBridges) {
                            for (var sourceChain in parentBridges[bridgeID]) {
                                var bridgeInfo = (_e = bridgeInfoObject[bridgeID]) !== null && _e !== void 0 ? _e : {
                                    name: 'not-found'
                                };
                                var subChains = finalData[parent_1.name].subRows || [];
                                var parentAmountBridged = parentBridges[bridgeID][sourceChain].amount;
                                var percentBridgedBreakdown = parentAmountBridged &&
                                    totalBridged &&
                                    (parentAmountBridged / totalBridged) * (percentBridged > 100 ? 100 : percentBridged);
                                var percentBridgedBreakdownToDisplay = percentBridgedBreakdown < 100 ? percentBridgedBreakdown.toFixed(2) + '%' : '100%';
                                var childData = __assign(__assign({}, parent_1), { name: "Bridged from ".concat((0, utils_2.capitalizeFirstLetter)(sourceChain)), bridgeInfo: bridgeInfo, bridgedAmount: percentBridgedBreakdownToDisplay, circulating: parentAmountBridged, change_1d: null, change_7d: null, change_1m: null });
                                finalData[parent_1.name] = __assign(__assign({}, parent_1), { bridgedAmount: percentBridgedtoDisplay, bridgeInfo: {
                                        name: '-'
                                    }, subRows: __spreadArray(__spreadArray([], __read(subChains), false), [childData], false) });
                            }
                        }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (chains_1_1 && !chains_1_1.done && (_a = chains_1.return)) _a.call(chains_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return Object.values(finalData)
            .filter(function (chain) { return chain.name; })
            .sort(function (a, b) { return b.circulating - a.circulating; });
    }, [chains, bridgeInfoObject]);
    return data;
};
exports.useGroupBridgeData = useGroupBridgeData;
var useBuildPeggedChartData = function (chartDataByAssetOrChain, assetsOrChainsList, filteredIndexes, issuanceType, chainTVLData, selectedChain, totalChartTooltipLabel) {
    if (issuanceType === void 0) { issuanceType = 'mcap'; }
    if (totalChartTooltipLabel === void 0) { totalChartTooltipLabel = 'Mcap'; }
    var _a = (0, react_1.useMemo)(function () {
        var backfilledChains = [
            'All',
            'Ethereum',
            'BSC',
            'Avalanche',
            'Arbitrum',
            'Optimism',
            'Fantom',
            'Polygon',
            'Gnosis',
            'Celo',
            'Harmony',
            'Moonriver',
            'Aztec',
            'Loopring',
            'Starknet',
            'zkSync',
            'Boba',
            'Metis',
            'Moonbeam',
            'Syscoin',
            'OKExChain',
            'IoTeX',
            'Heco'
        ];
        var unformattedAreaData = {};
        var unformattedTotalData = {};
        var stackedDatasetObject = {};
        var unformattedTokenInflowData = {};
        var assetAddedToInflows = assetsOrChainsList.reduce(function (acc, curr) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[curr] = false, _a)));
        }, {});
        chartDataByAssetOrChain.map(function (charts, i) {
            if (!charts.length || !filteredIndexes.includes(i))
                return;
            charts.forEach(function (chart, j) {
                var _a;
                var mcap = (0, utils_1.getPrevPeggedTotalFromChart)([chart], 0, issuanceType); // 'issuanceType' and 'mcap' here are 'circulating' values on /stablecoin pages, and 'mcap' otherwise
                var prevDayMcap = (0, utils_1.getPrevPeggedTotalFromChart)([charts[j - 1]], 0, issuanceType);
                var assetOrChain = assetsOrChainsList[i];
                var date = chart.date;
                if (date > 1596248105 && mcap) {
                    if (backfilledChains.includes(selectedChain) || date > 1652241600) {
                        // for individual chains data is currently only backfilled to May 11, 2022
                        unformattedAreaData[date] = unformattedAreaData[date] || {};
                        unformattedAreaData[date][assetsOrChainsList[i]] = mcap;
                        unformattedTotalData[date] = ((_a = unformattedTotalData[date]) !== null && _a !== void 0 ? _a : 0) + mcap;
                        if (mcap !== null && mcap !== 0) {
                            if (stackedDatasetObject[date] == undefined) {
                                stackedDatasetObject[date] = {};
                            }
                            var b = stackedDatasetObject[date][assetOrChain];
                            stackedDatasetObject[date][assetOrChain] = __assign(__assign({}, b), { circulating: mcap !== null && mcap !== void 0 ? mcap : 0 });
                        }
                        var diff = (mcap !== null && mcap !== void 0 ? mcap : 0) - (prevDayMcap !== null && prevDayMcap !== void 0 ? prevDayMcap : 0);
                        // the first day's inflow is not added to prevent large inflows on the day token is first tracked
                        if (assetAddedToInflows[assetOrChain]) {
                            unformattedTokenInflowData[date] = unformattedTokenInflowData[date] || {};
                            unformattedTokenInflowData[date][assetsOrChainsList[i]] = diff;
                        }
                        if (diff) {
                            assetAddedToInflows[assetOrChain] = true;
                        }
                    }
                }
            });
        });
        var peggedAreaChartData = Object.entries(unformattedAreaData).map(function (_a) {
            var _b = __read(_a, 2), date = _b[0], chart = _b[1];
            if (typeof chart === 'object') {
                return __assign({ date: date }, chart);
            }
        });
        var peggedAreaTotalData = chainTVLData
            ? chainTVLData.tvl
                .map(function (_a) {
                var _b;
                var _c;
                var _d = __read(_a, 2), date = _d[0], tvl = _d[1];
                if (date < 1609372800)
                    return;
                if (!backfilledChains.includes(selectedChain) && date < 1652241600)
                    return;
                var mcap = (_c = unformattedTotalData[date]) !== null && _c !== void 0 ? _c : 0;
                if (mcap === 0)
                    return;
                return _b = {
                        date: date
                    },
                    _b[totalChartTooltipLabel] = mcap,
                    _b.TVL = tvl,
                    _b;
            })
                .filter(function (entry) { return entry; })
            : Object.entries(unformattedTotalData).map(function (_a) {
                var _b;
                var _c = __read(_a, 2), date = _c[0], mcap = _c[1];
                return _b = {
                        date: date
                    },
                    _b[totalChartTooltipLabel] = mcap,
                    _b;
            });
        var stackedDataset = Object.entries(stackedDatasetObject);
        var secondsInDay = 3600 * 24;
        var zeroTokenInflows = 0;
        var zeroUsdInfows = 0;
        var tokenInflows = [];
        var usdInflows = [];
        var tokenSet = new Set();
        Object.entries(unformattedTokenInflowData).map(function (_a) {
            var _b;
            var _c = __read(_a, 2), date = _c[0], chart = _c[1];
            if (typeof chart === 'object') {
                var dayDifference = 0;
                var tokenDayDifference = {};
                for (var token in chart) {
                    tokenSet.add(token);
                    var diff = chart[token];
                    if (!Number.isNaN(diff)) {
                        // Here, the inflow tokens could be restricted to top daily top tokens, but they aren't. Couldn't find good UX doing so.
                        tokenDayDifference[token] = diff;
                        dayDifference += diff;
                    }
                }
                if (dayDifference === 0) {
                    zeroUsdInfows++;
                }
                if (((_b = Object.keys(tokenDayDifference)) === null || _b === void 0 ? void 0 : _b.length) === 0) {
                    zeroTokenInflows++;
                }
                // the dates on the inflows are all off by 1 (because timestamps are at 00:00?), so they are moved forward 1 day
                var adjustedDate = (parseInt(date) + secondsInDay).toString();
                tokenInflows.push(__assign(__assign({}, tokenDayDifference), { date: adjustedDate }));
                usdInflows.push([adjustedDate, dayDifference]);
            }
        });
        var tokenInflowNames = zeroTokenInflows === tokenInflows.length ? ['USDT'] : Array.from(tokenSet);
        tokenInflows = zeroTokenInflows === tokenInflows.length ? [{ USDT: 0, date: '1652486400' }] : tokenInflows;
        usdInflows = zeroUsdInfows === usdInflows.length ? [['1652486400', 0]] : usdInflows;
        return { peggedAreaChartData: peggedAreaChartData, peggedAreaTotalData: peggedAreaTotalData, stackedDataset: stackedDataset, tokenInflows: tokenInflows, tokenInflowNames: tokenInflowNames, usdInflows: usdInflows };
    }, [
        chartDataByAssetOrChain,
        assetsOrChainsList,
        filteredIndexes,
        issuanceType,
        chainTVLData,
        selectedChain,
        totalChartTooltipLabel
    ]), peggedAreaChartData = _a.peggedAreaChartData, peggedAreaTotalData = _a.peggedAreaTotalData, stackedDataset = _a.stackedDataset, tokenInflows = _a.tokenInflows, tokenInflowNames = _a.tokenInflowNames, usdInflows = _a.usdInflows;
    return { peggedAreaChartData: peggedAreaChartData, peggedAreaTotalData: peggedAreaTotalData, stackedDataset: stackedDataset, tokenInflows: tokenInflows, tokenInflowNames: tokenInflowNames, usdInflows: usdInflows };
};
exports.useBuildPeggedChartData = useBuildPeggedChartData;
var useFormatStablecoinQueryParams = function (_a) {
    var stablecoinAttributeOptions = _a.stablecoinAttributeOptions, stablecoinPegTypeOptions = _a.stablecoinPegTypeOptions, stablecoinBackingOptions = _a.stablecoinBackingOptions;
    var router = (0, router_1.useRouter)();
    var _b = router.query, attribute = _b.attribute, pegtype = _b.pegtype, backing = _b.backing;
    return React.useMemo(function () {
        var selectedAttributes = [], selectedPegTypes = [], selectedBackings = [];
        if (attribute) {
            if (typeof attribute === 'string') {
                selectedAttributes = attribute === 'None' ? [] : [attribute];
            }
            else {
                selectedAttributes = __spreadArray([], __read(attribute), false);
            }
        }
        else {
            selectedAttributes = __spreadArray([], __read(stablecoinAttributeOptions.map(function (option) { return option.key; })), false);
        }
        if (pegtype) {
            if (typeof pegtype === 'string') {
                selectedPegTypes = pegtype === 'None' ? [] : [pegtype];
            }
            else {
                selectedPegTypes = __spreadArray([], __read(pegtype), false);
            }
        }
        else
            selectedPegTypes = __spreadArray([], __read(stablecoinPegTypeOptions.map(function (option) { return option.key; })), false);
        if (backing) {
            if (typeof backing === 'string') {
                selectedBackings = backing === 'None' ? [] : [backing];
            }
            else {
                selectedBackings = __spreadArray([], __read(backing), false);
            }
        }
        else
            selectedBackings = __spreadArray([], __read(stablecoinBackingOptions.map(function (option) { return option.key; })), false);
        return {
            selectedAttributes: selectedAttributes,
            selectedPegTypes: selectedPegTypes,
            selectedBackings: selectedBackings
        };
    }, [attribute, pegtype, backing, stablecoinAttributeOptions, stablecoinPegTypeOptions, stablecoinBackingOptions]);
};
exports.useFormatStablecoinQueryParams = useFormatStablecoinQueryParams;
