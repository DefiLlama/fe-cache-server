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
exports.LiquidationsContent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-unused-vars*/
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var react_switch_1 = __importDefault(require("react-switch"));
var liquidations_1 = require("../../utils/liquidations");
var components_1 = require("../../components");
var LiquidationsChart_1 = require("./LiquidationsChart");
var TotalLiquidable_1 = require("./TotalLiquidable");
var LiquidableChanges24H_1 = require("./LiquidableChanges24H");
var context_1 = require("../../components/LiquidationsPage/context");
var utils_1 = require("./utils");
var LocalStorage_1 = require("../../contexts/LocalStorage");
var image_1 = __importDefault(require("next/future/image"));
var boboSmug_png_1 = __importDefault(require("~/assets/boboSmug.png"));
var Bobo = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: absolute;\n\tbottom: -36px;\n\tleft: 0;\n\n\timg {\n\t\twidth: 34px !important;\n\t\theight: 34px !important;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: initial;\n\t\tleft: initial;\n\t\tz-index: 1;\n\t}\n"], ["\n\tposition: absolute;\n\tbottom: -36px;\n\tleft: 0;\n\n\timg {\n\t\twidth: 34px !important;\n\t\theight: 34px !important;\n\t}\n\n\t@media screen and (min-width: 80rem) {\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: initial;\n\t\tleft: initial;\n\t\tz-index: 1;\n\t}\n"])));
var LiquidationsContent = function (props) {
    var data = props.data, prevData = props.prevData;
    var _a = __read(React.useState(false), 2), bobo = _a[0], setBobo = _a[1];
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsxs)(components_1.BreakpointPanels, { children: [(0, jsx_runtime_1.jsx)(components_1.BreakpointPanel, { children: (0, jsx_runtime_1.jsx)(TotalLiquidable_1.TotalLiquidable, __assign({}, data)) }), (0, jsx_runtime_1.jsx)(components_1.PanelHiddenMobile, { children: (0, jsx_runtime_1.jsx)(LiquidableChanges24H_1.LiquidableChanges24H, { data: data, prevData: prevData }) }), (0, jsx_runtime_1.jsx)(components_1.PanelHiddenMobile, { children: (0, jsx_runtime_1.jsx)(DangerousPositionsAmount, { data: data }) })] }), (0, jsx_runtime_1.jsxs)(components_1.BreakpointPanel, { children: [(0, jsx_runtime_1.jsxs)(Row, { children: [(0, jsx_runtime_1.jsx)(CumulativeToggle, {}), (0, jsx_runtime_1.jsx)(CurrencyToggle, { symbol: data.symbol })] }), (0, jsx_runtime_1.jsxs)(Bobo, __assign({ onClick: function () { return setBobo(!bobo); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Enable Goblin Mode" })), (0, jsx_runtime_1.jsx)(image_1.default, { src: boboSmug_png_1.default, width: "34px", height: "34px", alt: "bobo cheers" })] })), (0, jsx_runtime_1.jsx)(LiquidationsChart_1.LiquidationsChart, { chartData: data, uid: data.symbol, bobo: bobo })] })] }));
};
exports.LiquidationsContent = LiquidationsContent;
var Row = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0 0.5rem;\n\tmargin-right: 1rem;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0 0.5rem;\n\tmargin-right: 1rem;\n"])));
var ToggleWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\tgap: 0.5rem;\n\talign-items: center;\n\tmargin-bottom: 1rem;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\tgap: 0.5rem;\n\talign-items: center;\n\tmargin-bottom: 1rem;\n"])));
var CurrencyToggle = function (props) {
    var _a = __read((0, LocalStorage_1.useLiqsManager)(), 2), liqsSettings = _a[0], toggleLiqsSettings = _a[1];
    var LIQS_USING_USD = LocalStorage_1.LIQS_SETTINGS.LIQS_USING_USD;
    var isLiqsUsingUsd = liqsSettings[LIQS_USING_USD];
    return ((0, jsx_runtime_1.jsxs)(ToggleWrapper, { children: [props.symbol.toUpperCase(), (0, jsx_runtime_1.jsx)(react_switch_1.default, { onChange: toggleLiqsSettings(LIQS_USING_USD), checked: isLiqsUsingUsd, onColor: "#0A71F1", offColor: "#0A71F1", height: 20, width: 40, uncheckedIcon: false, checkedIcon: false }), "USD"] }));
};
var CumulativeToggle = function () {
    var _a = __read((0, LocalStorage_1.useLiqsManager)(), 2), liqsSettings = _a[0], toggleLiqsSettings = _a[1];
    var LIQS_CUMULATIVE = LocalStorage_1.LIQS_SETTINGS.LIQS_CUMULATIVE;
    var isLiqsCumulative = liqsSettings[LIQS_CUMULATIVE];
    return ((0, jsx_runtime_1.jsxs)(ToggleWrapper, { children: [(0, jsx_runtime_1.jsx)(react_switch_1.default, { onChange: toggleLiqsSettings(LIQS_CUMULATIVE), checked: isLiqsCumulative, onColor: "#0A71F1", height: 20, width: 40, uncheckedIcon: false, checkedIcon: false }), "Cumulative"] }));
};
var DangerousPositionsAmount = function (props) {
    var stackBy = (0, utils_1.useStackBy)();
    var selectedSeries = React.useContext(context_1.LiquidationsContext).selectedSeries;
    var dangerousPositionsAmount = React.useMemo(function () { return getDangerousPositionsAmount(props.data, stackBy, selectedSeries); }, [props.data, stackBy, selectedSeries]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Within -20% of current price" }), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { '--tile-text-color': '#46acb7' } }, { children: ["$", (0, liquidations_1.getReadableValue)(dangerousPositionsAmount)] }))] }));
};
var getDangerousPositionsAmount = function (data, stackBy, selectedSeries, threshold) {
    if (threshold === void 0) { threshold = -0.2; }
    var priceThreshold = data.currentPrice * (1 + threshold);
    var dangerousPositionsAmount = 0;
    if (!selectedSeries) {
        dangerousPositionsAmount = data.dangerousPositionsAmount;
    }
    else if (stackBy === 'chains') {
        Object.keys(selectedSeries)
            .filter(function (chain) { return selectedSeries[chain]; })
            .forEach(function (chain) {
            var _a, _b, _c, _d;
            var _chain = liquidations_1.PROTOCOL_NAMES_MAP_REVERSE[chain];
            var binSize = (_b = (_a = data.chartDataBins.chains[_chain]) === null || _a === void 0 ? void 0 : _a.binSize) !== null && _b !== void 0 ? _b : 0;
            dangerousPositionsAmount += Object.entries((_d = (_c = data.chartDataBins.chains[_chain]) === null || _c === void 0 ? void 0 : _c.bins) !== null && _d !== void 0 ? _d : {})
                .filter(function (_a) {
                var _b = __read(_a, 1), bin = _b[0];
                return binSize * parseInt(bin) >= priceThreshold;
            })
                .reduce(function (acc, _a) {
                var _b = __read(_a, 2), value = _b[1];
                return acc + value['usd'];
            }, 0);
        });
    }
    else {
        Object.keys(selectedSeries)
            .filter(function (protocol) { return selectedSeries[protocol]; })
            .forEach(function (protocol) {
            var _a, _b, _c, _d;
            var _protocol = liquidations_1.PROTOCOL_NAMES_MAP_REVERSE[protocol];
            var binSize = (_b = (_a = data.chartDataBins.protocols[_protocol]) === null || _a === void 0 ? void 0 : _a.binSize) !== null && _b !== void 0 ? _b : 0;
            dangerousPositionsAmount += Object.entries((_d = (_c = data.chartDataBins.protocols[_protocol]) === null || _c === void 0 ? void 0 : _c.bins) !== null && _d !== void 0 ? _d : {})
                .filter(function (_a) {
                var _b = __read(_a, 1), bin = _b[0];
                return binSize * parseInt(bin) >= priceThreshold;
            })
                .reduce(function (acc, _a) {
                var _b = __read(_a, 2), value = _b[1];
                return acc + value['usd'];
            }, 0);
        });
    }
    return dangerousPositionsAmount;
};
var Wrapper = (0, styled_components_1.default)(components_1.ChartAndValuesWrapper)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tz-index: 0;\n\tmargin-top: -1rem;\n"], ["\n\tz-index: 0;\n\tmargin-top: -1rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
