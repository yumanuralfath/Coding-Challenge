export default function isSquare(n: number): boolean {
  const kuadrat = Math.sqrt(n);
  return typeof kuadrat === "number" && Math.floor(kuadrat) === kuadrat;
}
