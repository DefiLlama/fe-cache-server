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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var echarts = __importStar(require("echarts/core"));
var uuid_1 = require("uuid");
var utils_1 = require("../utils");
var shared_1 = require("../shared");
var useDefaults_1 = require("../useDefaults");
function BarChart(_a) {
    var chartData = _a.chartData, stacks = _a.stacks, seriesConfig = _a.seriesConfig, _b = _a.valueSymbol, valueSymbol = _b === void 0 ? '' : _b, title = _a.title, color = _a.color, _c = _a.hideDefaultLegend, hideDefaultLegend = _c === void 0 ? false : _c, customLegendName = _a.customLegendName, customLegendOptions = _a.customLegendOptions, chartOptions = _a.chartOptions, _d = _a.height, height = _d === void 0 ? '360px' : _d, barWidths = _a.barWidths, stackColors = _a.stackColors, tooltipOrderBottomUp = _a.tooltipOrderBottomUp;
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var _e = __read((0, react_1.useState)(customLegendOptions ? __spreadArray([], __read(customLegendOptions), false) : []), 2), legendOptions = _e[0], setLegendOptions = _e[1];
    var _f = (0, react_1.useMemo)(function () {
        var values = stacks || {};
        if ((!values || Object.keys(values).length === 0) && customLegendOptions) {
            customLegendOptions.forEach(function (name) {
                values[name] = 'stackA';
            });
        }
        var selectedStacks = Object.keys(values).filter(function (s) {
            return legendOptions && customLegendName ? legendOptions.includes(s) : true;
        });
        return { defaultStacks: values, stackKeys: Object.keys(values), selectedStacks: selectedStacks };
    }, [stacks, customLegendOptions, customLegendName, legendOptions]), defaultStacks = _f.defaultStacks, stackKeys = _f.stackKeys, selectedStacks = _f.selectedStacks;
    var hideLegend = hideDefaultLegend || stackKeys.length < 2;
    var defaultChartSettings = (0, useDefaults_1.useDefaults)({
        color: color,
        title: title,
        valueSymbol: valueSymbol,
        hideLegend: hideLegend,
        tooltipOrderBottomUp: tooltipOrderBottomUp
    });
    var series = (0, react_1.useMemo)(function () {
        var chartColor = color || (0, utils_1.stringToColour)();
        if (!stackKeys || (stackKeys === null || stackKeys === void 0 ? void 0 : stackKeys.length) === 0) {
            var series_1 = {
                name: '',
                type: 'bar',
                stack: 'stackA',
                emphasis: {
                    focus: 'series',
                    shadowBlur: 10
                },
                itemStyle: {
                    color: chartColor
                },
                data: []
            };
            chartData.forEach(function (_a) {
                var _b = __read(_a, 2), date = _b[0], value = _b[1];
                series_1.data.push([(0, utils_1.getUtcDateObject)(date), value]);
            });
            return series_1;
        }
        else {
            var series_2 = selectedStacks.map(function (stack) {
                return __assign(__assign(__assign(__assign({ name: stack, type: 'bar', large: true, largeThreshold: 0, stack: defaultStacks[stack] }, ((barWidths === null || barWidths === void 0 ? void 0 : barWidths[defaultStacks[stack]]) && { barMaxWidth: barWidths[defaultStacks[stack]] })), { emphasis: {
                        focus: 'series',
                        shadowBlur: 10
                    }, itemStyle: stackColors
                        ? {
                            color: stackColors[stack]
                        }
                        : chartData.length <= 1
                            ? {
                                color: chartColor
                            }
                            : undefined }), ((seriesConfig === null || seriesConfig === void 0 ? void 0 : seriesConfig[defaultStacks[stack]]) && (seriesConfig === null || seriesConfig === void 0 ? void 0 : seriesConfig[defaultStacks[stack]]))), { data: [] });
            });
            chartData.forEach(function (_a) {
                var date = _a.date, item = __rest(_a, ["date"]);
                selectedStacks.forEach(function (stack) {
                    var _a;
                    (_a = series_2.find(function (t) { return t.name === stack; })) === null || _a === void 0 ? void 0 : _a.data.push([(0, utils_1.getUtcDateObject)(date), item[stack] || 0]);
                });
            });
            return series_2;
        }
    }, [barWidths, chartData, color, defaultStacks, seriesConfig, stackColors, stackKeys, selectedStacks]);
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    (0, react_1.useEffect)(function () {
        // create instance
        var chartInstance = createInstance();
        // override default chart settings
        for (var option in chartOptions) {
            if (option === 'overrides') {
                // update tooltip formatter
                defaultChartSettings['tooltip'] = __assign({}, defaultChartSettings['inflowsTooltip']);
            }
            else if (defaultChartSettings[option]) {
                defaultChartSettings[option] = __assign(__assign({}, defaultChartSettings[option]), chartOptions[option]);
            }
            else {
                defaultChartSettings[option] = __assign({}, chartOptions[option]);
            }
        }
        var graphic = defaultChartSettings.graphic, titleDefaults = defaultChartSettings.titleDefaults, grid = defaultChartSettings.grid, tooltip = defaultChartSettings.tooltip, xAxis = defaultChartSettings.xAxis, yAxis = defaultChartSettings.yAxis, legend = defaultChartSettings.legend, dataZoom = defaultChartSettings.dataZoom;
        chartInstance.setOption(__assign(__assign({ graphic: __assign({}, graphic), tooltip: __assign({}, tooltip), title: __assign({}, titleDefaults), grid: __assign({}, grid), xAxis: __assign({}, xAxis), yAxis: __assign({}, yAxis) }, (!hideLegend && {
            legend: __assign(__assign({}, legend), { data: stackKeys })
        })), { dataZoom: __spreadArray([], __read(dataZoom.map(function (item) { return (__assign(__assign({}, item), { filterMode: 'none' })); })), false), series: series }));
        function resize() {
            chartInstance.resize();
        }
        window.addEventListener('resize', resize);
        return function () {
            window.removeEventListener('resize', resize);
            chartInstance.dispose();
        };
    }, [createInstance, defaultChartSettings, series, stackKeys, hideLegend, chartOptions]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { position: 'relative' } }, { children: [customLegendName && (customLegendOptions === null || customLegendOptions === void 0 ? void 0 : customLegendOptions.length) > 1 && ((0, jsx_runtime_1.jsx)(shared_1.SelectLegendMultiple, { allOptions: customLegendOptions, options: legendOptions, setOptions: setLegendOptions, title: legendOptions.length === 1 ? customLegendName : customLegendName + 's' })), (0, jsx_runtime_1.jsx)("div", { id: id, style: { height: height, margin: 'auto 0' } })] })));
}
exports.default = BarChart;
