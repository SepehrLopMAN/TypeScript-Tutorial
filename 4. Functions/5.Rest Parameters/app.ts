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

function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
