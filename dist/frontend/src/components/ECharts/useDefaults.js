"use strict";
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
exports.formatTooltipValue = exports.useDefaults = void 0;
var echarts = __importStar(require("echarts/core"));
var renderers_1 = require("echarts/renderers");
var charts_1 = require("echarts/charts");
var components_1 = require("echarts/components");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var hooks_1 = require("../../hooks");
var defillama_light_neutral_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama-light-neutral.png"));
var defillama_dark_neutral_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama-dark-neutral.png"));
var utils_1 = require("../../utils");
var react_1 = require("react");
var CHART_SYMBOLS = {
    'Active Users': '',
    'New Users': '',
    Transactions: '',
    'Total Proposals': '',
    'Successful Proposals': '',
    'Max Votes': '',
    TVL: '$',
    APY: '%',
    'Median APY': '%',
    Treasury: '$'
};
echarts.use([
    renderers_1.CanvasRenderer,
    charts_1.LineChart,
    charts_1.BarChart,
    components_1.TooltipComponent,
    components_1.TitleComponent,
    components_1.GridComponent,
    components_1.DataZoomComponent,
    components_1.GraphicComponent,
    components_1.MarkLineComponent,
    components_1.LegendComponent
]);
function useDefaults(_a) {
    var color = _a.color, title = _a.title, _b = _a.tooltipSort, tooltipSort = _b === void 0 ? true : _b, tooltipOrderBottomUp = _a.tooltipOrderBottomUp, _c = _a.valueSymbol, valueSymbol = _c === void 0 ? '' : _c, hideLegend = _a.hideLegend, isStackedChart = _a.isStackedChart, _d = _a.unlockTokenSymbol, unlockTokenSymbol = _d === void 0 ? '' : _d;
    var _e = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _e[0];
    var isSmall = (0, hooks_1.useMedia)("(max-width: 37.5rem)");
    var defaults = (0, react_1.useMemo)(function () {
        var graphic = {
            type: 'image',
            z: 0,
            style: {
                image: isDark ? defillama_light_neutral_png_1.default.src : defillama_dark_neutral_png_1.default.src,
                height: 40,
                opacity: 0.3
            },
            left: isSmall ? '40%' : '45%',
            top: '130px'
        };
        var titleDefaults = {
            text: title,
            textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 600,
                color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
            },
            left: 15
        };
        var gridTop = valueSymbol === '%' ? 20 : hideLegend ? 0 : isSmall ? 60 : 10;
        var grid = {
            left: 20,
            containLabel: true,
            bottom: 60,
            top: title === '' ? gridTop + 20 : gridTop + 48,
            right: 20
        };
        var tooltip = {
            trigger: 'axis',
            confine: true,
            formatter: function (params) {
                var _a, _b, _c, _d, _e, _f;
                var chartdate = new Date(params[0].value[0]).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
                var vals;
                var filteredParams = params.filter(function (item) { return item.value[1] !== '-' && item.value[1] !== null; });
                if (isStackedChart) {
                    filteredParams.reverse();
                }
                else {
                    filteredParams.sort(function (a, b) { return (tooltipSort ? Math.abs(b.value[1]) - Math.abs(a.value[1]) : 0); });
                }
                var otherIndex = filteredParams.findIndex(function (item) { return item.seriesName === 'Others'; });
                var others;
                if (otherIndex >= 0 && otherIndex < 10) {
                    others = filteredParams[otherIndex];
                    filteredParams = filteredParams.filter(function (item) { return item.seriesName !== 'Others'; });
                }
                var topParams = filteredParams.slice(0, 10);
                var otherParams = filteredParams.slice(10);
                if (tooltipOrderBottomUp) {
                    topParams.reverse();
                }
                vals = topParams.reduce(function (prev, curr) {
                    return (prev +=
                        '<li style="list-style:none">' +
                            curr.marker +
                            curr.seriesName +
                            '&nbsp;&nbsp;' +
                            (0, exports.formatTooltipValue)(curr.value[1], curr.seriesName === 'Unlocks'
                                ? unlockTokenSymbol
                                : curr.seriesName.includes('Active Users')
                                    ? 'Users'
                                    : curr.seriesName.includes('Transactions')
                                        ? 'TXs'
                                        : Object.keys(CHART_SYMBOLS).includes(curr.seriesName)
                                            ? CHART_SYMBOLS[curr.seriesName]
                                            : valueSymbol) +
                            '</li>');
                }, '');
                if (otherParams.length !== 0) {
                    var otherString = '<li style="list-style:none">' +
                        ((_a = others === null || others === void 0 ? void 0 : others.marker) !== null && _a !== void 0 ? _a : otherParams[0].marker) +
                        'Others' +
                        '&nbsp;&nbsp;' +
                        (0, exports.formatTooltipValue)((0, utils_1.toK)(otherParams.reduce(function (prev, curr) { return prev + curr.value[1]; }, 0) + ((_b = others === null || others === void 0 ? void 0 : others.value[1]) !== null && _b !== void 0 ? _b : 0)), valueSymbol) +
                        '</li>';
                    if (tooltipOrderBottomUp) {
                        vals = otherString + vals;
                    }
                    else {
                        vals += otherString;
                    }
                }
                var mcap = (_d = (_c = params.filter(function (param) { return param.seriesName === 'Mcap'; })) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.value[1];
                var tvl = (_f = (_e = params.filter(function (param) { return param.seriesName === 'TVL'; })) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.value[1];
                if (mcap && tvl) {
                    vals += '<li style="list-style:none">' + 'Mcap/TVL' + '&nbsp;&nbsp;' + Number(mcap / tvl).toFixed(2) + '</li>';
                }
                if (title.toLowerCase() === 'tokens (usd)' || title.toLowerCase() === 'chains') {
                    var total = params.reduce(function (acc, curr) { return (acc += curr.value[1]); }, 0);
                    vals += '<li style="list-style:none;font-weight:600">' + 'Total' + '&nbsp;&nbsp;' + '$' + (0, utils_1.toK)(total) + '</li>';
                }
                return chartdate + vals;
            }
        };
        var inflowsTooltip = {
            trigger: 'axis',
            confine: true,
            formatter: function (params) {
                var chartdate = new Date(params[0].value[0]).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
                var vals = params
                    .sort(function (a, b) { return (tooltipSort ? a.value[1] - b.value[1] : 0); })
                    .reduce(function (prev, curr) {
                    if (curr.value[1] !== 0 && curr.value[1] !== '-') {
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
                var total = params.reduce(function (acc, curr) { return (acc += curr.value[1]); }, 0);
                vals += '<li style="list-style:none;font-weight:600">' + 'Total Inflows' + '&nbsp;&nbsp;' + (0, utils_1.toK)(total) + '</li>';
                return chartdate + vals;
            }
        };
        var xAxis = {
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
            },
            splitLine: {
                lineStyle: {
                    color: '#a1a1aa',
                    opacity: 0.1
                }
            }
        };
        var yAxis = {
            type: 'value',
            axisLabel: {
                formatter: function (value) {
                    return valueSymbol === '$'
                        ? valueSymbol + (0, utils_1.toK)(value)
                        : (valueSymbol === '%' ? value : (0, utils_1.toK)(value, 4)) + ' ' + valueSymbol;
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
        };
        var legend = {
            textStyle: {
                fontFamily: 'sans-serif',
                fontSize: 12,
                fontWeight: 400,
                color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
            },
            top: !hideLegend && isSmall ? 30 : 0,
            right: !hideLegend && isSmall ? null : 20
        };
        var dataZoom = [
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                start: 0,
                end: 100,
                right: 20,
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
        ];
        return { graphic: graphic, grid: grid, titleDefaults: titleDefaults, tooltip: tooltip, xAxis: xAxis, yAxis: yAxis, legend: legend, dataZoom: dataZoom, inflowsTooltip: inflowsTooltip };
    }, [
        color,
        isDark,
        isSmall,
        title,
        tooltipSort,
        valueSymbol,
        hideLegend,
        isStackedChart,
        tooltipOrderBottomUp,
        unlockTokenSymbol
    ]);
    return defaults;
}
exports.useDefaults = useDefaults;
var formatTooltipValue = function (value, symbol) {
    return symbol === '$'
        ? symbol + (0, utils_1.toK)(value)
        : symbol === '%'
            ? Math.round(value * 100) / 100 + ' %'
            : ("".concat(value).startsWith('0.00') ? (0, utils_1.toK)(value, 3) : (0, utils_1.toK)(value, 1)) + ' ' + symbol;
};
exports.formatTooltipValue = formatTooltipValue;
