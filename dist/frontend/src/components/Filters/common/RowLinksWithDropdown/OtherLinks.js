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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherLinks = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var combobox_1 = require("ariakit/combobox");
var menu_1 = require("ariakit/menu");
var link_1 = __importDefault(require("next/link"));
var DropdownMenu_1 = require("../../../../components/DropdownMenu");
var Combobox_1 = require("../../../../components/Combobox");
var utils_1 = require("../../../../components/Popover/utils");
function OtherLinks(_a) {
    var options = _a.options, name = _a.name;
    var defaultList = options.map(function (l) { return l.to; });
    var _b = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _b[0], renderCallback = _b[1];
    var combobox = (0, combobox_1.useComboboxState)({ defaultList: defaultList, gutter: 8, animated: true, renderCallback: renderCallback });
    var menu = (0, menu_1.useMenuState)(combobox);
    // Resets combobox value when menu is closed
    if (!menu.mounted && combobox.value) {
        combobox.setValue('');
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(DropdownMenu_1.Button, __assign({ state: menu, style: { fontWeight: 600 } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: name }), (0, jsx_runtime_1.jsx)(menu_1.MenuButtonArrow, {})] })), (0, jsx_runtime_1.jsxs)(DropdownMenu_1.Popover, __assign({ state: menu, modal: !isLarge, composite: false }, { children: [(0, jsx_runtime_1.jsx)(Combobox_1.Input, { state: combobox, placeholder: "Search...", autoFocus: true }), combobox.matches.length > 0 ? ((0, jsx_runtime_1.jsx)(Combobox_1.List, __assign({ state: combobox }, { children: combobox.matches.map(function (value, i) {
                            var _a, _b;
                            return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: value, prefetch: false, passHref: true }, { children: (0, jsx_runtime_1.jsx)(Combobox_1.Item, __assign({ value: value, focusOnHover: true, setValueOnClick: false, role: "link" }, { children: (_b = (_a = options.find(function (l) { return l.to === value; })) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : value })) }), value + i));
                        }) }))) : ((0, jsx_runtime_1.jsx)("p", __assign({ id: "no-results" }, { children: "No results" })))] }))] }));
}
exports.OtherLinks = OtherLinks;
