function sumTwoSmallestNumbers(Numbers) {
  Numbers.sort((a, b) => a - b)
  return (Numbers[0] + Numbers[1])
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));