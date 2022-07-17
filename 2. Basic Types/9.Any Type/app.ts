// json may come from a third-party API
let json: any = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
json = typeof json !== "object" ? JSON.parse(json) : json;
console.log(typeof json);
console.log(json);
console.log(json.x); // undefined : since the "json" variable type is any' and not 'object'

let result: any;
result = 10.123;
console.log(result.toFixed()); // "result" is 'number' type and 'toFixed()' method is usable for "result"
// result.willExist();
// TypeScript compiler doesn’t issue any warning even the willExist() method doesn’t exist at compile time,
// because the willExist() method might available at runtime.
