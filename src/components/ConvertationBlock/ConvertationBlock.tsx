import { useRef, useState } from "react";
import { ConvertForm } from "../../models/ConvertForm";
import { BASE_CURRENCY, CURRENCIES } from "../../constants/currencies";
import styles from "./ConvertationBlock.module.scss";
import CurrencyRow from "../CurrencyForm/CurrencyForm";
import useOnCurrencyFormChange from "../../hooks/useOnCurrencyFormChange";

export default function ConvertationBlock(): JSX.Element {
  const ref = useRef<AbortController | null>(null);
  const [from, setFrom] = useState<ConvertForm>({
    amount: "",
    currency: BASE_CURRENCY,
  });
  const [to, setTo] = useState<ConvertForm>({
    amount: "36,29",
    currency: CURRENCIES[0],
  });
  const onFromChange = useOnCurrencyFormChange({
    ref,
    setValue: setFrom,
    setToValue: setTo,
    toCurrency: to.currency,
  });
  const onToChange = useOnCurrencyFormChange({
    ref,
    setValue: setTo,
    setToValue: setFrom,
    toCurrency: from.currency,
  });

  return (
    <div className={styles.wrapper}>
      <h3>CONVERT CURRENCY</h3>
      <div className={styles.converterFormWrapper}>
        <CurrencyRow value={from} onChange={onFromChange} />
        <CurrencyRow value={to} onChange={onToChange} />
      </div>
    </div>
  );
}
