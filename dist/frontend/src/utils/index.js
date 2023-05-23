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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nearestUtc = exports.download = exports.getPrevVolumeFromChart = exports.getPrevPeggedTotalFromChart = exports.getPrevTvlFromChart2 = exports.getPrevTvlFromChart = exports.getPeggedDominance = exports.getTokenDominance = exports.getDominancePercent = exports.getColorFromNumber = exports.deriveColors = exports.selectColor = exports.getRandomColor = exports.slug = exports.standardizeProtocolName = exports.capitalizeFirstLetter = exports.getPercentChange = exports.formattedPercent = exports.peggedAssetIconPalleteUrl = exports.peggedAssetIconUrl = exports.liquidationsIconPaletteUrl = exports.liquidationsIconUrl = exports.tokenIconPaletteUrl = exports.nftCollectionIconUrl = exports.tokenIconUrl = exports.chainIconPaletteUrl = exports.chainIconUrl = exports.filterCollectionsByCurrency = exports.formattedPeggedPrice = exports.formattedNum = exports.toK = exports.formatUnlocksEvent = exports.toNiceDateYear = exports.toNiceCsvDate = exports.toNiceDate = exports.toYearMonth = exports.toNiceMonthlyDate = exports.toNiceDayMonthAndYearAndTime = exports.toNiceDayMonthAndYear = exports.toNiceHour = exports.toNiceDayAndHour = exports.toNiceDaysAgo = exports.getTimeframe = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dayjs_1 = __importDefault(require("dayjs"));
var utc_1 = __importDefault(require("dayjs/plugin/utc"));
var rebass_1 = require("rebass");
var numeral_1 = __importDefault(require("numeral"));
var constants_1 = require("../constants");
__exportStar(require("./blockExplorers"), exports);
var colord_1 = require("colord");
var lch_1 = __importDefault(require("colord/plugins/lch"));
var relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
(0, colord_1.extend)([lch_1.default]);
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(relativeTime_1.default);
function getTimeframe(timeWindow) {
    var utcEndTime = dayjs_1.default.utc();
    // based on window, get starttime
    var utcStartTime;
    switch (timeWindow) {
        case constants_1.timeframeOptions.WEEK:
            utcStartTime = utcEndTime.subtract(1, 'week').endOf('day').unix() - 1;
            break;
        case constants_1.timeframeOptions.MONTH:
            utcStartTime = utcEndTime.subtract(1, 'month').endOf('day').unix() - 1;
            break;
        case constants_1.timeframeOptions.ALL_TIME:
            utcStartTime = utcEndTime.subtract(1, 'year').endOf('day').unix() - 1;
            break;
        case constants_1.timeframeOptions.YEAR:
            utcStartTime = utcEndTime.subtract(1, 'year').endOf('day').unix() - 1;
            break;
        default:
            utcStartTime = utcEndTime.subtract(1, 'year').startOf('year').unix() - 1;
            break;
    }
    return utcStartTime;
}
exports.getTimeframe = getTimeframe;
/** gives output like `5 days ago` or `17 hours ago` from a timestamp, https://day.js.org/docs/en/plugin/relative-time */
var toNiceDaysAgo = function (date) { return (0, dayjs_1.default)().to(dayjs_1.default.utc(dayjs_1.default.unix(date))); };
exports.toNiceDaysAgo = toNiceDaysAgo;
var toNiceDayAndHour = function (date) {
    var x = dayjs_1.default.utc(dayjs_1.default.unix(date)).format('D MMM, HH:mm');
    return x;
};
exports.toNiceDayAndHour = toNiceDayAndHour;
var toNiceHour = function (date) {
    var x = dayjs_1.default.utc(dayjs_1.default.unix(date)).format('HH:mm');
    return x;
};
exports.toNiceHour = toNiceHour;
var toNiceDayMonthAndYear = function (date) {
    var x = dayjs_1.default.utc(dayjs_1.default.unix(date)).format('D MMM, YYYY, HH:mm');
    return x;
};
exports.toNiceDayMonthAndYear = toNiceDayMonthAndYear;
var toNiceDayMonthAndYearAndTime = function (date) {
    return dayjs_1.default.utc(dayjs_1.default.unix(date)).format('D MMM, YYYY HH:mm');
};
exports.toNiceDayMonthAndYearAndTime = toNiceDayMonthAndYearAndTime;
var toNiceMonthlyDate = function (date) {
    var x = dayjs_1.default.utc(dayjs_1.default.unix(date)).format('MMM YYYY');
    return x;
};
exports.toNiceMonthlyDate = toNiceMonthlyDate;
var toYearMonth = function (date) {
    var x = dayjs_1.default.utc(dayjs_1.default.unix(date)).format('YYYY-MM');
    return x;
};
exports.toYearMonth = toYearMonth;
var toNiceDate = function (date) {
    var x = dayjs_1.default.utc(dayjs_1.default.unix(date)).format('MMM DD');
    return x;
};
exports.toNiceDate = toNiceDate;
var toNiceCsvDate = function (date) {
    var x = dayjs_1.default.utc(dayjs_1.default.unix(date)).format('YYYY-MM-DD');
    return x;
};
exports.toNiceCsvDate = toNiceCsvDate;
var toNiceDateYear = function (date) { return dayjs_1.default.utc(dayjs_1.default.unix(date)).format('MMMM DD, YYYY'); };
exports.toNiceDateYear = toNiceDateYear;
var timeFromNow = function (date) { return dayjs_1.default.utc(dayjs_1.default.unix(date)).fromNow(); };
function formatUnlocksEvent(_a) {
    var description = _a.description, noOfTokens = _a.noOfTokens, timestamp = _a.timestamp, price = _a.price, symbol = _a.symbol;
    noOfTokens.forEach(function (tokens, i) {
        description = description.replace("{tokens[".concat(i, "]}"), "".concat((0, exports.formattedNum)(tokens || 0) + (symbol ? " ".concat(symbol) : '')).concat(price ? " ($".concat((0, exports.formattedNum)((tokens || 0) * price), ")") : ''));
    });
    description = description === null || description === void 0 ? void 0 : description.replace('{timestamp}', "".concat((0, exports.toNiceDateYear)(timestamp), " (").concat(timeFromNow(timestamp), ")"));
    return description;
}
exports.formatUnlocksEvent = formatUnlocksEvent;
var toK = function (num, decimals) {
    if (decimals === void 0) { decimals = 2; }
    return (0, numeral_1.default)(num).format("'0.[".concat(new Array(decimals || 2).fill(0).join(''), "]a'"));
};
exports.toK = toK;
// using a currency library here in case we want to add more in future
var priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});
var formattedNum = function (number, symbol, acceptNegatives) {
    if (symbol === void 0) { symbol = false; }
    if (acceptNegatives === void 0) { acceptNegatives = false; }
    var currencySymbol;
    if (symbol === true) {
        currencySymbol = '$';
    }
    else if (symbol === false) {
        currencySymbol = '';
    }
    else {
        currencySymbol = symbol;
    }
    if (isNaN(number) || number === '' || number === undefined) {
        return symbol ? "".concat(currencySymbol, "0") : 0;
    }
    var num = parseFloat(number);
    var isNegative = num < 0;
    num = Math.abs(num);
    var currencyMark = isNegative ? "".concat(currencySymbol, "-") : currencySymbol;
    var normalMark = isNegative ? '-' : '';
    if (num > 10000000) {
        return (symbol ? currencyMark : normalMark) + (0, exports.toK)(num.toFixed(0), 1);
    }
    if (num === 0) {
        return symbol ? "".concat(currencySymbol, "0") : 0;
    }
    if (num < 0.0001 && num > 0) {
        return symbol ? "< ".concat(currencySymbol, "0.0001") : '< 0.0001';
    }
    if (num > 1000) {
        return symbol
            ? currencyMark + Number(parseFloat(num).toFixed(0)).toLocaleString()
            : normalMark + Number(parseFloat(num).toFixed(0)).toLocaleString();
    }
    if (symbol) {
        if (num < 0.1) {
            return currencyMark + Number(parseFloat(num).toFixed(2));
        }
        else {
            var usdString = priceFormatter.format(num);
            return currencyMark + usdString.slice(1, usdString.length);
        }
    }
    return Number(parseFloat(num).toFixed(2));
};
exports.formattedNum = formattedNum;
var formattedPeggedPrice = function (number, symbol, acceptNegatives) {
    if (symbol === void 0) { symbol = false; }
    if (acceptNegatives === void 0) { acceptNegatives = false; }
    var currencySymbol;
    if (symbol === true) {
        currencySymbol = '$';
    }
    else if (symbol === false) {
        currencySymbol = '';
    }
    else {
        currencySymbol = symbol;
    }
    if (isNaN(number) || number === '' || number === undefined) {
        return symbol ? "".concat(currencySymbol, "0") : 0;
    }
    var num = parseFloat(number);
    var isNegative = num < 0;
    num = Math.abs(num);
    var currencyMark = isNegative ? "".concat(currencySymbol, "-") : currencySymbol;
    var normalMark = isNegative ? '-' : '';
    if (num > 10000000) {
        return (symbol ? currencyMark : normalMark) + (0, exports.toK)(num.toFixed(0), true);
    }
    if (num === 0) {
        return symbol ? "".concat(currencySymbol, "0") : 0;
    }
    if (num < 0.0001 && num > 0) {
        return symbol ? "< ".concat(currencySymbol, "0.0001") : '< 0.0001';
    }
    if (num > 1000) {
        return symbol
            ? currencyMark + Number(parseFloat(num).toFixed(0)).toLocaleString()
            : normalMark + Number(parseFloat(num).toFixed(0)).toLocaleString();
    }
    if (symbol) {
        return currencyMark + parseFloat(num).toFixed(2); // this is all pegged is using, should merge with above
    }
    return Number(parseFloat(num).toFixed(2));
};
exports.formattedPeggedPrice = formattedPeggedPrice;
var filterCollectionsByCurrency = function (collections, displayUsd) {
    return (collections &&
        collections.length &&
        collections.map(function (collection) { return (__assign(__assign({}, collection), { floor: displayUsd ? collection === null || collection === void 0 ? void 0 : collection.floorUSD : collection === null || collection === void 0 ? void 0 : collection.floor, dailyVolume: displayUsd ? collection === null || collection === void 0 ? void 0 : collection.dailyVolumeUSD : collection === null || collection === void 0 ? void 0 : collection.dailyVolume, totalVolume: displayUsd ? collection === null || collection === void 0 ? void 0 : collection.totalVolumeUSD : collection === null || collection === void 0 ? void 0 : collection.totalVolume })); })) ||
        [];
};
exports.filterCollectionsByCurrency = filterCollectionsByCurrency;
function chainIconUrl(chain) {
    return "".concat(constants_1.ICONS_CDN, "/chains/rsz_").concat(chain.toLowerCase(), "?w=48&h=48");
}
exports.chainIconUrl = chainIconUrl;
function chainIconPaletteUrl(chain) {
    return "".concat(constants_1.ICONS_PALETTE_CDN, "/chains/rsz_").concat(chain.toLowerCase());
}
exports.chainIconPaletteUrl = chainIconPaletteUrl;
function tokenIconUrl(name) {
    var x = name !== null && name !== void 0 ? name : '';
    return "".concat(constants_1.ICONS_CDN, "/protocols/").concat(x
        .trim()
        .toLowerCase()
        .split(' ')
        .join('-')
        .split('(')
        .join('')
        .split(')')
        .join('')
        .split("'")
        .join('')
        .split('’')
        .join(''), "?w=48&h=48");
}
exports.tokenIconUrl = tokenIconUrl;
function nftCollectionIconUrl(address) {
    return "".concat(constants_1.ICONS_CDN, "/nfts/").concat(address, "?w=48&h=48");
}
exports.nftCollectionIconUrl = nftCollectionIconUrl;
function tokenIconPaletteUrl(name) {
    var x = name !== null && name !== void 0 ? name : '';
    return "".concat(constants_1.ICONS_PALETTE_CDN, "/protocols/").concat(x
        .trim()
        .toLowerCase()
        .split(' ')
        .join('-')
        .split('(')
        .join('')
        .split(')')
        .join('')
        .split("'")
        .join('')
        .split('’')
        .join(''));
}
exports.tokenIconPaletteUrl = tokenIconPaletteUrl;
/**
 * @param {string} symbol Asset symbol
 * @param {boolean} hd Return HD icon if true
 * @returns {string} URL to the asset icon
 */
