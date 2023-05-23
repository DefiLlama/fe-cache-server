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
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../Theme");
var layout_1 = __importDefault(require("../layout"));
var utils_1 = require("../components/Table/utils");
var data_1 = require("../hooks/data");
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var utils_2 = require("../api/categories/protocols/utils");
var Protocols_1 = require("../components/Table/Defi/Protocols");
var perf_1 = require("../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('top-gainers-and-losers', function () { return __awaiter(void 0, void 0, void 0, function () {
    var protocols;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, protocols_1.getSimpleProtocolsPageData)(__spreadArray(__spreadArray([], __read(utils_2.basicPropertiesToKeep), false), ['extraTvl'], false))];
            case 1:
                protocols = (_a.sent()).protocols;
                return [2 /*return*/, {
                        props: {
                            protocols: protocols
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function TopGainersLosers(_a) {
    var protocols = _a.protocols;
    var data = (0, data_1.useCalcStakePool2Tvl)(protocols);
    var _b = (0, react_1.useMemo)(function () {
        var values = (0, utils_1.splitArrayByFalsyValues)(data, 'change_1d');
        var sortedData = values[0].sort(function (a, b) { return b['change_1d'] - a['change_1d']; });
        return {
            topGainers: sortedData.slice(0, 5),
            topLosers: sortedData.slice(-5).reverse()
        };
    }, [data]), topGainers = _b.topGainers, topLosers = _b.topLosers;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Top Gainers and Losers - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Header, { children: "Top Gainers" }), (0, jsx_runtime_1.jsx)(Protocols_1.TopGainersAndLosers, { data: topGainers }), (0, jsx_runtime_1.jsx)(Header, { children: "Top Losers" }), (0, jsx_runtime_1.jsx)(Protocols_1.TopGainersAndLosers, { data: topLosers })] })));
}
exports.default = TopGainersLosers;
var Header = (0, styled_components_1.default)(Theme_1.TYPE.largeHeader)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin: 12px 0 -12px !important;\n"], ["\n\tmargin: 12px 0 -12px !important;\n"])));
var templateObject_1;
