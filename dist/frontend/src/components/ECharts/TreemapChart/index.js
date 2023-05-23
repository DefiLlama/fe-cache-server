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
var uuid_1 = require("uuid");
var styled_components_1 = __importDefault(require("styled-components"));
var echarts = __importStar(require("echarts/core"));
var renderers_1 = require("echarts/renderers");
var charts_1 = require("echarts/charts");
var components_1 = require("echarts/components");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var utils_1 = require("../../../utils");
var shared_1 = require("../shared");
echarts.use([components_1.TitleComponent, components_1.TooltipComponent, components_1.ToolboxComponent, components_1.DataZoomComponent, charts_1.TreemapChart, renderers_1.CanvasRenderer]);
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t--gradient-end: ", ";\n"], ["\n\t--gradient-end: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');
});
var visualMin = -100;
var visualMax = 100;
var visualMinBound = -40;
var visualMaxBound = 40;
function addColorGradientField(chartDataTree) {
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < chartDataTree.length; i++) {
        var node = chartDataTree[i];
        if (node) {
            var value = node.value;
            value[2] != null && value[2] < min && (min = value[2]);
            value[2] != null && value[2] > max && (max = value[2]);
        }
    }
    for (var i = 0; i < chartDataTree.length; i++) {
        var node = chartDataTree[i];
        if (node) {
            var value = node.value;
            // Scale value for visual effect
            if (value[2] != null && value[2] > 0) {
                value[3] = echarts.number.linearMap(value[2], [0, max], [visualMaxBound, visualMax], true);
            }
            else if (value[2] != null && value[2] < 0) {
                value[3] = echarts.number.linearMap(value[2], [min, 0], [visualMin, visualMinBound], true);
            }
            else {
                value[3] = 0;
            }
            if (!isFinite(value[3])) {
                value[3] = 0;
            }
            if (node.children) {
                addColorGradientField(node.children);
            }
        }
    }
}
function TreemapChart(_a) {
    var chartData = _a.chartData;
    var id = (0, react_1.useMemo)(function () { return (0, uuid_1.v4)(); }, []);
    var _b = __read((0, LocalStorage_1.useDarkModeManager)(), 1), isDark = _b[0];
    var chartDataTree = (0, react_1.useMemo)(function () {
        var e_1, _a;
        var treeData = [];
        var cData = chartData.filter(function (p) { return p.apyPct1D !== null; });
        var _loop_1 = function (project) {
            var projectData = cData.filter(function (p) { return p.projectName === project; });
            var projectTvl = projectData.map(function (p) { return p.tvlUsd; }).reduce(function (a, b) { return a + b; }, 0);
            treeData.push({
                value: [projectTvl, null, null],
                name: project,
                path: project,
                children: projectData.map(function (p) { return ({
                    value: [p.tvlUsd, parseFloat(p.apy.toFixed(2)), parseFloat(p.apyPct1D.toFixed(2))],
                    name: p.symbol,
                    path: "".concat(p.projectName, "/").concat(p.symbol)
                }); })
            });
        };
        try {
            // structure into hierarchy
            for (var _b = __values(__spreadArray([], __read(new Set(cData.map(function (p) { return p.projectName; }))), false)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var project = _c.value;
                _loop_1(project);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        addColorGradientField(treeData);
        return treeData;
    }, [chartData]);
    var createInstance = (0, react_1.useCallback)(function () {
        var instance = echarts.getInstanceByDom(document.getElementById(id));
        return instance || echarts.init(document.getElementById(id));
    }, [id]);
    (0, react_1.useEffect)(function () {
        var chartInstance = createInstance();
        var option = {
            title: {
                text: 'APY Trends - 1d Change',
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                }
            },
            tooltip: {
                formatter: function (info) {
                    var treePathInfo = info.treePathInfo;
                    var treePath = [];
                    for (var i = 1; i < treePathInfo.length; i++) {
                        treePath.push(treePathInfo[i].name);
                    }
                    if (treePath.length > 1) {
                        return [
                            'Project: ' + treePath[0] + '<br>',
                            'Pool: ' + treePath[1] + '<br>',
                            'TVL: $' + (0, utils_1.toK)(info.value[0]) + '<br>',
                            'APY: ' + info.value[1] + '%' + '<br>',
                            '1d Change: ' + info.value[2] + '%'
                        ].join('');
                    }
                    else {
                        return ['Project: ' + treePath[0]].join('');
                    }
                }
            },
            toolbox: {
                feature: {
                    restore: {}
                }
            },
            series: [
                {
                    name: 'All',
                    type: 'treemap',
                    visualMin: visualMin,
                    visualMax: visualMax,
                    visualDimension: 3,
                    label: {
                        position: 'insideTopRight',
                        formatter: function (params) {
                            var _a, _b, _c;
                            var arr;
                            if (((_c = (_b = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.path) === null || _b === void 0 ? void 0 : _b.split('/')) === null || _c === void 0 ? void 0 : _c.length) > 1) {
                                arr = [
                                    '{name|' + params.data.path.split('/').slice(-1)[0] + '}',
                                    'Spot: {apy| ' + params.value[1] + '%' + '}',
                                    'Change {apy| ' + params.value[2] + '%' + '}'
                                ];
                            }
                            else {
                                arr = [params.name];
                            }
                            return arr.join('\n');
                        },
                        rich: {
                            name: {
                                fontSize: 15,
                                color: '#fff',
                                lineHeight: 20
                            },
                            apy: {
                                fontSize: 13,
                                color: '#fff',
                                lineHeight: 20
                            }
                        }
                    },
                    upperLabel: {
                        show: true,
                        height: 20,
                        color: '#fff'
                    },
                    itemStyle: {
                        borderColor: '#fff'
                    },
                    levels: [
                        {
                            itemStyle: {
                                borderColor: '#777',
                                borderWidth: 0,
                                gapWidth: 1
                            },
                            upperLabel: {
                                show: false
                            }
                        },
                        {
                            color: ['#942e38', '#aaa', '#269f3c'],
                            colorMappingBy: 'value',
                            itemStyle: {
                                borderColor: '#555',
                                borderWidth: 5,
                                gapWidth: 1
                            },
                            emphasis: {
                                itemStyle: {
                                    borderColor: '#ddd'
                                }
                            }
                        },
                        {
                            colorSaturation: [0, 1],
                            itemStyle: {
                                borderWidth: 5,
                                gapWidth: 1,
                                borderColorSaturation: 0.6
                            }
                        }
                    ],
                    data: chartDataTree,
                    breadcrumb: {
                        itemStyle: {
                            color: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.4)'
                        },
                        textStyle: {
                            fontFamily: 'sans-serif',
                            fontWeight: 400,
                            color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                        }
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
    }, [id, chartDataTree, createInstance, isDark]);
    return ((0, jsx_runtime_1.jsx)(shared_1.YieldsChartWrapper, { children: (0, jsx_runtime_1.jsx)(Wrapper, { id: id, style: { height: '800px', margin: 'auto 0' } }) }));
}
exports.default = TreemapChart;
var templateObject_1;
