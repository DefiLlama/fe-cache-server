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
exports.DefiWatchlistContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../../Theme");
var components_1 = require("../../components");
var Table_1 = require("../../components/Table");
var Row_1 = __importDefault(require("../../components/Row"));
var Search_1 = require("../../components/Search");
var DropdownMenu_1 = require("../../components/DropdownMenu");
var hooks_1 = require("../../hooks");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var Action = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tsvg {\n\t\tfill: ", ";\n\n\t\tpath,\n\t\tline {\n\t\t\tstroke: ", ";\n\t\t}\n\t}\n"], ["\n\tsvg {\n\t\tfill: ", ";\n\n\t\tpath,\n\t\tline {\n\t\t\tstroke: ", ";\n\t\t}\n\t}\n"])), function (_a) {
    var text1 = _a.theme.text1, isSaved = _a.isSaved;
    return (isSaved ? text1 : 'none');
}, function (_a) {
    var text1 = _a.theme.text1;
    return text1;
});
function DefiWatchlistContainer(_a) {
    var protocolsDict = _a.protocolsDict;
    var isClient = (0, hooks_1.useIsClient)();
    var _b = (0, LocalStorage_1.useWatchlist)(), addPortfolio = _b.addPortfolio, removePortfolio = _b.removePortfolio, savedProtocols = _b.savedProtocols, portfolios = _b.portfolios, selectedPortfolio = _b.selectedPortfolio, setSelectedPortfolio = _b.setSelectedPortfolio;
    var savedProtocolsInWatchlist = Object.values(savedProtocols);
    var filteredProtocols = (0, react_1.useMemo)(function () {
        if (isClient) {
            return protocolsDict.filter(function (p) { return savedProtocolsInWatchlist.includes(p.name); });
        }
        else
            return [];
    }, [isClient, protocolsDict, savedProtocolsInWatchlist]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Home', name: 'Watchlist' } }), (0, jsx_runtime_1.jsx)(Theme_1.Header, { children: "Saved Protocols" }), (0, jsx_runtime_1.jsxs)(Row_1.default, __assign({ sx: { gap: '1rem', margin: '12px 0 -20px' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, { children: "Current portfolio:" }), (0, jsx_runtime_1.jsx)(DropdownMenu_1.Menu, { name: selectedPortfolio.length > 100 ? selectedPortfolio.substring(0, 100) + '...' : selectedPortfolio, options: portfolios.map(function (portfolio) {
                            return portfolio.length > 100 ? portfolio.substring(0, 100) + '...' : portfolio;
                        }), onItemClick: function (value) { return setSelectedPortfolio(value); } }), (0, jsx_runtime_1.jsx)(Action, __assign({ onClick: addPortfolio }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.FolderPlus, {}) })), selectedPortfolio !== LocalStorage_1.DEFAULT_PORTFOLIO_NAME && ((0, jsx_runtime_1.jsx)(Action, __assign({ onClick: removePortfolio }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.Trash2, {}) })))] })), filteredProtocols.length ? ((0, jsx_runtime_1.jsx)(Table_1.ProtocolsTable, { data: filteredProtocols })) : ((0, jsx_runtime_1.jsx)(components_1.Panel, { children: (0, jsx_runtime_1.jsx)("p", __assign({ style: { textAlign: 'center' } }, { children: "You have not saved any protocols." })) }))] }));
}
exports.DefiWatchlistContainer = DefiWatchlistContainer;
var templateObject_1;
