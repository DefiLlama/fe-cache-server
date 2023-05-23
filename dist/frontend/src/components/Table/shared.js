"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableFiltersWithInput = exports.SearchIcon = exports.SearchWrapper = exports.TableHeaderAndSearch = exports.PoolStrategyWithProjects = exports.TableHeader = exports.Dropdowns = exports.TableFilters = exports.AccordionButton = exports.Name = void 0;
var react_feather_1 = require("react-feather");
var styled_components_1 = __importDefault(require("styled-components"));
exports.Name = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tpadding-left: ", "px;\n\tposition: relative;\n\n\t& > *[data-bookmark] {\n\t\tposition: absolute;\n\t\tleft: -2px;\n\t}\n\n\ta {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhitespace: nowrap;\n\t}\n\n\ta:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t& > *[data-lgonly] {\n\t\tdisplay: none;\n\t}\n\n\t@media (min-width: ", ") {\n\t\t& > *[data-lgonly] {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tpadding-left: ", "px;\n\tposition: relative;\n\n\t& > *[data-bookmark] {\n\t\tposition: absolute;\n\t\tleft: -2px;\n\t}\n\n\ta {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhitespace: nowrap;\n\t}\n\n\ta:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t& > *[data-lgonly] {\n\t\tdisplay: none;\n\t}\n\n\t@media (min-width: ", ") {\n\t\t& > *[data-lgonly] {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n"])), function (_a) {
    var depth = _a.depth;
    return (depth ? depth * 48 : depth === 0 ? 24 : 0);
}, function (_a) {
    var bpLg = _a.theme.bpLg;
    return bpLg;
});
exports.AccordionButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: absolute;\n\tleft: -8px;\n"], ["\n\tposition: absolute;\n\tleft: -8px;\n"])));
exports.TableFilters = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 20px;\n\tmargin: 0 0 -20px;\n"], ["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 20px;\n\tmargin: 0 0 -20px;\n"])));
exports.Dropdowns = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 12px;\n"], ["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 12px;\n"])));
exports.TableHeader = styled_components_1.default.h1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tmargin: 0 auto 0 0;\n\tfont-weight: 500;\n\tfont-size: 1.125rem;\n"], ["\n\tmargin: 0 auto 0 0;\n\tfont-weight: 500;\n\tfont-size: 1.125rem;\n"])));
exports.PoolStrategyWithProjects = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tfont-size: 12px;\n\n\timg {\n\t\theight: 16px;\n\t\twidth: 16px;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n\tfont-size: 12px;\n\n\timg {\n\t\theight: 16px;\n\t\twidth: 16px;\n\t}\n"])));
exports.TableHeaderAndSearch = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 20px;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 20px;\n"])));
exports.SearchWrapper = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tposition: relative;\n\tbottom: -6px;\n\tmargin-left: auto;\n\n\tinput {\n\t\twidth: 100%;\n\t\tmargin-right: auto;\n\t\tborder-radius: 8px;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\n\t\tfont-size: 0.875rem;\n\t\tborder: none;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tinput {\n\t\t\tmax-width: 400px;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tposition: relative;\n\tbottom: -6px;\n\tmargin-left: auto;\n\n\tinput {\n\t\twidth: 100%;\n\t\tmargin-right: auto;\n\t\tborder-radius: 8px;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\n\t\tfont-size: 0.875rem;\n\t\tborder: none;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tinput {\n\t\t\tmax-width: 400px;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#000' : '#fff');
}, function (_a) {
    var bpSm = _a.theme.bpSm;
    return bpSm;
});
exports.SearchIcon = (0, styled_components_1.default)(react_feather_1.Search)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 8px;\n\tcolor: ", ";\n"], ["\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 8px;\n\tcolor: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text3;
});
exports.TableFiltersWithInput = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin: 0 0 -20px;\n\tposition: relative;\n\n\tinput {\n\t\twidth: 100%;\n\t\tmargin-right: auto;\n\t\tborder-radius: 8px;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\n\t\tfont-size: 0.875rem;\n\t\tborder: none;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tinput {\n\t\t\tmax-width: 400px;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tflex-wrap: wrap;\n\tmargin: 0 0 -20px;\n\tposition: relative;\n\n\tinput {\n\t\twidth: 100%;\n\t\tmargin-right: auto;\n\t\tborder-radius: 8px;\n\t\tpadding: 8px;\n\t\tpadding-left: 32px;\n\t\tbackground: ", ";\n\n\t\tfont-size: 0.875rem;\n\t\tborder: none;\n\t}\n\n\t@media screen and (min-width: ", ") {\n\t\tinput {\n\t\t\tmax-width: 400px;\n\t\t}\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? '#000' : '#fff');
}, function (_a) {
    var bpSm = _a.theme.bpSm;
    return bpSm;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
