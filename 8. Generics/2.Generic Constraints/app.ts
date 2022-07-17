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

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
// let person = merge({ name: "John" }, 25);
// compiler Error : Argument of type 'number' is not assignable to parameter of type 'object'.

//      Using type parameters in generic constraints :

// function prop<T, K>(obj: T, key: K) {
//     return obj[key];
// }
// compiler Error : Type 'K' cannot be used to index type 'T'.

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(prop({ name: "John" }, "name")); // "John"
// console.log(prop({ name: "John" }, "age"));
// compiler Error : Argument of type '"age"' is not assignable to parameter of type '"name"'.
