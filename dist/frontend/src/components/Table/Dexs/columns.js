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
exports.columnSizes = exports.dexsTableColumnOrders = exports.volumesByChainsColumns = exports.dexsColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_feather_1 = require("react-feather");
var IconsRow_1 = __importDefault(require("../../../components/IconsRow"));
var Link_1 = require("../../../components/Link");
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var utils_1 = require("../../../utils");
var shared_1 = require("../shared");
var utils_2 = require("../utils");
exports.dexsColumn = [
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Name" }); },
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var _b;
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var splittedName = value.split(' - ');
            var name = splittedName.length > 1 ? splittedName.slice(0, splittedName.length - 1).join('') : value;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, __assign({ depth: row.depth }, { children: [((_b = row.subRows) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0, jsx_runtime_1.jsx)(shared_1.AccordionButton, __assign({}, {
                        onClick: row.getToggleExpandedHandler()
                    }, { children: row.getIsExpanded() ? (0, jsx_runtime_1.jsx)(react_feather_1.ChevronDown, { size: 16 }) : (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16 }) }))), (0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(name), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/dex/".concat((0, utils_1.slug)(name)) }, { children: "".concat(value) }))] })));
        },
        size: 240
    },
    {
        header: 'Chains',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: info.getValue(), url: "/dexs", iconType: "chain" }); },
        meta: {
            align: 'end'
        },
        size: 140
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
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: '1m Change',
        accessorKey: 'change_1m',
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: '24h volume',
        accessorKey: 'totalVolume24h',
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: "This colum shows yesterday's volume and it's updated daily at 00:00UTC"
        }
    },
    {
        header: 'Volume/TVL',
        accessorKey: 'volumetvl',
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedNum)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'This ratio can be interpreted as capital efficiency'
        }
    },
    {
        header: '% of total',
        accessorKey: 'dominance',
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue(), true) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    }
];
exports.volumesByChainsColumns = [
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Name" }); },
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.chainIconUrl)(value), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/dexs/".concat((0, utils_1.slug)(value)) }, { children: "".concat(value) }))] }));
        },
        size: 240
    },
    {
        header: '1d Change',
        accessorKey: 'changeVolume1d',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: '7d Change',
        accessorKey: 'changeVolume7d',
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: '1m Change',
        accessorKey: 'changeVolume30d',
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: '24h volume',
        accessorKey: 'totalVolume',
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: "This colum shows yesterday's volume and it's updated daily at 00:00UTC"
        }
    },
    {
        header: '24h dominance',
        accessorKey: 'dominance',
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue(), true) }); },
        size: 140,
        meta: {
            align: 'end'
        }
    }
];
// key: min width of window/screen
// values: table columns order
exports.dexsTableColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['name', 'totalVolume24h', 'change_7d', 'chains', 'change_1d', 'change_1m', 'volumetvl', 'dominance'],
    900: ['name', 'chains', 'change_1d', 'change_7d', 'change_1m', 'totalVolume24h', 'volumetvl', 'dominance']
});
exports.columnSizes = {
    0: {
        name: 140,
        chains: 140,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        totalVolume24h: 140,
        volumetvl: 140,
        dominance: 140
    },
    600: {
        name: 200,
        chains: 120,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        totalVolume24h: 140,
        volumetvl: 140,
        dominance: 140
    },
    900: {
        name: 240,
        chains: 140,
        change_1d: 140,
        change_7d: 140,
        change_1m: 140,
        totalVolume24h: 140,
        volumetvl: 140,
        dominance: 140
    }
};
