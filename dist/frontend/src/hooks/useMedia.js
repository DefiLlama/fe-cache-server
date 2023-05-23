"use strict";
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
// adadpted from https://github.com/ariakit/ariakit
var react_1 = require("react");
function getInitialState(query, defaultState) {
    if (defaultState !== undefined) {
        return defaultState;
    }
    if (typeof window !== 'undefined') {
        return window.matchMedia(query).matches;
    }
    return false;
}
function useMedia(query, defaultState) {
    var _a = __read((0, react_1.useState)(getInitialState(query, defaultState)), 2), matches = _a[0], setMatches = _a[1];
    (0, react_1.useEffect)(function () {
        var mql = window.matchMedia(query);
        setMatches(mql.matches);
        var onChange = function () { return setMatches(!!mql.matches); };
        mql.addEventListener('change', onChange);
        return function () { return mql.removeEventListener('change', onChange); };
    }, [query]);
    return matches;
}
exports.default = useMedia;
