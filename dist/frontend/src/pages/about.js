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
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var Theme_1 = require("../Theme");
var layout_1 = __importDefault(require("../layout"));
var components_1 = require("../components");
var Row_1 = require("../components/Row");
var Link_1 = __importDefault(require("../components/Link"));
var DashGrid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-gap: 1em;\n\tgrid-template-columns: 1fr;\n\tgrid-template-areas: 'account';\n\tpadding: 0 4px;\n\n\t> * {\n\t\tjustify-content: flex-end;\n\t}\n"], ["\n\tdisplay: grid;\n\tgrid-gap: 1em;\n\tgrid-template-columns: 1fr;\n\tgrid-template-areas: 'account';\n\tpadding: 0 4px;\n\n\t> * {\n\t\tjustify-content: flex-end;\n\t}\n"])));
function AboutPage() {
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "DefiLlama - DeFi Dashboard", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Row_1.RowBetween, { children: (0, jsx_runtime_1.jsx)(Theme_1.TYPE.largeHeader, { children: "About" }) }), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ style: { marginTop: '6px' } }, { children: (0, jsx_runtime_1.jsxs)(DashGrid, __assign({ style: { height: 'fit-content', padding: '0 0 1rem 0' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.heading, { children: "About DeFiLlama" }), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Theme_1.TYPE.main, { children: ["DefiLlama is the largest TVL aggregator for DeFi (Decentralized Finance). Our data is fully", ' ', (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://github.com/DefiLlama/DefiLlama-Adapters" }, { children: "open-source" })), " and maintained by a team of passionate individuals and", ' ', (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://github.com/DefiLlama/DefiLlama-Adapters/graphs/contributors" }, { children: "contributors" })), " from hundreds of protocols."] }), (0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, { children: "Our focus is on accurate data and transparent methodology." })] })) })), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ style: { marginTop: '6px' } }, { children: (0, jsx_runtime_1.jsxs)(DashGrid, __assign({ style: { height: 'fit-content', padding: '0 0 1rem 0' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, __assign({ area: "account" }, { children: "Contact" })), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Theme_1.TYPE.main, { children: ["Contact us on ", (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://twitter.com/defillama" }, { children: "Twitter" })), " or", ' ', (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://discord.defillama.com" }, { children: "Discord" })), " or ", ' ', " by email ", (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "mailto:contact@llama-corp.com" }, { children: "contact@llama-corp.com" }))] }), (0, jsx_runtime_1.jsxs)(Theme_1.TYPE.main, { children: ["DeFiLlama is a part of ", (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://twitter.com/llamacorporg" }, { children: "Llama Corp" })), "."] }), (0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, { children: "Llama Corp is a collective building out the decentralized future with data analytics, infrastructure, payments, cross-chain and media solutions used by more than 10M monthly users." })] })) })), (0, jsx_runtime_1.jsx)(components_1.Panel, __assign({ style: { marginTop: '6px' } }, { children: (0, jsx_runtime_1.jsxs)(DashGrid, __assign({ style: { height: 'fit-content', padding: '0 0 1rem 0' } }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.TYPE.main, __assign({ area: "account" }, { children: "Acknowledgements" })), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Theme_1.TYPE.main, { children: ["Thanks to ", (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://www.coingecko.com/" }, { children: "CoinGecko" })), " for the continued support."] }), (0, jsx_runtime_1.jsx)(components_1.Divider, {}), (0, jsx_runtime_1.jsxs)(Theme_1.TYPE.main, { children: ["DeFiLlama's design is based on ", (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ href: "https://github.com/Uniswap/uniswap-info" }, { children: "Uniswap.info" }))] })] })) }))] })));
}
exports.default = AboutPage;
var templateObject_1;
