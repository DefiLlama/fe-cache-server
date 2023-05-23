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
exports.Wrapper = exports.getStaticPaths = exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("../../api");
var protocols_1 = require("../../api/categories/protocols");
var Emissions_1 = require("../../containers/Defi/Protocol/Emissions");
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var layout_1 = __importDefault(require("../../layout"));
var styled_components_1 = __importDefault(require("styled-components"));
var Medium_1 = require("../../layout/Stats/Medium");
var TokenLogo_1 = __importDefault(require("../../components/TokenLogo"));
var utils_1 = require("../../utils");
var perf_1 = require("../../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('unlocks/[...protocol]', function (_a) {
    var _b = __read(_a.params.protocol, 1), protocol = _b[0];
    return __awaiter(void 0, void 0, void 0, function () {
        var emissions;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, (0, protocols_1.getProtocolEmissons)(protocol)];
                case 1:
                    emissions = _d.sent();
                    if (((_c = emissions.data) === null || _c === void 0 ? void 0 : _c.length) === 0) {
                        return [2 /*return*/, {
                                notFound: true
                            }];
                    }
                    return [2 /*return*/, {
                            props: {
                                emissions: emissions
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
    var emissions = _a.emissions;
    return ((0, jsx_runtime_1.jsx)(layout_1.default, __assign({ title: "".concat(emissions.name, " Unlocks - DefiLlama"), defaultSEO: true }, { children: (0, jsx_runtime_1.jsxs)(exports.Wrapper, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(emissions.name) }), (0, jsx_runtime_1.jsx)("span", { children: emissions.name })] }), (0, jsx_runtime_1.jsx)(Emissions_1.Emissions, { data: emissions, isEmissionsPage: true })] }) })));
}
exports.default = Protocol;
exports.Wrapper = (0, styled_components_1.default)(Medium_1.StatsSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tcolor: ", ";\n\tbackground: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 36px;\n\tpadding: 24px;\n\tcolor: ", ";\n\tbackground: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg7;
});
var templateObject_1;
