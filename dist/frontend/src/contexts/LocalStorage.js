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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChartInterval = exports.useWatchlist = exports.useBridgesManager = exports.useLiqsManager = exports.useNftsManager = exports.useStablecoinsManager = exports.useDefiChainsManager = exports.useDefiManager = exports.useChartManager = exports.useSettingsManager = exports.useDarkModeManager = exports.Updater = exports.useLocalStorageContext = exports.BRIDGES_SETTINGS_KEYS = exports.LIQS_SETTINGS_KEYS = exports.NFT_SETTINGS_KEYS = exports.STABLECOINS_SETTINGS_KEYS = exports.DEFI_SETTINGS_KEYS = exports.BRIDGES_SETTINGS = exports.LIQS_SETTINGS = exports.DEFI_CHAINS_SETTINGS = exports.NFT_SETTINGS = exports.STABLECOINS_SETTINGS = exports.YIELDS_SETTINGS = exports.DEFI_SETTINGS = exports.BAR_MIN_WIDTH_IN_CHART = exports.BRIDGES_SHOWING_ADDRESSES = exports.BRIDGES_SHOWING_TXS = exports.DEFAULT_PORTFOLIO_NAME = exports.UNRELEASED = exports.DARK_MODE = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-unused-vars*/
var react_1 = require("react");
var fathom_client_1 = require("fathom-client");
var utils_1 = require("../utils");
var hooks_1 = require("../hooks");
var router_1 = require("next/router");
var DEFILLAMA = 'DEFILLAMA';
exports.DARK_MODE = 'DARK_MODE';
// DEFI
var POOL2 = 'pool2';
var STAKING = 'staking';
var BORROWED = 'borrowed';
var DOUBLE_COUNT = 'doublecounted';
var LIQUID_STAKING = 'liquidstaking';
var VESTING = 'vesting';
// NFT
var DISPLAY_USD = 'DISPLAY_USD';
var HIDE_LAST_DAY = 'HIDE_LAST_DAY';
// YIELDS
var STABLECOINS = 'STABLECOINS';
var SINGLE_EXPOSURE = 'SINGLE_EXPOSURE';
var NO_IL = 'NO_IL';
var MILLION_DOLLAR = 'MILLION_DOLLAR';
var AUDITED = 'AUDITED';
var NO_OUTLIER = 'NO_OUTLIER';
var STABLE_OUTLOOK = 'STABLE_OUTLOOK';
var HIGH_CONFIDENCE = 'HIGH_CONFIDENCE';
var NO_BAD_DEBT = 'NO_BAD_DEBT';
var NO_LOCKUP_COLLATERAL = 'NO_LOCKUP_COLLATERAL';
// STABLECOINS
exports.UNRELEASED = 'unreleased';
var PEGGEDUSD = 'PEGGEDUSD';
var PEGGEDEUR = 'PEGGEDEUR';
var PEGGEDVAR = 'PEGGEDVAR';
var FIATSTABLES = 'FIATSTABLES';
var CRYPTOSTABLES = 'CRYPTOSTABLES';
var ALGOSTABLES = 'ALGOSTABLES';
var DEPEGGED = 'DEPEGGED';
// WATCHLISTS
var DEFI_WATCHLIST = 'DEFI_WATCHLIST';
var YIELDS_WATCHLIST = 'YIELDS_WATCHLIST';
var SELECTED_PORTFOLIO = 'SELECTED_PORTFOLIO';
exports.DEFAULT_PORTFOLIO_NAME = 'main';
// LIQUIDATIONS
var LIQS_USING_USD = 'LIQS_USING_USD';
var LIQS_SHOWING_INSPECTOR = 'LIQS_SHOWING_INSPECTOR';
var LIQS_CUMULATIVE = 'LIQS_CUMULATIVE';
// BRIDGES
exports.BRIDGES_SHOWING_TXS = 'BRIDGES_SHOWING_TXS';
exports.BRIDGES_SHOWING_ADDRESSES = 'BRIDGES_SHOWING_ADDRESSES';
// DIMENSIONS (DEXS AND FEES)
var DIMENSIONS_CHART_INTERVAL_KEY = 'DIMENSIONS:CHART_INTERVAL';
exports.BAR_MIN_WIDTH_IN_CHART = 'BAR_MIN_WIDTH_IN_CHART';
exports.DEFI_SETTINGS = { POOL2: POOL2, STAKING: STAKING, BORROWED: BORROWED, DOUBLE_COUNT: DOUBLE_COUNT, LIQUID_STAKING: LIQUID_STAKING, VESTING: VESTING };
exports.YIELDS_SETTINGS = {
    AUDITED: AUDITED,
    MILLION_DOLLAR: MILLION_DOLLAR,
    NO_IL: NO_IL,
    SINGLE_EXPOSURE: SINGLE_EXPOSURE,
    STABLECOINS: STABLECOINS,
    NO_OUTLIER: NO_OUTLIER,
    STABLE_OUTLOOK: STABLE_OUTLOOK,
    HIGH_CONFIDENCE: HIGH_CONFIDENCE,
    NO_BAD_DEBT: NO_BAD_DEBT,
    NO_LOCKUP_COLLATERAL: NO_LOCKUP_COLLATERAL
};
exports.STABLECOINS_SETTINGS = {
    PEGGEDUSD: PEGGEDUSD,
    PEGGEDEUR: PEGGEDEUR,
    PEGGEDVAR: PEGGEDVAR,
    FIATSTABLES: FIATSTABLES,
    CRYPTOSTABLES: CRYPTOSTABLES,
    ALGOSTABLES: ALGOSTABLES,
    DEPEGGED: DEPEGGED,
    UNRELEASED: exports.UNRELEASED
};
exports.NFT_SETTINGS = { DISPLAY_USD: DISPLAY_USD, HIDE_LAST_DAY: HIDE_LAST_DAY };
exports.DEFI_CHAINS_SETTINGS = [
    {
        name: 'L2',
        key: 'L2'
    },
    {
        name: 'Emulators',
        key: 'emulator'
    },
    {
        name: 'Same token',
        key: 'gas'
    },
    {
        name: 'Parachains',
        key: 'parachain'
    },
    {
        name: 'Subnets',
        key: 'subnet'
    }
];
exports.LIQS_SETTINGS = { LIQS_USING_USD: LIQS_USING_USD, LIQS_SHOWING_INSPECTOR: LIQS_SHOWING_INSPECTOR, LIQS_CUMULATIVE: LIQS_CUMULATIVE };
exports.BRIDGES_SETTINGS = { BRIDGES_SHOWING_TXS: exports.BRIDGES_SHOWING_TXS, BRIDGES_SHOWING_ADDRESSES: exports.BRIDGES_SHOWING_ADDRESSES };
var DEFI_CHAINS_KEYS = exports.DEFI_CHAINS_SETTINGS.map(function (g) { return g.key; });
exports.DEFI_SETTINGS_KEYS = Object.values(exports.DEFI_SETTINGS);
exports.STABLECOINS_SETTINGS_KEYS = Object.values(exports.STABLECOINS_SETTINGS);
exports.NFT_SETTINGS_KEYS = Object.values(exports.NFT_SETTINGS);
exports.LIQS_SETTINGS_KEYS = Object.values(exports.LIQS_SETTINGS);
exports.BRIDGES_SETTINGS_KEYS = Object.values(exports.BRIDGES_SETTINGS);
var UPDATABLE_KEYS = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
    exports.DARK_MODE,
    DEFI_WATCHLIST,
    YIELDS_WATCHLIST,
    SELECTED_PORTFOLIO
], __read(exports.DEFI_SETTINGS_KEYS), false), __read(DEFI_CHAINS_KEYS), false), __read(exports.STABLECOINS_SETTINGS_KEYS), false), __read(exports.NFT_SETTINGS_KEYS), false), __read(exports.LIQS_SETTINGS_KEYS), false), __read(exports.BRIDGES_SETTINGS_KEYS), false), [
    DIMENSIONS_CHART_INTERVAL_KEY,
    exports.BAR_MIN_WIDTH_IN_CHART
], false);
var UPDATE_KEY = 'UPDATE_KEY';
var LocalStorageContext = (0, react_1.createContext)(null);
function useLocalStorageContext() {
    return (0, react_1.useContext)(LocalStorageContext);
}
exports.useLocalStorageContext = useLocalStorageContext;
function reducer(state, _a) {
    var _b;
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case UPDATE_KEY: {
            var key_1 = payload.key, value = payload.value;
            if (!UPDATABLE_KEYS.some(function (k) { return k === key_1; })) {
                throw Error("Unexpected key in LocalStorageContext reducer: '".concat(key_1, "'."));
            }
            else {
                return __assign(__assign({}, state), (_b = {}, _b[key_1] = value, _b));
            }
        }
        default: {
            throw Error("Unexpected action type in LocalStorageContext reducer: '".concat(type, "'."));
        }
    }
}
function init() {
    var _a, _b, _c, _d;
    var defaultLocalStorage = __assign(__assign(__assign(__assign(__assign(__assign((_a = {}, _a[exports.DARK_MODE] = true, _a), exports.DEFI_SETTINGS_KEYS.reduce(function (o, prop) {
        var _a;
        return (__assign(__assign({}, o), (_a = {}, _a[prop] = false, _a)));
    }, {})), exports.STABLECOINS_SETTINGS_KEYS.reduce(function (o, prop) {
        var _a;
        return (__assign(__assign({}, o), (_a = {}, _a[prop] = prop === exports.UNRELEASED ? false : true, _a)));
    }, {})), exports.NFT_SETTINGS_KEYS.reduce(function (o, prop) {
        var _a;
        return (__assign(__assign({}, o), (_a = {}, _a[prop] = false, _a)));
    }, {})), exports.LIQS_SETTINGS_KEYS.reduce(function (o, prop) {
        var _a;
        return (__assign(__assign({}, o), (_a = {}, _a[prop] = false, _a)));
    }, {})), exports.BRIDGES_SETTINGS_KEYS.reduce(function (o, prop) {
        var _a;
        return (__assign(__assign({}, o), (_a = {}, _a[prop] = false, _a)));
    }, {})), (_b = {}, _b[DEFI_WATCHLIST] = (_c = {}, _c[exports.DEFAULT_PORTFOLIO_NAME] = {}, _c), _b[YIELDS_WATCHLIST] = (_d = {}, _d[exports.DEFAULT_PORTFOLIO_NAME] = {}, _d), _b[SELECTED_PORTFOLIO] = exports.DEFAULT_PORTFOLIO_NAME, _b[exports.BAR_MIN_WIDTH_IN_CHART] = 0, _b));
    try {
        var parsed = JSON.parse(window.localStorage.getItem(DEFILLAMA));
        if (!parsed) {
            return defaultLocalStorage;
        }
        else {
            return __assign(__assign({}, defaultLocalStorage), parsed);
        }
    }
    catch (_e) {
        return defaultLocalStorage;
    }
}
function Provider(_a) {
    var children = _a.children;
    var _b = __read((0, react_1.useReducer)(reducer, undefined, init), 2), state = _b[0], dispatch = _b[1];
    var updateKey = (0, react_1.useCallback)(function (key, value) {
        dispatch({ type: UPDATE_KEY, payload: { key: key, value: value } });
    }, []);
    // Change format from save addresses to save protocol names, so backwards compatible
    var savedDefiProtocols = state[DEFI_WATCHLIST];
    var savedYieldsProtocols = state[YIELDS_WATCHLIST];
    var newSavedDefiProtocols = savedDefiProtocols;
    var newSavedYieldsProtocols = savedYieldsProtocols;
    if (!(newSavedDefiProtocols === null || newSavedDefiProtocols === void 0 ? void 0 : newSavedDefiProtocols.main)) {
        var oldAddresses = Object.entries(savedDefiProtocols)
            .map(function (_a) {
            var _b = __read(_a, 2), value = _b[1];
            return ((value === null || value === void 0 ? void 0 : value.protocol) ? [(0, utils_1.standardizeProtocolName)(value === null || value === void 0 ? void 0 : value.protocol), value === null || value === void 0 ? void 0 : value.protocol] : []);
        })
            .filter(function (validPairs) { return validPairs.length; });
        newSavedDefiProtocols = oldAddresses.length ? { main: Object.fromEntries(oldAddresses) } : { main: {} };
    }
    if (!(newSavedYieldsProtocols === null || newSavedYieldsProtocols === void 0 ? void 0 : newSavedYieldsProtocols.main)) {
        var oldAddresses = Object.entries(savedYieldsProtocols)
            .map(function (_a) {
            var _b = __read(_a, 2), value = _b[1];
            return ((value === null || value === void 0 ? void 0 : value.protocol) ? [(0, utils_1.standardizeProtocolName)(value === null || value === void 0 ? void 0 : value.protocol), value === null || value === void 0 ? void 0 : value.protocol] : []);
        })
            .filter(function (validPairs) { return validPairs.length; });
        newSavedYieldsProtocols = oldAddresses.length ? { main: Object.fromEntries(oldAddresses) } : { main: {} };
    }
    var values = (0, react_1.useMemo)(function () {
        var _a;
        return [
            __assign(__assign({}, state), (_a = {}, _a[DEFI_WATCHLIST] = newSavedDefiProtocols, _a[YIELDS_WATCHLIST] = newSavedYieldsProtocols, _a)),
            { updateKey: updateKey }
        ];
    }, [state, updateKey, newSavedDefiProtocols, newSavedYieldsProtocols]);
    return (0, jsx_runtime_1.jsx)(LocalStorageContext.Provider, __assign({ value: values }, { children: children }));
}
exports.default = Provider;
function Updater() {
    var _a = __read(useLocalStorageContext(), 1), state = _a[0];
    (0, react_1.useEffect)(function () {
        window.localStorage.setItem(DEFILLAMA, JSON.stringify(state));
    });
    return null;
}
exports.Updater = Updater;
function useDarkModeManager() {
    var _a = __read(useLocalStorageContext(), 2), state = _a[0], updateKey = _a[1].updateKey;
    var isClient = (0, hooks_1.useIsClient)();
    var darkMode = state[exports.DARK_MODE];
    var isDarkMode = isClient ? darkMode : true;
    var toggleDarkMode = (0, react_1.useCallback)(function (value) {
        updateKey(exports.DARK_MODE, value === false || value === true ? value : !isDarkMode);
    }, [updateKey, isDarkMode]);
    return [isDarkMode, toggleDarkMode];
}
exports.useDarkModeManager = useDarkModeManager;
// TODO fix unnecessary rerenders on all state managers
function useSettingsManager(settings) {
    var _a = __read(useLocalStorageContext(), 2), state = _a[0], updateKey = _a[1].updateKey;
    var isClient = (0, hooks_1.useIsClient)();
    var toggledSettings = (0, react_1.useMemo)(function () {
        return settings.reduce(function (acc, setting) {
            var toggled = false;
            if (isClient) {
                toggled = state[setting];
                // prevent flash of these toggles when page loads intially
            }
            else if (setting === 'emulator') {
                toggled = true;
            }
            else
                toggled = false;
            acc[setting] = toggled;
            return acc;
        }, {});
    }, [state, isClient, settings]);
    var updater = function (key) { return function () {
        updateKey(key, !state[key]);
    }; };
    return [toggledSettings, updater];
}
exports.useSettingsManager = useSettingsManager;
function useChartManager() {
    var _a = __read(useLocalStorageContext(), 2), state = _a[0], updateKey = _a[1].updateKey;
    var updater = function (value) {
        updateKey(exports.BAR_MIN_WIDTH_IN_CHART, value);
    };
    return [state[exports.BAR_MIN_WIDTH_IN_CHART], updater];
}
exports.useChartManager = useChartManager;
// DEFI
function useDefiManager() {
    return useSettingsManager(exports.DEFI_SETTINGS_KEYS);
}
exports.useDefiManager = useDefiManager;
// DEFI_CHAINS
function useDefiChainsManager() {
    return useSettingsManager(DEFI_CHAINS_KEYS);
}
exports.useDefiChainsManager = useDefiChainsManager;
// STABLECOINS
function useStablecoinsManager() {
    return useSettingsManager(exports.STABLECOINS_SETTINGS_KEYS);
}
exports.useStablecoinsManager = useStablecoinsManager;
// NFTS
function useNftsManager() {
    return useSettingsManager(exports.NFT_SETTINGS_KEYS);
}
exports.useNftsManager = useNftsManager;
// LIQUIDATIONS
function useLiqsManager() {
    return useSettingsManager(exports.LIQS_SETTINGS_KEYS);
}
exports.useLiqsManager = useLiqsManager;
// BRIDGES
function useBridgesManager() {
    return useSettingsManager(exports.BRIDGES_SETTINGS_KEYS);
}
exports.useBridgesManager = useBridgesManager;
// DEFI AND YIELDS WATCHLIST
function useWatchlist() {
    var _a, _b, _c, _d;
    var router = (0, router_1.useRouter)();
    var WATCHLIST = router.pathname.startsWith('/yields') ? YIELDS_WATCHLIST : DEFI_WATCHLIST;
    var _e = __read(useLocalStorageContext(), 2), state = _e[0], updateKey = _e[1].updateKey;
    var selectedPortfolio = (_a = state === null || state === void 0 ? void 0 : state[SELECTED_PORTFOLIO]) !== null && _a !== void 0 ? _a : exports.DEFAULT_PORTFOLIO_NAME;
    var savedProtocols = (_c = (_b = state === null || state === void 0 ? void 0 : state[WATCHLIST]) === null || _b === void 0 ? void 0 : _b[selectedPortfolio]) !== null && _c !== void 0 ? _c : {};
    var watchlistPortfolios = Object.keys((_d = state === null || state === void 0 ? void 0 : state[WATCHLIST]) !== null && _d !== void 0 ? _d : {});
    function addPortfolio() {
        var newPortfolio = window.prompt('New Portfolio name');
        if (newPortfolio) {
            var newList = state === null || state === void 0 ? void 0 : state[WATCHLIST];
            newList[newPortfolio.substring(0, 100)] = {};
            updateKey(WATCHLIST, newList);
        }
    }
    function removePortfolio(portfolio) {
        var confirmed = window.confirm("Do you really want to delete \"".concat(selectedPortfolio, "\"?"));
        if (confirmed) {
            setSelectedPortfolio(exports.DEFAULT_PORTFOLIO_NAME);
            var newList = state === null || state === void 0 ? void 0 : state[WATCHLIST];
            newList === null || newList === void 0 ? true : delete newList[portfolio];
            updateKey(WATCHLIST, newList);
        }
    }
    function addProtocol(readableProtocolName) {
        var _a;
        var newList = state === null || state === void 0 ? void 0 : state[WATCHLIST];
        var standardProtocol = (0, utils_1.standardizeProtocolName)(readableProtocolName);
        newList[selectedPortfolio] = __assign(__assign({}, (newList[selectedPortfolio] || {})), (_a = {}, _a[standardProtocol] = readableProtocolName, _a));
        (0, fathom_client_1.trackGoal)('VQ0TO7CU', standardProtocol);
        updateKey(WATCHLIST, newList);
    }
    function removeProtocol(protocol) {
        var _a;
        var newList = state === null || state === void 0 ? void 0 : state[WATCHLIST];
        var standardProtocol = (0, utils_1.standardizeProtocolName)(protocol);
        (_a = newList === null || newList === void 0 ? void 0 : newList[selectedPortfolio]) === null || _a === void 0 ? true : delete _a[standardProtocol];
        (0, fathom_client_1.trackGoal)('6SL0NZYJ', standardProtocol);
        updateKey(WATCHLIST, newList);
    }
    function setSelectedPortfolio(name) {
        updateKey(SELECTED_PORTFOLIO, name);
    }
    return {
        savedProtocols: savedProtocols,
        addProtocol: addProtocol,
        removeProtocol: removeProtocol,
        addPortfolio: addPortfolio,
        removePortfolio: removePortfolio,
        portfolios: watchlistPortfolios,
        selectedPortfolio: selectedPortfolio,
        setSelectedPortfolio: setSelectedPortfolio
    };
}
exports.useWatchlist = useWatchlist;
function useChartInterval() {
    var _a;
    var _b = __read(useLocalStorageContext(), 2), state = _b[0], updateKey = _b[1].updateKey;
    var isClient = (0, hooks_1.useIsClient)();
    var chartInterval = isClient ? (_a = state[DIMENSIONS_CHART_INTERVAL_KEY]) !== null && _a !== void 0 ? _a : 'Daily' : 'Daily';
    var changeChartInterval = (0, react_1.useCallback)(function (value) {
        updateKey(DIMENSIONS_CHART_INTERVAL_KEY, value);
    }, [updateKey]);
    return [chartInterval, changeChartInterval];
}
exports.useChartInterval = useChartInterval;
