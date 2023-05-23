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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var methodologyMessage = "\nOpinions on shariah-compliant defi are extremely diverse, going from everything related to crypto is haram to the opposite.\n\nRight now the status quo seems to be that everyone must review all protocols and then decide for themselves, but that leads to lots of wasted effort.\nIn order to help, we built this dashboard that follows a simple set of guidelines to filter halal protocols.\nWe are not islamic scholars so you shouldn't assume it's perfect, it's just a small tool that saves you time from having to learn about >100 protocols to evaluate them.\n\nThe basic guidelines we used are:\n- Lending protocols that have time-based loans are removed\n- Yield aggregators that may deposit money into lending protocols are removed too\n- DEXs that provide liquidity for derivatives are removed (reasoning is that providing loans to a gambler is haram).\n- Option selling protocols are removed following the same logic.\n\nIn case of uncertainty we erred on the side of caution and removed the following protocols:\n- algo-stables\n- lending with fixed timeframes and interests\n- cdp\n- instadapp which offers some leveraged vaults\n- tokemak that offers DAO2DAO lending\n\nThis leaves us with:\n- Simple swap DEXs\n- Yield farming\n- Liquid staking\n- Bridge LPs\n";
/*
Blacklist

Removed because of
- lending: aave, justlend, compound, alpaca finance, venus, euler, solend, tectonic, iron bank, benqi, morpho, goldfinch, radiant, geist, moonwell, dForce, TrueFi
- "lending money to gamblers": GMX
- yield aggregator that can deposit money in lending protocols: yearn, beefy, badger dao, idle finance, yield yak, autofarm, vesper
- algo-stables: frax, origin dollar
- lending with fixed timeframes and interests (may be complaint but not sure): notional
- cdp (not sure): angle, Yeti Finance, abracadabra
- option selling: Francium, friktion, StakeDAO
- kind of lending: tokemak
- leverage: Instadapp
*/
var whitelist = [
    'Curve',
    'Lido',
    'Convex Finance',
    'Uniswap V2',
    'Uniswap V3',
    'Arrakis Finance',
    'PancakeSwap',
    'Osmosis',
    'Balancer',
    'VVS Finance',
    'Stargate',
    'SushiSwap',
    'DefiChain DEX',
    'Aura',
    'Biswap',
    'Quickswap',
    'Maiar Exchange',
    'Ankr',
    'Raydium',
    'Wombat Exchange',
    'Trader Joe',
    'Atrix',
    'Platypus Finance',
    'Vector Finance',
    'LooksRare',
    'MDEX',
    'cBridge',
    'Bancor V3',
    'Ellipsis Finance',
    'Concentrator',
    'Velodrome',
    'Beethoven X',
    'Across',
    'SpookySwap',
    'Meshswap',
    'Kokonut Swap',
    'Flamingo Finance',
    'Pangolin',
    'Dot Dot Finance',
    'Loopring',
    'Trisolaris',
    'ApeSwap AMM',
    'MM Finance Polygon',
    'Solidly V2'
    // stopped at protocols with <20M TVL
];
var react_1 = require("react");
var layout_1 = __importDefault(require("../../layout"));
var components_1 = require("../../components");
var YieldsPage_1 = __importDefault(require("../../components/YieldsPage"));
var Link_1 = __importDefault(require("../../components/Link"));
var Announcement_1 = __importDefault(require("../../components/Announcement"));
var utils_1 = require("../../components/YieldsPage/utils");
var api_1 = require("../../api");
var yield_1 = require("../../api/categories/yield");
var perf_1 = require("../../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('yields/halal', function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, cgTokens, tokens, tokenSymbolsList, pools;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, yield_1.getYieldPageData)()];
            case 1:
                data = __rest.apply(void 0, [(_a.sent()).props, []]);
                return [4 /*yield*/, (0, api_1.getAllCGTokensList)()];
            case 2:
                cgTokens = _a.sent();
                tokens = [];
                tokenSymbolsList = [];
                cgTokens.forEach(function (token) {
                    if (token.symbol) {
                        tokens.push({
                            name: token.name,
                            symbol: token.symbol.toUpperCase(),
                            logo: token.image2 || null,
                            fallbackLogo: token.image || null
                        });
                        tokenSymbolsList.push(token.symbol.toUpperCase());
                    }
                });
                pools = data.pools.filter(function (p) { return whitelist.includes(p.projectName); });
                return [2 /*return*/, {
                        props: __assign(__assign({}, data), { pools: pools, projectList: data.projectList.filter(function (p) { return whitelist.includes(p); }), categoryList: Array.from(pools.reduce(function (set, pool) {
                                set.add(pool.category);
                                return set;
                            }, new Set())), tokens: tokens, tokenSymbolsList: tokenSymbolsList }),
                        revalidate: (0, api_1.maxAgeForNext)([23])
                    }];
        }
    });
}); });
function YieldPlots(data) {
    var _a = __read((0, react_1.useState)(false), 2), methodologyActivated = _a[0], setMethodologyActivated = _a[1];
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Halal - DefiLlama Yield", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Announcement_1.default, { children: utils_1.disclaimer }), (0, jsx_runtime_1.jsxs)(components_1.PanelThicc, __assign({ as: "p", style: { whiteSpace: 'pre-line', display: 'block' } }, { children: ["This list aims to a practical tracker for halal defi yields.", (0, jsx_runtime_1.jsx)("br", {}), "Shariah-compliant defi is pretty subjective so our approach is to be practical and list DEXs, yield farming and liquid staking, excluding dexs that LP for derivatives.", (0, jsx_runtime_1.jsx)("br", {}), "We're not islamic scholars, this is just meant as a useful tool.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Link_1.default, { children: (0, jsx_runtime_1.jsx)(components_1.StyledAnchor, __assign({ onClick: function () { return setMethodologyActivated(true); }, style: { display: 'block' } }, { children: (0, jsx_runtime_1.jsx)("b", { children: "Full explanation of methodology" }) })) }), methodologyActivated && methodologyMessage] })), (0, jsx_runtime_1.jsx)(YieldsPage_1.default, __assign({}, data))] })));
}
exports.default = YieldPlots;
