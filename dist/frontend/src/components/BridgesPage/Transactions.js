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
exports.ToggleWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../../Theme");
var components_1 = require("../../components");
var Bridges_1 = require("../../components/Search/Bridges");
var ariakit_1 = require("ariakit");
var constants_1 = require("../../constants");
var utils_1 = require("../../utils");
var SearchWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\twidth: 100%;\n\tmargin-top: 8px;\n\n\t& > * {\n\t\tgap: 8px;\n\t\tflex: 1;\n\t}\n\n\t& > * {\n\t\t& > *[data-searchicon='true'] {\n\t\t\ttop: 14px;\n\t\t\tright: 16px;\n\t\t}\n\t}\n\n\t@media (min-width: ", ") {\n\t\tflex-direction: row;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\twidth: 100%;\n\tmargin-top: 8px;\n\n\t& > * {\n\t\tgap: 8px;\n\t\tflex: 1;\n\t}\n\n\t& > * {\n\t\t& > *[data-searchicon='true'] {\n\t\t\ttop: 14px;\n\t\t\tright: 16px;\n\t\t}\n\t}\n\n\t@media (min-width: ", ") {\n\t\tflex-direction: row;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpMed;
});
exports.ToggleWrapper = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tgap: 8px;\n\tcursor: pointer;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: nowrap;\n\tgap: 8px;\n\tcursor: pointer;\n"])));
var StyledFormInput = (0, styled_components_1.default)(ariakit_1.FormInput)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tcolor: ", ";\n\tbackground: ", ";\n"], ["\n\tcolor: ", ";\n\tbackground: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text6;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg4;
});
var StyledFormSubmit = (0, styled_components_1.default)(ariakit_1.FormSubmit)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: none;\n\tborder-radius: 12px;\n\toutline: ", ";\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\t}\n"], ["\n\tcolor: ", ";\n\tbackground: ", ";\n\tborder: none;\n\tborder-radius: 12px;\n\toutline: ", ";\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text6;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.divider;
});
var DateInputField = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tpadding: 14px 16px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tborder: none;\n\tborder-radius: 12px;\n\toutline: none;\n\n\t::placeholder {\n\t\tcolor: ", ";\n\t\tfont-size: 1rem;\n\t}\n\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\t}\n"], ["\n\tpadding: 14px 16px;\n\tbackground: ", ";\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tborder: none;\n\tborder-radius: 12px;\n\toutline: none;\n\n\t::placeholder {\n\t\tcolor: ", ";\n\t\tfont-size: 1rem;\n\t}\n\n\t&[data-focus-visible] {\n\t\toutline: ", ";\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tborder: 1px solid ", ";\n\t\tborder-bottom: 0;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg6;
}, function (_a) {
    var theme = _a.theme;
    return theme.text6;
}, function (_a) {
    var theme = _a.theme;
    return theme.text3;
}, function (_a) {
    var theme = _a.theme;
    return '1px solid ' + theme.text4;
}, function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.divider;
});
var Wrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\n\t@media screen and (min-width: ", ") {\n\t\tdisplay: flex;\n\t\tborder-radius: 12px;\n\t\tbox-shadow: ", ";\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\n\t@media screen and (min-width: ", ") {\n\t\tdisplay: flex;\n\t\tborder-radius: 12px;\n\t\tbox-shadow: ", ";\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
var BridgeTransactionsPage = function (_a) {
    var bridges = _a.bridges;
    var form = (0, ariakit_1.useFormState)({
        defaultValues: { startDate: '', endDate: '', selectedBridge: '' }
    });
    var _b = __read(React.useState("Search..."), 2), placeholder = _b[0], setPlaceholder = _b[1];
    var downloadCsv = function (transactions) {
        {
            var rows_1 = [
                [
                    'Timestamp',
                    'Date',
                    'Bridge',
                    'Chain',
                    'Deposit/Withdrawal',
                    'Token',
                    'Amount',
                    'USD Value',
                    'From',
                    'To',
                    'Hash'
                ]
            ];
            transactions.forEach(function (tx) {
                var timestamp = Math.floor(new Date(tx.ts).getTime() / 1000).toString();
                rows_1.push([
                    timestamp,
                    (0, utils_1.toNiceCsvDate)(timestamp),
                    tx.bridge_name,
                    tx.chain,
                    tx.is_deposit ? 'withdrawal' : 'deposit',
                    tx.token,
                    tx.amount,
                    tx.usd_value,
                    tx.tx_from,
                    tx.tx_to,
                    tx.tx_hash
                ]);
            });
            (0, utils_1.download)("bridge-transactions.csv", rows_1
                .sort(function (a, b) { return parseInt(a[0]) - parseInt(b[0]); })
                .map(function (r) { return r.join(','); })
                .join('\n'));
        }
    };
    form.useSubmit(function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, startDate, endDate, selectedBridge, startTimestamp, endTimestamp, selectedBridgeData, bridgeId, accTransactions, numberTxsReturned, earliestTsReturned, endTimestampParam, iterations, transactions, earliestTx;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = form.values, startDate = _a.startDate, endDate = _a.endDate, selectedBridge = _a.selectedBridge;
                    startTimestamp = Math.floor(new Date(startDate).getTime() / 1000);
                    endTimestamp = Math.floor(new Date(endDate).getTime() / 1000) + 86400;
                    selectedBridgeData = bridges.find(function (bridge) { return bridge.displayName === selectedBridge; });
                    bridgeId = selectedBridgeData === null || selectedBridgeData === void 0 ? void 0 : selectedBridgeData.id;
                    if (!bridgeId)
                        return [2 /*return*/];
                    accTransactions = [];
                    numberTxsReturned = 0;
                    earliestTsReturned = 0;
                    endTimestampParam = endTimestamp;
                    iterations = 0;
                    _b.label = 1;
                case 1: return [4 /*yield*/, fetch("".concat(constants_1.BRIDGETX_API, "/").concat(bridgeId, "?starttimestamp=").concat(startTimestamp, "&endtimestamp=").concat(endTimestampParam)).then(function (resp) { return resp.json(); })];
                case 2:
                    transactions = _b.sent();
                    numberTxsReturned = transactions === null || transactions === void 0 ? void 0 : transactions.length;
                    if (numberTxsReturned) {
                        earliestTx = transactions[transactions.length - 1];
                        earliestTsReturned = Math.floor(new Date(earliestTx.ts).getTime() / 1000);
                        endTimestampParam = earliestTsReturned;
                        iterations += 1;
                        accTransactions = __spreadArray(__spreadArray([], __read(transactions), false), __read(accTransactions), false);
                    }
                    else
                        return [3 /*break*/, 4];
                    _b.label = 3;
                case 3:
                    if (numberTxsReturned === 6000 && iterations < 50) return [3 /*break*/, 1];
                    _b.label = 4;
                case 4:
                    downloadCsv(accTransactions);
                    return [2 /*return*/];
            }
        });
    }); });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Theme_1.Header, { children: "Generate Bridge Transactions CSV" }), (0, jsx_runtime_1.jsx)(ariakit_1.Form, __assign({ state: form }, { children: (0, jsx_runtime_1.jsxs)(SearchWrapper, { children: [(0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsxs)(DateInputField, { children: [(0, jsx_runtime_1.jsx)(ariakit_1.FormLabel, __assign({ name: form.names.startDate }, { children: "Start Date" })), (0, jsx_runtime_1.jsx)(StyledFormInput, { name: form.names.startDate, type: "date", required: true }), (0, jsx_runtime_1.jsx)(ariakit_1.FormError, { name: form.names.startDate, className: "error" })] }) }), (0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsxs)(DateInputField, { children: [(0, jsx_runtime_1.jsx)(ariakit_1.FormLabel, __assign({ name: form.names.endDate }, { children: "End Date" })), (0, jsx_runtime_1.jsx)(StyledFormInput, { name: form.names.endDate, type: "date", required: true }), (0, jsx_runtime_1.jsx)(ariakit_1.FormError, { name: form.names.endDate, className: "error" })] }) }), (0, jsx_runtime_1.jsx)(Bridges_1.BridgesSearchSelect, { formValueToEdit: form.values, formProperty: 'selectedBridge', placeholder: placeholder, click: function (item) { return setPlaceholder(item); } }), (0, jsx_runtime_1.jsx)(StyledFormSubmit, __assign({ onClick: function () { return setPlaceholder("Search..."); } }, { children: "Generate CSV" }))] }) })), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ as: "p", style: { margin: 0, textAlign: 'center' } }, { children: "Download a CSV with all indexed transactions within a date range for chosen bridge." }))] }));
};
exports.default = BridgeTransactionsPage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
