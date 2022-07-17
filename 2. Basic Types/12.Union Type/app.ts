let result: number | string;
result = 10; // OK
result = "Hi"; // also OK
// result = false; // a boolean value, cause an Error

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}
console.log(add(1, 2)); // 3
console.log(add("he", "llo")); // "hello"
// console.log(add("he", 2)); // throws an Error
