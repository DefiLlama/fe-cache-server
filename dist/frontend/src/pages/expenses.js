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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var columns_1 = require("../components/Table/Defi/columns");
var TableWithSearch_1 = require("../components/Table/TableWithSearch");
var layout_1 = __importDefault(require("../layout"));
var perf_1 = require("../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('expenses', function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, protocols, parentProtocols, expenses;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, protocols_1.getProtocolsRaw)()];
            case 1:
                _a = _b.sent(), protocols = _a.protocols, parentProtocols = _a.parentProtocols;
                return [4 /*yield*/, fetch('https://raw.githubusercontent.com/DefiLlama/defillama-server/master/defi/src/operationalCosts/output/expenses.json').then(function (r) { return r.json(); })];
            case 2:
                expenses = _b.sent();
                return [2 /*return*/, {
                        props: {
                            expenses: expenses
                                .map(function (e) {
                                var _a, _b;
                                var protocol = (_a = protocols
                                    .concat(parentProtocols.map(function (p) { return (__assign(__assign({}, p), { defillamaId: p.id })); }))
                                    .find(function (p) { return p.defillamaId === e.protocolId; })) !== null && _a !== void 0 ? _a : null;
                                var sumAnnualUsdExpenses = Object.values(e.annualUsdCost).reduce(function (sum, x) { return sum + x; });
                                return __assign(__assign({}, e), { name: (_b = protocol === null || protocol === void 0 ? void 0 : protocol.name) !== null && _b !== void 0 ? _b : '', protocol: protocol, avgCostPerFTE: sumAnnualUsdExpenses / e.headcount, sumAnnualUsdExpenses: sumAnnualUsdExpenses });
                            })
                                .sort(function (a, b) { return b.sumAnnualUsdExpenses - a.sumAnnualUsdExpenses; })
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function Protocols(props) {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "Protocol Expenses - DefiLlama", defaultSEO: true }, { children: (0, jsx_runtime_1.jsx)(TableWithSearch_1.TableWithSearch, { data: props.expenses, columns: columns_1.expensesColumns, columnToSearch: 'name', placeholder: 'Search protocol...' }) })));
}
exports.default = Protocols;
