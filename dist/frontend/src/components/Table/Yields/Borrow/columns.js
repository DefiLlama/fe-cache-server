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
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsx)(Name_1.NameYieldPool, { value: getValue(), configID: row.original.configID, url: row.original.url, index: index + 1, borrow: true }));
        },
        size: 200
    },
    {
        header: function () { return (0, jsx_runtime_1.jsx)("span", __assign({ style: { paddingLeft: '32px' } }, { children: "Project" })); },
        accessorKey: 'project',
        enableSorting: false,
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)(Name_1.NameYield, { project: row.original.project, projectslug: row.original.projectslug, airdrop: row.original.airdrop, borrow: true }));
        },
        size: 200
    },
    {
        header: 'Chain',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: info.getValue(), url: "/yields/borrow?chain", iconType: "chain" }); },
        meta: {
            align: 'end'
        },
        size: 60
    },
    {
        header: 'Supply Base',
        accessorKey: 'apyBase',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": "supply" }, { children: (0, utils_1.formattedPercent)(info.getValue(), true) }));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Base rate lenders earn which is generated from the borrow side.'
        }
    },
    {
        header: 'Supply Reward',
        accessorKey: 'apyReward',
        enableSorting: true,
        cell: function (_a) {
            var _b;
            var getValue = _a.getValue, row = _a.row;
            var rewards = (_b = row.original.rewards) !== null && _b !== void 0 ? _b : [];
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [utils_3.lockupsRewards.includes(row.original.project) ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: utils_3.earlyExit }) : null, (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: rewards, url: "/yields?project", iconType: "token", yieldRewardsSymbols: row.original.rewardTokensSymbols }), (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": "supply" }, { children: (0, utils_1.formattedPercent)(getValue(), true, 400) }))] })));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Incentive reward APY for lending.'
        }
    },
    {
        header: 'Net Borrow',
        accessorKey: 'apyBorrow',
        enableSorting: true,
        cell: function (info) {
            return ((0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": info.getValue() > 0 ? 'positive' : 'borrow' }, { children: (0, utils_1.formattedPercent)(info.getValue(), true, 700) })));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Total net APY for borrowing (Base + Reward).'
        }
    },
    {
        header: 'Borrow Base',
        accessorKey: 'apyBaseBorrow',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": "borrow" }, { children: (0, utils_1.formattedPercent)(info.getValue(), true) }));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Interest borrowers pay to lenders.'
        }
    },
    {
        header: 'Borrow Reward',
        accessorKey: 'apyRewardBorrow',
        enableSorting: true,
        cell: function (_a) {
            var _b;
            var getValue = _a.getValue, row = _a.row;
            var rewards = (_b = row.original.rewards) !== null && _b !== void 0 ? _b : [];
            return row.original.apyRewardBorrow > 0 ? ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [utils_3.lockupsRewards.includes(row.original.project) ? ((0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: utils_3.earlyExit })) : row.original.project === '0vix' ? ((0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: 'Pre-mined rewards, no available token yet!' })) : null, (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: rewards, url: "/yields?project", iconType: "token", yieldRewardsSymbols: row.original.rewardTokensSymbols }), (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": "borrow" }, { children: (0, utils_1.formattedPercent)(getValue(), true, 400) }))] }))) : null;
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Incentive reward APY for borrowing.'
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
                } }, { children: info.getValue() === null ? '' : '$' + (0, utils_1.formattedNum)(info.getValue()) })));
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
                } }, { children: info.getValue() === null ? '' : '$' + (0, utils_1.formattedNum)(info.getValue()) })));
        },
        size: 120,
        meta: {
            align: 'end',
            headerHelperText: 'Amount of borrowed collateral'
        }
    },
    {
        header: 'Available',
        accessorKey: 'totalAvailableUsd',
        enableSorting: true,
        cell: function (info) {
            return ((0, jsx_runtime_1.jsxs)("span", __assign({ style: {
                    display: 'flex',
                    gap: '4px',
                    justifyContent: 'flex-end',
                    color: info.row.original.strikeTvl ? 'var(--text-disabled)' : 'inherit'
                } }, { children: [info.row.original.project.includes('Morpho') ? ((0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "Morpho liquidity comes from the underlying lending protocol pool itself. Available P2P Liquidity: ".concat(info.row.original.totalSupplyUsd - info.row.original.totalBorrowUsd > 0
                            ? '$' + (0, utils_1.formattedNum)(info.row.original.totalSupplyUsd - info.row.original.totalBorrowUsd)
                            : '$0') })) : null, info.getValue() === null ? null : '$' + (0, utils_1.formattedNum)(info.getValue())] })));
        },
        size: 120,
        meta: {
            align: 'end'
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
        'apyBase',
        'apyReward',
        'apyBorrow',
        'apyBaseBorrow',
        'apyRewardBorrow',
        'ltv',
        'totalSupplyUsd',
        'totalBorrowUsd',
        'totalAvailableUsd'
    ],
    400: [
        'pool',
        'project',
        'chains',
        'apyBase',
        'apyReward',
        'apyBorrow',
        'apyBaseBorrow',
        'apyRewardBorrow',
        'ltv',
        'totalSupplyUsd',
        'totalBorrowUsd',
        'totalAvailableUsd'
    ],
    640: [
        'pool',
        'project',
        'chains',
        'apyBase',
        'apyReward',
        'apyBorrow',
        'apyBaseBorrow',
        'apyRewardBorrow',
        'ltv',
        'totalSupplyUsd',
        'totalBorrowUsd',
        'totalAvailableUsd'
    ],
    1280: [
        'pool',
        'project',
        'chains',
        'apyBase',
        'apyReward',
        'apyBorrow',
        'apyBaseBorrow',
        'apyRewardBorrow',
        'ltv',
        'totalSupplyUsd',
        'totalBorrowUsd',
        'totalAvailableUsd'
    ]
};
exports.columnSizes = {
    0: {
        pool: 200,
        project: 200,
        chain: 60,
        apyBase: 140,
        apyReward: 160,
        apyBorrow: 130,
        apyBaseBorrow: 140,
        apyRewardBorrow: 160,
        ltv: 90,
        totalSupplyUsd: 120,
        totalBorrowUsd: 120,
        totalAvailableUsd: 120
    },
    812: {
        pool: 200,
        project: 200,
        chain: 60,
        apyBase: 140,
        apyReward: 160,
        apyBorrow: 130,
        apyBaseBorrow: 140,
        apyRewardBorrow: 160,
        ltv: 90,
        totalSupplyUsd: 120,
        totalBorrowUsd: 120,
        totalAvailableUsd: 120
    }
};
exports.yieldsColumnOrders = (0, utils_2.formatColumnOrder)(columnOrders);
