export const getCurrencyAmountFromFiat = (data: {
  fiatRate: number;
  currencyPrice: number;
  amount: number;
}): number => {
  const { fiatRate, currencyPrice, amount } = data;
  const currencyValue = amount / fiatRate / currencyPrice;
  return Number(currencyValue.toFixed(8));
};
