/*
 *  abstract class Employee {
 *      //...
 *  }
 */

abstract class Employee {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}
// let employee = new Employee('John','Doe');
// compiler Error : Cannot create an instance of an abstract class.

class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  // defining 'getSalary()' method in the "FullTimeEmploee" class
  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }
  // defining 'getSalary()' method in the "Contractor" class
  getSalary(): number {
    return this.rate * this.hours;
  }
}

let john = new FullTimeEmployee("John", "Doe", 12000);
let jane = new Contractor("Jane", "Doe", 100, 160);

console.log(john.compensationStatement()); // "John Doe makes 12000 a month."
console.log(jane.compensationStatement()); // "Jane Doe makes 16000 a month."
