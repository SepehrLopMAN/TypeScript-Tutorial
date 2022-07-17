/*    syntax -> "expression as targetType" or "<targetType>expression"    */

function getNetPrice(
  price: number,
  discount: number,
  format: boolean
): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}
let netPrice: string | number;
netPrice = getNetPrice(100, 0.05, true) as string;
console.log(typeof netPrice); // string
console.log(netPrice); // "$95"

netPrice = <number>getNetPrice(100, 0.05, false);
console.log(typeof netPrice); // number
console.log(netPrice); // 95
