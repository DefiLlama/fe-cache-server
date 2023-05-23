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
exports.TVLColumn = exports.CategoryColumn = exports.DominanceColumn = exports.VolumeTVLColumn = exports.TotalAllTimeColumn = exports.Total24hColumn = exports.ChangeColumn = exports.Change1mColumn = exports.Change7dColumn = exports.Change1dColumn = exports.ChainsColumn = exports.NameColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_feather_1 = require("react-feather");
var IconsRow_1 = __importDefault(require("../../../../components/IconsRow"));
var Link_1 = require("../../../../components/Link");
var QuestionHelper_1 = __importDefault(require("../../../../components/QuestionHelper"));
var TokenLogo_1 = __importDefault(require("../../../../components/TokenLogo"));
var utils_1 = require("../../../../utils");
var shared_1 = require("../../shared");
var NameColumn = function (type, allChains) { return ({
    header: function () { return (0, jsx_runtime_1.jsx)(shared_1.Name, { children: "Name" }); },
    accessorKey: 'displayName',
    enableSorting: false,
    cell: function (_a) {
        var _b;
        var getValue = _a.getValue, row = _a.row, table = _a.table;
        var value = getValue();
        var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
        return ((0, jsx_runtime_1.jsxs)(shared_1.Name, __assign({ depth: row.depth }, { children: [((_b = row.subRows) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0, jsx_runtime_1.jsx)(shared_1.AccordionButton, __assign({}, {
                    onClick: row.getToggleExpandedHandler()
                }, { children: row.getIsExpanded() ? (0, jsx_runtime_1.jsx)(react_feather_1.ChevronDown, { size: 16 }) : (0, jsx_runtime_1.jsx)(react_feather_1.ChevronRight, { size: 16 }) }))), (0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: row.original.logo, "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/".concat(type, "/").concat(allChains ? 'chains/' : '').concat((0, utils_1.slug)(row.original.name)) }, { children: "".concat(value) })), row.original.disabled && (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "This protocol has been disabled" })] })));
    },
    size: 240
}); };
exports.NameColumn = NameColumn;
var ChainsColumn = function (type) { return ({
    header: 'Chains',
    accessorKey: 'chains',
    enableSorting: false,
    cell: function (info) { return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: info.getValue(), url: "/".concat(type, "/chains"), iconType: "chain" }); },
    meta: {
        align: 'end'
    },
    size: 140
}); };
exports.ChainsColumn = ChainsColumn;
exports.Change1dColumn = {
    header: '1d Change',
    accessorKey: 'change_1d',
    cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
    size: 140,
    meta: {
        align: 'end'
    }
};
exports.Change7dColumn = {
    header: '7d Change',
    accessorKey: 'change_7d',
    enableSorting: true,
    cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
    size: 140,
    meta: {
        align: 'end'
    }
};
exports.Change1mColumn = {
    header: '1m Change',
    accessorKey: 'change_1m',
    enableSorting: true,
    cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
    size: 140,
    meta: {
        align: 'end'
    }
};
var ChangeColumn = function (header, accesor, size, headerHelperText) { return ({
    header: header,
    accessorKey: accesor,
    enableSorting: true,
    cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
    size: size !== null && size !== void 0 ? size : 140,
    meta: {
        align: 'end',
        headerHelperText: headerHelperText
    }
}); };
exports.ChangeColumn = ChangeColumn;
var Total24hColumn = function (type, alternativeAccessor, helperText, extraWidth, header) {
    var accessor = alternativeAccessor !== null && alternativeAccessor !== void 0 ? alternativeAccessor : 'total24h';
    return {
        header: header !== null && header !== void 0 ? header : "".concat(type, " (24h)"),
        accessorKey: accessor,
        enableSorting: true,
        cell: function (info) {
            var _a;
            var value = info.getValue();
            if (value === '' || Number.isNaN((0, utils_1.formattedNum)(value)))
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
            var rawMethodology = typeof info.row.original.methodology === 'object' ? info.row.original.methodology : {};
            var methodologyKey = (function () {
                if (accessor.includes('24h'))
                    return type;
                else
                    return accessor.slice(5); // ('daily' | 'total').length
            })();
            var methodology = (_a = Object.entries(rawMethodology).find(function (_a) {
                var _b = __read(_a, 1), name = _b[0];
                return name.toLowerCase() === methodologyKey.toLowerCase();
            })) === null || _a === void 0 ? void 0 : _a[1];
            return ((0, jsx_runtime_1.jsxs)("span", __assign({ style: { display: 'flex', gap: '4px', justifyContent: 'flex-end' } }, { children: [methodology ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: methodology, textAlign: "center" }) : null, (0, jsx_runtime_1.jsxs)("span", { children: ["$", (0, utils_1.formattedNum)(value)] })] })));
        },
        size: extraWidth !== null && extraWidth !== void 0 ? extraWidth : 140,
        meta: {
            align: 'end',
            headerHelperText: helperText
        }
    };
};
exports.Total24hColumn = Total24hColumn;
var TotalAllTimeColumn = function (type, alternativeAccessor, helperText) {
    var accessor = alternativeAccessor !== null && alternativeAccessor !== void 0 ? alternativeAccessor : 'totalAllTime';
    return {
        header: "Cumulative ".concat(type),
        accessorKey: accessor,
        enableSorting: true,
        cell: function (info) {
            var _a;
            if (Number.isNaN((0, utils_1.formattedNum)(info.getValue())) || (0, utils_1.formattedNum)(info.getValue()) === 0)
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
            var rawMethodology = typeof info.row.original.methodology === 'object' ? info.row.original.methodology : {};
            var methodology = (_a = Object.entries(rawMethodology).find(function (_a) {
                var _b = __read(_a, 1), name = _b[0];
                return accessor.includes(name);
            })) === null || _a === void 0 ? void 0 : _a[1];
            return ((0, jsx_runtime_1.jsxs)("span", __assign({ style: { display: 'flex', gap: '4px', justifyContent: 'flex-end' } }, { children: [methodology ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: methodology, textAlign: "center" }) : null, (0, jsx_runtime_1.jsxs)("span", { children: ["$", (0, utils_1.formattedNum)(info.getValue())] })] })));
        },
        size: 160,
        meta: {
            align: 'end',
            headerHelperText: helperText
        }
    };
};
exports.TotalAllTimeColumn = TotalAllTimeColumn;
exports.VolumeTVLColumn = {
    header: 'Volume/TVL',
    accessorKey: 'volumetvl',
    enableSorting: true,
    cell: function (info) {
        var fNum = (0, utils_1.formattedNum)(info.getValue());
        if (Number.isNaN(fNum))
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: fNum });
    },
    size: 140,
    meta: {
        align: 'end',
        headerHelperText: 'This ratio can be interpreted as capital efficiency'
    }
};
exports.DominanceColumn = {
    header: '% of total',
    accessorKey: 'dominance',
    enableSorting: true,
    cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue(), true) }); },
    size: 140,
    meta: {
        align: 'end'
    }
};
exports.CategoryColumn = {
    header: 'Category',
    accessorKey: 'category',
    size: 140,
    meta: {
        align: 'end'
    }
};
exports.TVLColumn = {
    header: 'TVL',
    accessorKey: 'tvl',
    enableSorting: true,
    cell: function (info) {
        var fNum = (0, utils_1.formattedNum)(info.getValue());
        if (Number.isNaN(fNum))
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: fNum });
    },
    size: 100,
    meta: {
        align: 'end'
    }
};
