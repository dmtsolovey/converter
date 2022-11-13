export default function normalizeRates(
  rates: Record<string, number>
): Record<string, number> {
  return Object.keys(rates).reduce((accum, key) => {
    return {
      ...accum,
      [key]: 1 / rates[key],
    };
  }, {} as Record<string, number>);
}
