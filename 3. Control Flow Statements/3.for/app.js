/*
 *  for(initialization; condition; expression) {
 *      statement
 *  }
 */
// for(;;) {
//     // INFINITY LOOP
// }
// for(initialization; condition; expression);
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
    // 'i' is block-scope variable and will be deleted after the loop finishes
}
// console.log(i); // compiler Error : Cannot find name 'i'.
var i = 0;
for (; i < 10; i++) {
    console.log(i);
}
// 'i' is accessible out of the loop.
console.log(i); // 11
for (var i_2 = 0;; i_2++) {
    console.log(i_2);
    if (i_2 >= 9)
        break;
}
i = 0;
for (;;) {
    console.log(i);
    i++;
    if (i > 9)
        break;
}
// all for loops will have the same output
