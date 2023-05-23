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
exports.DashGrid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var rebass_1 = require("rebass");
var Theme_1 = require("../Theme");
var layout_1 = __importDefault(require("../layout"));
var components_1 = require("../components");
var Row_1 = require("../components/Row");
var Link_1 = __importDefault(require("../components/Link"));
var TokenLogo_1 = __importDefault(require("../components/TokenLogo"));
var Column_1 = require("../components/Column");
var PressPanel = function (_a) {
    var imageFilename = _a.imageFilename;
    return ((0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ style: { padding: '18px 25px' } }, { children: (0, jsx_runtime_1.jsx)(Column_1.AutoColumn, __assign({ gap: "4px" }, { children: (0, jsx_runtime_1.jsx)(TokenLogo_1.default, { logo: "/press/".concat(imageFilename), size: 150 }) })) })));
};
var pressList = [
    ['us-treasury.png', 'https://home.treasury.gov/system/files/261/FSOC-Digital-Assets-Report-2022.pdf'],
    ['ft.png', 'https://www.ft.com/content/b0c581c8-96b2-4c34-abcc-5189d7283891'],
    [
        'ecb.png',
        'https://www.ecb.europa.eu/pub/financial-stability/macroprudential-bulletin/focus/2022/html/ecb.mpbu202207_focus1.en.html'
    ],
    [
        'bloomberg.png',
        'https://www.bloomberg.com/news/articles/2022-09-07/the-blockchain-trilemma-that-s-holding-back-crypto-quicktake'
    ],
    [
        'gs.png',
        'https://www.gspublishing.com/content/research/en/reports/2021/10/22/3094e0f0-379e-4f11-8dce-7f74a7718eb7.html'
    ],
    [
        'boa.png',
        'https://business.bofa.com/content/dam/flagship/bank-of-america-institute/transformation/web3-only-the-first-inning-may-2022.pdf'
    ],
    ['ms.png', 'https://advisor.morganstanley.com/scott.altemose/documents/field/s/sc/scott-a--altemose/DeFi_Apr.pdf'],
    ['nasdaq.png', 'https://www.nasdaq.com/articles/is-all-defi-doomed'],
    ['wsj.png', 'https://www.wsj.com/articles/why-the-worlds-biggest-traders-are-betting-on-blockchain-data-11638803023'],
    //['yahoo.png', 'https://finance.yahoo.com/news/defi-total-value-locked-reaches-092546041.html'],
    [
        'techcrunch.png',
        'https://techcrunch.com/2022/03/23/despite-declines-the-value-of-crypto-assets-in-defi-protocols-is-up-3x-from-a-year-ago/'
    ],
    [
        'bi.png',
        'https://www.businessinsider.com/free-crypto-airdrops-experts-risks-rewards-defi-dydx-ens-paraswap-2021-11'
    ],
    ['coindesk.png', 'https://www.coindesk.com/learn/why-tvl-matters-in-defi-total-value-locked-explained/'],
    ['ct.png', 'https://decrypt.co/94370/terra-defis-network-choice-ethereum']
];
exports.DashGrid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-gap: 1em;\n\tgrid-template-columns: 1fr;\n\tgrid-template-areas: 'account';\n\tpadding: 0 4px;\n\n\t> * {\n\t\tjustify-content: flex-end;\n\t}\n"], ["\n\tdisplay: grid;\n\tgrid-gap: 1em;\n\tgrid-template-columns: 1fr;\n\tgrid-template-areas: 'account';\n\tpadding: 0 4px;\n\n\t> * {\n\t\tjustify-content: flex-end;\n\t}\n"])));
var PanelWrapper = (0, styled_components_1.default)(rebass_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(100px, 200px));\n\tplace-content: center;\n\tgap: 6px;\n\twidth: 100%;\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(100px, 200px));\n\tplace-content: center;\n\tgap: 6px;\n\twidth: 100%;\n"])));
function PressPage() {
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Press - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Row_1.RowBetween, { children: (0, jsx_runtime_1.jsx)(Theme_1.TYPE.largeHeader, { children: "Press & Media" }) }), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ style: { marginTop: '6px' } }, { children: (0, jsx_runtime_1.jsxs)(exports.DashGrid, __assign({ style: { height: 'fit-content', padding: '0 0 1rem 0' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.heading, { children: "About DeFiLlama" }), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Theme_1.TYPE.main, { children: ["DefiLlama is the largest TVL aggregator for DeFi (Decentralized Finance). Our data is fully", ' ', (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://github.com/DefiLlama/DefiLlama-Adapters" }, { children: "open-source" })), " and maintained by a team of passionate individuals and", ' ', (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://github.com/DefiLlama/DefiLlama-Adapters/graphs/contributors" }, { children: "contributors" })), " from hundreds of protocols."] }), (0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, { children: "Our focus is on accurate data and transparent methodology." })] })) })), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ style: { marginTop: '6px' } }, { children: (0, jsx_runtime_1.jsxs)(exports.DashGrid, __assign({ style: { height: 'fit-content', padding: '0 0 1rem 0' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, __assign({ area: "account" }, { children: "Contact" })), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Theme_1.TYPE.main, { children: ["Contact us on ", (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://twitter.com/defillama" }, { children: "Twitter" })), " or", ' ', (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://discord.defillama.com" }, { children: "Discord" })), " or ", ' ', " by email ", (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "mailto:contact@llama-corp.com" }, { children: "contact@llama-corp.com" }))] }), (0, jsx_runtime_1.jsxs)(Theme_1.TYPE.main, { children: ["DeFiLlama is a part of ", (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://twitter.com/llamacorporg" }, { children: "Llama Corp" })), "."] }), (0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, { children: "Llama Corp is a collective building out the decentralized future with data analytics, infrastructure, payments, cross-chain and media solutions used by more than 10M monthly users." })] })) })), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ style: { marginTop: '6px' } }, { children: (0, jsx_runtime_1.jsxs)(exports.DashGrid, __assign({ style: { height: 'fit-content', padding: '0 0 1rem 0' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.heading, { children: "Press" }), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, { children: "DL Data is free to use by anyone. Attribution is always appreciated." }), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, { children: "DeFiLlama is used across a large number of media organisations and financial institutions." }), (0, jsx_runtime_1.jsx)(PanelWrapper, __assign({ mt: [0, 0, '1rem'] }, { children: pressList.map(function (imageFilename) { return ((0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: imageFilename[1] }, { children: (0, jsx_runtime_1.jsx)(PressPanel, { imageFilename: imageFilename[0] }) }), imageFilename[0])); }) }))] })) })), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ style: { marginTop: '6px' } }, { children: (0, jsx_runtime_1.jsxs)(exports.DashGrid, __assign({ style: { height: 'fit-content', padding: '0 0 1rem 0' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.heading, { children: "Branding Assets" }), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Theme_1.TYPE.main, { children: ["You can download all our branding assets from ", (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "/defillama-press-kit.zip" }, { children: "here" })), "."] })] })) }))] })));
}
exports.default = PressPage;
var templateObject_1, templateObject_2;
