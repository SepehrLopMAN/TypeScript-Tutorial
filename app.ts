// let unknown: any;
// unknown = "known";
// console.log(typeof unknown);
// unknown = [];
// console.log(typeof unknown);
// let txt: string = unknown;
// console.log(typeof txt);
// console.log(txt);

//_____________________________________________________________

// class A {
//   public a = "Class A";
// }
// class B {
//   public b = "Class B";
// }
// function isA(inp: any): inp is A {
//   return inp instanceof A;
// }

// function test(inp: any): string {
//   if (isA(inp)) return inp.a;
//   else return inp.b;
// }

// const a: any = {};
// console.group(test(a));

//_______________________________________________

// let a: any = {};
// console.log(a.a);

// let a: unknown = {};
// console.log(a.a);

// __________________________________________

// as unknown as _TYPE_ ???
// console.log(1 as unknown as string);
