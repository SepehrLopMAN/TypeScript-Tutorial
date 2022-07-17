/*
    function add(a: number | string, b: number | string): number | string {
        if (typeof a === 'number' && typeof b === 'number')
            return a + b;

        if (typeof a === 'string' && typeof b === 'string')
            return a + b;
    }
    // possible but not effective
*/

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("He", "llo!")); // "Hello!"

//      Function overloading with optional parameters :

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
  // if we don't make variable 'c' optional,
  // we will have an Error : This overload signature is not compatible with its implementation signature.
  if (c) return a + b + c;
  return a + b;
}

//          Method overloading :

class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}

let counter = new Counter();

console.log(counter.count(20)); // return an array
console.log(counter.count()); // return a number
