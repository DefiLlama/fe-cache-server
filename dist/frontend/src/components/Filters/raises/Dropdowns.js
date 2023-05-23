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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaisesFilterDropdowns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Investors_1 = require("./Investors");
var chains_1 = require("./chains");
var sectors_1 = require("./sectors");
var rounds_1 = require("./rounds");
var RaisedRange_1 = require("./RaisedRange");
var v2Base_1 = require("../v2Base");
var router_1 = require("next/router");
function RaisesFilterDropdowns(_a) {
    var investors = _a.investors, selectedInvestors = _a.selectedInvestors, chains = _a.chains, selectedChains = _a.selectedChains, sectors = _a.sectors, selectedSectors = _a.selectedSectors, rounds = _a.rounds, selectedRounds = _a.selectedRounds, pathname = _a.pathname, isMobile = _a.isMobile;
    var router = (0, router_1.useRouter)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [investors && investors.length > 0 && ((0, jsx_runtime_1.jsx)(Investors_1.Investors, { investors: investors, selectedInvestors: selectedInvestors || [], pathname: pathname, subMenu: isMobile, variant: "secondary" })), chains && chains.length > 0 && ((0, jsx_runtime_1.jsx)(chains_1.Chains, { chains: chains, selectedChains: selectedChains || [], pathname: pathname, subMenu: isMobile, variant: "secondary" })), sectors && sectors.length > 0 && ((0, jsx_runtime_1.jsx)(sectors_1.Sectors, { sectors: sectors, selectedSectors: selectedSectors || [], pathname: pathname, subMenu: isMobile, variant: "secondary" })), rounds && rounds.length > 0 && ((0, jsx_runtime_1.jsx)(rounds_1.Rounds, { rounds: rounds, selectedRounds: selectedRounds || [], pathname: pathname, subMenu: isMobile, variant: "secondary" })), (0, jsx_runtime_1.jsx)(RaisedRange_1.RaisedRange, { subMenu: isMobile, variant: "secondary" }), (0, jsx_runtime_1.jsx)(v2Base_1.ResetAllButton, __assign({ onClick: function () {
                    router.push('/raises');
                }, "data-variant": "secondary" }, { children: "Reset all filters" }))] }));
}
exports.RaisesFilterDropdowns = RaisesFilterDropdowns;
