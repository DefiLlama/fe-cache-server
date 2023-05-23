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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.getStaticPaths = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("../../../utils");
var api_1 = require("../../../api");
var constants_1 = require("../../../constants");
var useSWR_1 = require("../../../utils/useSWR");
var UsersByChain_1 = __importDefault(require("../../../containers/UsersByChain"));
var perf_1 = require("../../../utils/perf");
function getStaticPaths() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            /*
            const res = await fetch(`${USER_METRICS_ALL_API}`).then((res) => res.json())
            
            const paths: string[] = res.chains.slice(0, 30).map((chain) => ({
                params: { chain: [chain] }
            }))
            */
            return [2 /*return*/, { paths: [], fallback: 'blocking' }];
        });
    });
}
exports.getStaticPaths = getStaticPaths;
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('aggregators/[item]', function (_a) {
    var _b = __read(_a.params.chain, 1), chain = _b[0];
    return __awaiter(void 0, void 0, void 0, function () {
        var _c, userMetrics, chains, chainName, error_1;
        var _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, useSWR_1.arrayFetcher)([
                            "".concat(constants_1.USER_METRICS_CHAIN_API, "/").concat(chain),
                            "".concat(constants_1.USER_METRICS_ALL_API)
                        ])];
                case 1:
                    _c = __read.apply(void 0, [_e.sent(), 2]), userMetrics = _c[0], chains = _c[1].chains;
                    chainName = (0, utils_1.capitalizeFirstLetter)(chain === 'avax' ? 'avalanche' : chain);
                    return [2 /*return*/, {
                            props: {
                                chart: (_d = userMetrics === null || userMetrics === void 0 ? void 0 : userMetrics.chart) === null || _d === void 0 ? void 0 : _d.sort(function (a, b) { return new Date(a.day).getTime() - new Date(b.day).getTime(); }),
                                name: chainName,
                                chains: ['All'].concat(chains).map(function (chain) { return ({
                                    label: chain === 'avax' ? 'Avalanche' : (0, utils_1.capitalizeFirstLetter)(chain),
                                    to: chain === 'All' ? '/users' : "/users/chain/".concat(chain)
                                }); }),
                                protocols: userMetrics.protocols || [],
                                chain: chainName,
                                revalidate: (0, api_1.maxAgeForNext)([22])
                            }
                        }];
                case 2:
                    error_1 = _e.sent();
                    return [2 /*return*/, {
                            notFound: true
                        }];
                case 3: return [2 /*return*/];
            }
        });
    });
});
function Protocol(_a) {
    var name = _a.name, logo = _a.logo, backgroundColor = _a.backgroundColor, chart = _a.chart, chains = _a.chains, protocols = _a.protocols, chain = _a.chain;
    return (0, jsx_runtime_1.jsx)(UsersByChain_1.default, __assign({}, { name: name, logo: logo, backgroundColor: backgroundColor, chart: chart, chains: chains, protocols: protocols, chain: chain }));
}
exports.default = Protocol;
