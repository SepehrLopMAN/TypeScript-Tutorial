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
var Stack = /** @class */ (function () {
  function Stack(size) {
    this.size = size;
    this.elements = [];
  }
  Stack.prototype.isEmpty = function () {
    return this.elements.length === 0;
  };
  Stack.prototype.isFull = function () {
    return this.elements.length === this.size;
  };
  Stack.prototype.push = function (element) {
    if (this.isFull()) {
      throw new Error("The stack is overflow!");
    }
    this.elements.push(element);
  };
  Stack.prototype.pop = function () {
    if (this.isEmpty()) {
      throw new Error("The stack is empty!");
    }
    return this.elements.pop();
  };
  return Stack;
})();
var numbers = new Stack(5);
function randBetween(max, min) {
  if (max === void 0) {
    max = 10;
  }
  if (min === void 0) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
while (!numbers.isFull()) {
  var n = randBetween(1, 10);
  console.log("Push ".concat(n, " into the stack."));
  numbers.push(n);
}
console.log(numbers);
while (!numbers.isEmpty()) {
  var n = numbers.pop();
  console.log("Pop ".concat(n, " from the stack."));
}
console.log(numbers);
var words = "The quick brown fox jumps over the lazy dog".split(" ");
var wordStack = new Stack(words.length);
// push words into the stack
words.forEach(function (word) {
  return wordStack.push(word);
});
// pop words from the stack
while (!wordStack.isEmpty()) {
  console.log(wordStack.pop());
}
