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
var echarts = __importStar(require("echarts/core"));
var uuid_1 = require("uuid");
var styled_components_1 = __importDefault(require("styled-components"));
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var utils_1 = require("../utils");
var useDefaults_1 = require("../useDefaults");
var utils_2 = require("../../../utils");
var utils_3 = require("./utils");
var router_1 = require("next/router");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
function AreaBarChart(_a) {
    var chartData = _a.chartData, stacks = _a.stacks, _b = _a.stackColors, stackColors = _b === void 0 ? {} : _b, _c = _a.valueSymbol, valueSymbol = _c === void 0 ? '' : _c, title = _a.title, color = _a.color, hallmarks = _a.hallmarks, customLegendName = _a.customLegendName, customLegendOptions = _a.customLegendOptions, _d = _a.tooltipSort, tooltipSort = _d === void 0 ? true : _d, chartOptions = _a.chartOptions, _e = _a.height, height = _e === void 0 ? '360px' : _e, _f = _a.unlockTokenSymbol, unlockTokenSymbol = _f === void 0 ? '' : _f, props = __rest(_a, ["chartData", "stacks", "stackColors", "valueSymbol", "title", "color", "hallmarks", "customLegendName", "customLegendOptions", "tooltipSort", "chartOptions", "height", "unlockTokenSymbol"]);
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var router = (0, router_1.useRouter)();
    var groupBy = router.query.groupBy;
    var isCumulative = router.isReady && groupBy === 'cumulative' ? true : false;
    var _g = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _g[0];
    var defaultChartSettings = (0, useDefaults_1.useDefaults)({
        color: color,
        title: title,
        valueSymbol: valueSymbol,
        tooltipSort: tooltipSort,
        hideLegend: true,
        unlockTokenSymbol: unlockTokenSymbol
    });
    var _h = (0, react_1.useMemo)(function () {
        var chartColor = color || (0, utils_1.stringToColour)();
        var yAxisByIndex = {};
        if (stacks.includes('TVL') ||
            stacks.includes('Mcap') ||
            stacks.includes('FDV') ||
            stacks.includes('Borrowed') ||
            stacks.includes('Staking')) {
            yAxisByIndex['TVL+Mcap+FDV+Borrowed+Staking'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Token Price')) {
            yAxisByIndex['Token Price'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Token Volume')) {
            yAxisByIndex['Token Volume'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Token Liquidity')) {
            yAxisByIndex['Token Liquidity'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Bridge Deposits') || stacks.includes('Bridge Withdrawals')) {
            yAxisByIndex['Bridge Deposits+Bridge Withdrawals'] =
                stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Volume') || stacks.includes('Fees') || stacks.includes('Revenue')) {
            yAxisByIndex['Volume+Fees+Revenue'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Unlocks')) {
            yAxisByIndex['Unlocks'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Active Users') || stacks.includes('New Users')) {
            yAxisByIndex['Active Users+New Users'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Transactions')) {
            yAxisByIndex['Transactions'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Gas Used')) {
            yAxisByIndex['Gas Used'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Median APY')) {
            yAxisByIndex['Median APY'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('USD Inflows')) {
            yAxisByIndex['USD Inflows'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Total Proposals') || stacks.includes('Successful Proposals')) {
            yAxisByIndex['Total Proposals+Successful Proposals'] =
                stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Max Votes')) {
            yAxisByIndex['Max Votes'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        if (stacks.includes('Treasury')) {
            yAxisByIndex['Treasury'] = stacks.length === 1 ? undefined : Object.keys(yAxisByIndex).length;
        }
        var series = stacks.map(function (stack, index) {
            var stackColor = stackColors[stack];
            var type = utils_3.BAR_CHARTS.includes(stack) && !isCumulative ? 'bar' : 'line';
            var options = {};
            if (['TVL', 'Mcap', 'FDV', 'Borrowed', 'Staking'].includes(stack)) {
                options['yAxisIndex'] = yAxisByIndex['TVL+Mcap+FDV+Borrowed+Staking'];
            }
            else if (['Bridge Deposits', 'Bridge Withdrawals'].includes(stack)) {
                options['yAxisIndex'] = yAxisByIndex['Bridge Deposits+Bridge Withdrawals'];
            }
            else if (['Volume', 'Fees', 'Revenue'].includes(stack)) {
                options['yAxisIndex'] = yAxisByIndex['Volume+Fees+Revenue'];
            }
            else if (['Active Users', 'New Users'].includes(stack)) {
                options['yAxisIndex'] = yAxisByIndex['Active Users+New Users'];
            }
            else if (['Total Proposals', 'Successful Proposals'].includes(stack)) {
                options['yAxisIndex'] = yAxisByIndex['Total Proposals+Successful Proposals'];
            }
            else {
                options['yAxisIndex'] = yAxisByIndex[stack];
            }
            return __assign(__assign(__assign(__assign({ name: stack, type: type }, options), { scale: true, large: true, largeThreshold: 0, emphasis: {
                    focus: 'series',
                    shadowBlur: 10
                }, symbol: 'none', itemStyle: {
                    color: stackColor || null
                } }), (type === 'line'
                ? {
                    areaStyle: {
                        color: !customLegendName
                            ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: stackColor ? stackColor : index === 0 ? chartColor : 'transparent'
                                },
                                {
                                    offset: 1,
                                    color: isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                                }
                            ])
                            : null
                    }
                }
                : {})), { markLine: {}, data: [] });
        });
        chartData.forEach(function (_a) {
            var date = _a.date, item = __rest(_a, ["date"]);
            stacks.forEach(function (stack) {
                var _a;
                (_a = series
                    .find(function (t) { return t.name === stack; })) === null || _a === void 0 ? void 0 : _a.data.push([(0, utils_1.getUtcDateObject)(date), item[stack] || (stack === 'TVL' ? 0 : '-')]);
            });
        });
        if (series.length > 0 && hallmarks) {
            series[0] = __assign(__assign({}, series[0]), { markLine: {
                    data: hallmarks.map(function (_a, index) {
                        var _b = __read(_a, 2), date = _b[0], event = _b[1];
                        return [
                            {
                                name: event,
                                xAxis: (0, utils_1.getUtcDateObject)(date),
                                yAxis: 0,
                                label: {
                                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                                    fontFamily: 'sans-serif',
                                    fontSize: 14,
                                    fontWeight: 500
                                }
                            },
                            {
                                name: 'end',
                                xAxis: (0, utils_1.getUtcDateObject)(date),
                                yAxis: 'max',
                                y: Math.max(hallmarks.length * 40 - index * 40, 40)
                            }
                        ];
                    })
                } });
        }
        return { series: series, yAxisByIndex: yAxisByIndex };
    }, [chartData, stacks, color, customLegendName, hallmarks, isDark, stackColors, isCumulative]), series = _h.series, yAxisByIndex = _h.yAxisByIndex;
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    (0, react_1.useEffect)(function () {
        // create instance
        var chartInstance = createInstance();
        var graphic = defaultChartSettings.graphic, titleDefaults = defaultChartSettings.titleDefaults, grid = defaultChartSettings.grid, tooltip = defaultChartSettings.tooltip, xAxis = defaultChartSettings.xAxis, yAxis = defaultChartSettings.yAxis, dataZoom = defaultChartSettings.dataZoom, legend = defaultChartSettings.legend;
        for (var option in chartOptions) {
            if (defaultChartSettings[option]) {
                defaultChartSettings[option] = __assign(__assign({}, defaultChartSettings[option]), chartOptions[option]);
            }
            else {
                defaultChartSettings[option] = __assign({}, chartOptions[option]);
            }
        }
        delete dataZoom[1].right;
        var yAxiss = [];
        var noOffset = Object.entries(yAxisByIndex).length < 3;
        Object.entries(yAxisByIndex).forEach(function (_a) {
            var _b, _c;
            var _d = __read(_a, 2), type = _d[0], index = _d[1];
            var options = __assign(__assign({}, yAxis), { name: '', type: 'value', alignTicks: true, offset: noOffset || index < 2 ? 0 : ((_c = (_b = yAxiss[yAxiss.length - 1]) === null || _b === void 0 ? void 0 : _b.offset) !== null && _c !== void 0 ? _c : 0) + 40 });
            if (type === 'TVL+Mcap+FDV+Borrowed+Staking') {
                yAxiss.push(yAxis);
            }
            if (type === 'Token Price') {
                yAxiss.push(__assign(__assign({}, options), { axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Token Price']
                        }
                    } }));
            }
            if (type === 'Token Volume') {
                yAxiss.push(__assign(__assign({}, options), { axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Token Volume']
                        }
                    } }));
            }
            if (type === 'Token Liquidity') {
                yAxiss.push(__assign(__assign({}, options), { axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Token Liquidity']
                        }
                    } }));
            }
            if (type === 'Bridge Deposits+Bridge Withdrawals') {
                yAxiss.push(__assign(__assign({}, options), { axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Bridge Deposits']
                        }
                    } }));
            }
            if (type === 'Volume+Fees+Revenue') {
                yAxiss.push(__assign({}, options));
            }
            if (type === 'Unlocks') {
                yAxiss.push(__assign(__assign({}, options), { axisLabel: {
                        formatter: function (value) { return (0, utils_2.toK)(value) + ' ' + unlockTokenSymbol; }
                    }, axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Unlocks']
                        }
                    } }));
            }
            if (type === 'Active Users+New Users') {
                yAxiss.push(__assign(__assign({}, options), { axisLabel: {
                        formatter: function (value) { return (0, utils_2.toK)(value); }
                    } }));
            }
            if (type === 'Transactions') {
                yAxiss.push(__assign(__assign({}, options), { axisLabel: {
                        formatter: function (value) { return (0, utils_2.toK)(value); }
                    }, axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Transactions']
                        }
                    } }));
            }
            if (type === 'Gas Used') {
                yAxiss.push(__assign(__assign({}, options), { axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Gas Used']
                        }
                    } }));
            }
            if (type === 'Median APY') {
                yAxiss.push(__assign(__assign({}, options), { axisLabel: {
                        formatter: function (value) { return "".concat(value, "%"); }
                    }, axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Median APY']
                        }
                    } }));
            }
            if (type === 'USD Inflows') {
                yAxiss.push(__assign(__assign({}, options), { axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['USD Inflows']
                        }
                    } }));
            }
            if (type === 'Total Proposals+Successful Proposals') {
                yAxiss.push(__assign(__assign({}, options), { axisLabel: {
                        formatter: function (value) { return (0, utils_2.toK)(value); }
                    }, axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Total Proposals']
                        }
                    } }));
            }
            if (type === 'Max Votes') {
                yAxiss.push(__assign(__assign({}, options), { axisLabel: {
                        formatter: function (value) { return (0, utils_2.toK)(value); }
                    }, axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Max Votes']
                        }
                    } }));
            }
            if (type === 'Treasury') {
                yAxiss.push(__assign(__assign({}, options), { axisLine: {
                        show: true,
                        lineStyle: {
                            color: stackColors['Treasury']
                        }
                    } }));
            }
        });
        if (Object.entries(yAxisByIndex).length === 0) {
            yAxiss.push(yAxis);
        }
        chartInstance.setOption({
            graphic: __assign({}, graphic),
            legend: __assign(__assign({}, legend), { left: 65, show: stacks.length > 1 }),
            tooltip: __assign({}, tooltip),
            title: __assign({}, titleDefaults),
            grid: __assign(__assign({}, grid), { top: 40 }),
            xAxis: __assign({}, xAxis),
            yAxis: yAxiss,
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
    }, [
        createInstance,
        defaultChartSettings,
        series,
        stacks.length,
        chartOptions,
        unlockTokenSymbol,
        stackColors,
        yAxisByIndex
    ]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { position: 'relative', marginTop: 16 } }, props, { children: (0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { height: height, margin: 'auto 0' } }) })));
}
exports.default = AreaBarChart;
var templateObject_1;
