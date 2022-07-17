let skills: string[];
skills = ["Problem Sovling", "Software Design", "Programming"];
// skills.push(100); // Error : Argument of type 'number' is not assignable to parameter of type 'string'.
let skill = skills[0];
console.log(typeof skill); // string

let series = [1, 2, 3];
console.log(series.length); // 3
let doubleIt = series.map((e) => e * 2); // forEach(), map(), reduce(), and filter() methods are usable.
console.log(doubleIt); // [2, 4, 6]

let scores = ["Programming", 5, "Software Design", 4];
// let scores: (string | number)[];
// scores = ['Programming', 5, 'Software Design', 4];
console.log(typeof scores); // object
