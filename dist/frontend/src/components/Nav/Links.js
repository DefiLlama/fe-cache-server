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
Object.defineProperty(exports, "__esModule", { value: true });
exports.linksWithNoSubMenu = exports.navLinks = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_feather_1 = require("react-feather");
var defaultToolsAndFooterLinks = {
    tools: [
        {
            name: 'DefiLlama Extension',
            path: 'https://chrome.google.com/webstore/detail/defillama/phgiabfbjodhgckcffppiboooeiecgeg',
            newTag: true,
            external: true
        },
        {
            name: 'LlamaNodes',
            path: 'https://llamanodes.com/',
            newTag: true,
            external: true,
            referrer: true
        },
        {
            name: 'DLNews',
            path: 'https://dlnews.com/',
            newTag: true,
            external: true,
            referrer: true
        },
        { name: 'Watchlist', path: '/watchlist' },
        { name: 'Directory', path: '/directory' },
        {
            name: 'Roundup',
            path: '/roundup'
        },
        { name: 'Trending Contracts', path: '/trending-contracts', newTag: true },
        {
            name: 'Token Liquidity',
            path: '/liquidity',
            newTag: true,
            external: true
        },
        {
            name: 'Wiki',
            path: 'https://wiki.defillama.com/wiki/Main_Page',
            external: true
        },
        {
            name: 'Press / Media',
            path: '/press'
        },
        {
            name: 'API Docs',
            path: '/docs/api'
        },
        {
            name: 'List Your Project',
            path: 'https://docs.llama.fi/list-your-project/submit-a-project',
            external: true
        }
    ],
    footer: [
        {
            name: 'Reports',
            path: '/reports',
            newTag: true
        },
        { name: 'About / Contact', path: '/about' },
        {
            name: 'Twitter',
            path: 'https://twitter.com/DefiLlama',
            external: true
        },
        {
            name: 'Discord',
            path: 'https://discord.defillama.com',
            external: true
        },
        {
            name: 'Donate',
            path: '/donations'
        }
    ]
};
exports.navLinks = {
    DeFi: __assign(__assign({ main: [
            { name: 'Overview', path: '/' },
            { name: 'Chains', path: '/chains' },
            { name: 'Airdrops', path: '/airdrops' },
            { name: 'Treasuries', path: '/treasuries', newTag: true },
            { name: 'Oracles', path: '/oracles' },
            { name: 'Forks', path: '/forks' },
            { name: 'Top Protocols', path: '/top-protocols' },
            { name: 'Comparison', path: '/comparison?protocol=MakerDAO&protocol=Curve' },
            { name: 'Protocol Expenses', path: '/expenses', newTag: true },
            { name: 'Token Usage', path: '/tokenUsage?token=ETH' },
            { name: 'Categories', path: '/categories' },
            { name: 'Recent', path: '/recent' },
            { name: 'Languages', path: '/languages' }
        ] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.BarChart2, { size: 16 }) }),
    Yields: {
        main: [
            { name: 'Pools', path: '/yields' },
            { name: 'Delta Neutral', path: '/yields/strategy' },
            { name: 'Long-Short Strats', path: '/yields/strategyLongShort', newTag: true },
            { name: 'Leveraged Lending', path: '/yields/loop' },
            { name: 'Borrow', path: '/yields/borrow' },
            { name: 'Overview', path: '/yields/overview' },
            { name: 'Stablecoin Pools', path: '/yields/stablecoins' },
            { name: 'Projects', path: '/yields/projects' },
            { name: 'Halal', path: '/yields/halal' }
        ],
        tools: [
            { name: 'Watchlist', path: '/yields/watchlist' },
            { name: 'Directory', path: '/directory' },
            {
                name: 'Roundup',
                path: '/roundup'
            },
            { name: 'Trending Contracts', path: '/trending-contracts', newTag: true },
            {
                name: 'Token Liquidity',
                path: '/liquidity',
                newTag: true,
                external: true
            },
            {
                name: 'Wiki',
                path: 'https://wiki.defillama.com/wiki/Main_Page',
                external: true
            },
            {
                name: 'Press / Media',
                path: '/press'
            },
            {
                name: 'API Docs',
                path: '/docs/api'
            },
            { name: 'List your protocol', path: 'https://github.com/DefiLlama/yield-server#readme', external: true },
            {
                name: 'Download Data',
                path: 'https://datasets.llama.fi/yields/yield_rankings.csv'
            }
        ],
        footer: [
            { name: 'About DefiLlama', path: '/about' },
            {
                name: 'Twitter',
                path: 'https://twitter.com/DefiLlama',
                external: true
            },
            {
                name: 'Discord',
                path: 'https://discord.defillama.com',
                external: true
            },
            {
                name: 'Donate',
                path: '/donations'
            }
        ],
        icon: (0, jsx_runtime_1.jsx)(react_feather_1.Percent, { size: 16 })
    },
    'DefiLlama Swap': __assign(__assign({ main: [] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.Repeat, { size: 16 }) }),
    NFT: __assign(__assign({ main: [
            { name: 'Collections', path: '/nfts' },
            { name: 'Marketplaces', path: '/nfts/marketplaces' }
        ] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.Image, { size: 16 }), newTag: true }),
    Unlocks: __assign(__assign({ main: [] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.Unlock, { size: 16 }), newTag: true }),
    'Borrow Aggregator': __assign(__assign({ main: [] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.Search, { size: 16 }) }),
    'CEX Transparency': __assign(__assign({ main: [] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.BookOpen, { size: 16 }) }),
    Bridges: __assign(__assign({ main: [
            { name: 'Overview', path: '/bridges' },
            { name: 'Chains', path: '/bridges/chains' },
            { name: 'Transactions', path: '/bridge-transactions', newTag: true }
        ] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.Shuffle, { size: 16 }) }),
    Governance: __assign(__assign({ main: [] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.FileText, { size: 16 }), newTag: true }),
    Liquidations: __assign(__assign({ main: [] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.Droplet, { size: 16 }) }),
    Volumes: __assign(__assign({ main: [
            { name: 'Overview', path: '/dexs' },
            { name: 'Chains', path: '/dexs/chains' },
            { name: 'Options', path: '/options' }
        ] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.BarChart, { size: 16 }) }),
    'Fees/Revenue': __assign(__assign({ main: [] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.PieChart, { size: 16 }) }),
    Raises: __assign(__assign({ main: [
            { name: 'Overview', path: '/raises' },
            { name: 'Active Investors', path: '/raises/active-investors' }
        ] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.Book, { size: 16 }) }),
    Stables: __assign(__assign({ main: [
            { name: 'Overview', path: '/stablecoins' },
            { name: 'Chains', path: '/stablecoins/chains' }
        ] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.DollarSign, { size: 16 }) }),
    Hacks: __assign(__assign({ main: [] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.ShieldOff, { size: 16 }) }),
    'ETH Liquid Staking': __assign(__assign({ main: [] }, defaultToolsAndFooterLinks), { icon: (0, jsx_runtime_1.jsx)(react_feather_1.Layers, { size: 16 }) })
    // NFTs: {
    // 	main: [],
    // 	...defaultToolsAndFooterLinks,
    // 	icon: <FeatherImage size={16} />
    // }
};
exports.linksWithNoSubMenu = [
    { name: 'Liquidations', url: '/liquidations/eth' },
    { name: 'Fees/Revenue', url: '/fees' },
    { name: 'Hacks', url: '/hacks' },
    { name: 'Unlocks', url: '/unlocks' },
    { name: 'Governance', url: '/governance' },
    { name: 'Borrow Aggregator', url: '/borrow' },
    { name: 'CEX Transparency', url: '/cexs' },
    { name: 'DefiLlama Swap', url: 'https://swap.defillama.com/', external: true },
    { name: 'ETH Liquid Staking', url: '/lsd' }
];
