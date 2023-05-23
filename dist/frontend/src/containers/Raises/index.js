"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var layout_1 = __importDefault(require("../../layout"));
var react_table_1 = require("@tanstack/react-table");
var styled_components_1 = __importDefault(require("styled-components"));
var ProtocolAndPool_1 = require("../../layout/ProtocolAndPool");
var Medium_1 = require("../../layout/Stats/Medium");
var Large_1 = require("../../layout/Stats/Large");
var Table_1 = __importDefault(require("../../components/Table/Table"));
var columns_1 = require("../../components/Table/Defi/columns");
var Announcement_1 = require("../../components/Announcement");
var Filters_1 = require("../../components/Filters");
var router_1 = require("next/router");
var link_1 = __importDefault(require("next/link"));
var components_1 = require("../../components");
var utils_1 = require("../../utils");
var useWindowSize_1 = __importDefault(require("../../hooks/useWindowSize"));
var shared_1 = require("../../components/Table/shared");
var BarChart = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../../components/ECharts/BarChart')); }); }, {
    ssr: false
});
var columnResizeMode = 'onChange';
function RaisesTable(_a) {
    var raises = _a.raises, downloadCsv = _a.downloadCsv;
    var _b = __read(React.useState([]), 2), columnFilters = _b[0], setColumnFilters = _b[1];
    var _c = __read(React.useState([{ desc: true, id: 'date' }]), 2), sorting = _c[0], setSorting = _c[1];
    var _d = __read(React.useState([]), 2), columnOrder = _d[0], setColumnOrder = _d[1];
    var windowSize = (0, useWindowSize_1.default)();
    var instance = (0, react_table_1.useReactTable)({
        data: raises,
        columns: columns_1.raisesColumns,
        columnResizeMode: columnResizeMode,
        state: {
            columnFilters: columnFilters,
            columnOrder: columnOrder,
            sorting: sorting
        },
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)()
    });
    React.useEffect(function () {
        var _a, _b;
        var defaultOrder = instance.getAllLeafColumns().map(function (d) { return d.id; });
        var order = windowSize.width
            ? (_b = (_a = columns_1.raisesColumnOrders.find(function (_a) {
                var _b = __read(_a, 1), size = _b[0];
                return windowSize.width > size;
            })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : defaultOrder
            : defaultOrder;
        instance.setColumnOrder(order);
    }, [windowSize, instance]);
    var _e = __read(React.useState(''), 2), projectName = _e[0], setProjectName = _e[1];
    React.useEffect(function () {
        var projectsColumns = instance.getColumn('name');
        var id = setTimeout(function () {
            projectsColumns.setFilterValue(projectName);
        }, 200);
        return function () { return clearTimeout(id); };
    }, [projectName, instance]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(shared_1.TableFiltersWithInput, { children: [(0, jsx_runtime_1.jsx)(shared_1.SearchIcon, { size: 16 }), (0, jsx_runtime_1.jsx)("input", { value: projectName, onChange: function (e) {
                            setProjectName(e.target.value);
                        }, placeholder: "Search projects..." }), (0, jsx_runtime_1.jsxs)(exports.DownloadButton, __assign({ onClick: downloadCsv }, { children: [(0, jsx_runtime_1.jsx)(components_1.DownloadIcon, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.csv" })] })), (0, jsx_runtime_1.jsx)(link_1.default, __assign({ href: "https://api.llama.fi/raises", target: "_blank" }, { children: (0, jsx_runtime_1.jsxs)(exports.DownloadButton, { children: [(0, jsx_runtime_1.jsx)(components_1.DownloadIcon, {}), (0, jsx_runtime_1.jsx)("span", { children: "\u00A0\u00A0.json" })] }) }))] }), (0, jsx_runtime_1.jsx)(Table_1.default, { instance: instance, columnResizeMode: columnResizeMode })] }));
}
exports.DownloadButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-size: 0.875rem;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: ", ";\n\tpadding: 4px 6px;\n\tborder-radius: 6px;\n"], ["\n\tfont-size: 0.875rem;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: ", ";\n\tpadding: 4px 6px;\n\tborder-radius: 6px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
var RaisesContainer = function (_a) {
    var raises = _a.raises, investors = _a.investors, rounds = _a.rounds, sectors = _a.sectors, chains = _a.chains, investorName = _a.investorName, monthlyInvestment = _a.monthlyInvestment;
    var _b = (0, router_1.useRouter)(), pathname = _b.pathname, query = _b.query;
    var investor = query.investor, round = query.round, sector = query.sector, chain = query.chain, minRaised = query.minRaised, maxRaised = query.maxRaised;
    var _c = React.useMemo(function () {
        var selectedInvestors = [];
        var selectedRounds = [];
        var selectedSectors = [];
        var selectedChains = [];
        if (investor) {
            if (typeof investor === 'string') {
                selectedInvestors = investor === 'All' ? __spreadArray([], __read(investors), false) : investor === 'None' ? [] : [investor];
            }
            else {
                selectedInvestors = __spreadArray([], __read(investor), false);
            }
        }
        else
            selectedInvestors = __spreadArray([], __read(investors), false);
        if (round) {
            if (typeof round === 'string') {
                selectedRounds = round === 'All' ? __spreadArray([], __read(rounds), false) : round === 'None' ? [] : [round];
            }
            else {
                selectedRounds = __spreadArray([], __read(round), false);
            }
        }
        else
            selectedRounds = __spreadArray([], __read(rounds), false);
        if (sector) {
            if (typeof sector === 'string') {
                selectedSectors = sector === 'All' ? __spreadArray([], __read(sectors), false) : sector === 'None' ? [] : [sector];
            }
            else {
                selectedSectors = __spreadArray([], __read(sector), false);
            }
        }
        else
            selectedSectors = __spreadArray([], __read(sectors), false);
        if (chain) {
            if (typeof chain === 'string') {
                selectedChains = chain === 'All' ? __spreadArray([], __read(chains), false) : chain === 'None' ? [] : [chain];
            }
            else {
                selectedChains = __spreadArray([], __read(chain), false);
            }
        }
        else
            selectedChains = __spreadArray([], __read(chains), false);
        var minimumAmountRaised = typeof minRaised === 'string' && !Number.isNaN(Number(minRaised)) ? Number(minRaised) : 0;
        var maximumAmountRaised = typeof maxRaised === 'string' && !Number.isNaN(Number(maxRaised)) ? Number(maxRaised) : 0;
        var isValidTvlRange = !!minimumAmountRaised || !!maximumAmountRaised;
        var filteredRaisesList = raises.filter(function (raise) {
            var toFilter = true;
            if (selectedInvestors.length !== investors.length) {
                if (raise.leadInvestors.length === 0 && raise.otherInvestors.length === 0) {
                    return false;
                }
                var isAnInvestor_1 = false;
                raise.leadInvestors.forEach(function (lead) {
                    if (selectedInvestors.includes(lead)) {
                        isAnInvestor_1 = true;
                    }
                });
                raise.otherInvestors.forEach(function (otherInv) {
                    if (selectedInvestors.includes(otherInv)) {
                        isAnInvestor_1 = true;
                    }
                });
                // filter if investor is in either leadInvestors or otherInvestors
                if (!isAnInvestor_1) {
                    toFilter = false;
                }
            }
            if (selectedChains.length !== chains.length) {
                // filter raises with no chains
                if (raise.chains.length === 0) {
                    toFilter = false;
                }
                else {
                    var raiseIncludesChain_1 = false;
                    raise.chains.forEach(function (chain) {
                        if (selectedChains.includes(chain)) {
                            raiseIncludesChain_1 = true;
                        }
                    });
                    if (!raiseIncludesChain_1) {
                        toFilter = false;
                    }
                }
            }
            if (selectedRounds.length !== rounds.length) {
                // filter raises with no round
                if (!raise.round || raise.round === '') {
                    toFilter = false;
                }
                else {
                    if (!selectedRounds.includes(raise.round)) {
                        toFilter = false;
                    }
                }
            }
            if (selectedSectors.length !== sectors.length) {
                // filter raises with no sector
                if (!raise.category || raise.category === '') {
                    toFilter = false;
                }
                else {
                    if (!selectedSectors.includes(raise.category)) {
                        toFilter = false;
                    }
                }
            }
            var raisedAmount = raise.amount ? Number(raise.amount) * 1000000 : 0;
            var isInRange = (minimumAmountRaised ? raisedAmount >= minimumAmountRaised : true) &&
                (maximumAmountRaised ? raisedAmount <= maximumAmountRaised : true);
            if (isValidTvlRange && !isInRange) {
                toFilter = false;
            }
            return toFilter;
        });
        return { selectedInvestors: selectedInvestors, selectedChains: selectedChains, selectedRounds: selectedRounds, selectedSectors: selectedSectors, filteredRaisesList: filteredRaisesList };
    }, [investor, investors, round, rounds, sector, sectors, chain, chains, raises, minRaised, maxRaised]), filteredRaisesList = _c.filteredRaisesList, selectedInvestors = _c.selectedInvestors, selectedRounds = _c.selectedRounds, selectedChains = _c.selectedChains, selectedSectors = _c.selectedSectors;
    // prepare csv data
    var downloadCsv = function () {
        var rows = [
            [
                'Name',
                'Timestamp',
                'Date',
                'Amount Raised',
                'Round',
                'Description',
                'Lead Investor',
                'Category',
                'Source',
                'Valuation',
                'Chains',
                'Other Investors'
            ]
        ];
        var removeJumps = function (text) {
            return typeof text === 'string' ? '"' + text.replaceAll('\n', '').replaceAll('"', "'") + '"' : text;
        };
        raises
            .sort(function (a, b) { return b.date - a.date; })
            .forEach(function (item) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            rows.push([
                item.name,
                item.date,
                (0, utils_1.toNiceCsvDate)(item.date),
                item.amount === null ? '' : item.amount * 1000000,
                (_a = item.round) !== null && _a !== void 0 ? _a : '',
                (_b = item.sector) !== null && _b !== void 0 ? _b : '',
                (_d = (_c = item.leadInvestors) === null || _c === void 0 ? void 0 : _c.join(' + ')) !== null && _d !== void 0 ? _d : '',
                (_e = item.category) !== null && _e !== void 0 ? _e : '',
                (_f = item.source) !== null && _f !== void 0 ? _f : '',
                (_g = item.valuation) !== null && _g !== void 0 ? _g : '',
                (_j = (_h = item.chains) === null || _h === void 0 ? void 0 : _h.join(' + ')) !== null && _j !== void 0 ? _j : '',
                (_l = (_k = item.otherInvestors) === null || _k === void 0 ? void 0 : _k.join(' + ')) !== null && _l !== void 0 ? _l : ''
            ].map(removeJumps));
        });
        (0, utils_1.download)("raises.csv", rows.map(function (r) { return r.join(','); }).join('\n'));
    };
    var totalAmountRaised = monthlyInvestment.reduce(function (acc, curr) { return (acc += curr[1]); }, 0);
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, __assign({ title: "Raises - DefiLlama", defaultSEO: true }, { children: [(0, jsx_runtime_1.jsxs)(Announcement_1.AnnouncementWrapper, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Are we missing any funding round?" }), ' ', (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://airtable.com/shrON6sFMgyFGulaq", style: { color: '#2f80ed' }, target: "_blank", rel: "noopener noreferrer" }, { children: "Add it here!" }))] }), (0, jsx_runtime_1.jsx)(Filters_1.RaisesFilters, { header: investorName ? "".concat(investorName, " raises") : 'Raises', rounds: rounds, selectedRounds: selectedRounds, sectors: sectors, selectedSectors: selectedSectors, investors: investors, selectedInvestors: selectedInvestors, chains: chains, selectedChains: selectedChains, pathname: pathname }), (0, jsx_runtime_1.jsxs)(Medium_1.StatsSection, { children: [(0, jsx_runtime_1.jsxs)(ProtocolAndPool_1.DetailsWrapper, { children: [(0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Total Funding Rounds" }), (0, jsx_runtime_1.jsx)("span", { children: filteredRaisesList.length })] }), (0, jsx_runtime_1.jsxs)(Large_1.Stat, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Total Funding Amount" }), (0, jsx_runtime_1.jsxs)("span", { children: ["$", (0, utils_1.formattedNum)(totalAmountRaised)] })] })] }), (0, jsx_runtime_1.jsx)(ProtocolAndPool_1.ChartWrapper, { children: (0, jsx_runtime_1.jsx)(BarChart, { chartData: monthlyInvestment, title: "Monthly sum", valueSymbol: "$" }) })] }), (0, jsx_runtime_1.jsx)(RaisesTable, { raises: filteredRaisesList, downloadCsv: downloadCsv })] })));
};
exports.default = RaisesContainer;
var templateObject_1;
