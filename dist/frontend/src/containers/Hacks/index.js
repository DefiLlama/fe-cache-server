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
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var layout_1 = __importDefault(require("../../layout"));
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
var react_table_1 = require("@tanstack/react-table");
var Table_1 = __importDefault(require("../../components/Table/Table"));
var columns_1 = require("../../components/Table/Defi/columns");
var components_1 = require("../../components");
var useWindowSize_1 = __importDefault(require("../../hooks/useWindowSize"));
var PeggedPage_1 = require("../../components/PeggedPage");
var PieChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/PieChart')); }); }, {
    ssr: false
});
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
var columnResizeMode = 'onChange';
function HacksTable(_a) {
    var data = _a.data;
    var _b = __read(React.useState([]), 2), columnFilters = _b[0], setColumnFilters = _b[1];
    var _c = __read(React.useState([]), 2), columnOrder = _c[0], setColumnOrder = _c[1];
    var _d = __read(React.useState([{ desc: true, id: 'date' }]), 2), sorting = _d[0], setSorting = _d[1];
    var _e = __read(React.useState(''), 2), projectName = _e[0], setProjectName = _e[1];
    var windowSize = (0, useWindowSize_1.default)();
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns_1.hacksColumns,
        columnResizeMode: columnResizeMode,
        state: {
            columnFilters: columnFilters,
            columnOrder: columnOrder,
            sorting: sorting
        },
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    React.useEffect(function () {
        var _a, _b;
        var defaultOrder = instance.getAllLeafColumns().map(function (d) { return d.id; });
        var order = windowSize.width
            ? (_b = (_a = columns_1.hacksColumnOrders.find(function (_a) {
                var _b = __read(_a, 1), size = _b[0];
                return windowSize.width > size;
            })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : defaultOrder
            : defaultOrder;
        instance.setColumnOrder(order);
    }, [windowSize, instance]);
    React.useEffect(function () {
        var projectsColumns = instance.getColumn('name');
        var id = setTimeout(function () {
            projectsColumns.setFilterValue(projectName);
        }, 200);
        return function () { return clearTimeout(id); };
    }, [projectName, instance]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(TableFilters, { children: [(0, jsx_runtime_1.jsx)(SearchIcon, { size: 16 }), (0, jsx_runtime_1.jsx)("input", { value: projectName, onChange: function (e) {
                            setProjectName(e.target.value);
                        }, placeholder: "Search projects..." })] }), (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance, columnResizeMode: columnResizeMode })] }));
}
var HacksContainer = function (_a) {
    var data = _a.data, monthlyHacks = _a.monthlyHacks, totalHacked = _a.totalHacked, totalHackedDefi = _a.totalHackedDefi, totalRugs = _a.totalRugs, pieChartData = _a.pieChartData;
    var _b = __read(React.useState('Total Value Hacked'), 2), chartType = _b[0], setChartType = _b[1];
    var chartTypeList = ['Total Value Hacked', 'Pie'];
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Hacks - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsxs)(components_1.ChartAndValuesWrapper, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanels, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Total Value Hacked (USD)" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#4f8fea' } }, { children: [totalHacked, "b"] }))] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Total Value Hacked in DeFi (USD)" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#bd3399' } }, { children: [totalHackedDefi, "b"] }))] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Total Value Hacked in Bridges (USD)" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#bd3399' } }, { children: [totalRugs, "b"] }))] })] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, __assign({ id: "chartWrapper", style: { gap: '16px', minHeight: '450px', justifyContent: 'space-between' } }, { children: [(0, jsx_runtime_1.jsx)(PeggedPage_1.ChartSelector, { options: chartTypeList, selectedChart: chartType, onClick: setChartType }), chartType === 'Total Value Hacked' && monthlyHacks ? ((0, jsx_runtime_1.jsx)(BarChart, { chartData: Object.entries(monthlyHacks).map(function (t) { return [new Date(t[0]).getTime() / 1e3, Number(t[1]) * 1e6]; }), title: "Monthly sum" })) : ((0, jsx_runtime_1.jsx)(PieChart, { chartData: pieChartData }))] }))] }), (0, jsx_runtime_1.jsx)(HacksTable, { data: data })] })));
};
var SearchIcon = (0, styled_components_1.default)(react_feather_1.Search)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 8px;\n\tcolor: ", ";\n"], ["\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 8px;\n\tcolor: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text3;
});
var TableFilters = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin: 0 0 -20px;\n\tposition: relative;\n\n\tinput {\n\t\twidth: 100%;\n\t\tmargin-right: auto;\n\t\tborder-radius: 8px;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\n\t\tfont-size: 0.875rem;\n\t\tborder: none;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tinput {\n\t\t\tmax-width: 400px;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin: 0 0 -20px;\n\tposition: relative;\n\n\tinput {\n\t\twidth: 100%;\n\t\tmargin-right: auto;\n\t\tborder-radius: 8px;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\n\t\tfont-size: 0.875rem;\n\t\tborder: none;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tinput {\n\t\t\tmax-width: 400px;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#000' : '#fff');
}, function (_a) {
    var bpSm = _a.theme.bpSm;
    return bpSm;
});
exports.default = HacksContainer;
var templateObject_1, templateObject_2;
