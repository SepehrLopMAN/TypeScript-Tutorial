function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers);
console.log(typeof randomEle); // number
console.log(randomEle);

let numbersList = [1, 5, 7, 4, 2, 9];
let randomElem = getRandomElement(numbersList);
console.log(typeof randomElem); // number,
// by type inference both codes work the same,
// (TSC will check the elements of the array that is given as the argument of the function and
// it will infer the type 'T' as 'number' in this case)
console.log(randomElem);

//      Generic functions with multiple types :

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
} // function documentation -> function merge<U, V>(obj1: U, obj2: V): U & V
// Type inference infers the returned value of the merge() function
// as an intersection type of U and V, which is U & V

let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
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
