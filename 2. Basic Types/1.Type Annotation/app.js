var Name = "John";
var age = 25;
var active = true;
// let array: _TYPE OF THE ELEMENTS OF ARRAY_[];
var names = ["John", "Jane", "Peter", "David", "Mary"];
// Objects
var person;
person = {
    name: "John",
    age: 25
};
// Function arguments & return types
var greeting;
// type of _name_ argument is 'string' and the function returns 'string' type variable
/*
  
 *  greeting = function () {
 *      console.log('Hello');
 *  };
 * // Error: Type '() => void' is not assignable to type '(name: string) => string'.
 * // Type 'void' is not assignable to type 'string'.

*/
greeting = function (name) {
    return "Hi ".concat(name);
};
console.log(greeting(person.name));
// Hi John
