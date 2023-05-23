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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// adadpted from https://github.com/uidotdev/usehooks/blob/master/src/pages/useWindowSize.md
var react_1 = require("react");
var useDebounce_1 = __importDefault(require("./useDebounce"));
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    var _a = __read((0, react_1.useState)({
        width: undefined,
        height: undefined
    }), 2), windowSize = _a[0], setWindowSize = _a[1];
    (0, react_1.useEffect)(function () {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []); // Empty array ensures that effect is only run on mount
    return (0, useDebounce_1.default)(windowSize, 1000);
}
exports.default = useWindowSize;
