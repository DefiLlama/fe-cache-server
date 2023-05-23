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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yieldsColumnOrders = exports.columnSizes = exports.columns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("../../../../utils");
var Name_1 = require("../Name");
var utils_2 = require("../../utils");
var shared_1 = require("../../shared");
var Tooltip_1 = require("../../../../components/Tooltip");
var styled_components_1 = __importDefault(require("styled-components"));
var QuestionHelper_1 = __importDefault(require("../../../../components/QuestionHelper"));
var Row_1 = require("../../../../components/Row");
var utils_3 = require("../../../../components/YieldsPage/utils");
var ColoredAPY_1 = require("../ColoredAPY");
exports.columns = [
    {
        header: 'Strategy',
        accessorKey: 'strategy',
        enableSorting: false,
        cell: function (_a) {
            var row = _a.row, table = _a.table;
            var name = "".concat(row.original.symbol, " \u279E ").concat(row.original.borrow.symbol, " \u279E ").concat(row.original.farmSymbol);
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.PoolStrategyWithProjects, { children: [(0, jsx_runtime_1.jsx)(Name_1.NameYieldPool, { value: name, configID: "".concat(row.original.pool, "_").concat(row.original.borrow.pool, "_").concat(row.original.farmPool), url: row.original.url, index: index + 1, strategy: true, maxCharacters: 50, bookmark: false }), (0, jsx_runtime_1.jsx)(Name_1.PoolStrategyRoute, { project1: row.original.projectName, airdropProject1: row.original.airdrop, project2: row.original.farmProjectName, airdropProject2: false, chain: row.original.chains[0], index: index + 1 })] }));
        },
        size: 400
    },
    {
        header: 'Strategy APY',
        accessorKey: 'totalApy',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var TooltipContent = function () {
                var _a, _b, _c, _d, _e, _f, _g;
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Supply APY: ".concat((_b = (_a = row.original) === null || _a === void 0 ? void 0 : _a.apy) === null || _b === void 0 ? void 0 : _b.toFixed(2), "%") }), (0, jsx_runtime_1.jsx)("span", { children: "Borrow APY: ".concat((_e = (_d = (_c = row.original) === null || _c === void 0 ? void 0 : _c.borrow) === null || _d === void 0 ? void 0 : _d.apyBorrow) === null || _e === void 0 ? void 0 : _e.toFixed(2), "%") }), (0, jsx_runtime_1.jsx)("span", { children: "Farm APY: ".concat((_g = (_f = row.original) === null || _f === void 0 ? void 0 : _f.farmApy) === null || _g === void 0 ? void 0 : _g.toFixed(2), "%") })] }));
            };
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [utils_3.lockupsRewards.includes(row.original.projectName) ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: utils_3.earlyExit }) : null, (0, jsx_runtime_1.jsx)(Tooltip, __assign({ content: (0, jsx_runtime_1.jsx)(TooltipContent, {}) }, { children: (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": "positive" }, { children: (0, utils_1.formattedPercent)(getValue(), true, 700) })) }))] })));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Total Strategy APY defined as: Supply APY + Borrow APY * LTV + Farm APY * LTV'
        }
    },
    {
        header: 'Delta',
        accessorKey: 'delta',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": "borrow" }, { children: (0, utils_1.formattedPercent)(info.getValue(), true) }));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'APY Increase by following this strategy compared to just supplying the collateral token'
        }
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
            align: 'end',
            headerHelperText: 'Available Borrow Liquidity for the debt token'
        }
    },
    {
        header: 'Farm TVL',
        accessorKey: 'farmTvlUsd',
        enableSorting: true,
        cell: function (info) {
            var value = info.row.original.farmTvlUsd;
            return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
                    color: info.row.original.strikeTvl ? 'var(--text-disabled)' : 'inherit'
                } }, { children: value === null ? null : '$' + (0, utils_1.formattedNum)(value) })));
        },
        size: 120,
        meta: {
            align: 'end',
            headerHelperText: 'Total Value Locked for the farm token in the last part of the strategy'
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
    }
];
// key: min width of window/screen
// values: table columns order
var columnOrders = {
    0: ['strategy', 'totalApy', 'delta', 'ltv', 'borrowAvailableUsd', 'farmTvlUsd'],
    400: ['strategy', 'totalApy', 'delta', 'ltv', 'borrowAvailableUsd', 'farmTvlUsd'],
    640: ['strategy', 'totalApy', 'delta', 'ltv', 'borrowAvailableUsd', 'farmTvlUsd'],
    1280: ['strategy', 'totalApy', 'delta', 'ltv', 'borrowAvailableUsd', 'farmTvlUsd']
};
exports.columnSizes = {
    0: {
        strategy: 250,
        totalApy: 150,
        delta: 100,
        ltv: 90,
        borrowAvailableUsd: 120,
        farmTvlUsd: 100
    },
    812: {
        strategy: 300,
        totalApy: 150,
        delta: 100,
        ltv: 90,
        borrowAvailableUsd: 120,
        farmTvlUsd: 100
    }
};
var Tooltip = (0, styled_components_1.default)(Tooltip_1.Tooltip2)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 4px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 4px;\n"])));
exports.yieldsColumnOrders = (0, utils_2.formatColumnOrder)(columnOrders);
var templateObject_1;
