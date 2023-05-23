"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptions = exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../Theme");
var layout_1 = __importDefault(require("../layout"));
var components_1 = require("../components");
var Search_1 = require("../components/Search");
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var data_1 = require("../hooks/data");
var perf_1 = require("../utils/perf");
var TableWithSearch_1 = require("../components/Table/TableWithSearch");
var columns_1 = require("../components/Table/Defi/columns");
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('categories', function () { return __awaiter(void 0, void 0, void 0, function () {
    var protocols, chartAndColorsData, categories, formattedCategories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, protocols_1.getProtocolsRaw)()];
            case 1:
                protocols = _a.sent();
                return [4 /*yield*/, (0, protocols_1.getCategoriesPageData)()];
            case 2:
                chartAndColorsData = _a.sent();
                categories = {};
                protocols.protocols.forEach(function (p) {
                    var cat = p.category;
                    if (categories[cat] === undefined) {
                        categories[cat] = { protocols: 0, tvl: 0 };
                    }
                    categories[cat].protocols++;
                    categories[cat].tvl += p.tvl;
                });
                formattedCategories = Object.entries(categories).map(function (_a) {
                    var _b = __read(_a, 2), name = _b[0], details = _b[1];
                    return (__assign(__assign({ name: name }, details), { description: exports.descriptions[name] || '' }));
                });
                return [2 /*return*/, {
                        props: __assign({ categories: formattedCategories.sort(function (a, b) { return b.tvl - a.tvl; }) }, chartAndColorsData),
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
exports.descriptions = {
    Dexes: 'Protocols where you can swap/trade cryptocurrency',
    Yield: 'Protocols that pay you a reward for your staking/LP on their platform',
    Lending: 'Protocols that allow users to borrow and lend assets',
    'Cross Chain': 'Protocols that add interoperability between different blockchains',
    Staking: 'Protocols that allow you to stake assets in exchange of a reward',
    Services: 'Protocols that provide a service to the user',
    'Yield Aggregator': 'Protocols that aggregated yield from diverse protocols',
    Minting: 'Protocols NFT minting Related (in work)',
    Assets: '(will be removed)',
    Derivatives: 'Protocols for betting with leverage',
    Payments: 'Protocols that offer the ability to pay/send/receive cryptocurrency',
    Privacy: 'Protocols that have the intention of hiding information about transactions',
    Insurance: 'Protocols that are designed to provide monetary protections',
    Indexes: 'Protocols that have a way to track/created the performance of a group of related assets',
    Synthetics: 'Protocol that created a tokenized derivative that mimics the value of another asset.',
    CDP: 'Protocols that mint its own stablecoin using collateralized lending',
    Bridge: 'Protocols that bridge tokens from one network to another',
    'Reserve Currency': 'OHM forks: Protocols that uses a reserve of valuable assets acquired through bonding and staking to issue and back its native token',
    Options: 'Protocols that give you the right to buy an asset at a fixed price',
    Launchpad: 'Protocols that launch new projects and coins',
    Gaming: 'Protocols that have gaming components',
    'Prediction Market': 'Protocols that allow you to wager/bet/buy in future results',
    'Algo-Stables': 'Protocols that provide algorithmic coins to stablecoins',
    'NFT Marketplace': 'Protocols where users can buy/sell/rent NFTs',
    'NFT Lending': 'Protocols that allow you to collateralize your NFT for a loan',
    RWA: 'Protocols that involve Real World Assets, such as house tokenization',
    'RWA Lending': 'Protocols that bridge traditional finance and blockchain ecosystems by tokenizing real-world assets for use as collateral or credit assessment, enabling decentralized lending and borrowing opportunities.',
    Farm: 'Protocols that allow users to lock money in exchange for a protocol token',
    'Liquid Staking': 'Protocols that enable you to earn staking rewards on your tokens while also providing a tradeable and liquid receipt for your staked position',
    Oracle: 'Protocols that connect data from the outside world (off-chain) with the blockchain world (on-chain)',
    'Leveraged Farming': 'Protocols that allow you to leverage yield farm with borrowed money',
    'Options Vault': 'Protocols that allow you to deposit collateral into an options strategy',
    'Uncollateralized Lending': 'Protocol that allows you to lend against known parties that can borrow without collaterall',
    'Exotic Options': 'Protocols that provide option vaults while also adding borrowing on top',
    'Liquidity manager': 'Protocols that manage Liquidity Positions in concentrated liquidity AMMs',
    'Staking Pool': "Refers to platforms where users stake their assets on native blockchains to help secure the network and earn rewards. Unlike Liquid Staking, users don't receive a token representing their staked assets, and their funds are locked up during the staking period, limiting participation in other DeFi activities"
};
function Protocols(_a) {
    var categories = _a.categories, chartData = _a.chartData, categoryColors = _a.categoryColors, uniqueCategories = _a.uniqueCategories;
    var categoriesWithExtraTvlsByDay = (0, data_1.useCalcGroupExtraTvlsByDay)(chartData).chainsWithExtraTvlsByDay;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Categories - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Home', name: 'Categories' } }), (0, jsx_runtime_1.jsx)(Theme_1.Header, { children: "Protocol Categories" }), (0, jsx_runtime_1.jsx)(ChartsWrapper, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: categoriesWithExtraTvlsByDay, stacks: uniqueCategories, stackColors: categoryColors, customLegendName: "Category", customLegendOptions: uniqueCategories, hideDefaultLegend: true, valueSymbol: "$", title: "" }) }), (0, jsx_runtime_1.jsx)(TableWithSearch_1.TableWithSearch, { data: categories, columns: columns_1.categoriesColumn, columnToSearch: 'name', placeholder: 'Search category...' })] })));
}
exports.default = Protocols;
var ChartsWrapper = (0, styled_components_1.default)(components_1.Panel)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n"], ["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n"])));
var templateObject_1;
