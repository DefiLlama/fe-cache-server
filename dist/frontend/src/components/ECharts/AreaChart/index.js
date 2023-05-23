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
var shared_1 = require("../shared");
var useDefaults_1 = require("../useDefaults");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"
    // TODO remove color prop and use stackColors by default
])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
// TODO remove color prop and use stackColors by default
function AreaChart(_a) {
    var chartData = _a.chartData, stacks = _a.stacks, stackColors = _a.stackColors, _b = _a.valueSymbol, valueSymbol = _b === void 0 ? '' : _b, title = _a.title, color = _a.color, hallmarks = _a.hallmarks, customLegendName = _a.customLegendName, customLegendOptions = _a.customLegendOptions, _c = _a.tooltipSort, tooltipSort = _c === void 0 ? true : _c, chartOptions = _a.chartOptions, _d = _a.height, height = _d === void 0 ? '360px' : _d, _e = _a.expandTo100Percent, expandTo100Percent = _e === void 0 ? false : _e, isStackedChart = _a.isStackedChart, _f = _a.hideGradient, hideGradient = _f === void 0 ? false : _f, props = __rest(_a, ["chartData", "stacks", "stackColors", "valueSymbol", "title", "color", "hallmarks", "customLegendName", "customLegendOptions", "tooltipSort", "chartOptions", "height", "expandTo100Percent", "isStackedChart", "hideGradient"]);
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var _g = __read((0, react_1.useState)(customLegendOptions), 2), legendOptions = _g[0], setLegendOptions = _g[1];
    var chartsStack = stacks || customLegendOptions;
    var _h = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _h[0];
    var defaultChartSettings = (0, useDefaults_1.useDefaults)({
        color: color,
        title: title,
        valueSymbol: valueSymbol,
        tooltipSort: tooltipSort,
        hideLegend: true,
        isStackedChart: isStackedChart
    });
    var series = (0, react_1.useMemo)(function () {
        var chartColor = color || (0, utils_1.stringToColour)();
        if (!chartsStack || chartsStack.length === 0) {
            var series_1 = __assign({ name: '', type: 'line', stack: 'value', emphasis: {
                    focus: 'series',
                    shadowBlur: 10
                }, symbol: 'none', itemStyle: {
                    color: chartColor
                }, areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: chartColor
                        },
                        {
                            offset: 1,
                            color: isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                        }
                    ])
                }, data: [] }, (hallmarks && {
                markLine: {
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
                }
            }));
            chartData.forEach(function (_a) {
                var _b = __read(_a, 2), date = _b[0], value = _b[1];
                series_1.data.push([(0, utils_1.getUtcDateObject)(date), value]);
            });
            return series_1;
        }
        else {
            var series_2 = chartsStack.map(function (token, index) {
                var stackColor = stackColors === null || stackColors === void 0 ? void 0 : stackColors[token];
                return __assign({ name: token, type: 'line', emphasis: {
                        focus: 'series',
                        shadowBlur: 10
                    }, symbol: 'none', itemStyle: {
                        color: stackColor ? stackColor : index === 0 ? chartColor : null
                    }, stack: isStackedChart ? 'Total' : undefined, lineStyle: undefined, areaStyle: isStackedChart
                        ? {}
                        : hideGradient
                            ? { color: 'none' }
                            : {
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
                            }, data: [] }, (hallmarks && {
                    markLine: {
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
                    }
                }));
            });
            chartData.forEach(function (_a) {
                var date = _a.date, item = __rest(_a, ["date"]);
                var sumOfTheDay = Object.values(item).reduce(function (acc, curr) { return (acc += curr); }, 0);
                chartsStack.forEach(function (stack) {
                    if (legendOptions && customLegendName ? legendOptions.includes(stack) : true) {
                        var serie = series_2.find(function (t) { return t.name === stack; });
                        if (serie) {
                            var rawValue = item[stack] || 0;
                            var value = expandTo100Percent ? (rawValue / sumOfTheDay) * 100 : rawValue;
                            if (expandTo100Percent) {
                                serie.stack = 'A';
                                serie.areaStyle = {};
                                serie.lineStyle = __assign(__assign({}, serie.lineStyle), { width: 0 });
                            }
                            serie.data.push([(0, utils_1.getUtcDateObject)(date), value]);
                        }
                    }
                });
            });
            return series_2;
        }
    }, [
        chartData,
        chartsStack,
        color,
        customLegendName,
        hallmarks,
        isDark,
        legendOptions,
        stackColors,
        expandTo100Percent,
        isStackedChart,
        hideGradient
    ]);
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
        chartInstance.setOption({
            graphic: __assign({}, graphic),
            tooltip: __assign({}, tooltip),
            title: __assign({}, titleDefaults),
            grid: __assign({}, grid),
            xAxis: __assign({}, xAxis),
            yAxis: __assign(__assign({}, yAxis), (expandTo100Percent
                ? {
                    max: 100,
                    min: 0
                }
                : {})),
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
    }, [createInstance, defaultChartSettings, series, chartOptions, expandTo100Percent]);
    var legendTitle = customLegendName === 'Category' && legendOptions.length > 1 ? 'Categorie' : customLegendName;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { position: 'relative' } }, props, { children: [customLegendName && (customLegendOptions === null || customLegendOptions === void 0 ? void 0 : customLegendOptions.length) > 1 && ((0, jsx_runtime_1.jsx)(shared_1.SelectLegendMultiple, { allOptions: customLegendOptions, options: legendOptions, setOptions: setLegendOptions, title: legendOptions.length === 1 ? legendTitle : legendTitle + 's' })), (0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { height: height, margin: 'auto 0' } })] })));
}
exports.default = AreaChart;
var templateObject_1;
