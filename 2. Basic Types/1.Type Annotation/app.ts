let Name: string = "John";
let age: number = 25;
let active: boolean = true;

// let array: _TYPE OF THE ELEMENTS OF ARRAY_[];
let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];

// Objects
let person: {
  name: string;
  age: number;
};

person = {
  name: "John",
  age: 25,
};

// Function arguments & return types

let greeting: (name: string) => string;
// type of _name_ argument is 'string' and the function returns 'string' type variable

/*
  
 *  greeting = function () {
 *      console.log('Hello');
 *  };
 * // Error: Type '() => void' is not assignable to type '(name: string) => string'.
 * // Type 'void' is not assignable to type 'string'.

*/

greeting = function (name: string) {
  return `Hi ${name}`;
};

console.log(greeting(person.name));
// Hi John
