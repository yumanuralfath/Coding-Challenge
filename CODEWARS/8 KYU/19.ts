// Introduction
// The first century spans from the year 1 up to and including the year 100,
// the second century - from the year 101 up to and including the year 200, etc.
//
// Task
// Given a year, return the century it is in.
//
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Note: this kata uses strict construction as shown in the
// description and the examples, you can read more about it here

const centuryFromYear = (year: number): number => {
  let result;
  year - (100 * result - 99);
  return result;
};

console.log(centuryFromYear(2012));
