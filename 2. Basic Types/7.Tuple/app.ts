/*
    A tuple works like an array with some additional considerations: 
        * The number of elements in the tuple is fixed.
        * The types of elements are known, and need not be the same.
 */
let skill: [string, number];
skill = ["Programming", 5];
// skill = [5, "Programming"];
// Error : Type 'number' is not assignable to type 'string', Type 'string' is not assignable to type 'number'.
let color: [number, number, number] = [255, 0, 0]; // (r,g,b)

// Using Optional Tuple Elements (since TypeScript 3.0,)
let color2: [number, number, number, number?] = [0, 255, 255, 0.5]; // (r,g,b,a)
