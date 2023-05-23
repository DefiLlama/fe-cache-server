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
var react_1 = require("react");
var echarts = __importStar(require("echarts/core"));
var renderers_1 = require("echarts/renderers");
var charts_1 = require("echarts/charts");
var components_1 = require("echarts/components");
var uuid_1 = require("uuid");
var defillama_light_neutral_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama-light-neutral.png"));
var defillama_dark_neutral_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama-dark-neutral.png"));
var hooks_1 = require("../../../hooks");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var utils_1 = require("../../../utils");
var utils_2 = require("../utils");
require("echarts/lib/component/grid");
var features_1 = require("echarts/features");
echarts.use([
    charts_1.BarChart,
    renderers_1.CanvasRenderer,
    components_1.TitleComponent,
    components_1.ToolboxComponent,
    components_1.TooltipComponent,
    components_1.GridComponent,
    components_1.LegendComponent,
    charts_1.BarChart,
    charts_1.LineChart,
    renderers_1.CanvasRenderer,
    features_1.UniversalTransition,
    components_1.DataZoomComponent,
    components_1.GraphicComponent
]);
function StackedBarChart(_a) {
    var chartData = _a.chartData, _b = _a.valueSymbol, valueSymbol = _b === void 0 ? '$' : _b, title = _a.title, color = _a.color, stackColors = _a.stackColors, showLegend = _a.showLegend;
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var _c = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _c[0];
    var series = (0, react_1.useMemo)(function () {
        var chartColor = color || (0, utils_2.stringToColour)();
        var series = chartData.map(function (cd) {
            return {
                name: cd.name,
                type: 'bar',
                large: true,
                largeThreshold: 0,
                stack: 'value',
                data: cd.data,
                emphasis: {
                    focus: 'series',
                    shadowBlur: 10
                },
                itemStyle: stackColors
                    ? {
                        color: stackColors[cd.name]
                    }
                    : chartData.length <= 1
                        ? {
                            color: chartColor
                        }
                        : undefined
            };
        });
        return series;
    }, [chartData, color, stackColors]);
    var isSmall = (0, hooks_1.useMedia)("(max-width: 37.5rem)");
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    (0, react_1.useEffect)(function () {
        // create instance
        var chartInstance = createInstance();
        chartInstance.setOption({
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
            legend: showLegend
                ? {
                    right: '2%',
                    textStyle: {
                        fontFamily: 'sans-serif',
                        fontWeight: 600,
                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                    }
                }
                : false,
            tooltip: {
                trigger: 'axis',
                confine: true,
                formatter: function (params) {
                    var chartdate = new Date(params[0].value[0]).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    });
                    var vals;
                    if (valueSymbol !== '%' && valueSymbol !== 'ETH') {
                        vals = params
                            .sort(function (a, b) { return a.value[1] - b.value[1]; })
                            .reduce(function (prev, curr) {
                            if (curr.value[1] !== 0) {
                                return (prev +=
                                    '<li style="list-style:none">' +
                                        curr.marker +
                                        curr.seriesName +
                                        '&nbsp;&nbsp;' +
                                        valueSymbol +
                                        (0, utils_1.toK)(curr.value[1]) +
                                        '</li>');
                            }
                            else
                                return prev;
                        }, '');
                    }
                    else {
                        vals = params
                            .sort(function (a, b) { return b.value[1] - a.value[1]; })
                            .reduce(function (prev, curr) {
                            if (curr.value[1] !== 0 && curr.value[1] !== null) {
                                return (prev +=
                                    '<li style="list-style:none">' +
                                        curr.marker +
                                        curr.seriesName +
                                        '&nbsp;&nbsp;' +
                                        curr.value[1] +
                                        '&nbsp;' +
                                        valueSymbol +
                                        '</li>');
                            }
                            else
                                return prev;
                        }, '');
                    }
                    return chartdate + vals;
                }
            },
            title: {
                text: title,
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                }
            },
            grid: {
                left: 8,
                containLabel: true,
                bottom: 60,
                top: 28,
                right: 8
            },
            xAxis: {
                type: 'time',
                boundaryGap: false,
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
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: function (value) {
                        return valueSymbol === '%' || valueSymbol === 'ETH' ? value + ' ' + valueSymbol : valueSymbol + (0, utils_1.toK)(value);
                    }
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
            series: series,
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100,
                    filterMode: 'none'
                },
                {
                    start: 0,
                    end: 100,
                    filterMode: 'none',
                    textStyle: {
                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                    },
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
                    handleStyle: {
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                        color: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)'
                    },
                    moveHandleStyle: {
                        color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'
                    },
                    selectedDataBackground: {
                        lineStyle: {
                            color: color
                        },
                        areaStyle: {
                            color: color
                        }
                    },
                    emphasis: {
                        handleStyle: {
                            borderColor: isDark ? 'rgba(255, 255, 255, 1)' : '#000',
                            color: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'
                        },
                        moveHandleStyle: {
                            borderColor: isDark ? 'rgba(255, 255, 255, 1)' : '#000',
                            color: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
                        }
                    },
                    fillerColor: isDark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                    labelFormatter: function (val) {
                        var date = new Date(val);
                        return date.toLocaleDateString();
                    }
                }
            ]
        });
        function resize() {
            chartInstance.resize();
        }
        window.addEventListener('resize', resize);
        return function () {
            window.removeEventListener('resize', resize);
            chartInstance.dispose();
        };
    }, [id, valueSymbol, title, createInstance, series, isDark, color, isSmall, stackColors, showLegend]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { position: 'relative' } }, { children: (0, jsx_runtime_1.jsx)("div", { id: id, style: { height: '360px', margin: 'auto 0' } }) })));
}
exports.default = StackedBarChart;
