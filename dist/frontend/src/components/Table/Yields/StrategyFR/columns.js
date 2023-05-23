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
            var name = "Long ".concat(row.original.symbol, " | Short ").concat(row.original.symbolPerp);
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.PoolStrategyWithProjects, { children: [(0, jsx_runtime_1.jsx)(Name_1.NameYieldPool, { value: name, configID: row.original.pool, withoutLink: true, url: row.original.url, index: index + 1, strategy: true, maxCharacters: 50, bookmark: false }), (0, jsx_runtime_1.jsx)(Name_1.FRStrategyRoute, { project1: row.original.projectName, airdropProject1: row.original.airdrop, project2: row.original.marketplace, airdropProject2: false, chain: row.original.chains[0], index: index + 1 })] }));
        },
        size: 400
    },
    {
        header: 'Strategy APY',
        accessorKey: 'strategyAPY',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            return ((0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: (0, jsx_runtime_1.jsx)(ColoredAPY_1.ColoredAPY, __assign({ "data-variant": "positive" }, { children: (0, utils_1.formattedPercent)(getValue(), true, 700) })) })));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Farm APY + Funding APY'
        }
    },
    {
        header: 'Farm APY',
        accessorKey: 'apy',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [utils_3.lockupsRewards.includes(row.original.projectName) ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: utils_3.earlyExit }) : null, (0, utils_1.formattedPercent)(Number(getValue()), true, 400)] })));
        },
        size: 120,
        meta: {
            align: 'end',
            headerHelperText: 'Annualised Farm Yield'
        }
    },
    {
        header: 'Funding APY',
        accessorKey: 'afr',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var TooltipContent = function () {
                var _a, _b, _c, _d, _e, _f;
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "8h: ".concat((_b = (_a = row.original) === null || _a === void 0 ? void 0 : _a.afr) === null || _b === void 0 ? void 0 : _b.toFixed(2), "%") }), (0, jsx_runtime_1.jsx)("span", { children: "7d: ".concat((_d = (_c = row.original) === null || _c === void 0 ? void 0 : _c.afr7d) === null || _d === void 0 ? void 0 : _d.toFixed(2), "%") }), (0, jsx_runtime_1.jsx)("span", { children: "30d: ".concat((_f = (_e = row.original) === null || _e === void 0 ? void 0 : _e.afr30d) === null || _f === void 0 ? void 0 : _f.toFixed(2), "%") })] }));
            };
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [utils_3.lockupsRewards.includes(row.original.projectName) ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: utils_3.earlyExit }) : null, (0, jsx_runtime_1.jsx)(Tooltip, __assign({ content: (0, jsx_runtime_1.jsx)(TooltipContent, {}) }, { children: (0, utils_1.formattedPercent)(getValue(), true, 700) }))] })));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Annualised Funding Yield based on previous settled Funding Rate. Hover for detailed breakdown of different APY windows using 7day or 30day paid Funding Rate sums'
        }
    },
    {
        header: 'Funding Rate',
        accessorKey: 'fr8hCurrent',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: getValue() + '%' }));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Current (predicted) Funding Rate'
        }
    },
    {
        header: 'Avg Funding Rate',
        accessorKey: 'fundingRate7dAverage',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: getValue() + '%' }));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Average of previously settled funding rates from the last 7 days'
        }
    },
    {
        header: 'Farm TVL',
        accessorKey: 'tvlUsd',
        enableSorting: true,
        cell: function (info) {
            var value = info.row.original.tvlUsd;
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
        header: 'Open Interest',
        accessorKey: 'openInterest',
        enableSorting: true,
        cell: function (info) {
            var value = info.row.original.openInterest;
            var indexPrice = info.row.original.indexPrice;
            return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
                    color: info.row.original.strikeTvl ? 'var(--text-disabled)' : 'inherit'
                } }, { children: value === null ? null : '$' + (0, utils_1.formattedNum)(value * indexPrice) })));
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
    0: ['strategy', 'strategyAPY', 'apy', 'afr', 'fr8hCurrent', 'fundingRate7dAverage', 'tvlUsd', 'openInterest'],
    400: ['strategy', 'strategyAPY', 'apy', 'afr', 'fr8hCurrent', 'fundingRate7dAverage', 'tvlUsd', 'openInterest'],
    640: ['strategy', 'strategyAPY', 'apy', 'afr', 'fr8hCurrent', 'fundingRate7dAverage', 'tvlUsd', 'openInterest'],
    1280: ['strategy', 'strategyAPY', 'apy', 'afr', 'fr8hCurrent', 'fundingRate7dAverage', 'tvlUsd', 'openInterest']
};
exports.columnSizes = {
    0: {
        strategy: 250,
        strategyAPY: 190,
        apy: 180,
        afr: 190,
        fr8hCurrent: 190,
        fundingRate7dAverage: 190,
        tvlUsd: 100,
        openInterest: 120
    },
    812: {
        strategy: 300,
        strategyAPY: 130,
        apy: 130,
        afr: 130,
        fr8hCurrent: 130,
        fundingRate7dAverage: 150,
        tvlUsd: 100,
        openInterest: 100
    }
};
var Tooltip = (0, styled_components_1.default)(Tooltip_1.Tooltip2)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 4px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 4px;\n"])));
exports.yieldsColumnOrders = (0, utils_2.formatColumnOrder)(columnOrders);
var templateObject_1;
