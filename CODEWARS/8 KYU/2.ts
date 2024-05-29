// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

export function abbrevName(name: string): string {
  // code away
  return name
    .split(" ")
    .map((Name) => Name.charAt(0).toUpperCase())
    .join(".");
}

const name = 'yuma nur alfath'

console.log(abbrevName(name));