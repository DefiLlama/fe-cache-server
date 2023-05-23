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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var link_1 = __importDefault(require("next/link"));
var router_1 = require("next/router");
var react_table_1 = require("@tanstack/react-table");
var styled_components_1 = __importDefault(require("styled-components"));
var swr_1 = __importDefault(require("swr"));
var layout_1 = __importDefault(require("../layout"));
var components_1 = require("../components");
var Search_1 = require("../components/Search");
var shared_1 = require("../components/Table/shared");
var Table_1 = __importDefault(require("../components/Table/Table"));
var ButtonStyled_1 = require("../components/ButtonStyled");
var hooks_1 = require("../hooks");
var utils_1 = require("../utils");
function getContracts(chain, time) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://trending-contracts-api.onrender.com/".concat(chain, "/").concat(time > 119 ? 119 : time))
                        .then(function (res) { return res.json(); })
                        .then(function (r) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {};
                                    return [4 /*yield*/, Promise.all(r.map(function (contract) { return __awaiter(_this, void 0, void 0, function () {
                                            var name, e_1, e_2;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        name = undefined;
                                                        _a.label = 1;
                                                    case 1:
                                                        _a.trys.push([1, 3, , 8]);
                                                        return [4 /*yield*/, fetch("https://raw.githubusercontent.com/verynifty/RolodETH/main/data/".concat(contract.contract.toLowerCase())).then(function (r) { return r.json(); })];
                                                    case 2:
                                                        name = _a.sent();
                                                        if (name.name === undefined) {
                                                            throw new Error('RolodETH: No name');
                                                        }
                                                        return [3 /*break*/, 8];
                                                    case 3:
                                                        e_1 = _a.sent();
                                                        _a.label = 4;
                                                    case 4:
                                                        _a.trys.push([4, 6, , 7]);
                                                        return [4 /*yield*/, fetch("https://api.llama.fi/contractName2/".concat(chain, "/").concat(contract.contract.toLowerCase())).then(function (r) { return r.json(); })];
                                                    case 5:
                                                        name = _a.sent();
                                                        if (name.name === '') {
                                                            throw new Error('Etherescan: Contract not verified');
                                                        }
                                                        return [3 /*break*/, 7];
                                                    case 6:
                                                        e_2 = _a.sent();
                                                        name = undefined;
                                                        return [3 /*break*/, 7];
                                                    case 7: return [3 /*break*/, 8];
                                                    case 8: return [2 /*return*/, __assign(__assign({}, contract), { name: name === null || name === void 0 ? void 0 : name.name })];
                                                }
                                            });
                                        }); }))];
                                case 1: return [2 /*return*/, (_a.results = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function TrendingContracts() {
    var _a;
    var router = (0, router_1.useRouter)();
    var chain = router.query.chain;
    var _b = __read((0, react_1.useState)([{ desc: true, id: 'gas_spend' }]), 2), sorting = _b[0], setSorting = _b[1];
    var _c = __read((0, react_1.useState)(60), 2), value = _c[0], setValue = _c[1];
    var time = (0, hooks_1.useDebounce)(value, 500);
    var activeChain = typeof chain === 'string' ? chain.toLowerCase() : 'ethereum';
    var _d = (0, swr_1.default)("trendingcontracts".concat(time).concat(activeChain), function () { return getContracts(activeChain, time); }), data = _d.data, error = _d.error;
    var results = (_a = data === null || data === void 0 ? void 0 : data.results) !== null && _a !== void 0 ? _a : [];
    var instance = (0, react_table_1.useReactTable)({
        data: results,
        state: {
            sorting: sorting
        },
        columns: columns(activeChain),
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        onSortingChange: setSorting,
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Trending Contracts - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Search_1.ProtocolsChainsSearch, { step: { category: 'Home', name: 'Trending Contracts', hideOptions: true } }), (0, jsx_runtime_1.jsxs)(shared_1.TableFilters, { children: [(0, jsx_runtime_1.jsxs)(shared_1.TableHeader, __assign({ style: { margin: 0 } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Trending Contracts last " }), ' ', (0, jsx_runtime_1.jsx)(Input, { type: "number", value: value, onChange: function (e) {
                                    var newValue = Number(e.target.value);
                                    if (!Number.isNaN(newValue) && newValue <= 120) {
                                        setValue(newValue);
                                    }
                                }, min: 0, max: 120, title: "Enter only numbers between 0 and 120." }), ' ', (0, jsx_runtime_1.jsx)("span", { children: "minutes" })] })), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/trending-contracts?chain=ethereum", shallow: true }, { children: activeChain === 'ethereum' ? ((0, jsx_runtime_1.jsx)(ButtonStyled_1.ButtonDark, __assign({ as: "a" }, { children: "Ethereum" }))) : ((0, jsx_runtime_1.jsx)(ButtonStyled_1.ButtonLight, __assign({ as: "a" }, { children: "Ethereum" }))) })), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/trending-contracts?chain=polygon", shallow: true }, { children: activeChain === 'polygon' ? ((0, jsx_runtime_1.jsx)(ButtonStyled_1.ButtonDark, __assign({ as: "a" }, { children: "Polygon" }))) : ((0, jsx_runtime_1.jsx)(ButtonStyled_1.ButtonLight, __assign({ as: "a" }, { children: "Polygon" }))) })), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "/trending-contracts?chain=arbitrum", shallow: true }, { children: activeChain === 'arbitrum' ? ((0, jsx_runtime_1.jsx)(ButtonStyled_1.ButtonDark, __assign({ as: "a" }, { children: "Arbitrum" }))) : ((0, jsx_runtime_1.jsx)(ButtonStyled_1.ButtonLight, __assign({ as: "a" }, { children: "Arbitrum" }))) }))] }), !data && !error ? ((0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ as: "p", style: { margin: 0, textAlign: 'center' } }, { children: "Loading..." }))) : error ? ((0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ as: "p", style: { margin: 0, textAlign: 'center' } }, { children: "Sorry, couldn't fetch trending contracts." }))) : ((0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance }))] })));
}
exports.default = TrendingContracts;
var columns = function (chain) {
    return [
        {
            header: 'Contract',
            accessorKey: 'contract',
            cell: function (info) {
                var value = info.getValue();
                var name = info.row.original.name;
                return ((0, jsx_runtime_1.jsx)("a", __assign({ href: "https://".concat(chain === 'ethereum' ? 'etherscan.io' : chain === 'arbitrum' ? 'arbiscan.io' : 'polygonscan.com', "/address/").concat(value), target: "_blank", rel: "noopener noreferrer", style: { textDecoration: 'underline' } }, { children: name !== null && name !== void 0 ? name : value.slice(0, 4) + '...' + value.slice(-4) })));
            },
            enableSorting: false
        },
        {
            header: 'Transactions',
            accessorKey: 'txns',
            cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() }); },
            meta: {
                align: 'end'
            }
        },
        {
            header: 'Tx Growth',
            accessorKey: 'txns_percentage_growth',
            cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
            meta: {
                align: 'end'
            }
        },
        {
            header: 'Active Accounts',
            accessorKey: 'active_accounts',
            cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() }); },
            meta: {
                align: 'end'
            }
        },
        {
            header: 'Account Growth',
            accessorKey: 'accounts_percentage_growth',
            cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
            meta: {
                align: 'end'
            }
        },
        {
            header: 'Gas Spent',
            accessorKey: 'gas_spend',
            cell: function (info) { var _a; return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(_a = info.getValue()) === null || _a === void 0 ? void 0 : _a.toFixed(2), " ETH"] }); },
            meta: {
                align: 'end'
            }
        },
        {
            header: 'Gas Growth',
            accessorKey: 'gas_spend_percentage_growth',
            cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
            meta: {
                align: 'end'
            }
        }
    ];
};
var Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding: 4px 6px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tborder: none;\n\tborder-radius: 4px;\n\twidth: 60px;\n"], ["\n\tpadding: 4px 6px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tborder: none;\n\tborder-radius: 4px;\n\twidth: 60px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var templateObject_1;
