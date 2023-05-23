"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInvestorsList = exports.getRaisesFiltersList = void 0;
var swr_1 = __importDefault(require("swr"));
var constants_1 = require("../../../constants");
var useSWR_1 = require("../../../utils/useSWR");
function getRaisesFiltersList(data) {
    if (!data)
        return {
            investors: [],
            rounds: [],
            sectors: [],
            chains: []
        };
    var investors = new Set();
    var rounds = new Set();
    var sectors = new Set();
    var chains = new Set();
    data.raises.forEach(function (r) {
        r.leadInvestors.forEach(function (x) {
            investors.add(x.trim());
        });
        r.otherInvestors.forEach(function (x) {
            investors.add(x.trim());
        });
        if (r.round) {
            rounds.add(r.round.trim());
        }
        if (r.category) {
            sectors.add(r.category.trim());
        }
        if (r.chains) {
            r.chains.forEach(function (chain) { return chains.add(chain); });
        }
    });
    return {
        investors: Array.from(investors).sort(),
        rounds: Array.from(rounds).sort(),
        sectors: Array.from(sectors).sort(),
        chains: Array.from(chains).sort()
    };
}
exports.getRaisesFiltersList = getRaisesFiltersList;
function useInvestorsList() {
    var _a = (0, swr_1.default)(constants_1.RAISES_API, useSWR_1.fetcher), data = _a.data, error = _a.error;
    return {
        data: data,
        error: error,
        loading: !data && !error
    };
}
exports.useInvestorsList = useInvestorsList;
