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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormatYieldQueryParams = void 0;
var React = __importStar(require("react"));
var router_1 = require("next/router");
var utils_1 = require("../../utils");
var useFormatYieldQueryParams = function (_a) {
    var projectList = _a.projectList, chainList = _a.chainList, categoryList = _a.categoryList, lendingProtocols = _a.lendingProtocols, farmProtocols = _a.farmProtocols;
    var router = (0, router_1.useRouter)();
    var _b = router.query, project = _b.project, lendingProtocol = _b.lendingProtocol, farmProtocol = _b.farmProtocol, chain = _b.chain, token = _b.token, excludeToken = _b.excludeToken, attribute = _b.attribute, category = _b.category;
    return React.useMemo(function () {
        var selectedProjects = [], selectedChains = [], selectedAttributes = [], includeTokens = [], excludeTokens = [], selectedCategories = [], selectedLendingProtocols = [], selectedFarmProtocols = [];
        if (projectList) {
            if (project) {
                if (typeof project === 'string') {
                    selectedProjects = project === 'All' ? projectList.map(function (p) { return (0, utils_1.slug)(p); }) : project === 'None' ? [] : [project];
                }
                else {
                    selectedProjects = __spreadArray([], __read(project), false);
                }
            }
            else
                selectedProjects = projectList.map(function (p) { return (0, utils_1.slug)(p); });
        }
        if (lendingProtocols) {
            if (lendingProtocol) {
                if (typeof lendingProtocol === 'string') {
                    selectedLendingProtocols =
                        lendingProtocol === 'All'
                            ? lendingProtocols.map(function (p) { return (0, utils_1.slug)(p); })
                            : lendingProtocol === 'None'
                                ? []
                                : [lendingProtocol];
                }
                else {
                    selectedLendingProtocols = __spreadArray([], __read(lendingProtocol), false);
                }
            }
            else
                selectedLendingProtocols = lendingProtocols.map(function (p) { return (0, utils_1.slug)(p); });
        }
        if (farmProtocols) {
            if (farmProtocol) {
                if (typeof farmProtocol === 'string') {
                    selectedFarmProtocols =
                        farmProtocol === 'All' ? farmProtocols.map(function (p) { return (0, utils_1.slug)(p); }) : farmProtocol === 'None' ? [] : [farmProtocol];
                }
                else {
                    selectedFarmProtocols = __spreadArray([], __read(farmProtocol), false);
                }
            }
            else
                selectedFarmProtocols = farmProtocols.map(function (p) { return (0, utils_1.slug)(p); });
        }
        if (categoryList) {
            if (category) {
                if (typeof category === 'string') {
                    selectedCategories = category === 'All' ? __spreadArray([], __read(categoryList), false) : category === 'None' ? [] : [category];
                }
                else {
                    selectedCategories = __spreadArray([], __read(category), false);
                }
            }
            else
                selectedCategories = __spreadArray([], __read(categoryList), false);
        }
        if (chainList) {
            if (chain) {
                if (typeof chain === 'string') {
                    selectedChains = chain === 'All' ? __spreadArray([], __read(chainList), false) : chain === 'None' ? [] : [chain];
                }
                else {
                    selectedChains = __spreadArray([], __read(chain), false);
                }
            }
            else
                selectedChains = __spreadArray([], __read(chainList), false);
        }
        if (attribute) {
            if (typeof attribute === 'string') {
                selectedAttributes = [attribute];
            }
            else {
                selectedAttributes = __spreadArray([], __read(attribute), false);
            }
        }
        if (token) {
            if (typeof token === 'string') {
                includeTokens = [token];
            }
            else {
                includeTokens = __spreadArray([], __read(token), false);
            }
        }
        if (excludeToken) {
            if (typeof excludeToken === 'string') {
                excludeTokens = [excludeToken];
            }
            else {
                excludeTokens = __spreadArray([], __read(excludeToken), false);
            }
        }
        return {
            selectedProjects: selectedProjects,
            selectedChains: selectedChains,
            selectedAttributes: selectedAttributes,
            includeTokens: includeTokens,
            excludeTokens: excludeTokens,
            selectedCategories: selectedCategories,
            selectedLendingProtocols: selectedLendingProtocols,
            selectedFarmProtocols: selectedFarmProtocols
        };
    }, [
        attribute,
        chain,
        project,
        token,
        excludeToken,
        category,
        projectList,
        chainList,
        categoryList,
        lendingProtocols,
        farmProtocols,
        lendingProtocol,
        farmProtocol
    ]);
};
exports.useFormatYieldQueryParams = useFormatYieldQueryParams;
