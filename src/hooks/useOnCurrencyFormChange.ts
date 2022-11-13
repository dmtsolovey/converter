import { MutableRefObject, useCallback } from "react";
import Exchange from "../api/Exchange";
import { ConvertForm } from "../models/ConvertForm";

interface Options {
  toCurrency: string;
  setValue: (value: ConvertForm) => void;
  setToValue: (value: ConvertForm) => void;
  ref: MutableRefObject<AbortController | null>;
}
export default function useOnCurrencyFormChange({
  toCurrency,
  setToValue,
  setValue,
  ref,
}: Options): (value: ConvertForm) => Promise<void> {
  return useCallback(
    async (value: ConvertForm) => {
      setValue(value);
      if (ref.current) {
        ref.current.abort();
      }
      ref.current = new AbortController();
      const amount = value.amount
        ? await Exchange.convert(
            value.currency,
            toCurrency,
            value.amount,
            ref.current?.signal
          )
        : "";
      setToValue({ currency: toCurrency, amount });
    },
    [toCurrency, setValue, setToValue, ref]
  );
}
