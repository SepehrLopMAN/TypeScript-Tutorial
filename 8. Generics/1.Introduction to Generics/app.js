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
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 5, 7, 4, 2, 9];
var randomEle = getRandomElement(numbers);
console.log(typeof randomEle); // number
console.log(randomEle);
var numbersList = [1, 5, 7, 4, 2, 9];
var randomElem = getRandomElement(numbersList);
console.log(typeof randomElem); // number,
// by type inference both codes work the same,
// (TSC will check the elements of the array that is given as the argument of the function and
// it will infer the type 'T' as 'number' in this case)
console.log(randomElem);
//      Generic functions with multiple types :
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
} // function documentation -> function merge<U, V>(obj1: U, obj2: V): U & V
// Type inference infers the returned value of the merge() function
// as an intersection type of U and V, which is U & V
var result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
// function doc in this case :
/*
 *  function merge<{
 *      name: string;
 *  }, {
 *      jobTitle: string;
 *  }>(obj1: {
 *      name: string;
 *  }, obj2: {
 *      jobTitle: string;
 *  }): {
 *      name: string;
 *  } & {
 *      jobTitle: string;
 *  }
 */
console.log(result); // { name: 'John', jobTitle: 'Frontend Developer' }
/*
    # The following are benefits of TypeScript generics:
        * Leverage type checks at the compile time.
        * Eliminate type castings.
        * Allow you to implement generic algorithms.
*/
