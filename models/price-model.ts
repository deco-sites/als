type Nullable<T> = T | null;

export const PriceModel = {
  format: (value: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.format(value);
  },
  create: (
    lowPrice?: Nullable<number>,
    highPrice?: Nullable<number>,
  ): string => {
    if (!lowPrice) return "";

    if (lowPrice === highPrice) {
      return PriceModel.format(lowPrice);
    }

    if (!highPrice) return "";

    return `${PriceModel.format(lowPrice)} - ${PriceModel.format(highPrice)}`;
  },
};
