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
exports.GroupStablecoins = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_select_1 = require("react-select");
var ReactSelect_1 = __importDefault(require("./ReactSelect"));
var LocalStorage_1 = require("../../contexts/LocalStorage");
var tvlOptions = [{ label: 'Unreleased', value: 'unreleased' }];
var tvlOptionsLabel = [
    {
        label: 'Include Circulating Categorized as',
        options: tvlOptions
    }
];
function PeggedAssetTvlOptions(_a) {
    var label = _a.label;
    var _b = __read((0, LocalStorage_1.useDefiChainsManager)(), 2), extraPeggedEnabled = _b[0], updater = _b[1];
    var filters = extraPeggedEnabled;
    var selectedOptions = Object.keys(filters)
        .filter(function (key) { return filters[key]; })
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
    return ((0, jsx_runtime_1.jsx)(ReactSelect_1.default, { options: tvlOptionsLabel, value: selectedOptions, onChange: toggle, isMulti: true, "aria-label": label, components: { Group: Group } }));
}
exports.default = PeggedAssetTvlOptions;
var chainAggr = LocalStorage_1.DEFI_CHAINS_SETTINGS.map(function (g) { return ({ label: g.name, value: g.key }); });
var chainAggrOptions = __spreadArray([], __read(chainAggr), false);
var groupOptionsLabel = [
    {
        label: 'Aggregate Chains',
        options: chainAggr
    }
];
function GroupStablecoins(_a) {
    var label = _a.label;
    var _b = __read((0, LocalStorage_1.useDefiChainsManager)(), 2), groupTvls = _b[0], updater = _b[1];
    var filters = __assign({}, groupTvls);
    var selectedOptions = Object.keys(filters)
        .filter(function (key) { return filters[key]; })
        .map(function (option) { return chainAggrOptions.find(function (o) { return o.value === option; }); });
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
    return ((0, jsx_runtime_1.jsx)(ReactSelect_1.default, { options: groupOptionsLabel, value: selectedOptions, onChange: toggle, isMulti: true, "aria-label": label, instanceId: 'peggedAssetGroupOptions', components: { Group: Group } }));
}
exports.GroupStablecoins = GroupStablecoins;
