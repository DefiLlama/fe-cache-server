"use strict";
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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var rebass_1 = require("rebass");
function useInfiniteScroll(_a) {
    var _b = _a.list, list = _b === void 0 ? [] : _b, _c = _a.numInView, numInView = _c === void 0 ? 25 : _c;
    var _d = __read((0, react_1.useState)(numInView), 2), dataLength = _d[0], setDatalength = _d[1];
    var _e = __read((0, react_1.useState)(true), 2), hasMore = _e[0], setHasMore = _e[1];
    var _f = __read((0, react_1.useState)(false), 2), displayScrollToTopButton = _f[0], setDisplayScrollToTopButton = _f[1];
    (0, react_1.useEffect)(function () {
        function setScroll() {
            if (window.scrollY > 200) {
                setDisplayScrollToTopButton(true);
            }
            else {
                setDisplayScrollToTopButton(false);
            }
        }
        window.addEventListener('scroll', setScroll);
        return window.removeEventListener('scroll', setScroll);
    }, []);
    (0, react_1.useEffect)(function () {
        setHasMore(list.length > numInView);
        setDatalength(numInView);
        return function () {
            setHasMore(true);
            setDatalength(25);
        };
    }, [numInView, list]);
    var handleScrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    var next = function () {
        var totalRows = dataLength + numInView;
        if (totalRows >= list.length) {
            setDatalength(list.length);
            setHasMore(false);
        }
        else {
            setDatalength(totalRows);
        }
    };
    var LoadMoreButton = ((0, jsx_runtime_1.jsx)(rebass_1.Button, __assign({ displayScrollToTopButton: displayScrollToTopButton, onClick: handleScrollToTop, sx: {
            borderRadius: '50%',
            padding: 0,
            color: 'inherit',
            width: 36,
            height: 36,
            position: 'fixed',
            zIndex: 1,
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '2rem',
            opacity: 0.2,
            cursor: 'Pointer',
            display: displayScrollToTopButton ? 'inline' : 'none'
        } }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.ChevronsUp, { color: "black" }) })));
    return {
        dataLength: dataLength,
        hasMore: hasMore,
        LoadMoreButton: LoadMoreButton,
        next: next
    };
}
exports.default = useInfiniteScroll;
