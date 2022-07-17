// number -> floating-point values

let price: number;
price = 9.95;

let bin: number = 0b1010; // binary format -> 0b... , 0B...
let oct: number = 0o12; // octal format -> 0o... , 0O...
let hexadecimal: number = 0xa; // hexadecimal format -> 0x... , 0X...

console.log(price);
console.log(bin);
console.log(oct);
console.log(hexadecimal);

// bigint -> numbers larger than 2^53 – 1

let big: bigint = 9007199254740991n;
// Big integer literals have the 'n' character at the end of an integer literal
console.log(big);
