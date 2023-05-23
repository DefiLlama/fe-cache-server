"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeesTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_table_1 = require("@tanstack/react-table");
var Table_1 = __importDefault(require("../Table"));
var columns_1 = require("./columns");
var useWindowSize_1 = __importDefault(require("../../../hooks/useWindowSize"));
function FeesTable(_a) {
    var data = _a.data;
    var _b = __read(React.useState([]), 2), sorting = _b[0], setSorting = _b[1];
    var _c = __read(React.useState([]), 2), columnOrder = _c[0], setColumnOrder = _c[1];
    var _d = __read(React.useState({}), 2), expanded = _d[0], setExpanded = _d[1];
    var windowSize = (0, useWindowSize_1.default)();
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns_1.feesColumn,
        state: {
            sorting: sorting,
            expanded: expanded,
            columnOrder: columnOrder
        },
        onExpandedChange: setExpanded,
        getSubRows: function (row) { return row.subRows; },
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        getExpandedRowModel: (0, react_table_1.getExpandedRowModel)()
    });
    React.useEffect(function () {
        var _a, _b;
        var defaultOrder = instance.getAllLeafColumns().map(function (d) { return d.id; });
        var order = windowSize.width
            ? (_b = (_a = columns_1.feesTableColumnOrders.find(function (_a) {
                var _b = __read(_a, 1), size = _b[0];
                return windowSize.width > size;
            })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : defaultOrder
            : defaultOrder;
        instance.setColumnOrder(order);
    }, [windowSize, instance]);
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance });
}
exports.FeesTable = FeesTable;
