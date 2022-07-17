// let input = document.querySelector('input["type="text"]');
// console.log(input.value); // compiler Error : Property 'value' does not exist on type 'Element'.
// The reason is that the 'value' property doesn’t exist in the "Element" type.
// It only exists on the "HTMLInputElement" type.

// let input = document.querySelector('input[type="text"]') as HTMLInputElement;
let input = <HTMLInputElement>document.querySelector('input[type="text"]');
// each version works prefectly fine

console.log(input.value);

let inp = document.querySelector('input[type="text"]');
let enteredText = (inp as HTMLInputElement).value;

let elem: HTMLElement;
elem = new HTMLInputElement(); // possible since 'HTMLInputElement' extends 'HTMLElement'

// Type casting Syntax:
// let a: typeA;
// let b = a as typeB;

// or by using the <> operator:
// let a: typeA;
// let b = <typeB>a;