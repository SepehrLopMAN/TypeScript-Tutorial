/*
 *  while(condition) {
 *      // do something
 *  }
 *
 *  while(condition) {
 *      // do something
 *      // ...
 *
 *      if(anotherCondition)
 *          break;
 *  }
 */

let counter: number = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
}
let list = document.querySelector("#list");

while (list.firstChild) {
  list.removeChild(list.firstChild);
}
