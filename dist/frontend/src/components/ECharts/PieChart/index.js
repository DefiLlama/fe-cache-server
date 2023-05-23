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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var echarts = __importStar(require("echarts/core"));
var renderers_1 = require("echarts/renderers");
var charts_1 = require("echarts/charts");
var components_1 = require("echarts/components");
var uuid_1 = require("uuid");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var utils_1 = require("../../../utils");
echarts.use([renderers_1.CanvasRenderer, charts_1.PieChart, components_1.TooltipComponent, components_1.TitleComponent, components_1.GridComponent, components_1.GraphicComponent]);
function PieChart(_a) {
    var _b = _a.height, height = _b === void 0 ? '360px' : _b, stackColors = _a.stackColors, chartData = _a.chartData, title = _a.title, _c = _a.usdFormat, usdFormat = _c === void 0 ? true : _c, props = __rest(_a, ["height", "stackColors", "chartData", "title", "usdFormat"]);
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var _d = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _d[0];
    var series = (0, react_1.useMemo)(function () {
        var series = {
            name: '',
            type: 'pie',
            left: 0,
            right: 0,
            label: {
                fontFamily: 'sans-serif',
                color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                formatter: '{b}: ({d}%)'
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: chartData.map(function (item) {
                var _a;
                return ({
                    name: item.name,
                    value: item.value,
                    itemStyle: {
                        color: (_a = stackColors === null || stackColors === void 0 ? void 0 : stackColors[item.name]) !== null && _a !== void 0 ? _a : null
                    }
                });
            })
        };
        return series;
    }, [chartData, isDark, stackColors]);
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    (0, react_1.useEffect)(function () {
        // create instance
        var chartInstance = createInstance();
        chartInstance.setOption(__assign(__assign({}, (title && {
            title: {
                text: title,
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                }
            }
        })), { tooltip: {
                trigger: 'item',
                confine: true,
                valueFormatter: function (value) { return (usdFormat ? '$' + (0, utils_1.formattedNum)(value) : (0, utils_1.formattedNum)(value)); }
            }, grid: {
                left: 0,
                containLabel: true,
                bottom: 0,
                top: 100,
                right: 0
            }, series: series }));
        function resize() {
            chartInstance.resize();
        }
        window.addEventListener('resize', resize);
        return function () {
            window.removeEventListener('resize', resize);
            chartInstance.dispose();
        };
    }, [createInstance, series, isDark, title, usdFormat]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { position: 'relative' } }, props, { children: (0, jsx_runtime_1.jsx)("div", { id: id, style: { height: height, margin: 'auto 0' } }) })));
}
exports.default = PieChart;
