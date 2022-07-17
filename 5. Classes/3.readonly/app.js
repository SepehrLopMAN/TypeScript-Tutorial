/*
    // The assignment to a readonly property can only occur in one of two places:
        * In the property declaration.
        * In the constructor of the same class.
*/
var Person = /** @class */ (function () {
    //   readonly birthDate: Date; // immutable
    //   constructor(birthDate: Date) {
    // this.birthDate = birthDate;
    // }
    function Person(birthDate) {
        this.birthDate = birthDate;
        this.birthDate = birthDate;
    }
    return Person;
}());
var person = new Person(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25);
// Compile Error : Cannot assign to 'birthDate' because it is a read-only property.
console.log(person.birthDate);
