import { ChangeEvent } from "react";
import { ConvertForm } from "../../models/ConvertForm";
import { ALL_CURRENCIES } from "../../constants/currencies";
import styles from "./CurrencyForm.module.scss";

interface CurrencyRowProps {
  value: ConvertForm;
  onChange: (value: ConvertForm) => void;
}

export default function CurrencyRow({
  value,
  onChange,
}: CurrencyRowProps): JSX.Element {
  const onCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange({ amount: value.amount, currency: e.target.value });
  };
  const onAmounChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ amount: e.target.value, currency: value.currency });
  };
  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        value={value.currency}
        onChange={onCurrencyChange}
      >
        {ALL_CURRENCIES.map((symbol) => {
          return (
            <option value={symbol} key={symbol}>
              {symbol}
            </option>
          );
        })}
      </select>
      <input
        className={styles.input}
        min={1}
        type="number"
        value={value.amount}
        onChange={onAmounChange}
      />
    </div>
  );
}
