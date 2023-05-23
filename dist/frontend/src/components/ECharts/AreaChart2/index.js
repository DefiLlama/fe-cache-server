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
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
function AreaChart(_a) {
    var chartData = _a.chartData, stacks = _a.stacks, stackColors = _a.stackColors, _b = _a.valueSymbol, valueSymbol = _b === void 0 ? '' : _b, title = _a.title, color = _a.color, hallmarks = _a.hallmarks, customLegendName = _a.customLegendName, customLegendOptions = _a.customLegendOptions, _c = _a.tooltipSort, tooltipSort = _c === void 0 ? true : _c, chartOptions = _a.chartOptions, _d = _a.height, height = _d === void 0 ? '360px' : _d, _e = _a.expandTo100Percent, expandTo100Percent = _e === void 0 ? false : _e, isStackedChart = _a.isStackedChart, _f = _a.hideGradient, hideGradient = _f === void 0 ? false : _f, props = __rest(_a, ["chartData", "stacks", "stackColors", "valueSymbol", "title", "color", "hallmarks", "customLegendName", "customLegendOptions", "tooltipSort", "chartOptions", "height", "expandTo100Percent", "isStackedChart", "hideGradient"]);
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var chartsStack = stacks || customLegendOptions;
    var _g = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _g[0];
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
        var series = chartsStack.map(function (stack, index) {
            var stackColor = stackColors === null || stackColors === void 0 ? void 0 : stackColors[stack];
            return {
                name: stack,
                type: 'line',
                yAxisIndex: index,
                scale: true,
                large: true,
                largeThreshold: 0,
                emphasis: {
                    focus: 'series',
                    shadowBlur: 10
                },
                symbol: 'none',
                itemStyle: {
                    color: stackColor || null
                },
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
                },
                markLine: {},
                data: []
            };
        });
        chartData.forEach(function (_a) {
            var date = _a.date, item = __rest(_a, ["date"]);
            stacks.forEach(function (stack) {
                var _a;
                (_a = series.find(function (t) { return t.name === stack; })) === null || _a === void 0 ? void 0 : _a.data.push([(0, utils_1.getUtcDateObject)(date), item[stack] || 0]);
            });
        });
        return series;
    }, [chartData, chartsStack, color, customLegendName, isDark, stackColors, stacks]);
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
        dataZoom[1] = __assign(__assign({}, dataZoom[1]), { left: 20, right: 20 });
        chartInstance.setOption({
            graphic: __assign({}, graphic),
            tooltip: __assign(__assign({}, tooltip), { position: [60, 0], backgroundColor: 'none', borderWidth: '0', padding: 0, textStyle: {
                    color: isDark ? 'white' : 'black'
                } }),
            title: __assign({}, titleDefaults),
            grid: __assign({}, grid),
            xAxis: __assign({}, xAxis),
            yAxis: stacks.length === 1
                ? yAxis
                : [
                    __assign(__assign({}, yAxis), { axisLabel: {
                            formatter: function (value) { return value + '%'; }
                        }, axisLine: {
                            show: true,
                            lineStyle: {
                                color: stackColors['APY']
                            }
                        } }),
                    __assign(__assign({}, yAxis), { axisLabel: {
                            formatter: function (value) { return '$' + (0, utils_2.toK)(value); }
                        }, axisLine: {
                            show: true,
                            lineStyle: {
                                color: stackColors['TVL']
                            }
                        } })
                ],
            dataZoom: __spreadArray([], __read(dataZoom), false),
            series: series
        });
        chartInstance.dispatchAction({
            type: 'showTip',
            // index of series, which is optional when trigger of tooltip is axis
            seriesIndex: 0,
            // data index; could assign by name attribute when not defined
            dataIndex: series[0].data.length - 1,
            // Position of tooltip. Only works in this action.
            // Use tooltip.position in option by default.
            position: [60, 0]
        });
        chartInstance.on('globalout', function () {
            chartInstance.dispatchAction({
                type: 'showTip',
                // index of series, which is optional when trigger of tooltip is axis
                seriesIndex: 0,
                // data index; could assign by name attribute when not defined
                dataIndex: series[0].data.length - 1,
                // Position of tooltip. Only works in this action.
                // Use tooltip.position in option by default.
                position: [60, 0]
            });
        });
        function resize() {
            chartInstance.resize();
        }
        window.addEventListener('resize', resize);
        return function () {
            window.removeEventListener('resize', resize);
            chartInstance.dispose();
        };
    }, [createInstance, defaultChartSettings, series, chartOptions, stackColors, isDark, stacks.length]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { position: 'relative' } }, props, { children: (0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { height: height, margin: 'auto 0' } }) })));
}
exports.default = AreaChart;
var templateObject_1;
