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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeTxDownloadButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var components_1 = require("../../components");
var utils_1 = require("../../utils");
var DownloadButtonContainer = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: none;\n\tpadding: 4px 6px;\n\tborder-radius: 6px;\n\tbackground: ", ";\n\tbottom: 8px;\n\tright: 8px;\n\talign-items: center;\n\theight: 28px;\n\n\t@media (min-width: 80rem) {\n\t\tdisplay: flex;\n\t}\n"], ["\n\tdisplay: none;\n\tpadding: 4px 6px;\n\tborder-radius: 6px;\n\tbackground: ", ";\n\tbottom: 8px;\n\tright: 8px;\n\talign-items: center;\n\theight: 28px;\n\n\t@media (min-width: 80rem) {\n\t\tdisplay: flex;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
var LargeTxDownloadButton = function (_a) {
    var data = _a.data;
    return ((0, jsx_runtime_1.jsxs)(DownloadButtonContainer, __assign({ onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_a) {
                rows = [
                    [
                        'Timestamp',
                        'Date',
                        'Bridge',
                        'Chain',
                        'Deposit/Withdrawal',
                        'Symbol',
                        'USD Value',
                        'Token',
                        'Amount',
                        'From',
                        'To',
                        'Hash'
                    ]
                ];
                data
                    .sort(function (a, b) { return a.date - b.date; })
                    .forEach(function (tx) {
                    var _a, _b;
                    rows.push([
                        tx.date,
                        (0, utils_1.toNiceCsvDate)(tx.date),
                        tx.bridge,
                        tx.chain,
                        tx.isDeposit ? 'withdrawal' : 'deposit',
                        (_a = tx.symbol.split('#')[0]) !== null && _a !== void 0 ? _a : '',
                        tx.usdValue,
                        tx.token,
                        tx.amount,
                        tx.from,
                        tx.to,
                        (_b = tx.txHash.split(':')[1]) !== null && _b !== void 0 ? _b : ''
                    ]);
                });
                (0, utils_1.download)("bridge-transactions.csv", rows.map(function (r) { return r.join(','); }).join('\n'));
                return [2 /*return*/];
            });
        }); } }, { children: [(0, jsx_runtime_1.jsx)(components_1.DownloadIcon, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0Download all transactions" })] })));
};
exports.LargeTxDownloadButton = LargeTxDownloadButton;
var templateObject_1;
