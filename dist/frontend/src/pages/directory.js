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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var layout_1 = __importDefault(require("../layout"));
var api_1 = require("../api");
var protocols_1 = require("../api/categories/protocols");
var utils_1 = require("../utils");
var styled_components_1 = __importDefault(require("styled-components"));
var ariakit_1 = require("ariakit");
var Input_1 = require("../components/Search/Base/Input");
var Desktop_1 = require("../components/Search/Base/Results/Desktop");
var Announcement_1 = __importDefault(require("../components/Announcement"));
var perf_1 = require("../utils/perf");
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('directory', function () { return __awaiter(void 0, void 0, void 0, function () {
    var protocols;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, protocols_1.getSimpleProtocolsPageData)(['name', 'logo', 'url'])];
            case 1:
                protocols = (_a.sent()).protocols;
                return [2 /*return*/, {
                        props: {
                            protocols: protocols.map(function (protocol) { return ({
                                name: protocol.name,
                                logo: (0, utils_1.tokenIconUrl)(protocol.name),
                                route: protocol.url
                            }); })
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function Protocols(_a) {
    var protocols = _a.protocols;
    var combobox = (0, ariakit_1.useComboboxState)({
        gutter: 6,
        sameWidth: true,
        list: protocols.map(function (x) { return x.name; }),
        flip: false,
        open: true
    });
    var onItemClick = function (item) {
        typeof window !== undefined && window.open(item.route, '_blank');
    };
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Protocols Directory - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Announcement_1.default, __assign({ notCancellable: true }, { children: "Search any protocol to go straight into their website, avoiding scam results from google. Bookmark this page for better access and security" })), (0, jsx_runtime_1.jsx)(InputField, { state: combobox, hideIcon: true, placeholder: "Search...", autoFocus: true }), (0, jsx_runtime_1.jsx)(Popover, { state: combobox, data: protocols, loading: false, onItemClick: onItemClick })] })));
}
exports.default = Protocols;
var InputField = (0, styled_components_1.default)(Input_1.Input)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmax-width: 60rem;\n\twidth: 100%;\n\tmargin: -16px auto;\n\tbox-shadow: ", ";\n\tborder-radius: 12px 12px 0 0;\n\n\t& + button {\n\t\tdisplay: none;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tmargin: 60px auto;\n\t}\n"], ["\n\tmax-width: 60rem;\n\twidth: 100%;\n\tmargin: -16px auto;\n\tbox-shadow: ", ";\n\tborder-radius: 12px 12px 0 0;\n\n\t& + button {\n\t\tdisplay: none;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tmargin: 60px auto;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.bpLg;
});
var Popover = (0, styled_components_1.default)(Desktop_1.DesktopResults)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\ttop: 1px;\n"], ["\n\ttop: 1px;\n"])));
var templateObject_1, templateObject_2;
