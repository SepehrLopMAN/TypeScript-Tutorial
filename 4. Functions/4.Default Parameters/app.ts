/*
 *  function name(parameter1=defaultValue1,...) {
 *      // do something
 *  }
 */

function applyDiscount(price: number, discount: number = 0.05) {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
console.log(applyDiscount(100, 0.2)); // 80

// let promotion: (price: number, discount: number = 0.05) => number;
// compiler Error : A parameter initializer is only allowed in a function or constructor implementation.
