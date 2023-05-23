"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimestampAsDate = exports.formatChain = void 0;
var formatChain = function (chain) {
    if (!chain)
        return chain;
    var ch = chain.toLowerCase();
    var c = ch === 'avax' ? "avalanche" : ch;
    if (c === 'bsc')
        return c.toUpperCase();
    if (c === 'xdai')
        return "xDai";
    if (c === 'terra' || c === 'terra classic')
        return "Terra Classic";
    else
        return c[0].toUpperCase() + c.slice(1);
};
exports.formatChain = formatChain;
function pad(s) {
    return s < 10 ? "0" + s : s;
}
function formatTimestampAsDate(timestamp) {
    var date = new Date(timestamp * 1000);
    return "".concat(pad(date.getDate()), "/").concat(pad(date.getMonth() + 1), "/").concat(date.getFullYear());
}
exports.formatTimestampAsDate = formatTimestampAsDate;
