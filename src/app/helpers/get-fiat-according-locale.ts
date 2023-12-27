import { FiatCurrencies } from '../enums/fiat-currencies';
import { Locales } from '../enums/locales';

/**
 * Sets the fiat currency according to the locale.
 * @param locale - A {@link Locales} enum value.
 */
export const getFiatAccordingLocale = (locale: Locales): FiatCurrencies => {
  switch (locale) {
    case Locales.en_us:
      return FiatCurrencies.usd;
    case Locales.pt_br:
      return FiatCurrencies.brl;
    case Locales.hi_in:
      return FiatCurrencies.inr;
    default:
      return FiatCurrencies.usd;
  }
};
