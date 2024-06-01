function findShort(s: string): number {
  const ArrayNum = s.split(" ").map((n) => n.length);
  let MinNumber = ArrayNum[0];

  for (let i = 0; i < ArrayNum.length; i++) {
    if (ArrayNum[i] < MinNumber) {
      MinNumber = ArrayNum[i];
    }
  }
  return MinNumber;
}

console.log(findShort("Yuma Nur Alfath"));
