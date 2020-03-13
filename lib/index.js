"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var throttle = require("lodash.throttle");
function default_1(wait, options) {
    if (options === void 0) { options = {}; }
    return function (target, name, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function () {
                Object.defineProperty(this, name, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, wait, options)
                });
                return this[name];
            }
        };
    };
}
exports.default = default_1;
