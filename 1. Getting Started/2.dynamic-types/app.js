var box;
console.log(typeof box); // undefined
box = "Hello";
console.log(typeof box); // string
box = 100;
console.log(typeof box); // number
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " costs ").concat(price, "$."));
};
var product = getProduct(1);
showProduct(product.name, product.price);
// The product Awesome Gadget 1 costs 99.5$.
