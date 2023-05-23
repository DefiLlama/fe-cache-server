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
exports.ProtocolsByToken = exports.TopGainersAndLosers = exports.RecentlyListedProtocolsTable = exports.ProtocolsTableWithSearch = exports.ProtocolsTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_table_1 = require("@tanstack/react-table");
var Table_1 = __importDefault(require("../../../../components/Table/Table"));
var columns_1 = require("./columns");
var useWindowSize_1 = __importDefault(require("../../../../hooks/useWindowSize"));
var router_1 = require("next/router");
var shared_1 = require("../../shared");
var columnSizesKeys = Object.keys(columns_1.columnSizes)
    .map(function (x) { return Number(x); })
    .sort(function (a, b) { return Number(b) - Number(a); });
function ProtocolsTable(_a) {
    var data = _a.data, addlColumns = _a.addlColumns, removeColumns = _a.removeColumns;
    var _b = __read(React.useState([{ desc: true, id: 'tvl' }]), 2), sorting = _b[0], setSorting = _b[1];
    var _c = __read(React.useState([]), 2), columnOrder = _c[0], setColumnOrder = _c[1];
    var _d = __read(React.useState({}), 2), columnSizing = _d[0], setColumnSizing = _d[1];
    var _e = __read(React.useState({}), 2), expanded = _e[0], setExpanded = _e[1];
    var windowSize = (0, useWindowSize_1.default)();
    var columnsData = React.useMemo(function () {
        return addlColumns || removeColumns
            ? __spreadArray(__spreadArray([], __read(columns_1.protocolsColumns.filter(function (c) { return !(removeColumns !== null && removeColumns !== void 0 ? removeColumns : []).includes(c.accessorKey); })), false), __read((addlColumns !== null && addlColumns !== void 0 ? addlColumns : []).map(function (x) { return columns_1.protocolAddlColumns[x]; })), false) : columns_1.protocolsColumns;
    }, [addlColumns, removeColumns]);
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columnsData,
        state: {
            sorting: sorting,
            expanded: expanded,
            columnOrder: columnOrder,
            columnSizing: columnSizing
        },
        onExpandedChange: setExpanded,
        getSubRows: function (row) { return row.subRows; },
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        onColumnSizingChange: setColumnSizing,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        getExpandedRowModel: (0, react_table_1.getExpandedRowModel)()
    });
    React.useEffect(function () {
        var _a, _b;
        var defaultOrder = instance.getAllLeafColumns().map(function (d) { return d.id; });
        var order = windowSize.width
            ? (_b = (_a = columns_1.columnOrders.find(function (_a) {
                var _b = __read(_a, 1), size = _b[0];
                return windowSize.width > size;
            })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : defaultOrder
            : defaultOrder;
        var cSize = windowSize.width
            ? columnSizesKeys.find(function (size) { return windowSize.width > Number(size); })
            : columnSizesKeys[0];
        instance.setColumnSizing(columns_1.columnSizes[cSize]);
        instance.setColumnOrder(order);
    }, [windowSize, instance]);
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance });
}
exports.ProtocolsTable = ProtocolsTable;
function ProtocolsTableWithSearch(_a) {
    var data = _a.data, addlColumns = _a.addlColumns, removeColumns = _a.removeColumns;
    var _b = __read(React.useState([{ desc: true, id: 'tvl' }]), 2), sorting = _b[0], setSorting = _b[1];
    var _c = __read(React.useState([]), 2), columnOrder = _c[0], setColumnOrder = _c[1];
    var _d = __read(React.useState({}), 2), columnSizing = _d[0], setColumnSizing = _d[1];
    var _e = __read(React.useState([]), 2), columnFilters = _e[0], setColumnFilters = _e[1];
    var _f = __read(React.useState({}), 2), expanded = _f[0], setExpanded = _f[1];
    var windowSize = (0, useWindowSize_1.default)();
    var columnsData = React.useMemo(function () {
        return addlColumns || removeColumns
            ? __spreadArray(__spreadArray([], __read(columns_1.protocolsColumns.filter(function (c) { return !(removeColumns !== null && removeColumns !== void 0 ? removeColumns : []).includes(c.accessorKey); })), false), __read((addlColumns !== null && addlColumns !== void 0 ? addlColumns : []).map(function (x) { return columns_1.protocolAddlColumns[x]; })), false) : columns_1.protocolsColumns;
    }, [addlColumns, removeColumns]);
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columnsData,
        state: {
            sorting: sorting,
            expanded: expanded,
            columnOrder: columnOrder,
            columnSizing: columnSizing,
            columnFilters: columnFilters
        },
        onExpandedChange: setExpanded,
        getSubRows: function (row) { return row.subRows; },
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        onColumnSizingChange: setColumnSizing,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        getExpandedRowModel: (0, react_table_1.getExpandedRowModel)()
    });
    React.useEffect(function () {
        var _a, _b;
        var defaultOrder = instance.getAllLeafColumns().map(function (d) { return d.id; });
        var order = windowSize.width
            ? (_b = (_a = columns_1.columnOrders.find(function (_a) {
                var _b = __read(_a, 1), size = _b[0];
                return windowSize.width > size;
            })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : defaultOrder
            : defaultOrder;
        var cSize = windowSize.width
            ? columnSizesKeys.find(function (size) { return windowSize.width > Number(size); })
            : columnSizesKeys[0];
        instance.setColumnSizing(columns_1.columnSizes[cSize]);
        instance.setColumnOrder(order);
    }, [windowSize, instance]);
    var _g = __read(React.useState(''), 2), projectName = _g[0], setProjectName = _g[1];
    React.useEffect(function () {
        var columns = instance.getColumn('name');
        var id = setTimeout(function () {
            columns.setFilterValue(projectName);
        }, 200);
        return function () { return clearTimeout(id); };
    }, [projectName, instance]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(shared_1.TableFiltersWithInput, { children: [(0, jsx_runtime_1.jsx)(shared_1.SearchIcon, { size: 16 }), (0, jsx_runtime_1.jsx)("input", { value: projectName, onChange: function (e) {
                            setProjectName(e.target.value);
                        }, placeholder: "Search protocols..." })] }), (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance })] }));
}
exports.ProtocolsTableWithSearch = ProtocolsTableWithSearch;
function RecentlyListedProtocolsTable(_a) {
    var data = _a.data;
    var _b = __read(React.useState([{ desc: true, id: 'listedAt' }]), 2), sorting = _b[0], setSorting = _b[1];
    var _c = __read(React.useState({}), 2), columnSizing = _c[0], setColumnSizing = _c[1];
    var _d = __read(React.useState({}), 2), expanded = _d[0], setExpanded = _d[1];
    var windowSize = (0, useWindowSize_1.default)();
    var router = (0, router_1.useRouter)();
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: router.pathname === '/airdrops' ? columns_1.airdropsColumns : columns_1.recentlyListedProtocolsColumns,
        state: {
            sorting: sorting,
            expanded: expanded,
            columnSizing: columnSizing
        },
        onExpandedChange: setExpanded,
        getSubRows: function (row) { return row.subRows; },
        onSortingChange: setSorting,
        onColumnSizingChange: setColumnSizing,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        getExpandedRowModel: (0, react_table_1.getExpandedRowModel)()
    });
    React.useEffect(function () {
        var cSize = windowSize.width
            ? columnSizesKeys.find(function (size) { return windowSize.width > Number(size); })
            : columnSizesKeys[0];
        instance.setColumnSizing(columns_1.columnSizes[cSize]);
    }, [windowSize, instance]);
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance });
}
exports.RecentlyListedProtocolsTable = RecentlyListedProtocolsTable;
function TopGainersAndLosers(_a) {
    var data = _a.data;
    var _b = __read(React.useState([]), 2), sorting = _b[0], setSorting = _b[1];
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns_1.topGainersAndLosersColumns,
        state: {
            sorting: sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance });
}
exports.TopGainersAndLosers = TopGainersAndLosers;
function ProtocolsByToken(_a) {
    var data = _a.data;
    var _b = __read(React.useState([{ desc: true, id: 'amountUsd' }]), 2), sorting = _b[0], setSorting = _b[1];
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns_1.protocolsByTokenColumns,
        state: {
            sorting: sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance });
}
exports.ProtocolsByToken = ProtocolsByToken;
