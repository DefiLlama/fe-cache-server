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
exports.getStaticProps = exports.cexData = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var layout_1 = __importDefault(require("../../layout"));
var api_1 = require("../../api");
var Theme_1 = require("../../Theme");
var async_1 = require("../../utils/async");
var perf_1 = require("../../utils/perf");
var TableWithSearch_1 = require("../../components/Table/TableWithSearch");
var columns_1 = require("../../components/Table/Defi/columns");
var fetch = async_1.fetchWithErrorLogging;
exports.cexData = [
    {
        name: 'Binance',
        slug: 'Binance-CEX',
        coin: 'BNB',
        coinSymbol: 'BNB',
        walletsLink: 'https://www.binance.com/en/blog/community/our-commitment-to-transparency-2895840147147652626',
        cgId: 'binance',
        cgDeriv: 'binance_futures'
    },
    {
        name: 'OKX',
        slug: 'okx',
        coin: 'OKB',
        coinSymbol: 'OKB',
        walletsLink: 'https://twitter.com/okx/status/1590812545346330624',
        cgId: 'okex',
        cgDeriv: 'okex_swap'
    },
    {
        name: 'Bitfinex',
        slug: 'bitfinex',
        coin: 'LEO',
        coinSymbol: 'LEO',
        walletsLink: 'https://github.com/bitfinexcom/pub/blob/main/wallets.txt',
        cgId: 'bitfinex',
        cgDeriv: 'bitfinex_futures'
    },
    {
        name: 'Crypto.com',
        slug: 'Crypto-com',
        coin: 'CRO',
        coinSymbol: 'CRO',
        walletsLink: 'https://crypto.com/document/proof-of-reserves',
        cgId: 'crypto_com',
        cgDeriv: 'crypto_com_futures'
    },
    {
        name: 'Huobi',
        slug: 'Huobi',
        coin: 'HT',
        coinSymbol: 'HT',
        walletsLink: 'https://www.huobi.com/support/en-us/detail/24922606430831',
        cgId: 'huobi',
        cgDeriv: 'huobi_dm'
    },
    {
        name: 'Bybit',
        slug: 'Bybit',
        coin: 'BIT',
        coinSymbol: 'BIT',
        walletsLink: 'https://twitter.com/benbybit/status/1592797790518018048',
        cgId: 'bybit_spot',
        cgDeriv: 'bybit'
    },
    {
        name: 'Kucoin',
        slug: 'kucoin',
        coin: 'KCS',
        coinSymbol: 'KCS',
        walletsLink: 'https://www.kucoin.com/blog/transparency-and-trust-a-detailed-list-of-kucoin-s-wallets',
        cgId: 'kucoin',
        cgDeriv: 'kumex'
    },
    {
        name: 'Gate.io',
        slug: 'Gate-io',
        coin: 'GT',
        coinSymbol: 'GT',
        walletsLink: 'https://github.com/gateio/proof-of-reserves',
        cgId: 'gate',
        cgDeriv: 'gate_futures'
    },
    {
        name: 'Deribit',
        slug: 'deribit',
        coin: null,
        walletsLink: 'https://insights.deribit.com/exchange-updates/deribit-wallet-holdings/',
        cgDeriv: 'deribit'
    },
    {
        name: 'Bitget',
        slug: 'bitget',
        coin: 'BGB',
        coinSymbol: 'BGB',
        walletsLink: 'https://twitter.com/bitgetglobal/status/1602256957376794624',
        cgId: 'bitget',
        cgDeriv: 'bitget_futures'
    },
    {
        name: 'Bitmex',
        slug: 'bitmex',
        coin: null,
        walletsLink: 'https://github.com/BitMEX/proof-of-reserves-liabilities',
        cgId: 'bitmex_spot',
        cgDeriv: 'bitmex'
    },
    {
        name: 'Swissborg',
        slug: 'swissborg',
        coin: 'CHSB',
        coinSymbol: 'CHSB',
        walletsLink: 'https://github.com/swissborg/pub'
    },
    {
        name: 'Binance US',
        slug: 'binance-us',
        coin: 'BNB',
        coinSymbol: 'BNB',
        cgId: 'binance_us'
    },
    {
        name: 'Korbit',
        slug: 'korbit',
        coin: null,
        walletsLink: 'https://korbit.co.kr/reserve'
    },
    {
        name: 'Firi',
        slug: 'firi',
        coin: null,
        walletsLink: null
    },
    {
        name: 'WOO X',
        slug: 'woo-x',
        coin: 'WOO',
        coinSymbol: 'WOO',
        walletsLink: 'https://woo.org/proof-of-reserves'
    },
    {
        name: 'Cake DeFi',
        slug: 'cake-defi',
        coin: null,
        walletsLink: 'https://blog.cakedefi.com/proof-of-reserves'
    },
    {
        name: 'MaskEX',
        slug: 'maskex',
        coin: null,
        walletsLink: 'https://news.bitcoin.com/a-message-from-maskex/'
    },
    {
        name: 'Phemex',
        slug: 'phemex',
        coin: null,
        walletsLink: 'https://phemex.com/proof-of-reserves',
        cgId: 'phemex',
        cgDeriv: 'phemex_futures'
    },
    {
        name: 'Coinsquare',
        slug: 'coinsquare',
        coin: null,
        walletsLink: 'https://twitter.com/Coinsquare/status/1594176519986810881'
    },
    {
        name: 'CoinDCX',
        slug: 'coindcx',
        coin: null,
        walletsLink: 'https://twitter.com/smtgpt/status/1595745395787071497'
    },
    {
        name: 'Hotbit',
        slug: 'hotbit',
        coin: 'HTB',
        coinSymbol: 'HTB'
    },
    {
        name: 'NBX',
        slug: 'nbx',
        coin: null,
        walletsLink: 'https://nbx.com/en/proof-of-reserves'
    },
    {
        name: 'Latoken',
        slug: 'latoken',
        coin: null,
        walletsLink: null
    },
    {
        name: 'BitVenus',
        slug: 'bitvenus',
        coin: null,
        walletsLink: null
    },
    {
        name: 'Coinbase',
        lastAuditDate: 1640908800,
        auditor: 'Deloitte',
        auditLink: 'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001679788/8e5e0508-da75-434d-9505-cba99fa00147.pdf',
        cgId: 'gdax'
    },
    {
        name: 'Kraken',
        lastAuditDate: 1656547200,
        auditor: 'ArmaninoLLP',
        auditLink: 'https://proof-of-reserves.trustexplorer.io/clients/kraken/',
        cgId: 'kraken',
        cgDeriv: 'kraken_futures'
    },
    {
        name: 'Coinone',
        lastAuditDate: 1666369050,
        auditor: null,
        auditLink: 'https://coinone.co.kr/info/notice/1967',
        cgId: 'coinone'
    },
    {
        name: 'NEXO'
    },
    {
        name: 'CoinEx',
        cdId: 'coinex',
        cgDeriv: 'coinex_futures'
    },
    {
        name: 'Gemini',
        cgId: 'gemini'
    },
    {
        name: 'Coincheck',
        cgId: 'coincheck'
    },
    {
        name: 'Bitstamp',
        cgId: 'bitstamp'
    },
    {
        name: 'Bithumb',
        cgId: 'bithumb'
    },
    {
        name: 'Poloniex',
        cgId: 'poloniex'
    },
    {
        name: 'Upbit',
        cgId: 'upbit'
    },
    {
        name: 'Bitmart',
        cgId: 'bitmart',
        cgDeriv: 'bitmart_futures'
    },
    {
        name: 'Bittrex',
        cgId: 'bittrex'
    },
    {
        name: 'AscendEX',
        cgId: 'bitmax',
        cgDeriv: 'bitmax_futures'
    },
    {
        name: 'bitFlyer',
        cgId: 'bitflyer',
        cgDeriv: 'bitflyer_futures'
    },
    {
        name: 'LBank',
        cgId: 'lbank'
    },
    {
        name: 'MEXC',
        cgId: 'mxc',
        cgDeriv: 'mxc_futures'
    },
    {
        name: 'BKEX',
        cgId: 'bkex'
    },
    {
        name: 'ProBit',
        cgId: 'probit'
    },
    {
        name: 'BTCEX',
        cgId: 'btcex',
        cgDeriv: 'btcex_futures'
    },
    {
        name: 'Bitrue',
        cgId: 'bitrue',
        cgDeriv: 'bitrue_futures'
    },
    {
        name: 'BTCC',
        cgID: 'btcc',
        cgDeriv: 'btcc_futures'
    },
    {
        name: 'BitVenus'
    },
    {
        name: 'Deepcoin',
        cgId: 'deepcoin'
    }
];
var hour24ms = ((Date.now() - 24 * 60 * 60 * 1000) / 1000).toFixed(0);
var hour7dms = ((Date.now() - 7 * 24 * 60 * 60 * 1000) / 1000).toFixed(0);
var hour1mms = ((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000).toFixed(0);
exports.getStaticProps = (0, perf_1.withPerformanceLogging)('cexs/index', function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, spot, derivs, btcPrice, cexs;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    fetch("https://pro-api.coingecko.com/api/v3/exchanges?per_page=250&x_cg_pro_api_key=".concat(process.env.CG_KEY)).then(function (r) { return r.json(); }),
                    fetch("https://pro-api.coingecko.com/api/v3/derivatives/exchanges?per_page=1000&x_cg_pro_api_key=".concat(process.env.CG_KEY)).then(function (r) { return r.json(); }),
                    fetch("https://coins.llama.fi/prices/current/coingecko:bitcoin").then(function (r) { return r.json(); })
                ])];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 3]), spot = _a[0], derivs = _a[1], btcPrice = _a[2].coins["coingecko:bitcoin"].price;
                return [4 /*yield*/, Promise.all(exports.cexData.map(function (c) { return __awaiter(void 0, void 0, void 0, function () {
                        var res, _a, _b, chainTvls, inflows24h, inflows7d, inflows1m, cexTvl_1, ownToken_1, cleanTvl, extra, spotEx, _derivs;
                        var _c, _d, _e, _f, _g, _h;
                        return __generator(this, function (_j) {
                            switch (_j.label) {
                                case 0:
                                    if (!(c.slug === undefined)) return [3 /*break*/, 1];
                                    return [2 /*return*/, c];
                                case 1: return [4 /*yield*/, Promise.allSettled([
                                        fetch("https://api.llama.fi/updatedProtocol/".concat(c.slug)).then(function (r) { return r.json(); }),
                                        fetch("https://api.llama.fi/inflows/".concat(c.slug, "/").concat(hour24ms, "?tokensToExclude=").concat((_c = c.coin) !== null && _c !== void 0 ? _c : '')).then(function (r) {
                                            return r.json();
                                        }),
                                        fetch("https://api.llama.fi/inflows/".concat(c.slug, "/").concat(hour7dms, "?tokensToExclude=").concat((_d = c.coin) !== null && _d !== void 0 ? _d : '')).then(function (r) {
                                            return r.json();
                                        }),
                                        fetch("https://api.llama.fi/inflows/".concat(c.slug, "/").concat(hour1mms, "?tokensToExclude=").concat((_e = c.coin) !== null && _e !== void 0 ? _e : '')).then(function (r) {
                                            return r.json();
                                        })
                                    ])];
                                case 2:
                                    res = _j.sent();
                                    _a = __read(res.map(function (r) {
                                        return r.status === 'fulfilled' ? r.value : {};
                                    }), 4), _b = _a[0].chainTvls, chainTvls = _b === void 0 ? {} : _b, inflows24h = _a[1], inflows7d = _a[2], inflows1m = _a[3];
                                    cexTvl_1 = 0;
                                    ownToken_1 = 0;
                                    Object.values(chainTvls).map(function (item) {
                                        var _a, _b, _c, _d, _e;
                                        if (item.tvl) {
                                            cexTvl_1 += (_b = (_a = item.tvl[item.tvl.length - 1]) === null || _a === void 0 ? void 0 : _a.totalLiquidityUSD) !== null && _b !== void 0 ? _b : 0;
                                        }
                                        if (item.tokensInUsd) {
                                            ownToken_1 += (_e = (_d = (_c = item.tokensInUsd[item.tokensInUsd.length - 1]) === null || _c === void 0 ? void 0 : _c.tokens[c.coin]) !== null && _d !== void 0 ? _d : 0) !== null && _e !== void 0 ? _e : 0;
                                        }
                                    });
                                    cleanTvl = cexTvl_1 - ownToken_1;
                                    extra = {};
                                    if (c.cgId) {
                                        spotEx = spot && !spot.status && spot.find(function (ex) { return ex.id === c.cgId; });
                                        if (!spotEx) {
                                            console.error(c.name + ' is not in spot list');
                                        }
                                        else {
                                            extra.spotVolume = spotEx.trade_volume_24h_btc_normalized * btcPrice;
                                        }
                                    }
                                    if (c.cgDeriv) {
                                        _derivs = derivs && !derivs.status && derivs.find(function (ex) { return ex.id === c.cgDeriv; });
                                        // extra.oi = derivs.find((ex) => ex.id === c.cgDeriv).open_interest_btc * btcPrice
                                        if (!_derivs) {
                                            console.error(c.name + ' is not in derivs list');
                                        }
                                        else {
                                            extra.oi = _derivs.open_interest_btc * btcPrice;
                                            extra.leverage = extra.oi / cleanTvl;
                                        }
                                    }
                                    if (c.slug === 'Binance-CEX' && Number(hour7dms) < 1681609999) {
                                        inflows7d.outflows = null;
                                    }
                                    if (c.slug === 'Binance-CEX' && Number(hour1mms) < 1681609999) {
                                        inflows1m.outflows = null;
                                    }
                                    return [2 /*return*/, __assign(__assign(__assign({}, c), { tvl: cexTvl_1, cleanTvl: cleanTvl, '24hInflows': (_f = inflows24h === null || inflows24h === void 0 ? void 0 : inflows24h.outflows) !== null && _f !== void 0 ? _f : null, '7dInflows': (_g = inflows7d === null || inflows7d === void 0 ? void 0 : inflows7d.outflows) !== null && _g !== void 0 ? _g : null, '1mInflows': (_h = inflows1m === null || inflows1m === void 0 ? void 0 : inflows1m.outflows) !== null && _h !== void 0 ? _h : null }), extra)];
                            }
                        });
                    }); }))];
            case 2:
                cexs = _b.sent();
                return [2 /*return*/, {
                        props: {
                            cexs: cexs
                        },
                        revalidate: (0, api_1.maxAgeForNext)([22])
                    }];
        }
    });
}); });
function Protocols(_a) {
    var cexs = _a.cexs;
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "CEX Transparency - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsx)(Theme_1.Header, { children: "CEX Transparency" }), (0, jsx_runtime_1.jsx)(TableWithSearch_1.TableWithSearch, { data: cexs, columns: columns_1.cexColumn, columnToSearch: 'name', placeholder: 'Search exchange...' })] })));
}
exports.default = Protocols;
