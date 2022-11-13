import { useEffect, useState } from "react";
import Exchange from "../api/Exchange";

export default function useLatestRates(
  base: string,
  symbols: string[]
): Record<string, number> {
  const [rates, setRates] = useState<Record<string, number>>({});

  useEffect(() => {
    Exchange.getLatestRates(base, symbols).then(setRates);
  }, [setRates, base, symbols]);

  return rates;
}
