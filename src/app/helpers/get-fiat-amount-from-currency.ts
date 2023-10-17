export const getFiatAmountFromCurrency = (data: {
  fiatRate: number;
  currencyPrice: number;
  amount: number;
}): number => {
  const { fiatRate, currencyPrice, amount } = data;
  const fiatCurrencyValue = amount * fiatRate * currencyPrice;
  return Number(fiatCurrencyValue.toFixed(8));
};
