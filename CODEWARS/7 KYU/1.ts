// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

class Kata {
  static getCount(str: string): number {
    const vowels = ["a", "e", "i", "o", "u"];
    return str.split("").filter((string) => vowels.includes(string)).length;
  }
}

console.log(Kata.getCount("yuma"));
