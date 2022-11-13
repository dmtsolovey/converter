import styles from "./Header.module.scss";
import Currency from "./Currency/Currency";
import useLatestRates from "../../hooks/useLatestRates";
import { BASE_CURRENCY, CURRENCIES } from "../../constants/currencies";

export default function Header(): JSX.Element {
  const rates = useLatestRates(BASE_CURRENCY, CURRENCIES);

  return (
    <div className={styles.wrapper}>
      <a href="/">
        <img
          src="/images/convert.svg"
          alt="convert_image"
          width={60}
          height={60}
        />
      </a>

      <div className={styles.currencyRateWrapper}>
        {CURRENCIES.map((symbol) => {
          return (
            <Currency
              key={symbol}
              base={BASE_CURRENCY}
              symbol={symbol}
              rate={rates[symbol]}
            />
          );
        })}
      </div>
    </div>
  );
}
