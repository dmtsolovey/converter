import styles from "./Currency.module.scss";

interface CurrencyProps {
  symbol: string;
  rate: number;
  base: string;
}

export default function Currency({
  symbol,
  rate,
  base,
}: CurrencyProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <span className={styles.currencyName}>
        <span className={styles.currencySymbol}>{symbol}</span>/
        <span className={styles.baseCurrency}>{base}</span>
      </span>
      <span>{rate?.toFixed(3)}</span>
    </div>
  );
}
