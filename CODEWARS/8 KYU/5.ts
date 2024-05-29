// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

export function positiveSum(arr: number[]): any {
  return arr
    .filter((x) => x >= 0)
    .map((x) => x)
    .reduce((a, b) => a + b);
}

const num = [1, -4, 7, 12];
console.log(positiveSum(num));
