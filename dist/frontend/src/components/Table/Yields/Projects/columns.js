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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("../../../../utils");
var Name_1 = require("../Name");
var Tooltip_1 = __importDefault(require("../../../../components/Tooltip"));
var styled_components_1 = __importDefault(require("styled-components"));
var Airdrop = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 24px;\n\tmargin-left: auto;\n"], ["\n\twidth: 24px;\n\tmargin-left: auto;\n"])));
exports.columns = [
    {
        header: 'Project',
        accessorKey: 'name',
        enableSorting: false,
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(Name_1.YieldsProject, { project: getValue(), projectslug: (0, utils_1.slug)(getValue()) });
        }
    },
    {
        header: 'Airdrop',
        accessorKey: 'airdrop',
        cell: function (_a) {
            var getValue = _a.getValue;
            if (!getValue()) {
                return null;
            }
            return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ content: "This project has no token and might airdrop one to depositors in the future" }, { children: (0, jsx_runtime_1.jsx)(Airdrop, { children: "\uD83E\uDE82" }) })));
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Category',
        accessorKey: 'category',
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Pools',
        accessorKey: 'protocols',
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Combined TVL',
        accessorKey: 'tvl',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: '$' + (0, utils_1.formattedNum)(getValue()) });
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Audits',
        accessorKey: 'audits',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getValue() ? 'Yes' : 'No' });
        },
        meta: {
            align: 'end'
        }
    },
    {
        header: 'Median APY',
        accessorKey: 'medianApy',
        cell: function (_a) {
            var getValue = _a.getValue;
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.formattedPercent)(getValue(), true) });
        },
        meta: {
            align: 'end'
        }
    }
];
var templateObject_1;
