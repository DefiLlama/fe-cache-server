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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.raisesColumnOrders = exports.hacksColumnOrders = exports.chainsTableColumnOrders = exports.InflowOutflow = exports.LSDColumn = exports.treasuriesColumns = exports.cexColumn = exports.chainsColumn = exports.hacksColumns = exports.activeInvestorsColumns = exports.governanceColumns = exports.expensesColumns = exports.emissionsColumns = exports.raisesColumns = exports.categoriesColumn = exports.forksColumn = exports.oraclesColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_table_1 = require("@tanstack/react-table");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var IconsRow_1 = __importDefault(require("../../../components/IconsRow"));
var Link_1 = require("../../../components/Link");
var QuestionHelper_1 = __importDefault(require("../../../components/QuestionHelper"));
var Row_1 = require("../../../components/Row");
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var Tooltip_1 = require("../../../components/Tooltip");
var Pool_1 = require("../../../layout/Pool");
var utils_1 = require("../../../utils");
var shared_1 = require("../shared");
var utils_2 = require("../utils");
var Column_1 = require("../../../components/Column");
exports.oraclesColumn = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), " ", (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/oracles/".concat(getValue()) }, { children: getValue() }))] }));
        }
    },
    {
        header: 'Protocols Secured',
        accessorKey: 'protocolsSecured',
        meta: {
            align: 'end'
        }
    },
    {
        header: 'TVS',
        accessorKey: 'tvs',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(getValue()) });
        },
        meta: {
            align: 'end',
            headerHelperText: 'Excludes CeFi'
        }
    }
];
exports.forksColumn = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), " ", (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/forks/".concat(getValue()) }, { children: getValue() }))] }));
        }
    },
    {
        header: 'Forked Protocols',
        accessorKey: 'forkedProtocols',
        meta: {
            align: 'end'
        }
    },
    {
        header: 'TVL',
        accessorKey: 'tvl',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(getValue()) });
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Forks TVL / Original TVL',
        accessorKey: 'ftot',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: value && value.toFixed(2) + '%' });
        },
        meta: {
            align: 'end'
        }
    }
];
exports.categoriesColumn = [
    {
        header: 'Category',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), " ", (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocols/".concat(getValue()) }, { children: getValue() }))] }));
        },
        size: 200
    },
    {
        header: 'Protocols',
        accessorKey: 'protocols',
        size: 140
    },
    {
        header: 'Combined TVL',
        accessorKey: 'tvl',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(getValue()) });
        },
        size: 140
    },
    {
        header: 'Description',
        accessorKey: 'description',
        enableSorting: false,
        size: 902
    }
];
var formatRaise = function (n) {
    if (n >= 1e3) {
        return "".concat(n / 1e3, "b");
    }
    return "".concat(n, "m");
};
exports.raisesColumns = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: getValue() });
        },
        size: 180
    },
    {
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.toNiceDayMonthAndYear)(getValue()) });
        },
        size: 120,
        header: 'Date',
        accessorKey: 'date'
    },
    {
        header: 'Amount Raised',
        accessorKey: 'amount',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? '$' + formatRaise(getValue()) : '' });
        },
        size: 140
    },
    { header: 'Round', accessorKey: 'round', enableSorting: false, size: 140 },
    {
        header: 'Description',
        accessorKey: 'sector',
        size: 140,
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: getValue(), style: { padding: '12px' } }, { children: getValue() })));
        }
    },
    {
        header: 'Lead Investor',
        accessorKey: 'leadInvestors',
        size: 120,
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            var formattedValue = value.join(', ');
            return ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: formattedValue, style: { padding: '12px' } }, { children: formattedValue })));
        }
    },
    {
        header: 'Link',
        accessorKey: 'source',
        size: 48,
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return ((0, jsx_runtime_1.jsx)(Pool_1.ButtonYields, __assign({ as: "a", href: getValue(), target: "_blank", rel: "noopener noreferrer", "data-lgonly": true, useTextColor: true }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 }) })));
        }
    },
    {
        header: 'Valuation',
        accessorKey: 'valuation',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? '$' + formatRaise(getValue()) : '' });
        },
        size: 100
    },
    {
        header: 'Chains',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: getValue(), url: "/chain", iconType: "chain" });
        },
        size: 60
    },
    {
        header: 'Other Investors',
        accessorKey: 'otherInvestors',
        size: 400,
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            var formattedValue = value.join(', ');
            return (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: formattedValue }, { children: formattedValue }));
        }
    }
];
exports.emissionsColumns = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(getValue()), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/unlocks/".concat((0, utils_1.standardizeProtocolName)(getValue())) }, { children: getValue() }))] }));
        },
        size: 220
    },
    {
        header: 'Token Price',
        accessorKey: 'tPrice',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? '$' + (+getValue()).toFixed(2) : '' });
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Mcap',
        accessorKey: 'mcap',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? '$' + (0, utils_1.formattedNum)(getValue()) : '' });
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Max Supply',
        id: 'maxSupply',
        accessorFn: function (row) { return (row.tPrice && row.maxSupply ? +row.tPrice * row.maxSupply : 0); },
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var symbol = row.original.tSymbol;
            var value = row.original.maxSupply;
            return ((0, jsx_runtime_1.jsxs)(Column_1.AutoColumn, __assign({ gap: "4px" }, { children: [(0, jsx_runtime_1.jsx)(Tooltip, __assign({ content: value.toFixed(2) + (symbol ? " ".concat(symbol) : '') }, { children: (0, utils_1.formattedNum)(value) + (symbol ? " ".concat(symbol) : '') })), (0, jsx_runtime_1.jsx)(LightText, { children: getValue() ? '$' + (0, utils_1.formattedNum)(getValue().toFixed(2)) : '' })] })));
        },
        meta: {
            align: 'end'
        }
    },
    // {
    // 	header: 'Circulating Supply',
    // 	accessorKey: 'circSupply',
    // 	cell: ({ getValue, row }) => {
    // 		const symbol = row.original.tSymbol
    // 		const value = getValue() as number
    // 		const usdValue = row.original.tPrice && value ? formattedNum((+row.original.tPrice * value).toFixed(2)) : ''
    // 		return (
    // 			<AutoColumn gap="4px">
    // 				<Tooltip content={value.toFixed(2) + (symbol ? ` ${symbol}` : '')}>
    // 					{formattedNum(value) + (symbol ? ` ${symbol}` : '')}
    // 				</Tooltip>
    // 				<LightText>{usdValue ? '$' + usdValue : ''}</LightText>
    // 			</AutoColumn>
    // 		)
    // 	},
    // 	meta: {
    // 		align: 'end'
    // 	}
    // },
    {
        header: 'Total Locked %',
        id: 'totalLocked',
        accessorFn: function (row) { return (row.maxSupply && row.totalLocked ? row.totalLocked / row.maxSupply : 0); },
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var symbol = row.original.tSymbol;
            var percetage = (row.original.totalLocked / row.original.maxSupply) * 100;
            return ((0, jsx_runtime_1.jsxs)(Column_1.AutoColumn, __assign({ gap: "4px" }, { children: [(0, jsx_runtime_1.jsx)(Tooltip, __assign({ content: row.original.totalLocked.toFixed(2) + (symbol ? " ".concat(symbol) : '') }, { children: percetage.toFixed(2) + '%' })), (0, jsx_runtime_1.jsx)(LightText, { children: getValue() ? '$' + (0, utils_1.formattedNum)(getValue().toFixed(2)) : '' })] })));
        },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Unlocks per day',
        id: 'nextEvent',
        accessorFn: function (row) { return (row.tPrice && row.nextEvent.toUnlock ? +row.tPrice * row.nextEvent.toUnlock : 0); },
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var symbol = row.original.tSymbol;
            return ((0, jsx_runtime_1.jsxs)(Column_1.AutoColumn, __assign({ gap: "4px" }, { children: [(0, jsx_runtime_1.jsx)(Tooltip, __assign({ content: row.original.nextEvent.toUnlock.toFixed(2) }, { children: (0, utils_1.formattedNum)(row.original.nextEvent.toUnlock) + (symbol ? " ".concat(symbol) : '') })), (0, jsx_runtime_1.jsx)(LightText, { children: getValue() ? '$' + (0, utils_1.formattedNum)(getValue().toFixed(2)) : '' })] })));
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Next Event',
        id: 'upcomingEvent',
        accessorFn: function (row) { return row.upcomingEvent.timestamp || 0; },
        cell: function (_a) {
            var row = _a.row;
            var _b = row.original.upcomingEvent, description = _b.description, noOfTokens = _b.noOfTokens, timestamp = _b.timestamp;
            description = (0, utils_1.formatUnlocksEvent)({
                description: description,
                noOfTokens: noOfTokens !== null && noOfTokens !== void 0 ? noOfTokens : [],
                timestamp: timestamp,
                price: row.original.tPrice,
                symbol: row.original.tSymbol
            });
            return (0, jsx_runtime_1.jsx)("span", __assign({ style: { width: '100%', overflow: 'scroll' } }, { children: description }));
        },
        size: 800
    }
];
exports.expensesColumns = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(getValue()), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocol/".concat((0, utils_1.standardizeProtocolName)(getValue())) }, { children: getValue() }))] }));
        },
        size: 220
    },
    {
        header: 'Headcount',
        accessorKey: 'headcount',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() });
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Annual Expenses',
        accessorKey: 'sumAnnualUsdExpenses',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? '$' + (0, utils_1.formattedNum)(getValue()) : '' });
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Source',
        accessorKey: 'sources',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return ((0, jsx_runtime_1.jsx)(Pool_1.ButtonYields, __assign({ as: "a", href: getValue()[0], target: "_blank", rel: "noopener noreferrer", "data-lgonly": true, useTextColor: true }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 }) })));
        }
    }
];
exports.governanceColumns = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, __assign({ depth: row.depth }, { children: [(0, jsx_runtime_1.jsx)(shared_1.AccordionButton, __assign({}, {
                        onClick: row.getToggleExpandedHandler()
                    }, { children: row.getIsExpanded() ? (0, jsx_runtime_1.jsx)(react_feather_1.ChevronDown, { size: 16 }) : (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16 }) })), (0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(getValue()), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/governance/".concat((0, utils_1.standardizeProtocolName)(getValue())) }, { children: getValue() }))] })));
        },
        size: 220
    },
    {
        header: 'Proposals',
        accessorKey: 'proposalsCount',
        size: 100,
        meta: { align: 'end' }
    },
    {
        accessorKey: 'successfulProposals',
        header: 'Successful Proposals',
        size: 180,
        meta: { align: 'end' }
    },
    {
        header: 'Proposals in last 30 days',
        accessorKey: 'propsalsInLast30Days',
        size: 200,
        meta: { align: 'end' }
    },
    {
        header: 'Successful Proposals in last 30 days',
        accessorKey: 'successfulPropsalsInLast30Days',
        size: 280,
        meta: { align: 'end' }
    }
];
exports.activeInvestorsColumns = [
    {
        header: 'Investor',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() });
        },
        size: 120
    },
    {
        header: 'Deals (Last 30d)',
        accessorKey: 'deals',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() });
        },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Projects',
        accessorKey: 'projects',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: getValue() }, { children: getValue() }));
        },
        size: 280
    }
];
exports.hacksColumns = __spreadArray(__spreadArray([
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: getValue() });
        },
        size: 200
    },
    {
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.toNiceDayMonthAndYear)(getValue()) });
        },
        size: 120,
        header: 'Date',
        accessorKey: 'date'
    },
    {
        header: 'Amount lost',
        accessorKey: 'amount',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? '$' + formatRaise(getValue()) : '' });
        },
        size: 140
    },
    {
        header: 'Chains',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: getValue(), url: "/chain", iconType: "chain" });
        },
        size: 60
    }
], __read(['classification', 'technique'].map(function (s) { return (__assign({ header: (0, utils_1.capitalizeFirstLetter)(s), accessorKey: s, enableSorting: false, size: s === 'classification' ? 100 : 200 }, (s === 'classification' && {
    meta: {
        headerHelperText: 'Classified based on whether the hack targeted a weakness in Infrastructure, Smart Contract Language, Protocol Logic or the interaction between multiple protocols (Ecosystem)'
    }
}))); })), false), [
    {
        header: 'Link',
        accessorKey: 'link',
        size: 33,
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return ((0, jsx_runtime_1.jsx)(Pool_1.ButtonYields, __assign({ as: "a", href: getValue(), target: "_blank", rel: "noopener noreferrer", "data-lgonly": true, useTextColor: true }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 }) })));
        }
    }
], false);
exports.chainsColumn = [
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Name" }); },
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var _b;
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, __assign({ depth: row.depth }, { children: [((_b = row.subRows) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0, jsx_runtime_1.jsx)(shared_1.AccordionButton, __assign({}, {
                        onClick: row.getToggleExpandedHandler()
                    }, { children: row.getIsExpanded() ? (0, jsx_runtime_1.jsx)(react_feather_1.ChevronDown, { size: 16 }) : (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16 }) }))), (0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.chainIconUrl)(getValue()) }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/chain/".concat(getValue()) }, { children: getValue() }))] })));
        },
        size: 200
    },
    {
        header: 'Protocols',
        accessorKey: 'protocols',
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Active Users',
        accessorKey: 'users',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() === 0 || (0, utils_1.formattedNum)(info.getValue()) }); },
        size: 120,
        meta: {
            align: 'end',
            headerHelperText: 'Active addresses in the last 24h'
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
        header: 'TVL',
        accessorKey: 'tvl',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Stables',
        accessorKey: 'stablesMcap',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() === 0 || "$".concat((0, utils_1.formattedNum)(info.getValue())) }); },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '24h volume',
        accessorKey: 'totalVolume24h',
        enableSorting: true,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() === 0 || "$".concat((0, utils_1.formattedNum)(info.getValue())) }); },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Sum of volume of all DEXs on the chain. Updated daily at 00:00UTC'
        }
    },
    {
        header: "24h fees",
        accessorKey: 'totalFees24h',
        enableSorting: true,
        cell: function (info) {
            var value = info.getValue();
            if (value === '' || value === 0 || Number.isNaN((0, utils_1.formattedNum)(value)))
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
            return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(value)] });
        },
        size: 140,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Mcap/TVL',
        accessorKey: 'mcaptvl',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() && (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 120,
        meta: {
            align: 'end'
        }
    }
];
exports.cexColumn = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), row.original.slug === undefined ? (getValue()) : ((0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/cex/".concat((0, utils_1.slug)(row.original.slug)) }, { children: getValue() })))] }));
        }
    },
    {
        header: 'Assets',
        accessorKey: 'tvl',
        cell: function (info) {
            return ((0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ align: "center", justify: "flex-end" }, { children: info.getValue() === undefined ? ((0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "This CEX has not published a list of all hot and cold wallets" })) : ('$' + (0, utils_1.formattedNum)(info.getValue())) })));
        },
        sortingFn: react_table_1.sortingFns.datetime,
        size: 120,
        meta: {
            align: 'end',
            headerHelperText: 'This excludes IOU assets issued by the CEX that are already counted on another chain, such as Binance-pegged BTC in BSC, which is already counted in Bitcoin chain'
        }
    },
    {
        header: 'Clean Assets',
        accessorKey: 'cleanTvl',
        cell: function (info) {
            var coinSymbol = info.row.original.coinSymbol;
            return ((0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ align: "center", justify: "flex-end" }, { children: info.getValue() === undefined ? ((0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "This CEX has not published a list of all hot and cold wallets" })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [coinSymbol === undefined ? ((0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "Original TVL doesn't contain any coin issued by this CEX" })) : ((0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "This excludes all TVL from ".concat(info.row.original.coinSymbol, ", which is a token issued by this CEX") })), (0, jsx_runtime_1.jsx)("span", { children: '$' + (0, utils_1.formattedNum)(info.getValue()) })] })) })));
        },
        sortingFn: react_table_1.sortingFns.datetime,
        size: 145,
        meta: {
            align: 'end',
            headerHelperText: 'TVL of the CEX excluding all assets issued by itself, such as their own token'
        }
    },
    {
        header: '24h Inflows',
        accessorKey: '24hInflows',
        size: 120,
        cell: function (info) { return ((0, jsx_runtime_1.jsx)(exports.InflowOutflow, __assign({ "data-variant": info.getValue() < 0 ? 'red' : info.getValue() > 0 ? 'green' : 'white' }, { children: info.getValue() ? formatCexInflows(info.getValue()) : '' }))); },
        sortingFn: react_table_1.sortingFns.datetime,
        meta: {
            align: 'end'
        }
    },
    {
        header: '7d Inflows',
        accessorKey: '7dInflows',
        size: 120,
        cell: function (info) { return ((0, jsx_runtime_1.jsx)(exports.InflowOutflow, __assign({ "data-variant": info.getValue() < 0 ? 'red' : info.getValue() > 0 ? 'green' : 'white' }, { children: info.getValue() ? formatCexInflows(info.getValue()) : '' }))); },
        sortingFn: react_table_1.sortingFns.datetime,
        meta: {
            align: 'end'
        }
    },
    {
        header: '1m Inflows',
        accessorKey: '1mInflows',
        size: 120,
        cell: function (info) { return ((0, jsx_runtime_1.jsx)(exports.InflowOutflow, __assign({ "data-variant": info.getValue() < 0 ? 'red' : info.getValue() > 0 ? 'green' : 'white' }, { children: info.getValue() ? formatCexInflows(info.getValue()) : '' }))); },
        sortingFn: react_table_1.sortingFns.datetime,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Auditor',
        accessorKey: 'auditor',
        cell: function (_a) {
            var getValue = _a.getValue;
            return ((0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ align: "center", justify: "flex-end" }, { children: getValue() === undefined ? null : getValue() })));
        },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Last audit date',
        accessorKey: 'lastAuditDate',
        cell: function (_a) {
            var getValue = _a.getValue;
            return ((0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ align: "center", justify: "flex-end" }, { children: getValue() === undefined ? null : (0, utils_1.toNiceDayMonthAndYear)(getValue()) })));
        },
        size: 128,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Spot Volume',
        accessorKey: 'spotVolume',
        cell: function (info) { return (info.getValue() ? '$' + (0, utils_1.formattedNum)(info.getValue()) : null); },
        sortingFn: react_table_1.sortingFns.datetime,
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: '24h Open Interest',
        accessorKey: 'oi',
        cell: function (info) { return (info.getValue() ? '$' + (0, utils_1.formattedNum)(info.getValue()) : null); },
        sortingFn: react_table_1.sortingFns.datetime,
        size: 160,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Avg Leverage',
        accessorKey: 'leverage',
        cell: function (info) { return (info.getValue() ? Number(Number(info.getValue()).toFixed(2)) + 'x' : null); },
        sortingFn: react_table_1.sortingFns.datetime,
        size: 120,
        meta: {
            align: 'end'
        }
    }
    /*
    {
        header: 'Audit link',
        accessorKey: 'auditLink',
        size: 80,
        enableSorting: false,
        cell: ({ getValue }) => (
            <AutoRow align="center" justify="flex-end">
                {getValue() === undefined ? null : (
                    <ButtonYields
                        as="a"
                        href={getValue() as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-lgonly
                        useTextColor={true}
                        style={{ width: '21px' }}
                    >
                        <ArrowUpRight size={14} />
                    </ButtonYields>
                )}
            </AutoRow>
        ),
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Link to Wallets',
        accessorKey: 'walletsLink',
        size: 120,
        enableSorting: false,
        cell: ({ getValue }) => (
            <AutoRow align="center" justify="flex-end">
                {getValue() === undefined ? (
                    <QuestionHelper text="This CEX has no published their wallet addresses" />
                ) : (
                    <ButtonYields
                        as="a"
                        href={getValue() as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-lgonly
                        useTextColor={true}
                        style={{ width: '21px' }}
                    >
                        <ArrowUpRight size={14} />
                    </ButtonYields>
                )}
            </AutoRow>
        ),
        meta: {
            align: 'end'
        }
    }
    */
];
exports.treasuriesColumns = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            var name = getValue().split(' (treasury)')[0];
            var slug = row.original.slug.split('-(treasury)')[0];
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(name), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocol/".concat(slug, "#treasury") }, { children: name }))] }));
        }
    },
    {
        header: 'Breakdown',
        accessorKey: 'tokenBreakdowns',
        id: 'tokenBreakdowns0',
        enableSorting: false,
        cell: function (info) {
            var breakdown = info.getValue();
            var totalBreakdown = 0;
            for (var type in breakdown) {
                totalBreakdown += breakdown[type];
            }
            var breakdownDominance = {};
            for (var value in breakdown) {
                breakdownDominance[value] = (0, utils_1.getDominancePercent)(breakdown[value], totalBreakdown);
            }
            var dominance = Object.entries(breakdownDominance).sort(function (a, b) { return b[1] - a[1]; });
            if (totalBreakdown < 1) {
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
            }
            return ((0, jsx_runtime_1.jsx)(Tooltip, __assign({ content: (0, jsx_runtime_1.jsx)(TooltipContent, { dominance: dominance, protocolName: info.row.original.name }) }, { children: (0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ sx: {
                        width: '100px !important',
                        flexWrap: 'nowrap',
                        gap: '0px',
                        background: 'white',
                        height: '20px',
                        marginLeft: 'auto'
                    } }, { children: dominance.map(function (dom) {
                        var color = breakdownColor(dom[0]);
                        var name = "".concat(formatBreakdownType(dom[0]), " (").concat(dom[1], "%)");
                        return ((0, jsx_runtime_1.jsx)("div", { style: { width: "".concat(dom[1], "px"), height: '20px', background: color } }, dom[0] + dom[1] + info.row.original.name));
                    }) })) })));
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Stablecoins',
        accessorKey: 'stablecoins',
        id: 'stablecoins',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 108,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Majors (BTC, ETH)',
        accessorKey: 'majors',
        id: 'majors',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 152,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Own Tokens',
        accessorKey: 'ownTokens',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 112,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Others',
        accessorKey: 'others',
        id: 'others',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Total excl. own tokens',
        accessorKey: 'coreTvl',
        id: 'coreTvl',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 128,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Total Treasury',
        accessorKey: 'tvl',
        id: 'total-treasury',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 128,
        meta: {
            align: 'end'
        }
    }
];
exports.LSDColumn = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            var nameSlug = row.original.name.replace(/\s+/g, '-').toLowerCase();
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), " ", (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: row.original.logo, "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocol/".concat(nameSlug) }, { children: getValue() }))] }));
        },
        size: 280
    },
    {
        header: 'Staked ETH',
        accessorKey: 'stakedEth',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedNum)(getValue()) });
        },
        meta: {
            align: 'end'
        },
        size: 110
    },
    {
        header: 'TVL',
        accessorKey: 'stakedEthInUsd',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(getValue()) });
        },
        meta: {
            align: 'end'
        },
        size: 110
    },
    {
        header: '7d Change',
        accessorKey: 'stakedEthPctChange7d',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(getValue()) });
        },
        meta: {
            align: 'end'
        },
        size: 110
    },
    {
        header: '30d Change',
        accessorKey: 'stakedEthPctChange30d',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(getValue()) });
        },
        meta: {
            align: 'end'
        },
        size: 110
    },
    {
        header: 'Market Share',
        accessorKey: 'marketShare',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: value && value.toFixed(2) + '%' });
        },
        meta: {
            align: 'end'
        },
        size: 120
    },
    {
        header: 'LSD',
        accessorKey: 'lsdSymbol',
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [row.original.pegInfo ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: row.original.pegInfo }) : null, getValue()] })));
        },
        meta: {
            align: 'end'
        },
        size: 100
    },
    {
        header: 'ETH Peg',
        accessorKey: 'ethPeg',
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var TooltipContent = function () {
                var _a, _b, _c, _d;
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Market Rate: ".concat((_b = (_a = row.original) === null || _a === void 0 ? void 0 : _a.marketRate) === null || _b === void 0 ? void 0 : _b.toFixed(4)) }), (0, jsx_runtime_1.jsx)("span", { children: "Expected Rate: ".concat((_d = (_c = row.original) === null || _c === void 0 ? void 0 : _c.expectedRate) === null || _d === void 0 ? void 0 : _d.toFixed(4)) })] }));
            };
            return ((0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: (0, jsx_runtime_1.jsx)(Tooltip, __assign({ content: (0, jsx_runtime_1.jsx)(TooltipContent, {}) }, { children: getValue() ? (0, utils_1.formattedPercent)(getValue()) : null })) })));
        },
        meta: {
            align: 'end',
            headerHelperText: 'Market Rate (pulled from 1inch) divided by Expected Rate. Hover for Market Rate and Expected Rate Info.'
        },
        size: 115
    },
    {
        header: 'Mcap/TVL',
        accessorKey: 'mcapOverTvl',
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var TooltipContent = function () {
                var _a;
                return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", { children: "Market Cap: $".concat((0, utils_1.toK)((_a = row.original) === null || _a === void 0 ? void 0 : _a.mcap)) }) }));
            };
            return ((0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: (0, jsx_runtime_1.jsx)(Tooltip, __assign({ content: (0, jsx_runtime_1.jsx)(TooltipContent, {}) }, { children: getValue() ? getValue() : null })) })));
        },
        meta: {
            align: 'end'
        },
        size: 100
    },
    {
        header: 'LSD APR',
        accessorKey: 'apy',
        cell: function (_a) {
            var getValue = _a.getValue;
            var value = getValue();
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: value && value.toFixed(2) + '%' });
        },
        meta: {
            align: 'end'
        },
        size: 90
    }
];
function formatCexInflows(value) {
    var x = value;
    var isNegative = false;
    if (value.toString().startsWith('-')) {
        isNegative = true;
        x = value.toString().split('-').slice(1).join('-');
    }
    return "".concat(isNegative ? '-' : '+', " $").concat((0, utils_1.toK)(x));
}
exports.InflowOutflow = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n\n\t&[data-variant='green'] {\n\t\tcolor: #3fb950;\n\t}\n\n\t&[data-variant='red'] {\n\t\tcolor: #f85149;\n\t}\n"], ["\n\tcolor: ", ";\n\n\t&[data-variant='green'] {\n\t\tcolor: #3fb950;\n\t}\n\n\t&[data-variant='red'] {\n\t\tcolor: #f85149;\n\t}\n"
    // key: min width of window/screen
    // values: table columns order
])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
// key: min width of window/screen
// values: table columns order
exports.chainsTableColumnOrders = (0, utils_2.formatColumnOrder)({
    0: [
        'name',
        'tvl',
        'change_7d',
        'protocols',
        'users',
        'change_1d',
        'change_1m',
        'stablesMcap',
        'totalVolume24h',
        'totalFees24h',
        'totalRevenue24h',
        'mcaptvl'
    ],
    400: [
        'name',
        'change_7d',
        'tvl',
        'protocols',
        'users',
        'change_1d',
        'change_1m',
        'stablesMcap',
        'totalVolume24h',
        'totalFees24h',
        'totalRevenue24h',
        'mcaptvl'
    ],
    600: [
        'name',
        'protocols',
        'users',
        'change_7d',
        'tvl',
        'change_1d',
        'change_1m',
        'stablesMcap',
        'totalVolume24h',
        'totalFees24h',
        'totalRevenue24h',
        'mcaptvl'
    ],
    900: [
        'name',
        'protocols',
        'users',
        'change_1d',
        'change_7d',
        'change_1m',
        'tvl',
        'stablesMcap',
        'totalVolume24h',
        'totalFees24h',
        'totalRevenue24h',
        'mcaptvl'
    ]
});
exports.hacksColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['name', 'date', 'amountLost', 'chains', 'classification', 'technique', 'link']
});
exports.raisesColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['name', 'amount', 'date', 'round', 'sector', 'leadInvestors', 'source', 'valuation', 'chains', 'otherInvestors'],
    1024: [
        'name',
        'date',
        'amount',
        'round',
        'sector',
        'leadInvestors',
        'source',
        'valuation',
        'chains',
        'otherInvestors'
    ]
});
var Tooltip = (0, styled_components_1.default)(Tooltip_1.Tooltip2)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 4px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 4px;\n"])));
var breakdownColor = function (type) {
    if (type === 'stablecoins') {
        return '#16a34a';
    }
    if (type === 'majors') {
        return '#2563eb';
    }
    if (type === 'ownTokens') {
        return '#f97316';
    }
    if (type === 'others') {
        return '#6d28d9';
    }
    return '#f85149';
};
var formatBreakdownType = function (type) {
    if (type === 'stablecoins') {
        return 'Stablecoins';
    }
    if (type === 'majors') {
        return 'Majors';
    }
    if (type === 'ownTokens') {
        return 'Own Tokens';
    }
    if (type === 'others') {
        return 'Others';
    }
    return type;
};
var Breakdown = function (_a) {
    var data = _a.data;
    var color = breakdownColor(data[0]);
    var name = "".concat(formatBreakdownType(data[0]), " (").concat(data[1], "%)");
    return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { flexWrap: 'nowrap', alignItems: 'center', gap: '4px' } }, { children: [(0, jsx_runtime_1.jsx)("span", { style: { height: '14px', width: '14px', background: color, borderRadius: '2px' } }), (0, jsx_runtime_1.jsx)("span", { children: name })] })));
};
var TooltipContent = function (_a) {
    var dominance = _a.dominance, protocolName = _a.protocolName;
    return ((0, jsx_runtime_1.jsx)(Row_1.AutoRow, __assign({ sx: { flexDirection: 'column', gap: '4px' } }, { children: dominance.map(function (dom) { return ((0, jsx_runtime_1.jsx)(Breakdown, { data: dom }, dom[0] + dom[1] + protocolName + 'tooltip-content')); }) })));
};
var LightText = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\topacity: 0.6;\n\tmin-width: 120px;\n"], ["\n\topacity: 0.6;\n\tmin-width: 120px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
