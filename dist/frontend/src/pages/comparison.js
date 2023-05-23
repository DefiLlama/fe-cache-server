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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var router_1 = require("next/router");
var dynamic_1 = __importDefault(require("next/dynamic"));
var swr_1 = __importDefault(require("swr"));
var styled_components_1 = __importDefault(require("styled-components"));
var layout_1 = __importDefault(require("../layout"));
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var useSWR_1 = require("../utils/useSWR");
var constants_1 = require("../constants");
var utils_1 = require("../utils");
var shared_1 = require("../components/ECharts/shared");
var getColor_1 = require("../utils/getColor");
var Search_1 = require("../components/Search");
var LocalStorage_1 = require("../contexts/LocalStorage");
var ProtocolChart_1 = require("../components/ECharts/ProtocolChart/ProtocolChart");
var protocols_2 = require("../api/categories/protocols");
var perf_1 = require("../utils/perf");
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
var protocolColor = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var color;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, getColor_1.getColor)((0, utils_1.tokenIconPaletteUrl)(name))];
            case 1:
                color = _b.sent();
                return [2 /*return*/, (_a = {}, _a[name] = color, _a)];
        }
    });
}); };
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('comparison', function () { return __awaiter(void 0, void 0, void 0, function () {
    var protocols, stackColors, colors;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, protocols_1.getSimpleProtocolsPageData)(['name', 'logo'])];
            case 1:
                protocols = (_a.sent()).protocols;
                return [4 /*yield*/, Promise.allSettled(protocols.map(function (p) { return protocolColor(p.name); }))];
            case 2:
                stackColors = _a.sent();
                colors = {};
                stackColors.forEach(function (p) {
                    if (p.status === 'fulfilled' && p.value) {
                        colors = __assign(__assign({}, colors), p.value);
                    }
                });
                return [2 /*return*/, {
                        props: {
                            protocols: protocols.map(function (p) { return p.name; }),
                            stackColors: colors
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function CompareProtocolsTvls(_a) {
    var _b;
    var protocols = _a.protocols, stackColors = _a.stackColors;
    var router = (0, router_1.useRouter)();
    var _c = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvlEnabled = _c[0];
    var protocol = router.query.protocol;
    var selectedProtocols = protocol ? (typeof protocol === 'string' ? [protocol] : __spreadArray([], __read(protocol), false)) : null;
    var _d = (0, swr_1.default)('compare-protocols' + (selectedProtocols === null || selectedProtocols === void 0 ? void 0 : selectedProtocols.join('')), function () {
        return (0, useSWR_1.arrayFetcher)(selectedProtocols === null || selectedProtocols === void 0 ? void 0 : selectedProtocols.map(function (p) { return "".concat(constants_1.PROTOCOL_API, "/").concat((0, utils_1.slug)(p)); }));
    }), data = _d.data, error = _d.error;
    var isLoading = !data && !error;
    var chartData = React.useMemo(function () {
        var _a;
        var formattedData = (_a = data === null || data === void 0 ? void 0 : data.map(function (x) {
            var historicalChainTvls = (0, protocols_2.fuseProtocolData)(x).historicalChainTvls;
            return {
                protocolChartData: (0, ProtocolChart_1.formatProtocolsTvlChartData)({ historicalChainTvls: historicalChainTvls, extraTvlEnabled: extraTvlEnabled }),
                protocolName: x.name
            };
        })) !== null && _a !== void 0 ? _a : [];
        var chartData = {};
        formattedData.forEach(function (_a) {
            var protocolChartData = _a.protocolChartData, protocolName = _a.protocolName;
            protocolChartData.forEach(function (_a) {
                var _b, _c;
                var _d = __read(_a, 2), date = _d[0], tvl = _d[1];
                if (chartData[date]) {
                    chartData[date] = __assign(__assign({}, chartData[date]), (_b = {}, _b[protocolName] = tvl, _b));
                }
                else {
                    var closestTimestamp = 0;
                    // +- 6hours
                    for (var i = Number(date) - 21600; i <= Number(date) + 21600; i++) {
                        if (chartData[i]) {
                            closestTimestamp = i;
                        }
                    }
                    if (!closestTimestamp) {
                        chartData[date] = {};
                        closestTimestamp = Number(date);
                    }
                    chartData[closestTimestamp] = __assign(__assign({}, chartData[closestTimestamp]), (_c = {}, _c[protocolName] = tvl, _c));
                }
            });
        });
        return Object.keys(chartData).map(function (date) { return (__assign({ date: date }, chartData[date])); });
    }, [data, extraTvlEnabled]);
    var setSelectedProtocols = function (values) {
        router.push({
            pathname: router.pathname,
            query: {
                protocol: values
            }
        }, undefined, {
            shallow: true
        });
    };
    var colors = Object.fromEntries((_b = selectedProtocols === null || selectedProtocols === void 0 ? void 0 : selectedProtocols.map(function (p) { return [p, stackColors[p]]; })) !== null && _b !== void 0 ? _b : []);
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Compare Protocols TVLs - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Home', name: 'Compare Protocols' } }), (0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(Legend, { title: 'Selected Protocols', allOptions: protocols, options: selectedProtocols !== null && selectedProtocols !== void 0 ? selectedProtocols : [], setOptions: setSelectedProtocols }), (0, jsx_runtime_1.jsxs)(ChartWrapper, { children: [(0, jsx_runtime_1.jsx)(AreaChart, { chartData: chartData, title: "Protocols", valueSymbol: "$", stacks: selectedProtocols, stackColors: colors, hideDefaultLegend: true }), isLoading && (0, jsx_runtime_1.jsx)(Loading, { children: "Loading..." })] })] })] })));
}
exports.default = CompareProtocolsTvls;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\theight: 424px;\n\tdisplay: flex;\n\tflex-direction: column;\n"], ["\n\tposition: relative;\n\theight: 424px;\n\tdisplay: flex;\n\tflex-direction: column;\n"])));
var ChartWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin-top: auto;\n\tposition: relative;\n\tpadding: 12px;\n\tborder-radius: 12px;\n\tbackground: ", ";\n\theight: 384px;\n"], ["\n\tmargin-top: auto;\n\tposition: relative;\n\tpadding: 12px;\n\tborder-radius: 12px;\n\tbackground: ", ";\n\theight: 384px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg7;
});
var Loading = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: grid;\n\tplace-items: center;\n\tz-index: 1;\n\tbackground: ", ";\n\theight: 384px;\n\tborder-radius: 12px;\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: grid;\n\tplace-items: center;\n\tz-index: 1;\n\tbackground: ", ";\n\theight: 384px;\n\tborder-radius: 12px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg7;
});
var Legend = (0, styled_components_1.default)(shared_1.SelectLegendMultiple)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
