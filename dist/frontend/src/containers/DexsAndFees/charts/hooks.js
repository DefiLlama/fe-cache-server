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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetOverviewChartData = void 0;
var React = __importStar(require("react"));
var client_1 = require("../../../api/categories/adaptors/client");
var utils_1 = require("../../../api/categories/adaptors/utils");
var utils_2 = require("../../../utils");
var utils_3 = require("./utils");
var useGetOverviewChartData = function (_a) {
    var name = _a.name, dataToFetch = _a.dataToFetch, type = _a.type, enableBreakdownChart = _a.enableBreakdownChart, disabled = _a.disabled;
    var _b = (0, client_1.useFetchChartsSummary)(dataToFetch, (0, utils_2.slug)(name), undefined, disabled), data = _b.data, loading = _b.loading, error = _b.error;
    var mainChart = React.useMemo(function () {
        if (loading || error || !data)
            return null;
        var chartData;
        var title;
        var legend;
        if (!enableBreakdownChart) {
            chartData = data === null || data === void 0 ? void 0 : data.totalDataChart[0];
            legend = data === null || data === void 0 ? void 0 : data.totalDataChart[1];
        }
        else {
            var _a = __read((0, utils_1.chartBreakdownByChain)(data === null || data === void 0 ? void 0 : data.totalDataChartBreakdown), 2), cd = _a[0], lgnd = _a[1];
            chartData = cd;
            legend = lgnd;
        }
        title = Object.keys(legend).length <= 1 ? "".concat((0, utils_2.capitalizeFirstLetter)(type), " by chain") : '';
        var _b = __read((0, utils_3.chartFormatterBy)('chain')([chartData, legend], data === null || data === void 0 ? void 0 : data.totalDataChartBreakdown), 1), finalData = _b[0];
        return finalData && finalData.length > 0 ? finalData : null;
    }, [data, error, loading, enableBreakdownChart, type]);
    return { data: mainChart, loading: loading };
};
exports.useGetOverviewChartData = useGetOverviewChartData;
