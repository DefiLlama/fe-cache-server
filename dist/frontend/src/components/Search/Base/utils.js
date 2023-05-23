"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findActiveItem = void 0;
function findActiveItem(combobox) {
    return combobox.items.find(function (item) { return !item.disabled && item.id === combobox.activeId; });
}
exports.findActiveItem = findActiveItem;
