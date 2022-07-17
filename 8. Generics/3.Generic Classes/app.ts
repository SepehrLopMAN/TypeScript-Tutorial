/**

 # Generic class :
     *  class className<T>{
     *      //...
     *  }

 # Multiple generic types :
     *  class className<K,T>{
     *      //...
     *  }

 # Generic constraints :
     *  class className<T extends TypeA>{
     *      //...
     *  }

*/

// Stack Data Structure :

class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void | never {
    if (this.isFull()) {
      throw new Error("The stack is overflow!");
    }
    this.elements.push(element);
  }
  pop(): T | undefined | never {
    if (this.isEmpty()) {
      throw new Error("The stack is empty!");
    }
    return this.elements.pop();
  }
}

let numbers = new Stack<number>(5);

function randBetween(max: number = 10, min: number = 0): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

while (!numbers.isFull()) {
  let n = randBetween(1, 10);
  console.log(`Push ${n} into the stack.`);
  numbers.push(n);
}

console.log(numbers);

while (!numbers.isEmpty()) {
  let n = numbers.pop();
  console.log(`Pop ${n} from the stack.`);
}
console.log(numbers);

let words = "The quick brown fox jumps over the lazy dog".split(" ");

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach((word) => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
  console.log(wordStack.pop());
}
