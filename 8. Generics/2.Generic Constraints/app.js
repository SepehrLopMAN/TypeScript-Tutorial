/**
 *  function merge<U, V>(obj1: U, obj2: V) {
 *      return {
 *      ...obj1,
 *      ...obj2,
 *      };
 *  }
 *
 *  let person = merge(
 *      { name: 'John' },
 *      25
 *  );
  
 # works fine -> { name: 'John' }
*/
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
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// let person = merge({ name: "John" }, 25);
// compiler Error : Argument of type 'number' is not assignable to parameter of type 'object'.
//      Using type parameters in generic constraints :
// function prop<T, K>(obj: T, key: K) {
//     return obj[key];
// }
// compiler Error : Type 'K' cannot be used to index type 'T'.
function prop(obj, key) {
    return obj[key];
}
console.log(prop({ name: "John" }, "name")); // "John"
// console.log(prop({ name: "John" }, "age"));
// compiler Error : Argument of type '"age"' is not assignable to parameter of type '"name"'.
