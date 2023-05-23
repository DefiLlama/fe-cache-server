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
exports.protocolsByTokenColumns = exports.columnSizes = exports.columnOrders = exports.protocolAddlColumns = exports.topGainersAndLosersColumns = exports.airdropsColumns = exports.recentlyListedProtocolsColumns = exports.listedAtColumn = exports.protocolsColumns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
var Bookmark_1 = __importDefault(require("../../../../components/Bookmark"));
var Column_1 = require("../../../../components/Column");
var IconsRow_1 = __importDefault(require("../../../../components/IconsRow"));
var Link_1 = require("../../../../components/Link");
var QuestionHelper_1 = __importDefault(require("../../../../components/QuestionHelper"));
var TokenLogo_1 = __importDefault(require("../../../../components/TokenLogo"));
var Tooltip_1 = require("../../../../components/Tooltip");
var LocalStorage_1 = require("../../../../contexts/LocalStorage");
var utils_1 = require("../../../../utils");
var shared_1 = require("../../shared");
var utils_2 = require("../../utils");
exports.protocolsColumns = [
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Name" }); },
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var _b;
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            var Chains = function () { return ((0, jsx_runtime_1.jsx)(Column_1.AutoColumn, { children: row.original.chains.map(function (chain) { return ((0, jsx_runtime_1.jsx)("span", { children: chain }, "/protocol/".concat((0, utils_1.slug)(value)) + chain)); }) })); };
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, __assign({ depth: row.depth }, { children: [((_b = row.subRows) === null || _b === void 0 ? void 0 : _b.length) > 0 ? ((0, jsx_runtime_1.jsx)(shared_1.AccordionButton, __assign({}, {
                        onClick: row.getToggleExpandedHandler()
                    }, { children: row.getIsExpanded() ? (0, jsx_runtime_1.jsx)(react_feather_1.ChevronDown, { size: 16 }) : (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16 }) }))) : ((0, jsx_runtime_1.jsx)(Bookmark_1.default, { readableProtocolName: value, "data-lgonly": true, "data-bookmark": true })), (0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(value), "data-lgonly": true }), (0, jsx_runtime_1.jsxs)(Column_1.AutoColumn, __assign({ as: "span" }, { children: [(0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocol/".concat((0, utils_1.slug)(value)) }, { children: "".concat(value) })), (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: (0, jsx_runtime_1.jsx)(Chains, {}), color: "var(--text-disabled)", fontSize: "0.7rem" }, { children: "".concat(row.original.chains.length, " chain").concat(row.original.chains.length > 1 ? 's' : '') }))] })), value === 'SyncDEX Finance' && ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: 'Many users have reported issues with this protocol' }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.AlertTriangle, {}) })))] })));
        },
        size: 240
    },
    {
        header: 'Category',
        accessorKey: 'category',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (getValue() ? (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocols/".concat(getValue()) }, { children: getValue() })) : '');
        },
        size: 140
    },
    {
        header: 'TVL',
        accessorKey: 'tvl',
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            return (0, jsx_runtime_1.jsx)(Tvl, { value: getValue(), rowValues: row.original });
        },
        meta: {
            align: 'end'
        },
        size: 120
    },
    {
        header: '7d Volume',
        accessorKey: 'volume_7d',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? '$' + (0, utils_1.formattedNum)(info.getValue()) : null });
        },
        meta: {
            align: 'end'
        },
        size: 100
    },
    {
        header: '7d Fees',
        accessorKey: 'fees_7d',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? '$' + (0, utils_1.formattedNum)(info.getValue()) : null });
        },
        meta: {
            align: 'end'
        },
        size: 100
    },
    {
        header: '7d Revenue',
        accessorKey: 'revenue_7d',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? '$' + (0, utils_1.formattedNum)(info.getValue()) : null });
        },
        meta: {
            align: 'end'
        },
        size: 120
    },
    {
        header: '1d Change',
        accessorKey: 'change_1d',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(getValue()) });
        },
        meta: {
            align: 'end'
        },
        size: 100
    },
    {
        header: '7d Change',
        accessorKey: 'change_7d',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(getValue()) });
        },
        meta: {
            align: 'end'
        },
        size: 100
    },
    {
        header: '1m Change',
        accessorKey: 'change_1m',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(getValue()) });
        },
        meta: {
            align: 'end'
        },
        size: 100
    },
    {
        header: 'Mcap/TVL',
        accessorKey: 'mcaptvl',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() && (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 100,
        meta: {
            align: 'end'
        }
    }
];
exports.listedAtColumn = {
    header: 'Listed At',
    accessorKey: 'listedAt',
    cell: function (_a) {
        var getValue = _a.getValue;
        return ((0, jsx_runtime_1.jsx)(ListedAt, { children: (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: "at ".concat((0, utils_1.toNiceDayAndHour)(getValue())) }, { children: (0, utils_1.toNiceDaysAgo)(getValue()) })) }));
    },
    size: 140,
    meta: {
        align: 'end'
    }
};
exports.recentlyListedProtocolsColumns = __spreadArray(__spreadArray(__spreadArray([], __read(exports.protocolsColumns.slice(0, 3)), false), [
    exports.listedAtColumn
], false), __read(exports.protocolsColumns.slice(3, -1)), false);
exports.airdropsColumns = __spreadArray(__spreadArray(__spreadArray([], __read(exports.protocolsColumns.slice(0, 3)), false), [
    {
        header: 'Total Money Raised',
        accessorKey: 'totalRaised',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? "$".concat((0, utils_1.toK)(getValue())) : '' });
        },
        size: 180,
        meta: {
            align: 'end'
        }
    },
    exports.listedAtColumn
], false), __read(exports.protocolsColumns.slice(3, -1)), false);
exports.topGainersAndLosersColumns = [
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Name" }); },
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, __assign({ depth: row.depth }, { children: [(0, jsx_runtime_1.jsx)(Bookmark_1.default, { readableProtocolName: value, "data-lgonly": true, "data-bookmark": true }), (0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(value), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocol/".concat((0, utils_1.slug)(value)) }, { children: "".concat(value) }))] })));
        },
        size: 260
    },
    {
        header: 'Chains',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: getValue(), url: "/chain", iconType: "chain" });
        },
        meta: {
            align: 'end',
            headerHelperText: "Chains are ordered by protocol's highest TVL on each chain"
        },
        size: 200
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
        },
        size: 100
    },
    {
        header: '1d Change',
        accessorKey: 'change_1d',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(getValue()) });
        },
        meta: {
            align: 'end'
        },
        size: 120
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
exports.protocolAddlColumns = {
    borrowed: {
        header: 'Borrowed',
        accessorKey: 'borrowed',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() && (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    supplied: {
        header: 'Supplied',
        accessorKey: 'supplied',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() && (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    suppliedTvl: {
        header: 'Supplied/TVL',
        accessorKey: 'suppliedTvl',
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() && (0, utils_1.formattedNum)(info.getValue()) });
        },
        size: 120,
        meta: {
            align: 'end'
        }
    }
};
// key: min width of window/screen
// values: table columns order
exports.columnOrders = (0, utils_2.formatColumnOrder)({
    0: [
        'name',
        'tvl',
        'change_7d',
        'category',
        'change_1m',
        'change_1d',
        'fees_7d',
        'revenue_7d',
        'volume_7d',
        'mcaptvl'
    ],
    480: [
        'name',
        'change_7d',
        'tvl',
        'category',
        'change_1m',
        'change_1d',
        'fees_7d',
        'revenue_7d',
        'volume_7d',
        'mcaptvl'
    ],
    1024: [
        'name',
        'category',
        'change_1d',
        'change_7d',
        'change_1m',
        'tvl',
        'fees_7d',
        'revenue_7d',
        'volume_7d',
        'mcaptvl'
    ]
});
exports.columnSizes = {
    0: {
        name: 180,
        category: 140,
        change_1d: 100,
        change_7d: 100,
        change_1m: 100,
        tvl: 120,
        mcaptvl: 100,
        totalRaised: 180
    },
    1024: {
        name: 240,
        category: 140,
        change_1d: 100,
        change_7d: 100,
        change_1m: 100,
        tvl: 120,
        mcaptvl: 100,
        totalRaised: 180
    },
    1280: {
        name: 200,
        category: 140,
        change_1d: 100,
        change_7d: 100,
        change_1m: 100,
        tvl: 120,
        mcaptvl: 100,
        totalRaised: 180
    }
};
var Tvl = function (_a) {
    var value = _a.value, rowValues = _a.rowValues;
    var _b = __read((0, LocalStorage_1.useDefiManager)(), 1), extraTvlsEnabled = _b[0];
    var text = null;
    if (rowValues.strikeTvl) {
        if (!extraTvlsEnabled['doublecounted']) {
            text =
                'This protocol deposits into another protocol and is subtracted from total TVL because "Double Count" toggle is off';
        }
        if (!extraTvlsEnabled['liquidstaking']) {
            text =
                'This protocol is under Liquid Staking category and is subtracted from total TVL because "Liquid Staking" toggle is off';
        }
        if (!extraTvlsEnabled['doublecounted'] && !extraTvlsEnabled['liquidstaking']) {
            text =
                'This protocol deposits into another protocol or is under Liquid Staking category, so it is subtracted from total TVL because both "Liquid Staking" and "Double Count" toggles are off';
        }
        if (rowValues.category === 'RWA') {
            text = 'RWA protocols are not counted into Chain TVL';
        }
        if (text && rowValues.isParentProtocol) {
            text = 'Some subprotocols are excluded from chain tvl';
        }
    }
    return ((0, jsx_runtime_1.jsxs)("span", __assign({ style: { display: 'flex', gap: '4px', justifyContent: 'flex-end' } }, { children: [text ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: text }) : null, (0, jsx_runtime_1.jsx)("span", __assign({ style: {
                    color: rowValues.strikeTvl ? 'var(--text-disabled)' : 'inherit'
                } }, { children: '$' + (0, utils_1.formattedNum)(value || 0) }))] })));
};
exports.protocolsByTokenColumns = [
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Name" }); },
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(value), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocol/".concat((0, utils_1.slug)(value)) }, { children: "".concat(value) }))] }));
        }
    },
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Category" }); },
        accessorKey: 'category',
        enableSorting: false,
        meta: {
            align: 'end'
        }
    },
    {
        header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Amount" }); },
        accessorKey: 'amountUsd',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(getValue()) });
        },
        meta: {
            align: 'end'
        }
    }
];
var ListedAt = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 120px;\n\n\t.tooltip-trigger {\n\t\tmargin-left: auto;\n\t\ttext-align: end;\n\t}\n"], ["\n\twidth: 120px;\n\n\t.tooltip-trigger {\n\t\tmargin-left: auto;\n\t\ttext-align: end;\n\t}\n"])));
var templateObject_1;
