/*
 *  for(initialization; condition; expression) {
 *      statement
 *  }
 */

// for(;;) {
//     // INFINITY LOOP
// }

// for(initialization; condition; expression);

for (let i = 0; i < 10; i++) {
  console.log(i);
  // 'i' is block-scope variable and will be deleted after the loop finishes
}
// console.log(i); // compiler Error : Cannot find name 'i'.
let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
// 'i' is accessible out of the loop.
console.log(i); // 11

for (let i = 0; ; i++) {
  console.log(i);
  if (i >= 9) break;
}
i = 0;
for (;;) {
  console.log(i);
  i++;
  if (i > 9) break;
}

// all for loops will have the same output
