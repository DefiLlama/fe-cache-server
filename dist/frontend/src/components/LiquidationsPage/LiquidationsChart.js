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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidationsChart = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-unused-vars*/
var react_1 = require("react");
var echarts = __importStar(require("echarts"));
var context_1 = require("../../components/LiquidationsPage/context");
var hooks_1 = require("../../hooks");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var utils_1 = require("./utils");
var LiquidationsChart = function (_a) {
    var chartData = _a.chartData, uid = _a.uid, bobo = _a.bobo;
    var setSelectedSeries = (0, react_1.useContext)(context_1.LiquidationsContext).setSelectedSeries;
    var _b = __read((0, LocalStorage_1.useLiqsManager)(), 1), liqsSettings = _b[0];
    var isLiqsUsingUsd = liqsSettings['LIQS_USING_USD'];
    var isLiqsCumulative = liqsSettings['LIQS_CUMULATIVE'];
    var stackBy = (0, utils_1.useStackBy)();
    var isSmall = (0, hooks_1.useMedia)("(max-width: 37.5rem)");
    var _c = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _c[0];
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(uid));
        return instance || echarts.init(document.getElementById(uid));
    }, [uid]);
    (0, react_1.useEffect)(function () {
        setSelectedSeries(null);
        var chartInstance = createInstance();
        var option = (0, utils_1.getOption)(chartData, stackBy, isSmall, isDark, isLiqsUsingUsd, isLiqsCumulative);
        chartInstance.on('legendselectchanged', function (params) {
            setSelectedSeries(params.selected);
        });
        chartInstance.setOption(option);
        function resize() {
            chartInstance.resize();
        }
        window.addEventListener('resize', resize);
        return function () {
            window.removeEventListener('resize', resize);
            chartInstance.dispose();
        };
    }, [uid, chartData, createInstance, stackBy, isSmall, isDark, setSelectedSeries, isLiqsUsingUsd, isLiqsCumulative]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { style: __assign({ position: 'absolute' }, (bobo && {
                    height: '80%',
                    width: '90%',
                    backgroundImage: 'url("/bobo.png")',
                    backgroundSize: '100% 360px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    zIndex: 1
                })) }), (0, jsx_runtime_1.jsx)("div", { id: uid, style: {
                    minHeight: '360px',
                    margin: 'auto 0'
                } })] }));
};
exports.LiquidationsChart = LiquidationsChart;
