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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticPaths = exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var layout_1 = __importDefault(require("../../layout"));
var Theme_1 = require("../../Theme");
var Search_1 = require("../../components/Search");
var SEO_1 = __importDefault(require("../../components/SEO"));
var LiquidationsHeader_1 = require("../../components/LiquidationsPage/LiquidationsHeader");
var LiquidationsContent_1 = require("../../components/LiquidationsPage/LiquidationsContent");
var ProtocolsTable_1 = require("../../components/LiquidationsPage/ProtocolsTable");
var TableSwitch_1 = require("../../components/LiquidationsPage/TableSwitch");
var PositionsTable_1 = require("../../components/LiquidationsPage/PositionsTable");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var api_1 = require("../../api");
var utils_1 = require("../../utils");
var liquidations_1 = require("../../utils/liquidations");
var context_1 = require("../../components/LiquidationsPage/context");
var perf_1 = require("../../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('liquidations/[symbol]', function (_a) {
    var params = _a.params;
    return __awaiter(void 0, void 0, void 0, function () {
        var symbol, options, data, prevData;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    symbol = params.symbol.toLowerCase();
                    return [4 /*yield*/, (0, liquidations_1.getAvailableAssetsList)()];
                case 1:
                    options = (_c.sent()).assets;
                    return [4 /*yield*/, (0, liquidations_1.getLatestChartData)(symbol, 100)];
                case 2:
                    data = _c.sent();
                    return [4 /*yield*/, (0, liquidations_1.getPrevChartData)(symbol, 100, 3600 * 24)];
                case 3:
                    prevData = (_b = (_c.sent())) !== null && _b !== void 0 ? _b : data;
                    return [2 /*return*/, {
                            props: { data: data, prevData: prevData, options: options },
                            revalidate: (0, api_1.maxAgeForNext)([5, 25, 45])
                        }];
            }
        });
    });
});
var getStaticPaths = function () { return __awaiter(void 0, void 0, void 0, function () {
    var assets, paths;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, liquidations_1.getAvailableAssetsList)()];
            case 1:
                assets = (_a.sent()).assets;
                paths = assets
                    .map(function (x) { return x.route.split('/').pop(); })
                    .map(function (x) { return ({
                    params: { symbol: x.toLowerCase() }
                }); });
                return [2 /*return*/, { paths: paths.slice(0, 5), fallback: 'blocking' }];
        }
    });
}); };
exports.getStaticPaths = getStaticPaths;
var LiquidationsProvider = function (_a) {
    var children = _a.children;
    var _b = __read(React.useState({}), 2), selectedSeries = _b[0], setSelectedSeries = _b[1];
    return ((0, jsx_runtime_1.jsx)(context_1.LiquidationsContext.Provider, __assign({ value: { selectedSeries: selectedSeries, setSelectedSeries: setSelectedSeries } }, { children: children })));
};
var ResponsiveHeader = (0, styled_components_1.default)(Theme_1.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttext-align: center;\n\t@media (min-width: 80rem) {\n\t\ttext-align: revert;\n\t}\n"], ["\n\ttext-align: center;\n\t@media (min-width: 80rem) {\n\t\ttext-align: revert;\n\t}\n"])));
var LiquidationsHomePage = function (props) {
    var data = props.data, prevData = props.prevData, options = props.options;
    var _a = __read((0, LocalStorage_1.useLiqsManager)(), 1), liqsSettings = _a[0];
    var LIQS_SHOWING_INSPECTOR = LocalStorage_1.LIQS_SETTINGS.LIQS_SHOWING_INSPECTOR;
    var isLiqsShowingInspector = liqsSettings[LIQS_SHOWING_INSPECTOR];
    var _b = __read(React.useState(Math.round((Date.now() - (data === null || data === void 0 ? void 0 : data.time) * 1000) / 1000 / 60)), 2), minutesAgo = _b[0], setMinutesAgo = _b[1];
    React.useEffect(function () {
        var interval = setInterval(function () {
            setMinutesAgo(function (x) { return x + 1; });
        }, 1000 * 60);
        return function () { return clearInterval(interval); };
    }, []);
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "".concat(data.name, " (").concat(data.symbol.toUpperCase(), ") Liquidation Levels - DefiLlama") }, { children: [(0, jsx_runtime_1.jsx)(SEO_1.default, { liqsPage: true, cardName: "".concat(data.name, " (").concat(data.symbol.toUpperCase(), ")"), logo: 'https://defillama.com' + (0, utils_1.liquidationsIconUrl)(data.symbol.toLowerCase(), true), tvl: '$' + (0, liquidations_1.getReadableValue)(data.totalLiquidable) }), (0, jsx_runtime_1.jsx)(Search_1.LiquidationsSearch, { step: { category: 'Home', name: "".concat(data.symbol.toUpperCase(), " Liquidation Levels"), hideOptions: true } }), (0, jsx_runtime_1.jsx)(ResponsiveHeader, { children: "Liquidation levels in DeFi \uD83D\uDCA6" }), (0, jsx_runtime_1.jsx)(LiquidationsHeader_1.LiquidationsHeader, { data: data, options: options }), (0, jsx_runtime_1.jsx)(LiquidationsProvider, { children: (0, jsx_runtime_1.jsx)(LiquidationsContent_1.LiquidationsContent, { data: data, prevData: prevData }) }), (0, jsx_runtime_1.jsxs)(PositionsTable_1.SmolHints, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.Clock, { size: 12 }), (0, jsx_runtime_1.jsxs)("i", { children: ["Last updated ", minutesAgo, "min ago"] })] }), (0, jsx_runtime_1.jsx)(TableSwitch_1.TableSwitch, {}), isLiqsShowingInspector && (0, jsx_runtime_1.jsx)(PositionsTable_1.PositionsTable, { data: data, prevData: prevData }), !isLiqsShowingInspector && (0, jsx_runtime_1.jsx)(ProtocolsTable_1.ProtocolsTable, { data: data, prevData: prevData })] })));
};
exports.default = LiquidationsHomePage;
var templateObject_1;
