class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }
  // Method overriding
  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}.`;
  }
}
let employee = new Employee("John", "Doe", "Web Developer");

console.log(employee.getFullName()); // "John Doe"
console.log(employee.describe()); // "This is John Doe.I'm a Web Developer."
