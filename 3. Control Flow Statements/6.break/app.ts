let products = [
  { name: "phone", price: 700 },
  { name: "tablet", price: 900 },
  { name: "laptop", price: 1200 },
];

for (var i = 0; i < products.length; i++) {
  if (products[i].price == 900)
    // once the product's price is 900 it will break out of the for loop
    // NOTE: since index is var type variable and var gets hoisted,
    // we won't lose 'i' value after the for loop
    break;
}

// show the products
console.log(products[i]);

let discount = 0;
let product = products[1];

switch (product.name) {
  case "phone":
    discount = 5;
    break;
  case "tablet":
    discount = 10;
    break;
  case "laptop":
    discount = 15;
    break;
}
// finishing the codes of each case, once the prgram reaches to'break' keyword,
// it will break out of the switch and the programm will not be checking other cases anymore.

console.log(`There is a ${discount}% on ${product.name}.`);
