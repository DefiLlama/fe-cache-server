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
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var RecentProtocols_1 = require("../components/RecentProtocols");
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var utils_1 = require("../api/categories/protocols/utils");
var constants_1 = require("../constants");
var perf_1 = require("../utils/perf");
var exclude = [
    'DeerFi',
    'FireDAO',
    'Robo-Advisor for Yield',
    'SenpaiSwap',
    'Zunami Protocol',
    'NowSwap',
    'NeoBurger',
    'MochiFi',
    'StakeHound',
    'Mento',
    'Lightning Network',
    'Secret Bridge',
    'Karura Swap',
    'Karura Liquid-Staking',
    'Karura Dollar (kUSD)',
    'Tezos Liquidity Baking',
    'Notional',
    'Tinlake',
    'Kuu Finance',
    'COTI Treasury',
    'Terra Bridge',
    'Parallel Liquid Crowdloan',
    'Parallel Liquid Staking',
    'Parallel Lending',
    'Parallel AMM',
    'Parallel DAOfi',
    'Algofi Lend',
    'Algofi Swap',
    'BNBMiner Finance',
    'Gnosis Protocol v1',
    'Multi-Chain Miner',
    'Swap Cat',
    'FLRLoans',
    'Pando Leaf',
    'Pando Rings',
    '4Swap',
    'REX Staking',
    'Sapphire Mine',
    'MM Stableswap',
    'MM Stableswap Polygon',
    'Sushi Furo',
    'Sushi Trident',
    'Poly Network',
    'Frax Swap',
    'Kava Mint',
    'Quarry',
    'Canto Dex',
    'Katana DEX',
    'Canto Lending',
    'OKCSwap',
    'Fraxlend',
    'Tesseract',
    'Spartacus Exchange',
    'NerveSwap',
    'NULS POCM',
    'NerveBridge',
    'Djed Stablecoin',
    'USK',
    'Bow',
    'FIN',
    'Black Whale',
    'CALC',
    'BAO Ballast',
    'BAO Baskets',
    'BAO Markets',
    'BAO Swap',
    'RealT RMM Marketplace',
    'Bifrost Liquid Crowdloan',
    'Kava Boost',
    'Kava Earn',
    'Kava Liquid',
    'Algo Liquid Governance',
    'WanLend',
    'sKCS',
    'Lachain Yield Market',
    'Ladex Exchange',
    'Oswap',
    'BabelFish',
    'ThetaSwap',
    'MooniSwap',
    'Talent Protocol',
    'RealT Tokens',
    'TTswap',
    'Ethereum Foundation',
    'THORWallet DEX',
    'Nouns',
    'Libre Swap',
    'Omax Swap',
    'Zeniq Swap',
    'LaDAO Xocolatl',
    'Meter Passport',
    'Metavault Binary Options',
    'Wan Bridge',
    'DarkAuto',
    'Crescent Dex',
    'Lago Bridge',
    'Ostable',
    'Oswap AMM'
];
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('airdrops', function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, protocolsRaw, forks, raises, protocols, forkedList;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    (0, protocols_1.getSimpleProtocolsPageData)(__spreadArray(__spreadArray([], __read(utils_1.basicPropertiesToKeep), false), ['extraTvl', 'listedAt', 'chainTvls', 'defillamaId'], false)),
                    fetch(constants_1.FORK_API).then(function (r) { return r.json(); }),
                    fetch(constants_1.RAISES_API).then(function (r) { return r.json(); })
                ])];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 3]), protocolsRaw = _a[0], forks = _a[1].forks, raises = _a[2].raises;
                protocols = protocolsRaw.protocols
                    .filter(function (token) { return (token.symbol === null || token.symbol === '-') && !exclude.includes(token.name); })
                    .map(function (p) { return (__assign({ listedAt: 1624728920, totalRaised: raises
                        .filter(function (r) { return (r.defillamaId && p.defillamaId ? r.defillamaId.toString() === p.defillamaId.toString() : false); })
                        .reduce(function (acc, curr) {
                        var amount = curr.amount || 0;
                        if (!Number.isNaN(amount)) {
                            acc += amount * 1e6;
                        }
                        return acc;
                    }, 0) }, p)); })
                    .sort(function (a, b) { return a.listedAt - b.listedAt; });
                forkedList = {};
                Object.values(forks).map(function (list) {
                    list.map(function (f) {
                        forkedList[f] = true;
                    });
                });
                return [2 /*return*/, {
                        props: {
                            protocols: protocols,
                            chainList: protocolsRaw.chains,
                            forkedList: forkedList
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function Protocols(props) {
    return ((0, jsx_runtime_1.jsx)(RecentProtocols_1.RecentProtocols, __assign({ title: "Airdroppable protocols - Defi Llama", name: "Airdrops", header: "Tokenless protocols that may airdrop \uD83E\uDDD1\u200D\uD83C\uDF3E" }, props)));
}
exports.default = Protocols;
