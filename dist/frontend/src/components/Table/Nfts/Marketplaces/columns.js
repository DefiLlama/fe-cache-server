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
exports.columns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("../../../../utils");
var TokenLogo_1 = __importDefault(require("../../../../components/TokenLogo"));
var shared_1 = require("../../shared");
var styled_components_1 = __importDefault(require("styled-components"));
exports.columns = [
    {
        header: 'Name',
        accessorKey: 'exchangeName',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            var name = getValue();
            var icon = row.original.exchangeName.toLowerCase().replace(' aggregator', '').replace(' ', '-');
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), " ", (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: "https://icons.llamao.fi/icons/protocols/".concat(icon), "data-lgonly": true }), name] }));
        },
        size: 280
    },
    {
        header: 'Volume change',
        accessorKey: 'weeklyChange',
        size: 160,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? (0, utils_1.formattedPercent)(info.getValue()) : null }); },
        meta: {
            align: 'end',
            headerHelperText: 'Change of last 7d volume over the previous 7d volume'
        }
    },
    {
        header: 'Volume 1d',
        accessorKey: '1DayVolume',
        size: 130,
        cell: function (info) { return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? ((0, jsx_runtime_1.jsxs)(ValueWithETH, { children: [(0, jsx_runtime_1.jsx)("span", { children: (+info.getValue()).toFixed(2) }), (0, jsx_runtime_1.jsxs)("svg", __assign({ fill: "#777E91", "data-eth": true, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 6 9" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.56641 4.55935L2.76099 0L0 4.56239L2.78244 6.22185L5.56641 4.55935Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.56641 5.11627L2.77631 6.74082L0 5.11627L2.78244 8.99999L5.56641 5.11627Z" })] }))] })) : ('') })); },
        meta: {
            align: 'end',
            headerHelperText: '24h rolling volume'
        }
    },
    {
        header: 'Volume 7d',
        accessorKey: '7DayVolume',
        size: 130,
        cell: function (info) { return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? ((0, jsx_runtime_1.jsxs)(ValueWithETH, { children: [(0, jsx_runtime_1.jsx)("span", { children: (+info.getValue()).toFixed(2) }), (0, jsx_runtime_1.jsxs)("svg", __assign({ fill: "#777E91", "data-eth": true, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 6 9" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.56641 4.55935L2.76099 0L0 4.56239L2.78244 6.22185L5.56641 4.55935Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.56641 5.11627L2.77631 6.74082L0 5.11627L2.78244 8.99999L5.56641 5.11627Z" })] }))] })) : ('') })); },
        meta: {
            align: 'end',
            headerHelperText: '7day rolling volume'
        }
    },
    {
        header: 'Market Share',
        accessorKey: 'pctOfTotal',
        size: 150,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? (+info.getValue()).toFixed(2) + '%' : null }); },
        meta: {
            align: 'end',
            headerHelperText: 'based on Volume 1d'
        }
    },
    {
        header: 'Trades 1d',
        accessorKey: '1DayNbTrades',
        size: 130,
        meta: {
            align: 'end',
            headerHelperText: '24h rolling trades'
        }
    },
    {
        header: 'Trades 7d',
        accessorKey: '7DayNbTrades',
        size: 130,
        meta: {
            align: 'end',
            headerHelperText: '7day rolling trades'
        }
    },
    {
        header: '% Wash Volume 7d',
        accessorKey: 'washVolume7DPct',
        size: 190,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? (+info.getValue()).toFixed(2) + '%' : null }); },
        meta: {
            align: 'end',
            headerHelperText: '% of inorganic trades relative to organic ones over last 7days rolling. All our values are exclusive of wash trades'
        }
    }
];
var ValueWithETH = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tjustify-content: flex-end;\n\tflex-wrap: nowrap;\n\n\t& > *[data-eth] {\n\t\theight: 12px;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tjustify-content: flex-end;\n\tflex-wrap: nowrap;\n\n\t& > *[data-eth] {\n\t\theight: 12px;\n\t}\n"])));
var templateObject_1;
