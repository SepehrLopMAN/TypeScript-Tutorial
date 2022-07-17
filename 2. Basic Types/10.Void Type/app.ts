function log(message: any): void {
  console.log(message);
}

// if you use the void type for a variable, you can only assign undefined to that variable.
let useless: void = undefined;
// useless = null; // OK if --strictNullChecks is not specified
