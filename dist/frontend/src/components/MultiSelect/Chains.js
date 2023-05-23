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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupChains = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_select_1 = require("react-select");
var protocols_1 = require("../../components/Filters/protocols");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var ReactSelect_1 = __importDefault(require("./ReactSelect"));
var chainAggr = LocalStorage_1.DEFI_CHAINS_SETTINGS.map(function (g) { return ({ label: g.name, value: g.key }); });
var extraTvls = protocols_1.protocolsAndChainsOptions.map(function (g) { return ({ label: g.name, value: g.key }); });
var tvlOptions = __spreadArray(__spreadArray([], __read(chainAggr), false), __read(extraTvls), false);
var groupOptions = [
    {
        label: 'Aggregate Chains',
        options: chainAggr
    },
    {
        label: 'Include In TVL',
        options: extraTvls
    }
];
function GroupChains(_a) {
    var label = _a.label;
    var _b = __read((0, LocalStorage_1.useDefiChainsManager)(), 1), groupTvls = _b[0];
    var _c = __read((0, LocalStorage_1.useDefiManager)(), 2), extraTvls = _c[0], updater = _c[1];
    var fitlers = __assign(__assign({}, groupTvls), extraTvls);
    var selectedOptions = Object.keys(fitlers)
        .filter(function (key) { return fitlers[key]; })
        .map(function (option) { return tvlOptions.find(function (o) { return o.value === option; }); });
    var toggle = function (_, s) {
        var _a;
        if (s.removedValues) {
            (_a = s.removedValues) === null || _a === void 0 ? void 0 : _a.forEach(function (option) { return updater(option.value)(); });
        }
        else if (s.removedValue) {
            updater(s.removedValue.value)();
        }
        else
            updater(s.option.value)();
    };
    var Group = function (props) { return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_select_1.components.Group, __assign({}, props)) })); };
    return ((0, jsx_runtime_1.jsx)(ReactSelect_1.default, { options: groupOptions, value: selectedOptions, onChange: toggle, isMulti: true, "aria-label": label, components: { Group: Group } }));
}
exports.GroupChains = GroupChains;
