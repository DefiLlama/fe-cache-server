"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchNftCollectionsList = void 0;
var swr_1 = __importDefault(require("swr"));
var constants_1 = require("../../../constants");
var utils_1 = require("../../../utils");
var useFetchNftCollectionsList = function () {
    var _a = (0, swr_1.default)(constants_1.NFT_COLLECTIONS_API, function () {
        return fetch(constants_1.NFT_COLLECTIONS_API)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            var _a;
            return (_a = data === null || data === void 0 ? void 0 : data.map(function (item) { return ({
                name: item.name,
                symbol: null,
                logo: (0, utils_1.nftCollectionIconUrl)(item.collectionId),
                route: "/nfts/collection/".concat(item.collectionId)
            }); })) !== null && _a !== void 0 ? _a : [];
        })
            .catch(function (err) {
            console.log(err);
            return [];
        });
    }), data = _a.data, error = _a.error;
    return { data: data, error: error, loading: !data && !error, onSearchTermChange: null, onItemClick: null };
};
exports.useFetchNftCollectionsList = useFetchNftCollectionsList;
