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
var link_1 = __importDefault(require("next/link"));
var styled_components_1 = __importDefault(require("styled-components"));
var react_markdown_1 = __importDefault(require("react-markdown"));
var layout_1 = __importDefault(require("../layout"));
var api_1 = require("../api");
var perf_1 = require("../utils/perf");
var Announcement_1 = __importDefault(require("../components/Announcement"));
var Header = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-weight: 600;\n\tmargin: 24px 0 -24px 0;\n\tfont-size: revert !important;\n\ttext-align: center;\n\n\ta {\n\t\tposition: relative;\n\t\ttop: 4px;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-weight: 600;\n\tmargin: 24px 0 -24px 0;\n\tfont-size: revert !important;\n\ttext-align: center;\n\n\ta {\n\t\tposition: relative;\n\t\ttop: 4px;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
var Text = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tmargin: 2rem auto;\n\tmax-width: 500px;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\n\ta {\n\t\tcolor: ", ";\n\t\ttext-decoration: underline;\n\t}\n\n\tp {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tmargin: 0.3rem 0;\n\t}\n\n\th2 {\n\t\tmargin: 2rem 0 1rem 0;\n\t}\n\n\th3 {\n\t\tmargin: 1rem 0 0.6rem 0;\n\t}\n"], ["\n\tcolor: ", ";\n\tfont-size: 1rem;\n\tmargin: 2rem auto;\n\tmax-width: 500px;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\n\ta {\n\t\tcolor: ", ";\n\t\ttext-decoration: underline;\n\t}\n\n\tp {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tmargin: 0.3rem 0;\n\t}\n\n\th2 {\n\t\tmargin: 2rem 0 1rem 0;\n\t}\n\n\th3 {\n\t\tmargin: 1rem 0 0.6rem 0;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.link;
});
var Content = function (_a) {
    var text = _a.text;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(react_markdown_1.default, __assign({ components: {
                a: function (_a) {
                    var node = _a.node, props = __rest(_a, ["node"]);
                    return ((0, jsx_runtime_1.jsxs)("span", { children: ["> ", (0, jsx_runtime_1.jsx)("a", __assign({ target: "_blank", rel: "noopener noreferrer" }, props))] }));
                }
            } }, { children: text })) }));
};
function Chains(_a) {
    var _b, _c, _d;
    var messages = _a.messages;
    // Emoji regex ref: https://stackoverflow.com/questions/70401560/what-is-the-difference-between-emoji-presentation-and-extended-pictographic
    var text = (_d = (_c = (_b = messages === null || messages === void 0 ? void 0 : messages.replace(/(.*)\n(http.*)/g, '[$1]($2)') // merge title + link into markdown links
    ) === null || _b === void 0 ? void 0 : _b.replace(/(\d\/\d\s?)?(\w+)\s*(\p{Emoji}\uFE0F|\p{Extended_Pictographic})\n/gu, '## $2 $3\n') // {Watch📺, 1/2 Watch📺} -> ## Watch 📺
    ) === null || _c === void 0 ? void 0 : _c.replace(/(\d\/\d\s?)?\*\*(\d\/\d\s?)?([\w\s'".&,?!;:]+)\*\*\s*(\p{Emoji}\uFE0F|\p{Extended_Pictographic})/gu, '### $3 $4').trim()) !== null && _d !== void 0 ? _d : '';
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Daily Roundup - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsxs)(Announcement_1.default, __assign({ notCancellable: true }, { children: ["Get the roundup delivered every day for free by subscribing on", ' ', (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://t.me/defillama_tg", passHref: true }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ target: "_blank", rel: "noopener noreferrer" }, { children: "Telegram" })) }))] })), (0, jsx_runtime_1.jsx)(Header, { children: "Daily news roundup with the \uD83E\uDD99" }), (0, jsx_runtime_1.jsx)(Text, { children: (0, jsx_runtime_1.jsx)(Content, { text: text }) })] })));
}
exports.default = Chains;
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('roundup', function () { return __awaiter(void 0, void 0, void 0, function () {
    var headers, data, response, index, raw, messages, message, messages_1, messages_1_1, m, _a, first, rest, splitLlama;
    var e_1, _b;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = new Headers();
                headers.append('Authorization', "Bot ".concat(process.env.ROUND_UP_BOT_TOKEN));
                data = [];
                return [4 /*yield*/, fetch('https://discordapp.com/api/channels/965023197365960734/messages', {
                        method: 'GET',
                        headers: headers,
                        redirect: 'follow'
                    })];
            case 1:
                response = _d.sent();
                if (!response.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                data = _d.sent();
                _d.label = 3;
            case 3:
                index = (_c = data.findIndex(function (d) { return d.content.startsWith('Daily news round-up with the'); })) !== null && _c !== void 0 ? _c : null;
                raw = Number.isNaN(index) ? [] : data.slice(0, index + 1);
                messages = raw.reverse().map(function (m) { return m.content; });
                message = '';
                try {
                    for (messages_1 = __values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
                        m = messages_1_1.value;
                        _a = __read(m.split('\n')), first = _a[0], rest = _a.slice(1);
                        if (first.match(/(\p{Emoji}\uFE0F|\p{Extended_Pictographic})(\*\*)?$/u)) {
                            message += '\n';
                        }
                        message += __spreadArray([first], __read(rest), false).join('\n');
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (messages_1_1 && !messages_1_1.done && (_b = messages_1.return)) _b.call(messages_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                splitLlama = message.split('Daily news round-up with the 🦙');
                return [2 /*return*/, {
                        props: {
                            messages: splitLlama[1] || null
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
var templateObject_1, templateObject_2;
