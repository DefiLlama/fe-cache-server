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
exports.TableWithSearch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_table_1 = require("@tanstack/react-table");
var Table_1 = __importDefault(require("../../components/Table/Table"));
var shared_1 = require("./shared");
function TableWithSearch(_a) {
    var data = _a.data, columns = _a.columns, placeholder = _a.placeholder, columnToSearch = _a.columnToSearch;
    var _b = __read(React.useState([]), 2), columnFilters = _b[0], setColumnFilters = _b[1];
    var _c = __read(React.useState([]), 2), sorting = _c[0], setSorting = _c[1];
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns,
        state: {
            sorting: sorting,
            columnFilters: columnFilters
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    var _d = __read(React.useState(''), 2), projectName = _d[0], setProjectName = _d[1];
    React.useEffect(function () {
        var columns = instance.getColumn(columnToSearch);
        var id = setTimeout(function () {
            columns.setFilterValue(projectName);
        }, 200);
        return function () { return clearTimeout(id); };
    }, [projectName, instance, columnToSearch]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(shared_1.TableFiltersWithInput, { children: [(0, jsx_runtime_1.jsx)(shared_1.SearchIcon, { size: 16 }), (0, jsx_runtime_1.jsx)("input", { value: projectName, onChange: function (e) {
                            setProjectName(e.target.value);
                        }, placeholder: placeholder })] }), (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance })] }));
}
exports.TableWithSearch = TableWithSearch;
