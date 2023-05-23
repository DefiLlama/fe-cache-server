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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticPaths = exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Protocol_1 = __importDefault(require("../../containers/Defi/Protocol"));
var utils_1 = require("../../utils");
var getColor_1 = require("../../utils/getColor");
var api_1 = require("../../api");
var protocols_1 = require("../../api/categories/protocols");
var Dummy_1 = require("../../containers/Defi/Protocol/Dummy");
var news_1 = require("../../api/categories/news");
var constants_1 = require("../../constants");
var perf_1 = require("../../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('protocol/[...protocol]', function (_a) {
    var _b = __read(_a.params.protocol, 1), protocol = _b[0];
    return __awaiter(void 0, void 0, void 0, function () {
        var _c, protocolRes, articles, emissions, expenses, treasuries, yields, yieldsConfig, liquidityInfo, inflowsExist, protocolData, governanceID, governanceApi, _d, backgroundColor, allProtocols, users, feesAndRevenueProtocols, dexs, medianApy, controversialProposals, feesAndRevenueData, volumeData, chartTypes, colorTones, similarProtocols, similarProtocolsSet, protocolsWithCommonChains, dailyRevenue, dailyFees, dailyVolume, allTimeFees, allTimeVolume, metrics, treasury, projectYields, tokenPools, liquidityAggregated, tokenLiquidity;
        var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
        return __generator(this, function (_11) {
            switch (_11.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        (0, protocols_1.getProtocol)(protocol),
                        (0, news_1.fetchArticles)({ tags: protocol }),
                        (0, perf_1.fetchWithPerformaceLogging)(constants_1.PROTOCOL_EMISSIONS_LIST_API),
                        (0, perf_1.fetchWithPerformaceLogging)(constants_1.PROTOCOLS_EXPENSES_API),
                        (0, perf_1.fetchWithPerformaceLogging)(constants_1.PROTOCOLS_TREASURY),
                        (0, perf_1.fetchWithPerformaceLogging)(constants_1.YIELD_POOLS_API),
                        (0, perf_1.fetchWithPerformaceLogging)(constants_1.YIELD_CONFIG_API),
                        (0, perf_1.fetchWithPerformaceLogging)('https://defillama-datasets.llama.fi/liquidity.json')
                    ])];
                case 1:
                    _c = __read.apply(void 0, [_11.sent(), 8]), protocolRes = _c[0], articles = _c[1], emissions = _c[2], expenses = _c[3], treasuries = _c[4], yields = _c[5], yieldsConfig = _c[6], liquidityInfo = _c[7];
                    inflowsExist = false;
                    if (protocolRes === null || protocolRes === void 0 ? void 0 : protocolRes.chainTvls) {
                        Object.keys(protocolRes.chainTvls).forEach(function (chain) {
                            var _a;
                            if (((_a = protocolRes.chainTvls[chain].tokensInUsd) === null || _a === void 0 ? void 0 : _a.length) > 0 && !inflowsExist) {
                                inflowsExist = true;
                            }
                            delete protocolRes.chainTvls[chain].tokensInUsd;
                            delete protocolRes.chainTvls[chain].tokens;
                        });
                    }
                    protocolData = (0, protocols_1.fuseProtocolData)(protocolRes);
                    governanceID = (_f = (_e = protocolData.governanceID) === null || _e === void 0 ? void 0 : _e[0]) !== null && _f !== void 0 ? _f : null;
                    governanceApi = governanceID
                        ? governanceID.startsWith('snapshot:')
                            ? "".concat(constants_1.PROTOCOL_GOVERNANCE_API, "/").concat(governanceID.split('snapshot:')[1], ".json")
                            : governanceID.startsWith('compound:')
                                ? "".concat(constants_1.PROTOCOL_ONCHAIN_GOVERNANCE_API, "/").concat(governanceID.split('compound:')[1], ".json")
                                : null
                        : null;
                    return [4 /*yield*/, Promise.all([
                            (0, getColor_1.getColor)((0, utils_1.tokenIconPaletteUrl)(protocolData.name)),
                            (0, protocols_1.getProtocolsRaw)(),
                            fetch(constants_1.ACTIVE_USERS_API)
                                .then(function (res) { return res.json(); })
                                .then(function (data) { var _a; return (_a = data === null || data === void 0 ? void 0 : data[protocolData.id]) !== null && _a !== void 0 ? _a : null; }),
                            fetch("https://api.llama.fi/overview/fees?excludeTotalDataChartBreakdown=true&excludeTotalDataChart=true")
                                .then(function (res) { return res.json(); })
                                .catch(function (err) {
                                console.log("Couldn't fetch fees and revenue protocols list at path: ".concat(protocol), 'Error:', err);
                                return {};
                            }),
                            fetch("https://api.llama.fi/overview/dexs?excludeTotalDataChartBreakdown=true&excludeTotalDataChart=true")
                                .then(function (res) { return res.json(); })
                                .catch(function (err) {
                                console.log("Couldn't fetch dex protocols list at path: ".concat(protocol), 'Error:', err);
                                return {};
                            }),
                            fetch("".concat(constants_1.YIELD_PROJECT_MEDIAN_API, "/").concat(protocol)).then(function (res) { return res.json(); }),
                            governanceApi
                                ? fetch(governanceApi)
                                    .then(function (res) { return res.json(); })
                                    .then(function (data) {
                                    return Object.values(data.proposals)
                                        .sort(function (a, b) { return (b['score_curve'] || 0) - (a['score_curve'] || 0); })
                                        .slice(0, 3);
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                    return {};
                                })
                                : null
                        ])];
                case 2:
                    _d = __read.apply(void 0, [_11.sent(), 7]), backgroundColor = _d[0], allProtocols = _d[1], users = _d[2], feesAndRevenueProtocols = _d[3], dexs = _d[4], medianApy = _d[5], controversialProposals = _d[6];
                    feesAndRevenueData = (_g = feesAndRevenueProtocols === null || feesAndRevenueProtocols === void 0 ? void 0 : feesAndRevenueProtocols.protocols) === null || _g === void 0 ? void 0 : _g.filter(function (p) { return p.name === protocolData.name || p.parentProtocol === protocolData.id; });
                    volumeData = (_h = dexs === null || dexs === void 0 ? void 0 : dexs.protocols) === null || _h === void 0 ? void 0 : _h.filter(function (p) { return p.name === protocolData.name || p.parentProtocol === protocolData.id; });
                    chartTypes = [
                        'TVL',
                        'Mcap',
                        'Token Price',
                        'FDV',
                        'Fees',
                        'Revenue',
                        'Volume',
                        'Unlocks',
                        'Active Users',
                        'New Users',
                        'Transactions',
                        'Gas Used',
                        'Staking',
                        'Borrowed',
                        'Median APY',
                        'USD Inflows',
                        'Total Proposals',
                        'Successful Proposals',
                        'Max Votes',
                        'Treasury',
                        'Bridge Deposits',
                        'Bridge Withdrawals',
                        'Token Volume',
                        'Token Liquidity'
                    ];
                    colorTones = Object.fromEntries(chartTypes.map(function (type, index) { return [type, (0, utils_1.selectColor)(index, backgroundColor)]; }));
                    similarProtocols = allProtocols && protocolData.category
                        ? allProtocols.protocols
                            .filter(function (p) {
                            var _a;
                            if (p.category) {
                                return (p.category.toLowerCase() === protocolData.category.toLowerCase() &&
                                    p.name.toLowerCase() !== ((_a = protocolData.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()));
                            }
                            else
                                return false;
                        })
                            .map(function (p) {
                            var _a;
                            var commonChains = 0;
                            (_a = protocolData === null || protocolData === void 0 ? void 0 : protocolData.chains) === null || _a === void 0 ? void 0 : _a.forEach(function (chain) {
                                if (p.chains.includes(chain)) {
                                    commonChains += 1;
                                }
                            });
                            return { name: p.name, tvl: p.tvl, commonChains: commonChains };
                        })
                            .sort(function (a, b) { return b.tvl - a.tvl; })
                        : [];
                    similarProtocolsSet = new Set();
                    protocolsWithCommonChains = __spreadArray([], __read(similarProtocols), false).sort(function (a, b) { return b.commonChains - a.commonChains; }).slice(0, 5);
                    // first 5 are the protocols that are on same chain + same category
                    protocolsWithCommonChains.forEach(function (p) { return similarProtocolsSet.add(p.name); });
                    // last 5 are the protocols in same category
                    similarProtocols.forEach(function (p) {
                        if (similarProtocolsSet.size < 10) {
                            similarProtocolsSet.add(p.name);
                        }
                    });
                    dailyRevenue = (_j = feesAndRevenueData === null || feesAndRevenueData === void 0 ? void 0 : feesAndRevenueData.reduce(function (acc, curr) { return (acc += curr.dailyRevenue || 0); }, 0)) !== null && _j !== void 0 ? _j : null;
                    dailyFees = (_k = feesAndRevenueData === null || feesAndRevenueData === void 0 ? void 0 : feesAndRevenueData.reduce(function (acc, curr) { return (acc += curr.dailyFees || 0); }, 0)) !== null && _k !== void 0 ? _k : null;
                    dailyVolume = (_l = volumeData === null || volumeData === void 0 ? void 0 : volumeData.reduce(function (acc, curr) { return (acc += curr.dailyVolume || 0); }, 0)) !== null && _l !== void 0 ? _l : null;
                    allTimeFees = (_m = feesAndRevenueData === null || feesAndRevenueData === void 0 ? void 0 : feesAndRevenueData.reduce(function (acc, curr) { return (acc += curr.totalAllTime || 0); }, 0)) !== null && _m !== void 0 ? _m : null;
                    allTimeVolume = (_o = volumeData === null || volumeData === void 0 ? void 0 : volumeData.reduce(function (acc, curr) { return (acc += curr.totalAllTime || 0); }, 0)) !== null && _o !== void 0 ? _o : null;
                    metrics = protocolData.metrics || {};
                    treasury = treasuries.find(function (p) { return p.id.replace('-treasury', '') === protocolData.id; });
                    projectYields = (_p = yields === null || yields === void 0 ? void 0 : yields.data) === null || _p === void 0 ? void 0 : _p.filter(function (_a) {
                        var project = _a.project;
                        return project === protocol;
                    });
                    tokenPools = (yields === null || yields === void 0 ? void 0 : yields.data) && yieldsConfig ? (_r = (_q = liquidityInfo.find(function (p) { return p.id === protocolData.id; })) === null || _q === void 0 ? void 0 : _q.tokenPools) !== null && _r !== void 0 ? _r : [] : [];
                    liquidityAggregated = tokenPools.reduce(function (agg, pool) {
                        var _a;
                        if (!agg[pool.project])
                            agg[pool.project] = {};
                        agg[pool.project][pool.chain] = pool.tvlUsd + ((_a = agg[pool.project][pool.chain]) !== null && _a !== void 0 ? _a : 0);
                        return agg;
                    }, {});
                    tokenLiquidity = yieldsConfig
                        ? Object.entries(liquidityAggregated)
                            .map(function (p) { return Object.entries(p[1]).map(function (c) { return [yieldsConfig.protocols[p[0]].name, c[0], c[1]]; }); })
                            .flat()
                            .sort(function (a, b) { return b[2] - a[2]; })
                        : [];
                    return [2 /*return*/, {
                            props: {
                                articles: articles,
                                protocol: protocol,
                                protocolData: __assign(__assign({}, protocolData), { symbol: (_s = protocolData.symbol) !== null && _s !== void 0 ? _s : null, metrics: __assign(__assign({}, metrics), { fees: metrics.fees || dailyFees || allTimeFees ? true : false, dexs: metrics.dexs || dailyVolume || allTimeVolume ? true : false, medianApy: medianApy.data.length > 0, inflows: inflowsExist, unlocks: emissions.includes(protocol), bridge: protocolData.category === 'Bridge' || protocolData.category === 'Cross Chain', treasury: (treasury === null || treasury === void 0 ? void 0 : treasury.tokenBreakdowns) ? true : false, tokenLiquidity: protocolData.symbol && tokenLiquidity.length > 0 ? true : false }) }),
                                backgroundColor: backgroundColor,
                                similarProtocols: Array.from(similarProtocolsSet).map(function (protocolName) {
                                    return similarProtocols.find(function (p) { return p.name === protocolName; });
                                }),
                                chartColors: colorTones,
                                users: users
                                    ? {
                                        activeUsers: (_u = (_t = users.users) === null || _t === void 0 ? void 0 : _t.value) !== null && _u !== void 0 ? _u : null,
                                        newUsers: (_w = (_v = users.newUsers) === null || _v === void 0 ? void 0 : _v.value) !== null && _w !== void 0 ? _w : null,
                                        transactions: (_y = (_x = users.txs) === null || _x === void 0 ? void 0 : _x.value) !== null && _y !== void 0 ? _y : null,
                                        gasUsd: (_0 = (_z = users.gasUsd) === null || _z === void 0 ? void 0 : _z.value) !== null && _0 !== void 0 ? _0 : null
                                    }
                                    : null,
                                tokenPrice: protocolData.tokenPrice || null,
                                tokenMcap: protocolData.tokenMcap || null,
                                tokenSupply: protocolData.tokenSupply || null,
                                dailyRevenue: dailyRevenue,
                                dailyFees: dailyFees,
                                allTimeFees: allTimeFees,
                                dailyVolume: dailyVolume,
                                allTimeVolume: allTimeVolume,
                                controversialProposals: controversialProposals,
                                governanceApi: governanceApi,
                                treasury: (_1 = treasury === null || treasury === void 0 ? void 0 : treasury.tokenBreakdowns) !== null && _1 !== void 0 ? _1 : null,
                                yields: yields && yields.data && projectYields.length > 0
                                    ? {
                                        noOfPoolsTracked: projectYields.length,
                                        averageAPY: projectYields.reduce(function (acc, _a) {
                                            var apy = _a.apy;
                                            return acc + apy;
                                        }, 0) / projectYields.length
                                    }
                                    : null,
                                helperTexts: {
                                    fees: feesAndRevenueData.length > 1
                                        ? 'Sum of all fees from ' +
                                            ((_2 = feesAndRevenueData.reduce(function (acc, curr) { return (acc = __spreadArray(__spreadArray([], __read(acc), false), [curr.name], false) || 0); }, [])) !== null && _2 !== void 0 ? _2 : []).join(',')
                                        : (_5 = (_4 = (_3 = feesAndRevenueData === null || feesAndRevenueData === void 0 ? void 0 : feesAndRevenueData[0]) === null || _3 === void 0 ? void 0 : _3.methodology) === null || _4 === void 0 ? void 0 : _4['Fees']) !== null && _5 !== void 0 ? _5 : null,
                                    revenue: feesAndRevenueData.length > 1
                                        ? 'Sum of all revenue from ' +
                                            ((_6 = feesAndRevenueData.reduce(function (acc, curr) { return (acc = __spreadArray(__spreadArray([], __read(acc), false), [curr.name], false) || 0); }, [])) !== null && _6 !== void 0 ? _6 : []).join(',')
                                        : (_9 = (_8 = (_7 = feesAndRevenueData === null || feesAndRevenueData === void 0 ? void 0 : feesAndRevenueData[0]) === null || _7 === void 0 ? void 0 : _7.methodology) === null || _8 === void 0 ? void 0 : _8['Revenue']) !== null && _9 !== void 0 ? _9 : null,
                                    users: 'This only counts users that interact with protocol directly (so not through another contract, such as a dex aggregator), and only on arbitrum, avax, bsc, ethereum, xdai, optimism, polygon.'
                                },
                                expenses: (_10 = expenses.find(function (e) { return e.protocolId == protocolData.id; })) !== null && _10 !== void 0 ? _10 : null,
                                feesAndRevenueData: feesAndRevenueData,
                                tokenLiquidity: tokenLiquidity
                            },
                            revalidate: (0, api_1.maxAgeForNext)([22])
                        }];
            }
        });
    });
});
function getStaticPaths() {
    return __awaiter(this, void 0, void 0, function () {
        var res, paths;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, protocols_1.getProtocols)()];
                case 1:
                    res = _a.sent();
                    paths = res.protocols.slice(0, 30).map(function (_a) {
                        var name = _a.name;
                        return ({
                            params: { protocol: [(0, utils_1.standardizeProtocolName)(name)] }
                        });
                    });
                    return [2 /*return*/, { paths: paths, fallback: 'blocking' }];
            }
        });
    });
}
exports.getStaticPaths = getStaticPaths;
function Protocols(_a) {
    var protocolData = _a.protocolData, props = __rest(_a, ["protocolData"]);
    if (protocolData.module === 'dummy.js') {
        return ((0, jsx_runtime_1.jsx)(Dummy_1.DummyProtocol, { data: protocolData, title: "".concat(protocolData.name, " - DefiLlama"), backgroundColor: props.backgroundColor, protocol: props.protocol }));
    }
    return ((0, jsx_runtime_1.jsx)(Protocol_1.default, __assign({ title: "".concat(protocolData.name, " - DefiLlama"), protocolData: protocolData }, props)));
}
exports.default = Protocols;
