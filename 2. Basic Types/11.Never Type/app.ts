// Typically, you use the never type to represent the return type of a function that always throws an error.

function raiseError(message: string): never {
  throw new Error(message);
}
function reject() {
  // return type of the function is inferred to 'never' type
  return raiseError("Rejected");
}

let loop = function forever() {
  while (true) {
    console.log("Hello");
  }
};
// return type of 'forever()' function is 'never', becuase it contains an indefinite loop.

function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
  // make the function valid
  return neverOccur(); // without this line the function causes an error,
  //  because not all code paths return a value.
}
let neverOccur = () => {
  throw new Error("Never!");
};
