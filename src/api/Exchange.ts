import { ConvertResponse } from "../models/ConvertResponse";
import { LatestRates } from "../models/LatestRates";
import normalizeRates from "../utils/normalizeRates";

export default class Exchange {
  static async getLatestRates(
    base: string,
    symbols: string[]
  ): Promise<Record<string, number>> {
    const params = new URLSearchParams({ base, symbols: symbols.join(",") });
    const res = await fetch(`https://api.exchangerate.host/latest?${params}`);
    const data: LatestRates = await res.json();
    return normalizeRates(data.rates);
  }

  static async convert(
    from: string,
    to: string,
    amount: string,
    signal?: AbortSignal
  ): Promise<string> {
    try {
      const params = new URLSearchParams({ from, to, amount });
      const res = await fetch(
        `https://api.exchangerate.host/convert?${params}`,
        {
          signal,
        }
      );
      const data: ConvertResponse = await res.json();
      return data.result.toFixed(2);
    } catch {
      return "";
    }
  }
}