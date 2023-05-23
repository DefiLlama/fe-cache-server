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
exports.RecentProtocols = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var router_1 = require("next/router");
var layout_1 = __importDefault(require("../../layout"));
var components_1 = require("../../components");
var Table_1 = require("../../components/Table");
var Search_1 = require("../../components/Search");
var shared_1 = require("../../components/Table/shared");
var Filters_1 = require("../../components/Filters");
var data_1 = require("../../hooks/data");
var utils_1 = require("../../utils");
function getSelectedChainFilters(chainQueryParam, allChains) {
    if (chainQueryParam) {
        if (typeof chainQueryParam === 'string') {
            return chainQueryParam === 'All' ? __spreadArray([], __read(allChains), false) : chainQueryParam === 'None' ? [] : [chainQueryParam];
        }
        else {
            return __spreadArray([], __read(chainQueryParam), false);
        }
    }
    else
        return __spreadArray([], __read(allChains), false);
}
function RecentProtocols(_a) {
    var title = _a.title, name = _a.name, header = _a.header, protocols = _a.protocols, chainList = _a.chainList, forkedList = _a.forkedList;
    var query = (0, router_1.useRouter)().query;
    var chain = query.chain, hideForks = query.hideForks, minTvl = query.minTvl, maxTvl = query.maxTvl;
    var toHideForkedProtocols = hideForks && typeof hideForks === 'string' && hideForks === 'true' ? true : false;
    var _b = (0, react_1.useMemo)(function () {
        var selectedChains = getSelectedChainFilters(chain, chainList);
        var _chainsToSelect = selectedChains.map(function (t) { return t.toLowerCase(); });
        var isValidTvlRange = (minTvl !== undefined && !Number.isNaN(Number(minTvl))) || (maxTvl !== undefined && !Number.isNaN(Number(maxTvl)));
        var data = protocols
            .filter(function (protocol) {
            var toFilter = true;
            // filter out protocols that are forks
            if (toHideForkedProtocols && forkedList) {
                toFilter = !forkedList[protocol.name];
            }
            var includesChain = false;
            protocol.chains.forEach(function (chain) {
                // filter if a protocol has at least of one selected chain
                if (!includesChain) {
                    includesChain = _chainsToSelect.includes(chain.toLowerCase());
                }
            });
            toFilter = toFilter && includesChain;
            return toFilter;
        })
            .map(function (p) {
            var tvl = 0;
            var tvlPrevDay = null;
            var tvlPrevWeek = null;
            var tvlPrevMonth = null;
            var extraTvl = {};
            p.chains.forEach(function (chainName) {
                var _a;
                // return if chainsToSelect doesnot include chainName
                if (!_chainsToSelect.includes(chainName.toLowerCase())) {
                    return;
                }
                for (var sectionName in p.chainTvls) {
                    var _sanitisedChainName = sectionName.startsWith("".concat(chainName, "-"))
                        ? (_a = sectionName.split('-')[1]) === null || _a === void 0 ? void 0 : _a.toLowerCase()
                        : sectionName.toLowerCase();
                    // add only if chainsToSelect includes sanitisedChainName and chainName equalt sanitisedChainName
                    if (_chainsToSelect.includes(_sanitisedChainName) && chainName.toLowerCase() === _sanitisedChainName) {
                        var _values = p.chainTvls[sectionName];
                        // only add tvl values where chainName is strictly equal to sectionName, else check if its extraTvl and add
                        if (sectionName.startsWith("".concat(chainName, "-"))) {
                            var sectionToAdd = sectionName.split('-')[1];
                            extraTvl[sectionToAdd] = (extraTvl[sectionToAdd] || 0) + _values;
                        }
                        else {
                            if (_values.tvl) {
                                tvl = (tvl || 0) + _values.tvl;
                            }
                            if (_values.tvlPrevDay) {
                                tvlPrevDay = (tvlPrevDay || 0) + _values.tvlPrevDay;
                            }
                            if (_values.tvlPrevWeek) {
                                tvlPrevWeek = (tvlPrevWeek || 0) + _values.tvlPrevWeek;
                            }
                            if (_values.tvlPrevMonth) {
                                tvlPrevMonth = (tvlPrevMonth || 0) + _values.tvlPrevMonth;
                            }
                        }
                    }
                }
            });
            return __assign(__assign({}, p), { tvl: tvl, tvlPrevDay: tvlPrevDay, tvlPrevWeek: tvlPrevWeek, tvlPrevMonth: tvlPrevMonth, change_1d: (0, utils_1.getPercentChange)(tvl, tvlPrevDay), change_7d: (0, utils_1.getPercentChange)(tvl, tvlPrevWeek), change_1m: (0, utils_1.getPercentChange)(tvl, tvlPrevMonth), listedAt: p.listedAt });
        });
        if (isValidTvlRange) {
            var filteredProtocols = data.filter(function (protocol) { return (minTvl ? protocol.tvl > minTvl : true) && (maxTvl ? protocol.tvl < maxTvl : true); });
            return { data: filteredProtocols, selectedChains: selectedChains };
        }
        return { data: data, selectedChains: selectedChains };
    }, [protocols, chain, chainList, forkedList, toHideForkedProtocols, minTvl, maxTvl]), selectedChains = _b.selectedChains, data = _b.data;
    var protocolsData = (0, data_1.useCalcStakePool2Tvl)(data);
    var pathname = (0, router_1.useRouter)().pathname;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: title, defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Home', name: name } }), (0, jsx_runtime_1.jsxs)(shared_1.TableFilters, { children: [(0, jsx_runtime_1.jsx)(shared_1.TableHeader, { children: header }), (0, jsx_runtime_1.jsxs)(shared_1.Dropdowns, { children: [(0, jsx_runtime_1.jsx)(Filters_1.FiltersByChain, { chainList: chainList, selectedChains: selectedChains, pathname: pathname }), (0, jsx_runtime_1.jsx)(Filters_1.TVLRange, {})] }), forkedList && (0, jsx_runtime_1.jsx)(Filters_1.HideForkedProtocols, {})] }), protocolsData.length > 0 ? ((0, jsx_runtime_1.jsx)(Table_1.RecentlyListedProtocolsTable, { data: protocolsData })) : ((0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ as: "p", style: { margin: 0, textAlign: 'center' } }, { children: "Couldn't find any protocols for these filters" })))] })));
}
exports.RecentProtocols = RecentProtocols;
