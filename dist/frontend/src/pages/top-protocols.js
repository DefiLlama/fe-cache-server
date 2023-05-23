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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../Theme");
var layout_1 = __importDefault(require("../layout"));
var Link_1 = require("../components/Link");
var TokenLogo_1 = __importDefault(require("../components/TokenLogo"));
var utils_1 = require("../utils");
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var Table_1 = __importDefault(require("../components/Table/Table"));
var react_table_1 = require("@tanstack/react-table");
var shared_1 = require("../components/Table/shared");
var categories_1 = require("./categories");
var perf_1 = require("../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('top-protocols', function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, protocols, chains, topProtocolPerChainAndCategory, data, uniqueCategories, columns;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, protocols_1.getSimpleProtocolsPageData)(['name', 'extraTvl', 'chainTvls', 'category'])];
            case 1:
                _a = _b.sent(), protocols = _a.protocols, chains = _a.chains;
                topProtocolPerChainAndCategory = Object.fromEntries(chains.map(function (c) { return [c, {}]; }));
                protocols.forEach(function (p) {
                    var chainTvls = p.chainTvls, category = p.category, name = p.name;
                    Object.entries(chainTvls).forEach(function (_a) {
                        var _b = __read(_a, 2), chain = _b[0], tvl = _b[1].tvl;
                        if (topProtocolPerChainAndCategory[chain] === undefined) {
                            return;
                        }
                        var currentTopProtocol = topProtocolPerChainAndCategory[chain][category];
                        if (currentTopProtocol === undefined || tvl > currentTopProtocol[1]) {
                            topProtocolPerChainAndCategory[chain][category] = [name, tvl];
                        }
                    });
                });
                data = [];
                uniqueCategories = new Set();
                chains.forEach(function (chain) {
                    var categories = topProtocolPerChainAndCategory[chain];
                    var values = {};
                    for (var cat in categories) {
                        uniqueCategories.add(cat);
                        values[cat] = categories[cat][0];
                    }
                    data.push(__assign({ chain: chain }, values));
                });
                columns = Array.from(uniqueCategories).map(function (item) {
                    var _a;
                    return ({
                        header: item,
                        accessorKey: item,
                        enableSorting: false,
                        meta: {
                            headerHelperText: (_a = categories_1.descriptions[item]) !== null && _a !== void 0 ? _a : null
                        }
                    });
                });
                return [2 /*return*/, {
                        props: {
                            data: data,
                            columns: columns
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function Chains(_a) {
    var data = _a.data, columns = _a.columns;
    var allColumns = (0, react_1.useMemo)(function () { return __spreadArray([
        {
            header: 'Chain',
            accessorKey: 'chain',
            enableSorting: false,
            cell: function (_a) {
                var getValue = _a.getValue, row = _a.row;
                return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: row.index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.chainIconUrl)(getValue()) }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/chain/".concat(getValue()) }, { children: getValue() }))] }));
            },
            size: 200
        }
    ], __read(columns.map(function (column) { return (__assign(__assign({}, column), { cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/protocol/".concat((0, utils_1.slug)(getValue())) }, { children: getValue() }));
        } })); })), false); }, [columns]);
    var instance = (0, react_table_1.useReactTable)({
        data: data,
        columns: allColumns,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)()
    });
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "TVL Rankings - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.largeHeader, __assign({ style: { marginTop: '8px' } }, { children: "Top Protocols" })), (0, jsx_runtime_1.jsx)(Table, { instance: instance, skipVirtualization: true })] })));
}
exports.default = Chains;
var Table = (0, styled_components_1.default)(Table_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\theight: 85vh;\n\n\tthead {\n\t\tz-index: 2;\n\t}\n\n\tthead > tr > th:first-child {\n\t\tposition: sticky;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n\n\ttd,\n\tth {\n\t\tborder-right: 1px solid ", ";\n\t}\n\n\ttr:hover {\n\t\tbackground: ", ";\n\t}\n"], ["\n\theight: 85vh;\n\n\tthead {\n\t\tz-index: 2;\n\t}\n\n\tthead > tr > th:first-child {\n\t\tposition: sticky;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n\n\ttd,\n\tth {\n\t\tborder-right: 1px solid ", ";\n\t}\n\n\ttr:hover {\n\t\tbackground: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.divider;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
});
var templateObject_1;
