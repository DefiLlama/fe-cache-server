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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementWrapper = exports.ANNOUNCEMENT = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var react_feather_1 = require("react-feather");
var router_1 = require("next/router");
// change 'value' for new announcements
exports.ANNOUNCEMENT = {
    defi: {
        key: 'defi-flag-announcement',
        value: 'defi4'
    },
    yields: {
        key: 'yield-flag-announcement',
        value: 'yield3'
    },
    dexs: {
        key: 'dexs-daily--data-explanation',
        value: 'dexsDailyData'
    },
    fees: {
        key: 'fees-daily--data-explanation',
        value: 'feesDailyData'
    },
    options: {
        key: 'options-daily--data-explanation',
        value: 'optionsDailyData'
    }
};
var getAnnouncementKey = function (router) {
    if (router.pathname.startsWith('/yields'))
        return 'yields';
    else if (router.pathname.startsWith('/dexs'))
        return 'dexs';
    else if (router.pathname.startsWith('/fees'))
        return 'fees';
    else if (router.pathname.startsWith('/options'))
        return 'options';
    else
        return 'defi';
};
function Announcement(_a) {
    var children = _a.children, notCancellable = _a.notCancellable, _b = _a.warning, warning = _b === void 0 ? false : _b;
    var _c = __read(React.useState(1), 2), rerenderKey = _c[0], rerender = _c[1];
    var router = (0, router_1.useRouter)();
    var _d = exports.ANNOUNCEMENT[getAnnouncementKey(router)], key = _d.key, value = _d.value;
    var routeAnnouncementKey = router.pathname + key;
    var routeAnnouncementValue = router.pathname + value;
    var closeAnnouncement = function () {
        localStorage.setItem(routeAnnouncementKey, JSON.stringify({ value: routeAnnouncementValue }));
        rerender(rerenderKey + 1);
    };
    var store = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(routeAnnouncementKey) || '{}') : {};
    if (notCancellable ? false : store.value === routeAnnouncementValue) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(exports.AnnouncementWrapper, __assign({ style: warning ? { backgroundColor: '#41440d' } : {} }, { children: [children, !notCancellable && ((0, jsx_runtime_1.jsx)(Close, __assign({ onClick: closeAnnouncement }, { children: (0, jsx_runtime_1.jsx)(react_feather_1.X, { size: 16 }) })))] })));
}
exports.default = Announcement;
exports.AnnouncementWrapper = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\tpadding: 12px;\n\tfont-size: 0.875rem;\n\tcolor: ", ";\n\tbackground-color: hsl(215deg 79% 51% / 12%);\n\ttext-align: center;\n\tbox-shadow: ", ";\n\tborder-radius: 8px;\n\n\ta {\n\t\tfont-weight: 500;\n\t}\n\n\timg {\n\t\tposition: relative;\n\t\ttop: 2px;\n\t\tleft: 4px;\n\t\tdisplay: inline-block;\n\t}\n"], ["\n\tposition: relative;\n\tpadding: 12px;\n\tfont-size: 0.875rem;\n\tcolor: ", ";\n\tbackground-color: hsl(215deg 79% 51% / 12%);\n\ttext-align: center;\n\tbox-shadow: ", ";\n\tborder-radius: 8px;\n\n\ta {\n\t\tfont-weight: 500;\n\t}\n\n\timg {\n\t\tposition: relative;\n\t\ttop: 2px;\n\t\tleft: 4px;\n\t\tdisplay: inline-block;\n\t}\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.mode === 'dark' ? 'white' : 'black');
}, function (_a) {
    var theme = _a.theme;
    return theme.shadowSm;
});
var Close = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 6px;\n\tbottom: 6px;\n\tright: 12px;\n\tmargin: auto 0;\n\tpadding: 6px 8px;\n\tborder-radius: 12px;\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: hsl(215deg 79% 51% / 24%);\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\ttop: 1px;\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 6px;\n\tbottom: 6px;\n\tright: 12px;\n\tmargin: auto 0;\n\tpadding: 6px 8px;\n\tborder-radius: 12px;\n\t:hover,\n\t:focus-visible {\n\t\tbackground-color: hsl(215deg 79% 51% / 24%);\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\ttop: 1px;\n\t}\n"])));
var templateObject_1, templateObject_2;
