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
var Theme_1 = require("../Theme");
var layout_1 = __importDefault(require("../layout"));
var components_1 = require("../components");
var Row_1 = require("../components/Row");
var Link_1 = __importDefault(require("../components/Link"));
var press_1 = require("./press");
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var utils_1 = require("../utils");
var perf_1 = require("../utils/perf");
function Section(_a) {
    var title = _a.title, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.largeHeader, { children: title }), (0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, { children: children })] }));
}
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('donations', function () { return __awaiter(void 0, void 0, void 0, function () {
    var protocols;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, protocols_1.getSimpleProtocolsPageData)(['name', 'logo', 'url', 'referralUrl'])];
            case 1:
                protocols = (_a.sent()).protocols;
                return [2 /*return*/, {
                        props: {
                            protocols: protocols
                                .filter(function (p) { return p.referralUrl !== undefined; })
                                .map(function (protocol) { return ({
                                name: protocol.name,
                                logo: (0, utils_1.tokenIconUrl)(protocol.name),
                                url: protocol.referralUrl
                            }); })
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function PressPage(_a) {
    var protocols = _a.protocols;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Donations - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Row_1.RowBetween, { children: (0, jsx_runtime_1.jsx)(Theme_1.TYPE.largeHeader, { children: "Donations" }) }), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ style: { marginTop: '6px' } }, { children: (0, jsx_runtime_1.jsxs)(press_1.DashGrid, __assign({ style: { height: 'fit-content', padding: '0 0 1rem 0' } }, { children: [(0, jsx_runtime_1.jsx)(Section, __assign({ title: "Why donate?" }, { children: "DefiLlama is an open-source project that runs no ads and provides all data for free. We have no revenue and are supported by donations." })), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Section, __assign({ title: "Gitcoin" }, { children: ["Donations on gitcoin get matched with donations from a quadratic funding pool, so a small 1$ donation can get heavily amplified.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "DefiLlama has the following grants:", (0, jsx_runtime_1.jsx)("ul", { children: [
                                        ['LlamaPay', 'https://gitcoin.co/grants/7077/llamapay'],
                                        ['DefiLlama', 'https://gitcoin.co/grants/3591/defillama'],
                                        ['DefiLlama APIs', 'https://gitcoin.co/grants/7087/defillama-apis'],
                                        ['Chainlist', 'https://gitcoin.co/grants/7791/chainlist']
                                    ].map(function (el) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: el[1], external: true }, { children: el[0] })) }, el[0])); }) })] })), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Section, __assign({ title: "Affiliate links" }, { children: ["DefiLlama has referral links for all these protocols, using them with our referral sends us some rewards:", (0, jsx_runtime_1.jsx)("ul", { children: protocols.map(function (p) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: p.url, external: true }, { children: p.name })) }, p.name)); }) })] })), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsx)(Section, __assign({ title: "Direct donation" }, { children: "You can send us any token, on any network, to the following address: 0x08a3c2A819E3de7ACa384c798269B3Ce1CD0e437" })), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Section, __assign({ title: "Use of funds" }, { children: ["Funds are only used for 2 purposes:", (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Pay the llamas working on DefiLlama" }), (0, jsx_runtime_1.jsx)("li", { children: "Cover costs associated with running defillama (this is mostly server costs)" })] })] }))] })) }))] })));
}
exports.default = PressPage;
