class Person {
  //   private ssn: string | number; // The private modifier limits the visibility to the same-class only
  //   protected firstName: string;
  //   protected lastName: string;
  // The protected modifier allows properties and methods
  // of a class to be accessible within same class and within subclasses.

  //   constructor(ssn: string | number, firstName: string, lastName: string) // possible to use also
  constructor(
    protected ssn: string | number,
    private firstName: string,
    private lastName: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName(): string {
    // The public modifier allows class properties and methods to be accessible from all locations.
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("153-07-3130", "John", "Doe");
// console.log(person.ssn);
// compile Error : Property 'ssn' is private and only accessible within class 'Person'.
console.log(person.getFullName());
