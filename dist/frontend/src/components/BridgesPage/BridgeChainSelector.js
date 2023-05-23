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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.BridgeChainSelector = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var ariakit_1 = require("ariakit");
var styled_components_1 = __importDefault(require("styled-components"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var DropdownMenu_1 = require("../../components/DropdownMenu");
var Combobox_1 = require("../../components/Combobox");
var utils_1 = require("../../components/Popover/utils");
var ariakit_2 = require("ariakit");
function BridgeChainSelector(_a) {
    var options = _a.options, currentChain = _a.currentChain, handleClick = _a.handleClick;
    var defaultList = options.map(function (_a) {
        var name = _a.name;
        return "".concat(name.toLowerCase());
    });
    var _b = __read((0, utils_1.useSetPopoverStyles)(), 2), isLarge = _b[0], renderCallback = _b[1];
    var combobox = (0, ariakit_1.useComboboxState)({ defaultList: defaultList, gutter: 8, animated: true, renderCallback: renderCallback });
    var menu = (0, ariakit_1.useMenuState)(combobox);
    // Resets combobox value when menu is closed
    if (!menu.mounted && combobox.value) {
        combobox.setValue('');
    }
    var selectedAsset = React.useMemo(function () { return options.find(function (x) { return x.name.toLowerCase() === currentChain.toLowerCase(); }); }, [currentChain, options]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(DropdownMenu_1.Button, __assign({ state: menu }, { children: [(0, jsx_runtime_1.jsx)(ProtocolAndPool_1.Name, __assign({ style: { fontWeight: 400, fontSize: '1rem' } }, { children: selectedAsset.name })), (0, jsx_runtime_1.jsx)(ariakit_1.MenuButtonArrow, {})] })), (0, jsx_runtime_1.jsxs)(DropdownMenu_1.Popover, __assign({ state: menu, modal: !isLarge, composite: false }, { children: [(0, jsx_runtime_1.jsx)(Combobox_1.Input, { state: combobox, placeholder: "Search...", autoFocus: true }), combobox.matches.length > 0 ? ((0, jsx_runtime_1.jsx)(Combobox_1.List, __assign({ state: combobox }, { children: combobox.matches.map(function (value, i) { return ((0, jsx_runtime_1.jsx)(ChainButtonLink, { options: options, value: value, handleClick: handleClick }, value + i)); }) }))) : ((0, jsx_runtime_1.jsx)("p", __assign({ id: "no-results" }, { children: "No results" })))] }))] }));
}
exports.BridgeChainSelector = BridgeChainSelector;
var getMatchingOption = function (options, value) {
    return options.find(function (_a) {
        var name = _a.name;
        return "".concat(name.toLowerCase()) === value;
    });
};
var ChainButtonLink = function (props) {
    var options = props.options, value = props.value, handleClick = props.handleClick;
    var matchingOption = getMatchingOption(options, value);
    return ((0, jsx_runtime_1.jsx)(ariakit_2.Button, __assign({ onClick: function () { return handleClick(matchingOption.name); } }, { children: (0, jsx_runtime_1.jsx)(Combobox_1.Item, __assign({ value: value, focusOnHover: true, setValueOnClick: false, role: "link" }, { children: (0, jsx_runtime_1.jsx)(MatchingOptionWrapper, { children: matchingOption.name }) })) })));
};
var MatchingOptionWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 10px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 10px;\n"])));
var templateObject_1;
