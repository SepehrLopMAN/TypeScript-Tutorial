/*
 * (parameter: type, parameter:type,...) => type
 */

// let add: (x: number, y: number) => number;

let add: (a: number, b: number) => number = function (x: number, y: number) {
  return x + y;
};

let sum = function (a: number, b: number): number {
  return a + b;
};

console.log(sum(1, 2)); // 3
