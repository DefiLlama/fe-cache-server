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
exports.useProtocolsFilterState = void 0;
var ariakit_1 = require("ariakit");
var utils_1 = require("../../../components/Popover/utils");
var LocalStorage_1 = require("../../../contexts/LocalStorage");
var options_1 = require("./options");
function useProtocolsFilterState(props) {
    var _a = __read((0, LocalStorage_1.useDefiManager)(), 2), extraTvlsEnabled = _a[0], updater = _a[1];
    var fitlers = options_1.protocolsAndChainsOptions.map(function (o) { return o.key; });
    var selectedOptions = fitlers.filter(function (key) { return extraTvlsEnabled[key]; });
    var onChange = function (values) {
        if (values.length < selectedOptions.length) {
            var off = selectedOptions.find(function (o) { return !values.includes(o); });
            updater(off)();
        }
        else {
            var on = values.find(function (o) { return !selectedOptions.includes(o); });
            updater(on)();
        }
    };
    var _b = __read((0, utils_1.useSetPopoverStyles)(), 2), renderCallback = _b[1];
    var select = (0, ariakit_1.useSelectState)(__assign({ value: selectedOptions, setValue: onChange, defaultValue: selectedOptions, gutter: 6, animated: true, renderCallback: renderCallback }, props));
    return select;
}
exports.useProtocolsFilterState = useProtocolsFilterState;
