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
var react_1 = require("react");
var dynamic_1 = __importDefault(require("next/dynamic"));
var react_feather_1 = require("react-feather");
var react_query_1 = require("react-query");
var image_1 = __importDefault(require("next/future/image"));
var link_1 = __importDefault(require("next/link"));
var router_1 = require("next/router");
var styled_components_1 = __importDefault(require("styled-components"));
var components_1 = require("../../components");
var Announcement_1 = __importDefault(require("../../components/Announcement"));
var Misc_1 = require("../../components/ECharts/ProtocolChart/Misc");
var Search_1 = require("../../components/Search");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var ReactSelect_1 = __importDefault(require("../MultiSelect/ReactSelect"));
var DataWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tposition: relative;\n\tmin-height: 500px;\n\n\t#chartWrapper {\n\t\tflex: 1;\n\t}\n\n\t@media screen and (min-width: 105rem) {\n\t\tflex-direction: row;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tposition: relative;\n\tmin-height: 500px;\n\n\t#chartWrapper {\n\t\tflex: 1;\n\t}\n\n\t@media screen and (min-width: 105rem) {\n\t\tflex-direction: row;\n\t}\n"])));
var PanelWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 10px;\n\tflex: 1;\n\n\t@media screen and (min-width: 105rem) {\n\t\tflex-direction: column;\n\t\tmax-width: 14%;\n\t\tmin-width: 250px;\n\t}\n"], ["\n\tdisplay: flex;\n\tgap: 10px;\n\tflex: 1;\n\n\t@media screen and (min-width: 105rem) {\n\t\tflex-direction: column;\n\t\tmax-width: 14%;\n\t\tmin-width: 250px;\n\t}\n"])));
var ToggleWrapper = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin-left: auto;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin-left: auto;\n"])));
var ChainChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/ChainChart')); }); }, {
    ssr: false
});
var CustomOption = function (_a) {
    var innerProps = _a.innerProps, label = _a.label, data = _a.data;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({}, innerProps, { style: { display: 'flex', margin: '8px', cursor: 'pointer' } }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "https://icons.llamao.fi/icons/chains/rsz_".concat(label, "?w=48&h=48"), alt: label, style: { width: '20px', marginRight: '10px', borderRadius: '50%' } }), label] })));
};
var getChainData = function (chain, extraTvlsEnabled) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, chart, extraTvlCharts, chainFeesData, chainVolumeData, bridgeData, feesData, volumeData, txsData, usersData, chainsSet, globalChart, chainProtocolsVolumes, chainProtocolsFees, bridgeChartData, volumeChart, feesChart;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch('http://localhost:3001/' + chain).then(function (r) { return r.json(); })];
            case 1:
                _a = (_b.sent()).data, chart = _a.chart, extraTvlCharts = _a.extraTvlCharts, chainFeesData = _a.chainFeesData, chainVolumeData = _a.chainVolumeData, bridgeData = _a.bridgeData, feesData = _a.feesData, volumeData = _a.volumeData, txsData = _a.txsData, usersData = _a.usersData, chainsSet = _a.chainsSet;
                globalChart = (function () {
                    var globalChart = chart &&
                        chart.map(function (data) {
                            var sum = data[1];
                            Object.entries(extraTvlCharts).forEach(function (_a) {
                                var _b = __read(_a, 2), prop = _b[0], propCharts = _b[1];
                                var stakedData = propCharts.find(function (x) { return x[0] === data[0]; });
                                // find current date and only add values on that date in "data" above
                                if (stakedData) {
                                    if (prop === 'doublecounted' && !extraTvlsEnabled['doublecounted']) {
                                        sum -= stakedData[1];
                                    }
                                    if (prop === 'liquidstaking' && !extraTvlsEnabled['liquidstaking']) {
                                        sum -= stakedData[1];
                                    }
                                    if (prop === 'dcAndLsOverlap') {
                                        if (!extraTvlsEnabled['doublecounted'] || !extraTvlsEnabled['liquidstaking']) {
                                            sum += stakedData[1];
                                        }
                                    }
                                    if (extraTvlsEnabled[prop.toLowerCase()] && prop !== 'doublecounted' && prop !== 'liquidstaking') {
                                        sum += stakedData[1];
                                    }
                                }
                            });
                            return [data[0], sum];
                        });
                    return globalChart;
                })();
                chainProtocolsVolumes = (function () {
                    var _a;
                    var allProtocolVolumes = [];
                    chainVolumeData &&
                        ((_a = chainVolumeData === null || chainVolumeData === void 0 ? void 0 : chainVolumeData.protocols) === null || _a === void 0 ? void 0 : _a.forEach(function (prototcol) {
                            return allProtocolVolumes.push.apply(allProtocolVolumes, __spreadArray([prototcol], __read(((prototcol === null || prototcol === void 0 ? void 0 : prototcol.subRows) || [])), false));
                        }));
                    return allProtocolVolumes;
                })();
                chainProtocolsFees = (function () {
                    var _a;
                    var allProtocolFees = [];
                    chainFeesData &&
                        ((_a = chainFeesData === null || chainFeesData === void 0 ? void 0 : chainFeesData.protocols) === null || _a === void 0 ? void 0 : _a.forEach(function (prototcol) { return allProtocolFees.push.apply(allProtocolFees, __spreadArray([prototcol], __read(((prototcol === null || prototcol === void 0 ? void 0 : prototcol.subRows) || [])), false)); }));
                    return allProtocolFees;
                })();
                bridgeChartData = (function () {
                    var _a;
                    return bridgeData
                        ? (_a = bridgeData === null || bridgeData === void 0 ? void 0 : bridgeData.chainVolumeData) === null || _a === void 0 ? void 0 : _a.map(function (volume) { return [volume === null || volume === void 0 ? void 0 : volume.date, volume === null || volume === void 0 ? void 0 : volume.Deposits, volume.Withdrawals]; })
                        : null;
                })();
                volumeChart = (function () {
                    var _a, _b;
                    return ((_a = volumeData === null || volumeData === void 0 ? void 0 : volumeData.totalDataChart[0]) === null || _a === void 0 ? void 0 : _a[0][chain])
                        ? (_b = volumeData === null || volumeData === void 0 ? void 0 : volumeData.totalDataChart) === null || _b === void 0 ? void 0 : _b[0].map(function (val) { return [val.date, val[chain]]; })
                        : null;
                })();
                feesChart = (function () {
                    var _a, _b, _c;
                    return ((_a = feesData === null || feesData === void 0 ? void 0 : feesData.totalDataChart) === null || _a === void 0 ? void 0 : _a[0].length)
                        ? (_c = (_b = feesData === null || feesData === void 0 ? void 0 : feesData.totalDataChart) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.map(function (val) { return [val.date, val.Fees, val.Revenue]; })
                        : null;
                })();
                return [2 /*return*/, {
                        feesChart: feesChart,
                        volumeChart: volumeChart,
                        bridgeChartData: bridgeChartData,
                        chainProtocolsFees: chainProtocolsFees,
                        chainProtocolsVolumes: chainProtocolsVolumes,
                        globalChart: globalChart,
                        chain: chain,
                        txsData: txsData,
                        usersData: usersData,
                        chains: chainsSet
                    }];
        }
    });
}); };
var useCompare = function (_a) {
    var _b;
    var _c = _a.chains, chains = _c === void 0 ? ['Ethereum', 'BSC'] : _c, extraTvlsEnabled = _a.extraTvlsEnabled;
    var data = (0, react_query_1.useQueries)(chains.map(function (chain) { return ({
        queryKey: ['compare', chain, Object.values(extraTvlsEnabled)],
        queryFn: function () { return getChainData(chain, extraTvlsEnabled); }
    }); }));
    var protocolsData = (0, react_query_1.useQuery)(['chains'], function () {
        return fetch('https://defillama-datasets.llama.fi/lite/protocols2').then(function (r) { return r.json(); });
    });
    return __assign(__assign({}, data), { data: data.map(function (r) { return r === null || r === void 0 ? void 0 : r.data; }), chains: (_b = protocolsData === null || protocolsData === void 0 ? void 0 : protocolsData.data) === null || _b === void 0 ? void 0 : _b.chains, isLoading: data.some(function (r) { return r.status === 'loading'; }) });
};
function ComparePage() {
    var _a, _b;
    var _c = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvlsEnabled = _c[0];
    var router = (0, router_1.useRouter)();
    var data = useCompare({ extraTvlsEnabled: extraTvlsEnabled, chains: ((_a = router.query) === null || _a === void 0 ? void 0 : _a.chains) ? [(_b = router.query) === null || _b === void 0 ? void 0 : _b.chains].flat() : [] });
    var chains = (0, react_1.useMemo)(function () { var _a; return (_a = data === null || data === void 0 ? void 0 : data.chains) === null || _a === void 0 ? void 0 : _a.map(function (val) { return ({ value: val, label: val }); }); }, [data]);
    var updateRoute = function (key, val) {
        var _a;
        router.push({
            query: __assign(__assign({}, router.query), (_a = {}, _a[key] = val, _a))
        }, undefined, { shallow: true });
    };
    var onChainSelect = function (chains) {
        var selectedChains = chains.map(function (val) { return val.value; });
        updateRoute('chains', selectedChains);
    };
    var components = (0, react_1.useMemo)(function () { return ({
        Option: CustomOption
    }); }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Announcement_1.default, { children: [(0, jsx_runtime_1.jsx)(image_1.default, { src: "https://icons.llamao.fi/icons/memes/gib.png?w=36&h=36", alt: "Cute", width: 18, height: 18, unoptimized: true, style: { marginRight: '0.25rem', display: 'inline' } }), '  ', "We've released our", ' ', (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/nfts" }, { children: (0, jsx_runtime_1.jsxs)("a", { children: ["NFT dashboard ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14, style: { display: 'inline' } }), ' '] }) })), ' !'] }), (0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: {
                    category: 'Compare Protocols',
                    name: 'Open Protocol'
                } }), (0, jsx_runtime_1.jsx)("h2", { children: "Compare chains " }), (0, jsx_runtime_1.jsx)(ReactSelect_1.default, { defaultValue: chains === null || chains === void 0 ? void 0 : chains[0], isMulti: true, name: "colors", options: chains, className: "basic-multi-select", classNamePrefix: "select", onChange: onChainSelect, components: components, placeholder: "Select Chains..." }), (0, jsx_runtime_1.jsx)(DataWrapper, { children: (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, __assign({ id: "chartWrapper", style: { minHeight: '430px' } }, { children: [(0, jsx_runtime_1.jsx)(Misc_1.FiltersWrapper, __assign({ style: { margin: 0, marginBottom: 'auto' } }, { children: (0, jsx_runtime_1.jsx)(ToggleWrapper, { children: [
                                    {
                                        id: 'tvl',
                                        name: 'TVL',
                                        isVisible: true,
                                        key: 'globalChart'
                                    },
                                    {
                                        id: 'volume',
                                        name: 'Volume',
                                        key: 'volumeChart'
                                    },
                                    {
                                        id: 'fees',
                                        name: 'Fees',
                                        key: 'feesChart'
                                    },
                                    {
                                        id: 'revenue',
                                        name: 'Revenue',
                                        key: 'feesChart'
                                    },
                                    {
                                        id: 'users',
                                        name: 'Active Users',
                                        key: 'usersData'
                                    },
                                    {
                                        id: 'txs',
                                        name: 'Transactions',
                                        key: 'txsData'
                                    }
                                ].map(function (_a) {
                                    var _b;
                                    var id = _a.id, name = _a.name, key = _a.key;
                                    return ((_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.some(function (val) { var _a; return (val === null || val === void 0 ? void 0 : val[key]) && ((_a = val === null || val === void 0 ? void 0 : val[key]) === null || _a === void 0 ? void 0 : _a.length) > 0; })) ? ((0, jsx_runtime_1.jsxs)(Misc_1.Toggle, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", onClick: function () {
                                                    updateRoute(id, router.query[id] === 'true' ? 'false' : 'true');
                                                }, checked: router.query[id] === 'true' }, id), (0, jsx_runtime_1.jsx)("span", __assign({ "data-wrapper": "true" }, { children: (0, jsx_runtime_1.jsx)("span", { children: name }) }))] })) : (false);
                                }) }) })), (0, jsx_runtime_1.jsx)(ChainChart, { height: "360px", customLegendName: "Chain", hideDefaultLegend: true, valueSymbol: "$", title: "", updateRoute: updateRoute, router: router, datasets: data === null || data === void 0 ? void 0 : data.data })] })) })] }));
}
exports.default = ComparePage;
var templateObject_1, templateObject_2, templateObject_3;
