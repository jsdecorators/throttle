"use strict";
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
var lodash_throttle_1 = __importDefault(require("lodash.throttle"));
/**
 * A decorator returns a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds (or once per browser frame). The throttled function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 * @param {number} [wait=0]
 *  The number of milliseconds to throttle invocations to; if omitted,
 *  `requestAnimationFrame` is used (if available).
 * @param {ThrottleSettings} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 * import throttle from '@jsdecorators/throttle';
 *
 * class MyClass {
 *   @throttle(100)
 *   func() {
 *     // this function would be called every 100ms
 *   }
 * }
 */
function default_1(wait, options) {
    if (options === void 0) { options = {}; }
    return function (target, name, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function () {
                Object.defineProperty(this, name, __assign(__assign({}, descriptor), { value: lodash_throttle_1.default(descriptor.value, wait, options) }));
                return this[name];
            },
            set: function (value) {
                if (descriptor.set) {
                    descriptor.set.call(this, value);
                }
                else {
                    this[name] = value;
                }
            },
        };
    };
}
exports.default = default_1;
