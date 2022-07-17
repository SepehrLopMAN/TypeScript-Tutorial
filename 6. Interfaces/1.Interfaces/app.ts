//      standard form :
// interface Person {
//   firstName: string;
//   lastName: string;
// }

//      using an Optional propertie:
interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}
function getFullName(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}

let john: Person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(getFullName(john)); // "John Doe"

let jane = {
  firstName: "Jane",
  middleName: "K.",
  lastName: "Doe",
  age: 22,
};

console.log(getFullName(jane)); // "Jane K. Doe"

//      Readonly properties :
interface User {
  readonly id: number;
  username: string;
}

let user: User;
user = {
  id: 1,
  username: "John_Doe",
};
// user.id = 10; // compiler Error : Cannot assign to 'id' because it is a read-only property.

//      Function type :

interface StringFormat {
  (str: string, isUpper: boolean): string;
}
let format: StringFormat;

format = function (str: string, upper: boolean): string {
  return upper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format("hi", true)); // "HI"

let lowerCase: StringFormat;
lowerCase = function (str: string): string {
  return str.toLowerCase();
};

console.log(lowerCase("Hi", false)); // works perfectly fine -> output: hi
// console.log(lowerCase("Hi")); // compiler Error : An argument for 'isUpper' was not provided.

//      Class Types :
interface Json {
  toJson(): string;
}

class person implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}
let ted = new person("Ted", "mosby");
console.log(ted.toJson()); // '{"firstName":"Ted","lastName":"mosby"}'
