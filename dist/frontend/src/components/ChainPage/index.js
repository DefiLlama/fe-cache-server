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
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var image_1 = __importDefault(require("next/future/image"));
var link_1 = __importDefault(require("next/link"));
var router_1 = require("next/router");
var styled_components_1 = __importDefault(require("styled-components"));
var lodash_1 = require("lodash");
var components_1 = require("../../components");
var Announcement_1 = __importDefault(require("../../components/Announcement"));
var Misc_1 = require("../../components/ECharts/ProtocolChart/Misc");
var Table_1 = require("../../components/Table");
var Search_1 = require("../../components/Search");
var Filters_1 = require("../../components/Filters");
var SEO_1 = __importDefault(require("../../components/SEO"));
var LocalLoader_1 = __importDefault(require("../../components/LocalLoader"));
var LocalStorage_1 = require("../../contexts/LocalStorage");
var stablecoins_1 = require("../../utils/stablecoins");
var utils_1 = require("../../utils");
var chainTokens_1 = require("../../constants/chainTokens");
var client_1 = require("../../api/categories/protocols/client");
var peeking_llama_png_1 = __importDefault(require("~/assets/peeking-llama.png"));
var shared_1 = require("./shared");
var react_feather_1 = require("react-feather");
var defi_1 = require("../../hooks/data/defi");
var utils_2 = require("../ECharts/utils");
var EasterLlama = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding: 0;\n\twidth: 41px;\n\theight: 34px;\n\tposition: absolute;\n\tbottom: -36px;\n\tleft: 0;\n\n\timg {\n\t\twidth: 41px !important;\n\t\theight: 34px !important;\n\t}\n"], ["\n\tpadding: 0;\n\twidth: 41px;\n\theight: 34px;\n\tposition: absolute;\n\tbottom: -36px;\n\tleft: 0;\n\n\timg {\n\t\twidth: 41px !important;\n\t\theight: 34px !important;\n\t}\n"])));
var DataWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tposition: relative;\n\tmin-height: 500px;\n\n\t#chartWrapper {\n\t\tflex: 1;\n\t}\n\n\t@media screen and (min-width: 105rem) {\n\t\tflex-direction: row;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tposition: relative;\n\tmin-height: 500px;\n\n\t#chartWrapper {\n\t\tflex: 1;\n\t}\n\n\t@media screen and (min-width: 105rem) {\n\t\tflex-direction: row;\n\t}\n"])));
var PanelWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 10px;\n\tflex: 1;\n\n\t@media screen and (min-width: 105rem) {\n\t\tflex-direction: column;\n\t\tmax-width: 14%;\n\t\tmin-width: 250px;\n\t}\n"], ["\n\tdisplay: flex;\n\tgap: 10px;\n\tflex: 1;\n\n\t@media screen and (min-width: 105rem) {\n\t\tflex-direction: column;\n\t\tmax-width: 14%;\n\t\tmin-width: 250px;\n\t}\n"])));
var ToggleWrapper = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin-left: auto;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin-left: auto;\n"])));
var ChainChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/ChainChart')); }); }, {
    ssr: false
});
var Game = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../game')); }); });
var BASIC_DENOMINATIONS = ['USD'];
var setSelectedChain = function (newSelectedChain) { return (newSelectedChain === 'All' ? '/' : "/chain/".concat(newSelectedChain)); };
var sum = function (obj) {
    return Object.values(obj).reduce(function (acc, curr) { return (typeof curr === 'number' ? (acc += curr) : acc); }, 0);
};
function GlobalPage(_a) {
    var _b, _c, _d, _e, _f, _g;
    var _h = _a.selectedChain, selectedChain = _h === void 0 ? 'All' : _h, chainsSet = _a.chainsSet, protocolsList = _a.protocolsList, chart = _a.chart, _j = _a.extraTvlCharts, extraTvlCharts = _j === void 0 ? {} : _j, volumeData = _a.volumeData, _k = _a.chainVolumeData, chainVolumeData = _k === void 0 ? {} : _k, feesData = _a.feesData, usersData = _a.usersData, txsData = _a.txsData, raisesData = _a.raisesData, _l = _a.stablecoinsData, stablecoinsData = _l === void 0 ? {} : _l, chainFeesData = _a.chainFeesData, bridgeData = _a.bridgeData;
    var _m = (0, client_1.useGetProtocolsList)({ chain: selectedChain }), fullProtocolsList = _m.fullProtocolsList, parentProtocols = _m.parentProtocols, fetchingProtocolsList = _m.isLoading;
    var _o = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvlsEnabled = _o[0];
    var router = (0, router_1.useRouter)();
    var denomination = (_c = (_b = router.query) === null || _b === void 0 ? void 0 : _b.currency) !== null && _c !== void 0 ? _c : 'USD';
    var _p = router.query, minTvl = _p.minTvl, maxTvl = _p.maxTvl;
    var _q = __read(React.useState(false), 2), easterEgg = _q[0], setEasterEgg = _q[1];
    var _r = __read((0, LocalStorage_1.useDarkModeManager)(), 2), darkMode = _r[0], toggleDarkMode = _r[1];
    var activateEasterEgg = function () {
        if (easterEgg) {
            if (!darkMode) {
                toggleDarkMode();
            }
            window.location.reload();
        }
        else {
            if (darkMode) {
                toggleDarkMode();
            }
            setEasterEgg(true);
        }
    };
    var _s = React.useMemo(function () {
        var globalChart = chart.map(function (data) {
            var sum = data[1];
            Object.entries(extraTvlCharts).forEach(function (_a) {
                var _b = __read(_a, 2), prop = _b[0], propCharts = _b[1];
                var stakedData = propCharts.find(function (x) { return x[0] === data[0]; });
                // find current date and only add values on that date in "data" above
                if (stakedData) {
                    if (prop === 'doublecounted' && !extraTvlsEnabled['doublecounted']) {
                        sum -= stakedData[1];
                    }
                    if (prop === 'liquidstaking' && !extraTvlsEnabled['liquidstaking']) {
                        sum -= stakedData[1];
                    }
                    if (prop === 'dcAndLsOverlap') {
                        if (!extraTvlsEnabled['doublecounted'] || !extraTvlsEnabled['liquidstaking']) {
                            sum += stakedData[1];
                        }
                    }
                    if (extraTvlsEnabled[prop.toLowerCase()] && prop !== 'doublecounted' && prop !== 'liquidstaking') {
                        sum += stakedData[1];
                    }
                }
            });
            return [data[0], sum];
        });
        var tvl = (0, utils_1.getPrevTvlFromChart)(globalChart, 0);
        var tvlPrevDay = (0, utils_1.getPrevTvlFromChart)(globalChart, 1);
        var volumeChangeUSD = (0, utils_1.getPercentChange)(tvl, tvlPrevDay);
        return { totalVolumeUSD: tvl, volumeChangeUSD: volumeChangeUSD, globalChart: globalChart };
    }, [chart, extraTvlsEnabled, extraTvlCharts]), totalVolumeUSD = _s.totalVolumeUSD, volumeChangeUSD = _s.volumeChangeUSD, globalChart = _s.globalChart;
    var chainOptions = ['All'].concat(chainsSet).map(function (label) { return ({ label: label, to: setSelectedChain(label) }); });
    var chainProtocolsVolumes = React.useMemo(function () {
        var _a;
        var allProtocolVolumes = [];
        chainVolumeData &&
            ((_a = chainVolumeData === null || chainVolumeData === void 0 ? void 0 : chainVolumeData.protocols) === null || _a === void 0 ? void 0 : _a.forEach(function (prototcol) {
                return allProtocolVolumes.push.apply(allProtocolVolumes, __spreadArray([prototcol], __read(((prototcol === null || prototcol === void 0 ? void 0 : prototcol.subRows) || [])), false));
            }));
        return allProtocolVolumes;
    }, [chainVolumeData]);
    var chainProtocolsFees = React.useMemo(function () {
        var _a;
        var allProtocolFees = [];
        chainFeesData &&
            ((_a = chainFeesData === null || chainFeesData === void 0 ? void 0 : chainFeesData.protocols) === null || _a === void 0 ? void 0 : _a.forEach(function (prototcol) { return allProtocolFees.push.apply(allProtocolFees, __spreadArray([prototcol], __read(((prototcol === null || prototcol === void 0 ? void 0 : prototcol.subRows) || [])), false)); }));
        return allProtocolFees;
    }, [chainFeesData]);
    var bridgeChartData = React.useMemo(function () {
        var _a;
        return bridgeData
            ? (_a = bridgeData === null || bridgeData === void 0 ? void 0 : bridgeData.chainVolumeData) === null || _a === void 0 ? void 0 : _a.map(function (volume) { return [volume === null || volume === void 0 ? void 0 : volume.date, volume === null || volume === void 0 ? void 0 : volume.Deposits, volume.Withdrawals]; })
            : null;
    }, [bridgeData]);
    var protocolTotals = React.useMemo(function () {
        if (!fetchingProtocolsList && fullProtocolsList) {
            var list = (0, defi_1.formatProtocolsList)({
                extraTvlsEnabled: extraTvlsEnabled,
                protocols: fullProtocolsList,
                parentProtocols: parentProtocols,
                volumeData: chainProtocolsVolumes,
                feesData: chainProtocolsFees
            });
            return list;
        }
        return protocolsList;
    }, [
        extraTvlsEnabled,
        fetchingProtocolsList,
        fullProtocolsList,
        parentProtocols,
        protocolsList,
        chainProtocolsVolumes,
        chainProtocolsFees
    ]);
    var topToken = { name: 'Uniswap', tvl: 0 };
    if (protocolTotals.length > 0) {
        topToken.name = (_d = protocolTotals[0]) === null || _d === void 0 ? void 0 : _d.name;
        topToken.tvl = (_e = protocolTotals[0]) === null || _e === void 0 ? void 0 : _e.tvl;
        if (topToken.name === 'AnySwap') {
            topToken.name = (_f = protocolTotals[1]) === null || _f === void 0 ? void 0 : _f.name;
            topToken.tvl = (_g = protocolTotals[1]) === null || _g === void 0 ? void 0 : _g.tvl;
        }
    }
    var tvl = (0, utils_1.formattedNum)(totalVolumeUSD, true);
    var percentChange = volumeChangeUSD === null || volumeChangeUSD === void 0 ? void 0 : volumeChangeUSD.toFixed(2);
    var volumeChange = (percentChange > 0 ? '+' : '') + percentChange + '%';
    var _t = __read(React.useMemo(function () {
        var _a, _b;
        var DENOMINATIONS = [];
        var chainGeckoId = null;
        if (selectedChain !== 'All') {
            var chainDenomination = (_a = chainTokens_1.chainCoingeckoIds[selectedChain]) !== null && _a !== void 0 ? _a : null;
            chainGeckoId = (_b = chainDenomination === null || chainDenomination === void 0 ? void 0 : chainDenomination.geckoId) !== null && _b !== void 0 ? _b : null;
            if (chainGeckoId && chainDenomination.symbol) {
                DENOMINATIONS = __spreadArray(__spreadArray([], __read(BASIC_DENOMINATIONS), false), [chainDenomination.symbol], false);
            }
        }
        return [DENOMINATIONS, chainGeckoId];
    }, [selectedChain]), 2), DENOMINATIONS = _t[0], chainGeckoId = _t[1];
    var _u = (0, client_1.useDenominationPriceHistory)(chainGeckoId), denominationPriceHistory = _u.data, loading = _u.loading;
    var volumeChart = React.useMemo(function () {
        var _a, _b;
        return selectedChain === 'All' || ((_a = volumeData === null || volumeData === void 0 ? void 0 : volumeData.totalDataChart[0]) === null || _a === void 0 ? void 0 : _a[0][selectedChain])
            ? (_b = volumeData === null || volumeData === void 0 ? void 0 : volumeData.totalDataChart) === null || _b === void 0 ? void 0 : _b[0].map(function (val) { return [
                val.date,
                selectedChain === 'All' ? sum(val) : val[selectedChain]
            ]; })
            : null;
    }, [volumeData, selectedChain]);
    var feesChart = React.useMemo(function () {
        var _a, _b, _c;
        return ((_a = feesData === null || feesData === void 0 ? void 0 : feesData.totalDataChart) === null || _a === void 0 ? void 0 : _a[0].length)
            ? (_c = (_b = feesData === null || feesData === void 0 ? void 0 : feesData.totalDataChart) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.map(function (val) { return [val.date, val.Fees, val.Revenue]; })
            : null;
    }, [feesData === null || feesData === void 0 ? void 0 : feesData.totalDataChart]);
    var raisesChart = React.useMemo(function () {
        return raisesData && (raisesData === null || raisesData === void 0 ? void 0 : raisesData.raises)
            ? (0, lodash_1.mapValues)((0, lodash_1.groupBy)(raisesData.raises, function (val) { return (0, utils_2.getUtcDateObject)(val.date); }), function (raises) { return (0, lodash_1.sumBy)(raises, 'amount'); })
            : null;
    }, [raisesData]);
    var peggedAreaTotalData = (0, stablecoins_1.useBuildPeggedChartData)(stablecoinsData === null || stablecoinsData === void 0 ? void 0 : stablecoinsData.chartDataByPeggedAsset, stablecoinsData === null || stablecoinsData === void 0 ? void 0 : stablecoinsData.peggedAssetNames, Object.values((stablecoinsData === null || stablecoinsData === void 0 ? void 0 : stablecoinsData.peggedNameToChartDataIndex) || {}), 'mcap', stablecoinsData === null || stablecoinsData === void 0 ? void 0 : stablecoinsData.chainTVLData, selectedChain).peggedAreaTotalData;
    var _v = __read(React.useMemo(function () {
        var priceHistory = denomination === 'USD' && (denominationPriceHistory === null || denominationPriceHistory === void 0 ? void 0 : denominationPriceHistory.prices)
            ? denominationPriceHistory === null || denominationPriceHistory === void 0 ? void 0 : denominationPriceHistory.prices.map(function (_a) {
                var _b = __read(_a, 2), timestamp = _b[0], price = _b[1];
                return [timestamp / 1000, price];
            })
            : null;
        if (denomination !== 'USD' && denominationPriceHistory && chainGeckoId) {
            var normalizedDenomination_1 = Object.fromEntries(denominationPriceHistory.prices.map(function (_a) {
                var _b = __read(_a, 2), timestamp = _b[0], price = _b[1];
                return [(0, utils_2.getUtcDateObject)(timestamp / 1000), price];
            }));
            var denominatedTvls = globalChart.map(function (_a) {
                var _b = __read(_a, 2), date = _b[0], tvl = _b[1];
                return [
                    date,
                    tvl / normalizedDenomination_1[(0, utils_2.getUtcDateObject)(date)]
                ];
            });
            var denominatedVolumes = volumeChart === null || volumeChart === void 0 ? void 0 : volumeChart.map(function (_a) {
                var _b = __read(_a, 2), date = _b[0], volume = _b[1];
                return [
                    date,
                    volume / normalizedDenomination_1[(0, utils_2.getUtcDateObject)(date)]
                ];
            });
            var denominatedFess = feesChart === null || feesChart === void 0 ? void 0 : feesChart.map(function (_a) {
                var _b = __read(_a, 3), date = _b[0], fees = _b[1], revenue = _b[2];
                return [
                    date,
                    fees / normalizedDenomination_1[(0, utils_2.getUtcDateObject)(date)],
                    revenue / normalizedDenomination_1[(0, utils_2.getUtcDateObject)(date)]
                ];
            });
            return [denominatedTvls, denominatedVolumes, denominatedFess];
        }
        else
            return [globalChart, volumeChart, feesChart, priceHistory];
    }, [chainGeckoId, globalChart, denominationPriceHistory, denomination, volumeChart, feesChart]), 4), finalTvlChart = _v[0], finalVolumeChart = _v[1], finalFeesChart = _v[2], priceHistory = _v[3];
    var updateRoute = function (key, val) {
        var _a;
        router.push({
            query: __assign(__assign({}, router.query), (_a = {}, _a[key] = val, _a))
        }, undefined, { shallow: true });
    };
    React.useEffect(function () {
        if (selectedChain !== 'All' && !router.query.tvl) {
            updateRoute('tvl', 'true');
        }
    }, []);
    var dominance = (0, utils_1.getTokenDominance)(topToken, totalVolumeUSD);
    var isLoading = denomination !== 'USD' && loading;
    var finalProtocolTotals = React.useMemo(function () {
        var isValidTvlRange = (minTvl !== undefined && !Number.isNaN(Number(minTvl))) || (maxTvl !== undefined && !Number.isNaN(Number(maxTvl)));
        return isValidTvlRange
            ? protocolTotals.filter(function (p) { return (minTvl ? p.tvl > minTvl : true) && (maxTvl ? p.tvl < maxTvl : true); })
            : protocolTotals;
    }, [minTvl, maxTvl, protocolTotals]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SEO_1.default, { cardName: selectedChain, chain: selectedChain, tvl: tvl, volumeChange: volumeChange }), (0, jsx_runtime_1.jsxs)(Announcement_1.default, { children: [(0, jsx_runtime_1.jsx)(image_1.default, { src: "https://icons.llamao.fi/icons/memes/gib.png?w=36&h=36", alt: "Cute", width: 18, height: 18, unoptimized: true, style: { marginRight: '0.25rem', display: 'inline' } }), '  ', "We've released our", ' ', (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/nfts" }, { children: (0, jsx_runtime_1.jsxs)("a", { children: ["NFT dashboard ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14, style: { display: 'inline' } }), ' '] }) })), ' !'] }), selectedChain === 'zkSync Era' && ((0, jsx_runtime_1.jsx)(Announcement_1.default, __assign({ warning: true }, { children: "DefiLlama doesn't whitelist/audit/endorse any protocols listed, we list everything. Exercise caution." }))), (0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: {
                    category: 'Home',
                    name: selectedChain === 'All' ? 'All Protocols' : selectedChain
                } }), (0, jsx_runtime_1.jsxs)(DataWrapper, { children: [(0, jsx_runtime_1.jsxs)(PanelWrapper, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Total Value Locked (USD)" }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { '--tile-text-color': '#4f8fea' } }, { children: tvl })), (0, jsx_runtime_1.jsxs)(components_1.DownloadButton, __assign({ href: "https://api.llama.fi/simpleChainDataset/".concat(selectedChain, "?").concat(Object.entries(extraTvlsEnabled)
                                            .filter(function (t) { return t[1] === true; })
                                            .map(function (t) { return "".concat(t[0], "=true"); })
                                            .join('&')), target: "_blank" }, { children: [(0, jsx_runtime_1.jsx)(components_1.DownloadIcon, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }))] }), (0, jsx_runtime_1.jsxs)(components_1.PanelHiddenMobile, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Change (24h)" }), percentChange > 0 ? ((0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#3cfd99' } }, { children: [" ", percentChange || 0, "%"] }))) : ((0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#fd3c99' } }, { children: [" ", percentChange || 0, "%"] })))] }), (0, jsx_runtime_1.jsxs)(components_1.PanelHiddenMobile, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: [topToken.name, " Dominance"] }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#46acb7' } }, { children: [" ", dominance, "%"] }))] })] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, __assign({ id: "chartWrapper", style: { minHeight: '430px' } }, { children: [!isLoading ? ((0, jsx_runtime_1.jsxs)(Misc_1.FiltersWrapper, __assign({ style: { margin: 0, marginBottom: 'auto' } }, { children: [DENOMINATIONS.length > 0 && ((0, jsx_runtime_1.jsx)(Misc_1.Filters, { children: DENOMINATIONS.map(function (D) { return ((0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ active: denomination === D, onClick: function () { return updateRoute('currency', D); } }, { children: D }), D)); }) })), (0, jsx_runtime_1.jsx)(ToggleWrapper, { children: [
                                            {
                                                id: 'tvl',
                                                name: 'TVL',
                                                isVisible: true
                                            },
                                            {
                                                id: 'volume',
                                                name: 'Volume',
                                                isVisible: !!finalVolumeChart
                                            },
                                            {
                                                id: 'fees',
                                                name: 'Fees',
                                                isVisible: !!finalFeesChart
                                            },
                                            {
                                                id: 'revenue',
                                                name: 'Revenue',
                                                isVisible: !!finalFeesChart
                                            },
                                            {
                                                id: 'price',
                                                name: 'Price',
                                                isVisible: Boolean(priceHistory &&
                                                    denomination === 'USD' &&
                                                    (priceHistory === null || priceHistory === void 0 ? void 0 : priceHistory[(priceHistory === null || priceHistory === void 0 ? void 0 : priceHistory.length) - 1][0]) > (globalChart === null || globalChart === void 0 ? void 0 : globalChart[0][0]))
                                            },
                                            {
                                                id: 'users',
                                                name: 'Active Users',
                                                isVisible: (usersData === null || usersData === void 0 ? void 0 : usersData.length) > 0
                                            },
                                            {
                                                id: 'txs',
                                                name: 'Transactions',
                                                isVisible: (txsData === null || txsData === void 0 ? void 0 : txsData.length) > 0
                                            },
                                            {
                                                id: 'raises',
                                                name: 'Raises',
                                                isVisible: selectedChain === 'All'
                                            },
                                            {
                                                id: 'stables',
                                                name: 'Stablecoins',
                                                isVisible: peggedAreaTotalData && (peggedAreaTotalData === null || peggedAreaTotalData === void 0 ? void 0 : peggedAreaTotalData.length) > 0
                                            },
                                            {
                                                id: 'inflows',
                                                name: 'Inflows',
                                                isVisible: bridgeChartData && (bridgeChartData === null || bridgeChartData === void 0 ? void 0 : bridgeChartData.length) && selectedChain !== 'All'
                                            }
                                        ].map(function (_a) {
                                            var id = _a.id, name = _a.name, isVisible = _a.isVisible;
                                            return isVisible && (loading === false || selectedChain === 'All' || chainGeckoId === null) ? ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", onClick: function () {
                                                            updateRoute(id, router.query[id] === 'true' ? 'false' : 'true');
                                                        }, checked: router.query[id] === 'true' }, id), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: name }) }))] })) : (false);
                                        }) })] }))) : null, easterEgg ? ((0, jsx_runtime_1.jsx)(Game, {})) : isLoading ? ((0, jsx_runtime_1.jsx)(LocalLoader_1.default, { style: { margin: 'auto', minHeight: '360px' } })) : ((0, jsx_runtime_1.jsx)(ChainChart, { height: "360px", datasets: [
                                    {
                                        feesChart: finalFeesChart,
                                        volumeChart: finalVolumeChart,
                                        bridgeChartData: bridgeChartData,
                                        chainProtocolsFees: chainProtocolsFees,
                                        chainProtocolsVolumes: chainProtocolsVolumes,
                                        globalChart: finalTvlChart,
                                        raisesData: raisesChart,
                                        totalStablesData: peggedAreaTotalData,
                                        bridgeData: bridgeChartData,
                                        usersData: usersData,
                                        txsData: txsData
                                    }
                                ], customLegendName: "Chain", hideDefaultLegend: true, valueSymbol: "$", title: "", DENOMINATIONS: DENOMINATIONS, denomination: denomination, updateRoute: updateRoute, router: router }))] })), (0, jsx_runtime_1.jsx)(EasterLlama, __assign({ onClick: activateEasterEgg }, { children: (0, jsx_runtime_1.jsx)(image_1.default, { src: peeking_llama_png_1.default, width: "41px", height: "34px", alt: "Activate Easter Egg" }) }))] }), (0, jsx_runtime_1.jsxs)(shared_1.ListOptions, { children: [(0, jsx_runtime_1.jsx)(shared_1.ListHeader, { children: "TVL Rankings" }), (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWithDropdown, { links: chainOptions, activeLink: selectedChain, alternativeOthersText: "Chains" }), (0, jsx_runtime_1.jsx)(Filters_1.TVLRange, {})] }), finalProtocolTotals.length > 0 ? ((0, jsx_runtime_1.jsx)(Table_1.ProtocolsTable, { data: finalProtocolTotals, removeColumns: ['fees', 'revenue', 'volume'].map(function (key) { var _a; return ((_a = router.query) === null || _a === void 0 ? void 0 : _a[key]) !== 'true' || selectedChain === 'All' ? "".concat(key, "_7d") : undefined; }) })) : ((0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ as: "p", style: { textAlign: 'center', margin: 0 } }, { children: "".concat(selectedChain, " chain has no protocols listed") })))] }));
}
exports.default = GlobalPage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
