"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keepNeededProperties = void 0;
function keepNeededProperties(protocol, propertiesToKeep) {
    return propertiesToKeep.reduce(function (obj, prop) {
        if (protocol[prop] !== undefined) {
            obj[prop] = protocol[prop];
        }
        return obj;
    }, {});
}
exports.keepNeededProperties = keepNeededProperties;
