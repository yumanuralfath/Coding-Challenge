// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

export const summation = (num: number) => {
  let nilai:number[] = [];
  let total = 0;

  for (let index = 0; index <= num; index++) {
    nilai.push(index);
    total += index;
  }
  return total;
};

console.log(summation(3));