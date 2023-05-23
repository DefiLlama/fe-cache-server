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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var react_table_1 = require("@tanstack/react-table");
var react_virtual_1 = require("@tanstack/react-virtual");
var styled_components_1 = __importDefault(require("styled-components"));
var SortIcon_1 = __importDefault(require("./SortIcon"));
var QuestionHelper_1 = __importDefault(require("../QuestionHelper"));
function VirtualTable(_a) {
    var _b, _c;
    var instance = _a.instance, skipVirtualization = _a.skipVirtualization, columnResizeMode = _a.columnResizeMode, rowSize = _a.rowSize, renderSubComponent = _a.renderSubComponent, props = __rest(_a, ["instance", "skipVirtualization", "columnResizeMode", "rowSize", "renderSubComponent"]);
    var _d = __read(React.useState(0), 2), tableTop = _d[0], setTableTop = _d[1];
    var tableContainerRef = React.useRef(null);
    var rows = instance.getRowModel().rows;
    React.useEffect(function () {
        if (tableContainerRef === null || tableContainerRef === void 0 ? void 0 : tableContainerRef.current) {
            setTableTop(tableContainerRef.current.offsetTop);
        }
    }, []);
    var rowVirtualizer = (0, react_virtual_1.useWindowVirtualizer)({
        count: rows.length,
        estimateSize: function () { return rowSize || 50; },
        overscan: 20,
        rangeExtractor: React.useCallback(function (range) {
            if (!tableTop) {
                return (0, react_virtual_1.defaultRangeExtractor)(range);
            }
            var cutoff = tableTop / 40;
            var startIndex = range.startIndex;
            if (range.startIndex <= cutoff) {
                startIndex = 1;
            }
            if (range.startIndex - cutoff > 0) {
                startIndex = range.startIndex - Math.round(cutoff);
            }
            return (0, react_virtual_1.defaultRangeExtractor)(__assign(__assign({}, range), { startIndex: startIndex }));
        }, [tableTop])
    });
    var virtualItems = rowVirtualizer.getVirtualItems();
    var paddingTop = virtualItems.length > 0 ? ((_b = virtualItems === null || virtualItems === void 0 ? void 0 : virtualItems[0]) === null || _b === void 0 ? void 0 : _b.start) || 0 : 0;
    var paddingBottom = virtualItems.length > 0 ? rowVirtualizer.getTotalSize() - (((_c = virtualItems === null || virtualItems === void 0 ? void 0 : virtualItems[virtualItems.length - 1]) === null || _c === void 0 ? void 0 : _c.end) || 0) : 0;
    return ((0, jsx_runtime_1.jsx)(Wrapper, __assign({ ref: tableContainerRef, "data-resizable": columnResizeMode ? true : false }, props, { children: (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: instance.getHeaderGroups().map(function (headerGroup) { return ((0, jsx_runtime_1.jsx)("tr", { children: headerGroup.headers.map(function (header) {
                            var _a;
                            // get header text alignment
                            var meta = header.column.columnDef.meta;
                            var value = (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext());
                            return ((0, jsx_runtime_1.jsx)("th", __assign({ colSpan: header.colSpan, style: { width: header.getSize() } }, { children: (0, jsx_runtime_1.jsxs)(TableHeader, __assign({ align: (_a = meta === null || meta === void 0 ? void 0 : meta.align) !== null && _a !== void 0 ? _a : 'start' }, { children: [header.isPlaceholder ? null : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: header.column.getCanSort() ? ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return header.column.toggleSorting(); } }, { children: value }))) : (value) })), (meta === null || meta === void 0 ? void 0 : meta.headerHelperText) && (0, jsx_runtime_1.jsx)(Helper, { text: meta === null || meta === void 0 ? void 0 : meta.headerHelperText }), header.column.getCanSort() && (0, jsx_runtime_1.jsx)(SortIcon_1.default, { dir: header.column.getIsSorted() }), columnResizeMode && ((0, jsx_runtime_1.jsx)("div", __assign({}, {
                                            onMouseDown: header.getResizeHandler(),
                                            onTouchStart: header.getResizeHandler(),
                                            className: "resizer ".concat(header.column.getIsResizing() ? 'isResizing' : ''),
                                            style: {
                                                transform: columnResizeMode === 'onEnd' && header.column.getIsResizing()
                                                    ? "translateX(".concat(instance.getState().columnSizingInfo.deltaOffset, "px)")
                                                    : ''
                                            }
                                        })))] })) }), header.id));
                        }) }, headerGroup.id)); }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [paddingTop > 0 && !skipVirtualization && ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { style: { height: "".concat(paddingTop, "px") } }) })), (skipVirtualization ? rows : virtualItems).map(function (virtualRow) {
                            var row = rows[virtualRow.index];
                            var trStyle = row.original.disabled ? { opacity: 0.3 } : undefined;
                            return ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)("tr", __assign({ style: trStyle }, { children: row.getVisibleCells().map(function (cell) {
                                            var _a, _b;
                                            // get header text alignment
                                            var textAlign = (_b = (_a = cell.column.columnDef.meta) === null || _a === void 0 ? void 0 : _a.align) !== null && _b !== void 0 ? _b : 'start';
                                            return ((0, jsx_runtime_1.jsx)("td", __assign({ style: { width: cell.column.getSize(), textAlign: textAlign } }, { children: (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()) }), cell.id));
                                        }) }), row.id), renderSubComponent && row.getIsExpanded() && ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", __assign({ colSpan: row.getVisibleCells().length }, { children: renderSubComponent({ row: row }) })) }))] }, row.id));
                        }), paddingBottom > 0 && !skipVirtualization && ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { style: { height: "".concat(paddingBottom, "px") } }) }))] })] }) })));
}
exports.default = VirtualTable;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: calc(100vw - 32px);\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder: 1px solid ", ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n\tborder-radius: 12px;\n\toverflow-x: auto;\n\n\t&[data-resizable='true'] {\n\t\tth,\n\t\ttd {\n\t\t\tborder-right: 1px solid ", ";\n\t\t}\n\t}\n\n\ttable {\n\t\ttable-layout: fixed;\n\t\twidth: 100%;\n\t\tborder-collapse: separate;\n\t\tborder-spacing: 0;\n\t}\n\n\tthead {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tmargin: 0;\n\n\t\tth {\n\t\t\tz-index: 1;\n\n\t\t\t:first-of-type {\n\t\t\t\tborder-radius: 12px 0 0 0;\n\t\t\t}\n\n\t\t\t:last-of-type {\n\t\t\t\tborder-radius: 0 12px 0 0;\n\t\t\t}\n\t\t}\n\t}\n\n\tth,\n\ttd {\n\t\tpadding: 12px;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tbackground-color: ", ";\n\t\tborder-bottom: 1px solid ", ";\n\t}\n\n\ttr > *:first-child {\n\t\tposition: sticky;\n\t\tleft: 0;\n\t\tz-index: 1;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tmax-width: calc(100vw - 276px);\n\t}\n"], ["\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: calc(100vw - 32px);\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder: 1px solid ", ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n\tborder-radius: 12px;\n\toverflow-x: auto;\n\n\t&[data-resizable='true'] {\n\t\tth,\n\t\ttd {\n\t\t\tborder-right: 1px solid ", ";\n\t\t}\n\t}\n\n\ttable {\n\t\ttable-layout: fixed;\n\t\twidth: 100%;\n\t\tborder-collapse: separate;\n\t\tborder-spacing: 0;\n\t}\n\n\tthead {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tmargin: 0;\n\n\t\tth {\n\t\t\tz-index: 1;\n\n\t\t\t:first-of-type {\n\t\t\t\tborder-radius: 12px 0 0 0;\n\t\t\t}\n\n\t\t\t:last-of-type {\n\t\t\t\tborder-radius: 0 12px 0 0;\n\t\t\t}\n\t\t}\n\t}\n\n\tth,\n\ttd {\n\t\tpadding: 12px;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tbackground-color: ", ";\n\t\tborder-bottom: 1px solid ", ";\n\t}\n\n\ttr > *:first-child {\n\t\tposition: sticky;\n\t\tleft: 0;\n\t\tz-index: 1;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tmax-width: calc(100vw - 276px);\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.divider;
}, function (_a) {
    var theme = _a.theme;
    return theme.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.divider;
}, function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
});
var TableHeader = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: ", ";\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tgap: 4px;\n\tfont-weight: 500;\n\tposition: relative;\n\n\t& > * {\n\t\twhite-space: nowrap;\n\t}\n\n\tsvg {\n\t\tflex-shrink: 0;\n\t}\n\n\tbutton {\n\t\tpadding: 0;\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: ", ";\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tgap: 4px;\n\tfont-weight: 500;\n\tposition: relative;\n\n\t& > * {\n\t\twhite-space: nowrap;\n\t}\n\n\tsvg {\n\t\tflex-shrink: 0;\n\t}\n\n\tbutton {\n\t\tpadding: 0;\n\t}\n"])), function (_a) {
    var align = _a.align;
    return (align === 'end' ? 'flex-end' : 'flex-start');
});
var Helper = (0, styled_components_1.default)(QuestionHelper_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tcolor: ", ";\n"], ["\n\tcolor: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var templateObject_1, templateObject_2, templateObject_3;
