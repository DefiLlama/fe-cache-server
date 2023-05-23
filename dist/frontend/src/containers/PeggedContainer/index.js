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
exports.PeggedAssetInfo = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var link_1 = __importDefault(require("next/link"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var ariakit_1 = require("ariakit");
var polished_1 = require("polished");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
var layout_1 = __importDefault(require("../../layout"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var Medium_1 = require("../../layout/Stats/Medium");
var components_1 = require("../../components");
var Search_1 = require("../../components/Search");
var ButtonStyled_1 = require("../../components/ButtonStyled");
var FormattedName_1 = __importDefault(require("../../components/FormattedName"));
var TokenLogo_1 = __importDefault(require("../../components/TokenLogo"));
var AuditInfo_1 = __importDefault(require("../../components/AuditInfo"));
var SEO_1 = __importDefault(require("../../components/SEO"));
var QuestionHelper_1 = __importDefault(require("../../components/QuestionHelper"));
var stablecoins_1 = require("../../hooks/data/stablecoins");
var stablecoins_2 = require("../../utils/stablecoins");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var utils_1 = require("../../utils");
var Table_1 = require("../../components/Table");
var Misc_1 = require("../../components/ECharts/ProtocolChart/Misc");
var Large_1 = require("../../layout/Stats/Large");
var AreaChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/AreaChart')); }); }, {
    ssr: false
});
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var risksHelperTexts = {
    algorithmic: 'Algorithmic assets have their pegs maintained by mechanisms that influence supply and demand. They may be partially collateralized or over-collateralized, but usually do not have a redemption mechanism for their reserve assets. Risks of algorithmic assets include smart contract risk, price collapse due to bank run or other mechanism failure, and de-pegging.',
    'fiat-backed': 'Fiat-backed assets are backed 1:1 by a reserve of fiat assets controlled by the issuer. Risks of fiat-backed assets include counterparty risk against the issuer, asset freezing and regulations, and risk of insufficient backing.',
    'crypto-backed': 'Crypto-backed assets are backed by cryptoassets locked in a smart contract as collateral. Risks of crypto-backed assets include smart contract risk, collateral volatility and liquidation, and de-pegging.'
};
var PeggedDetails = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tpadding-bottom: calc(24px + 0.4375rem);\n\tcolor: ", ";\n\toverflow: auto;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tpadding-bottom: calc(24px + 0.4375rem);\n\tcolor: ", ";\n\toverflow: auto;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var LinksWrapper = (0, styled_components_1.default)(PeggedDetails)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tgap: 16px;\n"], ["\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tgap: 16px;\n"])));
var TabContainer = (0, styled_components_1.default)(ariakit_1.TabList)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\n\t& > *:first-child {\n\t\tborder-top-left-radius: 12px;\n\t}\n\n\t& > :nth-child(3) {\n\t\tborder-top-right-radius: 12px;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\t& > :nth-child(3) {\n\t\t\tborder-top-right-radius: 0px;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\n\t& > *:first-child {\n\t\tborder-top-left-radius: 12px;\n\t}\n\n\t& > :nth-child(3) {\n\t\tborder-top-right-radius: 12px;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\t& > :nth-child(3) {\n\t\t\tborder-top-right-radius: 0px;\n\t\t}\n\t}\n"])));
var PeggedTab = (0, styled_components_1.default)(ariakit_1.Tab)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tpadding: 8px 24px;\n\twhite-space: nowrap;\n\tborder-bottom: 1px solid transparent;\n\tflex: 1;\n\n\t&[aria-selected='true'] {\n\t\tborder-bottom: ", ";\n\t}\n\n\t& + & {\n\t\tborder-left: ", ";\n\t}\n\n\t:first-child {\n\t\tborder-top-left-radius: 12px;\n\t}\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"], ["\n\tpadding: 8px 24px;\n\twhite-space: nowrap;\n\tborder-bottom: 1px solid transparent;\n\tflex: 1;\n\n\t&[aria-selected='true'] {\n\t\tborder-bottom: ", ";\n\t}\n\n\t& + & {\n\t\tborder-left: ", ";\n\t}\n\n\t:first-child {\n\t\tborder-top-left-radius: 12px;\n\t}\n\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: ", ";\n\t}\n"])), function (_a) {
    var color = _a.color;
    return '1px solid ' + color;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.divider;
}, function (_a) {
    var color = _a.color;
    return (0, polished_1.transparentize)(0.9, color);
});
var TabWrapper = styled_components_1.default.section(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: ", ";\n\tborder-top-left-radius: 12px;\n\tborder-top-right-radius: 12px;\n\n\t@media screen and (min-width: 80rem) {\n\t\twidth: 380px;\n\t\tborder-top-right-radius: 0;\n\t\tborder-bottom-right-radius: 0;\n\t\tborder-bottom-left-radius: 12px;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: ", ";\n\tborder-top-left-radius: 12px;\n\tborder-top-right-radius: 12px;\n\n\t@media screen and (min-width: 80rem) {\n\t\twidth: 380px;\n\t\tborder-top-right-radius: 0;\n\t\tborder-bottom-right-radius: 0;\n\t\tborder-bottom-left-radius: 12px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg7;
});
var PeggedDescription = styled_components_1.default.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tfont-weight: 400;\n\tfont-size: 0.875rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\t& > *:first-child {\n\t\tfont-weight: 400;\n\t\tfont-size: 0.875rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n"], ["\n\tfont-weight: 400;\n\tfont-size: 0.875rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\t& > *:first-child {\n\t\tfont-weight: 400;\n\t\tfont-size: 0.875rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#969b9b' : '#545757');
});
var AlignSelfButton = (0, styled_components_1.default)(ButtonStyled_1.ButtonLight)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 4px;\n\talign-items: center;\n\talign-self: flex-start;\n\tpadding: 8px 12px;\n\tfont-size: 0.875rem;\n\tfont-weight: 400;\n\twhite-space: nowrap;\n\tfont-family: var(--font-inter);\n"], ["\n\tdisplay: flex;\n\tgap: 4px;\n\talign-items: center;\n\talign-self: flex-start;\n\tpadding: 8px 12px;\n\tfont-size: 0.875rem;\n\tfont-weight: 400;\n\twhite-space: nowrap;\n\tfont-family: var(--font-inter);\n"])));
var Capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
function PeggedContainer(props) {
    var _a;
    var _b = props.peggedAssetData, name = _b.name, symbol = _b.symbol;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "".concat(name, ": Circulating and stats - DefiLlama"), backgroundColor: (0, polished_1.transparentize)(0.6, props.backgroundColor), style: { gap: '48px' } }, { children: [(0, jsx_runtime_1.jsx)(SEO_1.default, { cardName: name, token: name, logo: props.logo, tvl: (_a = (0, utils_1.formattedNum)(props.mcap, true)) === null || _a === void 0 ? void 0 : _a.toString() }), (0, jsx_runtime_1.jsx)(Search_1.PeggedSearch, { step: {
                    category: 'Stablecoin',
                    name: Capitalize(symbol),
                    route: 'stablecoins',
                    hideOptions: true
                } }), (0, jsx_runtime_1.jsx)(exports.PeggedAssetInfo, __assign({}, props))] })));
}
exports.default = PeggedContainer;
var PeggedAssetInfo = function (_a) {
    var chainsUnique = _a.chainsUnique, chainCirculatings = _a.chainCirculatings, peggedAssetData = _a.peggedAssetData, totalCirculating = _a.totalCirculating, unreleased = _a.unreleased, mcap = _a.mcap, bridgeInfo = _a.bridgeInfo, backgroundColor = _a.backgroundColor;
    var name = peggedAssetData.name, onCoinGecko = peggedAssetData.onCoinGecko, gecko_id = peggedAssetData.gecko_id, symbol = peggedAssetData.symbol, description = peggedAssetData.description, mintRedeemDescription = peggedAssetData.mintRedeemDescription, address = peggedAssetData.address, url = peggedAssetData.url, pegMechanism = peggedAssetData.pegMechanism, twitter = peggedAssetData.twitter, wiki = peggedAssetData.wiki, auditLinks = peggedAssetData.auditLinks, price = peggedAssetData.price;
    var logo = (0, utils_1.peggedAssetIconUrl)(name);
    var _b = (0, utils_1.getBlockExplorer)(address), blockExplorerLink = _b.blockExplorerLink, blockExplorerName = _b.blockExplorerName;
    var _c = __read(React.useState('Pie'), 2), chartType = _c[0], setChartType = _c[1];
    var defaultSelectedId = 'default-selected-tab';
    var tab = (0, ariakit_1.useTabState)({ defaultSelectedId: defaultSelectedId });
    var chainsData = chainsUnique.map(function (elem) {
        return peggedAssetData.chainBalances[elem].tokens;
    });
    var totalChartTooltipLabel = ['Circulating'];
    var _d = (0, stablecoins_2.useBuildPeggedChartData)(chainsData, chainsUnique, __spreadArray([], __read(Array(chainsUnique.length).keys()), false), 'circulating', undefined, undefined, totalChartTooltipLabel[0]), peggedAreaChartData = _d.peggedAreaChartData, peggedAreaTotalData = _d.peggedAreaTotalData, stackedDataset = _d.stackedDataset;
    var extraPeggeds = [LocalStorage_1.UNRELEASED];
    var _e = __read((0, LocalStorage_1.useStablecoinsManager)(), 2), extraPeggedsEnabled = _e[0], updater = _e[1];
    var chainTotals = (0, stablecoins_1.useCalcCirculating)(chainCirculatings);
    var chainsCirculatingValues = React.useMemo(function () {
        var data = chainTotals.map(function (chain) { return ({
            name: chain.name,
            value: chain.circulating
        }); });
        var otherCirculating = data.slice(10).reduce(function (total, entry) {
            return (total += entry.value);
        }, 0);
        return data
            .slice(0, 10)
            .sort(function (a, b) { return b.value - a.value; })
            .concat({ name: 'Others', value: otherCirculating });
    }, [chainTotals]);
    var _f = (0, stablecoins_1.useCalcGroupExtraPeggedByDay)(stackedDataset), stackedData = _f.data, dataWithExtraPeggedAndDominanceByDay = _f.dataWithExtraPeggedAndDominanceByDay;
    var groupedChains = (0, stablecoins_1.useGroupBridgeData)(chainTotals, bridgeInfo);
    var downloadCsv = function () {
        var rows = [__spreadArray(__spreadArray(['Timestamp', 'Date'], __read(chainsUnique), false), ['Total'], false)];
        stackedData
            .sort(function (a, b) { return a.date - b.date; })
            .forEach(function (day) {
            rows.push(__spreadArray(__spreadArray([
                day.date,
                (0, utils_1.toNiceCsvDate)(day.date)
            ], __read(chainsUnique.map(function (chain) { var _a; return (_a = day[chain]) !== null && _a !== void 0 ? _a : ''; })), false), [
                chainsUnique.reduce(function (acc, curr) {
                    var _a;
                    return (acc += (_a = day[curr]) !== null && _a !== void 0 ? _a : 0);
                }, 0)
            ], false));
        });
        (0, utils_1.download)('stablecoinsChains.csv', rows.map(function (r) { return r.join(','); }).join('\n'));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(0, jsx_runtime_1.jsxs)(TabWrapper, { children: [(0, jsx_runtime_1.jsxs)(TabContainer, __assign({ state: tab, className: "tab-list", "aria-label": "Pegged Tabs" }, { children: [(0, jsx_runtime_1.jsx)(PeggedTab, __assign({ className: "tab", id: defaultSelectedId, color: backgroundColor }, { children: "Stats" })), (0, jsx_runtime_1.jsx)(PeggedTab, __assign({ className: "tab", color: backgroundColor }, { children: "Info" })), (0, jsx_runtime_1.jsx)(PeggedTab, __assign({ className: "tab", color: backgroundColor }, { children: "Links" }))] })), (0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab, tabId: defaultSelectedId }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DetailsWrapper, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: logo, size: 24 }), (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: name ? name + ' ' : '', maxCharacters: 16, fontWeight: 700 }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.Symbol, { children: symbol && symbol !== '-' ? "(".concat(symbol, ")") : '' })] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Market Cap" }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(mcap || '0', true) }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DownloadButton, __assign({ onClick: downloadCsv, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)(react_feather_1.DownloadCloud, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }))] })] }), (0, jsx_runtime_1.jsxs)(Large_1.StatInARow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Price" }), (0, jsx_runtime_1.jsx)("span", { children: price === null ? '-' : (0, utils_1.formattedPeggedPrice)(price, true) })] }), totalCirculating && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DetailsTable, { children: [(0, jsx_runtime_1.jsx)("caption", { children: "Issuance Stats" }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Total Circulating" }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.toK)(totalCirculating) })] }) })] })), extraPeggeds.length > 0 && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DetailsTable, { children: [(0, jsx_runtime_1.jsxs)("caption", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Optional Circulating Counts" }), (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "Use this option to choose whether to include coins that have been minted but have never been circulating." })] }), (0, jsx_runtime_1.jsx)("tbody", { children: extraPeggeds.map(function (option) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ExtraOption, { children: [(0, jsx_runtime_1.jsx)(components_1.Checkbox2, { type: "checkbox", value: option, checked: extraPeggedsEnabled[option], onChange: updater(option) }), (0, jsx_runtime_1.jsx)("span", __assign({ style: { opacity: extraPeggedsEnabled[option] ? 1 : 0.7 } }, { children: (0, utils_1.capitalizeFirstLetter)(option) }))] }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, utils_1.toK)(unreleased) })] }, option)); }) })] }))] }) })), (0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab }, { children: (0, jsx_runtime_1.jsxs)(PeggedDetails, { children: [description && ((0, jsx_runtime_1.jsx)(PeggedDescription, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Description" }), (0, jsx_runtime_1.jsx)("span", { children: description })] }) })), pegMechanism && ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.FlexRow, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Category" }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsx)("span", { children: pegMechanism }), (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: risksHelperTexts[pegMechanism] })] }) })), mintRedeemDescription && ((0, jsx_runtime_1.jsx)(PeggedDescription, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Minting and Redemption" }), (0, jsx_runtime_1.jsx)("span", { children: mintRedeemDescription })] }) })), pegMechanism === 'fiat-backed' && auditLinks && ((0, jsx_runtime_1.jsx)(AuditInfo_1.default, { audits: auditLinks.length > 0 ? 2 : 0, auditLinks: auditLinks, color: backgroundColor }))] }) })), (0, jsx_runtime_1.jsx)(ariakit_1.TabPanel, __assign({ state: tab }, { children: (0, jsx_runtime_1.jsxs)(LinksWrapper, { children: [blockExplorerLink !== undefined && ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: blockExplorerLink, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["View on ", blockExplorerName] }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })) })), url && ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: url, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Website" }), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })) })), twitter && ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: twitter, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Twitter" }), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })) })), wiki && ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: wiki, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "DeFiLlama Wiki" }), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })) })), onCoinGecko === 'true' && ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://www.coingecko.com/en/coins/".concat(gecko_id), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "CoinGecko" }), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })) })), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://github.com/DefiLlama/peggedassets-server/tree/master/src/adapters/peggedAssets/".concat(gecko_id), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(AlignSelfButton, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check the code" }), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))] }) }))] }), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            padding: '0 0 20px 0',
                            minHeight: '460px'
                        } }, { children: [(0, jsx_runtime_1.jsxs)(Misc_1.Filters, __assign({ style: { margin: '16px 16px 0' }, color: backgroundColor }, { children: [(0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ as: "button", active: chartType === 'Mcap', onClick: function () { return setChartType('Mcap'); } }, { children: "Total Circ" })), (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ as: "button", active: chartType === 'Pie', onClick: function () { return setChartType('Pie'); } }, { children: "Pie" })), (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ as: "button", active: chartType === 'Dominance', onClick: function () { return setChartType('Dominance'); } }, { children: "Dominance" })), (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ as: "button", active: chartType === 'Chain Mcaps', onClick: function () { return setChartType('Chain Mcaps'); } }, { children: "Area" }))] })), chartType === 'Mcap' && ((0, jsx_runtime_1.jsx)(AreaChart, { title: "Total ".concat(symbol, " Circulating"), chartData: peggedAreaTotalData, stacks: totalChartTooltipLabel, color: backgroundColor, hideDefaultLegend: true })), chartType === 'Chain Mcaps' && ((0, jsx_runtime_1.jsx)(AreaChart, { title: "", chartData: peggedAreaChartData, stacks: chainsUnique, valueSymbol: "$", hideDefaultLegend: true })), chartType === 'Dominance' && ((0, jsx_runtime_1.jsx)(AreaChart, { title: "", valueSymbol: "%", chartData: dataWithExtraPeggedAndDominanceByDay, stacks: chainsUnique, hideDefaultLegend: true })), chartType === 'Pie' && (0, jsx_runtime_1.jsx)(PieChart, { chartData: chainsCirculatingValues })] }))] }), (0, jsx_runtime_1.jsx)(Table_1.PeggedAssetByChainTable, { data: groupedChains })] }));
};
exports.PeggedAssetInfo = PeggedAssetInfo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
