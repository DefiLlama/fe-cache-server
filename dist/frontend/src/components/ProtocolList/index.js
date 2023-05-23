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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var Theme_1 = require("../../Theme");
var Search_1 = require("../../components/Search");
var Filters_1 = require("../../components/Filters");
var defi_1 = require("../../hooks/data/defi");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var __1 = require("..");
var Raises_1 = require("../../containers/Raises");
var Protocols_1 = require("../Table/Defi/Protocols");
function ProtocolList(_a) {
    var title = _a.title, category = _a.category, _b = _a.chain, chain = _b === void 0 ? 'All' : _b, _c = _a.chains, chains = _c === void 0 ? [] : _c, filteredProtocols = _a.filteredProtocols, _d = _a.showChainList, showChainList = _d === void 0 ? true : _d, parentProtocols = _a.parentProtocols, _e = _a.csvDownload, csvDownload = _e === void 0 ? false : _e;
    var handleRouting = function (chain) {
        if (chain === 'All')
            return "/protocols/".concat(category === null || category === void 0 ? void 0 : category.toLowerCase());
        return "/protocols/".concat(category === null || category === void 0 ? void 0 : category.toLowerCase(), "/").concat(chain);
    };
    var chainOptions = __spreadArray(['All'], __read(chains), false).map(function (label) { return ({
        label: label,
        to: handleRouting(label)
    }); });
    var protocols = React.useMemo(function () {
        if (category === 'Lending' || category === 'Undercollateralized Lending') {
            return filteredProtocols.map(function (p) {
                var _a, _b, _c;
                var borrowed = (_c = (_b = (_a = p.extraTvl) === null || _a === void 0 ? void 0 : _a.borrowed) === null || _b === void 0 ? void 0 : _b.tvl) !== null && _c !== void 0 ? _c : null;
                var supplied = borrowed ? borrowed + p.tvl : null;
                var suppliedTvl = supplied ? supplied / p.tvl : null;
                return __assign(__assign({}, p), { borrowed: borrowed, supplied: supplied, suppliedTvl: suppliedTvl });
            });
        }
        else
            return filteredProtocols;
    }, [filteredProtocols, category]);
    var _f = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvlsEnabled = _f[0];
    var protocolTotals = React.useMemo(function () {
        var data = (0, defi_1.formatProtocolsList)({ extraTvlsEnabled: extraTvlsEnabled, protocols: protocols, parentProtocols: parentProtocols });
        return data;
    }, [extraTvlsEnabled, protocols, parentProtocols]);
    if (!title) {
        title = "TVL Rankings";
        if (category) {
            title = "".concat(category, " TVL Rankings");
        }
    }
    var routeName = category ? (chain === 'All' ? 'All Chains' : chain) : 'All Protocols';
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: {
                    category: category || 'Home',
                    name: routeName,
                    route: 'categories'
                } }), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: 'flex', gap: '8px' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.Header, { children: title }), csvDownload === true && ((0, jsx_runtime_1.jsx)("a", __assign({ href: "https://api.llama.fi/simpleChainDataset/All?category=".concat(category, "&").concat(Object.entries(extraTvlsEnabled)
                            .filter(function (t) { return t[1] === true; })
                            .map(function (t) { return "".concat(t[0], "=true"); })
                            .join('&')) }, { children: (0, jsx_runtime_1.jsxs)(Raises_1.DownloadButton, { children: [(0, jsx_runtime_1.jsx)(__1.DownloadIcon, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] }) })))] })), showChainList && ((0, jsx_runtime_1.jsx)(Filters_1.RowLinksWrapper, { children: (0, jsx_runtime_1.jsx)(Filters_1.RowLinksWithDropdown, { links: chainOptions, activeLink: chain }) })), (0, jsx_runtime_1.jsx)(Protocols_1.ProtocolsTableWithSearch, { data: protocolTotals, addlColumns: category === 'Lending' || category === 'Undercollateralized Lending'
                    ? ['borrowed', 'supplied', 'suppliedTvl']
                    : null, removeColumns: category ? ['category'] : null })] }));
}
exports.default = ProtocolList;
