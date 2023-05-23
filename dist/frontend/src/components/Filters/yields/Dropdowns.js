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
exports.YieldFilterDropdowns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var common_1 = require("../common");
var protocols_1 = require("../protocols");
var Attributes_1 = require("./Attributes");
var Categories_1 = require("./Categories");
var Projects_1 = require("./Projects");
var APYRange_1 = require("./APYRange");
var ResetAll_1 = require("./ResetAll");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var ColumnFilters_1 = require("../common/ColumnFilters");
var NotifyButton_1 = require("./NotifyButton");
var BAD_DEBT_KEY = LocalStorage_1.YIELDS_SETTINGS.NO_BAD_DEBT.toLowerCase();
function YieldFilterDropdowns(_a) {
    var pathname = _a.pathname, tokensList = _a.tokensList, selectedTokens = _a.selectedTokens, chainList = _a.chainList, selectedChains = _a.selectedChains, projectList = _a.projectList, selectedProjects = _a.selectedProjects, lendingProtocols = _a.lendingProtocols, selectedLendingProtocols = _a.selectedLendingProtocols, farmProtocols = _a.farmProtocols, selectedFarmProtocols = _a.selectedFarmProtocols, categoryList = _a.categoryList, selectedCategories = _a.selectedCategories, attributes = _a.attributes, tvlRange = _a.tvlRange, apyRange = _a.apyRange, show7dBaseApy = _a.show7dBaseApy, show7dIL = _a.show7dIL, resetFilters = _a.resetFilters, availableRange = _a.availableRange, excludeBadDebt = _a.excludeBadDebt, selectedAttributes = _a.selectedAttributes, excludeRewardApy = _a.excludeRewardApy, isMobile = _a.isMobile, show1dVolume = _a.show1dVolume, show7dVolume = _a.show7dVolume, showInceptionApy = _a.showInceptionApy;
    var router = (0, router_1.useRouter)();
    var isBadDebtToggled = selectedAttributes ? selectedAttributes.includes(BAD_DEBT_KEY) : false;
    var shouldExlcudeRewardApy = router.query.excludeRewardApy === 'true' ? true : false;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [tokensList && tokensList.length > 0 && ((0, jsx_runtime_1.jsx)(common_1.FiltersByToken, { tokensList: tokensList, selectedTokens: selectedTokens || [], pathname: pathname || router.pathname, variant: "secondary", subMenu: isMobile })), chainList && chainList.length > 0 && ((0, jsx_runtime_1.jsx)(common_1.FiltersByChain, { chainList: chainList, selectedChains: selectedChains || [], pathname: pathname || router.pathname, variant: "secondary", subMenu: isMobile })), projectList && projectList.length > 0 && ((0, jsx_runtime_1.jsx)(Projects_1.YieldProjects, { projectList: projectList, selectedProjects: selectedProjects || [], pathname: pathname || router.pathname, variant: "secondary", subMenu: isMobile })), lendingProtocols && lendingProtocols.length > 0 && ((0, jsx_runtime_1.jsx)(Projects_1.YieldProjects, { projectList: lendingProtocols, selectedProjects: selectedLendingProtocols || [], pathname: pathname || router.pathname, label: "Lending Protocol", query: "lendingProtocol", variant: "secondary", subMenu: isMobile })), farmProtocols && farmProtocols.length > 0 && ((0, jsx_runtime_1.jsx)(Projects_1.YieldProjects, { projectList: farmProtocols, selectedProjects: selectedFarmProtocols || [], pathname: pathname || router.pathname, label: "Farm Protocol", query: "farmProtocol", variant: "secondary", subMenu: isMobile })), categoryList && categoryList.length > 0 && ((0, jsx_runtime_1.jsx)(Categories_1.FiltersByCategory, { categoryList: categoryList, selectedCategories: selectedCategories || [], pathname: pathname || router.pathname, variant: "secondary", subMenu: isMobile })), attributes && (0, jsx_runtime_1.jsx)(Attributes_1.YieldAttributes, { pathname: pathname || router.pathname, variant: "secondary", subMenu: isMobile }), tvlRange && (0, jsx_runtime_1.jsx)(protocols_1.TVLRange, { variant: "secondary", subMenu: isMobile }), apyRange && (0, jsx_runtime_1.jsx)(APYRange_1.APYRange, { variant: "secondary", subMenu: isMobile }), availableRange && (0, jsx_runtime_1.jsx)(protocols_1.AvailableRange, { variant: "secondary", subMenu: isMobile }), (show7dBaseApy || show7dIL || show1dVolume || show7dVolume || showInceptionApy) && ((0, jsx_runtime_1.jsx)(ColumnFilters_1.ColumnFilters, { show7dBaseApy: show7dBaseApy, show7dIL: show7dIL, show1dVolume: show1dVolume, show7dVolume: show7dVolume, showInceptionApy: showInceptionApy, variant: "secondary", subMenu: isMobile })), excludeBadDebt && selectedAttributes && ((0, jsx_runtime_1.jsxs)("label", __assign({ className: isMobile ? 'sliding-menu-button align-reverse' : 'checkbox-filter' }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "excludeBadDebt", checked: isBadDebtToggled, onChange: function () {
                            router.push({
                                pathname: pathname || router.pathname,
                                query: __assign(__assign({}, router.query), { attribute: isBadDebtToggled
                                        ? selectedAttributes.filter(function (a) { return a !== BAD_DEBT_KEY; })
                                        : __spreadArray(__spreadArray([], __read(selectedAttributes), false), [BAD_DEBT_KEY], false) })
                            }, undefined, { shallow: true });
                        } }), (0, jsx_runtime_1.jsx)("span", { children: "Exclude bad debt" })] }))), excludeRewardApy && ((0, jsx_runtime_1.jsxs)("label", __assign({ className: isMobile ? 'sliding-menu-button align-reverse' : 'checkbox-filter' }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", value: "excludeRewardApy", checked: shouldExlcudeRewardApy, onChange: function () {
                            router.push({
                                pathname: pathname || router.pathname,
                                query: __assign(__assign({}, router.query), { excludeRewardApy: !shouldExlcudeRewardApy })
                            }, undefined, { shallow: true });
                        } }), (0, jsx_runtime_1.jsx)("span", { children: "Exclude reward APY" })] }))), resetFilters && ((0, jsx_runtime_1.jsx)(ResetAll_1.ResetAllYieldFilters, { pathname: pathname || router.pathname, variant: "secondary", subMenu: isMobile })), !isMobile && ((0, jsx_runtime_1.jsx)("div", __assign({ style: { marginInlineStart: 'auto' } }, { children: (0, jsx_runtime_1.jsx)(NotifyButton_1.NotifyButton, {}) })))] }));
}
exports.YieldFilterDropdowns = YieldFilterDropdowns;
