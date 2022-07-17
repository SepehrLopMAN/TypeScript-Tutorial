/*
 *  abstract class Employee {
 *      //...
 *  }
 */
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
// let employee = new Employee('John','Doe');
// compiler Error : Cannot create an instance of an abstract class.
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    // defining 'getSalary()' method in the "FullTimeEmploee" class
    getSalary() {
        return this.salary;
    }
}
class Contractor extends Employee {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    // defining 'getSalary()' method in the "Contractor" class
    getSalary() {
        return this.rate * this.hours;
    }
}
let john = new FullTimeEmployee("John", "Doe", 12000);
let jane = new Contractor("Jane", "Doe", 100, 160);
console.log(john.compensationStatement()); // "John Doe makes 12000 a month."
console.log(jane.compensationStatement()); // "Jane Doe makes 16000 a month."
