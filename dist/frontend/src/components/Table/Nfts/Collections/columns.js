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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Link_1 = require("../../../../components/Link");
var TokenLogo_1 = __importDefault(require("../../../../components/TokenLogo"));
var utils_1 = require("../../../../utils");
var shared_1 = require("../../shared");
var styled_components_1 = __importDefault(require("styled-components"));
exports.columns = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var row = _a.row;
            var item = row.original;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.nftCollectionIconUrl)(item.collectionId), fallbackLogo: item === null || item === void 0 ? void 0 : item.image, external: true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/nfts/collection/".concat((0, utils_1.slug)(item.collectionId)) }, { children: "".concat(item.name) }))] }));
        },
        size: 200
    },
    {
        header: 'Floor Price',
        accessorKey: 'floorPrice',
        size: 120,
        cell: function (info) { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [info.getValue() ? ((0, jsx_runtime_1.jsxs)(ValueWithETH, { children: [(0, jsx_runtime_1.jsx)("span", { children: info.getValue() }), (0, jsx_runtime_1.jsxs)("svg", __assign({ fill: "#777E91", "data-eth": true, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 6 9" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.56641 4.55935L2.76099 0L0 4.56239L2.78244 6.22185L5.56641 4.55935Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.56641 5.11627L2.77631 6.74082L0 5.11627L2.78244 8.99999L5.56641 5.11627Z" })] }))] })) : (''), ' '] })); },
        meta: {
            align: 'end'
        }
    },
    {
        header: '1d Change',
        accessorKey: 'floorPricePctChange1Day',
        size: 120,
        cell: function (info) { return (0, utils_1.formattedPercent)(info.getValue()); },
        meta: {
            align: 'end'
        }
    },
    {
        header: '7d Change',
        accessorKey: 'floorPricePctChange7Day',
        size: 120,
        cell: function (info) { return (0, utils_1.formattedPercent)(info.getValue()); },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Volume 1d',
        accessorKey: 'volume1d',
        size: 120,
        cell: function (info) { return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? ((0, jsx_runtime_1.jsxs)(ValueWithETH, { children: [(0, jsx_runtime_1.jsx)("span", { children: info.getValue() }), (0, jsx_runtime_1.jsxs)("svg", __assign({ fill: "#777E91", "data-eth": true, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 6 9" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.56641 4.55935L2.76099 0L0 4.56239L2.78244 6.22185L5.56641 4.55935Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.56641 5.11627L2.77631 6.74082L0 5.11627L2.78244 8.99999L5.56641 5.11627Z" })] }))] })) : ('') })); },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Volume 7d',
        accessorKey: 'volume7d',
        size: 120,
        cell: function (info) { return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? ((0, jsx_runtime_1.jsxs)(ValueWithETH, { children: [(0, jsx_runtime_1.jsx)("span", { children: info.getValue() }), (0, jsx_runtime_1.jsxs)("svg", __assign({ fill: "#777E91", "data-eth": true, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 6 9" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.56641 4.55935L2.76099 0L0 4.56239L2.78244 6.22185L5.56641 4.55935Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.56641 5.11627L2.77631 6.74082L0 5.11627L2.78244 8.99999L5.56641 5.11627Z" })] }))] })) : ('') })); },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Sales 1d',
        accessorKey: 'sales1d',
        size: 120,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() ? info.getValue() : '' }); },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Total Supply',
        accessorKey: 'totalSupply',
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'On Sale',
        accessorKey: 'onSaleCount',
        size: 120,
        meta: {
            align: 'end'
        }
    }
];
var ValueWithETH = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tjustify-content: flex-end;\n\tflex-wrap: nowrap;\n\n\t& > *[data-eth] {\n\t\theight: 12px;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 4px;\n\tjustify-content: flex-end;\n\tflex-wrap: nowrap;\n\n\t& > *[data-eth] {\n\t\theight: 12px;\n\t}\n"])));
var templateObject_1;
