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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetProtocolEmissions = exports.useGetProtocolsList = exports.useDenominationPriceHistory = exports.useFetchProtocolGovernanceData = exports.useFetchProtocolMedianAPY = exports.useFetchProtocolTokenLiquidity = exports.useFetchProtocolGasUsed = exports.useFetchProtocolTransactions = exports.useFetchProtocolNewUsers = exports.useFetchProtocolActiveUsers = exports.useFetchProtocolTreasury = exports.useFetchProtocol = exports.useFetchProtocolsList = void 0;
var react_1 = require("react");
var swr_1 = __importDefault(require("swr"));
var constants_1 = require("../../../constants");
var useSWR_1 = require("../../../utils/useSWR");
var _1 = require(".");
var utils_1 = require("./utils");
var useFetchProtocolsList = function () {
    var _a = (0, swr_1.default)(constants_1.PROTOCOLS_API, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error };
};
exports.useFetchProtocolsList = useFetchProtocolsList;
var useFetchProtocol = function (protocolName) {
    var _a = (0, swr_1.default)("updatedProtocolsData/".concat(protocolName), function () { return (0, _1.getProtocol)(protocolName); }), data = _a.data, error = _a.error;
    var loading = protocolName && !data && !error;
    return { data: data, error: error, loading: loading };
};
exports.useFetchProtocol = useFetchProtocol;
var useFetchProtocolTreasury = function (protocolName) {
    var _a = (0, swr_1.default)("treasury/".concat(protocolName), protocolName ? function () { return fetch("".concat(constants_1.PROTOCOL_TREASURY_API, "/").concat(protocolName)).then(function (res) { return res.json(); }); } : function () { return null; }), data = _a.data, error = _a.error;
    var loading = protocolName && !data && data !== null && !error;
    return { data: data, error: error, loading: loading };
};
exports.useFetchProtocolTreasury = useFetchProtocolTreasury;
var useFetchProtocolActiveUsers = function (protocolId) {
    var _a = (0, swr_1.default)("activeUsers/".concat(protocolId), protocolId
        ? function () {
            return fetch("".concat(constants_1.PROTOCOL_ACTIVE_USERS_API, "/").concat(protocolId).replaceAll('#', '$'))
                .then(function (res) { return res.json(); })
                .then(function (values) {
                return values && values.length > 0 ? values.sort(function (a, b) { return a[0] - b[0]; }) : null;
            })
                .catch(function (err) { return []; });
        }
        : function () { return null; }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && data !== null && !error };
};
exports.useFetchProtocolActiveUsers = useFetchProtocolActiveUsers;
var useFetchProtocolNewUsers = function (protocolId) {
    var _a = (0, swr_1.default)("newUsers/".concat(protocolId), protocolId
        ? function () {
            return fetch("".concat(constants_1.PROTOCOL_NEW_USERS_API, "/").concat(protocolId).replaceAll('#', '$'))
                .then(function (res) { return res.json(); })
                .then(function (values) {
                return values && values.length > 0 ? values.sort(function (a, b) { return a[0] - b[0]; }) : null;
            })
                .catch(function (err) { return []; });
        }
        : function () { return null; }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && data !== null && !error };
};
exports.useFetchProtocolNewUsers = useFetchProtocolNewUsers;
var useFetchProtocolTransactions = function (protocolId) {
    var _a = (0, swr_1.default)("protocolTransactionsApi/".concat(protocolId), protocolId
        ? function () {
            return fetch("".concat(constants_1.PROTOCOL_TRANSACTIONS_API, "/").concat(protocolId).replaceAll('#', '$'))
                .then(function (res) { return res.json(); })
                .then(function (values) {
                return values && values.length > 0 ? values : null;
            })
                .catch(function (err) { return []; });
        }
        : function () { return null; }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && data !== null && !error };
};
exports.useFetchProtocolTransactions = useFetchProtocolTransactions;
var useFetchProtocolGasUsed = function (protocolId) {
    var _a = (0, swr_1.default)("protocolGasUsed/".concat(protocolId), protocolId
        ? function () {
            return fetch("".concat(constants_1.PROTOCOL_GAS_USED_API, "/").concat(protocolId).replaceAll('#', '$'))
                .then(function (res) { return res.json(); })
                .then(function (values) {
                return values && values.length > 0 ? values : null;
            })
                .catch(function (err) { return []; });
        }
        : function () { return null; }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && data !== null && !error };
};
exports.useFetchProtocolGasUsed = useFetchProtocolGasUsed;
var useFetchProtocolTokenLiquidity = function (token) {
    var _a = (0, swr_1.default)("tokenLiquidity/".concat(token), token
        ? function () {
            return fetch("".concat(constants_1.TOKEN_LIQUIDITY_API, "/").concat(token.replaceAll("#", "$")))
                .then(function (res) { return res.json(); })
                .catch(function (err) { return null; });
        }
        : function () { return null; }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && data !== null && !error };
};
exports.useFetchProtocolTokenLiquidity = useFetchProtocolTokenLiquidity;
var useFetchProtocolMedianAPY = function (protocolName) {
    var _a = (0, swr_1.default)("medianApy/".concat(protocolName), protocolName
        ? function () {
            return fetch("".concat(constants_1.YIELD_PROJECT_MEDIAN_API, "/").concat(protocolName))
                .then(function (res) { return res.json(); })
                .then(function (values) {
                return values && values.data.length > 0
                    ? values.data.map(function (item) { return (__assign(__assign({}, item), { date: Math.floor(new Date(item.timestamp).getTime() / 1000) })); })
                    : null;
            })
                .catch(function (err) {
                return [];
            });
        }
        : function () { return null; }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && data !== null && !error };
};
exports.useFetchProtocolMedianAPY = useFetchProtocolMedianAPY;
var useFetchProtocolGovernanceData = function (governanceApi) {
    var _a = (0, swr_1.default)("governanceData/".concat(governanceApi), governanceApi
        ? function () {
            return fetch(governanceApi)
                .then(function (res) { return res.json(); })
                .then(function (data) {
                var _a = (0, _1.formatGovernanceData)(data), activity = _a.activity, maxVotes = _a.maxVotes;
                if (activity.length === 0 && maxVotes.length === 0) {
                    return null;
                }
                return { activity: activity, maxVotes: maxVotes };
            })
                .catch(function (err) {
                console.log(err);
                return null;
            });
        }
        : function () { return null; }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && data !== null && !error };
};
exports.useFetchProtocolGovernanceData = useFetchProtocolGovernanceData;
var useDenominationPriceHistory = function (geckoId) {
    var url = "https://api.coingecko.com/api/v3/coins/".concat(geckoId, "/market_chart/range?vs_currency=usd&from=0&to=");
    // append end time to fetcher params to keep query key consistent b/w renders and avoid over fetching
    var _a = (0, swr_1.default)(geckoId ? url : null, function (url) { return (0, useSWR_1.fetcher)(url + Date.now()); }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: geckoId && !data && !error };
};
exports.useDenominationPriceHistory = useDenominationPriceHistory;
var useGetProtocolsList = function (_a) {
    var chain = _a.chain;
    var _b = (0, swr_1.default)(constants_1.PROTOCOLS_API), data = _b.data, error = _b.error;
    var _c = (0, react_1.useMemo)(function () {
        if (data) {
            var protocols = data.protocols, parentProtocols_1 = data.parentProtocols;
            return {
                fullProtocolsList: (0, utils_1.formatProtocolsData)({
                    chain: chain === 'All' ? null : chain,
                    protocols: protocols,
                    removeBridges: true
                }),
                parentProtocols: parentProtocols_1
            };
        }
        return { fullProtocolsList: [], parentProtocols: [] };
    }, [chain, data]), fullProtocolsList = _c.fullProtocolsList, parentProtocols = _c.parentProtocols;
    return { fullProtocolsList: fullProtocolsList, parentProtocols: parentProtocols, isLoading: !data && !error };
};
exports.useGetProtocolsList = useGetProtocolsList;
var useGetProtocolEmissions = function (protocol) {
    var _a = (0, swr_1.default)("unlocksData/".concat(protocol), protocol ? function () { return (0, _1.getProtocolEmissons)(protocol); } : function () { return null; }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: protocol && !data && !error };
};
exports.useGetProtocolEmissions = useGetProtocolEmissions;
