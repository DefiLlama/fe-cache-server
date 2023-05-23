"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var head_1 = __importDefault(require("next/head"));
var utils_1 = require("../../utils");
var hooks_1 = require("../../hooks");
var types_1 = require("../../utils/adaptorsPages/types");
var SEO = function (_a) {
    var cardName = _a.cardName, chain = _a.chain, token = _a.token, tvl = _a.tvl, volumeChange = _a.volumeChange, logo = _a.logo, _b = _a.nftPage, nftPage = _b === void 0 ? false : _b, _c = _a.liqsPage, liqsPage = _c === void 0 ? false : _c, pageType = _a.pageType;
    var isClient = (0, hooks_1.useIsClient)();
    var windowURL = isClient && window.location.href ? window.location.href : '';
    var isTvlValid = tvl && tvl !== '$0';
    var isVolumeChangeValid = volumeChange && volumeChange !== 'NaN%' && volumeChange !== 'undefined%';
    var cardURL = (0, react_1.useMemo)(function () {
        var e_1, _a;
        var cardSrc = new URL("https://og-cards-chi.vercel.app/");
        // If text is default, the image will only have the logo in the center, without any tvl numbers, chain or token name etc
        var text = cardName ? (cardName === 'All' ? 'Overall' : cardName) : 'default';
        cardSrc.pathname = "".concat(encodeURIComponent(text), ".jpeg");
        cardSrc.searchParams.append('theme', 'dark');
        var valueHeader;
        if (nftPage) {
            valueHeader = 'Total Volume';
        }
        else if (liqsPage) {
            valueHeader = 'Total Liquidatable Amount';
        }
        else if (pageType === types_1.ADAPTOR_TYPES.FEES) {
            valueHeader = '24h fees';
        }
        else if (pageType === types_1.ADAPTOR_TYPES.DEXS ||
            pageType === types_1.ADAPTOR_TYPES.AGGREGATORS ||
            pageType === types_1.ADAPTOR_TYPES.DERIVATIVES ||
            pageType === types_1.ADAPTOR_TYPES.OPTIONS) {
            valueHeader = '24h volume';
        }
        else {
            valueHeader = 'Total Value Locked';
        }
        cardSrc.searchParams.append('valueHeader', valueHeader);
        isTvlValid && cardSrc.searchParams.append('tvl', tvl);
        isVolumeChangeValid && cardSrc.searchParams.append('volumeChange', volumeChange);
        cardSrc.searchParams.append('footerURL', encodeURIComponent(windowURL));
        // First url in images should always be the logo of defillama
        var images = nftPage
            ? ["https://defillama.com/defillama-press-kit/nft/SVG/defillama-nft.svg"]
            : ["https://defillama.com/defillama-press-kit/defi/SVG/defillama.svg"];
        // chain and token props are used to get logo, if the logo url isn't available in the data of that page
        if (logo) {
            images = __spreadArray(__spreadArray([], __read(images), false), [logo], false);
        }
        else if (chain && chain !== 'All') {
            images = __spreadArray(__spreadArray([], __read(images), false), ["https://defillama.com".concat((0, utils_1.chainIconUrl)(chain))], false);
        }
        else {
            if (token && token !== 'All') {
                images = __spreadArray(__spreadArray([], __read(images), false), ["https://defillama.com".concat((0, utils_1.tokenIconUrl)(token))], false);
            }
        }
        try {
            for (var images_1 = __values(images), images_1_1 = images_1.next(); !images_1_1.done; images_1_1 = images_1.next()) {
                var image = images_1_1.value;
                cardSrc.searchParams.append('images', image);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (images_1_1 && !images_1_1.done && (_a = images_1.return)) _a.call(images_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return cardSrc.toString();
    }, [
        cardName,
        chain,
        token,
        tvl,
        volumeChange,
        logo,
        nftPage,
        windowURL,
        isTvlValid,
        isVolumeChangeValid,
        pageType,
        liqsPage
    ]);
    return ((0, jsx_runtime_1.jsxs)(head_1.default, { children: [(0, jsx_runtime_1.jsx)("meta", { name: "description", content: "DefiLlama is a DeFi TVL aggregator. It is committed to providing accurate data without ads or sponsored content, as well as transparency." }), (0, jsx_runtime_1.jsx)("meta", { property: "og:title", content: "DefiLlama" }), (0, jsx_runtime_1.jsx)("meta", { property: "og:type", content: "website" }), (0, jsx_runtime_1.jsx)("meta", { property: "og:url", content: windowURL }), (0, jsx_runtime_1.jsx)("meta", { property: "og:site_name", content: "DefiLlama" }), (0, jsx_runtime_1.jsx)("meta", { property: "og:description", content: "DefiLlama is a DeFi TVL aggregator. It is committed to providing accurate data without ads or sponsored content, as well as transparency." }), (0, jsx_runtime_1.jsx)("meta", { property: "og:image", content: cardURL }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:card", content: "summary_large_image" }), (0, jsx_runtime_1.jsx)("meta", { property: "twitter:domain", content: "defillama.com" }), (0, jsx_runtime_1.jsx)("meta", { property: "twitter:url", content: windowURL }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:title", content: "DefiLlama" }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:site", content: "@DefiLlama" }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:creator", content: "@DefiLlama" }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:description", content: "DefiLlama is a DeFi TVL aggregator. It is committed to providing accurate data without ads or sponsored content, as well as transparency." }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:image", content: cardURL })] }));
};
exports.default = SEO;
