/*
    function add(a: number | string, b: number | string): number | string {
        if (typeof a === 'number' && typeof b === 'number')
            return a + b;

        if (typeof a === 'string' && typeof b === 'string')
            return a + b;
    }
    // possible but not effective
*/
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // 3
console.log(add("He", "llo!")); // "Hello!"
function sum(a, b, c) {
    // if we don't make variable 'c' optional,
    // we will have an Error : This overload signature is not compatible with its implementation signature.
    if (c)
        return a + b + c;
    return a + b;
}
//          Method overloading :
var Counter = /** @class */ (function () {
    function Counter() {
        this.current = 0;
    }
    Counter.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Counter;
}());
var counter = new Counter();
console.log(counter.count(20)); // return an array
console.log(counter.count()); // return a number
