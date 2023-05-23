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
exports.getStaticPaths = exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Protocol_1 = __importDefault(require("../../containers/Defi/Protocol"));
var utils_1 = require("../../utils");
var getColor_1 = require("../../utils/getColor");
var api_1 = require("../../api");
var protocols_1 = require("../../api/categories/protocols");
var Dummy_1 = require("../../containers/Defi/Protocol/Dummy");
var news_1 = require("../../api/categories/news");
var cexs_1 = require("../cexs");
var perf_1 = require("../../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('cex/[...cex]', function (_a) {
    var _b = __read(_a.params.cex, 1), exchangeName = _b[0];
    return __awaiter(void 0, void 0, void 0, function () {
        var _c, protocolRes, articles, inflowsExist, protocolData, backgroundColor;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    // if cex is not string, return 404
                    if (typeof exchangeName !== 'string') {
                        return [2 /*return*/, {
                                notFound: true
                            }];
                    }
                    return [4 /*yield*/, Promise.all([
                            (0, protocols_1.getProtocol)(exchangeName),
                            (0, news_1.fetchArticles)({ tags: exchangeName })
                        ])];
                case 1:
                    _c = __read.apply(void 0, [_d.sent(), 2]), protocolRes = _c[0], articles = _c[1];
                    inflowsExist = false;
                    if (protocolRes === null || protocolRes === void 0 ? void 0 : protocolRes.chainTvls) {
                        Object.keys(protocolRes.chainTvls).forEach(function (chain) {
                            var _a;
                            if (((_a = protocolRes.chainTvls[chain].tokensInUsd) === null || _a === void 0 ? void 0 : _a.length) > 0 && !inflowsExist) {
                                inflowsExist = true;
                            }
                            delete protocolRes.chainTvls[chain].tokensInUsd;
                            delete protocolRes.chainTvls[chain].tokens;
                        });
                    }
                    protocolData = (0, protocols_1.fuseProtocolData)(protocolRes);
                    return [4 /*yield*/, (0, getColor_1.getColor)((0, utils_1.tokenIconPaletteUrl)(protocolData.name))];
                case 2:
                    backgroundColor = _d.sent();
                    return [2 /*return*/, {
                            props: {
                                articles: articles,
                                protocol: exchangeName,
                                protocolData: __assign(__assign({}, protocolData), { metrics: __assign(__assign({}, protocolData.metrics), { inflows: inflowsExist }) }),
                                backgroundColor: backgroundColor,
                                chartColors: { TVL: backgroundColor }
                            },
                            revalidate: (0, api_1.maxAgeForNext)([22])
                        }];
            }
        });
    });
});
function getStaticPaths() {
    return __awaiter(this, void 0, void 0, function () {
        var paths;
        return __generator(this, function (_a) {
            paths = cexs_1.cexData
                .filter(function (cex) { return cex.slug; })
                .map(function (_a) {
                var slug = _a.slug;
                return ({
                    params: { cex: [slug] }
                });
            });
            return [2 /*return*/, { paths: paths, fallback: 'blocking' }];
        });
    });
}
exports.getStaticPaths = getStaticPaths;
function Protocols(_a) {
    var protocolData = _a.protocolData, props = __rest(_a, ["protocolData"]);
    if (protocolData.module === 'dummy.js') {
        return ((0, jsx_runtime_1.jsx)(Dummy_1.DummyProtocol, { data: protocolData, title: "".concat(protocolData.name, " - DefiLlama"), backgroundColor: props.backgroundColor, protocol: props.protocol }));
    }
    return ((0, jsx_runtime_1.jsx)(Protocol_1.default, __assign({ title: "".concat(protocolData.name, " - DefiLlama"), protocolData: protocolData }, props, { isCEX: true })));
}
exports.default = Protocols;
