// object type with small letter 'o' :
/*
    The TypeScript object type represents all values that are not in primitive types.
    The following are primitive types in TypeScript:
        * number
        * bigint
        * string
        * boolean
        * null
        * undefined
        * symbol
*/
var employee;
// for specify properties of the employee object explicitly :
// let employee: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };
employee = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Web Developer"
};
console.log(employee);
// The employee object is an object type with a fixed list of properties.
// If you attempt to access a property that doesn’t exist on the employee object, you’ll get an error.
// console.log(employee.a) // Error: Property 'a' does not exist on type 'object'.
// Object type with big letter 'O' :
// Object type describes the functionality of all objects.
var vacant;
// vacant.firstName = "John";
// Errors : Property 'firstName' does not exist on type '{}', Variable 'vacant' is used before being assigned.
vacant = {};
console.log(vacant.toString());
// [object Object]
