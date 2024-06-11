export function squareSum(numbers: number[]): any {
  return numbers.map((num) => num * num).reduce((acc, e) => acc + e, 0);
}

console.log(squareSum([0, 3, 4, 5]));

//output
// squareSum([0,3,4,5]) //return 50
