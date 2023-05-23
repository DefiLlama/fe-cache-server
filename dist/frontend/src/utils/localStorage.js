"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWithExpiry = exports.setWithExpiry = void 0;
function setWithExpiry(key, value, ttl) {
    var item = {
        value: value,
        expiry: new Date().getTime() + ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
}
exports.setWithExpiry = setWithExpiry;
function getWithExpiry(key) {
    var itemString = window.localStorage.getItem(key);
    if (!itemString)
        return null;
    var item = JSON.parse(itemString);
    var isExpired = new Date().getTime() > item.expiry;
    if (isExpired) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}
exports.getWithExpiry = getWithExpiry;