function liquidationsIconUrl(symbol, hd) {
    if (hd === void 0) { hd = false; }
    if (hd) {
        return "".concat(constants_1.ICONS_CDN, "/liquidations/").concat(symbol.toLowerCase(), "?w=64&h=64");
    }
    else {
        return "".concat(constants_1.ICONS_CDN, "/liquidations/").concat(symbol.toLowerCase(), "?w=48&h=48");
    }
}
exports.liquidationsIconUrl = liquidationsIconUrl;
function liquidationsIconPaletteUrl(symbol) {
    return "".concat(constants_1.ICONS_PALETTE_CDN, "/protocols/").concat(symbol.toLowerCase());
}
exports.liquidationsIconPaletteUrl = liquidationsIconPaletteUrl;
function peggedAssetIconUrl(name) {
    return "".concat(constants_1.ICONS_CDN, "/pegged/").concat(encodeURIComponent(name.toLowerCase().split(' ').join('-')), "?w=48&h=48");
}
exports.peggedAssetIconUrl = peggedAssetIconUrl;
function peggedAssetIconPalleteUrl(name) {
    return "".concat(constants_1.ICONS_PALETTE_CDN, "/pegged/").concat(encodeURIComponent(name.toLowerCase().split(' ').join('-')));
}
exports.peggedAssetIconPalleteUrl = peggedAssetIconPalleteUrl;
function formattedPercent(percent, noSign, fontWeight) {
    if (noSign === void 0) { noSign = false; }
    if (fontWeight === void 0) { fontWeight = 400; }
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
        return ((0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ as: "span", fontWeight: fontWeight }, { children: "0%" })));
    }
    if (percent < 0.0001 && percent > 0) {
        return ((0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ as: "span", fontWeight: fontWeight, color: up }, { children: '< 0.0001%' })));
    }
    if (percent < 0 && percent > -0.0001) {
        return ((0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ as: "span", fontWeight: fontWeight, color: down }, { children: '< 0.0001%' })));
    }
    var fixedPercent = percent.toFixed(2);
    if (fixedPercent === '0.00') {
        return '0%';
    }
    var prefix = noSign ? '' : '+';
    if (fixedPercent > 0) {
        if (fixedPercent > 100) {
            return ((0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ as: "span", fontWeight: fontWeight, color: up }, { children: "".concat(prefix).concat(percent === null || percent === void 0 ? void 0 : percent.toFixed(0).toLocaleString(), "%") })));
        }
        else {
            return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ as: "span", fontWeight: fontWeight, color: up }, { children: "".concat(prefix).concat(fixedPercent, "%") }));
        }
    }
    else {
        return (0, jsx_runtime_1.jsx)(rebass_1.Text, __assign({ as: "span", fontWeight: fontWeight, color: down }, { children: "".concat(fixedPercent, "%") }));
    }
}
exports.formattedPercent = formattedPercent;
/**
 * get standard percent change between two values
 * @param {*} valueNow
 * @param {*} value24HoursAgo
 */
