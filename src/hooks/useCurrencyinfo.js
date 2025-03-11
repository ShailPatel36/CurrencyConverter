import { useState, useEffect } from "react";

export function useCurrencyInfo(baseCurrency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    // Fetch currency data from an API or use static data
    const fetchCurrencyInfo = async () => {
      // Example API call
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      const data = await response.json();
      setCurrencyInfo(data.rates);
    };

    fetchCurrencyInfo();
  }, [baseCurrency]);

  return currencyInfo;
}
