"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var columns_1 = require("./columns");
var shared_1 = require("../shared");
var utils_1 = require("../../utils");
var columnSizesKeys = (0, utils_1.getColumnSizesKeys)(columns_1.columnSizes);
function YieldsLoopTable(_a) {
    var data = _a.data;
    return ((0, jsx_runtime_1.jsx)(shared_1.YieldsTableWrapper, { data: data, columns: columns_1.columns, columnSizes: columns_1.columnSizes, columnSizesKeys: columnSizesKeys, columnOrders: columns_1.yieldsColumnOrders }));
}
exports.default = YieldsLoopTable;
