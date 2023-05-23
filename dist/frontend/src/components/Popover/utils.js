"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetPopoverStyles = exports.applyMobileStyles = exports.assignStyle = void 0;
var react_1 = require("react");
var hooks_1 = require("../../hooks");
function assignStyle(element, style) {
    if (!element)
        return function () { };
    var previousStyle = element.style.cssText;
    Object.assign(element.style, style);
    var restorePreviousStyle = function () {
        element.style.cssText = previousStyle;
    };
    return restorePreviousStyle;
}
exports.assignStyle = assignStyle;
function applyMobileStyles(popover, arrow) {
    var restorePopoverStyle = assignStyle(popover, {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        top: 'unset'
    });
    var restoreArrowStyle = assignStyle(arrow, { display: 'none' });
    var restoreDesktopStyles = function () {
        restorePopoverStyle();
        restoreArrowStyle();
    };
    return restoreDesktopStyles;
}
exports.applyMobileStyles = applyMobileStyles;
function useSetPopoverStyles() {
    var isLarge = (0, hooks_1.useMedia)('(min-width: 640px)', true);
    var renderCallback = (0, react_1.useCallback)(function (props) {
        var popover = props.popover, defaultRenderCallback = props.defaultRenderCallback;
        if (isLarge)
            return defaultRenderCallback();
        return applyMobileStyles(popover);
    }, [isLarge]);
    return [isLarge, renderCallback];
}
exports.useSetPopoverStyles = useSetPopoverStyles;
