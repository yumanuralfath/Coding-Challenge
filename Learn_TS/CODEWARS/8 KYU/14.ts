export function findSmallestInt(args: number[]): number {
  return Math.min(...args);
}

console.log(findSmallestInt([20, 3, 10, 7, 9]));
