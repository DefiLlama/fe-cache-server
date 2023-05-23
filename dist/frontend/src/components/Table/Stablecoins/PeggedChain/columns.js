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
exports.peggedChainsColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_feather_1 = require("react-feather");
var Link_1 = require("../../../../components/Link");
var Row_1 = require("../../../../components/Row");
var TokenLogo_1 = __importDefault(require("../../../../components/TokenLogo"));
var utils_1 = require("../../../../utils");
var shared_1 = require("../../shared");
exports.peggedChainsColumn = [
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
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, __assign({ depth: row.depth }, { children: [((_b = row.subRows) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0, jsx_runtime_1.jsx)(shared_1.AccordionButton, __assign({}, {
                        onClick: row.getToggleExpandedHandler()
                    }, { children: row.getIsExpanded() ? (0, jsx_runtime_1.jsx)(react_feather_1.ChevronDown, { size: 16 }) : (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16 }) }))), isSubRow ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)("span", { children: value })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.chainIconUrl)(value), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/stablecoins/".concat(value) }, { children: value }))] }))] })));
        },
        size: 200
    },
    {
        header: '7d Change',
        accessorKey: 'change_7d',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Stables Mcap',
        accessorKey: 'mcap',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedNum)(getValue(), true) });
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Dominant Stablecoin',
        accessorKey: 'dominance',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            if (!value) {
                return null;
            }
            return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "".concat(value.name, ": ") }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.formattedPercent)(value.value, true) })] })) }));
        },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Total Mcap Issued On',
        accessorKey: 'minted',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedNum)(getValue(), true) });
        },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Total Mcap Bridged To',
        accessorKey: 'bridgedTo',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedNum)(getValue(), true) });
        },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Stables Mcap/TVL',
        accessorKey: 'mcaptvl',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() && (0, utils_1.formattedNum)(getValue(), false) });
        },
        size: 120,
        meta: {
            align: 'end'
        }
    }
];
