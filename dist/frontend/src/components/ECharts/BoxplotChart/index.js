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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var uuid_1 = require("uuid");
var styled_components_1 = __importDefault(require("styled-components"));
var echarts = __importStar(require("echarts/core"));
var renderers_1 = require("echarts/renderers");
var charts_1 = require("echarts/charts");
var features_1 = require("echarts/features");
var echarts_simple_transform_1 = require("echarts-simple-transform");
var components_1 = require("echarts/components");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var shared_1 = require("../shared");
echarts.use([
    renderers_1.CanvasRenderer,
    charts_1.BoxplotChart,
    components_1.TooltipComponent,
    components_1.ToolboxComponent,
    components_1.TitleComponent,
    components_1.GridComponent,
    components_1.DataZoomComponent,
    components_1.LegendComponent,
    components_1.DatasetComponent,
    components_1.TransformComponent,
    features_1.UniversalTransition
]);
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
function BoxplotChart(_a) {
    var chartData = _a.chartData;
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var _b = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _b[0];
    // transform chartData into required structure
    var data = chartData.map(function (p) { return [p.apy, p.projectName]; });
    data.unshift(['APY', 'Project']);
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    // Register transform func
    echarts.registerTransform(echarts_simple_transform_1.aggregate);
    (0, react_1.useEffect)(function () {
        var chartInstance = createInstance();
        var option = {
            dataset: [
                {
                    id: 'raw',
                    source: data
                },
                {
                    id: 'apy_aggregate',
                    fromDatasetId: 'raw',
                    transform: [
                        {
                            type: 'ecSimpleTransform:aggregate',
                            config: {
                                resultDimensions: [
                                    { name: 'count', from: 'APY', method: 'count' },
                                    { name: 'min', from: 'APY', method: 'min' },
                                    { name: 'Q1', from: 'APY', method: 'Q1' },
                                    { name: 'median', from: 'APY', method: 'median' },
                                    { name: 'Q3', from: 'APY', method: 'Q3' },
                                    { name: 'max', from: 'APY', method: 'max' },
                                    { name: 'Project', from: 'Project' }
                                ],
                                groupBy: 'Project'
                            }
                        },
                        {
                            type: 'sort',
                            config: {
                                dimension: 'Q3',
                                order: 'asc'
                            }
                        }
                    ]
                }
            ],
            title: {
                text: 'Spot APY distribution',
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                }
            },
            tooltip: {
                trigger: 'axis',
                confine: true
            },
            toolbox: {
                feature: {
                    restore: {}
                }
            },
            xAxis: {
                scale: true,
                boundaryGap: false,
                name: 'APY',
                nameLocation: 'middle',
                nameGap: 30,
                nameTextStyle: {
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                    fontWeight: 500,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                },
                splitLine: {
                    lineStyle: {
                        color: '#a1a1aa',
                        opacity: 0.1
                    }
                }
            },
            yAxis: {
                type: 'category',
                boundaryGap: false,
                nameTextStyle: {
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                    fontWeight: 600,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                },
                splitLine: {
                    lineStyle: {
                        color: '#a1a1aa',
                        opacity: 0.1
                    }
                }
            },
            grid: {
                bottom: 100
            },
            legend: {
                selected: { detail: false }
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100,
                    filterMode: 'none'
                },
                {
                    type: 'slider',
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
                            color: '#445ed0'
                        },
                        areaStyle: {
                            color: '#445ed0'
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
                    fillerColor: isDark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'
                }
            ],
            series: [
                {
                    type: 'boxplot',
                    datasetId: 'apy_aggregate',
                    itemStyle: {
                        color: '#b8c5f2'
                    },
                    encode: {
                        x: ['min', 'Q1', 'median', 'Q3', 'max'],
                        y: 'Project',
                        itemName: ['Project'],
                        tooltip: ['count', 'min', 'Q1', 'median', 'Q3', 'max']
                    }
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
    }, [id, data, createInstance, isDark]);
    return ((0, jsx_runtime_1.jsx)(shared_1.YieldsChartWrapper, { children: (0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { height: '800px', margin: 'auto 0' } }) }));
}
exports.default = BoxplotChart;
var templateObject_1;
