"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUtcDateObject = exports.stringToColour = void 0;
function stringToColour() {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
}
exports.stringToColour = stringToColour;
function getUtcDateObject(date) {
    return new Date(new Date(date * 1000).toUTCString().slice(0, -4));
}
exports.getUtcDateObject = getUtcDateObject;
