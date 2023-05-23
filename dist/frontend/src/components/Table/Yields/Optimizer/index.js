"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var columns_1 = require("./columns");
var shared_1 = require("../shared");
var utils_1 = require("../../utils");
var columnSizesKeys = (0, utils_1.getColumnSizesKeys)(columns_1.columnSizes);
var defaultSortingState = [{ id: 'borrowAvailableUsd', desc: true }];
function YieldsOptimizerTable(_a) {
    var data = _a.data;
    var router = (0, router_1.useRouter)();
    var excludeRewardApy = router.query.excludeRewardApy;
    var columnVisibility = excludeRewardApy === 'true'
        ? {
            totalBase: true,
            lendingBase: true,
            borrowBase: true,
            totalReward: false,
            lendingReward: false,
            borrowReward: false
        }
        : {
            totalBase: false,
            lendingBase: false,
            borrowBase: false,
            totalReward: true,
            lendingReward: true,
            borrowReward: true
        };
    return ((0, jsx_runtime_1.jsx)(shared_1.YieldsTableWrapper, { data: data, columns: columns_1.columns, columnSizes: columns_1.columnSizes, columnSizesKeys: columnSizesKeys, columnOrders: columns_1.yieldsColumnOrders, sortingState: defaultSortingState, columnVisibility: columnVisibility }));
}
exports.default = YieldsOptimizerTable;
