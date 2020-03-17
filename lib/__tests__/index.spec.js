"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var continuesCall = function (callback, wait) { return setInterval(callback, wait); };
var throttledFunction = jest.fn(function () { return true; });
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.throttledFunction = function () {
        throttledFunction();
    };
    __decorate([
        index_1.default(100)
    ], MyClass.prototype, "throttledFunction", null);
    return MyClass;
}());
it('should to have been called for 20 times', function (done) {
    var myClass = new MyClass();
    continuesCall(myClass.throttledFunction, 10);
    setTimeout(function () {
        expect(throttledFunction).toHaveBeenCalledTimes(20);
        done();
    }, 2e3);
});
