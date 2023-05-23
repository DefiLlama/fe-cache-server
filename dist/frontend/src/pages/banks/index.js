"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var layout_1 = __importDefault(require("../../layout"));
var final_json_1 = __importDefault(require("./final.json"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var dynamic_1 = __importDefault(require("next/dynamic"));
var utils_1 = require("../../utils");
var utils_2 = require("../../utils");
var TableWithSearch_1 = require("../../components/Table/TableWithSearch");
var react_table_1 = require("@tanstack/react-table");
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
var banksTableColumns = [
    {
        header: 'Name',
        accessorKey: '1',
        enableSorting: false,
        size: 220
    },
    {
        header: 'Closing date',
        accessorKey: 'date',
        sortingFn: react_table_1.sortingFns.datetime,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? (0, utils_2.toNiceDateYear)(getValue()) : '' });
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Assets',
        accessorKey: '6',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? '$' + (0, utils_1.formattedNum)(getValue() * 1e6) : '' });
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Assets (inflation adjusted)',
        accessorKey: '7',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? '$' + (0, utils_1.formattedNum)(getValue() * 1e6) : '' });
        },
        meta: {
            align: 'end'
        }
    }
];
var tableData = final_json_1.default.banks.map(function (b) {
    b.date = new Date(b[4]).getTime() / 1e3;
    return b;
});
var Banks = function () {
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Bank Failures" }, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartWrapper, { children: (0, jsx_runtime_1.jsx)(BarChart, { chartData: Object.entries(final_json_1.default.years).map(function (t) { return [new Date(t[0]).getTime() / 1e3, t[1] * 1e6]; }), title: "Assets of failed banks (inflation adjusted)", valueSymbol: "$" }) }), (0, jsx_runtime_1.jsx)(TableWithSearch_1.TableWithSearch, { data: tableData, columns: banksTableColumns, placeholder: "Search banks...", columnToSearch: '1' })] })));
};
exports.default = Banks;
