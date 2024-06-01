// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

export function solution(str: string, ending: string): boolean {
  if (str.charAt(str.length - 1) === ending.charAt(ending.length - 1)) {
    return true;
  }
  if (str === "" || ending === "") {
    return true;
  } else {
    return false;
  }
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution("abc", ""));
