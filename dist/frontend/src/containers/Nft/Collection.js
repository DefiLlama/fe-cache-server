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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTCollectionContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var layout_1 = __importDefault(require("../../layout"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var Medium_1 = require("../../layout/Stats/Medium");
var Large_1 = require("../../layout/Stats/Large");
var TokenLogo_1 = __importDefault(require("../../components/TokenLogo"));
var FormattedName_1 = __importDefault(require("../../components/FormattedName"));
var utils_1 = require("../../utils");
var dynamic_1 = __importDefault(require("next/dynamic"));
var react_feather_1 = require("react-feather");
var link_1 = __importDefault(require("next/link"));
var components_1 = require("../../components");
var router_1 = require("next/router");
var Search_1 = require("../../components/Search");
var CollectionScatterChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('./CollectionScatterChart')); }); }, {
    ssr: false
});
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
var OrderbookChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('./OrderbookChart')); }); }, {
    ssr: false
});
function NFTCollectionContainer(_a) {
    var _b, _c, _d, _e;
    var name = _a.name, data = _a.data, stats = _a.stats, sales = _a.sales, salesExOutliers = _a.salesExOutliers, salesMedian1d = _a.salesMedian1d, address = _a.address, floorHistory = _a.floorHistory, orderbook = _a.orderbook;
    var floorPrice = floorHistory ? (_b = floorHistory[floorHistory.length - 1]) === null || _b === void 0 ? void 0 : _b[1] : null;
    var volume24h = stats ? (_c = stats[stats.length - 1]) === null || _c === void 0 ? void 0 : _c[1] : null;
    var router = (0, router_1.useRouter)();
    var includeOutliers = router.isReady && router.query.includeOutliers === 'true' ? true : false;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: (name || 'NFTs') + ' - DefiLlama' }, { children: [(0, jsx_runtime_1.jsx)(Search_1.NFTsSearch, { step: {
                    category: 'NFT Collections',
                    name: name,
                    route: 'nfts',
                    hideOptions: true
                } }), (0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DetailsWrapper, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.nftCollectionIconUrl)(address), fallbackLogo: (_d = data === null || data === void 0 ? void 0 : data[0]) === null || _d === void 0 ? void 0 : _d.image, size: 48 }), (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: name, fontWeight: 700 })] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Floor Price" }), (0, jsx_runtime_1.jsx)("span", { children: floorPrice ? floorPrice.toFixed(2) + ' ETH' : '' })] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "24h Volume" }), (0, jsx_runtime_1.jsx)("span", { children: volume24h ? volume24h.toFixed(2) + ' ETH' : '' })] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Total Supply" }), (0, jsx_runtime_1.jsx)("span", { children: (_e = data === null || data === void 0 ? void 0 : data[0]) === null || _e === void 0 ? void 0 : _e.totalSupply })] }), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://etherscan.io/token/".concat(address.split(':')[0]), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, style: { width: 'fit-content' } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "View on Etherscan" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))] }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartWrapper, __assign({ style: { padding: '20px 0 0 0' } }, { children: [(0, jsx_runtime_1.jsxs)(components_1.ToggleWrapper2, __assign({ style: { padding: '0 20px' } }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "showMcapChart", checked: includeOutliers, onChange: function () {
                                            return router.push({ pathname: router.pathname, query: __assign(__assign({}, router.query), { includeOutliers: !includeOutliers }) }, undefined, {
                                                shallow: true
                                            });
                                        } }), (0, jsx_runtime_1.jsx)("span", { children: "Include Outliers" })] })), (0, jsx_runtime_1.jsx)(CollectionScatterChart, { sales: includeOutliers ? sales : salesExOutliers, salesMedian1d: salesMedian1d, volume: stats })] }))] }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartsWrapper, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ style: { minHeight: '360px', padding: '20px 16px 20px 0' } }, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: floorHistory, hideDefaultLegend: true, valueSymbol: "ETH", title: "Floor Price" }) })), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, __assign({ style: { minHeight: '360px', padding: '20px 16px 20px 0' } }, { children: (0, jsx_runtime_1.jsx)(OrderbookChart, { chartData: orderbook }) }))] })] })));
}
exports.NFTCollectionContainer = NFTCollectionContainer;
