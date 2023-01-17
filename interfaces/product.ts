type Nullable<T> = T | null;

export interface Image {
  label?: Nullable<string>;
  url: string;
}
export interface Product {
  title: string;
  description: string;
  rating: number;
  image: Image;
  images: Image[];
  price?: Nullable<string>;
  percentageDiscount?: Nullable<number>;
  priceWithDiscount?: Nullable<string>;
}
