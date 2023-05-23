"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nftOptions = void 0;
var LocalStorage_1 = require("../../../contexts/LocalStorage");
exports.nftOptions = [
    {
        name: 'Display in USD',
        key: LocalStorage_1.NFT_SETTINGS.DISPLAY_USD,
        help: 'Display metrics in USD'
    },
    {
        name: 'Hide last day',
        key: LocalStorage_1.NFT_SETTINGS.HIDE_LAST_DAY,
        help: 'Hide the last day of data'
    }
];
