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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockExplorerForAddress = exports.getBlockExplorerForTx = void 0;
var __1 = require("..");
var blockExplorersTxs = {
    ethereum: ['https://etherscan.io/tx/', 'Etherscan'],
    bsc: ['https://bscscan.com/tx/', 'Bscscan'],
    xdai: ['https://gnosisscan.io/tx/', 'GnosisScan'],
    avax: ['https://snowtrace.io/tx/', 'Snowtrace'],
    fantom: ['https://ftmscan.com/tx/', 'FTMscan'],
    heco: ['https://hecoinfo.com/tx/', 'HecoInfo'],
    polygon: ['https://polygonscan.com/tx/', 'PolygonScan'],
    solana: ['https://solscan.io/tx/', 'Solscan'],
    arbitrum: ['https://arbiscan.io/tx/', 'Arbiscan'],
    optimism: ['https://optimistic.etherscan.io/tx/', 'Optimism Explorer'],
    aurora: ['https://aurorascan.dev/tx/', 'AuroraScan'],
    celo: ['https://explorer.celo.org/mainnet/tx/', 'Celo Explorer'],
    klaytn: ['https://scope.klaytn.com/tx/, Klaytn Scope']
};
var blockExplorersAddresses = {
    ethereum: ['https://etherscan.io/address/', 'Etherscan'],
    bsc: ['https://bscscan.com/address/', 'Bscscan'],
    xdai: ['https://gnosisscan.io/address/', 'GnosisScan'],
    avax: ['https://snowtrace.io/address/', 'Snowtrace'],
    fantom: ['https://ftmscan.com/address/', 'FTMscan'],
    heco: ['https://hecoinfo.com/address/', 'HecoInfo'],
    polygon: ['https://polygonscan.com/address/', 'PolygonScan'],
    solana: ['https://solscan.io/address/', 'Solscan'],
    arbitrum: ['https://arbiscan.io/address/', 'Arbiscan'],
    optimism: ['https://optimistic.etherscan.io/address/', 'Optimism Explorer'],
    aurora: ['https://aurorascan.dev/address/', 'AuroraScan'],
    celo: ['https://explorer.celo.org/mainnet/address/', 'Celo Explorer'],
    klaytn: ['https://scope.klaytn.com/account/, Klaytn Scope']
};
var getBlockExplorerForTx = function (txHash) {
    if (txHash === void 0) { txHash = ''; }
    var blockExplorerLink, blockExplorerName;
    if (txHash === null || txHash === void 0 ? void 0 : txHash.includes(':')) {
        var _a = __read(txHash.split(':'), 2), chain = _a[0], chainHash = _a[1];
        var explorer = blockExplorersTxs[chain];
        if (explorer !== undefined) {
            blockExplorerLink = explorer[0] + chainHash;
            blockExplorerName = explorer[1];
        }
    }
    else {
        if (typeof txHash === 'string' && txHash !== '') {
            blockExplorerLink = 'https://etherscan.io/tx/' + txHash;
            blockExplorerName = 'Etherscan';
        }
    }
    return {
        blockExplorerLink: blockExplorerLink,
        blockExplorerName: blockExplorerName
    };
};
exports.getBlockExplorerForTx = getBlockExplorerForTx;
var getBlockExplorerForAddress = function (txHash) {
    if (txHash === void 0) { txHash = ''; }
    var blockExplorerLink, blockExplorerName, chainName;
    if (txHash === null || txHash === void 0 ? void 0 : txHash.includes(':')) {
        var _a = __read(txHash.split(':'), 2), chain = _a[0], chainHash = _a[1];
        var explorer = blockExplorersAddresses[chain];
        if (explorer !== undefined) {
            blockExplorerLink = explorer[0] + chainHash;
            blockExplorerName = explorer[1];
        }
        chainName = chain
            ? chain
                .split('_')
                .map(function (x) { return (0, __1.capitalizeFirstLetter)(x); })
                .join(' ')
            : 'Ethereum';
    }
    else {
        if (typeof txHash === 'string' && txHash !== '') {
            blockExplorerLink = 'https://etherscan.io/address/' + txHash;
            blockExplorerName = 'Etherscan';
            chainName = 'Ethereum';
        }
    }
    return {
        blockExplorerLink: blockExplorerLink,
        blockExplorerName: blockExplorerName,
        chainName: chainName
    };
};
exports.getBlockExplorerForAddress = getBlockExplorerForAddress;
