var Person = /** @class */ (function () {
    //   private ssn: string | number; // The private modifier limits the visibility to the same-class only
    //   protected firstName: string;
    //   protected lastName: string;
    // The protected modifier allows properties and methods
    // of a class to be accessible within same class and within subclasses.
    //   constructor(ssn: string | number, firstName: string, lastName: string) // possible to use also
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        // The public modifier allows class properties and methods to be accessible from all locations.
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person("153-07-3130", "John", "Doe");
// console.log(person.ssn);
// compile Error : Property 'ssn' is private and only accessible within class 'Person'.
console.log(person.getFullName());
