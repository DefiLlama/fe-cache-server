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
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var layout_1 = __importDefault(require("../../layout"));
var components_1 = require("../../components");
var Link_1 = __importDefault(require("../../components/Link"));
var indexLoop_1 = __importDefault(require("../../components/YieldsPage/indexLoop"));
var Announcement_1 = __importDefault(require("../../components/Announcement"));
var utils_1 = require("../../components/YieldsPage/utils");
var api_1 = require("../../api");
var yield_1 = require("../../api/categories/yield");
var perf_1 = require("../../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('yields/loop', function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, cgTokens, tokens;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, yield_1.getLendBorrowData)()];
            case 1:
                data = __rest.apply(void 0, [(_a.sent()).props, []]);
                return [4 /*yield*/, (0, api_1.getAllCGTokensList)()];
            case 2:
                cgTokens = _a.sent();
                tokens = [];
                cgTokens.forEach(function (token) {
                    if (token.symbol) {
                        tokens.push({
                            name: token.name,
                            symbol: token.symbol.toUpperCase(),
                            logo: token.image2 || null,
                            fallbackLogo: token.image || null
                        });
                    }
                });
                return [2 /*return*/, {
                        props: __assign(__assign({}, data), { pools: (0, yield_1.calculateLoopAPY)(data.pools.filter(function (p) { return p.category !== 'CDP'; }), 10, null), tokens: tokens }),
                        revalidate: (0, api_1.maxAgeForNext)([23])
                    }];
        }
    });
}); });
var methodologyMessage = "\nAssume a deposit of $1k into a pool with the following parameters:\n- Supply APY: 3% Deposit APY + 6% Reward APY = 9%\n- Borrow APY: -5% Borrow APY + 8% Reward APY = 3%\n- LTV: 75%\n\nStep 1: deposit $1000\nStep 2: borrow $750\nStep 3: deposit $750\n\nTotal Deposits: $1750 -> 1.75x the original $1k\nTotal Borrowed: $750\n\nLoop APY: 9% * 1.75 + 3% * 0.75 = 18% -> 2x increase compared to the Supply APY\n\nYou could keep adding leverage by repeating these steps n-times.\n";
function YieldBorrow(data) {
    var _a = __read((0, react_1.useState)(false), 2), methodologyActivated = _a[0], setMethodologyActivated = _a[1];
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Lend/Borrow rates - DefiLlama Yield", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Announcement_1.default, { children: utils_1.disclaimer }), (0, jsx_runtime_1.jsxs)(components_1.PanelThicc, __assign({ as: "p", style: { whiteSpace: 'pre-line', display: 'block' } }, { children: ["This page displays leveraged lending APY values. The way this works:", (0, jsx_runtime_1.jsx)("br", {}), "1. deposit collateral amount N into pool X", (0, jsx_runtime_1.jsx)("br", {}), "2. using your collateral, borrow from the same pool X using the max LTV", (0, jsx_runtime_1.jsx)("br", {}), "3. deposit the borrowed amount M into pool X", (0, jsx_runtime_1.jsx)(Link_1.default, { children: (0, jsx_runtime_1.jsx)(components_1.StyledAnchor, __assign({ onClick: function () { return setMethodologyActivated(true); }, style: { display: 'block' } }, { children: (0, jsx_runtime_1.jsx)("b", { children: "Example" }) })) }), methodologyActivated && methodologyMessage] })), (0, jsx_runtime_1.jsx)(indexLoop_1.default, __assign({}, data))] })));
}
exports.default = YieldBorrow;
