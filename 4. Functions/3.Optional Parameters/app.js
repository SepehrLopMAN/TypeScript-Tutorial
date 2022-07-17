/*
    // In TypeScript, the compiler checks every function call and issues an error in the following cases:
        * The number of arguments is different from the number of parameters specified in the function.
        * The types of arguments are not compatible with the types of function parameters.
*/
function multiply(a, b, c) {
    if (typeof c !== "undefined") {
        // meaning if variable 'c' exists
        // NOTE: if you use the expression if(c) to check if an argument is not initialized,
        // you would find that the empty string or zero would be treated as undefined.
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(2, 3, 4)); // 24
console.log(multiply(2, 3)); // 6
// function multiplys(a: number, b?: number, c: number): number {
//     //...
// }
// compiler Error : A required parameter cannot follow an optional parameter.
