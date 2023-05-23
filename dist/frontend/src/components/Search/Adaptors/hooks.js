"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetAdaptorsSearchList = void 0;
var React = __importStar(require("react"));
var client_1 = require("../../../api/categories/adaptors/client");
var utils_1 = require("../../../utils");
function useGetAdaptorsSearchList(type, onlyChains) {
    var _a = (0, client_1.useFetchAdaptorsList)(type), data = _a.data, loading = _a.loading;
    var searchData = React.useMemo(function () {
        var _a;
        var list = (_a = (onlyChains === true ? data === null || data === void 0 ? void 0 : data.allChains.map(function (chain) { return ({ name: chain }); }) : data === null || data === void 0 ? void 0 : data.protocols)) !== null && _a !== void 0 ? _a : [];
        var urlPrefix = onlyChains === true ? "/".concat(type, "/chain") : "/".concat(type);
        var iconUrl = onlyChains === true ? utils_1.chainIconUrl : utils_1.tokenIconUrl;
        return list.map(function (asset) { return ({
            logo: iconUrl(asset.name),
            route: "".concat(urlPrefix, "/").concat((0, utils_1.standardizeProtocolName)(asset.name)),
            name: asset.name
        }); });
    }, [data, onlyChains, type]);
    return { data: searchData, loading: loading, error: !data && !loading };
}
exports.useGetAdaptorsSearchList = useGetAdaptorsSearchList;
