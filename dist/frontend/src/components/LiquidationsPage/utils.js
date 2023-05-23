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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStackBy = exports.getOption = exports.convertChartDataBinsToArray = void 0;
/* eslint-disable no-unused-vars*/
var router_1 = require("next/router");
var liquidations_1 = require("../../utils/liquidations");
var defillama_light_neutral_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama-light-neutral.png"));
var defillama_dark_neutral_png_1 = __importDefault(require("~/public/defillama-press-kit/defi/PNG/defillama-dark-neutral.png"));
var convertChartDataBinsToArray = function (obj, totalBins) {
    // // this line below suddenly throws error in browser that the iterator cant iterate??
    // const arr = [...Array(totalBins).keys()].map((i) => obj.bins[i] || 0)
    var arr = Array.from({ length: totalBins }, function (_, i) { return i; }).map(function (i) { return obj.bins[i] || { native: 0, usd: 0 }; });
    return arr;
};
exports.convertChartDataBinsToArray = convertChartDataBinsToArray;
var getOption = function (chartData, stackBy, isSmall, isDark, isLiqsUsingUsd, isLiqsCumulative) {
    var chartDataBins = chartData.chartDataBins[stackBy];
    // convert chartDataBins to array
    var chartDataBinsArray = Object.keys(chartDataBins).map(function (key) { return ({
        key: key,
        data: (0, exports.convertChartDataBinsToArray)(chartDataBins[key], 150)
    }); });
    var series;
    if (!isLiqsCumulative) {
        series = chartDataBinsArray.map(function (obj) { return ({
            type: 'bar',
            name: liquidations_1.PROTOCOL_NAMES_MAP[obj.key],
            data: obj.data.map(function (value) { return (isLiqsUsingUsd ? value['usd'] : value['native']); }),
            emphasis: {
                focus: 'series'
            },
            stack: 'x'
        }); });
    }
    else {
        series = chartDataBinsArray.map(function (obj) { return ({
            type: 'bar',
            name: liquidations_1.PROTOCOL_NAMES_MAP[obj.key],
            data: obj.data
                .reverse()
                .map(function (_value, index, arr) {
                var sum = arr.slice(0, index + 1).reduce(function (a, b) { return a + (isLiqsUsingUsd ? b['usd'] : b['native']); }, 0);
                return sum;
            })
                .reverse(),
            emphasis: {
                focus: 'series'
            },
            stack: 'x'
        }); });
    }
    var option = {
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
        legend: __assign(__assign({ orient: 'vertical', align: 'left' }, (isLiqsCumulative ? { right: 10 } : { left: 10 })), { textStyle: {
                color: '#a1a1aa'
            }, inactiveColor: '#a1a1aa90' }),
        grid: {
            left: '2%',
            right: '1%',
            top: '2%',
            bottom: '2%',
            containLabel: true
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100,
                filterMode: 'none'
            }
        ],
        tooltip: {
            trigger: 'axis',
            confine: true,
            axisPointer: {
                type: 'cross'
            },
            formatter: function (params) {
                var name = params[0].name;
                return ("<div style=\"margin-bottom: 4px\"><b>".concat(isLiqsCumulative ? "Total liquidatable \u2264 " : "Liquidations at ~", "$").concat(name, "</b><br/>") +
                    // sum of all the values
                    "<span><b>Total :</b> ".concat(isLiqsUsingUsd
                        ? "$".concat((0, liquidations_1.getReadableValue)(params.reduce(function (a, b) { return a + Number(b.value); }, 0)))
                        : "".concat((0, liquidations_1.getReadableValue)(params.reduce(function (a, b) { return a + Number(b.value); }, 0))), "</span></div>") +
                    params
                        .map(function (param) {
                        return "<span style=\"color: ".concat(param.color, "; margin-bottom: 2px\">  <b>").concat(param.seriesName, " :</b> ").concat(isLiqsUsingUsd
                            ? "$".concat((0, liquidations_1.getReadableValue)(Number(param.value)))
                            : "".concat((0, liquidations_1.getReadableValue)(Number(param.value))), "</span>");
                    })
                        .join('<br/>'));
            }
        },
        xAxis: {
            // bins
            type: 'category',
            splitLine: {
                lineStyle: {
                    color: '#a1a1aa',
                    opacity: 0.1
                }
            },
            axisLabel: {
                formatter: function (value) { return "$".concat(Number(value).toFixed(3)); }
            },
            axisTick: {
                alignWithLabel: true
            },
            data: Array.from({ length: chartData.totalBins }, function (_, i) { return i; }).map(function (x) { return (x * chartData.binSize).toFixed(3); })
        },
        yAxis: {
            type: 'value',
            position: isLiqsCumulative ? 'left' : 'right',
            axisLabel: {
                formatter: function (value) {
                    return isLiqsUsingUsd ? "$".concat((0, liquidations_1.getReadableValue)(Number(value))) : "".concat((0, liquidations_1.getReadableValue)(Number(value)));
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#a1a1aa',
                    opacity: 0.1
                }
            }
        },
        series: series
    };
    return option;
};
exports.getOption = getOption;
var useStackBy = function () {
    var router = (0, router_1.useRouter)();
    var stackBy = router.query.stackBy;
    var _stackBy = !!stackBy ? stackBy : 'protocols';
    return _stackBy;
};
exports.useStackBy = useStackBy;
