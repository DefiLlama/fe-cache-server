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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticPaths = exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("../../api");
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var layout_1 = __importDefault(require("../../layout"));
var styled_components_1 = __importDefault(require("styled-components"));
var Medium_1 = require("../../layout/Stats/Medium");
var TokenLogo_1 = __importDefault(require("../../components/TokenLogo"));
var utils_1 = require("../../utils");
var constants_1 = require("../../constants");
var link_1 = __importDefault(require("next/link"));
var react_feather_1 = require("react-feather");
var dynamic_1 = __importDefault(require("next/dynamic"));
var Row_1 = require("../../components/Row");
var protocols_1 = require("../../api/categories/protocols");
var Governance_1 = require("../../containers/Defi/Protocol/Governance");
var perf_1 = require("../../utils/perf");
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('governance/[...project]', function (_a) {
    var _b = __read(_a.params.project, 1), project = _b[0];
    return __awaiter(void 0, void 0, void 0, function () {
        var _c, snapshot, compound, snapshotProjectId, compoundProjectId, api, data, recentMonth, missingMonths, _d, proposals, activity, maxVotes;
        var _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        fetch(constants_1.GOVERNANCE_API).then(function (res) { return res.json(); }),
                        fetch(constants_1.ONCHAIN_GOVERNANCE_API).then(function (res) { return res.json(); })
                    ])];
                case 1:
                    _c = __read.apply(void 0, [_g.sent(), 2]), snapshot = _c[0], compound = _c[1];
                    snapshotProjectId = (_e = Object.values(snapshot).find(function (p) { return (0, utils_1.standardizeProtocolName)(p.name) === project; })) === null || _e === void 0 ? void 0 : _e.id;
                    compoundProjectId = (_f = Object.values(compound).find(function (p) { return (0, utils_1.standardizeProtocolName)(p.name) === project; })) === null || _f === void 0 ? void 0 : _f.id;
                    if (!snapshotProjectId && !compoundProjectId) {
                        return [2 /*return*/, { notFound: true }];
                    }
                    api = snapshotProjectId
                        ? constants_1.PROTOCOL_GOVERNANCE_API + '/' + snapshotProjectId + '.json'
                        : constants_1.PROTOCOL_ONCHAIN_GOVERNANCE_API + '/' + compoundProjectId + '.json';
                    return [4 /*yield*/, fetch(api).then(function (res) { return res.json(); })];
                case 2:
                    data = _g.sent();
                    recentMonth = Object.keys(data.stats.months).sort().pop();
                    missingMonths = getDateRange(recentMonth);
                    missingMonths.forEach(function (month) {
                        data.stats.months[month] = { total: 0, successful: 0, proposals: [] };
                    });
                    _d = (0, protocols_1.formatGovernanceData)(data), proposals = _d.proposals, activity = _d.activity, maxVotes = _d.maxVotes;
                    return [2 /*return*/, {
                            props: {
                                data: __assign(__assign({}, data), { proposals: proposals, controversialProposals: proposals
                                        .sort(function (a, b) { return (b['score_curve'] || 0) - (a['score_curve'] || 0); })
                                        .slice(0, 10), activity: activity, maxVotes: maxVotes }),
                                isOnChainGovernance: snapshotProjectId ? false : true
                            },
                            revalidate: (0, api_1.maxAgeForNext)([22])
                        }];
            }
        });
    });
});
function getStaticPaths() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, { paths: [], fallback: 'blocking' }];
        });
    });
}
exports.getStaticPaths = getStaticPaths;
function Protocol(_a) {
    var data = _a.data, isOnChainGovernance = _a.isOnChainGovernance;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "".concat(data.metadata.name, " Governance - DefiLlama"), defaultSEO: true }, { children: [(0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(data.metadata.name) }), (0, jsx_runtime_1.jsx)("span", { children: data.metadata.name })] }), (0, jsx_runtime_1.jsxs)(LinksWrapper, { children: [data.stats.chainName ? ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Chain" }), (0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ gap: "4px" }, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.chainIconUrl)(data.stats.chainName), size: 32 }), (0, jsx_runtime_1.jsx)("span", { children: data.stats.chainName })] }))] })) : null, data.stats.proposalsCount ? ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Total Proposals" }), (0, jsx_runtime_1.jsx)("span", { children: data.stats.proposalsCount })] })) : null, data.stats.successfulProposal ? ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Successful Proposals" }), (0, jsx_runtime_1.jsx)("span", { children: data.stats.successfulProposals })] })) : null, data.stats.propsalsInLast30Days ? ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Successful Proposals in last 30 days" }), (0, jsx_runtime_1.jsx)("span", { children: data.stats.propsalsInLast30Days })] })) : null, data.stats.highestTotalScore ? ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Max Total Votes" }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.toK)(data.stats.highestTotalScore) })] })) : null, data.metadata.followersCount ? ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: "Followers" }), (0, jsx_runtime_1.jsx)("span", { children: (0, utils_1.toK)(data.metadata.followersCount) })] })) : null] }), (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.ChartsWrapper, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(BarChart, { title: 'Activity', chartData: data.activity, stacks: simpleStack, stackColors: stackedBarChartColors }) }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.LazyChart, { children: (0, jsx_runtime_1.jsx)(BarChart, { title: 'Max Votes', chartData: data.maxVotes, stacks: maxVotesStack, stackColors: stackedBarChartColors }) })] }), (0, jsx_runtime_1.jsxs)(LinksWrapper, { children: [data.metadata.domain && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://".concat(data.metadata.domain), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Website" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), data.metadata.twitter && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://twitter.com/".concat(data.metadata.twitter), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Twitter" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), data.metadata.github && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://github.com/".concat(data.metadata.github), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Github" }), (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) }))), data.metadata.coingecko && ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://www.coingecko.com/en/coins/".concat(data.metadata.coingecko), passHref: true }, { children: (0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Button, __assign({ as: "a", target: "_blank", rel: "noopener noreferrer", useTextColor: true }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "View on CoinGecko" }), " ", (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 })] })) })))] })] }), (0, jsx_runtime_1.jsx)(Governance_1.GovernanceTable, { data: data, isOnChainGovernance: isOnChainGovernance })] })));
}
exports.default = Protocol;
var Wrapper = (0, styled_components_1.default)(Medium_1.StatsSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tcolor: ", ";\n\tbackground: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tcolor: ", ";\n\tbackground: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg7;
});
var LinksWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-end;\n\tgap: 36px;\n\n\tp {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 16px;\n\n\t\t& > *:nth-child(1) {\n\t\t\tfont-family: var(--font-inter);\n\t\t\tfont-weight: 600;\n\t\t\tfont-size: 0.875rem;\n\t\t\ttext-align: left;\n\t\t\tcolor: ", ";\n\t\t\tmargin: -2px 0;\n\t\t}\n\n\t\t& > *:nth-child(2) {\n\t\t\tfont-family: var(--font-jetbrains);\n\t\t\tfont-weight: 800;\n\t\t\tfont-size: 2.25rem;\n\t\t\tmargin: -10px 0;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-end;\n\tgap: 36px;\n\n\tp {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 16px;\n\n\t\t& > *:nth-child(1) {\n\t\t\tfont-family: var(--font-inter);\n\t\t\tfont-weight: 600;\n\t\t\tfont-size: 0.875rem;\n\t\t\ttext-align: left;\n\t\t\tcolor: ", ";\n\t\t\tmargin: -2px 0;\n\t\t}\n\n\t\t& > *:nth-child(2) {\n\t\t\tfont-family: var(--font-jetbrains);\n\t\t\tfont-weight: 800;\n\t\t\tfont-size: 2.25rem;\n\t\t\tmargin: -10px 0;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#a9a9a9' : '#737373');
});
var stackedBarChartColors = {
    Total: '#4f8fea',
    Successful: '#E59421',
    'Max Votes': '#4f8fea'
};
var simpleStack = {
    Total: 'stackA',
    Successful: 'stackB'
};
var maxVotesStack = {
    'Max Votes': 'maxvotes'
};
function getDateRange(startDateStr) {
    var startDate = new Date(startDateStr);
    var endDate = new Date();
    var dateRange = [];
    while (startDate <= endDate) {
        dateRange.push(startDate.toISOString().slice(0, 7));
        startDate.setMonth(startDate.getMonth() + 1);
    }
    return dateRange.slice(1);
}
var templateObject_1, templateObject_2;
