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
exports.yieldsColumnOrders = exports.columnSizes = exports.columns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var IconsRow_1 = __importDefault(require("../../../../components/IconsRow"));
var QuestionHelper_1 = __importDefault(require("../../../../components/QuestionHelper"));
var Row_1 = require("../../../../components/Row");
var utils_1 = require("../../../../utils");
var Name_1 = require("../Name");
var utils_2 = require("../../utils");
var utils_3 = require("../../../../components/YieldsPage/utils");
var Link_1 = require("../../../../components/Link");
var ImageWithFallback_1 = require("../../../../components/ImageWithFallback");
var styled_components_1 = __importDefault(require("styled-components"));
var uniswapV3 = 'For Uniswap V3 we assume a price range of +/- 30% (+/- 0.1% for stable pools) around current price.';
var ChartImage = (0, styled_components_1.default)(ImageWithFallback_1.ImageWithFallback)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin-left: auto;\n"], ["\n\tmargin-left: auto;\n"])));
exports.columns = [
    {
        header: 'Pool',
        accessorKey: 'pool',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue, row = _a.row, table = _a.table;
            var index = row.depth === 0 ? table.getSortedRowModel().rows.findIndex(function (x) { return x.id === row.id; }) : row.index;
            return ((0, jsx_runtime_1.jsx)(Name_1.NameYieldPool, { value: getValue(), configID: row.original.configID, url: row.original.url, index: index + 1, maxCharacters: 20 }));
        },
        size: 200
    },
    {
        header: function () { return (0, jsx_runtime_1.jsx)("span", __assign({ style: { paddingLeft: '32px' } }, { children: "Project" })); },
        accessorKey: 'project',
        enableSorting: false,
        cell: function (_a) {
            var row = _a.row;
            return ((0, jsx_runtime_1.jsx)(Name_1.NameYield, { project: row.original.project, projectslug: row.original.projectslug, airdrop: row.original.airdrop }));
        },
        size: 200
    },
    {
        header: 'Chain',
        accessorKey: 'chains',
        enableSorting: false,
        cell: function (info) { return (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: info.getValue(), url: "/yields?chain", iconType: "chain" }); },
        meta: {
            align: 'end'
        },
        size: 60
    },
    {
        header: 'TVL',
        accessorKey: 'tvl',
        enableSorting: true,
        cell: function (info) {
            return ((0, jsx_runtime_1.jsx)("span", __assign({ style: {
                    color: info.row.original.strikeTvl ? 'var(--text-disabled)' : 'inherit'
                } }, { children: '$' + (0, utils_1.formattedNum)(info.getValue()) })));
        },
        size: 120,
        meta: {
            align: 'end'
        }
    },
    {
        header: 'APY',
        accessorKey: 'apy',
        enableSorting: true,
        cell: function (info) {
            return ((0, jsx_runtime_1.jsxs)("span", __assign({ style: { display: 'flex', gap: '4px', justifyContent: 'flex-end' } }, { children: [info.row.original.project === 'cBridge' ? ((0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: 'Your deposit can be moved to another chain with a different APY!' })) : info.row.original.project === 'Uniswap V3' ? ((0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: 'Calculated as: 24h fees * 365 / TVL. Enable "7d Base APY" for a more detailed APY calculation which uses 7 day trading fees and a price range of +/- 30% (+/- 0.1% for stable pools) around current price.' })) : null, (0, utils_1.formattedPercent)(info.getValue(), true, 700)] })));
        },
        size: 100,
        meta: {
            align: 'end',
            headerHelperText: 'APY = Base APY + Reward APY. For non-autocompounding pools we do not account for reinvesting, in which case APY = APR.'
        }
    },
    {
        header: 'Base APY',
        accessorKey: 'apyBase',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue(), true) });
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Annualised percentage yield from trading fees/supplying. For dexes we use the 24h fees and scale those to a year.'
        }
    },
    {
        header: 'Reward APY',
        accessorKey: 'apyReward',
        enableSorting: true,
        cell: function (_a) {
            var _b;
            var getValue = _a.getValue, row = _a.row;
            var rewards = (_b = row.original.rewards) !== null && _b !== void 0 ? _b : [];
            return ((0, jsx_runtime_1.jsxs)(Row_1.AutoRow, __assign({ sx: { width: '100%', justifyContent: 'flex-end', gap: '4px' } }, { children: [utils_3.lockupsRewards.includes(row.original.project) ? (0, jsx_runtime_1.jsx)(QuestionHelper_1.default, { text: utils_3.earlyExit }) : null, (0, jsx_runtime_1.jsx)(IconsRow_1.default, { links: rewards, url: "/yields?project", iconType: "token", yieldRewardsSymbols: row.original.rewardTokensSymbols }), (0, utils_1.formattedPercent)(getValue(), true)] })));
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Annualised percentage yield from incentives.'
        }
    },
    {
        header: '7d Base APY',
        accessorKey: 'apyBase7d',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue(), true) });
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: "Annualised percentage yield based on the trading fees from the last 7 days. ".concat(uniswapV3)
        }
    },
    {
        header: '7d IL',
        accessorKey: 'il7d',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue(), true) });
        },
        size: 100,
        meta: {
            align: 'end',
            headerHelperText: "7d Impermanent Loss: the percentage loss between LPing for the last 7days vs hodling the underlying assets instead. ".concat(uniswapV3)
        }
    },
    {
        header: '30d Avg APY',
        accessorKey: 'apyMean30d',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue(), true) });
        },
        size: 100,
        meta: {
            align: 'end'
        }
    },
    {
        header: '30d APY Chart',
        accessorKey: 'apyChart30d',
        enableSorting: false,
        cell: function (_a) {
            var row = _a.row;
            var configID = row.original.configID;
            if (!configID)
                return null;
            return ((0, jsx_runtime_1.jsx)(Link_1.CustomLink, __assign({ href: "/yields/pool/".concat(configID), target: "_blank" }, { children: (0, jsx_runtime_1.jsx)(ChartImage, { src: "https://yield-charts.llama.fi/yield-chart/".concat(configID), alt: "", width: 90, height: 30, style: { marginLeft: 'auto' }, unoptimized: true }) })));
        },
        size: 110,
        meta: {
            align: 'end'
        }
    },
    {
        header: '1d Volume',
        accessorKey: 'volumeUsd1d',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() !== null ? '$' + (0, utils_1.formattedNum)(info.getValue()) : null });
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: '$ Volume in the last 24 hours.'
        }
    },
    {
        header: '7d Volume',
        accessorKey: 'volumeUsd7d',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: info.getValue() !== null ? '$' + (0, utils_1.formattedNum)(info.getValue()) : null });
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: '$ Volume in the last 7 days'
        }
    },
    {
        header: 'Inception APY',
        accessorKey: 'apyBaseInception',
        enableSorting: true,
        cell: function (info) {
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(info.getValue(), true) });
        },
        size: 140,
        meta: {
            align: 'end',
            headerHelperText: 'Annualised percentage yield since inception'
        }
    }
];
// key: min width of window/screen
// values: table columns order
var columnOrders = {
    0: [
        'pool',
        'apy',
        'tvl',
        'project',
        'chains',
        'apyBase',
        'apyReward',
        'apyNet7d',
        'apyBase7d',
        'il7d',
        'apyMean30d',
        'apyChart30d',
        'volumeUsd1d',
        'volumeUsd7d',
        'apyBaseInception'
    ],
    400: [
        'pool',
        'project',
        'apy',
        'tvl',
        'chains',
        'apyBase',
        'apyReward',
        'apyNet7d',
        'apyBase7d',
        'il7d',
        'apyMean30d',
        'apyChart30d',
        'volumeUsd1d',
        'volumeUsd7d',
        'apyBaseInception'
    ],
    640: [
        'pool',
        'project',
        'tvl',
        'apy',
        'chains',
        'apyBase',
        'apyReward',
        'apyNet7d',
        'apyBase7d',
        'il7d',
        'apyMean30d',
        'volumeUsd1d',
        'volumeUsd7d',
        'apyBaseInception',
        'apyChart30d'
    ],
    1280: [
        'pool',
        'project',
        'chains',
        'tvl',
        'apy',
        'apyBase',
        'apyReward',
        'apyNet7d',
        'apyBase7d',
        'il7d',
        'apyMean30d',
        'volumeUsd1d',
        'volumeUsd7d',
        'apyBaseInception',
        'apyChart30d'
    ]
};
exports.columnSizes = {
    0: {
        pool: 120,
        project: 200,
        chain: 60,
        tvl: 120,
        apy: 100,
        apyBase: 140,
        apyReward: 140,
        apyNet7d: 120,
        apyBase7d: 130,
        il7d: 90,
        apyMean30d: 120,
        volumeUsd1d: 140,
        volumeUsd7d: 140,
        apyBaseInception: 150,
        apyChart30d: 110
    },
    812: {
        pool: 250,
        project: 200,
        chain: 60,
        tvl: 120,
        apy: 100,
        apyBase: 140,
        apyReward: 140,
        apyNet7d: 120,
        apyBase7d: 140,
        il7d: 90,
        apyMean30d: 120,
        volumeUsd1d: 140,
        volumeUsd7d: 140,
        apyBaseInception: 150,
        apyChart30d: 110
    }
};
exports.yieldsColumnOrders = (0, utils_2.formatColumnOrder)(columnOrders);
var templateObject_1;
