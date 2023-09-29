export const getLastSevenDaysDate = (defaultLocale: string): Array<string>  => {
    return Array.from({ length: 7 }, (_iteratable, index) => {
        const date = new Date();
        date.setDate(date.getDate() - index);
        return date.toLocaleDateString(defaultLocale, { day: 'numeric', month: 'short' });
    })
  };
