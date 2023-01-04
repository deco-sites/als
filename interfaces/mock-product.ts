export interface MockProduct {
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  percentageDiscount?: number;
  priceWithDiscount?: number;
}
