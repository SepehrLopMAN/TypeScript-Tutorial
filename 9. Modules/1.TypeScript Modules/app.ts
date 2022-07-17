import { EmailValidator } from "./EmailValidator";
import type { alphanumeric } from "./Types"; // since TypeScript 3.8
import ZipCodeValidator from "./ZipCodeValidator"; // importing default exported module

// Prior to TypeScript 3.8, you need to use the import statement
// import { alphanumeric } from "./Types";

let s: ZipCodeValidator = new ZipCodeValidator();
console.log(s.isValid("1235")); // false

// Importing everything from a module :
// import * from 'module_name';

let email = "john.doe@typescripttutorial.net";
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result); // true
