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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var layout_1 = __importDefault(require("../layout"));
var Theme_1 = require("../Theme");
var components_1 = require("../components");
var Search_1 = require("../components/Search");
var Filters_1 = require("../components/Filters");
var data_1 = require("../hooks/data");
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var perf_1 = require("../utils/perf");
var columns_1 = require("../components/Table/Defi/columns");
var TableWithSearch_1 = require("../components/Table/TableWithSearch");
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
// @ts-ignore TODO: same reason as in another file, getOraclePageData cares too much
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('oracles', function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, protocols_1.getOraclePageData)()];
            case 1:
                data = _a.sent();
                return [2 /*return*/, __assign(__assign({}, data), { revalidate: (0, api_1.maxAgeForNext)([22]) })];
        }
    });
}); });
var ChartsWrapper = (0, styled_components_1.default)(components_1.Panel)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n"], ["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n"])));
var PageView = function (_a) {
    var chartData = _a.chartData, tokensProtocols = _a.tokensProtocols, tokens = _a.tokens, tokenLinks = _a.tokenLinks, oraclesColors = _a.oraclesColors;
    var _b = (0, data_1.useCalcGroupExtraTvlsByDay)(chartData), chainsWithExtraTvlsByDay = _b.chainsWithExtraTvlsByDay, chainsWithExtraTvlsAndDominanceByDay = _b.chainsWithExtraTvlsAndDominanceByDay;
    var _c = React.useMemo(function () {
        var tvls = Object.entries(chainsWithExtraTvlsByDay[chainsWithExtraTvlsByDay.length - 1])
            .filter(function (item) { return item[0] !== 'date'; })
            .map(function (token) { return ({ name: token[0], value: token[1] }); })
            .sort(function (a, b) { return b.value - a.value; });
        var otherTvl = tvls.slice(5).reduce(function (total, entry) {
            return (total += entry.value);
        }, 0);
        var tokenTvls = tvls.slice(0, 5).concat({ name: 'Others', value: otherTvl });
        var tokensList = tvls.map(function (_a) {
            var name = _a.name, value = _a.value;
            return { name: name, protocolsSecured: tokensProtocols[name], tvs: value };
        });
        return { tokenTvls: tokenTvls, tokensList: tokensList };
    }, [chainsWithExtraTvlsByDay, tokensProtocols]), tokenTvls = _c.tokenTvls, tokensList = _c.tokensList;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Home', name: 'Oracles' } }), (0, jsx_runtime_1.jsx)(Theme_1.Header, { children: "Total Value Secured All Oracles" }), (0, jsx_runtime_1.jsxs)(ChartsWrapper, { children: [(0, jsx_runtime_1.jsx)(PieChart, { chartData: tokenTvls, stackColors: oraclesColors }), (0, jsx_runtime_1.jsx)(AreaChart, { chartData: chainsWithExtraTvlsAndDominanceByDay, stacks: tokens, stackColors: oraclesColors, customLegendName: "Oracle", customLegendOptions: tokens, hideDefaultLegend: true, valueSymbol: "%", title: "", expandTo100Percent: true })] }), (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWrapper, { children: (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWithDropdown, { links: tokenLinks, activeLink: "All" }) }), (0, jsx_runtime_1.jsx)(TableWithSearch_1.TableWithSearch, { data: tokensList, columns: columns_1.oraclesColumn, columnToSearch: 'name', placeholder: 'Search oracles...' })] }));
};
function Oracles(props) {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "Oracles - DefiLlama", defaultSEO: true }, { children: (0, jsx_runtime_1.jsx)(PageView, __assign({}, props)) })));
}
exports.default = Oracles;
var templateObject_1;
