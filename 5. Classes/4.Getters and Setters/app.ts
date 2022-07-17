class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  // creating 'age' getter/setter property for private propery '_age'
  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  // creating 'firstName' getter/setter property for private propery '_firstName'
  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error("Invalid first name.");
    }
    this._firstName = theFirstName;
  }

  // creating 'lastName' getter/setter property for private propery '_lastName'
  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error("Invalid last name.");
    }
    this._lastName = theLastName;
  }

  // creating 'fullName' getter/setter property for private properies '_firstName' & '_lastName'
  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public set fullName(name: string) {
    let parts = name.split(" ");
    if (parts.length != 2) {
      throw new Error("Invalid name format: first last");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person();
person.fullName = "John Doe";
console.log(person.fullName); // "John Doe" , (via property call)
console.log(person.getFullName()); // "John Doe" , (via method call)
person.age = 25;
console.log(person.age); // 25
