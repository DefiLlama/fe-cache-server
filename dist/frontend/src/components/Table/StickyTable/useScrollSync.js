"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSyncScroller = void 0;
var react_1 = require("react");
var names = {};
var useSyncScroller = function (id) {
    var ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        if (names[id]) {
            names[id].push(ref);
        }
        else {
            names[id] = [ref];
        }
    }, [id, ref]);
    (0, react_1.useEffect)(function () {
        if (!ref.current) {
            return;
        }
        var el = ref.current;
        var onScroll = function () {
            var e_1, _a;
            var elements = names[id];
            var scrollX = el.scrollLeft;
            var scrollY = el.scrollTop;
            var xRate = scrollX / (el.scrollWidth - el.clientWidth);
            var yRate = scrollY / (el.scrollHeight - el.clientHeight);
            var updateX = scrollX !== el.eX;
            var updateY = scrollY !== el.eY;
            el.eX = scrollX;
            el.eY = scrollY;
            try {
                for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                    var elem = elements_1_1.value;
                    var otherEl = elem.current;
                    if (otherEl !== el && !!otherEl) {
                        if (updateX &&
                            Math.round(otherEl.scrollLeft -
                                (scrollX = otherEl.eX = Math.round(xRate * (otherEl.scrollWidth - otherEl.clientWidth))))) {
                            otherEl.scrollLeft = scrollX;
                        }
                        if (updateY &&
                            Math.round(otherEl.scrollTop -
                                (scrollY = otherEl.eY = Math.round(yRate * (otherEl.scrollHeight - otherEl.clientHeight))))) {
                            otherEl.scrollTop = scrollY;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        el.addEventListener('scroll', onScroll);
        return function () {
            el.removeEventListener('scroll', onScroll);
        };
    }, [id]);
    return ref;
};
exports.useSyncScroller = useSyncScroller;
