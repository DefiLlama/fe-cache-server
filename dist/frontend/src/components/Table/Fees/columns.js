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
exports.feesTableColumnOrders = exports.feesColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_feather_1 = require("react-feather");
var Link_1 = require("../../../components/Link");
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var utils_1 = require("../../../utils");
var shared_1 = require("../shared");
var utils_2 = require("../utils");
exports.feesColumn = [
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Name" }); },
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var _b;
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var itemType = row.original.logo ? 'fees' : 'chain';
            var mappedValue = getValue() === 'AAVE V2' ? 'AAVE' : getValue();
            var logo = itemType === 'fees' ? (0, utils_1.tokenIconUrl)(mappedValue) : (0, utils_1.chainIconUrl)(mappedValue);
            var symbol = row.original.symbol !== '-' && !row.original.version ? " (".concat(row.original.symbol, ")") : '';
            var name = row.original.version ? "".concat(mappedValue, " ").concat(row.original.version) : "".concat(mappedValue);
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, __assign({ depth: row.depth }, { children: [((_b = row.subRows) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0, jsx_runtime_1.jsx)(shared_1.AccordionButton, __assign({}, {
                        onClick: row.getToggleExpandedHandler()
                    }, { children: row.getIsExpanded() ? (0, jsx_runtime_1.jsx)(react_feather_1.ChevronDown, { size: 16 }) : (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16 }) }))), (0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: logo }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/fees/".concat((0, utils_1.slug)(mappedValue)) }, { children: "".concat(name).concat(symbol) }))] })));
        },
        size: 200
    },
    {
        header: 'Category',
        accessorKey: 'category',
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Fees (24h)',
        accessorKey: 'total1dFees',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(getValue()) });
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Fees paid by protocol users (excluding gas fees)'
        }
    },
    {
        header: 'Revenue (24h)',
        accessorKey: 'total1dRevenue',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(getValue()) });
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Fees accrued to the protocol (going to either treasury or holders)'
        }
    }
];
// key: min width of window/screen
// values: table columns order
exports.feesTableColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['name', 'total1dFees', 'category', 'total1dRevenue', 'change_1d', 'change_1m', 'mcaptvl'],
    400: ['name', 'category', 'total1dFees', 'total1dRevenue', 'change_1d', 'change_1m', 'mcaptvl']
});
