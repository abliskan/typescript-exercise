"use strict";
exports.__esModule = true;
exports.Module1 = void 0;
// modules - exporting modules
var Module1 = /** @class */ (function () {
    function Module1() {
    }
    Module1.prototype.print = function () {
        localPrint("Module.print() called");
    };
    return Module1;
}());
exports.Module1 = Module1;
function localPrint(text) {
    console.log("localPrint: ".concat(text));
}
