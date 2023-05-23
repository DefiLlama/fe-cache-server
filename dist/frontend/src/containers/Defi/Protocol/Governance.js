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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.GovernanceData = exports.GovernanceTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../../../utils");
var react_table_1 = require("@tanstack/react-table");
var Table_1 = __importDefault(require("../../../components/Table/Table"));
var Theme_1 = require("../../../Theme");
var shared_1 = require("../../../components/Table/shared");
var components_1 = require("../../../components");
var swr_1 = __importDefault(require("swr"));
var protocols_1 = require("../../../api/categories/protocols");
function GovernanceTable(_a) {
    var data = _a.data, isOnChainGovernance = _a.isOnChainGovernance;
    var _b = __read(React.useState([]), 2), columnFilters = _b[0], setColumnFilters = _b[1];
    var _c = __read(React.useState([{ id: 'state', desc: true }]), 2), sorting = _c[0], setSorting = _c[1];
    var _d = __read(React.useState(false), 2), filterControversialProposals = _d[0], setFilterProposals = _d[1];
    var instance = (0, react_table_1.useReactTable)({
        data: filterControversialProposals ? data.controversialProposals : data.proposals,
        columns: isOnChainGovernance ? proposalsCompoundColumns : proposalsSnapshotColumns,
        state: {
            columnFilters: columnFilters,
            sorting: sorting
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)()
    });
    var _e = __read(React.useState(''), 2), proposalname = _e[0], setProposalName = _e[1];
    React.useEffect(function () {
        var projectsColumns = instance.getColumn('title');
        var id = setTimeout(function () {
            projectsColumns.setFilterValue(proposalname);
        }, 200);
        return function () { return clearTimeout(id); };
    }, [proposalname, instance]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(TableFilters, { children: [(0, jsx_runtime_1.jsx)(Theme_1.Header, __assign({ style: { margin: 0 } }, { children: "Proposals" })), (0, jsx_runtime_1.jsxs)(FilterProposals, { children: [(0, jsx_runtime_1.jsx)(components_1.Checkbox2, { type: "checkbox", value: "controversial proposals", checked: filterControversialProposals, onChange: function () { return setFilterProposals(!filterControversialProposals); } }), (0, jsx_runtime_1.jsx)("span", { children: "Filter Controversial Proposals" })] }), (0, jsx_runtime_1.jsxs)(shared_1.SearchWrapper, __assign({ style: { bottom: 0, marginLeft: 0 } }, { children: [(0, jsx_runtime_1.jsx)(shared_1.SearchIcon, { size: 16 }), (0, jsx_runtime_1.jsx)("input", { value: proposalname, onChange: function (e) {
                                    setProposalName(e.target.value);
                                }, placeholder: "Search proposals..." })] }))] }), (0, jsx_runtime_1.jsx)(TableWrapper, { instance: instance })] }));
}
exports.GovernanceTable = GovernanceTable;
function GovernanceData(_a) {
    var api = _a.api;
    var _b = (0, swr_1.default)(api, function () {
        return fetch(api)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            var _a = (0, protocols_1.formatGovernanceData)(data), proposals = _a.proposals, activity = _a.activity, maxVotes = _a.maxVotes;
            return __assign(__assign({}, data), { proposals: proposals, controversialProposals: proposals
                    .sort(function (a, b) { return (b['score_curve'] || 0) - (a['score_curve'] || 0); })
                    .slice(0, 10), activity: activity, maxVotes: maxVotes });
        });
    }), data = _b.data, error = _b.error;
    var isLoading = !data && !error;
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)("p", __assign({ style: { margin: '180px 0', textAlign: 'center' } }, { children: "Loading..." }));
    }
    return data ? ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)(GovernanceTable, { data: data, isOnChainGovernance: api.includes('governance-cache/snapshot') ? false : true }) })) : null;
}
exports.GovernanceData = GovernanceData;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 24px;\n\tmax-width: calc(100vw - 32px);\n\n\t& > * {\n\t\t@media screen and (min-width: ", ") {\n\t\t\tmax-width: calc(100vw - 276px - 66px);\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding: 24px;\n\tmax-width: calc(100vw - 32px);\n\n\t& > * {\n\t\t@media screen and (min-width: ", ") {\n\t\t\tmax-width: calc(100vw - 276px - 66px);\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
});
var TableWrapper = (0, styled_components_1.default)(Table_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\ttable {\n\t\ttable-layout: auto;\n\n\t\ttr > :first-child {\n\t\t\tposition: relative;\n\t\t}\n\n\t\ttd > a {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t}\n"], ["\n\ttable {\n\t\ttable-layout: auto;\n\n\t\ttr > :first-child {\n\t\t\tposition: relative;\n\t\t}\n\n\t\ttd > a {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t}\n"])));
var TableFilters = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tflex-wrap: wrap;\n\n\t@media screen and (min-width: ", ") {\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tflex-wrap: wrap;\n\n\t@media screen and (min-width: ", ") {\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpMed;
});
var FilterProposals = styled_components_1.default.label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: nowrap;\n\tmargin-left: auto;\n\n\tspan {\n\t\twhite-space: nowrap;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: nowrap;\n\tmargin-left: auto;\n\n\tspan {\n\t\twhite-space: nowrap;\n\t}\n"])));
var proposalsCompoundColumns = [
    {
        header: 'Title',
        accessorKey: 'title',
        enableSorting: false,
        cell: function (info) {
            if (!info.row.original.link) {
                return formatText(info.getValue(), 40);
            }
            return ((0, jsx_runtime_1.jsx)("a", __assign({ href: info.row.original.link, target: "_blank", rel: "noopener noreferrer" }, { children: formatText(info.getValue(), 40) })));
        }
    },
    {
        header: 'Start',
        accessorKey: 'start',
        cell: function (info) { return (0, utils_1.toNiceDayMonthAndYear)(info.getValue()); },
        meta: { align: 'end' }
    },
    {
        header: 'End',
        accessorKey: 'end',
        cell: function (info) { return (0, utils_1.toNiceDayMonthAndYear)(info.getValue()); },
        meta: { align: 'end' }
    },
    {
        header: 'State',
        accessorKey: 'state',
        cell: function (info) { return info.getValue() || ''; },
        meta: { align: 'end' }
    },
    {
        header: 'Votes',
        accessorKey: 'scores_total',
        cell: function (info) { return (0, utils_1.formattedNum)(info.getValue()); },
        meta: { align: 'end' }
    },
    {
        header: 'Controversy',
        accessorKey: 'score_curve',
        cell: function (info) { return (info.getValue() ? info.getValue().toFixed(2) : ''); },
        meta: { align: 'end', headerHelperText: 'It is calculated by number of votes * how close result is to 50%' }
    }
];
var proposalsSnapshotColumns = [
    {
        header: 'Title',
        accessorKey: 'title',
        enableSorting: false,
        cell: function (info) {
            if (!info.row.original.link) {
                return formatText(info.getValue(), 40);
            }
            return ((0, jsx_runtime_1.jsx)("a", __assign({ href: info.row.original.link, target: "_blank", rel: "noopener noreferrer" }, { children: formatText(info.getValue(), 40) })));
        }
    },
    {
        header: 'Start',
        accessorKey: 'start',
        cell: function (info) { return (0, utils_1.toNiceDayMonthAndYear)(info.getValue()); },
        meta: { align: 'end' }
    },
    {
        header: 'End',
        accessorKey: 'end',
        cell: function (info) { return (0, utils_1.toNiceDayMonthAndYear)(info.getValue()); },
        meta: { align: 'end' }
    },
    {
        header: 'State',
        id: 'state',
        accessorFn: function (row) { return (row.state === 'closed' ? 0 : 1); },
        cell: function (info) { return ((0, jsx_runtime_1.jsx)(State, __assign({ "data-isactive": info.getValue() === 0 ? false : true }, { children: info.getValue() === 0 ? 'Closed' : 'Active' }))); },
        meta: { align: 'end' }
    },
    {
        header: 'Votes',
        accessorKey: 'scores_total',
        cell: function (info) { return (0, utils_1.formattedNum)(info.getValue()); },
        meta: { align: 'end' }
    },
    {
        header: 'Winning Choice',
        accessorKey: 'winningChoice',
        cell: function (info) { return formatText(info.getValue(), 20) + ' ' + info.row.original.winningPerc; },
        enableSorting: false,
        meta: { align: 'end' }
    },
    {
        header: 'Controversy',
        accessorKey: 'score_curve',
        cell: function (info) { return (info.getValue() ? info.getValue().toFixed(2) : ''); },
        meta: { align: 'end', headerHelperText: 'It is calculated by number of votes * how close result is to 50%' }
    },
    {
        header: 'Discussion',
        accessorKey: 'discussion',
        enableSorting: false,
        cell: function (info) {
            return info.getValue() && ((0, jsx_runtime_1.jsx)("a", __assign({ href: info.getValue(), target: "_blank", rel: "noopener noreferrer" }, { children: "View" })));
        },
        meta: { align: 'end' }
    }
];
var State = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t&[data-isactive='false'] {\n\t\tcolor: #f85149;\n\t}\n\tcolor: #3fb950;\n"], ["\n\t&[data-isactive='false'] {\n\t\tcolor: #f85149;\n\t}\n\tcolor: #3fb950;\n"])));
var formatText = function (text, length) { return (text.length > length ? text.slice(0, length + 1) + '...' : text); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
