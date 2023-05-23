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
exports.yieldsColumnOrders = exports.columnSizes = exports.columns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var IconsRow_1 = __importDefault(require("../../../../components/IconsRow"));
var utils_1 = require("../../../../utils");
var Row_1 = require("../../../../components/Row");
var Name_1 = require("../Name");
var utils_2 = require("../../utils");
var QuestionHelper_1 = __importDefault(require("../../../../components/QuestionHelper"));
var utils_3 = require("../../../../components/YieldsPage/utils");
var ColoredAPY_1 = require("../ColoredAPY");
exports.columns = [
    {
        header: 'Pool',
        accessorKey: 'pool',
        enableSorting: false,
        cell: function (_a) {
            var row = _a.row, table = _a.table;
            var name = "".concat(row.original.symbol, " \u279E ").concat(row.original.borrow.symbol);
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsx)(Name_1.NameYieldPool, { withoutLink: true, value: name, configID: row.original.configID, url: row.original.url, index: index + 1, borrow: true, maxCharacters: 15 }));
        },
        size: 400
    },
    {
        header: function () { return (0, jsx_runtime_1.jsx)("span", __assign({ style: { paddingLeft: '32px' } }, { children: "Project" })); },
        accessorKey: 'project',
        enableSorting: false,
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)(Name_1.NameYield, { withoutLink: true, project: row.original.projectName, projectslug: row.original.projectslug, airdrop: row.original.airdrop, borrow: true }));
        },
        size: 140
    },
    {
        header: 'Chain',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (info) { return ((0, jsx_runtime_1.jsx)(IconsRow_1.default, { disableLinks: true, links: info.row.original.chains, url: "/yields/borrow?chain", iconType: "chain" })); },
        meta: {
            align: 'end'
        },
        size: 60
    },
    {
        header: 'Available',
        accessorKey: 'borrowAvailableUsd',
        enableSorting: true,
        cell: function (info) {
            var value = info.row.original.borrow.totalAvailableUsd;
            return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
                    color: info.row.original.strikeTvl ? 'var(--text-disabled)' : 'inherit'
                } }, { children: value === null ? null : '$' + (0, utils_1.formattedNum)(value) })));
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Base APY',
        accessorKey: 'totalBase',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            return ((0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": getValue() > 0 ? 'positive' : 'borrow' }, { children: (0, utils_1.formattedPercent)(getValue(), true, 700) })));
        },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Base Supply APY',
        accessorKey: 'lendingBase',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": "supply" }, { children: (0, utils_1.formattedPercent)(getValue(), true, 400) }));
        },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Base Borrow APY',
        accessorKey: 'borrowBase',
        enableSorting: true,
        cell: function (info) {
            return ((0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": info.getValue() > 0 ? 'positive' : 'borrow' }, { children: (0, utils_1.formattedPercent)(info.getValue(), true) })));
        },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Net APY',
        accessorKey: 'totalReward',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [utils_3.lockupsRewards.includes(row.original.projectName) ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: utils_3.earlyExit }) : null, (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": getValue() > 0 ? 'positive' : 'borrow' }, { children: (0, utils_1.formattedPercent)(getValue(), true, 700) }))] })));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Lending Reward - Borrowing Cost * LTV'
        }
    },
    {
        header: 'Net Supply APY',
        accessorKey: 'lendingReward',
        enableSorting: true,
        cell: function (_a) {
            var _b;
            var getValue = _a.getValue, row = _a.row;
            var rewards = (_b = row.original.rewardTokensNames) !== null && _b !== void 0 ? _b : [];
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [(0, jsx_runtime_1.jsx)(IconsRow_1.default, { disableLinks: true, links: rewards, url: "/yields?project", iconType: "token", yieldRewardsSymbols: row.original.rewardTokensSymbols }), (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": "supply" }, { children: (0, utils_1.formattedPercent)(getValue(), true, 400) }))] })));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Total reward APY for lending.'
        }
    },
    {
        header: 'Net Borrow APY',
        accessorKey: 'borrowReward',
        enableSorting: true,
        cell: function (info) {
            return ((0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": info.getValue() > 0 ? 'positive' : 'borrow' }, { children: (0, utils_1.formattedPercent)(info.getValue(), true) })));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Total net APY for borrowing (Base + Reward).'
        }
    },
    {
        header: 'LTV',
        accessorKey: 'ltv',
        enableSorting: true,
        cell: function (info) {
            return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
                    color: info.row.original.strikeTvl ? 'var(--text-disabled)' : 'inherit'
                } }, { children: (0, utils_1.formattedNum)(Number(info.getValue()) * 100) + '%' })));
        },
        size: 120,
        meta: {
            align: 'end',
            headerHelperText: 'Max loan to value (collateral factor)'
        }
    },
    {
        header: 'Supplied',
        accessorKey: 'totalSupplyUsd',
        enableSorting: true,
        cell: function (info) {
            return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
                    color: info.row.original.strikeTvl ? 'var(--text-disabled)' : 'inherit'
                } }, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) })));
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Borrowed',
        accessorKey: 'totalBorrowUsd',
        enableSorting: true,
        cell: function (info) {
            return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
                    color: info.row.original.strikeTvl ? 'var(--text-disabled)' : 'inherit'
                } }, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) })));
        },
        size: 120,
        meta: {
            align: 'end',
            headerHelperText: 'Amount of borrowed collateral'
        }
    }
];
// key: min width of window/screen
// values: table columns order
var columnOrders = {
    0: [
        'pool',
        'project',
        'chains',
        'borrowAvailableUsd',
        'totalBase',
        'lendingBase',
        'borrowBase',
        'totalReward',
        'lendingReward',
        'borrowReward',
        'ltv',
        'totalSupplyUsd',
        'totalBorrowUsd'
    ],
    400: [
        'pool',
        'project',
        'chains',
        'borrowAvailableUsd',
        'totalBase',
        'lendingBase',
        'borrowBase',
        'totalReward',
        'lendingReward',
        'borrowReward',
        'ltv',
        'totalSupplyUsd',
        'totalBorrowUsd'
    ],
    640: [
        'pool',
        'project',
        'chains',
        'borrowAvailableUsd',
        'totalBase',
        'lendingBase',
        'borrowBase',
        'totalReward',
        'lendingReward',
        'borrowReward',
        'ltv',
        'totalSupplyUsd',
        'totalBorrowUsd'
    ],
    1280: [
        'pool',
        'project',
        'chains',
        'borrowAvailableUsd',
        'totalBase',
        'lendingBase',
        'borrowBase',
        'totalReward',
        'lendingReward',
        'borrowReward',
        'ltv',
        'totalSupplyUsd',
        'totalBorrowUsd'
    ]
};
exports.columnSizes = {
    0: {
        pool: 160,
        project: 180,
        chain: 60,
        borrowAvailableUsd: 100,
        totalBase: 100,
        lendingBase: 150,
        borrowBase: 150,
        totalReward: 100,
        lendingReward: 150,
        borrowReward: 150,
        ltv: 80,
        totalSupplyUsd: 100,
        totalBorrowUsd: 100
    },
    812: {
        pool: 210,
        project: 180,
        chain: 60,
        borrowAvailableUsd: 100,
        totalBase: 100,
        lendingBase: 150,
        borrowBase: 150,
        totalReward: 100,
        lendingReward: 150,
        borrowReward: 150,
        ltv: 80,
        totalSupplyUsd: 100,
        totalBorrowUsd: 120
    }
};
exports.yieldsColumnOrders = (0, utils_2.formatColumnOrder)(columnOrders);
