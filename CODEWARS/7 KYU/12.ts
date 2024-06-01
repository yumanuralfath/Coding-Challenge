class Kata {
  static dnaStrand(dna: string): string {
    return dna
      .split("")
      .map((n) => {
        return n === "T"
          ? "A"
          : n === "A"
          ? "T"
          : n === "C"
          ? "G"
          : n === "G"
          ? "C"
          : n;
      })
      .join("");
  }
}

console.log(Kata.dnaStrand("ATTGC"));
