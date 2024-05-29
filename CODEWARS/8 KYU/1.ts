// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

export function invert(array: number[]): number[] {
  return array.map((num) => -(num))
}

const Arr = [1, 2, -3, 4, 5]
console.log(invert(Arr));