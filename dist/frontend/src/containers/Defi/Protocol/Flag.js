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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flag = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dialog_1 = require("ariakit/dialog");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var components_1 = require("../../../components");
var Base_1 = require("../../../components/Filters/common/Base");
var Tooltip_1 = require("../../../components/Tooltip");
function Flag(_a) {
    var _this = this;
    var protocol = _a.protocol, dataType = _a.dataType, isLending = _a.isLending;
    var _b = __read((0, react_1.useState)(false), 2), loading = _b[0], setLoading = _b[1];
    var dialog = (0, dialog_1.useDialogState)();
    var onSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var form, data;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    form = e.target;
                    return [4 /*yield*/, fetch('https://api.llama.fi/reportError', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                protocol: protocol,
                                dataType: (_b = dataType !== null && dataType !== void 0 ? dataType : (_a = form.dataType) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '',
                                message: (_d = (_c = form.message) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '',
                                correctSource: (_f = (_e = form.correctSource) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : ''
                            })
                        }).finally(function () {
                            setLoading(false);
                            dialog.setOpen(false);
                        })];
                case 1:
                    data = _g.sent();
                    return [2 /*return*/, data];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [dataType ? ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip2, __assign({ content: "Report incorrect data" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ onClick: dialog.toggle }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.Flag, { size: 14 }) })) }))) : ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: dialog.toggle, style: { textAlign: 'left', margin: 'auto 0 0 -4px', textDecoration: 'underline' } }, { children: "Report incorrect data" }))), (0, jsx_runtime_1.jsxs)(dialog_1.Dialog, __assign({ state: dialog, className: "dialog" }, { children: [isLending && ((0, jsx_runtime_1.jsx)("p", __assign({ style: { textAlign: 'center', color: 'red' } }, { children: "For lending protocols TVL doesn't include borrowed coins by default" }))), (0, jsx_runtime_1.jsxs)(Base_1.DialogForm, __assign({ onSubmit: onSubmit, "data-variant": "secondary" }, { children: [(0, jsx_runtime_1.jsxs)("label", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Protocol" }), (0, jsx_runtime_1.jsx)("input", { name: "protocol", value: protocol, disabled: true })] }), (0, jsx_runtime_1.jsxs)("label", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Data Type" }), dataType ? ((0, jsx_runtime_1.jsx)("input", { name: "dataType", value: dataType, disabled: true })) : ((0, jsx_runtime_1.jsxs)("select", __assign({ name: "dataType" }, { children: [(0, jsx_runtime_1.jsx)("option", __assign({ value: "TVL" }, { children: "TVL" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Mcap" }, { children: "Mcap" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Token Price" }, { children: "Token Price" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Token Volume" }, { children: "Token Volume" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Token Liquidity" }, { children: "Token Liquidity" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "FDV" }, { children: "FDV" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Volume" }, { children: "Volume" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Fees" }, { children: "Fees" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Revenue" }, { children: "Revenue" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Unlocks" }, { children: "Unlocks" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Active Users" }, { children: "Active Users" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "New Users" }, { children: "New Users" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Transactions" }, { children: "Transactions" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Gas Used" }, { children: "Gas Used" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Staking" }, { children: "Staking" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Borrowed" }, { children: "Borrowed" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Median APY" }, { children: "Median APY" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "USD Inflows" }, { children: "USD Inflows" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Governance" }, { children: "Governance" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Bridge Volume" }, { children: "Bridge Volume" })), (0, jsx_runtime_1.jsx)("option", __assign({ value: "Events" }, { children: "Events" }))] })))] }), (0, jsx_runtime_1.jsxs)("label", { children: [(0, jsx_runtime_1.jsx)("span", { children: "What's wrong about it? (optional)" }), (0, jsx_runtime_1.jsx)("textarea", { name: "message" })] }), (0, jsx_runtime_1.jsxs)("label", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Where can we find correct information? (optional)" }), (0, jsx_runtime_1.jsx)("textarea", { name: "correctSource" })] }), (0, jsx_runtime_1.jsx)(components_1.FormSubmitBtn, __assign({ name: "submit-btn", disabled: loading }, { children: "Report" }))] }))] }))] }));
}
exports.Flag = Flag;
