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
exports.useFetchBridgeVolumeOnAllChains = exports.BridgeContainerOnClient = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var styled_components_1 = __importDefault(require("styled-components"));
var layout_1 = __importDefault(require("../../layout"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var Medium_1 = require("../../layout/Stats/Medium");
var Search_1 = require("../../components/Search");
var TokenLogo_1 = __importDefault(require("../../components/TokenLogo"));
var FormattedName_1 = __importDefault(require("../../components/FormattedName"));
var SEO_1 = __importDefault(require("../../components/SEO"));
var LocalStorage_1 = require("../../contexts/LocalStorage");
var utils_1 = require("../../utils");
var Table_1 = require("../../components/Table");
var TableSwitch_1 = require("../../components/BridgesPage/TableSwitch");
var BridgeChainSelector_1 = require("../../components/BridgesPage/BridgeChainSelector");
var Misc_1 = require("../../components/ECharts/ProtocolChart/Misc");
var swr_1 = __importDefault(require("swr"));
var bridges_1 = require("../../api/categories/bridges");
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var TableNoticeWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 16px;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tmargin-bottom: -2rem;\n\n\tp {\n\t\topacity: 0.6;\n\t\tfont-size: 0.875rem;\n\t\tfont-style: italic;\n\t}\n"], ["\n\tdisplay: flex;\n\tgap: 16px;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\tmargin-bottom: -2rem;\n\n\tp {\n\t\topacity: 0.6;\n\t\tfont-size: 0.875rem;\n\t\tfont-style: italic;\n\t}\n"])));
var BridgeInfo = function (_a) {
    var _b, _c, _d, _e, _f;
    var displayName = _a.displayName, logo = _a.logo, chains = _a.chains, defaultChain = _a.defaultChain, volumeDataByChain = _a.volumeDataByChain, tableDataByChain = _a.tableDataByChain;
    var _g = __read(React.useState('Inflows'), 2), chartType = _g[0], setChartType = _g[1];
    var _h = __read(React.useState(defaultChain), 2), currentChain = _h[0], setChain = _h[1];
    var _j = __read((0, LocalStorage_1.useBridgesManager)(), 1), bridgesSettings = _j[0];
    var isBridgesShowingAddresses = bridgesSettings[LocalStorage_1.BRIDGES_SHOWING_ADDRESSES];
    var _k = tableDataByChain[currentChain], tokensTableData = _k.tokensTableData, addressesTableData = _k.addressesTableData, tokenDeposits = _k.tokenDeposits, tokenWithdrawals = _k.tokenWithdrawals;
    var volumeChartDataByChain = volumeDataByChain[currentChain];
    var prevDayChart = volumeChartDataByChain[volumeChartDataByChain.length - 2];
    var currentDepositsUSD = (_b = prevDayChart === null || prevDayChart === void 0 ? void 0 : prevDayChart.Deposited) !== null && _b !== void 0 ? _b : 0;
    var currentWithdrawalsUSD = -((_c = prevDayChart === null || prevDayChart === void 0 ? void 0 : prevDayChart.Withdrawn) !== null && _c !== void 0 ? _c : 0);
    var currentVolume = currentDepositsUSD + currentWithdrawalsUSD;
    var volPercentChange = '0 ';
    if (volumeChartDataByChain.length > 2) {
        var prev2DayChart = volumeChartDataByChain[volumeChartDataByChain.length - 3];
        var prevDepositsUSD = (_d = prev2DayChart.Deposited) !== null && _d !== void 0 ? _d : 0;
        var prevWithdrawalsUSD = -((_e = prev2DayChart.Withdrawn) !== null && _e !== void 0 ? _e : 0);
        var prevVolume = prevDepositsUSD + prevWithdrawalsUSD;
        if (prevVolume > 0) {
            volPercentChange = (_f = (0, utils_1.getPercentChange)(currentVolume, prevVolume)) === null || _f === void 0 ? void 0 : _f.toFixed(2);
        }
    }
    var chainOptions = chains.map(function (chain) {
        return { name: chain, route: '' };
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DetailsWrapper, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: logo, size: 24 }), (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: displayName ? displayName + ' ' : '', maxCharacters: 25, fontWeight: 700 })] }), (0, jsx_runtime_1.jsx)(BridgeChainSelector_1.BridgeChainSelector, { currentChain: currentChain, options: chainOptions, handleClick: setChain }), (0, jsx_runtime_1.jsxs)(Stat, { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["Deposited to ", currentChain, " (24h)"] }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(currentWithdrawalsUSD || '0', true) })] }), (0, jsx_runtime_1.jsxs)(Stat, { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["Withdrawn from ", currentChain, " (24h)"] }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedNum)(currentDepositsUSD || '0', true) })] }), (0, jsx_runtime_1.jsxs)(Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Volume Change (24h)" }), (0, jsx_runtime_1.jsx)("span", { children: volPercentChange + '%' })] })] }), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            padding: '0 0 20px 0',
                            minHeight: '460px'
                        } }, { children: [(0, jsx_runtime_1.jsxs)(Misc_1.Filters, __assign({ style: { margin: '16px 16px 0' } }, { children: [(0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ as: "button", active: chartType === 'Inflows', onClick: function () { return setChartType('Inflows'); } }, { children: "Inflows" })), (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ as: "button", active: chartType === 'Tokens To', onClick: function () { return setChartType('Tokens To'); } }, { children: "Tokens To" })), (0, jsx_runtime_1.jsx)(Misc_1.Denomination, __assign({ as: "button", active: chartType === 'Tokens From', onClick: function () { return setChartType('Tokens From'); } }, { children: "Tokens From" }))] })), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.LazyChart, { children: [chartType === 'Inflows' && volumeChartDataByChain && volumeChartDataByChain.length > 0 && ((0, jsx_runtime_1.jsx)(BarChart, { chartData: volumeChartDataByChain, title: "", chartOptions: volumeChartOptions, stacks: inflowChartStacks })), chartType === 'Tokens To' && tokenWithdrawals && tokenWithdrawals.length > 0 && ((0, jsx_runtime_1.jsx)(PieChart, { chartData: tokenWithdrawals })), chartType === 'Tokens From' && tokenDeposits && tokenDeposits.length > 0 && ((0, jsx_runtime_1.jsx)(PieChart, { chartData: tokenDeposits }))] })] }))] }), (0, jsx_runtime_1.jsxs)(TableNoticeWrapper, { children: [(0, jsx_runtime_1.jsx)(TableSwitch_1.AddressesTableSwitch, {}), (0, jsx_runtime_1.jsx)("p", { children: "All stats in table are for the previous day." })] }), isBridgesShowingAddresses ? ((0, jsx_runtime_1.jsx)(Table_1.BridgeAddressesTable, { data: addressesTableData })) : ((0, jsx_runtime_1.jsx)(Table_1.BridgeTokensTable, { data: tokensTableData }))] }));
};
function BridgeContainer(props) {
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "".concat(props.displayName, ": Bridge Volume - DefiLlama"), 
        // backgroundColor={transparentize(0.6, backgroundColor)}
        style: { gap: '48px' } }, { children: [(0, jsx_runtime_1.jsx)(SEO_1.default, { cardName: props.displayName, token: props.displayName }), (0, jsx_runtime_1.jsx)(Search_1.BridgesSearch, { step: {
                    category: 'Bridges',
                    name: props.displayName
                } }), (0, jsx_runtime_1.jsx)(BridgeInfo, __assign({}, props))] })));
}
exports.default = BridgeContainer;
var BridgeContainerOnClient = function (_a) {
    var protocol = _a.protocol;
    var _b = (0, swr_1.default)("bridgeData/".concat(protocol), function () { return (0, bridges_1.getBridgePageDatanew)(protocol); }), data = _b.data, error = _b.error;
    if (!data && !error) {
        return (0, jsx_runtime_1.jsx)("p", { style: { margin: '100px 0', textAlign: 'center' } });
    }
    if (error) {
        return (0, jsx_runtime_1.jsx)("p", __assign({ style: { margin: '100px 0', textAlign: 'center' } }, { children: "Something went wrong, couldn't fetch data" }));
    }
    return ((0, jsx_runtime_1.jsx)(InfoWrapper, { children: (0, jsx_runtime_1.jsx)(BridgeInfo, __assign({}, data)) }));
};
exports.BridgeContainerOnClient = BridgeContainerOnClient;
var useFetchBridgeVolumeOnAllChains = function (protocol) {
    var _a = (0, swr_1.default)("bridgeVolumeOnAllChain/".concat(protocol), protocol ? function () { return (0, bridges_1.getBridgePageDatanew)(protocol).then(function (data) { return data.volumeDataByChain['All Chains']; }); } : function () { return null; }), data = _a.data, error = _a.error;
    return { data: data, loading: !data && data !== null && !error };
};
exports.useFetchBridgeVolumeOnAllChains = useFetchBridgeVolumeOnAllChains;
var volumeChartOptions = {
    overrides: {
        inflow: true
    }
};
var InfoWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 40px;\n\tpadding: 16px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 40px;\n\tpadding: 16px;\n"])));
var inflowChartStacks = {
    Deposited: 'stackA',
    Withdrawn: 'stackA'
};
var Stat = styled_components_1.default.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tfont-size: 1.5rem;\n\tfont-weight: 600;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\t& > *:first-child {\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\t& > *:nth-child(2) {\n\t\tfont-family: var(--font-jetbrains);\n\t\tmin-height: 2rem;\n\t}\n"], ["\n\tfont-size: 1.5rem;\n\tfont-weight: 600;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\n\t& > *:first-child {\n\t\tfont-weight: 400;\n\t\tfont-size: 1rem;\n\t\ttext-align: left;\n\t\tcolor: ", ";\n\t}\n\n\t& > *:nth-child(2) {\n\t\tfont-family: var(--font-jetbrains);\n\t\tmin-height: 2rem;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#cccccc' : '#545757');
});
var templateObject_1, templateObject_2, templateObject_3;
