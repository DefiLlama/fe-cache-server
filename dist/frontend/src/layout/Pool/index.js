"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolDetails = exports.ButtonYields = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var ButtonStyled_1 = require("../../components/ButtonStyled");
var ProtocolAndPool_1 = require("../ProtocolAndPool");
exports.ButtonYields = (0, styled_components_1.default)(ButtonStyled_1.ButtonLight)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgap: 4px;\n\talign-items: center;\n\tpadding: 4px 6px;\n\tfont-size: 0.875rem;\n\tfont-weight: 400;\n\twhite-space: nowrap;\n\tfont-family: var(--font-inter);\n\twidth: 24px;\n"], ["\n\tdisplay: flex;\n\tgap: 4px;\n\talign-items: center;\n\tpadding: 4px 6px;\n\tfont-size: 0.875rem;\n\tfont-weight: 400;\n\twhite-space: nowrap;\n\tfont-family: var(--font-inter);\n\twidth: 24px;\n"])));
exports.PoolDetails = (0, styled_components_1.default)(ProtocolAndPool_1.DetailsWrapper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tborder-top-left-radius: 12px;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmax-width: 380px;\n\t}\n"], ["\n\tborder-top-left-radius: 12px;\n\n\t@media screen and (min-width: 80rem) {\n\t\tmax-width: 380px;\n\t}\n"])));
var templateObject_1, templateObject_2;
