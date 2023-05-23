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
exports.YieldsTableWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_table_1 = require("@tanstack/react-table");
var Table_1 = __importDefault(require("../../../components/Table/Table"));
var useWindowSize_1 = __importDefault(require("../../../hooks/useWindowSize"));
var YieldsTableWrapper = function (_a) {
    var data = _a.data, columns = _a.columns, columnSizes = _a.columnSizes, columnSizesKeys = _a.columnSizesKeys, columnOrders = _a.columnOrders, skipVirtualization = _a.skipVirtualization, rowSize = _a.rowSize, columnVisibility = _a.columnVisibility, setColumnVisibility = _a.setColumnVisibility, _b = _a.sortingState, sortingState = _b === void 0 ? [] : _b;
    var _c = __read(React.useState(__spreadArray([], __read(sortingState), false)), 2), sorting = _c[0], setSorting = _c[1];
    var _d = __read(React.useState([]), 2), columnOrder = _d[0], setColumnOrder = _d[1];
    var _e = __read(React.useState({}), 2), columnSizing = _e[0], setColumnSizing = _e[1];
    var windowSize = (0, useWindowSize_1.default)();
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns,
        state: {
            sorting: sorting,
            columnOrder: columnOrder,
            columnSizing: columnSizing,
            columnVisibility: columnVisibility
        },
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        onColumnSizingChange: setColumnSizing,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    React.useEffect(function () {
        var _a, _b;
        var defaultOrder = instance.getAllLeafColumns().map(function (d) { return d.id; });
        var order = windowSize.width
            ? (_b = (_a = columnOrders.find(function (_a) {
                var _b = __read(_a, 1), size = _b[0];
                return windowSize.width > size;
            })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : defaultOrder
            : defaultOrder;
        var cSize = windowSize.width
            ? columnSizesKeys.find(function (size) { return windowSize.width > Number(size); })
            : columnSizesKeys[0];
        instance.setColumnSizing(columnSizes[cSize]);
        instance.setColumnOrder(order);
    }, [windowSize, instance, columnSizes, columnSizesKeys, columnOrders]);
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance, skipVirtualization: skipVirtualization, rowSize: rowSize });
};
exports.YieldsTableWrapper = YieldsTableWrapper;
