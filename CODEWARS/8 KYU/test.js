const test = (arr) => {
  return arr.filter(x => x >= 0)
    .map(x => x )
    .reduce((a, b) => a + b)
}

console.log(test([1, 2, -3, 4, 5]))