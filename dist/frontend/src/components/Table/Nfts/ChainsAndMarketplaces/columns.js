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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketplacesColumns = exports.chainsColumns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var IconsRow_1 = __importDefault(require("../../../../components/IconsRow"));
var Link_1 = require("../../../../components/Link");
var TokenLogo_1 = __importDefault(require("../../../../components/TokenLogo"));
var utils_1 = require("../../../../utils");
var shared_1 = require("../../shared");
exports.chainsColumns = [
    {
        header: 'Name',
        accessorKey: 'chain',
        enableSorting: false,
        cell: function (_a) {
            var row = _a.row;
            var item = row.original;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.chainIconUrl)(item.chain) }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ style: {
                            marginLeft: '16px',
                            whiteSpace: 'nowrap',
                            minWidth: '200px'
                        }, href: '/nfts/chain/' + item.chain }, { children: (0, utils_1.capitalizeFirstLetter)(item.chain) }))] }));
        },
        size: 200
    },
    {
        header: 'MarketPlaces',
        accessorKey: 'marketplaces',
        enableSorting: false,
        cell: function (info) {
            var values = info.getValue();
            return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: values.map(function (x) { return (0, utils_1.capitalizeFirstLetter)(x); }), url: "/nfts/marketplace", iconType: "token" });
        },
        meta: {
            align: 'end'
        },
        size: 120
    },
    {
        header: 'Collections',
        accessorKey: 'collections',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() <= 0 ? '--' : (0, utils_1.formattedNum)(getValue(), false) });
        },
        meta: {
            align: 'end'
        },
        size: 120
    },
    {
        header: 'Daily Volume',
        accessorKey: 'dailyVolumeUSD',
        enableSorting: true,
        meta: {
            align: 'end'
        },
        size: 120
    },
    {
        header: 'Total Volume',
        accessorKey: 'totalVolumeUSD',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() <= 0 ? '--' : (0, utils_1.formattedNum)(getValue(), true) });
        },
        meta: {
            align: 'end'
        },
        size: 120
    }
];
exports.marketplacesColumns = [
    {
        header: 'Name',
        accessorKey: 'marketplace',
        enableSorting: false,
        cell: function (_a) {
            var row = _a.row;
            var item = row.original;
            return ((0, jsx_runtime_1.jsxs)(shared_1.Name, { children: [(0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.tokenIconUrl)(item.marketplace) }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ style: {
                            marginLeft: '16px',
                            whiteSpace: 'nowrap',
                            minWidth: '200px'
                        }, href: '/nfts/marketplace/' + item.slug }, { children: (0, utils_1.capitalizeFirstLetter)(item.marketplace) }))] }));
        },
        size: 200
    },
    {
        header: 'Chains',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (info) {
            var values = info.getValue();
            return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: values.map(function (x) { return (0, utils_1.capitalizeFirstLetter)(x); }), url: "/nfts/chain", iconType: "chain" });
        },
        meta: {
            align: 'end'
        },
        size: 120
    },
    {
        header: 'Collections',
        accessorKey: 'collections',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() <= 0 ? '--' : (0, utils_1.formattedNum)(getValue(), false) });
        },
        meta: {
            align: 'end'
        },
        size: 120
    },
    {
        header: 'Daily Volume',
        accessorKey: 'dailyVolumeUSD',
        enableSorting: true,
        meta: {
            align: 'end'
        },
        size: 120
    },
    {
        header: 'Total Volume',
        accessorKey: 'totalVolumeUSD',
        enableSorting: true,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() <= 0 ? '--' : (0, utils_1.formattedNum)(getValue(), true) });
        },
        meta: {
            align: 'end'
        },
        size: 120
    }
];
