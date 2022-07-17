/*
    // In TypeScript, rest parameters follow these rules:
        * A function has only one rest parameter.
        * The rest parameter appears last in the parameter list.
        * The type of the rest parameter is an array type.
    //
     
    function fn(...rest: type[]) {
        //...
    }
*/
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return (total += num); });
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
