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
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../../../Theme");
var components_1 = require("../../../components");
var Defi_1 = require("../../../components/Table/Defi");
var ButtonStyled_1 = require("../../../components/ButtonStyled");
var Search_1 = require("../../../components/Search");
var Filters_1 = require("../../../components/Filters");
var MultiSelect_1 = require("../../../components/MultiSelect");
var utils_1 = require("../../../utils");
var protocols_1 = require("../../../api/categories/protocols");
var defi_1 = require("../../../hooks/data/defi");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var data_1 = require("../../../hooks/data");
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
var ChartsWrapper = (0, styled_components_1.default)(components_1.Panel)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n"], ["\n\tmin-height: 402px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 16px;\n\n\t& > * {\n\t\tgrid-cols: span 1;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n"])));
var HeaderWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 12px;\n\tborder: 1px solid transparent;\n\n\tbutton {\n\t\tposition: relative;\n\t\tbottom: -14px;\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 12px;\n\tborder: 1px solid transparent;\n\n\tbutton {\n\t\tposition: relative;\n\t\tbottom: -14px;\n\t}\n"])));
var ChainTvlsFilter = styled_components_1.default.form(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t& > h2 {\n\t\tmargin: 0 2px 8px;\n\t\tfont-weight: 600;\n\t\tfont-size: 0.825rem;\n\t\tcolor: ", ";\n\t}\n"], ["\n\t& > h2 {\n\t\tmargin: 0 2px 8px;\n\t\tfont-weight: 600;\n\t\tfont-size: 0.825rem;\n\t\tcolor: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
function ChainsContainer(_a) {
    var _this = this;
    var chainsUnique = _a.chainsUnique, chainTvls = _a.chainTvls, stackedDataset = _a.stackedDataset, category = _a.category, categories = _a.categories, chainsGroupbyParent = _a.chainsGroupbyParent, tvlTypes = _a.tvlTypes, colorsByChain = _a.colorsByChain;
    var _b = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvlsEnabled = _b[0];
    var _c = React.useMemo(function () {
        // add extra tvls like staking pool2 based on toggles selected
        var dataByChain = (0, defi_1.formatDataWithExtraTvls)({ data: chainTvls, applyLqAndDc: true, extraTvlsEnabled: extraTvlsEnabled });
        // format chains data to use in pie chart
        var onlyChainTvls = dataByChain.map(function (chain) { return ({
            name: chain.name,
            value: chain.tvl
        }); });
        var chainsWithLowTvls = onlyChainTvls.slice(10).reduce(function (total, entry) {
            return (total += entry.value);
        }, 0);
        // limit chains in pie chart to 10 and remaining chains in others
        var pieChartData = onlyChainTvls
            .slice(0, 10)
            .sort(function (a, b) { return b.value - a.value; })
            .concat({ name: 'Others', value: chainsWithLowTvls });
        var _a = (0, defi_1.groupDataWithTvlsByDay)({
            chains: stackedDataset,
            tvlTypes: tvlTypes,
            extraTvlsEnabled: extraTvlsEnabled
        }), chainsWithExtraTvlsByDay = _a.chainsWithExtraTvlsByDay, chainsWithExtraTvlsAndDominanceByDay = _a.chainsWithExtraTvlsAndDominanceByDay;
        return { dataByChain: dataByChain, pieChartData: pieChartData, chainsWithExtraTvlsByDay: chainsWithExtraTvlsByDay, chainsWithExtraTvlsAndDominanceByDay: chainsWithExtraTvlsAndDominanceByDay };
    }, [chainTvls, extraTvlsEnabled, stackedDataset, tvlTypes]), dataByChain = _c.dataByChain, pieChartData = _c.pieChartData, chainsWithExtraTvlsAndDominanceByDay = _c.chainsWithExtraTvlsAndDominanceByDay;
    var downloadCsv = function () { return __awaiter(_this, void 0, void 0, function () {
        var rows, props, chainsWithExtraTvlsByDay;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    window.alert('Data download might take up to 1 minute, click OK to proceed');
                    rows = [__spreadArray(['Timestamp', 'Date'], __read(chainsUnique), false)];
                    return [4 /*yield*/, (0, protocols_1.getNewChainsPageData)('All')];
                case 1:
                    props = (_a.sent()).props;
                    chainsWithExtraTvlsByDay = (0, defi_1.groupDataWithTvlsByDay)({
                        chains: props.stackedDataset,
                        tvlTypes: tvlTypes,
                        extraTvlsEnabled: extraTvlsEnabled
                    }).chainsWithExtraTvlsByDay;
                    chainsWithExtraTvlsByDay
                        .sort(function (a, b) { return a.date - b.date; })
                        .forEach(function (day) {
                        rows.push(__spreadArray([day.date, (0, utils_1.toNiceCsvDate)(day.date)], __read(chainsUnique.map(function (chain) { var _a; return (_a = day[chain]) !== null && _a !== void 0 ? _a : ''; })), false));
                    });
                    (0, utils_1.download)('chains.csv', rows.map(function (r) { return r.join(','); }).join('\n'));
                    return [2 /*return*/];
            }
        });
    }); };
    var showByGroup = ['All', 'Non-EVM'].includes(category) ? true : false;
    var groupedChains = (0, data_1.useGroupChainsByParent)(dataByChain, showByGroup ? chainsGroupbyParent : {});
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: {
                    category: 'Chains',
                    name: category === 'All' ? 'All Chains' : category
                } }), (0, jsx_runtime_1.jsxs)(HeaderWrapper, { children: [(0, jsx_runtime_1.jsx)(Theme_1.Header, { children: "Total Value Locked All Chains" }), (0, jsx_runtime_1.jsx)(ButtonStyled_1.ButtonDark, __assign({ onClick: downloadCsv }, { children: "Download all data in .csv" }))] }), (0, jsx_runtime_1.jsxs)(ChartsWrapper, { children: [(0, jsx_runtime_1.jsx)(PieChart, { chartData: pieChartData, stackColors: colorsByChain }), (0, jsx_runtime_1.jsx)(AreaChart, { chartData: chainsWithExtraTvlsAndDominanceByDay, stacks: chainsUnique, stackColors: colorsByChain, customLegendName: "Chain", customLegendOptions: chainsUnique, hideDefaultLegend: true, valueSymbol: "%", title: "", expandTo100Percent: true })] }), (0, jsx_runtime_1.jsxs)(ChainTvlsFilter, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Chain Groups" }), (0, jsx_runtime_1.jsx)(MultiSelect_1.GroupChains, { label: "Filters" })] }), (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWrapper, { children: (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWithDropdown, { links: categories, activeLink: category }) }), (0, jsx_runtime_1.jsx)(Defi_1.DefiChainsTable, { data: groupedChains })] }));
}
exports.default = ChainsContainer;
var templateObject_1, templateObject_2, templateObject_3;
