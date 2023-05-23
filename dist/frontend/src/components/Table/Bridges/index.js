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
exports.BridgeAddressesTable = exports.BridgeTokensTable = exports.BridgesLargeTxsTable = exports.BridgeChainsTable = exports.BridgesTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_table_1 = require("@tanstack/react-table");
var Table_1 = __importDefault(require("../../../components/Table/Table"));
var columns_1 = require("./Bridges/columns");
var useWindowSize_1 = __importDefault(require("../../../hooks/useWindowSize"));
var columnSizesKeys = Object.keys(columns_1.bridgesColumnSizes)
    .map(function (x) { return Number(x); })
    .sort(function (a, b) { return Number(b) - Number(a); });
function BridgesTable(_a) {
    var data = _a.data;
    var _b = __read(React.useState([{ id: 'lastDailyVolume', desc: true }]), 2), sorting = _b[0], setSorting = _b[1];
    var _c = __read(React.useState([]), 2), columnOrder = _c[0], setColumnOrder = _c[1];
    var _d = __read(React.useState({}), 2), columnSizing = _d[0], setColumnSizing = _d[1];
    var windowSize = (0, useWindowSize_1.default)();
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns_1.bridgesColumn,
        state: {
            sorting: sorting,
            columnOrder: columnOrder,
            columnSizing: columnSizing
        },
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        onColumnSizingChange: setColumnSizing,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    React.useEffect(function () {
        var _a, _b;
        var defaultOrder = instance.getAllLeafColumns().map(function (d) { return d.id; });
        var order = windowSize.width
            ? (_b = (_a = columns_1.bridgesColumnOrders.find(function (_a) {
                var _b = __read(_a, 1), size = _b[0];
                return windowSize.width > size;
            })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : defaultOrder
            : defaultOrder;
        var cSize = windowSize.width
            ? columnSizesKeys.find(function (size) { return windowSize.width > Number(size); })
            : columnSizesKeys[0];
        instance.setColumnSizing(columns_1.bridgesColumnSizes[cSize]);
        instance.setColumnOrder(order);
    }, [windowSize, instance]);
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance });
}
exports.BridgesTable = BridgesTable;
function BridgeChainsTable(_a) {
    var data = _a.data;
    var _b = __read(React.useState([{ id: 'prevDayNetFlow', desc: true }]), 2), sorting = _b[0], setSorting = _b[1];
    var _c = __read(React.useState([]), 2), columnOrder = _c[0], setColumnOrder = _c[1];
    var _d = __read(React.useState({}), 2), columnSizing = _d[0], setColumnSizing = _d[1];
    var windowSize = (0, useWindowSize_1.default)();
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns_1.bridgeChainsColumn,
        state: {
            sorting: sorting,
            columnOrder: columnOrder,
            columnSizing: columnSizing
        },
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        onColumnSizingChange: setColumnSizing,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    React.useEffect(function () {
        var _a, _b;
        var defaultOrder = instance.getAllLeafColumns().map(function (d) { return d.id; });
        var order = windowSize.width
            ? (_b = (_a = columns_1.bridgeChainsColumnOrders.find(function (_a) {
                var _b = __read(_a, 1), size = _b[0];
                return windowSize.width > size;
            })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : defaultOrder
            : defaultOrder;
        var cSize = windowSize.width
            ? columnSizesKeys.find(function (size) { return windowSize.width > Number(size); })
            : columnSizesKeys[0];
        instance.setColumnSizing(columns_1.bridgeChainsColumnSizes[cSize]);
        instance.setColumnOrder(order);
    }, [windowSize, instance]);
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance });
}
exports.BridgeChainsTable = BridgeChainsTable;
function BridgesLargeTxsTable(_a) {
    var data = _a.data;
    var _b = __read(React.useState([{ id: 'date', desc: true }]), 2), sorting = _b[0], setSorting = _b[1];
    var _c = __read(React.useState([]), 2), columnOrder = _c[0], setColumnOrder = _c[1];
    var _d = __read(React.useState({}), 2), columnSizing = _d[0], setColumnSizing = _d[1];
    var windowSize = (0, useWindowSize_1.default)();
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns_1.largeTxsColumn,
        state: {
            sorting: sorting,
            columnOrder: columnOrder,
            columnSizing: columnSizing
        },
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        onColumnSizingChange: setColumnSizing,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    React.useEffect(function () {
        var _a, _b;
        var defaultOrder = instance.getAllLeafColumns().map(function (d) { return d.id; });
        var order = windowSize.width
            ? (_b = (_a = columns_1.largeTxsColumnOrders.find(function (_a) {
                var _b = __read(_a, 1), size = _b[0];
                return windowSize.width > size;
            })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : defaultOrder
            : defaultOrder;
        var cSize = windowSize.width
            ? columnSizesKeys.find(function (size) { return windowSize.width > Number(size); })
            : columnSizesKeys[0];
        instance.setColumnSizing(columns_1.largeTxsColumnSizes[cSize]);
        instance.setColumnOrder(order);
    }, [windowSize, instance]);
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance });
}
exports.BridgesLargeTxsTable = BridgesLargeTxsTable;
function BridgeTokensTable(_a) {
    var data = _a.data;
    var _b = __read(React.useState([{ id: 'volume', desc: true }]), 2), sorting = _b[0], setSorting = _b[1];
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns_1.bridgeTokensColumn,
        state: {
            sorting: sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance, skipVirtualization: true });
}
exports.BridgeTokensTable = BridgeTokensTable;
function BridgeAddressesTable(_a) {
    var data = _a.data;
    var _b = __read(React.useState([{ id: 'withdrawn', desc: true }]), 2), sorting = _b[0], setSorting = _b[1];
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns_1.bridgeAddressesColumn,
        state: {
            sorting: sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    return (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance, skipVirtualization: true });
}
exports.BridgeAddressesTable = BridgeAddressesTable;
