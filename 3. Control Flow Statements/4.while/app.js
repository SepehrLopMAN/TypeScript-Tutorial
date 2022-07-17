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
var counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}
var list = document.querySelector("#list");
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
