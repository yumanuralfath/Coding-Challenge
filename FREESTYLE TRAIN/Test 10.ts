// type JSONValue =
//   | null
//   | boolean
//   | number
//   | string
//   | JSONValue[]
//   | { [key: string]: JSONValue };
// type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

// function once(fn: Function): OnceFn {
//   let called = false;
//   let result: JSONValue | undefined;
//   return function (...args) {
//     if (!called) {
//       called = true;
//       result = fn(...args);
//       return result;
//     } else {
//       return undefined;
//     }
//   };
// }

// // let fn = (a: number, b: number, c: number) => a + b + c;
// let fn = (...args: JSONValue[]) =>
//   args.reduce(
//     (sum : number, current) => (typeof current === "number" ? sum + current : sum),
//     0
//   );

// let onceFn = once(fn);
// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
