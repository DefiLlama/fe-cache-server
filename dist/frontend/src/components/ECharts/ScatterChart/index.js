"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var utils_1 = require("../../../utils");
var uuid_1 = require("uuid");
var styled_components_1 = __importDefault(require("styled-components"));
var echarts = __importStar(require("echarts/core"));
var renderers_1 = require("echarts/renderers");
var charts_1 = require("echarts/charts");
var components_1 = require("echarts/components");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var shared_1 = require("../shared");
echarts.use([
    renderers_1.CanvasRenderer,
    charts_1.ScatterChart,
    components_1.TooltipComponent,
    components_1.ToolboxComponent,
    components_1.TitleComponent,
    components_1.GridComponent,
    components_1.GraphicComponent,
    components_1.AxisPointerComponent,
    components_1.BrushComponent,
    components_1.LegendComponent,
    components_1.DataZoomComponent
]);
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
function ScatterChart(_a) {
    var chartData = _a.chartData;
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var _b = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _b[0];
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    (0, react_1.useEffect)(function () {
        var e_1, _a;
        var chartInstance = createInstance();
        var projectNames = __spreadArray([], __read(new Set(chartData.map(function (p) { return p.projectName; }))), false);
        var series = [];
        var _loop_1 = function (project) {
            series.push({
                name: project,
                type: 'scatter',
                symbols: 5,
                large: true,
                largeThreshold: 0,
                emphasis: {
                    focus: 'series'
                },
                data: chartData
                    .filter(function (p) { return p.projectName === project; })
                    .map(function (p) { return [p.sigma, p.mu, p.count, p.symbol, p.pool, p.tvlUsd, p.apy, p.chain]; })
            });
        };
        try {
            for (var projectNames_1 = __values(projectNames), projectNames_1_1 = projectNames_1.next(); !projectNames_1_1.done; projectNames_1_1 = projectNames_1.next()) {
                var project = projectNames_1_1.value;
                _loop_1(project);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (projectNames_1_1 && !projectNames_1_1.done && (_a = projectNames_1.return)) _a.call(projectNames_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var option = {
            title: {
                text: 'APY Average vs Volatility',
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
                showDelay: 0,
                confine: true,
                formatter: function (params) {
                    if (params.value.length > 1) {
                        return ('Symbol: ' +
                            params.value[3] +
                            '<br/>' +
                            'Pool: ' +
                            params.value[4] +
                            '<br/>' +
                            'TVL: $' +
                            (0, utils_1.toK)(params.value[5]) +
                            '<br/>' +
                            'APY Spot: ' +
                            params.value[6].toFixed(2) +
                            '%' +
                            '<br/>' +
                            'Chain: ' +
                            params.value[7] +
                            '<br/>' +
                            'Project: ' +
                            params.seriesName +
                            '<br/>' +
                            'APY Geometric Average: ' +
                            params.value[1].toFixed(2) +
                            '%' +
                            '<br/>' +
                            'APY Standard Deviation: ' +
                            params.value[0].toFixed(2) +
                            '%' +
                            '<br/>' +
                            'Nb of collected daily datapoints: ' +
                            params.value[2]);
                    }
                    else {
                        return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value.toFixed(5) + 'mean ';
                    }
                },
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                }
            },
            toolbox: {
                feature: {
                    dataZoom: {},
                    restore: {}
                }
            },
            xAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: 'APY Standard Deviation',
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
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: 'APY Geometric Average',
                    nameLocation: 'middle',
                    nameGap: 40,
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
    }, [id, chartData, createInstance, isDark]);
    return ((0, jsx_runtime_1.jsx)(shared_1.YieldsChartWrapper, { children: (0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { height: '600px', margin: 'auto 0' } }) }));
}
exports.default = ScatterChart;
var templateObject_1;
