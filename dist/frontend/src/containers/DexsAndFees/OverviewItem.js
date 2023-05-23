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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var link_1 = __importDefault(require("next/link"));
var react_feather_1 = require("react-feather");
var layout_1 = __importDefault(require("../../layout"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var Copy_1 = __importDefault(require("../../components/Copy"));
var Search_1 = require("../../components/Search");
var AuditInfo_1 = __importDefault(require("../../components/AuditInfo"));
var hooks_1 = require("../../hooks");
var utils_1 = require("../../utils");
var charts_1 = require("./charts");
var utils_2 = require("../../api/categories/adaptors/utils");
var Announcement_1 = __importDefault(require("../../components/Announcement"));
var utils_3 = require("../../utils/adaptorsPages/utils");
var SEO_1 = __importDefault(require("../../components/SEO"));
var ProtocolChart_1 = require("./charts/ProtocolChart");
function ProtocolContainer(props) {
    var _a, _b, _c, _d;
    (0, hooks_1.useScrollToTop)();
    var blockExplorers = ((_a = props.protocolSummary.allAddresses) !== null && _a !== void 0 ? _a : (props.protocolSummary.address ? [props.protocolSummary.address] : [])).map(function (address) {
        var _a = (0, utils_1.getBlockExplorer)(address), blockExplorerLink = _a.blockExplorerLink, blockExplorerName = _a.blockExplorerName;
        var splittedAddress = address.split(':');
        return {
            blockExplorerLink: blockExplorerLink,
            blockExplorerName: blockExplorerName,
            chain: splittedAddress.length > 1 ? splittedAddress[0] : undefined,
            address: splittedAddress.length > 1 ? splittedAddress[1] : splittedAddress[0]
        };
    });
    var enableVersionsChart = ((_b = props.protocolSummary.childProtocols) === null || _b === void 0 ? void 0 : _b.length) > 0;
    var enableTokensChart = props.protocolSummary.type === 'incentives';
    var enableChainsChart = props.protocolSummary.type !== 'dexs';
    var typeSimple = utils_3.volumeTypes.includes(props.protocolSummary.type) ? 'volume' : props.protocolSummary.type;
    var useTotalDataChart = props.protocolSummary.type === 'fees' || props.protocolSummary.type === 'options';
    var mainChart = React.useMemo(function () {
        var chartData;
        var title;
        var legend;
        if (useTotalDataChart) {
            chartData = props.protocolSummary.totalDataChart[0];
            legend = props.protocolSummary.totalDataChart[1];
        }
        else {
            var _a = __read((0, utils_2.chartBreakdownByChain)(props.protocolSummary.totalDataChartBreakdown), 2), cd = _a[0], lgnd = _a[1];
            chartData = cd;
            legend = lgnd;
        }
        title = Object.keys(legend).length <= 1 ? "".concat((0, utils_1.capitalizeFirstLetter)(typeSimple), " by chain") : '';
        return {
            dataChart: [chartData, legend],
            title: title
        };
    }, [
        props.protocolSummary.totalDataChart,
        props.protocolSummary.totalDataChartBreakdown,
        useTotalDataChart,
        typeSimple
    ]);
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: props.title, style: { gap: '36px' } }, { children: [(0, jsx_runtime_1.jsx)(SEO_1.default, { cardName: props.protocolSummary.displayName, tvl: (_c = (0, utils_1.formattedNum)(props.protocolSummary.total24h)) === null || _c === void 0 ? void 0 : _c.toString(), volumeChange: (_d = props.protocolSummary.change_1d) === null || _d === void 0 ? void 0 : _d.toString(), pageType: props.protocolSummary.type }), (0, jsx_runtime_1.jsx)(Search_1.AdaptorsSearch, { type: props.protocolSummary.type, step: {
                    category: (0, utils_1.capitalizeFirstLetter)(props.protocolSummary.type),
                    name: props.protocolSummary.displayName
                } }), !props.protocolSummary.latestFetchIsOk && ((0, jsx_runtime_1.jsxs)(Announcement_1.default, __assign({ notCancellable: true }, { children: ["Looks like ", props.protocolSummary.displayName, " latest ", props.protocolSummary.type, " data might not be accurate or up-to-date, \uD83E\uDD99\uD83E\uDD99\uD83E\uDD99 are working on it."] }))), (0, jsx_runtime_1.jsx)(ProtocolChart_1.ProtocolChart, { logo: props.protocolSummary.logo, data: props.protocolSummary, chartData: mainChart.dataChart, name: props.protocolSummary.displayName, type: props.protocolSummary.type, title: mainChart.title, totalAllTime: props.protocolSummary.totalAllTime, childProtocols: props.protocolSummary.childProtocols }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.SectionHeader, { children: "Information" }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.InfoWrapper, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Protocol information" }), props.protocolSummary.description && (0, jsx_runtime_1.jsx)("p", { children: props.protocolSummary.description }), props.protocolSummary.category && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Category" }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/overview/".concat(props.protocolSummary.type) }, { children: props.protocolSummary.category }))] })), props.protocolSummary.forkedFrom && props.protocolSummary.forkedFrom.length > 0 && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Forked from" }), (0, jsx_runtime_1.jsx)("span", { children: ":" }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.protocolSummary.forkedFrom.map(function (p, index) { return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/protocol/".concat(p) }, { children: props.protocolSummary.forkedFrom[index + 1] ? p + ', ' : p }), p)); }) })] })), props.protocolSummary.audits && props.protocolSummary.audit_links && ((0, jsx_runtime_1.jsx)(AuditInfo_1.default, { audits: props.protocolSummary.audits, auditLinks: props.protocolSummary.audit_links })), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.LinksWrapper, { children: [props.protocolSummary.url && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: props.protocolSummary.url, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Website" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), props.protocolSummary.twitter && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://twitter.com/".concat(props.protocolSummary.twitter), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Twitter" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })))] })] }), (blockExplorers.length > 0 || props.protocolSummary.gecko_id) && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Token Information" }), blockExplorers && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: blockExplorers.map(function (blockExplorer) {
                                    var _a;
                                    return ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.FlexRow, { children: [(0, jsx_runtime_1.jsx)("span", { children: "".concat((0, utils_1.capitalizeFirstLetter)(blockExplorer.chain ? "".concat(blockExplorer.chain, " address:") : 'address:')) }), (0, jsx_runtime_1.jsx)("span", { children: blockExplorer.address.slice(0, 8) + '...' + ((_a = blockExplorer.address) === null || _a === void 0 ? void 0 : _a.slice(36, 42)) }), (0, jsx_runtime_1.jsx)(Copy_1.default, { toCopy: blockExplorer.address, disabled: !blockExplorer.address }), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: blockExplorer.blockExplorerLink, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["View on ", blockExplorer.blockExplorerName] }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))] }, blockExplorer.address));
                                }) })), props.protocolSummary.gecko_id && ((0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LinksWrapper, { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://www.coingecko.com/en/coins/".concat(props.protocolSummary.gecko_id), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "View on CoinGecko" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })) }))] })), props.protocolSummary.methodologyURL && ((0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Section, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Methodology" }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LinksWrapper, { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: props.protocolSummary.methodologyURL, passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check the code" }), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })) })] }))] }), (enableVersionsChart || enableTokensChart || enableChainsChart) && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.SectionHeader, { children: "Charts" }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartsWrapper, { children: [enableVersionsChart && ((0, jsx_runtime_1.jsx)(charts_1.ChartByType, { type: props.protocolSummary.type, protocolName: props.protocolSummary.name, chartType: "version" })), enableTokensChart && ((0, jsx_runtime_1.jsx)(charts_1.ChartByType, { type: props.protocolSummary.type, protocolName: props.protocolSummary.name, chartType: "tokens" })), enableChainsChart && ((0, jsx_runtime_1.jsx)(charts_1.ChartByType, { type: props.protocolSummary.type, protocolName: props.protocolSummary.module, chartType: "chain" }))] })] }))] })));
}
exports.default = ProtocolContainer;
