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
exports.useGetBridgesSearchList = void 0;
var React = __importStar(require("react"));
var client_1 = require("../../../api/categories/bridges/client");
var utils_1 = require("../../../utils");
// TODO add bridges chains list
function useGetBridgesSearchList() {
    var _a = (0, client_1.useFetchBridgeList)(), data = _a.data, loading = _a.loading;
    var searchData = React.useMemo(function () {
        var _a, _b;
        return (_b = (_a = data === null || data === void 0 ? void 0 : data.bridges) === null || _a === void 0 ? void 0 : _a.map(function (bridge) { return ({
            route: "/bridge/".concat((0, utils_1.standardizeProtocolName)(bridge.displayName)),
            name: "".concat(bridge.displayName)
        }); })) !== null && _b !== void 0 ? _b : [];
    }, [data]);
    return { data: searchData, loading: loading, error: !data && !loading };
}
exports.useGetBridgesSearchList = useGetBridgesSearchList;
