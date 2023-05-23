"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feesColumnSizes = exports.feesTableColumnOrders = exports.volumesColumnSizes = exports.volumesTableColumnOrders = exports.feesColumns = exports.incentivesColumns = exports.aggregatorsColumns = exports.optionsColumns = exports.derivativesColumns = exports.volumesColumns = exports.getColumnsOrdernSizeByType = exports.getColumnsByType = void 0;
var utils_1 = require("../../utils");
var common_1 = require("./common");
var getColumnsByType = function (type, allChains) {
    switch (type) {
        case 'dexs':
            return (0, exports.volumesColumns)(allChains);
        case 'fees':
            return (0, exports.feesColumns)(allChains);
        case 'incentives':
            return (0, exports.incentivesColumns)(allChains);
        case 'options':
            return (0, exports.optionsColumns)(allChains);
        case 'aggregators':
            return (0, exports.aggregatorsColumns)(allChains);
        case 'derivatives':
            return (0, exports.derivativesColumns)(allChains);
        default:
            return (0, exports.volumesColumns)(allChains);
    }
};
exports.getColumnsByType = getColumnsByType;
var getColumnsOrdernSizeByType = function (type) {
    switch (type) {
        case 'volumes':
            return {
                order: exports.volumesTableColumnOrders,
                size: exports.volumesColumnSizes
            };
        case 'fees':
            return {
                order: exports.feesTableColumnOrders,
                size: exports.feesColumnSizes
            };
        default:
            return {
                order: exports.volumesTableColumnOrders,
                size: exports.volumesColumnSizes
            };
    }
};
exports.getColumnsOrdernSizeByType = getColumnsOrdernSizeByType;
var volumesColumns = function (allChains) {
    return [
        (0, common_1.NameColumn)('dexs', allChains),
        allChains ? undefined : (0, common_1.ChainsColumn)('dexs'),
        // Change1dColumn,
        // Change7dColumn,
        // Change1mColumn,
        (0, common_1.ChangeColumn)('Weekly change', 'change_7dover7d', 160, 'Change of last 7d volume over the previous 7d volume'),
        (0, common_1.Total24hColumn)('Volume', undefined, "Yesterday's volume, updated daily at 00:00UTC"),
        (0, common_1.Total24hColumn)('Volume', 'total7d', "Cumulative last 7d volume", undefined, 'Volume (7d)'),
        common_1.TVLColumn,
        (0, common_1.TotalAllTimeColumn)('volume'),
        allChains ? undefined : common_1.VolumeTVLColumn,
        common_1.DominanceColumn
    ].filter(function (c) { return c !== undefined; });
};
exports.volumesColumns = volumesColumns;
var derivativesColumns = function (allChains) {
    return [
        (0, common_1.NameColumn)('derivatives', allChains),
        allChains ? undefined : (0, common_1.ChainsColumn)('derivatives'),
        common_1.Change1dColumn,
        common_1.Change7dColumn,
        common_1.Change1mColumn,
        (0, common_1.Total24hColumn)('Volume', undefined, "Yesterday's volume, updated daily at 00:00UTC"),
        (0, common_1.TotalAllTimeColumn)('volume'),
        allChains ? undefined : common_1.VolumeTVLColumn,
        common_1.DominanceColumn
    ].filter(function (c) { return c !== undefined; });
};
exports.derivativesColumns = derivativesColumns;
var optionsColumns = function (allChains) {
    return [
        (0, common_1.NameColumn)('options', allChains),
        allChains ? undefined : (0, common_1.ChainsColumn)('options'),
        common_1.Change1dColumn,
        common_1.Change7dColumn,
        common_1.Change1mColumn,
        (0, common_1.Total24hColumn)('Volume', undefined, "Yesterday's volume, updated daily at 00:00UTC"),
        (0, common_1.TotalAllTimeColumn)('volume'),
        allChains ? undefined : common_1.VolumeTVLColumn,
        common_1.DominanceColumn
    ].filter(function (c) { return c !== undefined; });
};
exports.optionsColumns = optionsColumns;
var aggregatorsColumns = function (allChains) {
    return [
        (0, common_1.NameColumn)('aggregators', allChains),
        allChains ? undefined : (0, common_1.ChainsColumn)('aggregators'),
        common_1.Change1dColumn,
        common_1.Change7dColumn,
        common_1.Change1mColumn,
        (0, common_1.Total24hColumn)('Volume', undefined, "Yesterday's volume, updated daily at 00:00UTC"),
        (0, common_1.TotalAllTimeColumn)('volume'),
        common_1.DominanceColumn
    ].filter(function (c) { return c !== undefined; });
};
exports.aggregatorsColumns = aggregatorsColumns;
var incentivesColumns = function (allChains) {
    return [
        (0, common_1.NameColumn)('incentives', allChains),
        allChains ? undefined : (0, common_1.ChainsColumn)('incentives'),
        common_1.Change1dColumn,
        common_1.Change7dColumn,
        common_1.Change1mColumn,
        (0, common_1.Total24hColumn)('Incentives', undefined, "Yesterday's volume, updated daily at 00:00UTC")
    ].filter(function (c) { return c !== undefined; });
};
exports.incentivesColumns = incentivesColumns;
var feesColumns = function (allChains) {
    return [
        (0, common_1.NameColumn)('fees', allChains),
        allChains ? undefined : (0, common_1.ChainsColumn)('fees'),
        allChains ? undefined : common_1.CategoryColumn,
        (0, common_1.Total24hColumn)('Fees', undefined, undefined, 140),
        allChains ? undefined : (0, common_1.Total24hColumn)('Revenue', 'revenue24h', undefined, 160),
        allChains ? undefined : (0, common_1.Total24hColumn)('Holders revenue', 'dailyHoldersRevenue', undefined, 190),
        allChains ? undefined : (0, common_1.Total24hColumn)('Market Cap', 'mcap', undefined, undefined, 'Market Cap'),
        (0, common_1.Total24hColumn)('Fees', 'total7d', "Cumulative last 7d fees", undefined, 'Fees (7d)'),
        (0, common_1.Total24hColumn)('Fees', 'total30d', "Cumulative last 30d fees", undefined, 'Fees (30d)'),
        allChains ? undefined : (0, common_1.Total24hColumn)('Revenue', 'revenue7d', "Cumulative last 7d revenue", 150, 'Revenue (7d)'),
        allChains ? undefined : (0, common_1.Total24hColumn)('Fees', 'revenue30d', "Cumulative last 30d revenue", 160, 'Revenue (30d)'),
        // TotalAllTimeColumn('fees') tmp
        allChains ? undefined : (0, common_1.Total24hColumn)('User fees', 'dailyUserFees', undefined, 150),
        allChains ? undefined : (0, common_1.Total24hColumn)('Treasury revenue', 'dailyProtocolRevenue', undefined, 190),
        // Total24hColumn('Creator revenue', 'dailyCreatorRevenue', undefined, 190),
        allChains ? undefined : (0, common_1.Total24hColumn)('Supply side revenue', 'dailySupplySideRevenue', undefined, 220),
        // Total24hColumn('Total fees', 'dailyTotalFees', undefined, 220),
        // Total24hColumn('Total revenue', 'dailyTotalRevenue', undefined, 220)
        // ChangeColumn('Weekly change', 'change_7dover7d', 160, 'Change of last 7d fees over the previous 7d fees'),
        // ChangeColumn('Monthly change', 'change_30dover30d', 160, 'Change of last 30d fees over the previous 30d fees'),
        (0, common_1.TotalAllTimeColumn)('fees')
    ].filter(function (c) { return c !== undefined; });
};
exports.feesColumns = feesColumns;
// key: min width of window/screen
// values: table columns order
exports.volumesTableColumnOrders = (0, utils_1.formatColumnOrder)({
    0: [
        'displayName',
        'name',
        'chains',
        'change_7dover7d',
        'total24h',
        'total7d',
        'change_7d',
        'change_1d',
        'change_1m',
        'tvl',
        'volumetvl',
        'dominance',
        'totalAllTime'
    ],
    900: [
        'displayName',
        'name',
        'chains',
        'change_7dover7d',
        'change_1d',
        'change_7d',
        'change_1m',
        'total24h',
        'total7d',
        'tvl',
        'volumetvl',
        'dominance',
        'totalAllTime'
    ]
});
exports.volumesColumnSizes = {
    0: {
        name: 140,
        chains: 140,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        total24h: 160,
        volumetvl: 140,
        dominance: 100
    },
    600: {
        name: 200,
        chains: 120,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        total24h: 160,
        volumetvl: 140,
        dominance: 100
    },
    900: {
        name: 240,
        chains: 140,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        total24h: 160,
        volumetvl: 140,
        dominance: 100
    }
};
// key: min width of window/screen
// values: table columns order
exports.feesTableColumnOrders = (0, utils_1.formatColumnOrder)({
    0: [
        'displayName',
        'name',
        'chains',
        'total1dFees',
        'category',
        'total1dRevenue',
        'change_1d',
        'change_1m',
        'total24h',
        'revenue24h',
        'dailyHoldersRevenue',
        'mcap',
        'total7d',
        'change_7dover7d',
        'total30d',
        'change_30dover30d',
        'revenue7d',
        'revenue30d',
        'dailyRevenue',
        'dailyProtocolRevenue',
        'dailySupplySideRevenue',
        'dailyUserFees',
        'dailyCreatorRevenue',
        'totalAllTime'
    ],
    400: [
        'displayName',
        'name',
        'chains',
        'category',
        'total1dFees',
        'total1dRevenue',
        'change_1d',
        'change_1m',
        'total24h',
        'revenue24h',
        'dailyHoldersRevenue',
        'mcap',
        'total7d',
        'change_7dover7d',
        'total30d',
        'change_30dover30d',
        'revenue7d',
        'revenue30d',
        'dailyRevenue',
        'dailyProtocolRevenue',
        'dailySupplySideRevenue',
        'dailyUserFees',
        'dailyCreatorRevenue',
        'totalAllTime'
    ]
});
exports.feesColumnSizes = {
    0: {
        name: 140,
        chains: 140,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        total24h: 140,
        volumetvl: 140,
        dominance: 140
    },
    600: {
        name: 200,
        chains: 120,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        total24h: 140,
        volumetvl: 140,
        dominance: 140
    },
    900: {
        name: 240,
        chains: 140,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        total24h: 140,
        volumetvl: 140,
        dominance: 140
    }
};
