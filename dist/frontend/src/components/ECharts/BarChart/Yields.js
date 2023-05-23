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
var react_1 = require("react");
var uuid_1 = require("uuid");
var styled_components_1 = __importDefault(require("styled-components"));
var echarts = __importStar(require("echarts/core"));
var components_1 = require("echarts/components");
var charts_1 = require("echarts/charts");
var features_1 = require("echarts/features");
var renderers_1 = require("echarts/renderers");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var shared_1 = require("../shared");
var utils_1 = require("../../../utils");
var components_2 = require("../../../components");
echarts.use([
    components_1.ToolboxComponent,
    components_1.TooltipComponent,
    components_1.GridComponent,
    components_1.LegendComponent,
    charts_1.BarChart,
    charts_1.LineChart,
    renderers_1.CanvasRenderer,
    features_1.UniversalTransition,
    components_1.DataZoomComponent
]);
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
function BarChartYields(_a) {
    var chartData = _a.chartData;
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var _b = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _b[0];
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    (0, react_1.useEffect)(function () {
        var chartInstance = createInstance();
        var option = {
            color: ['#66c2a5', '#fc8d62'],
            title: {
                text: 'Median APY Trend',
                subtext: 'Calculated over all tracked pools on a given day',
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                }
            },
            grid: {
                left: '3%',
                right: '7%',
                bottom: '7%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                confine: true,
                axisPointer: {
                    type: 'cross'
                }
            },
            toolbox: {
                feature: {
                    dataZoom: {},
                    dataView: {},
                    restore: {}
                }
            },
            legend: {
                data: ['Median APY', '7-day Average'],
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    scale: true,
                    name: '',
                    nameLocation: 'middle',
                    nameGap: 30,
                    nameTextStyle: {
                        fontFamily: 'sans-serif',
                        fontSize: 14,
                        fontWeight: 500,
                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                    },
                    axisLabel: {
                        formatter: '{value}'
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#a1a1aa',
                            opacity: 0.1
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                    data: chartData.map(function (m) { return m.timestamp; })
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '',
                    position: 'middle',
                    nameGap: 40,
                    nameTextStyle: {
                        fontFamily: 'sans-serif',
                        fontSize: 14,
                        fontWeight: 500,
                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                    },
                    axisLabel: {
                        formatter: '{value} %'
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#a1a1aa',
                            opacity: 0.1
                        }
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
            series: [
                {
                    name: 'Median APY',
                    type: 'bar',
                    data: chartData.map(function (m) { return m.medianAPY.toFixed(3); })
                },
                {
                    name: '7-day Average',
                    type: 'line',
                    data: chartData.map(function (a) { return a.avg7day; }).map(function (a) { return (a === null ? a : a.toFixed(3)); })
                }
            ]
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
    }, [id, chartData, createInstance, isDark]);
    // prepare csv data
    var downloadCsv = function () {
        var rows = [['timestamp', 'medianAPY', 'avg7day']];
        chartData.forEach(function (item) {
            rows.push([item.timestamp, item.medianAPY, item.avg7day]);
        });
        (0, utils_1.download)('medianAPY.csv', rows.map(function (r) { return r.join(','); }).join('\n'));
    };
    return ((0, jsx_runtime_1.jsxs)(shared_1.YieldsChartWrapper, { children: [(0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { height: '600px', margin: 'auto 0' } }), (0, jsx_runtime_1.jsxs)(components_2.DownloadButton, __assign({ as: "button", onClick: downloadCsv }, { children: [(0, jsx_runtime_1.jsx)(components_2.DownloadIcon, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }))] }));
}
exports.default = BarChartYields;
var templateObject_1;
