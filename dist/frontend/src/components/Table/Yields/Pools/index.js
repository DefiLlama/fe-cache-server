"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var columns_1 = require("./columns");
var shared_1 = require("../shared");
var utils_1 = require("../../utils");
var columnSizesKeys = (0, utils_1.getColumnSizesKeys)(columns_1.columnSizes);
function YieldsPoolsTable(_a) {
    var data = _a.data;
    var router = (0, router_1.useRouter)();
    var _b = router.query, show7dBaseApy = _b.show7dBaseApy, show7dIL = _b.show7dIL, show1dVolume = _b.show1dVolume, show7dVolume = _b.show7dVolume, showInceptionApy = _b.showInceptionApy;
    var columnVisibility = {
        apyBase7d: show7dBaseApy === 'true',
        il7d: show7dIL === 'true',
        volumeUsd1d: show1dVolume === 'true',
        volumeUsd7d: show7dVolume === 'true',
        apyBaseInception: showInceptionApy === 'true'
    };
    return ((0, jsx_runtime_1.jsx)(shared_1.YieldsTableWrapper, { data: data, columns: columns_1.columns, columnSizes: columns_1.columnSizes, columnSizesKeys: columnSizesKeys, columnOrders: columns_1.yieldsColumnOrders, columnVisibility: columnVisibility }));
}
exports.default = YieldsPoolsTable;
