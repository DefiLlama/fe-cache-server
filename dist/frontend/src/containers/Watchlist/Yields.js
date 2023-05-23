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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YieldsWatchlistContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../../Theme");
var components_1 = require("../../components");
var Row_1 = __importDefault(require("../../components/Row"));
var DropdownMenu_1 = require("../../components/DropdownMenu");
var Table_1 = require("../../components/Table");
var hooks_1 = require("../../hooks");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var OptionToggle_1 = __importDefault(require("../../components/OptionToggle"));
var router_1 = require("next/router");
var Action = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tsvg {\n\t\tfill: ", ";\n\n\t\tpath,\n\t\tline {\n\t\t\tstroke: ", ";\n\t\t}\n\t}\n"], ["\n\tsvg {\n\t\tfill: ", ";\n\n\t\tpath,\n\t\tline {\n\t\t\tstroke: ", ";\n\t\t}\n\t}\n"])), function (_a) {
    var text1 = _a.theme.text1, isSaved = _a.isSaved;
    return (isSaved ? text1 : 'none');
}, function (_a) {
    var text1 = _a.theme.text1;
    return text1;
});
function YieldsWatchlistContainer(_a) {
    var protocolsDict = _a.protocolsDict;
    var _b = (0, router_1.useRouter)(), query = _b.query, pathname = _b.pathname, push = _b.push;
    var show7dBaseApy = query.show7dBaseApy, show7dIL = query.show7dIL, show1dVolume = query.show1dVolume, show7dVolume = query.show7dVolume, showInceptionApy = query.showInceptionApy;
    var isClient = (0, hooks_1.useIsClient)();
    var _c = (0, LocalStorage_1.useWatchlist)(), addPortfolio = _c.addPortfolio, removePortfolio = _c.removePortfolio, savedProtocols = _c.savedProtocols, portfolios = _c.portfolios, selectedPortfolio = _c.selectedPortfolio, setSelectedPortfolio = _c.setSelectedPortfolio;
    var savedProtocolsInWatchlist = Object.values(savedProtocols);
    var filteredProtocols = (0, react_1.useMemo)(function () {
        if (isClient) {
            var list = protocolsDict.filter(function (p) { return savedProtocolsInWatchlist.includes(p.pool); });
            return list.map(function (t) { return ({
                pool: t.symbol,
                configID: t.pool,
                projectslug: t.project,
                project: t.projectName,
                chains: [t.chain],
                tvl: t.tvlUsd,
                apy: t.apy,
                apyBase: t.apyBase,
                apyBase7d: t.apyBase7d,
                apyReward: t.apyReward,
                apyNet7d: t.apyNet7d,
                apyMean30d: t.apyMean30d,
                il7d: t.il7d,
                rewardTokensSymbols: t.rewardTokensSymbols,
                rewards: t.rewardTokensNames,
                change1d: t.apyPct1D,
                change7d: t.apyPct7D,
                outlook: t.apy >= 0.005 ? t.predictions.predictedClass : null,
                confidence: t.apy >= 0.005 ? t.predictions.binnedConfidence : null,
                url: t.url,
                category: t.category,
                volumeUsd1d: t.volumeUsd1d,
                volumeUsd7d: t.volumeUsd7d,
                apyBaseInception: t.apyBaseInception
            }); });
        }
        else
            return [];
    }, [isClient, savedProtocolsInWatchlist, protocolsDict]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Theme_1.Header, { children: "Saved Pools" }), (0, jsx_runtime_1.jsxs)(Row_1.default, __assign({ sx: { gap: '1rem', margin: '12px 0 -20px' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, { children: "Current portfolio:" }), (0, jsx_runtime_1.jsx)(DropdownMenu_1.Menu, { name: selectedPortfolio, options: portfolios, onItemClick: function (value) { return setSelectedPortfolio(value); } }), (0, jsx_runtime_1.jsx)(Action, __assign({ onClick: addPortfolio }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.FolderPlus, {}) })), selectedPortfolio !== LocalStorage_1.DEFAULT_PORTFOLIO_NAME && ((0, jsx_runtime_1.jsx)(Action, __assign({ onClick: removePortfolio }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.Trash2, {}) }))), (0, jsx_runtime_1.jsx)(OptionToggle_1.default, { name: "Show 7d Base Apy", toggle: function () {
                            var enabled = show7dBaseApy === 'true';
                            push({ pathname: pathname, query: __assign(__assign({}, query), { show7dBaseApy: !enabled }) }, undefined, { shallow: true });
                        }, enabled: query.show7dBaseApy === 'true', style: { marginLeft: 'auto' } }), (0, jsx_runtime_1.jsx)(OptionToggle_1.default, { name: "Show 7d IL", toggle: function () {
                            var enabled = show7dIL === 'true';
                            push({ pathname: pathname, query: __assign(__assign({}, query), { show7dIL: !enabled }) }, undefined, { shallow: true });
                        }, enabled: query.show7dIL === 'true' })] })), (0, jsx_runtime_1.jsx)(OptionToggle_1.default, { name: "Show 1d Volume", toggle: function () {
                    var enabled = show1dVolume === 'true';
                    push({ pathname: pathname, query: __assign(__assign({}, query), { show1dVolume: !enabled }) }, undefined, { shallow: true });
                }, enabled: query.show1dVolume === 'true', style: { marginLeft: 'auto' } }), (0, jsx_runtime_1.jsx)(OptionToggle_1.default, { name: "Show 7d Volume", toggle: function () {
                    var enabled = show7dVolume === 'true';
                    push({ pathname: pathname, query: __assign(__assign({}, query), { show7dVolume: !enabled }) }, undefined, { shallow: true });
                }, enabled: query.show7dVolume === 'true', style: { marginLeft: 'auto' } }), (0, jsx_runtime_1.jsx)(OptionToggle_1.default, { name: "Show Inception APY", toggle: function () {
                    var enabled = showInceptionApy === 'true';
                    push({ pathname: pathname, query: __assign(__assign({}, query), { showInceptionApy: !enabled }) }, undefined, { shallow: true });
                }, enabled: query.showInceptionApy === 'true', style: { marginLeft: 'auto' } }), filteredProtocols.length ? ((0, jsx_runtime_1.jsx)(Table_1.YieldsPoolsTable, { data: filteredProtocols })) : ((0, jsx_runtime_1.jsx)(components_1.Panel, { children: (0, jsx_runtime_1.jsx)("p", __assign({ style: { textAlign: 'center' } }, { children: "You have not saved any pools." })) }))] }));
}
exports.YieldsWatchlistContainer = YieldsWatchlistContainer;
var templateObject_1;
