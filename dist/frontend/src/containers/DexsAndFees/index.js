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
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../../Theme");
var components_1 = require("../../components");
var Table_1 = require("../../components/Table");
var Filters_1 = require("../../components/Filters");
var Search_1 = require("../../components/Search");
var client_1 = require("../../api/categories/adaptors/client");
var common_1 = require("./common");
var router_1 = require("next/router");
var utils_1 = require("../../utils");
var utils_2 = require("../../utils/adaptorsPages/utils");
var Categories_1 = require("../../components/Filters/yields/Categories");
var Announcement_1 = require("../../components/Announcement");
var HeaderWrapper = (0, styled_components_1.default)(Theme_1.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 12px;\n\tborder: 1px solid transparent;\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 12px;\n\tborder: 1px solid transparent;\n"])));
function OverviewContainer(props) {
    var _a, _b, _c;
    var chain = (_a = props.chain) !== null && _a !== void 0 ? _a : 'All';
    var router = (0, router_1.useRouter)();
    var _d = router.query.dataType, selectedDataType = _d === void 0 ? 'Notional volume' : _d;
    var _e = __read(React.useState(false), 2), enableBreakdownChart = _e[0], setEnableBreakdownChart = _e[1];
    var _f = React.useMemo(function () {
        var selectedCategories = router.query.category
            ? typeof router.query.category === 'string'
                ? [router.query.category]
                : router.query.category
            : [];
        var categoriesToFilter = selectedCategories.filter(function (c) { return c.toLowerCase() !== 'all' && c.toLowerCase() !== 'none'; });
        var protocolsList = categoriesToFilter.length > 0
            ? props.protocols.filter(function (p) { return (p.category ? selectedCategories.includes(p.category) : false); })
            : props.protocols;
        return { selectedCategories: selectedCategories, protocolsList: protocolsList };
    }, [router.query.category, props.protocols]), selectedCategories = _f.selectedCategories, protocolsList = _f.protocolsList;
    var _g = __read(React.useState({
        totalDataChartBreakdown: props.totalDataChartBreakdown,
        totalDataChartBreakdown2: undefined
    }), 2), charts = _g[0], setCharts = _g[1];
    // Needs to be improved! Too dirty
    var _h = (0, client_1.useFetchCharts)(props.type, chain === 'All' ? undefined : chain, undefined, props.type === 'fees' || chain === 'all'), data = _h.data, error = _h.error, loading = _h.loading;
    var _j = (0, client_1.useFetchCharts)(props.type, chain === 'All' ? undefined : chain, 'dailyPremiumVolume', props.type !== 'options' || chain === 'all'), secondTypeData = _j.data, secondTypeError = _j.error, secondTypeLoading = _j.loading;
    var isChainsPage = chain === 'all';
    React.useEffect(function () {
        if (loading) {
            setEnableBreakdownChart(false);
            setCharts(function (val) { return (__assign(__assign({}, val), { totalDataChartBreakdown: undefined })); });
        }
        if (data && !error && !loading)
            setCharts(function (val) { return (__assign(__assign({}, val), { totalDataChartBreakdown: data === null || data === void 0 ? void 0 : data.totalDataChartBreakdown })); });
    }, [data, loading, error, props.chain]);
    // Needs to be improved! Too dirty
    React.useEffect(function () {
        if (secondTypeLoading) {
            setEnableBreakdownChart(false);
            setCharts(function (val) {
                var _a;
                return (__assign(__assign({}, val), (_a = {}, _a['totalDataChartBreakdownPremium volume'] = undefined, _a)));
            });
        }
        if (secondTypeData && !secondTypeError && !secondTypeLoading)
            setCharts(function (val) {
                var _a;
                return (__assign(__assign({}, val), (_a = {}, _a['totalDataChartBreakdownPremium volume'] = secondTypeData === null || secondTypeData === void 0 ? void 0 : secondTypeData.totalDataChartBreakdown, _a)));
            });
    }, [secondTypeData, secondTypeLoading, secondTypeError, props.chain]);
    var chartData = React.useMemo(function () {
        var _a;
        // TODO: process this in the backend
        if (enableBreakdownChart) {
            var displayNameMap_1 = props.protocols.reduce(function (acc, curr) {
                if (curr.subRows)
                    curr.subRows.forEach(function (row) { return (acc[row.displayName] = row.displayName); });
                else
                    acc[curr.displayName] = curr.displayName;
                return acc;
            }, {});
            var arr = Object.values((_a = charts["totalDataChartBreakdown".concat(!selectedDataType || selectedDataType === 'Notional volume' ? '' : selectedDataType)]) === null || _a === void 0 ? void 0 : _a.map(function (cd) {
                return __assign({ date: cd[0] }, Object.keys(displayNameMap_1).reduce(function (acc, key) {
                    var _a;
                    acc[key] = (_a = cd[1][key]) !== null && _a !== void 0 ? _a : 0;
                    return acc;
                }, {}));
            })).map(function (bar) {
                var date = bar.date;
                delete bar.date;
                var items = Object.entries(bar);
                return __assign({ date: date }, items.reduce(function (acc, _a) {
                    var _b;
                    var _c = __read(_a, 2), key = _c[0], value = _c[1];
                    return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
                }, {}));
            });
            return [arr, Object.values(displayNameMap_1)];
        }
        return props.totalDataChart;
    }, [enableBreakdownChart, charts, props.totalDataChart, props.protocols, selectedDataType]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [props.type === 'fees' && ((0, jsx_runtime_1.jsxs)(Announcement_1.AnnouncementWrapper, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Are we missing any protocol?" }), ' ', (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://airtable.com/shrtBA9lvj6E036Qx", style: { color: '#2f80ed' }, target: "_blank", rel: "noopener noreferrer" }, { children: "Request it here!" }))] })), (0, jsx_runtime_1.jsx)(Search_1.AdaptorsSearch, { type: props.type, step: {
                    category: chain === 'All' ? 'Home' : (0, utils_1.capitalizeFirstLetter)(props.type),
                    name: chain === 'All' ? (0, utils_1.capitalizeFirstLetter)(props.type) : chain === 'all' ? 'Chains' : chain
                }, enableToggle: props.type !== 'fees' && props.chain !== 'all', onToggleClick: charts.totalDataChartBreakdown && charts.totalDataChartBreakdown.length > 0
                    ? function (enabled) { return setEnableBreakdownChart(enabled); }
                    : undefined, toggleStatus: enableBreakdownChart && charts.totalDataChartBreakdown && charts.totalDataChartBreakdown.length > 0 }), (0, jsx_runtime_1.jsxs)(StyledHeaderWrapper, { children: [(0, jsx_runtime_1.jsx)(TitleByType, { type: props.type, chain: chain }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { fontSize: '.60em', textAlign: 'end' } }, { children: "Updated daily at 00:00UTC" }))] }), getChartByType(props.type, {
                type: props.type,
                data: {
                    change_1d: props.change_1d,
                    change_1m: props.change_1m,
                    change_7dover7d: props.change_7dover7d,
                    disabled: false,
                    total24h: props.total24h,
                    total7d: props.total7d,
                    dexsDominance: props.dexsDominance
                },
                chartData: chartData,
                name: props.chain,
                fullChart: isChainsPage,
                disableDefaultLeged: isChainsPage ? true : enableBreakdownChart,
                selectedType: (_b = selectedDataType) !== null && _b !== void 0 ? _b : undefined,
                chartTypes: props.type === 'options' && enableBreakdownChart ? ['Notional volume', 'Premium volume'] : undefined
            }), props.allChains ? ((0, jsx_runtime_1.jsxs)(Filters_1.RowLinksWrapper, { children: [(0, jsx_runtime_1.jsx)(Filters_1.RowLinksWithDropdown, { links: __spreadArray(['All'], __read(props.allChains), false).map(function (chain) { return ({
                            label: chain,
                            to: chain === 'All' ? "/".concat(props.type) : "/".concat(props.type, "/chains/").concat(chain.toLowerCase())
                        }); }), activeLink: chain, alternativeOthersText: "More chains" }), ((_c = props.categories) === null || _c === void 0 ? void 0 : _c.length) > 0 && props.type !== 'dexs' && ((0, jsx_runtime_1.jsx)(Categories_1.FiltersByCategory, { categoryList: props.categories, selectedCategories: selectedCategories, pathname: "/".concat(props.type), hideSelectedCount: true }))] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})), protocolsList && protocolsList.length > 0 ? ((0, jsx_runtime_1.jsx)(Table_1.OverviewTable, { data: protocolsList, type: props.type, allChains: isChainsPage })) : ((0, jsx_runtime_1.jsx)(components_1.Panel, { children: (0, jsx_runtime_1.jsx)("p", __assign({ style: { textAlign: 'center' } }, { children: "Looks like we couldn't find any protocol\uD83D\uDC40. \uD83E\uDD99\uD83E\uDD99\uD83E\uDD99 are working on it." })) }))] }));
}
exports.default = OverviewContainer;
var getChartByType = function (type, props) {
    switch (type) {
        case 'fees':
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
        default:
            return (0, jsx_runtime_1.jsx)(common_1.MainBarChart, __assign({}, props));
    }
};
var TitleByType = function (props) {
    var title = (0, utils_1.capitalizeFirstLetter)(props.type);
    if (utils_2.volumeTypes.includes(props.type))
        title = "".concat(title, " volume");
    else if (props.type === 'fees') {
        if (props.chain === 'all')
            title = 'Ranking by fees';
        else
            title = 'Ranking by fees and revenue';
    }
    if (props.chain === 'all') {
        title = "".concat(title, " by chain");
    }
    else if (props.chain && props.chain !== 'All') {
        title = "".concat(title, " in ").concat(props.chain);
    }
    return (0, jsx_runtime_1.jsx)("span", { children: title });
};
var StyledHeaderWrapper = (0, styled_components_1.default)(HeaderWrapper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t* {\n\t\tflex-grow: 1;\n\t}\n"], ["\n\t* {\n\t\tflex-grow: 1;\n\t}\n"])));
var templateObject_1, templateObject_2;
