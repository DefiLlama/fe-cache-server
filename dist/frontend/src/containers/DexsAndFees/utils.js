"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueArray = exports.getCleanWeekTimestamp = exports.getCleanMonthTimestamp = void 0;
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
var getCleanMonthTimestamp = function (timestampInSeconds) {
    var date = new Date(timestampInSeconds * 1000);
    return Math.trunc(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1) / 1000);
};
exports.getCleanMonthTimestamp = getCleanMonthTimestamp;
var getCleanWeekTimestamp = function (timestampInSeconds) {
    var date = new Date(timestampInSeconds * 1000);
    var weekDay = date.getUTCDay() === 0 ? 7 : date.getUTCDay();
    var monthDay = date.getUTCDate() - weekDay;
    return Math.trunc(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), monthDay) / 1000);
};
exports.getCleanWeekTimestamp = getCleanWeekTimestamp;
var getUniqueArray = function (arr) { return arr.filter(onlyUnique); };
exports.getUniqueArray = getUniqueArray;
