export const getCurrencyRepresentation = (data: { asset: string; isFiat: boolean }): string => {
  if (data.isFiat) {
    return `/assets/images/flags/${data.asset}.webp`;
  }
  return `/assets/images/crypto-currencies/${data.asset}.svg`;
};
