for (var index_1 = 0; index_1 < 9; index_1++) {
    // if index is odd, skip it
    if (index_1 % 2)
        continue;
    console.log(index_1);
}
var index = -1;
while (index < 9) {
    index++;
    // if index is odd, skip it
    if (index % 2)
        continue;
    console.log(index);
}
index = -1;
do {
    index += 1;
    if (index % 2)
        continue;
    console.log(index);
} while (index < 9);
// all the loops above will skip the odd numbers and log the event numbers to the console
