/*    syntax -> "expression as targetType" or "<targetType>expression"    */
function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$".concat(netPrice) : netPrice;
}
var netPrice;
netPrice = getNetPrice(100, 0.05, true);
console.log(typeof netPrice); // string
console.log(netPrice); // "$95"
netPrice = getNetPrice(100, 0.05, false);
console.log(typeof netPrice); // number
console.log(netPrice); // 95
