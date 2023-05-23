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
var react_1 = require("react");
var lodash_1 = require("lodash");
var echarts = __importStar(require("echarts/core"));
var uuid_1 = require("uuid");
var styled_components_1 = __importDefault(require("styled-components"));
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var utils_1 = require("../utils");
var shared_1 = require("../shared");
var useDefaults_1 = require("../useDefaults");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
var colors = {
    tvl: '#335cd7',
    volume: '#19ab17',
    fees: '#f150f4',
    revenue: '#b4b625',
    price: '#da1f73',
    activeUsers: '#fa4646',
    raises: '#7700ff',
    stablecoins: '#00a09d',
    transactions: '#307622',
    bridges: '#ffb12b'
};
var colorsArray = __spreadArray(__spreadArray([], __read(Object.values(colors)), false), [
    '#00ffff',
    '#ffff00',
    '#8000ff',
    '#00ff00',
    '#00ff80',
    '#0080ff',
    '#ff8000',
    '#0000ff',
    '#ff0000',
    '#ff00ff',
    '#80ff00',
    '#ff0080'
], false);
var initGetColor = function () {
    var colorOffset = 0;
    return function (isCompare) { return (isCompare ? colorsArray[colorOffset++] : null); };
};
// TODO remove color prop and use stackColors by default
function AreaChart(_a) {
    var chartData = _a.chartData, stacks = _a.stacks, stackColors = _a.stackColors, title = _a.title, color = _a.color, hallmarks = _a.hallmarks, customLegendName = _a.customLegendName, customLegendOptions = _a.customLegendOptions, _b = _a.tooltipSort, tooltipSort = _b === void 0 ? true : _b, chartOptions = _a.chartOptions, _c = _a.height, height = _c === void 0 ? '360px' : _c, _d = _a.expandTo100Percent, expandTo100Percent = _d === void 0 ? false : _d, isStackedChart = _a.isStackedChart, _e = _a.hideGradient, hideGradient = _e === void 0 ? false : _e, _f = _a.volumeData, volumeData = _f === void 0 ? [] : _f, _g = _a.feesData, feesData = _g === void 0 ? [] : _g, _h = _a.priceData, priceData = _h === void 0 ? [] : _h, _j = _a.usersData, usersData = _j === void 0 ? [] : _j, _k = _a.txsData, txsData = _k === void 0 ? [] : _k, _l = _a.raisesData, raisesData = _l === void 0 ? [] : _l, _m = _a.totalStablesData, totalStablesData = _m === void 0 ? [] : _m, _o = _a.bridgeData, bridgeData = _o === void 0 ? [] : _o, denomination = _a.denomination, updateRoute = _a.updateRoute, _p = _a.datasets, datasets = _p === void 0 ? [] : _p, router = _a.router, props = __rest(_a, ["chartData", "stacks", "stackColors", "title", "color", "hallmarks", "customLegendName", "customLegendOptions", "tooltipSort", "chartOptions", "height", "expandTo100Percent", "isStackedChart", "hideGradient", "volumeData", "feesData", "priceData", "usersData", "txsData", "raisesData", "totalStablesData", "bridgeData", "denomination", "updateRoute", "datasets", "router"]);
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var route = router.query, pathname = router.pathname;
    var isCompare = pathname === null || pathname === void 0 ? void 0 : pathname.includes('compare');
    var _q = __read((0, react_1.useState)(customLegendOptions), 2), legendOptions = _q[0], setLegendOptions = _q[1];
    var chartsStack = stacks || customLegendOptions;
    var _r = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _r[0];
    var defaultChartSettings = (0, useDefaults_1.useDefaults)({
        color: color,
        title: title,
        valueSymbol: denomination || 'USD',
        tooltipSort: tooltipSort,
        hideLegend: true,
        isStackedChart: isStackedChart
    });
    var usersChartSetting = (0, useDefaults_1.useDefaults)({
        color: color,
        title: title,
        valueSymbol: 'Users',
        tooltipSort: tooltipSort,
        hideLegend: true,
        isStackedChart: isStackedChart
    });
    var txsChartSetting = (0, useDefaults_1.useDefaults)({
        color: color,
        title: title,
        valueSymbol: 'TXs',
        tooltipSort: tooltipSort,
        hideLegend: true,
        isStackedChart: isStackedChart
    });
    var _s = __read((0, react_1.useMemo)(function () {
        var getColor = initGetColor();
        var series = [];
        datasets.forEach(function (data, i) {
            var _a, _b, _c;
            var namePrefix = isCompare ? (data === null || data === void 0 ? void 0 : data.chain) + ' ' : '';
            if (route.tvl !== 'false') {
                var color_1 = getColor(isCompare) || colors.tvl;
                series.push({
                    name: namePrefix + 'TVL',
                    chartId: 'TVL',
                    type: 'line',
                    yAxisIndex: 0,
                    emphasis: {
                        focus: 'series',
                        shadowBlur: 10
                    },
                    symbol: 'none',
                    itemStyle: {
                        color: color_1
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: color_1
                            },
                            {
                                offset: 1,
                                color: isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                            }
                        ])
                    },
                    data: [],
                    show: true
                });
                data === null || data === void 0 ? void 0 : data.globalChart.forEach(function (_a) {
                    var _b = __read(_a, 2), date = _b[0], value = _b[1];
                    series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(date), value]);
                });
            }
            if (route.volume === 'true' && (data === null || data === void 0 ? void 0 : data.volumeChart)) {
                series.push({
                    name: namePrefix + 'Volume',
                    chartId: 'Volume',
                    type: 'bar',
                    data: [],
                    yAxisIndex: 1,
                    show: route.volume === 'true',
                    itemStyle: {
                        color: getColor(isCompare) || colors.volume
                    }
                });
                data === null || data === void 0 ? void 0 : data.volumeChart.forEach(function (_a) {
                    var _b = __read(_a, 2), date = _b[0], value = _b[1];
                    series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(date), value]);
                });
            }
            if (route.fees === 'true' && (data === null || data === void 0 ? void 0 : data.feesChart)) {
                series.push({
                    name: namePrefix + 'Fees',
                    chartId: 'Fees',
                    type: 'bar',
                    data: [],
                    yAxisIndex: 2,
                    itemStyle: {
                        color: getColor(isCompare) || colors.fees
                    }
                });
                data === null || data === void 0 ? void 0 : data.feesChart.forEach(function (_a) {
                    var _b = __read(_a, 2), date = _b[0], value = _b[1];
                    series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(date), value]);
                });
            }
            if (route.revenue === 'true' && (data === null || data === void 0 ? void 0 : data.feesChart)) {
                series.push({
                    name: namePrefix + 'Revenue',
                    chartId: 'Revenue',
                    type: 'bar',
                    data: [],
                    yAxisIndex: 3,
                    itemStyle: {
                        color: getColor(isCompare) || colors.revenue
                    }
                });
                data === null || data === void 0 ? void 0 : data.feesChart.forEach(function (_a) {
                    var _b = __read(_a, 3), date = _b[0], _ = _b[1], value = _b[2];
                    series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(date), value]);
                });
            }
            if (route.price === 'true' && (data === null || data === void 0 ? void 0 : data.priceData) && denomination === 'USD') {
                series.push({
                    name: namePrefix + 'Price',
                    chartId: 'Price',
                    symbol: 'none',
                    type: 'line',
                    data: [],
                    yAxisIndex: 4,
                    itemStyle: {
                        color: getColor(isCompare) || colors.price
                    }
                });
                data === null || data === void 0 ? void 0 : data.priceData.forEach(function (_a) {
                    var _b = __read(_a, 2), date = _b[0], value = _b[1];
                    if (Number(date) > Number(data === null || data === void 0 ? void 0 : data.globalChart[0][0]))
                        series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(date), value]);
                });
            }
            if (route.users === 'true' && ((_a = data === null || data === void 0 ? void 0 : data.usersData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                series.push({
                    name: namePrefix + 'Active Users',
                    chartId: 'Active Users',
                    type: 'bar',
                    data: [],
                    yAxisIndex: 5,
                    itemStyle: {
                        color: getColor(isCompare) || colors.activeUsers
                    }
                });
                data === null || data === void 0 ? void 0 : data.usersData.forEach(function (_a) {
                    var _b = __read(_a, 2), date = _b[0], value = _b[1];
                    series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(date), value]);
                });
            }
            if (route.raises === 'true' && (data === null || data === void 0 ? void 0 : data.raisesData)) {
                series.push({
                    name: 'Raises',
                    chartId: 'Raises',
                    type: 'bar',
                    data: [],
                    yAxisIndex: 6,
                    itemStyle: {
                        color: getColor(isCompare) || colors.raises
                    }
                });
                data === null || data === void 0 ? void 0 : data.globalChart.forEach(function (_a) {
                    var _b = __read(_a, 2), date = _b[0], value = _b[1];
                    series[series.length - 1].data.push([
                        (0, utils_1.getUtcDateObject)(date),
                        ((data === null || data === void 0 ? void 0 : data.raisesData[(0, utils_1.getUtcDateObject)(date)]) || 0) * 1e6
                    ]);
                });
            }
            if (route.stables === 'true' && (data === null || data === void 0 ? void 0 : data.totalStablesData)) {
                series.push({
                    name: namePrefix + 'Stablecoins Mcap',
                    chartId: 'Stablecoins Mcap',
                    symbol: 'none',
                    type: 'line',
                    data: [],
                    yAxisIndex: 7,
                    itemStyle: {
                        color: getColor(isCompare) || colors.stablecoins
                    }
                });
                data === null || data === void 0 ? void 0 : data.totalStablesData.forEach(function (data) {
                    series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(data.date), data.Mcap]);
                });
            }
            if (route.txs === 'true' && ((_b = data === null || data === void 0 ? void 0 : data.txsData) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                series.push({
                    name: namePrefix + 'Transactions',
                    chartId: 'Transactions',
                    type: 'bar',
                    data: [],
                    yAxisIndex: 8,
                    itemStyle: {
                        color: getColor(isCompare) || colors.transactions
                    }
                });
                data === null || data === void 0 ? void 0 : data.txsData.forEach(function (_a) {
                    var _b = __read(_a, 2), date = _b[0], value = _b[1];
                    series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(date), value]);
                });
            }
            if (route.inflows === 'true' && (data === null || data === void 0 ? void 0 : data.bridgeData) && ((_c = data === null || data === void 0 ? void 0 : data.bridgeData) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                series.push({
                    name: namePrefix + 'Inflows',
                    chartId: 'Inflows',
                    type: 'bar',
                    stack: 'bridge',
                    data: [],
                    yAxisIndex: 9,
                    itemStyle: {
                        color: getColor(isCompare) || colors.bridges
                    }
                });
                data === null || data === void 0 ? void 0 : data.bridgeData.forEach(function (_a) {
                    var _b = __read(_a, 2), date = _b[0], value = _b[1];
                    series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(date), value]);
                });
                series.push({
                    name: namePrefix + 'Outflows',
                    chartId: 'Inflows',
                    type: 'bar',
                    stack: 'bridge',
                    data: [],
                    yAxisIndex: 9,
                    itemStyle: {
                        color: getColor(isCompare) || colors.bridges
                    }
                });
                data === null || data === void 0 ? void 0 : data.bridgeData.forEach(function (_a) {
                    var _b = __read(_a, 3), date = _b[0], _ = _b[1], value = _b[2];
                    series[series.length - 1].data.push([(0, utils_1.getUtcDateObject)(date), value]);
                });
            }
        });
        return [series.reverse(), (0, lodash_1.uniq)(series.map(function (val) { return val.chartId; }))];
    }, [
        datasets,
        chartsStack,
        color,
        customLegendName,
        hallmarks,
        isDark,
        legendOptions,
        stackColors,
        expandTo100Percent,
        isStackedChart,
        hideGradient,
        route,
        volumeData
    ]), 2), series = _s[0], activeSeries = _s[1];
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    (0, react_1.useEffect)(function () {
        // create instance
        var chartInstance = createInstance();
        var graphic = defaultChartSettings.graphic, titleDefaults = defaultChartSettings.titleDefaults, grid = defaultChartSettings.grid, tooltip = defaultChartSettings.tooltip, xAxis = defaultChartSettings.xAxis, yAxis = defaultChartSettings.yAxis, dataZoom = defaultChartSettings.dataZoom;
        for (var option in chartOptions) {
            if (defaultChartSettings[option]) {
                defaultChartSettings[option] = __assign(__assign({}, defaultChartSettings[option]), chartOptions[option]);
            }
            else {
                defaultChartSettings[option] = __assign({}, chartOptions[option]);
            }
        }
        dataZoom[1] = __assign(__assign({}, dataZoom[1]), { left: grid.left, right: grid.right });
        var offsets = {
            TVL: undefined,
            Volume: 60,
            Fees: 55,
            Revenue: 65,
            Price: 65,
            Raises: 65,
            'Active Users': 60,
            'Stablecoins Mcap': 60,
            Transactions: 65,
            Inflows: 55
        };
        var offsetAcc = -60;
        chartInstance.setOption({
            graphic: __assign({}, graphic),
            tooltip: __assign({}, tooltip),
            title: __assign({}, titleDefaults),
            grid: __assign({}, grid),
            xAxis: __assign({}, xAxis),
            yAxis: [
                __assign(__assign({}, yAxis), { id: 'TVL' }),
                __assign(__assign({}, yAxis), { scale: true, id: 'Volume' }),
                __assign(__assign({}, yAxis), { scale: true, id: 'Fees' }),
                __assign(__assign({}, yAxis), { scale: true, id: 'Revenue' }),
                __assign(__assign({}, yAxis), { scale: true, id: 'Price' }),
                __assign(__assign({}, usersChartSetting.yAxis), { scale: true, id: 'Active Users' }),
                __assign(__assign({}, yAxis), { scale: true, id: 'Raises' }),
                __assign(__assign({}, yAxis), { scale: true, id: 'Stablecoins Mcap' }),
                __assign(__assign({}, txsChartSetting.yAxis), { scale: true, id: 'Transactions' }),
                __assign(__assign({}, txsChartSetting.yAxis), { scale: true, id: 'Inflows' })
            ].map(function (yAxis, i) {
                var isActive = (activeSeries === null || activeSeries === void 0 ? void 0 : activeSeries.findIndex(function (id) { return id === yAxis.id; })) !== -1;
                var defaultOffset = offsets[yAxis.id];
                var offset = isActive && defaultOffset ? offsetAcc + defaultOffset : 0;
                offsetAcc = isActive && i !== 0 ? offsetAcc + defaultOffset : offsetAcc;
                return __assign(__assign({}, yAxis), { offset: offset, axisLabel: __assign(__assign({}, yAxis.axisLabel), { color: function () { return (isCompare ? '#fff' : Object.values(colors)[i]); } }) });
            }),
            dataZoom: __spreadArray([], __read(dataZoom), false),
            series: series
        });
        function resize() {
            chartInstance.resize();
        }
        window.addEventListener('resize', resize);
        return function () {
            window.removeEventListener('resize', resize);
            chartInstance.dispose();
        };
    }, [createInstance, defaultChartSettings, series, chartOptions, expandTo100Percent, route, activeSeries]);
    var legendTitle = customLegendName === 'Category' && legendOptions.length > 1 ? 'Categorie' : customLegendName;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { position: 'relative', minHeight: height } }, props, { children: [customLegendName && (customLegendOptions === null || customLegendOptions === void 0 ? void 0 : customLegendOptions.length) > 1 && ((0, jsx_runtime_1.jsx)(shared_1.SelectLegendMultiple, { allOptions: customLegendOptions, options: legendOptions, setOptions: setLegendOptions, title: legendOptions.length === 1 ? legendTitle : legendTitle + 's' })), (0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { minHeight: height, margin: 'auto 0' } })] })));
}
exports.default = AreaChart;
var templateObject_1;
