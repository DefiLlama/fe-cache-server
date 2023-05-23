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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var layout_1 = __importDefault(require("../layout"));
var api_1 = require("../api");
var constants_1 = require("../constants");
var Theme_1 = require("../Theme");
var shared_1 = require("../components/Table/shared");
var React = __importStar(require("react"));
var react_table_1 = require("@tanstack/react-table");
var Table_1 = __importDefault(require("../components/Table/Table"));
var columns_1 = require("../components/Table/Defi/columns");
var perf_1 = require("../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('treasuries', function () { return __awaiter(void 0, void 0, void 0, function () {
    var treasuries;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(constants_1.PROTOCOLS_TREASURY).then(function (res) { return res.json(); })];
            case 1:
                treasuries = _a.sent();
                return [2 /*return*/, {
                        props: {
                            treasuries: treasuries
                                .map(function (t) {
                                var _a, _b;
                                return (__assign(__assign(__assign({}, t), ['majors', 'others', 'ownTokens', 'stablecoins'].reduce(function (acc, v) {
                                    var _a;
                                    return (__assign(__assign({}, acc), (_a = {}, _a[v] = t.tokenBreakdowns[v], _a)));
                                }, {})), { coreTvl: t.tvl, tvl: t.tvl + ((_b = (_a = t.chainTvls) === null || _a === void 0 ? void 0 : _a['OwnTokens']) !== null && _b !== void 0 ? _b : 0) }));
                            })
                                .sort(function (a, b) { return b.coreTvl - a.coreTvl; })
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function Treasuries(_a) {
    var treasuries = _a.treasuries;
    var _b = __read(React.useState([]), 2), columnFilters = _b[0], setColumnFilters = _b[1];
    var _c = __read(React.useState([]), 2), sorting = _c[0], setSorting = _c[1];
    var instance = (0, react_table_1.useReactTable)({
        data: treasuries,
        columns: columns_1.treasuriesColumns,
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
    var _d = __read(React.useState(''), 2), projectName = _d[0], setProjectName = _d[1];
    React.useEffect(function () {
        var projectsColumns = instance.getColumn('name');
        var id = setTimeout(function () {
            projectsColumns.setFilterValue(projectName);
        }, 200);
        return function () { return clearTimeout(id); };
    }, [projectName, instance]);
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Treasuries - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsxs)(shared_1.TableHeaderAndSearch, { children: [(0, jsx_runtime_1.jsx)(Theme_1.Header, { children: "Protocol Treasuries" }), (0, jsx_runtime_1.jsxs)(shared_1.SearchWrapper, { children: [(0, jsx_runtime_1.jsx)(shared_1.SearchIcon, { size: 16 }), (0, jsx_runtime_1.jsx)("input", { value: projectName, onChange: function (e) {
                                    setProjectName(e.target.value);
                                }, placeholder: "Search projects..." })] })] }), (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance })] })));
}
exports.default = Treasuries;
