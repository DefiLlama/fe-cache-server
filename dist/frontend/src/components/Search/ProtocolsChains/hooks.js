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
exports.useGetDefiSearchList = void 0;
var router_1 = require("next/router");
var react_1 = require("react");
var client_1 = require("../../../api/categories/protocols/client");
var utils_1 = require("../../../utils");
var types_1 = require("../types");
var placeholder_png_1 = __importDefault(require("~/assets/placeholder.png"));
var groupedChains = [
    { name: 'Non-EVM', route: '/chains/Non-EVM', logo: placeholder_png_1.default.src },
    { name: 'EVM', route: '/chains/EVM', logo: placeholder_png_1.default.src },
    { name: 'Rollup', route: '/chains/Rollup', logo: placeholder_png_1.default.src },
    { name: 'Cosmos', route: '/chains/Cosmos', logo: placeholder_png_1.default.src },
    { name: 'Parachain', route: '/chains/Parachain', logo: placeholder_png_1.default.src },
    { name: 'Chains - Polkadot', route: '/chains/Polkadot', logo: (0, utils_1.chainIconUrl)('polkadot') },
    { name: 'Chains - Kusama', route: '/chains/Kusama', logo: (0, utils_1.chainIconUrl)('kusama') }
];
var getNameWithSymbol = function (token) {
    if (token.symbol !== '-' && !!token.symbol)
        return "".concat(token.name, " (").concat(token.symbol, ")");
    return token.name;
};
function useGetDefiSearchList(_a) {
    var _b = _a.includedSets, includedSets = _b === void 0 ? Object.values(types_1.SETS) : _b, customPath = _a.customPath;
    var _c = (0, client_1.useFetchProtocolsList)(), data = _c.data, loading = _c.loading;
    var fetchingCollections = false;
    var pathname = (0, router_1.useRouter)().pathname;
    var searchData = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f;
        if (loading || fetchingCollections)
            return [];
        var includeChains = includedSets === null || includedSets === void 0 ? void 0 : includedSets.includes(types_1.SETS.CHAINS);
        var getCustomPathChains = customPath ? customPath : function (name) { return "/chain/".concat(name); };
        var chainData = includeChains
            ? (_b = (_a = data === null || data === void 0 ? void 0 : data.chains) === null || _a === void 0 ? void 0 : _a.map(function (name) { return ({
                logo: (0, utils_1.chainIconUrl)(name),
                route: getCustomPathChains(name),
                name: name,
                symbol: null
            }); })) !== null && _b !== void 0 ? _b : []
            : [];
        var includeProtocols = includedSets === null || includedSets === void 0 ? void 0 : includedSets.includes(types_1.SETS.PROTOCOLS);
        var getCustomPathProtocols = customPath ? customPath : function (name) { return "/protocol/".concat((0, utils_1.standardizeProtocolName)(name)); };
        var protocolData = includeProtocols
            ? (_d = (_c = data === null || data === void 0 ? void 0 : data.protocols) === null || _c === void 0 ? void 0 : _c.map(function (token) { return (__assign(__assign({}, token), { name: getNameWithSymbol(token), symbol: token.symbol, logo: (0, utils_1.tokenIconUrl)(token.name), route: getCustomPathProtocols(token.name) })); })) !== null && _d !== void 0 ? _d : []
            : [];
        var parentProtocols = includeProtocols
            ? (_f = (_e = data === null || data === void 0 ? void 0 : data.parentProtocols) === null || _e === void 0 ? void 0 : _e.map(function (token) { return (__assign(__assign({}, token), { name: getNameWithSymbol(token), symbol: token.symbol, logo: (0, utils_1.tokenIconUrl)(token.name), route: getCustomPathProtocols(token.name) })); })) !== null && _f !== void 0 ? _f : []
            : [];
        var sets = pathname.startsWith('/nft')
            ? __spreadArray(__spreadArray(__spreadArray([], __read(chainData), false), __read(parentProtocols), false), __read(protocolData), false) : pathname.startsWith('/protocol')
            ? __spreadArray(__spreadArray(__spreadArray([], __read(parentProtocols), false), __read(protocolData), false), __read(chainData), false) : __spreadArray(__spreadArray(__spreadArray([], __read(chainData), false), __read(parentProtocols), false), __read(protocolData), false);
        if (includedSets === null || includedSets === void 0 ? void 0 : includedSets.includes(types_1.SETS.GROUPED_CHAINS)) {
            var _groupedChains = groupedChains;
            if (customPath)
                _groupedChains = groupedChains.map(function (gchain) { return (__assign(__assign({}, gchain), { route: customPath(gchain.name) })); });
            sets.push.apply(sets, __spreadArray([], __read(_groupedChains), false));
        }
        return sets;
    }, [data, pathname, customPath, includedSets, fetchingCollections, loading]);
    return { data: searchData, loading: loading || fetchingCollections };
}
exports.useGetDefiSearchList = useGetDefiSearchList;
