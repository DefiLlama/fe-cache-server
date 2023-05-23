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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columnSizes = exports.assetByChainColumnOrders = exports.peggedAssetByChainColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_feather_1 = require("react-feather");
var Link_1 = require("../../../../components/Link");
var TokenLogo_1 = __importDefault(require("../../../../components/TokenLogo"));
var shared_1 = require("../../shared");
var utils_1 = require("../../../../utils");
var utils_2 = require("../../utils");
exports.peggedAssetByChainColumn = [
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Name" }); },
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var _b;
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            var isSubRow = value.startsWith('Bridged from');
            var symbol = row.original.symbol && row.original.symbol !== '-' ? " (".concat(row.original.symbol, ")") : '';
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, __assign({ depth: row.depth }, { children: [((_b = row.subRows) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0, jsx_runtime_1.jsx)(shared_1.AccordionButton, __assign({}, {
                        onClick: row.getToggleExpandedHandler()
                    }, { children: row.getIsExpanded() ? (0, jsx_runtime_1.jsx)(react_feather_1.ChevronDown, { size: 16 }) : (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16 }) }))), isSubRow ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "-" }), (0, jsx_runtime_1.jsx)("span", { children: value })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.chainIconUrl)(value), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/stablecoins/".concat(value) }, { children: value + symbol }))] }))] })));
        },
        size: 280
    },
    {
        header: 'Bridge',
        accessorKey: 'bridgeInfo',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: value.link ? (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: value.link }, { children: value.name })) : (0, jsx_runtime_1.jsx)("span", { children: value.name }) });
        },
        size: 240,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Bridged Amount',
        accessorKey: 'bridgedAmount',
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: '1d Change',
        accessorKey: 'change_1d',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: '7d Change',
        accessorKey: 'change_7d',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: '1m Change',
        accessorKey: 'change_1m',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Total Circulating',
        accessorKey: 'circulating',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedNum)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    }
];
// key: min width of window/screen
// values: table columns order
exports.assetByChainColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['name', 'change_7d', 'circulating', 'change_1d', 'change_1m', 'bridgeInfo', 'bridgedAmount'],
    480: ['name', 'change_7d', 'circulating', 'change_1d', 'change_1m', 'bridgeInfo', 'bridgedAmount'],
    1024: ['name', 'bridgeInfo', 'bridgedAmount', 'change_1d', 'change_7d', 'change_1m', 'circulating']
});
exports.columnSizes = {
    0: {
        name: 160,
        bridgeInfo: 240,
        bridgedAmount: 140,
        change_1d: 100,
        change_7d: 100,
        change_1m: 100,
        circulating: 100
    },
    900: {
        name: 280,
        bridgeInfo: 240,
        bridgedAmount: 140,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        circulating: 140
    }
};
