class Person {
  ssn: string | number;
  firstName: string;
  lastName: string;

  constructor(ssn: string | number, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("171-28-0926", "John", "Doe");
console.log(person.getFullName());
