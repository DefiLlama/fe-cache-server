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
exports.liquidatablePositionsColumns = exports.liquidatableProtocolsColumns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_feather_1 = require("react-feather");
var swr_1 = __importDefault(require("swr"));
var Link_1 = require("../../../components/Link");
var utils_1 = require("../../../components/LiquidationsPage/utils");
var Row_1 = require("../../../components/Row");
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var constants_1 = require("../../../constants");
var utils_2 = require("../../../utils");
var liquidations_1 = require("../../../utils/liquidations");
var useSWR_1 = require("../../../utils/useSWR");
var shared_1 = require("../shared");
exports.liquidatableProtocolsColumns = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return (0, jsx_runtime_1.jsx)(NameCell, { value: value, index: index });
        },
        size: 120
    },
    {
        header: '24h Change',
        accessorKey: 'changes24h',
        cell: function (info) {
            var value = info.getValue();
            var isNegative = value < 0;
            var isZero = value === 0;
            var isSmol = Math.abs(value) < 0.01;
            if (isZero || !value) {
                return (0, jsx_runtime_1.jsx)("span", { children: "-" });
            }
            if (isSmol) {
                return ((0, jsx_runtime_1.jsxs)("span", __assign({ style: { color: isNegative ? '#F56565' : '#48BB78' } }, { children: ['<', isNegative ? '-' : '+', '0.01%'] })));
            }
            var _value = value.toFixed(2);
            return ((0, jsx_runtime_1.jsxs)("span", __assign({ style: { color: isNegative ? '#F56565' : '#48BB78' } }, { children: [isNegative ? '' : '+', _value, "%"] })));
        },
        meta: {
            align: 'end',
            headerHelperText: 'Liquidatable amount change in the last 24 hours.'
        }
    },
    {
        header: 'Liquidatable Amount',
        accessorKey: 'liquidableAmount',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            var _value = (0, liquidations_1.getReadableValue)(getValue());
            return (0, jsx_runtime_1.jsxs)("span", { children: ["$", _value] });
        },
        meta: {
            align: 'end',
            headerHelperText: 'The USD value of all the collateral that would be sold if all positions went into liquidation.'
        }
    },
    {
        header: 'Amount within -20%',
        accessorKey: 'dangerousAmount',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            var _value = (0, liquidations_1.getReadableValue)(getValue());
            return (0, jsx_runtime_1.jsxs)("span", { children: ["$", _value] });
        },
        meta: {
            align: 'end',
            headerHelperText: 'Amount of liquidable positions that are within -20% of liquidation price.'
        }
    }
];
exports.liquidatablePositionsColumns = [
    {
        header: 'Protocol',
        accessorKey: 'protocolName',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return (0, jsx_runtime_1.jsx)(ProtocolName, { value: value, index: index });
        },
        size: 120
    },
    {
        header: 'Chain',
        accessorKey: 'chainName',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            return (0, jsx_runtime_1.jsx)(ChainName, { value: value });
        },
        size: 120
    },
    {
        header: 'Owner',
        accessorKey: 'owner',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            if (typeof value !== 'object') {
                return (0, jsx_runtime_1.jsx)("span", { children: value });
            }
            // cut middle, leave only first 6 and last 4 letters
            return ((0, jsx_runtime_1.jsx)("a", __assign({ href: value.url, target: "_blank", rel: "noopener noreferrer" }, { children: (0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ as: "span", gap: "8px" }, { children: [value.displayName.length > 13
                            ? "".concat(value.displayName.substring(0, 6), "...").concat(value.displayName.substring(value.displayName.length - 4))
                            : value.displayName, (0, jsx_runtime_1.jsx)(react_feather_1.ExternalLink, { size: 10 })] })) })));
        }
    },
    {
        header: 'Value in USD',
        accessorKey: 'value',
        cell: function (_a) {
            var getValue = _a.getValue;
            var _value = getValue().toLocaleString();
            return (0, jsx_runtime_1.jsxs)("span", { children: ["$", _value] });
        }
    },
    {
        header: 'Token Amount',
        accessorKey: 'amount',
        cell: function (_a) {
            var getValue = _a.getValue;
            var _value = getValue().toLocaleString();
            return (0, jsx_runtime_1.jsx)("span", { children: _value });
        }
    },
    {
        header: 'Liquidation Price',
        accessorKey: 'liqPrice',
        cell: function (_a) {
            var getValue = _a.getValue;
            var _value = getValue().toLocaleString();
            return ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsxs)("b", { children: ["$", _value] }) }));
        },
        meta: {
            headerHelperText: 'Liquidation price in USD.'
        }
    }
];
var ProtocolName = function (_a) {
    var value = _a.value, index = _a.index;
    var _value;
    switch (value) {
        case 'traderjoe':
            _value = 'trader-joe';
            break;
        case 'benqi':
            _value = 'benqi-lending';
            break;
        case 'maker':
            _value = 'makerdao';
            break;
        default:
            _value = value;
    }
    var data = (0, swr_1.default)("".concat(constants_1.CONFIG_API, "/smol/").concat(_value), useSWR_1.fetcher).data;
    if (!data)
        return (0, jsx_runtime_1.jsx)("span", { children: _value });
    return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: data.logo, "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocol/".concat(_value) }, { children: data.name }))] }));
};
var ChainName = function (_a) {
    var value = _a.value, index = _a.index;
    var data = (0, swr_1.default)("".concat(constants_1.CHAINS_API), useSWR_1.fetcher).data;
    if (!data)
        return (0, jsx_runtime_1.jsx)("span", { children: value });
    var _value = value;
    if (value === 'bsc') {
        _value = 'binance';
    }
    var name = (data.find(function (chain) { return chain.name.toLowerCase() === _value.toLowerCase(); }) || {}).name;
    var _name = name;
    if (value === 'bsc') {
        _name = 'BSC';
    }
    return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(index || index === 0) && (0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_2.chainIconUrl)(name), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/chain/".concat(_name) }, { children: _name }))] }));
};
var NameCell = function (props) {
    var stackBy = (0, utils_1.useStackBy)();
    if (stackBy === 'protocols') {
        return (0, jsx_runtime_1.jsx)(ProtocolName, __assign({}, props));
    }
    return (0, jsx_runtime_1.jsx)(ChainName, __assign({}, props));
};