var getPercentChange = function (valueNow, value24HoursAgo) {
    var adjustedPercentChange = ((parseFloat(valueNow) - parseFloat(value24HoursAgo)) / parseFloat(value24HoursAgo)) * 100;
    if (isNaN(adjustedPercentChange) || !isFinite(adjustedPercentChange)) {
        return null;
    }
    return adjustedPercentChange;
};
exports.getPercentChange = getPercentChange;
var capitalizeFirstLetter = function (word) { return word.charAt(0).toUpperCase() + word.slice(1); };
exports.capitalizeFirstLetter = capitalizeFirstLetter;
var standardizeProtocolName = function (tokenName) {
    if (tokenName === void 0) { tokenName = ''; }
    return tokenName.toLowerCase().split(' ').join('-').split("'").join('');
};
exports.standardizeProtocolName = standardizeProtocolName;
exports.slug = exports.standardizeProtocolName;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
exports.getRandomColor = getRandomColor;
function selectColor(number, color) {
    var hue = number * 137.508; // use golden angle approximation
    var _a = (0, colord_1.colord)(color).toHsl(), h = _a.h, s = _a.s, l = _a.l, a = _a.a;
    return (0, colord_1.colord)({
        h: h + hue,
        s: number !== 0 && l < 70 ? 70 : s,
        l: number !== 0 && l < 60 ? 60 : l,
        a: number !== 0 && a < 0.6 ? 1 : a
    }).toHex();
}
exports.selectColor = selectColor;
var deriveColors = function (color, index, length) {
    var _a = (0, colord_1.colord)(color).toLch(), l = _a.l, c = _a.c, h = _a.h;
    return (0, colord_1.colord)({
        l: l + (index / (length + 1)) * 30,
        c: c + (index / (length + 1)) * 20,
        h: h + (index / (length + 1)) * 360
    }).toHex();
};
exports.deriveColors = deriveColors;
var getColorFromNumber = function (index, length) {
    //use defillama blue as starting
    return (0, colord_1.colord)({
        l: 48.792 + (index / (length + 1)) * 30,
        c: 67 + (index / (length + 1)) * 20,
        h: 278.2 + (index / (length + 1)) * 360
    }).toHex();
};
exports.getColorFromNumber = getColorFromNumber;
var getDominancePercent = function (value, total) {
    if (!value || !total) {
        return 0;
    }
    var ratio = total > 0 ? value / total : 0;
    return Number((ratio * 100).toFixed(2));
};
exports.getDominancePercent = getDominancePercent;
var getTokenDominance = function (topToken, totalVolume) {
    var dominance = topToken.tvl && totalVolume && (topToken.tvl / totalVolume) * 100.0;
    if (dominance < 100) {
        return dominance.toFixed(2);
    }
    else
        return 100;
};
exports.getTokenDominance = getTokenDominance;
var getPeggedDominance = function (topToken, totalMcap) {
    if (topToken && totalMcap) {
        var dominance = topToken.mcap && totalMcap && (topToken.mcap / totalMcap) * 100.0;
        if (dominance < 100) {
            return dominance.toFixed(2);
        }
        else
            return 100;
    }
    else
        return null;
};
exports.getPeggedDominance = getPeggedDominance;
/**
 * get tvl of specified day before last day using chart data
 * @param {*} chartData
 * @param {*} daysBefore
 */
