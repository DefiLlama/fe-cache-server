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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var echarts = __importStar(require("echarts/core"));
var renderers_1 = require("echarts/renderers");
var charts_1 = require("echarts/charts");
var components_1 = require("echarts/components");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var uuid_1 = require("uuid");
var styled_components_1 = __importDefault(require("styled-components"));
var defillama_light_neutral_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama-light-neutral.png"));
var defillama_dark_neutral_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama-dark-neutral.png"));
var hooks_1 = require("../../hooks");
echarts.use([
    renderers_1.CanvasRenderer,
    charts_1.ScatterChart,
    charts_1.LineChart,
    charts_1.BarChart,
    components_1.TooltipComponent,
    components_1.TitleComponent,
    components_1.GridComponent,
    components_1.GraphicComponent,
    components_1.LegendComponent,
    components_1.DataZoomComponent
]);
function CollectionScatterChart(_a) {
    var _b = _a.height, height = _b === void 0 ? '360px' : _b, sales = _a.sales, salesMedian1d = _a.salesMedian1d, volume = _a.volume;
    var id = React.useMemo(function () { return (0, uuid_1.v4)(); }, []);
    var isSmall = (0, hooks_1.useMedia)("(max-width: 37.5rem)");
    var _c = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _c[0];
    var createInstance = React.useCallback(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    React.useEffect(function () {
        var chartInstance = createInstance();
        var series = sales.length > 0
            ? [
                {
                    name: 'Sale Price',
                    type: 'scatter',
                    large: true,
                    largeThreshold: 0,
                    symbols: 5,
                    emphasis: {
                        focus: 'series'
                    },
                    itemStyle: {
                        color: '#3b82f6'
                    },
                    symbolSize: 3,
                    data: sales.map(function (p) { return [new Date(p[0]), p[1]]; })
                },
                {
                    name: 'Moving Average',
                    type: 'line',
                    itemStyle: {
                        color: '#ffc300'
                    },
                    data: salesMedian1d.map(function (p) { return [new Date(p[0]), p[1]]; }),
                    showSymbol: false,
                    connectNulls: true
                },
                {
                    name: 'Volume',
                    type: 'bar',
                    data: volume.map(function (p) { return [new Date(p[0] * 1e3), p[1]]; }),
                    itemStyle: {
                        color: '#22c55e'
                    },
                    yAxisIndex: 1
                }
            ]
            : [];
        var option = {
            animation: false,
            graphic: {
                type: 'image',
                z: 0,
                style: {
                    image: isDark ? defillama_light_neutral_png_1.default.src : defillama_dark_neutral_png_1.default.src,
                    height: 40,
                    opacity: 0.3
                },
                left: isSmall ? '40%' : '45%',
                top: '130px'
            },
            grid: {
                left: '20',
                right: '20',
                bottom: 0,
                containLabel: true
            },
            tooltip: {
                showDelay: 0,
                confine: true,
                formatter: function (params) {
                    var chartdate = new Date(params.value[0]).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    });
                    var vals = chartdate +
                        '<li style="list-style:none">' +
                        params.marker +
                        params.seriesName +
                        ':' +
                        '&nbsp;&nbsp;' +
                        params.value[1].toFixed(2) +
                        '&nbsp;' +
                        'ETH' +
                        '</li>';
                    if (params.seriesName !== 'Volume') {
                        var date = new Date(params.value[0]).getTime();
                        vals +=
                            '<li style="list-style:none">' +
                                '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#ffc300;"></span>' +
                                'Moving Average:' +
                                '&nbsp;&nbsp;' +
                                findClosest(salesMedian1d, salesMedian1d.length, date, false) +
                                '&nbsp;' +
                                'ETH' +
                                '</li>';
                        vals +=
                            '<li style="list-style:none">' +
                                '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#22c55e;"></span>' +
                                'Volume:' +
                                '&nbsp;&nbsp;' +
                                findClosest(volume, volume.length, date, true) +
                                '&nbsp;' +
                                'ETH' +
                                '</li>';
                    }
                    return vals;
                }
            },
            xAxis: {
                type: 'time',
                boundaryGap: false,
                min: salesMedian1d.length > 0 ? new Date(salesMedian1d[0][0]) : 0,
                nameTextStyle: {
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                    fontWeight: 400
                },
                axisLine: {
                    lineStyle: {
                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                        opacity: 0.2
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#a1a1aa',
                        opacity: 0.1
                    }
                }
            },
            yAxis: [
                {
                    type: 'value',
                    min: 'dataMin',
                    axisLabel: {
                        formatter: function (value) { return Number(value.toFixed(2)) + ' ETH'; }
                    },
                    axisLine: {
                        lineStyle: {
                            color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                            opacity: 0.1
                        }
                    },
                    boundaryGap: false,
                    nameTextStyle: {
                        fontFamily: 'sans-serif',
                        fontSize: 14,
                        fontWeight: 400,
                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#a1a1aa',
                            opacity: 0.1
                        }
                    }
                },
                {
                    type: 'value',
                    name: 'Volume',
                    show: false,
                    max: function (value) { return value.max * 4; },
                    position: 'right',
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100,
                    filterMode: 'none'
                }
            ],
            series: series
        };
        chartInstance.setOption(option);
        function resize() {
            chartInstance.resize();
        }
        window.addEventListener('resize', resize);
        return function () {
            window.removeEventListener('resize', resize);
            chartInstance.dispose();
        };
    }, [id, sales, volume, createInstance, isDark, isSmall, salesMedian1d]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { position: 'relative' } }, { children: (0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { height: height, margin: 'auto 0' } }) })));
}
exports.default = CollectionScatterChart;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
var findClosest = function (arr, n, target, isDateInSeconds) {
    var _a, _b, _c;
    var left = 0, right = n - 1;
    while (left < right) {
        if (Math.abs((isDateInSeconds ? arr[left][0] * 1e3 : arr[left][0]) - target) <=
            Math.abs((isDateInSeconds ? arr[right][0] * 1e3 : arr[right][0]) - target)) {
            right--;
        }
        else {
            left++;
        }
    }
    return (_c = (_b = (_a = arr === null || arr === void 0 ? void 0 : arr[left]) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.toFixed(2)) !== null && _c !== void 0 ? _c : 0;
};
var templateObject_1;
