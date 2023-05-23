"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protocolsAndChainsOptions = void 0;
var LocalStorage_1 = require("../../../contexts/LocalStorage");
exports.protocolsAndChainsOptions = [
    {
        name: 'Staking',
        key: LocalStorage_1.DEFI_SETTINGS.STAKING,
        help: 'Include governance tokens staked in the protocol'
    },
    {
        name: 'Pool2',
        key: LocalStorage_1.DEFI_SETTINGS.POOL2,
        help: 'Include staked lp tokens where one of the coins in the pair is the governance token'
    },
    {
        name: 'Borrows',
        key: LocalStorage_1.DEFI_SETTINGS.BORROWED,
        help: 'Include borrowed coins in lending protocols'
    },
    {
        name: 'Double Count',
        key: LocalStorage_1.DEFI_SETTINGS.DOUBLE_COUNT,
        help: 'Include TVL of protocols which TVL feeds into another protocol'
    },
    {
        name: 'Liquid Staking',
        key: LocalStorage_1.DEFI_SETTINGS.LIQUID_STAKING,
        help: 'Include Rewards/Liquidity for staked assets'
    },
    {
        name: 'Vesting',
        key: LocalStorage_1.DEFI_SETTINGS.VESTING
    }
];
