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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRStrategyRoute = exports.PoolStrategyRoute = exports.YieldsProject = exports.NameYield = exports.NameYieldPool = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var Pool_1 = require("../../../layout/Pool");
var Bookmark_1 = __importDefault(require("../../../components/Bookmark"));
var Link_1 = require("../../../components/Link");
var TokenLogo_1 = __importDefault(require("../../../components/TokenLogo"));
var utils_1 = require("../../../utils");
var Tooltip_1 = __importDefault(require("../../../components/Tooltip"));
var FormattedName_1 = __importDefault(require("../../../components/FormattedName"));
function NameYieldPool(_a) {
    var value = _a.value, configID = _a.configID, url = _a.url, index = _a.index, borrow = _a.borrow, strategy = _a.strategy, withoutLink = _a.withoutLink, _b = _a.maxCharacters, maxCharacters = _b === void 0 ? 10 : _b, _c = _a.bookmark, bookmark = _c === void 0 ? true : _c;
    var tokenUrl = borrow
        ? "/yields/borrow/".concat(configID)
        : strategy
            ? "/yields/strategy/".concat(configID)
            : "/yields/pool/".concat(configID);
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [bookmark ? (0, jsx_runtime_1.jsx)(Bookmark_1.default, { readableProtocolName: configID, "data-lgonly": true }) : null, (0, jsx_runtime_1.jsx)("span", { children: index }), url ? ((0, jsx_runtime_1.jsx)(Pool_1.ButtonYields, __assign({ as: "a", href: url, target: "_blank", rel: "noopener noreferrer", "data-lgonly": true, useTextColor: true }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.ArrowUpRight, { size: 14 }) }))) : (''), withoutLink ? ((0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: value, maxCharacters: maxCharacters, link: true, fontWeight: 500 })) : ((0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: tokenUrl, target: "_blank" }, { children: (0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: value, maxCharacters: maxCharacters, link: true, fontWeight: 500 }) })))] }));
}
exports.NameYieldPool = NameYieldPool;
function NameYield(_a) {
    var project = _a.project, projectslug = _a.projectslug, airdrop = _a.airdrop, borrow = _a.borrow, withoutLink = _a.withoutLink, props = __rest(_a, ["project", "projectslug", "airdrop", "borrow", "withoutLink"]);
    var iconUrl = (0, utils_1.tokenIconUrl)(project);
    var tokenUrl = borrow ? "/yields/borrow?project=".concat(projectslug) : "/yields?project=".concat(projectslug);
    return ((0, jsx_runtime_1.jsxs)(AirdropWrapper, __assign({}, props, { children: [airdrop && project !== 'Fraxlend' && ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ content: "This project has no token and might airdrop one to depositors in the future" }, { children: (0, jsx_runtime_1.jsx)(Airdrop, { children: "\uD83E\uDE82" }) }))), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: iconUrl }), withoutLink ? ((0, jsx_runtime_1.jsx)(FormattedName_1.default, { text: project, maxCharacters: 20, link: true, fontWeight: 500, margin: true })) : ((0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: tokenUrl }, { children: project })))] })));
}
exports.NameYield = NameYield;
function YieldsProject(_a) {
    var project = _a.project, projectslug = _a.projectslug;
    var iconUrl = (0, utils_1.tokenIconUrl)(project);
    var tokenUrl = "/yields?project=".concat(projectslug);
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: iconUrl }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: tokenUrl }, { children: project }))] }));
}
exports.YieldsProject = YieldsProject;
function PoolStrategyRoute(_a) {
    var project1 = _a.project1, airdropProject1 = _a.airdropProject1, project2 = _a.project2, airdropProject2 = _a.airdropProject2, chain = _a.chain, index = _a.index;
    var iconUrl1 = (0, utils_1.tokenIconUrl)(project1);
    var iconUrl2 = (0, utils_1.tokenIconUrl)(project2);
    var chainIcon = (0, utils_1.chainIconUrl)(chain);
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(HideIndex, { children: index }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: chainIcon }), (0, jsx_runtime_1.jsx)("span", { children: '|' }), (0, jsx_runtime_1.jsxs)(ProjectWrapper, { children: [airdropProject1 && ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ content: "This project has no token and might airdrop one to depositors in the future" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "\uD83E\uDE82" }) }))), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: iconUrl1 }), (0, jsx_runtime_1.jsx)("span", { children: project1 })] }), (0, jsx_runtime_1.jsx)("span", { children: '->' }), (0, jsx_runtime_1.jsxs)(ProjectWrapper, { children: [airdropProject2 && ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ content: "This project has no token and might airdrop one to depositors in the future" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "\uD83E\uDE82" }) }))), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: iconUrl2 }), (0, jsx_runtime_1.jsx)("span", { children: project2 })] })] }));
}
exports.PoolStrategyRoute = PoolStrategyRoute;
function FRStrategyRoute(_a) {
    var project1 = _a.project1, airdropProject1 = _a.airdropProject1, project2 = _a.project2, airdropProject2 = _a.airdropProject2, chain = _a.chain, index = _a.index;
    var iconUrl1 = (0, utils_1.tokenIconUrl)(project1);
    var iconUrl2 = (0, utils_1.tokenIconUrl)(project2);
    var chainIcon = (0, utils_1.chainIconUrl)(chain);
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(HideIndex, { children: index }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: chainIcon }), (0, jsx_runtime_1.jsx)("span", { children: '|' }), (0, jsx_runtime_1.jsxs)(ProjectWrapper, { children: [airdropProject1 && ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ content: "This project has no token and might airdrop one to depositors in the future" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "\uD83E\uDE82" }) }))), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: iconUrl1 }), (0, jsx_runtime_1.jsx)("span", { children: project1 })] }), (0, jsx_runtime_1.jsx)("span", { children: '|' }), (0, jsx_runtime_1.jsxs)(ProjectWrapper, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: iconUrl2 }), (0, jsx_runtime_1.jsx)("span", { children: project2 })] })] }));
}
exports.FRStrategyRoute = FRStrategyRoute;
var Wrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\n\t& > *[data-lgonly] {\n\t\tdisplay: none;\n\t}\n\n\t& > * {\n\t\tflex-shrink: 0;\n\t}\n\n\ta:last-of-type {\n\t\tflex-shrink: 1;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\t& > *[data-lgonly] {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\n\t& > *[data-lgonly] {\n\t\tdisplay: none;\n\t}\n\n\t& > * {\n\t\tflex-shrink: 0;\n\t}\n\n\ta:last-of-type {\n\t\tflex-shrink: 1;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\t& > *[data-lgonly] {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bpMed;
});
var AirdropWrapper = (0, styled_components_1.default)(Wrapper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tgap: 0px;\n\tposition: relative;\n\tpadding-left: 32px;\n\n\ta:last-of-type {\n\t\tmargin-left: 8px;\n\t}\n"], ["\n\tgap: 0px;\n\tposition: relative;\n\tpadding-left: 32px;\n\n\ta:last-of-type {\n\t\tmargin-left: 8px;\n\t}\n"])));
var Airdrop = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\twidth: 24px;\n\tmargin-left: -32px;\n"], ["\n\twidth: 24px;\n\tmargin-left: -32px;\n"])));
var ProjectWrapper = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n\tflex-shrink: 1;\n\n\t& > * {\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 6px;\n\tflex-shrink: 1;\n\n\t& > * {\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n"])));
var HideIndex = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tvisibility: hidden;\n\tpadding-right: 4px;\n"], ["\n\tvisibility: hidden;\n\tpadding-right: 4px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
