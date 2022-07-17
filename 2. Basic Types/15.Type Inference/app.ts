//      Basic type inference :
/*
    // both will be assigned to the 'number' type:
        * let counter: number;
        * let counter = 0;
*/
let counter: number = 0;
function setCounter(max = 100) {
  // type of 'max' will be assigned to 'number'
  // ...
}

function increment(counter: number) {
  // return type of the function will be assigned to 'number'
  return counter++;
}
// same as using function increment(counter: number) : number {
// return counter++;
// }

//      The best common type algorithm :

// let items = [1, 2, 3, null];  in this case, TypeScript selects 'number[]' as the best common type.
// let items = [0, 1, null, 'Hi'];
// in this case, TypeScript will infer the type an array of numbers and strings: (number | string)[]

// ** When TypeScript cannot find the best common type, it returns the union array type. **

let arr = [new Date(), new RegExp("d+")]; // TypeScript infers the type for 'arr' to be (RegExp | Date)[]

//      Contextual typing :
document.addEventListener("click", function (event) {
  console.log(event.button); // "event" is instance of 'MouseEvent' since "click" is 'MouseEvent' type, OK!
});

// document.addEventListener("scroll", function (event) {
//   console.log(event.button); // compiler Error : Property 'button' does not exist on type 'Event'.
//   // since "event" is not instance of 'MouseEvent', "button" property is not useable on "event"
// });

/*
 * Type annotations -> You explicitly tell TypeScript the type
 * Type inference -> TypeScript guesses the type
 */
