"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.MenuItem = exports.SlidingMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var menu_1 = require("ariakit/menu");
var select_1 = require("ariakit/select");
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../Popover/utils");
var MenuContext = (0, react_1.createContext)(null);
exports.SlidingMenu = (0, react_1.forwardRef)(function SMenu(_a, ref) {
    var label = _a.label, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, selectState = _a.selectState, props = __rest(_a, ["label", "children", "variant", "selectState"]);
    var parent = (0, react_1.useContext)(MenuContext);
    var isSubmenu = !!parent;
    var _c = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _c[0], renderCallback = _c[1];
    var menu = (0, menu_1.useMenuState)(__assign(__assign({}, (selectState || {})), { placement: isSubmenu ? 'right-start' : 'bottom-start', overflowPadding: isSubmenu ? 0 : 8, animated: isSubmenu ? 500 : false, gutter: isSubmenu ? 0 : 8, flip: !isSubmenu, getAnchorRect: function (anchor) {
            var _a;
            return ((_a = parent === null || parent === void 0 ? void 0 : parent.getMenu()) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || (anchor === null || anchor === void 0 ? void 0 : anchor.getBoundingClientRect()) || null;
        }, renderCallback: renderCallback }));
    // By default, submenus don't automatically receive focus when they open.
    // But here we want them to always receive focus.
    if (!parent && menu.open && !menu.autoFocusOnShow) {
        menu.setAutoFocusOnShow(true);
        menu.setInitialFocus('first');
    }
    var contextValue = (0, react_1.useMemo)(function () { return ({
        getWrapper: function () { return (parent === null || parent === void 0 ? void 0 : parent.getWrapper()) || menu.popoverRef.current; },
        getMenu: function () { return menu.baseRef.current; },
        getOffsetRight: function () { var _a, _b, _c; return ((_a = parent === null || parent === void 0 ? void 0 : parent.getOffsetRight()) !== null && _a !== void 0 ? _a : 0) + ((_c = (_b = menu.baseRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth) !== null && _c !== void 0 ? _c : 0); }
    }); }, [menu.popoverRef, menu.baseRef, parent]);
    var autoFocus = function (element) {
        if (!isSubmenu)
            return true;
        element.focus({ preventScroll: true });
        element.scrollIntoView({ block: 'nearest', inline: 'start' });
        return false;
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isSubmenu ? (selectState ? ((0, jsx_runtime_1.jsxs)(select_1.Select, __assign({ as: "div", className: "sliding-menu-button", state: selectState, "data-variant": variant, ref: ref }, props, { children: [(0, jsx_runtime_1.jsx)("span", { children: label }), (0, jsx_runtime_1.jsx)(menu_1.MenuButtonArrow, { placement: "right" })] }))) : ((0, jsx_runtime_1.jsxs)(menu_1.MenuButton, __assign({ className: "sliding-menu-button", state: menu, showOnHover: false, "data-variant": variant }, { children: [(0, jsx_runtime_1.jsx)("span", { children: label }), (0, jsx_runtime_1.jsx)(menu_1.MenuButtonArrow, {})] })))) : (
            // Otherwise, we just render the menu button.
            (0, jsx_runtime_1.jsxs)(menu_1.MenuButton, __assign({ as: "div", className: "sliding-menu-button", state: menu, showOnHover: false, "data-variant": variant, ref: ref }, props, { children: [(0, jsx_runtime_1.jsx)("span", { children: label }), (0, jsx_runtime_1.jsx)(menu_1.MenuButtonArrow, { placement: "right" })] }))), menu.mounted &&
                (selectState && selectState.mounted && selectState.open ? ((0, jsx_runtime_1.jsx)(select_1.SelectPopover, __assign({ state: selectState, portal: isSubmenu, portalElement: parent === null || parent === void 0 ? void 0 : parent.getWrapper, style: { left: 'auto' }, autoFocusOnShow: autoFocus, autoFocusOnHide: autoFocus, composite: true, "data-variant": variant, "data-menuwrapper": false, className: "sliding-menu" }, { children: (0, jsx_runtime_1.jsxs)(MenuContext.Provider, __assign({ value: contextValue }, { children: [isSubmenu && ((0, jsx_runtime_1.jsxs)(Header, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: "sliding-menu-item", "data-variant": variant, onClick: function () {
                                            selectState.hide();
                                            menu.hide();
                                        }, "aria-label": "Back to parent menu" }, { children: (0, jsx_runtime_1.jsx)(menu_1.MenuButtonArrow, { placement: "left" }) })), (0, jsx_runtime_1.jsx)("h2", { children: label })] })), children] })) }))) : ((0, jsx_runtime_1.jsx)(menu_1.Menu, __assign({ state: menu, portal: isSubmenu, portalElement: parent === null || parent === void 0 ? void 0 : parent.getWrapper, style: { left: 'auto' }, autoFocusOnShow: autoFocus, autoFocusOnHide: autoFocus, modal: !isLarge, "data-variant": variant, "data-menuwrapper": !isSubmenu ? 'true' : 'false', className: "sliding-menu" }, { children: (0, jsx_runtime_1.jsxs)(MenuContext.Provider, __assign({ value: contextValue }, { children: [isSubmenu && ((0, jsx_runtime_1.jsxs)(Header, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: "sliding-menu-item", "data-variant": variant, onClick: menu.hide, "aria-label": "Back to parent menu" }, { children: (0, jsx_runtime_1.jsx)(menu_1.MenuButtonArrow, { placement: "left" }) })), (0, jsx_runtime_1.jsx)("h2", { children: label })] })), children] })) }))))] }));
});
exports.MenuItem = (0, react_1.forwardRef)(function SMenuItem(_a, ref) {
    var label = _a.label, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, props = __rest(_a, ["label", "variant"]);
    return ((0, jsx_runtime_1.jsx)(menu_1.MenuItem, __assign({ className: "sliding-menu-button", as: "button", "data-variant": variant, focusOnHover: false, ref: ref }, props, { children: label })));
});
var Header = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-template-columns: 1fr auto 1fr;\n\n\th2 {\n\t\tfont-size: 1rem;\n\t\tfont-weight: 500;\n\t}\n"], ["\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-template-columns: 1fr auto 1fr;\n\n\th2 {\n\t\tfont-size: 1rem;\n\t\tfont-weight: 500;\n\t}\n"])));
var templateObject_1;
