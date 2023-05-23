"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.largeTxsColumnSizes = exports.bridgeChainsColumnSizes = exports.bridgesColumnSizes = exports.bridgeAddressesColumnOrders = exports.bridgeTokensColumnOrders = exports.largeTxsColumnOrders = exports.bridgeChainsColumnOrders = exports.bridgesColumnOrders = exports.bridgeAddressesColumn = exports.bridgeTokensColumn = exports.largeTxsColumn = exports.bridgeChainsColumn = exports.bridgesColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var rebass_1 = require("rebass");
var IconsRow_1 = __importDefault(require("../../../../components/IconsRow"));
var Link_1 = require("../../../../components/Link");
var react_feather_1 = require("react-feather");
var Row_1 = require("../../../../components/Row");
var utils_1 = require("../../../../utils");
var TokenLogo_1 = __importDefault(require("../../../../components/TokenLogo"));
var utils_2 = require("../../utils");
var blockExplorers_1 = require("../../../../utils/bridges/blockExplorers");
exports.bridgesColumn = [
    {
        header: 'Name',
        accessorKey: 'displayName',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var linkValue = (0, utils_1.standardizeProtocolName)(value);
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            var rowValues = row.original;
            var icon = rowValues.icon;
            var iconLink;
            if (icon) {
                var _b = __read(rowValues.icon.split(':'), 2), iconType = _b[0], iconName = _b[1];
                iconLink = iconType === 'chain' ? (0, utils_1.chainIconUrl)(iconName) : (0, utils_1.tokenIconUrl)(iconName);
            }
            return ((0, jsx_runtime_1.jsxs)(Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), icon && (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: iconLink, "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/bridge/".concat(linkValue) }, { children: value }))] }));
        },
        size: 240
    },
    {
        header: 'Chains',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: getValue(), url: "/bridges", iconType: "chain" });
        },
        size: 200,
        meta: {
            align: 'end',
            headerHelperText: 'Chains are ordered by bridge volume on each chain'
        }
    },
    {
        header: '1d Change',
        accessorKey: 'change_1d',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: '24h Volume',
        accessorKey: 'lastDailyVolume',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '7d Volume',
        accessorKey: 'weeklyVolume',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '1m Volume',
        accessorKey: 'monthlyVolume',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '24h # of Txs',
        accessorKey: 'txsPrevDay',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() }); },
        size: 120,
        meta: {
            align: 'end'
        }
    }
];
exports.bridgeChainsColumn = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.chainIconUrl)(value), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/bridges/".concat(value) }, { children: value }))] }));
        },
        size: 240
    },
    {
        header: '24h Net Flow',
        accessorKey: 'prevDayNetFlow',
        cell: function (info) {
            var value = info.getValue();
            if (value) {
                return ((0, jsx_runtime_1.jsxs)(rebass_1.Text, __assign({ as: "span", color: value > 0 ? '#3fb950' : '#f85149' }, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] })));
            }
            return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ as: "span" }, { children: "$0" }));
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '24h Deposits',
        accessorKey: 'prevDayUsdWithdrawals',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '24h Withdrawals',
        accessorKey: 'prevDayUsdDeposits',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '7d Net Flow',
        accessorKey: 'prevWeekNetFlow',
        cell: function (info) {
            var value = info.getValue();
            if (value) {
                return ((0, jsx_runtime_1.jsxs)(rebass_1.Text, __assign({ as: "span", color: value > 0 ? '#3fb950' : '#f85149' }, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] })));
            }
            return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ as: "span" }, { children: "$0" }));
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '7d Deposits',
        accessorKey: 'prevWeekUsdWithdrawals',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '7d Withdrawals',
        accessorKey: 'prevWeekUsdDeposits',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '24h Top Deposit',
        accessorKey: 'topTokenWithdrawnSymbol',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            if (value) {
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: value });
            }
            else
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Not found" });
        },
        meta: {
            align: 'end'
        },
        size: 100
    }
];
exports.largeTxsColumn = [
    {
        header: 'Timestamp',
        accessorKey: 'date',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.toNiceDayAndHour)(info.getValue()) }); },
        size: 120
    },
    {
        header: 'Bridge',
        accessorKey: 'bridge',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            var linkValue = (0, utils_1.standardizeProtocolName)(value);
            return ((0, jsx_runtime_1.jsx)(Name, { children: (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/bridge/".concat(linkValue) }, { children: value })) }));
        },
        size: 180
    },
    {
        header: 'Deposit/Withdrawal',
        accessorKey: 'isDeposit',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            return ((0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ as: "span", color: value ? '#f85149' : '#3fb950' }, { children: value ? 'Withdrawal' : 'Deposit' })));
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Token',
        accessorKey: 'symbol',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            var splitValue = value.split('#');
            var _b = __read(splitValue, 2), symbol = _b[0], token = _b[1];
            var blockExplorerLink = (0, utils_1.getBlockExplorer)(token).blockExplorerLink;
            if (value) {
                return ((0, jsx_runtime_1.jsx)("a", __assign({ href: blockExplorerLink, target: "_blank", rel: "noopener noreferrer" }, { children: (0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ as: "span", gap: "0px", justify: "end" }, { children: [symbol, (0, jsx_runtime_1.jsx)(react_feather_1.ExternalLink, { size: 10 })] })) })));
            }
            else
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Not found" });
        },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Value',
        accessorKey: 'usdValue',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Explorer Link',
        accessorKey: 'txHash',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            var blockExplorerLink = (0, blockExplorers_1.getBlockExplorerForTx)(value).blockExplorerLink;
            if (value) {
                return ((0, jsx_runtime_1.jsx)("a", __assign({ href: blockExplorerLink, target: "_blank", rel: "noopener noreferrer" }, { children: (0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ as: "span", gap: "8px", justify: "end" }, { children: ["View Transaction", (0, jsx_runtime_1.jsx)(react_feather_1.ExternalLink, { size: 10 })] })) })));
            }
            else
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Not found" });
        },
        meta: {
            align: 'end'
        },
        size: 100
    }
];
exports.bridgeTokensColumn = [
    {
        header: 'Token',
        accessorKey: 'symbol',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            var splitValue = value.split('#');
            var _b = __read(splitValue, 2), symbol = _b[0], token = _b[1];
            var blockExplorerLink = (0, utils_1.getBlockExplorer)(token).blockExplorerLink;
            if (value) {
                return ((0, jsx_runtime_1.jsxs)(LinkToBlockExplorer, __assign({ href: blockExplorerLink, target: "_blank", rel: "noopener noreferrer" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: symbol }), (0, jsx_runtime_1.jsx)(react_feather_1.ExternalLink, { size: 10 })] })));
            }
            else
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Not found" });
        },
        size: 120
    },
    {
        header: 'Chain',
        id: 'chainName',
        cell: function (_a) {
            var row = _a.row;
            var value = row.original.symbol;
            var splitValue = value.split('#');
            var _b = __read(splitValue, 2), symbol = _b[0], token = _b[1];
            var chainName = (0, utils_1.getBlockExplorer)(token).chainName;
            return chainName;
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Deposited',
        accessorKey: 'withdrawn',
        cell: function (info) { var _a; return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)((_a = info.getValue()) !== null && _a !== void 0 ? _a : 0)] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Withdrawn',
        accessorKey: 'deposited',
        cell: function (info) { var _a; return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)((_a = info.getValue()) !== null && _a !== void 0 ? _a : 0)] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Total Volume',
        accessorKey: 'volume',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    }
];
exports.bridgeAddressesColumn = [
    {
        header: 'Address',
        accessorKey: 'address',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            var formattedValue = value.split(':')[1];
            var blockExplorerLink = (0, blockExplorers_1.getBlockExplorerForAddress)(value).blockExplorerLink;
            if (value) {
                return ((0, jsx_runtime_1.jsxs)(LinkToBlockExplorer, __assign({ href: blockExplorerLink, target: "_blank", rel: "noopener noreferrer" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: formattedValue.slice(0, 5) + '...' + formattedValue.slice(-4) }), (0, jsx_runtime_1.jsx)(react_feather_1.ExternalLink, { size: 10 })] })));
            }
            else
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Not found" });
        },
        size: 120
    },
    {
        header: 'Chain',
        id: 'chainName',
        cell: function (_a) {
            var row = _a.row;
            var value = row.original.address;
            var chainName = (0, blockExplorers_1.getBlockExplorerForAddress)(value).chainName;
            return chainName;
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Deposited',
        accessorKey: 'withdrawn',
        cell: function (info) { var _a; return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)((_a = info.getValue()) !== null && _a !== void 0 ? _a : 0)] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Withdrawn',
        accessorKey: 'deposited',
        cell: function (info) { var _a; return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)((_a = info.getValue()) !== null && _a !== void 0 ? _a : 0)] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Total Transactions',
        accessorKey: 'txs',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() }); },
        size: 120,
        meta: {
            align: 'end'
        }
    }
];
// key: min width of window/screen
// values: table columns order
exports.bridgesColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['displayName', 'lastDailyVolume', 'change_1d', 'weeklyVolume', 'monthlyVolume', 'chains', 'txsPrevDay'],
    1024: ['displayName', 'chains', 'change_1d', 'lastDailyVolume', 'weeklyVolume', 'monthlyVolume', 'txsPrevDay']
});
exports.bridgeChainsColumnOrders = (0, utils_2.formatColumnOrder)({
    0: [
        'name',
        'prevDayUsdWithdrawals',
        'prevDayUsdDeposits',
        'prevDayNetFlow',
        'prevWeekUsdWithdrawals',
        'prevWeekUsdDeposits',
        'prevWeekNetFlow',
        'topTokenWithdrawnSymbol'
    ],
    1024: [
        'name',
        'topTokenWithdrawnSymbol',
        'prevDayUsdWithdrawals',
        'prevDayUsdDeposits',
        'prevDayNetFlow',
        'prevWeekUsdWithdrawals',
        'prevWeekUsdDeposits',
        'prevWeekNetFlow'
    ]
});
exports.largeTxsColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['date', 'symbol', 'usdValue', 'isDeposit', 'bridge', 'txHash'],
    1024: ['date', 'bridge', 'isDeposit', 'symbol', 'usdValue', 'txHash']
});
exports.bridgeTokensColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['symbol', 'withdrawn', 'deposited', 'volume'],
    1024: ['symbol', 'withdrawn', 'deposited', 'volume']
});
exports.bridgeAddressesColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['address', 'withdrawn', 'deposited', 'txs'],
    1024: ['address', 'withdrawn', 'deposited', 'txs']
});
exports.bridgesColumnSizes = {
    0: {
        displayName: 140,
        chains: 180,
        change_1d: 100,
        lastDailyVolume: 120,
        weeklyVolume: 120,
        monthlyVolume: 120,
        txsPrevDay: 120
    },
    480: {
        displayName: 180,
        chains: 180,
        change_1d: 100,
        lastDailyVolume: 120,
        weeklyVolume: 120,
        monthlyVolume: 120,
        txsPrevDay: 120
    },
    1024: {
        displayName: 240,
        chains: 200,
        change_1d: 100,
        lastDailyVolume: 120,
        weeklyVolume: 120,
        monthlyVolume: 120,
        txsPrevDay: 120
    }
};
exports.bridgeChainsColumnSizes = {
    0: {
        name: 160,
        prevDayNetFlow: 120,
        prevDayUsdWithdrawals: 130,
        prevDayUsdDeposits: 130,
        prevWeekNetFlow: 120,
        prevWeekUsdWithdrawals: 130,
        prevWeekUsdDeposits: 130,
        topTokenWithdrawnSymbol: 140
    },
    480: {
        name: 180,
        prevDayNetFlow: 140,
        prevDayUsdWithdrawals: 150,
        prevDayUsdDeposits: 150,
        prevWeekNetFlow: 140,
        prevWeekUsdWithdrawals: 150,
        prevWeekUsdDeposits: 150,
        topTokenWithdrawnSymbol: 140
    },
    1024: {
        name: 180,
        prevDayNetFlow: 140,
        prevDayUsdWithdrawals: 150,
        prevDayUsdDeposits: 150,
        prevWeekNetFlow: 140,
        prevWeekUsdWithdrawals: 150,
        prevWeekUsdDeposits: 150,
        topTokenWithdrawnSymbol: 140
    }
};
exports.largeTxsColumnSizes = {
    0: {
        date: 120,
        bridge: 140,
        usdValue: 120,
        isDeposit: 140,
        symbol: 100,
        txHash: 160
    },
    480: {
        date: 120,
        bridge: 140,
        usdValue: 120,
        isDeposit: 140,
        symbol: 120,
        txHash: 160
    },
    1024: {
        date: 140,
        bridge: 160,
        usdValue: 120,
        isDeposit: 140,
        symbol: 120,
        txHash: 160
    }
};
var Name = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tposition: relative;\n\n\ta {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhitespace: nowrap;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tposition: relative;\n\n\ta {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhitespace: nowrap;\n\t}\n"])));
var LinkToBlockExplorer = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\n\tspan {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhitespace: nowrap;\n\t}\n\n\tsvg {\n\t\tflex-shrink: 0;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\n\tspan {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhitespace: nowrap;\n\t}\n\n\tsvg {\n\t\tflex-shrink: 0;\n\t}\n"])));
var templateObject_1, templateObject_2;
