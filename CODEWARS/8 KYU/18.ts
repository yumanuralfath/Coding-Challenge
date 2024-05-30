// const digitize = (n: number): number[] => {
//   return n.toString().split("").map(Number).reverse();
// };

//atau dengan cara ini

const digitize = (n: number): number[] => {
  return [...n.toString()].map(Number).reverse();
};

console.log(digitize(134124));
