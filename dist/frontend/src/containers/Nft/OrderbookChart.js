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
    charts_1.LineChart,
    components_1.TooltipComponent,
    components_1.TitleComponent,
    components_1.GridComponent,
    components_1.GraphicComponent,
    components_1.LegendComponent,
    components_1.DataZoomComponent
]);
function OrderBookChart(_a) {
    var _b = _a.height, height = _b === void 0 ? '360px' : _b, chartData = _a.chartData;
    var id = React.useMemo(function () { return (0, uuid_1.v4)(); }, []);
    var isSmall = (0, hooks_1.useMedia)("(max-width: 37.5rem)");
    var _c = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _c[0];
    var createInstance = React.useCallback(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    React.useEffect(function () {
        var chartInstance = createInstance();
        var series = [
            {
                name: 'Ask',
                type: 'line',
                stack: 'Ask',
                step: true,
                scale: true,
                large: true,
                largeThreshold: 0,
                emphasis: {
                    focus: 'series',
                    shadowBlur: 10
                },
                symbol: 'none',
                itemStyle: {
                    color: '#3b82f6'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'blue'
                        },
                        {
                            offset: 1,
                            color: isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                        }
                    ])
                },
                data: chartData
                    .filter(function (item) { return item.orderType === 'ask'; })
                    .map(function (item) { return [item.price, item.amount, item.avgPrice, item.priceTotal, item.orderType]; })
            },
            {
                name: 'Bid',
                type: 'line',
                stack: 'Bid',
                step: true,
                scale: true,
                large: true,
                largeThreshold: 0,
                emphasis: {
                    focus: 'series',
                    shadowBlur: 10
                },
                symbol: 'none',
                itemStyle: {
                    color: '#22c55e'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'green'
                        },
                        {
                            offset: 1,
                            color: isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                        }
                    ])
                },
                data: chartData
                    .filter(function (item) { return item.orderType === 'bid'; })
                    .map(function (item) { return [item.price, item.amount, item.avgPrice, item.priceTotal, item.orderType]; })
            }
        ];
        var option = {
            animation: false,
            title: {
                text: 'Orderbook',
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                },
                left: 15
            },
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
                left: '5%',
                right: '10%',
                bottom: '7%',
                top: (isSmall ? 60 : 10) + 48,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                confine: true,
                formatter: function (params) {
                    var vals = '<li style="list-style:none">' + params[0].marker + params[0].seriesName + '</li>';
                    vals += '<li style="list-style:none">' + 'Amount :  ' + params[0].value[1] + '</li>';
                    vals += '<li style="list-style:none">' + 'Price :  ' + params[0].value[0] + ' ETH' + '</li>';
                    vals += '<li style="list-style:none">' + 'Avg Price :  ' + params[0].value[2] + ' ETH' + '</li>';
                    vals += '<li style="list-style:none">' + 'Total Price :  ' + params[0].value[3] + ' ETH' + '</li>';
                    return vals;
                },
                showDelay: 0
            },
            legend: {
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                    fontWeight: 400,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                },
                top: isSmall ? 30 : 0,
                right: isSmall ? null : 20,
                show: true
            },
            xAxis: {
                name: 'Price',
                type: 'log',
                axisLabel: {
                    formatter: function (value) { return Number(value.toFixed(2)) + ' ETH'; }
                },
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
                },
                splitLine: {
                    lineStyle: {
                        color: '#a1a1aa',
                        opacity: 0.1
                    }
                }
            },
            yAxis: {
                name: 'Amount',
                type: 'value',
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
    }, [id, chartData, createInstance, isDark, isSmall]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { position: 'relative' } }, { children: (0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { height: height, margin: 'auto 0' } }) })));
}
exports.default = OrderBookChart;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
var templateObject_1;
