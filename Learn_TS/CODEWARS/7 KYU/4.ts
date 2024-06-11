// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.
//
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

class kata4 {
  static highAndLow(numbers: string): string {
    const num = numbers.split(" ").map((num) => +num);
    const sorted = num.sort(function (a, b) {
      return b - a;
    });
    if (sorted.length >= 2) {
      let SlicedArray = [sorted[0], sorted[sorted.length - 1]];
      return SlicedArray.toString().replace(/[,]/g, " ");
    } else {
      return `${numbers} ${numbers}`;
    }
  }
}

console.log(kata4.highAndLow("1 2 3 4 5"));
console.log(kata4.highAndLow("42"));
