//      standard form :
// interface Person {
//   firstName: string;
//   lastName: string;
// }
function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var john = {
    firstName: "John",
    lastName: "Doe"
};
console.log(getFullName(john)); // "John Doe"
var jane = {
    firstName: "Jane",
    middleName: "K.",
    lastName: "Doe",
    age: 22
};
console.log(getFullName(jane)); // "Jane K. Doe"
var user;
user = {
    id: 1,
    username: "John_Doe"
};
var format;
format = function (str, upper) {
    return upper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("hi", true)); // "HI"
var lowerCase;
lowerCase = function (str) {
    return str.toLowerCase();
};
console.log(lowerCase("Hi", false)); // works perfectly fine -> output: hi
var person = /** @class */ (function () {
    function person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    person.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return person;
}());
var ted = new person("Ted", "mosby");
console.log(ted.toJson()); // '{"firstName":"Ted","lastName":"mosby"}'
