"use strict";
function compose(functions) {
    return function (x) {
        var result = x;
        for (var i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
}
var fx = compose([function (x) { return x + 1; }, function (x) { return 2 * x; }]);
console.log(fx(4)); // 9
