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
var api_1 = require("../api");
var Hacks_1 = __importDefault(require("../containers/Hacks"));
var utils_1 = require("../utils");
var perf_1 = require("../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('hacks', function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, monthlyHacks, totalHacked, totalHackedDefi, totalRugs, onlyHacksTechnique, sumDuplicates, reducedData, othersValue, pieChartData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('https://defi-hacks-api.herokuapp.com/').then(function (r) { return r.json(); })];
            case 1:
                data = (_a.sent()).map(function (h) { return ({
                    chains: h.chain,
                    classification: h.classification,
                    date: h.date / 1e3,
                    target: h.target_type,
                    amount: h.funds_lost / 1e6,
                    name: h.name,
                    technique: h.technique,
                    bridge: h.bridge_multichain_application,
                    link: h.link
                }); });
                monthlyHacks = {};
                data.forEach(function (r) {
                    var _a;
                    var monthlyDate = (0, utils_1.toYearMonth)(r.date);
                    monthlyHacks[monthlyDate] = ((_a = monthlyHacks[monthlyDate]) !== null && _a !== void 0 ? _a : 0) + r.amount;
                });
                totalHacked = (0, utils_1.formattedNum)(data.map(function (hack) { return hack.amount; }).reduce(function (acc, amount) { return acc + amount; }, 0) / 1000, true);
                totalHackedDefi = (0, utils_1.formattedNum)(data
                    .filter(function (hack) { return hack.target == 'DeFi Protocol'; })
                    .map(function (hack) { return hack.amount; })
                    .reduce(function (acc, amount) { return acc + amount; }, 0) / 1000, true);
                totalRugs = (0, utils_1.formattedNum)(data
                    .filter(function (hack) { return hack.bridge === true; })
                    .map(function (hack) { return hack.amount; })
                    .reduce(function (acc, amount) { return acc + amount; }, 0) / 1000, true);
                onlyHacksTechnique = data.map(function (hack) { return ({
                    name: hack.technique,
                    value: hack.amount
                }); });
                sumDuplicates = function (acc, obj) {
                    var found = acc.find(function (o) { return o.name === obj.name; });
                    if (found) {
                        found.value += obj.value;
                    }
                    else {
                        acc.push(obj);
                    }
                    return acc;
                };
                reducedData = onlyHacksTechnique.reduce(sumDuplicates, []);
                othersValue = reducedData.slice(15).reduce(function (total, entry) { return total + entry.value; }, 0);
                pieChartData = __spreadArray(__spreadArray([], __read(reducedData.sort(function (a, b) { return b.value - a.value; }).slice(0, 15)), false), [
                    { name: 'Others', value: othersValue }
                ], false);
                return [2 /*return*/, {
                        props: {
                            data: data,
                            monthlyHacks: monthlyHacks,
                            totalHacked: totalHacked,
                            totalHackedDefi: totalHackedDefi,
                            totalRugs: totalRugs,
                            pieChartData: pieChartData
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
var Raises = function (_a) {
    var data = _a.data, monthlyHacks = _a.monthlyHacks, props = __rest(_a, ["data", "monthlyHacks"]);
    return (0, jsx_runtime_1.jsx)(Hacks_1.default, __assign({ data: data, monthlyHacks: monthlyHacks }, props));
};
exports.default = Raises;
