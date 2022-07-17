let box;
console.log(typeof box); // undefined

box = "Hello";
console.log(typeof box); // string

box = 100;
console.log(typeof box); // number

/*

 * function getProduct(id) {
 *   return {
 *     id: id,
 *     name: `Awesome Gadget ${id}`,
 *     price: 99.5,
 *   };
 * }
 * const product = getProduct(1);
 * console.log(`The product ${product.Name} costs $${product.price}`);
 * // The product undefined costs $99.5
 
*/

interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}

const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs ${price}$.`);
};

const product = getProduct(1);
showProduct(product.name, product.price);
// The product Awesome Gadget 1 costs 99.5$.