var getPrevTvlFromChart = function (chart, daysBefore) {
    var _a, _b;
    return (_b = (_a = chart[chart.length - 1 - daysBefore]) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : null;
};
exports.getPrevTvlFromChart = getPrevTvlFromChart;
var getPrevTvlFromChart2 = function (chart, daysBefore, key) {
    var _a, _b;
    return (_b = (_a = chart[chart.length - 1 - daysBefore]) === null || _a === void 0 ? void 0 : _a[key]) !== null && _b !== void 0 ? _b : null;
};
exports.getPrevTvlFromChart2 = getPrevTvlFromChart2;
var getPrevPeggedTotalFromChart = function (chart, daysBefore, issuanceType, pegType) {
    var _a, _b;
    if (pegType === void 0) { pegType = ''; }
    var prevChart = chart[chart.length - 1 - daysBefore];
    if (!prevChart)
        return null;
    if (!pegType)
        return Object.values(prevChart === null || prevChart === void 0 ? void 0 : prevChart[issuanceType]).reduce(function (a, b) { return a + b; });
    return (_b = (_a = prevChart === null || prevChart === void 0 ? void 0 : prevChart[issuanceType]) === null || _a === void 0 ? void 0 : _a[pegType]) !== null && _b !== void 0 ? _b : null;
};
exports.getPrevPeggedTotalFromChart = getPrevPeggedTotalFromChart;
var getPrevVolumeFromChart = function (chart, daysBefore, txs, inflows) {
    if (txs === void 0) { txs = false; }
    if (inflows === void 0) { inflows = false; }
    var prevChart = chart[chart.length - 1 - daysBefore];
    if (!prevChart)
        return null;
    if (inflows) {
        return prevChart.Deposits - prevChart.Withdrawals;
    }
    return txs ? prevChart.txs : prevChart.volume;
};
exports.getPrevVolumeFromChart = getPrevVolumeFromChart;
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
exports.download = download;
function nearestUtc(dateString) {
    var date = new Date(dateString);
    if (date.getUTCHours() >= 12) {
        date.setDate(date.getDate() + 1);
    }
    date.setUTCHours(0, 0, 0, 0);
    return Date.now() < date.getTime() ? Date.now() : date.getTime();
}
exports.nearestUtc = nearestUtc;
