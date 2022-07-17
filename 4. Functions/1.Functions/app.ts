/*
 *  function name(parameter: type, parameter:type,...): returnType {
 *      // do something
 *  }
 */

function add(a: number, b: number): number {
  return a + b;
}
// function add(a: number, b: number) {
//     return a + b;
// }
// TypeScript compiler will infer 'number' as the return type of the function in this case.

console.log(add(10, 20)); // 30

function echo(message: string): void {
  console.log(message.toUpperCase());
}

echo("Hello");

// if a function has different branches that return different types,
// the TypeScript compiler may infer the union type or any type.
