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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var layout_1 = __importDefault(require("../../layout"));
var Table_1 = require("../../components/Table");
var Announcement_1 = __importDefault(require("../../components/Announcement"));
var utils_1 = require("../../components/YieldsPage/utils");
var api_1 = require("../../api");
var yield_1 = require("../../api/categories/yield");
var perf_1 = require("../../utils/perf");
var PageHeader_1 = __importDefault(require("../../components/PageHeader"));
function median(numbers) {
    var sorted = Array.from(numbers).sort(function (a, b) { return a - b; });
    var middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
}
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('yields/projects', function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, projects, _loop_1, _a, _b, project, projArray;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, yield_1.getYieldPageData)()];
            case 1:
                data = _d.sent();
                data.props.pools = data.props.pools.filter(function (p) { return p.apy > 0; });
                projects = {};
                data.props.pools.forEach(function (p) {
                    var proj = p.project;
                    if (projects[proj] === undefined) {
                        projects[proj] = { protocols: 0, tvl: 0, name: p.projectName };
                    }
                    projects[proj].protocols++;
                    projects[proj].tvl += p.tvlUsd;
                });
                _loop_1 = function (project) {
                    var x = data.props.pools.filter(function (p) { return p.project === project; });
                    var m = median(x.map(function (el) { return el.apy; }));
                    projects[project]['medianApy'] = m;
                    projects[project]['audits'] = x[0].audits !== '0';
                    projects[project]['category'] = x[0].category;
                    projects[project]['airdrop'] = project === 'fraxlend' ? false : x[0].airdrop;
                };
                try {
                    // add other fields
                    for (_a = __values(Object.keys(projects)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        project = _b.value;
                        _loop_1(project);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                projArray = Object.entries(projects).map(function (_a) {
                    var _b = __read(_a, 2), slug = _b[0], details = _b[1];
                    return (__assign({ slug: slug }, details));
                });
                return [2 /*return*/, {
                        props: { projects: projArray.sort(function (a, b) { return b.tvl - a.tvl; }) },
                        revalidate: (0, api_1.maxAgeForNext)([23])
                    }];
        }
    });
}); });
function Protocols(_a) {
    var projects = _a.projects;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Projects - DefiLlama Yield", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Announcement_1.default, { children: utils_1.disclaimer }), (0, jsx_runtime_1.jsx)(PageHeader_1.default, { title: "Projects" }), (0, jsx_runtime_1.jsx)(Table_1.YieldsProjectsTable, { data: projects })] })));
}
exports.default = Protocols;
