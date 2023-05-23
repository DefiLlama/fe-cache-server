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
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var image_1 = __importDefault(require("next/future/image"));
var link_1 = __importDefault(require("next/link"));
var router_1 = require("next/router");
var styled_components_1 = __importDefault(require("styled-components"));
var polished_1 = require("polished");
var react_feather_1 = require("react-feather");
var layout_1 = __importDefault(require("../../../layout"));
var ProtocolAndPool_1 = require("../../../layout/ProtocolAndPool");
var Medium_1 = require("../../../layout/Stats/Medium");
var components_1 = require("../../../components");
var Bookmark_1 = __importDefault(require("../../../components/Bookmark"));
var Copy_1 = __importDefault(require("../../../components/Copy"));
var FormattedName_1 = __importDefault(require("../../../components/FormattedName"));
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var SEO_1 = __importDefault(require("../../../components/SEO"));
var Search_1 = require("../../../components/Search");
var AuditInfo_1 = __importDefault(require("../../../components/AuditInfo"));
var ProtocolChart_1 = __importDefault(require("../../../components/ECharts/ProtocolChart/ProtocolChart"));
var QuestionHelper_1 = __importDefault(require("../../../components/QuestionHelper"));
var protocols_1 = require("../../../components/Filters/protocols");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var utils_1 = require("../../../utils");
var client_1 = require("../../../api/categories/protocols/client");
var boboSmug_png_1 = __importDefault(require("~/assets/boboSmug.png"));
var utils_2 = require("./utils");
var Treasury_1 = require("./Treasury");
var Card_1 = require("../../../components/News/Card");
var Emissions_1 = require("./Emissions");
var Row_1 = require("../../../components/Row");
var Logo_1 = require("../../../components/News/Logo");
var Announcement_1 = __importDefault(require("../../../components/Announcement"));
var ariakit_1 = require("ariakit");
var Fees_1 = require("./Fees");
var Common_1 = require("./Common");
var Governance_1 = require("./Governance");
var BridgeContainer_1 = require("../../../containers/BridgeContainer");
var Yields_1 = require("./Yields");
var Flag_1 = require("./Flag");
var Stablecoin_1 = require("./Stablecoin");
var scams = [
    'Drachma Exchange',
    'StableDoin',
    'CroLend Finance',
    'Agora',
    'MinerSwap',
    'Mosquitos Finance',
    'SatoshiCoreSwap',
    'Swaprum'
];
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var Bobo = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: absolute;\n\tbottom: -36px;\n\tleft: 0;\n\n\timg {\n\t\twidth: 34px !important;\n\t\theight: 34px !important;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: initial;\n\t\tleft: initial;\n\t\tz-index: 1;\n\t}\n"], ["\n\tposition: absolute;\n\tbottom: -36px;\n\tleft: 0;\n\n\timg {\n\t\twidth: 34px !important;\n\t\theight: 34px !important;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: initial;\n\t\tleft: initial;\n\t\tz-index: 1;\n\t}\n"])));
var ProtocolDetailsWrapper = (0, styled_components_1.default)(ProtocolAndPool_1.DetailsWrapper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tgap: 24px;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmax-width: 300px;\n\t}\n"], ["\n\tgap: 24px;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmax-width: 300px;\n\t}\n"])));
var ProtocolStatsTable = styled_components_1.default.table(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\twidth: 100%;\n\tborder-collapse: collapse;\n\n\tcaption,\n\tthead th {\n\t\tfont-weight: 400;\n\t\tfont-size: 0.75rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\tcaption {\n\t\tcolor: ", ";\n\t}\n\n\tth {\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\ttext-align: start;\n\t\tcolor: ", ";\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 4px;\n\n\t\tdiv[data-tooltipanchor='true'] {\n\t\t\tbutton {\n\t\t\t\topacity: 0;\n\t\t\t}\n\n\t\t\tbutton:focus-visible {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\n\t\tdiv[data-tooltipanchor='true']:focus-visible {\n\t\t\tbutton {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n\n\tth:hover {\n\t\tdiv[data-tooltipanchor='true'] {\n\t\t\tbutton {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n\n\ttd {\n\t\tfont-weight: 600;\n\t\tfont-size: 1rem;\n\t\ttext-align: right;\n\t\tfont-family: var(--font-jetbrains);\n\t}\n\n\tthead td {\n\t\t> * {\n\t\t\twidth: min-content;\n\t\t\tbackground: none;\n\t\t\tmargin-left: auto;\n\t\t\tcolor: ", ";\n\t\t}\n\t}\n\n\tthead > tr > *,\n\tcaption {\n\t\tpadding: 0 0 4px;\n\t}\n\n\ttbody > tr > * {\n\t\tpadding: 4px 0;\n\t}\n\n\t.question-helper {\n\t\tpadding: 0 16px 4px;\n\t}\n"], ["\n\twidth: 100%;\n\tborder-collapse: collapse;\n\n\tcaption,\n\tthead th {\n\t\tfont-weight: 400;\n\t\tfont-size: 0.75rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\tcaption {\n\t\tcolor: ", ";\n\t}\n\n\tth {\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\ttext-align: start;\n\t\tcolor: ", ";\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 4px;\n\n\t\tdiv[data-tooltipanchor='true'] {\n\t\t\tbutton {\n\t\t\t\topacity: 0;\n\t\t\t}\n\n\t\t\tbutton:focus-visible {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\n\t\tdiv[data-tooltipanchor='true']:focus-visible {\n\t\t\tbutton {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n\n\tth:hover {\n\t\tdiv[data-tooltipanchor='true'] {\n\t\t\tbutton {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n\n\ttd {\n\t\tfont-weight: 600;\n\t\tfont-size: 1rem;\n\t\ttext-align: right;\n\t\tfont-family: var(--font-jetbrains);\n\t}\n\n\tthead td {\n\t\t> * {\n\t\t\twidth: min-content;\n\t\t\tbackground: none;\n\t\t\tmargin-left: auto;\n\t\t\tcolor: ", ";\n\t\t}\n\t}\n\n\tthead > tr > *,\n\tcaption {\n\t\tpadding: 0 0 4px;\n\t}\n\n\ttbody > tr > * {\n\t\tpadding: 4px 0;\n\t}\n\n\t.question-helper {\n\t\tpadding: 0 16px 4px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#cccccc' : '#545757');
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#cccccc' : '#545757');
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var Details = styled_components_1.default.details(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t&[open] {\n\t\tsummary {\n\t\t\t& > *[data-arrowicon] {\n\t\t\t\ttransform: rotate(90deg);\n\t\t\t\ttransition: 0.1s ease;\n\t\t\t}\n\t\t}\n\t}\n\n\tmargin-bottom: -8px;\n\n\tsummary {\n\t\tdisplay: flex;\n\t\tgap: 16px;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tlist-style: none;\n\t\tlist-style-type: none;\n\t\tcursor: pointer;\n\n\t\t& > *[data-arrowicon] {\n\t\t\tmargin: auto -16px 8px -20px;\n\t\t}\n\n\t\t& > *[data-summaryheader] {\n\t\t\tfont-size: 1.5rem;\n\t\t\tfont-weight: 600;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 8px;\n\n\t\t\t& > *:first-child {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1rem;\n\t\t\t\ttext-align: left;\n\t\t\t\tcolor: ", ";\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tgap: 8px;\n\n\t\t\t\tdiv[data-tooltipanchor='true'] {\n\t\t\t\t\tbutton {\n\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t}\n\n\t\t\t\t\tbutton:focus-visible {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tdiv[data-tooltipanchor='true']:focus-visible {\n\t\t\t\t\tbutton {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t& > *:nth-child(2) {\n\t\t\t\tfont-family: var(--font-jetbrains);\n\t\t\t\tmin-height: 2rem;\n\t\t\t}\n\t\t}\n\t}\n\n\tsummary::-webkit-details-marker {\n\t\tdisplay: none;\n\t}\n\n\tsummary + span {\n\t\tmargin-top: 16px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 16px;\n\t}\n\n\t:hover {\n\t\tsummary {\n\t\t\t& > *[data-summaryheader] {\n\t\t\t\t& > *:first-child {\n\t\t\t\t\tdiv[data-tooltipanchor='true'] {\n\t\t\t\t\t\tbutton {\n\t\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\t&[open] {\n\t\tsummary {\n\t\t\t& > *[data-arrowicon] {\n\t\t\t\ttransform: rotate(90deg);\n\t\t\t\ttransition: 0.1s ease;\n\t\t\t}\n\t\t}\n\t}\n\n\tmargin-bottom: -8px;\n\n\tsummary {\n\t\tdisplay: flex;\n\t\tgap: 16px;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tlist-style: none;\n\t\tlist-style-type: none;\n\t\tcursor: pointer;\n\n\t\t& > *[data-arrowicon] {\n\t\t\tmargin: auto -16px 8px -20px;\n\t\t}\n\n\t\t& > *[data-summaryheader] {\n\t\t\tfont-size: 1.5rem;\n\t\t\tfont-weight: 600;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 8px;\n\n\t\t\t& > *:first-child {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1rem;\n\t\t\t\ttext-align: left;\n\t\t\t\tcolor: ", ";\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tgap: 8px;\n\n\t\t\t\tdiv[data-tooltipanchor='true'] {\n\t\t\t\t\tbutton {\n\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t}\n\n\t\t\t\t\tbutton:focus-visible {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tdiv[data-tooltipanchor='true']:focus-visible {\n\t\t\t\t\tbutton {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t& > *:nth-child(2) {\n\t\t\t\tfont-family: var(--font-jetbrains);\n\t\t\t\tmin-height: 2rem;\n\t\t\t}\n\t\t}\n\t}\n\n\tsummary::-webkit-details-marker {\n\t\tdisplay: none;\n\t}\n\n\tsummary + span {\n\t\tmargin-top: 16px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 16px;\n\t}\n\n\t:hover {\n\t\tsummary {\n\t\t\t& > *[data-summaryheader] {\n\t\t\t\t& > *:first-child {\n\t\t\t\t\tdiv[data-tooltipanchor='true'] {\n\t\t\t\t\t\tbutton {\n\t\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#cccccc' : '#545757');
});
var isLowerCase = function (letter) { return letter === letter.toLowerCase(); };
function ProtocolContainer(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var articles = _a.articles, title = _a.title, protocolData = _a.protocolData, treasury = _a.treasury, protocol = _a.protocol, backgroundColor = _a.backgroundColor, similarProtocols = _a.similarProtocols, isCEX = _a.isCEX, chartColors = _a.chartColors, users = _a.users, priceOfToken = _a.tokenPrice, tokenMcap = _a.tokenMcap, tokenSupply = _a.tokenSupply, allTimeFees = _a.allTimeFees, dailyFees = _a.dailyFees, dailyRevenue = _a.dailyRevenue, dailyVolume = _a.dailyVolume, allTimeVolume = _a.allTimeVolume, controversialProposals = _a.controversialProposals, governanceApi = _a.governanceApi, expenses = _a.expenses, yields = _a.yields, helperTexts = _a.helperTexts, tokenLiquidity = _a.tokenLiquidity;
    var _s = protocolData.address, address = _s === void 0 ? '' : _s, name = protocolData.name, symbol = protocolData.symbol, url = protocolData.url, description = protocolData.description, audits = protocolData.audits, category = protocolData.category, twitter = protocolData.twitter, _t = protocolData.tvlBreakdowns, tvlBreakdowns = _t === void 0 ? {} : _t, _u = protocolData.tvlByChain, tvlByChain = _u === void 0 ? [] : _u, audit_links = protocolData.audit_links, methodology = protocolData.methodology, codeModule = protocolData.module, historicalChainTvls = protocolData.historicalChainTvls, _v = protocolData.chains, chains = _v === void 0 ? [] : _v, forkedFrom = protocolData.forkedFrom, otherProtocols = protocolData.otherProtocols, hallmarks = protocolData.hallmarks, gecko_id = protocolData.gecko_id, isParentProtocol = protocolData.isParentProtocol, raises = protocolData.raises, metrics = protocolData.metrics, isHourlyChart = protocolData.isHourlyChart, stablecoins = protocolData.stablecoins;
    var router = (0, router_1.useRouter)();
    var usdInflowsParam = router.query.usdInflows;
    var _w = (0, utils_1.getBlockExplorer)(address), blockExplorerLink = _w.blockExplorerLink, blockExplorerName = _w.blockExplorerName;
    var _x = __read(React.useState(false), 2), bobo = _x[0], setBobo = _x[1];
    var _y = __read((0, LocalStorage_1.useDefiManager)(), 2), extraTvlsEnabled = _y[0], updater = _y[1];
    var totalVolume = React.useMemo(function () {
        var tvl = 0;
        Object.entries(tvlBreakdowns).forEach(function (_a) {
            var _b = __read(_a, 2), section = _b[0], sectionTvl = _b[1];
            if (section.includes('-') || section === 'offers')
                return;
            if (section === 'doublecounted') {
                tvl -= sectionTvl;
            }
            if (Object.keys(extraTvlsEnabled).includes(section.toLowerCase())) {
                // convert to lowercase as server response is not consistent in extra-tvl names
                if (extraTvlsEnabled[section.toLowerCase()])
                    tvl += sectionTvl;
            }
            else {
                tvl += sectionTvl;
            }
        });
        if (tvl === 0 && Object.keys(tvlBreakdowns).length === 0) {
            Object.entries(historicalChainTvls).forEach(function (_a) {
                var _b, _c, _d, _e;
                var _f = __read(_a, 2), section = _f[0], sectionData = _f[1];
                if (section.includes('-'))
                    return;
                if (section === 'doublecounted') {
                    tvl -= sectionData.tvl[sectionData.tvl.length - 1].totalLiquidityUSD;
                }
                if (Object.keys(extraTvlsEnabled).includes(section.toLowerCase())) {
                    // convert to lowercase as server response is not consistent in extra-tvl names
                    if (extraTvlsEnabled[section.toLowerCase()])
                        tvl += (_c = (_b = sectionData.tvl[sectionData.tvl.length - 1]) === null || _b === void 0 ? void 0 : _b.totalLiquidityUSD) !== null && _c !== void 0 ? _c : 0;
                }
                else {
                    tvl += (_e = (_d = sectionData.tvl[sectionData.tvl.length - 1]) === null || _d === void 0 ? void 0 : _d.totalLiquidityUSD) !== null && _e !== void 0 ? _e : 0;
                }
            });
        }
        return tvl;
    }, [extraTvlsEnabled, tvlBreakdowns, historicalChainTvls]);
    var _z = tvlByChain.reduce(function (acc, _a) {
        var _b = __read(_a, 2), name = _b[0], tvl = _b[1];
        // skip masterchef tvl type
        if (name === 'masterchef' || name === 'offers')
            return acc;
        // check if tvl name is addl tvl type and is toggled
        if (isLowerCase(name[0]) && LocalStorage_1.DEFI_SETTINGS_KEYS.includes(name)) {
            acc.extraTvls.push([name, tvl]);
            acc.tvlOptions.push(protocols_1.protocolsAndChainsOptions.find(function (e) { return e.key === name; }));
        }
        else {
            // only include total tvl of each chain skip breakdown of addl tvls if extra tvl type is not toggled
            if (!name.includes('-')) {
                acc.tvls[name] = (acc.tvls[name] || 0) + tvl;
            }
            else {
                // format name to only include chain name and check if it already exists in tvls list
                var chainName = name.split('-')[0];
                var prop = name.split('-')[1];
                // check if prop is toggled
                if (extraTvlsEnabled[prop.toLowerCase()]) {
                    acc.tvls[chainName] = (acc.tvls[chainName] || 0) + tvl;
                }
            }
        }
        return acc;
    }, {
        tvls: {},
        extraTvls: [],
        tvlOptions: []
    }), tvlsByChain = _z.tvls, extraTvls = _z.extraTvls, tvlOptions = _z.tvlOptions;
    var tvls = Object.entries(tvlsByChain);
    var _0 = (0, client_1.useFetchProtocol)(protocol), addlProtocolData = _0.data, loading = _0.loading;
    var _1 = React.useMemo(function () { return (0, utils_2.buildProtocolAddlChartsData)({ protocolData: addlProtocolData, extraTvlsEnabled: extraTvlsEnabled }); }, [addlProtocolData, extraTvlsEnabled]), usdInflows = _1.usdInflows, tokenInflows = _1.tokenInflows, tokensUnique = _1.tokensUnique, tokenBreakdown = _1.tokenBreakdown, tokenBreakdownUSD = _1.tokenBreakdownUSD, tokenBreakdownPieChart = _1.tokenBreakdownPieChart;
    var chainsSplit = React.useMemo(function () {
        return (0, utils_2.formatTvlsByChain)({ historicalChainTvls: historicalChainTvls, extraTvlsEnabled: extraTvlsEnabled });
    }, [historicalChainTvls, extraTvlsEnabled]);
    var chainsUnique = tvls.map(function (t) { return t[0]; });
    var showCharts = loading ||
        (chainsSplit && (chainsUnique === null || chainsUnique === void 0 ? void 0 : chainsUnique.length) > 1) ||
        ((tokenBreakdown === null || tokenBreakdown === void 0 ? void 0 : tokenBreakdown.length) > 1 && (tokenBreakdownUSD === null || tokenBreakdownUSD === void 0 ? void 0 : tokenBreakdownUSD.length) > 1 && (tokensUnique === null || tokensUnique === void 0 ? void 0 : tokensUnique.length) > 1) ||
        (tokensUnique === null || tokensUnique === void 0 ? void 0 : tokensUnique.length) > 0 ||
        usdInflows ||
        tokenInflows
        ? true
        : false;
    var queryParams = router.asPath.split('?')[1] ? "?".concat(router.asPath.split('?')[1]) : '';
    var stakedAmount = ((_c = (_b = historicalChainTvls === null || historicalChainTvls === void 0 ? void 0 : historicalChainTvls['staking']) === null || _b === void 0 ? void 0 : _b.tvl) === null || _c === void 0 ? void 0 : _c.length) > 0
        ? (_g = (_f = (_d = historicalChainTvls === null || historicalChainTvls === void 0 ? void 0 : historicalChainTvls['staking']) === null || _d === void 0 ? void 0 : _d.tvl[((_e = historicalChainTvls === null || historicalChainTvls === void 0 ? void 0 : historicalChainTvls['staking']) === null || _e === void 0 ? void 0 : _e.tvl.length) - 1]) === null || _f === void 0 ? void 0 : _f.totalLiquidityUSD) !== null && _g !== void 0 ? _g : null
        : null;
    var borrowedAmount = ((_j = (_h = historicalChainTvls === null || historicalChainTvls === void 0 ? void 0 : historicalChainTvls['borrowed']) === null || _h === void 0 ? void 0 : _h.tvl) === null || _j === void 0 ? void 0 : _j.length) > 0
        ? (_o = (_m = (_k = historicalChainTvls === null || historicalChainTvls === void 0 ? void 0 : historicalChainTvls['borrowed']) === null || _k === void 0 ? void 0 : _k.tvl[((_l = historicalChainTvls === null || historicalChainTvls === void 0 ? void 0 : historicalChainTvls['borrowed']) === null || _l === void 0 ? void 0 : _l.tvl.length) - 1]) === null || _m === void 0 ? void 0 : _m.totalLiquidityUSD) !== null && _o !== void 0 ? _o : null
        : null;
    var defaultSelectedId = (_q = (_p = router.asPath.split('#')) === null || _p === void 0 ? void 0 : _p[1]) !== null && _q !== void 0 ? _q : 'information';
    var tab = (0, ariakit_1.useTabState)({ defaultSelectedId: defaultSelectedId });
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: title, backgroundColor: (0, polished_1.transparentize)(0.6, backgroundColor), style: { gap: '36px' } }, { children: [(0, jsx_runtime_1.jsx)(SEO_1.default, { cardName: name, token: name, logo: (0, utils_1.tokenIconUrl)(name), tvl: (_r = (0, utils_1.formattedNum)(totalVolume, true)) === null || _r === void 0 ? void 0 : _r.toString() }), (0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Protocols', name: name }, options: tvlOptions }), ['SyncDEX Finance', 'Avatr', 'SatoshiCoreSwap'].includes(name) && ((0, jsx_runtime_1.jsx)(Announcement_1.default, __assign({ warning: true, notCancellable: true }, { children: "Project has some red flags and multiple users have reported concerns. Be careful." }))), category === 'Uncollateralized Lending' && ((0, jsx_runtime_1.jsxs)(Announcement_1.default, { children: ["Borrowed coins are not included into TVL by default, to include them toggle Borrows. For more info on this click", ' ', (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://github.com/DefiLlama/DefiLlama-Adapters/discussions/6163", target: "_blank", rel: "noreferrer noopener" }, { children: "here" })), "."] })), (0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(otherProtocols === null || otherProtocols === void 0 ? void 0 : otherProtocols.length) > 1 && ((0, jsx_runtime_1.jsx)(Common_1.OtherProtocols, { children: otherProtocols.map(function (p) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/protocol/".concat((0, utils_1.standardizeProtocolName)(p)), passHref: true }, { children: (0, jsx_runtime_1.jsx)(Common_1.ProtocolLink, __assign({ active: router.asPath === "/protocol/".concat((0, utils_1.standardizeProtocolName)(p)) + queryParams, color: backgroundColor }, { children: p })) }), p)); }) })), (0, jsx_runtime_1.jsxs)(ProtocolDetailsWrapper, __assign({ style: { borderTopLeftRadius: (otherProtocols === null || otherProtocols === void 0 ? void 0 : otherProtocols.length) > 1 ? 0 : '12px' } }, { children: [scams.includes(name) && (0, jsx_runtime_1.jsx)("p", { children: "There's been multiple hack reports in this protocol" }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(name), size: 24 }), (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: name ? name + ' ' : '', maxCharacters: 16, fontWeight: 700 }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.Symbol, { children: symbol && symbol !== '-' ? "(".concat(symbol, ")") : '' }), !isParentProtocol && (0, jsx_runtime_1.jsx)(Bookmark_1.default, { readableProtocolName: name })] }), (0, jsx_runtime_1.jsxs)(Details, { children: [(0, jsx_runtime_1.jsxs)("summary", { children: [(0, jsx_runtime_1.jsx)("span", __assign({ "data-arrowicon": true }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 20 }) })), (0, jsx_runtime_1.jsxs)("span", __assign({ "data-summaryheader": true }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("span", { children: isCEX ? 'Total Assets' : 'Total Value Locked' }), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolData.name, dataType: 'TVL', isLending: category === 'Lending' })] }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(totalVolume || '0', true) })] })), !isParentProtocol && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://api.llama.fi/dataset/".concat(protocol, ".csv"), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DownloadButton, __assign({ as: "a", color: backgroundColor, style: { height: 'fit-content', margin: 'auto 0 0 auto' }, target: "_blank" }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.DownloadCloud, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] })) })))] }), (0, jsx_runtime_1.jsxs)("span", { children: [tvls.length > 0 && ((0, jsx_runtime_1.jsxs)(ProtocolStatsTable, { children: [(0, jsx_runtime_1.jsx)("caption", { children: isCEX ? 'Assets by chain' : 'Chain Breakdown' }), (0, jsx_runtime_1.jsx)("tbody", { children: tvls.map(function (chainTvl) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: (0, utils_1.capitalizeFirstLetter)(chainTvl[0]) }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(chainTvl[1] || 0, true) })] }, chainTvl[0])); }) })] })), extraTvls.length > 0 && ((0, jsx_runtime_1.jsxs)(ProtocolStatsTable, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Include in TVL (optional)" }), (0, jsx_runtime_1.jsx)("td", __assign({ className: "question-helper" }, { children: (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: 'People define TVL differently. Instead of being opinionated, we give you the option to choose what you would include in a "real" TVL calculation' }) }))] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: extraTvls.map(function (_a) {
                                                            var _b = __read(_a, 2), option = _b[0], value = _b[1];
                                                            return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ExtraOption, { children: [(0, jsx_runtime_1.jsx)(components_1.Checkbox2, { type: "checkbox", value: option, checked: extraTvlsEnabled[option], onChange: updater(option) }), (0, jsx_runtime_1.jsx)("span", __assign({ style: { opacity: extraTvlsEnabled[option] ? 1 : 0.7 } }, { children: (0, utils_1.capitalizeFirstLetter)(option) }))] }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(value, true) })] }, option));
                                                        }) })] }))] })] }), (0, jsx_runtime_1.jsx)("div", __assign({ style: { width: '100%', overflowX: 'auto' } }, { children: (0, jsx_runtime_1.jsx)(ProtocolStatsTable, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [tokenMcap ? ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Market Cap" }), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolData.name, dataType: 'Market Cap' })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(tokenMcap, true) })] })) : null, priceOfToken ? ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Token Price" }), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolData.name, dataType: 'Token Price' })] }), (0, jsx_runtime_1.jsxs)("td", { children: ["$", priceOfToken.toLocaleString('en-US', { maximumFractionDigits: 5 })] })] })) : null, tokenSupply && priceOfToken ? ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Fully Diluted Valuation" }), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolData.name, dataType: 'FDV' })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(priceOfToken * tokenSupply, true) })] })) : null, stakedAmount ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Staked" }), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolData.name, dataType: 'Staked' })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(stakedAmount, true) })] }), tokenMcap ? ((0, jsx_runtime_1.jsxs)("tr", __assign({ style: { position: 'relative', top: '-6px' } }, { children: [(0, jsx_runtime_1.jsx)("th", { style: { padding: 0 } }), (0, jsx_runtime_1.jsx)("td", __assign({ style: {
                                                                    opacity: '0.6',
                                                                    fontFamily: 'var(--inter)',
                                                                    fontWeight: 400,
                                                                    fontSize: '0.875rem',
                                                                    padding: '0px'
                                                                } }, { children: "(".concat(((stakedAmount / tokenMcap) * 100).toLocaleString(undefined, {
                                                                    maximumFractionDigits: 2
                                                                }), "% of mcap)") }))] }))) : null] })) : null, borrowedAmount ? ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Borrowed" }), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolData.name, dataType: 'Borrowed' })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(borrowedAmount, true) })] })) : null] }) }) })), tokenLiquidity && tokenLiquidity.length > 0 && ((0, jsx_runtime_1.jsx)(TokenLiquidityTable, { data: tokenLiquidity, protocolName: protocolData.name, symbol: symbol })), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: dailyVolume ? ((0, jsx_runtime_1.jsx)(AnnualizedMetric, { name: "Volume", dailyValue: dailyVolume, cumulativeValue: allTimeVolume, protocolName: protocolData.name })) : null }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: dailyFees ? ((0, jsx_runtime_1.jsx)(AnnualizedMetric, { name: "Fees", dailyValue: dailyFees, helperText: helperTexts.fees, cumulativeValue: allTimeFees, protocolName: protocolData.name })) : null }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: dailyRevenue ? ((0, jsx_runtime_1.jsx)(AnnualizedMetric, { name: "Revenue", dailyValue: dailyRevenue, helperText: helperTexts.revenue, protocolName: protocolData.name })) : null }), (users === null || users === void 0 ? void 0 : users.activeUsers) ? ((0, jsx_runtime_1.jsx)(UsersTable, __assign({}, users, { helperText: helperTexts.users, protocolName: protocolData.name }))) : null, (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: treasury && (0, jsx_runtime_1.jsx)(TreasuryTable, { data: treasury, protocolName: protocolData.name }) }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: raises && raises.length > 0 && (0, jsx_runtime_1.jsx)(Raised, { data: raises, protocolName: protocolData.name }) }), controversialProposals && controversialProposals.length > 0 ? ((0, jsx_runtime_1.jsx)(TopProposals, { data: controversialProposals, protocolName: protocolData.name })) : null, expenses && (0, jsx_runtime_1.jsx)(Expenses, { data: expenses, protocolName: protocolData.name }), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolData.name, isLending: category === 'Lending' })] })), (0, jsx_runtime_1.jsx)(ProtocolChart_1.default, { protocol: protocol, color: backgroundColor, historicalChainTvls: historicalChainTvls, chains: isCEX ? null : chains, hallmarks: hallmarks, bobo: bobo, geckoId: gecko_id, chartColors: chartColors, metrics: metrics, activeUsersId: users ? protocolData.id : null, usdInflowsData: usdInflowsParam === 'true' && !loading && (usdInflows === null || usdInflows === void 0 ? void 0 : usdInflows.length) > 0 ? usdInflows : null, governanceApi: governanceApi, isHourlyChart: isHourlyChart, isCEX: isCEX, tokenSymbol: symbol, protocolId: protocolData.id }), (0, jsx_runtime_1.jsxs)(Bobo, __assign({ onClick: function () { return setBobo(!bobo); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Enable Goblin Mode" })), (0, jsx_runtime_1.jsx)(image_1.default, { src: boboSmug_png_1.default, width: "34px", height: "34px", alt: "bobo cheers" })] }))] }), (0, jsx_runtime_1.jsxs)(Common_1.TabLayout, { children: [(0, jsx_runtime_1.jsxs)(Common_1.TabList, __assign({ state: tab }, { children: [(0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "information", color: backgroundColor }, { children: "Information" })), showCharts && ((0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "tvl-charts", color: backgroundColor }, { children: isCEX ? 'Assets' : 'TVL' }))), stablecoins && stablecoins.length > 0 && ((0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "stablecoin-info", color: backgroundColor }, { children: "Stablecoin Info" }))), metrics.bridge && ((0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "bridge", color: backgroundColor }, { children: "Bridge Info" }))), treasury && ((0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "treasury", color: backgroundColor }, { children: "Treasury" }))), metrics.unlocks && ((0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "unlocks", color: backgroundColor }, { children: "Unlocks" }))), yields && ((0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "yields", color: backgroundColor }, { children: "Yields" }))), metrics.fees && ((0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "fees-revenue", color: backgroundColor }, { children: "Fees and Revenue" }))), metrics.dexs && ((0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "volume", color: backgroundColor }, { children: "Volume" }))), governanceApi && ((0, jsx_runtime_1.jsx)(Common_1.Tab, __assign({ id: "governance", color: backgroundColor }, { children: "Governance" })))] })), (0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "information" }, { children: (0, jsx_runtime_1.jsxs)(Common_1.GridContent, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: isCEX ? 'Exchange Information' : 'Protocol Information' }), description && (0, jsx_runtime_1.jsx)("p", { children: description }), category && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Category" }), (0, jsx_runtime_1.jsx)("span", { children: ": " }), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: category.toLowerCase() === 'cex' ? '/cexs' : "/protocols/".concat(category.toLowerCase()) }, { children: category }))] })), forkedFrom && forkedFrom.length > 0 && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Forked from" }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: forkedFrom.map(function (p, index) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/protocol/".concat((0, utils_1.slug)(p)) }, { children: forkedFrom[index + 1] ? p + ', ' : p }), p)); }) })] })), audits && audit_links && (0, jsx_runtime_1.jsx)(AuditInfo_1.default, { audits: audits, auditLinks: audit_links, color: backgroundColor }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.LinksWrapper, { children: [url && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: url, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Website" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), twitter && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://twitter.com/".concat(twitter), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Twitter" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })))] })] }), articles.length > 0 && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsxs)(Row_1.RowBetween, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Latest from DL News" }), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://www.dlnews.com", passHref: true }, { children: (0, jsx_runtime_1.jsx)("a", { children: (0, jsx_runtime_1.jsx)(Logo_1.DLNewsLogo, { width: 102, height: 22 }) }) }))] }), articles.map(function (article, idx) { return ((0, jsx_runtime_1.jsx)(Card_1.NewsCard, __assign({}, article, { color: backgroundColor }), "news_card_".concat(idx))); })] })), (address || protocolData.gecko_id || blockExplorerLink) && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Token Information" }), address && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Address" }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsx)("span", { children: address.split(':').pop().slice(0, 8) + '...' + (address === null || address === void 0 ? void 0 : address.slice(36, 42)) }), (0, jsx_runtime_1.jsx)(Copy_1.default, { toCopy: address.split(':').pop(), disabled: !address })] })), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.LinksWrapper, { children: [protocolData.gecko_id && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://www.coingecko.com/en/coins/".concat(protocolData.gecko_id), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "View on CoinGecko" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), blockExplorerLink && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: blockExplorerLink, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["View on ", blockExplorerName] }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })))] })] })), (methodology || codeModule) && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Methodology" }), methodology && (0, jsx_runtime_1.jsx)("p", { children: methodology }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LinksWrapper, { children: codeModule && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://github.com/DefiLlama/DefiLlama-Adapters/tree/main/projects/".concat(codeModule), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check the code" }), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))) })] })), similarProtocols && similarProtocols.length > 0 ? ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Competitors" }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LinksWrapper, { children: similarProtocols.map(function (similarProtocol) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/protocol/".concat((0, utils_1.slug)(similarProtocol.name)), passHref: true }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ target: "_blank", style: { textDecoration: 'underline' } }, { children: "".concat(similarProtocol.name, " ($").concat((0, utils_1.toK)(similarProtocol.tvl), ")") })) }), similarProtocol.name)); }) })] })) : null] }) })), showCharts && ((0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "tvl-charts" }, { children: (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsWrapper, __assign({ style: { background: 'none', border: 'none' } }, { children: loading ? ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartsPlaceholder, { children: "Loading..." })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [chainsSplit && (chainsUnique === null || chainsUnique === void 0 ? void 0 : chainsUnique.length) > 1 && ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: chainsSplit, title: "Chains", customLegendName: "Chain", customLegendOptions: chainsUnique, valueSymbol: "$" }) })), (tokenBreakdown === null || tokenBreakdown === void 0 ? void 0 : tokenBreakdown.length) > 1 && (tokensUnique === null || tokensUnique === void 0 ? void 0 : tokensUnique.length) > 1 && ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: tokenBreakdown, title: "Tokens", customLegendName: "Token", customLegendOptions: tokensUnique }) })), (tokenBreakdownUSD === null || tokenBreakdownUSD === void 0 ? void 0 : tokenBreakdownUSD.length) > 1 && (tokensUnique === null || tokensUnique === void 0 ? void 0 : tokensUnique.length) > 1 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [tokenBreakdownPieChart.length > 0 && ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(PieChart, { title: "Tokens Breakdown", chartData: tokenBreakdownPieChart }) })), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(AreaChart, { chartData: tokenBreakdownUSD, title: "Tokens (USD)", customLegendName: "Token", customLegendOptions: tokensUnique, valueSymbol: "$" }) })] })), usdInflows && ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(BarChart, { chartData: usdInflows, color: backgroundColor, title: "USD Inflows", valueSymbol: "$" }) })), tokenInflows && ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(BarChart, { chartData: tokenInflows, title: "Token Inflows", customLegendName: "Token", customLegendOptions: tokensUnique, hideDefaultLegend: true, valueSymbol: "$" }) }))] })) })) }))), stablecoins && stablecoins.length > 0 && ((0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "stablecoin-info" }, { children: (0, jsx_runtime_1.jsx)(Stablecoin_1.StablecoinInfo, { assetName: stablecoins[0] }) }))), metrics.bridge && ((0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "bridge" }, { children: (0, jsx_runtime_1.jsx)(BridgeContainer_1.BridgeContainerOnClient, { protocol: protocol }) }))), treasury && ((0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "treasury" }, { children: (0, jsx_runtime_1.jsx)(Treasury_1.TreasuryChart, { protocolName: protocol }) }))), metrics.unlocks && ((0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "unlocks" }, { children: (0, jsx_runtime_1.jsx)(Emissions_1.UnlocksCharts, { protocolName: protocol }) }))), yields && ((0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "yields" }, { children: (0, jsx_runtime_1.jsx)(Yields_1.ProtocolPools, { data: yields, protocol: protocol }) }))), metrics.fees && ((0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "fees-revenue" }, { children: (0, jsx_runtime_1.jsx)(Fees_1.FeesAndRevenueCharts, { data: protocolData }) }))), metrics.dexs && ((0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "volume" }, { children: (0, jsx_runtime_1.jsx)(Fees_1.VolumeCharts, { data: protocolData }) }))), governanceApi && ((0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: "governance" }, { children: (0, jsx_runtime_1.jsx)(Governance_1.GovernanceData, { api: governanceApi }) })))] })] })));
}
var Raised = function (_a) {
    var data = _a.data, protocolName = _a.protocolName;
    var _b = __read(React.useState(false), 2), open = _b[0], setOpen = _b[1];
    return ((0, jsx_runtime_1.jsx)(StatsTable2, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsxs)(Toggle, __assign({ onClick: function () { return setOpen(!open); }, "data-open": open }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16, "data-arrow": true }), (0, jsx_runtime_1.jsx)("span", { children: "Total Raised" })] })), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolName, dataType: 'Raises' })] }), (0, jsx_runtime_1.jsxs)("td", { children: ["$", (0, utils_2.formatRaisedAmount)(data.reduce(function (sum, r) { return sum + Number(r.amount); }, 0))] })] }), open && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data
                        .sort(function (a, b) { return a.date - b.date; })
                        .map(function (raise) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: new Date(raise.date * 1000).toLocaleDateString() })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: raise.source ? ((0, jsx_runtime_1.jsx)("a", __assign({ target: "_blank", rel: "noopener noreferrer", href: raise.source }, { children: (0, utils_2.formatRaise)(raise) }))) : ((0, utils_2.formatRaise)(raise)) }))] }, raise.date + raise.amount)); }) }))] }) }));
};
var TopProposals = function (_a) {
    var data = _a.data, protocolName = _a.protocolName;
    var _b = __read(React.useState(false), 2), open = _b[0], setOpen = _b[1];
    return ((0, jsx_runtime_1.jsx)(StatsTable2, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsxs)(Toggle, __assign({ onClick: function () { return setOpen(!open); }, "data-open": open }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16, "data-arrow": true }), (0, jsx_runtime_1.jsx)("span", { children: "Top Controversial Proposals" })] })), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolName, dataType: 'Governance' })] }) }), open && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data.map(function (proposal) { return ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true, style: { textAlign: 'left' } }, { children: proposal.link ? ((0, jsx_runtime_1.jsx)("a", __assign({ href: proposal.link, target: "_blank", rel: "noreferrer noopener" }, { children: proposal.title }))) : (proposal.title) })) }, proposal.title)); }) }))] }) }));
};
var Expenses = function (_a) {
    var data = _a.data, protocolName = _a.protocolName;
    var _b = __read(React.useState(false), 2), open = _b[0], setOpen = _b[1];
    return ((0, jsx_runtime_1.jsx)(StatsTable2, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsxs)(Toggle, __assign({ onClick: function () { return setOpen(!open); }, "data-open": open }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16, "data-arrow": true }), (0, jsx_runtime_1.jsx)("span", { children: "Annual operational expenses" })] })), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolName, dataType: 'Expenses' })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(Object.values(data.annualUsdCost || {}).reduce(function (acc, curr) { return (acc += curr); }, 0), true) })] }), open && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: "Headcount" })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: data.headcount }))] }), Object.entries(data.annualUsdCost || {}).map(function (_a) {
                            var _b = __read(_a, 2), cat = _b[0], exp = _b[1];
                            return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: (0, utils_1.capitalizeFirstLetter)(cat) })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: (0, utils_1.formattedNum)(exp, true) }))] }, 'expenses' + cat + exp));
                        }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: (0, jsx_runtime_1.jsxs)("a", __assign({ href: data.sources[0] }, { children: ["Source ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 10, style: { display: 'inline' } })] })) })), (0, jsx_runtime_1.jsx)("td", { "data-subvalue": true })] })] }))] }) }));
};
var TreasuryTable = function (_a) {
    var data = _a.data, protocolName = _a.protocolName;
    var _b = __read(React.useState(false), 2), open = _b[0], setOpen = _b[1];
    return ((0, jsx_runtime_1.jsx)(StatsTable2, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsxs)(Toggle, __assign({ onClick: function () { return setOpen(!open); }, "data-open": open }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16, "data-arrow": true }), (0, jsx_runtime_1.jsx)("span", { children: "Treasury" })] })), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolName, dataType: 'Treasury' })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(Object.entries(data).reduce(function (acc, curr) { return (acc += curr[0] === 'ownTokens' ? 0 : curr[1]); }, 0), true) })] }), open && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: Object.entries(data).map(function (_a) {
                        var _b = __read(_a, 2), cat = _b[0], tre = _b[1];
                        return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: (0, utils_1.capitalizeFirstLetter)(cat) })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: (0, utils_1.formattedNum)(tre, true) }))] }, 'treasury' + cat + tre));
                    }) }))] }) }));
};
var AnnualizedMetric = function (_a) {
    var name = _a.name, dailyValue = _a.dailyValue, cumulativeValue = _a.cumulativeValue, helperText = _a.helperText, protocolName = _a.protocolName;
    var _b = __read(React.useState(false), 2), open = _b[0], setOpen = _b[1];
    return ((0, jsx_runtime_1.jsx)(StatsTable2, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsxs)(Toggle, __assign({ onClick: function () { return setOpen(!open); }, "data-open": open }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16, "data-arrow": true }), (0, jsx_runtime_1.jsx)("span", { children: "".concat(name, " (annualized)") }), helperText && (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: helperText })] })), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolName, dataType: name })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(dailyValue * 365, true) })] }), open && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: "".concat(name, " 24h") })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: (0, utils_1.formattedNum)(dailyValue, true) }))] }), cumulativeValue ? ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: "Cumulative ".concat(name) })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: (0, utils_1.formattedNum)(cumulativeValue, true) }))] })) : null] }))] }) }));
};
var UsersTable = function (_a) {
    var activeUsers = _a.activeUsers, newUsers = _a.newUsers, transactions = _a.transactions, gasUsd = _a.gasUsd, helperText = _a.helperText, protocolName = _a.protocolName;
    var _b = __read(React.useState(false), 2), open = _b[0], setOpen = _b[1];
    return ((0, jsx_runtime_1.jsx)(StatsTable2, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsxs)(Toggle, __assign({ onClick: function () { return setOpen(!open); }, "data-open": open }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16, "data-arrow": true }), (0, jsx_runtime_1.jsx)("span", { children: "Active Addresses 24h" }), helperText && (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: helperText })] })), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolName, dataType: "Users" })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(activeUsers, false) })] }), open && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [newUsers ? ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: "New Addresses 24h" })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: (0, utils_1.formattedNum)(newUsers, false) }))] })) : null, transactions ? ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: "Transactions 24h" })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: (0, utils_1.formattedNum)(transactions, false) }))] })) : null, gasUsd ? ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: "Gas Used 24h" })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: (0, utils_1.formattedNum)(gasUsd, true) }))] })) : null] }))] }) }));
};
var TokenLiquidityTable = function (_a) {
    var data = _a.data, protocolName = _a.protocolName, symbol = _a.symbol;
    var _b = __read(React.useState(false), 2), open = _b[0], setOpen = _b[1];
    var totalLiq = data.reduce(function (acc, curr) { return (acc += curr[2]); }, 0);
    return ((0, jsx_runtime_1.jsx)(StatsTable2, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsxs)(Toggle, __assign({ onClick: function () { return setOpen(!open); }, "data-open": open }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16, "data-arrow": true }), (0, jsx_runtime_1.jsx)("span", { children: "".concat(symbol, " Liquidity") })] })), (0, jsx_runtime_1.jsx)(Flag_1.Flag, { protocol: protocolName, dataType: "Token Liquidity" })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.formattedNum)(totalLiq, true) })] }), open && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data.map(function (item) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", __assign({ "data-subvalue": true }, { children: "".concat(item[0], " (").concat(item[1], ")") })), (0, jsx_runtime_1.jsx)("td", __assign({ "data-subvalue": true }, { children: (0, utils_1.formattedNum)(item[2], true) }))] }, 'token-liq' + item[0] + item[1] + item[2])); }) }))] }) }));
};
// {allTimeVolume ? (
// 	<tr>
// 		<th>Cumulative Volume</th>
// 		<td>{formattedNum(allTimeVolume, true)}</td>
// 	</tr>
// ) : null}
// {allTimeFees ? (
// 	<tr>
// 		<th>
// 			<span>Cumulative Fees</span>
// 			{helperTexts.fees && <QuestionHelper text={helperTexts.fees} />}
// 		</th>
// 		<td>{formattedNum(allTimeFees, true)}</td>
// 	</tr>
// ) : null}
var Toggle = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tmargin-left: -24px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2px;\n\twhite-space: nowrap;\n\n\t& > *[data-arrow] {\n\t\tflex-shrink: 0;\n\t}\n\n\t&[data-open='true'] {\n\t\t& > *[data-arrow] {\n\t\t\ttransform: rotate(90deg);\n\t\t\ttransition: 0.1s ease;\n\t\t}\n\t}\n"], ["\n\tmargin-left: -24px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2px;\n\twhite-space: nowrap;\n\n\t& > *[data-arrow] {\n\t\tflex-shrink: 0;\n\t}\n\n\t&[data-open='true'] {\n\t\t& > *[data-arrow] {\n\t\t\ttransform: rotate(90deg);\n\t\t\ttransition: 0.1s ease;\n\t\t}\n\t}\n"])));
var StatsTable2 = (0, styled_components_1.default)(ProtocolStatsTable)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tmargin: -24px 0 0 0;\n\n\tth[data-subvalue],\n\ttd[data-subvalue] {\n\t\tfont-weight: 400;\n\t\tfont-family: var(--inter);\n\t\tfont-size: 0.875rem;\n\t}\n\ttd {\n\t\tcolor: ", ";\n\t}\n\n\ta {\n\t\ttext-decoration: underline;\n\t\ttext-decoration-color: ", ";\n\t}\n\n\t:hover {\n\t\tth {\n\t\t\tdiv[data-tooltipanchor='true'] {\n\t\t\t\tbutton {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tmargin: -24px 0 0 0;\n\n\tth[data-subvalue],\n\ttd[data-subvalue] {\n\t\tfont-weight: 400;\n\t\tfont-family: var(--inter);\n\t\tfont-size: 0.875rem;\n\t}\n\ttd {\n\t\tcolor: ", ";\n\t}\n\n\ta {\n\t\ttext-decoration: underline;\n\t\ttext-decoration-color: ", ";\n\t}\n\n\t:hover {\n\t\tth {\n\t\t\tdiv[data-tooltipanchor='true'] {\n\t\t\t\tbutton {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#cccccc' : '#545757');
});
exports.default = ProtocolContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
