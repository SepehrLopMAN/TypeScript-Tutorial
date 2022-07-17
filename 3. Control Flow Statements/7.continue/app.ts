for (let index = 0; index < 9; index++) {
  // if index is odd, skip it
  if (index % 2) continue;

  console.log(index);
}

let index = -1;

while (index < 9) {
  index++;

  // if index is odd, skip it
  if (index % 2) continue;

  console.log(index);
}

index = -1;

do {
  index += 1;

  if (index % 2) continue;
  console.log(index);
} while (index < 9);

// all the loops above will skip the odd numbers and log the event numbers to the console
