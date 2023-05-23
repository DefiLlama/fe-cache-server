"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
var withSentryConfig = require('@sentry/nextjs').withSentryConfig;
var withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});
/** @type {import('next').NextConfig} */
var nextConfig = {
    reactStrictMode: true,
    redirects: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [
                        {
                            source: '/home',
                            destination: '/',
                            permanent: true
                        },
                        {
                            source: '/chain/Binance',
                            destination: '/chain/BSC',
                            permanent: true
                        },
                        {
                            source: '/langs',
                            destination: '/languages',
                            permanent: true
                        },
                        {
                            source: '/yields/project/:path*',
                            destination: '/yields?project=:path*',
                            permanent: true
                        },
                        {
                            source: '/yields/token/:path*',
                            destination: '/yields?token=:path*',
                            permanent: true
                        },
                        {
                            source: '/yields/chain/:path*',
                            destination: '/yields?chain=:path*',
                            permanent: true
                        },
                        {
                            source: '/recent-noforks',
                            destination: '/recent',
                            permanent: true
                        },
                        {
                            source: '/liquidations',
                            destination: '/liquidations/eth',
                            permanent: false
                        },
                        {
                            source: '/yields/optimizer',
                            destination: '/borrow',
                            permanent: true
                        },
                        {
                            source: '/aggregator',
                            destination: 'https://swap.defillama.com/',
                            permanent: true
                        },
                        {
                            source: '/protocols/cex',
                            destination: '/cexs',
                            permanent: true
                        }
                    ]];
            });
        });
    },
    images: {
        domains: ['icons.llama.fi', 'assets.coingecko.com', 'yield-charts.llama.fi', 'icons.llamao.fi']
    },
    compiler: {
        styledComponents: true
    },
    experimental: {
        largePageDataBytes: 6000000
    }
};
module.exports = withBundleAnalyzer(nextConfig);
// if (process.env.SENTRY_DSN) {
// 	module.exports = withSentryConfig(module.exports, { silent: true }, { hideSourceMaps: true })
// }
