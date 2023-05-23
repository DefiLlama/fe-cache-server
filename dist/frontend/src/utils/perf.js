"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWithPerformaceLogging = exports.withPerformanceLogging = void 0;
var withPerformanceLogging = function (filename, getStaticPropsFunction) {
    return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var start, params, props, end, error_1, end;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = Date.now();
                    params = context.params;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getStaticPropsFunction(context)];
                case 2:
                    props = _a.sent();
                    end = Date.now();
                    if (end - start > 10000) {
                        console.log("[PREPARED][".concat((end - start).toFixed(0), "ms] <").concat(filename, ">") + (params ? ' ' + JSON.stringify(params) : ''));
                    }
                    return [2 /*return*/, props];
                case 3:
                    error_1 = _a.sent();
                    end = Date.now();
                    console.log("[ERROR][".concat((end - start).toFixed(0), "ms] <").concat(filename, ">") + (params ? ' ' + JSON.stringify(params) : ''));
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
exports.withPerformanceLogging = withPerformanceLogging;
var fetchWithPerformaceLogging = function (api) { return __awaiter(void 0, void 0, void 0, function () {
    var startTime, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                startTime = Date.now();
                return [4 /*yield*/, fetch(api).then(function (res) { return res.json(); })];
            case 1:
                data = _a.sent();
                if (Date.now() - startTime > 5000) {
                    console.log('done fetching', api, Date.now() - startTime);
                }
                return [2 /*return*/, data];
        }
    });
}); };
exports.fetchWithPerformaceLogging = fetchWithPerformaceLogging;
