"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// adapted from https://usehooks.com/useKeyPress/
function useKeyPress(targetKey, handler) {
    // Add event listeners
    (0, react_1.useEffect)(function () {
        // If pressed key is our target key then set to true
        function downHandler(_a) {
            var key = _a.key;
            if (key === targetKey) {
                handler();
            }
        }
        window.addEventListener('keydown', downHandler);
        // Remove event listeners on cleanup
        return function () {
            window.removeEventListener('keydown', downHandler);
        };
    }, [targetKey, handler]); // Empty array ensures that effect is only run on mount and unmount
}
exports.default = useKeyPress;
