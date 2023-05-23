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
exports.columnSizes = exports.assetsColumnOrders = exports.peggedAssetsColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var rebass_1 = require("rebass");
var IconsRow_1 = __importDefault(require("../../../../components/IconsRow"));
var Link_1 = require("../../../../components/Link");
var QuestionHelper_1 = __importDefault(require("../../../../components/QuestionHelper"));
var Row_1 = require("../../../../components/Row");
var TokenLogo_1 = __importDefault(require("../../../../components/TokenLogo"));
var utils_1 = require("../../../../utils");
var utils_2 = require("../../utils");
exports.peggedAssetsColumn = [
    {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var value = getValue();
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            var symbol = row.original.symbol && row.original.symbol !== '-' ? " (".concat(row.original.symbol, ")") : '';
            return ((0, jsx_runtime_1.jsxs)(Name, { children: [(0, jsx_runtime_1.jsx)("span", { children: index + 1 }), (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: (0, utils_1.peggedAssetIconUrl)(value), "data-lgonly": true }), (0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/stablecoin/".concat((0, utils_1.slug)(value)) }, { children: value + symbol }))] }));
        },
        size: 240
    },
    {
        header: 'Chains',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: getValue(), url: "/stablecoins", iconType: "chain" });
        },
        size: 200,
        meta: {
            align: 'end',
            headerHelperText: "Chains are ordered by pegged asset's issuance on each chain"
        }
    },
    {
        header: '% Off Peg',
        accessorKey: 'pegDeviation',
        size: 120,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var value = getValue();
            var rowValues = row.original;
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [rowValues.depeggedTwoPercent ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "Currently de-pegged by 2% or more." }) : null, value ? formattedPeggedPercent(value) : value === 0 ? formattedPeggedPercent(0) : '-'] })));
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: '1m % Off Peg',
        accessorKey: 'pegDeviation_1m',
        size: 150,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var value = getValue();
            var rowValues = row.original;
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [rowValues.pegDeviationInfo ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: pegDeviationText(rowValues.pegDeviationInfo) }) : null, (0, jsx_runtime_1.jsx)("span", { children: value ? formattedPeggedPercent(value) : '-' })] })));
        },
        meta: {
            align: 'end',
            headerHelperText: 'Shows greatest % price deviation from peg over the past month'
        }
    },
    {
        header: 'Price',
        accessorKey: 'price',
        size: 100,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row;
            var value = getValue();
            var rowValues = row.original;
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [rowValues.floatingPeg ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: "Has a variable, floating, or crawling peg." }) : null, (0, jsx_runtime_1.jsx)("span", { children: value ? (0, utils_1.formattedPeggedPrice)(value, true) : '-' })] })));
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: '1d Change',
        accessorKey: 'change_1d',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: '7d Change',
        accessorKey: 'change_7d',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: '1m Change',
        accessorKey: 'change_1m',
        cell: function (info) { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue()) }); },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Market Cap',
        accessorKey: 'mcap',
        cell: function (info) { return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["$", (0, utils_1.formattedNum)(info.getValue())] }); },
        size: 120,
        meta: {
            align: 'end'
        }
    }
];
// key: min width of window/screen
// values: table columns order
exports.assetsColumnOrders = (0, utils_2.formatColumnOrder)({
    0: ['name', 'mcap', 'change_1d', 'change_7d', 'change_1m', 'price', 'pegDeviation', 'pegDeviation_1m', 'chains'],
    1024: ['name', 'chains', 'pegDeviation', 'pegDeviation_1m', 'price', 'change_1d', 'change_7d', 'change_1m', 'mcap']
});
exports.columnSizes = {
    0: {
        name: 180,
        chains: 180,
        pegDeviation: 120,
        pegDeviation_1m: 150,
        price: 100,
        change_1d: 100,
        change_7d: 100,
        change_1m: 100,
        mcap: 120
    },
    480: {
        name: 180,
        chains: 180,
        pegDeviation: 120,
        pegDeviation_1m: 150,
        price: 100,
        change_1d: 100,
        change_7d: 100,
        change_1m: 100,
        mcap: 120
    },
    1024: {
        name: 240,
        chains: 200,
        pegDeviation: 120,
        pegDeviation_1m: 150,
        price: 100,
        change_1d: 100,
        change_7d: 100,
        change_1m: 100,
        mcap: 120
    }
};
function formattedPeggedPercent(percent, noSign) {
    if (noSign === void 0) { noSign = false; }
    if (percent === null) {
        return null;
    }
    var up = '#3fb950';
    var down = '#f85149';
    if (noSign) {
        up = down = '';
    }
    percent = parseFloat(percent);
    if (!percent || percent === 0) {
        return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ fontWeight: 500 }, { children: "0%" }));
    }
    if (percent < 0.0001 && percent > 0) {
        return ((0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ fontWeight: 500, color: up }, { children: '< 0.0001%' })));
    }
    if (percent < 0 && percent > -0.0001) {
        return ((0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ fontWeight: 500, color: down }, { children: '< 0.0001%' })));
    }
    var fixedPercent = percent.toFixed(2);
    if (fixedPercent === '0.00') {
        return '0%';
    }
    var prefix = noSign ? '' : '+';
    if (fixedPercent > 0) {
        if (fixedPercent > 100) {
            return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ fontWeight: 500, color: up }, { children: "".concat(prefix).concat(percent === null || percent === void 0 ? void 0 : percent.toFixed(0).toLocaleString(), "%") }));
        }
        else {
            if (fixedPercent > 2) {
                return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ fontWeight: 700, color: up }, { children: "".concat(prefix).concat(fixedPercent, "%") }));
            }
            else {
                return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ fontWeight: 500, color: up }, { children: "".concat(prefix).concat(fixedPercent, "%") }));
            }
        }
    }
    else {
        if (fixedPercent < -2) {
            return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ fontWeight: 700, color: down }, { children: "".concat(fixedPercent, "%") }));
        }
        else {
            return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ fontWeight: 500, color: down }, { children: "".concat(fixedPercent, "%") }));
        }
    }
}
var formatPriceSource = {
    chainlink: 'Chainlink',
    uniswap: 'a Uniswap v3 pool oracle',
    dexscreener: 'DEX Screener',
    curve: 'a Curve pool oracle',
    coingecko: 'CoinGecko',
    birdeye: 'Birdeye',
    kucoin: 'KuCoin Exchange',
    defillama: 'DefiLlama',
    kaddex: 'Kaddex'
};
function pegDeviationText(pegDeviationInfo) {
    var timestamp = pegDeviationInfo.timestamp, price = pegDeviationInfo.price, priceSource = pegDeviationInfo.priceSource;
    var date = new Date(timestamp * 1000).toISOString().slice(0, 10);
    return "On ".concat(date, ", ").concat(formatPriceSource[priceSource], " reported a price of $").concat((0, utils_1.formattedPeggedPrice)(price), ".");
}
var Name = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tposition: relative;\n\n\ta {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhitespace: nowrap;\n\t}\n\n\t& > *[data-logo] {\n\t\tdisplay: none;\n\t}\n\n\t@media (min-width: ", ") {\n\t\t& > *[data-logo] {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n\tposition: relative;\n\n\ta {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhitespace: nowrap;\n\t}\n\n\t& > *[data-logo] {\n\t\tdisplay: none;\n\t}\n\n\t@media (min-width: ", ") {\n\t\t& > *[data-logo] {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n"])), function (_a) {
    var bpLg = _a.theme.bpLg;
    return bpLg;
});
var templateObject_1;
