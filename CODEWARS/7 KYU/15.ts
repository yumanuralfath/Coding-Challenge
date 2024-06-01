function printerError(s: string) {
  const success = s
    .split("")
    .sort()
    .filter((n) => n <= "m")
    .join("").length;
  return `${s.length - success}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm"));
