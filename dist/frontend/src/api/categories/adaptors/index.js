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
exports.notUndefined = exports.joinCharts2 = exports.getChainsPageData = exports.getChainPageData = exports.getOverviewItemPageData = exports.generateGetOverviewItemPageDate = exports.getOverview = exports.getOverviewItem = void 0;
var constants_1 = require("../../../constants");
var utils_1 = require("../../../containers/DexsAndFees/utils");
var utils_2 = require("../../../utils");
var client_1 = require("./client");
var utils_3 = require("./utils");
var chainTokens_1 = require("../../../constants/chainTokens");
/* export const getDex = async (dexName: string): Promise<IDexResponse> =>
    await fetch(`${DEX_BASE_API}/${dexName}`).then((r) => r.json())

export const getDexs = (): Promise<IGetDexsResponseBody> => fetch(`${DEXS_API}?excludeTotalDataChartBreakdown=true&excludeTotalDataChart=true`).then((r) => r.json()) */
// - used in /[dex]
/* export async function getDexPageData(dex: string) {
    const dexResponse = await fetch(`${DEX_BASE_API}/${dex}`).then((r) => r.json())

    return {
        props: dexResponse
    }
} */
var getOverviewItem = function (type, protocolName, dataType) {
    return fetch("".concat(constants_1.ADAPTORS_SUMMARY_BASE_API, "/").concat(type, "/").concat(protocolName).concat(dataType ? "?dataType=".concat(dataType) : '')).then(utils_3.handleFetchResponse);
};
exports.getOverviewItem = getOverviewItem;
var getOverview = function (type, chain, dataType, includeTotalDataChart, fullChart) {
    return fetch((0, client_1.getAPIUrl)(type, chain, !includeTotalDataChart, true, dataType, fullChart)).then(utils_3.handleFetchResponse);
};
exports.getOverview = getOverview;
var generateGetOverviewItemPageDate = function (item, type, protocolName) { return __awaiter(void 0, void 0, void 0, function () {
    var label, allCharts, secondType, secondLabel;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (type === 'volumes') {
                    label = 'Volume';
                }
                else if (type === 'options') {
                    label = 'Notionial volume';
                }
                else {
                    label = (0, utils_2.capitalizeFirstLetter)(type);
                }
                allCharts = [];
                if (item.totalDataChart)
                    allCharts.push([label, item.totalDataChart]);
                if (!(type === 'fees')) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, exports.getOverviewItem)(type, protocolName, 'dailyRevenue')];
            case 1:
                secondType = _b.sent();
                secondLabel = 'Revenue';
                return [3 /*break*/, 4];
            case 2:
                if (!(type === 'options')) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, exports.getOverviewItem)(type, protocolName, 'dailyPremiumVolume')];
            case 3:
                secondType = _b.sent();
                secondLabel = 'Premium volume';
                _b.label = 4;
            case 4:
                if (secondLabel && (secondType === null || secondType === void 0 ? void 0 : secondType.totalDataChart))
                    allCharts.push([secondLabel, secondType.totalDataChart]);
                return [2 /*return*/, __assign(__assign({}, item), { logo: getLlamaoLogo(item.logo), dailyRevenue: (_a = secondType === null || secondType === void 0 ? void 0 : secondType.total24h) !== null && _a !== void 0 ? _a : null, type: type, totalDataChart: [exports.joinCharts2.apply(void 0, __spreadArray([], __read(allCharts), false)), allCharts.map(function (_a) {
                                var _b = __read(_a, 1), label = _b[0];
                                return label;
                            })] })];
        }
    });
}); };
exports.generateGetOverviewItemPageDate = generateGetOverviewItemPageDate;
var getOverviewItemPageData = function (type, protocolName, dataType) { return __awaiter(void 0, void 0, void 0, function () {
    var item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.getOverviewItem)(type, protocolName, dataType)];
            case 1:
                item = _a.sent();
                return [2 /*return*/, (0, exports.generateGetOverviewItemPageDate)(item, type, protocolName)];
        }
    });
}); };
exports.getOverviewItemPageData = getOverviewItemPageData;
function getMCap(protocolsData) {
    var _a;
    var protocolsRaw = protocolsData === null || protocolsData === void 0 ? void 0 : protocolsData.protocols;
    return ((_a = protocolsRaw === null || protocolsRaw === void 0 ? void 0 : protocolsRaw.reduce(function (acc, pd) {
        acc[pd.name] = pd.mcap;
        return acc;
    }, {})) !== null && _a !== void 0 ? _a : {});
}
function getTVLData(protocolsData, chain) {
    var _a;
    var protocolsRaw = chain
        ? protocolsData === null || protocolsData === void 0 ? void 0 : protocolsData.protocols.map(function (p) {
            var _a, _b, _c;
            return (__assign(__assign({}, p), { tvlPrevDay: (_c = (_b = (_a = p === null || p === void 0 ? void 0 : p.chainTvls) === null || _a === void 0 ? void 0 : _a[chain]) === null || _b === void 0 ? void 0 : _b.tvlPrevDay) !== null && _c !== void 0 ? _c : null }));
        })
        : protocolsData === null || protocolsData === void 0 ? void 0 : protocolsData.protocols;
    return ((_a = protocolsRaw === null || protocolsRaw === void 0 ? void 0 : protocolsRaw.reduce(function (acc, pd) {
        acc[pd.defillamaId] = pd.tvlPrevDay;
        return acc;
    }, {})) !== null && _a !== void 0 ? _a : {});
}
var getMapingCoinGeckoId = function (name) {
    var _name = {
        Cronos: 'crypto-com-chain',
        Doge: 'dogecoin',
        Polygon: 'matic-network',
        Avalanche: 'avalanche-2',
        BSC: 'binancecoin'
    }[name];
    return _name !== null && _name !== void 0 ? _name : name;
};
// - used in /[type] and /[type]/chains/[chain]
var getChainPageData = function (type, chain) { return __awaiter(void 0, void 0, void 0, function () {
    var feesOrRevenueApi, _a, request, protocolsData, feesOrRevenue, cexVolume, _b, protocols, total24h, total7d, change_1d, change_7d, change_1m, filtredChain, change_7dover7d, totalDataChart, totalDataChartBreakdown, allChains, chains, chainMcaps, chainMcap, tvlData, mcapData, label, allCharts, revenueProtocols, parentProtocols, parentProtocolsMap, protocolsWithSubrows;
    var _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                feesOrRevenueApi = type === 'options'
                    ? (0, client_1.getAPIUrl)(type, chain, false, true, 'dailyPremiumVolume')
                    : (0, client_1.getAPIUrl)(type, chain, true, true, 'dailyRevenue');
                return [4 /*yield*/, Promise.all([
                        fetch((0, client_1.getAPIUrl)(type, chain, type === 'fees', true)).then(utils_3.handleFetchResponse),
                        fetch(constants_1.PROTOCOLS_API).then(utils_3.handleFetchResponse),
                        fetch(feesOrRevenueApi).then(utils_3.handleFetchResponse),
                        type === 'dexs' ? (0, utils_3.getCexVolume)() : Promise.resolve(0)
                    ])];
            case 1:
                _a = __read.apply(void 0, [_f.sent(), 4]), request = _a[0], protocolsData = _a[1], feesOrRevenue = _a[2], cexVolume = _a[3];
                _b = request.protocols, protocols = _b === void 0 ? [] : _b, total24h = request.total24h, total7d = request.total7d, change_1d = request.change_1d, change_7d = request.change_7d, change_1m = request.change_1m, filtredChain = request.chain, change_7dover7d = request.change_7dover7d, totalDataChart = request.totalDataChart, totalDataChartBreakdown = request.totalDataChartBreakdown, allChains = request.allChains;
                chains = protocols.filter(function (e) { return e.protocolType === 'chain'; }).map(function (e) { return e.name; });
                return [4 /*yield*/, fetch('https://coins.llama.fi/mcaps', {
                        method: 'POST',
                        body: JSON.stringify({
                            coins: Object.values(chains)
                                .filter(function (c) { var _a; return (_a = chainTokens_1.chainCoingeckoIds[c]) === null || _a === void 0 ? void 0 : _a.geckoId; })
                                .map(function (c) { return "coingecko:".concat(chainTokens_1.chainCoingeckoIds[c].geckoId); })
                        })
                    })
                        .then(function (r) { return r.json(); })
                        .catch(function (err) {
                        console.log(err);
                        return {};
                    })];
            case 2:
                chainMcaps = _f.sent();
                chainMcap = (_c = chains === null || chains === void 0 ? void 0 : chains.reduce(function (acc, curr) {
                    var _a, _b, _c;
                    var geckoId = (_a = chainTokens_1.chainCoingeckoIds[curr]) === null || _a === void 0 ? void 0 : _a.geckoId;
                    if (geckoId) {
                        acc[curr] = (_c = (_b = chainMcaps["coingecko:".concat(geckoId)]) === null || _b === void 0 ? void 0 : _b.mcap) !== null && _c !== void 0 ? _c : null;
                    }
                    return acc;
                }, {})) !== null && _c !== void 0 ? _c : {};
                tvlData = getTVLData(protocolsData, filtredChain);
                mcapData = __assign(__assign({}, getMCap(protocolsData)), chainMcap);
                label = type === 'options' ? 'Notionial volume' : (0, utils_2.capitalizeFirstLetter)(type);
                allCharts = [];
                if (totalDataChart) {
                    allCharts.push([label, totalDataChart]);
                }
                if (type === 'options' && (feesOrRevenue === null || feesOrRevenue === void 0 ? void 0 : feesOrRevenue.totalDataChart)) {
                    allCharts.push(['Premium volume', feesOrRevenue.totalDataChart]);
                }
                revenueProtocols = type === 'fees'
                    ? (_e = (_d = feesOrRevenue === null || feesOrRevenue === void 0 ? void 0 : feesOrRevenue.protocols) === null || _d === void 0 ? void 0 : _d.reduce(function (acc, protocol) {
                        var _a;
                        return (__assign(__assign({}, acc), (_a = {}, _a[protocol.name] = protocol, _a)));
                    }, {})) !== null && _e !== void 0 ? _e : {}
                    : {};
                parentProtocols = protocolsData.parentProtocols;
                parentProtocolsMap = parentProtocols.reduce(function (acc, curr) {
                    var _a;
                    return (__assign(__assign({}, acc), (_a = {}, _a[curr.id] = curr, _a)));
                }, {});
                protocolsWithSubrows = protocols.reduce(function (acc, protocol) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
                    // Assign mainrow and sub-row if has any
                    var mainRow = undefined;
                    var subRow = null;
                    if (parentProtocolsMap[protocol.parentProtocol]) {
                        mainRow = parentProtocolsMap[protocol.parentProtocol];
                        subRow = __assign(__assign({}, protocol), { logo: getLlamaoLogo(protocol.logo), displayName: (_a = protocol.displayName) !== null && _a !== void 0 ? _a : protocol.name, tvl: (_b = tvlData[protocol.defillamaId]) !== null && _b !== void 0 ? _b : null, volumetvl: tvlData[protocol.defillamaId] ? protocol.total24h / tvlData[protocol.defillamaId] : null, dominance: (100 * protocol.total24h) / total24h, revenue24h: (_d = (_c = revenueProtocols === null || revenueProtocols === void 0 ? void 0 : revenueProtocols[protocol.name]) === null || _c === void 0 ? void 0 : _c.total24h) !== null && _d !== void 0 ? _d : null, revenue7d: (_f = (_e = revenueProtocols === null || revenueProtocols === void 0 ? void 0 : revenueProtocols[protocol.name]) === null || _e === void 0 ? void 0 : _e.total7d) !== null && _f !== void 0 ? _f : null, revenue30d: (_h = (_g = revenueProtocols === null || revenueProtocols === void 0 ? void 0 : revenueProtocols[protocol.name]) === null || _g === void 0 ? void 0 : _g.total30d) !== null && _h !== void 0 ? _h : null, mcap: mcapData[protocol.name] || null });
                        // If already included parent protocol we add the new child
                        if (acc[protocol.parentProtocol])
                            acc[protocol.parentProtocol].subRows.push(subRow);
                        // If first time processed parent protocol we create the subrows list
                        else
                            acc[protocol.parentProtocol] = __assign(__assign({}, acc[protocol.parentProtocol]), { subRows: [subRow] });
                    }
                    else
                        mainRow = protocol;
                    // Main row, either parent or single protocol
                    var protocolTVL = tvlData[protocol.defillamaId];
                    mainRow = __assign(__assign(__assign({}, mainRow), acc[protocol.parentProtocol]), { logo: getLlamaoLogo(protocol.logo), category: protocol.category, displayName: (_j = mainRow.displayName) !== null && _j !== void 0 ? _j : mainRow.name, revenue24h: (_l = (_k = revenueProtocols === null || revenueProtocols === void 0 ? void 0 : revenueProtocols[protocol.name]) === null || _k === void 0 ? void 0 : _k.total24h) !== null && _l !== void 0 ? _l : null, revenue7d: (_o = (_m = revenueProtocols === null || revenueProtocols === void 0 ? void 0 : revenueProtocols[protocol.name]) === null || _m === void 0 ? void 0 : _m.total7d) !== null && _o !== void 0 ? _o : null, revenue30d: (_q = (_p = revenueProtocols === null || revenueProtocols === void 0 ? void 0 : revenueProtocols[protocol.name]) === null || _p === void 0 ? void 0 : _p.total30d) !== null && _q !== void 0 ? _q : null, tvl: protocolTVL !== null && protocolTVL !== void 0 ? protocolTVL : null, dominance: (100 * protocol.total24h) / total24h, module: protocol.module, dailyUserFees: (_r = protocol.dailyUserFees) !== null && _r !== void 0 ? _r : null, mcap: mcapData[protocol.name] || null });
                    // Stats for parent protocol
                    if (acc[protocol.parentProtocol]) {
                        // stats
                        mainRow.total24h = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('total24h'), null);
                        mainRow.total7d = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('total7d'), null);
                        mainRow.total30d = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('total30d'), null);
                        mainRow.totalAllTime = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('totalAllTime'), null);
                        mainRow.tvl = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('tvl'), null);
                        mainRow.revenue24h = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('revenue24h'), null);
                        mainRow.revenue7d = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('revenue7d'), null);
                        mainRow.revenue30d = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('revenue30d'), null);
                        mainRow.dailyRevenue = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('dailyRevenue'), null);
                        mainRow.dailyUserFees = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('dailyUserFees'), null);
                        mainRow.dailyCreatorRevenue = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('dailyCreatorRevenue'), null);
                        mainRow.dailyHoldersRevenue = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('dailyHoldersRevenue'), null);
                        mainRow.dailyPremiumVolume = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('dailyPremiumVolume'), null);
                        mainRow.dailyProtocolRevenue = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('dailyProtocolRevenue'), null);
                        mainRow.dailySupplySideRevenue = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('dailySupplySideRevenue'), null);
                        mainRow.mcap = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('mcap'), null);
                        // mainRow.mcap = acc[protocol.parentProtocol].subRows.reduce(reduceHigherByAttribute('mcap'), null)
                        mainRow.chains = (0, utils_1.getUniqueArray)(acc[protocol.parentProtocol].subRows.map(function (d) { return d.chains; }).flat());
                        mainRow.methodology = getParentProtocolMethodology(mainRow.displayName, acc[protocol.parentProtocol].subRows.map(function (r) { return r.displayName; }));
                        var total14dto7d = acc[protocol.parentProtocol].subRows.reduce(reduceSumByAttribute('total14dto7d'), null);
                        mainRow.change_7dover7d = ((mainRow.total7d - total14dto7d) / total14dto7d) * 100;
                    }
                    // Computed stats
                    mainRow.volumetvl = mainRow.total24h / mainRow.tvl;
                    // Return acc
                    acc[(_s = protocol.parentProtocol) !== null && _s !== void 0 ? _s : protocol.module] = mainRow;
                    return acc;
                }, {});
                /* 	if (revenue?.totalDataChart)
                        allCharts.push(["Revenue", revenue.totalDataChart]) */
                return [2 /*return*/, {
                        protocols: Object.values(protocolsWithSubrows),
                        total24h: total24h,
                        total7d: total7d,
                        change_1d: change_1d,
                        change_7d: change_7d,
                        change_1m: change_1m,
                        change_7dover7d: change_7dover7d,
                        totalDataChart: [exports.joinCharts2.apply(void 0, __spreadArray([], __read(allCharts), false)), allCharts.map(function (_a) {
                                var _b = __read(_a, 1), label = _b[0];
                                return label;
                            })],
                        chain: filtredChain !== null && filtredChain !== void 0 ? filtredChain : null,
                        tvlData: tvlData,
                        totalDataChartBreakdown: totalDataChartBreakdown,
                        allChains: allChains,
                        dexsDominance: cexVolume ? +((total24h / (cexVolume + total24h)) * 100).toFixed(2) : null,
                        type: type
                    }];
        }
    });
}); };
exports.getChainPageData = getChainPageData;
var getLlamaoLogo = function (logo) {
    if (!logo)
        return null;
    var llamoLogo = logo;
    if (llamoLogo.includes('chains'))
        llamoLogo = llamoLogo.replace('https://icons.llama.fi/', 'https://icons.llamao.fi/icons/');
    llamoLogo = llamoLogo.replace('https://icons.llama.fi/', 'https://icons.llamao.fi/icons/protocols/');
    return llamoLogo.split('.').slice(0, -1).join('.');
};
var reduceSumByAttribute = function (attribute) { return function (acc, curr) {
    if (curr[attribute] !== null) {
        if (acc === undefined)
            return curr[attribute];
        return (acc += curr[attribute]);
    }
    return acc;
}; };
var reduceHigherByAttribute = function (attribute) { return function (acc, curr) {
    if (curr[attribute] !== null) {
        if (acc === undefined || curr[attribute] > acc)
            return curr[attribute];
    }
    return acc;
}; };
var getParentProtocolMethodology = function (name, versionNames) {
    var text = (function () {
        if (versionNames.length === 1)
            return {
                isSumString: "All",
                versions: "".concat(versionNames[0].toUpperCase())
            };
        else
            return {
                isSumString: "Sum of all",
                versions: "".concat(versionNames.slice(0, -1).join(', '), " and ").concat(versionNames[versionNames.length - 1].toUpperCase())
            };
    })();
    return {
        UserFees: "".concat(text.isSumString, " user fees from ").concat(text.versions),
        Fees: "".concat(text.isSumString, " fees from ").concat(text.versions),
        Revenue: "".concat(text.isSumString, " revenue from ").concat(text.versions),
        ProtocolRevenue: "".concat(text.isSumString, " protocol revenue from ").concat(text.versions),
        HoldersRevenue: "".concat(text.isSumString, " holders revenue from ").concat(text.versions),
        SupplySideRevenue: "".concat(text.isSumString, " supply side revenue from ").concat(text.versions)
    };
};
// - used in /[type]/chains
var getChainsPageData = function (type) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, allChains, allChainsTotal24h, _b, protocolsData, dataByChain, protocols, allCharts, aggregatedChart, sum;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, exports.getOverview)(type)];
            case 1:
                _a = _c.sent(), allChains = _a.allChains, allChainsTotal24h = _a.total24h;
                return [4 /*yield*/, Promise.all(__spreadArray([
                        fetch(constants_1.PROTOCOLS_API).then(utils_3.handleFetchResponse)
                    ], __read(allChains.map(function (chain) { return (0, exports.getOverview)(type, chain, undefined, true, true).then(function (res) { return (__assign(__assign({}, res), { chain: chain })); }); })), false))];
            case 2:
                _b = __read.apply(void 0, [_c.sent()]), protocolsData = _b[0], dataByChain = _b.slice(1);
                protocols = dataByChain
                    .map(function (_a) {
                    var total24h = _a.total24h, change_1d = _a.change_1d, change_7d = _a.change_7d, chain = _a.chain, change_1m = _a.change_1m, protocols = _a.protocols, change_7dover7d = _a.change_7dover7d, total7d = _a.total7d, total30d = _a.total30d, dailyRevenue = _a.dailyRevenue, dailyUserFees = _a.dailyUserFees, dailyHoldersRevenue = _a.dailyHoldersRevenue, dailyCreatorRevenue = _a.dailyCreatorRevenue, dailySupplySideRevenue = _a.dailySupplySideRevenue, dailyProtocolRevenue = _a.dailyProtocolRevenue, dailyPremiumVolume = _a.dailyPremiumVolume;
                    if (!protocols)
                        return undefined;
                    var tvlData = getTVLData(protocolsData, chain);
                    return {
                        name: chain,
                        displayName: chain,
                        disabled: null,
                        logo: (0, utils_2.chainIconUrl)(chain),
                        total24h: total24h,
                        tvl: protocols.reduce(function (acc, curr) {
                            // TODO: This should be mapped using defillamaId to get accurate tvl!
                            var tvl = tvlData[curr.defillamaId];
                            acc += !Number.isNaN(tvl) ? tvl : 0;
                            return acc;
                        }, 0),
                        change_7dover7d: change_7dover7d,
                        total7d: total7d,
                        total30d: total30d,
                        change_1d: change_1d,
                        change_7d: change_7d,
                        change_1m: change_1m,
                        dominance: (100 * total24h) / allChainsTotal24h,
                        chains: [chain],
                        totalAllTime: protocols.reduce(function (acc, curr) { return (acc += curr.totalAllTime); }, 0),
                        protocolsStats: null,
                        breakdown24h: null,
                        module: chain,
                        dailyRevenue: dailyRevenue !== null && dailyRevenue !== void 0 ? dailyRevenue : null,
                        dailyUserFees: dailyUserFees !== null && dailyUserFees !== void 0 ? dailyUserFees : null,
                        dailyHoldersRevenue: dailyHoldersRevenue !== null && dailyHoldersRevenue !== void 0 ? dailyHoldersRevenue : null,
                        dailyCreatorRevenue: dailyCreatorRevenue !== null && dailyCreatorRevenue !== void 0 ? dailyCreatorRevenue : null,
                        dailySupplySideRevenue: dailySupplySideRevenue !== null && dailySupplySideRevenue !== void 0 ? dailySupplySideRevenue : null,
                        dailyProtocolRevenue: dailyProtocolRevenue !== null && dailyProtocolRevenue !== void 0 ? dailyProtocolRevenue : null,
                        dailyPremiumVolume: dailyPremiumVolume !== null && dailyPremiumVolume !== void 0 ? dailyPremiumVolume : null,
                        mcap: null
                    };
                })
                    .filter(notUndefined);
                allCharts = dataByChain.map(function (chainData) { return [chainData.chain, chainData.totalDataChart]; });
                aggregatedChart = exports.joinCharts2.apply(void 0, __spreadArray([], __read(allCharts), false));
                sum = function (obj) {
                    return Object.values(obj).reduce(function (acc, curr) { return (typeof curr === 'number' ? (acc += curr) : acc); }, 0);
                };
                aggregatedChart = aggregatedChart.slice(aggregatedChart.findIndex(function (it) { return sum(it) !== 0; }), aggregatedChart.length - __spreadArray([], __read(aggregatedChart), false).reverse().findIndex(function (it) { return sum(it) !== 0; }));
                return [2 /*return*/, {
                        type: type,
                        protocols: protocols,
                        chain: 'all',
                        totalDataChart: [aggregatedChart, allCharts.map(function (_a) {
                                var _b = __read(_a, 1), label = _b[0];
                                return label;
                            })]
                    }];
        }
    });
}); };
exports.getChainsPageData = getChainsPageData;
var joinCharts2 = function () {
    var lists = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lists[_i] = arguments[_i];
    }
    return Object.values(lists.reduce(function (acc, _a) {
        var _b = __read(_a, 2), name = _b[0], list = _b[1];
        list === null || list === void 0 ? void 0 : list.forEach(function (_a) {
            var _b, _c;
            var _d = __read(_a, 2), timestamp = _d[0], value = _d[1];
            if (acc[timestamp])
                acc[String(timestamp)] = __assign(__assign({}, acc[String(timestamp)]), (_b = {}, _b[name] = value, _b));
            else
                acc[String(timestamp)] = (_c = {},
                    _c[name] = value,
                    _c.date = String(timestamp),
                    _c);
        });
        return acc;
    }, {})).map(function (bar) {
        var date = bar.date;
        delete bar.date;
        var ordredItems = Object.entries(bar);
        return __assign({ date: date }, ordredItems.reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));
        }, {}));
    });
};
exports.joinCharts2 = joinCharts2;
function notUndefined(x) {
    return x !== undefined;
}
exports.notUndefined = notUndefined;
