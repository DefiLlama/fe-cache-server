"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsClient = exports.useScrollToTop = exports.usePeggedChainOverview = exports.useFeesApp = exports.useDexsApp = exports.usePeggedApp = exports.useYieldApp = exports.useNFTApp = exports.useOutsideClick = exports.useKeyPress = exports.useOnClickOutside = exports.useDebounce = exports.useMedia = exports.useAnalytics = exports.useResize = exports.useInfiniteScroll = void 0;
var react_1 = require("react");
var router_1 = require("next/router");
var useInfiniteScroll_1 = require("./useInfiniteScroll");
Object.defineProperty(exports, "useInfiniteScroll", { enumerable: true, get: function () { return __importDefault(useInfiniteScroll_1).default; } });
var useResize_1 = require("./useResize");
Object.defineProperty(exports, "useResize", { enumerable: true, get: function () { return __importDefault(useResize_1).default; } });
var useAnalytics_1 = require("./useAnalytics");
Object.defineProperty(exports, "useAnalytics", { enumerable: true, get: function () { return __importDefault(useAnalytics_1).default; } });
var useMedia_1 = require("./useMedia");
Object.defineProperty(exports, "useMedia", { enumerable: true, get: function () { return __importDefault(useMedia_1).default; } });
var useDebounce_1 = require("./useDebounce");
Object.defineProperty(exports, "useDebounce", { enumerable: true, get: function () { return __importDefault(useDebounce_1).default; } });
var useOnClickOutside_1 = require("./useOnClickOutside");
Object.defineProperty(exports, "useOnClickOutside", { enumerable: true, get: function () { return __importDefault(useOnClickOutside_1).default; } });
var useKeyPress_1 = require("./useKeyPress");
Object.defineProperty(exports, "useKeyPress", { enumerable: true, get: function () { return __importDefault(useKeyPress_1).default; } });
__exportStar(require("./useBreakpoints"), exports);
var useOutsideClick = function (ref, ref2, callback) {
    (0, react_1.useEffect)(function () {
        function handleClick(e) {
            if (ref.current && ref.current && !ref2.current) {
                callback(true);
            }
            else if (ref.current && !ref.current.contains(e.target) && ref2.current && !ref2.current.contains(e.target)) {
                callback(true);
            }
            else {
                callback(false);
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    });
};
exports.useOutsideClick = useOutsideClick;
function useInterval(callback, delay) {
    var savedCallback = (0, react_1.useRef)();
    // Remember the latest callback.
    (0, react_1.useEffect)(function () {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    (0, react_1.useEffect)(function () {
        function tick() {
            var current = savedCallback.current;
            current && current();
        }
        if (delay !== null) {
            tick();
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
        return;
    }, [delay]);
}
exports.default = useInterval;
function useNFTApp() {
    var router = (0, router_1.useRouter)();
    return router.pathname.startsWith('/nfts');
}
exports.useNFTApp = useNFTApp;
function useYieldApp() {
    var router = (0, router_1.useRouter)();
    return router.pathname.startsWith('/yields');
}
exports.useYieldApp = useYieldApp;
function usePeggedApp() {
    var router = (0, router_1.useRouter)();
    return router.pathname.startsWith('/stablecoin') || router.pathname.startsWith('/stablecoins');
}
exports.usePeggedApp = usePeggedApp;
function useDexsApp() {
    var router = (0, router_1.useRouter)();
    return router.pathname.startsWith('/dex');
}
exports.useDexsApp = useDexsApp;
function useFeesApp() {
    var router = (0, router_1.useRouter)();
    return router.pathname.startsWith('/fees');
}
exports.useFeesApp = useFeesApp;
function usePeggedChainOverview() {
    var router = (0, router_1.useRouter)();
    return router.pathname.startsWith('/stablecoins/chains');
}
exports.usePeggedChainOverview = usePeggedChainOverview;
var useScrollToTop = function () {
    (0, react_1.useEffect)(function () {
        if (window) {
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            });
        }
    }, []);
};
exports.useScrollToTop = useScrollToTop;
var useIsClient = function () {
    var _a = __read((0, react_1.useState)(false), 2), isClient = _a[0], setIsClient = _a[1];
    var windowType = typeof window;
    (0, react_1.useEffect)(function () {
        if (windowType !== 'undefined') {
            setIsClient(true);
        }
    }, [windowType]);
    return isClient;
};
exports.useIsClient = useIsClient;
