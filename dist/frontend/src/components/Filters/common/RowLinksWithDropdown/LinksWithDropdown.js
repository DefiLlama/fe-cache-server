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
exports.LinksWithDropdown = exports.RowLinksWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var link_1 = __importDefault(require("next/link"));
var styled_components_1 = __importDefault(require("styled-components"));
var ButtonStyled_1 = require("../../../../components/ButtonStyled");
var OtherLinks_1 = require("./OtherLinks");
var polished_1 = require("polished");
var GAP = 6;
var Wrapper = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tflex: 1;\n\toverflow: hidden;\n\tpadding: 4px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: ", "px;\n\tmax-height: calc(1.8rem + 14px);\n\n\t& > li {\n\t\tlist-style: none;\n\t\tdisplay: inline-block;\n\n\t\t& > * {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n"], ["\n\tflex: 1;\n\toverflow: hidden;\n\tpadding: 4px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: ", "px;\n\tmax-height: calc(1.8rem + 14px);\n\n\t& > li {\n\t\tlist-style: none;\n\t\tdisplay: inline-block;\n\n\t\t& > * {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n"])), GAP);
exports.RowLinksWrapper = styled_components_1.default.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 20px;\n\toverflow: hidden;\n\tmargin-bottom: -20px;\n\n\t& > ul {\n\t\tpadding: 4px 0;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 20px;\n\toverflow: hidden;\n\tmargin-bottom: -20px;\n\n\t& > ul {\n\t\tpadding: 4px 0;\n\t}\n"
    // Renders a row of links and overflow links / links that not fit in viewport are shown in a dropdown
])));
// Renders a row of links and overflow links / links that not fit in viewport are shown in a dropdown
var LinksWithDropdown = function (_a) {
    var _b = _a.links, links = _b === void 0 ? [] : _b, activeLink = _a.activeLink, alternativeOthersText = _a.alternativeOthersText, props = __rest(_a, ["links", "activeLink", "alternativeOthersText"]);
    var _c = __read((0, react_1.useState)(null), 2), lastIndexToRender = _c[0], setLastIndexToRender = _c[1];
    var calcFiltersToRender = (0, react_1.useCallback)(function () {
        var _a, _b;
        if (typeof document !== 'undefined') {
            var priorityNav = document.querySelector('#priority-nav');
            var wrapper_1 = priorityNav === null || priorityNav === void 0 ? void 0 : priorityNav.getBoundingClientRect();
            var indexToCutFrom_1 = null;
            if (!priorityNav)
                return null;
            if (((_a = priorityNav.childNodes) === null || _a === void 0 ? void 0 : _a.length) > 2 && (wrapper_1 === null || wrapper_1 === void 0 ? void 0 : wrapper_1.width) <= 600) {
                return 'renderMenu';
            }
            (_b = priorityNav.childNodes) === null || _b === void 0 ? void 0 : _b.forEach(function (_, index) {
                if (indexToCutFrom_1 !== null)
                    return;
                var link = document.querySelector("#priority-nav-el-".concat(index));
                var linkSize = link.getBoundingClientRect();
                if (linkSize.top - wrapper_1.top > wrapper_1.height || linkSize.left + GAP * 2 > wrapper_1.right - 180) {
                    indexToCutFrom_1 = index;
                }
            });
            return indexToCutFrom_1;
        }
    }, []);
    (0, react_1.useEffect)(function () {
        var setIndexToFilterFrom = function () {
            var index = calcFiltersToRender();
            setLastIndexToRender(index);
        };
        // set index to filter from on initial render
        setIndexToFilterFrom();
        // listen to window resize events and reset index to filter from
        window.addEventListener('resize', function () {
            setLastIndexToRender(null);
            setIndexToFilterFrom();
        });
        return function () {
            window.removeEventListener('resize', function () { });
            setLastIndexToRender(null);
            setIndexToFilterFrom();
        };
    }, [calcFiltersToRender]);
    var _d = (0, react_1.useMemo)(function () {
        if (lastIndexToRender === 'renderMenu') {
            return { linksInRow: null, dropdownLinks: links };
        }
        var linksInRow = lastIndexToRender ? links.slice(0, lastIndexToRender - 1) : links;
        var dropdownLinks = lastIndexToRender ? links.slice(linksInRow.length) : null;
        return { linksInRow: linksInRow, dropdownLinks: dropdownLinks };
    }, [links, lastIndexToRender]), linksInRow = _d.linksInRow, dropdownLinks = _d.dropdownLinks;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [linksInRow && ((0, jsx_runtime_1.jsx)(Wrapper, __assign({ id: "priority-nav" }, props, { children: linksInRow.map(function (option, index) { return ((0, jsx_runtime_1.jsx)(LinkItem, { option: option, activeLink: activeLink, id: "priority-nav-el-".concat(index) }, option.label)); }) }))), dropdownLinks && ((0, jsx_runtime_1.jsx)(OtherLinks_1.OtherLinks, { name: dropdownLinks.find(function (link) { return link.label === activeLink; }) ? activeLink : alternativeOthersText !== null && alternativeOthersText !== void 0 ? alternativeOthersText : 'Others', options: dropdownLinks }))] }));
};
exports.LinksWithDropdown = LinksWithDropdown;
var LinkItem = function (_a) {
    var option = _a.option, activeLink = _a.activeLink, props = __rest(_a, ["option", "activeLink"]);
    return ((0, jsx_runtime_1.jsx)("li", __assign({}, props, { children: (0, jsx_runtime_1.jsx)(link_1.default, __assign({ scroll: false, href: option.to, prefetch: false, passHref: true }, { children: option.label === activeLink ? ((0, jsx_runtime_1.jsx)(ButtonStyled_1.ButtonDark, __assign({ as: "a" }, { children: option.label }))) : ((0, jsx_runtime_1.jsx)(InactiveLink, __assign({ as: "a" }, { children: option.label }))) })) })));
};
var InactiveLink = (0, styled_components_1.default)(ButtonStyled_1.ButtonLight)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tcolor: ", ";\n\tbackground-color: ", ";\n"], ["\n\tcolor: ", ";\n\tbackground-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#629ff4' : '#2172E5');
}, function (_a) {
    var theme = _a.theme;
    return theme.mode === 'dark' ? (0, polished_1.transparentize)(0.9, '#629ff4') : (0, polished_1.transparentize)(0.9, '#2172E5');
});
var templateObject_1, templateObject_2, templateObject_3;
