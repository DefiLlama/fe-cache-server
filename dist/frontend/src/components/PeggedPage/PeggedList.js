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
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var router_1 = require("next/router");
var styled_components_1 = __importDefault(require("styled-components"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var components_1 = require("../../components");
var Filters_1 = require("../../components/Filters");
var Search_1 = require("../../components/Search");
var _1 = require("../../components/PeggedPage/.");
var Filters_2 = require("../../components/Filters");
var Table_1 = require("../../components/Table");
var stablecoins_1 = require("../../hooks/data/stablecoins");
var stablecoins_2 = require("../../utils/stablecoins");
var utils_1 = require("../../utils");
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var ChartFilters = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tgap: 20px;\n\tmargin: 0 0 -18px;\n"], ["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tgap: 20px;\n\tmargin: 0 0 -18px;\n"])));
var Dropdowns = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 20px;\n\n\tbutton {\n\t\tfont-weight: 400;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 20px;\n\n\tbutton {\n\t\tfont-weight: 400;\n\t}\n"
    // TODO: chart colors by stablecoins logo
])));
// TODO: chart colors by stablecoins logo
function PeggedAssetsOverview(_a) {
    var _b = _a.selectedChain, selectedChain = _b === void 0 ? 'All' : _b, _c = _a.chains, chains = _c === void 0 ? [] : _c, filteredPeggedAssets = _a.filteredPeggedAssets, peggedAssetNames = _a.peggedAssetNames, peggedNameToChartDataIndex = _a.peggedNameToChartDataIndex, chartDataByPeggedAsset = _a.chartDataByPeggedAsset, chainTVLData = _a.chainTVLData, backgroundColor = _a.backgroundColor;
    var _d = __read(React.useState(selectedChain === 'All' ? 'Token Market Caps' : 'USD Inflows'), 2), chartType = _d[0], setChartType = _d[1];
    var chartTypeList = selectedChain !== 'All'
        ? ['USD Inflows', 'Total Market Cap', 'Token Market Caps', 'Token Inflows', 'Pie', 'Dominance']
        : ['Total Market Cap', 'Token Market Caps', 'Pie', 'Dominance', 'USD Inflows', 'Token Inflows'];
    var _e = __read(React.useState([]), 2), filteredIndexes = _e[0], setFilteredIndexes = _e[1];
    var query = (0, router_1.useRouter)().query;
    var minMcap = query.minMcap, maxMcap = query.maxMcap;
    var _f = (0, stablecoins_1.useFormatStablecoinQueryParams)({
        stablecoinAttributeOptions: Filters_2.stablecoinAttributeOptions,
        stablecoinPegTypeOptions: Filters_2.stablecoinPegTypeOptions,
        stablecoinBackingOptions: Filters_2.stablecoinBackingOptions
    }), selectedAttributes = _f.selectedAttributes, selectedPegTypes = _f.selectedPegTypes, selectedBackings = _f.selectedBackings;
    var peggedAssets = React.useMemo(function () {
        var chartDataIndexes = [];
        var peggedAssets = filteredPeggedAssets.reduce(function (acc, curr) {
            var toFilter = false;
            // These together filter depegged. Need to refactor once any other attributes are added.
            toFilter = Math.abs(curr.pegDeviation) < 10 || !(typeof curr.pegDeviation === 'number');
            selectedAttributes.forEach(function (attribute) {
                var attributeOption = Filters_2.stablecoinAttributeOptions.find(function (o) { return o.key === attribute; });
                if (attributeOption) {
                    toFilter = attributeOption.filterFn(curr);
                }
            });
            toFilter =
                toFilter &&
                    selectedPegTypes
                        .map(function (pegtype) {
                        var pegTypeOption = Filters_2.stablecoinPegTypeOptions.find(function (o) { return o.key === pegtype; });
                        return pegTypeOption ? pegTypeOption.filterFn(curr) : false;
                    })
                        .some(function (bool) { return bool; });
            toFilter =
                toFilter &&
                    selectedBackings
                        .map(function (backing) {
                        var backingOption = Filters_2.stablecoinBackingOptions.find(function (o) { return o.key === backing; });
                        return backingOption ? backingOption.filterFn(curr) : false;
                    })
                        .some(function (bool) { return bool; });
            var isValidMcapRange = (minMcap !== undefined && !Number.isNaN(Number(minMcap))) ||
                (maxMcap !== undefined && !Number.isNaN(Number(maxMcap)));
            if (isValidMcapRange) {
                toFilter = toFilter && (minMcap ? curr.mcap > minMcap : true) && (maxMcap ? curr.mcap < maxMcap : true);
            }
            if (toFilter) {
                var chartDataIndex = peggedNameToChartDataIndex[curr.name];
                chartDataIndexes.push(chartDataIndex);
                return acc.concat(curr);
            }
            else
                return acc;
        }, []);
        setFilteredIndexes(chartDataIndexes);
        return peggedAssets;
    }, [
        filteredPeggedAssets,
        peggedNameToChartDataIndex,
        minMcap,
        maxMcap,
        selectedAttributes,
        selectedPegTypes,
        selectedBackings
    ]);
    var _g = (0, stablecoins_2.useBuildPeggedChartData)(chartDataByPeggedAsset, peggedAssetNames, filteredIndexes, 'mcap', chainTVLData, selectedChain), peggedAreaChartData = _g.peggedAreaChartData, peggedAreaTotalData = _g.peggedAreaTotalData, stackedDataset = _g.stackedDataset, tokenInflows = _g.tokenInflows, tokenInflowNames = _g.tokenInflowNames, usdInflows = _g.usdInflows;
    var chainOptions = __spreadArray(['All'], __read(chains), false).map(function (label) { return ({ label: label, to: handleRouting(label, query) }); });
    var peggedTotals = (0, stablecoins_1.useCalcCirculating)(peggedAssets);
    var chainsCirculatingValues = React.useMemo(function () {
        var data = peggedTotals.map(function (chain) { return ({ name: chain.symbol, value: chain.mcap }); });
        var otherCirculating = data.slice(10).reduce(function (total, entry) {
            return (total += entry.value);
        }, 0);
        return data
            .slice(0, 10)
            .sort(function (a, b) { return b.value - a.value; })
            .concat({ name: 'Others', value: otherCirculating });
    }, [peggedTotals]);
    var _h = (0, stablecoins_1.useCalcGroupExtraPeggedByDay)(stackedDataset), stackedData = _h.data, dataWithExtraPeggedAndDominanceByDay = _h.dataWithExtraPeggedAndDominanceByDay;
    var downloadCsv = function () {
        var filteredPeggedNames = peggedAssetNames.filter(function (name, i) { return filteredIndexes.includes(i); });
        var rows = [__spreadArray(__spreadArray(['Timestamp', 'Date'], __read(filteredPeggedNames), false), ['Total'], false)];
        stackedData
            .sort(function (a, b) { return a.date - b.date; })
            .forEach(function (day) {
            rows.push(__spreadArray(__spreadArray([
                day.date,
                (0, utils_1.toNiceCsvDate)(day.date)
            ], __read(filteredPeggedNames.map(function (peggedAsset) { var _a; return (_a = day[peggedAsset]) !== null && _a !== void 0 ? _a : ''; })), false), [
                filteredPeggedNames.reduce(function (acc, curr) {
                    var _a;
                    return (acc += (_a = day[curr]) !== null && _a !== void 0 ? _a : 0);
                }, 0)
            ], false));
        });
        (0, utils_1.download)('stablecoins.csv', rows.map(function (r) { return r.join(','); }).join('\n'));
    };
    var title = "Stablecoins Market Cap";
    if (selectedChain !== 'All') {
        title = "".concat(selectedChain, " Stablecoins Market Cap");
    }
    var _j = React.useMemo(function () {
        var _a, _b, _c;
        var totalMcapCurrent = (_a = peggedAreaTotalData === null || peggedAreaTotalData === void 0 ? void 0 : peggedAreaTotalData[peggedAreaTotalData.length - 1]) === null || _a === void 0 ? void 0 : _a.Mcap;
        var totalMcapPrevWeek = (_b = peggedAreaTotalData === null || peggedAreaTotalData === void 0 ? void 0 : peggedAreaTotalData[peggedAreaTotalData.length - 8]) === null || _b === void 0 ? void 0 : _b.Mcap;
        var percentChange = (_c = (0, utils_1.getPercentChange)(totalMcapCurrent, totalMcapPrevWeek)) === null || _c === void 0 ? void 0 : _c.toFixed(2);
        return { percentChange: percentChange, totalMcapCurrent: totalMcapCurrent };
    }, [peggedAreaTotalData]), percentChange = _j.percentChange, totalMcapCurrent = _j.totalMcapCurrent;
    var mcapToDisplay = (0, utils_1.formattedNum)(totalMcapCurrent, true);
    var topToken = { symbol: 'USDT', mcap: 0 };
    if (peggedTotals.length > 0) {
        var topTokenData = peggedTotals[0];
        topToken.symbol = topTokenData.symbol;
        topToken.mcap = topTokenData.mcap;
    }
    var dominance = (0, utils_1.getPeggedDominance)(topToken, totalMcapCurrent);
    var totalMcapLabel = ['Mcap', 'TVL'];
    var path = selectedChain === 'All' ? '/stablecoins' : "/stablecoins/".concat(selectedChain);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.PeggedSearch, { step: { category: 'Stablecoins', name: title } }), (0, jsx_runtime_1.jsx)(ChartFilters, { children: (0, jsx_runtime_1.jsxs)(Dropdowns, { children: [(0, jsx_runtime_1.jsx)(Filters_2.Attribute, { pathname: path }), (0, jsx_runtime_1.jsx)(Filters_2.BackingType, { pathname: path }), (0, jsx_runtime_1.jsx)(Filters_2.PegType, { pathname: path }), (0, jsx_runtime_1.jsx)(Filters_2.McapRange, {}), (0, jsx_runtime_1.jsx)(Filters_2.ResetAllStablecoinFilters, { pathname: path })] }) }), (0, jsx_runtime_1.jsxs)(components_1.ChartAndValuesWrapper, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanels, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Total ", title] }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { '--tile-text-color': '#4f8fea' } }, { children: mcapToDisplay })), (0, jsx_runtime_1.jsxs)(components_1.DownloadButton, __assign({ as: "button", onClick: downloadCsv }, { children: [(0, jsx_runtime_1.jsx)(components_1.DownloadIcon, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }))] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Change (7d)" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#fd3c99' } }, { children: [" ", percentChange || 0, "%"] }))] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: [topToken.symbol, " Dominance"] }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#46acb7' } }, { children: [" ", dominance, "%"] }))] })] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, __assign({ id: "chartWrapper", style: { gap: '16px', minHeight: '450px', justifyContent: 'space-between' } }, { children: [(0, jsx_runtime_1.jsx)(_1.ChartSelector, { options: chartTypeList, selectedChart: chartType, onClick: setChartType }), chartType === 'Total Market Cap' && ((0, jsx_runtime_1.jsx)(AreaChart, { title: "", chartData: peggedAreaTotalData, stacks: totalMcapLabel, color: 'lightcoral', valueSymbol: "$", hideDefaultLegend: true, hallmarks: [], hideGradient: true })), chartType === 'Token Market Caps' && ((0, jsx_runtime_1.jsx)(AreaChart, { title: "", chartData: peggedAreaChartData, stacks: peggedAssetNames, valueSymbol: "$", hideDefaultLegend: true, hideGradient: true })), chartType === 'Dominance' && ((0, jsx_runtime_1.jsx)(AreaChart, { title: "", valueSymbol: "%", chartData: dataWithExtraPeggedAndDominanceByDay, stacks: peggedAssetNames, hideDefaultLegend: true, hideGradient: true, expandTo100Percent: true })), chartType === 'Pie' && (0, jsx_runtime_1.jsx)(PieChart, { chartData: chainsCirculatingValues }), chartType === 'Token Inflows' && tokenInflows && ((0, jsx_runtime_1.jsx)(BarChart, { chartData: tokenInflows, title: "", hideDefaultLegend: true, customLegendName: "Token", customLegendOptions: tokenInflowNames, chartOptions: inflowsChartOptions }, tokenInflowNames)), chartType === 'USD Inflows' && usdInflows && ((0, jsx_runtime_1.jsx)(BarChart, { chartData: usdInflows, color: backgroundColor, title: "" }))] }))] }), (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWrapper, { children: (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWithDropdown, { links: chainOptions, activeLink: selectedChain }) }), (0, jsx_runtime_1.jsx)(Table_1.PeggedAssetsTable, { data: peggedTotals })] }));
}
function handleRouting(selectedChain, queryParams) {
    var chain = queryParams.chain, filters = __rest(queryParams, ["chain"]);
    var params = '';
    Object.keys(filters).forEach(function (filter, index) {
        // append '?' before all query params and '&' bertween diff params
        if (index === 0) {
            params += '?';
        }
        else
            params += '&';
        // query params of same query like pegType will return in array form - pegType=['USD','EUR'], expected output is pegType=USD&pegType=EUR
        if (Array.isArray(filters[filter])) {
            filters[filter].forEach(function (f, i) {
                if (i > 0) {
                    params += '&';
                }
                params += "".concat(filter, "=").concat(f);
            });
        }
        else {
            params += "".concat(filter, "=").concat(filters[filter]);
        }
    });
    if (selectedChain === 'All')
        return "/stablecoins".concat(params);
    return "/stablecoins/".concat(selectedChain).concat(params);
}
var inflowsChartOptions = {
    overrides: {
        inflow: true
    }
};
exports.default = PeggedAssetsOverview;
var templateObject_1, templateObject_2;
