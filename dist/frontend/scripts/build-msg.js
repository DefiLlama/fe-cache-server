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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
// read the build.log file into base64 string
var buildLog = fs.readFileSync('./build.log', 'utf8');
var buildLogBase64 = Buffer.from(buildLog).toString('base64');
var BUILD_LOG_CONTENT_TYPE = 'text/plain;charset=UTF-8';
var LOGGER_API_KEY = process.env.LOGGER_API_KEY;
var LOGGER_API_URL = process.env.LOGGER_API_URL;
// upload the build.log file to the logger service
var uploadBuildLog = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(LOGGER_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        apikey: LOGGER_API_KEY
                    },
                    body: JSON.stringify({
                        data: buildLogBase64,
                        contentType: BUILD_LOG_CONTENT_TYPE
                    })
                })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.text()];
            case 2:
                res = _a.sent();
                return [2 /*return*/, res];
        }
    });
}); };
// convert the bash script above to JS
var LLAMAS_LIST = process.env.LLAMAS_LIST || '';
var BUILD_LLAMAS = process.env.BUILD_LLAMAS || '';
var BUILD_STATUS_DASHBOARD = process.env.BUILD_STATUS_DASHBOARD;
var BUILD_STATUS_WEBHOOK = process.env.BUILD_STATUS_WEBHOOK;
var EMOJI_TIRESOME = '<:tiresome:1023676964319535286>';
var EMOJI_BINOCULARS = '<:binoculars:1012832136459456582>';
var EMOJI_CRINGE = '<:llamacringe:1073375066164822159>';
var EMOJI_LLAMACHEER = '<:llamacheer:1012832279195832331>';
var EMOJI_BONG = '<:bong:970440561087631360>';
var EMOJI_BEEGLUBB = '<:beeglubb:1027125046281502740>';
var EMOJI_UPLLAMA = '<:upllama:996096214841950269>';
var EMOJI_EVIL = '<:evilllama:1011045461030879353>';
var EMOJI_PEPENOTES = '<a:pepenotes:1061068916140544052>';
var buildLlamas = BUILD_LLAMAS.split(',');
var llamas = LLAMAS_LIST.split(',').map(function (llama) {
    var _a = __read(llama.split(':'), 2), name = _a[0], id = _a[1];
    return { name: name, id: id };
});
var formatMention = function (name) {
    var id = llamas.find(function (llama) { return llama.name === name; }).id;
    if (!id) {
        return '';
    }
    else {
        return "<@".concat(id, ">");
    }
};
// node ./scripts/build-msg.js $BUILD_STATUS "$BUILD_TIME_STR" "$START_TIME" "$BUILD_ID" "$COMMIT_COMMENT" "$COMMIT_AUTHOR" "$COMMIT_HASH"
var BUILD_STATUS = process.argv[2];
var BUILD_TIME_STR = process.argv[3];
var START_TIME = process.argv[4];
var BUILD_ID = process.argv[5];
var COMMIT_COMMENT = process.argv[6];
var COMMIT_AUTHOR = process.argv[7];
var COMMIT_HASH = process.argv[8];
var buildSummary = '';
if (BUILD_STATUS === '0') {
    buildSummary += "\uD83C\uDF89 Build succeeded in ".concat(BUILD_TIME_STR);
}
else {
    buildSummary += "\uD83D\uDEA8 Build failed in ".concat(BUILD_TIME_STR);
}
buildSummary += '\n' + "\uD83D\uDCC5 Build started at ".concat(START_TIME);
if (BUILD_ID) {
    buildSummary += '\n' + "\uD83D\uDCE6 Build ID: ".concat(BUILD_ID);
}
var commitSummary = '';
commitSummary += "\uD83D\uDCAC ".concat(COMMIT_COMMENT);
commitSummary += '\n' + "\uD83E\uDD99 ".concat(COMMIT_AUTHOR);
commitSummary += '\n' + "\uD83D\uDCF8 ".concat(COMMIT_HASH);
var sendMessages = function () { return __awaiter(void 0, void 0, void 0, function () {
    var message, body, buildLogId, buildLogUrl, buildLogMessage, buildLogBody, authorMention, buildLlamasMentions, llamaMessage, llamaBody, emojis, randomEmoji, llamaMessage, llamaBody;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                message = "```\n===== COMMIT SUMMARY =====\n".concat(commitSummary, "\n\n===== BUILD SUMMARY =====\n").concat(buildSummary, "\n```");
                body = { content: message };
                return [4 /*yield*/, fetch(BUILD_STATUS_WEBHOOK, {
                        method: 'POST',
                        body: JSON.stringify(body),
                        headers: { 'Content-Type': 'application/json' }
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, uploadBuildLog()];
            case 2:
                buildLogId = _a.sent();
                buildLogUrl = "".concat(LOGGER_API_URL, "/get/").concat(buildLogId);
                buildLogMessage = "".concat(EMOJI_PEPENOTES, " ").concat(buildLogUrl);
                console.log(buildLogMessage);
                buildLogBody = { content: buildLogMessage };
                return [4 /*yield*/, fetch(BUILD_STATUS_WEBHOOK, {
                        method: 'POST',
                        body: JSON.stringify(buildLogBody),
                        headers: { 'Content-Type': 'application/json' }
                    })];
            case 3:
                _a.sent();
                authorMention = formatMention(COMMIT_AUTHOR);
                buildLlamasMentions = buildLlamas.map(function (llama) { return formatMention(llama); }).join(' ');
                if (!(BUILD_STATUS !== '0')) return [3 /*break*/, 6];
                if (!LLAMAS_LIST) return [3 /*break*/, 5];
                llamaMessage = "".concat(EMOJI_CRINGE, " ").concat(authorMention, "\n").concat(EMOJI_TIRESOME, " ").concat(buildLlamasMentions, "\n").concat(EMOJI_BINOCULARS, " ").concat(BUILD_STATUS_DASHBOARD);
                llamaBody = { content: llamaMessage };
                return [4 /*yield*/, fetch(BUILD_STATUS_WEBHOOK, {
                        method: 'POST',
                        body: JSON.stringify(llamaBody),
                        headers: { 'Content-Type': 'application/json' }
                    })];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [3 /*break*/, 8];
            case 6:
                emojis = [EMOJI_LLAMACHEER, EMOJI_BONG, EMOJI_BEEGLUBB, EMOJI_UPLLAMA, EMOJI_EVIL];
                randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                llamaMessage = "".concat(randomEmoji);
                llamaBody = { content: llamaMessage };
                return [4 /*yield*/, fetch(BUILD_STATUS_WEBHOOK, {
                        method: 'POST',
                        body: JSON.stringify(llamaBody),
                        headers: { 'Content-Type': 'application/json' }
                    })];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); };
sendMessages();
