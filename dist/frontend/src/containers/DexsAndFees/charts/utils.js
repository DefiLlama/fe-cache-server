"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartFormatterBy = void 0;
var utils_1 = require("../../../api/categories/adaptors/utils");
var chartFormatterBy = function (chartType) {
    switch (chartType) {
        case 'version':
            return function (_mainChart, totalDataChartBreakdown) { return (0, utils_1.chartBreakdownByVersion)(totalDataChartBreakdown !== null && totalDataChartBreakdown !== void 0 ? totalDataChartBreakdown : []); };
        case 'tokens':
            return function (_mainChart, totalDataChartBreakdown) { return (0, utils_1.chartBreakdownByTokens)(totalDataChartBreakdown !== null && totalDataChartBreakdown !== void 0 ? totalDataChartBreakdown : []); };
        case 'chain':
        default:
            return function (mainChart, _totalDataChartBreakdown) { return mainChart; };
    }
};
exports.chartFormatterBy = chartFormatterBy;
