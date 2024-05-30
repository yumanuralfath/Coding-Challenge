export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.filter((sheep) => sheep === true).length;
}

console.log(countSheeps([true, false, true, true, false]));
