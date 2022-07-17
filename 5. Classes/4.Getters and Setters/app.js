class Person {
    // creating 'age' getter/setter property for private propery '_age'
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error("The age is invalid");
        }
        this._age = theAge;
    }
    // creating 'firstName' getter/setter property for private propery '_firstName'
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirstName) {
        if (!theFirstName) {
            throw new Error("Invalid first name.");
        }
        this._firstName = theFirstName;
    }
    // creating 'lastName' getter/setter property for private propery '_lastName'
    get lastName() {
        return this._lastName;
    }
    set lastName(theLastName) {
        if (!theLastName) {
            throw new Error("Invalid last name.");
        }
        this._lastName = theLastName;
    }
    // creating 'fullName' getter/setter property for private properies '_firstName' & '_lastName'
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        let parts = name.split(" ");
        if (parts.length != 2) {
            throw new Error("Invalid name format: first last");
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person();
person.fullName = "John Doe";
console.log(person.fullName); // "John Doe" , (via property call)
console.log(person.getFullName()); // "John Doe" , (via method call)
person.age = 25;
console.log(person.age); // 25
