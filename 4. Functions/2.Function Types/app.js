/*
 * (parameter: type, parameter:type,...) => type
 */
// let add: (x: number, y: number) => number;
var add = function (x, y) {
    return x + y;
};
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2)); // 3
